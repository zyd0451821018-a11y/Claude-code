/* ============================================================
 * 丑团 · data.js —— 静态数据层
 * 店铺 / 商品 / 评价语料 / 地址 / 热搜词
 * 16 家店铺 × 4 款商品 = 64 款
 * 商品图为真实照片（来源见 tools/fetch-photos.sh，公开仓库素材）
 * ============================================================ */

'use strict';

var CT_DATA = (function () {

  /* ---------- 分类 ---------- */
  var CATEGORIES = [
    { id: 'all',       name: '全部',     icon: '🍽️' },
    { id: 'burger',    name: '汉堡炸鸡', icon: '🍔' },
    { id: 'pizza',     name: '披萨意面', icon: '🍕' },
    { id: 'drink',     name: '果茶饮品', icon: '🍋' },
    { id: 'dessert',   name: '甜品烘焙', icon: '🍰' },
    { id: 'brunch',    name: '轻食沙拉', icon: '🥗' },
    { id: 'hotpot',    name: '汤锅炖煮', icon: '🍲' },
    { id: 'bbq',       name: '烧烤串串', icon: '🍢' },
    { id: 'breakfast', name: '早点小吃', icon: '🥟' },
    { id: 'noodle',    name: '粉面',     icon: '🍜' },
    { id: 'rice',      name: '盖饭炒饭', icon: '🍛' },
    { id: 'western',   name: '西餐牛排', icon: '🥩' }
  ];

  /* ---------- 店铺 + 商品 ---------- */
  /* 价格单位：元。origPrice 为划线原价，price 为券后价 */
  var SHOPS = [
    {
      id: 's01', name: '麦当当', category: 'burger', logo: '🍔', brand: '麦当当餐饮',
      rating: 4.8, monthlySales: 9243, deliveryMin: 28, deliveryFee: 3.5,
      minOrder: 20, distanceKm: 1.2,
      notice: '欢迎光临麦当当，牛肉饼现煎现夹，薯条出锅五分钟内送不达免单（并不会）。',
      promos: ['满25减4', '满45减9'],
      products: [
        { id: 'p0101', name: '经典双层芝士牛堡堡', img: '🍔', cat: '招牌汉堡',
          desc: '双层纯牛肉饼配双份芝士，酱汁多到会从指缝逃跑',
          price: 24.5, origPrice: 32, rating: 4.9, sales: 3211, tags: ['满25减4', '招牌'], seckill: true },
        { id: 'p0102', name: '至尊全料安格斯堡堡', img: '🍔', cat: '招牌汉堡',
          desc: '生菜番茄洋葱全都要，一口下去五层风景',
          price: 18.0, origPrice: 23, rating: 4.7, sales: 1876, tags: ['满25减4'] },
        { id: 'p0103', name: '黄金脆薯条条', img: '🍟', cat: '小食甜品',
          desc: '刚出锅的那种烫嘴幸福感，凉了概不负责',
          price: 12.5, origPrice: 15, rating: 4.8, sales: 4521, tags: ['人气'] },
        { id: 'p0104', name: '草莓冰淇淋甜筒筒', img: '🍦', cat: '小食甜品',
          desc: '草莓味的粉红快乐，拍照五秒内请尽快食用',
          price: 3.5, origPrice: 5, rating: 4.9, sales: 6032, tags: ['超值'] }
      ]
    },
    {
      id: 's02', name: '啃德鸡', category: 'burger', logo: '🍗', brand: '啃德鸡炸鸡',
      rating: 4.7, monthlySales: 8710, deliveryMin: 32, deliveryFee: 4,
      minOrder: 25, distanceKm: 1.8,
      notice: '疯狂星期八正在进行中！本店炸物均为当日现炸，拒绝回锅。',
      promos: ['满30减6', '下单送蘸酱'],
      products: [
        { id: 'p0201', name: '韩式甜辣脆皮炸鸡鸡', img: '🍗', cat: '现炸炸鸡',
          desc: '甜辣酱裹到每一寸脆皮，吃完手指也想啃',
          price: 13.5, origPrice: 16.5, rating: 4.8, sales: 5122, tags: ['招牌'], seckill: true },
        { id: 'p0202', name: '芝士嫩鸡腿堡堡', img: '🍔', cat: '汉堡',
          desc: '整块炸鸡腿排加厚切芝士，扎实得有点过分',
          price: 19.0, origPrice: 24, rating: 4.7, sales: 2603, tags: ['满30减6'] },
        { id: 'p0203', name: '日式黄金炸鸡块块', img: '🍗', cat: '小食',
          desc: '外酥里嫩配秘制蘸酱，一块接一块停不下来',
          price: 8.0, origPrice: 11, rating: 4.9, sales: 3944, tags: ['人气'] },
        { id: 'p0204', name: '黄金酥炸大虾虾', img: '🍤', cat: '小食',
          desc: '整只大虾裹脆浆现炸，尾巴翘得很有精神',
          price: 11.5, origPrice: 14, rating: 4.6, sales: 2811, tags: ['满30减6'] }
      ]
    },
    {
      id: 's03', name: '汉堡堡王', category: 'burger', logo: '👑', brand: '汉堡堡王',
      rating: 4.6, monthlySales: 5321, deliveryMin: 35, deliveryFee: 4.5,
      minOrder: 22, distanceKm: 2.4,
      notice: '火烤才是真汉堡！本店牛肉饼均为明火炙烤，烟熏香免费赠送。',
      promos: ['满35减7'],
      products: [
        { id: 'p0301', name: '火烤经典皇堡堡', img: '🍔', cat: '火烤汉堡',
          desc: '明火炙烤牛肉饼，戴皇冠的汉堡不会不好吃',
          price: 26.0, origPrice: 34, rating: 4.8, sales: 1980, tags: ['满35减7', '招牌'] },
        { id: 'p0302', name: '狠霸王培根双层堡堡', img: '🥩', cat: '火烤汉堡',
          desc: '双层牛肉加培根，吃完这顿今天别的都不用吃了',
          price: 32.0, origPrice: 42, rating: 4.7, sales: 1211, tags: ['满35减7'], seckill: true },
        { id: 'p0303', name: '果木烟熏鸡腿堡堡', img: '🍔', cat: '火烤汉堡',
          desc: '果木烟熏香气的嫩鸡腿排，生菜脆到发出声音',
          price: 10.0, origPrice: 13, rating: 4.5, sales: 1666, tags: ['人气'] },
        { id: 'p0304', name: '冰镇醇黑快乐水水', img: '🥤', cat: '饮品',
          desc: '冰镇大扎快乐水，肥宅套餐的灵魂伴侣',
          price: 6.5, origPrice: 9, rating: 4.6, sales: 2450, tags: ['超值'] }
      ]
    },
    {
      id: 's04', name: '必胜胜客', category: 'pizza', logo: '🍕', brand: '必胜胜客披萨',
      rating: 4.9, monthlySales: 12034, deliveryMin: 25, deliveryFee: 3,
      minOrder: 15, distanceKm: 0.9,
      notice: '手工现擀饼底，芝士给到拉丝一米不断（大概）。今日窑炉状态极佳。',
      promos: ['满20减3', '两个9折'],
      products: [
        { id: 'p0401', name: '玛格丽特经典披萨萨', img: '🍕', cat: '手工披萨',
          desc: '番茄罗勒马苏里拉，简单到极致就是经典',
          price: 19.0, origPrice: 25, rating: 4.9, sales: 6721, tags: ['招牌', '满20减3'], seckill: true },
        { id: 'p0402', name: '至尊海陆双拼披萨萨', img: '🍕', cat: '手工披萨',
          desc: '一半海鲜一半肉肉，选择困难症的最优解',
          price: 21.0, origPrice: 27, rating: 4.8, sales: 4302, tags: ['满20减3'] },
        { id: 'p0403', name: '芝心拉丝大披萨萨', img: '🧀', cat: '手工披萨',
          desc: '饼边藏着一整圈芝士，最后一口才是高潮',
          price: 15.0, origPrice: 19, rating: 4.7, sales: 3899, tags: ['人气'] },
        { id: 'p0404', name: '香辣鸡肉小披萨萨', img: '🌶️', cat: '手工披萨',
          desc: '一人食小披萨，辣得刚刚好不耽误加班',
          price: 9.0, origPrice: 12, rating: 4.6, sales: 1287, tags: ['超值'] }
      ]
    },
    {
      id: 's05', name: '蜜雪冰冰城', category: 'drink', logo: '🍋', brand: '蜜雪冰冰城',
      rating: 4.7, monthlySales: 15211, deliveryMin: 22, deliveryFee: 2.5,
      minOrder: 10, distanceKm: 0.6,
      notice: '你爱我，我爱你，蜜雪冰冰城甜蜜蜜～鲜果当日现切现榨。',
      promos: ['满15减2'],
      products: [
        { id: 'p0501', name: '手打冰鲜柠檬水水', img: '🍋', cat: '清爽果饮',
          desc: '四块钱的快乐天花板，一整颗青柠现捶现摇',
          price: 4.0, origPrice: 6, rating: 4.8, sales: 9988, tags: ['超值', '招牌'], seckill: true },
        { id: 'p0502', name: '莓莓草莓冰冰茶', img: '🍓', cat: '清爽果饮',
          desc: '整颗草莓沉底，吸管插下去像在寻宝',
          price: 7.0, origPrice: 9, rating: 4.6, sales: 5211, tags: ['人气'] },
        { id: 'p0503', name: '鲜橙满杯气泡饮饮', img: '🍊', cat: '清爽果饮',
          desc: '鲜橙加气泡，喝一口从喉咙凉到天灵盖',
          price: 6.0, origPrice: 8, rating: 4.7, sales: 4670, tags: ['满15减2'] },
        { id: 'p0504', name: '西瓜西西冰饮饮', img: '🍉', cat: '清爽果饮',
          desc: '半个西瓜的诚意，夏天的正确打开方式',
          price: 6.0, origPrice: 8, rating: 4.5, sales: 7302, tags: ['超值'] }
      ]
    },
    {
      id: 's06', name: '甜过初恋恋', category: 'dessert', logo: '🍰', brand: '甜过初恋恋甜品',
      rating: 4.8, monthlySales: 6820, deliveryMin: 30, deliveryFee: 3.5,
      minOrder: 18, distanceKm: 1.5,
      notice: '每日限量手作甜品，甜度经过 128 次盲测校准，齁不到你。',
      promos: ['满25减5', '第二份半价'],
      products: [
        { id: 'p0601', name: '草莓芭菲杯杯', img: '🍓', cat: '招牌甜品',
          desc: '草莓奶油饼干碎层层叠叠，挖到底部有惊喜',
          price: 18.0, origPrice: 24, rating: 4.8, sales: 3120, tags: ['招牌', '满25减5'] },
        { id: 'p0602', name: '熔岩巧克力蛋糕糕', img: '🍫', cat: '招牌甜品',
          desc: '一勺戳破，巧克力岩浆缓缓流出，仪式感拉满',
          price: 22.0, origPrice: 28, rating: 4.7, sales: 2251, tags: ['满25减5'] },
        { id: 'p0603', name: '香草雪顶圣代代', img: '🍨', cat: '冰品',
          desc: '香草冰淇淋淋巧克力酱，草莓在旁边站岗',
          price: 12.0, origPrice: 16, rating: 4.6, sales: 1809, tags: ['人气'], seckill: true },
        { id: 'p0604', name: '蜂蜜厚松饼塔塔', img: '🥞', cat: '现烤松饼',
          desc: '五层厚松饼淋野蜂蜜，蓝莓负责假装健康',
          price: 16.0, origPrice: 21, rating: 4.7, sales: 1503, tags: ['满25减5'] }
      ]
    },
    {
      id: 's07', name: '轻食主意义', category: 'brunch', logo: '🥗', brand: '轻食主意义',
      rating: 4.7, monthlySales: 4560, deliveryMin: 27, deliveryFee: 5,
      minOrder: 30, distanceKm: 2.0,
      notice: '低卡不低配，食材当日直采。卡路里已帮你算好，放心吃。',
      promos: ['满40减8'],
      products: [
        { id: 'p0701', name: '牛油果溏心蛋轻食碗碗', img: '🥑', cat: '元气轻食',
          desc: '牛油果泥配溏心蛋，健身教练看了都点头',
          price: 27.0, origPrice: 33, rating: 4.8, sales: 2011, tags: ['招牌', '满40减8'] },
        { id: 'p0702', name: '牛肉太阳蛋能量盘盘', img: '🍳', cat: '元气轻食',
          desc: '嫩煎牛肉配太阳蛋，蛋白质直接拉满一整天',
          price: 30.0, origPrice: 36, rating: 4.6, sales: 1422, tags: ['满40减8'] },
        { id: 'p0703', name: '香蕉燕麦酸奶碗碗', img: '🍌', cat: '元气轻食',
          desc: '香蕉切片摆得整整齐齐，强迫症看了很舒适',
          price: 29.0, origPrice: 35, rating: 4.5, sales: 987, tags: ['人气'], seckill: true },
        { id: 'p0704', name: '全麦太阳蛋吐司司', img: '🍞', cat: '元气轻食',
          desc: '蛋黄戳破流到全麦吐司上的瞬间，值回票价',
          price: 22.0, origPrice: 28, rating: 4.7, sales: 756, tags: ['轻食'] }
      ]
    },
    {
      id: 's08', name: '好利来来', category: 'dessert', logo: '🥐', brand: '好利来来烘焙',
      rating: 4.8, monthlySales: 11302, deliveryMin: 20, deliveryFee: 3,
      minOrder: 15, distanceKm: 0.8,
      notice: '烤箱从早响到晚，酥点出炉即打包。掉渣是酥的勋章。',
      promos: ['满18减4', '每周酥点日'],
      products: [
        { id: 'p0801', name: '现烤黄金苹果酥酥', img: '🥐', cat: '现烤酥点',
          desc: '酥皮 128 层，苹果馅是提前腌足了糖桂花的',
          price: 13.9, origPrice: 26, rating: 4.8, sales: 8210, tags: ['满18减4', '招牌'], seckill: true },
        { id: 'p0802', name: '雪粉奶油大甜卷卷', img: '🍥', cat: '现烤酥点',
          desc: '糖粉撒得像初雪，咬开是化不开的奶油香',
          price: 14.9, origPrice: 27, rating: 4.9, sales: 7455, tags: ['满18减4'] },
        { id: 'p0803', name: '手作果酱夹心曲奇奇', img: '🍪', cat: '手作饼干',
          desc: '中间那圈果酱是亮点，配茶配咖啡都合适',
          price: 9.9, origPrice: 20, rating: 4.5, sales: 5100, tags: ['超值'] },
        { id: 'p0804', name: '云朵芝士蛋糕糕', img: '🍰', cat: '冷藏蛋糕',
          desc: '轻得像一朵云，冷藏后风味更佳',
          price: 16.9, origPrice: 29, rating: 4.6, sales: 2333, tags: ['满18减4'] }
      ]
    },
    {
      id: 's09', name: '海底捞捞', category: 'hotpot', logo: '🍲', brand: '海底捞捞汤锅',
      rating: 4.9, monthlySales: 3877, deliveryMin: 45, deliveryFee: 6,
      minOrder: 60, distanceKm: 3.1,
      notice: '外送汤锅配保温袋和围裙，服务态度好到你不好意思差评。',
      promos: ['满100减20'],
      products: [
        { id: 'p0901', name: '海鲜什锦暖锅锅', img: '🦪', cat: '招牌汤锅',
          desc: '蛤蜊大虾时蔬满满一锅，汤头先喝三碗是老规矩',
          price: 38.0, origPrice: 48, rating: 4.9, sales: 1802, tags: ['招牌', '满100减20'] },
        { id: 'p0902', name: '冬阴功浓汤锅锅', img: '🍤', cat: '招牌汤锅',
          desc: '酸辣椰香层层上头，鱼块嫩到筷子夹不稳',
          price: 46.0, origPrice: 58, rating: 4.8, sales: 1211, tags: ['满100减20'], seckill: true },
        { id: 'p0903', name: '翡翠嫩豆腐煲煲', img: '🥬', cat: '招牌汤锅',
          desc: '青酱打底的嫩豆腐煲，清爽和浓郁难得两全',
          price: 32.0, origPrice: 42, rating: 4.9, sales: 1450, tags: ['人气'] },
        { id: 'p0904', name: '香菇鸡丝焖面面', img: '🍜', cat: '主食',
          desc: '香菇香气焖进每根面条，锅气十足',
          price: 12.0, origPrice: 16, rating: 4.6, sales: 890, tags: ['主食'] }
      ]
    },
    {
      id: 's10', name: '蜀大大侠', category: 'bbq', logo: '🍢', brand: '蜀大大侠烧烤',
      rating: 4.7, monthlySales: 3122, deliveryMin: 48, deliveryFee: 6.5,
      minOrder: 50, distanceKm: 3.6,
      notice: '江湖气的炭火烧烤，孜然辣椒面双料齐下，深夜灵魂食堂。',
      promos: ['满80减15'],
      products: [
        { id: 'p1001', name: '秘制炭烤鸡肉串串', img: '🍢', cat: '炭烤串串',
          desc: '腌足十二小时再上炭火，外焦里嫩滋滋冒油',
          price: 42.0, origPrice: 55, rating: 4.8, sales: 1320, tags: ['招牌', '满80减15'] },
        { id: 'p1002', name: '甜辣烤翅中中', img: '🍗', cat: '炭烤串串',
          desc: '甜辣酱刷了三遍，焦糖脆壳里是爆汁鸡翅',
          price: 36.0, origPrice: 46, rating: 4.9, sales: 1105, tags: ['满80减15'], seckill: true },
        { id: 'p1003', name: '盐烤大虾串串', img: '🍤', cat: '炭烤串串',
          desc: '海盐粒在虾壳上跳舞，剥壳的手停不下来',
          price: 22.0, origPrice: 28, rating: 4.8, sales: 1688, tags: ['人气'] },
        { id: 'p1004', name: '果木烤鸡腿腿', img: '🍗', cat: '硬菜',
          desc: '整只大鸡腿果木慢烤，配土豆一起上桌',
          price: 8.0, origPrice: 11, rating: 4.7, sales: 1432, tags: ['超值'] }
      ]
    },
    {
      id: 's11', name: '早点大王王', category: 'breakfast', logo: '🥞', brand: '早点大王王',
      rating: 4.6, monthlySales: 4210, deliveryMin: 40, deliveryFee: 5,
      minOrder: 35, distanceKm: 2.7,
      notice: '凌晨四点就开火的早点铺，煎饼摊上见真章。',
      promos: ['满50减10'],
      products: [
        { id: 'p1101', name: '手工杂粮大煎饼饼', img: '🥞', cat: '现做早点',
          desc: '面糊现摊，金黄薄脆，配咖喱蘸碟是隐藏吃法',
          price: 4.5, origPrice: 6, rating: 4.8, sales: 8877, tags: ['招牌', '满50减10'], seckill: true },
        { id: 'p1102', name: '白玉松软米发糕糕', img: '🍚', cat: '现做早点',
          desc: '蒸得白白胖胖，松软回甜，老人小孩都爱',
          price: 8.0, origPrice: 10, rating: 4.7, sales: 4321, tags: ['人气'] },
        { id: 'p1103', name: '咖喱酥炸三角角', img: '🥟', cat: '现炸小吃',
          desc: '三角酥皮包咖喱土豆馅，咬开小心烫',
          price: 6.0, origPrice: 8, rating: 4.5, sales: 3210, tags: ['满50减10'] },
        { id: 'p1104', name: '黄金脆皮煎饼卷卷', img: '🌯', cat: '现做早点',
          desc: '卷得紧实，切段上桌，蘸料给得很大方',
          price: 12.0, origPrice: 15, rating: 4.6, sales: 2109, tags: ['满50减10'] }
      ]
    },
    {
      id: 's12', name: '沙县小小吃', category: 'breakfast', logo: '🥟', brand: '沙县小小吃',
      rating: 4.5, monthlySales: 7654, deliveryMin: 25, deliveryFee: 2,
      minOrder: 12, distanceKm: 0.5,
      notice: '国民食堂，量大实惠。水饺现包现煮，皮薄馅大看得见。',
      promos: ['满15减2'],
      products: [
        { id: 'p1201', name: '手工鲜肉水饺饺', img: '🥟', cat: '主食',
          desc: '现包现煮十二只装，蘸醋加辣椒是标配',
          price: 8.0, origPrice: 10, rating: 4.6, sales: 5432, tags: ['招牌', '满15减2'] },
        { id: 'p1202', name: '招牌酱油炒面面', img: '🍝', cat: '主食',
          desc: '酱油裹到每一根面，镬气是这碗面的灵魂',
          price: 6.0, origPrice: 8, rating: 4.7, sales: 6210, tags: ['超值'], seckill: true },
        { id: 'p1203', name: '春卷什锦拼盘盘', img: '🥢', cat: '小吃',
          desc: '春卷米卷配蘸水一次到位，拼的就是丰盛',
          price: 10.0, origPrice: 13, rating: 4.8, sales: 3122, tags: ['满15减2'] },
        { id: 'p1204', name: '黄油可丽饼卷卷', img: '🫓', cat: '小吃',
          desc: '两块五的下午茶，卷起来的黄油香',
          price: 2.5, origPrice: 3.5, rating: 4.5, sales: 7788, tags: ['超值'] }
      ]
    },
    {
      id: 's13', name: '粉面江湖湖', category: 'noodle', logo: '🍜', brand: '粉面江湖湖',
      rating: 4.6, monthlySales: 5311, deliveryMin: 30, deliveryFee: 2.5,
      minOrder: 15, distanceKm: 1.1,
      notice: '一碗好粉，汤底熬足八小时。江湖规矩：先喝汤再动筷。',
      promos: ['满20减3'],
      products: [
        { id: 'p1301', name: '红烧牛肉汤粉粉', img: '🍜', cat: '汤粉',
          desc: '大块牛肉沉在碗底，汤头清亮香菜点睛',
          price: 16.0, origPrice: 20, rating: 4.8, sales: 4655, tags: ['招牌', '满20减3'], seckill: true },
        { id: 'p1302', name: '泰式镬气炒河粉粉', img: '🍝', cat: '炒粉',
          desc: '大火快炒的镬气，花生碎和柠檬角不能少',
          price: 24.0, origPrice: 30, rating: 4.7, sales: 2100, tags: ['满20减3'] },
        { id: 'p1303', name: '缤纷开胃沙拉拉', img: '🥗', cat: '小菜',
          desc: '爽脆时蔬配油醋汁，给碳水之旅解个腻',
          price: 6.0, origPrice: 8, rating: 4.5, sales: 1890, tags: ['小菜'] },
        { id: 'p1304', name: '照烧鸡腿饭饭', img: '🍱', cat: '饭食',
          desc: '照烧汁亮到反光，鸡腿肉厚切铺满一层',
          price: 38.0, origPrice: 48, rating: 4.8, sales: 766, tags: ['硬菜'] }
      ]
    },
    {
      id: 's14', name: '老乡鸡鸡', category: 'rice', logo: '🍛', brand: '老乡鸡鸡快餐',
      rating: 4.7, monthlySales: 6788, deliveryMin: 26, deliveryFee: 3,
      minOrder: 18, distanceKm: 1.4,
      notice: '家的味道，锅气现炒。米饭每天现蒸，粒粒分明。',
      promos: ['满25减4'],
      products: [
        { id: 'p1401', name: '咖喱嫩鸡浇汁饭饭', img: '🍛', cat: '招牌浇饭',
          desc: '浓郁咖喱浇在热饭上，配饼蘸汁都香',
          price: 15.5, origPrice: 19, rating: 4.9, sales: 5211, tags: ['招牌', '满25减4'], seckill: true },
        { id: 'p1402', name: '砂锅鸡腿焖饭饭', img: '🍲', cat: '招牌浇饭',
          desc: '整只鸡腿埋进焖饭里，揭盖那刻香气翻涌',
          price: 22.0, origPrice: 28, rating: 4.7, sales: 3122, tags: ['满25减4'] },
        { id: 'p1403', name: '农家酱油蛋炒饭饭', img: '🍚', cat: '炒饭',
          desc: '蛋花均匀裹住每粒米，简单到极致就是好吃',
          price: 6.0, origPrice: 8, rating: 4.8, sales: 4310, tags: ['人气'] },
        { id: 'p1404', name: '什锦虾仁炒饭饭', img: '🍤', cat: '炒饭',
          desc: '虾仁玉米青豆配足料，五块钱吃出满足感',
          price: 5.0, origPrice: 7, rating: 4.6, sales: 3877, tags: ['超值'] }
      ]
    },
    {
      id: 's15', name: '意面达文西西', category: 'pizza', logo: '🍝', brand: '意面达文西西',
      rating: 4.6, monthlySales: 4522, deliveryMin: 24, deliveryFee: 3.5,
      minOrder: 20, distanceKm: 1.6,
      notice: '面条煮到 al dente 的倔强，酱汁都是当天现熬。',
      promos: ['满30减5'],
      products: [
        { id: 'p1501', name: '番茄肉酱意面面', img: '🍝', cat: '经典意面',
          desc: '慢炖两小时的肉酱，番茄的酸甜刚刚好',
          price: 18.0, origPrice: 23, rating: 4.7, sales: 3899, tags: ['招牌', '满30减5'], seckill: true },
        { id: 'p1502', name: '鸡肉时蔬炒意面面', img: '🍗', cat: '经典意面',
          desc: '鸡肉和时蔬大火快炒，橄榄油香气扑鼻',
          price: 22.0, origPrice: 27, rating: 4.6, sales: 2311, tags: ['满30减5'] },
        { id: 'p1503', name: '白汁蘑菇培根意面面', img: '🍄', cat: '经典意面',
          desc: '奶油白汁挂面均匀，蘑菇培根双重加持',
          price: 16.0, origPrice: 20, rating: 4.8, sales: 2988, tags: ['人气'] },
        { id: 'p1504', name: '焗烤芝士千层面面', img: '🧀', cat: '焗烤',
          desc: '一层面皮一层肉酱一层芝士，烤到边缘微焦',
          price: 12.0, origPrice: 15, rating: 4.5, sales: 1877, tags: ['满30减5'] }
      ]
    },
    {
      id: 's16', name: '西堤牛牛排', category: 'western', logo: '🥩', brand: '西堤牛牛排西餐',
      rating: 4.8, monthlySales: 3901, deliveryMin: 33, deliveryFee: 4,
      minOrder: 25, distanceKm: 2.2,
      notice: '牛排五分熟起送（三分熟需备注），黑椒汁单独打包不泡软。',
      promos: ['满35减6'],
      products: [
        { id: 'p1601', name: '黑椒牛排双拼盘盘', img: '🥩', cat: '招牌牛排',
          desc: '厚切牛排配烤小土豆，黑椒汁现磨现淋',
          price: 25.0, origPrice: 32, rating: 4.9, sales: 2788, tags: ['招牌', '满35减6'], seckill: true },
        { id: 'p1602', name: '烤三文鱼米饭碗碗', img: '🐟', cat: '轻奢主食',
          desc: '三文鱼烤到皮脆，配白米饭和绿叶菜',
          price: 14.0, origPrice: 18, rating: 4.6, sales: 1902, tags: ['满35减6'] },
        { id: 'p1603', name: '树莓酱厚松饼塔塔', img: '🥞', cat: '餐后甜点',
          desc: '树莓酱从塔尖流下来，甜点胃专属',
          price: 12.0, origPrice: 16, rating: 4.7, sales: 2455, tags: ['人气'] },
        { id: 'p1604', name: '菠萝咕咾肉串串', img: '🍍', cat: '招牌热菜',
          desc: '酸甜咕咾肉配烤菠萝，中西合璧的意外之喜',
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
  var HOT_WORDS = ['汉堡', '披萨', '炸鸡', '柠檬水', '牛排', '炒饭', '烤串', '水饺'];

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
