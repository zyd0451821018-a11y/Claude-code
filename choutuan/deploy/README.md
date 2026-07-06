# 丑团 · 阿里云部署指南

丑团是纯静态站（`index.html` + `css/` + `js/` + `img/`，共约 18MB，无后端、无构建），
任何能托管静态文件的地方都能跑。以下是三种阿里云部署方式，按推荐顺序排列。

## 方式一：ECS / 轻量应用服务器 + Nginx（最省事，推荐）

适合：已有服务器，或愿意花 ¥24/月 买台轻量服务器。公网 IP 直接访问，**无备案要求**。

```bash
# 在你本地机器、仓库根目录执行：
./choutuan/deploy/deploy-ecs.sh root@<服务器公网IP>
```

脚本会自动：打包上传 → 安装/配置 nginx（gzip、图片长缓存）→ 输出访问地址。
之后每次更新重跑同一条命令即可。

## 方式二：OSS 静态网站托管（+ CDN）

适合：不想管服务器、要扛流量。注意：**用自定义域名正式访问需 ICP 备案**（大陆地域）。

```bash
# 1. 安装 ossutil（macOS: brew install ossutil）
# 2. 准备 RAM AccessKey（授予 OSS 权限）
export OSS_ACCESS_KEY_ID=xxx
export OSS_ACCESS_KEY_SECRET=xxx

./choutuan/deploy/deploy-oss.sh choutuan-demo cn-hangzhou
```

脚本会自动：建 bucket → 关闭阻止公共访问 + 公共读 → 配置静态网站托管 →
分层缓存策略上传。完成后控制台绑定自定义域名 / 套 CDN 即为生产形态。

> 提示：OSS 默认域名（`*.aliyuncs.com`）直接打开 HTML 时部分地域会强制下载，
> 这是阿里云的防滥用策略，绑定自定义域名后即正常渲染。

## 方式三：单文件版（零依赖，适合内网/演示）

```bash
node choutuan/tools/build-artifact.js choutuan.html
```

产出一个约 3MB 的自包含 HTML（图片全部内联），丢到任何地方（OSS 单文件、
服务器任意目录、甚至微信发给同事双击打开）都能完整运行。

## 常见问题

- **要备案吗？** 用服务器公网 IP 访问不用；给中国大陆的 OSS/CDN/服务器绑自定义域名要。
- **数据存哪？** 全部在访问者浏览器 localStorage 里，服务端零状态，无需数据库。
- **更新版本？** 改完代码重跑部署脚本即可；`index.html` 设置了 no-cache，用户刷新即得新版。
- **HTTPS？** ECS 方案：`certbot --nginx`；OSS 方案：控制台域名管理里一键申请免费证书。
