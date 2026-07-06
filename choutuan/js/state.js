/* ============================================================
 * 丑团 · state.js —— 状态层
 * 购物车 / 收藏 / 订单 / 地址 / 搜索历史 / 周报统计
 * 全部持久化到 localStorage，刷新不丢
 * ============================================================ */

'use strict';

var CT_STATE = (function () {

  var DATA = (typeof CT_DATA !== 'undefined') ? CT_DATA : require('./data.js');

  /* 演示加速：配送每 STEP_MS 推进一阶段，5 阶段约 1 分钟走完 */
  var STEP_MS = 15000;

  var STORAGE_KEY = 'choutuan_state_v1';

  var DELIVERY_STAGES = [
    { key: 'accepted',  label: '商家已接单', desc: '商家正在确认您的订单' },
    { key: 'packing',   label: '商家打包中', desc: '美味正在出锅装盒' },
    { key: 'pickedup',  label: '骑手已取货', desc: '骑手已从商家取货，正向您飞奔' },
    { key: 'arriving',  label: '骑手即将送达', desc: '骑手距您只有几百米了' },
    { key: 'delivered', label: '已送达',     desc: '订单已送达，请及时取餐' }
  ];

  /* 时段划分（不问心情，只看行为）：
     上午 06:00-11:59 / 下午 12:00-17:59 / 晚间 18:00-21:59 / 深夜 22:00-05:59 */
  var TIME_SLOTS = [
    { key: 'morning',   label: '上午', icon: '🌤️' },
    { key: 'afternoon', label: '下午', icon: '☀️' },
    { key: 'evening',   label: '晚间', icon: '🌆' },
    { key: 'lateNight', label: '深夜', icon: '🌙' }
  ];

  /* ---------- 可注入时钟（测试用，产品行为不变） ---------- */
  var _nowFn = function () { return Date.now(); };
  function now() { return _nowFn(); }
  function __setNowFn(fn) { _nowFn = fn || function () { return Date.now(); }; }

  /* ---------- 持久化 ---------- */
  function defaultState() {
    return {
      cart: [],                 // [{pid, qty}]
      favorites: [],            // [pid]
      orders: [],               // 新的在前
      searchHistory: [],        // [keyword]
      addresses: JSON.parse(JSON.stringify(DATA.DEFAULT_ADDRESSES)),
      selectedAddressId: DATA.DEFAULT_ADDRESSES[0].id,
      orderSeq: 0
    };
  }

  var state = load();

  function storage() {
    if (typeof localStorage !== 'undefined') return localStorage;
    return null;
  }

  function load() {
    try {
      var s = storage();
      if (s) {
        var raw = s.getItem(STORAGE_KEY);
        if (raw) {
          var parsed = JSON.parse(raw);
          var base = defaultState();
          Object.keys(base).forEach(function (k) {
            if (parsed[k] === undefined) parsed[k] = base[k];
          });
          return parsed;
        }
      }
    } catch (e) { /* 数据损坏则重置 */ }
    return defaultState();
  }

  function save() {
    try {
      var s = storage();
      if (s) s.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) { /* 存储满/隐私模式时静默降级为内存态 */ }
  }

  function reset() {
    state = defaultState();
    save();
  }

  /* ---------- 金额工具 ---------- */
  function yuan(n) { return (Math.round(n * 100) / 100).toFixed(2); }
  function round2(n) { return Math.round(n * 100) / 100; }

  /* ---------- 购物车 ---------- */
  function cartQty(pid) {
    for (var i = 0; i < state.cart.length; i++) {
      if (state.cart[i].pid === pid) return state.cart[i].qty;
    }
    return 0;
  }

  function addToCart(pid, delta) {
    delta = delta === undefined ? 1 : delta;
    var prod = DATA.getProduct(pid);
    if (delta > 0 && prod && prod.soldout) return; // 售罄不可加购
    var item = null;
    for (var i = 0; i < state.cart.length; i++) {
      if (state.cart[i].pid === pid) { item = state.cart[i]; break; }
    }
    if (!item) {
      if (delta <= 0) return;
      state.cart.push({ pid: pid, qty: delta });
    } else {
      item.qty += delta;
      if (item.qty <= 0) {
        state.cart = state.cart.filter(function (c) { return c.pid !== pid; });
      }
    }
    save();
  }

  function removeFromCart(pid) {
    state.cart = state.cart.filter(function (c) { return c.pid !== pid; });
    save();
  }

  function clearCartOfShop(shopId) {
    state.cart = state.cart.filter(function (c) {
      var shop = DATA.getShopOfProduct(c.pid);
      return !shop || shop.id !== shopId;
    });
    save();
  }

  function cartCount() {
    return state.cart.reduce(function (sum, c) { return sum + c.qty; }, 0);
  }

  /* 跨店按店铺分组，各组分别小计 */
  function cartGroups() {
    var byShop = {};
    var order = [];
    state.cart.forEach(function (c) {
      var shop = DATA.getShopOfProduct(c.pid);
      var product = DATA.getProduct(c.pid);
      if (!shop || !product) return;
      if (!byShop[shop.id]) {
        byShop[shop.id] = { shop: shop, items: [], subtotal: 0, origSubtotal: 0, count: 0 };
        order.push(shop.id);
      }
      var g = byShop[shop.id];
      g.items.push({ product: product, qty: c.qty });
      g.subtotal = round2(g.subtotal + product.price * c.qty);
      g.origSubtotal = round2(g.origSubtotal + product.origPrice * c.qty);
      g.count += c.qty;
    });
    return order.map(function (sid) { return byShop[sid]; });
  }

  function shopCartGroup(shopId) {
    var groups = cartGroups();
    for (var i = 0; i < groups.length; i++) {
      if (groups[i].shop.id === shopId) return groups[i];
    }
    return null;
  }

  /* ---------- 收藏 ---------- */
  function isFavorite(pid) { return state.favorites.indexOf(pid) !== -1; }

  function toggleFavorite(pid) {
    var idx = state.favorites.indexOf(pid);
    if (idx === -1) state.favorites.push(pid);
    else state.favorites.splice(idx, 1);
    save();
    return idx === -1; // true = 已收藏
  }

  function favoriteEntries() {
    return state.favorites.map(function (pid) {
      return { product: DATA.getProduct(pid), shop: DATA.getShopOfProduct(pid) };
    }).filter(function (e) { return e.product && e.shop; });
  }

  /* ---------- 地址 ---------- */
  function addresses() { return state.addresses; }

  function selectedAddress() {
    for (var i = 0; i < state.addresses.length; i++) {
      if (state.addresses[i].id === state.selectedAddressId) return state.addresses[i];
    }
    return state.addresses[0] || null;
  }

  function selectAddress(id) { state.selectedAddressId = id; save(); }

  function addAddress(addr) {
    addr.id = 'a' + (state.addresses.length + 1) + '_' + now();
    state.addresses.push(addr);
    state.selectedAddressId = addr.id;
    save();
    return addr;
  }

  /* ---------- 搜索历史 ---------- */
  function pushSearchHistory(kw) {
    kw = String(kw || '').trim();
    if (!kw) return;
    state.searchHistory = state.searchHistory.filter(function (k) { return k !== kw; });
    state.searchHistory.unshift(kw);
    if (state.searchHistory.length > 10) state.searchHistory.length = 10;
    save();
  }

  function clearSearchHistory() { state.searchHistory = []; save(); }

  /* ---------- 下单 ---------- */
  var PACK_FEE = 2; // 打包费

  /* 计算某店铺组的结算金额（含"已优惠"= 原价 - 券后价 之和） */
  function checkoutSummary(shopId) {
    var g = shopCartGroup(shopId);
    if (!g) return null;
    var itemsTotal = g.subtotal;
    var saved = round2(g.origSubtotal - g.subtotal);
    var total = round2(itemsTotal + PACK_FEE + g.shop.deliveryFee);
    return {
      group: g,
      itemsTotal: itemsTotal,
      packFee: PACK_FEE,
      deliveryFee: g.shop.deliveryFee,
      saved: saved,
      total: total
    };
  }

  /* 下单：为指定店铺创建订单快照并清空该店铺购物车 */
  function placeOrder(shopId, opts) {
    opts = opts || {};
    var sum = checkoutSummary(shopId);
    if (!sum) return null;
    var addr = selectedAddress();
    state.orderSeq += 1;
    var ts = now();
    var id = 'CT' + String(ts).slice(-8) + ('0' + (state.orderSeq % 100)).slice(-2);
    var rider = DATA.pickRider(id);
    var order = {
      id: id,
      shopId: shopId,
      shopName: sum.group.shop.name,
      shopLogo: sum.group.shop.logo,
      items: sum.group.items.map(function (it) {
        return {
          pid: it.product.id, name: it.product.name, img: it.product.img,
          photo: it.product.photo,
          price: it.product.price, origPrice: it.product.origPrice, qty: it.qty
        };
      }),
      itemsTotal: sum.itemsTotal,
      packFee: sum.packFee,
      deliveryFee: sum.deliveryFee,
      saved: sum.saved,
      total: sum.total,
      address: addr ? JSON.parse(JSON.stringify(addr)) : null,
      slotLabel: opts.slotLabel || '立即送出',
      remark: opts.remark || '',
      payMethod: opts.payMethod || '丑团支付',
      createdAt: ts,
      paidAt: ts,
      rider: { name: rider.name, avatar: rider.avatar },
      received: false,
      receivedAt: null
    };
    state.orders.unshift(order);
    clearCartOfShop(shopId);
    save();
    return order;
  }

  function getOrder(orderId) {
    for (var i = 0; i < state.orders.length; i++) {
      if (state.orders[i].id === orderId) return state.orders[i];
    }
    return null;
  }

  function orders() { return state.orders; }

  /* 配送阶段：0..4；已确认收货返回 5 */
  function deliveryStageIndex(order) {
    if (order.received) return DELIVERY_STAGES.length; // 5 = 已完成
    var elapsed = now() - order.paidAt;
    var idx = Math.floor(elapsed / STEP_MS);
    if (idx < 0) idx = 0;
    if (idx > DELIVERY_STAGES.length - 1) idx = DELIVERY_STAGES.length - 1;
    return idx;
  }

  function isDelivered(order) {
    return order.received || deliveryStageIndex(order) >= DELIVERY_STAGES.length - 1;
  }

  /* 预计送达剩余毫秒（到达最后一阶段即 0） */
  function etaMs(order) {
    var target = order.paidAt + STEP_MS * (DELIVERY_STAGES.length - 1);
    var left = target - now();
    return left > 0 ? left : 0;
  }

  function confirmReceipt(orderId) {
    var order = getOrder(orderId);
    if (!order || order.received) return false;
    order.received = true;
    order.receivedAt = now();
    save();
    return true;
  }

  /* 再来一单：把订单商品重新加入购物车 */
  function reorder(orderId) {
    var order = getOrder(orderId);
    if (!order) return false;
    order.items.forEach(function (it) {
      if (DATA.getProduct(it.pid)) addToCart(it.pid, it.qty);
    });
    return true;
  }

  /* ---------- 时段与周报 ---------- */
  function slotOfHour(h) {
    if (h >= 6 && h < 12) return 'morning';
    if (h >= 12 && h < 18) return 'afternoon';
    if (h >= 18 && h < 22) return 'evening';
    return 'lateNight'; // 22:00 - 05:59
  }

  function isLateNightNow() {
    var h = new Date(now()).getHours();
    return slotOfHour(h) === 'lateNight';
  }

  /* 本周（周一 00:00 起）范围 */
  function weekStartMs(t) {
    var d = new Date(t);
    d.setHours(0, 0, 0, 0);
    var day = d.getDay(); // 0=周日
    var offset = (day === 0) ? 6 : day - 1;
    d.setDate(d.getDate() - offset);
    return d.getTime();
  }

  /* 消费周报：本周金额/笔数、累计消费、时段分布、深夜笔数、克制正反馈 */
  function weeklyReport() {
    var t = now();
    var ws = weekStartMs(t);
    var weekOrders = state.orders.filter(function (o) { return o.createdAt >= ws; });

    var weekTotal = 0;
    var slotCount = { morning: 0, afternoon: 0, evening: 0, lateNight: 0 };
    var slotAmount = { morning: 0, afternoon: 0, evening: 0, lateNight: 0 };
    weekOrders.forEach(function (o) {
      weekTotal = round2(weekTotal + o.total);
      var slot = slotOfHour(new Date(o.createdAt).getHours());
      slotCount[slot] += 1;
      slotAmount[slot] = round2(slotAmount[slot] + o.total);
    });

    var allTotal = 0;
    state.orders.forEach(function (o) { allTotal = round2(allTotal + o.total); });

    /* 克制正反馈：收藏了却从未下过单的商品 = 忍住的冲动 */
    var orderedPids = {};
    state.orders.forEach(function (o) {
      o.items.forEach(function (it) { orderedPids[it.pid] = true; });
    });
    var resisted = [];
    var resistedAmount = 0;
    state.favorites.forEach(function (pid) {
      if (!orderedPids[pid]) {
        var p = DATA.getProduct(pid);
        var s = DATA.getShopOfProduct(pid);
        if (p && s) {
          resisted.push({ product: p, shop: s });
          resistedAmount = round2(resistedAmount + p.price);
        }
      }
    });

    return {
      weekStart: ws,
      weekEnd: ws + 7 * 24 * 3600 * 1000 - 1,
      weekOrders: weekOrders,
      weekTotal: weekTotal,
      weekCount: weekOrders.length,
      allTotal: allTotal,
      allCount: state.orders.length,
      slotCount: slotCount,
      slotAmount: slotAmount,
      lateNightCount: slotCount.lateNight,
      resisted: resisted,
      resistedAmount: resistedAmount
    };
  }

  /* ---------- 限时秒杀：距当日 24:00 的真实倒计时 ---------- */
  function seckillLeftMs() {
    var d = new Date(now());
    var end = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1, 0, 0, 0, 0);
    return end.getTime() - d.getTime();
  }

  return {
    STEP_MS: STEP_MS,
    DELIVERY_STAGES: DELIVERY_STAGES,
    TIME_SLOTS: TIME_SLOTS,
    PACK_FEE: PACK_FEE,
    now: now,
    __setNowFn: __setNowFn,
    yuan: yuan,
    round2: round2,
    reset: reset,
    /* cart */
    cartQty: cartQty,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    cartCount: cartCount,
    cartGroups: cartGroups,
    shopCartGroup: shopCartGroup,
    /* favorites */
    isFavorite: isFavorite,
    toggleFavorite: toggleFavorite,
    favoriteEntries: favoriteEntries,
    /* address */
    addresses: addresses,
    selectedAddress: selectedAddress,
    selectAddress: selectAddress,
    addAddress: addAddress,
    /* search */
    searchHistory: function () { return state.searchHistory; },
    pushSearchHistory: pushSearchHistory,
    clearSearchHistory: clearSearchHistory,
    /* order */
    checkoutSummary: checkoutSummary,
    placeOrder: placeOrder,
    getOrder: getOrder,
    orders: orders,
    deliveryStageIndex: deliveryStageIndex,
    isDelivered: isDelivered,
    etaMs: etaMs,
    confirmReceipt: confirmReceipt,
    reorder: reorder,
    /* insight */
    slotOfHour: slotOfHour,
    isLateNightNow: isLateNightNow,
    weeklyReport: weeklyReport,
    seckillLeftMs: seckillLeftMs
  };
})();

if (typeof module !== 'undefined' && module.exports) { module.exports = CT_STATE; }
