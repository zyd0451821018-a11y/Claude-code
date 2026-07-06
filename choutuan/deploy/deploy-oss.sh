#!/bin/bash
# ============================================================
# 丑团 · 阿里云 OSS 静态网站一键部署
#
# 前置条件（在你本地机器上）：
#   1. 安装 ossutil：https://help.aliyun.com/zh/oss/developer-reference/install-ossutil
#      macOS:  brew install ossutil
#      Linux:  curl https://gosspublic.alicdn.com/ossutil/install.sh | sudo bash
#   2. 准备一个有 OSS 权限的 AccessKey（RAM 用户即可）
#
# 用法：
#   export OSS_ACCESS_KEY_ID=你的AccessKeyId
#   export OSS_ACCESS_KEY_SECRET=你的AccessKeySecret
#   ./deploy/deploy-oss.sh <bucket名> [region，默认 cn-hangzhou]
#
# 示例：
#   ./deploy/deploy-oss.sh choutuan-demo cn-shanghai
# ============================================================
set -euo pipefail

BUCKET="${1:?用法: ./deploy-oss.sh <bucket名> [region]}"
REGION="${2:-cn-hangzhou}"
ENDPOINT="oss-${REGION}.aliyuncs.com"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

: "${OSS_ACCESS_KEY_ID:?请先 export OSS_ACCESS_KEY_ID}"
: "${OSS_ACCESS_KEY_SECRET:?请先 export OSS_ACCESS_KEY_SECRET}"

OSSUTIL_ARGS=(-e "$ENDPOINT" -i "$OSS_ACCESS_KEY_ID" -k "$OSS_ACCESS_KEY_SECRET")

echo "==> 1/5 创建 bucket（已存在则跳过）"
ossutil mb "oss://$BUCKET" "${OSSUTIL_ARGS[@]}" --acl public-read 2>/dev/null || echo "    bucket 已存在，继续"

echo "==> 2/5 关闭『阻止公共访问』并设置公共读（静态网站必需）"
ossutil api put-public-access-block --bucket "$BUCKET" --public-access-block-configuration '{"BlockPublicAccess":false}' "${OSSUTIL_ARGS[@]}" 2>/dev/null || true
ossutil set-acl "oss://$BUCKET" public-read -b "${OSSUTIL_ARGS[@]}"

echo "==> 3/5 配置静态网站托管（默认首页 index.html）"
cat > /tmp/choutuan-website.xml <<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<WebsiteConfiguration>
  <IndexDocument><Suffix>index.html</Suffix></IndexDocument>
  <ErrorDocument><Key>index.html</Key></ErrorDocument>
</WebsiteConfiguration>
XML
ossutil website --method put "oss://$BUCKET" /tmp/choutuan-website.xml "${OSSUTIL_ARGS[@]}"

echo "==> 4/5 上传站点文件（图片/JS/CSS 长缓存，HTML 不缓存）"
ossutil cp -r -f "$ROOT/img"  "oss://$BUCKET/img"  --meta "Cache-Control:public,max-age=2592000" "${OSSUTIL_ARGS[@]}"
ossutil cp -r -f "$ROOT/css"  "oss://$BUCKET/css"  --meta "Cache-Control:public,max-age=86400"   "${OSSUTIL_ARGS[@]}"
ossutil cp -r -f "$ROOT/js"   "oss://$BUCKET/js"   --meta "Cache-Control:public,max-age=86400"   "${OSSUTIL_ARGS[@]}"
ossutil cp -f    "$ROOT/index.html" "oss://$BUCKET/index.html" --meta "Cache-Control:no-cache" "${OSSUTIL_ARGS[@]}"

echo "==> 5/5 完成！"
echo
echo "  访问地址（测试用）: https://$BUCKET.$ENDPOINT/index.html"
echo
echo "  ⚠️ 注意："
echo "  - OSS 默认域名直接访问 HTML 时，部分地域会强制下载而非渲染。"
echo "    正式使用请在 OSS 控制台『传输管理→域名管理』绑定自定义域名"
echo "    （中国大陆地域需 ICP 备案），或套一层阿里云 CDN。"
echo "  - 如果只是快速给别人预览，推荐用 deploy-ecs.sh 部署到 ECS/轻量服务器，"
echo "    公网 IP 直接访问，无备案要求。"
