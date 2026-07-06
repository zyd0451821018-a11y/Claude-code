/* ============================================================
 * 丑团 · gen-images.js —— 产品图生成器
 * 参数化 SVG 食物建模 → sharp 渲染 320×320 WebP
 * 输出：img/<productId>.webp + img/shop_<shopId>.webp
 * 运行：node tools/gen-images.js
 * ============================================================ */

'use strict';

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const OUT = path.join(__dirname, '..', 'img');
fs.mkdirSync(OUT, { recursive: true });

/* ---------- SVG 基元 ---------- */
let uid = 0;
const id = p => p + (++uid);
const E = (cx, cy, rx, ry, fill, x = '') => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}" ${x}/>`;
const C = (cx, cy, r, fill, x = '') => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" ${x}/>`;
const R = (x, y, w, h, rx, fill, ex = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" ${ex}/>`;
const P = (d, fill, x = '') => `<path d="${d}" fill="${fill}" ${x}/>`;
const G = (inner, x = '') => `<g ${x}>${inner}</g>`;

function lg(stops, x1 = 0, y1 = 0, x2 = 0, y2 = 1) {
  const gid = id('lg');
  const s = stops.map(([o, c]) => `<stop offset="${o}" stop-color="${c}"/>`).join('');
  return { ref: `url(#${gid})`, def: `<linearGradient id="${gid}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">${s}</linearGradient>` };
}
function rg(stops, cx = 0.42, cy = 0.36, r = 0.75) {
  const gid = id('rg');
  const s = stops.map(([o, c]) => `<stop offset="${o}" stop-color="${c}"/>`).join('');
  return { ref: `url(#${gid})`, def: `<radialGradient id="${gid}" cx="${cx}" cy="${cy}" r="${r}">${s}</radialGradient>` };
}

/* 伪随机（确定性） */
function rnd(seed) {
  let s = 0;
  for (let i = 0; i < seed.length; i++) s = (s * 31 + seed.charCodeAt(i)) % 233280;
  return () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
}

/* ---------- 场景包装 ---------- */
function scene(bgTop, bgBot, piece) {
  const bg = rg([[0, bgTop], [1, bgBot]], 0.5, 0.3, 0.9);
  const vig = rg([[0, 'rgba(0,0,0,0)'], [0.78, 'rgba(0,0,0,0)'], [1, 'rgba(90,60,30,0.10)']], 0.5, 0.5, 0.72);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 320 320">` +
    `<defs>${bg.def}${vig.def}${piece.defs || ''}</defs>` +
    `<rect width="320" height="320" fill="${bg.ref}"/>` +
    `<rect width="320" height="320" fill="${vig.ref}"/>` +
    (piece.body || '') + `</svg>`;
}
const shadow = (cy = 262, rx = 96, ry = 15, op = 0.15) =>
  E(160, cy, rx, ry, `rgba(70,42,16,${op})`);

/* ---------- 组件库 ---------- */

/* 汉堡（侧视图层叠） */
function burger(o) {
  o = Object.assign({ w: 196, patties: 1, cheese: true, lettuce: true, tomato: false,
    fish: false, spicy: false, grill: false, baseY: 236 }, o);
  const cx = 160, w = o.w, x0 = cx - w / 2;
  const bunG = lg([[0, '#F2B45C'], [1, '#D98C34']]);
  const bunB = lg([[0, '#E8A852'], [1, '#C97F2E']]);
  const patG = lg([[0, o.spicy ? '#A6402A' : '#8C4A22'], [1, o.spicy ? '#7C2A18' : '#65331A']]);
  const fishG = lg([[0, '#EFC169'], [1, '#D9A03F']]);
  let defs = bunG.def + bunB.def + patG.def + fishG.def;
  let y = o.baseY, body = '';
  // 底面包
  body = R(x0 + 6, y - 22, w - 12, 24, 11, bunB.ref) + body; y -= 20;
  // 肉饼层（多层之间夹芝士带，避免糊成一团）
  for (let i = 0; i < o.patties; i++) {
    body = R(x0 - 2, y - 20, w + 4, 22, 10, o.fish ? fishG.ref : patG.ref) + body;
    if (o.grill && !o.fish) {
      for (let gx = 0; gx < 4; gx++) body += R(x0 + 18 + gx * 44, y - 15, 22, 4, 2, 'rgba(40,16,6,0.45)');
    }
    if (o.fish) for (let fx = 0; fx < 5; fx++) body += C(x0 + 22 + fx * 38, y - 9, 2.6, 'rgba(255,244,214,0.8)');
    y -= 18;
    if (i < o.patties - 1) { body = R(x0 + 4, y - 8, w - 8, 10, 5, '#F5B63F') + body; y -= 8; }
  }
  // 芝士
  if (o.cheese) {
    const pts = [];
    for (let i = 0; i <= 5; i++) pts.push(`${x0 - 6 + i * (w + 12) / 5} ${y + (i % 2 ? 10 : 2)}`);
    body = P(`M ${x0 - 6} ${y - 8} L ${x0 + w + 6} ${y - 8} L ${pts.reverse().join(' L ')} Z`, '#F5B63F') + body;
    y -= 10;
  }
  // 番茄
  if (o.tomato) { body = R(x0 + 8, y - 10, w - 16, 12, 6, '#E05038') + body; y -= 9; }
  // 生菜
  if (o.lettuce) {
    let d = `M ${x0 - 8} ${y}`;
    for (let i = 0; i < 6; i++) d += ` q ${(w + 16) / 12} 14 ${(w + 16) / 6} 0`;
    body = P(d + ` L ${x0 + w + 8} ${y - 12} L ${x0 - 8} ${y - 12} Z`, '#7DBB45') + body;
    y -= 12;
  }
  // 顶面包（穹顶）
  const domeH = 58;
  body = P(`M ${x0 - 2} ${y} Q ${x0 - 2} ${y - domeH} ${cx} ${y - domeH} Q ${x0 + w + 2} ${y - domeH} ${x0 + w + 2} ${y} Z`, bunG.ref) + body;
  body += E(cx - 40, y - domeH + 16, 26, 9, 'rgba(255,240,210,0.4)');
  const rr = rnd('sesame' + o.patties);
  for (let i = 0; i < 9; i++) {
    const sx = x0 + 20 + rr() * (w - 40), sy = y - 12 - rr() * (domeH - 26);
    body += E(sx, sy, 4.6, 3, '#F9EBC8', `transform="rotate(${rr() * 60 - 30} ${sx} ${sy})"`);
  }
  return { defs, body: shadow(o.baseY + 18, w / 2 + 14, 13) + body };
}

/* 饮品杯（透明杯参数化：分层液体/珍珠/果肉/奶盖/冰块/吸管/杯盖） */
function drink(o) {
  o = Object.assign({ layers: [['#C9A36B', 1]], pearls: 0, pearlColor: '#3A2418',
    fruit: null, fruitColor: '#B678D9', foam: null, cream: false, ice: 0,
    straw: null, lid: false, dome: false, slice: null, stripes: null,
    drizzle: null, dust: null, topW: 132, botW: 96, topY: 76, botY: 252 }, o);
  const cx = 160, tw = o.topW, bw = o.botW, ty = o.topY, by = o.botY;
  const xtl = cx - tw / 2, xtr = cx + tw / 2, xbl = cx - bw / 2, xbr = cx + bw / 2;
  const clipId = id('cup');
  const cupPath = `M ${xtl} ${ty} L ${xbl} ${by - 8} Q ${xbl} ${by} ${xbl + 9} ${by} L ${xbr - 9} ${by} Q ${xbr} ${by} ${xbr} ${by - 8} L ${xtr} ${ty} Z`;
  let defs = `<clipPath id="${clipId}"><path d="${cupPath}"/></clipPath>`;
  let body = shadow(by + 12, tw * 0.62, 12);
  // 杯内容物（clip 内）
  let inner = '';
  const H = by - ty;
  let acc = 0;
  const lays = o.layers.slice();
  const total = lays.reduce((s, l) => s + l[1], 0);
  for (const [color, frac] of lays) {
    const h = H * (frac / total);
    const yTop = by - acc - h;
    inner += R(xtl - 20, yTop, tw + 40, h + 2, 0, color);
    acc += h;
  }
  // 虎纹挂壁
  if (o.stripes) {
    for (let i = 0; i < 6; i++) {
      const sx = xtl + 12 + i * (tw - 24) / 5;
      inner += P(`M ${sx} ${ty + 8} q ${6 - (i % 2) * 12} ${H * 0.45} 0 ${H * 0.8}`, 'none',
        `stroke="${o.stripes}" stroke-width="7" stroke-linecap="round" opacity="0.85"`);
    }
  }
  // 珍珠
  if (o.pearls) {
    const rr = rnd('pearl' + o.pearls);
    for (let i = 0; i < o.pearls; i++) {
      const px = xbl + 12 + rr() * (bw - 24), py = by - 10 - rr() * 40;
      inner += C(px, py, 7, o.pearlColor) + C(px - 2.4, py - 2.4, 2, 'rgba(255,255,255,0.35)');
    }
  }
  // 果肉块
  if (o.fruit) {
    const rr = rnd('fruit' + o.fruit);
    for (let i = 0; i < o.fruit; i++) {
      const px = xbl + 10 + rr() * (bw - 20), py = by - 14 - rr() * (H * 0.5);
      inner += R(px - 7, py - 7, 14, 14, 4, o.fruitColor, `transform="rotate(${rr() * 50 - 25} ${px} ${py})" opacity="0.9"`);
    }
  }
  // 冰块
  if (o.ice) {
    const rr = rnd('ice' + o.ice);
    for (let i = 0; i < o.ice; i++) {
      const px = xtl + 18 + rr() * (tw - 36), py = ty + 16 + rr() * (H * 0.4);
      inner += R(px - 11, py - 11, 22, 22, 5, 'rgba(255,255,255,0.42)', `transform="rotate(${rr() * 60 - 30} ${px} ${py})"`) +
        R(px - 11, py - 11, 22, 8, 5, 'rgba(255,255,255,0.3)', `transform="rotate(${rr() * 60 - 30} ${px} ${py})"`);
    }
  }
  // 奶盖/芝士层（顶部色带 + 波浪下缘）
  if (o.foam) {
    const fh = H * 0.22, fy = ty - 2;
    let wave = `M ${xtl - 4} ${fy} L ${xtr + 4} ${fy} L ${xtr + 4} ${fy + fh}`;
    for (let i = 0; i < 5; i++) wave += ` q ${-(tw + 8) / 10} 13 ${-(tw + 8) / 5} 0`;
    wave += ' Z';
    inner += P(wave, o.foam);
  }
  body += G(inner, `clip-path="url(#${clipId})"`);
  // 杯体玻璃质感
  body += P(cupPath, 'rgba(255,255,255,0.10)');
  body += P(cupPath, 'none', 'stroke="rgba(120,90,60,0.35)" stroke-width="3"');
  body += P(`M ${xtl + 12} ${ty + 14} L ${xbl + 10} ${by - 22}`, 'none',
    'stroke="rgba(255,255,255,0.5)" stroke-width="7" stroke-linecap="round"');
  // 杯口
  body += E(cx, ty, tw / 2, 7, 'rgba(255,255,255,0.55)');
  body += E(cx, ty, tw / 2, 7, 'none', 'stroke="rgba(120,90,60,0.4)" stroke-width="3"');
  // 盖 / 圆顶
  if (o.lid) {
    body += E(cx, ty - 4, tw / 2 + 5, 9, '#F5F1E8') +
      R(cx - tw / 2 - 5, ty - 8, tw + 10, 7, 3, '#EFE9DC');
  }
  if (o.dome) {
    body += P(`M ${xtl - 3} ${ty - 2} Q ${cx} ${ty - 64} ${xtr + 3} ${ty - 2} Z`, 'rgba(235,242,246,0.55)') +
      P(`M ${xtl - 3} ${ty - 2} Q ${cx} ${ty - 64} ${xtr + 3} ${ty - 2}`, 'none', 'stroke="rgba(120,110,100,0.35)" stroke-width="2.5"') +
      E(cx - 18, ty - 34, 10, 5, 'rgba(255,255,255,0.6)', 'transform="rotate(-20 142 42)"');
  }
  // 奶油塔
  if (o.cream) {
    let cy0 = o.dome ? ty - 8 : ty - 4;
    body += E(cx, cy0, tw / 2 - 12, 14, '#FFF8EC') +
      E(cx, cy0 - 16, tw / 2 - 26, 13, '#FFF4E2') +
      E(cx, cy0 - 30, tw / 2 - 40, 11, '#FFF8EC') +
      P(`M ${cx - 10} ${cy0 - 40} Q ${cx} ${cy0 - 56} ${cx + 8} ${cy0 - 42} Q ${cx + 2} ${cy0 - 36} ${cx - 10} ${cy0 - 40} Z`, '#FFF4E2');
  }
  // 樱桃
  if (o.cherry) {
    const cy0 = o.cream ? ty - 52 : ty - 10;
    body += P(`M ${cx} ${cy0 - 8} q 8 -20 20 -24`, 'none', 'stroke="#5E8A3C" stroke-width="4" stroke-linecap="round"') +
      C(cx, cy0, 11, '#D8283C') + C(cx - 4, cy0 - 4, 3.5, 'rgba(255,255,255,0.55)');
  }
  // 淋酱
  if (o.drizzle) {
    const rr = rnd('drz');
    for (let i = 0; i < 5; i++) {
      const dx = cx - tw / 2 + 18 + i * (tw - 36) / 4;
      body += P(`M ${dx} ${ty - (o.cream ? 34 : 2)} q 4 ${14 + rr() * 10} 0 ${22 + rr() * 8}`, 'none',
        `stroke="${o.drizzle}" stroke-width="5" stroke-linecap="round" opacity="0.9"`);
    }
  }
  // 可可粉尘
  if (o.dust) {
    const rr = rnd('dust');
    for (let i = 0; i < 14; i++)
      body += C(cx - tw / 2 + 10 + rr() * (tw - 20), ty - (o.cream ? 30 : 0) - rr() * 16, 1.6 + rr() * 1.4, o.dust);
  }
  // 吸管
  if (o.straw) {
    body += G(R(cx + tw / 4 - 7, ty - 74, 14, 84, 6, o.straw), `transform="rotate(9 ${cx + tw / 4} ${ty})"`);
    body += G(R(cx + tw / 4 - 7, ty - 74, 6, 84, 3, 'rgba(255,255,255,0.35)'), `transform="rotate(9 ${cx + tw / 4} ${ty})"`);
  }
  // 水果切片装饰
  if (o.slice === 'lemon' || o.slice === 'orange') {
    const col = o.slice === 'lemon' ? ['#F7DE6B', '#FBF3C4'] : ['#F5A23C', '#FBD9A8'];
    const sx = xtr - 6, sy = ty + 4;
    body += C(sx, sy, 26, col[0]) + C(sx, sy, 21, col[1]);
    for (let i = 0; i < 8; i++)
      body += P(`M ${sx} ${sy} L ${sx + 19 * Math.cos(i * Math.PI / 4 + 0.4)} ${sy + 19 * Math.sin(i * Math.PI / 4 + 0.4)}`,
        'none', `stroke="${col[0]}" stroke-width="2.5"`);
    body += C(sx, sy, 26, 'none', `stroke="${col[0]}" stroke-width="4"`);
  }
  if (o.slice === 'strawberry') {
    const sx = xtr - 10, sy = ty - 6;
    body += P(`M ${sx - 16} ${sy} Q ${sx} ${sy - 22} ${sx + 16} ${sy} Q ${sx + 4} ${sy + 22} ${sx - 16} ${sy} Z`, '#E23B4E') +
      P(`M ${sx - 8} ${sy - 12} q 8 -8 16 0 l -8 6 z`, '#5FA53C');
    const rr = rnd('sb');
    for (let i = 0; i < 6; i++) body += C(sx - 10 + rr() * 20, sy - 2 + rr() * 10, 1.3, '#FBE9B8');
  }
  return { defs, body };
}

/* 陶瓷杯咖啡（拉花） */
function mug(o) {
  o = Object.assign({ art: 'heart', coffee: '#6B4226', foamRing: true }, o);
  const cx = 160, cy = 176;
  const cup = lg([[0, '#FFFFFF'], [1, '#E9E2D6']]);
  let defs = cup.def;
  let body = shadow(258, 100, 13);
  body += E(cx, 246, 108, 16, '#F1EBDF') + E(cx, 243, 108, 14, '#FBF7EE'); // 碟
  body += P(`M ${cx - 82} ${cy - 40} Q ${cx - 84} ${cy + 66} ${cx} ${cy + 70} Q ${cx + 84} ${cy + 66} ${cx + 82} ${cy - 40} Z`, cup.ref);
  body += P(`M ${cx + 78} ${cy - 20} q 44 -2 40 34 q -4 34 -44 26`, 'none', 'stroke="#EDE5D6" stroke-width="14"'); // 把手
  body += E(cx, cy - 40, 82, 22, '#F6F1E7');
  body += E(cx, cy - 40, 72, 18, o.coffee);
  if (o.art === 'heart') {
    body += P(`M ${cx} ${cy - 30} C ${cx - 26} ${cy - 52} ${cx - 6} ${cy - 58} ${cx} ${cy - 46} C ${cx + 6} ${cy - 58} ${cx + 26} ${cy - 52} ${cx} ${cy - 30} Z`, '#F3E3C6') +
      P(`M ${cx} ${cy - 46} q 2 8 0 16`, 'none', 'stroke="#D9B98C" stroke-width="2"');
  } else if (o.art === 'crema') {
    body += E(cx, cy - 40, 72, 18, '#5A3A20') + E(cx, cy - 42, 60, 13, '#7A4E28') +
      E(cx - 20, cy - 45, 18, 5, 'rgba(214,178,128,0.55)');
  }
  // 蒸汽
  body += P(`M ${cx - 26} ${cy - 84} q 10 -14 0 -26 q -8 -12 2 -22`, 'none', 'stroke="rgba(255,255,255,0.65)" stroke-width="5" stroke-linecap="round"') +
    P(`M ${cx + 22} ${cy - 88} q 10 -12 0 -24 q -8 -10 2 -20`, 'none', 'stroke="rgba(255,255,255,0.5)" stroke-width="5" stroke-linecap="round"');
  return { defs, body };
}

/* 面碗（汤色/配料可调） */
function noodleBowl(o) {
  o = Object.assign({ broth: '#E8C87A', bowl: '#E8503A', beef: 0, radish: 0, eggHalf: false,
    greens: 3, chili: 0, noodles: true, chop: false, wontons: 0, sauceNoodle: false }, o);
  const cx = 160, ry = 168;
  const bowlG = lg([[0, o.bowl], [1, shade(o.bowl, -28)]]);
  let defs = bowlG.def;
  let body = shadow(262, 108, 14);
  body += P(`M ${cx - 112} ${ry} Q ${cx - 104} ${ry + 88} ${cx} ${ry + 94} Q ${cx + 104} ${ry + 88} ${cx + 112} ${ry} Z`, bowlG.ref);
  body += P(`M ${cx - 64} ${ry + 88} h 128`, 'none', `stroke="${shade(o.bowl, -40)}" stroke-width="9" stroke-linecap="round"`);
  body += E(cx, ry, 112, 30, shade(o.bowl, 18));
  body += E(cx, ry, 102, 25, o.broth);
  const clip = id('bowlc'); defs += `<clipPath id="${clip}">${E(cx, ry, 102, 25, '#fff')}</clipPath>`;
  let inner = '';
  if (o.noodles) {
    for (let i = 0; i < 5; i++) {
      const nx = cx - 70 + i * 32;
      inner += P(`M ${nx} ${ry - 14} q 12 12 0 24 q -10 10 4 16`, 'none',
        `stroke="${o.sauceNoodle ? '#D9A24E' : '#F3DFA8'}" stroke-width="8" stroke-linecap="round"`);
    }
  }
  if (o.wontons) {
    const rr = rnd('wt');
    for (let i = 0; i < o.wontons; i++) {
      const wx = cx - 50 + i * (100 / Math.max(1, o.wontons - 1)), wy = ry - 4 + rr() * 10;
      inner += E(wx, wy, 20, 14, '#FBF3DD') + P(`M ${wx - 10} ${wy - 8} q 10 -10 20 0`, 'none', 'stroke="#EBD9B4" stroke-width="3"');
    }
  }
  const rr2 = rnd('top');
  for (let i = 0; i < o.beef; i++) {
    const bx = cx - 58 + i * (116 / Math.max(1, o.beef - 1)), byy = ry - 8 + rr2() * 14;
    inner += R(bx - 22, byy - 12, 44, 22, 8, '#8A5232', `transform="rotate(${rr2() * 24 - 12} ${bx} ${byy})"`) +
      R(bx - 22, byy - 12, 44, 8, 6, '#A96E45', `transform="rotate(${rr2() * 24 - 12} ${bx} ${byy})"`);
  }
  for (let i = 0; i < o.radish; i++) {
    const dx = cx - 40 + i * 40;
    inner += E(dx, ry + 10, 16, 10, '#FDF8EA', 'opacity="0.95"');
  }
  if (o.eggHalf) {
    inner += E(cx + 52, ry - 2, 22, 16, '#FDF6E3') + E(cx + 52, ry - 2, 11, 8, '#EFB93F');
  }
  for (let i = 0; i < o.greens; i++) {
    const gx = cx - 60 + rr2() * 120, gy = ry - 12 + rr2() * 20;
    inner += E(gx, gy, 7, 4, '#63A83E', `transform="rotate(${rr2() * 90} ${gx} ${gy})"`);
  }
  for (let i = 0; i < o.chili; i++) {
    inner += C(cx - 70 + rr2() * 140, ry - 10 + rr2() * 18, 3, '#D8422C');
  }
  body += G(inner, `clip-path="url(#${clip})"`);
  if (o.chili) body += E(cx, ry, 102, 25, 'none', 'stroke="rgba(216,66,44,0.5)" stroke-width="5"');
  // 蒸汽
  body += steam(cx - 20, ry - 60) + steam(cx + 30, ry - 66, 0.45);
  if (o.chop) {
    body += G(R(210, 20, 9, 150, 4, '#C89B62') + R(226, 24, 9, 150, 4, '#C89B62'), 'transform="rotate(18 220 100)"');
  }
  return { defs, body };
}
const steam = (x, y, op = 0.6) =>
  P(`M ${x} ${y} q 12 -16 0 -30 q -10 -12 2 -26`, 'none',
    `stroke="rgba(255,255,255,${op})" stroke-width="6" stroke-linecap="round"`);

function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.min(255, (n >> 16) + amt));
  const g = Math.max(0, Math.min(255, ((n >> 8) & 255) + amt));
  const b = Math.max(0, Math.min(255, (n & 255) + amt));
  return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
}

/* 盘子 + 内容 */
function plate(items, o) {
  o = Object.assign({ cy: 208, rx: 122, ry: 34, rim: '#EFE9DC' }, o);
  let body = shadow(o.cy + 42, o.rx - 6, 13);
  body += E(160, o.cy, o.rx, o.ry, o.rim) +
    E(160, o.cy - 4, o.rx - 4, o.ry - 3, '#FFFFFF') +
    E(160, o.cy - 2, o.rx - 22, o.ry - 12, '#F5F0E6');
  return { defs: items.defs || '', body: body + (items.body || '') };
}

/* 炸鸡腿 ×2（骨朝上的经典鸡腿造型） */
function friedChicken() {
  const meat = rg([[0, '#E2A24E'], [0.55, '#C87E2E'], [1, '#A05A1C']], 0.4, 0.35, 0.85);
  let defs = meat.def;
  const leg = (cx, cy, sc, rot) => G(
    // 骨（先画，藏在肉后）
    R(26 , -7, 52, 14, 7, '#FBF4E4') +
    C(80, -10, 9, '#FBF4E4') + C(80, 8, 9, '#FBF4E4') +
    // 鸡腿肉：一头浑圆一头收窄
    P('M -58 -6 Q -60 -40 -26 -42 Q 10 -44 26 -18 Q 38 -2 26 12 Q 12 30 -22 32 Q -58 32 -58 -6 Z', meat.ref) +
    E(-34, -20, 16, 9, 'rgba(255,236,200,0.4)') +
    crispDots(-14, -4, 'fc' + cx),
    `transform="translate(${cx} ${cy}) rotate(${rot}) scale(${sc})"`);
  const body = leg(178, 148, 1.02, -34) + leg(138, 204, 0.94, -8);
  return plate({ defs, body }, { cy: 208 });
}
function crispDots(cx, cy, seed) {
  const rr = rnd(seed); let s = '';
  for (let i = 0; i < 8; i++) {
    const a = rr() * Math.PI * 2, d = rr() * 34;
    s += P(`M ${cx + Math.cos(a) * d} ${cy + Math.sin(a) * d * 0.7} q 5 -4 10 0`, 'none',
      'stroke="rgba(120,62,16,0.5)" stroke-width="2.5" stroke-linecap="round"');
  }
  return s;
}

/* 薯条盒 */
function friesBox() {
  const boxG = lg([[0, '#E8483C'], [1, '#C3271F']]);
  let defs = boxG.def;
  let body = shadow(258, 84, 12);
  const rr = rnd('fry');
  // 后排薯条
  for (let i = 0; i < 9; i++) {
    const fx = 106 + i * 14, fh = 70 + rr() * 46;
    body += R(fx - 6, 178 - fh, 12, fh, 5, i % 2 ? '#F2C049' : '#EFB63A',
      `transform="rotate(${rr() * 14 - 7} ${fx} 178)"`);
  }
  // 盒
  body += P('M 96 160 L 110 254 Q 111 260 118 260 L 202 260 Q 209 260 210 254 L 224 160 L 208 168 L 160 158 L 112 168 Z', boxG.ref);
  body += P('M 96 160 L 110 254', 'none', 'stroke="rgba(0,0,0,0.12)" stroke-width="3"');
  body += P('M 138 196 q 22 26 44 0', 'none', 'stroke="#FFD976" stroke-width="9" stroke-linecap="round"'); // 弧标
  return { defs, body };
}

/* 甜筒 */
function coneIceCream() {
  const coneG = lg([[0, '#E2A55C'], [1, '#C07E33']]);
  let defs = coneG.def;
  let body = shadow(268, 60, 10, 0.13);
  body += P('M 122 158 L 160 268 L 198 158 Z', coneG.ref);
  for (let i = 1; i < 4; i++) body += P(`M ${122 + i * 10} ${158 + i * 26} L ${198 - i * 4} ${158 + i * 10}`, 'none', 'stroke="rgba(120,70,20,0.35)" stroke-width="3"');
  for (let i = 1; i < 4; i++) body += P(`M ${198 - i * 10} ${158 + i * 26} L ${122 + i * 4} ${158 + i * 10}`, 'none', 'stroke="rgba(120,70,20,0.35)" stroke-width="3"');
  body += E(160, 152, 44, 18, '#FFF6E8');
  body += E(160, 132, 38, 17, '#FFF9EF') + E(160, 112, 30, 15, '#FFF6E8') +
    P('M 146 100 Q 158 78 172 98 Q 166 108 146 100 Z', '#FFF9EF') +
    E(146, 128, 10, 5, 'rgba(255,255,255,0.8)');
  return { defs, body };
}

/* 蛋挞 */
function eggTart() {
  const cx = 160, cy = 190;
  const shell = lg([[0, '#EFC983'], [1, '#D9A855']]);
  const filling = rg([[0, '#F7CF56'], [0.75, '#EFB93F'], [1, '#D99A2B']], 0.42, 0.36, 0.8);
  let defs = shell.def + filling.def;
  let body = shadow(252, 92, 13);
  // 波浪酥皮
  let d = '';
  for (let i = 0; i < 16; i++) {
    const a1 = (i / 16) * Math.PI * 2, a2 = ((i + 0.5) / 16) * Math.PI * 2, a3 = ((i + 1) / 16) * Math.PI * 2;
    const p1 = [cx + Math.cos(a1) * 92, cy + Math.sin(a1) * 60];
    const pm = [cx + Math.cos(a2) * 102, cy + Math.sin(a2) * 68];
    const p2 = [cx + Math.cos(a3) * 92, cy + Math.sin(a3) * 60];
    d += (i ? 'L' : 'M') + ` ${p1[0]} ${p1[1]} Q ${pm[0]} ${pm[1]} ${p2[0]} ${p2[1]} `;
  }
  body += P(d + 'Z', shell.ref);
  body += E(cx, cy, 76, 48, filling.ref);
  body += E(cx - 14, cy + 6, 18, 11, 'rgba(150,74,10,0.55)') + E(cx + 30, cy - 12, 12, 8, 'rgba(150,74,10,0.45)');
  body += E(cx - 30, cy - 18, 22, 10, 'rgba(255,246,214,0.5)');
  return { defs, body };
}

/* 鸡米花桶 */
function popcornBucket() {
  const bkt = lg([[0, '#E8483C'], [1, '#C3271F']]);
  const pc = rg([[0, '#EFBE5D'], [1, '#C98A2E']], 0.4, 0.35, 0.9);
  let defs = bkt.def + pc.def;
  let body = shadow(262, 86, 12);
  const rr = rnd('pop');
  for (let i = 0; i < 11; i++) {
    const px = 112 + rr() * 96, py = 128 + rr() * 34;
    body += C(px, py, 13 + rr() * 6, pc.ref) +
      P(`M ${px - 5} ${py - 2} q 5 -4 10 0`, 'none', 'stroke="rgba(120,62,16,0.45)" stroke-width="2" stroke-linecap="round"');
  }
  body += P('M 100 150 L 114 256 Q 115 262 122 262 L 198 262 Q 205 262 206 256 L 220 150 Q 160 168 100 150 Z', bkt.ref);
  body += R(112, 196, 96, 26, 6, '#FFFFFF', 'opacity="0.92"');
  body += P('M 128 209 q 10 -12 20 0 q 10 12 20 0 q 10 -12 24 0', 'none', 'stroke="#C3271F" stroke-width="5" stroke-linecap="round"');
  return { defs, body };
}

/* 洋葱圈 */
function onionRings() {
  const ring = (cx, cy, r, rot) => {
    const g = rg([[0, '#F0C878'], [1, '#CE9440']], 0.4, 0.3, 0.9);
    return { def: g.def, s: G(
      C(cx, cy, r, 'none', `stroke="${g.ref}" stroke-width="${r * 0.52}"`) +
      C(cx, cy, r, 'none', `stroke="rgba(150,90,20,0.35)" stroke-width="3"`) +
      C(cx, cy, r * 0.72, 'none', 'stroke="rgba(150,90,20,0.3)" stroke-width="2.5"') +
      P(`M ${cx - r * 0.7} ${cy - r * 0.55} a ${r * 0.9} ${r * 0.9} 0 0 1 ${r * 0.7} ${-r * 0.3}`, 'none', 'stroke="rgba(255,240,200,0.65)" stroke-width="5" stroke-linecap="round"'),
      `transform="rotate(${rot} ${cx} ${cy})"`) };
  };
  const rings = [ring(120, 150, 38, 0), ring(200, 158, 34, 12), ring(158, 196, 40, -8)];
  const dip = E(238, 236, 26, 12, '#F7F2E6') + E(238, 233, 20, 8, '#E86A30');
  return plate({ defs: rings.map(r => r.def).join(''), body: rings.map(r => r.s).join('') + dip }, { cy: 210 });
}

/* 可乐杯 */
function colaCup() {
  const cup = lg([[0, '#E8483C'], [1, '#B71E17']]);
  let defs = cup.def;
  const cupD = 'M 108 92 L 122 254 Q 123 262 131 262 L 189 262 Q 197 262 198 254 L 212 92 Z';
  const clip = id('cola');
  defs += `<clipPath id="${clip}"><path d="${cupD}"/></clipPath>`;
  let body = shadow(266, 78, 11);
  body += P(cupD, cup.ref);
  body += G(
    P('M 96 178 q 32 22 64 0 q 32 -22 64 0', 'none', 'stroke="rgba(255,255,255,0.9)" stroke-width="18" stroke-linecap="round"'),
    `clip-path="url(#${clip})"`);
  const rr = rnd('cola');
  for (let i = 0; i < 6; i++) body += C(116 + rr() * 90, 110 + rr() * 120, 2.5, 'rgba(255,255,255,0.5)');
  body += E(160, 88, 56, 10, '#F5F1E8') + R(102, 82, 116, 8, 4, '#EFE9DC');
  body += G(R(168, 18, 13, 76, 6, '#E23B4E'), 'transform="rotate(10 174 60)"') +
    G(R(168, 18, 5.5, 76, 3, 'rgba(255,255,255,0.4)'), 'transform="rotate(10 174 60)"');
  body += P('M 122 108 L 132 240', 'none', 'stroke="rgba(255,255,255,0.4)" stroke-width="7" stroke-linecap="round"');
  return { defs, body };
}

/* 火锅 */
function hotpot(o) {
  o = Object.assign({ soup: '#D8422C', tomato: false, chili: false, butter: false }, o);
  const cx = 160, ry = 158;
  const potG = lg([[0, '#B93A2C'], [1, '#7E1F16']]);
  let defs = potG.def;
  let body = shadow(268, 118, 15);
  body += P(`M ${cx - 118} ${ry} L ${cx - 110} ${ry + 84} Q ${cx - 108} ${ry + 96} ${cx - 96} ${ry + 96} L ${cx + 96} ${ry + 96} Q ${cx + 108} ${ry + 96} ${cx + 110} ${ry + 84} L ${cx + 118} ${ry} Z`, potG.ref);
  body += E(cx - 124, ry + 26, 12, 20, '#8E2A1D') + E(cx + 124, ry + 26, 12, 20, '#8E2A1D');
  body += E(cx, ry, 120, 32, '#5E1710');
  body += E(cx, ry, 108, 26, o.soup);
  const clip = id('pot'); defs += `<clipPath id="${clip}">${E(cx, ry, 108, 26, '#fff')}</clipPath>`;
  let inner = E(cx - 30, ry - 8, 50, 12, 'rgba(255,190,120,0.3)');
  const rr = rnd('hot');
  if (o.tomato) {
    for (let i = 0; i < 4; i++) {
      const tx = cx - 70 + i * 46, ty2 = ry - 6 + rr() * 14;
      inner += C(tx, ty2, 16, '#E85B3A') + C(tx, ty2, 10, '#F08A5E') + C(tx, ty2, 4, '#F7C79E');
    }
    inner += E(cx + 60, ry + 8, 10, 5, '#63A83E');
  }
  if (o.chili) {
    for (let i = 0; i < 6; i++) {
      const hx = cx - 80 + rr() * 160, hy = ry - 8 + rr() * 16;
      inner += R(hx - 12, hy - 5, 24, 10, 5, '#C22A18', `transform="rotate(${rr() * 80 - 40} ${hx} ${hy})"`);
    }
    for (let i = 0; i < 10; i++) inner += C(cx - 90 + rr() * 180, ry - 10 + rr() * 20, 2.2, '#F7E5C8');
    for (let i = 0; i < 5; i++) inner += C(cx - 80 + rr() * 160, ry - 6 + rr() * 12, 4, '#8AB84C');
  }
  if (o.butter) {
    inner += E(cx - 20, ry - 4, 34, 10, 'rgba(247,210,120,0.55)') + E(cx + 46, ry + 6, 22, 7, 'rgba(247,210,120,0.4)');
  }
  body += G(inner, `clip-path="url(#${clip})"`);
  body += steam(cx - 34, ry - 52) + steam(cx + 20, ry - 58, 0.5) + steam(cx + 62, ry - 46, 0.38);
  return { defs, body };
}

/* 肥牛卷盘 */
function beefRolls() {
  let defs = '', body = '';
  const roll = (cx, cy, r) =>
    C(cx, cy, r, '#F2B8B0') +
    P(`M ${cx + r - 3} ${cy} A ${r - 3} ${r - 3} 0 1 1 ${cx} ${cy - r + 3}`, 'none', 'stroke="#FBF0EA" stroke-width="6"') +
    P(`M ${cx + r - 11} ${cy} A ${r - 11} ${r - 11} 0 1 1 ${cx} ${cy - r + 11}`, 'none', 'stroke="#E88A80" stroke-width="5"') +
    C(cx, cy, r, 'none', 'stroke="#E09890" stroke-width="2.5"');
  body += roll(118, 172, 30) + roll(172, 160, 32) + roll(220, 180, 27) + roll(146, 210, 28) + roll(196, 216, 26);
  body += E(108, 214, 9, 5, '#63A83E') + E(236, 152, 8, 4, '#63A83E');
  return plate({ defs, body }, { cy: 200 });
}

/* 虾滑 */
function shrimpBalls() {
  const ball = rg([[0, '#F5AE96'], [1, '#E8836A']], 0.4, 0.35, 0.85);
  let defs = ball.def, body = '';
  [[128, 172, 30], [188, 164, 33], [160, 208, 29]].forEach(([x, y, r]) => {
    body += C(x, y, r, ball.ref) + E(x - r * 0.3, y - r * 0.35, r * 0.34, r * 0.2, 'rgba(255,255,255,0.5)');
  });
  body += P('M 214 206 q 22 -18 30 2 q 6 16 -12 20 q 4 -10 -4 -12 q -8 -2 -14 -10 Z', '#F08A5E') +
    P('M 216 208 q 10 -8 18 -2', 'none', 'stroke="#D96A44" stroke-width="2.5"') +
    E(108, 208, 9, 5, '#63A83E');
  return plate({ defs, body }, { cy: 202 });
}

/* 烤串 */
function skewers(o) {
  o = Object.assign({ n: 3, meat: '#B05C2A', fat: true, spice: true }, o);
  let defs = '', body = shadow(262, 100, 12);
  const meatG = lg([[0, shade(o.meat, 26)], [1, shade(o.meat, -18)]]);
  defs += meatG.def;
  for (let k = 0; k < o.n; k++) {
    const rot = (k - (o.n - 1) / 2) * 26;
    let s = R(156, 56, 8, 208, 4, '#D9B57C') + P('M 156 56 l 8 0 l -4 -14 Z', '#C9A15F');
    for (let i = 0; i < 3; i++) {
      const cy = 92 + i * 44;
      s += R(136, cy, 48, 36, 10, meatG.ref, `transform="rotate(${i % 2 ? 7 : -7} 160 ${cy + 18})"`);
      if (o.fat && i % 2) s += R(140, cy + 5, 17, 14, 5, 'rgba(255,238,210,0.75)', `transform="rotate(7 160 ${cy + 18})"`);
      s += P(`M ${141} ${cy + 27} q 7 4 15 2`, 'none', 'stroke="rgba(60,24,4,0.5)" stroke-width="3" stroke-linecap="round"');
    }
    if (o.spice) {
      const rr = rnd('sp' + k);
      for (let i = 0; i < 10; i++) s += C(136 + rr() * 48, 92 + rr() * 124, 1.8, i % 2 ? '#F2E2B8' : '#D8422C');
    }
    /* 以签尾为轴心呈扇形展开，避免肉块相互叠压 */
    body += G(s, `transform="rotate(${rot} 160 262)"`);
  }
  return { defs, body };
}

/* 烤/卤鸡翅（翅中两节造型：粗端渐细 + 关节折线） */
function grilledWings(o) {
  o = Object.assign({ glaze: '#B4571E', char: true }, o);
  const wingG = rg([[0, shade(o.glaze, 44)], [0.6, o.glaze], [1, shade(o.glaze, -28)]], 0.38, 0.3, 0.9);
  let defs = wingG.def;
  /* V 形两节翅：粗节 + 折角细节 + 关节鼓包 */
  const wing = (cx, cy, sc, rot) => G(
    G(R(-64, -17, 72, 36, 17, wingG.ref) + E(-46, -8, 14, 6, 'rgba(255,236,200,0.5)'), 'transform="rotate(-16 0 0)"') +
    G(R(-4, -14, 58, 28, 14, wingG.ref) + E(38, -4, 8, 4, 'rgba(255,236,200,0.35)'), 'transform="rotate(34 0 0)"') +
    C(0, 0, 15, wingG.ref) +
    (o.char
      ? P('M -44 6 q 8 5 18 3 M 14 18 q 7 4 14 2', 'none', 'stroke="rgba(60,22,4,0.55)" stroke-width="3.5" stroke-linecap="round"')
      : P('M -40 8 q 10 5 22 2', 'none', 'stroke="rgba(255,170,110,0.4)" stroke-width="4" stroke-linecap="round"')),
    `transform="translate(${cx} ${cy}) rotate(${rot}) scale(${sc})"`);
  const body = wing(150, 162, 1.04, -6) + wing(176, 210, 0.96, 10) +
    E(104, 210, 9, 5, '#63A83E') + C(232, 152, 3, '#F2E2B8') + C(222, 168, 2.5, '#F2E2B8');
  return plate({ defs, body }, { cy: 202 });
}

/* 烤韭菜 */
function grilledChives() {
  let defs = '', body = shadow(258, 100, 12);
  for (let k = -1; k <= 1; k++) {
    let s = R(156, 66, 7, 190, 3.5, '#D9B57C');
    for (let i = 0; i < 7; i++) {
      const gx = 132 + i * 8;
      s += R(gx, 84, 7, 130, 3.5, i % 2 ? '#5FA53C' : '#6FB84A');
      s += R(gx, 84, 7, 22, 3.5, '#4C8A2E');
    }
    const rr = rnd('cv' + k);
    for (let i = 0; i < 8; i++) s += C(132 + rr() * 56, 90 + rr() * 120, 1.7, i % 2 ? '#F2E2B8' : '#D8422C');
    body += G(s, `transform="rotate(${k * 14} 160 160)"`);
  }
  return { defs, body };
}

/* 烤茄子 */
function grilledEggplant() {
  const skin = lg([[0, '#6B3D8C'], [1, '#4A2263']]);
  const flesh = lg([[0, '#F5E3C0'], [1, '#E8CD9A']]);
  let defs = skin.def + flesh.def;
  let body = shadow(250, 110, 13);
  body += G(
    E(160, 180, 118, 46, skin.ref) +
    E(160, 172, 100, 30, flesh.ref) +
    P('M 70 172 q 90 22 180 0', 'none', 'stroke="#D9BC85" stroke-width="3"') +
    (() => { const rr = rnd('garlic'); let s = '';
      for (let i = 0; i < 16; i++) s += C(76 + rr() * 168, 158 + rr() * 26, 3.2, i % 3 ? '#F7EFCE' : '#E8B84A');
      for (let i = 0; i < 6; i++) s += E(80 + rr() * 160, 160 + rr() * 22, 6, 3, '#63A83E');
      return s; })() +
    P('M 42 180 q -18 -8 -10 -24 q 14 2 22 14', '#5FA53C'),
    'transform="rotate(-8 160 180)"');
  return { defs, body };
}

/* 蒸笼饺子 */
function steamerDumplings() {
  const wood = lg([[0, '#D9AE6B'], [1, '#B9884A']]);
  let defs = wood.def;
  let body = shadow(266, 116, 14);
  body += C(160, 190, 116, wood.ref);
  for (let i = 0; i < 36; i++) {
    const a = i * Math.PI / 18;
    body += P(`M ${160 + Math.cos(a) * 104} ${190 + Math.sin(a) * 104} L ${160 + Math.cos(a) * 116} ${190 + Math.sin(a) * 116}`, 'none', 'stroke="rgba(120,80,30,0.35)" stroke-width="3"');
  }
  body += C(160, 190, 100, '#EFE3C8');
  body += C(160, 190, 100, 'none', 'stroke="rgba(150,110,50,0.3)" stroke-width="4"');
  const dump = (cx, cy, rot) => G(
    E(cx, cy, 38, 24, '#FBF3DD') +
    E(cx - 10, cy - 8, 12, 6, 'rgba(255,255,255,0.8)') +
    [...Array(5)].map((_, i) => P(`M ${cx - 24 + i * 12} ${cy - 16} q 6 8 0 14`, 'none', 'stroke="#E3CFA4" stroke-width="2.5" stroke-linecap="round"')).join(''),
    `transform="rotate(${rot} ${cx} ${cy})"`);
  body += dump(160, 148, 0) + dump(118, 214, -24) + dump(202, 214, 24);
  body += steam(120, 92, 0.5) + steam(196, 86, 0.6);
  return { defs, body };
}

/* 炖罐汤 */
function soupCrock() {
  const pot = lg([[0, '#8A5A38'], [1, '#5E3820']]);
  const lid = lg([[0, '#9A6A44'], [1, '#6E4426']]);
  let defs = pot.def + lid.def;
  let body = shadow(264, 96, 13);
  body += P('M 76 168 Q 74 252 160 258 Q 246 252 244 168 Q 246 140 160 138 Q 74 140 76 168 Z', pot.ref);
  body += E(160, 140, 84, 18, lid.ref) + E(160, 132, 60, 12, lid.ref) + C(160, 122, 12, '#4E2C16');
  body += P('M 84 176 Q 82 236 150 250', 'none', 'stroke="rgba(255,222,180,0.25)" stroke-width="8" stroke-linecap="round"');
  body += E(160, 148, 84, 14, 'none', 'stroke="rgba(40,20,8,0.3)" stroke-width="3"');
  body += steam(130, 96, 0.55) + steam(190, 90, 0.45);
  return { defs, body };
}

/* 卤蛋 */
function braisedEggs() {
  const eggG = rg([[0, '#C98E4E'], [1, '#96612B']], 0.4, 0.3, 0.9);
  let defs = eggG.def, body = '';
  body += G(E(128, 176, 40, 50, eggG.ref) + E(116, 152, 12, 18, 'rgba(255,236,200,0.35)'), 'transform="rotate(-14 128 176)"');
  body += G(
    E(198, 190, 42, 34, '#F5E8CC') + C(198, 188, 19, '#E8A93F') + C(192, 182, 6, 'rgba(255,255,255,0.5)') +
    E(198, 190, 42, 34, 'none', 'stroke="#D9B981" stroke-width="3"'),
    'transform="rotate(10 198 190)"');
  body += E(120, 232, 10, 5, '#63A83E');
  return plate({ defs, body }, { cy: 206 });
}

/* 拌面 */
function mixedNoodles() {
  return noodleBowl({ broth: '#E8B85C', bowl: '#3E7C68', noodles: true, sauceNoodle: true,
    greens: 5, chili: 4, beef: 0, chop: true });
}

/* 凉拌黄瓜 */
function cucumberSalad() {
  let defs = '', body = '';
  const rr = rnd('cuke');
  for (let i = 0; i < 6; i++) {
    const cx = 112 + (i % 3) * 50 + rr() * 12, cy = 158 + Math.floor(i / 3) * 44 + rr() * 8, rot = rr() * 70 - 35;
    body += G(
      R(cx - 26, cy - 15, 52, 30, 10, '#5FA53C') + R(cx - 20, cy - 9, 40, 18, 7, '#A8D584') +
      E(cx, cy, 8, 5, '#D5EBB8'),
      `transform="rotate(${rot} ${cx} ${cy})"`);
  }
  for (let i = 0; i < 8; i++) body += C(104 + rr() * 116, 150 + rr() * 80, 2.6, i % 2 ? '#F7EFCE' : '#D8422C');
  body += C(226, 150, 5, '#D8422C') + C(226, 150, 2, '#F5C0B0');
  return plate({ defs, body }, { cy: 196 });
}

/* 手抓羊肉 */
function lambChunks() {
  const meat = rg([[0, '#C08050'], [0.7, '#9A5E33'], [1, '#7C4826']], 0.4, 0.3, 0.9);
  let defs = meat.def, body = '';
  const chunk = (cx, cy, w, h, rot) => G(
    R(cx - w / 2, cy - h / 2, w, h, 12, meat.ref) +
    C(cx - w / 2 + 8, cy, 7, '#F5EBD8') +
    E(cx, cy - h / 2 + 6, w / 3, 5, 'rgba(255,236,200,0.3)'),
    `transform="rotate(${rot} ${cx} ${cy})"`);
  body += chunk(126, 166, 64, 44, -12) + chunk(192, 158, 58, 42, 14) + chunk(158, 204, 62, 40, -4);
  const rr = rnd('onion');
  for (let i = 0; i < 5; i++) body += P(`M ${112 + rr() * 96} ${226 + rr() * 10} q 10 -6 20 0`, 'none', 'stroke="#F3EAD8" stroke-width="4" stroke-linecap="round"');
  return plate({ defs, body }, { cy: 200 });
}

/* 鸡汤 */
function chickenSoup() {
  const o = noodleBowl({ broth: '#EFC24E', bowl: '#F3EEE2', noodles: false, greens: 2, chili: 0 });
  let extra = '';
  const rr = rnd('cs');
  extra += E(140, 162, 28, 15, '#D89A4E') + E(188, 170, 24, 13, '#CE8C3E') +
    E(140, 162, 28, 15, 'none', 'stroke="rgba(150,88,20,0.5)" stroke-width="2.5"') +
    C(120, 156, 6, '#F5EBD8') +
    E(138, 156, 13, 5, 'rgba(255,244,214,0.65)');
  for (let i = 0; i < 6; i++) extra += C(110 + rr() * 100, 156 + rr() * 22, 3, '#D8422C');
  for (let i = 0; i < 8; i++) extra += C(90 + rr() * 140, 152 + rr() * 26, 2, 'rgba(247,214,120,0.85)');
  return { defs: o.defs, body: o.body + extra };
}

/* 梅菜扣肉套餐（便当） */
function bentoPork() {
  const box = lg([[0, '#E8DCC4'], [1, '#CFBF9E']]);
  let defs = box.def;
  let body = shadow(262, 118, 14);
  body += R(52, 148, 216, 104, 18, box.ref);
  body += R(60, 156, 96, 88, 12, '#FBF6EA');
  body += R(164, 156, 96, 88, 12, '#F3E8D2');
  // 米饭
  const rr = rnd('rice');
  body += E(108, 196, 40, 28, '#FDFAF2');
  for (let i = 0; i < 10; i++) body += E(80 + rr() * 56, 178 + rr() * 34, 5, 2.6, '#F1EADC', `transform="rotate(${rr() * 90} 100 190)"`);
  body += C(108, 178, 4, '#2E2622'); // 黑芝麻
  // 扣肉
  for (let i = 0; i < 4; i++) {
    const px = 176 + i * 20;
    body += G(R(px, 168, 17, 58, 6, i % 2 ? '#9A5228' : '#8A4620') + R(px, 168, 17, 12, 6, '#C98E5A'), `transform="rotate(${i % 2 ? 3 : -3} ${px} 196)"`);
  }
  body += E(212, 232, 30, 8, '#4E3A22') + steam(160, 120, 0.4);
  return { defs, body };
}

/* 蒸蛋 */
function steamedEgg() {
  const custard = rg([[0, '#F7D468'], [1, '#EFBB3F']], 0.42, 0.34, 0.85);
  const o = noodleBowl({ broth: '#F2C94C', bowl: '#F3EEE2', noodles: false, greens: 0, chili: 0 });
  let extra = E(160, 168, 102, 25, custard.ref) +
    E(130, 160, 30, 9, 'rgba(255,248,222,0.55)') +
    P('M 96 172 q 60 14 128 0', 'none', 'stroke="#C98E2E" stroke-width="3" opacity="0.5"');
  const rr = rnd('se');
  for (let i = 0; i < 7; i++) extra += E(90 + rr() * 140, 158 + rr() * 20, 4.5, 2.5, '#63A83E', `transform="rotate(${rr() * 90} 160 168)"`);
  return { defs: o.defs + custard.def, body: o.body + extra };
}

/* 葱油拌饭 */
function scallionRice() {
  const o = noodleBowl({ broth: '#FDFAF2', bowl: '#4A7DA8', noodles: false, greens: 0, chili: 0 });
  let extra = '';
  const rr = rnd('sr');
  extra += E(160, 160, 78, 34, '#FDFAF2');
  for (let i = 0; i < 16; i++) extra += E(92 + rr() * 136, 140 + rr() * 40, 6, 3, '#F1EADC', `transform="rotate(${rr() * 120} 160 160)"`);
  extra += P('M 110 150 q 50 22 104 4', 'none', 'stroke="#8A5A28" stroke-width="7" stroke-linecap="round" opacity="0.75"');
  for (let i = 0; i < 12; i++) extra += R(100 + rr() * 120, 138 + rr() * 36, 9, 4, 2, '#63A83E', `transform="rotate(${rr() * 90} 160 156)"`);
  return { defs: o.defs, body: o.body + extra };
}

/* 鸭脖 */
function duckNeck() {
  const g = rg([[0, '#8E3A28'], [0.7, '#6E2418'], [1, '#571A10']], 0.4, 0.3, 0.9);
  let defs = g.def, body = '';
  const seg = (cx, cy, rot) => G(
    R(cx - 34, cy - 17, 68, 34, 15, g.ref) +
    C(cx - 22, cy, 6, '#D9BD98') + C(cx + 22, cy, 6, '#D9BD98') +
    E(cx - 6, cy - 8, 14, 5, 'rgba(255,160,110,0.35)'),
    `transform="rotate(${rot} ${cx} ${cy})"`);
  body += seg(126, 164, -18) + seg(196, 158, 12) + seg(140, 204, 6) + seg(206, 208, -10);
  const rr = rnd('dn');
  for (let i = 0; i < 8; i++) body += C(104 + rr() * 120, 148 + rr() * 76, 2.4, i % 2 ? '#D8422C' : '#F2E2B8');
  return plate({ defs, body }, { cy: 200 });
}

/* 卤鸭翅 */
function braisedWings() {
  return (function () {
    const base = grilledWings({ glaze: '#7E3018', char: false });
    return base;
  })();
}

/* 虎皮凤爪 */
function chickenFeet() {
  const g = rg([[0, '#E2A45C'], [0.7, '#C9812E'], [1, '#A96420']], 0.4, 0.32, 0.9);
  let defs = g.def, body = '';
  const foot = (cx, cy, rot) => {
    let toes = '';
    for (let i = -1; i <= 1; i++)
      toes += G(R(cx - 7 + i * 18, cy - 52, 14, 42, 7, g.ref) + C(cx + i * 18, cy - 52, 7, g.ref), `transform="rotate(${i * 14} ${cx} ${cy - 12})"`);
    const rr = rnd('cf' + cx);
    let wrinkle = '';
    for (let i = 0; i < 6; i++) wrinkle += P(`M ${cx - 16 + rr() * 24} ${cy - 30 + rr() * 34} q 6 3 12 0`, 'none', 'stroke="rgba(130,70,16,0.45)" stroke-width="2.5" stroke-linecap="round"');
    return G(toes + E(cx, cy, 26, 30, g.ref) + wrinkle + E(cx - 8, cy - 10, 8, 5, 'rgba(255,236,190,0.4)'), `transform="rotate(${rot} ${cx} ${cy})"`);
  };
  body += foot(126, 186, -16) + foot(196, 178, 10);
  const rr = rnd('cfp');
  for (let i = 0; i < 6; i++) body += C(110 + rr() * 104, 222 + rr() * 12, 2.6, i % 2 ? '#D8422C' : '#F2E2B8');
  return plate({ defs, body }, { cy: 204 });
}

/* 藕片 */
function lotusRoot() {
  const g = rg([[0, '#F5E8D2'], [1, '#E5D2AE']], 0.4, 0.35, 0.9);
  let defs = g.def, body = '';
  const slice = (cx, cy, r, rot) => {
    let holes = C(cx, cy, r * 0.22, '#D8C4A0');
    for (let i = 0; i < 7; i++) {
      const a = i * Math.PI * 2 / 7;
      holes += E(cx + Math.cos(a) * r * 0.55, cy + Math.sin(a) * r * 0.55, r * 0.17, r * 0.14, '#D8C4A0');
    }
    return G(C(cx, cy, r, g.ref) + holes + C(cx, cy, r, 'none', 'stroke="#D2BC92" stroke-width="3"'), `transform="rotate(${rot} ${cx} ${cy})"`);
  };
  body += slice(126, 168, 42, 0) + slice(198, 162, 38, 20) + slice(162, 210, 40, -12);
  const rr = rnd('lr');
  for (let i = 0; i < 8; i++) body += C(108 + rr() * 108, 150 + rr() * 80, 2.6, i % 2 ? '#D8422C' : '#8E3A28');
  return plate({ defs, body }, { cy: 200 });
}

/* 冰粉 */
function iceJelly() {
  const jelly = rg([[0, 'rgba(190,120,60,0.75)'], [1, 'rgba(140,72,28,0.85)']], 0.4, 0.3, 0.9);
  const o = noodleBowl({ broth: '#B4703A', bowl: '#EAF2F0', noodles: false, greens: 0, chili: 0 });
  let extra = E(160, 164, 98, 24, jelly.ref);
  const rr = rnd('ij');
  extra += E(146, 154, 40, 14, 'rgba(255,255,255,0.28)');
  for (let i = 0; i < 7; i++) extra += C(92 + rr() * 136, 156 + rr() * 20, 4.5, '#C23A2A');
  for (let i = 0; i < 10; i++) extra += C(88 + rr() * 144, 152 + rr() * 24, 1.8, '#FBF2D8');
  extra += E(214, 152, 12, 7, '#F2D06A') + P('M 206 150 q 8 -8 16 0', 'none', 'stroke="#D9A73A" stroke-width="3"');
  return { defs: o.defs + jelly.def, body: o.body + extra };
}

/* 现炸酥肉 */
function crispyPork() {
  const g = rg([[0, '#EFB955'], [0.7, '#D8952F'], [1, '#B87722']], 0.4, 0.32, 0.9);
  let defs = g.def;
  let body = shadow(258, 108, 13);
  // 纸篮
  body += P('M 68 176 L 84 252 Q 85 258 92 258 L 228 258 Q 235 258 236 252 L 252 176 Z', '#C9A15F');
  body += P('M 78 176 L 92 246 L 228 246 L 242 176 Z', '#FBF6E8');
  const strip = (cx, cy, len, rot) => G(
    R(cx - len / 2, cy - 13, len, 26, 12, g.ref) + crispDots(cx, cy, 'cp' + cx + rot) +
    E(cx - len / 4, cy - 6, len / 5, 4, 'rgba(255,244,210,0.5)'),
    `transform="rotate(${rot} ${cx} ${cy})"`);
  body += strip(130, 150, 88, -24) + strip(186, 142, 92, 12) + strip(152, 176, 96, -6) + strip(206, 182, 80, 24);
  const rr = rnd('cpp');
  for (let i = 0; i < 6; i++) body += C(112 + rr() * 100, 132 + rr() * 60, 2.2, '#F2E2B8');
  return { defs, body };
}

/* 毛肚（波浪叶片 + 密集刺点纹理） */
function tripe() {
  const g = rg([[0, '#B08650'], [1, '#8A6234']], 0.4, 0.35, 0.9);
  let defs = g.def, body = '';
  const piece = (cx, cy, rot) => {
    let d = `M ${cx - 36} ${cy}`;
    for (let i = 0; i < 4; i++) d += ` q 9 ${-20 - (i % 2) * 8} 18 0`;
    d += ` q -2 26 -34 28 q -34 2 -38 -28 Z`;
    const rr = rnd('tp' + cx); let dots = '';
    for (let i = 0; i < 22; i++) dots += C(cx - 30 + rr() * 60, cy - 2 + rr() * 22, 1.5, 'rgba(70,42,12,0.45)');
    let fringe = '';
    for (let i = 0; i < 4; i++) fringe += P(`M ${cx - 30 + i * 18} ${cy - 10 - (i % 2) * 7} q 4 4 9 3`, 'none', 'stroke="rgba(255,232,190,0.4)" stroke-width="3" stroke-linecap="round"');
    return G(P(d, g.ref) + dots + fringe, `transform="rotate(${rot} ${cx} ${cy})"`);
  };
  body += piece(126, 160, -12) + piece(198, 154, 10) + piece(148, 202, 4) + piece(212, 204, -16);
  body += E(110, 228, 9, 5, '#63A83E') + C(232, 140, 3.5, '#D8422C');
  return plate({ defs, body }, { cy: 198 });
}

/* 软欧包 */
function softBread() {
  const g = rg([[0, '#E8B366'], [0.7, '#CE9440'], [1, '#B0762C']], 0.4, 0.3, 0.9);
  let defs = g.def;
  let body = shadow(250, 110, 13);
  body += G(
    E(160, 184, 112, 52, g.ref) +
    P('M 92 166 q 24 -14 44 4', 'none', 'stroke="#F5E3BC" stroke-width="9" stroke-linecap="round"') +
    P('M 142 156 q 24 -12 44 6', 'none', 'stroke="#F5E3BC" stroke-width="9" stroke-linecap="round"') +
    P('M 192 160 q 22 -10 38 8', 'none', 'stroke="#F5E3BC" stroke-width="9" stroke-linecap="round"') +
    E(112, 162, 20, 9, 'rgba(255,240,208,0.45)'),
    'transform="rotate(-6 160 184)"');
  const rr = rnd('flour');
  for (let i = 0; i < 12; i++) body += C(84 + rr() * 152, 140 + rr() * 80, 1.6, 'rgba(255,250,235,0.8)');
  return { defs, body };
}

/* 脏脏包（可颂层次 + 巧克力淋面 + 可可粉尘） */
function dirtyBun() {
  const g = rg([[0, '#8A5A32'], [0.65, '#6B4020'], [1, '#4E2A10']], 0.4, 0.3, 0.9);
  let defs = g.def;
  let body = shadow(252, 104, 13);
  body += E(160, 186, 100, 56, g.ref);
  // 可颂层次弧线
  body += P('M 78 196 Q 118 168 160 176 M 160 176 Q 206 168 242 196', 'none', 'stroke="rgba(40,20,6,0.4)" stroke-width="5" stroke-linecap="round"');
  body += P('M 100 216 Q 140 196 180 208 M 180 208 Q 214 200 234 216', 'none', 'stroke="rgba(40,20,6,0.3)" stroke-width="4" stroke-linecap="round"');
  // 顶部巧克力淋面（垂直流挂，避免表情感）
  body += P('M 160 132 Q 108 134 92 158 L 100 172 Q 130 150 160 150 Q 194 150 222 172 L 228 156 Q 210 134 160 132 Z', '#3A1C08');
  body += P('M 112 158 q 3 12 0 20 M 148 150 q 3 14 0 24 M 190 152 q 3 12 0 22 M 216 164 q 3 10 0 16', 'none', 'stroke="#3A1C08" stroke-width="8" stroke-linecap="round"');
  // 可可粉厚敷 + 散落
  const rr = rnd('cocoa');
  for (let i = 0; i < 34; i++) body += C(72 + rr() * 176, 138 + rr() * 92, 1.3 + rr() * 1.9, 'rgba(74,40,16,0.7)');
  for (let i = 0; i < 12; i++) body += C(84 + rr() * 152, 250 + rr() * 14, 1.5 + rr() * 1.8, 'rgba(74,40,16,0.45)');
  body += E(126, 172, 22, 9, 'rgba(190,140,90,0.35)');
  return { defs, body };
}

/* 蜂蜜蛋糕 */
function honeyCake() {
  const g = lg([[0, '#F2C459'], [1, '#D89A2E']]);
  const top = lg([[0, '#B0762C'], [1, '#9A6220']]);
  let defs = g.def + top.def, body = '';
  const cube = (cx, cy, w, h, rot) => G(
    R(cx - w / 2, cy - h / 2, w, h, 6, g.ref) +
    R(cx - w / 2, cy - h / 2, w, 12, 6, top.ref) +
    P(`M ${cx - w / 2 + 6} ${cy + h / 2 - 8} h ${w - 12}`, 'none', 'stroke="rgba(150,90,20,0.3)" stroke-width="2.5"'),
    `transform="rotate(${rot} ${cx} ${cy})"`);
  body += cube(132, 176, 92, 64, -6) + cube(200, 190, 84, 58, 8);
  body += P('M 150 148 q 6 18 0 30 q -5 10 2 18', 'none', 'stroke="#E8A93F" stroke-width="6" stroke-linecap="round" opacity="0.85"');
  return plate({ defs, body }, { cy: 208 });
}

/* 半熟芝士（金黄芝士体 + 焦面 + 褶皱纸托） */
function halfBakedCheese() {
  const g = rg([[0, '#F5CE5E'], [0.6, '#EFB438'], [1, '#D08E22']], 0.42, 0.28, 0.9);
  let defs = g.def;
  let body = shadow(258, 104, 13);
  // 褶皱纸托（有色差可见）
  body += P('M 66 196 L 82 250 Q 84 258 92 258 L 228 258 Q 236 258 238 250 L 254 196 Z', '#D9C9A6');
  for (let i = 0; i < 9; i++) body += P(`M ${78 + i * 20} 200 L ${86 + i * 18} 252`, 'none', 'stroke="rgba(120,95,50,0.28)" stroke-width="4"');
  // 芝士体（饱满圆挺）
  body += E(160, 172, 92, 62, g.ref);
  // 焦面
  body += E(160, 148, 66, 26, 'rgba(178,100,22,0.55)');
  body += E(160, 148, 44, 16, 'rgba(150,78,12,0.45)');
  body += E(132, 138, 24, 9, 'rgba(255,246,214,0.6)');
  // 底边烘烤色
  body += P('M 72 190 Q 160 240 248 190', 'none', 'stroke="rgba(160,96,20,0.35)" stroke-width="8"');
  return { defs, body };
}

/* 提拉米苏/千层切块 */
function cakeSlice(o) {
  o = Object.assign({ layers: ['#7A4A26', '#F5E8CC', '#8A5A32', '#F5E8CC'], cocoa: true, berry: false }, o);
  let defs = '', body = shadow(252, 96, 12);
  const x0 = 92, x1 = 228, yTop = 130, h = 100;
  const lh = h / o.layers.length;
  o.layers.forEach((c, i) => {
    body += R(x0, yTop + 24 + i * lh, x1 - x0, lh + 1, i === o.layers.length - 1 ? 8 : 0, c);
  });
  body += P(`M ${x0} ${yTop + 24} L ${x0 + 34} ${yTop} L ${x1 + 24} ${yTop} L ${x1} ${yTop + 24} Z`, o.cocoa ? '#5C3216' : '#F2E3C4');
  if (o.cocoa) {
    const rr = rnd('tira');
    for (let i = 0; i < 14; i++) body += C(x0 + 10 + rr() * (x1 - x0 - 4), yTop + 4 + rr() * 16, 1.5, 'rgba(60,30,10,0.6)');
    body += P(`M ${x1 - 40} ${yTop + 8} q 10 -18 26 -10 q -2 12 -16 14 Z`, '#5FA53C');
  }
  if (o.berry) body += C(x1 - 30, yTop + 4, 12, '#E23B4E') + P(`M ${x1 - 34} ${yTop - 6} q 6 -8 12 0`, 'none', 'stroke="#5FA53C" stroke-width="3"');
  body += P(`M ${x0} ${yTop + 24} L ${x0} ${yTop + 24 + h} L ${x1} ${yTop + 24 + h} L ${x1} ${yTop + 24}`, 'none', 'stroke="rgba(90,50,20,0.25)" stroke-width="3"');
  return { defs, body };
}

/* ---------- 店招 logo ---------- */
function shopLogo(c1, c2, motif) {
  const bgG = lg([[0, c1], [1, c2]], 0, 0, 1, 1);
  const sheen = lg([[0, 'rgba(255,255,255,0.25)'], [1, 'rgba(255,255,255,0)']], 0, 0, 1, 1);
  const defs = bgG.def + sheen.def + (motif.defs || '');
  const body =
    `<rect width="320" height="320" rx="64" fill="${bgG.ref}"/>` +
    P('M 0 0 L 320 0 L 0 320 Z', sheen.ref) +
    C(160, 160, 118, 'rgba(255,255,255,0.14)') +
    C(160, 160, 118, 'none', 'stroke="rgba(255,255,255,0.5)" stroke-width="5"') +
    motif.body;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 320 320"><defs>${defs}</defs>${body}</svg>`;
}
const W = 'rgba(255,255,255,0.95)';
/* 简化白色图形（logo 用） */
const motifs = {
  burger: () => ({ body:
    P('M 92 150 Q 92 96 160 96 Q 228 96 228 150 Z', W) +
    R(88, 158, 144, 16, 8, W) + R(96, 182, 128, 14, 7, W) +
    P('M 88 204 L 232 204 Q 230 232 200 232 L 120 232 Q 90 232 88 204 Z', W) +
    E(132, 120, 7, 4, 'rgba(230,120,40,0.9)') + E(172, 112, 7, 4, 'rgba(230,120,40,0.9)') + E(196, 130, 7, 4, 'rgba(230,120,40,0.9)') }),
  drumstick: () => ({ body:
    E(148, 142, 58, 48, W) + E(120, 118, 24, 18, W) +
    R(186, 168, 52, 18, 9, W, 'transform="rotate(38 200 178)"') +
    C(236, 210, 12, W) + C(220, 226, 12, W) }),
  crown: () => ({ body:
    P('M 92 196 L 84 120 L 124 156 L 160 100 L 196 156 L 236 120 L 228 196 Z', W) +
    R(92, 204, 136, 20, 8, W) +
    C(84, 112, 10, W) + C(160, 90, 10, W) + C(236, 112, 10, W) }),
  teacup: () => ({ body:
    P('M 104 112 L 116 224 Q 117 232 125 232 L 195 232 Q 203 232 204 224 L 216 112 Z', W) +
    E(160, 112, 56, 12, 'rgba(255,255,255,0.7)') +
    C(138, 196, 9, 'rgba(120,80,40,0.55)') + C(164, 204, 9, 'rgba(120,80,40,0.55)') + C(186, 192, 9, 'rgba(120,80,40,0.55)') +
    R(168, 64, 14, 52, 7, W, 'transform="rotate(12 175 90)"') }),
  icecream: () => ({ body:
    P('M 124 160 L 160 248 L 196 160 Z', W) +
    E(160, 148, 42, 20, W) + E(160, 128, 34, 16, W) +
    P('M 146 116 Q 158 96 174 114 Q 166 124 146 116 Z', W) }),
  leaf: () => ({ body:
    P('M 160 84 Q 232 120 212 196 Q 196 248 160 240 Q 124 248 108 196 Q 88 120 160 84 Z', W) +
    P('M 160 100 L 160 236', 'none', 'stroke="rgba(30,120,80,0.5)" stroke-width="6"') +
    P('M 160 140 q -26 8 -36 30 M 160 176 q 26 8 36 30', 'none', 'stroke="rgba(30,120,80,0.5)" stroke-width="5" stroke-linecap="round"') }),
  coffee: () => ({ body:
    P('M 100 120 Q 98 216 160 220 Q 222 216 220 120 Z', W) +
    P('M 218 136 q 36 0 32 30 q -4 28 -36 22', 'none', `stroke="${W}" stroke-width="12"`) +
    E(160, 120, 60, 14, 'rgba(255,255,255,0.7)') +
    P('M 138 74 q 8 12 0 24 M 166 68 q 8 12 0 24', 'none', `stroke="${W}" stroke-width="7" stroke-linecap="round"`) }),
  deer: () => ({ body:
    C(160, 176, 54, W) +
    P('M 128 130 Q 104 108 108 76 M 108 96 L 88 84 M 192 130 Q 216 108 212 76 M 212 96 L 232 84', 'none', `stroke="${W}" stroke-width="10" stroke-linecap="round"`) +
    C(142, 168, 7, 'rgba(40,60,120,0.7)') + C(178, 168, 7, 'rgba(40,60,120,0.7)') +
    E(160, 196, 14, 9, 'rgba(40,60,120,0.55)') }),
  hotpot: () => ({ body:
    P('M 84 148 L 92 216 Q 94 232 110 232 L 210 232 Q 226 232 228 216 L 236 148 Z', W) +
    E(160, 148, 76, 16, 'rgba(255,255,255,0.7)') +
    R(52, 142, 26, 12, 6, W) + R(242, 142, 26, 12, 6, W) +
    P('M 132 108 q 8 14 0 26 M 160 100 q 8 14 0 26 M 188 108 q 8 14 0 26', 'none', `stroke="${W}" stroke-width="7" stroke-linecap="round"`) }),
  chili: () => ({ body:
    P('M 122 112 Q 106 176 136 216 Q 166 254 210 240 Q 238 230 228 210 Q 220 196 200 206 Q 172 218 158 178 Q 146 144 152 112 Z', W) +
    P('M 118 100 Q 138 76 168 92 Q 156 110 132 108 Q 120 106 118 100 Z', 'rgba(120,190,90,0.95)') +
    P('M 136 92 q -4 -16 8 -22', 'none', 'stroke="rgba(120,190,90,0.95)" stroke-width="8" stroke-linecap="round"') }),
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
  chicken: () => ({ body:
    C(160, 172, 62, W) + C(160, 108, 34, W) +
    P('M 148 76 q -4 -18 12 -14 q 14 4 4 18 Z', 'rgba(220,80,60,0.9)') +
    P('M 176 104 l 22 6 l -22 8 Z', 'rgba(240,170,60,0.95)') +
    C(150, 100, 5, 'rgba(60,50,40,0.8)') }),
  duck: () => ({ body:
    E(160, 190, 74, 50, W) + C(120, 128, 32, W) +
    P('M 92 124 l -26 8 l 26 10 Z', 'rgba(240,170,60,0.95)') +
    C(112, 120, 5, 'rgba(60,50,40,0.8)') +
    P('M 196 172 q 34 -10 30 16 q -22 14 -44 2', 'rgba(255,255,255,0.7)') }),
  cake: () => ({ body:
    P('M 96 232 L 96 160 Q 160 132 224 160 L 224 232 Z', W) +
    R(88, 224, 144, 16, 8, W) +
    P('M 96 168 q 16 20 32 0 q 16 20 32 0 q 16 20 32 0 q 16 20 32 0', 'none', 'stroke="rgba(230,120,140,0.75)" stroke-width="8" stroke-linecap="round"') +
    C(160, 122, 10, 'rgba(230,80,90,0.9)') + R(156, 96, 8, 24, 4, 'rgba(255,255,255,0.85)') })
};

/* ---------- 商品 → 渲染器映射 ---------- */
const CREAM = '#FFF6E6';
const products = {
  /* 麦当当 */
  p0101: () => scene('#FFF3DC', '#F5DCAE', burger({ patties: 2, tomato: true })),
  p0102: () => scene('#FFF3DC', '#F5DCAE', burger({ patties: 1, fish: true, lettuce: false, w: 184 })),
  p0103: () => scene('#FFF0D6', '#F2D6A2', friesBox()),
  p0104: () => scene('#FFF4E2', '#F7DFC0', coneIceCream()),
  /* 啃德鸡 */
  p0201: () => scene('#FFEFD8', '#F2D2A0', friedChicken()),
  p0202: () => scene('#FFEFD8', '#F2D2A0', burger({ patties: 1, spicy: true, w: 190 })),
  p0203: () => scene('#FFF4E0', '#F5DDB2', eggTart()),
  p0204: () => scene('#FFEFD8', '#F2D2A0', popcornBucket()),
  /* 汉堡堡王 */
  p0301: () => scene('#FBEBD2', '#EFD3A2', burger({ patties: 1, grill: true, tomato: true, w: 206 })),
  p0302: () => scene('#FBEBD2', '#EFD3A2', burger({ patties: 3, grill: true, w: 200, baseY: 248 })),
  p0303: () => scene('#FBEED8', '#F0D8AC', onionRings()),
  p0304: () => scene('#F3EFE6', '#DFD8C8', colaCup()),
  /* 喜茶茶 */
  p0401: () => scene('#F2EEF8', '#DED4EE', drink({
    layers: [['#8A5BB8', 0.45], ['#B88BD9', 0.3], ['#E3D3F2', 0.25]],
    fruit: 6, fruitColor: '#6E3F96', foam: CREAM, straw: '#8A5BB8' })),
  p0402: () => scene('#FBEDF0', '#F2D2DA', drink({
    layers: [['#E5586E', 0.4], ['#F08CA0', 0.35], ['#FAD9E0', 0.25]],
    fruit: 5, fruitColor: '#C93850', foam: CREAM, slice: 'strawberry' })),
  p0403: () => scene('#F5EEE4', '#E8D8C0', drink({
    layers: [['#C9A36B', 0.72], ['#E2C89A', 0.28]],
    pearls: 9, stripes: '#6E4426', straw: '#4E342E' })),
  p0404: () => scene('#EFF5EA', '#D9E8CE', drink({
    layers: [['#C2DE9E', 0.7], ['#DDEFC6', 0.3]], ice: 4, slice: 'lemon' })),
  /* 蜜雪冰冰城 */
  p0501: () => scene('#FBF6E2', '#F2E4B8', drink({
    layers: [['#F2DE86', 0.75], ['#F9EFC0', 0.25]], ice: 5, slice: 'lemon', straw: '#E23B4E' })),
  p0502: () => scene('#FBEFF0', '#F2D8DC', drink({
    layers: [['#F5C7D2', 0.8], ['#FAE3E9', 0.2]], dome: true, cream: true, straw: '#E86A8A', topY: 108 })),
  p0503: () => scene('#FBF0E6', '#F2DCC6', drink({
    layers: [['#F2E2C8', 0.8], ['#E8A08A', 0.2]], cream: true, drizzle: '#D84C3A', cherry: true,
    topY: 122, topW: 150, botW: 88, botY: 250 })),
  p0504: () => scene('#F5EEE4', '#E8D8C0', drink({
    layers: [['#D9B98C', 0.85], ['#E8D3AE', 0.15]], pearls: 10, lid: true, straw: '#8A5BB8' })),
  /* 奈雪的茶茶 */
  p0601: () => scene('#FBF1E0', '#F5DFB8', drink({
    layers: [['#F5A83C', 0.55], ['#FBCF7E', 0.45]], fruit: 5, fruitColor: '#E88A1E', ice: 3, slice: 'orange' })),
  p0602: () => scene('#FBEDF0', '#F2D2DA', drink({
    layers: [['#E5586E', 0.5], ['#F5A8B8', 0.5]], foam: CREAM, fruit: 4, fruitColor: '#C93850', slice: 'strawberry' })),
  p0603: () => scene('#F7EFE2', '#EBDCC2', softBread()),
  p0604: () => scene('#F5EFE0', '#EADCBC', drink({
    layers: [['#B8792E', 0.4], ['#D9A24E', 0.35], ['#EFC989', 0.25]], foam: CREAM, cream: true, topY: 104 })),
  /* 星巴巴克 */
  p0701: () => scene('#EDF2EC', '#D6E2D4', drink({
    layers: [['#FBF6EC', 0.55], ['#B87938', 0.45]], ice: 4, straw: '#2E5C42' })),
  p0702: () => scene('#F2EDE4', '#E0D6C4', drink({
    layers: [['#8A5A2E', 0.35], ['#C9955A', 0.3], ['#F2E3CC', 0.35]],
    drizzle: '#B8792E', topY: 92, topW: 124, botW: 100 })),
  p0703: () => scene('#EDF2EC', '#D6E2D4', drink({
    layers: [['#C9A87A', 0.7], ['#DEC49C', 0.3]], dome: true, cream: true, drizzle: '#8A5A2E', straw: '#2E5C42', topY: 110, ice: 3 })),
  p0704: () => scene('#F5EFE6', '#E8DCC8', cakeSlice({ layers: ['#8A5A32', '#F5E8CC', '#7A4A26', '#F2E3C4'], cocoa: true })),
  /* 瑞幸幸咖啡 */
  p0801: () => scene('#EEF1F6', '#D8DEEC', mug({ art: 'heart', coffee: '#B8895A' })),
  p0802: () => scene('#EEF1F6', '#D8DEEC', drink({
    layers: [['#6E4426', 0.55], ['#8A5A32', 0.15], ['#FBF8F0', 0.3]], topY: 96, dust: '#8A5A32' })),
  p0803: () => scene('#F0EEE8', '#DCD8CC', mug({ art: 'crema', coffee: '#3E2618' })),
  p0804: () => scene('#EEF3F5', '#D8E4E8', drink({
    layers: [['#C9B090', 0.6], ['#E5D6BC', 0.4]], foam: '#FBF4E2', dust: '#8A5A32', ice: 4, straw: '#4E7A8A' })),
  /* 海底捞捞 */
  p0901: () => scene('#FBEFE4', '#F2DCC6', hotpot({ soup: '#E85B3A', tomato: true })),
  p0902: () => scene('#FBF0EC', '#F2DAD2', beefRolls()),
  p0903: () => scene('#FBF2EA', '#F2E0CE', shrimpBalls()),
  p0904: () => scene('#FBF3E4', '#F2E2C4', noodleBowl({ broth: '#EFCB70', bowl: '#D8422C', beef: 2, greens: 4, chop: true })),
  /* 蜀大大侠 */
  p1001: () => scene('#FBECE0', '#F2D6BE', hotpot({ soup: '#B71E17', chili: true, butter: true })),
  p1002: () => scene('#FBF0E4', '#F0DCC2', tripe()),
  p1003: () => scene('#FBF1E0', '#F2DEB8', crispyPork()),
  p1004: () => scene('#F0F4F2', '#DAE6E0', iceJelly()),
  /* 木屋烧烤烤 */
  p1101: () => scene('#F5EADA', '#E8D4B4', skewers({ n: 3 })),
  p1102: () => scene('#F5EADA', '#E8D4B4', grilledWings({ glaze: '#B4571E' })),
  p1103: () => scene('#F0F2E4', '#DCE2C4', grilledChives()),
  p1104: () => scene('#F2EEF4', '#DFD6E8', grilledEggplant()),
  /* 沙县小小吃 */
  p1201: () => scene('#FBF4E2', '#F0E2C0', steamerDumplings()),
  p1202: () => scene('#FBF2E0', '#F0DEBA', mixedNoodles()),
  p1203: () => scene('#F7EFE0', '#EADABA', soupCrock()),
  p1204: () => scene('#FBF2E4', '#F0DEC4', braisedEggs()),
  /* 兰州拉拉面 */
  p1301: () => scene('#FBF3E2', '#F2E2BE', noodleBowl({ broth: '#EFCB70', bowl: '#4A7DA8', beef: 2, radish: 2, greens: 5, chili: 5 })),
  p1302: () => scene('#FBF3E2', '#F2E2BE', noodleBowl({ broth: '#EFCB70', bowl: '#4A7DA8', beef: 3, eggHalf: true, greens: 5, chili: 5, chop: true })),
  p1303: () => scene('#F0F4E8', '#DCE6C8', cucumberSalad()),
  p1304: () => scene('#F7EFE2', '#EADCC2', lambChunks()),
  /* 老乡鸡鸡 */
  p1401: () => scene('#FBF4E0', '#F2E4BC', chickenSoup()),
  p1402: () => scene('#F7F1E4', '#EBDFC6', bentoPork()),
  p1403: () => scene('#FBF5E4', '#F2E6C4', steamedEgg()),
  p1404: () => scene('#F5F2E8', '#E6E0CC', scallionRice()),
  /* 周黑黑鸭 */
  p1501: () => scene('#F5ECE8', '#E8D6CE', duckNeck()),
  p1502: () => scene('#F5ECE8', '#E8D6CE', braisedWings()),
  p1503: () => scene('#F7EFE4', '#EBDDC6', chickenFeet()),
  p1504: () => scene('#F2F0EA', '#E0DCCE', lotusRoot()),
  /* 好利来来 */
  p1601: () => scene('#FBF2E8', '#F2E0CC', halfBakedCheese()),
  p1602: () => scene('#F2ECE6', '#E0D4C8', dirtyBun()),
  p1603: () => scene('#FBF4E2', '#F2E4BE', honeyCake()),
  p1604: () => scene('#FBF0EA', '#F2DCD2', cakeSlice({ layers: ['#F2E3C4', '#E8C89A', '#F2E3C4', '#D9A86E'], cocoa: false, berry: true }))
};

/* ---------- 店招映射 ---------- */
const shops = {
  s01: () => shopLogo('#F5C518', '#E8960C', motifs.burger()),
  s02: () => shopLogo('#E23B30', '#B71E17', motifs.drumstick()),
  s03: () => shopLogo('#8A4A1E', '#5E3010', motifs.crown()),
  s04: () => shopLogo('#3E3A38', '#1F1C1A', motifs.teacup()),
  s05: () => shopLogo('#E84A5A', '#C42840', motifs.icecream()),
  s06: () => shopLogo('#8A5BB8', '#5E3A8C', motifs.leaf()),
  s07: () => shopLogo('#1E6650', '#0E4636', motifs.coffee()),
  s08: () => shopLogo('#2C4A8A', '#16305E', motifs.deer()),
  s09: () => shopLogo('#D8422C', '#A82818', motifs.hotpot()),
  s10: () => shopLogo('#B0281C', '#7E160E', motifs.chili()),
  s11: () => shopLogo('#7A4A26', '#4E2C12', motifs.skewer()),
  s12: () => shopLogo('#3E8A5E', '#256844', motifs.dumpling()),
  s13: () => shopLogo('#2E6EA6', '#1A4E7E', motifs.noodle()),
  s14: () => shopLogo('#E88A1E', '#C4660A', motifs.chicken()),
  s15: () => shopLogo('#3A2430', '#221018', motifs.duck()),
  s16: () => shopLogo('#D85A78', '#B03050', motifs.cake())
};

/* ---------- 分类图标（圆形彩底 + 白色图形） ---------- */
function catIcon(c1, c2, motif, scale) {
  const bgG = lg([[0, c1], [1, c2]], 0, 0, 1, 1);
  const defs = bgG.def + (motif.defs || '');
  const body =
    C(160, 160, 150, bgG.ref) +
    C(160, 160, 150, 'none', 'stroke="rgba(255,255,255,0.35)" stroke-width="6"') +
    P('M 40 80 A 150 150 0 0 1 240 36', 'none', 'stroke="rgba(255,255,255,0.28)" stroke-width="14" stroke-linecap="round"') +
    G(motif.body, `transform="translate(${160 - 160 * (scale || 0.8)} ${160 - 160 * (scale || 0.8)}) scale(${scale || 0.8})"`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 320 320"><defs>${defs}</defs>${body}</svg>`;
}
/* 全部：刀叉 */
motifs.cutlery = () => ({ body:
  R(108, 76, 14, 170, 7, W) +
  P('M 92 76 L 92 130 Q 92 148 115 148 Q 138 148 138 130 L 138 76', 'none', `stroke="${W}" stroke-width="12" stroke-linecap="round"`) +
  R(196, 76, 14, 170, 7, W) +
  P('M 226 76 Q 236 120 214 140 L 214 76 Z', W) });
/* 家常：饭碗 */
motifs.rice = () => ({ body:
  P('M 84 156 Q 84 236 160 240 Q 236 236 236 156 Z', W) +
  E(160, 150, 62, 26, W) + E(160, 138, 44, 18, W) +
  G(R(190, 60, 9, 90, 4, W) + R(208, 66, 9, 90, 4, W), 'transform="rotate(28 200 100)"') });

const cats = {
  all:     () => catIcon('#F5A623', '#E8830C', motifs.cutlery(), 0.74),
  burger:  () => catIcon('#F2994A', '#E0691E', motifs.burger(), 0.8),
  milktea: () => catIcon('#B08968', '#8A5F3C', motifs.teacup(), 0.8),
  coffee:  () => catIcon('#7A5230', '#54321A', motifs.coffee(), 0.8),
  hotpot:  () => catIcon('#E0533C', '#B8301E', motifs.hotpot(), 0.8),
  homely:  () => catIcon('#5BA85C', '#3A7E3C', motifs.rice(), 0.78),
  noodle:  () => catIcon('#4A88C7', '#2C61A0', motifs.noodle(), 0.8),
  night:   () => catIcon('#6E5A9E', '#4A3878', motifs.skewer(), 0.8),
  dessert: () => catIcon('#E4708C', '#C24460', motifs.cake(), 0.8)
};

/* ---------- 渲染 ---------- */
async function main() {
  const jobs = [];
  for (const [pid, fn] of Object.entries(products)) {
    jobs.push(sharp(Buffer.from(fn())).webp({ quality: 82 }).toFile(path.join(OUT, pid + '.webp')));
  }
  for (const [sid, fn] of Object.entries(shops)) {
    jobs.push(sharp(Buffer.from(fn())).webp({ quality: 84 }).toFile(path.join(OUT, 'shop_' + sid + '.webp')));
  }
  for (const [cid, fn] of Object.entries(cats)) {
    jobs.push(sharp(Buffer.from(fn())).resize(128, 128).webp({ quality: 84 }).toFile(path.join(OUT, 'cat_' + cid + '.webp')));
  }
  await Promise.all(jobs);
  const files = fs.readdirSync(OUT).filter(f => f.endsWith('.webp'));
  const total = files.reduce((s, f) => s + fs.statSync(path.join(OUT, f)).size, 0);
  console.log(`rendered ${files.length} images, total ${(total / 1024).toFixed(0)} KB`);
}

main().catch(e => { console.error(e); process.exit(1); });
