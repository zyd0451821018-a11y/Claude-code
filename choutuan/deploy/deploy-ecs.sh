#!/bin/bash
# ============================================================
# 丑团 · 阿里云 ECS / 轻量应用服务器一键部署（nginx 静态站）
#
# 前置条件（在你本地机器上）：
#   - 一台阿里云 ECS 或轻量应用服务器（任意最低配都够，纯静态站）
#   - 能 ssh 免密或密码登录
#   - 服务器安全组已放行 80 端口
#
# 用法：
#   ./deploy/deploy-ecs.sh root@<服务器公网IP> [远端目录，默认 /var/www/choutuan]
#
# 示例：
#   ./deploy/deploy-ecs.sh root@47.98.xx.xx
# ============================================================
set -euo pipefail

TARGET="${1:?用法: ./deploy-ecs.sh user@host [远端目录]}"
REMOTE_DIR="${2:-/var/www/choutuan}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

echo "==> 1/4 打包站点文件"
TMP_TGZ=$(mktemp /tmp/choutuan-site.XXXXXX.tar.gz)
tar -czf "$TMP_TGZ" -C "$ROOT" index.html css js img

echo "==> 2/4 上传到 $TARGET:$REMOTE_DIR"
ssh "$TARGET" "mkdir -p '$REMOTE_DIR'"
scp "$TMP_TGZ" "$TARGET:/tmp/choutuan-site.tar.gz"
ssh "$TARGET" "tar -xzf /tmp/choutuan-site.tar.gz -C '$REMOTE_DIR' && rm /tmp/choutuan-site.tar.gz"
rm -f "$TMP_TGZ"

echo "==> 3/4 安装并配置 nginx（已装则只更新配置）"
ssh "$TARGET" bash -s -- "$REMOTE_DIR" <<'REMOTE'
set -e
DIR="$1"
if ! command -v nginx >/dev/null; then
  if command -v apt-get >/dev/null; then apt-get update -qq && apt-get install -y -qq nginx
  elif command -v yum >/dev/null; then yum install -y -q nginx
  fi
fi
cat > /etc/nginx/conf.d/choutuan.conf <<CONF
server {
    listen 80;
    server_name _;
    root $DIR;
    index index.html;

    gzip on;
    gzip_types text/css application/javascript application/json;

    location ~* \.(webp|png|jpg)\$ {
        expires 30d;
        add_header Cache-Control "public";
    }
    location ~* \.(js|css)\$ {
        expires 1d;
    }
    location = /index.html {
        add_header Cache-Control "no-cache";
    }
}
CONF
# 避免默认站点抢占 80 端口
rm -f /etc/nginx/sites-enabled/default 2>/dev/null || true
nginx -t && (systemctl reload nginx 2>/dev/null || systemctl start nginx)
REMOTE

echo "==> 4/4 完成！"
HOST_IP="${TARGET#*@}"
echo
echo "  访问地址: http://$HOST_IP/"
echo "  绑定域名: 将域名 A 记录指向 $HOST_IP，把 nginx 配置里 server_name 改为你的域名"
echo "  加 HTTPS: certbot --nginx -d 你的域名（中国大陆服务器绑域名需 ICP 备案）"
