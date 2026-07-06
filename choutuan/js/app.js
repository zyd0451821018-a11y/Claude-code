/* ============================================================
 * 丑团 · app.js —— 路由与控制层
 * hash 路由 / 事件委托 / 秒杀与配送定时刷新 / 覆盖层管理
 * ============================================================ */

'use strict';

var CT_APP = (function () {

  var DATA = (typeof CT_DATA !== 'undefined') ? CT_DATA : require('./data.js');
  var S = (typeof CT_STATE !== 'undefined') ? CT_STATE : require('./state.js');
  var V = (typeof CT_VIEWS !== 'undefined') ? CT_VIEWS : require('./views.js');

  var root, overlay, toastBox;

  /* 页面级瞬时 UI 状态（不持久化） */
  var ui = {
    homeCat: 'all',
    searchKeyword: '',
    checkout: { slotLabel: '', payMethod: '丑团支付', remark: '' }
  };

  var navStack = [];

  /* ---------- 路由 ---------- */
  function currentRoute() {
    var hash = (typeof location !== 'undefined' && location.hash) || '#/home';
    if (hash.indexOf('#/') !== 0) hash = '#/home';
    var parts = hash.slice(2).split('/');
    return { name: parts[0] || 'home', param: parts[1] || '', hash: hash };
  }

  function go(hash) {
    if (location.hash === hash) { render(); return; }
    location.hash = hash;
  }

  function back() {
    navStack.pop(); // 当前页
    var prev = navStack.pop();
    go(prev || '#/home');
  }

  function render() {
    var r = currentRoute();
    if (navStack[navStack.length - 1] !== r.hash) {
      navStack.push(r.hash);
      if (navStack.length > 50) navStack.shift();
    }
    closeOverlay();

    var html;
    switch (r.name) {
      case 'home':      html = V.home(ui.homeCat); break;
      case 'search':    html = V.searchPage(ui.searchKeyword); break;
      case 'shop':      html = V.shopPage(r.param); break;
      case 'product':   html = V.productPage(r.param); break;
      case 'cart':      html = V.cartPage(); break;
      case 'checkout':  html = V.checkoutPage(r.param, ui.checkout); break;
      case 'success':   html = V.successPage(r.param); break;
      case 'order':     html = V.orderPage(r.param); break;
      case 'orders':    html = V.ordersPage(); break;
      case 'mine':      html = V.minePage(); break;
      case 'favorites': html = V.favoritesPage(); break;
      case 'address':   html = V.addressPage(); break;
      case 'report':    html = V.reportPage(); break;
      default:          html = V.home(ui.homeCat);
    }
    root.innerHTML = html;

    if (r.name === 'search') {
      var input = document.getElementById('search-input');
      if (input && !ui.searchKeyword) { try { input.focus(); } catch (e) {} }
    }
    /* 只在路由变化时回到页首；同页重渲染（加购/筛选）保持滚动位置 */
    if (r.hash !== lastRenderedHash && typeof window !== 'undefined' && window.scrollTo) {
      window.scrollTo(0, 0);
    }
    lastRenderedHash = r.hash;
  }
  var lastRenderedHash = '';

  /* 局部刷新：倒计时做定点文本更新；订单页仅在配送阶段变化时整页重绘 */
  function tick() {
    var r = currentRoute();
    if (r.name === 'home') {
      var el = document.getElementById('seckill-countdown');
      if (el) el.textContent = V.fmtCountdown(S.seckillLeftMs());
    } else if (r.name === 'order') {
      var o = S.getOrder(r.param);
      if (o && !o.received && !overlayOpen()) {
        var stage = S.deliveryStageIndex(o);
        if (stage !== lastStage) {
          lastStage = stage;
          render();
        } else {
          var eta = document.getElementById('eta-countdown');
          if (eta) eta.textContent = V.fmtCountdown(S.etaMs(o));
        }
      }
    } else if (r.name === 'orders') {
      /* 列表页：任一在途订单跨过阶段边界时整页刷新（无输入控件，安全） */
      var sig = S.orders().map(function (od) {
        return od.received ? 'x' : S.deliveryStageIndex(od);
      }).join(',');
      if (sig !== lastOrdersSig && !overlayOpen()) {
        lastOrdersSig = sig;
        render();
      }
    }
  }
  var lastStage = -1;
  var lastOrdersSig = '';

  /* ---------- 覆盖层 ---------- */
  function showOverlay(html) { overlay.innerHTML = html; }
  function closeOverlay() { if (overlay) overlay.innerHTML = ''; }
  function overlayOpen() { return overlay && overlay.innerHTML !== ''; }

  /* ---------- Toast ---------- */
  var toastTimer = null;
  function toast(msg) {
    if (!toastBox) return;
    toastBox.textContent = msg;
    toastBox.className = 'toast show';
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastBox.className = 'toast'; }, 1800);
  }

  /* ---------- 结算流程 ---------- */
  function startCheckout(shopId) {
    var sum = S.checkoutSummary(shopId);
    if (!sum) { toast('购物车里还没有这家店的商品'); return; }
    ui.checkout = { slotLabel: '', payMethod: '丑团支付', remark: '' };
    go('#/checkout/' + shopId);
  }

  function submitOrder(shopId) {
    captureRemark();
    if (!S.selectedAddress()) { toast('请先选择收货地址'); return; }
    if (S.isLateNightNow()) {
      showOverlay(V.lateNightModal(shopId));
      return;
    }
    showOverlay(V.paySheet(shopId, ui.checkout));
  }

  function captureRemark() {
    var input = document.getElementById('remark-input');
    if (input) ui.checkout.remark = input.value;
  }

  function payConfirm(shopId) {
    showOverlay(V.payingSheet());
    setTimeout(function () {
      /* 未手动选时段时，记录页面默认展示的"立即送出（约X分钟）" */
      var slotLabel = ui.checkout.slotLabel;
      if (!slotLabel) {
        var shop = DATA.getShop(shopId);
        slotLabel = shop ? '立即送出（约' + shop.deliveryMin + '分钟）' : '立即送出';
      }
      var order = S.placeOrder(shopId, {
        slotLabel: slotLabel,
        remark: ui.checkout.remark,
        payMethod: ui.checkout.payMethod
      });
      closeOverlay();
      if (order) {
        lastStage = -1;
        /* 结算页已随下单失效，重置返回栈避免回退到空结算页 */
        navStack.length = 0;
        navStack.push('#/home');
        go('#/success/' + order.id);
      } else {
        toast('下单失败，请重试');
      }
    }, 800);
  }

  /* ---------- 事件委托 ---------- */
  function findAction(el) {
    while (el && el !== document.body && el !== root && el !== overlay) {
      if (el.dataset && el.dataset.action) return el;
      el = el.parentNode;
    }
    return null;
  }

  function onClick(e) {
    var el = findAction(e.target);
    if (!el) return;
    var action = el.dataset.action;

    switch (action) {
      case 'nav':
        /* 从入口进搜索页时清空旧关键词；返回搜索页则保留结果 */
        if (el.dataset.to === '#/search') ui.searchKeyword = '';
        go(el.dataset.to);
        break;
      case 'back':
        back();
        break;

      case 'cat-filter':
        ui.homeCat = el.dataset.cat;
        render();
        break;

      case 'menu-cat': {
        var target = document.getElementById(el.dataset.target);
        var rail = el.parentNode.querySelectorAll('.rail-item');
        for (var i = 0; i < rail.length; i++) rail[i].classList.remove('active');
        el.classList.add('active');
        if (target && target.scrollIntoView) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      }

      case 'cart-add':
        e.stopPropagation();
        S.addToCart(el.dataset.pid, 1);
        render();
        break;
      case 'cart-minus':
        e.stopPropagation();
        S.addToCart(el.dataset.pid, -1);
        render();
        break;
      case 'cart-remove':
        S.removeFromCart(el.dataset.pid);
        toast('已删除');
        render();
        break;

      case 'fav-toggle': {
        var on = S.toggleFavorite(el.dataset.pid);
        toast(on ? '已收藏 ❤️' : '已取消收藏');
        render();
        break;
      }

      case 'search-go':
      case 'search-submit':
        doSearch();
        break;
      case 'search-tag':
        ui.searchKeyword = el.dataset.kw;
        S.pushSearchHistory(ui.searchKeyword);
        render();
        break;
      case 'search-clear-history':
        S.clearSearchHistory();
        render();
        break;

      case 'checkout':
        e.stopPropagation();
        startCheckout(el.dataset.shop);
        break;

      case 'select-slot':
        captureRemark();
        ui.checkout.slotLabel = el.dataset.slot;
        render();
        break;
      case 'select-pay':
        captureRemark();
        ui.checkout.payMethod = el.dataset.pay;
        render();
        break;

      case 'select-address':
        S.selectAddress(el.dataset.aid);
        toast('已选择该地址');
        render();
        break;
      case 'add-address':
        addAddress();
        break;

      case 'submit-order':
        submitOrder(el.dataset.shop);
        break;
      case 'pay-confirm':
        payConfirm(el.dataset.shop);
        break;

      case 'latenight-hold':
        /* 缓冲建议：商品留在购物车，回首页 */
        closeOverlay();
        toast('已帮你放进购物车，随时可以回来');
        go('#/home');
        break;
      case 'latenight-continue':
        showOverlay(V.paySheet(el.dataset.shop, ui.checkout));
        break;

      case 'confirm-receipt':
        if (S.confirmReceipt(el.dataset.oid)) {
          toast('已确认收货');
          render();
        }
        break;
      case 'reorder':
        if (S.reorder(el.dataset.oid)) {
          toast('已按原订单加入购物车');
          go('#/cart');
        }
        break;

      case 'reset-data':
        showOverlay(V.confirmModal('清除缓存', '将清空购物车、订单、收藏与周报等本地数据，确定吗？', 'reset-data-confirm'));
        break;
      case 'reset-data-confirm':
        S.reset();
        closeOverlay();
        toast('已清除');
        render();
        break;

      case 'toast':
        toast(el.dataset.msg || '');
        break;

      case 'close-overlay':
        /* 点击面板内部不关闭 */
        if (e.target === el || !el.dataset.stop) {
          var inner = findStop(e.target, el);
          if (!inner) closeOverlay();
        }
        break;
    }
  }

  function findStop(el, boundary) {
    while (el && el !== boundary) {
      if (el.dataset && el.dataset.stop) return el;
      el = el.parentNode;
    }
    return null;
  }

  function doSearch() {
    var input = document.getElementById('search-input');
    var kw = input ? input.value.trim() : '';
    ui.searchKeyword = kw;
    if (kw) S.pushSearchHistory(kw);
    render();
  }

  function addAddress() {
    var name = val('addr-name'), phone = val('addr-phone'),
        detail = val('addr-detail'), tag = val('addr-tag') || '其他';
    if (!name || !phone || !detail) { toast('请填写联系人、手机号和详细地址'); return; }
    S.addAddress({ name: name, phone: phone, detail: detail, tag: tag });
    toast('地址已保存');
    back();
  }

  function val(id) {
    var el = document.getElementById(id);
    return el ? el.value.trim() : '';
  }

  function onSubmit(e) {
    var el = e.target;
    if (el && el.dataset && el.dataset.actionSubmit === 'search-submit') {
      e.preventDefault();
      doSearch();
    }
  }

  function onHashChange() {
    var r = currentRoute();
    if (r.name !== 'order') lastStage = -1;
    render();
  }

  /* ---------- 启动 ---------- */
  function init() {
    root = document.getElementById('app');
    overlay = document.getElementById('overlay');
    toastBox = document.getElementById('toast');
    document.addEventListener('click', onClick);
    document.addEventListener('submit', onSubmit);
    window.addEventListener('hashchange', onHashChange);
    if (!location.hash) location.hash = '#/home';
    render();
    setInterval(tick, 1000);
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  }

  return {
    init: init,
    render: render,
    go: go,
    toast: toast,
    ui: ui,
    __private: { tick: tick, currentRoute: currentRoute }
  };
})();

if (typeof module !== 'undefined' && module.exports) { module.exports = CT_APP; }
