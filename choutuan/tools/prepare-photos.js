/* ============================================================
 * 丑团 · prepare-photos.js —— 真实产品照片批量处理 v2
 * 输入 tools/photo-map.generated.json（gen-catalog.js 产出），
 * 从素材解包目录解析源文件，裁切 480×480 智能构图方图 → img/<key>.webp
 * 用法：node tools/prepare-photos.js <素材解包目录>
 * ============================================================ */

'use strict';

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const MAP = JSON.parse(fs.readFileSync(path.join(__dirname, 'photo-map.generated.json'), 'utf8'));
const SRC = process.argv[2];
if (!SRC) { console.error('用法: node tools/prepare-photos.js <素材解包目录>'); process.exit(1); }
const OUT = path.join(__dirname, '..', 'img');
fs.mkdirSync(OUT, { recursive: true });

const files = fs.readdirSync(SRC);

/* foodish 池：按类别收集并按编号排序 */
const poolFiles = {};
function poolList(cat) {
  if (poolFiles[cat]) return poolFiles[cat];
  const re = new RegExp('images_' + cat + '_' + cat + '(\\d+)\\.jpe?g$', 'i');
  const list = files
    .map(f => { const m = f.match(re); return m ? { f, n: +m[1] } : null; })
    .filter(Boolean)
    .sort((a, b) => a.n - b.n)
    .map(e => e.f);
  poolFiles[cat] = list;
  return list;
}

function resolve(ref) {
  if (ref.pool) {
    const list = poolList(ref.pool);
    if (!list.length) throw new Error('照片池为空: ' + ref.pool);
    return path.join(SRC, list[(ref.index - 1) % list.length]);
  }
  const hit = files.find(f => f.startsWith(ref.prefix) && f.endsWith(ref.suffix));
  if (!hit) throw new Error('找不到素材: ' + ref.prefix + ' … ' + ref.suffix);
  return path.join(SRC, hit);
}

async function main() {
  /* 清掉旧产品图/店招（保留 cat_ 图标） */
  fs.readdirSync(OUT).filter(f => !f.startsWith('cat_')).forEach(f => fs.unlinkSync(path.join(OUT, f)));

  const entries = Object.entries(MAP);
  let done = 0, failed = 0;
  const CHUNK = 40;
  for (let i = 0; i < entries.length; i += CHUNK) {
    await Promise.all(entries.slice(i, i + CHUNK).map(async ([key, ref]) => {
      try {
        const src = resolve(ref);
        await sharp(src)
          .resize(480, 480, { fit: 'cover', position: sharp.strategy.attention })
          .flatten({ background: '#FFF8EE' })
          .webp({ quality: 75 })
          .toFile(path.join(OUT, key + '.webp'));
        done++;
      } catch (e) {
        failed++;
        console.error('FAIL', key, e.message);
      }
    }));
  }
  const total = fs.readdirSync(OUT).filter(f => f.endsWith('.webp'))
    .reduce((s, f) => s + fs.statSync(path.join(OUT, f)).size, 0);
  console.log(`processed ${done} photos (${failed} failed), img/ total ${(total / 1048576).toFixed(1)} MB`);
  if (failed) process.exit(1);
}

main().catch(e => { console.error(e); process.exit(1); });
