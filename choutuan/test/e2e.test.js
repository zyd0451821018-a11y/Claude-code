/* ============================================================
 * 丑团 · e2e.test.js —— jsdom 浏览器级端到端测试
 * 主闭环 M1-M24 + 边界 B1-B8
 * 运行：npm test
 * ============================================================ */

'use strict';

const fs = require('fs');
const path = require('path');
const { JSDOM, VirtualConsole } = require('jsdom');

const ROOT = path.join(__dirname, '..');
const SCRIPTS = ['js/data.js', 'js/state.js', 'js/views.js', 'js/app.js']
  .map(f => fs.readFileSync(path.join(ROOT, f), 'utf8'));
const HTML = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8')
  .replace(/<script[^>]*><\/script>/g, '')
  .replace(/<link[^>]*>/g, '');

/* 固定时钟起点：2026-07-06（周一）14:00 本地时间 */
const BASE = new Date(2026, 6, 6, 14, 0, 0).getTime();

let passed = 0, failed = 0;
const failures = [];

function check(id, desc, cond) {
  if (cond) { passed++; console.log(`  ✅ ${id} ${desc}`); }
  else { failed++; failures.push(`${id} ${desc}`); console.log(`  ❌ ${id} ${desc}`); }
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function boot(preSeedState) {
  const vc = new VirtualConsole(); // 吞掉 jsdom 的 not-implemented 噪音
  const dom = new JSDOM(HTML, {
    url: 'http://localhost/index.html',
    runScripts: 'dangerously',
    pretendToBeVisual: true,
    virtualConsole: vc
  });
  const win = dom.window;
  if (preSeedState) win.localStorage.setItem('choutuan_state_v1', preSeedState);
  else win.localStorage.removeItem('choutuan_state_v1');
  SCRIPTS.forEach(src => {
    const s = win.document.createElement('script');
    s.textContent = src;
    win.document.body.appendChild(s);
  });
  return { dom, win };
}

function click(win, el) {
  el.dispatchEvent(new win.MouseEvent('click', { bubbles: true, cancelable: true }));
}

function $(win, sel) { return win.document.querySelector(sel); }
function $$(win, sel) { return Array.from(win.document.querySelectorAll(sel)); }
function text(win, sel) { const el = $(win, sel); return el ? el.textContent : ''; }
function appHTML(win) { return $(win, '#app').innerHTML; }

async function nav(win, hash) { win.location.hash = hash; await sleep(30); }

async function main() {
  console.log('\n丑团 · 端到端测试\n==================');

  const { dom, win } = boot(null);
  let clock = BASE;
  win.CT_STATE.__setNowFn(() => clock);
  const S = win.CT_STATE;
  await sleep(30);

  /* ================= 主闭环 ================= */
  console.log('\n[主闭环]');

  // M1 首页店铺流
  check('M1', '首页渲染 16 家店铺卡片', $$(win, '.shop-card').length === 16);

  // M2 秒杀区 + 倒计时格式
  const cd = text(win, '#seckill-countdown');
  check('M2', '限时秒杀区存在且倒计时为 HH:MM:SS 格式',
    $$(win, '.seckill-card').length > 0 && /^\d{2}:\d{2}:\d{2}$/.test(cd));

  // M3 分类筛选
  click(win, $$(win, '.cat-item').find(el => el.dataset.cat === 'milktea'));
  await sleep(10);
  check('M3', '分类筛选「奶茶饮品」后只剩 3 家店铺', $$(win, '.shop-card').length === 3);
  click(win, $$(win, '.cat-item').find(el => el.dataset.cat === 'all'));
  await sleep(10);

  // M4 进店
  await nav(win, '#/shop/s04');
  check('M4', '店铺页渲染店招/公告/菜单（喜茶茶）',
    text(win, '.hero-name') === '喜茶茶' && appHTML(win).includes('公告') && $$(win, '.product-row').length === 4);

  // M5 加购 → 结算条更新
  const plusOf = pid => $$(win, `.step-btn.plus[data-pid="${pid}"]`)[0];
  click(win, plusOf('p0401')); await sleep(10); // 多肉葡萄萄 19 元
  check('M5', '加购后结算条显示小计 ¥19.00', text(win, '.bar-price').includes('19.00'));

  // M6 起送门槛（喜茶茶起送 ¥15，已达）→ 去结算按钮激活
  check('M6', '达到起送价后按钮变为「去结算」', text(win, '.bar-btn') === '去结算');

  // M7 步进器增减
  click(win, plusOf('p0401')); await sleep(10);
  const qty2 = S.cartQty('p0401') === 2;
  click(win, $$(win, `.step-btn.minus[data-pid="p0401"]`)[0]); await sleep(10);
  check('M7', '步进器 + / − 正常增减数量', qty2 && S.cartQty('p0401') === 1);

  // M8 商品详情 + 评价区
  await nav(win, '#/product/p0401');
  check('M8', '商品详情页含券后价/划线原价/评价区',
    appHTML(win).includes('19.00') && appHTML(win).includes('25.00') && $$(win, '.review').length >= 3);

  // M9 收藏
  click(win, $(win, '.fav-btn')); await sleep(10);
  check('M9', '点击收藏后状态为已收藏', S.isFavorite('p0401') && text(win, '.fav-btn').includes('已收藏'));

  // M10 搜索有结果
  await nav(win, '#/search');
  $(win, '#search-input').value = '奶茶';
  click(win, $(win, '.search-go')); await sleep(10);
  check('M10', '搜索「奶茶」返回相关商品', $$(win, '.product-row').length > 0);

  // M11 搜索历史（走真实入口：首页搜索框）
  await nav(win, '#/home');
  click(win, $(win, '.search-entry')); await sleep(30);
  check('M11', '搜索历史记录「奶茶」', $$(win, '.chip').some(c => c.textContent === '奶茶'));

  // M12 跨店分组：再加一家店的商品
  S.addToCart('p0501', 3); // 蜜雪 柠檬水 4 元 ×3 = 12（起送10）
  await nav(win, '#/cart');
  check('M12', '购物车跨店分为 2 组', $$(win, '.cart-group').length === 2);

  // M13 分组小计
  const cartHTML = appHTML(win);
  check('M13', '各组小计正确（¥19.00 / ¥12.00）',
    cartHTML.includes('19.00') && cartHTML.includes('12.00'));

  // M14 去结算 → 金额 = 小计 + 打包费2 + 配送费3
  click(win, $$(win, '.mini-btn.active').find(b => b.dataset.shop === 's04')); await sleep(30);
  const sum = S.checkoutSummary('s04');
  check('M14', '确认订单合计 = 小计19 + 打包2 + 配送3 = 24.00',
    sum && sum.total === 24 && appHTML(win).includes('24.00'));

  // M15 已优惠 = 原价 25 - 券后 19 = 6
  check('M15', '「已优惠」按原价自动计算为 ¥6.00', sum.saved === 6 && appHTML(win).includes('-¥6.00'));

  // M16 白天提交订单 → 直接出支付面板（无深夜提示）
  win.document.getElementById('remark-input').value = '少冰，谢谢';
  click(win, $(win, '.sb-btn')); await sleep(10);
  check('M16', '白天提交订单直接弹出支付面板', !!$(win, '.sheet') && !$(win, '.modal'));

  // M17 确认支付 → 支付成功页
  click(win, $(win, '[data-action="pay-confirm"]')); await sleep(950);
  check('M17', '支付后进入支付成功页', appHTML(win).includes('支付成功'));

  // M18 订单已创建、该店购物车清空、备注入快照
  const order1 = S.orders()[0];
  check('M18', '订单快照正确且该店购物车已清空',
    S.orders().length === 1 && order1.total === 24 && order1.remark === '少冰，谢谢' &&
    !S.shopCartGroup('s04') && S.cartCount() === 3);

  // M19 订单追踪页：阶段0 + ETA 倒计时 + 骑手卡
  await nav(win, '#/order/' + order1.id);
  check('M19', '追踪页显示「商家已接单」+ ETA + 骑手卡',
    appHTML(win).includes('商家已接单') && !!$(win, '#eta-countdown') && !!$(win, '.rider-card'));

  // M20 时钟推进 4 阶段 → 已送达
  clock += S.STEP_MS * 4 + 500;
  win.CT_APP.render(); await sleep(10);
  check('M20', '60 秒后五阶段推进至「已送达」',
    S.deliveryStageIndex(order1) === 4 && appHTML(win).includes('已送达') &&
    !!$(win, '[data-action="confirm-receipt"]'));

  // M21 确认收货
  click(win, $(win, '[data-action="confirm-receipt"]')); await sleep(10);
  check('M21', '确认收货后订单变为已完成', order1.received && appHTML(win).includes('订单已完成'));

  // M22 再来一单
  click(win, $(win, '[data-action="reorder"]')); await sleep(30);
  check('M22', '再来一单：商品回到购物车并跳转购物车页',
    S.cartQty('p0401') === 1 && win.location.hash === '#/cart');

  // M23 订单列表
  await nav(win, '#/orders');
  check('M23', '订单列表显示已完成订单与操作按钮',
    $$(win, '.order-card').length === 1 && appHTML(win).includes('已完成') && appHTML(win).includes('再来一单'));

  // M24 深夜下单 → 温和提示 → 先放一放 → 继续下单 → 周报
  clock = new Date(2026, 6, 6, 23, 30, 0).getTime(); // 当晚 23:30
  await nav(win, '#/checkout/s05'); // 蜜雪组（12 元 ≥ 起送10）
  click(win, $(win, '.sb-btn')); await sleep(10);
  const modalShown = !!$(win, '.modal') && text(win, '.modal-title').includes('23:30');
  const gentle = text(win, '.modal-text').includes('先留在购物车');
  click(win, $(win, '[data-action="latenight-hold"]')); await sleep(30);
  const held = S.cartQty('p0501') === 3 && win.location.hash === '#/home';
  // 再次提交并继续下单
  await nav(win, '#/checkout/s05');
  click(win, $(win, '.sb-btn')); await sleep(10);
  click(win, $(win, '[data-action="latenight-continue"]')); await sleep(10);
  click(win, $(win, '[data-action="pay-confirm"]')); await sleep(950);
  const nightOrder = S.orders()[0];
  check('M24', '深夜提示→先放一放（购物车保留）→继续下单成功',
    modalShown && gentle && held && S.orders().length === 2 && nightOrder.shopId === 's05');

  /* ---- 周报验证（并入主闭环最后一环）---- */
  console.log('\n[消费周报]');
  const r = S.weeklyReport();
  check('M24a', '周报金额 = 两单合计', r.weekTotal === S.round2(24 + nightOrder.total) && r.weekCount === 2);
  check('M24b', '时段分布：下午 1 笔 / 深夜 1 笔',
    r.slotCount.afternoon === 1 && r.slotCount.lateNight === 1);
  // 克制正反馈：收藏 p0402（从未购买）
  S.toggleFavorite('p0402');
  const r2 = S.weeklyReport();
  check('M24c', '克制正反馈：收藏未购商品计入忍住金额',
    r2.resisted.some(e => e.product.id === 'p0402') && r2.resistedAmount >= 21);
  await nav(win, '#/report');
  check('M24d', '周报页渲染金额/分布/深夜提示/克制卡',
    appHTML(win).includes('下单时段分布') && appHTML(win).includes('深夜时段') &&
    appHTML(win).includes('被你稳稳接住的冲动'));

  /* ================= 边界用例 ================= */
  console.log('\n[边界]');

  // B1 结算不存在的店铺组
  check('B1', 'checkoutSummary(空店铺) 返回 null 且页面兜底',
    S.checkoutSummary('s09') === null);
  await nav(win, '#/checkout/s09');
  check('B1a', '空店铺结算页显示兜底文案', appHTML(win).includes('购物车中没有该店铺的商品'));

  // B2 重复确认收货
  check('B2', '重复确认收货返回 false', S.confirmReceipt(order1.id) === false);

  // B3 不存在的订单
  await nav(win, '#/order/NOPE');
  check('B3', '不存在订单显示兜底页', appHTML(win).includes('订单不存在'));

  // B4 搜索无结果空态
  await nav(win, '#/search');
  $(win, '#search-input').value = '螺丝钉炒蛋';
  click(win, $(win, '.search-go')); await sleep(10);
  check('B4', '无结果搜索显示空态', appHTML(win).includes('没有找到'));

  // B5 未达起送价不可结算
  S.addToCart('p0904', 1); // 海底捞捞 12 元 < 起送60
  await nav(win, '#/shop/s09');
  check('B5', '未达起送价显示「差X元起送」且不可点',
    text(win, '.bar-btn').includes('差48.00元起送') && !$(win, '.bar-btn.active'));
  S.removeFromCart('p0904');

  // B6 金额精度
  S.addToCart('p0801', 3); // 13.9 × 3 = 41.7
  const g = S.shopCartGroup('s08');
  check('B6', '小数金额精确到分（13.9×3 = 41.70）', g.subtotal === 41.7 && S.yuan(g.subtotal) === '41.70');
  S.removeFromCart('p0801');

  // B7 非法商品 id 不崩溃
  S.addToCart('p_ghost', 2);
  const groupsOk = S.cartGroups().every(gr => gr.items.every(it => it.product));
  check('B7', '非法商品 id 不进入分组、页面不崩溃', groupsOk);
  S.removeFromCart('p_ghost');

  // B8 持久化：新窗口恢复 + 清除缓存
  const snapshot = win.localStorage.getItem('choutuan_state_v1');
  const fresh = boot(snapshot);
  fresh.win.CT_STATE.__setNowFn(() => clock);
  await sleep(30);
  const S2 = fresh.win.CT_STATE;
  const restored = S2.orders().length === 2 && S2.cartQty('p0501') === 0 &&
    S2.cartQty('p0401') === 1 && S2.isFavorite('p0402');
  S2.reset();
  const wiped = S2.orders().length === 0 && S2.cartCount() === 0 && S2.favoriteEntries().length === 0;
  check('B8', '刷新恢复购物车/订单/收藏；清除缓存后全部重置', restored && wiped);
  fresh.dom.window.close();

  /* ================= 真实入口烟雾测试 ================= */
  console.log('\n[真实入口]');
  const realDom = await JSDOM.fromFile(path.join(ROOT, 'index.html'), {
    resources: 'usable', runScripts: 'dangerously',
    pretendToBeVisual: true, virtualConsole: new VirtualConsole()
  });
  await sleep(800);
  const rw = realDom.window;
  check('S1', 'index.html 按序加载四层脚本并渲染首页',
    ['CT_DATA', 'CT_STATE', 'CT_VIEWS', 'CT_APP'].every(k => typeof rw[k] === 'object') &&
    rw.document.querySelectorAll('.shop-card').length === 16 &&
    rw.location.hash === '#/home');
  realDom.window.close();

  /* ================= 汇总 ================= */
  console.log('\n==================');
  console.log(`通过 ${passed} / ${passed + failed}`);
  if (failed) {
    console.log('失败用例：');
    failures.forEach(f => console.log('  ✗ ' + f));
  }
  dom.window.close();
  process.exit(failed ? 1 : 0);
}

main().catch(e => { console.error(e); process.exit(1); });
