  /* ---------- 评价语料（按商品 id 确定性分配，营造真实感） ---------- */
  var REVIEW_USERS = [
    '干饭小能手', '深夜不睡星人', '芋泥啵啵', '一口闷', '摸鱼冠军',
    '碳水教教主', '减肥明天开始', '外卖资深评委', '爱吃的胖丁', '不辣不欢',
    '午休四十分钟', '公司楼下常客', '奶茶戒断失败', '追剧配点啥', '楼下住户'
  ];
  var REVIEW_TEXTS = [
    '味道很好，配送也快，骑手小哥很有礼貌！',
    '包装扎实，到手还是热的，回购第 N 次了。',
    '分量比想象中足，两个人吃刚刚好。',
    '这家真的稳定，每次点都不踩雷。',
    '深夜救星，感谢商家还在营业。',
    '味道不错，就是辣度可以再猛一点哈哈。',
    '公司下午茶点的，同事都问链接。',
    '照片和实物一致，好评！',
    '性价比很高，券后价太香了。',
    '第一次点，被推荐语戳中，果然名不虚传。',
    '汤汁一滴没洒，细节满分。',
    '孩子很喜欢，下次还点。'
  ];

  /* ---------- 默认收货地址 ---------- */
  var DEFAULT_ADDRESSES = [
    { id: 'a1', name: '李小乐', phone: '138****6688', tag: '家',
      detail: '幸福里小区 3 栋 2 单元 501 室' },
    { id: 'a2', name: '李小乐', phone: '138****6688', tag: '公司',
      detail: '创新大厦 B 座 12 层 1208 工位' }
  ];

  /* ---------- 热门搜索词 ---------- */
  var HOT_WORDS = ['汉堡', '披萨', '奶茶', '咖啡', '炸鸡', '烤串', '水饺', '牛排', '煎饼', '炒饭'];

  /* ---------- 骑手池 ---------- */
  var RIDERS = [
    { name: '王师傅', avatar: '🛵' },
    { name: '陈师傅', avatar: '🏍️' },
    { name: '刘师傅', avatar: '🛵' },
    { name: '赵师傅', avatar: '🚴' },
    { name: '孙师傅', avatar: '🛵' }
  ];

  /* ---------- 查询辅助 ---------- */
  var _productIndex = null;
  function buildIndex() {
    if (_productIndex) return _productIndex;
    _productIndex = {};
    SHOPS.forEach(function (shop) {
      shop.products.forEach(function (p) {
        _productIndex[p.id] = { product: p, shop: shop };
      });
    });
    return _productIndex;
  }

  function getShop(shopId) {
    for (var i = 0; i < SHOPS.length; i++) {
      if (SHOPS[i].id === shopId) return SHOPS[i];
    }
    return null;
  }

  function getProduct(pid) {
    var hit = buildIndex()[pid];
    return hit ? hit.product : null;
  }

  function getShopOfProduct(pid) {
    var hit = buildIndex()[pid];
    return hit ? hit.shop : null;
  }

  function allProducts() {
    var list = [];
    SHOPS.forEach(function (shop) {
      shop.products.forEach(function (p) { list.push({ product: p, shop: shop }); });
    });
    return list;
  }

  function seckillProducts() {
    return allProducts().filter(function (e) { return e.product.seckill; });
  }

  /* 搜索：名称/描述/分类/标签/店铺名/品牌 */
  function search(keyword) {
    var kw = String(keyword || '').trim().toLowerCase();
    if (!kw) return [];
    return allProducts().filter(function (e) {
      var p = e.product, s = e.shop;
      var hay = [
        p.name, p.desc, p.cat, (p.tags || []).join(' '),
        s.name, s.brand, catName(s.category)
      ].join(' ').toLowerCase();
      return hay.indexOf(kw) !== -1;
    });
  }

  function catName(catId) {
    for (var i = 0; i < CATEGORIES.length; i++) {
      if (CATEGORIES[i].id === catId) return CATEGORIES[i].name;
    }
    return '';
  }

  /* 确定性伪随机：同一商品的评价固定 */
  function reviewsOf(pid) {
    var seed = 0;
    for (var i = 0; i < pid.length; i++) seed = (seed * 31 + pid.charCodeAt(i)) % 99991;
    var count = 3 + (seed % 3); // 3~5 条
    var out = [];
    for (var j = 0; j < count; j++) {
      var u = REVIEW_USERS[(seed + j * 7) % REVIEW_USERS.length];
      var t = REVIEW_TEXTS[(seed + j * 13) % REVIEW_TEXTS.length];
      var stars = 4 + ((seed + j) % 2); // 4 或 5 星
      var daysAgo = 1 + ((seed + j * 3) % 28);
      out.push({ user: u, text: t, stars: stars, daysAgo: daysAgo });
    }
    return out;
  }

  function pickRider(seedStr) {
    var seed = 0;
    for (var i = 0; i < seedStr.length; i++) seed = (seed * 17 + seedStr.charCodeAt(i)) % 7919;
    return RIDERS[seed % RIDERS.length];
  }

  /* 后台覆盖项：改名/改价/售罄（后台不可达时前端用内置数据，零依赖可用） */
  function applyOverrides(list) {
    var n = 0;
    (list || []).forEach(function (o) {
      var p = getProduct(o.pid);
      if (!p) return;
      if (o.name) p.name = o.name;
      if (o.price != null) p.price = o.price;
      if (o.origPrice != null) p.origPrice = o.origPrice;
      p.soldout = !!o.soldout;
      n++;
    });
    return n;
  }

  return {
    CATEGORIES: CATEGORIES,
    applyOverrides: applyOverrides,
    SHOPS: SHOPS,
    DEFAULT_ADDRESSES: DEFAULT_ADDRESSES,
    HOT_WORDS: HOT_WORDS,
    getShop: getShop,
    getProduct: getProduct,
    getShopOfProduct: getShopOfProduct,
    allProducts: allProducts,
    seckillProducts: seckillProducts,
    search: search,
    catName: catName,
    reviewsOf: reviewsOf,
    pickRider: pickRider
  };
