/* ============================================================
 * 丑团 · build-artifact.js —— 单文件分发包构建
 * 图片降采样为 240px WebP 内联 data URI（CT_IMG 注入），
 * 输出自包含 HTML 到指定路径
 * 用法：node tools/build-artifact.js <输出.html>
 * ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.join(__dirname, '..');
const OUT = process.argv[2];
if (!OUT) { console.error('用法: node tools/build-artifact.js <输出.html>'); process.exit(1); }

async function main() {
  const css = fs.readFileSync(path.join(ROOT, 'css/style.css'), 'utf8');
  const js = ['js/data.js', 'js/state.js', 'js/views.js', 'js/app.js']
    .map(f => fs.readFileSync(path.join(ROOT, f), 'utf8')).join('\n');

  const imgDir = path.join(ROOT, 'img');
  const files = fs.readdirSync(imgDir).filter(f => f.endsWith('.webp'));
  const imgMap = {};
  const CHUNK = 40;
  for (let i = 0; i < files.length; i += CHUNK) {
    await Promise.all(files.slice(i, i + CHUNK).map(async f => {
      const buf = await sharp(path.join(imgDir, f))
        .resize(144, 144, { fit: 'cover' })
        .webp({ quality: 46 })
        .toBuffer();
      imgMap[f.replace('.webp', '')] = 'data:image/webp;base64,' + buf.toString('base64');
    }));
  }

  const out = `<title>丑团 · 送啥都快</title>
<style>
${css}
/* ---- Artifact 外层地面：随查看者主题变化，手机屏幕本体保持不变 ---- */
:root { --page-ground: #E9E9E9; }
@media (prefers-color-scheme: dark) { :root { --page-ground: #1C1C1E; } }
:root[data-theme='dark'] { --page-ground: #1C1C1E; }
:root[data-theme='light'] { --page-ground: #E9E9E9; }
body { background: var(--page-ground); }
.phone { box-shadow: 0 0 32px rgba(0,0,0,.25); }
</style>
<div class="phone">
  <main id="app"></main>
  <div id="overlay"></div>
  <div id="toast" class="toast"></div>
</div>
<script>
window.CT_IMG = ${JSON.stringify(imgMap)};
${js}
</script>
`;
  fs.writeFileSync(OUT, out);
  console.log('bundled', (out.length / 1048576).toFixed(2), 'MB,', files.length, 'images inlined');
}

main().catch(e => { console.error(e); process.exit(1); });
