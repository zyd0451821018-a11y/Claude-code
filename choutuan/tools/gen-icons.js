/* ============================================================
 * 丑团 · gen-icons.js —— 首页分类图标生成
 * 圆形彩底 + 白色简化图形，输出 img/cat_<id>.webp（128px）
 * 商品图/店招为真实照片，见 fetch-photos.sh + prepare-photos.js
 * 运行：node tools/gen-icons.js
 * ============================================================ */

'use strict';

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const OUT = path.join(__dirname, '..', 'img');
fs.mkdirSync(OUT, { recursive: true });

let uid = 0;
const id = p => p + (++uid);
const E = (cx, cy, rx, ry, fill, x = '') => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}" ${x}/>`;
const C = (cx, cy, r, fill, x = '') => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" ${x}/>`;
const R = (x, y, w, h, rx, fill, ex = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" ${ex}/>`;
const P = (d, fill, x = '') => `<path d="${d}" fill="${fill}" ${x}/>`;
const G = (inner, x = '') => `<g ${x}>${inner}</g>`;

function lg(stops, x1 = 0, y1 = 0, x2 = 1, y2 = 1) {
  const gid = id('lg');
  const s = stops.map(([o, c]) => `<stop offset="${o}" stop-color="${c}"/>`).join('');
  return { ref: `url(#${gid})`, def: `<linearGradient id="${gid}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">${s}</linearGradient>` };
}

const W = 'rgba(255,255,255,0.95)';

const motifs = {
  cutlery: () => ({ body:
    R(108, 76, 14, 170, 7, W) +
    P('M 92 76 L 92 130 Q 92 148 115 148 Q 138 148 138 130 L 138 76', 'none', `stroke="${W}" stroke-width="12" stroke-linecap="round"`) +
    R(196, 76, 14, 170, 7, W) +
    P('M 226 76 Q 236 120 214 140 L 214 76 Z', W) }),
  burger: () => ({ body:
    P('M 92 150 Q 92 96 160 96 Q 228 96 228 150 Z', W) +
    R(88, 158, 144, 16, 8, W) + R(96, 182, 128, 14, 7, W) +
    P('M 88 204 L 232 204 Q 230 232 200 232 L 120 232 Q 90 232 88 204 Z', W) +
    E(132, 120, 7, 4, 'rgba(230,120,40,0.9)') + E(172, 112, 7, 4, 'rgba(230,120,40,0.9)') + E(196, 130, 7, 4, 'rgba(230,120,40,0.9)') }),
  pizza: () => ({ body:
    C(160, 168, 96, W) +
    C(160, 168, 96, 'none', 'stroke="rgba(230,150,40,0.85)" stroke-width="14"') +
    P('M 160 168 L 92 100 M 160 168 L 228 100 M 160 168 L 160 264 M 160 168 L 76 208 M 160 168 L 244 208', 'none', 'stroke="rgba(230,150,40,0.5)" stroke-width="5"') +
    C(136, 138, 11, 'rgba(220,80,60,0.9)') + C(196, 152, 11, 'rgba(220,80,60,0.9)') +
    C(150, 208, 11, 'rgba(220,80,60,0.9)') + C(206, 214, 9, 'rgba(120,170,70,0.9)') + C(118, 186, 8, 'rgba(120,170,70,0.9)') }),
  teacup: () => ({ body:
    P('M 104 112 L 116 224 Q 117 232 125 232 L 195 232 Q 203 232 204 224 L 216 112 Z', W) +
    E(160, 112, 56, 12, 'rgba(255,255,255,0.7)') +
    C(138, 196, 9, 'rgba(120,80,40,0.55)') + C(164, 204, 9, 'rgba(120,80,40,0.55)') + C(186, 192, 9, 'rgba(120,80,40,0.55)') +
    R(168, 64, 14, 52, 7, W, 'transform="rotate(12 175 90)"') }),
  cake: () => ({ body:
    P('M 96 232 L 96 160 Q 160 132 224 160 L 224 232 Z', W) +
    R(88, 224, 144, 16, 8, W) +
    P('M 96 168 q 16 20 32 0 q 16 20 32 0 q 16 20 32 0 q 16 20 32 0', 'none', 'stroke="rgba(230,120,140,0.75)" stroke-width="8" stroke-linecap="round"') +
    C(160, 122, 10, 'rgba(230,80,90,0.9)') + R(156, 96, 8, 24, 4, 'rgba(255,255,255,0.85)') }),
  leaf: () => ({ body:
    P('M 160 84 Q 232 120 212 196 Q 196 248 160 240 Q 124 248 108 196 Q 88 120 160 84 Z', W) +
    P('M 160 100 L 160 236', 'none', 'stroke="rgba(30,120,80,0.5)" stroke-width="6"') +
    P('M 160 140 q -26 8 -36 30 M 160 176 q 26 8 36 30', 'none', 'stroke="rgba(30,120,80,0.5)" stroke-width="5" stroke-linecap="round"') }),
  hotpot: () => ({ body:
    P('M 84 148 L 92 216 Q 94 232 110 232 L 210 232 Q 226 232 228 216 L 236 148 Z', W) +
    E(160, 148, 76, 16, 'rgba(255,255,255,0.7)') +
    R(52, 142, 26, 12, 6, W) + R(242, 142, 26, 12, 6, W) +
    P('M 132 108 q 8 14 0 26 M 160 100 q 8 14 0 26 M 188 108 q 8 14 0 26', 'none', `stroke="${W}" stroke-width="7" stroke-linecap="round"`) }),
  skewer: () => ({ body:
    G(R(152, 56, 12, 210, 6, W) +
      R(120, 96, 76, 34, 12, W) + R(124, 142, 68, 32, 12, W) + R(120, 186, 76, 34, 12, W),
      'transform="rotate(14 160 160)"') }),
  dumpling: () => ({ body:
    E(160, 190, 84, 52, W) +
    P('M 92 176 Q 160 96 228 176', 'none', `stroke="${W}" stroke-width="16"`) +
    P('M 116 158 q 8 14 0 24 M 144 146 q 8 14 0 24 M 176 146 q 8 14 0 24 M 204 158 q 8 14 0 24', 'none', 'stroke="rgba(190,150,80,0.6)" stroke-width="5" stroke-linecap="round"') }),
  noodle: () => ({ body:
    P('M 92 160 Q 90 228 160 232 Q 230 228 228 160 Z', W) +
    P('M 104 156 q 6 -60 12 0 M 130 156 q 6 -70 12 0 M 158 156 q 6 -76 12 0 M 186 156 q 6 -66 12 0', 'none', `stroke="${W}" stroke-width="9" stroke-linecap="round"`) +
    G(R(196, 60, 8, 92, 4, W) + R(212, 66, 8, 92, 4, W), 'transform="rotate(24 210 100)"') }),
  rice: () => ({ body:
    P('M 84 156 Q 84 236 160 240 Q 236 236 236 156 Z', W) +
    E(160, 150, 62, 26, W) + E(160, 138, 44, 18, W) +
    G(R(190, 60, 9, 90, 4, W) + R(208, 66, 9, 90, 4, W), 'transform="rotate(28 200 100)"') }),
  coffee: () => ({ body:
    P('M 100 120 Q 98 216 160 220 Q 222 216 220 120 Z', W) +
    P('M 218 136 q 36 0 32 30 q -4 28 -36 22', 'none', `stroke="${W}" stroke-width="12"`) +
    E(160, 120, 60, 14, 'rgba(255,255,255,0.7)') +
    P('M 138 74 q 8 12 0 24 M 166 68 q 8 12 0 24', 'none', `stroke="${W}" stroke-width="7" stroke-linecap="round"`) }),
  apple: () => ({ body:
    P('M 160 120 Q 100 104 92 168 Q 86 224 132 240 Q 152 248 160 238 Q 168 248 188 240 Q 234 224 228 168 Q 220 104 160 120 Z', W) +
    P('M 160 118 q -4 -26 12 -38', 'none', `stroke="${W}" stroke-width="9" stroke-linecap="round"`) +
    P('M 172 84 q 30 -12 34 16 q -24 12 -34 -16 Z', 'rgba(120,190,90,0.95)') }),
  cloche: () => ({ body:
    P('M 84 208 Q 84 128 160 124 Q 236 128 236 208 Z', W) +
    C(160, 108, 12, W) +
    R(64, 216, 192, 14, 7, W) +
    P('M 108 160 Q 124 140 148 138', 'none', 'stroke="rgba(120,120,130,0.45)" stroke-width="7" stroke-linecap="round"') })
};

function catIcon(c1, c2, motif, scale) {
  const bgG = lg([[0, c1], [1, c2]]);
  const defs = bgG.def + (motif.defs || '');
  const body =
    C(160, 160, 150, bgG.ref) +
    C(160, 160, 150, 'none', 'stroke="rgba(255,255,255,0.35)" stroke-width="6"') +
    P('M 40 80 A 150 150 0 0 1 240 36', 'none', 'stroke="rgba(255,255,255,0.28)" stroke-width="14" stroke-linecap="round"') +
    G(motif.body, `transform="translate(${160 - 160 * (scale || 0.8)} ${160 - 160 * (scale || 0.8)}) scale(${scale || 0.8})"`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 320 320"><defs>${defs}</defs>${body}</svg>`;
}

const cats = {
  all:       () => catIcon('#F5A623', '#E8830C', motifs.cutlery(), 0.74),
  burger:    () => catIcon('#F2994A', '#E0691E', motifs.burger(), 0.8),
  pizza:     () => catIcon('#D9822B', '#B65E12', motifs.pizza(), 0.8),
  coffee:    () => catIcon('#7A5230', '#54321A', motifs.coffee(), 0.8),
  drink:     () => catIcon('#E8B93C', '#C99414', motifs.teacup(), 0.8),
  dessert:   () => catIcon('#E4708C', '#C24460', motifs.cake(), 0.8),
  brunch:    () => catIcon('#5BA85C', '#3A7E3C', motifs.leaf(), 0.78),
  hotpot:    () => catIcon('#E0533C', '#B8301E', motifs.hotpot(), 0.8),
  bbq:       () => catIcon('#8A5A32', '#5E3818', motifs.skewer(), 0.8),
  breakfast: () => catIcon('#F2B03C', '#D88E14', motifs.dumpling(), 0.8),
  noodle:    () => catIcon('#4A88C7', '#2C61A0', motifs.noodle(), 0.8),
  rice:      () => catIcon('#7A9E3C', '#567A1E', motifs.rice(), 0.78),
  western:   () => catIcon('#4A4644', '#26221F', motifs.cloche(), 0.8),
  fruit:     () => catIcon('#E05A48', '#B83424', motifs.apple(), 0.8)
};

async function main() {
  /* 清掉旧分类图标 */
  fs.readdirSync(OUT).filter(f => f.startsWith('cat_')).forEach(f => fs.unlinkSync(path.join(OUT, f)));
  const jobs = [];
  for (const [cid, fn] of Object.entries(cats)) {
    jobs.push(sharp(Buffer.from(fn())).resize(128, 128).webp({ quality: 84 }).toFile(path.join(OUT, 'cat_' + cid + '.webp')));
  }
  await Promise.all(jobs);
  console.log('rendered', Object.keys(cats).length, 'category icons');
}

main().catch(e => { console.error(e); process.exit(1); });
