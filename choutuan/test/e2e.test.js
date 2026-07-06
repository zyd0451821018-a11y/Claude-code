/* ============================================================
 * 丑团 · e2e.test.js —— jsdom 浏览器级端到端测试
 * 主闭环 M1-M24 + 边界 B1-B8 + 真实入口 S1
 * 断言锚点从 CT_DATA 动态派生，目录规模变化不需要改测试
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
  const vc = new VirtualConsole();
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
  const D = win.CT_DATA;
  await sleep(30);

  /* ---- 数据锚点（随目录自动适配） ---- */
  const yuan = S.yuan;
  const pizzaShop = D.SHOPS.find(s => s.name === '必胜胜客');
  const anchor = pizzaShop.products[0];                 // 招牌秒杀商品（价格 ≥ 起送）
  const anchor2 = pizzaShop.products[1];                // 收藏用
  const drinkShop = D.SHOPS.find(s => s.name === '蜜雪冰冰城');
  const cheapDrink = drinkShop.products[0];             // 低价饮品（×3 过起送）
  const bigShop = D.SHOPS.find(s => s.name === '海底捞捞');   // 高起送门槛
  const burgerShops = D.SHOPS.filter(s => s.category === 'burger').length;

  /* ================= 主闭环 ================= */
  console.log('\n[主闭环]');

  // M1 首页店铺流
  check('M1', `首页渲染全部 ${D.SHOPS.length} 家店铺卡片`,
    $$(win, '.shop-card').length === D.SHOPS.length && D.SHOPS.length >= 40);

  // M1a 目录规模：翻 20 倍（≥1280 SKU）
  const totalSku = D.SHOPS.reduce((n, s) => n + s.products.length, 0);
  check('M1a', `目录共 ${totalSku} 款商品（≥1280，为最初 64 款的 20 倍+）`, totalSku >= 1280);

  // M2 秒杀区 + 倒计时格式
  const cd = text(win, '#seckill-countdown');
  check('M2', '限时秒杀区存在且倒计时为 HH:MM:SS 格式',
    $$(win, '.seckill-card').length > 0 && /^\d{2}:\d{2}:\d{2}$/.test(cd));

  // M2a 真实产品图渲染
  check('M2a', '店铺卡与秒杀位渲染真实产品图（非 emoji）',
    appHTML(win).includes('img/shop_s01.webp') && /img\/[a-z]+[\d-]*\.webp/.test(appHTML(win)) &&
    $$(win, '.shop-logo img.ph').length === D.SHOPS.length);

  // M3 分类筛选
  click(win, $$(win, '.cat-item').find(el => el.dataset.cat === 'burger'));
  await sleep(10);
  check('M3', `分类筛选「汉堡炸鸡」后剩 ${burgerShops} 家店铺`,
    $$(win, '.shop-card').length === burgerShops && burgerShops >= 5);
  click(win, $$(win, '.cat-item').find(el => el.dataset.cat === 'all'));
  await sleep(10);

  // M4 进店
  await nav(win, '#/shop/' + pizzaShop.id);
  check('M4', `店铺页渲染店招/公告/完整菜单（${pizzaShop.name}，${pizzaShop.products.length} 款）`,
    text(win, '.hero-name') === pizzaShop.name && appHTML(win).includes('公告') &&
    $$(win, '.product-row').length === pizzaShop.products.length &&
    pizzaShop.products.length >= 30);

  // M5 加购 → 结算条更新
  const plusOf = pid => $$(win, `.step-btn.plus[data-pid="${pid}"]`)[0];
  click(win, plusOf(anchor.id)); await sleep(10);
  check('M5', `加购后结算条显示小计 ¥${yuan(anchor.price)}`,
    text(win, '.bar-price').includes(yuan(anchor.price)));

  // M6 起送门槛
  check('M6', '达到起送价后按钮变为「去结算」', text(win, '.bar-btn') === '去结算');

  // M7 步进器增减
  click(win, plusOf(anchor.id)); await sleep(10);
  const qty2 = S.cartQty(anchor.id) === 2;
  click(win, $$(win, `.step-btn.minus[data-pid="${anchor.id}"]`)[0]); await sleep(10);
  check('M7', '步进器 + / − 正常增减数量', qty2 && S.cartQty(anchor.id) === 1);

  // M8 商品详情 + 评价区
  await nav(win, '#/product/' + anchor.id);
  check('M8', '商品详情页含券后价/划线原价/评价区',
    appHTML(win).includes(yuan(anchor.price)) && appHTML(win).includes(yuan(anchor.origPrice)) &&
    $$(win, '.review').length >= 3);

  // M9 收藏
  click(win, $(win, '.fav-btn')); await sleep(10);
  check('M9', '点击收藏后状态为已收藏',
    S.isFavorite(anchor.id) && text(win, '.fav-btn').includes('已收藏'));

  // M10 搜索有结果
  await nav(win, '#/search');
  $(win, '#search-input').value = '披萨';
  click(win, $(win, '.search-go')); await sleep(10);
  check('M10', '搜索「披萨」返回相关商品', $$(win, '.product-row').length > 0);

  // M11 搜索历史（走真实入口：首页搜索框）
  await nav(win, '#/home');
  click(win, $(win, '.search-entry')); await sleep(30);
  check('M11', '搜索历史记录「披萨」', $$(win, '.chip').some(c => c.textContent === '披萨'));

  // M12 跨店分组
  S.addToCart(cheapDrink.id, 3);
  await nav(win, '#/cart');
  check('M12', '购物车跨店分为 2 组', $$(win, '.cart-group').length === 2);

  // M13 分组小计
  const drinkSubtotal = S.round2(cheapDrink.price * 3);
  check('M13', `各组小计正确（¥${yuan(anchor.price)} / ¥${yuan(drinkSubtotal)}）`,
    appHTML(win).includes(yuan(anchor.price)) && appHTML(win).includes(yuan(drinkSubtotal)));

  // M14 去结算 → 合计 = 小计 + 打包费 + 配送费
  click(win, $$(win, '.mini-btn.active').find(b => b.dataset.shop === pizzaShop.id)); await sleep(30);
  const sum = S.checkoutSummary(pizzaShop.id);
  const expTotal = S.round2(anchor.price + S.PACK_FEE + pizzaShop.deliveryFee);
  check('M14', `确认订单合计 = ${yuan(anchor.price)}+${S.PACK_FEE}+${pizzaShop.deliveryFee} = ${yuan(expTotal)}`,
    sum && sum.total === expTotal && appHTML(win).includes(yuan(expTotal)));

  // M15 已优惠 = 原价差
  const expSaved = S.round2(anchor.origPrice - anchor.price);
  check('M15', `「已优惠」按原价自动计算为 ¥${yuan(expSaved)}`,
    sum.saved === expSaved && appHTML(win).includes('-¥' + yuan(expSaved)));

  // M16 白天提交订单 → 支付面板
  win.document.getElementById('remark-input').value = '少冰，谢谢';
  click(win, $(win, '.sb-btn')); await sleep(10);
  check('M16', '白天提交订单直接弹出支付面板', !!$(win, '.sheet') && !$(win, '.modal'));

  // M17 确认支付 → 支付成功页
  click(win, $(win, '[data-action="pay-confirm"]')); await sleep(950);
  check('M17', '支付后进入支付成功页', appHTML(win).includes('支付成功'));

  // M18 订单快照 + 购物车清空
  const order1 = S.orders()[0];
  check('M18', '订单快照正确且该店购物车已清空',
    S.orders().length === 1 && order1.total === expTotal && order1.remark === '少冰，谢谢' &&
    !S.shopCartGroup(pizzaShop.id) && S.cartCount() === 3);

  // M19 订单追踪页
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
    S.cartQty(anchor.id) === 1 && win.location.hash === '#/cart');

  // M23 订单列表
  await nav(win, '#/orders');
  check('M23', '订单列表显示已完成订单与操作按钮',
    $$(win, '.order-card').length === 1 && appHTML(win).includes('已完成') && appHTML(win).includes('再来一单'));

  // M24 深夜下单 → 温和提示 → 先放一放 → 继续下单
  clock = new Date(2026, 6, 6, 23, 30, 0).getTime();
  await nav(win, '#/checkout/' + drinkShop.id);
  click(win, $(win, '.sb-btn')); await sleep(10);
  const modalShown = !!$(win, '.modal') && text(win, '.modal-title').includes('23:30');
  const gentle = text(win, '.modal-text').includes('先留在购物车');
  click(win, $(win, '[data-action="latenight-hold"]')); await sleep(30);
  const held = S.cartQty(cheapDrink.id) === 3 && win.location.hash === '#/home';
  await nav(win, '#/checkout/' + drinkShop.id);
  click(win, $(win, '.sb-btn')); await sleep(10);
  click(win, $(win, '[data-action="latenight-continue"]')); await sleep(10);
  click(win, $(win, '[data-action="pay-confirm"]')); await sleep(950);
  const nightOrder = S.orders()[0];
  check('M24', '深夜提示→先放一放（购物车保留）→继续下单成功',
    modalShown && gentle && held && S.orders().length === 2 && nightOrder.shopId === drinkShop.id);

  /* ---- 周报 ---- */
  console.log('\n[消费周报]');
  const r = S.weeklyReport();
  check('M24a', '周报金额 = 两单合计',
    r.weekTotal === S.round2(order1.total + nightOrder.total) && r.weekCount === 2);
  check('M24b', '时段分布：下午 1 笔 / 深夜 1 笔',
    r.slotCount.afternoon === 1 && r.slotCount.lateNight === 1);
  S.toggleFavorite(anchor2.id);
  const r2 = S.weeklyReport();
  check('M24c', '克制正反馈：收藏未购商品计入忍住金额',
    r2.resisted.some(e => e.product.id === anchor2.id) && r2.resistedAmount >= anchor2.price);
  await nav(win, '#/report');
  check('M24d', '周报页渲染金额/分布/深夜提示/克制卡',
    appHTML(win).includes('下单时段分布') && appHTML(win).includes('深夜时段') &&
    appHTML(win).includes('被你稳稳接住的冲动'));

  // M24e 订单列表随配送阶段自动刷新
  await nav(win, '#/orders');
  const beforeLabel = text(win, '.oc-status');
  clock += S.STEP_MS * 2 + 500;
  win.CT_APP.__private.tick(); await sleep(10);
  win.CT_APP.__private.tick(); await sleep(10);
  check('M24e', '订单列表页随配送阶段推进自动刷新',
    beforeLabel === '商家已接单' && text(win, '.oc-status') === '骑手已取货');

  /* ================= 边界用例 ================= */
  console.log('\n[边界]');

  // B1 结算空店铺
  check('B1', 'checkoutSummary(空店铺) 返回 null', S.checkoutSummary(bigShop.id) === null);
  await nav(win, '#/checkout/' + bigShop.id);
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

  // B5 未达起送价不可结算（高门槛店 + 最便宜商品）
  const cheapest = bigShop.products.reduce((a, b) => a.price < b.price ? a : b);
  S.addToCart(cheapest.id, 1);
  await nav(win, '#/shop/' + bigShop.id);
  const gap = yuan(bigShop.minOrder - cheapest.price);
  check('B5', `未达起送价显示「差${gap}元起送」且不可点`,
    text(win, '.bar-btn').includes('差' + gap + '元起送') && !$(win, '.bar-btn.active'));
  S.removeFromCart(cheapest.id);

  // B6 金额精度（找一个带角分的价格 ×3）
  const frac = D.allProducts().map(e => e.product).find(p => Math.round(p.price * 10) % 10 === 9);
  S.addToCart(frac.id, 3);
  const fracShop = D.getShopOfProduct(frac.id);
  const g = S.shopCartGroup(fracShop.id);
  check('B6', `小数金额精确到分（${frac.price}×3 = ${yuan(frac.price * 3)}）`,
    g.subtotal === S.round2(frac.price * 3) && yuan(g.subtotal) === yuan(frac.price * 3));
  S.removeFromCart(frac.id);

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
  const restored = S2.orders().length === 2 && S2.cartQty(cheapDrink.id) === 0 &&
    S2.cartQty(anchor.id) === 1 && S2.isFavorite(anchor2.id);
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
    rw.document.querySelectorAll('.shop-card').length === rw.CT_DATA.SHOPS.length &&
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
