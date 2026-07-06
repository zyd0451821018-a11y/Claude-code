/* ============================================================
 * 丑团 · views.js —— 渲染层
 * 所有页面均为纯函数：读取 CT_DATA / CT_STATE，返回 HTML 字符串
 * 交互通过 data-action 事件委托交给 app.js
 * ============================================================ */

'use strict';

var CT_VIEWS = (function () {

  var DATA = (typeof CT_DATA !== 'undefined') ? CT_DATA : require('./data.js');
  var S = (typeof CT_STATE !== 'undefined') ? CT_STATE : require('./state.js');

  /* ---------- 工具 ---------- */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function money(n) { return '¥' + S.yuan(n); }

  function fmtTime(ms) {
    var d = new Date(ms);
    function p(x) { return x < 10 ? '0' + x : '' + x; }
    return p(d.getHours()) + ':' + p(d.getMinutes());
  }

  function fmtDateTime(ms) {
    var d = new Date(ms);
    function p(x) { return x < 10 ? '0' + x : '' + x; }
    return (d.getMonth() + 1) + '月' + d.getDate() + '日 ' + p(d.getHours()) + ':' + p(d.getMinutes());
  }

  function fmtDate(ms) {
    var d = new Date(ms);
    return (d.getMonth() + 1) + '月' + d.getDate() + '日';
  }

  function fmtCountdown(ms) {
    if (ms < 0) ms = 0;
    var s = Math.floor(ms / 1000);
    function p(x) { return x < 10 ? '0' + x : '' + x; }
    return p(Math.floor(s / 3600)) + ':' + p(Math.floor(s % 3600 / 60)) + ':' + p(s % 60);
  }

  /* 商品行内步进器：qty=0 只显示 +，>0 显示 - qty + */
  function stepper(pid) {
    var qty = S.cartQty(pid);
    var minus = qty > 0
      ? '<button class="step-btn minus" data-action="cart-minus" data-pid="' + pid + '" aria-label="减少">−</button><span class="step-qty">' + qty + '</span>'
      : '';
    return '<div class="stepper">' + minus +
      '<button class="step-btn plus" data-action="cart-add" data-pid="' + pid + '" aria-label="加入购物车">＋</button></div>';
  }

  function stars(rating) {
    return '<span class="stars">★</span><span class="rate-num">' + rating.toFixed(1) + '</span>';
  }

  function priceBlock(p) {
    return '<div class="price-block">' +
      '<span class="price"><i>¥</i>' + S.yuan(p.price) + '</span>' +
      '<span class="orig-price">¥' + S.yuan(p.origPrice) + '</span>' +
      '</div>';
  }

  function tagChips(tags) {
    return (tags || []).map(function (t) {
      var cls = (t.indexOf('满') === 0 || t.indexOf('减') > -1) ? 'tag promo' : 'tag';
      return '<span class="' + cls + '">' + esc(t) + '</span>';
    }).join('');
  }

  /* ---------- 底部导航 ---------- */
  function tabbar(active) {
    var count = S.cartCount();
    var badge = count > 0 ? '<span class="badge">' + (count > 99 ? '99+' : count) + '</span>' : '';
    var tabs = [
      { id: 'home',   icon: '🏠', label: '首页',   to: '#/home' },
      { id: 'cart',   icon: '🛒', label: '购物车', to: '#/cart', extra: badge },
      { id: 'orders', icon: '📋', label: '订单',   to: '#/orders' },
      { id: 'mine',   icon: '👤', label: '我的',   to: '#/mine' }
    ];
    return '<nav class="tabbar">' + tabs.map(function (t) {
      return '<button class="tab' + (active === t.id ? ' active' : '') + '" data-action="nav" data-to="' + t.to + '">' +
        '<span class="tab-icon">' + t.icon + (t.extra || '') + '</span>' +
        '<span class="tab-label">' + t.label + '</span></button>';
    }).join('') + '</nav>';
  }

  /* ---------- 顶部返回栏 ---------- */
  function navbar(title, opts) {
    opts = opts || {};
    return '<header class="navbar">' +
      '<button class="nav-back" data-action="back" aria-label="返回">‹</button>' +
      '<span class="nav-title">' + esc(title) + '</span>' +
      (opts.right || '<span class="nav-right"></span>') +
      '</header>';
  }

  /* ============================================================
   * 首页：地址栏 + 搜索 + 分类 + 秒杀 + 店铺流
   * ============================================================ */
  function home(activeCat) {
    activeCat = activeCat || 'all';
    var addr = S.selectedAddress();
    var html = '<div class="page page-home">';

    /* 顶部：地址 + 搜索 */
    html += '<div class="home-top">' +
      '<div class="addr-line" data-action="nav" data-to="#/address">' +
      '<span class="addr-text">送至：' + esc(addr ? addr.tag + ' · ' + addr.detail : '请选择地址') + '</span>' +
      '<span class="addr-arrow">▾</span></div>' +
      '<div class="search-entry" data-action="nav" data-to="#/search">' +
      '<span class="search-icon">🔍</span><span class="search-placeholder">搜索商品、店铺</span>' +
      '<span class="search-btn-fake">搜索</span></div></div>';

    /* 分类 */
    html += '<div class="cat-row">' + DATA.CATEGORIES.map(function (c) {
      return '<button class="cat-item' + (activeCat === c.id ? ' active' : '') + '" data-action="cat-filter" data-cat="' + c.id + '">' +
        '<span class="cat-icon">' + c.icon + '</span><span class="cat-name">' + esc(c.name) + '</span></button>';
    }).join('') + '</div>';

    /* 限时秒杀 */
    var seckills = DATA.seckillProducts();
    html += '<section class="seckill">' +
      '<div class="seckill-head"><span class="seckill-title">🔥 限时秒杀</span>' +
      '<span class="seckill-timer">距结束 <b id="seckill-countdown">' + fmtCountdown(S.seckillLeftMs()) + '</b></span></div>' +
      '<div class="seckill-scroll">' + seckills.map(function (e) {
        var p = e.product;
        return '<div class="seckill-card" data-action="nav" data-to="#/product/' + p.id + '">' +
          '<div class="seckill-img">' + p.img + '</div>' +
          '<div class="seckill-name">' + esc(p.name) + '</div>' +
          '<div class="seckill-price"><span class="price"><i>¥</i>' + S.yuan(p.price) + '</span>' +
          '<span class="orig-price">¥' + S.yuan(p.origPrice) + '</span></div>' +
          '<button class="seckill-buy" data-action="cart-add" data-pid="' + p.id + '">抢</button></div>';
      }).join('') + '</div></section>';

    /* 店铺流 */
    var shops = DATA.SHOPS.filter(function (s) {
      return activeCat === 'all' || s.category === activeCat;
    });
    html += '<section class="shop-feed"><div class="feed-title">附近商家</div>';
    if (!shops.length) {
      html += '<div class="empty-state"><div class="empty-icon">🍃</div><p>这个分类下暂时没有商家</p></div>';
    }
    html += shops.map(shopCard).join('');
    html += '</section>';

    html += '</div>' + tabbar('home');
    return html;
  }

  function shopCard(s) {
    var recs = s.products.slice(0, 3);
    return '<div class="shop-card" data-action="nav" data-to="#/shop/' + s.id + '">' +
      '<div class="shop-logo">' + s.logo + '</div>' +
      '<div class="shop-info">' +
      '<div class="shop-name">' + esc(s.name) + '</div>' +
      '<div class="shop-meta">' + stars(s.rating) +
      '<span class="meta-item">月售' + s.monthlySales + '</span>' +
      '<span class="meta-item">' + s.deliveryMin + '分钟</span>' +
      '<span class="meta-item">' + s.distanceKm.toFixed(1) + 'km</span></div>' +
      '<div class="shop-meta sub"><span class="meta-item">起送¥' + s.minOrder + '</span>' +
      '<span class="meta-item">配送¥' + S.yuan(s.deliveryFee) + '</span></div>' +
      '<div class="shop-promos">' + tagChips(s.promos) + '</div>' +
      '<div class="shop-recs">' + recs.map(function (p) {
        return '<div class="rec-item"><span class="rec-img">' + p.img + '</span>' +
          '<span class="rec-name">' + esc(p.name) + '</span>' +
          '<span class="rec-price">¥' + S.yuan(p.price) + '</span></div>';
      }).join('') + '</div>' +
      '</div></div>';
  }

  /* ============================================================
   * 搜索页
   * ============================================================ */
  function searchPage(keyword) {
    var html = '<div class="page page-search">';
    html += '<header class="navbar search-bar-row">' +
      '<button class="nav-back" data-action="back" aria-label="返回">‹</button>' +
      '<form class="search-form" data-action-submit="search-submit">' +
      '<input id="search-input" class="search-input" type="search" placeholder="搜索商品、店铺" value="' + esc(keyword || '') + '" autocomplete="off">' +
      '</form>' +
      '<button class="search-go" data-action="search-go">搜索</button></header>';

    if (!keyword) {
      var hist = S.searchHistory();
      if (hist.length) {
        html += '<div class="search-section"><div class="section-head">搜索历史' +
          '<button class="link-btn" data-action="search-clear-history">清空</button></div>' +
          '<div class="chip-wrap">' + hist.map(function (k) {
            return '<button class="chip" data-action="search-tag" data-kw="' + esc(k) + '">' + esc(k) + '</button>';
          }).join('') + '</div></div>';
      }
      html += '<div class="search-section"><div class="section-head">大家都在搜</div>' +
        '<div class="chip-wrap">' + DATA.HOT_WORDS.map(function (k) {
          return '<button class="chip hot" data-action="search-tag" data-kw="' + esc(k) + '">' + esc(k) + '</button>';
        }).join('') + '</div></div>';
    } else {
      var results = DATA.search(keyword);
      if (!results.length) {
        html += '<div class="empty-state tall"><div class="empty-icon">🍃</div>' +
          '<p>没有找到「' + esc(keyword) + '」相关的商品</p>' +
          '<p class="empty-sub">换个关键词试试，比如「奶茶」「炸鸡」</p></div>';
      } else {
        html += '<div class="search-results"><div class="result-count">找到 ' + results.length + ' 个相关商品</div>' +
          results.map(function (e) { return productRow(e.product, e.shop, true); }).join('') + '</div>';
      }
    }
    html += '</div>';
    return html;
  }

  /* 通用商品行（搜索结果 / 店铺菜单共用） */
  function productRow(p, shop, showShop) {
    return '<div class="product-row">' +
      '<div class="prod-img" data-action="nav" data-to="#/product/' + p.id + '">' + p.img + '</div>' +
      '<div class="prod-main">' +
      '<div class="prod-name" data-action="nav" data-to="#/product/' + p.id + '">' + esc(p.name) + '</div>' +
      '<div class="prod-desc">' + esc(p.desc) + '</div>' +
      '<div class="prod-meta">' + stars(p.rating) + '<span class="meta-item">月售' + p.sales + '</span>' +
      (showShop ? '<span class="meta-item shop-link" data-action="nav" data-to="#/shop/' + shop.id + '">' + esc(shop.name) + ' ›</span>' : '') +
      '</div>' +
      '<div class="prod-tags">' + tagChips(p.tags) + '</div>' +
      '<div class="prod-bottom">' + priceBlock(p) + stepper(p.id) + '</div>' +
      '</div></div>';
  }

  /* ============================================================
   * 店铺详情页
   * ============================================================ */
  function shopPage(shopId) {
    var s = DATA.getShop(shopId);
    if (!s) return notFound('店铺不存在');

    /* 菜单分组 */
    var cats = [];
    var byCat = {};
    s.products.forEach(function (p) {
      if (!byCat[p.cat]) { byCat[p.cat] = []; cats.push(p.cat); }
      byCat[p.cat].push(p);
    });

    var html = '<div class="page page-shop">';
    html += '<div class="shop-hero">' +
      '<button class="nav-back on-hero" data-action="back" aria-label="返回">‹</button>' +
      '<div class="hero-body">' +
      '<div class="hero-logo">' + s.logo + '</div>' +
      '<div class="hero-info"><div class="hero-name">' + esc(s.name) + '</div>' +
      '<div class="hero-meta">' + stars(s.rating) + '<span class="meta-item">月售' + s.monthlySales + '</span>' +
      '<span class="meta-item">约' + s.deliveryMin + '分钟</span></div>' +
      '<div class="hero-meta sub">起送¥' + s.minOrder + ' · 配送¥' + S.yuan(s.deliveryFee) + ' · ' + s.distanceKm.toFixed(1) + 'km</div>' +
      '</div></div>' +
      '<div class="hero-notice">公告：' + esc(s.notice) + '</div>' +
      '<div class="hero-promos">' + tagChips(s.promos) + '</div>' +
      '</div>';

    /* 菜单：左侧分类 + 右侧商品 */
    html += '<div class="menu-wrap">' +
      '<div class="menu-rail">' + cats.map(function (c, i) {
        return '<button class="rail-item' + (i === 0 ? ' active' : '') + '" data-action="menu-cat" data-target="mcat-' + i + '">' + esc(c) + '</button>';
      }).join('') + '</div>' +
      '<div class="menu-list" id="menu-list">' + cats.map(function (c, i) {
        return '<div class="menu-group" id="mcat-' + i + '"><div class="menu-cat-title">' + esc(c) + '</div>' +
          byCat[c].map(function (p) { return productRow(p, s, false); }).join('') + '</div>';
      }).join('') + '</div></div>';

    /* 底部实时结算条 */
    html += checkoutBar(s);
    html += '</div>';
    return html;
  }

  /* 店铺底部结算条：实时小计 / 差额起送 */
  function checkoutBar(s) {
    var g = S.shopCartGroup(s.id);
    var subtotal = g ? g.subtotal : 0;
    var count = g ? g.count : 0;
    var reachMin = subtotal >= s.minOrder;
    var btn = reachMin
      ? '<button class="bar-btn active" data-action="checkout" data-shop="' + s.id + '">去结算</button>'
      : '<button class="bar-btn disabled">差' + S.yuan(Math.max(0, s.minOrder - subtotal)) + '元起送</button>';
    return '<div class="checkout-bar">' +
      '<div class="bar-cart' + (count ? ' has' : '') + '" data-action="nav" data-to="#/cart">🛒' +
      (count ? '<span class="badge">' + count + '</span>' : '') + '</div>' +
      '<div class="bar-mid">' +
      (count ? '<div class="bar-price">' + money(subtotal) + '</div><div class="bar-fee">另需配送费' + money(s.deliveryFee) + '</div>'
             : '<div class="bar-empty">未选购商品</div><div class="bar-fee">配送费' + money(s.deliveryFee) + '</div>') +
      '</div>' + btn + '</div>';
  }

  /* ============================================================
   * 商品详情页
   * ============================================================ */
  function productPage(pid) {
    var p = DATA.getProduct(pid);
    var s = DATA.getShopOfProduct(pid);
    if (!p || !s) return notFound('商品不存在');
    var fav = S.isFavorite(pid);
    var reviews = DATA.reviewsOf(pid);

    var html = '<div class="page page-product">';
    html += navbar('商品详情');
    html += '<div class="prod-hero">' + p.img + '</div>';
    html += '<div class="card prod-detail-card">' +
      '<div class="pd-price-row">' + priceBlock(p) +
      '<span class="pd-sales">月售' + p.sales + '</span></div>' +
      '<div class="pd-name">' + esc(p.name) + '</div>' +
      '<div class="pd-desc">' + esc(p.desc) + '</div>' +
      '<div class="pd-tags">' + tagChips(p.tags) + '</div></div>';

    html += '<div class="card shop-entry" data-action="nav" data-to="#/shop/' + s.id + '">' +
      '<span class="se-logo">' + s.logo + '</span>' +
      '<span class="se-name">' + esc(s.name) + '</span>' +
      '<span class="se-meta">' + stars(s.rating) + ' · 月售' + s.monthlySales + '</span>' +
      '<span class="se-go">进店 ›</span></div>';

    html += '<div class="card reviews-card"><div class="section-head">用户评价（' + reviews.length + '）</div>' +
      reviews.map(function (r) {
        return '<div class="review"><div class="rv-head"><span class="rv-avatar">' + esc(r.user.slice(0, 1)) + '</span>' +
          '<span class="rv-user">' + esc(r.user) + '</span>' +
          '<span class="rv-stars">' + '★★★★★'.slice(0, r.stars) + '</span>' +
          '<span class="rv-time">' + r.daysAgo + '天前</span></div>' +
          '<div class="rv-text">' + esc(r.text) + '</div></div>';
      }).join('') + '</div>';

    /* 底部操作条 */
    html += '<div class="prod-actionbar">' +
      '<button class="fav-btn' + (fav ? ' on' : '') + '" data-action="fav-toggle" data-pid="' + pid + '">' +
      '<span class="fav-icon">' + (fav ? '❤️' : '🤍') + '</span><span>' + (fav ? '已收藏' : '收藏') + '</span></button>' +
      '<div class="pa-stepper">' + stepper(pid) + '</div>' +
      '<button class="pa-cart" data-action="nav" data-to="#/cart">去购物车' +
      (S.cartCount() ? '（' + S.cartCount() + '）' : '') + '</button>' +
      '</div></div>';
    return html;
  }

  /* ============================================================
   * 购物车页（跨店分组）
   * ============================================================ */
  function cartPage() {
    var groups = S.cartGroups();
    var html = '<div class="page page-cart">';
    html += '<header class="navbar"><span class="nav-back-placeholder"></span><span class="nav-title">购物车</span><span class="nav-right"></span></header>';

    if (!groups.length) {
      html += '<div class="empty-state tall"><div class="empty-icon">🛒</div>' +
        '<p>购物车还是空的</p><p class="empty-sub">去逛逛，看看今天想吃点什么</p>' +
        '<button class="primary-btn" data-action="nav" data-to="#/home">去逛逛</button></div>';
    } else {
      html += groups.map(function (g) {
        var s = g.shop;
        var reachMin = g.subtotal >= s.minOrder;
        return '<div class="card cart-group">' +
          '<div class="cg-head" data-action="nav" data-to="#/shop/' + s.id + '">' +
          '<span class="cg-logo">' + s.logo + '</span><span class="cg-name">' + esc(s.name) + '</span><span class="cg-go">›</span></div>' +
          g.items.map(function (it) {
            var p = it.product;
            return '<div class="cart-item">' +
              '<div class="ci-img" data-action="nav" data-to="#/product/' + p.id + '">' + p.img + '</div>' +
              '<div class="ci-main"><div class="ci-name">' + esc(p.name) + '</div>' +
              '<div class="ci-price">' + priceBlock(p) + '</div></div>' +
              '<div class="ci-right">' + stepper(p.id) +
              '<button class="ci-del" data-action="cart-remove" data-pid="' + p.id + '">删除</button></div></div>';
          }).join('') +
          '<div class="cg-foot"><span class="cg-subtotal">小计 <b>' + money(g.subtotal) + '</b>' +
          '<span class="cg-fee">配送费' + money(s.deliveryFee) + '</span></span>' +
          (reachMin
            ? '<button class="mini-btn active" data-action="checkout" data-shop="' + s.id + '">去结算</button>'
            : '<button class="mini-btn disabled">差' + S.yuan(s.minOrder - g.subtotal) + '元起送</button>') +
          '</div></div>';
      }).join('');
    }

    html += '</div>' + tabbar('cart');
    return html;
  }

  /* ============================================================
   * 确认订单页
   * ============================================================ */
  function checkoutPage(shopId, ui) {
    var sum = S.checkoutSummary(shopId);
    if (!sum) return notFound('购物车中没有该店铺的商品');
    var s = sum.group.shop;
    var addr = S.selectedAddress();
    var slots = deliverySlots(s);
    var slotLabel = ui.slotLabel || slots[0];
    var payMethod = ui.payMethod || '丑团支付';

    var html = '<div class="page page-checkout">';
    html += navbar('确认订单');

    /* 地址 */
    html += '<div class="card addr-card" data-action="nav" data-to="#/address">' +
      '<div class="ac-icon">📍</div><div class="ac-main">' +
      (addr ? '<div class="ac-line1">' + esc(addr.detail) + '</div>' +
              '<div class="ac-line2">' + esc(addr.name) + ' ' + esc(addr.phone) + ' <span class="tag">' + esc(addr.tag) + '</span></div>'
            : '<div class="ac-line1">请选择收货地址</div>') +
      '</div><span class="ac-arrow">›</span></div>';

    /* 配送时段 */
    html += '<div class="card"><div class="section-head">配送时间</div><div class="slot-wrap">' +
      slots.map(function (sl) {
        return '<button class="chip slot' + (sl === slotLabel ? ' active' : '') + '" data-action="select-slot" data-slot="' + esc(sl) + '">' + esc(sl) + '</button>';
      }).join('') + '</div></div>';

    /* 商品明细 */
    html += '<div class="card"><div class="co-shop"><span class="cg-logo">' + s.logo + '</span>' + esc(s.name) + '</div>' +
      sum.group.items.map(function (it) {
        var p = it.product;
        return '<div class="co-item"><span class="co-img">' + p.img + '</span>' +
          '<span class="co-name">' + esc(p.name) + '</span>' +
          '<span class="co-qty">x' + it.qty + '</span>' +
          '<span class="co-price">' + money(p.price * it.qty) + '</span></div>';
      }).join('') +
      '<div class="fee-row"><span>打包费</span><span>' + money(sum.packFee) + '</span></div>' +
      '<div class="fee-row"><span>配送费</span><span>' + money(sum.deliveryFee) + '</span></div>' +
      '<div class="fee-row saved"><span>已优惠</span><span>-' + money(sum.saved) + '</span></div>' +
      '<div class="fee-row total"><span>合计</span><span class="price"><i>¥</i>' + S.yuan(sum.total) + '</span></div></div>';

    /* 备注 */
    html += '<div class="card"><div class="section-head">备注</div>' +
      '<input id="remark-input" class="remark-input" placeholder="口味偏好、放门口等（选填）" value="' + esc(ui.remark || '') + '"></div>';

    /* 支付方式 */
    html += '<div class="card"><div class="section-head">支付方式</div>' +
      ['丑团支付', '微信支付', '支付宝'].map(function (m) {
        var icon = m === '丑团支付' ? '💛' : (m === '微信支付' ? '💚' : '💙');
        return '<div class="pay-row' + (m === payMethod ? ' active' : '') + '" data-action="select-pay" data-pay="' + m + '">' +
          '<span class="pay-icon">' + icon + '</span><span class="pay-name">' + m +
          (m === '丑团支付' ? '<span class="tag promo">推荐</span>' : '') + '</span>' +
          '<span class="pay-check">' + (m === payMethod ? '●' : '○') + '</span></div>';
      }).join('') + '</div>';

    /* 底部提交 */
    html += '<div class="submit-bar"><div class="sb-info">' +
      '<div class="sb-total">合计 <span class="price"><i>¥</i>' + S.yuan(sum.total) + '</span></div>' +
      '<div class="sb-saved">已优惠' + money(sum.saved) + '</div></div>' +
      '<button class="sb-btn" data-action="submit-order" data-shop="' + s.id + '">提交订单</button></div>';

    html += '</div>';
    return html;
  }

  function deliverySlots(s) {
    var out = ['立即送出（约' + s.deliveryMin + '分钟）'];
    var t = new Date(S.now());
    t.setMinutes(t.getMinutes() + s.deliveryMin);
    /* 取整到下一个半点，往后排 3 个半小时档 */
    t.setMinutes(t.getMinutes() + (30 - t.getMinutes() % 30), 0, 0);
    for (var i = 0; i < 3; i++) {
      var end = new Date(t.getTime() + 30 * 60000);
      out.push(fmtTime(t.getTime()) + '-' + fmtTime(end.getTime()));
      t = end;
    }
    return out;
  }

  /* ============================================================
   * 支付成功页
   * ============================================================ */
  function successPage(orderId) {
    var o = S.getOrder(orderId);
    if (!o) return notFound('订单不存在');
    return '<div class="page page-success">' +
      '<div class="success-body"><div class="success-icon">✅</div>' +
      '<div class="success-title">支付成功</div>' +
      '<div class="success-amount">' + money(o.total) + '</div>' +
      '<div class="success-sub">' + esc(o.payMethod) + ' · ' + esc(o.shopName) + '</div>' +
      '<button class="primary-btn" data-action="nav" data-to="#/order/' + o.id + '">查看订单</button>' +
      '<button class="ghost-btn" data-action="nav" data-to="#/home">返回首页</button>' +
      '</div></div>';
  }

  /* ============================================================
   * 订单追踪 / 详情页
   * ============================================================ */
  function orderPage(orderId) {
    var o = S.getOrder(orderId);
    if (!o) return notFound('订单不存在');
    var stageIdx = S.deliveryStageIndex(o);
    var done = o.received;
    var delivered = S.isDelivered(o);
    var stages = S.DELIVERY_STAGES;
    var current = done ? null : stages[Math.min(stageIdx, stages.length - 1)];

    var html = '<div class="page page-order">';
    html += navbar('订单详情');

    /* 状态头 */
    if (done) {
      html += '<div class="order-status done"><div class="os-title">订单已完成</div>' +
        '<div class="os-sub">感谢您的信任，期待再次光临</div></div>';
    } else if (delivered) {
      html += '<div class="order-status arrived"><div class="os-title">已送达</div>' +
        '<div class="os-sub">餐品已送达，请及时取餐并确认收货</div></div>';
    } else {
      html += '<div class="order-status moving"><div class="os-title">' + esc(current.label) + '</div>' +
        '<div class="os-sub">' + esc(current.desc) + '</div>' +
        '<div class="os-eta">预计 <b id="eta-countdown">' + fmtCountdown(S.etaMs(o)) + '</b> 后送达</div></div>';
    }

    /* 假地图 + 骑手卡 */
    html += '<div class="map-box"><div class="map-route"></div>' +
      '<div class="map-rider" style="left:' + (8 + Math.min(stageIdx, 4) * 20) + '%">' + o.rider.avatar + '</div>' +
      '<div class="map-home">🏠</div><div class="map-shop">' + o.shopLogo + '</div></div>';
    html += '<div class="card rider-card"><span class="rc-avatar">' + o.rider.avatar + '</span>' +
      '<div class="rc-main"><div class="rc-name">' + esc(o.rider.name) + '</div>' +
      '<div class="rc-sub">' + (done || delivered ? '本单配送已完成' : '正在为您配送') + '</div></div>' +
      '<button class="rc-btn" data-action="toast" data-msg="骑手正在路上，请耐心等待">📞</button>' +
      '<button class="rc-btn" data-action="toast" data-msg="消息已发送给骑手">💬</button></div>';

    /* 时间线 */
    html += '<div class="card timeline">' + stages.map(function (st, i) {
      var reached = done || i <= stageIdx;
      var timeStr = reached ? fmtTime(o.paidAt + S.STEP_MS * i) : '';
      return '<div class="tl-row' + (reached ? ' reached' : '') + (i === stageIdx && !done ? ' current' : '') + '">' +
        '<span class="tl-dot"></span><span class="tl-label">' + esc(st.label) + '</span>' +
        '<span class="tl-time">' + timeStr + '</span></div>';
    }).join('') + '</div>';

    /* 订单明细 */
    html += '<div class="card"><div class="co-shop" data-action="nav" data-to="#/shop/' + o.shopId + '">' +
      '<span class="cg-logo">' + o.shopLogo + '</span>' + esc(o.shopName) + ' ›</div>' +
      o.items.map(function (it) {
        return '<div class="co-item"><span class="co-img">' + it.img + '</span>' +
          '<span class="co-name">' + esc(it.name) + '</span>' +
          '<span class="co-qty">x' + it.qty + '</span>' +
          '<span class="co-price">' + money(it.price * it.qty) + '</span></div>';
      }).join('') +
      '<div class="fee-row"><span>打包费</span><span>' + money(o.packFee) + '</span></div>' +
      '<div class="fee-row"><span>配送费</span><span>' + money(o.deliveryFee) + '</span></div>' +
      '<div class="fee-row saved"><span>已优惠</span><span>-' + money(o.saved) + '</span></div>' +
      '<div class="fee-row total"><span>实付</span><span class="price"><i>¥</i>' + S.yuan(o.total) + '</span></div></div>';

    /* 配送与订单信息 */
    html += '<div class="card info-card">' +
      infoRow('收货地址', o.address ? o.address.detail : '—') +
      infoRow('配送时间', o.slotLabel) +
      (o.remark ? infoRow('备注', o.remark) : '') +
      infoRow('支付方式', o.payMethod) +
      infoRow('下单时间', fmtDateTime(o.createdAt)) +
      '<div class="info-row"><span class="ir-label">订单号</span><span class="ir-value">' + o.id +
      ' <button class="link-btn" data-action="toast" data-msg="订单号已复制">复制</button></span></div>' +
      '</div>';

    /* 操作 */
    html += '<div class="order-actions">';
    if (delivered && !done) {
      html += '<button class="primary-btn" data-action="confirm-receipt" data-oid="' + o.id + '">确认收货</button>';
    }
    html += '<button class="ghost-btn" data-action="reorder" data-oid="' + o.id + '">再来一单</button></div>';

    html += '</div>';
    return html;
  }

  function infoRow(label, value) {
    return '<div class="info-row"><span class="ir-label">' + esc(label) + '</span><span class="ir-value">' + esc(value) + '</span></div>';
  }

  /* ============================================================
   * 订单列表页
   * ============================================================ */
  function ordersPage() {
    var list = S.orders();
    var html = '<div class="page page-orders">';
    html += '<header class="navbar"><span class="nav-back-placeholder"></span><span class="nav-title">我的订单</span><span class="nav-right"></span></header>';

    if (!list.length) {
      html += '<div class="empty-state tall"><div class="empty-icon">📋</div>' +
        '<p>还没有订单</p><p class="empty-sub">下一顿吃什么，现在就可以想了</p>' +
        '<button class="primary-btn" data-action="nav" data-to="#/home">去逛逛</button></div>';
    } else {
      html += list.map(function (o) {
        var stageIdx = S.deliveryStageIndex(o);
        var statusLabel, statusCls;
        if (o.received) { statusLabel = '已完成'; statusCls = 'done'; }
        else if (stageIdx >= S.DELIVERY_STAGES.length - 1) { statusLabel = '待确认收货'; statusCls = 'arrived'; }
        else { statusLabel = S.DELIVERY_STAGES[stageIdx].label; statusCls = 'moving'; }
        var itemsSummary = o.items.map(function (it) { return it.name + 'x' + it.qty; }).join('、');
        return '<div class="card order-card">' +
          '<div class="oc-head" data-action="nav" data-to="#/order/' + o.id + '">' +
          '<span class="cg-logo">' + o.shopLogo + '</span><span class="oc-shop">' + esc(o.shopName) + '</span>' +
          '<span class="oc-status ' + statusCls + '">' + statusLabel + '</span></div>' +
          '<div class="oc-body" data-action="nav" data-to="#/order/' + o.id + '">' +
          '<div class="oc-items">' + esc(itemsSummary) + '</div>' +
          '<div class="oc-meta">' + fmtDateTime(o.createdAt) + ' · 共' +
          o.items.reduce(function (n, it) { return n + it.qty; }, 0) + '件 · 实付 <b>' + money(o.total) + '</b></div></div>' +
          '<div class="oc-actions">' +
          (stageIdx >= S.DELIVERY_STAGES.length - 1 && !o.received
            ? '<button class="mini-btn active" data-action="confirm-receipt" data-oid="' + o.id + '">确认收货</button>' : '') +
          '<button class="mini-btn" data-action="reorder" data-oid="' + o.id + '">再来一单</button>' +
          '<button class="mini-btn" data-action="nav" data-to="#/order/' + o.id + '">订单详情</button>' +
          '</div></div>';
      }).join('');
    }

    html += '</div>' + tabbar('orders');
    return html;
  }

  /* ============================================================
   * 我的页
   * ============================================================ */
  function minePage() {
    var report = S.weeklyReport();
    var favCount = S.favoriteEntries().length;
    var html = '<div class="page page-mine">';
    html += '<div class="mine-head"><div class="mh-avatar">😋</div>' +
      '<div class="mh-info"><div class="mh-name">干饭小能手</div>' +
      '<div class="mh-sub">今天也要好好吃饭</div></div></div>';

    html += '<div class="card stat-row">' +
      '<div class="stat" data-action="nav" data-to="#/favorites"><b>' + favCount + '</b><span>收藏</span></div>' +
      '<div class="stat" data-action="nav" data-to="#/orders"><b>' + report.weekCount + '</b><span>本周订单</span></div>' +
      '<div class="stat" data-action="nav" data-to="#/orders"><b>' + report.allCount + '</b><span>全部订单</span></div>' +
      '</div>';

    html += '<div class="card menu-links">' +
      menuLink('❤️', '我的收藏', '#/favorites') +
      menuLink('📍', '收货地址', '#/address') +
      menuLink('📊', '账单 · 消费周报', '#/report') +
      menuLink('📋', '全部订单', '#/orders') +
      '</div>';

    html += '<div class="card menu-links">' +
      '<div class="menu-link" data-action="reset-data"><span class="ml-icon">🧹</span>' +
      '<span class="ml-label">清除缓存</span><span class="ml-arrow">›</span></div></div>';

    html += '</div>' + tabbar('mine');
    return html;
  }

  function menuLink(icon, label, to) {
    return '<div class="menu-link" data-action="nav" data-to="' + to + '">' +
      '<span class="ml-icon">' + icon + '</span><span class="ml-label">' + esc(label) + '</span>' +
      '<span class="ml-arrow">›</span></div>';
  }

  /* ============================================================
   * 收藏页
   * ============================================================ */
  function favoritesPage() {
    var entries = S.favoriteEntries();
    var html = '<div class="page page-favorites">';
    html += navbar('我的收藏');
    if (!entries.length) {
      html += '<div class="empty-state tall"><div class="empty-icon">🤍</div>' +
        '<p>还没有收藏</p><p class="empty-sub">看到喜欢的，点个 ❤️ 存起来</p>' +
        '<button class="primary-btn" data-action="nav" data-to="#/home">去逛逛</button></div>';
    } else {
      html += entries.map(function (e) {
        var p = e.product, s = e.shop;
        return '<div class="card fav-row">' +
          '<div class="prod-img" data-action="nav" data-to="#/product/' + p.id + '">' + p.img + '</div>' +
          '<div class="prod-main"><div class="prod-name" data-action="nav" data-to="#/product/' + p.id + '">' + esc(p.name) + '</div>' +
          '<div class="prod-meta"><span class="meta-item shop-link" data-action="nav" data-to="#/shop/' + s.id + '">' + esc(s.name) + ' ›</span></div>' +
          '<div class="prod-bottom">' + priceBlock(p) + stepper(p.id) + '</div></div>' +
          '<button class="fav-remove" data-action="fav-toggle" data-pid="' + p.id + '">❤️</button>' +
          '</div>';
      }).join('');
    }
    html += '</div>';
    return html;
  }

  /* ============================================================
   * 收货地址页
   * ============================================================ */
  function addressPage() {
    var list = S.addresses();
    var selected = S.selectedAddress();
    var html = '<div class="page page-address">';
    html += navbar('收货地址');
    html += list.map(function (a) {
      var on = selected && selected.id === a.id;
      return '<div class="card addr-item' + (on ? ' active' : '') + '" data-action="select-address" data-aid="' + a.id + '">' +
        '<div class="ai-main"><div class="ac-line1">' + esc(a.detail) + '</div>' +
        '<div class="ac-line2">' + esc(a.name) + ' ' + esc(a.phone) + ' <span class="tag">' + esc(a.tag) + '</span></div></div>' +
        '<span class="ai-check">' + (on ? '✓' : '') + '</span></div>';
    }).join('');

    html += '<div class="card addr-form"><div class="section-head">新增地址</div>' +
      '<input id="addr-name" class="form-input" placeholder="联系人">' +
      '<input id="addr-phone" class="form-input" placeholder="手机号">' +
      '<input id="addr-detail" class="form-input" placeholder="详细地址（小区/楼栋/门牌号）">' +
      '<input id="addr-tag" class="form-input" placeholder="标签（家/公司/学校，选填）">' +
      '<button class="primary-btn" data-action="add-address">保存并使用</button></div>';

    html += '</div>';
    return html;
  }

  /* ============================================================
   * 消费周报页（产品真正的价值所在）
   * ============================================================ */
  function reportPage() {
    var r = S.weeklyReport();
    var html = '<div class="page page-report">';
    html += navbar('消费周报');

    html += '<div class="report-hero">' +
      '<div class="rh-range">' + fmtDate(r.weekStart) + ' - ' + fmtDate(r.weekEnd) + ' · 本周</div>' +
      '<div class="rh-total">' + money(r.weekTotal) + '</div>' +
      '<div class="rh-sub">共 ' + r.weekCount + ' 笔 · 累计消费 ' + money(r.allTotal) + '（' + r.allCount + ' 笔）</div>' +
      '</div>';

    /* 时段分布 */
    var maxCount = Math.max(1, r.slotCount.morning, r.slotCount.afternoon, r.slotCount.evening, r.slotCount.lateNight);
    html += '<div class="card"><div class="section-head">下单时段分布</div><div class="slot-chart">' +
      S.TIME_SLOTS.map(function (sl) {
        var c = r.slotCount[sl.key];
        var pct = Math.round(c / maxCount * 100);
        return '<div class="sc-row"><span class="sc-label">' + sl.icon + ' ' + sl.label + '</span>' +
          '<div class="sc-track"><div class="sc-bar' + (sl.key === 'lateNight' ? ' night' : '') + '" style="width:' + pct + '%"></div></div>' +
          '<span class="sc-count">' + c + '笔' + (c > 0 ? ' · ' + money(r.slotAmount[sl.key]) : '') + '</span></div>';
      }).join('') + '</div></div>';

    /* 深夜洞察（温和、不评判） */
    if (r.lateNightCount > 0) {
      html += '<div class="card insight-card night">' +
        '<div class="ic-title">🌙 深夜时段</div>' +
        '<div class="ic-text">本周有 <b>' + r.lateNightCount + '</b> 笔订单是在深夜（22:00 - 次日 6:00）下的，' +
        '共 ' + money(r.slotAmount.lateNight) + '。</div>' +
        '<div class="ic-text sub">深夜的决定，留到早上再做也不迟。下次可以先放进购物车，睡一觉，明天还想要再下单。</div></div>';
    } else if (r.weekCount > 0) {
      html += '<div class="card insight-card good">' +
        '<div class="ic-title">🌤️ 作息很稳</div>' +
        '<div class="ic-text">本周没有深夜下单，节奏保持得很好。</div></div>';
    }

    /* 克制正反馈 */
    if (r.resisted.length > 0) {
      html += '<div class="card insight-card resist">' +
        '<div class="ic-title">💪 被你稳稳接住的冲动</div>' +
        '<div class="ic-text">有 <b>' + r.resisted.length + '</b> 件商品被你收藏后一直没有下单，约 <b>' +
        money(r.resistedAmount) + '</b>。想要但没买，也是一种选择。</div>' +
        '<div class="resist-list">' + r.resisted.slice(0, 6).map(function (e) {
          return '<div class="resist-item"><span>' + e.product.img + '</span>' +
            '<span class="ri-name">' + esc(e.product.name) + '</span>' +
            '<span class="ri-price">' + money(e.product.price) + '</span></div>';
        }).join('') + '</div></div>';
    }

    if (r.weekCount === 0 && r.resisted.length === 0) {
      html += '<div class="empty-state"><div class="empty-icon">📊</div>' +
        '<p>本周还没有消费记录</p><p class="empty-sub">下过单之后，这里会慢慢看见你的消费习惯</p></div>';
    }

    /* 伦理底线（温和的页脚） */
    html += '<div class="report-footer">周报只呈现行为数据，不评判任何一次消费。<br>' +
      '如果情绪长期低落，请认真对待自己，必要时寻求专业帮助。</div>';

    html += '</div>';
    return html;
  }

  /* ============================================================
   * 覆盖层：支付面板 / 深夜温和提示 / 确认弹窗
   * ============================================================ */
  function paySheet(shopId, ui) {
    var sum = S.checkoutSummary(shopId);
    if (!sum) return '';
    var payMethod = ui.payMethod || '丑团支付';
    return '<div class="mask" data-action="close-overlay">' +
      '<div class="sheet" data-stop="1">' +
      '<div class="sheet-head">确认支付<button class="sheet-close" data-action="close-overlay">✕</button></div>' +
      '<div class="sheet-amount">' + money(sum.total) + '</div>' +
      '<div class="sheet-method">' + esc(payMethod) + '</div>' +
      '<button class="primary-btn wide" data-action="pay-confirm" data-shop="' + shopId + '">确认支付 ' + money(sum.total) + '</button>' +
      '</div></div>';
  }

  function payingSheet() {
    return '<div class="mask"><div class="sheet paying">' +
      '<div class="spinner"></div><div class="paying-text">支付中…</div></div></div>';
  }

  /* 深夜温和提示：客观 + 缓冲建议，不说教 */
  function lateNightModal(shopId) {
    var t = fmtTime(S.now());
    return '<div class="mask center">' +
      '<div class="modal" data-stop="1">' +
      '<div class="modal-icon">🌙</div>' +
      '<div class="modal-title">现在是 ' + t + '</div>' +
      '<div class="modal-text">这一单不急的话，可以先留在购物车里，睡一觉，明天还想要再下单也不迟。</div>' +
      '<button class="primary-btn wide" data-action="latenight-hold">先放一放</button>' +
      '<button class="ghost-btn wide" data-action="latenight-continue" data-shop="' + shopId + '">继续下单</button>' +
      '</div></div>';
  }

  function confirmModal(title, text, action, payload) {
    return '<div class="mask center" data-action="close-overlay">' +
      '<div class="modal" data-stop="1">' +
      '<div class="modal-title">' + esc(title) + '</div>' +
      '<div class="modal-text">' + esc(text) + '</div>' +
      '<button class="primary-btn wide" data-action="' + action + '" ' + (payload || '') + '>确定</button>' +
      '<button class="ghost-btn wide" data-action="close-overlay">取消</button>' +
      '</div></div>';
  }

  function notFound(msg) {
    return '<div class="page">' + navbar('丑团') +
      '<div class="empty-state tall"><div class="empty-icon">🫥</div><p>' + esc(msg) + '</p>' +
      '<button class="primary-btn" data-action="nav" data-to="#/home">回首页</button></div></div>';
  }

  return {
    esc: esc,
    fmtCountdown: fmtCountdown,
    home: home,
    searchPage: searchPage,
    shopPage: shopPage,
    productPage: productPage,
    cartPage: cartPage,
    checkoutPage: checkoutPage,
    successPage: successPage,
    orderPage: orderPage,
    ordersPage: ordersPage,
    minePage: minePage,
    favoritesPage: favoritesPage,
    addressPage: addressPage,
    reportPage: reportPage,
    paySheet: paySheet,
    payingSheet: payingSheet,
    lateNightModal: lateNightModal,
    confirmModal: confirmModal
  };
})();

if (typeof module !== 'undefined' && module.exports) { module.exports = CT_VIEWS; }
