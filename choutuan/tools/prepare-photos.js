/* ============================================================
 * 丑团 · prepare-photos.js —— 真实产品照片处理
 * 从素材目录（fetch-photos.sh 拉取的公开仓库图片）按 photo-map.json
 * 裁切为 480×480 智能构图方图，输出 WebP 到 img/
 * 用法：node tools/prepare-photos.js <素材解包目录>
 * ============================================================ */

'use strict';

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const MAP = JSON.parse(fs.readFileSync(path.join(__dirname, 'photo-map.json'), 'utf8'));
const SRC = process.argv[2];
if (!SRC) { console.error('用法: node tools/prepare-photos.js <素材解包目录>'); process.exit(1); }
const OUT = path.join(__dirname, '..', 'img');
fs.mkdirSync(OUT, { recursive: true });

/* 素材文件名在解包目录里被拍平为 <repo>__..._<basename> 形式，按 repo + basename 匹配 */
const files = fs.readdirSync(SRC);
function resolve(ref) {
  const [repo, rel] = ref.split(':');
  const base = rel.split('/').pop();
  const hit = files.find(f => f.startsWith(repo + '__') && f.endsWith('_' + base)) ||
              files.find(f => f.startsWith(repo + '__') && f.endsWith(base));
  if (!hit) throw new Error('找不到素材: ' + ref);
  return path.join(SRC, hit);
}

async function main() {
  const jobs = [];
  const all = Object.assign({}, MAP.products, MAP.shops);
  for (const [key, ref] of Object.entries(all)) {
    const src = resolve(ref);
    jobs.push(
      sharp(src)
        .resize(480, 480, { fit: 'cover', position: sharp.strategy.attention })
        .flatten({ background: '#FFF8EE' }) /* PNG 透明底铺暖白 */
        .webp({ quality: 78 })
        .toFile(path.join(OUT, key + '.webp'))
    );
  }
  await Promise.all(jobs);
  const out = fs.readdirSync(OUT).filter(f => /^p\d{4}\.webp$|^shop_s\d+\.webp$/.test(f));
  const total = out.reduce((s, f) => s + fs.statSync(path.join(OUT, f)).size, 0);
  console.log(`processed ${out.length} photos, total ${(total / 1024).toFixed(0)} KB`);
}

main().catch(e => { console.error(e.message); process.exit(1); });
