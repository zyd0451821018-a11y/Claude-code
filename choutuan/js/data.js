/* ============================================================
 * 丑团 · data.js —— 静态数据层
 * 店铺 / 商品 / 评价语料 / 地址 / 热搜词
 * 16 家店铺 × 4 款商品 = 64 款
 * ============================================================ */

'use strict';

var CT_DATA = (function () {

  /* ---------- 分类 ---------- */
  var CATEGORIES = [
    { id: 'all',     name: '全部',     icon: '🍽️' },
    { id: 'burger',  name: '汉堡快餐', icon: '🍔' },
    { id: 'milktea', name: '奶茶饮品', icon: '🧋' },
    { id: 'coffee',  name: '咖啡',     icon: '☕' },
    { id: 'hotpot',  name: '火锅烤串', icon: '🍲' },
    { id: 'homely',  name: '家常快餐', icon: '🍚' },
    { id: 'noodle',  name: '粉面粥',   icon: '🍜' },
    { id: 'night',   name: '夜宵卤味', icon: '🌙' },
    { id: 'dessert', name: '甜品烘焙', icon: '🍰' }
  ];

  /* ---------- 店铺 + 商品 ---------- */
  /* 价格单位：元。origPrice 为划线原价，price 为券后价 */
  var SHOPS = [
    {
      id: 's01', name: '麦当当', category: 'burger', logo: '🍔', brand: '麦当当餐饮',
      rating: 4.8, monthlySales: 9243, deliveryMin: 28, deliveryFee: 3.5,
      minOrder: 20, distanceKm: 1.2,
      notice: '欢迎光临麦当当，周一会员日薯条加量！本店汉堡均为现点现做。',
      promos: ['满25减4', '满45减9'],
      products: [
        { id: 'p0101', name: '巨无霸霸', img: '🍔', cat: '招牌汉堡',
          desc: '双层纯牛肉饼，酱多到会从指缝逃跑，纸巾自备',
          price: 24.5, origPrice: 32, rating: 4.9, sales: 3211, tags: ['满25减4', '招牌'], seckill: true },
        { id: 'p0102', name: '麦香鱼鱼', img: '🐟', cat: '招牌汉堡',
          desc: '深海鳕鱼排，嫩到怀疑鱼没来得及反应',
          price: 18.0, origPrice: 23, rating: 4.7, sales: 1876, tags: ['满25减4'] },
        { id: 'p0103', name: '大薯条条', img: '🍟', cat: '小食甜品',
          desc: '刚出锅的那种烫嘴幸福感，凉了概不负责',
          price: 12.5, origPrice: 15, rating: 4.8, sales: 4521, tags: ['人气'] },
        { id: 'p0104', name: '圆筒冰淇淋淋', img: '🍦', cat: '小食甜品',
          desc: '甜筒界的老实人，三块五的快乐从未变过',
          price: 3.5, origPrice: 5, rating: 4.9, sales: 6032, tags: ['超值'] }
      ]
    },
    {
      id: 's02', name: '啃德鸡', category: 'burger', logo: '🍗', brand: '啃德鸡炸鸡',
      rating: 4.7, monthlySales: 8710, deliveryMin: 32, deliveryFee: 4,
      minOrder: 25, distanceKm: 1.8,
      notice: '疯狂星期八正在进行中！本店炸鸡均为当日现炸，拒绝回锅。',
      promos: ['满30减6', '下单送蛋挞券'],
      products: [
        { id: 'p0201', name: '吮指原味鸡鸡', img: '🍗', cat: '现炸炸鸡',
          desc: '十一种神秘香料，配方连店长都只知道九种',
          price: 13.5, origPrice: 16.5, rating: 4.8, sales: 5122, tags: ['招牌'], seckill: true },
        { id: 'p0202', name: '香辣鸡腿堡堡', img: '🍔', cat: '汉堡',
          desc: '辣得刚刚好，不至于失态但足够清醒',
          price: 19.0, origPrice: 24, rating: 4.7, sales: 2603, tags: ['满30减6'] },
        { id: 'p0203', name: '葡式蛋挞挞', img: '🥧', cat: '小食',
          desc: '酥皮 128 层，掉渣是它对你的热情',
          price: 8.0, origPrice: 11, rating: 4.9, sales: 3944, tags: ['人气'] },
        { id: 'p0204', name: '爆汁鸡米花花', img: '🍿', cat: '小食',
          desc: '一口一个，停不下来预警，建议直接买大份',
          price: 11.5, origPrice: 14, rating: 4.6, sales: 2811, tags: ['满30减6'] }
      ]
    },
    {
      id: 's03', name: '汉堡堡王', category: 'burger', logo: '👑', brand: '汉堡堡王',
      rating: 4.6, monthlySales: 5321, deliveryMin: 35, deliveryFee: 4.5,
      minOrder: 22, distanceKm: 2.4,
      notice: '火烤才是真汉堡！本店牛肉饼均为明火炙烤，烟熏味免费赠送。',
      promos: ['满35减7'],
      products: [
        { id: 'p0301', name: '皇堡堡', img: '🍔', cat: '火烤汉堡',
          desc: '明火炙烤牛肉饼，戴皇冠的汉堡不会不好吃',
          price: 26.0, origPrice: 34, rating: 4.8, sales: 1980, tags: ['满35减7', '招牌'] },
        { id: 'p0302', name: '狠霸王牛堡堡', img: '🥩', cat: '火烤汉堡',
          desc: '三层牛肉，吃完这顿今天別的都不用吃了',
          price: 32.0, origPrice: 42, rating: 4.7, sales: 1211, tags: ['满35减7'], seckill: true },
        { id: 'p0303', name: '洋葱圈圈圈', img: '🧅', cat: '小食',
          desc: '圈圈复圈圈，咬下去咔嚓一声脆到隔壁',
          price: 10.0, origPrice: 13, rating: 4.5, sales: 1666, tags: ['人气'] },
        { id: 'p0304', name: '冰醇可乐乐', img: '🥤', cat: '饮品',
          desc: '快乐水加冰，肥宅套餐的灵魂伴侣',
          price: 6.5, origPrice: 9, rating: 4.6, sales: 2450, tags: ['超值'] }
      ]
    },
    {
      id: 's04', name: '喜茶茶', category: 'milktea', logo: '🧋', brand: '喜茶茶',
      rating: 4.9, monthlySales: 12034, deliveryMin: 25, deliveryFee: 3,
      minOrder: 15, distanceKm: 0.9,
      notice: '芝士茗茶创始店（自封的）。今日鲜果已到店，售完即止。',
      promos: ['满20减3', '两杯9折'],
      products: [
        { id: 'p0401', name: '多肉葡萄萄', img: '🍇', cat: '鲜果茶',
          desc: '一杯用掉 23 颗巨峰葡萄，果肉多到吸管堵车',
          price: 19.0, origPrice: 25, rating: 4.9, sales: 6721, tags: ['招牌', '满20减3'], seckill: true },
        { id: 'p0402', name: '芝芝莓莓莓', img: '🍓', cat: '鲜果茶',
          desc: '当季草莓打底，芝士奶盖厚到需要仰头喝',
          price: 21.0, origPrice: 27, rating: 4.8, sales: 4302, tags: ['满20减3'] },
        { id: 'p0403', name: '烤黑糖波波茶茶', img: '🧋', cat: '奶茶',
          desc: '波波在黑糖里泡过温泉，Q 弹到会跳',
          price: 15.0, origPrice: 19, rating: 4.7, sales: 3899, tags: ['人气'] },
        { id: 'p0404', name: '纯绿妍茶茶', img: '🍵', cat: '纯茶',
          desc: '什么都不加的清爽，给奶茶喝腻的你留条后路',
          price: 9.0, origPrice: 12, rating: 4.6, sales: 1287, tags: ['清爽'] }
      ]
    },
    {
      id: 's05', name: '蜜雪冰冰城', category: 'milktea', logo: '🍦', brand: '蜜雪冰冰城',
      rating: 4.7, monthlySales: 15211, deliveryMin: 22, deliveryFee: 2.5,
      minOrder: 10, distanceKm: 0.6,
      notice: '你爱我，我爱你，蜜雪冰冰城甜蜜蜜～雪王今日营业中。',
      promos: ['满15减2'],
      products: [
        { id: 'p0501', name: '冰鲜柠檬水水', img: '🍋', cat: '清爽果饮',
          desc: '四块钱的快乐天花板，一整颗柠檬现捶现摇',
          price: 4.0, origPrice: 6, rating: 4.8, sales: 9988, tags: ['超值', '招牌'], seckill: true },
        { id: 'p0502', name: '摇摇奶昔昔', img: '🥛', cat: '冰淇淋奶昔',
          desc: '喝前摇一摇，奶昔和心情都会变蓬松',
          price: 7.0, origPrice: 9, rating: 4.6, sales: 5211, tags: ['人气'] },
        { id: 'p0503', name: '雪王大圣代代', img: '🍨', cat: '冰淇淋奶昔',
          desc: '草莓酱淋到失控，雪王的心意都在克数里',
          price: 6.0, origPrice: 8, rating: 4.7, sales: 4670, tags: ['满15减2'] },
        { id: 'p0504', name: '珍珠奶茶茶', img: '🧋', cat: '经典奶茶',
          desc: '经典永不过时，珍珠给得像不要钱',
          price: 6.0, origPrice: 8, rating: 4.5, sales: 7302, tags: ['超值'] }
      ]
    },
    {
      id: 's06', name: '奈雪的茶茶', category: 'milktea', logo: '🍵', brand: '奈雪的茶茶',
      rating: 4.8, monthlySales: 6820, deliveryMin: 30, deliveryFee: 3.5,
      minOrder: 18, distanceKm: 1.5,
      notice: '一杯好茶，一口软欧包，两大幸福今日照常供应。',
      promos: ['满25减5', '茶+包立减3'],
      products: [
        { id: 'p0601', name: '霸气橙子子', img: '🍊', cat: '霸气鲜果茶',
          desc: '整颗手剥橙子，霸气的是果肉量不是脾气',
          price: 18.0, origPrice: 24, rating: 4.8, sales: 3120, tags: ['招牌', '满25减5'] },
        { id: 'p0602', name: '霸气芝士草莓莓', img: '🍓', cat: '霸气鲜果茶',
          desc: '草莓与芝士的双向奔赴，甜度刚好不齁',
          price: 22.0, origPrice: 28, rating: 4.7, sales: 2251, tags: ['满25减5'] },
        { id: 'p0603', name: '魔法棒软欧包包', img: '🥖', cat: '软欧包',
          desc: '外脆内软，掰开有拉丝，魔法在麦香里',
          price: 12.0, origPrice: 16, rating: 4.6, sales: 1809, tags: ['人气'], seckill: true },
        { id: 'p0604', name: '金色山脉宝藏茶茶', img: '⛰️', cat: '经典奶茶',
          desc: '茶底是金色山脉，奶盖是山顶积雪',
          price: 16.0, origPrice: 21, rating: 4.7, sales: 1503, tags: ['满25减5'] }
      ]
    },
    {
      id: 's07', name: '星巴巴克', category: 'coffee', logo: '☕', brand: '星巴巴克咖啡',
      rating: 4.7, monthlySales: 4560, deliveryMin: 27, deliveryFee: 5,
      minOrder: 30, distanceKm: 2.0,
      notice: '第三空间搬到你家。中杯就是最小杯，我们不解释。',
      promos: ['满40减8'],
      products: [
        { id: 'p0701', name: '生椰拿铁铁', img: '🥥', cat: '经典咖啡',
          desc: '椰香与浓缩的融合，好喝到想给咖啡师鼓掌',
          price: 27.0, origPrice: 33, rating: 4.8, sales: 2011, tags: ['招牌', '满40减8'] },
        { id: 'p0702', name: '焦糖玛奇朵朵', img: '☕', cat: '经典咖啡',
          desc: '焦糖网格画得很认真，喝之前记得拍照',
          price: 30.0, origPrice: 36, rating: 4.6, sales: 1422, tags: ['满40减8'] },
        { id: 'p0703', name: '星冰乐乐', img: '🧊', cat: '冰调饮品',
          desc: '一半是咖啡，一半是刨冰，全部是快乐',
          price: 29.0, origPrice: 35, rating: 4.5, sales: 987, tags: ['人气'], seckill: true },
        { id: 'p0704', name: '提拉米苏蛋糕糕', img: '🍰', cat: '甜品轻食',
          desc: '意式经典，可可粉会撒你一手，值得',
          price: 22.0, origPrice: 28, rating: 4.7, sales: 756, tags: ['甜品'] }
      ]
    },
    {
      id: 's08', name: '瑞幸幸咖啡', category: 'coffee', logo: '🦌', brand: '瑞幸幸咖啡',
      rating: 4.8, monthlySales: 11302, deliveryMin: 20, deliveryFee: 3,
      minOrder: 15, distanceKm: 0.8,
      notice: '首杯 9.9 的传说仍在继续。小鹿今日蹄速很快，出杯神速。',
      promos: ['满18减4', '每周9.9券'],
      products: [
        { id: 'p0801', name: '厚乳拿铁铁', img: '🥛', cat: '大师咖啡',
          desc: '厚乳厚到能站住吸管，奶咖党的本命',
          price: 13.9, origPrice: 26, rating: 4.8, sales: 8210, tags: ['满18减4', '招牌'], seckill: true },
        { id: 'p0802', name: '椰云拿铁铁', img: '☁️', cat: '大师咖啡',
          desc: '椰浆打成云朵盖在咖啡上，一口踩进云里',
          price: 14.9, origPrice: 27, rating: 4.9, sales: 7455, tags: ['满18减4'] },
        { id: 'p0803', name: '标准美式式', img: '☕', cat: '经典咖啡',
          desc: '苦得很诚实，提神效果立竿见影',
          price: 9.9, origPrice: 20, rating: 4.5, sales: 5100, tags: ['超值'] },
        { id: 'p0804', name: '芝士瑞纳冰冰', img: '🧀', cat: '瑞纳冰',
          desc: '咖啡味的冰沙顶着芝士奶盖，夏天的答案',
          price: 16.9, origPrice: 29, rating: 4.6, sales: 2333, tags: ['满18减4'] }
      ]
    },
    {
      id: 's09', name: '海底捞捞', category: 'hotpot', logo: '🍲', brand: '海底捞捞火锅',
      rating: 4.9, monthlySales: 3877, deliveryMin: 45, deliveryFee: 6,
      minOrder: 60, distanceKm: 3.1,
      notice: '外送锅底免费送围裙和皮筋，服务态度好到你不好意思差评。',
      promos: ['满100减20'],
      products: [
        { id: 'p0901', name: '番茄锅底底', img: '🍅', cat: '锅底',
          desc: '八颗番茄熬一锅，先喝三碗汤再涮菜是老规矩',
          price: 38.0, origPrice: 48, rating: 4.9, sales: 1802, tags: ['招牌', '满100减20'] },
        { id: 'p0902', name: '捞派滑牛肉肉', img: '🥩', cat: '涮品',
          desc: '嫩滑到筷子都夹不稳，七上八下十五秒',
          price: 46.0, origPrice: 58, rating: 4.8, sales: 1211, tags: ['满100减20'], seckill: true },
        { id: 'p0903', name: '虾滑滑滑', img: '🦐', cat: '涮品',
          desc: '名字里三个滑字，是它应得的',
          price: 32.0, origPrice: 42, rating: 4.9, sales: 1450, tags: ['人气'] },
        { id: 'p0904', name: '捞面套餐餐', img: '🍜', cat: '主食',
          desc: '外送版捞面没有表演，但味道一分不少',
          price: 12.0, origPrice: 16, rating: 4.6, sales: 890, tags: ['主食'] }
      ]
    },
    {
      id: 's10', name: '蜀大大侠', category: 'hotpot', logo: '🌶️', brand: '蜀大大侠火锅',
      rating: 4.7, monthlySales: 3122, deliveryMin: 48, deliveryFee: 6.5,
      minOrder: 50, distanceKm: 3.6,
      notice: '江湖气的川味火锅，辣度分五档，点单前请掂量自己的实力。',
      promos: ['满80减15'],
      products: [
        { id: 'p1001', name: '牛油辣锅底底', img: '🔥', cat: '锅底',
          desc: '正经牛油厚锅底，辣椒在锅里练轻功',
          price: 42.0, origPrice: 55, rating: 4.8, sales: 1320, tags: ['招牌', '满80减15'] },
        { id: 'p1002', name: '大侠毛肚肚', img: '🥬', cat: '涮品',
          desc: '七上八下涮十五秒，脆到发出咯吱声',
          price: 36.0, origPrice: 46, rating: 4.9, sales: 1105, tags: ['满80减15'], seckill: true },
        { id: 'p1003', name: '现炸酥肉肉', img: '🍖', cat: '小吃',
          desc: '锅还没开就能吃完一盒的危险小吃',
          price: 22.0, origPrice: 28, rating: 4.8, sales: 1688, tags: ['人气'] },
        { id: 'p1004', name: '冰粉粉', img: '🍧', cat: '甜品',
          desc: '红糖冰粉配山楂碎，辣完之后的救命稻草',
          price: 8.0, origPrice: 11, rating: 4.7, sales: 1432, tags: ['解辣'] }
      ]
    },
    {
      id: 's11', name: '木屋烧烤烤', category: 'night', logo: '🍢', brand: '木屋烧烤烤',
      rating: 4.6, monthlySales: 4210, deliveryMin: 40, deliveryFee: 5,
      minOrder: 35, distanceKm: 2.7,
      notice: '炭火现烤，深夜灵魂食堂。烤串到手请趁热，凉了味道减半。',
      promos: ['满50减10'],
      products: [
        { id: 'p1101', name: '炭烤羊肉串串', img: '🍢', cat: '肉串',
          desc: '孜然和辣椒面的黄金比例，一撸一大把',
          price: 4.5, origPrice: 6, rating: 4.8, sales: 8877, tags: ['招牌', '满50减10'], seckill: true },
        { id: 'p1102', name: '烤鸡翅翅', img: '🍗', cat: '肉串',
          desc: '外皮焦脆流油，小心烫，更小心上瘾',
          price: 8.0, origPrice: 10, rating: 4.7, sales: 4321, tags: ['人气'] },
        { id: 'p1103', name: '烤韭菜菜', img: '🥬', cat: '素串',
          desc: '深夜韭菜配烤串，快乐很简单',
          price: 6.0, origPrice: 8, rating: 4.5, sales: 3210, tags: ['满50减10'] },
        { id: 'p1104', name: '蒜蓉烤茄子子', img: '🍆', cat: '素串',
          desc: '蒜蓉铺满整条茄子，用勺子挖着吃才地道',
          price: 12.0, origPrice: 15, rating: 4.6, sales: 2109, tags: ['满50减10'] }
      ]
    },
    {
      id: 's12', name: '沙县小小吃', category: 'homely', logo: '🥟', brand: '沙县小小吃',
      rating: 4.5, monthlySales: 7654, deliveryMin: 25, deliveryFee: 2,
      minOrder: 12, distanceKm: 0.5,
      notice: '国民食堂，量大实惠。拌面加卤蛋是隐藏吃法，懂的都懂。',
      promos: ['满15减2'],
      products: [
        { id: 'p1201', name: '柳叶蒸饺饺', img: '🥟', cat: '主食',
          desc: '皮薄馅大十只装，蘸醋加辣椒是标配',
          price: 8.0, origPrice: 10, rating: 4.6, sales: 5432, tags: ['招牌', '满15减2'] },
        { id: 'p1202', name: '飘香拌面面', img: '🍝', cat: '主食',
          desc: '花生酱拌到每一根面，六块钱吃出满足感',
          price: 6.0, origPrice: 8, rating: 4.7, sales: 6210, tags: ['超值'], seckill: true },
        { id: 'p1203', name: '炖罐汤汤', img: '🍲', cat: '汤品',
          desc: '一人一罐慢火炖，喝完整个人都被熨平了',
          price: 10.0, origPrice: 13, rating: 4.8, sales: 3122, tags: ['满15减2'] },
        { id: 'p1204', name: '卤蛋卤蛋蛋', img: '🥚', cat: '小吃',
          desc: '在卤水里泡了一整夜的入味选手',
          price: 2.5, origPrice: 3.5, rating: 4.5, sales: 7788, tags: ['超值'] }
      ]
    },
    {
      id: 's13', name: '兰州拉拉面', category: 'noodle', logo: '🍜', brand: '兰州拉拉面',
      rating: 4.6, monthlySales: 5311, deliveryMin: 30, deliveryFee: 2.5,
      minOrder: 15, distanceKm: 1.1,
      notice: '一清二白三红四绿五黄，拉面师傅的手艺在汤里。',
      promos: ['满20减3'],
      products: [
        { id: 'p1301', name: '牛肉拉面面', img: '🍜', cat: '拉面',
          desc: '汤清肉烂面劲道，细面二细韭叶随你选',
          price: 16.0, origPrice: 20, rating: 4.8, sales: 4655, tags: ['招牌', '满20减3'], seckill: true },
        { id: 'p1302', name: '加肉加蛋豪华面面', img: '🥩', cat: '拉面',
          desc: '牛肉多到盖住面，打工人的顶配午餐',
          price: 24.0, origPrice: 30, rating: 4.7, sales: 2100, tags: ['满20减3'] },
        { id: 'p1303', name: '凉拌黄瓜瓜', img: '🥒', cat: '小菜',
          desc: '蒜香麻油一拍即合，解腻担当',
          price: 6.0, origPrice: 8, rating: 4.5, sales: 1890, tags: ['小菜'] },
        { id: 'p1304', name: '手抓羊肉肉', img: '🍖', cat: '硬菜',
          desc: '大块羊肉配椒盐，豪迈是西北的底色',
          price: 38.0, origPrice: 48, rating: 4.8, sales: 766, tags: ['硬菜'] }
      ]
    },
    {
      id: 's14', name: '老乡鸡鸡', category: 'homely', logo: '🐔', brand: '老乡鸡鸡快餐',
      rating: 4.7, monthlySales: 6788, deliveryMin: 26, deliveryFee: 3,
      minOrder: 18, distanceKm: 1.4,
      notice: '肥西老母鸡汤每天现炖，家的味道，干净卫生看得见。',
      promos: ['满25减4'],
      products: [
        { id: 'p1401', name: '肥西老母鸡汤汤', img: '🍲', cat: '汤品',
          desc: '一只鸡的精华都在这碗汤里，鲜掉眉毛',
          price: 15.5, origPrice: 19, rating: 4.9, sales: 5211, tags: ['招牌', '满25减4'], seckill: true },
        { id: 'p1402', name: '梅菜扣肉套餐餐', img: '🍱', cat: '套餐',
          desc: '肥而不腻入口即化，米饭杀手预警',
          price: 22.0, origPrice: 28, rating: 4.7, sales: 3122, tags: ['满25减4'] },
        { id: 'p1403', name: '农家蒸蛋蛋', img: '🍮', cat: '小碗菜',
          desc: '嫩得像布丁的蒸蛋，小朋友和大朋友都爱',
          price: 6.0, origPrice: 8, rating: 4.8, sales: 4310, tags: ['人气'] },
        { id: 'p1404', name: '葱油拌饭饭', img: '🍚', cat: '主食',
          desc: '猪油葱香拌热饭，简单到极致就是好吃',
          price: 5.0, origPrice: 7, rating: 4.6, sales: 3877, tags: ['超值'] }
      ]
    },
    {
      id: 's15', name: '周黑黑鸭', category: 'night', logo: '🦆', brand: '周黑黑鸭卤味',
      rating: 4.6, monthlySales: 4522, deliveryMin: 24, deliveryFee: 3.5,
      minOrder: 20, distanceKm: 1.6,
      notice: '甜辣入骨，锁鲜装新鲜直达。追剧伴侣，吃完记得洗手再碰手机。',
      promos: ['满30减5'],
      products: [
        { id: 'p1501', name: '甜辣鸭脖脖', img: '🦴', cat: '卤鸭系列',
          desc: '越啃越有味的甜辣担当，追剧必备',
          price: 18.0, origPrice: 23, rating: 4.7, sales: 3899, tags: ['招牌', '满30减5'], seckill: true },
        { id: 'p1502', name: '卤鸭翅翅', img: '🍗', cat: '卤鸭系列',
          desc: '皮糯肉嫩，甜辣卤汁渗进每一丝纤维',
          price: 22.0, origPrice: 27, rating: 4.6, sales: 2311, tags: ['满30减5'] },
        { id: 'p1503', name: '虎皮凤爪爪', img: '🐾', cat: '卤味小吃',
          desc: '胶质感拉满，吃完嘴唇黏黏的才正宗',
          price: 16.0, origPrice: 20, rating: 4.8, sales: 2988, tags: ['人气'] },
        { id: 'p1504', name: '藕片藕断丝连连', img: '🪷', cat: '素卤',
          desc: '脆藕吸饱卤汁，素菜界的显眼包',
          price: 12.0, origPrice: 15, rating: 4.5, sales: 1877, tags: ['满30减5'] }
      ]
    },
    {
      id: 's16', name: '好利来来', category: 'dessert', logo: '🍰', brand: '好利来来烘焙',
      rating: 4.8, monthlySales: 3901, deliveryMin: 33, deliveryFee: 4,
      minOrder: 25, distanceKm: 2.2,
      notice: '半熟芝士每日限量供应，蛋糕坯当日现烤，甜是正经事。',
      promos: ['满35减6'],
      products: [
        { id: 'p1601', name: '半熟芝士士', img: '🧀', cat: '招牌甜品',
          desc: '半熟的口感刚刚好，冷藏后风味更佳',
          price: 25.0, origPrice: 32, rating: 4.9, sales: 2788, tags: ['招牌', '满35减6'], seckill: true },
        { id: 'p1602', name: '脏脏包包', img: '🍫', cat: '面包',
          desc: '吃完嘴角全是巧克力，脏得心服口服',
          price: 14.0, origPrice: 18, rating: 4.6, sales: 1902, tags: ['满35减6'] },
        { id: 'p1603', name: '蜂蜜蛋糕糕', img: '🍯', cat: '面包',
          desc: '老式蜂蜜蛋糕，松软回甜，是小时候的味道',
          price: 12.0, origPrice: 16, rating: 4.7, sales: 2455, tags: ['人气'] },
        { id: 'p1604', name: '提拉米酥酥', img: '🍰', cat: '招牌甜品',
          desc: '一层酥一层慕斯，叉子下去像踩进云端',
          price: 21.0, origPrice: 27, rating: 4.8, sales: 1233, tags: ['满35减6'] }
      ]
    }
  ];

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
  var HOT_WORDS = ['奶茶', '炸鸡', '汉堡', '火锅', '烧烤', '柠檬水', '拉面', '芝士'];

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

  return {
    CATEGORIES: CATEGORIES,
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
})();

/* 供 Node/jsdom 测试引用 */
if (typeof module !== 'undefined' && module.exports) { module.exports = CT_DATA; }
