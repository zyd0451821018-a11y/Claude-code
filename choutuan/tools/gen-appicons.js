/* ============================================================
 * 丑团 · gen-appicons.js —— 应用图标 / 分享图生成
 * 品牌字标：丑团黄圆角方块 + 手绘矢量"丑"字（环境无 CJK 字体，
 * 用笔画矢量绘制，美团黄底黑字风格）
 * 产出：
 *   favicon.ico（根目录）
 *   img/icon-512.png / icon-192.png / icon-32.png
 *   img/apple-touch-icon.png（180）
 *   img/share-300.png（微信/OG 分享缩略图）
 * 运行：node tools/gen-appicons.js
 * ============================================================ */

'use strict';

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const pngToIcoMod = require('png-to-ico');
const pngToIco = pngToIcoMod.default || pngToIcoMod;

const ROOT = path.join(__dirname, '..');
const IMG = path.join(ROOT, 'img');

/* "丑"字矢量笔画（512 画布，圆角笔画，黑字美团风）
   结构：横折（上横+右竖）、中横、中竖、底横 */
function chouGlyph(ink) {
  const r = 22; // 笔画端头圆角
  const R = (x, y, w, h) =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${ink}"/>`;
  return [
    R(118, 96, 240, 44),    // 上横（横折的横）
    R(314, 96, 44, 320),    // 右竖（横折的折，落到底横）
    R(96, 226, 284, 44),    // 中横
    R(234, 96, 44, 320),    // 中竖（贯穿到底横）
    R(64, 372, 384, 44)     // 底横（最长）
  ].join('');
}

function iconSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#FFDE33"/>
      <stop offset="1" stop-color="#FFC800"/>
    </linearGradient>
    <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="rgba(255,255,255,0.35)"/>
      <stop offset="0.55" stop-color="rgba(255,255,255,0)"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="112" fill="url(#bg)"/>
  <path d="M 0 0 L 512 0 L 0 512 Z" fill="url(#sheen)"/>
  ${chouGlyph('#2B2200')}
</svg>`;
}

async function main() {
  const svg = Buffer.from(iconSvg());
  const png512 = await sharp(svg).png().toBuffer();

  await sharp(png512).toFile(path.join(IMG, 'icon-512.png'));
  await sharp(png512).resize(192, 192).toFile(path.join(IMG, 'icon-192.png'));
  await sharp(png512).resize(180, 180).toFile(path.join(IMG, 'apple-touch-icon.png'));
  await sharp(png512).resize(300, 300).toFile(path.join(IMG, 'share-300.png'));
  const png32 = await sharp(png512).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(IMG, 'icon-32.png'), png32);
  const png16 = await sharp(png512).resize(16, 16).png().toBuffer();

  const ico = await pngToIco([png32, png16]);
  fs.writeFileSync(path.join(ROOT, 'favicon.ico'), ico);

  console.log('generated: favicon.ico + icon-512/192/32 + apple-touch-icon + share-300');
}

main().catch(e => { console.error(e); process.exit(1); });
