/* ============================================================
 * 丑团 · data.js —— 静态数据层【GENERATED 请勿手改】
 * 由 tools/gen-catalog.js + tools/menus.js 生成
 * 40 家店铺 / 1359 款商品（含套餐与规格变体）
 * 商品图为真实照片（来源见 tools/fetch-photos.sh）
 * ============================================================ */

'use strict';

var CT_DATA = (function () {

  var CATEGORIES = [
  {
    "id": "all",
    "name": "全部",
    "icon": "🍽️"
  },
  {
    "id": "burger",
    "name": "汉堡炸鸡",
    "icon": "🍔"
  },
  {
    "id": "pizza",
    "name": "披萨意面",
    "icon": "🍕"
  },
  {
    "id": "coffee",
    "name": "咖啡",
    "icon": "☕"
  },
  {
    "id": "drink",
    "name": "奶茶果饮",
    "icon": "🧋"
  },
  {
    "id": "dessert",
    "name": "甜品烘焙",
    "icon": "🍰"
  },
  {
    "id": "brunch",
    "name": "轻食沙拉",
    "icon": "🥗"
  },
  {
    "id": "hotpot",
    "name": "火锅汤锅",
    "icon": "🍲"
  },
  {
    "id": "bbq",
    "name": "烧烤夜宵",
    "icon": "🍢"
  },
  {
    "id": "breakfast",
    "name": "早点小吃",
    "icon": "🥟"
  },
  {
    "id": "noodle",
    "name": "粉面",
    "icon": "🍜"
  },
  {
    "id": "rice",
    "name": "盖饭炒饭",
    "icon": "🍛"
  },
  {
    "id": "western",
    "name": "西餐日料",
    "icon": "🥩"
  },
  {
    "id": "fruit",
    "name": "果切生鲜",
    "icon": "🍉"
  }
];

  var SHOPS = [
 {
  "id": "s01",
  "name": "麦当当",
  "category": "burger",
  "logo": "🍔",
  "brand": "麦当当（麦当劳风）",
  "rating": 4.8,
  "monthlySales": 19243,
  "deliveryMin": 28,
  "deliveryFee": 3.5,
  "minOrder": 20,
  "distanceKm": 1.2,
  "notice": "欢迎光临麦当当，牛肉饼现煎现夹，薯条出锅五分钟内送不达免单（并不会）。",
  "promos": [
   "满25减4",
   "满45减9"
  ],
  "photo": "tb7",
  "products": [
   {
    "id": "p0101",
    "name": "巨无霸霸",
    "photo": "bg1",
    "cat": "超值招牌",
    "desc": "双层安格斯牛肉饼，酱汁多到从指缝逃跑",
    "price": 26,
    "origPrice": 32,
    "rating": 4.8,
    "sales": 5659,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p0102",
    "name": "巨无霸霸套餐",
    "photo": "bg1",
    "cat": "超值套餐",
    "desc": "含中薯+中可乐，一单到位",
    "price": 37,
    "origPrice": 47,
    "rating": 4.9,
    "sales": 507,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0103",
    "name": "双层吉士堡堡",
    "photo": "bg2",
    "cat": "超值招牌",
    "desc": "面包胚烤到微焦，芝士刚好半融",
    "price": 19,
    "origPrice": 24,
    "rating": 4.4,
    "sales": 2080,
    "tags": []
   },
   {
    "id": "p0104",
    "name": "双层吉士堡堡套餐",
    "photo": "bg2",
    "cat": "超值套餐",
    "desc": "含中薯+中可乐，一单到位",
    "price": 30,
    "origPrice": 39,
    "rating": 4.9,
    "sales": 1202,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0105",
    "name": "麦辣鸡腿堡堡",
    "photo": "tb2",
    "cat": "超值招牌",
    "desc": "辣得刚刚好，不至于失态但足够清醒",
    "price": 21,
    "origPrice": 26,
    "rating": 4.6,
    "sales": 1316,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p0106",
    "name": "麦辣鸡腿堡堡套餐",
    "photo": "tb2",
    "cat": "超值套餐",
    "desc": "含中薯+中可乐，一单到位",
    "price": 32,
    "origPrice": 41,
    "rating": 4.7,
    "sales": 2289,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0107",
    "name": "板烧鸡腿堡堡",
    "photo": "tb8",
    "cat": "超值招牌",
    "desc": "面包胚烤到微焦，芝士刚好半融",
    "price": 22.5,
    "origPrice": 27,
    "rating": 4.7,
    "sales": 854,
    "tags": [
     "满25减4"
    ]
   },
   {
    "id": "p0108",
    "name": "板烧鸡腿堡堡套餐",
    "photo": "tb8",
    "cat": "超值套餐",
    "desc": "含中薯+中可乐，一单到位",
    "price": 33.5,
    "origPrice": 42,
    "rating": 4.7,
    "sales": 2399,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0109",
    "name": "麦香鱼鱼",
    "photo": "bg3",
    "cat": "超值招牌",
    "desc": "肉饼厚度经过反复较真，扎实不虚",
    "price": 16,
    "origPrice": 21,
    "rating": 4.7,
    "sales": 5253,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p0110",
    "name": "麦香鱼鱼套餐",
    "photo": "bg3",
    "cat": "超值套餐",
    "desc": "含中薯+中可乐，一单到位",
    "price": 27,
    "origPrice": 36,
    "rating": 4.9,
    "sales": 6877,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0111",
    "name": "安格斯MAX厚牛堡堡",
    "photo": "bg4",
    "cat": "超值招牌",
    "desc": "一口下去五层风景，纸巾自备",
    "price": 32,
    "origPrice": 39,
    "rating": 4.8,
    "sales": 4011,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p0112",
    "name": "安格斯MAX厚牛堡堡套餐",
    "photo": "bg4",
    "cat": "超值套餐",
    "desc": "含中薯+中可乐，一单到位",
    "price": 43,
    "origPrice": 54,
    "rating": 4.8,
    "sales": 2626,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0113",
    "name": "不素之霸蔬萃堡堡",
    "photo": "tb12",
    "cat": "超值招牌",
    "desc": "面包胚烤到微焦，芝士刚好半融",
    "price": 17,
    "origPrice": 22,
    "rating": 4.5,
    "sales": 3628,
    "tags": [
     "满25减4"
    ]
   },
   {
    "id": "p0114",
    "name": "不素之霸蔬萃堡堡套餐",
    "photo": "tb12",
    "cat": "超值套餐",
    "desc": "含中薯+中可乐，一单到位",
    "price": 28,
    "origPrice": 37,
    "rating": 4.6,
    "sales": 573,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0115",
    "name": "金拱门桶·十翅一桶",
    "photo": "grill9",
    "cat": "小食甜品",
    "desc": "趁热撸串，凉了味道减半",
    "price": 39.9,
    "origPrice": 49,
    "rating": 4.8,
    "sales": 2924,
    "tags": []
   },
   {
    "id": "p0116",
    "name": "麦麦脆汁炸鸡块块",
    "photo": "fried1",
    "cat": "小食甜品",
    "desc": "外脆内糯，配蘸水更妙",
    "price": 12,
    "origPrice": 15,
    "rating": 4.9,
    "sales": 2901,
    "tags": []
   },
   {
    "id": "p0117",
    "name": "黄金大薯条条",
    "photo": "fries1",
    "cat": "小食甜品",
    "desc": "刚出锅的烫嘴幸福感，凉了概不负责",
    "price": 13.5,
    "origPrice": 16,
    "rating": 4.8,
    "sales": 443,
    "tags": [
     "满25减4"
    ]
   },
   {
    "id": "p0118",
    "name": "黄金大薯条条（大份）",
    "photo": "fries1",
    "cat": "小食甜品",
    "desc": "酥皮现包现炸，咬开小心烫",
    "price": 19.5,
    "origPrice": 23,
    "rating": 4.5,
    "sales": 1747,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p0119",
    "name": "华夫脆薯格格",
    "photo": "fries2",
    "cat": "小食甜品",
    "desc": "外脆内糯，配蘸水更妙",
    "price": 8,
    "origPrice": 10,
    "rating": 4.6,
    "sales": 1108,
    "tags": []
   },
   {
    "id": "p0120",
    "name": "香芋菠萝派派·香芋",
    "photo": "dt1",
    "cat": "小食甜品",
    "desc": "下午茶的正确打开方式",
    "price": 7,
    "origPrice": 9,
    "rating": 4.8,
    "sales": 208,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p0121",
    "name": "香芋菠萝派派·菠萝",
    "photo": "dt1",
    "cat": "小食甜品",
    "desc": "冷藏后风味更佳",
    "price": 7,
    "origPrice": 9,
    "rating": 4.7,
    "sales": 365,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p0122",
    "name": "麦旋风风·奥利奥",
    "photo": "des5",
    "cat": "小食甜品",
    "desc": "拍照五秒内请尽快食用",
    "price": 12.5,
    "origPrice": 15,
    "rating": 4.8,
    "sales": 1108,
    "tags": [
     "满25减4"
    ]
   },
   {
    "id": "p0123",
    "name": "麦旋风风·草莓",
    "photo": "des5",
    "cat": "小食甜品",
    "desc": "拍照五秒内请尽快食用",
    "price": 12.5,
    "origPrice": 15,
    "rating": 4.6,
    "sales": 8461,
    "tags": [
     "满25减4"
    ]
   },
   {
    "id": "p0124",
    "name": "圆筒冰淇淋淋",
    "photo": "des4",
    "cat": "小食甜品",
    "desc": "甜品胃是另一个胃",
    "price": 4,
    "origPrice": 5,
    "rating": 4.9,
    "sales": 6736,
    "tags": []
   },
   {
    "id": "p0125",
    "name": "冰镇可乐乐",
    "photo": "bev1",
    "cat": "缤纷饮品",
    "desc": "喝一口从喉咙凉到天灵盖",
    "price": 9.5,
    "origPrice": 11,
    "rating": 4.7,
    "sales": 1272,
    "tags": []
   },
   {
    "id": "p0126",
    "name": "冰镇可乐乐（大杯）",
    "photo": "bev1",
    "cat": "缤纷饮品",
    "desc": "喝一口从喉咙凉到天灵盖",
    "price": 12.5,
    "origPrice": 14,
    "rating": 4.6,
    "sales": 7164,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p0127",
    "name": "鲜煮美式咖啡啡",
    "photo": "cafe1",
    "cat": "缤纷饮品",
    "desc": "拉花看心情，好喝不看脸",
    "price": 11,
    "origPrice": 14,
    "rating": 4.7,
    "sales": 2299,
    "tags": [
     "满25减4"
    ]
   },
   {
    "id": "p0128",
    "name": "鲜煮美式咖啡啡（大杯）",
    "photo": "cafe1",
    "cat": "缤纷饮品",
    "desc": "豆子当周烘焙，奶泡打到绵密",
    "price": 14,
    "origPrice": 17,
    "rating": 4.4,
    "sales": 1503,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p0129",
    "name": "猪柳蛋满分堡堡",
    "photo": "bg5",
    "cat": "元气早餐",
    "desc": "牛肉饼现煎现夹，汁水锁在第一口",
    "price": 15,
    "origPrice": 18,
    "rating": 4.8,
    "sales": 1652,
    "tags": []
   },
   {
    "id": "p0130",
    "name": "太阳蛋芝士开放堡堡",
    "photo": "sand2",
    "cat": "元气早餐",
    "desc": "低卡不低配，吃饱不胖",
    "price": 13,
    "origPrice": 16,
    "rating": 4.8,
    "sales": 246,
    "tags": []
   },
   {
    "id": "p0131",
    "name": "全麦吐司蛋早餐盘盘",
    "photo": "sand3",
    "cat": "元气早餐",
    "desc": "健身教练看了都点头",
    "price": 14,
    "origPrice": 17,
    "rating": 4.8,
    "sales": 635,
    "tags": [
     "满25减4"
    ]
   },
   {
    "id": "p0132",
    "name": "和牛芝士堡堡",
    "photo": "bg6",
    "cat": "风味汉堡",
    "desc": "面包胚烤到微焦，芝士刚好半融",
    "price": 22,
    "origPrice": 28,
    "rating": 4.6,
    "sales": 3035,
    "tags": []
   },
   {
    "id": "p0133",
    "name": "抹茶雪媚娘娘",
    "photo": "dt2",
    "cat": "甜品站",
    "desc": "下午茶的正确打开方式",
    "price": 8.5,
    "origPrice": 11,
    "rating": 4.6,
    "sales": 209,
    "tags": []
   },
   {
    "id": "p0134",
    "name": "烟熏西冷堡堡",
    "photo": "bg7",
    "cat": "风味汉堡",
    "desc": "生菜脆到发出声音，酱汁给得大方",
    "price": 8.5,
    "origPrice": 11,
    "rating": 4.8,
    "sales": 762,
    "tags": []
   },
   {
    "id": "p0135",
    "name": "黄油曲奇奇",
    "photo": "dt3",
    "cat": "甜品站",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 31.5,
    "origPrice": 40,
    "rating": 4.5,
    "sales": 2737,
    "tags": []
   },
   {
    "id": "p0136",
    "name": "洋葱圈牛堡堡",
    "photo": "bg8",
    "cat": "风味汉堡",
    "desc": "一口下去五层风景，纸巾自备",
    "price": 27,
    "origPrice": 35,
    "rating": 4.8,
    "sales": 298,
    "tags": []
   },
   {
    "id": "p0137",
    "name": "流心芝士厚牛堡堡",
    "photo": "bg9",
    "cat": "风味汉堡",
    "desc": "肉饼厚度经过反复较真，扎实不虚",
    "price": 23.5,
    "origPrice": 30,
    "rating": 4.8,
    "sales": 2148,
    "tags": []
   },
   {
    "id": "p0138",
    "name": "奶油泡芙芙",
    "photo": "dt4",
    "cat": "甜品站",
    "desc": "冷藏后风味更佳",
    "price": 19.5,
    "origPrice": 25,
    "rating": 4.9,
    "sales": 2539,
    "tags": []
   },
   {
    "id": "p0139",
    "name": "黑椒蘑菇牛堡堡",
    "photo": "bg10",
    "cat": "风味汉堡",
    "desc": "牛肉饼现煎现夹，汁水锁在第一口",
    "price": 25.5,
    "origPrice": 32.5,
    "rating": 4.9,
    "sales": 4588,
    "tags": []
   },
   {
    "id": "p0140",
    "name": "流心芝士挞挞",
    "photo": "dt5",
    "cat": "甜品站",
    "desc": "冷藏后风味更佳",
    "price": 21,
    "origPrice": 27,
    "rating": 4.4,
    "sales": 3000,
    "tags": []
   },
   {
    "id": "p0141",
    "name": "烟熏培根蛋堡堡",
    "photo": "bg11",
    "cat": "风味汉堡",
    "desc": "生菜脆到发出声音，酱汁给得大方",
    "price": 16.5,
    "origPrice": 21,
    "rating": 4.7,
    "sales": 1118,
    "tags": []
   },
   {
    "id": "p0142",
    "name": "乳酪蛋糕条条",
    "photo": "dt6",
    "cat": "甜品站",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 21.5,
    "origPrice": 27.5,
    "rating": 4.8,
    "sales": 883,
    "tags": []
   },
   {
    "id": "p0143",
    "name": "芝士条条",
    "photo": "dt7",
    "cat": "甜品站",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 29,
    "origPrice": 37.5,
    "rating": 4.7,
    "sales": 1181,
    "tags": []
   },
   {
    "id": "p0144",
    "name": "双层辣牛堡堡",
    "photo": "bg12",
    "cat": "风味汉堡",
    "desc": "牛肉饼现煎现夹，汁水锁在第一口",
    "price": 37,
    "origPrice": 47.5,
    "rating": 4.5,
    "sales": 4450,
    "tags": []
   },
   {
    "id": "p0145",
    "name": "巧克力脆脆卷卷",
    "photo": "dt8",
    "cat": "甜品站",
    "desc": "下午茶的正确打开方式",
    "price": 21.5,
    "origPrice": 27.5,
    "rating": 4.8,
    "sales": 776,
    "tags": []
   },
   {
    "id": "p0146",
    "name": "照烧菠萝牛堡堡",
    "photo": "bg13",
    "cat": "风味汉堡",
    "desc": "面包胚烤到微焦，芝士刚好半融",
    "price": 22.5,
    "origPrice": 28.5,
    "rating": 4.7,
    "sales": 811,
    "tags": []
   }
  ]
 },
 {
  "id": "s02",
  "name": "啃德鸡",
  "category": "burger",
  "logo": "🍗",
  "brand": "啃德鸡（肯德基风）",
  "rating": 4.7,
  "monthlySales": 18710,
  "deliveryMin": 32,
  "deliveryFee": 4,
  "minOrder": 25,
  "distanceKm": 1.8,
  "notice": "疯狂星期八正在进行中！本店炸物均为当日现炸，拒绝回锅。",
  "promos": [
   "满30减6",
   "下单送蘸酱"
  ],
  "photo": "grill9",
  "products": [
   {
    "id": "p0201",
    "name": "吮指原味鸡鸡（两块）",
    "photo": "fried1",
    "cat": "现炸炸鸡",
    "desc": "十一种神秘香料，配方连店长都只知道九种",
    "price": 22,
    "origPrice": 26,
    "rating": 4.6,
    "sales": 2353,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p0202",
    "name": "吮指原味鸡鸡（大份）",
    "photo": "fried1",
    "cat": "现炸炸鸡",
    "desc": "外脆内糯，配蘸水更妙",
    "price": 32,
    "origPrice": 37.5,
    "rating": 4.6,
    "sales": 3345,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p0203",
    "name": "劲爆鸡米花花（大）",
    "photo": "fried1",
    "cat": "现炸炸鸡",
    "desc": "酥皮现包现炸，咬开小心烫",
    "price": 11.5,
    "origPrice": 14,
    "rating": 4.7,
    "sales": 4649,
    "tags": []
   },
   {
    "id": "p0204",
    "name": "韩式甜辣脆皮鸡鸡",
    "photo": "grill9",
    "cat": "现炸炸鸡",
    "desc": "趁热撸串，凉了味道减半",
    "price": 24,
    "origPrice": 29,
    "rating": 4.7,
    "sales": 1583,
    "tags": []
   },
   {
    "id": "p0205",
    "name": "韩式甜辣脆皮鸡鸡（大份）",
    "photo": "grill9",
    "cat": "现炸炸鸡",
    "desc": "趁热撸串，凉了味道减半",
    "price": 35,
    "origPrice": 42,
    "rating": 4.9,
    "sales": 889,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p0206",
    "name": "新奥尔良烤翅翅（两对）",
    "photo": "grill8",
    "cat": "现炸炸鸡",
    "desc": "趁热撸串，凉了味道减半",
    "price": 13,
    "origPrice": 16,
    "rating": 4.9,
    "sales": 5851,
    "tags": [
     "满30减6"
    ]
   },
   {
    "id": "p0207",
    "name": "新奥尔良烤翅翅（大份）",
    "photo": "grill8",
    "cat": "现炸炸鸡",
    "desc": "腌足十二小时再上炭火",
    "price": 19,
    "origPrice": 23,
    "rating": 4.6,
    "sales": 970,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p0208",
    "name": "藤椒麻香炸翅中中",
    "photo": "grill5",
    "cat": "现炸炸鸡",
    "desc": "孜然辣椒面双料齐下",
    "price": 14,
    "origPrice": 17,
    "rating": 4.7,
    "sales": 485,
    "tags": []
   },
   {
    "id": "p0209",
    "name": "黄金脆皮炸大虾虾",
    "photo": "fried2",
    "cat": "现炸炸鸡",
    "desc": "酥皮现包现炸，咬开小心烫",
    "price": 16,
    "origPrice": 20,
    "rating": 4.6,
    "sales": 759,
    "tags": []
   },
   {
    "id": "p0210",
    "name": "劲脆鸡腿堡堡",
    "photo": "tb3",
    "cat": "汉堡卷类",
    "desc": "面包胚烤到微焦，芝士刚好半融",
    "price": 20.5,
    "origPrice": 25,
    "rating": 4.7,
    "sales": 1697,
    "tags": [
     "满30减6"
    ]
   },
   {
    "id": "p0211",
    "name": "劲脆鸡腿堡堡套餐",
    "photo": "tb3",
    "cat": "超值套餐",
    "desc": "含小薯+中可乐，一单到位",
    "price": 31.5,
    "origPrice": 40,
    "rating": 4.9,
    "sales": 718,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0212",
    "name": "香辣鸡腿堡堡",
    "photo": "bg14",
    "cat": "汉堡卷类",
    "desc": "辣得清醒，脆得大声",
    "price": 19.5,
    "origPrice": 24,
    "rating": 4.8,
    "sales": 2785,
    "tags": [],
    "seckill": true
   },
   {
    "id": "p0213",
    "name": "香辣鸡腿堡堡套餐",
    "photo": "bg14",
    "cat": "超值套餐",
    "desc": "含小薯+中可乐，一单到位",
    "price": 30.5,
    "origPrice": 39,
    "rating": 4.7,
    "sales": 1507,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0214",
    "name": "新奥尔良烤鸡腿堡堡",
    "photo": "tb6",
    "cat": "汉堡卷类",
    "desc": "肉饼厚度经过反复较真，扎实不虚",
    "price": 21.5,
    "origPrice": 26,
    "rating": 4.5,
    "sales": 207,
    "tags": []
   },
   {
    "id": "p0215",
    "name": "新奥尔良烤鸡腿堡堡套餐",
    "photo": "tb6",
    "cat": "超值套餐",
    "desc": "含小薯+中可乐，一单到位",
    "price": 32.5,
    "origPrice": 41,
    "rating": 4.4,
    "sales": 313,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0216",
    "name": "帕尼尼牛肉堡堡",
    "photo": "tb9",
    "cat": "汉堡卷类",
    "desc": "牛肉饼现煎现夹，汁水锁在第一口",
    "price": 17,
    "origPrice": 22,
    "rating": 4.6,
    "sales": 4172,
    "tags": [
     "满30减6"
    ]
   },
   {
    "id": "p0217",
    "name": "帕尼尼牛肉堡堡套餐",
    "photo": "tb9",
    "cat": "超值套餐",
    "desc": "含小薯+中可乐，一单到位",
    "price": 28,
    "origPrice": 37,
    "rating": 4.7,
    "sales": 312,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0218",
    "name": "老北京鸡肉卷卷",
    "photo": "crepe1",
    "cat": "汉堡卷类",
    "desc": "入口松软，老人小孩都爱",
    "price": 15,
    "origPrice": 19,
    "rating": 4.9,
    "sales": 1268,
    "tags": []
   },
   {
    "id": "p0219",
    "name": "老北京鸡肉卷卷套餐",
    "photo": "crepe1",
    "cat": "超值套餐",
    "desc": "含小薯+中可乐，一单到位",
    "price": 26,
    "origPrice": 34,
    "rating": 4.7,
    "sales": 2637,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0220",
    "name": "葡式蛋挞挞（两只）",
    "photo": "dt9",
    "cat": "小食甜品",
    "desc": "酥皮 128 层，掉渣是它对你的热情",
    "price": 9.9,
    "origPrice": 13,
    "rating": 4.7,
    "sales": 278,
    "tags": []
   },
   {
    "id": "p0221",
    "name": "葡式蛋挞挞（大份）",
    "photo": "dt9",
    "cat": "小食甜品",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 14.5,
    "origPrice": 19,
    "rating": 4.5,
    "sales": 3249,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p0222",
    "name": "大薯条条",
    "photo": "fries1",
    "cat": "小食甜品",
    "desc": "三角酥脆，馅料给足",
    "price": 12,
    "origPrice": 15,
    "rating": 4.8,
    "sales": 228,
    "tags": [
     "满30减6"
    ]
   },
   {
    "id": "p0223",
    "name": "醇香土豆泥泥",
    "photo": "soup5",
    "cat": "小食甜品",
    "desc": "暖胃暖心，一碗见底",
    "price": 6,
    "origPrice": 8,
    "rating": 4.6,
    "sales": 595,
    "tags": []
   },
   {
    "id": "p0224",
    "name": "冰淇淋花筒筒",
    "photo": "des4",
    "cat": "小食甜品",
    "desc": "甜品胃是另一个胃",
    "price": 5,
    "origPrice": 6,
    "rating": 4.4,
    "sales": 3413,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p0225",
    "name": "草莓圣代代·草莓",
    "photo": "des5",
    "cat": "小食甜品",
    "desc": "拍照五秒内请尽快食用",
    "price": 10,
    "origPrice": 13,
    "rating": 4.8,
    "sales": 1932,
    "tags": [
     "满30减6"
    ]
   },
   {
    "id": "p0226",
    "name": "草莓圣代代·巧克力",
    "photo": "des5",
    "cat": "小食甜品",
    "desc": "甜品胃是另一个胃",
    "price": 10,
    "origPrice": 13,
    "rating": 4.5,
    "sales": 1750,
    "tags": [
     "满30减6"
    ]
   },
   {
    "id": "p0227",
    "name": "九珍果汁饮饮",
    "photo": "jc8",
    "cat": "缤纷饮品",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 12,
    "origPrice": 14,
    "rating": 4.7,
    "sales": 642,
    "tags": []
   },
   {
    "id": "p0228",
    "name": "冰可乐乐",
    "photo": "bev1",
    "cat": "缤纷饮品",
    "desc": "冰块加到怀疑人生，解暑一流",
    "price": 9.5,
    "origPrice": 11,
    "rating": 4.6,
    "sales": 3857,
    "tags": []
   },
   {
    "id": "p0229",
    "name": "冰可乐乐（大杯）",
    "photo": "bev1",
    "cat": "缤纷饮品",
    "desc": "冰块加到怀疑人生，解暑一流",
    "price": 12.5,
    "origPrice": 14,
    "rating": 4.5,
    "sales": 221,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p0230",
    "name": "K咖啡拿铁铁",
    "photo": "cafe6",
    "cat": "缤纷饮品",
    "desc": "苦得很诚实，回甘也是",
    "price": 15,
    "origPrice": 19,
    "rating": 4.8,
    "sales": 3690,
    "tags": [
     "满30减6"
    ]
   },
   {
    "id": "p0231",
    "name": "K咖啡拿铁铁（大杯）",
    "photo": "cafe6",
    "cat": "缤纷饮品",
    "desc": "苦得很诚实，回甘也是",
    "price": 18,
    "origPrice": 22,
    "rating": 4.9,
    "sales": 1384,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p0232",
    "name": "疯狂全家桶桶",
    "photo": "grill9",
    "cat": "分享桶",
    "desc": "两个人吃到扶墙的快乐，炸鸡翅根小食全都有",
    "price": 89.9,
    "origPrice": 110,
    "rating": 4.8,
    "sales": 2281,
    "tags": []
   },
   {
    "id": "p0233",
    "name": "小食嗨翻拼盘桶桶",
    "photo": "roll1",
    "cat": "分享桶",
    "desc": "入口松软，老人小孩都爱",
    "price": 49.9,
    "origPrice": 62,
    "rating": 4.8,
    "sales": 1520,
    "tags": []
   },
   {
    "id": "p0234",
    "name": "烧烤酱手撕堡堡",
    "photo": "bg15",
    "cat": "风味汉堡",
    "desc": "牛肉饼现煎现夹，汁水锁在第一口",
    "price": 31.5,
    "origPrice": 40.5,
    "rating": 4.7,
    "sales": 341,
    "tags": []
   },
   {
    "id": "p0235",
    "name": "椰蓉球球",
    "photo": "dt10",
    "cat": "甜品站",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 28,
    "origPrice": 36,
    "rating": 4.5,
    "sales": 263,
    "tags": []
   },
   {
    "id": "p0236",
    "name": "烟熏西冷堡堡",
    "photo": "bg16",
    "cat": "风味汉堡",
    "desc": "面包胚烤到微焦，芝士刚好半融",
    "price": 24,
    "origPrice": 31,
    "rating": 4.6,
    "sales": 641,
    "tags": []
   },
   {
    "id": "p0237",
    "name": "莓果慕斯杯杯",
    "photo": "dt11",
    "cat": "甜品站",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 30,
    "origPrice": 38.5,
    "rating": 4.6,
    "sales": 1575,
    "tags": []
   },
   {
    "id": "p0238",
    "name": "脆脆鸡排堡堡",
    "photo": "bg17",
    "cat": "风味汉堡",
    "desc": "牛肉饼现煎现夹，汁水锁在第一口",
    "price": 25.5,
    "origPrice": 32.5,
    "rating": 4.7,
    "sales": 827,
    "tags": []
   },
   {
    "id": "p0239",
    "name": "藤椒鸡腿堡堡",
    "photo": "bg18",
    "cat": "风味汉堡",
    "desc": "牛肉饼现煎现夹，汁水锁在第一口",
    "price": 31.5,
    "origPrice": 40.5,
    "rating": 4.8,
    "sales": 4142,
    "tags": []
   },
   {
    "id": "p0240",
    "name": "乳酪蛋糕条条",
    "photo": "dt12",
    "cat": "甜品站",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 27,
    "origPrice": 34.5,
    "rating": 4.6,
    "sales": 4460,
    "tags": []
   },
   {
    "id": "p0241",
    "name": "奶油泡芙芙",
    "photo": "dt13",
    "cat": "甜品站",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 28,
    "origPrice": 36,
    "rating": 4.6,
    "sales": 594,
    "tags": []
   },
   {
    "id": "p0242",
    "name": "墨西哥辣酱堡堡",
    "photo": "bg19",
    "cat": "风味汉堡",
    "desc": "肉饼厚度经过反复较真，扎实不虚",
    "price": 22.5,
    "origPrice": 29,
    "rating": 4.5,
    "sales": 3426,
    "tags": []
   },
   {
    "id": "p0243",
    "name": "流心芝士挞挞",
    "photo": "dt14",
    "cat": "甜品站",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 10,
    "origPrice": 12.5,
    "rating": 4.5,
    "sales": 475,
    "tags": []
   },
   {
    "id": "p0244",
    "name": "抹茶雪媚娘娘",
    "photo": "dt15",
    "cat": "甜品站",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 15,
    "origPrice": 19,
    "rating": 4.5,
    "sales": 6197,
    "tags": []
   },
   {
    "id": "p0245",
    "name": "双拼双酱堡堡",
    "photo": "bg20",
    "cat": "风味汉堡",
    "desc": "一口下去五层风景，纸巾自备",
    "price": 31,
    "origPrice": 39.5,
    "rating": 4.5,
    "sales": 676,
    "tags": []
   },
   {
    "id": "p0246",
    "name": "巧克力脆脆卷卷",
    "photo": "dt16",
    "cat": "甜品站",
    "desc": "冷藏后风味更佳",
    "price": 31,
    "origPrice": 40,
    "rating": 4.6,
    "sales": 1069,
    "tags": []
   }
  ]
 },
 {
  "id": "s03",
  "name": "汉堡堡王",
  "category": "burger",
  "logo": "👑",
  "brand": "汉堡堡王（汉堡王风）",
  "rating": 4.6,
  "monthlySales": 9321,
  "deliveryMin": 35,
  "deliveryFee": 4.5,
  "minOrder": 22,
  "distanceKm": 2.4,
  "notice": "火烤才是真汉堡！本店牛肉饼均为明火炙烤，烟熏香免费赠送。",
  "promos": [
   "满35减7"
  ],
  "photo": "tb4",
  "products": [
   {
    "id": "p0301",
    "name": "火烤经典皇堡堡",
    "photo": "bg21",
    "cat": "皇堡系列",
    "desc": "明火炙烤牛肉饼，戴皇冠的汉堡不会不好吃",
    "price": 26,
    "origPrice": 34,
    "rating": 4.6,
    "sales": 3753,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p0302",
    "name": "火烤经典皇堡堡套餐",
    "photo": "bg21",
    "cat": "超值套餐",
    "desc": "含中薯+中可乐，一单到位",
    "price": 37,
    "origPrice": 49,
    "rating": 4.5,
    "sales": 1089,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0303",
    "name": "双层芝士皇堡堡",
    "photo": "tb4",
    "cat": "皇堡系列",
    "desc": "面包胚烤到微焦，芝士刚好半融",
    "price": 32,
    "origPrice": 40,
    "rating": 4.8,
    "sales": 537,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p0304",
    "name": "双层芝士皇堡堡套餐",
    "photo": "tb4",
    "cat": "超值套餐",
    "desc": "含中薯+中可乐，一单到位",
    "price": 43,
    "origPrice": 55,
    "rating": 4.4,
    "sales": 768,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0305",
    "name": "狠霸王培根双层堡堡",
    "photo": "tb11",
    "cat": "皇堡系列",
    "desc": "双层牛肉加培根，吃完这顿今天别的都不用吃了",
    "price": 36,
    "origPrice": 45,
    "rating": 4.5,
    "sales": 316,
    "tags": []
   },
   {
    "id": "p0306",
    "name": "狠霸王培根双层堡堡套餐",
    "photo": "tb11",
    "cat": "超值套餐",
    "desc": "含中薯+中可乐，一单到位",
    "price": 47,
    "origPrice": 60,
    "rating": 4.8,
    "sales": 1201,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0307",
    "name": "安格斯洋葱芝士堡堡",
    "photo": "tb8",
    "cat": "皇堡系列",
    "desc": "一口下去五层风景，纸巾自备",
    "price": 30,
    "origPrice": 38,
    "rating": 4.9,
    "sales": 4761,
    "tags": [
     "满35减7"
    ]
   },
   {
    "id": "p0308",
    "name": "安格斯洋葱芝士堡堡套餐",
    "photo": "tb8",
    "cat": "超值套餐",
    "desc": "含中薯+中可乐，一单到位",
    "price": 41,
    "origPrice": 53,
    "rating": 4.9,
    "sales": 2434,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0309",
    "name": "蘑菇菌菇牛堡堡",
    "photo": "bg22",
    "cat": "皇堡系列",
    "desc": "牛肉饼现煎现夹，汁水锁在第一口",
    "price": 28,
    "origPrice": 35,
    "rating": 4.5,
    "sales": 1604,
    "tags": []
   },
   {
    "id": "p0310",
    "name": "蘑菇菌菇牛堡堡套餐",
    "photo": "bg22",
    "cat": "超值套餐",
    "desc": "含中薯+中可乐，一单到位",
    "price": 39,
    "origPrice": 50,
    "rating": 4.5,
    "sales": 4341,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0311",
    "name": "果木烟熏鸡腿堡堡",
    "photo": "tb2",
    "cat": "鸡腿堡系列",
    "desc": "一口下去五层风景，纸巾自备",
    "price": 22,
    "origPrice": 28,
    "rating": 4.6,
    "sales": 2190,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p0312",
    "name": "果木烟熏鸡腿堡堡套餐",
    "photo": "tb2",
    "cat": "超值套餐",
    "desc": "含中薯+中可乐，一单到位",
    "price": 33,
    "origPrice": 43,
    "rating": 4.9,
    "sales": 2214,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0313",
    "name": "脆鸡皇堡堡",
    "photo": "tb3",
    "cat": "鸡腿堡系列",
    "desc": "一口下去五层风景，纸巾自备",
    "price": 21,
    "origPrice": 27,
    "rating": 4.6,
    "sales": 971,
    "tags": [
     "满35减7"
    ]
   },
   {
    "id": "p0314",
    "name": "脆鸡皇堡堡套餐",
    "photo": "tb3",
    "cat": "超值套餐",
    "desc": "含中薯+中可乐，一单到位",
    "price": 32,
    "origPrice": 42,
    "rating": 4.4,
    "sales": 4330,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0315",
    "name": "嫩烤鸡排开放堡堡",
    "photo": "sand2",
    "cat": "鸡腿堡系列",
    "desc": "低卡不低配，吃饱不胖",
    "price": 19,
    "origPrice": 24,
    "rating": 4.6,
    "sales": 1454,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p0316",
    "name": "嫩烤鸡排开放堡堡套餐",
    "photo": "sand2",
    "cat": "超值套餐",
    "desc": "含中薯+中可乐，一单到位",
    "price": 30,
    "origPrice": 39,
    "rating": 4.5,
    "sales": 420,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0317",
    "name": "王道薯条条",
    "photo": "fries1",
    "cat": "小食",
    "desc": "酥皮现包现炸，咬开小心烫",
    "price": 13,
    "origPrice": 16,
    "rating": 4.9,
    "sales": 743,
    "tags": []
   },
   {
    "id": "p0318",
    "name": "王道薯条条（大份）",
    "photo": "fries1",
    "cat": "小食",
    "desc": "酥皮现包现炸，咬开小心烫",
    "price": 19,
    "origPrice": 23,
    "rating": 4.4,
    "sales": 3253,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p0319",
    "name": "华夫脆格格薯",
    "photo": "fries2",
    "cat": "小食",
    "desc": "三角酥脆，馅料给足",
    "price": 9,
    "origPrice": 12,
    "rating": 4.8,
    "sales": 786,
    "tags": [
     "满35减7"
    ]
   },
   {
    "id": "p0320",
    "name": "炸鸡块块（五块）",
    "photo": "fried1",
    "cat": "小食",
    "desc": "外脆内糯，配蘸水更妙",
    "price": 14,
    "origPrice": 17,
    "rating": 4.8,
    "sales": 1026,
    "tags": []
   },
   {
    "id": "p0321",
    "name": "皇家土豆浓汤汤",
    "photo": "soup5",
    "cat": "小食",
    "desc": "先喝汤是老规矩",
    "price": 9,
    "origPrice": 12,
    "rating": 4.6,
    "sales": 968,
    "tags": []
   },
   {
    "id": "p0322",
    "name": "冰镇醇黑快乐水水",
    "photo": "bev1",
    "cat": "饮品甜品",
    "desc": "冰块加到怀疑人生，解暑一流",
    "price": 6.5,
    "origPrice": 9,
    "rating": 4.8,
    "sales": 5238,
    "tags": [
     "满35减7"
    ]
   },
   {
    "id": "p0323",
    "name": "冰镇醇黑快乐水水（大杯）",
    "photo": "bev1",
    "cat": "饮品甜品",
    "desc": "鲜果现切现榨，不加一滴香精",
    "price": 9.5,
    "origPrice": 12,
    "rating": 4.6,
    "sales": 892,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p0324",
    "name": "冰淇淋筒筒",
    "photo": "des4",
    "cat": "饮品甜品",
    "desc": "拍照五秒内请尽快食用",
    "price": 5,
    "origPrice": 6,
    "rating": 4.6,
    "sales": 1165,
    "tags": []
   },
   {
    "id": "p0325",
    "name": "皇家圣代代",
    "photo": "des5",
    "cat": "饮品甜品",
    "desc": "甜品胃是另一个胃",
    "price": 11,
    "origPrice": 14,
    "rating": 4.8,
    "sales": 2795,
    "tags": []
   },
   {
    "id": "p0326",
    "name": "和牛芝士堡堡",
    "photo": "bg23",
    "cat": "风味汉堡",
    "desc": "生菜脆到发出声音，酱汁给得大方",
    "price": 25.5,
    "origPrice": 32.5,
    "rating": 4.4,
    "sales": 390,
    "tags": []
   },
   {
    "id": "p0327",
    "name": "巧克力脆脆卷卷",
    "photo": "dt17",
    "cat": "甜品站",
    "desc": "冷藏后风味更佳",
    "price": 32.5,
    "origPrice": 41.5,
    "rating": 4.6,
    "sales": 661,
    "tags": []
   },
   {
    "id": "p0328",
    "name": "脆脆鸡排堡堡",
    "photo": "bg24",
    "cat": "风味汉堡",
    "desc": "面包胚烤到微焦，芝士刚好半融",
    "price": 25.5,
    "origPrice": 33,
    "rating": 4.9,
    "sales": 4499,
    "tags": []
   },
   {
    "id": "p0329",
    "name": "芝士条条",
    "photo": "dt18",
    "cat": "甜品站",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 15.5,
    "origPrice": 19.5,
    "rating": 4.5,
    "sales": 5578,
    "tags": []
   },
   {
    "id": "p0330",
    "name": "黑椒蘑菇牛堡堡",
    "photo": "bg25",
    "cat": "风味汉堡",
    "desc": "一口下去五层风景，纸巾自备",
    "price": 11.5,
    "origPrice": 14.5,
    "rating": 4.6,
    "sales": 1584,
    "tags": []
   },
   {
    "id": "p0331",
    "name": "杏仁瓦片酥酥",
    "photo": "dt19",
    "cat": "甜品站",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 24,
    "origPrice": 30.5,
    "rating": 4.4,
    "sales": 5359,
    "tags": []
   },
   {
    "id": "p0332",
    "name": "奶香小方方",
    "photo": "dt20",
    "cat": "甜品站",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 28,
    "origPrice": 36,
    "rating": 4.7,
    "sales": 210,
    "tags": []
   },
   {
    "id": "p0333",
    "name": "乳酪蛋糕条条",
    "photo": "dt21",
    "cat": "甜品站",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 26,
    "origPrice": 33,
    "rating": 4.7,
    "sales": 1959,
    "tags": []
   },
   {
    "id": "p0334",
    "name": "重芝士爆浆堡堡",
    "photo": "bg26",
    "cat": "风味汉堡",
    "desc": "生菜脆到发出声音，酱汁给得大方",
    "price": 13,
    "origPrice": 16.5,
    "rating": 4.4,
    "sales": 3048,
    "tags": []
   },
   {
    "id": "p0335",
    "name": "莓果慕斯杯杯",
    "photo": "dt22",
    "cat": "甜品站",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 19.5,
    "origPrice": 25.5,
    "rating": 4.6,
    "sales": 3535,
    "tags": []
   },
   {
    "id": "p0336",
    "name": "经典牛肉堡堡",
    "photo": "bg27",
    "cat": "风味汉堡",
    "desc": "一口下去五层风景，纸巾自备",
    "price": 26.5,
    "origPrice": 33.5,
    "rating": 4.6,
    "sales": 569,
    "tags": []
   },
   {
    "id": "p0337",
    "name": "抹茶雪媚娘娘",
    "photo": "dt23",
    "cat": "甜品站",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 12.5,
    "origPrice": 16,
    "rating": 4.9,
    "sales": 4884,
    "tags": []
   },
   {
    "id": "p0338",
    "name": "洋葱圈牛堡堡",
    "photo": "bg28",
    "cat": "风味汉堡",
    "desc": "一口下去五层风景，纸巾自备",
    "price": 18.5,
    "origPrice": 23.5,
    "rating": 4.8,
    "sales": 2478,
    "tags": []
   },
   {
    "id": "p0339",
    "name": "奶油泡芙芙",
    "photo": "dt24",
    "cat": "甜品站",
    "desc": "冷藏后风味更佳",
    "price": 24,
    "origPrice": 31,
    "rating": 4.9,
    "sales": 7269,
    "tags": []
   },
   {
    "id": "p0340",
    "name": "青花椒风味堡堡",
    "photo": "bg29",
    "cat": "风味汉堡",
    "desc": "牛肉饼现煎现夹，汁水锁在第一口",
    "price": 9.5,
    "origPrice": 12.5,
    "rating": 4.8,
    "sales": 396,
    "tags": []
   },
   {
    "id": "p0341",
    "name": "流心芝士挞挞",
    "photo": "dt25",
    "cat": "甜品站",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 15,
    "origPrice": 19,
    "rating": 4.9,
    "sales": 636,
    "tags": []
   },
   {
    "id": "p0342",
    "name": "蔓越莓司康康",
    "photo": "dt26",
    "cat": "甜品站",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 32.5,
    "origPrice": 42,
    "rating": 4.7,
    "sales": 2772,
    "tags": []
   },
   {
    "id": "p0343",
    "name": "双拼双酱堡堡",
    "photo": "bg30",
    "cat": "风味汉堡",
    "desc": "一口下去五层风景，纸巾自备",
    "price": 32.5,
    "origPrice": 41.5,
    "rating": 4.9,
    "sales": 254,
    "tags": []
   },
   {
    "id": "p0344",
    "name": "烧烤酱手撕堡堡",
    "photo": "bg31",
    "cat": "风味汉堡",
    "desc": "牛肉饼现煎现夹，汁水锁在第一口",
    "price": 19,
    "origPrice": 24.5,
    "rating": 4.5,
    "sales": 6095,
    "tags": []
   },
   {
    "id": "p0345",
    "name": "烟熏西冷堡堡",
    "photo": "bg32",
    "cat": "风味汉堡",
    "desc": "一口下去五层风景，纸巾自备",
    "price": 21.5,
    "origPrice": 27.5,
    "rating": 4.6,
    "sales": 1601,
    "tags": []
   },
   {
    "id": "p0346",
    "name": "黄油曲奇奇",
    "photo": "dt27",
    "cat": "甜品站",
    "desc": "下午茶的正确打开方式",
    "price": 12.5,
    "origPrice": 16,
    "rating": 4.7,
    "sales": 252,
    "tags": []
   }
  ]
 },
 {
  "id": "s04",
  "name": "华莱莱士",
  "category": "burger",
  "logo": "🍔",
  "brand": "华莱莱士（华莱士风）",
  "rating": 4.4,
  "monthlySales": 22345,
  "deliveryMin": 26,
  "deliveryFee": 2,
  "minOrder": 15,
  "distanceKm": 0.7,
  "notice": "全鸡汉堡平价之王，量大管饱，学生党和打工人的深夜食堂。",
  "promos": [
   "满20减3",
   "满39减8"
  ],
  "photo": "tb6",
  "products": [
   {
    "id": "p0401",
    "name": "香辣鸡腿堡堡",
    "photo": "bg33",
    "cat": "人气汉堡",
    "desc": "十一块钱的快乐，性价比之王",
    "price": 11,
    "origPrice": 14,
    "rating": 4.4,
    "sales": 2868,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p0402",
    "name": "香辣鸡腿堡堡套餐",
    "photo": "bg33",
    "cat": "超值套餐",
    "desc": "含小薯+小可乐，一单到位",
    "price": 22,
    "origPrice": 29,
    "rating": 4.7,
    "sales": 314,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0403",
    "name": "劲脆鸡腿堡堡",
    "photo": "tb6",
    "cat": "人气汉堡",
    "desc": "肉饼厚度经过反复较真，扎实不虚",
    "price": 12,
    "origPrice": 15,
    "rating": 4.7,
    "sales": 1236,
    "tags": []
   },
   {
    "id": "p0404",
    "name": "劲脆鸡腿堡堡套餐",
    "photo": "tb6",
    "cat": "超值套餐",
    "desc": "含小薯+小可乐，一单到位",
    "price": 23,
    "origPrice": 30,
    "rating": 4.8,
    "sales": 3266,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0405",
    "name": "牛肉芝士堡堡",
    "photo": "bg34",
    "cat": "人气汉堡",
    "desc": "面包胚烤到微焦，芝士刚好半融",
    "price": 13.5,
    "origPrice": 17,
    "rating": 4.8,
    "sales": 5427,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p0406",
    "name": "牛肉芝士堡堡套餐",
    "photo": "bg34",
    "cat": "超值套餐",
    "desc": "含小薯+小可乐，一单到位",
    "price": 24.5,
    "origPrice": 32,
    "rating": 4.9,
    "sales": 2775,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0407",
    "name": "奥尔良烤鸡堡堡",
    "photo": "bg35",
    "cat": "人气汉堡",
    "desc": "面包胚烤到微焦，芝士刚好半融",
    "price": 12.5,
    "origPrice": 16,
    "rating": 4.5,
    "sales": 355,
    "tags": [
     "满20减3"
    ]
   },
   {
    "id": "p0408",
    "name": "奥尔良烤鸡堡堡套餐",
    "photo": "bg35",
    "cat": "超值套餐",
    "desc": "含小薯+小可乐，一单到位",
    "price": 23.5,
    "origPrice": 31,
    "rating": 4.7,
    "sales": 7822,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0409",
    "name": "双层牛堡堡",
    "photo": "bg36",
    "cat": "人气汉堡",
    "desc": "生菜脆到发出声音，酱汁给得大方",
    "price": 16,
    "origPrice": 20,
    "rating": 4.5,
    "sales": 2067,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p0410",
    "name": "双层牛堡堡套餐",
    "photo": "bg36",
    "cat": "超值套餐",
    "desc": "含小薯+小可乐，一单到位",
    "price": 27,
    "origPrice": 35,
    "rating": 4.5,
    "sales": 1439,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0411",
    "name": "鳕鱼堡堡",
    "photo": "bg37",
    "cat": "人气汉堡",
    "desc": "肉饼厚度经过反复较真，扎实不虚",
    "price": 11.5,
    "origPrice": 15,
    "rating": 4.5,
    "sales": 387,
    "tags": []
   },
   {
    "id": "p0412",
    "name": "鳕鱼堡堡套餐",
    "photo": "bg37",
    "cat": "超值套餐",
    "desc": "含小薯+小可乐，一单到位",
    "price": 22.5,
    "origPrice": 30,
    "rating": 4.8,
    "sales": 943,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0413",
    "name": "全鸡·奥尔良烤鸡鸡",
    "photo": "grill7",
    "cat": "炸鸡全鸡",
    "desc": "整只全鸡，一个人吃是豪迈，两个人吃是浪漫",
    "price": 25.9,
    "origPrice": 32,
    "rating": 4.5,
    "sales": 2716,
    "tags": [
     "满20减3"
    ],
    "seckill": true
   },
   {
    "id": "p0414",
    "name": "川辣脆皮炸鸡鸡（两块）",
    "photo": "fried1",
    "cat": "炸鸡全鸡",
    "desc": "外脆内糯，配蘸水更妙",
    "price": 15,
    "origPrice": 19,
    "rating": 4.7,
    "sales": 3316,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p0415",
    "name": "川辣脆皮炸鸡鸡（大份）",
    "photo": "fried1",
    "cat": "炸鸡全鸡",
    "desc": "酥皮现包现炸，咬开小心烫",
    "price": 22,
    "origPrice": 27.5,
    "rating": 4.8,
    "sales": 2484,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p0416",
    "name": "蜜汁烤翅翅（两对）",
    "photo": "grill8",
    "cat": "炸鸡全鸡",
    "desc": "炭火现烤，滋滋冒油",
    "price": 11,
    "origPrice": 14,
    "rating": 4.9,
    "sales": 426,
    "tags": []
   },
   {
    "id": "p0417",
    "name": "蜜汁烤翅翅（大份）",
    "photo": "grill8",
    "cat": "炸鸡全鸡",
    "desc": "孜然辣椒面双料齐下",
    "price": 16,
    "origPrice": 20.5,
    "rating": 4.6,
    "sales": 894,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p0418",
    "name": "甜辣鸡翅根根",
    "photo": "grill9",
    "cat": "炸鸡全鸡",
    "desc": "趁热撸串，凉了味道减半",
    "price": 12,
    "origPrice": 15,
    "rating": 4.6,
    "sales": 5749,
    "tags": [
     "满20减3"
    ]
   },
   {
    "id": "p0419",
    "name": "薯条（大）",
    "photo": "fries1",
    "cat": "小食饮品",
    "desc": "三角酥脆，馅料给足",
    "price": 9,
    "origPrice": 11,
    "rating": 4.5,
    "sales": 6789,
    "tags": []
   },
   {
    "id": "p0420",
    "name": "劲爆鸡米花花",
    "photo": "fried1",
    "cat": "小食饮品",
    "desc": "外脆内糯，配蘸水更妙",
    "price": 8.5,
    "origPrice": 11,
    "rating": 4.8,
    "sales": 445,
    "tags": []
   },
   {
    "id": "p0421",
    "name": "蛋挞（两只）",
    "photo": "dt28",
    "cat": "小食饮品",
    "desc": "冷藏后风味更佳",
    "price": 7.9,
    "origPrice": 10,
    "rating": 4.6,
    "sales": 4310,
    "tags": [
     "满20减3"
    ]
   },
   {
    "id": "p0422",
    "name": "可乐（中）",
    "photo": "bev1",
    "cat": "小食饮品",
    "desc": "喝一口从喉咙凉到天灵盖",
    "price": 6,
    "origPrice": 8,
    "rating": 4.7,
    "sales": 673,
    "tags": []
   },
   {
    "id": "p0423",
    "name": "可乐（大杯）",
    "photo": "bev1",
    "cat": "小食饮品",
    "desc": "喝一口从喉咙凉到天灵盖",
    "price": 9,
    "origPrice": 11,
    "rating": 4.7,
    "sales": 280,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p0424",
    "name": "圆筒冰淇淋淋",
    "photo": "des4",
    "cat": "小食饮品",
    "desc": "甜品胃是另一个胃",
    "price": 3,
    "origPrice": 4,
    "rating": 4.6,
    "sales": 6698,
    "tags": []
   },
   {
    "id": "p0425",
    "name": "溏心蛋牛堡堡",
    "photo": "bg38",
    "cat": "风味汉堡",
    "desc": "肉饼厚度经过反复较真，扎实不虚",
    "price": 24,
    "origPrice": 30.5,
    "rating": 4.8,
    "sales": 749,
    "tags": []
   },
   {
    "id": "p0426",
    "name": "海盐芝士卷卷",
    "photo": "dt29",
    "cat": "甜品站",
    "desc": "下午茶的正确打开方式",
    "price": 10,
    "origPrice": 13,
    "rating": 4.5,
    "sales": 1923,
    "tags": []
   },
   {
    "id": "p0427",
    "name": "墨西哥辣酱堡堡",
    "photo": "bg39",
    "cat": "风味汉堡",
    "desc": "面包胚烤到微焦，芝士刚好半融",
    "price": 26.5,
    "origPrice": 33.5,
    "rating": 4.5,
    "sales": 430,
    "tags": []
   },
   {
    "id": "p0428",
    "name": "焦糖布丁挞挞",
    "photo": "dt30",
    "cat": "甜品站",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 22,
    "origPrice": 28.5,
    "rating": 4.8,
    "sales": 2542,
    "tags": []
   },
   {
    "id": "p0429",
    "name": "经典牛肉堡堡",
    "photo": "bg40",
    "cat": "风味汉堡",
    "desc": "一口下去五层风景，纸巾自备",
    "price": 37.5,
    "origPrice": 48.5,
    "rating": 4.6,
    "sales": 2351,
    "tags": []
   },
   {
    "id": "p0430",
    "name": "蔓越莓司康康",
    "photo": "dt31",
    "cat": "甜品站",
    "desc": "冷藏后风味更佳",
    "price": 23,
    "origPrice": 29.5,
    "rating": 4.7,
    "sales": 573,
    "tags": []
   },
   {
    "id": "p0431",
    "name": "肉桂糖霜卷卷",
    "photo": "dt32",
    "cat": "甜品站",
    "desc": "下午茶的正确打开方式",
    "price": 22.5,
    "origPrice": 29,
    "rating": 4.6,
    "sales": 343,
    "tags": []
   },
   {
    "id": "p0432",
    "name": "田园鲜蔬堡堡",
    "photo": "bg41",
    "cat": "风味汉堡",
    "desc": "一口下去五层风景，纸巾自备",
    "price": 24,
    "origPrice": 31,
    "rating": 4.9,
    "sales": 1026,
    "tags": []
   },
   {
    "id": "p0433",
    "name": "芝士条条",
    "photo": "dt33",
    "cat": "甜品站",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 22,
    "origPrice": 28.5,
    "rating": 4.5,
    "sales": 7027,
    "tags": []
   },
   {
    "id": "p0434",
    "name": "烟熏培根蛋堡堡",
    "photo": "bg42",
    "cat": "风味汉堡",
    "desc": "面包胚烤到微焦，芝士刚好半融",
    "price": 26.5,
    "origPrice": 34,
    "rating": 4.6,
    "sales": 2513,
    "tags": []
   },
   {
    "id": "p0435",
    "name": "乳酪蛋糕条条",
    "photo": "dt34",
    "cat": "甜品站",
    "desc": "下午茶的正确打开方式",
    "price": 17.5,
    "origPrice": 22.5,
    "rating": 4.9,
    "sales": 331,
    "tags": []
   },
   {
    "id": "p0436",
    "name": "照烧菠萝牛堡堡",
    "photo": "bg43",
    "cat": "风味汉堡",
    "desc": "生菜脆到发出声音，酱汁给得大方",
    "price": 34.5,
    "origPrice": 44.5,
    "rating": 4.5,
    "sales": 774,
    "tags": []
   },
   {
    "id": "p0437",
    "name": "流心芝士挞挞",
    "photo": "dt35",
    "cat": "甜品站",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 28,
    "origPrice": 36,
    "rating": 4.6,
    "sales": 1786,
    "tags": []
   },
   {
    "id": "p0438",
    "name": "车打芝士牛堡堡",
    "photo": "bg44",
    "cat": "风味汉堡",
    "desc": "一口下去五层风景，纸巾自备",
    "price": 8,
    "origPrice": 10.5,
    "rating": 4.8,
    "sales": 2760,
    "tags": []
   },
   {
    "id": "p0439",
    "name": "杏仁瓦片酥酥",
    "photo": "dt36",
    "cat": "甜品站",
    "desc": "冷藏后风味更佳",
    "price": 14.5,
    "origPrice": 18.5,
    "rating": 4.4,
    "sales": 2798,
    "tags": []
   },
   {
    "id": "p0440",
    "name": "藤椒鸡腿堡堡",
    "photo": "bg45",
    "cat": "风味汉堡",
    "desc": "一口下去五层风景，纸巾自备",
    "price": 27,
    "origPrice": 35,
    "rating": 4.5,
    "sales": 4076,
    "tags": []
   },
   {
    "id": "p0441",
    "name": "奶香小方方",
    "photo": "dt1",
    "cat": "甜品站",
    "desc": "下午茶的正确打开方式",
    "price": 26.5,
    "origPrice": 33.5,
    "rating": 4.7,
    "sales": 917,
    "tags": []
   },
   {
    "id": "p0442",
    "name": "黄油曲奇奇",
    "photo": "dt2",
    "cat": "甜品站",
    "desc": "冷藏后风味更佳",
    "price": 8,
    "origPrice": 10.5,
    "rating": 4.4,
    "sales": 4746,
    "tags": []
   },
   {
    "id": "p0443",
    "name": "洋葱圈牛堡堡",
    "photo": "bg46",
    "cat": "风味汉堡",
    "desc": "肉饼厚度经过反复较真，扎实不虚",
    "price": 13,
    "origPrice": 16.5,
    "rating": 4.6,
    "sales": 1175,
    "tags": []
   },
   {
    "id": "p0444",
    "name": "莓果慕斯杯杯",
    "photo": "dt3",
    "cat": "甜品站",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 21,
    "origPrice": 27,
    "rating": 4.4,
    "sales": 5836,
    "tags": []
   },
   {
    "id": "p0445",
    "name": "烧烤酱手撕堡堡",
    "photo": "bg47",
    "cat": "风味汉堡",
    "desc": "生菜脆到发出声音，酱汁给得大方",
    "price": 12,
    "origPrice": 15.5,
    "rating": 4.5,
    "sales": 2198,
    "tags": []
   },
   {
    "id": "p0446",
    "name": "青花椒风味堡堡",
    "photo": "bg48",
    "cat": "风味汉堡",
    "desc": "牛肉饼现煎现夹，汁水锁在第一口",
    "price": 25,
    "origPrice": 32.5,
    "rating": 4.4,
    "sales": 2982,
    "tags": []
   }
  ]
 },
 {
  "id": "s05",
  "name": "德克士士",
  "category": "burger",
  "logo": "🍗",
  "brand": "德克士士（德克士风）",
  "rating": 4.5,
  "monthlySales": 8654,
  "deliveryMin": 30,
  "deliveryFee": 3,
  "minOrder": 20,
  "distanceKm": 1.5,
  "notice": "脆皮炸鸡四十年老手艺，脆到隔壁桌回头。",
  "promos": [
   "满28减5"
  ],
  "photo": "fried1",
  "products": [
   {
    "id": "p0501",
    "name": "脆皮炸鸡鸡（两块）",
    "photo": "fried1",
    "cat": "脆皮炸鸡",
    "desc": "四十年脆皮手艺，咬下去咔嚓一声脆到隔壁",
    "price": 20,
    "origPrice": 25,
    "rating": 4.6,
    "sales": 235,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p0502",
    "name": "脆皮炸鸡鸡（大份）",
    "photo": "fried1",
    "cat": "脆皮炸鸡",
    "desc": "外脆内糯，配蘸水更妙",
    "price": 29,
    "origPrice": 36.5,
    "rating": 4.7,
    "sales": 2470,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p0503",
    "name": "魔法鸡块块（八块）",
    "photo": "fried1",
    "cat": "脆皮炸鸡",
    "desc": "外脆内糯，配蘸水更妙",
    "price": 13,
    "origPrice": 16,
    "rating": 4.8,
    "sales": 3682,
    "tags": []
   },
   {
    "id": "p0504",
    "name": "蜜汁手枪腿腿",
    "photo": "grill7",
    "cat": "脆皮炸鸡",
    "desc": "孜然辣椒面双料齐下",
    "price": 15,
    "origPrice": 19,
    "rating": 4.9,
    "sales": 365,
    "tags": []
   },
   {
    "id": "p0505",
    "name": "孜然烤翅翅·孜然",
    "photo": "grill8",
    "cat": "脆皮炸鸡",
    "desc": "趁热撸串，凉了味道减半",
    "price": 13,
    "origPrice": 16,
    "rating": 4.9,
    "sales": 200,
    "tags": [
     "满28减5"
    ]
   },
   {
    "id": "p0506",
    "name": "孜然烤翅翅·甜辣",
    "photo": "grill8",
    "cat": "脆皮炸鸡",
    "desc": "趁热撸串，凉了味道减半",
    "price": 13,
    "origPrice": 16,
    "rating": 4.5,
    "sales": 2378,
    "tags": [
     "满28减5"
    ]
   },
   {
    "id": "p0507",
    "name": "脆皮鸡腿堡堡",
    "photo": "bg49",
    "cat": "汉堡",
    "desc": "面包胚烤到微焦，芝士刚好半融",
    "price": 19,
    "origPrice": 24,
    "rating": 4.4,
    "sales": 625,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p0508",
    "name": "脆皮鸡腿堡堡套餐",
    "photo": "bg49",
    "cat": "超值套餐",
    "desc": "含中薯+中可乐，一单到位",
    "price": 30,
    "origPrice": 39,
    "rating": 4.7,
    "sales": 1360,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0509",
    "name": "照烧牛肉堡堡",
    "photo": "bg50",
    "cat": "汉堡",
    "desc": "面包胚烤到微焦，芝士刚好半融",
    "price": 21,
    "origPrice": 26,
    "rating": 4.9,
    "sales": 1625,
    "tags": []
   },
   {
    "id": "p0510",
    "name": "照烧牛肉堡堡套餐",
    "photo": "bg50",
    "cat": "超值套餐",
    "desc": "含中薯+中可乐，一单到位",
    "price": 32,
    "origPrice": 41,
    "rating": 4.9,
    "sales": 3101,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0511",
    "name": "海陆双拼堡堡",
    "photo": "bg51",
    "cat": "汉堡",
    "desc": "生菜脆到发出声音，酱汁给得大方",
    "price": 24,
    "origPrice": 30,
    "rating": 4.6,
    "sales": 2590,
    "tags": [
     "满28减5"
    ]
   },
   {
    "id": "p0512",
    "name": "海陆双拼堡堡套餐",
    "photo": "bg51",
    "cat": "超值套餐",
    "desc": "含中薯+中可乐，一单到位",
    "price": 35,
    "origPrice": 45,
    "rating": 4.5,
    "sales": 6249,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0513",
    "name": "嫩牛芝士堡堡",
    "photo": "tb9",
    "cat": "汉堡",
    "desc": "肉饼厚度经过反复较真，扎实不虚",
    "price": 22,
    "origPrice": 27,
    "rating": 4.6,
    "sales": 710,
    "tags": []
   },
   {
    "id": "p0514",
    "name": "嫩牛芝士堡堡套餐",
    "photo": "tb9",
    "cat": "超值套餐",
    "desc": "含中薯+中可乐，一单到位",
    "price": 33,
    "origPrice": 42,
    "rating": 4.5,
    "sales": 3953,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0515",
    "name": "脆薯条条",
    "photo": "fries1",
    "cat": "小食饮品",
    "desc": "三角酥脆，馅料给足",
    "price": 11,
    "origPrice": 14,
    "rating": 4.9,
    "sales": 351,
    "tags": []
   },
   {
    "id": "p0516",
    "name": "脆薯条条（大份）",
    "photo": "fries1",
    "cat": "小食饮品",
    "desc": "三角酥脆，馅料给足",
    "price": 16,
    "origPrice": 20.5,
    "rating": 4.6,
    "sales": 1171,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p0517",
    "name": "熔岩蛋挞挞",
    "photo": "dt4",
    "cat": "小食饮品",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 8,
    "origPrice": 10,
    "rating": 4.8,
    "sales": 4410,
    "tags": [
     "满28减5"
    ]
   },
   {
    "id": "p0518",
    "name": "冰淇淋圣代代",
    "photo": "des5",
    "cat": "小食饮品",
    "desc": "甜品胃是另一个胃",
    "price": 9,
    "origPrice": 12,
    "rating": 4.6,
    "sales": 913,
    "tags": []
   },
   {
    "id": "p0519",
    "name": "冰红茶茶",
    "photo": "jc8",
    "cat": "小食饮品",
    "desc": "冷压锁鲜，果肉打到细腻",
    "price": 7,
    "origPrice": 9,
    "rating": 4.5,
    "sales": 916,
    "tags": []
   },
   {
    "id": "p0520",
    "name": "冰红茶茶（大杯）",
    "photo": "jc8",
    "cat": "小食饮品",
    "desc": "冷压锁鲜，果肉打到细腻",
    "price": 10,
    "origPrice": 12,
    "rating": 4.8,
    "sales": 2152,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p0521",
    "name": "可乐乐",
    "photo": "bev1",
    "cat": "小食饮品",
    "desc": "喝一口从喉咙凉到天灵盖",
    "price": 8,
    "origPrice": 10,
    "rating": 4.7,
    "sales": 4624,
    "tags": [
     "满28减5"
    ]
   },
   {
    "id": "p0522",
    "name": "可乐乐（大杯）",
    "photo": "bev1",
    "cat": "小食饮品",
    "desc": "喝一口从喉咙凉到天灵盖",
    "price": 11,
    "origPrice": 13,
    "rating": 4.5,
    "sales": 1878,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p0523",
    "name": "洋葱圈牛堡堡",
    "photo": "bg52",
    "cat": "风味汉堡",
    "desc": "一口下去五层风景，纸巾自备",
    "price": 12.5,
    "origPrice": 16,
    "rating": 4.6,
    "sales": 1766,
    "tags": []
   },
   {
    "id": "p0524",
    "name": "蔓越莓司康康",
    "photo": "dt5",
    "cat": "甜品站",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 8.5,
    "origPrice": 11,
    "rating": 4.8,
    "sales": 524,
    "tags": []
   },
   {
    "id": "p0525",
    "name": "流心芝士厚牛堡堡",
    "photo": "bg53",
    "cat": "风味汉堡",
    "desc": "牛肉饼现煎现夹，汁水锁在第一口",
    "price": 21,
    "origPrice": 27,
    "rating": 4.6,
    "sales": 2578,
    "tags": []
   },
   {
    "id": "p0526",
    "name": "青花椒风味堡堡",
    "photo": "bg54",
    "cat": "风味汉堡",
    "desc": "生菜脆到发出声音，酱汁给得大方",
    "price": 15,
    "origPrice": 19.5,
    "rating": 4.6,
    "sales": 1692,
    "tags": []
   },
   {
    "id": "p0527",
    "name": "巧克力脆脆卷卷",
    "photo": "dt6",
    "cat": "甜品站",
    "desc": "冷藏后风味更佳",
    "price": 13.5,
    "origPrice": 17,
    "rating": 4.6,
    "sales": 1740,
    "tags": []
   },
   {
    "id": "p0528",
    "name": "墨西哥辣酱堡堡",
    "photo": "bg55",
    "cat": "风味汉堡",
    "desc": "生菜脆到发出声音，酱汁给得大方",
    "price": 14.5,
    "origPrice": 19,
    "rating": 4.6,
    "sales": 1368,
    "tags": []
   },
   {
    "id": "p0529",
    "name": "杏仁瓦片酥酥",
    "photo": "dt7",
    "cat": "甜品站",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 10,
    "origPrice": 12.5,
    "rating": 4.4,
    "sales": 3383,
    "tags": []
   },
   {
    "id": "p0530",
    "name": "田园鲜蔬堡堡",
    "photo": "bg56",
    "cat": "风味汉堡",
    "desc": "肉饼厚度经过反复较真，扎实不虚",
    "price": 25,
    "origPrice": 32,
    "rating": 4.6,
    "sales": 376,
    "tags": []
   },
   {
    "id": "p0531",
    "name": "海盐芝士卷卷",
    "photo": "dt8",
    "cat": "甜品站",
    "desc": "下午茶的正确打开方式",
    "price": 36.5,
    "origPrice": 46.5,
    "rating": 4.4,
    "sales": 3097,
    "tags": []
   },
   {
    "id": "p0532",
    "name": "和牛芝士堡堡",
    "photo": "bg57",
    "cat": "风味汉堡",
    "desc": "生菜脆到发出声音，酱汁给得大方",
    "price": 30,
    "origPrice": 38,
    "rating": 4.7,
    "sales": 5028,
    "tags": []
   },
   {
    "id": "p0533",
    "name": "黄油曲奇奇",
    "photo": "dt9",
    "cat": "甜品站",
    "desc": "冷藏后风味更佳",
    "price": 13,
    "origPrice": 16.5,
    "rating": 4.5,
    "sales": 315,
    "tags": []
   },
   {
    "id": "p0534",
    "name": "藤椒鸡腿堡堡",
    "photo": "bg58",
    "cat": "风味汉堡",
    "desc": "肉饼厚度经过反复较真，扎实不虚",
    "price": 25.5,
    "origPrice": 33,
    "rating": 4.6,
    "sales": 4151,
    "tags": []
   },
   {
    "id": "p0535",
    "name": "车打芝士牛堡堡",
    "photo": "bg59",
    "cat": "风味汉堡",
    "desc": "一口下去五层风景，纸巾自备",
    "price": 27,
    "origPrice": 34.5,
    "rating": 4.9,
    "sales": 2639,
    "tags": []
   },
   {
    "id": "p0536",
    "name": "烟熏培根蛋堡堡",
    "photo": "bg60",
    "cat": "风味汉堡",
    "desc": "面包胚烤到微焦，芝士刚好半融",
    "price": 29.5,
    "origPrice": 38,
    "rating": 4.5,
    "sales": 1339,
    "tags": []
   },
   {
    "id": "p0537",
    "name": "芝士条条",
    "photo": "dt10",
    "cat": "甜品站",
    "desc": "下午茶的正确打开方式",
    "price": 16,
    "origPrice": 20,
    "rating": 4.8,
    "sales": 2086,
    "tags": []
   },
   {
    "id": "p0538",
    "name": "经典牛肉堡堡",
    "photo": "bg61",
    "cat": "风味汉堡",
    "desc": "生菜脆到发出声音，酱汁给得大方",
    "price": 28.5,
    "origPrice": 36.5,
    "rating": 4.5,
    "sales": 369,
    "tags": []
   },
   {
    "id": "p0539",
    "name": "奶香小方方",
    "photo": "dt11",
    "cat": "甜品站",
    "desc": "冷藏后风味更佳",
    "price": 17.5,
    "origPrice": 22.5,
    "rating": 4.7,
    "sales": 2646,
    "tags": []
   },
   {
    "id": "p0540",
    "name": "烟熏西冷堡堡",
    "photo": "bg62",
    "cat": "风味汉堡",
    "desc": "一口下去五层风景，纸巾自备",
    "price": 23,
    "origPrice": 29,
    "rating": 4.6,
    "sales": 335,
    "tags": []
   },
   {
    "id": "p0541",
    "name": "焦糖布丁挞挞",
    "photo": "dt12",
    "cat": "甜品站",
    "desc": "冷藏后风味更佳",
    "price": 24.5,
    "origPrice": 31.5,
    "rating": 4.7,
    "sales": 2447,
    "tags": []
   },
   {
    "id": "p0542",
    "name": "烧烤酱手撕堡堡",
    "photo": "bg63",
    "cat": "风味汉堡",
    "desc": "生菜脆到发出声音，酱汁给得大方",
    "price": 8,
    "origPrice": 10.5,
    "rating": 4.8,
    "sales": 3611,
    "tags": []
   },
   {
    "id": "p0543",
    "name": "乳酪蛋糕条条",
    "photo": "dt13",
    "cat": "甜品站",
    "desc": "冷藏后风味更佳",
    "price": 28,
    "origPrice": 36,
    "rating": 4.7,
    "sales": 2244,
    "tags": []
   },
   {
    "id": "p0544",
    "name": "照烧菠萝牛堡堡",
    "photo": "bg64",
    "cat": "风味汉堡",
    "desc": "一口下去五层风景，纸巾自备",
    "price": 38,
    "origPrice": 48.5,
    "rating": 4.6,
    "sales": 363,
    "tags": []
   },
   {
    "id": "p0545",
    "name": "莓果慕斯杯杯",
    "photo": "dt14",
    "cat": "甜品站",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 29,
    "origPrice": 37.5,
    "rating": 4.9,
    "sales": 3358,
    "tags": []
   },
   {
    "id": "p0546",
    "name": "黑椒蘑菇牛堡堡",
    "photo": "bg65",
    "cat": "风味汉堡",
    "desc": "牛肉饼现煎现夹，汁水锁在第一口",
    "price": 9.5,
    "origPrice": 12,
    "rating": 4.5,
    "sales": 8781,
    "tags": []
   }
  ]
 },
 {
  "id": "s06",
  "name": "塔斯汀汀",
  "category": "burger",
  "logo": "🫓",
  "brand": "塔斯汀汀（塔斯汀中国汉堡风）",
  "rating": 4.6,
  "monthlySales": 15230,
  "deliveryMin": 24,
  "deliveryFee": 2.5,
  "minOrder": 15,
  "distanceKm": 0.9,
  "notice": "中国汉堡，现烤堡胚。手擀现烤才配叫中国胃的汉堡。",
  "promos": [
   "满20减4"
  ],
  "photo": "bg85",
  "products": [
   {
    "id": "p0601",
    "name": "北京烤鸭中国堡堡",
    "photo": "bg66",
    "cat": "中国汉堡",
    "desc": "烤鸭卷进现烤堡胚，中西合璧的显眼包",
    "price": 17,
    "origPrice": 22,
    "rating": 4.5,
    "sales": 2396,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p0602",
    "name": "北京烤鸭中国堡堡套餐",
    "photo": "bg66",
    "cat": "超值套餐",
    "desc": "含小薯+柠檬红茶，一单到位",
    "price": 28,
    "origPrice": 37,
    "rating": 4.8,
    "sales": 5280,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0603",
    "name": "梅菜扣肉中国堡堡",
    "photo": "bg67",
    "cat": "中国汉堡",
    "desc": "生菜脆到发出声音，酱汁给得大方",
    "price": 15,
    "origPrice": 19,
    "rating": 4.7,
    "sales": 2715,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p0604",
    "name": "梅菜扣肉中国堡堡套餐",
    "photo": "bg67",
    "cat": "超值套餐",
    "desc": "含小薯+柠檬红茶，一单到位",
    "price": 26,
    "origPrice": 34,
    "rating": 4.7,
    "sales": 4673,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0605",
    "name": "麻婆豆腐中国堡堡",
    "photo": "bg68",
    "cat": "中国汉堡",
    "desc": "面包胚烤到微焦，芝士刚好半融",
    "price": 13,
    "origPrice": 17,
    "rating": 4.6,
    "sales": 1158,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p0606",
    "name": "麻婆豆腐中国堡堡套餐",
    "photo": "bg68",
    "cat": "超值套餐",
    "desc": "含小薯+柠檬红茶，一单到位",
    "price": 24,
    "origPrice": 32,
    "rating": 4.6,
    "sales": 1434,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0607",
    "name": "香辣鸡腿中国堡堡",
    "photo": "bg69",
    "cat": "中国汉堡",
    "desc": "面包胚烤到微焦，芝士刚好半融",
    "price": 14,
    "origPrice": 18,
    "rating": 4.9,
    "sales": 652,
    "tags": [
     "满20减4"
    ]
   },
   {
    "id": "p0608",
    "name": "香辣鸡腿中国堡堡套餐",
    "photo": "bg69",
    "cat": "超值套餐",
    "desc": "含小薯+柠檬红茶，一单到位",
    "price": 25,
    "origPrice": 33,
    "rating": 4.5,
    "sales": 1451,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0609",
    "name": "板烧凤梨中国堡堡",
    "photo": "bg70",
    "cat": "中国汉堡",
    "desc": "牛肉饼现煎现夹，汁水锁在第一口",
    "price": 15,
    "origPrice": 19,
    "rating": 4.5,
    "sales": 4179,
    "tags": []
   },
   {
    "id": "p0610",
    "name": "板烧凤梨中国堡堡套餐",
    "photo": "bg70",
    "cat": "超值套餐",
    "desc": "含小薯+柠檬红茶，一单到位",
    "price": 26,
    "origPrice": 34,
    "rating": 4.7,
    "sales": 2496,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0611",
    "name": "藤椒鸡腿中国堡堡",
    "photo": "bg71",
    "cat": "中国汉堡",
    "desc": "牛肉饼现煎现夹，汁水锁在第一口",
    "price": 14.5,
    "origPrice": 18,
    "rating": 4.6,
    "sales": 456,
    "tags": []
   },
   {
    "id": "p0612",
    "name": "藤椒鸡腿中国堡堡套餐",
    "photo": "bg71",
    "cat": "超值套餐",
    "desc": "含小薯+柠檬红茶，一单到位",
    "price": 25.5,
    "origPrice": 33,
    "rating": 4.9,
    "sales": 1188,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0613",
    "name": "金沙咸蛋黄中国堡堡",
    "photo": "bg72",
    "cat": "中国汉堡",
    "desc": "生菜脆到发出声音，酱汁给得大方",
    "price": 16,
    "origPrice": 20,
    "rating": 4.9,
    "sales": 4846,
    "tags": [
     "满20减4"
    ]
   },
   {
    "id": "p0614",
    "name": "金沙咸蛋黄中国堡堡套餐",
    "photo": "bg72",
    "cat": "超值套餐",
    "desc": "含小薯+柠檬红茶，一单到位",
    "price": 27,
    "origPrice": 35,
    "rating": 4.5,
    "sales": 3605,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0615",
    "name": "现烤堡胚原味味",
    "photo": "ds1",
    "cat": "小食",
    "desc": "刚出炉的堡胚，单吃也香",
    "price": 5,
    "origPrice": 7,
    "rating": 4.7,
    "sales": 2460,
    "tags": []
   },
   {
    "id": "p0616",
    "name": "盐酥鸡鸡",
    "photo": "fried1",
    "cat": "小食",
    "desc": "三角酥脆，馅料给足",
    "price": 12,
    "origPrice": 15,
    "rating": 4.4,
    "sales": 803,
    "tags": []
   },
   {
    "id": "p0617",
    "name": "脆薯条条",
    "photo": "fries1",
    "cat": "小食",
    "desc": "外脆内糯，配蘸水更妙",
    "price": 10,
    "origPrice": 13,
    "rating": 4.8,
    "sales": 1786,
    "tags": [
     "满20减4"
    ]
   },
   {
    "id": "p0618",
    "name": "炸鸡翅翅",
    "photo": "grill5",
    "cat": "小食",
    "desc": "腌足十二小时再上炭火",
    "price": 13,
    "origPrice": 16,
    "rating": 4.5,
    "sales": 965,
    "tags": []
   },
   {
    "id": "p0619",
    "name": "柠檬红茶茶",
    "photo": "drk1",
    "cat": "饮品",
    "desc": "鲜果现切现榨，不加一滴香精",
    "price": 8,
    "origPrice": 10,
    "rating": 4.8,
    "sales": 4699,
    "tags": []
   },
   {
    "id": "p0620",
    "name": "柠檬红茶茶（大杯）",
    "photo": "drk1",
    "cat": "饮品",
    "desc": "喝一口从喉咙凉到天灵盖",
    "price": 11,
    "origPrice": 13,
    "rating": 4.5,
    "sales": 422,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p0621",
    "name": "青柠气泡水水",
    "photo": "drk2",
    "cat": "饮品",
    "desc": "鲜果现切现榨，不加一滴香精",
    "price": 9,
    "origPrice": 11,
    "rating": 4.4,
    "sales": 238,
    "tags": [
     "满20减4"
    ]
   },
   {
    "id": "p0622",
    "name": "青柠气泡水水（大杯）",
    "photo": "drk2",
    "cat": "饮品",
    "desc": "喝一口从喉咙凉到天灵盖",
    "price": 12,
    "origPrice": 14,
    "rating": 4.5,
    "sales": 692,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p0623",
    "name": "墨西哥辣酱堡堡",
    "photo": "bg73",
    "cat": "风味汉堡",
    "desc": "生菜脆到发出声音，酱汁给得大方",
    "price": 18.5,
    "origPrice": 23.5,
    "rating": 4.7,
    "sales": 7553,
    "tags": []
   },
   {
    "id": "p0624",
    "name": "抹茶雪媚娘娘",
    "photo": "dt15",
    "cat": "甜品站",
    "desc": "冷藏后风味更佳",
    "price": 19.5,
    "origPrice": 25,
    "rating": 4.9,
    "sales": 325,
    "tags": []
   },
   {
    "id": "p0625",
    "name": "青花椒风味堡堡",
    "photo": "bg74",
    "cat": "风味汉堡",
    "desc": "一口下去五层风景，纸巾自备",
    "price": 24,
    "origPrice": 30.5,
    "rating": 4.6,
    "sales": 372,
    "tags": []
   },
   {
    "id": "p0626",
    "name": "乳酪蛋糕条条",
    "photo": "dt16",
    "cat": "甜品站",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 11,
    "origPrice": 14,
    "rating": 4.6,
    "sales": 1005,
    "tags": []
   },
   {
    "id": "p0627",
    "name": "烧烤酱手撕堡堡",
    "photo": "bg75",
    "cat": "风味汉堡",
    "desc": "一口下去五层风景，纸巾自备",
    "price": 21.5,
    "origPrice": 27.5,
    "rating": 4.6,
    "sales": 1071,
    "tags": []
   },
   {
    "id": "p0628",
    "name": "芝士条条",
    "photo": "dt17",
    "cat": "甜品站",
    "desc": "下午茶的正确打开方式",
    "price": 35,
    "origPrice": 44.5,
    "rating": 4.7,
    "sales": 3056,
    "tags": []
   },
   {
    "id": "p0629",
    "name": "脆脆鸡排堡堡",
    "photo": "bg76",
    "cat": "风味汉堡",
    "desc": "牛肉饼现煎现夹，汁水锁在第一口",
    "price": 31,
    "origPrice": 40,
    "rating": 4.5,
    "sales": 1617,
    "tags": []
   },
   {
    "id": "p0630",
    "name": "黄油曲奇奇",
    "photo": "dt18",
    "cat": "甜品站",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 20.5,
    "origPrice": 26.5,
    "rating": 4.8,
    "sales": 1296,
    "tags": []
   },
   {
    "id": "p0631",
    "name": "莓果慕斯杯杯",
    "photo": "dt19",
    "cat": "甜品站",
    "desc": "下午茶的正确打开方式",
    "price": 16,
    "origPrice": 20.5,
    "rating": 4.7,
    "sales": 2757,
    "tags": []
   },
   {
    "id": "p0632",
    "name": "经典牛肉堡堡",
    "photo": "bg77",
    "cat": "风味汉堡",
    "desc": "肉饼厚度经过反复较真，扎实不虚",
    "price": 29,
    "origPrice": 37,
    "rating": 4.5,
    "sales": 2067,
    "tags": []
   },
   {
    "id": "p0633",
    "name": "肉桂糖霜卷卷",
    "photo": "dt20",
    "cat": "甜品站",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 12,
    "origPrice": 15,
    "rating": 4.5,
    "sales": 204,
    "tags": []
   },
   {
    "id": "p0634",
    "name": "椰蓉球球",
    "photo": "dt21",
    "cat": "甜品站",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 26,
    "origPrice": 33,
    "rating": 4.5,
    "sales": 7478,
    "tags": []
   },
   {
    "id": "p0635",
    "name": "双层辣牛堡堡",
    "photo": "bg78",
    "cat": "风味汉堡",
    "desc": "肉饼厚度经过反复较真，扎实不虚",
    "price": 27.5,
    "origPrice": 35.5,
    "rating": 4.5,
    "sales": 2778,
    "tags": []
   },
   {
    "id": "p0636",
    "name": "双层安格斯堡堡",
    "photo": "bg79",
    "cat": "风味汉堡",
    "desc": "生菜脆到发出声音，酱汁给得大方",
    "price": 20,
    "origPrice": 26,
    "rating": 4.7,
    "sales": 7616,
    "tags": []
   },
   {
    "id": "p0637",
    "name": "焦糖布丁挞挞",
    "photo": "dt22",
    "cat": "甜品站",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 35,
    "origPrice": 44.5,
    "rating": 4.7,
    "sales": 1401,
    "tags": []
   },
   {
    "id": "p0638",
    "name": "溏心蛋牛堡堡",
    "photo": "bg80",
    "cat": "风味汉堡",
    "desc": "生菜脆到发出声音，酱汁给得大方",
    "price": 26,
    "origPrice": 33,
    "rating": 4.7,
    "sales": 4215,
    "tags": []
   },
   {
    "id": "p0639",
    "name": "杏仁瓦片酥酥",
    "photo": "dt23",
    "cat": "甜品站",
    "desc": "下午茶的正确打开方式",
    "price": 14,
    "origPrice": 18,
    "rating": 4.7,
    "sales": 210,
    "tags": []
   },
   {
    "id": "p0640",
    "name": "洋葱圈牛堡堡",
    "photo": "bg81",
    "cat": "风味汉堡",
    "desc": "一口下去五层风景，纸巾自备",
    "price": 24.5,
    "origPrice": 31,
    "rating": 4.7,
    "sales": 1190,
    "tags": []
   },
   {
    "id": "p0641",
    "name": "车打芝士牛堡堡",
    "photo": "bg82",
    "cat": "风味汉堡",
    "desc": "生菜脆到发出声音，酱汁给得大方",
    "price": 8,
    "origPrice": 10.5,
    "rating": 4.5,
    "sales": 4529,
    "tags": []
   },
   {
    "id": "p0642",
    "name": "海盐芝士卷卷",
    "photo": "dt24",
    "cat": "甜品站",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 34.5,
    "origPrice": 44.5,
    "rating": 4.7,
    "sales": 449,
    "tags": []
   },
   {
    "id": "p0643",
    "name": "双拼双酱堡堡",
    "photo": "bg83",
    "cat": "风味汉堡",
    "desc": "一口下去五层风景，纸巾自备",
    "price": 27.5,
    "origPrice": 35.5,
    "rating": 4.7,
    "sales": 2995,
    "tags": []
   },
   {
    "id": "p0644",
    "name": "巧克力脆脆卷卷",
    "photo": "dt25",
    "cat": "甜品站",
    "desc": "冷藏后风味更佳",
    "price": 9.5,
    "origPrice": 12.5,
    "rating": 4.5,
    "sales": 968,
    "tags": []
   },
   {
    "id": "p0645",
    "name": "重芝士爆浆堡堡",
    "photo": "bg84",
    "cat": "风味汉堡",
    "desc": "肉饼厚度经过反复较真，扎实不虚",
    "price": 13.5,
    "origPrice": 17.5,
    "rating": 4.5,
    "sales": 1324,
    "tags": []
   },
   {
    "id": "p0646",
    "name": "提子燕麦饼饼",
    "photo": "dt26",
    "cat": "甜品站",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 18.5,
    "origPrice": 24,
    "rating": 4.7,
    "sales": 688,
    "tags": []
   }
  ]
 },
 {
  "id": "s07",
  "name": "必胜胜客",
  "category": "pizza",
  "logo": "🍕",
  "brand": "必胜胜客（必胜客风）",
  "rating": 4.9,
  "monthlySales": 12034,
  "deliveryMin": 25,
  "deliveryFee": 3,
  "minOrder": 15,
  "distanceKm": 0.9,
  "notice": "手工现擀饼底，芝士给到拉丝一米不断（大概）。今日窑炉状态极佳。",
  "promos": [
   "满20减3",
   "两个9折"
  ],
  "photo": "pzt4",
  "products": [
   {
    "id": "p0701",
    "name": "玛格丽特经典披萨萨",
    "photo": "pz1",
    "cat": "经典披萨",
    "desc": "番茄罗勒马苏里拉，简单到极致就是经典",
    "price": 19,
    "origPrice": 25,
    "rating": 4.5,
    "sales": 1018,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p0702",
    "name": "超级至尊披萨萨",
    "photo": "pz2",
    "cat": "经典披萨",
    "desc": "料铺得看不见饼底，主打一个诚意",
    "price": 39,
    "origPrice": 49,
    "rating": 4.9,
    "sales": 1525,
    "tags": []
   },
   {
    "id": "p0703",
    "name": "超级至尊披萨萨套餐",
    "photo": "pz2",
    "cat": "超值套餐",
    "desc": "含小食拼盘+两杯可乐，一单到位",
    "price": 50,
    "origPrice": 64,
    "rating": 4.7,
    "sales": 2134,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0704",
    "name": "新奥尔良烤鸡披萨萨",
    "photo": "pz3",
    "cat": "经典披萨",
    "desc": "料铺得看不见饼底，主打一个诚意",
    "price": 35,
    "origPrice": 44,
    "rating": 4.5,
    "sales": 1135,
    "tags": []
   },
   {
    "id": "p0705",
    "name": "夏威夷风情披萨萨",
    "photo": "pz4",
    "cat": "经典披萨",
    "desc": "料铺得看不见饼底，主打一个诚意",
    "price": 33,
    "origPrice": 41,
    "rating": 4.9,
    "sales": 4389,
    "tags": [
     "满20减3"
    ]
   },
   {
    "id": "p0706",
    "name": "黑椒牛柳披萨萨",
    "photo": "pz5",
    "cat": "经典披萨",
    "desc": "出炉即打包，到手还是烫的",
    "price": 37,
    "origPrice": 46,
    "rating": 4.4,
    "sales": 5369,
    "tags": []
   },
   {
    "id": "p0707",
    "name": "海鲜至尊披萨萨",
    "photo": "pz6",
    "cat": "经典披萨",
    "desc": "出炉即打包，到手还是烫的",
    "price": 42,
    "origPrice": 52,
    "rating": 4.9,
    "sales": 2070,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p0708",
    "name": "榴莲多多披萨萨",
    "photo": "pz7",
    "cat": "风味披萨",
    "desc": "榴莲爱好者的天堂，反对无效",
    "price": 39,
    "origPrice": 48,
    "rating": 4.6,
    "sales": 555,
    "tags": [
     "满20减3"
    ]
   },
   {
    "id": "p0709",
    "name": "芝心拉丝披萨萨",
    "photo": "pzt1",
    "cat": "风味披萨",
    "desc": "饼边藏着一整圈芝士，最后一口才是高潮",
    "price": 29,
    "origPrice": 36,
    "rating": 4.7,
    "sales": 366,
    "tags": []
   },
   {
    "id": "p0710",
    "name": "川香麻辣牛肉披萨萨",
    "photo": "pzt2",
    "cat": "风味披萨",
    "desc": "芝士拉丝一米不断（大概）",
    "price": 36,
    "origPrice": 45,
    "rating": 4.9,
    "sales": 1650,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p0711",
    "name": "培根薄脆披萨萨",
    "photo": "pzt5",
    "cat": "风味披萨",
    "desc": "窑炉高温快烤，锅气十足",
    "price": 27,
    "origPrice": 34,
    "rating": 4.7,
    "sales": 550,
    "tags": [
     "满20减3"
    ]
   },
   {
    "id": "p0712",
    "name": "铁盘更多肉肉披萨萨",
    "photo": "pzt6",
    "cat": "风味披萨",
    "desc": "窑炉高温快烤，锅气十足",
    "price": 38,
    "origPrice": 47,
    "rating": 4.5,
    "sales": 247,
    "tags": []
   },
   {
    "id": "p0713",
    "name": "肉酱意面面",
    "photo": "ps1",
    "cat": "意面焗饭",
    "desc": "橄榄油香气扑鼻，罗勒点睛",
    "price": 26,
    "origPrice": 32,
    "rating": 4.6,
    "sales": 1593,
    "tags": []
   },
   {
    "id": "p0714",
    "name": "奶油培根意面面",
    "photo": "ps2",
    "cat": "意面焗饭",
    "desc": "面条煮到 al dente 的倔强",
    "price": 27,
    "origPrice": 33,
    "rating": 4.6,
    "sales": 504,
    "tags": [
     "满20减3"
    ]
   },
   {
    "id": "p0715",
    "name": "海鲜焗意面面",
    "photo": "ps3",
    "cat": "意面焗饭",
    "desc": "酱汁当天现熬，裹面均匀",
    "price": 30,
    "origPrice": 37,
    "rating": 4.6,
    "sales": 252,
    "tags": []
   },
   {
    "id": "p0716",
    "name": "芝士焗饭饭",
    "photo": "rc1",
    "cat": "意面焗饭",
    "desc": "配汤免费续（并不能）",
    "price": 24,
    "origPrice": 30,
    "rating": 4.5,
    "sales": 1021,
    "tags": []
   },
   {
    "id": "p0717",
    "name": "黄金炸虾虾",
    "photo": "fried2",
    "cat": "小食",
    "desc": "酥皮现包现炸，咬开小心烫",
    "price": 18,
    "origPrice": 23,
    "rating": 4.8,
    "sales": 3712,
    "tags": [
     "满20减3"
    ]
   },
   {
    "id": "p0718",
    "name": "新奥尔良烤翅翅",
    "photo": "grill8",
    "cat": "小食",
    "desc": "趁热撸串，凉了味道减半",
    "price": 16,
    "origPrice": 20,
    "rating": 4.7,
    "sales": 3731,
    "tags": []
   },
   {
    "id": "p0719",
    "name": "田园蔬菜沙拉拉",
    "photo": "sal2",
    "cat": "小食",
    "desc": "爽脆时蔬配油醋汁",
    "price": 15,
    "origPrice": 19,
    "rating": 4.4,
    "sales": 4323,
    "tags": []
   },
   {
    "id": "p0720",
    "name": "提拉米苏苏",
    "photo": "cake2",
    "cat": "甜品饮品",
    "desc": "一层一层都是心思",
    "price": 19,
    "origPrice": 24,
    "rating": 4.4,
    "sales": 3814,
    "tags": [
     "满20减3"
    ]
   },
   {
    "id": "p0721",
    "name": "熔岩巧克力蛋糕糕",
    "photo": "des3",
    "cat": "甜品饮品",
    "desc": "拍照五秒内请尽快食用",
    "price": 21,
    "origPrice": 26,
    "rating": 4.8,
    "sales": 5013,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p0722",
    "name": "冰爽可乐乐",
    "photo": "bev1",
    "cat": "甜品饮品",
    "desc": "喝一口从喉咙凉到天灵盖",
    "price": 9,
    "origPrice": 11,
    "rating": 4.4,
    "sales": 1239,
    "tags": []
   },
   {
    "id": "p0723",
    "name": "冰爽可乐乐（大杯）",
    "photo": "bev1",
    "cat": "甜品饮品",
    "desc": "喝一口从喉咙凉到天灵盖",
    "price": 12,
    "origPrice": 14,
    "rating": 4.9,
    "sales": 3018,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p0724",
    "name": "缤纷果饮饮",
    "photo": "jc8",
    "cat": "甜品饮品",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 13,
    "origPrice": 16,
    "rating": 4.8,
    "sales": 629,
    "tags": [
     "满20减3"
    ]
   },
   {
    "id": "p0725",
    "name": "黑松露菌菇披萨萨",
    "photo": "pz8",
    "cat": "风味披萨",
    "desc": "窑炉高温快烤，锅气十足",
    "price": 30,
    "origPrice": 38,
    "rating": 4.8,
    "sales": 285,
    "tags": []
   },
   {
    "id": "p0726",
    "name": "鸡肉芝士意面面",
    "photo": "ps4",
    "cat": "意面工坊",
    "desc": "面条煮到 al dente 的倔强",
    "price": 20,
    "origPrice": 25.5,
    "rating": 4.7,
    "sales": 2769,
    "tags": []
   },
   {
    "id": "p0727",
    "name": "双倍芝士披萨萨",
    "photo": "pz9",
    "cat": "风味披萨",
    "desc": "饼底手工现擀，边缘微焦带麦香",
    "price": 29.5,
    "origPrice": 38,
    "rating": 4.6,
    "sales": 4770,
    "tags": []
   },
   {
    "id": "p0728",
    "name": "奶油蘑菇意面面",
    "photo": "ps5",
    "cat": "意面工坊",
    "desc": "意大利人看了都点头的火候",
    "price": 9,
    "origPrice": 11.5,
    "rating": 4.8,
    "sales": 936,
    "tags": []
   },
   {
    "id": "p0729",
    "name": "芝士流心披萨萨",
    "photo": "pz10",
    "cat": "风味披萨",
    "desc": "窑炉高温快烤，锅气十足",
    "price": 28,
    "origPrice": 36,
    "rating": 4.8,
    "sales": 3726,
    "tags": []
   },
   {
    "id": "p0730",
    "name": "蜂蜜厚芝士披萨萨",
    "photo": "pz11",
    "cat": "风味披萨",
    "desc": "饼底手工现擀，边缘微焦带麦香",
    "price": 18.5,
    "origPrice": 23.5,
    "rating": 4.5,
    "sales": 6576,
    "tags": []
   },
   {
    "id": "p0731",
    "name": "双层重肉披萨萨",
    "photo": "pz12",
    "cat": "风味披萨",
    "desc": "芝士拉丝一米不断（大概）",
    "price": 28,
    "origPrice": 36,
    "rating": 4.4,
    "sales": 2598,
    "tags": []
   },
   {
    "id": "p0732",
    "name": "海鲜青酱意面面",
    "photo": "ps6",
    "cat": "意面工坊",
    "desc": "酱汁当天现熬，裹面均匀",
    "price": 9.5,
    "origPrice": 12.5,
    "rating": 4.4,
    "sales": 604,
    "tags": []
   },
   {
    "id": "p0733",
    "name": "辣味番茄意面面",
    "photo": "ps7",
    "cat": "意面工坊",
    "desc": "面条煮到 al dente 的倔强",
    "price": 28.5,
    "origPrice": 36.5,
    "rating": 4.5,
    "sales": 2280,
    "tags": []
   },
   {
    "id": "p0734",
    "name": "藤椒鸡披萨萨",
    "photo": "pz13",
    "cat": "风味披萨",
    "desc": "窑炉高温快烤，锅气十足",
    "price": 28.5,
    "origPrice": 36.5,
    "rating": 4.4,
    "sales": 7614,
    "tags": []
   },
   {
    "id": "p0735",
    "name": "蒜辣橄榄油意面面",
    "photo": "ps8",
    "cat": "意面工坊",
    "desc": "橄榄油香气扑鼻，罗勒点睛",
    "price": 28.5,
    "origPrice": 36.5,
    "rating": 4.6,
    "sales": 1484,
    "tags": []
   },
   {
    "id": "p0736",
    "name": "至尊全家福披萨萨",
    "photo": "pz14",
    "cat": "风味披萨",
    "desc": "出炉即打包，到手还是烫的",
    "price": 8,
    "origPrice": 10.5,
    "rating": 4.6,
    "sales": 1538,
    "tags": []
   },
   {
    "id": "p0737",
    "name": "黑椒牛柳意面面",
    "photo": "ps9",
    "cat": "意面工坊",
    "desc": "面条煮到 al dente 的倔强",
    "price": 26.5,
    "origPrice": 34,
    "rating": 4.5,
    "sales": 1700,
    "tags": []
   },
   {
    "id": "p0738",
    "name": "玛格丽特薄底萨萨",
    "photo": "pz15",
    "cat": "风味披萨",
    "desc": "芝士拉丝一米不断（大概）",
    "price": 15.5,
    "origPrice": 20,
    "rating": 4.7,
    "sales": 797,
    "tags": []
   },
   {
    "id": "p0739",
    "name": "培根蛋黄意面面",
    "photo": "ps10",
    "cat": "意面工坊",
    "desc": "意大利人看了都点头的火候",
    "price": 37.5,
    "origPrice": 48.5,
    "rating": 4.5,
    "sales": 933,
    "tags": []
   },
   {
    "id": "p0740",
    "name": "意式辣肠披萨萨",
    "photo": "pz16",
    "cat": "风味披萨",
    "desc": "出炉即打包，到手还是烫的",
    "price": 12,
    "origPrice": 15.5,
    "rating": 4.4,
    "sales": 962,
    "tags": []
   },
   {
    "id": "p0741",
    "name": "帕玛森火腿披萨萨",
    "photo": "pz17",
    "cat": "风味披萨",
    "desc": "料铺得看不见饼底，主打一个诚意",
    "price": 23.5,
    "origPrice": 30,
    "rating": 4.6,
    "sales": 2023,
    "tags": []
   },
   {
    "id": "p0742",
    "name": "田园时蔬披萨萨",
    "photo": "pz18",
    "cat": "风味披萨",
    "desc": "窑炉高温快烤，锅气十足",
    "price": 26,
    "origPrice": 33.5,
    "rating": 4.8,
    "sales": 2183,
    "tags": []
   }
  ]
 },
 {
  "id": "s08",
  "name": "达美乐乐",
  "category": "pizza",
  "logo": "🛵",
  "brand": "达美乐乐（达美乐风）",
  "rating": 4.7,
  "monthlySales": 8420,
  "deliveryMin": 22,
  "deliveryFee": 3.5,
  "minOrder": 20,
  "distanceKm": 1.3,
  "notice": "三十分钟必达的传说仍在继续，晚到送披萨券（本店说了算）。",
  "promos": [
   "满30减6"
  ],
  "photo": "pz41",
  "products": [
   {
    "id": "p0801",
    "name": "经典芝士披萨萨",
    "photo": "pz19",
    "cat": "招牌披萨",
    "desc": "三十分钟送达的芝士拉丝",
    "price": 25,
    "origPrice": 32,
    "rating": 4.7,
    "sales": 1771,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p0802",
    "name": "经典芝士披萨萨套餐",
    "photo": "pz19",
    "cat": "超值套餐",
    "desc": "含烤翅五块+可乐，一单到位",
    "price": 36,
    "origPrice": 47,
    "rating": 4.6,
    "sales": 453,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0803",
    "name": "超级豪华披萨萨",
    "photo": "pz20",
    "cat": "招牌披萨",
    "desc": "出炉即打包，到手还是烫的",
    "price": 41,
    "origPrice": 51,
    "rating": 4.6,
    "sales": 2914,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p0804",
    "name": "超级豪华披萨萨套餐",
    "photo": "pz20",
    "cat": "超值套餐",
    "desc": "含烤翅五块+可乐，一单到位",
    "price": 52,
    "origPrice": 66,
    "rating": 4.5,
    "sales": 1855,
    "tags": [
     "套餐"
    ]
   },
   {
    "id": "p0805",
    "name": "美式辣肠披萨萨",
    "photo": "pz21",
    "cat": "招牌披萨",
    "desc": "料铺得看不见饼底，主打一个诚意",
    "price": 33,
    "origPrice": 41,
    "rating": 4.8,
    "sales": 5191,
    "tags": []
   },
   {
    "id": "p0806",
    "name": "烧烤鸡肉披萨萨",
    "photo": "pz22",
    "cat": "招牌披萨",
    "desc": "芝士拉丝一米不断（大概）",
    "price": 34,
    "origPrice": 42,
    "rating": 4.7,
    "sales": 1128,
    "tags": [
     "满30减6"
    ]
   },
   {
    "id": "p0807",
    "name": "芝士乐翻天披萨萨",
    "photo": "pz23",
    "cat": "招牌披萨",
    "desc": "出炉即打包，到手还是烫的",
    "price": 36,
    "origPrice": 45,
    "rating": 4.6,
    "sales": 1207,
    "tags": []
   },
   {
    "id": "p0808",
    "name": "菠萝培根披萨萨",
    "photo": "pz24",
    "cat": "招牌披萨",
    "desc": "芝士拉丝一米不断（大概）",
    "price": 32,
    "origPrice": 40,
    "rating": 4.9,
    "sales": 274,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p0809",
    "name": "双拼半半披萨萨",
    "photo": "pzt7",
    "cat": "招牌披萨",
    "desc": "一半海鲜一半肉肉，选择困难症的最优解",
    "price": 38,
    "origPrice": 47,
    "rating": 4.6,
    "sales": 2748,
    "tags": [
     "满30减6"
    ]
   },
   {
    "id": "p0810",
    "name": "薄脆玛格丽特特",
    "photo": "pz25",
    "cat": "招牌披萨",
    "desc": "饼底手工现擀，边缘微焦带麦香",
    "price": 26,
    "origPrice": 33,
    "rating": 4.6,
    "sales": 2425,
    "tags": []
   },
   {
    "id": "p0811",
    "name": "香蒜面包条条",
    "photo": "bread",
    "cat": "小食",
    "desc": "外卖也不将就，包装扎实",
    "price": 12,
    "origPrice": 15,
    "rating": 4.5,
    "sales": 998,
    "tags": []
   },
   {
    "id": "p0812",
    "name": "奥尔良烤翅翅（五块）",
    "photo": "grill8",
    "cat": "小食",
    "desc": "趁热撸串，凉了味道减半",
    "price": 19,
    "origPrice": 24,
    "rating": 4.5,
    "sales": 2482,
    "tags": [
     "满30减6"
    ]
   },
   {
    "id": "p0813",
    "name": "脆薯格格",
    "photo": "fries2",
    "cat": "小食",
    "desc": "外脆内糯，配蘸水更妙",
    "price": 10,
    "origPrice": 13,
    "rating": 4.4,
    "sales": 1084,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p0814",
    "name": "凯撒沙拉拉",
    "photo": "sal1",
    "cat": "小食",
    "desc": "爽脆时蔬配油醋汁",
    "price": 16,
    "origPrice": 20,
    "rating": 4.4,
    "sales": 364,
    "tags": []
   },
   {
    "id": "p0815",
    "name": "冰可乐乐",
    "photo": "bev1",
    "cat": "饮品",
    "desc": "喝一口从喉咙凉到天灵盖",
    "price": 8,
    "origPrice": 10,
    "rating": 4.4,
    "sales": 2542,
    "tags": [
     "满30减6"
    ]
   },
   {
    "id": "p0816",
    "name": "冰可乐乐（大杯）",
    "photo": "bev1",
    "cat": "饮品",
    "desc": "冰块加到怀疑人生，解暑一流",
    "price": 11,
    "origPrice": 13,
    "rating": 4.5,
    "sales": 356,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p0817",
    "name": "橙橙气泡饮饮",
    "photo": "drk3",
    "cat": "饮品",
    "desc": "冰块加到怀疑人生，解暑一流",
    "price": 12,
    "origPrice": 15,
    "rating": 4.7,
    "sales": 2419,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p0818",
    "name": "黑松露菌菇披萨萨",
    "photo": "pz26",
    "cat": "风味披萨",
    "desc": "窑炉高温快烤，锅气十足",
    "price": 27,
    "origPrice": 35,
    "rating": 4.9,
    "sales": 285,
    "tags": []
   },
   {
    "id": "p0819",
    "name": "黑椒牛柳意面面",
    "photo": "ps11",
    "cat": "意面工坊",
    "desc": "酱汁当天现熬，裹面均匀",
    "price": 32.5,
    "origPrice": 41.5,
    "rating": 4.7,
    "sales": 4400,
    "tags": []
   },
   {
    "id": "p0820",
    "name": "川辣毛肚披萨萨",
    "photo": "pz27",
    "cat": "风味披萨",
    "desc": "出炉即打包，到手还是烫的",
    "price": 34.5,
    "origPrice": 44,
    "rating": 4.9,
    "sales": 320,
    "tags": []
   },
   {
    "id": "p0821",
    "name": "海鲜青酱意面面",
    "photo": "ps12",
    "cat": "意面工坊",
    "desc": "酱汁当天现熬，裹面均匀",
    "price": 12.5,
    "origPrice": 16,
    "rating": 4.6,
    "sales": 437,
    "tags": []
   },
   {
    "id": "p0822",
    "name": "奥尔良鸡肉披萨萨",
    "photo": "pz28",
    "cat": "风味披萨",
    "desc": "出炉即打包，到手还是烫的",
    "price": 37,
    "origPrice": 47.5,
    "rating": 4.9,
    "sales": 5062,
    "tags": []
   },
   {
    "id": "p0823",
    "name": "培根蛋黄意面面",
    "photo": "ps13",
    "cat": "意面工坊",
    "desc": "意大利人看了都点头的火候",
    "price": 28,
    "origPrice": 35.5,
    "rating": 4.6,
    "sales": 3618,
    "tags": []
   },
   {
    "id": "p0824",
    "name": "辣味番茄意面面",
    "photo": "ps14",
    "cat": "意面工坊",
    "desc": "橄榄油香气扑鼻，罗勒点睛",
    "price": 8.5,
    "origPrice": 11,
    "rating": 4.5,
    "sales": 694,
    "tags": []
   },
   {
    "id": "p0825",
    "name": "玛格丽特薄底萨萨",
    "photo": "pz29",
    "cat": "风味披萨",
    "desc": "芝士拉丝一米不断（大概）",
    "price": 17,
    "origPrice": 21.5,
    "rating": 4.5,
    "sales": 211,
    "tags": []
   },
   {
    "id": "p0826",
    "name": "双层重肉披萨萨",
    "photo": "pz30",
    "cat": "风味披萨",
    "desc": "芝士拉丝一米不断（大概）",
    "price": 17.5,
    "origPrice": 22.5,
    "rating": 4.9,
    "sales": 4002,
    "tags": []
   },
   {
    "id": "p0827",
    "name": "蒜辣橄榄油意面面",
    "photo": "ps15",
    "cat": "意面工坊",
    "desc": "酱汁当天现熬，裹面均匀",
    "price": 36,
    "origPrice": 46,
    "rating": 4.4,
    "sales": 523,
    "tags": []
   },
   {
    "id": "p0828",
    "name": "榴莲芝士披萨萨",
    "photo": "pz31",
    "cat": "风味披萨",
    "desc": "出炉即打包，到手还是烫的",
    "price": 17.5,
    "origPrice": 22.5,
    "rating": 4.9,
    "sales": 842,
    "tags": []
   },
   {
    "id": "p0829",
    "name": "罗勒松子意面面",
    "photo": "ps16",
    "cat": "意面工坊",
    "desc": "意大利人看了都点头的火候",
    "price": 32.5,
    "origPrice": 41.5,
    "rating": 4.5,
    "sales": 8164,
    "tags": []
   },
   {
    "id": "p0830",
    "name": "烧烤牛肉披萨萨",
    "photo": "pz32",
    "cat": "风味披萨",
    "desc": "料铺得看不见饼底，主打一个诚意",
    "price": 21,
    "origPrice": 26.5,
    "rating": 4.7,
    "sales": 953,
    "tags": []
   },
   {
    "id": "p0831",
    "name": "番茄罗勒意面面",
    "photo": "ps17",
    "cat": "意面工坊",
    "desc": "面条煮到 al dente 的倔强",
    "price": 14.5,
    "origPrice": 18.5,
    "rating": 4.6,
    "sales": 298,
    "tags": []
   },
   {
    "id": "p0832",
    "name": "双倍芝士披萨萨",
    "photo": "pz33",
    "cat": "风味披萨",
    "desc": "芝士拉丝一米不断（大概）",
    "price": 30,
    "origPrice": 38,
    "rating": 4.7,
    "sales": 2847,
    "tags": []
   },
   {
    "id": "p0833",
    "name": "蜂蜜厚芝士披萨萨",
    "photo": "pz34",
    "cat": "风味披萨",
    "desc": "窑炉高温快烤，锅气十足",
    "price": 8.5,
    "origPrice": 11,
    "rating": 4.5,
    "sales": 1886,
    "tags": []
   },
   {
    "id": "p0834",
    "name": "至尊全家福披萨萨",
    "photo": "pz35",
    "cat": "风味披萨",
    "desc": "窑炉高温快烤，锅气十足",
    "price": 24.5,
    "origPrice": 31.5,
    "rating": 4.6,
    "sales": 940,
    "tags": []
   },
   {
    "id": "p0835",
    "name": "明太子奶油意面面",
    "photo": "ps18",
    "cat": "意面工坊",
    "desc": "面条煮到 al dente 的倔强",
    "price": 30.5,
    "origPrice": 38.5,
    "rating": 4.8,
    "sales": 2247,
    "tags": []
   },
   {
    "id": "p0836",
    "name": "罗勒鲜虾披萨萨",
    "photo": "pz36",
    "cat": "风味披萨",
    "desc": "饼底手工现擀，边缘微焦带麦香",
    "price": 35.5,
    "origPrice": 45.5,
    "rating": 4.7,
    "sales": 609,
    "tags": []
   },
   {
    "id": "p0837",
    "name": "烤菌菇披萨萨",
    "photo": "pz37",
    "cat": "风味披萨",
    "desc": "料铺得看不见饼底，主打一个诚意",
    "price": 18,
    "origPrice": 23,
    "rating": 4.7,
    "sales": 4872,
    "tags": []
   },
   {
    "id": "p0838",
    "name": "培根玉米披萨萨",
    "photo": "pz38",
    "cat": "风味披萨",
    "desc": "出炉即打包，到手还是烫的",
    "price": 29.5,
    "origPrice": 38,
    "rating": 4.4,
    "sales": 2998,
    "tags": []
   },
   {
    "id": "p0839",
    "name": "田园时蔬披萨萨",
    "photo": "pz39",
    "cat": "风味披萨",
    "desc": "饼底手工现擀，边缘微焦带麦香",
    "price": 17.5,
    "origPrice": 22.5,
    "rating": 4.6,
    "sales": 2393,
    "tags": []
   },
   {
    "id": "p0840",
    "name": "奶油蘑菇意面面",
    "photo": "ps19",
    "cat": "意面工坊",
    "desc": "酱汁当天现熬，裹面均匀",
    "price": 26,
    "origPrice": 33.5,
    "rating": 4.9,
    "sales": 1972,
    "tags": []
   },
   {
    "id": "p0841",
    "name": "芝士流心披萨萨",
    "photo": "pz40",
    "cat": "风味披萨",
    "desc": "芝士拉丝一米不断（大概）",
    "price": 18,
    "origPrice": 23,
    "rating": 4.5,
    "sales": 207,
    "tags": []
   },
   {
    "id": "p0842",
    "name": "鸡肉芝士意面面",
    "photo": "ps20",
    "cat": "意面工坊",
    "desc": "橄榄油香气扑鼻，罗勒点睛",
    "price": 17.5,
    "origPrice": 22,
    "rating": 4.6,
    "sales": 976,
    "tags": []
   }
  ]
 },
 {
  "id": "s09",
  "name": "萨莉亚亚",
  "category": "pizza",
  "logo": "🍝",
  "brand": "萨莉亚亚（萨莉亚风）",
  "rating": 4.6,
  "monthlySales": 11200,
  "deliveryMin": 28,
  "deliveryFee": 2.5,
  "minOrder": 15,
  "distanceKm": 1.1,
  "notice": "意式平价食堂，十几块吃到意面披萨，穷开心也是开心。",
  "promos": [
   "满25减4"
  ],
  "photo": "ps1",
  "products": [
   {
    "id": "p0901",
    "name": "番茄肉酱意面面",
    "photo": "ps21",
    "cat": "意面",
    "desc": "十四块的意大利，性价比出国游",
    "price": 14,
    "origPrice": 18,
    "rating": 4.4,
    "sales": 5265,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p0902",
    "name": "奶油培根意面面",
    "photo": "ps22",
    "cat": "意面",
    "desc": "意大利人看了都点头的火候",
    "price": 15,
    "origPrice": 19,
    "rating": 4.7,
    "sales": 1878,
    "tags": []
   },
   {
    "id": "p0903",
    "name": "海鲜墨鱼意面面",
    "photo": "ps23",
    "cat": "意面",
    "desc": "面条煮到 al dente 的倔强",
    "price": 18,
    "origPrice": 23,
    "rating": 4.6,
    "sales": 559,
    "tags": []
   },
   {
    "id": "p0904",
    "name": "蒜香辣味意面面",
    "photo": "ps24",
    "cat": "意面",
    "desc": "酱汁当天现熬，裹面均匀",
    "price": 13,
    "origPrice": 17,
    "rating": 4.5,
    "sales": 4422,
    "tags": [
     "满25减4"
    ]
   },
   {
    "id": "p0905",
    "name": "青酱鸡肉意面面",
    "photo": "ps25",
    "cat": "意面",
    "desc": "面条煮到 al dente 的倔强",
    "price": 16,
    "origPrice": 20,
    "rating": 4.9,
    "sales": 287,
    "tags": []
   },
   {
    "id": "p0906",
    "name": "焗烤千层面面",
    "photo": "lasagna",
    "cat": "意面",
    "desc": "外卖也不将就，包装扎实",
    "price": 17,
    "origPrice": 21,
    "rating": 4.9,
    "sales": 4419,
    "tags": []
   },
   {
    "id": "p0907",
    "name": "玛格丽特披萨萨",
    "photo": "pz42",
    "cat": "披萨焗饭",
    "desc": "饼底手工现擀，边缘微焦带麦香",
    "price": 16,
    "origPrice": 20,
    "rating": 4.8,
    "sales": 2606,
    "tags": [
     "满25减4"
    ]
   },
   {
    "id": "p0908",
    "name": "风味小披萨萨",
    "photo": "pzt2",
    "cat": "披萨焗饭",
    "desc": "料铺得看不见饼底，主打一个诚意",
    "price": 12,
    "origPrice": 15,
    "rating": 4.8,
    "sales": 1091,
    "tags": []
   },
   {
    "id": "p0909",
    "name": "芝士海鲜焗饭饭",
    "photo": "rc2",
    "cat": "披萨焗饭",
    "desc": "大火快炒，锅气是灵魂",
    "price": 18,
    "origPrice": 22,
    "rating": 4.5,
    "sales": 5118,
    "tags": []
   },
   {
    "id": "p0910",
    "name": "米兰风焗饭饭",
    "photo": "rc3",
    "cat": "披萨焗饭",
    "desc": "大火快炒，锅气是灵魂",
    "price": 16,
    "origPrice": 20,
    "rating": 4.6,
    "sales": 4313,
    "tags": [
     "满25减4"
    ]
   },
   {
    "id": "p0911",
    "name": "意式蔬菜汤汤",
    "photo": "soup3",
    "cat": "汤品沙拉",
    "desc": "炖足八小时，浓稠挂勺",
    "price": 8,
    "origPrice": 10,
    "rating": 4.5,
    "sales": 3722,
    "tags": []
   },
   {
    "id": "p0912",
    "name": "玉米浓汤汤",
    "photo": "soup2",
    "cat": "汤品沙拉",
    "desc": "暖胃暖心，一碗见底",
    "price": 7,
    "origPrice": 9,
    "rating": 4.7,
    "sales": 539,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p0913",
    "name": "田园沙拉拉",
    "photo": "sal3",
    "cat": "汤品沙拉",
    "desc": "爽脆时蔬配油醋汁",
    "price": 9,
    "origPrice": 12,
    "rating": 4.6,
    "sales": 281,
    "tags": [
     "满25减4"
    ]
   },
   {
    "id": "p0914",
    "name": "意式烤鸡沙拉拉",
    "photo": "sal5",
    "cat": "汤品沙拉",
    "desc": "拍完照记得趁新鲜吃",
    "price": 13,
    "origPrice": 16,
    "rating": 4.8,
    "sales": 2293,
    "tags": []
   },
   {
    "id": "p0915",
    "name": "提拉米苏苏",
    "photo": "cake2",
    "cat": "甜品饮品",
    "desc": "一层一层都是心思",
    "price": 12,
    "origPrice": 15,
    "rating": 4.5,
    "sales": 3857,
    "tags": []
   },
   {
    "id": "p0916",
    "name": "香草冰淇淋淋",
    "photo": "des4",
    "cat": "甜品饮品",
    "desc": "甜品胃是另一个胃",
    "price": 6,
    "origPrice": 8,
    "rating": 4.8,
    "sales": 1226,
    "tags": [
     "满25减4"
    ]
   },
   {
    "id": "p0917",
    "name": "葡萄柚气泡饮饮",
    "photo": "jc8",
    "cat": "甜品饮品",
    "desc": "冷压锁鲜，果肉打到细腻",
    "price": 8,
    "origPrice": 10,
    "rating": 4.6,
    "sales": 1623,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p0918",
    "name": "葡萄柚气泡饮饮（大杯）",
    "photo": "jc8",
    "cat": "甜品饮品",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 11,
    "origPrice": 13,
    "rating": 4.8,
    "sales": 288,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p0919",
    "name": "黑松露菌菇披萨萨",
    "photo": "pz43",
    "cat": "风味披萨",
    "desc": "料铺得看不见饼底，主打一个诚意",
    "price": 30,
    "origPrice": 38.5,
    "rating": 4.7,
    "sales": 7419,
    "tags": []
   },
   {
    "id": "p0920",
    "name": "罗勒松子意面面",
    "photo": "ps26",
    "cat": "意面工坊",
    "desc": "面条煮到 al dente 的倔强",
    "price": 37,
    "origPrice": 47.5,
    "rating": 4.5,
    "sales": 2010,
    "tags": []
   },
   {
    "id": "p0921",
    "name": "罗勒鲜虾披萨萨",
    "photo": "pz44",
    "cat": "风味披萨",
    "desc": "饼底手工现擀，边缘微焦带麦香",
    "price": 20,
    "origPrice": 25.5,
    "rating": 4.7,
    "sales": 4621,
    "tags": []
   },
   {
    "id": "p0922",
    "name": "明太子奶油意面面",
    "photo": "ps27",
    "cat": "意面工坊",
    "desc": "面条煮到 al dente 的倔强",
    "price": 19.5,
    "origPrice": 25,
    "rating": 4.6,
    "sales": 1040,
    "tags": []
   },
   {
    "id": "p0923",
    "name": "双倍芝士披萨萨",
    "photo": "pz45",
    "cat": "风味披萨",
    "desc": "料铺得看不见饼底，主打一个诚意",
    "price": 15.5,
    "origPrice": 20,
    "rating": 4.9,
    "sales": 1469,
    "tags": []
   },
   {
    "id": "p0924",
    "name": "鸡肉芝士意面面",
    "photo": "ps28",
    "cat": "意面工坊",
    "desc": "面条煮到 al dente 的倔强",
    "price": 18,
    "origPrice": 23,
    "rating": 4.6,
    "sales": 466,
    "tags": []
   },
   {
    "id": "p0925",
    "name": "川辣毛肚披萨萨",
    "photo": "pz46",
    "cat": "风味披萨",
    "desc": "出炉即打包，到手还是烫的",
    "price": 36.5,
    "origPrice": 47,
    "rating": 4.5,
    "sales": 1387,
    "tags": []
   },
   {
    "id": "p0926",
    "name": "番茄罗勒意面面",
    "photo": "ps29",
    "cat": "意面工坊",
    "desc": "酱汁当天现熬，裹面均匀",
    "price": 21.5,
    "origPrice": 28,
    "rating": 4.8,
    "sales": 7530,
    "tags": []
   },
   {
    "id": "p0927",
    "name": "培根玉米披萨萨",
    "photo": "pz47",
    "cat": "风味披萨",
    "desc": "饼底手工现擀，边缘微焦带麦香",
    "price": 13,
    "origPrice": 17,
    "rating": 4.5,
    "sales": 3225,
    "tags": []
   },
   {
    "id": "p0928",
    "name": "奥尔良鸡肉披萨萨",
    "photo": "pz48",
    "cat": "风味披萨",
    "desc": "窑炉高温快烤，锅气十足",
    "price": 34,
    "origPrice": 43,
    "rating": 4.6,
    "sales": 201,
    "tags": []
   },
   {
    "id": "p0929",
    "name": "辣味番茄意面面",
    "photo": "ps30",
    "cat": "意面工坊",
    "desc": "酱汁当天现熬，裹面均匀",
    "price": 9.5,
    "origPrice": 12,
    "rating": 4.7,
    "sales": 4114,
    "tags": []
   },
   {
    "id": "p0930",
    "name": "至尊全家福披萨萨",
    "photo": "pz49",
    "cat": "风味披萨",
    "desc": "窑炉高温快烤，锅气十足",
    "price": 8,
    "origPrice": 10.5,
    "rating": 4.8,
    "sales": 5971,
    "tags": []
   },
   {
    "id": "p0931",
    "name": "烧烤牛肉披萨萨",
    "photo": "pz50",
    "cat": "风味披萨",
    "desc": "窑炉高温快烤，锅气十足",
    "price": 32,
    "origPrice": 40.5,
    "rating": 4.7,
    "sales": 5002,
    "tags": []
   },
   {
    "id": "p0932",
    "name": "奶油蘑菇意面面",
    "photo": "ps31",
    "cat": "意面工坊",
    "desc": "酱汁当天现熬，裹面均匀",
    "price": 30.5,
    "origPrice": 39,
    "rating": 4.7,
    "sales": 2878,
    "tags": []
   },
   {
    "id": "p0933",
    "name": "意式辣肠披萨萨",
    "photo": "pz51",
    "cat": "风味披萨",
    "desc": "出炉即打包，到手还是烫的",
    "price": 12.5,
    "origPrice": 16,
    "rating": 4.5,
    "sales": 339,
    "tags": []
   },
   {
    "id": "p0934",
    "name": "蒜辣橄榄油意面面",
    "photo": "ps32",
    "cat": "意面工坊",
    "desc": "橄榄油香气扑鼻，罗勒点睛",
    "price": 17.5,
    "origPrice": 22,
    "rating": 4.7,
    "sales": 4304,
    "tags": []
   },
   {
    "id": "p0935",
    "name": "双层重肉披萨萨",
    "photo": "pz52",
    "cat": "风味披萨",
    "desc": "饼底手工现擀，边缘微焦带麦香",
    "price": 25.5,
    "origPrice": 32.5,
    "rating": 4.5,
    "sales": 4274,
    "tags": []
   },
   {
    "id": "p0936",
    "name": "帕玛森火腿披萨萨",
    "photo": "pz53",
    "cat": "风味披萨",
    "desc": "出炉即打包，到手还是烫的",
    "price": 14,
    "origPrice": 18,
    "rating": 4.9,
    "sales": 2179,
    "tags": []
   },
   {
    "id": "p0937",
    "name": "培根蛋黄意面面",
    "photo": "ps33",
    "cat": "意面工坊",
    "desc": "意大利人看了都点头的火候",
    "price": 17.5,
    "origPrice": 22,
    "rating": 4.5,
    "sales": 2275,
    "tags": []
   },
   {
    "id": "p0938",
    "name": "烟熏三文鱼披萨萨",
    "photo": "pz54",
    "cat": "风味披萨",
    "desc": "芝士拉丝一米不断（大概）",
    "price": 13.5,
    "origPrice": 17.5,
    "rating": 4.6,
    "sales": 2574,
    "tags": []
   },
   {
    "id": "p0939",
    "name": "田园时蔬披萨萨",
    "photo": "pz55",
    "cat": "风味披萨",
    "desc": "料铺得看不见饼底，主打一个诚意",
    "price": 35,
    "origPrice": 44.5,
    "rating": 4.4,
    "sales": 2030,
    "tags": []
   },
   {
    "id": "p0940",
    "name": "烤菌菇披萨萨",
    "photo": "pz56",
    "cat": "风味披萨",
    "desc": "窑炉高温快烤，锅气十足",
    "price": 25,
    "origPrice": 32.5,
    "rating": 4.5,
    "sales": 1128,
    "tags": []
   },
   {
    "id": "p0941",
    "name": "虾仁菠萝披萨萨",
    "photo": "pz57",
    "cat": "风味披萨",
    "desc": "芝士拉丝一米不断（大概）",
    "price": 16.5,
    "origPrice": 21.5,
    "rating": 4.7,
    "sales": 237,
    "tags": []
   },
   {
    "id": "p0942",
    "name": "海鲜青酱意面面",
    "photo": "ps34",
    "cat": "意面工坊",
    "desc": "酱汁当天现熬，裹面均匀",
    "price": 19,
    "origPrice": 24.5,
    "rating": 4.9,
    "sales": 3325,
    "tags": []
   }
  ]
 },
 {
  "id": "s10",
  "name": "意面达文西西",
  "category": "pizza",
  "logo": "🎨",
  "brand": "意面达文西西（独立意面馆风）",
  "rating": 4.6,
  "monthlySales": 4522,
  "deliveryMin": 24,
  "deliveryFee": 3.5,
  "minOrder": 20,
  "distanceKm": 1.6,
  "notice": "面条煮到 al dente 的倔强，酱汁都是当天现熬。",
  "promos": [
   "满30减5"
  ],
  "photo": "ps18",
  "products": [
   {
    "id": "p1001",
    "name": "番茄肉酱意面面",
    "photo": "ps2",
    "cat": "经典意面",
    "desc": "慢炖两小时的肉酱，番茄的酸甜刚刚好",
    "price": 18,
    "origPrice": 23,
    "rating": 4.9,
    "sales": 1875,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p1002",
    "name": "鸡肉时蔬炒意面面",
    "photo": "ps3",
    "cat": "经典意面",
    "desc": "橄榄油香气扑鼻，罗勒点睛",
    "price": 22,
    "origPrice": 27,
    "rating": 4.8,
    "sales": 1254,
    "tags": []
   },
   {
    "id": "p1003",
    "name": "白汁蘑菇培根意面面",
    "photo": "ps4",
    "cat": "经典意面",
    "desc": "面条煮到 al dente 的倔强",
    "price": 16,
    "origPrice": 20,
    "rating": 4.7,
    "sales": 910,
    "tags": []
   },
   {
    "id": "p1004",
    "name": "蒜香橄榄油意面面",
    "photo": "ps5",
    "cat": "经典意面",
    "desc": "橄榄油香气扑鼻，罗勒点睛",
    "price": 15,
    "origPrice": 19,
    "rating": 4.9,
    "sales": 364,
    "tags": [
     "满30减5"
    ]
   },
   {
    "id": "p1005",
    "name": "海鲜大虾意面面",
    "photo": "ps6",
    "cat": "经典意面",
    "desc": "酱汁当天现熬，裹面均匀",
    "price": 26,
    "origPrice": 32,
    "rating": 4.5,
    "sales": 695,
    "tags": []
   },
   {
    "id": "p1006",
    "name": "黑松露奶油意面面",
    "photo": "ps7",
    "cat": "经典意面",
    "desc": "橄榄油香气扑鼻，罗勒点睛",
    "price": 28,
    "origPrice": 34,
    "rating": 4.5,
    "sales": 1866,
    "tags": []
   },
   {
    "id": "p1007",
    "name": "冷制意面沙拉拉",
    "photo": "pasta-salad",
    "cat": "轻食",
    "desc": "门店同款，现做现送",
    "price": 14,
    "origPrice": 18,
    "rating": 4.5,
    "sales": 4044,
    "tags": [
     "满30减5"
    ]
   },
   {
    "id": "p1008",
    "name": "焗烤芝士千层面面",
    "photo": "lasagna",
    "cat": "焗烤",
    "desc": "回购率很高的一款，闭眼点不踩雷",
    "price": 20,
    "origPrice": 25,
    "rating": 4.6,
    "sales": 1541,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p1009",
    "name": "蒜香面包盅盅",
    "photo": "bread",
    "cat": "焗烤",
    "desc": "门店同款，现做现送",
    "price": 9,
    "origPrice": 12,
    "rating": 4.6,
    "sales": 1662,
    "tags": []
   },
   {
    "id": "p1010",
    "name": "意式浓汤汤",
    "photo": "soup4",
    "cat": "焗烤",
    "desc": "先喝汤是老规矩",
    "price": 10,
    "origPrice": 13,
    "rating": 4.7,
    "sales": 1310,
    "tags": [
     "满30减5"
    ]
   },
   {
    "id": "p1011",
    "name": "提拉米苏苏",
    "photo": "cake2",
    "cat": "甜品",
    "desc": "叉子下去像踩进云端",
    "price": 16,
    "origPrice": 20,
    "rating": 4.7,
    "sales": 3065,
    "tags": []
   },
   {
    "id": "p1012",
    "name": "烤菌菇披萨萨",
    "photo": "pz58",
    "cat": "风味披萨",
    "desc": "料铺得看不见饼底，主打一个诚意",
    "price": 23,
    "origPrice": 29.5,
    "rating": 4.8,
    "sales": 2674,
    "tags": []
   },
   {
    "id": "p1013",
    "name": "黑椒牛柳意面面",
    "photo": "ps8",
    "cat": "意面工坊",
    "desc": "酱汁当天现熬，裹面均匀",
    "price": 21,
    "origPrice": 26.5,
    "rating": 4.6,
    "sales": 258,
    "tags": []
   },
   {
    "id": "p1014",
    "name": "烧烤牛肉披萨萨",
    "photo": "pz59",
    "cat": "风味披萨",
    "desc": "芝士拉丝一米不断（大概）",
    "price": 28.5,
    "origPrice": 36.5,
    "rating": 4.8,
    "sales": 2780,
    "tags": []
   },
   {
    "id": "p1015",
    "name": "奶油蘑菇意面面",
    "photo": "ps9",
    "cat": "意面工坊",
    "desc": "意大利人看了都点头的火候",
    "price": 25.5,
    "origPrice": 33,
    "rating": 4.5,
    "sales": 5857,
    "tags": []
   },
   {
    "id": "p1016",
    "name": "玛格丽特薄底萨萨",
    "photo": "pz60",
    "cat": "风味披萨",
    "desc": "饼底手工现擀，边缘微焦带麦香",
    "price": 22.5,
    "origPrice": 29,
    "rating": 4.4,
    "sales": 3117,
    "tags": []
   },
   {
    "id": "p1017",
    "name": "明太子奶油意面面",
    "photo": "ps10",
    "cat": "意面工坊",
    "desc": "橄榄油香气扑鼻，罗勒点睛",
    "price": 29,
    "origPrice": 37.5,
    "rating": 4.8,
    "sales": 7744,
    "tags": []
   },
   {
    "id": "p1018",
    "name": "田园时蔬披萨萨",
    "photo": "pz61",
    "cat": "风味披萨",
    "desc": "窑炉高温快烤，锅气十足",
    "price": 25.5,
    "origPrice": 33,
    "rating": 4.7,
    "sales": 8549,
    "tags": []
   },
   {
    "id": "p1019",
    "name": "藤椒鸡披萨萨",
    "photo": "pz62",
    "cat": "风味披萨",
    "desc": "料铺得看不见饼底，主打一个诚意",
    "price": 32,
    "origPrice": 41,
    "rating": 4.7,
    "sales": 2654,
    "tags": []
   },
   {
    "id": "p1020",
    "name": "鸡肉芝士意面面",
    "photo": "ps11",
    "cat": "意面工坊",
    "desc": "橄榄油香气扑鼻，罗勒点睛",
    "price": 8,
    "origPrice": 10.5,
    "rating": 4.5,
    "sales": 225,
    "tags": []
   },
   {
    "id": "p1021",
    "name": "芝士流心披萨萨",
    "photo": "pz63",
    "cat": "风味披萨",
    "desc": "料铺得看不见饼底，主打一个诚意",
    "price": 30.5,
    "origPrice": 39,
    "rating": 4.4,
    "sales": 3653,
    "tags": []
   },
   {
    "id": "p1022",
    "name": "海鲜青酱意面面",
    "photo": "ps12",
    "cat": "意面工坊",
    "desc": "酱汁当天现熬，裹面均匀",
    "price": 19.5,
    "origPrice": 25,
    "rating": 4.7,
    "sales": 2634,
    "tags": []
   },
   {
    "id": "p1023",
    "name": "罗勒鲜虾披萨萨",
    "photo": "pz64",
    "cat": "风味披萨",
    "desc": "出炉即打包，到手还是烫的",
    "price": 16,
    "origPrice": 20,
    "rating": 4.8,
    "sales": 2048,
    "tags": []
   },
   {
    "id": "p1024",
    "name": "罗勒松子意面面",
    "photo": "ps13",
    "cat": "意面工坊",
    "desc": "意大利人看了都点头的火候",
    "price": 13,
    "origPrice": 16.5,
    "rating": 4.6,
    "sales": 1404,
    "tags": []
   },
   {
    "id": "p1025",
    "name": "烟熏三文鱼披萨萨",
    "photo": "pz65",
    "cat": "风味披萨",
    "desc": "窑炉高温快烤，锅气十足",
    "price": 29.5,
    "origPrice": 38,
    "rating": 4.5,
    "sales": 1133,
    "tags": []
   },
   {
    "id": "p1026",
    "name": "奥尔良鸡肉披萨萨",
    "photo": "pz66",
    "cat": "风味披萨",
    "desc": "芝士拉丝一米不断（大概）",
    "price": 10.5,
    "origPrice": 13.5,
    "rating": 4.4,
    "sales": 1233,
    "tags": []
   },
   {
    "id": "p1027",
    "name": "培根蛋黄意面面",
    "photo": "ps14",
    "cat": "意面工坊",
    "desc": "酱汁当天现熬，裹面均匀",
    "price": 34.5,
    "origPrice": 44,
    "rating": 4.5,
    "sales": 2425,
    "tags": []
   },
   {
    "id": "p1028",
    "name": "番茄罗勒意面面",
    "photo": "ps15",
    "cat": "意面工坊",
    "desc": "意大利人看了都点头的火候",
    "price": 14,
    "origPrice": 18,
    "rating": 4.4,
    "sales": 690,
    "tags": []
   },
   {
    "id": "p1029",
    "name": "蜂蜜厚芝士披萨萨",
    "photo": "pz67",
    "cat": "风味披萨",
    "desc": "出炉即打包，到手还是烫的",
    "price": 9.5,
    "origPrice": 12.5,
    "rating": 4.6,
    "sales": 3060,
    "tags": []
   },
   {
    "id": "p1030",
    "name": "辣味番茄意面面",
    "photo": "ps16",
    "cat": "意面工坊",
    "desc": "橄榄油香气扑鼻，罗勒点睛",
    "price": 19,
    "origPrice": 24.5,
    "rating": 4.4,
    "sales": 4403,
    "tags": []
   },
   {
    "id": "p1031",
    "name": "虾仁菠萝披萨萨",
    "photo": "pz68",
    "cat": "风味披萨",
    "desc": "窑炉高温快烤，锅气十足",
    "price": 28.5,
    "origPrice": 36.5,
    "rating": 4.8,
    "sales": 433,
    "tags": []
   },
   {
    "id": "p1032",
    "name": "川辣毛肚披萨萨",
    "photo": "pz69",
    "cat": "风味披萨",
    "desc": "芝士拉丝一米不断（大概）",
    "price": 27,
    "origPrice": 34.5,
    "rating": 4.4,
    "sales": 1140,
    "tags": []
   },
   {
    "id": "p1033",
    "name": "意式辣肠披萨萨",
    "photo": "pz70",
    "cat": "风味披萨",
    "desc": "窑炉高温快烤，锅气十足",
    "price": 32.5,
    "origPrice": 41.5,
    "rating": 4.9,
    "sales": 1733,
    "tags": []
   },
   {
    "id": "p1034",
    "name": "培根玉米披萨萨",
    "photo": "pz71",
    "cat": "风味披萨",
    "desc": "窑炉高温快烤，锅气十足",
    "price": 32,
    "origPrice": 41,
    "rating": 4.7,
    "sales": 374,
    "tags": []
   },
   {
    "id": "p1035",
    "name": "至尊全家福披萨萨",
    "photo": "pz72",
    "cat": "风味披萨",
    "desc": "窑炉高温快烤，锅气十足",
    "price": 11,
    "origPrice": 14.5,
    "rating": 4.7,
    "sales": 3518,
    "tags": []
   },
   {
    "id": "p1036",
    "name": "双层重肉披萨萨",
    "photo": "pz73",
    "cat": "风味披萨",
    "desc": "饼底手工现擀，边缘微焦带麦香",
    "price": 35.5,
    "origPrice": 45.5,
    "rating": 4.6,
    "sales": 3120,
    "tags": []
   },
   {
    "id": "p1037",
    "name": "蒜辣橄榄油意面面",
    "photo": "ps17",
    "cat": "意面工坊",
    "desc": "面条煮到 al dente 的倔强",
    "price": 31,
    "origPrice": 40,
    "rating": 4.7,
    "sales": 1482,
    "tags": []
   },
   {
    "id": "p1038",
    "name": "黑松露菌菇披萨萨",
    "photo": "pz74",
    "cat": "风味披萨",
    "desc": "出炉即打包，到手还是烫的",
    "price": 23,
    "origPrice": 29.5,
    "rating": 4.6,
    "sales": 3414,
    "tags": []
   },
   {
    "id": "p1039",
    "name": "榴莲芝士披萨萨",
    "photo": "pz75",
    "cat": "风味披萨",
    "desc": "饼底手工现擀，边缘微焦带麦香",
    "price": 32.5,
    "origPrice": 41.5,
    "rating": 4.6,
    "sales": 1442,
    "tags": []
   },
   {
    "id": "p1040",
    "name": "双倍芝士披萨萨",
    "photo": "pz76",
    "cat": "风味披萨",
    "desc": "饼底手工现擀，边缘微焦带麦香",
    "price": 20,
    "origPrice": 25.5,
    "rating": 4.7,
    "sales": 2043,
    "tags": []
   },
   {
    "id": "p1041",
    "name": "帕玛森火腿披萨萨",
    "photo": "pz77",
    "cat": "风味披萨",
    "desc": "饼底手工现擀，边缘微焦带麦香",
    "price": 32.5,
    "origPrice": 41.5,
    "rating": 4.7,
    "sales": 432,
    "tags": []
   }
  ]
 },
 {
  "id": "s11",
  "name": "星巴巴克",
  "category": "coffee",
  "logo": "☕",
  "brand": "星巴巴克（星巴克风）",
  "rating": 4.7,
  "monthlySales": 9560,
  "deliveryMin": 27,
  "deliveryFee": 5,
  "minOrder": 30,
  "distanceKm": 2,
  "notice": "第三空间搬到你家。中杯就是最小杯，我们不解释。",
  "promos": [
   "满40减8"
  ],
  "photo": "cafe2",
  "products": [
   {
    "id": "p1101",
    "name": "经典拿铁铁",
    "photo": "cafe6",
    "cat": "经典咖啡",
    "desc": "奶与浓缩的黄金比例，闭眼点不踩雷",
    "price": 30,
    "origPrice": 33,
    "rating": 4.5,
    "sales": 218,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p1102",
    "name": "经典拿铁铁（大杯）",
    "photo": "cafe6",
    "cat": "经典咖啡",
    "desc": "提神效果立竿见影",
    "price": 33,
    "origPrice": 36,
    "rating": 4.6,
    "sales": 1606,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1103",
    "name": "馥芮白白",
    "photo": "cafe4",
    "cat": "经典咖啡",
    "desc": "提神效果立竿见影",
    "price": 33,
    "origPrice": 36,
    "rating": 4.8,
    "sales": 1276,
    "tags": []
   },
   {
    "id": "p1104",
    "name": "馥芮白白（大杯）",
    "photo": "cafe4",
    "cat": "经典咖啡",
    "desc": "豆子当周烘焙，奶泡打到绵密",
    "price": 36,
    "origPrice": 39,
    "rating": 4.7,
    "sales": 2223,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1105",
    "name": "美式咖啡啡",
    "photo": "cafe1",
    "cat": "经典咖啡",
    "desc": "拉花看心情，好喝不看脸",
    "price": 27,
    "origPrice": 30,
    "rating": 4.5,
    "sales": 1137,
    "tags": []
   },
   {
    "id": "p1106",
    "name": "美式咖啡啡（大杯）",
    "photo": "cafe1",
    "cat": "经典咖啡",
    "desc": "苦得很诚实，回甘也是",
    "price": 30,
    "origPrice": 33,
    "rating": 4.7,
    "sales": 581,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1107",
    "name": "焦糖玛奇朵朵",
    "photo": "cafe2",
    "cat": "经典咖啡",
    "desc": "焦糖网格画得很认真，喝之前记得拍照",
    "price": 34,
    "origPrice": 37,
    "rating": 4.7,
    "sales": 4302,
    "tags": [
     "满40减8"
    ]
   },
   {
    "id": "p1108",
    "name": "焦糖玛奇朵朵（大杯）",
    "photo": "cafe2",
    "cat": "经典咖啡",
    "desc": "苦得很诚实，回甘也是",
    "price": 37,
    "origPrice": 40,
    "rating": 4.6,
    "sales": 1872,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1109",
    "name": "卡布奇诺诺",
    "photo": "cafe3",
    "cat": "经典咖啡",
    "desc": "豆子当周烘焙，奶泡打到绵密",
    "price": 30,
    "origPrice": 33,
    "rating": 4.6,
    "sales": 488,
    "tags": []
   },
   {
    "id": "p1110",
    "name": "卡布奇诺诺（大杯）",
    "photo": "cafe3",
    "cat": "经典咖啡",
    "desc": "提神效果立竿见影",
    "price": 33,
    "origPrice": 36,
    "rating": 4.6,
    "sales": 5683,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1111",
    "name": "冷萃冰咖啡啡",
    "photo": "cafe8",
    "cat": "经典咖啡",
    "desc": "提神效果立竿见影",
    "price": 28,
    "origPrice": 32,
    "rating": 4.5,
    "sales": 232,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p1112",
    "name": "冷萃冰咖啡啡（大杯）",
    "photo": "cafe8",
    "cat": "经典咖啡",
    "desc": "豆子当周烘焙，奶泡打到绵密",
    "price": 31,
    "origPrice": 35,
    "rating": 4.6,
    "sales": 2185,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1113",
    "name": "浓缩康宝蓝蓝",
    "photo": "cafe7",
    "cat": "经典咖啡",
    "desc": "提神效果立竿见影",
    "price": 25,
    "origPrice": 28,
    "rating": 4.6,
    "sales": 377,
    "tags": [
     "满40减8"
    ]
   },
   {
    "id": "p1114",
    "name": "抹茶星冰乐乐",
    "photo": "tea7",
    "cat": "星冰乐特调",
    "desc": "茶底当日现泡，过夜就倒",
    "price": 35,
    "origPrice": 38,
    "rating": 4.7,
    "sales": 5620,
    "tags": []
   },
   {
    "id": "p1115",
    "name": "抹茶星冰乐乐（大杯）",
    "photo": "tea7",
    "cat": "星冰乐特调",
    "desc": "茶底当日现泡，过夜就倒",
    "price": 38,
    "origPrice": 41,
    "rating": 4.5,
    "sales": 540,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1116",
    "name": "摩卡星冰乐乐",
    "photo": "jc1",
    "cat": "星冰乐特调",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 35,
    "origPrice": 38,
    "rating": 4.5,
    "sales": 1212,
    "tags": []
   },
   {
    "id": "p1117",
    "name": "摩卡星冰乐乐（大杯）",
    "photo": "jc1",
    "cat": "星冰乐特调",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 38,
    "origPrice": 41,
    "rating": 4.7,
    "sales": 6741,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1118",
    "name": "莓莓气泡冰摇茶茶",
    "photo": "drk1",
    "cat": "星冰乐特调",
    "desc": "喝一口从喉咙凉到天灵盖",
    "price": 31,
    "origPrice": 34,
    "rating": 4.8,
    "sales": 2890,
    "tags": [
     "满40减8"
    ]
   },
   {
    "id": "p1119",
    "name": "莓莓气泡冰摇茶茶（大杯）",
    "photo": "drk1",
    "cat": "星冰乐特调",
    "desc": "喝一口从喉咙凉到天灵盖",
    "price": 34,
    "origPrice": 37,
    "rating": 4.8,
    "sales": 5645,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1120",
    "name": "红茶拿铁铁",
    "photo": "tea3",
    "cat": "星冰乐特调",
    "desc": "茶汤现萃，香气立体",
    "price": 29,
    "origPrice": 32,
    "rating": 4.8,
    "sales": 5781,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p1121",
    "name": "红茶拿铁铁（大杯）",
    "photo": "tea3",
    "cat": "星冰乐特调",
    "desc": "茶底当日现泡，过夜就倒",
    "price": 32,
    "origPrice": 35,
    "rating": 4.7,
    "sales": 2462,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1122",
    "name": "经典可颂颂",
    "photo": "dt27",
    "cat": "甜点轻食",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 12,
    "origPrice": 15,
    "rating": 4.8,
    "sales": 1507,
    "tags": []
   },
   {
    "id": "p1123",
    "name": "提拉米苏苏",
    "photo": "cake2",
    "cat": "甜点轻食",
    "desc": "叉子下去像踩进云端",
    "price": 28,
    "origPrice": 34,
    "rating": 4.6,
    "sales": 2426,
    "tags": [
     "满40减8"
    ]
   },
   {
    "id": "p1124",
    "name": "纽约芝士蛋糕糕",
    "photo": "cake1",
    "cat": "甜点轻食",
    "desc": "叉子下去像踩进云端",
    "price": 26,
    "origPrice": 32,
    "rating": 4.4,
    "sales": 3039,
    "tags": []
   },
   {
    "id": "p1125",
    "name": "火腿芝士三明治治",
    "photo": "sand1",
    "cat": "甜点轻食",
    "desc": "健身教练看了都点头",
    "price": 24,
    "origPrice": 29,
    "rating": 4.8,
    "sales": 1626,
    "tags": []
   },
   {
    "id": "p1126",
    "name": "蓝莓麦芬芬",
    "photo": "dt28",
    "cat": "甜点轻食",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 16,
    "origPrice": 20,
    "rating": 4.8,
    "sales": 285,
    "tags": [
     "满40减8"
    ]
   },
   {
    "id": "p1127",
    "name": "黄油曲奇奇",
    "photo": "dt29",
    "cat": "搭配甜点",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 35.5,
    "origPrice": 45.5,
    "rating": 4.6,
    "sales": 5916,
    "tags": []
   },
   {
    "id": "p1128",
    "name": "莓果慕斯杯杯",
    "photo": "dt30",
    "cat": "搭配甜点",
    "desc": "下午茶的正确打开方式",
    "price": 37,
    "origPrice": 47.5,
    "rating": 4.9,
    "sales": 1164,
    "tags": []
   },
   {
    "id": "p1129",
    "name": "芝士条条",
    "photo": "dt31",
    "cat": "搭配甜点",
    "desc": "下午茶的正确打开方式",
    "price": 28.5,
    "origPrice": 36.5,
    "rating": 4.7,
    "sales": 5659,
    "tags": []
   },
   {
    "id": "p1130",
    "name": "巧克力脆脆卷卷",
    "photo": "dt32",
    "cat": "搭配甜点",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 19.5,
    "origPrice": 25,
    "rating": 4.7,
    "sales": 741,
    "tags": []
   },
   {
    "id": "p1131",
    "name": "蔓越莓司康康",
    "photo": "dt33",
    "cat": "搭配甜点",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 20,
    "origPrice": 25.5,
    "rating": 4.8,
    "sales": 3301,
    "tags": []
   },
   {
    "id": "p1132",
    "name": "焦糖布丁挞挞",
    "photo": "dt34",
    "cat": "搭配甜点",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 37.5,
    "origPrice": 48,
    "rating": 4.7,
    "sales": 1315,
    "tags": []
   },
   {
    "id": "p1133",
    "name": "流心芝士挞挞",
    "photo": "dt35",
    "cat": "搭配甜点",
    "desc": "下午茶的正确打开方式",
    "price": 21.5,
    "origPrice": 27.5,
    "rating": 4.4,
    "sales": 598,
    "tags": []
   },
   {
    "id": "p1134",
    "name": "肉桂糖霜卷卷",
    "photo": "dt36",
    "cat": "搭配甜点",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 34.5,
    "origPrice": 44.5,
    "rating": 4.6,
    "sales": 1720,
    "tags": []
   }
  ]
 },
 {
  "id": "s12",
  "name": "瑞幸幸咖啡",
  "category": "coffee",
  "logo": "🦌",
  "brand": "瑞幸幸咖啡（瑞幸咖啡风）",
  "rating": 4.8,
  "monthlySales": 21302,
  "deliveryMin": 20,
  "deliveryFee": 3,
  "minOrder": 15,
  "distanceKm": 0.8,
  "notice": "首杯 9.9 的传说仍在继续。小鹿今日蹄速很快，出杯神速。",
  "promos": [
   "满18减4",
   "每周9.9券"
  ],
  "photo": "cafe11",
  "products": [
   {
    "id": "p1201",
    "name": "生椰拿铁铁",
    "photo": "cafe5",
    "cat": "大师咖啡",
    "desc": "椰香与浓缩的融合，好喝到想给咖啡师鼓掌",
    "price": 14.9,
    "origPrice": 27,
    "rating": 4.7,
    "sales": 1797,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p1202",
    "name": "生椰拿铁铁（大杯）",
    "photo": "cafe5",
    "cat": "大师咖啡",
    "desc": "豆子当周烘焙，奶泡打到绵密",
    "price": 17.9,
    "origPrice": 30,
    "rating": 4.4,
    "sales": 1523,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1203",
    "name": "厚乳拿铁铁",
    "photo": "cafe11",
    "cat": "大师咖啡",
    "desc": "厚乳厚到能站住吸管，奶咖党的本命",
    "price": 13.9,
    "origPrice": 26,
    "rating": 4.5,
    "sales": 1845,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p1204",
    "name": "厚乳拿铁铁（大杯）",
    "photo": "cafe11",
    "cat": "大师咖啡",
    "desc": "拉花看心情，好喝不看脸",
    "price": 16.9,
    "origPrice": 29,
    "rating": 4.7,
    "sales": 3289,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1205",
    "name": "橙C美式式",
    "photo": "drk3",
    "cat": "大师咖啡",
    "desc": "喝一口从喉咙凉到天灵盖",
    "price": 14,
    "origPrice": 25,
    "rating": 4.8,
    "sales": 454,
    "tags": []
   },
   {
    "id": "p1206",
    "name": "橙C美式式（大杯）",
    "photo": "drk3",
    "cat": "大师咖啡",
    "desc": "喝一口从喉咙凉到天灵盖",
    "price": 17,
    "origPrice": 28,
    "rating": 4.7,
    "sales": 6362,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1207",
    "name": "标准美式式",
    "photo": "cafe9",
    "cat": "大师咖啡",
    "desc": "提神效果立竿见影",
    "price": 9.9,
    "origPrice": 20,
    "rating": 4.8,
    "sales": 813,
    "tags": [
     "满18减4"
    ]
   },
   {
    "id": "p1208",
    "name": "标准美式式（大杯）",
    "photo": "cafe9",
    "cat": "大师咖啡",
    "desc": "豆子当周烘焙，奶泡打到绵密",
    "price": 12.9,
    "origPrice": 23,
    "rating": 4.7,
    "sales": 429,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1209",
    "name": "丝绒拿铁铁",
    "photo": "cafe10",
    "cat": "大师咖啡",
    "desc": "拉花看心情，好喝不看脸",
    "price": 15.9,
    "origPrice": 28,
    "rating": 4.7,
    "sales": 1980,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p1210",
    "name": "丝绒拿铁铁（大杯）",
    "photo": "cafe10",
    "cat": "大师咖啡",
    "desc": "提神效果立竿见影",
    "price": 18.9,
    "origPrice": 31,
    "rating": 4.4,
    "sales": 4848,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1211",
    "name": "冰吸生椰拿铁铁",
    "photo": "cafe7",
    "cat": "大师咖啡",
    "desc": "提神效果立竿见影",
    "price": 16.9,
    "origPrice": 29,
    "rating": 4.6,
    "sales": 770,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p1212",
    "name": "冰吸生椰拿铁铁（大杯）",
    "photo": "cafe7",
    "cat": "大师咖啡",
    "desc": "苦得很诚实，回甘也是",
    "price": 19.9,
    "origPrice": 32,
    "rating": 4.6,
    "sales": 3671,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1213",
    "name": "茉莉花香拿铁铁",
    "photo": "tea6",
    "cat": "大师咖啡",
    "desc": "喝前摇一摇，风味更均匀",
    "price": 14.9,
    "origPrice": 26,
    "rating": 4.5,
    "sales": 501,
    "tags": [
     "满18减4"
    ]
   },
   {
    "id": "p1214",
    "name": "茉莉花香拿铁铁（大杯）",
    "photo": "tea6",
    "cat": "大师咖啡",
    "desc": "茶汤现萃，香气立体",
    "price": 17.9,
    "origPrice": 29,
    "rating": 4.4,
    "sales": 1507,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1215",
    "name": "芝士瑞纳冰冰",
    "photo": "jc1",
    "cat": "瑞纳冰",
    "desc": "冷压锁鲜，果肉打到细腻",
    "price": 17.9,
    "origPrice": 30,
    "rating": 4.8,
    "sales": 6273,
    "tags": []
   },
   {
    "id": "p1216",
    "name": "芝士瑞纳冰冰（大杯）",
    "photo": "jc1",
    "cat": "瑞纳冰",
    "desc": "冷压锁鲜，果肉打到细腻",
    "price": 20.9,
    "origPrice": 33,
    "rating": 4.7,
    "sales": 2951,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1217",
    "name": "莓莓瑞纳冰冰",
    "photo": "jc4",
    "cat": "瑞纳冰",
    "desc": "冷压锁鲜，果肉打到细腻",
    "price": 16.9,
    "origPrice": 29,
    "rating": 4.8,
    "sales": 5559,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p1218",
    "name": "莓莓瑞纳冰冰（大杯）",
    "photo": "jc4",
    "cat": "瑞纳冰",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 19.9,
    "origPrice": 32,
    "rating": 4.6,
    "sales": 2218,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1219",
    "name": "小鹿蜜桃茶茶",
    "photo": "drk6",
    "cat": "小鹿茶",
    "desc": "冰块加到怀疑人生，解暑一流",
    "price": 13,
    "origPrice": 22,
    "rating": 4.6,
    "sales": 1082,
    "tags": [
     "满18减4"
    ]
   },
   {
    "id": "p1220",
    "name": "小鹿蜜桃茶茶（大杯）",
    "photo": "drk6",
    "cat": "小鹿茶",
    "desc": "鲜果现切现榨，不加一滴香精",
    "price": 16,
    "origPrice": 25,
    "rating": 4.7,
    "sales": 357,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1221",
    "name": "柠檬小鹿茶茶",
    "photo": "drk2",
    "cat": "小鹿茶",
    "desc": "鲜果现切现榨，不加一滴香精",
    "price": 12,
    "origPrice": 21,
    "rating": 4.6,
    "sales": 2834,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p1222",
    "name": "柠檬小鹿茶茶（大杯）",
    "photo": "drk2",
    "cat": "小鹿茶",
    "desc": "冰块加到怀疑人生，解暑一流",
    "price": 15,
    "origPrice": 24,
    "rating": 4.6,
    "sales": 1913,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1223",
    "name": "鸡肉卷卷",
    "photo": "crepe1",
    "cat": "轻食",
    "desc": "入口松软，老人小孩都爱",
    "price": 12.9,
    "origPrice": 18,
    "rating": 4.7,
    "sales": 2413,
    "tags": []
   },
   {
    "id": "p1224",
    "name": "芝士贝果果",
    "photo": "dt1",
    "cat": "轻食",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 9.9,
    "origPrice": 15,
    "rating": 4.9,
    "sales": 5066,
    "tags": [
     "满18减4"
    ]
   },
   {
    "id": "p1225",
    "name": "提拉米苏杯杯",
    "photo": "cake2",
    "cat": "轻食",
    "desc": "叉子下去像踩进云端",
    "price": 15.9,
    "origPrice": 22,
    "rating": 4.8,
    "sales": 222,
    "tags": []
   },
   {
    "id": "p1226",
    "name": "蔓越莓司康康",
    "photo": "dt2",
    "cat": "搭配甜点",
    "desc": "冷藏后风味更佳",
    "price": 32,
    "origPrice": 40.5,
    "rating": 4.5,
    "sales": 554,
    "tags": []
   },
   {
    "id": "p1227",
    "name": "黄油曲奇奇",
    "photo": "dt3",
    "cat": "搭配甜点",
    "desc": "下午茶的正确打开方式",
    "price": 19.5,
    "origPrice": 25,
    "rating": 4.8,
    "sales": 287,
    "tags": []
   },
   {
    "id": "p1228",
    "name": "椰蓉球球",
    "photo": "dt4",
    "cat": "搭配甜点",
    "desc": "下午茶的正确打开方式",
    "price": 36.5,
    "origPrice": 46.5,
    "rating": 4.6,
    "sales": 1294,
    "tags": []
   },
   {
    "id": "p1229",
    "name": "莓果慕斯杯杯",
    "photo": "dt5",
    "cat": "搭配甜点",
    "desc": "下午茶的正确打开方式",
    "price": 37.5,
    "origPrice": 48,
    "rating": 4.6,
    "sales": 469,
    "tags": []
   },
   {
    "id": "p1230",
    "name": "抹茶雪媚娘娘",
    "photo": "dt6",
    "cat": "搭配甜点",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 15.5,
    "origPrice": 19.5,
    "rating": 4.6,
    "sales": 3825,
    "tags": []
   },
   {
    "id": "p1231",
    "name": "提子燕麦饼饼",
    "photo": "dt7",
    "cat": "搭配甜点",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 9.5,
    "origPrice": 12,
    "rating": 4.8,
    "sales": 3896,
    "tags": []
   },
   {
    "id": "p1232",
    "name": "巧克力脆脆卷卷",
    "photo": "dt8",
    "cat": "搭配甜点",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 30,
    "origPrice": 38.5,
    "rating": 4.8,
    "sales": 1433,
    "tags": []
   },
   {
    "id": "p1233",
    "name": "杏仁瓦片酥酥",
    "photo": "dt9",
    "cat": "搭配甜点",
    "desc": "下午茶的正确打开方式",
    "price": 15.5,
    "origPrice": 20,
    "rating": 4.6,
    "sales": 3020,
    "tags": []
   },
   {
    "id": "p1234",
    "name": "焦糖布丁挞挞",
    "photo": "dt10",
    "cat": "搭配甜点",
    "desc": "冷藏后风味更佳",
    "price": 18.5,
    "origPrice": 23.5,
    "rating": 4.9,
    "sales": 1276,
    "tags": []
   }
  ]
 },
 {
  "id": "s13",
  "name": "库迪迪咖啡",
  "category": "coffee",
  "logo": "🐦",
  "brand": "库迪迪咖啡（库迪咖啡风）",
  "rating": 4.5,
  "monthlySales": 9880,
  "deliveryMin": 22,
  "deliveryFee": 2.5,
  "minOrder": 12,
  "distanceKm": 1,
  "notice": "天天 9.9，杯杯都是回头客。潘帕斯蓝风暴今日供应充足。",
  "promos": [
   "满15减3"
  ],
  "photo": "cafe3",
  "products": [
   {
    "id": "p1301",
    "name": "潘帕斯蓝风暴暴",
    "photo": "jc7",
    "cat": "招牌特调",
    "desc": "冷压锁鲜，果肉打到细腻",
    "price": 12.9,
    "origPrice": 22,
    "rating": 4.7,
    "sales": 420,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p1302",
    "name": "潘帕斯蓝风暴暴（大杯）",
    "photo": "jc7",
    "cat": "招牌特调",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 15.9,
    "origPrice": 25,
    "rating": 4.6,
    "sales": 2363,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1303",
    "name": "生酪拿铁铁",
    "photo": "cafe3",
    "cat": "招牌特调",
    "desc": "苦得很诚实，回甘也是",
    "price": 11.9,
    "origPrice": 21,
    "rating": 4.6,
    "sales": 3967,
    "tags": []
   },
   {
    "id": "p1304",
    "name": "生酪拿铁铁（大杯）",
    "photo": "cafe3",
    "cat": "招牌特调",
    "desc": "苦得很诚实，回甘也是",
    "price": 14.9,
    "origPrice": 24,
    "rating": 4.8,
    "sales": 4051,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1305",
    "name": "经典拿铁铁",
    "photo": "cafe6",
    "cat": "经典咖啡",
    "desc": "提神效果立竿见影",
    "price": 9.9,
    "origPrice": 18,
    "rating": 4.8,
    "sales": 3890,
    "tags": []
   },
   {
    "id": "p1306",
    "name": "经典拿铁铁（大杯）",
    "photo": "cafe6",
    "cat": "经典咖啡",
    "desc": "苦得很诚实，回甘也是",
    "price": 12.9,
    "origPrice": 21,
    "rating": 4.8,
    "sales": 2387,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1307",
    "name": "美式咖啡啡",
    "photo": "cafe1",
    "cat": "经典咖啡",
    "desc": "拉花看心情，好喝不看脸",
    "price": 8.8,
    "origPrice": 16,
    "rating": 4.5,
    "sales": 824,
    "tags": [
     "满15减3"
    ]
   },
   {
    "id": "p1308",
    "name": "美式咖啡啡（大杯）",
    "photo": "cafe1",
    "cat": "经典咖啡",
    "desc": "苦得很诚实，回甘也是",
    "price": 11.8,
    "origPrice": 19,
    "rating": 4.6,
    "sales": 6155,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1309",
    "name": "燕麦拿铁铁",
    "photo": "cafe10",
    "cat": "经典咖啡",
    "desc": "拉花看心情，好喝不看脸",
    "price": 12.9,
    "origPrice": 22,
    "rating": 4.7,
    "sales": 2447,
    "tags": []
   },
   {
    "id": "p1310",
    "name": "燕麦拿铁铁（大杯）",
    "photo": "cafe10",
    "cat": "经典咖啡",
    "desc": "苦得很诚实，回甘也是",
    "price": 15.9,
    "origPrice": 25,
    "rating": 4.9,
    "sales": 694,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1311",
    "name": "茉莉茶咖咖",
    "photo": "tea6",
    "cat": "茶咖",
    "desc": "茶汤现萃，香气立体",
    "price": 11,
    "origPrice": 19,
    "rating": 4.6,
    "sales": 352,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p1312",
    "name": "茉莉茶咖咖（大杯）",
    "photo": "tea6",
    "cat": "茶咖",
    "desc": "茶底当日现泡，过夜就倒",
    "price": 14,
    "origPrice": 22,
    "rating": 4.8,
    "sales": 692,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1313",
    "name": "西瓜冰萃萃",
    "photo": "drk7",
    "cat": "冰萃果咖",
    "desc": "喝一口从喉咙凉到天灵盖",
    "price": 11.9,
    "origPrice": 20,
    "rating": 4.5,
    "sales": 5591,
    "tags": [
     "满15减3"
    ]
   },
   {
    "id": "p1314",
    "name": "西瓜冰萃萃（大杯）",
    "photo": "drk7",
    "cat": "冰萃果咖",
    "desc": "鲜果现切现榨，不加一滴香精",
    "price": 14.9,
    "origPrice": 23,
    "rating": 4.4,
    "sales": 405,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1315",
    "name": "青柠冰萃美式式",
    "photo": "drk2",
    "cat": "冰萃果咖",
    "desc": "喝一口从喉咙凉到天灵盖",
    "price": 10.9,
    "origPrice": 19,
    "rating": 4.8,
    "sales": 4511,
    "tags": []
   },
   {
    "id": "p1316",
    "name": "青柠冰萃美式式（大杯）",
    "photo": "drk2",
    "cat": "冰萃果咖",
    "desc": "鲜果现切现榨，不加一滴香精",
    "price": 13.9,
    "origPrice": 22,
    "rating": 4.8,
    "sales": 803,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1317",
    "name": "巧克力脆脆卷卷",
    "photo": "dt11",
    "cat": "搭配甜点",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 17.5,
    "origPrice": 22,
    "rating": 4.7,
    "sales": 6604,
    "tags": []
   },
   {
    "id": "p1318",
    "name": "莓果慕斯杯杯",
    "photo": "dt12",
    "cat": "搭配甜点",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 10.5,
    "origPrice": 13.5,
    "rating": 4.6,
    "sales": 1695,
    "tags": []
   },
   {
    "id": "p1319",
    "name": "流心芝士挞挞",
    "photo": "dt13",
    "cat": "搭配甜点",
    "desc": "冷藏后风味更佳",
    "price": 20,
    "origPrice": 25.5,
    "rating": 4.7,
    "sales": 1934,
    "tags": []
   },
   {
    "id": "p1320",
    "name": "肉桂糖霜卷卷",
    "photo": "dt14",
    "cat": "搭配甜点",
    "desc": "冷藏后风味更佳",
    "price": 26,
    "origPrice": 33,
    "rating": 4.6,
    "sales": 266,
    "tags": []
   },
   {
    "id": "p1321",
    "name": "奶油泡芙芙",
    "photo": "dt15",
    "cat": "搭配甜点",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 24,
    "origPrice": 30.5,
    "rating": 4.9,
    "sales": 6174,
    "tags": []
   },
   {
    "id": "p1322",
    "name": "提子燕麦饼饼",
    "photo": "dt16",
    "cat": "搭配甜点",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 17.5,
    "origPrice": 22,
    "rating": 4.6,
    "sales": 1498,
    "tags": []
   },
   {
    "id": "p1323",
    "name": "海盐芝士卷卷",
    "photo": "dt17",
    "cat": "搭配甜点",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 13,
    "origPrice": 17,
    "rating": 4.4,
    "sales": 1983,
    "tags": []
   },
   {
    "id": "p1324",
    "name": "黄油曲奇奇",
    "photo": "dt18",
    "cat": "搭配甜点",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 25.5,
    "origPrice": 33,
    "rating": 4.6,
    "sales": 431,
    "tags": []
   },
   {
    "id": "p1325",
    "name": "椰蓉球球",
    "photo": "dt19",
    "cat": "搭配甜点",
    "desc": "冷藏后风味更佳",
    "price": 11.5,
    "origPrice": 14.5,
    "rating": 4.5,
    "sales": 294,
    "tags": []
   },
   {
    "id": "p1326",
    "name": "乳酪蛋糕条条",
    "photo": "dt20",
    "cat": "搭配甜点",
    "desc": "下午茶的正确打开方式",
    "price": 20,
    "origPrice": 25.5,
    "rating": 4.8,
    "sales": 3083,
    "tags": []
   },
   {
    "id": "p1327",
    "name": "奶香小方方",
    "photo": "dt21",
    "cat": "搭配甜点",
    "desc": "下午茶的正确打开方式",
    "price": 31.5,
    "origPrice": 40.5,
    "rating": 4.6,
    "sales": 1051,
    "tags": []
   },
   {
    "id": "p1328",
    "name": "蔓越莓司康康",
    "photo": "dt22",
    "cat": "搭配甜点",
    "desc": "冷藏后风味更佳",
    "price": 31,
    "origPrice": 39.5,
    "rating": 4.9,
    "sales": 743,
    "tags": []
   },
   {
    "id": "p1329",
    "name": "抹茶雪媚娘娘",
    "photo": "dt23",
    "cat": "搭配甜点",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 21,
    "origPrice": 27,
    "rating": 4.9,
    "sales": 849,
    "tags": []
   },
   {
    "id": "p1330",
    "name": "芝士条条",
    "photo": "dt24",
    "cat": "搭配甜点",
    "desc": "下午茶的正确打开方式",
    "price": 32.5,
    "origPrice": 41.5,
    "rating": 4.8,
    "sales": 5498,
    "tags": []
   },
   {
    "id": "p1331",
    "name": "焦糖布丁挞挞",
    "photo": "dt25",
    "cat": "搭配甜点",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 33.5,
    "origPrice": 42.5,
    "rating": 4.6,
    "sales": 5744,
    "tags": []
   },
   {
    "id": "p1332",
    "name": "杏仁瓦片酥酥",
    "photo": "dt26",
    "cat": "搭配甜点",
    "desc": "冷藏后风味更佳",
    "price": 25.5,
    "origPrice": 32.5,
    "rating": 4.6,
    "sales": 2426,
    "tags": []
   }
  ]
 },
 {
  "id": "s14",
  "name": "蜜雪冰冰城",
  "category": "drink",
  "logo": "☃️",
  "brand": "蜜雪冰冰城（蜜雪冰城风）",
  "rating": 4.7,
  "monthlySales": 35211,
  "deliveryMin": 22,
  "deliveryFee": 2.5,
  "minOrder": 10,
  "distanceKm": 0.6,
  "notice": "你爱我，我爱你，蜜雪冰冰城甜蜜蜜～鲜果当日现切现榨。",
  "promos": [
   "满15减2"
  ],
  "photo": "drk2",
  "products": [
   {
    "id": "p1401",
    "name": "冰鲜柠檬水水",
    "photo": "drk2",
    "cat": "清爽果茶",
    "desc": "四块钱的快乐天花板，一整颗青柠现捶现摇",
    "price": 4,
    "origPrice": 6,
    "rating": 4.9,
    "sales": 1273,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p1402",
    "name": "冰鲜柠檬水水（大杯）",
    "photo": "drk2",
    "cat": "清爽果茶",
    "desc": "鲜果现切现榨，不加一滴香精",
    "price": 7,
    "origPrice": 9,
    "rating": 4.6,
    "sales": 1222,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1403",
    "name": "满杯百香果果",
    "photo": "drk3",
    "cat": "清爽果茶",
    "desc": "鲜果现切现榨，不加一滴香精",
    "price": 7,
    "origPrice": 9,
    "rating": 4.7,
    "sales": 488,
    "tags": []
   },
   {
    "id": "p1404",
    "name": "满杯百香果果（大杯）",
    "photo": "drk3",
    "cat": "清爽果茶",
    "desc": "冰块加到怀疑人生，解暑一流",
    "price": 10,
    "origPrice": 12,
    "rating": 4.8,
    "sales": 636,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1405",
    "name": "莓莓果茶茶",
    "photo": "drk1",
    "cat": "清爽果茶",
    "desc": "冰块加到怀疑人生，解暑一流",
    "price": 7,
    "origPrice": 9,
    "rating": 4.5,
    "sales": 1332,
    "tags": []
   },
   {
    "id": "p1406",
    "name": "莓莓果茶茶（大杯）",
    "photo": "drk1",
    "cat": "清爽果茶",
    "desc": "鲜果现切现榨，不加一滴香精",
    "price": 10,
    "origPrice": 12,
    "rating": 4.5,
    "sales": 1111,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1407",
    "name": "西瓜啵啵杯杯",
    "photo": "drk7",
    "cat": "清爽果茶",
    "desc": "鲜果现切现榨，不加一滴香精",
    "price": 6,
    "origPrice": 8,
    "rating": 4.9,
    "sales": 8484,
    "tags": [
     "满15减2"
    ]
   },
   {
    "id": "p1408",
    "name": "西瓜啵啵杯杯（大杯）",
    "photo": "drk7",
    "cat": "清爽果茶",
    "desc": "冰块加到怀疑人生，解暑一流",
    "price": 9,
    "origPrice": 11,
    "rating": 4.8,
    "sales": 3723,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1409",
    "name": "青提莫吉托托",
    "photo": "drk5",
    "cat": "清爽果茶",
    "desc": "鲜果现切现榨，不加一滴香精",
    "price": 7,
    "origPrice": 9,
    "rating": 4.9,
    "sales": 870,
    "tags": []
   },
   {
    "id": "p1410",
    "name": "青提莫吉托托（大杯）",
    "photo": "drk5",
    "cat": "清爽果茶",
    "desc": "冰块加到怀疑人生，解暑一流",
    "price": 10,
    "origPrice": 12,
    "rating": 4.6,
    "sales": 4741,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1411",
    "name": "珍珠奶茶茶",
    "photo": "tea1",
    "cat": "经典奶茶",
    "desc": "经典永不过时，珍珠给得像不要钱",
    "price": 7,
    "origPrice": 9,
    "rating": 4.7,
    "sales": 1222,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p1412",
    "name": "珍珠奶茶茶（大杯）",
    "photo": "tea1",
    "cat": "经典奶茶",
    "desc": "喝前摇一摇，风味更均匀",
    "price": 10,
    "origPrice": 12,
    "rating": 4.6,
    "sales": 3837,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1413",
    "name": "芝士奶盖茶茶",
    "photo": "tea1",
    "cat": "经典奶茶",
    "desc": "喝前摇一摇，风味更均匀",
    "price": 8,
    "origPrice": 10,
    "rating": 4.6,
    "sales": 792,
    "tags": [
     "满15减2"
    ]
   },
   {
    "id": "p1414",
    "name": "芝士奶盖茶茶（大杯）",
    "photo": "tea1",
    "cat": "经典奶茶",
    "desc": "茶汤现萃，香气立体",
    "price": 11,
    "origPrice": 13,
    "rating": 4.5,
    "sales": 3534,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1415",
    "name": "蜜桃四季春春",
    "photo": "tea1",
    "cat": "经典奶茶",
    "desc": "茶底当日现泡，过夜就倒",
    "price": 7,
    "origPrice": 9,
    "rating": 4.6,
    "sales": 3345,
    "tags": []
   },
   {
    "id": "p1416",
    "name": "蜜桃四季春春（大杯）",
    "photo": "tea1",
    "cat": "经典奶茶",
    "desc": "甜度冰量可备注调整",
    "price": 10,
    "origPrice": 12,
    "rating": 4.5,
    "sales": 698,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1417",
    "name": "阿华田大满贯贯",
    "photo": "jc3",
    "cat": "经典奶茶",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 9,
    "origPrice": 11,
    "rating": 4.9,
    "sales": 2014,
    "tags": []
   },
   {
    "id": "p1418",
    "name": "阿华田大满贯贯（大杯）",
    "photo": "jc3",
    "cat": "经典奶茶",
    "desc": "冷压锁鲜，果肉打到细腻",
    "price": 12,
    "origPrice": 14,
    "rating": 4.4,
    "sales": 1316,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1419",
    "name": "摇摇奶昔草莓味味·草莓",
    "photo": "jc4",
    "cat": "冰淇淋雪王",
    "desc": "冷压锁鲜，果肉打到细腻",
    "price": 8,
    "origPrice": 10,
    "rating": 4.5,
    "sales": 1098,
    "tags": [
     "满15减2"
    ]
   },
   {
    "id": "p1420",
    "name": "摇摇奶昔草莓味味·芒果",
    "photo": "jc4",
    "cat": "冰淇淋雪王",
    "desc": "冷压锁鲜，果肉打到细腻",
    "price": 8,
    "origPrice": 10,
    "rating": 4.7,
    "sales": 1716,
    "tags": [
     "满15减2"
    ]
   },
   {
    "id": "p1421",
    "name": "华夫筒冰淇淋淋",
    "photo": "des4",
    "cat": "冰淇淋雪王",
    "desc": "三块钱的快乐从未变过",
    "price": 3,
    "origPrice": 4,
    "rating": 4.6,
    "sales": 2137,
    "tags": []
   },
   {
    "id": "p1422",
    "name": "雪王大圣代代·草莓",
    "photo": "des5",
    "cat": "冰淇淋雪王",
    "desc": "甜品胃是另一个胃",
    "price": 6,
    "origPrice": 8,
    "rating": 4.9,
    "sales": 1939,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p1423",
    "name": "雪王大圣代代·巧克力",
    "photo": "des5",
    "cat": "冰淇淋雪王",
    "desc": "甜品胃是另一个胃",
    "price": 6,
    "origPrice": 8,
    "rating": 4.7,
    "sales": 2027,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p1424",
    "name": "雪王大圣代代·抹茶",
    "photo": "des5",
    "cat": "冰淇淋雪王",
    "desc": "甜品胃是另一个胃",
    "price": 6,
    "origPrice": 8,
    "rating": 4.6,
    "sales": 1491,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p1425",
    "name": "棒打鲜橙橙",
    "photo": "jc8",
    "cat": "鲜榨系列",
    "desc": "冷压锁鲜，果肉打到细腻",
    "price": 6,
    "origPrice": 8,
    "rating": 4.5,
    "sales": 224,
    "tags": [
     "满15减2"
    ]
   },
   {
    "id": "p1426",
    "name": "棒打鲜橙橙（大杯）",
    "photo": "jc8",
    "cat": "鲜榨系列",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 9,
    "origPrice": 11,
    "rating": 4.7,
    "sales": 1833,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1427",
    "name": "鲜榨青汁汁",
    "photo": "jc6",
    "cat": "鲜榨系列",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 7,
    "origPrice": 9,
    "rating": 4.7,
    "sales": 3490,
    "tags": []
   },
   {
    "id": "p1428",
    "name": "瓶装果汁汁·橙汁",
    "photo": "jc5",
    "cat": "鲜榨系列",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 8,
    "origPrice": 10,
    "rating": 4.7,
    "sales": 3122,
    "tags": []
   },
   {
    "id": "p1429",
    "name": "瓶装果汁汁·混合莓",
    "photo": "jc5",
    "cat": "鲜榨系列",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 8,
    "origPrice": 10,
    "rating": 4.6,
    "sales": 1679,
    "tags": []
   },
   {
    "id": "p1430",
    "name": "提子燕麦饼饼",
    "photo": "dt27",
    "cat": "加点甜",
    "desc": "下午茶的正确打开方式",
    "price": 36,
    "origPrice": 46,
    "rating": 4.6,
    "sales": 210,
    "tags": []
   },
   {
    "id": "p1431",
    "name": "焦糖布丁挞挞",
    "photo": "dt28",
    "cat": "加点甜",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 15.5,
    "origPrice": 19.5,
    "rating": 4.7,
    "sales": 583,
    "tags": []
   },
   {
    "id": "p1432",
    "name": "蔓越莓司康康",
    "photo": "dt29",
    "cat": "加点甜",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 34.5,
    "origPrice": 44,
    "rating": 4.8,
    "sales": 1234,
    "tags": []
   },
   {
    "id": "p1433",
    "name": "莓果慕斯杯杯",
    "photo": "dt30",
    "cat": "加点甜",
    "desc": "冷藏后风味更佳",
    "price": 34.5,
    "origPrice": 44.5,
    "rating": 4.6,
    "sales": 3038,
    "tags": []
   },
   {
    "id": "p1434",
    "name": "黄油曲奇奇",
    "photo": "dt31",
    "cat": "加点甜",
    "desc": "下午茶的正确打开方式",
    "price": 17,
    "origPrice": 21.5,
    "rating": 4.7,
    "sales": 1232,
    "tags": []
   }
  ]
 },
 {
  "id": "s15",
  "name": "喜茶茶",
  "category": "drink",
  "logo": "🧋",
  "brand": "喜茶茶（喜茶风）",
  "rating": 4.9,
  "monthlySales": 22034,
  "deliveryMin": 25,
  "deliveryFee": 3,
  "minOrder": 15,
  "distanceKm": 0.9,
  "notice": "芝士茗茶创始店（自封的）。今日鲜果已到店，售完即止。",
  "promos": [
   "满20减3",
   "两杯9折"
  ],
  "photo": "jc2",
  "products": [
   {
    "id": "p1501",
    "name": "多肉葡萄萄",
    "photo": "jc2",
    "cat": "多肉家族",
    "desc": "一杯用掉 23 颗巨峰葡萄，果肉多到吸管堵车",
    "price": 19,
    "origPrice": 25,
    "rating": 4.9,
    "sales": 3972,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p1502",
    "name": "多肉葡萄萄（大杯）",
    "photo": "jc2",
    "cat": "多肉家族",
    "desc": "冷压锁鲜，果肉打到细腻",
    "price": 22,
    "origPrice": 28,
    "rating": 4.7,
    "sales": 3254,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1503",
    "name": "多肉桃李李",
    "photo": "drk6",
    "cat": "多肉家族",
    "desc": "鲜果现切现榨，不加一滴香精",
    "price": 18,
    "origPrice": 23,
    "rating": 4.5,
    "sales": 208,
    "tags": []
   },
   {
    "id": "p1504",
    "name": "多肉桃李李（大杯）",
    "photo": "drk6",
    "cat": "多肉家族",
    "desc": "鲜果现切现榨，不加一滴香精",
    "price": 21,
    "origPrice": 26,
    "rating": 4.8,
    "sales": 449,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1505",
    "name": "多肉青提提",
    "photo": "drk5",
    "cat": "多肉家族",
    "desc": "鲜果现切现榨，不加一滴香精",
    "price": 19,
    "origPrice": 25,
    "rating": 4.5,
    "sales": 438,
    "tags": []
   },
   {
    "id": "p1506",
    "name": "多肉青提提（大杯）",
    "photo": "drk5",
    "cat": "多肉家族",
    "desc": "喝一口从喉咙凉到天灵盖",
    "price": 22,
    "origPrice": 28,
    "rating": 4.7,
    "sales": 1164,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1507",
    "name": "芝芝莓莓莓",
    "photo": "drk1",
    "cat": "芝芝家族",
    "desc": "当季草莓打底，芝士奶盖厚到需要仰头喝",
    "price": 21,
    "origPrice": 27,
    "rating": 4.5,
    "sales": 879,
    "tags": [
     "满20减3"
    ]
   },
   {
    "id": "p1508",
    "name": "芝芝莓莓莓（大杯）",
    "photo": "drk1",
    "cat": "芝芝家族",
    "desc": "鲜果现切现榨，不加一滴香精",
    "price": 24,
    "origPrice": 30,
    "rating": 4.8,
    "sales": 4467,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1509",
    "name": "芝芝满杯红柚柚",
    "photo": "jc8",
    "cat": "芝芝家族",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 19,
    "origPrice": 24,
    "rating": 4.9,
    "sales": 634,
    "tags": []
   },
   {
    "id": "p1510",
    "name": "芝芝满杯红柚柚（大杯）",
    "photo": "jc8",
    "cat": "芝芝家族",
    "desc": "冷压锁鲜，果肉打到细腻",
    "price": 22,
    "origPrice": 27,
    "rating": 4.9,
    "sales": 206,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1511",
    "name": "芝芝金凤茶王王",
    "photo": "tea4",
    "cat": "芝芝家族",
    "desc": "茶汤现萃，香气立体",
    "price": 17,
    "origPrice": 22,
    "rating": 4.7,
    "sales": 243,
    "tags": []
   },
   {
    "id": "p1512",
    "name": "芝芝金凤茶王王（大杯）",
    "photo": "tea4",
    "cat": "芝芝家族",
    "desc": "茶底当日现泡，过夜就倒",
    "price": 20,
    "origPrice": 25,
    "rating": 4.5,
    "sales": 1018,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1513",
    "name": "烤黑糖波波茶茶",
    "photo": "tea1",
    "cat": "波波家族",
    "desc": "波波在黑糖里泡过温泉，Q 弹到会跳",
    "price": 17,
    "origPrice": 21,
    "rating": 4.7,
    "sales": 2099,
    "tags": [
     "满20减3"
    ]
   },
   {
    "id": "p1514",
    "name": "烤黑糖波波茶茶（大杯）",
    "photo": "tea1",
    "cat": "波波家族",
    "desc": "喝前摇一摇，风味更均匀",
    "price": 20,
    "origPrice": 24,
    "rating": 4.6,
    "sales": 1695,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1515",
    "name": "抹茶波波冰冰",
    "photo": "tea7",
    "cat": "波波家族",
    "desc": "喝前摇一摇，风味更均匀",
    "price": 16,
    "origPrice": 20,
    "rating": 4.5,
    "sales": 577,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p1516",
    "name": "抹茶波波冰冰（大杯）",
    "photo": "tea7",
    "cat": "波波家族",
    "desc": "喝前摇一摇，风味更均匀",
    "price": 19,
    "origPrice": 23,
    "rating": 4.8,
    "sales": 288,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1517",
    "name": "生打椰椰奶冻冻",
    "photo": "jc1",
    "cat": "波波家族",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 16,
    "origPrice": 20,
    "rating": 4.4,
    "sales": 1544,
    "tags": []
   },
   {
    "id": "p1518",
    "name": "生打椰椰奶冻冻（大杯）",
    "photo": "jc1",
    "cat": "波波家族",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 19,
    "origPrice": 23,
    "rating": 4.6,
    "sales": 506,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1519",
    "name": "纯绿妍茶后后",
    "photo": "tea5",
    "cat": "纯茶",
    "desc": "什么都不加的清爽，给奶茶喝腻的你留条后路",
    "price": 9,
    "origPrice": 12,
    "rating": 4.5,
    "sales": 2172,
    "tags": [
     "满20减3"
    ]
   },
   {
    "id": "p1520",
    "name": "纯绿妍茶后后（大杯）",
    "photo": "tea5",
    "cat": "纯茶",
    "desc": "甜度冰量可备注调整",
    "price": 12,
    "origPrice": 15,
    "rating": 4.6,
    "sales": 1156,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1521",
    "name": "轻乳金玉茶茶",
    "photo": "tea2",
    "cat": "纯茶",
    "desc": "茶底当日现泡，过夜就倒",
    "price": 13,
    "origPrice": 16,
    "rating": 4.9,
    "sales": 2772,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p1522",
    "name": "轻乳金玉茶茶（大杯）",
    "photo": "tea2",
    "cat": "纯茶",
    "desc": "茶汤现萃，香气立体",
    "price": 16,
    "origPrice": 19,
    "rating": 4.7,
    "sales": 346,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1523",
    "name": "果多多缤纷杯杯",
    "photo": "jc4",
    "cat": "限定",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 20,
    "origPrice": 25,
    "rating": 4.5,
    "sales": 1729,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p1524",
    "name": "果多多缤纷杯杯（大杯）",
    "photo": "jc4",
    "cat": "限定",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 23,
    "origPrice": 28,
    "rating": 4.7,
    "sales": 1168,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1525",
    "name": "芝士条条",
    "photo": "dt32",
    "cat": "加点甜",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 35.5,
    "origPrice": 45.5,
    "rating": 4.9,
    "sales": 3355,
    "tags": []
   },
   {
    "id": "p1526",
    "name": "焦糖布丁挞挞",
    "photo": "dt33",
    "cat": "加点甜",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 13.5,
    "origPrice": 17.5,
    "rating": 4.9,
    "sales": 1041,
    "tags": []
   },
   {
    "id": "p1527",
    "name": "提子燕麦饼饼",
    "photo": "dt34",
    "cat": "加点甜",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 31,
    "origPrice": 39.5,
    "rating": 4.7,
    "sales": 6409,
    "tags": []
   },
   {
    "id": "p1528",
    "name": "奶油泡芙芙",
    "photo": "dt35",
    "cat": "加点甜",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 16,
    "origPrice": 20.5,
    "rating": 4.5,
    "sales": 2034,
    "tags": []
   },
   {
    "id": "p1529",
    "name": "巧克力脆脆卷卷",
    "photo": "dt36",
    "cat": "加点甜",
    "desc": "下午茶的正确打开方式",
    "price": 36.5,
    "origPrice": 46.5,
    "rating": 4.5,
    "sales": 4918,
    "tags": []
   },
   {
    "id": "p1530",
    "name": "流心芝士挞挞",
    "photo": "dt1",
    "cat": "加点甜",
    "desc": "下午茶的正确打开方式",
    "price": 33.5,
    "origPrice": 42.5,
    "rating": 4.5,
    "sales": 505,
    "tags": []
   },
   {
    "id": "p1531",
    "name": "抹茶雪媚娘娘",
    "photo": "dt2",
    "cat": "加点甜",
    "desc": "下午茶的正确打开方式",
    "price": 24,
    "origPrice": 30.5,
    "rating": 4.7,
    "sales": 1364,
    "tags": []
   },
   {
    "id": "p1532",
    "name": "黄油曲奇奇",
    "photo": "dt3",
    "cat": "加点甜",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 27.5,
    "origPrice": 35,
    "rating": 4.8,
    "sales": 940,
    "tags": []
   },
   {
    "id": "p1533",
    "name": "蔓越莓司康康",
    "photo": "dt4",
    "cat": "加点甜",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 24,
    "origPrice": 31,
    "rating": 4.9,
    "sales": 2186,
    "tags": []
   },
   {
    "id": "p1534",
    "name": "杏仁瓦片酥酥",
    "photo": "dt5",
    "cat": "加点甜",
    "desc": "冷藏后风味更佳",
    "price": 27,
    "origPrice": 35,
    "rating": 4.5,
    "sales": 1578,
    "tags": []
   }
  ]
 },
 {
  "id": "s16",
  "name": "奈雪的茶茶",
  "category": "drink",
  "logo": "🍵",
  "brand": "奈雪的茶茶（奈雪的茶风）",
  "rating": 4.8,
  "monthlySales": 12820,
  "deliveryMin": 30,
  "deliveryFee": 3.5,
  "minOrder": 18,
  "distanceKm": 1.5,
  "notice": "一杯好茶，一口软欧包，两大幸福今日照常供应。",
  "promos": [
   "满25减5",
   "茶+包立减3"
  ],
  "photo": "drk3",
  "products": [
   {
    "id": "p1601",
    "name": "霸气橙子子",
    "photo": "drk3",
    "cat": "霸气鲜果茶",
    "desc": "整颗手剥橙子，霸气的是果肉量不是脾气",
    "price": 18,
    "origPrice": 24,
    "rating": 4.7,
    "sales": 6485,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p1602",
    "name": "霸气橙子子（大杯）",
    "photo": "drk3",
    "cat": "霸气鲜果茶",
    "desc": "鲜果现切现榨，不加一滴香精",
    "price": 21,
    "origPrice": 27,
    "rating": 4.5,
    "sales": 238,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1603",
    "name": "霸气芝士草莓莓",
    "photo": "drk1",
    "cat": "霸气鲜果茶",
    "desc": "鲜果现切现榨，不加一滴香精",
    "price": 20,
    "origPrice": 26,
    "rating": 4.8,
    "sales": 2830,
    "tags": []
   },
   {
    "id": "p1604",
    "name": "霸气芝士草莓莓（大杯）",
    "photo": "drk1",
    "cat": "霸气鲜果茶",
    "desc": "喝一口从喉咙凉到天灵盖",
    "price": 23,
    "origPrice": 29,
    "rating": 4.5,
    "sales": 1235,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1605",
    "name": "霸气西瓜瓜",
    "photo": "drk7",
    "cat": "霸气鲜果茶",
    "desc": "喝一口从喉咙凉到天灵盖",
    "price": 17,
    "origPrice": 22,
    "rating": 4.6,
    "sales": 4249,
    "tags": []
   },
   {
    "id": "p1606",
    "name": "霸气西瓜瓜（大杯）",
    "photo": "drk7",
    "cat": "霸气鲜果茶",
    "desc": "鲜果现切现榨，不加一滴香精",
    "price": 20,
    "origPrice": 25,
    "rating": 4.8,
    "sales": 6456,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1607",
    "name": "霸气葡萄萄",
    "photo": "jc2",
    "cat": "霸气鲜果茶",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 19,
    "origPrice": 25,
    "rating": 4.8,
    "sales": 4482,
    "tags": [
     "满25减5"
    ]
   },
   {
    "id": "p1608",
    "name": "霸气葡萄萄（大杯）",
    "photo": "jc2",
    "cat": "霸气鲜果茶",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 22,
    "origPrice": 28,
    "rating": 4.6,
    "sales": 1602,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1609",
    "name": "金色山脉宝藏茶茶",
    "photo": "tea3",
    "cat": "鲜奶茶",
    "desc": "茶底是金色山脉，奶盖是山顶积雪",
    "price": 16,
    "origPrice": 21,
    "rating": 4.7,
    "sales": 4130,
    "tags": []
   },
   {
    "id": "p1610",
    "name": "金色山脉宝藏茶茶（大杯）",
    "photo": "tea3",
    "cat": "鲜奶茶",
    "desc": "茶汤现萃，香气立体",
    "price": 19,
    "origPrice": 24,
    "rating": 4.7,
    "sales": 1511,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1611",
    "name": "布蕾珍珠奶茶茶",
    "photo": "tea1",
    "cat": "鲜奶茶",
    "desc": "甜度冰量可备注调整",
    "price": 17,
    "origPrice": 22,
    "rating": 4.4,
    "sales": 499,
    "tags": []
   },
   {
    "id": "p1612",
    "name": "布蕾珍珠奶茶茶（大杯）",
    "photo": "tea1",
    "cat": "鲜奶茶",
    "desc": "茶汤现萃，香气立体",
    "price": 20,
    "origPrice": 25,
    "rating": 4.5,
    "sales": 219,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1613",
    "name": "抹茶奶绿绿",
    "photo": "tea7",
    "cat": "鲜奶茶",
    "desc": "茶汤现萃，香气立体",
    "price": 15,
    "origPrice": 19,
    "rating": 4.7,
    "sales": 4301,
    "tags": [
     "满25减5"
    ]
   },
   {
    "id": "p1614",
    "name": "抹茶奶绿绿（大杯）",
    "photo": "tea7",
    "cat": "鲜奶茶",
    "desc": "甜度冰量可备注调整",
    "price": 18,
    "origPrice": 22,
    "rating": 4.8,
    "sales": 223,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1615",
    "name": "魔法棒软欧包包",
    "photo": "dt6",
    "cat": "软欧包",
    "desc": "外脆内软，掰开有拉丝，魔法在麦香里",
    "price": 12,
    "origPrice": 16,
    "rating": 4.6,
    "sales": 1581,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p1616",
    "name": "草莓魔法棒棒",
    "photo": "cake6",
    "cat": "软欧包",
    "desc": "一层一层都是心思",
    "price": 14,
    "origPrice": 18,
    "rating": 4.6,
    "sales": 793,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p1617",
    "name": "奶油可颂颂",
    "photo": "dt7",
    "cat": "软欧包",
    "desc": "冷藏后风味更佳",
    "price": 11,
    "origPrice": 15,
    "rating": 4.7,
    "sales": 965,
    "tags": [
     "满25减5"
    ]
   },
   {
    "id": "p1618",
    "name": "肉桂香香卷卷",
    "photo": "roll2",
    "cat": "软欧包",
    "desc": "配一碟蘸汁，朴素但对味",
    "price": 13,
    "origPrice": 17,
    "rating": 4.5,
    "sales": 1689,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p1619",
    "name": "芝士软欧包包",
    "photo": "dt8",
    "cat": "软欧包",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 13,
    "origPrice": 17,
    "rating": 4.5,
    "sales": 844,
    "tags": []
   },
   {
    "id": "p1620",
    "name": "抹茶雪媚娘娘",
    "photo": "dt9",
    "cat": "加点甜",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 22,
    "origPrice": 28,
    "rating": 4.8,
    "sales": 381,
    "tags": []
   },
   {
    "id": "p1621",
    "name": "奶香小方方",
    "photo": "dt10",
    "cat": "加点甜",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 13,
    "origPrice": 16.5,
    "rating": 4.5,
    "sales": 4346,
    "tags": []
   },
   {
    "id": "p1622",
    "name": "巧克力脆脆卷卷",
    "photo": "dt11",
    "cat": "加点甜",
    "desc": "下午茶的正确打开方式",
    "price": 10,
    "origPrice": 13,
    "rating": 4.6,
    "sales": 745,
    "tags": []
   },
   {
    "id": "p1623",
    "name": "芝士条条",
    "photo": "dt12",
    "cat": "加点甜",
    "desc": "冷藏后风味更佳",
    "price": 24,
    "origPrice": 30.5,
    "rating": 4.5,
    "sales": 889,
    "tags": []
   },
   {
    "id": "p1624",
    "name": "肉桂糖霜卷卷",
    "photo": "dt13",
    "cat": "加点甜",
    "desc": "下午茶的正确打开方式",
    "price": 34,
    "origPrice": 43.5,
    "rating": 4.6,
    "sales": 3599,
    "tags": []
   },
   {
    "id": "p1625",
    "name": "蔓越莓司康康",
    "photo": "dt14",
    "cat": "加点甜",
    "desc": "下午茶的正确打开方式",
    "price": 12.5,
    "origPrice": 16,
    "rating": 4.5,
    "sales": 882,
    "tags": []
   },
   {
    "id": "p1626",
    "name": "海盐芝士卷卷",
    "photo": "dt15",
    "cat": "加点甜",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 30,
    "origPrice": 38.5,
    "rating": 4.8,
    "sales": 3582,
    "tags": []
   },
   {
    "id": "p1627",
    "name": "黄油曲奇奇",
    "photo": "dt16",
    "cat": "加点甜",
    "desc": "下午茶的正确打开方式",
    "price": 31,
    "origPrice": 39.5,
    "rating": 4.9,
    "sales": 1239,
    "tags": []
   },
   {
    "id": "p1628",
    "name": "杏仁瓦片酥酥",
    "photo": "dt17",
    "cat": "加点甜",
    "desc": "冷藏后风味更佳",
    "price": 24.5,
    "origPrice": 31.5,
    "rating": 4.4,
    "sales": 1196,
    "tags": []
   },
   {
    "id": "p1629",
    "name": "乳酪蛋糕条条",
    "photo": "dt18",
    "cat": "加点甜",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 11.5,
    "origPrice": 15,
    "rating": 4.8,
    "sales": 658,
    "tags": []
   },
   {
    "id": "p1630",
    "name": "椰蓉球球",
    "photo": "dt19",
    "cat": "加点甜",
    "desc": "下午茶的正确打开方式",
    "price": 31,
    "origPrice": 39.5,
    "rating": 4.6,
    "sales": 313,
    "tags": []
   },
   {
    "id": "p1631",
    "name": "焦糖布丁挞挞",
    "photo": "dt20",
    "cat": "加点甜",
    "desc": "下午茶的正确打开方式",
    "price": 29,
    "origPrice": 37.5,
    "rating": 4.9,
    "sales": 873,
    "tags": []
   },
   {
    "id": "p1632",
    "name": "提子燕麦饼饼",
    "photo": "dt21",
    "cat": "加点甜",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 25.5,
    "origPrice": 33,
    "rating": 4.9,
    "sales": 2965,
    "tags": []
   },
   {
    "id": "p1633",
    "name": "奶油泡芙芙",
    "photo": "dt22",
    "cat": "加点甜",
    "desc": "冷藏后风味更佳",
    "price": 36.5,
    "origPrice": 46.5,
    "rating": 4.9,
    "sales": 1757,
    "tags": []
   },
   {
    "id": "p1634",
    "name": "流心芝士挞挞",
    "photo": "dt23",
    "cat": "加点甜",
    "desc": "下午茶的正确打开方式",
    "price": 30.5,
    "origPrice": 39,
    "rating": 4.4,
    "sales": 598,
    "tags": []
   }
  ]
 },
 {
  "id": "s17",
  "name": "茶颜悦色色",
  "category": "drink",
  "logo": "🏮",
  "brand": "茶颜悦色色（茶颜悦色风）",
  "rating": 4.8,
  "monthlySales": 16780,
  "deliveryMin": 26,
  "deliveryFee": 3,
  "minOrder": 12,
  "distanceKm": 1.2,
  "notice": "中式鲜茶，一挑二搅三喝，喝前记得先拍照。",
  "promos": [
   "满18减3"
  ],
  "photo": "tea4",
  "products": [
   {
    "id": "p1701",
    "name": "幽兰拿铁铁",
    "photo": "tea4",
    "cat": "招牌鲜茶",
    "desc": "红茶打底碧根果碎收尾，一挑二搅三喝",
    "price": 16,
    "origPrice": 20,
    "rating": 4.5,
    "sales": 649,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p1702",
    "name": "幽兰拿铁铁（大杯）",
    "photo": "tea4",
    "cat": "招牌鲜茶",
    "desc": "茶底当日现泡，过夜就倒",
    "price": 19,
    "origPrice": 23,
    "rating": 4.8,
    "sales": 235,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1703",
    "name": "声声乌龙龙",
    "photo": "tea3",
    "cat": "招牌鲜茶",
    "desc": "甜度冰量可备注调整",
    "price": 15,
    "origPrice": 19,
    "rating": 4.4,
    "sales": 242,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p1704",
    "name": "声声乌龙龙（大杯）",
    "photo": "tea3",
    "cat": "招牌鲜茶",
    "desc": "甜度冰量可备注调整",
    "price": 18,
    "origPrice": 22,
    "rating": 4.7,
    "sales": 1206,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1705",
    "name": "桂花弄弄",
    "photo": "tea2",
    "cat": "招牌鲜茶",
    "desc": "喝前摇一摇，风味更均匀",
    "price": 15,
    "origPrice": 19,
    "rating": 4.5,
    "sales": 589,
    "tags": []
   },
   {
    "id": "p1706",
    "name": "桂花弄弄（大杯）",
    "photo": "tea2",
    "cat": "招牌鲜茶",
    "desc": "喝前摇一摇，风味更均匀",
    "price": 18,
    "origPrice": 22,
    "rating": 4.8,
    "sales": 6886,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1707",
    "name": "栀晓茶茶",
    "photo": "tea6",
    "cat": "招牌鲜茶",
    "desc": "甜度冰量可备注调整",
    "price": 14,
    "origPrice": 18,
    "rating": 4.9,
    "sales": 5060,
    "tags": [
     "满18减3"
    ]
   },
   {
    "id": "p1708",
    "name": "栀晓茶茶（大杯）",
    "photo": "tea6",
    "cat": "招牌鲜茶",
    "desc": "茶汤现萃，香气立体",
    "price": 17,
    "origPrice": 21,
    "rating": 4.5,
    "sales": 2075,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1709",
    "name": "蔓越阑珊珊",
    "photo": "drk6",
    "cat": "限定鲜茶",
    "desc": "鲜果现切现榨，不加一滴香精",
    "price": 15,
    "origPrice": 19,
    "rating": 4.8,
    "sales": 354,
    "tags": []
   },
   {
    "id": "p1710",
    "name": "蔓越阑珊珊（大杯）",
    "photo": "drk6",
    "cat": "限定鲜茶",
    "desc": "冰块加到怀疑人生，解暑一流",
    "price": 18,
    "origPrice": 22,
    "rating": 4.5,
    "sales": 2453,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1711",
    "name": "抹茶葡提提",
    "photo": "tea7",
    "cat": "限定鲜茶",
    "desc": "甜度冰量可备注调整",
    "price": 16,
    "origPrice": 20,
    "rating": 4.6,
    "sales": 1175,
    "tags": []
   },
   {
    "id": "p1712",
    "name": "抹茶葡提提（大杯）",
    "photo": "tea7",
    "cat": "限定鲜茶",
    "desc": "茶底当日现泡，过夜就倒",
    "price": 19,
    "origPrice": 23,
    "rating": 4.9,
    "sales": 370,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1713",
    "name": "浮生半日闲纯茶茶",
    "photo": "tea5",
    "cat": "纯茶",
    "desc": "甜度冰量可备注调整",
    "price": 10,
    "origPrice": 13,
    "rating": 4.8,
    "sales": 451,
    "tags": [
     "满18减3"
    ]
   },
   {
    "id": "p1714",
    "name": "浮生半日闲纯茶茶（大杯）",
    "photo": "tea5",
    "cat": "纯茶",
    "desc": "甜度冰量可备注调整",
    "price": 13,
    "origPrice": 16,
    "rating": 4.6,
    "sales": 4329,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1715",
    "name": "坚果酥酥小碟碟",
    "photo": "chz",
    "cat": "茶点",
    "desc": "门店同款，现做现送",
    "price": 9,
    "origPrice": 12,
    "rating": 4.6,
    "sales": 6393,
    "tags": []
   },
   {
    "id": "p1716",
    "name": "提子麻薯包包",
    "photo": "dt24",
    "cat": "茶点",
    "desc": "冷藏后风味更佳",
    "price": 8,
    "origPrice": 11,
    "rating": 4.8,
    "sales": 740,
    "tags": []
   },
   {
    "id": "p1717",
    "name": "奶香小方方",
    "photo": "dt25",
    "cat": "加点甜",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 9,
    "origPrice": 12,
    "rating": 4.7,
    "sales": 2091,
    "tags": []
   },
   {
    "id": "p1718",
    "name": "巧克力脆脆卷卷",
    "photo": "dt26",
    "cat": "加点甜",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 20.5,
    "origPrice": 26,
    "rating": 4.5,
    "sales": 586,
    "tags": []
   },
   {
    "id": "p1719",
    "name": "肉桂糖霜卷卷",
    "photo": "dt27",
    "cat": "加点甜",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 24,
    "origPrice": 31,
    "rating": 4.5,
    "sales": 1705,
    "tags": []
   },
   {
    "id": "p1720",
    "name": "焦糖布丁挞挞",
    "photo": "dt28",
    "cat": "加点甜",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 14.5,
    "origPrice": 18.5,
    "rating": 4.7,
    "sales": 2105,
    "tags": []
   },
   {
    "id": "p1721",
    "name": "莓果慕斯杯杯",
    "photo": "dt29",
    "cat": "加点甜",
    "desc": "冷藏后风味更佳",
    "price": 27.5,
    "origPrice": 35.5,
    "rating": 4.4,
    "sales": 2450,
    "tags": []
   },
   {
    "id": "p1722",
    "name": "杏仁瓦片酥酥",
    "photo": "dt30",
    "cat": "加点甜",
    "desc": "冷藏后风味更佳",
    "price": 14,
    "origPrice": 18,
    "rating": 4.7,
    "sales": 1629,
    "tags": []
   },
   {
    "id": "p1723",
    "name": "抹茶雪媚娘娘",
    "photo": "dt31",
    "cat": "加点甜",
    "desc": "冷藏后风味更佳",
    "price": 15.5,
    "origPrice": 19.5,
    "rating": 4.8,
    "sales": 3558,
    "tags": []
   },
   {
    "id": "p1724",
    "name": "流心芝士挞挞",
    "photo": "dt32",
    "cat": "加点甜",
    "desc": "冷藏后风味更佳",
    "price": 36.5,
    "origPrice": 47,
    "rating": 4.6,
    "sales": 6650,
    "tags": []
   },
   {
    "id": "p1725",
    "name": "奶油泡芙芙",
    "photo": "dt33",
    "cat": "加点甜",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 9.5,
    "origPrice": 12.5,
    "rating": 4.7,
    "sales": 208,
    "tags": []
   },
   {
    "id": "p1726",
    "name": "提子燕麦饼饼",
    "photo": "dt34",
    "cat": "加点甜",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 12.5,
    "origPrice": 16,
    "rating": 4.8,
    "sales": 480,
    "tags": []
   },
   {
    "id": "p1727",
    "name": "椰蓉球球",
    "photo": "dt35",
    "cat": "加点甜",
    "desc": "冷藏后风味更佳",
    "price": 33.5,
    "origPrice": 43,
    "rating": 4.7,
    "sales": 4029,
    "tags": []
   },
   {
    "id": "p1728",
    "name": "芝士条条",
    "photo": "dt36",
    "cat": "加点甜",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 28,
    "origPrice": 36,
    "rating": 4.6,
    "sales": 4310,
    "tags": []
   },
   {
    "id": "p1729",
    "name": "乳酪蛋糕条条",
    "photo": "dt1",
    "cat": "加点甜",
    "desc": "冷藏后风味更佳",
    "price": 25,
    "origPrice": 32,
    "rating": 4.6,
    "sales": 735,
    "tags": []
   },
   {
    "id": "p1730",
    "name": "黄油曲奇奇",
    "photo": "dt2",
    "cat": "加点甜",
    "desc": "下午茶的正确打开方式",
    "price": 17.5,
    "origPrice": 22.5,
    "rating": 4.4,
    "sales": 2683,
    "tags": []
   },
   {
    "id": "p1731",
    "name": "蔓越莓司康康",
    "photo": "dt3",
    "cat": "加点甜",
    "desc": "下午茶的正确打开方式",
    "price": 21.5,
    "origPrice": 27.5,
    "rating": 4.9,
    "sales": 669,
    "tags": []
   },
   {
    "id": "p1732",
    "name": "海盐芝士卷卷",
    "photo": "dt4",
    "cat": "加点甜",
    "desc": "冷藏后风味更佳",
    "price": 22,
    "origPrice": 28,
    "rating": 4.8,
    "sales": 5853,
    "tags": []
   }
  ]
 },
 {
  "id": "s18",
  "name": "一点点点",
  "category": "drink",
  "logo": "🥤",
  "brand": "一点点点（一点点风）",
  "rating": 4.6,
  "monthlySales": 19340,
  "deliveryMin": 24,
  "deliveryFee": 2.5,
  "minOrder": 10,
  "distanceKm": 0.8,
  "notice": "隐藏菜单比正经菜单还长的店，波霸加冰淇淋是懂王吃法。",
  "promos": [
   "满15减2"
  ],
  "photo": "tea1",
  "products": [
   {
    "id": "p1801",
    "name": "波霸奶茶茶",
    "photo": "tea1",
    "cat": "找好茶",
    "desc": "波霸和奶茶的比例经过精密计算",
    "price": 12,
    "origPrice": 15,
    "rating": 4.5,
    "sales": 3686,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p1802",
    "name": "波霸奶茶茶（大杯）",
    "photo": "tea1",
    "cat": "找好茶",
    "desc": "茶汤现萃，香气立体",
    "price": 15,
    "origPrice": 18,
    "rating": 4.4,
    "sales": 3329,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1803",
    "name": "四季奶青青",
    "photo": "tea1",
    "cat": "找好茶",
    "desc": "茶底当日现泡，过夜就倒",
    "price": 11,
    "origPrice": 14,
    "rating": 4.7,
    "sales": 476,
    "tags": []
   },
   {
    "id": "p1804",
    "name": "四季奶青青（大杯）",
    "photo": "tea1",
    "cat": "找好茶",
    "desc": "茶汤现萃，香气立体",
    "price": 14,
    "origPrice": 17,
    "rating": 4.6,
    "sales": 804,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1805",
    "name": "红茶玛奇朵朵",
    "photo": "tea1",
    "cat": "找好茶",
    "desc": "茶汤现萃，香气立体",
    "price": 13,
    "origPrice": 16,
    "rating": 4.5,
    "sales": 2158,
    "tags": []
   },
   {
    "id": "p1806",
    "name": "红茶玛奇朵朵（大杯）",
    "photo": "tea1",
    "cat": "找好茶",
    "desc": "喝前摇一摇，风味更均匀",
    "price": 16,
    "origPrice": 19,
    "rating": 4.8,
    "sales": 800,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1807",
    "name": "柠檬养乐多多",
    "photo": "drk2",
    "cat": "找新鲜",
    "desc": "冰块加到怀疑人生，解暑一流",
    "price": 13,
    "origPrice": 16,
    "rating": 4.5,
    "sales": 2070,
    "tags": [
     "满15减2"
    ]
   },
   {
    "id": "p1808",
    "name": "柠檬养乐多多（大杯）",
    "photo": "drk2",
    "cat": "找新鲜",
    "desc": "喝一口从喉咙凉到天灵盖",
    "price": 16,
    "origPrice": 19,
    "rating": 4.5,
    "sales": 3147,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1809",
    "name": "冰淇淋红茶茶",
    "photo": "drk1",
    "cat": "找新鲜",
    "desc": "鲜果现切现榨，不加一滴香精",
    "price": 12,
    "origPrice": 15,
    "rating": 4.8,
    "sales": 2776,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p1810",
    "name": "冰淇淋红茶茶（大杯）",
    "photo": "drk1",
    "cat": "找新鲜",
    "desc": "鲜果现切现榨，不加一滴香精",
    "price": 15,
    "origPrice": 18,
    "rating": 4.4,
    "sales": 4857,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1811",
    "name": "阿华田田",
    "photo": "jc3",
    "cat": "找新鲜",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 13,
    "origPrice": 16,
    "rating": 4.7,
    "sales": 2627,
    "tags": []
   },
   {
    "id": "p1812",
    "name": "阿华田田（大杯）",
    "photo": "jc3",
    "cat": "找新鲜",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 16,
    "origPrice": 19,
    "rating": 4.6,
    "sales": 4400,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1813",
    "name": "波霸冰淇淋奶茶茶",
    "photo": "des5",
    "cat": "加料区",
    "desc": "甜品胃是另一个胃",
    "price": 15,
    "origPrice": 18,
    "rating": 4.8,
    "sales": 2390,
    "tags": [
     "满15减2"
    ]
   },
   {
    "id": "p1814",
    "name": "波霸冰淇淋奶茶茶（大杯）",
    "photo": "des5",
    "cat": "加料区",
    "desc": "甜品胃是另一个胃",
    "price": 18,
    "origPrice": 21,
    "rating": 4.9,
    "sales": 1361,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1815",
    "name": "布丁奶绿绿",
    "photo": "tea2",
    "cat": "加料区",
    "desc": "甜度冰量可备注调整",
    "price": 13,
    "origPrice": 16,
    "rating": 4.6,
    "sales": 7787,
    "tags": []
   },
   {
    "id": "p1816",
    "name": "布丁奶绿绿（大杯）",
    "photo": "tea2",
    "cat": "加料区",
    "desc": "甜度冰量可备注调整",
    "price": 16,
    "origPrice": 19,
    "rating": 4.5,
    "sales": 1619,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p1817",
    "name": "芝士条条",
    "photo": "dt5",
    "cat": "加点甜",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 23.5,
    "origPrice": 30.5,
    "rating": 4.8,
    "sales": 3240,
    "tags": []
   },
   {
    "id": "p1818",
    "name": "巧克力脆脆卷卷",
    "photo": "dt6",
    "cat": "加点甜",
    "desc": "冷藏后风味更佳",
    "price": 29.5,
    "origPrice": 38,
    "rating": 4.8,
    "sales": 5566,
    "tags": []
   },
   {
    "id": "p1819",
    "name": "莓果慕斯杯杯",
    "photo": "dt7",
    "cat": "加点甜",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 31.5,
    "origPrice": 40.5,
    "rating": 4.7,
    "sales": 689,
    "tags": []
   },
   {
    "id": "p1820",
    "name": "黄油曲奇奇",
    "photo": "dt8",
    "cat": "加点甜",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 10.5,
    "origPrice": 13,
    "rating": 4.5,
    "sales": 856,
    "tags": []
   },
   {
    "id": "p1821",
    "name": "蔓越莓司康康",
    "photo": "dt9",
    "cat": "加点甜",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 35,
    "origPrice": 45,
    "rating": 4.5,
    "sales": 2444,
    "tags": []
   },
   {
    "id": "p1822",
    "name": "肉桂糖霜卷卷",
    "photo": "dt10",
    "cat": "加点甜",
    "desc": "冷藏后风味更佳",
    "price": 26.5,
    "origPrice": 34,
    "rating": 4.9,
    "sales": 2762,
    "tags": []
   },
   {
    "id": "p1823",
    "name": "乳酪蛋糕条条",
    "photo": "dt11",
    "cat": "加点甜",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 24.5,
    "origPrice": 31,
    "rating": 4.7,
    "sales": 4796,
    "tags": []
   },
   {
    "id": "p1824",
    "name": "奶油泡芙芙",
    "photo": "dt12",
    "cat": "加点甜",
    "desc": "下午茶的正确打开方式",
    "price": 31,
    "origPrice": 39.5,
    "rating": 4.5,
    "sales": 2159,
    "tags": []
   },
   {
    "id": "p1825",
    "name": "杏仁瓦片酥酥",
    "photo": "dt13",
    "cat": "加点甜",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 15,
    "origPrice": 19.5,
    "rating": 4.6,
    "sales": 5226,
    "tags": []
   },
   {
    "id": "p1826",
    "name": "椰蓉球球",
    "photo": "dt14",
    "cat": "加点甜",
    "desc": "下午茶的正确打开方式",
    "price": 10.5,
    "origPrice": 13.5,
    "rating": 4.6,
    "sales": 230,
    "tags": []
   },
   {
    "id": "p1827",
    "name": "奶香小方方",
    "photo": "dt15",
    "cat": "加点甜",
    "desc": "冷藏后风味更佳",
    "price": 14.5,
    "origPrice": 18.5,
    "rating": 4.6,
    "sales": 272,
    "tags": []
   },
   {
    "id": "p1828",
    "name": "提子燕麦饼饼",
    "photo": "dt16",
    "cat": "加点甜",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 24.5,
    "origPrice": 31,
    "rating": 4.5,
    "sales": 431,
    "tags": []
   },
   {
    "id": "p1829",
    "name": "海盐芝士卷卷",
    "photo": "dt17",
    "cat": "加点甜",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 20.5,
    "origPrice": 26.5,
    "rating": 4.6,
    "sales": 355,
    "tags": []
   },
   {
    "id": "p1830",
    "name": "抹茶雪媚娘娘",
    "photo": "dt18",
    "cat": "加点甜",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 18,
    "origPrice": 23,
    "rating": 4.8,
    "sales": 453,
    "tags": []
   },
   {
    "id": "p1831",
    "name": "焦糖布丁挞挞",
    "photo": "dt19",
    "cat": "加点甜",
    "desc": "下午茶的正确打开方式",
    "price": 17,
    "origPrice": 22,
    "rating": 4.5,
    "sales": 1518,
    "tags": []
   },
   {
    "id": "p1832",
    "name": "流心芝士挞挞",
    "photo": "dt20",
    "cat": "加点甜",
    "desc": "下午茶的正确打开方式",
    "price": 23.5,
    "origPrice": 30,
    "rating": 4.7,
    "sales": 567,
    "tags": []
   }
  ]
 },
 {
  "id": "s19",
  "name": "好利来来",
  "category": "dessert",
  "logo": "🎂",
  "brand": "好利来来（好利来风）",
  "rating": 4.8,
  "monthlySales": 11302,
  "deliveryMin": 20,
  "deliveryFee": 3,
  "minOrder": 15,
  "distanceKm": 0.8,
  "notice": "烤箱从早响到晚，酥点出炉即打包。掉渣是酥的勋章。",
  "promos": [
   "满18减4",
   "每周酥点日"
  ],
  "photo": "cake1",
  "products": [
   {
    "id": "p1901",
    "name": "半熟芝士士",
    "photo": "cake1",
    "cat": "招牌蛋糕",
    "desc": "半熟的口感刚刚好，冷藏后风味更佳",
    "price": 25,
    "origPrice": 32,
    "rating": 4.9,
    "sales": 333,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p1902",
    "name": "提拉米苏杯杯",
    "photo": "cake2",
    "cat": "招牌蛋糕",
    "desc": "一层一层都是心思",
    "price": 22,
    "origPrice": 28,
    "rating": 4.5,
    "sales": 1954,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p1903",
    "name": "千层拼盘盘",
    "photo": "cake5",
    "cat": "招牌蛋糕",
    "desc": "一层一层都是心思",
    "price": 26,
    "origPrice": 33,
    "rating": 4.6,
    "sales": 4087,
    "tags": []
   },
   {
    "id": "p1904",
    "name": "云朵芝士蛋糕糕",
    "photo": "dt21",
    "cat": "招牌蛋糕",
    "desc": "冷藏后风味更佳",
    "price": 16.9,
    "origPrice": 29,
    "rating": 4.9,
    "sales": 2617,
    "tags": [
     "满18减4"
    ]
   },
   {
    "id": "p1905",
    "name": "巧克力慕斯杯杯",
    "photo": "dt22",
    "cat": "招牌蛋糕",
    "desc": "下午茶的正确打开方式",
    "price": 18,
    "origPrice": 23,
    "rating": 4.4,
    "sales": 891,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p1906",
    "name": "现烤黄金苹果酥酥",
    "photo": "dt23",
    "cat": "现烤酥点",
    "desc": "酥皮 128 层，苹果馅腌足了糖桂花",
    "price": 13.9,
    "origPrice": 26,
    "rating": 4.6,
    "sales": 880,
    "tags": []
   },
   {
    "id": "p1907",
    "name": "现烤黄金苹果酥酥（大份）",
    "photo": "dt23",
    "cat": "现烤酥点",
    "desc": "下午茶的正确打开方式",
    "price": 20,
    "origPrice": 37.5,
    "rating": 4.4,
    "sales": 1801,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p1908",
    "name": "雪粉奶油大甜卷卷",
    "photo": "dt24",
    "cat": "现烤酥点",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 14.9,
    "origPrice": 27,
    "rating": 4.6,
    "sales": 2132,
    "tags": [
     "满18减4"
    ]
   },
   {
    "id": "p1909",
    "name": "奶油泡芙芙（三只）",
    "photo": "dt25",
    "cat": "现烤酥点",
    "desc": "冷藏后风味更佳",
    "price": 15,
    "origPrice": 20,
    "rating": 4.6,
    "sales": 2388,
    "tags": []
   },
   {
    "id": "p1910",
    "name": "蝴蝶酥酥",
    "photo": "dt26",
    "cat": "现烤酥点",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 12,
    "origPrice": 16,
    "rating": 4.7,
    "sales": 3245,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p1911",
    "name": "手作果酱夹心曲奇奇",
    "photo": "dt27",
    "cat": "手作饼干",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 9.9,
    "origPrice": 20,
    "rating": 4.8,
    "sales": 4658,
    "tags": [
     "满18减4"
    ]
   },
   {
    "id": "p1912",
    "name": "坚果燕麦能量块块",
    "photo": "oat1",
    "cat": "手作饼干",
    "desc": "食材当日直采，卡路里已帮你算好",
    "price": 11,
    "origPrice": 15,
    "rating": 4.8,
    "sales": 312,
    "tags": []
   },
   {
    "id": "p1913",
    "name": "莓果松饼塔塔",
    "photo": "pk1",
    "cat": "现烤松饼",
    "desc": "甜品胃是另一个胃",
    "price": 17,
    "origPrice": 22,
    "rating": 4.7,
    "sales": 7262,
    "tags": []
   },
   {
    "id": "p1914",
    "name": "巧克力华夫夫",
    "photo": "cake3",
    "cat": "现烤松饼",
    "desc": "一层一层都是心思",
    "price": 15,
    "origPrice": 19,
    "rating": 4.8,
    "sales": 1074,
    "tags": [
     "满18减4"
    ]
   },
   {
    "id": "p1915",
    "name": "草莓奶油华夫夫",
    "photo": "wf1",
    "cat": "现烤松饼",
    "desc": "甜品胃是另一个胃",
    "price": 16,
    "origPrice": 21,
    "rating": 4.7,
    "sales": 952,
    "tags": []
   },
   {
    "id": "p1916",
    "name": "乳酪蛋糕条条",
    "photo": "dt28",
    "cat": "每日现做",
    "desc": "冷藏后风味更佳",
    "price": 28.5,
    "origPrice": 36.5,
    "rating": 4.8,
    "sales": 1839,
    "tags": []
   },
   {
    "id": "p1917",
    "name": "流心芝士挞挞",
    "photo": "dt29",
    "cat": "每日现做",
    "desc": "下午茶的正确打开方式",
    "price": 9.5,
    "origPrice": 12,
    "rating": 4.8,
    "sales": 5629,
    "tags": []
   },
   {
    "id": "p1918",
    "name": "焦糖布丁挞挞",
    "photo": "dt30",
    "cat": "每日现做",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 13.5,
    "origPrice": 17,
    "rating": 4.6,
    "sales": 4184,
    "tags": []
   },
   {
    "id": "p1919",
    "name": "奶油泡芙芙",
    "photo": "dt31",
    "cat": "每日现做",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 20.5,
    "origPrice": 26.5,
    "rating": 4.6,
    "sales": 1020,
    "tags": []
   },
   {
    "id": "p1920",
    "name": "奶香小方方",
    "photo": "dt32",
    "cat": "每日现做",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 11,
    "origPrice": 14,
    "rating": 4.8,
    "sales": 934,
    "tags": []
   },
   {
    "id": "p1921",
    "name": "海盐芝士卷卷",
    "photo": "dt33",
    "cat": "每日现做",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 36,
    "origPrice": 46,
    "rating": 4.8,
    "sales": 551,
    "tags": []
   },
   {
    "id": "p1922",
    "name": "杏仁瓦片酥酥",
    "photo": "dt34",
    "cat": "每日现做",
    "desc": "冷藏后风味更佳",
    "price": 10.5,
    "origPrice": 13.5,
    "rating": 4.4,
    "sales": 6270,
    "tags": []
   },
   {
    "id": "p1923",
    "name": "蔓越莓司康康",
    "photo": "dt35",
    "cat": "每日现做",
    "desc": "冷藏后风味更佳",
    "price": 22.5,
    "origPrice": 28.5,
    "rating": 4.6,
    "sales": 250,
    "tags": []
   },
   {
    "id": "p1924",
    "name": "肉桂糖霜卷卷",
    "photo": "dt36",
    "cat": "每日现做",
    "desc": "下午茶的正确打开方式",
    "price": 28,
    "origPrice": 36,
    "rating": 4.6,
    "sales": 393,
    "tags": []
   },
   {
    "id": "p1925",
    "name": "芝士条条",
    "photo": "dt1",
    "cat": "每日现做",
    "desc": "冷藏后风味更佳",
    "price": 30.5,
    "origPrice": 39,
    "rating": 4.5,
    "sales": 3504,
    "tags": []
   },
   {
    "id": "p1926",
    "name": "提子燕麦饼饼",
    "photo": "dt2",
    "cat": "每日现做",
    "desc": "下午茶的正确打开方式",
    "price": 34.5,
    "origPrice": 44,
    "rating": 4.4,
    "sales": 4198,
    "tags": []
   },
   {
    "id": "p1927",
    "name": "莓果慕斯杯杯",
    "photo": "dt3",
    "cat": "每日现做",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 35,
    "origPrice": 44.5,
    "rating": 4.7,
    "sales": 2477,
    "tags": []
   },
   {
    "id": "p1928",
    "name": "抹茶雪媚娘娘",
    "photo": "dt4",
    "cat": "每日现做",
    "desc": "冷藏后风味更佳",
    "price": 25,
    "origPrice": 32,
    "rating": 4.5,
    "sales": 3295,
    "tags": []
   },
   {
    "id": "p1929",
    "name": "巧克力脆脆卷卷",
    "photo": "dt5",
    "cat": "每日现做",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 10.5,
    "origPrice": 13.5,
    "rating": 4.7,
    "sales": 4996,
    "tags": []
   },
   {
    "id": "p1930",
    "name": "黄油曲奇奇",
    "photo": "dt6",
    "cat": "每日现做",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 17.5,
    "origPrice": 22.5,
    "rating": 4.8,
    "sales": 4203,
    "tags": []
   },
   {
    "id": "p1931",
    "name": "椰蓉球球",
    "photo": "dt7",
    "cat": "每日现做",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 11.5,
    "origPrice": 14.5,
    "rating": 4.7,
    "sales": 316,
    "tags": []
   }
  ]
 },
 {
  "id": "s20",
  "name": "甜过初恋恋",
  "category": "dessert",
  "logo": "🍨",
  "brand": "甜过初恋恋（满记甜品风）",
  "rating": 4.8,
  "monthlySales": 6820,
  "deliveryMin": 30,
  "deliveryFee": 3.5,
  "minOrder": 18,
  "distanceKm": 1.5,
  "notice": "每日限量手作甜品，甜度经过 128 次盲测校准，齁不到你。",
  "promos": [
   "满25减5",
   "第二份半价"
  ],
  "photo": "des2",
  "products": [
   {
    "id": "p2001",
    "name": "草莓芭菲杯杯",
    "photo": "des2",
    "cat": "招牌甜品",
    "desc": "草莓奶油饼干碎层层叠叠，挖到底部有惊喜",
    "price": 18,
    "origPrice": 24,
    "rating": 4.7,
    "sales": 883,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p2002",
    "name": "熔岩巧克力蛋糕糕",
    "photo": "des3",
    "cat": "招牌甜品",
    "desc": "一勺戳破，巧克力岩浆缓缓流出",
    "price": 22,
    "origPrice": 28,
    "rating": 4.5,
    "sales": 1416,
    "tags": []
   },
   {
    "id": "p2003",
    "name": "香草雪顶圣代代·香草",
    "photo": "des5",
    "cat": "冰品",
    "desc": "拍照五秒内请尽快食用",
    "price": 12,
    "origPrice": 16,
    "rating": 4.9,
    "sales": 4512,
    "tags": []
   },
   {
    "id": "p2004",
    "name": "香草雪顶圣代代·巧克力",
    "photo": "des5",
    "cat": "冰品",
    "desc": "甜品胃是另一个胃",
    "price": 12,
    "origPrice": 16,
    "rating": 4.8,
    "sales": 1821,
    "tags": []
   },
   {
    "id": "p2005",
    "name": "草莓冰淇淋甜筒筒",
    "photo": "des4",
    "cat": "冰品",
    "desc": "拍照五秒内请尽快食用",
    "price": 6,
    "origPrice": 8,
    "rating": 4.5,
    "sales": 2261,
    "tags": [
     "满25减5"
    ]
   },
   {
    "id": "p2006",
    "name": "蜂蜜厚松饼塔塔",
    "photo": "des1",
    "cat": "现烤松饼",
    "desc": "五层厚松饼淋野蜂蜜，蓝莓负责假装健康",
    "price": 16,
    "origPrice": 21,
    "rating": 4.7,
    "sales": 1369,
    "tags": []
   },
   {
    "id": "p2007",
    "name": "草莓松饼饼",
    "photo": "cake6",
    "cat": "现烤松饼",
    "desc": "一层一层都是心思",
    "price": 15,
    "origPrice": 20,
    "rating": 4.8,
    "sales": 817,
    "tags": []
   },
   {
    "id": "p2008",
    "name": "草莓果串甜心心",
    "photo": "cake4",
    "cat": "手作甜心",
    "desc": "叉子下去像踩进云端",
    "price": 13,
    "origPrice": 17,
    "rating": 4.6,
    "sales": 1567,
    "tags": [
     "满25减5"
    ]
   },
   {
    "id": "p2009",
    "name": "巧克力慕斯杯杯",
    "photo": "cake2",
    "cat": "手作甜心",
    "desc": "叉子下去像踩进云端",
    "price": 17,
    "origPrice": 22,
    "rating": 4.8,
    "sales": 1130,
    "tags": []
   },
   {
    "id": "p2010",
    "name": "缤纷甜品拼盘盘",
    "photo": "cake5",
    "cat": "手作甜心",
    "desc": "叉子下去像踩进云端",
    "price": 28,
    "origPrice": 35,
    "rating": 4.5,
    "sales": 639,
    "tags": []
   },
   {
    "id": "p2011",
    "name": "杨枝甘露露",
    "photo": "jc4",
    "cat": "糖水",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 16,
    "origPrice": 21,
    "rating": 4.6,
    "sales": 415,
    "tags": [
     "满25减5"
    ]
   },
   {
    "id": "p2012",
    "name": "莓果酸奶杯杯",
    "photo": "bowl5",
    "cat": "糖水",
    "desc": "食材当日直采，卡路里已帮你算好",
    "price": 12,
    "origPrice": 16,
    "rating": 4.5,
    "sales": 6101,
    "tags": []
   },
   {
    "id": "p2013",
    "name": "芒果白雪黑糯米米",
    "photo": "bowl4",
    "cat": "糖水",
    "desc": "健身教练看了都点头",
    "price": 15,
    "origPrice": 19,
    "rating": 4.4,
    "sales": 1023,
    "tags": []
   },
   {
    "id": "p2014",
    "name": "乳酪蛋糕条条",
    "photo": "dt8",
    "cat": "每日现做",
    "desc": "下午茶的正确打开方式",
    "price": 9,
    "origPrice": 11.5,
    "rating": 4.8,
    "sales": 572,
    "tags": []
   },
   {
    "id": "p2015",
    "name": "焦糖布丁挞挞",
    "photo": "dt9",
    "cat": "每日现做",
    "desc": "下午茶的正确打开方式",
    "price": 27,
    "origPrice": 34.5,
    "rating": 4.9,
    "sales": 1164,
    "tags": []
   },
   {
    "id": "p2016",
    "name": "杏仁瓦片酥酥",
    "photo": "dt10",
    "cat": "每日现做",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 11,
    "origPrice": 14.5,
    "rating": 4.7,
    "sales": 4714,
    "tags": []
   },
   {
    "id": "p2017",
    "name": "黄油曲奇奇",
    "photo": "dt11",
    "cat": "每日现做",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 32,
    "origPrice": 41,
    "rating": 4.6,
    "sales": 266,
    "tags": []
   },
   {
    "id": "p2018",
    "name": "提子燕麦饼饼",
    "photo": "dt12",
    "cat": "每日现做",
    "desc": "冷藏后风味更佳",
    "price": 9,
    "origPrice": 11.5,
    "rating": 4.7,
    "sales": 473,
    "tags": []
   },
   {
    "id": "p2019",
    "name": "莓果慕斯杯杯",
    "photo": "dt13",
    "cat": "每日现做",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 27,
    "origPrice": 34.5,
    "rating": 4.6,
    "sales": 1602,
    "tags": []
   },
   {
    "id": "p2020",
    "name": "巧克力脆脆卷卷",
    "photo": "dt14",
    "cat": "每日现做",
    "desc": "下午茶的正确打开方式",
    "price": 8,
    "origPrice": 10.5,
    "rating": 4.5,
    "sales": 2647,
    "tags": []
   },
   {
    "id": "p2021",
    "name": "椰蓉球球",
    "photo": "dt15",
    "cat": "每日现做",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 10,
    "origPrice": 12.5,
    "rating": 4.8,
    "sales": 426,
    "tags": []
   },
   {
    "id": "p2022",
    "name": "奶油泡芙芙",
    "photo": "dt16",
    "cat": "每日现做",
    "desc": "冷藏后风味更佳",
    "price": 31.5,
    "origPrice": 40,
    "rating": 4.6,
    "sales": 226,
    "tags": []
   },
   {
    "id": "p2023",
    "name": "流心芝士挞挞",
    "photo": "dt17",
    "cat": "每日现做",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 19,
    "origPrice": 24,
    "rating": 4.7,
    "sales": 4587,
    "tags": []
   },
   {
    "id": "p2024",
    "name": "奶香小方方",
    "photo": "dt18",
    "cat": "每日现做",
    "desc": "冷藏后风味更佳",
    "price": 13,
    "origPrice": 16.5,
    "rating": 4.9,
    "sales": 890,
    "tags": []
   },
   {
    "id": "p2025",
    "name": "蔓越莓司康康",
    "photo": "dt19",
    "cat": "每日现做",
    "desc": "下午茶的正确打开方式",
    "price": 10,
    "origPrice": 13,
    "rating": 4.7,
    "sales": 4911,
    "tags": []
   },
   {
    "id": "p2026",
    "name": "抹茶雪媚娘娘",
    "photo": "dt20",
    "cat": "每日现做",
    "desc": "冷藏后风味更佳",
    "price": 35.5,
    "origPrice": 45,
    "rating": 4.7,
    "sales": 2683,
    "tags": []
   },
   {
    "id": "p2027",
    "name": "海盐芝士卷卷",
    "photo": "dt21",
    "cat": "每日现做",
    "desc": "下午茶的正确打开方式",
    "price": 31,
    "origPrice": 40,
    "rating": 4.5,
    "sales": 202,
    "tags": []
   },
   {
    "id": "p2028",
    "name": "肉桂糖霜卷卷",
    "photo": "dt22",
    "cat": "每日现做",
    "desc": "冷藏后风味更佳",
    "price": 28,
    "origPrice": 35.5,
    "rating": 4.8,
    "sales": 444,
    "tags": []
   },
   {
    "id": "p2029",
    "name": "芝士条条",
    "photo": "dt23",
    "cat": "每日现做",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 30.5,
    "origPrice": 39.5,
    "rating": 4.7,
    "sales": 3005,
    "tags": []
   }
  ]
 },
 {
  "id": "s21",
  "name": "DQ冰雪皇后后",
  "category": "dessert",
  "logo": "👸",
  "brand": "DQ冰雪皇后后（DQ风）",
  "rating": 4.7,
  "monthlySales": 5210,
  "deliveryMin": 25,
  "deliveryFee": 4,
  "minOrder": 20,
  "distanceKm": 1.7,
  "notice": "倒杯不洒才是真暴风雪，到手请自行验货（洒了算我们的）。",
  "promos": [
   "满30减5"
  ],
  "photo": "des5",
  "products": [
   {
    "id": "p2101",
    "name": "奥利奥暴风雪雪·奥利奥",
    "photo": "des5",
    "cat": "暴风雪",
    "desc": "拍照五秒内请尽快食用",
    "price": 19,
    "origPrice": 24,
    "rating": 4.5,
    "sales": 2209,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p2102",
    "name": "奥利奥暴风雪雪·草莓",
    "photo": "des5",
    "cat": "暴风雪",
    "desc": "甜品胃是另一个胃",
    "price": 19,
    "origPrice": 24,
    "rating": 4.5,
    "sales": 5255,
    "tags": [
     "招牌"
    ]
   },
   {
    "id": "p2103",
    "name": "奥利奥暴风雪雪·抹茶",
    "photo": "des5",
    "cat": "暴风雪",
    "desc": "拍照五秒内请尽快食用",
    "price": 19,
    "origPrice": 24,
    "rating": 4.7,
    "sales": 3208,
    "tags": [
     "招牌"
    ]
   },
   {
    "id": "p2104",
    "name": "莓果新地地·莓果",
    "photo": "des2",
    "cat": "新地圣代",
    "desc": "甜品胃是另一个胃",
    "price": 14,
    "origPrice": 18,
    "rating": 4.6,
    "sales": 587,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p2105",
    "name": "莓果新地地·巧克力",
    "photo": "des2",
    "cat": "新地圣代",
    "desc": "甜品胃是另一个胃",
    "price": 14,
    "origPrice": 18,
    "rating": 4.7,
    "sales": 3585,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p2106",
    "name": "华夫脆筒筒·香草",
    "photo": "des4",
    "cat": "甜筒",
    "desc": "拍照五秒内请尽快食用",
    "price": 8,
    "origPrice": 10,
    "rating": 4.5,
    "sales": 1954,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p2107",
    "name": "华夫脆筒筒·草莓",
    "photo": "des4",
    "cat": "甜筒",
    "desc": "甜品胃是另一个胃",
    "price": 8,
    "origPrice": 10,
    "rating": 4.6,
    "sales": 432,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p2108",
    "name": "冰淇淋蛋糕糕（四寸）",
    "photo": "dt24",
    "cat": "冰淇淋蛋糕",
    "desc": "下午茶的正确打开方式",
    "price": 49,
    "origPrice": 62,
    "rating": 4.5,
    "sales": 1359,
    "tags": [
     "满30减5"
    ]
   },
   {
    "id": "p2109",
    "name": "莓莓冰霜杯杯",
    "photo": "jc4",
    "cat": "冰霜特调",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 16,
    "origPrice": 20,
    "rating": 4.4,
    "sales": 5446,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p2110",
    "name": "青柠冰霜杯杯",
    "photo": "drk2",
    "cat": "冰霜特调",
    "desc": "冰块加到怀疑人生，解暑一流",
    "price": 15,
    "origPrice": 19,
    "rating": 4.5,
    "sales": 2882,
    "tags": []
   },
   {
    "id": "p2111",
    "name": "肉桂糖霜卷卷",
    "photo": "dt25",
    "cat": "每日现做",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 9,
    "origPrice": 12,
    "rating": 4.6,
    "sales": 955,
    "tags": []
   },
   {
    "id": "p2112",
    "name": "椰蓉球球",
    "photo": "dt26",
    "cat": "每日现做",
    "desc": "下午茶的正确打开方式",
    "price": 22,
    "origPrice": 28.5,
    "rating": 4.5,
    "sales": 3448,
    "tags": []
   },
   {
    "id": "p2113",
    "name": "海盐芝士卷卷",
    "photo": "dt27",
    "cat": "每日现做",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 21.5,
    "origPrice": 27.5,
    "rating": 4.5,
    "sales": 810,
    "tags": []
   },
   {
    "id": "p2114",
    "name": "杏仁瓦片酥酥",
    "photo": "dt28",
    "cat": "每日现做",
    "desc": "下午茶的正确打开方式",
    "price": 12.5,
    "origPrice": 15.5,
    "rating": 4.6,
    "sales": 5145,
    "tags": []
   },
   {
    "id": "p2115",
    "name": "奶油泡芙芙",
    "photo": "dt29",
    "cat": "每日现做",
    "desc": "冷藏后风味更佳",
    "price": 9.5,
    "origPrice": 12.5,
    "rating": 4.8,
    "sales": 6096,
    "tags": []
   },
   {
    "id": "p2116",
    "name": "焦糖布丁挞挞",
    "photo": "dt30",
    "cat": "每日现做",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 23.5,
    "origPrice": 30,
    "rating": 4.6,
    "sales": 6473,
    "tags": []
   },
   {
    "id": "p2117",
    "name": "莓果慕斯杯杯",
    "photo": "dt31",
    "cat": "每日现做",
    "desc": "冷藏后风味更佳",
    "price": 33.5,
    "origPrice": 42.5,
    "rating": 4.8,
    "sales": 508,
    "tags": []
   },
   {
    "id": "p2118",
    "name": "蔓越莓司康康",
    "photo": "dt32",
    "cat": "每日现做",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 17,
    "origPrice": 22,
    "rating": 4.7,
    "sales": 3983,
    "tags": []
   },
   {
    "id": "p2119",
    "name": "黄油曲奇奇",
    "photo": "dt33",
    "cat": "每日现做",
    "desc": "下午茶的正确打开方式",
    "price": 34.5,
    "origPrice": 44.5,
    "rating": 4.5,
    "sales": 908,
    "tags": []
   },
   {
    "id": "p2120",
    "name": "乳酪蛋糕条条",
    "photo": "dt34",
    "cat": "每日现做",
    "desc": "下午茶的正确打开方式",
    "price": 36,
    "origPrice": 46,
    "rating": 4.7,
    "sales": 844,
    "tags": []
   },
   {
    "id": "p2121",
    "name": "抹茶雪媚娘娘",
    "photo": "dt35",
    "cat": "每日现做",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 30.5,
    "origPrice": 39,
    "rating": 4.9,
    "sales": 237,
    "tags": []
   },
   {
    "id": "p2122",
    "name": "提子燕麦饼饼",
    "photo": "dt36",
    "cat": "每日现做",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 24.5,
    "origPrice": 31.5,
    "rating": 4.5,
    "sales": 252,
    "tags": []
   },
   {
    "id": "p2123",
    "name": "巧克力脆脆卷卷",
    "photo": "dt1",
    "cat": "每日现做",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 15.5,
    "origPrice": 19.5,
    "rating": 4.5,
    "sales": 575,
    "tags": []
   },
   {
    "id": "p2124",
    "name": "流心芝士挞挞",
    "photo": "dt2",
    "cat": "每日现做",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 12,
    "origPrice": 15.5,
    "rating": 4.5,
    "sales": 3646,
    "tags": []
   },
   {
    "id": "p2125",
    "name": "奶香小方方",
    "photo": "dt3",
    "cat": "每日现做",
    "desc": "冷藏后风味更佳",
    "price": 28,
    "origPrice": 36,
    "rating": 4.7,
    "sales": 3647,
    "tags": []
   },
   {
    "id": "p2126",
    "name": "芝士条条",
    "photo": "dt4",
    "cat": "每日现做",
    "desc": "下午茶的正确打开方式",
    "price": 25,
    "origPrice": 32,
    "rating": 4.8,
    "sales": 473,
    "tags": []
   }
  ]
 },
 {
  "id": "s22",
  "name": "轻食主意义",
  "category": "brunch",
  "logo": "🥗",
  "brand": "轻食主意义（gaga鲜语风）",
  "rating": 4.7,
  "monthlySales": 4560,
  "deliveryMin": 27,
  "deliveryFee": 5,
  "minOrder": 30,
  "distanceKm": 2,
  "notice": "低卡不低配，食材当日直采。卡路里已帮你算好，放心吃。",
  "promos": [
   "满40减8"
  ],
  "photo": "bowl2",
  "products": [
   {
    "id": "p2201",
    "name": "牛油果溏心蛋轻食碗碗",
    "photo": "brk6",
    "cat": "元气碗",
    "desc": "牛油果泥配溏心蛋，健身教练看了都点头",
    "price": 27,
    "origPrice": 33,
    "rating": 4.5,
    "sales": 2070,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p2202",
    "name": "彩虹能量碗碗",
    "photo": "bowl2",
    "cat": "元气碗",
    "desc": "低卡不低配，吃饱不胖",
    "price": 26,
    "origPrice": 32,
    "rating": 4.6,
    "sales": 418,
    "tags": []
   },
   {
    "id": "p2203",
    "name": "三文鱼牛油果碗碗",
    "photo": "bowl3",
    "cat": "元气碗",
    "desc": "低卡不低配，吃饱不胖",
    "price": 32,
    "origPrice": 39,
    "rating": 4.5,
    "sales": 1205,
    "tags": []
   },
   {
    "id": "p2204",
    "name": "照烧鸡胸能量碗碗",
    "photo": "bowl8",
    "cat": "元气碗",
    "desc": "低卡不低配，吃饱不胖",
    "price": 28,
    "origPrice": 34,
    "rating": 4.9,
    "sales": 404,
    "tags": [
     "满40减8"
    ]
   },
   {
    "id": "p2205",
    "name": "牛肉太阳蛋能量盘盘",
    "photo": "bowl10",
    "cat": "元气碗",
    "desc": "低卡不低配，吃饱不胖",
    "price": 30,
    "origPrice": 36,
    "rating": 4.8,
    "sales": 4259,
    "tags": []
   },
   {
    "id": "p2206",
    "name": "香蕉燕麦酸奶碗碗",
    "photo": "brk3",
    "cat": "酸奶轻食",
    "desc": "健身教练看了都点头",
    "price": 29,
    "origPrice": 35,
    "rating": 4.6,
    "sales": 331,
    "tags": []
   },
   {
    "id": "p2207",
    "name": "莓果酸奶麦片碗碗",
    "photo": "bowl4",
    "cat": "酸奶轻食",
    "desc": "健身教练看了都点头",
    "price": 25,
    "origPrice": 31,
    "rating": 4.6,
    "sales": 905,
    "tags": [
     "满40减8"
    ]
   },
   {
    "id": "p2208",
    "name": "草莓燕麦杯杯",
    "photo": "brk8",
    "cat": "酸奶轻食",
    "desc": "低卡不低配，吃饱不胖",
    "price": 22,
    "origPrice": 28,
    "rating": 4.5,
    "sales": 2572,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p2209",
    "name": "全麦太阳蛋吐司司",
    "photo": "sand3",
    "cat": "轻食主食",
    "desc": "食材当日直采，卡路里已帮你算好",
    "price": 22,
    "origPrice": 28,
    "rating": 4.5,
    "sales": 399,
    "tags": []
   },
   {
    "id": "p2210",
    "name": "蛋沙拉开放吐司司",
    "photo": "bowl6",
    "cat": "轻食主食",
    "desc": "健身教练看了都点头",
    "price": 21,
    "origPrice": 26,
    "rating": 4.7,
    "sales": 2691,
    "tags": [
     "满40减8"
    ]
   },
   {
    "id": "p2211",
    "name": "紫甘蓝藜麦素堡堡",
    "photo": "bowl7",
    "cat": "轻食主食",
    "desc": "健身教练看了都点头",
    "price": 24,
    "origPrice": 30,
    "rating": 4.7,
    "sales": 295,
    "tags": []
   },
   {
    "id": "p2212",
    "name": "凯撒鸡肉沙拉拉",
    "photo": "sal5",
    "cat": "沙拉",
    "desc": "拍完照记得趁新鲜吃",
    "price": 25,
    "origPrice": 31,
    "rating": 4.8,
    "sales": 4166,
    "tags": []
   },
   {
    "id": "p2213",
    "name": "烤蔬温沙拉拉",
    "photo": "sal3",
    "cat": "沙拉",
    "desc": "爽脆时蔬配油醋汁",
    "price": 21,
    "origPrice": 26,
    "rating": 4.9,
    "sales": 289,
    "tags": [
     "满40减8"
    ]
   },
   {
    "id": "p2214",
    "name": "田园大拌菜菜",
    "photo": "sal1",
    "cat": "沙拉",
    "desc": "拍完照记得趁新鲜吃",
    "price": 16,
    "origPrice": 20,
    "rating": 4.5,
    "sales": 261,
    "tags": []
   },
   {
    "id": "p2215",
    "name": "冷压青汁汁",
    "photo": "jc6",
    "cat": "冷压果汁",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 15,
    "origPrice": 19,
    "rating": 4.8,
    "sales": 1491,
    "tags": []
   },
   {
    "id": "p2216",
    "name": "冷压混合果汁汁",
    "photo": "jc5",
    "cat": "冷压果汁",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 16,
    "origPrice": 20,
    "rating": 4.5,
    "sales": 1172,
    "tags": [
     "满40减8"
    ]
   },
   {
    "id": "p2217",
    "name": "杏仁瓦片酥酥",
    "photo": "dt5",
    "cat": "轻甜点",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 25.5,
    "origPrice": 32.5,
    "rating": 4.7,
    "sales": 1514,
    "tags": []
   },
   {
    "id": "p2218",
    "name": "流心芝士挞挞",
    "photo": "dt6",
    "cat": "轻甜点",
    "desc": "下午茶的正确打开方式",
    "price": 27.5,
    "origPrice": 35,
    "rating": 4.6,
    "sales": 1465,
    "tags": []
   },
   {
    "id": "p2219",
    "name": "抹茶雪媚娘娘",
    "photo": "dt7",
    "cat": "轻甜点",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 29.5,
    "origPrice": 37.5,
    "rating": 4.6,
    "sales": 1078,
    "tags": []
   },
   {
    "id": "p2220",
    "name": "焦糖布丁挞挞",
    "photo": "dt8",
    "cat": "轻甜点",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 37,
    "origPrice": 47,
    "rating": 4.9,
    "sales": 1514,
    "tags": []
   },
   {
    "id": "p2221",
    "name": "莓果慕斯杯杯",
    "photo": "dt9",
    "cat": "轻甜点",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 15,
    "origPrice": 19.5,
    "rating": 4.4,
    "sales": 4168,
    "tags": []
   },
   {
    "id": "p2222",
    "name": "蔓越莓司康康",
    "photo": "dt10",
    "cat": "轻甜点",
    "desc": "冷藏后风味更佳",
    "price": 23.5,
    "origPrice": 30,
    "rating": 4.8,
    "sales": 4043,
    "tags": []
   },
   {
    "id": "p2223",
    "name": "乳酪蛋糕条条",
    "photo": "dt11",
    "cat": "轻甜点",
    "desc": "下午茶的正确打开方式",
    "price": 24.5,
    "origPrice": 31.5,
    "rating": 4.7,
    "sales": 6116,
    "tags": []
   },
   {
    "id": "p2224",
    "name": "海盐芝士卷卷",
    "photo": "dt12",
    "cat": "轻甜点",
    "desc": "下午茶的正确打开方式",
    "price": 10.5,
    "origPrice": 13.5,
    "rating": 4.6,
    "sales": 2700,
    "tags": []
   },
   {
    "id": "p2225",
    "name": "提子燕麦饼饼",
    "photo": "dt13",
    "cat": "轻甜点",
    "desc": "冷藏后风味更佳",
    "price": 30,
    "origPrice": 38,
    "rating": 4.6,
    "sales": 206,
    "tags": []
   },
   {
    "id": "p2226",
    "name": "肉桂糖霜卷卷",
    "photo": "dt14",
    "cat": "轻甜点",
    "desc": "冷藏后风味更佳",
    "price": 32,
    "origPrice": 41,
    "rating": 4.4,
    "sales": 1724,
    "tags": []
   },
   {
    "id": "p2227",
    "name": "椰蓉球球",
    "photo": "dt15",
    "cat": "轻甜点",
    "desc": "冷藏后风味更佳",
    "price": 27.5,
    "origPrice": 35,
    "rating": 4.6,
    "sales": 374,
    "tags": []
   },
   {
    "id": "p2228",
    "name": "奶油泡芙芙",
    "photo": "dt16",
    "cat": "轻甜点",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 26,
    "origPrice": 33,
    "rating": 4.5,
    "sales": 2048,
    "tags": []
   }
  ]
 },
 {
  "id": "s23",
  "name": "超级碗碗",
  "category": "brunch",
  "logo": "🥙",
  "brand": "超级碗碗（Wagas轻食风）",
  "rating": 4.6,
  "monthlySales": 3210,
  "deliveryMin": 30,
  "deliveryFee": 5.5,
  "minOrder": 35,
  "distanceKm": 2.6,
  "notice": "碗大料足的 brunch 专门店，周末的仪式感外送到家。",
  "promos": [
   "满45减9"
  ],
  "photo": "bowl9",
  "products": [
   {
    "id": "p2301",
    "name": "早午餐大满足盘盘",
    "photo": "bowl9",
    "cat": "招牌Brunch",
    "desc": "低卡不低配，吃饱不胖",
    "price": 35,
    "origPrice": 43,
    "rating": 4.6,
    "sales": 5243,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p2302",
    "name": "帕玛森煎蛋沙拉盘盘",
    "photo": "brk4",
    "cat": "招牌Brunch",
    "desc": "健身教练看了都点头",
    "price": 30,
    "origPrice": 37,
    "rating": 4.4,
    "sales": 763,
    "tags": []
   },
   {
    "id": "p2303",
    "name": "烤蘑菇牛油果盘盘",
    "photo": "brk2",
    "cat": "招牌Brunch",
    "desc": "健身教练看了都点头",
    "price": 29,
    "origPrice": 36,
    "rating": 4.6,
    "sales": 1431,
    "tags": []
   },
   {
    "id": "p2304",
    "name": "椰香松饼配莓果果",
    "photo": "brk9",
    "cat": "招牌Brunch",
    "desc": "低卡不低配，吃饱不胖",
    "price": 26,
    "origPrice": 32,
    "rating": 4.4,
    "sales": 3279,
    "tags": [
     "满45减9"
    ]
   },
   {
    "id": "p2305",
    "name": "太阳蛋煎饼盘盘",
    "photo": "sand2",
    "cat": "招牌Brunch",
    "desc": "健身教练看了都点头",
    "price": 24,
    "origPrice": 30,
    "rating": 4.5,
    "sales": 3683,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p2306",
    "name": "金枪鱼塔塔杯杯",
    "photo": "sushi4",
    "cat": "轻食小点",
    "desc": "当日渔获，新鲜看得见",
    "price": 28,
    "origPrice": 35,
    "rating": 4.5,
    "sales": 3997,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p2307",
    "name": "帕尼尼三明治治",
    "photo": "sand1",
    "cat": "轻食小点",
    "desc": "低卡不低配，吃饱不胖",
    "price": 23,
    "origPrice": 29,
    "rating": 4.6,
    "sales": 4942,
    "tags": [
     "满45减9"
    ]
   },
   {
    "id": "p2308",
    "name": "南瓜浓汤汤",
    "photo": "soup2",
    "cat": "轻食小点",
    "desc": "炖足八小时，浓稠挂勺",
    "price": 14,
    "origPrice": 18,
    "rating": 4.7,
    "sales": 2524,
    "tags": []
   },
   {
    "id": "p2309",
    "name": "海鲜浓汤汤",
    "photo": "soup4",
    "cat": "轻食小点",
    "desc": "先喝汤是老规矩",
    "price": 17,
    "origPrice": 22,
    "rating": 4.7,
    "sales": 1986,
    "tags": []
   },
   {
    "id": "p2310",
    "name": "鲜打红心果昔昔",
    "photo": "jc4",
    "cat": "果昔",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 18,
    "origPrice": 23,
    "rating": 4.9,
    "sales": 1548,
    "tags": [
     "满45减9"
    ]
   },
   {
    "id": "p2311",
    "name": "牛油果香蕉果昔昔",
    "photo": "jc7",
    "cat": "果昔",
    "desc": "冷压锁鲜，果肉打到细腻",
    "price": 19,
    "origPrice": 24,
    "rating": 4.8,
    "sales": 1110,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p2312",
    "name": "奶油泡芙芙",
    "photo": "dt17",
    "cat": "轻甜点",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 24,
    "origPrice": 31,
    "rating": 4.6,
    "sales": 3593,
    "tags": []
   },
   {
    "id": "p2313",
    "name": "海盐芝士卷卷",
    "photo": "dt18",
    "cat": "轻甜点",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 33,
    "origPrice": 42,
    "rating": 4.7,
    "sales": 4267,
    "tags": []
   },
   {
    "id": "p2314",
    "name": "肉桂糖霜卷卷",
    "photo": "dt19",
    "cat": "轻甜点",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 18,
    "origPrice": 23,
    "rating": 4.9,
    "sales": 1577,
    "tags": []
   },
   {
    "id": "p2315",
    "name": "奶香小方方",
    "photo": "dt20",
    "cat": "轻甜点",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 20,
    "origPrice": 25.5,
    "rating": 4.7,
    "sales": 3483,
    "tags": []
   },
   {
    "id": "p2316",
    "name": "流心芝士挞挞",
    "photo": "dt21",
    "cat": "轻甜点",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 30,
    "origPrice": 38.5,
    "rating": 4.5,
    "sales": 760,
    "tags": []
   },
   {
    "id": "p2317",
    "name": "提子燕麦饼饼",
    "photo": "dt22",
    "cat": "轻甜点",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 28,
    "origPrice": 36,
    "rating": 4.7,
    "sales": 793,
    "tags": []
   },
   {
    "id": "p2318",
    "name": "黄油曲奇奇",
    "photo": "dt23",
    "cat": "轻甜点",
    "desc": "下午茶的正确打开方式",
    "price": 19.5,
    "origPrice": 25,
    "rating": 4.4,
    "sales": 1406,
    "tags": []
   },
   {
    "id": "p2319",
    "name": "抹茶雪媚娘娘",
    "photo": "dt24",
    "cat": "轻甜点",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 27.5,
    "origPrice": 35,
    "rating": 4.8,
    "sales": 3665,
    "tags": []
   },
   {
    "id": "p2320",
    "name": "椰蓉球球",
    "photo": "dt25",
    "cat": "轻甜点",
    "desc": "下午茶的正确打开方式",
    "price": 31.5,
    "origPrice": 40.5,
    "rating": 4.5,
    "sales": 3195,
    "tags": []
   },
   {
    "id": "p2321",
    "name": "蔓越莓司康康",
    "photo": "dt26",
    "cat": "轻甜点",
    "desc": "下午茶的正确打开方式",
    "price": 12.5,
    "origPrice": 16,
    "rating": 4.7,
    "sales": 492,
    "tags": []
   },
   {
    "id": "p2322",
    "name": "乳酪蛋糕条条",
    "photo": "dt27",
    "cat": "轻甜点",
    "desc": "下午茶的正确打开方式",
    "price": 9.5,
    "origPrice": 12,
    "rating": 4.6,
    "sales": 1692,
    "tags": []
   },
   {
    "id": "p2323",
    "name": "焦糖布丁挞挞",
    "photo": "dt28",
    "cat": "轻甜点",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 33.5,
    "origPrice": 42.5,
    "rating": 4.5,
    "sales": 1772,
    "tags": []
   },
   {
    "id": "p2324",
    "name": "巧克力脆脆卷卷",
    "photo": "dt29",
    "cat": "轻甜点",
    "desc": "下午茶的正确打开方式",
    "price": 17.5,
    "origPrice": 22.5,
    "rating": 4.6,
    "sales": 2535,
    "tags": []
   },
   {
    "id": "p2325",
    "name": "莓果慕斯杯杯",
    "photo": "dt30",
    "cat": "轻甜点",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 16.5,
    "origPrice": 21.5,
    "rating": 4.7,
    "sales": 6082,
    "tags": []
   },
   {
    "id": "p2326",
    "name": "杏仁瓦片酥酥",
    "photo": "dt31",
    "cat": "轻甜点",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 31,
    "origPrice": 40,
    "rating": 4.5,
    "sales": 888,
    "tags": []
   },
   {
    "id": "p2327",
    "name": "芝士条条",
    "photo": "dt32",
    "cat": "轻甜点",
    "desc": "下午茶的正确打开方式",
    "price": 20.5,
    "origPrice": 26,
    "rating": 4.8,
    "sales": 1893,
    "tags": []
   }
  ]
 },
 {
  "id": "s24",
  "name": "海底捞捞",
  "category": "hotpot",
  "logo": "🍲",
  "brand": "海底捞捞（海底捞风）",
  "rating": 4.9,
  "monthlySales": 7877,
  "deliveryMin": 45,
  "deliveryFee": 6,
  "minOrder": 60,
  "distanceKm": 3.1,
  "notice": "外送汤锅配保温袋和围裙，服务态度好到你不好意思差评。",
  "promos": [
   "满100减20"
  ],
  "photo": "sea6",
  "products": [
   {
    "id": "p2401",
    "name": "番茄浓汤锅底底",
    "photo": "soup3",
    "cat": "锅底",
    "desc": "八颗番茄熬一锅，先喝三碗汤再涮菜是老规矩",
    "price": 45,
    "origPrice": 58,
    "rating": 4.9,
    "sales": 3409,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p2402",
    "name": "冬阴功海鲜锅底底",
    "photo": "soup1",
    "cat": "锅底",
    "desc": "先喝汤是老规矩",
    "price": 48,
    "origPrice": 60,
    "rating": 4.6,
    "sales": 2887,
    "tags": []
   },
   {
    "id": "p2403",
    "name": "菌菇浓汤锅底底",
    "photo": "soup5",
    "cat": "锅底",
    "desc": "暖胃暖心，一碗见底",
    "price": 42,
    "origPrice": 54,
    "rating": 4.6,
    "sales": 1625,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p2404",
    "name": "麻辣清油锅底底",
    "photo": "ndl6",
    "cat": "锅底",
    "desc": "辣椒在锅里练轻功，辣度分五档请掂量实力",
    "price": 52,
    "origPrice": 66,
    "rating": 4.8,
    "sales": 4158,
    "tags": [
     "满100减20"
    ]
   },
   {
    "id": "p2405",
    "name": "青翡翠豆腐锅底底",
    "photo": "soup6",
    "cat": "锅底",
    "desc": "暖胃暖心，一碗见底",
    "price": 38,
    "origPrice": 48,
    "rating": 4.7,
    "sales": 1684,
    "tags": []
   },
   {
    "id": "p2406",
    "name": "海鲜什锦拼锅锅",
    "photo": "sea6",
    "cat": "海鲜涮品",
    "desc": "当日海货，鲜字当头",
    "price": 68,
    "origPrice": 85,
    "rating": 4.7,
    "sales": 7198,
    "tags": []
   },
   {
    "id": "p2407",
    "name": "海鲜什锦拼锅锅（大份）",
    "photo": "sea6",
    "cat": "海鲜涮品",
    "desc": "壳一掀开，海风扑面",
    "price": 98.5,
    "origPrice": 123.5,
    "rating": 4.7,
    "sales": 3784,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p2408",
    "name": "鲜活大虾拼盘盘",
    "photo": "sea1",
    "cat": "海鲜涮品",
    "desc": "当日海货，鲜字当头",
    "price": 58,
    "origPrice": 72,
    "rating": 4.6,
    "sales": 2770,
    "tags": [
     "满100减20"
    ]
   },
   {
    "id": "p2409",
    "name": "鲜活大虾拼盘盘（大份）",
    "photo": "sea1",
    "cat": "海鲜涮品",
    "desc": "当日海货，鲜字当头",
    "price": 84,
    "origPrice": 104.5,
    "rating": 4.8,
    "sales": 1139,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p2410",
    "name": "深海虾滑拼拼",
    "photo": "sea4",
    "cat": "海鲜涮品",
    "desc": "蒜蓉是所有海鲜的官配",
    "price": 42,
    "origPrice": 52,
    "rating": 4.6,
    "sales": 3815,
    "tags": []
   },
   {
    "id": "p2411",
    "name": "蛤蜊贝贝拼盘盘",
    "photo": "sea7",
    "cat": "海鲜涮品",
    "desc": "当日海货，鲜字当头",
    "price": 36,
    "origPrice": 45,
    "rating": 4.6,
    "sales": 1232,
    "tags": []
   },
   {
    "id": "p2412",
    "name": "时蔬大拼篮篮",
    "photo": "veg2",
    "cat": "素菜主食",
    "desc": "菜篮子直送，涮完记得喝汤",
    "price": 28,
    "origPrice": 35,
    "rating": 4.7,
    "sales": 2005,
    "tags": [
     "满100减20"
    ]
   },
   {
    "id": "p2413",
    "name": "果蔬鲜切拼盘盘",
    "photo": "veg1",
    "cat": "素菜主食",
    "desc": "菜篮子直送，新鲜看得见",
    "price": 24,
    "origPrice": 30,
    "rating": 4.7,
    "sales": 823,
    "tags": []
   },
   {
    "id": "p2414",
    "name": "西兰花花",
    "photo": "veg6",
    "cat": "素菜主食",
    "desc": "菜篮子直送，新鲜看得见",
    "price": 12,
    "origPrice": 15,
    "rating": 4.7,
    "sales": 7324,
    "tags": []
   },
   {
    "id": "p2415",
    "name": "番茄土豆双拼拼",
    "photo": "veg5",
    "cat": "素菜主食",
    "desc": "菜篮子直送，新鲜看得见",
    "price": 10,
    "origPrice": 13,
    "rating": 4.8,
    "sales": 297,
    "tags": [
     "满100减20"
    ]
   },
   {
    "id": "p2416",
    "name": "捞派手工面面",
    "photo": "ndl3",
    "cat": "素菜主食",
    "desc": "面条劲道，久泡不坨",
    "price": 12,
    "origPrice": 16,
    "rating": 4.6,
    "sales": 1348,
    "tags": []
   },
   {
    "id": "p2417",
    "name": "酸梅汤汤",
    "photo": "jc5",
    "cat": "饮品甜品",
    "desc": "冷压锁鲜，果肉打到细腻",
    "price": 10,
    "origPrice": 13,
    "rating": 4.9,
    "sales": 1311,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p2418",
    "name": "酸梅汤汤（大杯）",
    "photo": "jc5",
    "cat": "饮品甜品",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 13,
    "origPrice": 16,
    "rating": 4.8,
    "sales": 2364,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p2419",
    "name": "冰粉甜甜杯杯",
    "photo": "bowl5",
    "cat": "饮品甜品",
    "desc": "食材当日直采，卡路里已帮你算好",
    "price": 9,
    "origPrice": 12,
    "rating": 4.4,
    "sales": 666,
    "tags": [
     "满100减20"
    ]
   }
  ]
 },
 {
  "id": "s25",
  "name": "汤先生生",
  "category": "hotpot",
  "logo": "🍜",
  "brand": "汤先生生（汤先生风）",
  "rating": 4.6,
  "monthlySales": 4320,
  "deliveryMin": 28,
  "deliveryFee": 3.5,
  "minOrder": 20,
  "distanceKm": 1.4,
  "notice": "喝汤这件小事，被我们做成了主业。炖足八小时起送。",
  "promos": [
   "满25减4"
  ],
  "photo": "soup2",
  "products": [
   {
    "id": "p2501",
    "name": "金瓜南瓜浓汤汤",
    "photo": "soup2",
    "cat": "暖心浓汤",
    "desc": "南瓜的甜是太阳晒出来的",
    "price": 15,
    "origPrice": 19,
    "rating": 4.5,
    "sales": 1486,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p2502",
    "name": "金瓜南瓜浓汤汤（大份）",
    "photo": "soup2",
    "cat": "暖心浓汤",
    "desc": "先喝汤是老规矩",
    "price": 22,
    "origPrice": 27.5,
    "rating": 4.7,
    "sales": 5848,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p2503",
    "name": "罗宋牛肉浓汤汤",
    "photo": "soup3",
    "cat": "暖心浓汤",
    "desc": "暖胃暖心，一碗见底",
    "price": 19,
    "origPrice": 24,
    "rating": 4.6,
    "sales": 900,
    "tags": []
   },
   {
    "id": "p2504",
    "name": "罗宋牛肉浓汤汤（大份）",
    "photo": "soup3",
    "cat": "暖心浓汤",
    "desc": "炖足八小时，浓稠挂勺",
    "price": 27.5,
    "origPrice": 35,
    "rating": 4.5,
    "sales": 1734,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p2505",
    "name": "海鲜大虾浓汤汤",
    "photo": "soup4",
    "cat": "暖心浓汤",
    "desc": "炖足八小时，浓稠挂勺",
    "price": 18,
    "origPrice": 23,
    "rating": 4.6,
    "sales": 311,
    "tags": []
   },
   {
    "id": "p2506",
    "name": "海鲜大虾浓汤汤（大份）",
    "photo": "soup4",
    "cat": "暖心浓汤",
    "desc": "先喝汤是老规矩",
    "price": 26,
    "origPrice": 33.5,
    "rating": 4.8,
    "sales": 2785,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p2507",
    "name": "奶油蘑菇浓汤汤",
    "photo": "soup5",
    "cat": "暖心浓汤",
    "desc": "炖足八小时，浓稠挂勺",
    "price": 14,
    "origPrice": 18,
    "rating": 4.4,
    "sales": 1560,
    "tags": [
     "满25减4"
    ]
   },
   {
    "id": "p2508",
    "name": "奶油蘑菇浓汤汤（大份）",
    "photo": "soup5",
    "cat": "暖心浓汤",
    "desc": "炖足八小时，浓稠挂勺",
    "price": 20.5,
    "origPrice": 26,
    "rating": 4.7,
    "sales": 1382,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p2509",
    "name": "翡翠豆腐煲煲",
    "photo": "soup6",
    "cat": "炖煲",
    "desc": "先喝汤是老规矩",
    "price": 16,
    "origPrice": 20,
    "rating": 4.4,
    "sales": 808,
    "tags": []
   },
   {
    "id": "p2510",
    "name": "冬阴功浓汤煲煲",
    "photo": "soup1",
    "cat": "炖煲",
    "desc": "先喝汤是老规矩",
    "price": 21,
    "origPrice": 26,
    "rating": 4.8,
    "sales": 6901,
    "tags": []
   },
   {
    "id": "p2511",
    "name": "配汤面包盅盅",
    "photo": "bread",
    "cat": "主食搭配",
    "desc": "外卖也不将就，包装扎实",
    "price": 6,
    "origPrice": 8,
    "rating": 4.5,
    "sales": 2832,
    "tags": [
     "满25减4"
    ]
   },
   {
    "id": "p2512",
    "name": "蛋沙拉吐司司",
    "photo": "bowl6",
    "cat": "主食搭配",
    "desc": "低卡不低配，吃饱不胖",
    "price": 12,
    "origPrice": 15,
    "rating": 4.4,
    "sales": 286,
    "tags": [
     "人气"
    ]
   }
  ]
 },
 {
  "id": "s26",
  "name": "木屋烧烤烤",
  "category": "bbq",
  "logo": "🍢",
  "brand": "木屋烧烤烤（木屋烧烤风）",
  "rating": 4.6,
  "monthlySales": 8210,
  "deliveryMin": 40,
  "deliveryFee": 5,
  "minOrder": 35,
  "distanceKm": 2.7,
  "notice": "炭火现烤，深夜灵魂食堂。烤串到手请趁热，凉了味道减半。",
  "promos": [
   "满50减10"
  ],
  "photo": "grill1",
  "products": [
   {
    "id": "p2601",
    "name": "炭烤羊肉串串（五串）",
    "photo": "grill4",
    "cat": "肉串",
    "desc": "孜然和辣椒面的黄金比例，一撸一大把",
    "price": 22,
    "origPrice": 28,
    "rating": 4.7,
    "sales": 3685,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p2602",
    "name": "炭烤羊肉串串（10串）",
    "photo": "grill4",
    "cat": "肉串",
    "desc": "趁热撸串，凉了味道减半",
    "price": 42,
    "origPrice": 53,
    "rating": 4.5,
    "sales": 5373,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p2603",
    "name": "炭烤羊肉串串（20串）",
    "photo": "grill4",
    "cat": "肉串",
    "desc": "趁热撸串，凉了味道减半",
    "price": 79,
    "origPrice": 101,
    "rating": 4.7,
    "sales": 2679,
    "tags": [
     "夜宵局"
    ]
   },
   {
    "id": "p2604",
    "name": "秘制牛肉串串（五串）",
    "photo": "grill3",
    "cat": "肉串",
    "desc": "炭火现烤，滋滋冒油",
    "price": 26,
    "origPrice": 33,
    "rating": 4.6,
    "sales": 632,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p2605",
    "name": "秘制牛肉串串（10串）",
    "photo": "grill3",
    "cat": "肉串",
    "desc": "孜然辣椒面双料齐下",
    "price": 49.5,
    "origPrice": 62.5,
    "rating": 4.8,
    "sales": 543,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p2606",
    "name": "秘制牛肉串串（20串）",
    "photo": "grill3",
    "cat": "肉串",
    "desc": "趁热撸串，凉了味道减半",
    "price": 93.5,
    "origPrice": 119,
    "rating": 4.7,
    "sales": 7714,
    "tags": [
     "夜宵局"
    ]
   },
   {
    "id": "p2607",
    "name": "蜜汁猪肉串串（五串）",
    "photo": "saus1",
    "cat": "肉串",
    "desc": "回购率很高的一款，闭眼点不踩雷",
    "price": 18,
    "origPrice": 23,
    "rating": 4.5,
    "sales": 2076,
    "tags": []
   },
   {
    "id": "p2608",
    "name": "蜜汁猪肉串串（10串）",
    "photo": "saus1",
    "cat": "肉串",
    "desc": "外卖也不将就，包装扎实",
    "price": 34,
    "origPrice": 43.5,
    "rating": 4.6,
    "sales": 3738,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p2609",
    "name": "蜜汁猪肉串串（20串）",
    "photo": "saus1",
    "cat": "肉串",
    "desc": "外卖也不将就，包装扎实",
    "price": 65,
    "origPrice": 83,
    "rating": 4.4,
    "sales": 2180,
    "tags": [
     "夜宵局"
    ]
   },
   {
    "id": "p2610",
    "name": "烤全羊排大件件",
    "photo": "grill2",
    "cat": "硬菜",
    "desc": "慢烤两小时的羊排，撕开的瞬间理解了豪迈",
    "price": 88,
    "origPrice": 108,
    "rating": 4.6,
    "sales": 3585,
    "tags": [
     "满50减10"
    ]
   },
   {
    "id": "p2611",
    "name": "炭烤大拼盘盘",
    "photo": "grill1",
    "cat": "硬菜",
    "desc": "烤场全明星阵容，深夜两人局的顶配",
    "price": 98,
    "origPrice": 120,
    "rating": 4.4,
    "sales": 2013,
    "tags": []
   },
   {
    "id": "p2612",
    "name": "果木烤鸡腿腿",
    "photo": "grill7",
    "cat": "硬菜",
    "desc": "炭火现烤，滋滋冒油",
    "price": 16,
    "origPrice": 20,
    "rating": 4.8,
    "sales": 3779,
    "tags": []
   },
   {
    "id": "p2613",
    "name": "甜辣烤翅中中（四只）",
    "photo": "grill5",
    "cat": "烤翅烤鱼",
    "desc": "炭火现烤，滋滋冒油",
    "price": 18,
    "origPrice": 23,
    "rating": 4.8,
    "sales": 2636,
    "tags": [
     "满50减10"
    ]
   },
   {
    "id": "p2614",
    "name": "甜辣烤翅中中（大份）",
    "photo": "grill5",
    "cat": "烤翅烤鱼",
    "desc": "趁热撸串，凉了味道减半",
    "price": 26,
    "origPrice": 33.5,
    "rating": 4.6,
    "sales": 3220,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p2615",
    "name": "孜然烤翅尖尖",
    "photo": "grill8",
    "cat": "烤翅烤鱼",
    "desc": "腌足十二小时再上炭火",
    "price": 15,
    "origPrice": 19,
    "rating": 4.4,
    "sales": 1779,
    "tags": []
   },
   {
    "id": "p2616",
    "name": "盐烤大虾串串",
    "photo": "grill6",
    "cat": "烤翅烤鱼",
    "desc": "炭火现烤，滋滋冒油",
    "price": 22,
    "origPrice": 28,
    "rating": 4.5,
    "sales": 2108,
    "tags": []
   },
   {
    "id": "p2617",
    "name": "盐烤大虾串串（大份）",
    "photo": "grill6",
    "cat": "烤翅烤鱼",
    "desc": "炭火现烤，滋滋冒油",
    "price": 32,
    "origPrice": 40.5,
    "rating": 4.9,
    "sales": 487,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p2618",
    "name": "炭烤鱼排排",
    "photo": "stk6",
    "cat": "烤翅烤鱼",
    "desc": "刀叉切下去的瞬间，值回票价",
    "price": 32,
    "origPrice": 40,
    "rating": 4.8,
    "sales": 2680,
    "tags": [
     "满50减10"
    ]
   },
   {
    "id": "p2619",
    "name": "烤箱酱油炒面面",
    "photo": "ndl4",
    "cat": "主食小菜",
    "desc": "汤头熬足八小时",
    "price": 12,
    "origPrice": 15,
    "rating": 4.9,
    "sales": 6465,
    "tags": []
   },
   {
    "id": "p2620",
    "name": "拍黄瓜瓜",
    "photo": "sal4",
    "cat": "主食小菜",
    "desc": "爽脆时蔬配油醋汁",
    "price": 8,
    "origPrice": 11,
    "rating": 4.7,
    "sales": 5312,
    "tags": []
   },
   {
    "id": "p2621",
    "name": "冰镇酸梅汤汤",
    "photo": "jc5",
    "cat": "主食小菜",
    "desc": "冷压锁鲜，果肉打到细腻",
    "price": 8,
    "origPrice": 10,
    "rating": 4.4,
    "sales": 1081,
    "tags": [
     "满50减10"
    ]
   },
   {
    "id": "p2622",
    "name": "大扎冰啤特饮饮",
    "photo": "bev1",
    "cat": "主食小菜",
    "desc": "冰块加到怀疑人生，解暑一流",
    "price": 9,
    "origPrice": 12,
    "rating": 4.8,
    "sales": 204,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p2623",
    "name": "黄金脆角角",
    "photo": "sm1",
    "cat": "炸物小食",
    "desc": "三角酥脆，馅料给足",
    "price": 30,
    "origPrice": 38.5,
    "rating": 4.8,
    "sales": 1196,
    "tags": []
   },
   {
    "id": "p2624",
    "name": "洋葱脆角角",
    "photo": "sm2",
    "cat": "炸物小食",
    "desc": "三角酥脆，馅料给足",
    "price": 17.5,
    "origPrice": 22.5,
    "rating": 4.5,
    "sales": 933,
    "tags": []
   },
   {
    "id": "p2625",
    "name": "咖喱角角",
    "photo": "sm3",
    "cat": "炸物小食",
    "desc": "外脆内糯，配蘸水更妙",
    "price": 17.5,
    "origPrice": 22.5,
    "rating": 4.8,
    "sales": 4432,
    "tags": []
   }
  ]
 },
 {
  "id": "s27",
  "name": "很久很久以前串串",
  "category": "bbq",
  "logo": "🔥",
  "brand": "很久很久以前串串（很久以前羊肉串风）",
  "rating": 4.7,
  "monthlySales": 5670,
  "deliveryMin": 42,
  "deliveryFee": 5.5,
  "minOrder": 40,
  "distanceKm": 2.9,
  "notice": "只用当天现穿的肉串，炭火脾气很大，香味也是。",
  "promos": [
   "满60减12"
  ],
  "photo": "grill4",
  "products": [
   {
    "id": "p2701",
    "name": "招牌羊肉串串（五串）",
    "photo": "grill4",
    "cat": "招牌串",
    "desc": "趁热撸串，凉了味道减半",
    "price": 24,
    "origPrice": 30,
    "rating": 4.8,
    "sales": 1439,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p2702",
    "name": "招牌羊肉串串（10串）",
    "photo": "grill4",
    "cat": "招牌串",
    "desc": "孜然辣椒面双料齐下",
    "price": 45.5,
    "origPrice": 57,
    "rating": 4.5,
    "sales": 739,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p2703",
    "name": "招牌羊肉串串（20串）",
    "photo": "grill4",
    "cat": "招牌串",
    "desc": "趁热撸串，凉了味道减半",
    "price": 86.5,
    "origPrice": 108,
    "rating": 4.4,
    "sales": 2798,
    "tags": [
     "夜宵局"
    ]
   },
   {
    "id": "p2704",
    "name": "牛油黄喉串串（五串）",
    "photo": "grill3",
    "cat": "招牌串",
    "desc": "腌足十二小时再上炭火",
    "price": 20,
    "origPrice": 25,
    "rating": 4.7,
    "sales": 2733,
    "tags": []
   },
   {
    "id": "p2705",
    "name": "牛油黄喉串串（10串）",
    "photo": "grill3",
    "cat": "招牌串",
    "desc": "孜然辣椒面双料齐下",
    "price": 38,
    "origPrice": 47.5,
    "rating": 4.9,
    "sales": 763,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p2706",
    "name": "牛油黄喉串串（20串）",
    "photo": "grill3",
    "cat": "招牌串",
    "desc": "炭火现烤，滋滋冒油",
    "price": 72,
    "origPrice": 90,
    "rating": 4.8,
    "sales": 4837,
    "tags": [
     "夜宵局"
    ]
   },
   {
    "id": "p2707",
    "name": "掌中宝串串（五串）",
    "photo": "grill3",
    "cat": "招牌串",
    "desc": "趁热撸串，凉了味道减半",
    "price": 19,
    "origPrice": 24,
    "rating": 4.7,
    "sales": 2403,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p2708",
    "name": "掌中宝串串（10串）",
    "photo": "grill3",
    "cat": "招牌串",
    "desc": "趁热撸串，凉了味道减半",
    "price": 36,
    "origPrice": 45.5,
    "rating": 4.6,
    "sales": 339,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p2709",
    "name": "掌中宝串串（20串）",
    "photo": "grill3",
    "cat": "招牌串",
    "desc": "孜然辣椒面双料齐下",
    "price": 68.5,
    "origPrice": 86.5,
    "rating": 4.6,
    "sales": 970,
    "tags": [
     "夜宵局"
    ]
   },
   {
    "id": "p2710",
    "name": "烤羊排一整件件",
    "photo": "grill2",
    "cat": "硬菜",
    "desc": "孜然辣椒面双料齐下",
    "price": 92,
    "origPrice": 115,
    "rating": 4.8,
    "sales": 566,
    "tags": [
     "满60减12"
    ]
   },
   {
    "id": "p2711",
    "name": "烤肉全家福拼盘盘",
    "photo": "grill1",
    "cat": "硬菜",
    "desc": "炭火现烤，滋滋冒油",
    "price": 88,
    "origPrice": 110,
    "rating": 4.6,
    "sales": 673,
    "tags": []
   },
   {
    "id": "p2712",
    "name": "蜜汁烤翅翅",
    "photo": "grill5",
    "cat": "烤翅",
    "desc": "腌足十二小时再上炭火",
    "price": 17,
    "origPrice": 22,
    "rating": 4.4,
    "sales": 638,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p2713",
    "name": "蜜汁烤翅翅（大份）",
    "photo": "grill5",
    "cat": "烤翅",
    "desc": "腌足十二小时再上炭火",
    "price": 24.5,
    "origPrice": 32,
    "rating": 4.7,
    "sales": 2200,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p2714",
    "name": "椒盐烤大虾虾",
    "photo": "grill6",
    "cat": "烤翅",
    "desc": "腌足十二小时再上炭火",
    "price": 24,
    "origPrice": 30,
    "rating": 4.5,
    "sales": 2657,
    "tags": [
     "满60减12"
    ]
   },
   {
    "id": "p2715",
    "name": "烤鸡腿腿",
    "photo": "grill7",
    "cat": "烤翅",
    "desc": "腌足十二小时再上炭火",
    "price": 15,
    "origPrice": 19,
    "rating": 4.5,
    "sales": 2197,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p2716",
    "name": "炒面主食食",
    "photo": "ndl4",
    "cat": "主食",
    "desc": "面条劲道，久泡不坨",
    "price": 11,
    "origPrice": 14,
    "rating": 4.7,
    "sales": 1711,
    "tags": []
   },
   {
    "id": "p2717",
    "name": "冰镇快乐水水",
    "photo": "bev1",
    "cat": "主食",
    "desc": "鲜果现切现榨，不加一滴香精",
    "price": 7,
    "origPrice": 9,
    "rating": 4.7,
    "sales": 3085,
    "tags": [
     "满60减12"
    ]
   },
   {
    "id": "p2718",
    "name": "黄金脆角角",
    "photo": "sm4",
    "cat": "炸物小食",
    "desc": "三角酥脆，馅料给足",
    "price": 21.5,
    "origPrice": 27.5,
    "rating": 4.9,
    "sales": 576,
    "tags": []
   },
   {
    "id": "p2719",
    "name": "洋葱脆角角",
    "photo": "sm5",
    "cat": "炸物小食",
    "desc": "酥皮现包现炸，咬开小心烫",
    "price": 31,
    "origPrice": 39.5,
    "rating": 4.7,
    "sales": 7834,
    "tags": []
   },
   {
    "id": "p2720",
    "name": "咖喱角角",
    "photo": "sm6",
    "cat": "炸物小食",
    "desc": "外脆内糯，配蘸水更妙",
    "price": 10,
    "origPrice": 12.5,
    "rating": 4.6,
    "sales": 3195,
    "tags": []
   }
  ]
 },
 {
  "id": "s28",
  "name": "早点大王王",
  "category": "breakfast",
  "logo": "🥞",
  "brand": "早点大王王（路边煎饼摊天花板风）",
  "rating": 4.6,
  "monthlySales": 14210,
  "deliveryMin": 40,
  "deliveryFee": 5,
  "minOrder": 35,
  "distanceKm": 2.7,
  "notice": "凌晨四点就开火的早点铺，煎饼摊上见真章。",
  "promos": [
   "满50减10"
  ],
  "photo": "ds17",
  "products": [
   {
    "id": "p2801",
    "name": "手工杂粮煎饼饼",
    "photo": "ds2",
    "cat": "现摊煎饼",
    "desc": "面糊现摊，金黄薄脆，配咖喱蘸碟是隐藏吃法",
    "price": 4.5,
    "origPrice": 6,
    "rating": 4.6,
    "sales": 1616,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p2802",
    "name": "加蛋煎饼果子子",
    "photo": "ds3",
    "cat": "现摊煎饼",
    "desc": "配咖喱蘸碟是隐藏吃法",
    "price": 6.5,
    "origPrice": 8,
    "rating": 4.8,
    "sales": 6079,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p2803",
    "name": "双蛋双脆煎饼饼",
    "photo": "ds4",
    "cat": "现摊煎饼",
    "desc": "摊得比脸还大，卷起来刚刚好",
    "price": 9,
    "origPrice": 11,
    "rating": 4.8,
    "sales": 2965,
    "tags": []
   },
   {
    "id": "p2804",
    "name": "里脊肉煎饼饼",
    "photo": "ds5",
    "cat": "现摊煎饼",
    "desc": "摊得比脸还大，卷起来刚刚好",
    "price": 10,
    "origPrice": 12,
    "rating": 4.4,
    "sales": 264,
    "tags": [
     "满50减10"
    ]
   },
   {
    "id": "p2805",
    "name": "芝士脆皮煎饼卷卷",
    "photo": "ds6",
    "cat": "现摊煎饼",
    "desc": "摊得比脸还大，卷起来刚刚好",
    "price": 12,
    "origPrice": 15,
    "rating": 4.6,
    "sales": 1575,
    "tags": []
   },
   {
    "id": "p2806",
    "name": "黄金大饼卷万物物",
    "photo": "ds7",
    "cat": "现摊煎饼",
    "desc": "边缘脆芯软，趁热吃风味翻倍",
    "price": 13,
    "origPrice": 16,
    "rating": 4.9,
    "sales": 2410,
    "tags": []
   },
   {
    "id": "p2807",
    "name": "椒盐千层脆饼饼",
    "photo": "ds8",
    "cat": "现摊煎饼",
    "desc": "面糊现摊现卷，金黄薄脆",
    "price": 7,
    "origPrice": 9,
    "rating": 4.7,
    "sales": 768,
    "tags": [
     "满50减10"
    ]
   },
   {
    "id": "p2808",
    "name": "白玉米发糕糕",
    "photo": "id1",
    "cat": "蒸笼早点",
    "desc": "配一碟蘸汁，朴素但对味",
    "price": 8,
    "origPrice": 10,
    "rating": 4.8,
    "sales": 949,
    "tags": []
   },
   {
    "id": "p2809",
    "name": "红糖松糕糕",
    "photo": "id2",
    "cat": "蒸笼早点",
    "desc": "入口松软，老人小孩都爱",
    "price": 8.5,
    "origPrice": 11,
    "rating": 4.5,
    "sales": 1392,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p2810",
    "name": "桂花米发糕糕",
    "photo": "id3",
    "cat": "蒸笼早点",
    "desc": "出笼带着白雾，早晨该有的味道",
    "price": 9,
    "origPrice": 11,
    "rating": 4.4,
    "sales": 998,
    "tags": [
     "满50减10"
    ]
   },
   {
    "id": "p2811",
    "name": "咖喱酥炸三角角",
    "photo": "sm7",
    "cat": "现炸小吃",
    "desc": "酥皮现包现炸，咬开小心烫",
    "price": 6,
    "origPrice": 8,
    "rating": 4.8,
    "sales": 3050,
    "tags": []
   },
   {
    "id": "p2812",
    "name": "黄金炸糖角角",
    "photo": "sm8",
    "cat": "现炸小吃",
    "desc": "三角酥脆，馅料给足",
    "price": 6.5,
    "origPrice": 8,
    "rating": 4.4,
    "sales": 1161,
    "tags": []
   },
   {
    "id": "p2813",
    "name": "现炸脆脆角拼拼",
    "photo": "sm9",
    "cat": "现炸小吃",
    "desc": "外脆内糯，配蘸水更妙",
    "price": 11,
    "origPrice": 14,
    "rating": 4.4,
    "sales": 705,
    "tags": [
     "满50减10"
    ]
   },
   {
    "id": "p2814",
    "name": "热豆浆浆",
    "photo": "tea6",
    "cat": "豆浆饮品",
    "desc": "茶底当日现泡，过夜就倒",
    "price": 4,
    "origPrice": 5,
    "rating": 4.8,
    "sales": 865,
    "tags": []
   },
   {
    "id": "p2815",
    "name": "热豆浆浆（大杯）",
    "photo": "tea6",
    "cat": "豆浆饮品",
    "desc": "喝前摇一摇，风味更均匀",
    "price": 7,
    "origPrice": 8,
    "rating": 4.6,
    "sales": 7107,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p2816",
    "name": "冰镇甜豆花花",
    "photo": "bowl4",
    "cat": "豆浆饮品",
    "desc": "食材当日直采，卡路里已帮你算好",
    "price": 6,
    "origPrice": 8,
    "rating": 4.8,
    "sales": 5651,
    "tags": []
   },
   {
    "id": "p2817",
    "name": "芝士流心煎饼饼",
    "photo": "ds9",
    "cat": "煎饼铺子",
    "desc": "摊得比脸还大，卷起来刚刚好",
    "price": 33.5,
    "origPrice": 43,
    "rating": 4.5,
    "sales": 3884,
    "tags": []
   },
   {
    "id": "p2818",
    "name": "椰蓉雪糕点点",
    "photo": "id4",
    "cat": "蒸笼现蒸",
    "desc": "出笼带着白雾，早晨该有的味道",
    "price": 37.5,
    "origPrice": 48.5,
    "rating": 4.4,
    "sales": 3910,
    "tags": []
   },
   {
    "id": "p2819",
    "name": "黄金脆角角",
    "photo": "sm10",
    "cat": "现炸小食",
    "desc": "外脆内糯，配蘸水更妙",
    "price": 21.5,
    "origPrice": 27.5,
    "rating": 4.7,
    "sales": 2107,
    "tags": []
   },
   {
    "id": "p2820",
    "name": "香辣里脊煎饼饼",
    "photo": "ds10",
    "cat": "煎饼铺子",
    "desc": "面糊现摊现卷，金黄薄脆",
    "price": 25,
    "origPrice": 32,
    "rating": 4.5,
    "sales": 5769,
    "tags": []
   },
   {
    "id": "p2821",
    "name": "酒酿米糕糕",
    "photo": "id5",
    "cat": "蒸笼现蒸",
    "desc": "蒸得白白胖胖，松软回甜",
    "price": 28,
    "origPrice": 36,
    "rating": 4.6,
    "sales": 2401,
    "tags": []
   },
   {
    "id": "p2822",
    "name": "加蛋加肠煎饼饼",
    "photo": "ds11",
    "cat": "煎饼铺子",
    "desc": "面糊现摊现卷，金黄薄脆",
    "price": 20.5,
    "origPrice": 26.5,
    "rating": 4.7,
    "sales": 384,
    "tags": []
   },
   {
    "id": "p2823",
    "name": "南瓜蒸糕糕",
    "photo": "id6",
    "cat": "蒸笼现蒸",
    "desc": "蒸得白白胖胖，松软回甜",
    "price": 15,
    "origPrice": 19.5,
    "rating": 4.5,
    "sales": 713,
    "tags": []
   },
   {
    "id": "p2824",
    "name": "咖喱角角",
    "photo": "sm11",
    "cat": "现炸小食",
    "desc": "三角酥脆，馅料给足",
    "price": 36,
    "origPrice": 46.5,
    "rating": 4.7,
    "sales": 252,
    "tags": []
   },
   {
    "id": "p2825",
    "name": "甜面酱大饼卷卷",
    "photo": "ds12",
    "cat": "煎饼铺子",
    "desc": "摊得比脸还大，卷起来刚刚好",
    "price": 33.5,
    "origPrice": 43,
    "rating": 4.9,
    "sales": 354,
    "tags": []
   },
   {
    "id": "p2826",
    "name": "红枣发糕糕",
    "photo": "id7",
    "cat": "蒸笼现蒸",
    "desc": "蒸得白白胖胖，松软回甜",
    "price": 17,
    "origPrice": 22,
    "rating": 4.7,
    "sales": 317,
    "tags": []
   },
   {
    "id": "p2827",
    "name": "洋葱脆角角",
    "photo": "sm12",
    "cat": "现炸小食",
    "desc": "外脆内糯，配蘸水更妙",
    "price": 27.5,
    "origPrice": 35,
    "rating": 4.8,
    "sales": 3189,
    "tags": []
   },
   {
    "id": "p2828",
    "name": "斑斓椰香糕糕",
    "photo": "id8",
    "cat": "蒸笼现蒸",
    "desc": "蒸得白白胖胖，松软回甜",
    "price": 14.5,
    "origPrice": 18.5,
    "rating": 4.5,
    "sales": 5919,
    "tags": []
   },
   {
    "id": "p2829",
    "name": "梅干菜脆饼饼",
    "photo": "ds13",
    "cat": "煎饼铺子",
    "desc": "配咖喱蘸碟是隐藏吃法",
    "price": 14.5,
    "origPrice": 18.5,
    "rating": 4.8,
    "sales": 303,
    "tags": []
   },
   {
    "id": "p2830",
    "name": "黑糖发糕糕",
    "photo": "id9",
    "cat": "蒸笼现蒸",
    "desc": "出笼带着白雾，早晨该有的味道",
    "price": 25,
    "origPrice": 32,
    "rating": 4.7,
    "sales": 2162,
    "tags": []
   },
   {
    "id": "p2831",
    "name": "土豆丝卷饼饼",
    "photo": "ds14",
    "cat": "煎饼铺子",
    "desc": "边缘脆芯软，趁热吃风味翻倍",
    "price": 13.5,
    "origPrice": 17.5,
    "rating": 4.8,
    "sales": 523,
    "tags": []
   },
   {
    "id": "p2832",
    "name": "双色米糕糕",
    "photo": "id10",
    "cat": "蒸笼现蒸",
    "desc": "配一碟蘸汁，朴素但对味",
    "price": 32,
    "origPrice": 41,
    "rating": 4.4,
    "sales": 4006,
    "tags": []
   },
   {
    "id": "p2833",
    "name": "原味脆皮煎饼饼",
    "photo": "ds15",
    "cat": "煎饼铺子",
    "desc": "摊得比脸还大，卷起来刚刚好",
    "price": 13,
    "origPrice": 16.5,
    "rating": 4.6,
    "sales": 5563,
    "tags": []
   },
   {
    "id": "p2834",
    "name": "紫米松糕糕",
    "photo": "id11",
    "cat": "蒸笼现蒸",
    "desc": "蒸得白白胖胖，松软回甜",
    "price": 32,
    "origPrice": 41,
    "rating": 4.8,
    "sales": 1080,
    "tags": []
   },
   {
    "id": "p2835",
    "name": "奶香米糕糕",
    "photo": "id12",
    "cat": "蒸笼现蒸",
    "desc": "入口松软，老人小孩都爱",
    "price": 30,
    "origPrice": 38.5,
    "rating": 4.8,
    "sales": 4552,
    "tags": []
   },
   {
    "id": "p2836",
    "name": "蜜豆松糕糕",
    "photo": "id13",
    "cat": "蒸笼现蒸",
    "desc": "配一碟蘸汁，朴素但对味",
    "price": 8.5,
    "origPrice": 11,
    "rating": 4.4,
    "sales": 1997,
    "tags": []
   },
   {
    "id": "p2837",
    "name": "芋泥夹心糕糕",
    "photo": "id14",
    "cat": "蒸笼现蒸",
    "desc": "配一碟蘸汁，朴素但对味",
    "price": 20,
    "origPrice": 25.5,
    "rating": 4.7,
    "sales": 873,
    "tags": []
   },
   {
    "id": "p2838",
    "name": "葱香鸡蛋饼饼",
    "photo": "ds16",
    "cat": "煎饼铺子",
    "desc": "配咖喱蘸碟是隐藏吃法",
    "price": 38,
    "origPrice": 48.5,
    "rating": 4.6,
    "sales": 2219,
    "tags": []
   }
  ]
 },
 {
  "id": "s29",
  "name": "沙县小小吃",
  "category": "breakfast",
  "logo": "🥟",
  "brand": "沙县小小吃（沙县小吃风）",
  "rating": 4.5,
  "monthlySales": 17654,
  "deliveryMin": 25,
  "deliveryFee": 2,
  "minOrder": 12,
  "distanceKm": 0.5,
  "notice": "国民食堂，量大实惠。水饺现包现煮，皮薄馅大看得见。",
  "promos": [
   "满15减2"
  ],
  "photo": "dmp1",
  "products": [
   {
    "id": "p2901",
    "name": "手工鲜肉水饺饺",
    "photo": "dmp1",
    "cat": "主食",
    "desc": "现包现煮十二只装，蘸醋加辣椒是标配",
    "price": 8,
    "origPrice": 10,
    "rating": 4.5,
    "sales": 1097,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p2902",
    "name": "手工鲜肉水饺饺（大份）",
    "photo": "dmp1",
    "cat": "主食",
    "desc": "出笼带着白雾，早晨该有的味道",
    "price": 11.5,
    "origPrice": 14.5,
    "rating": 4.5,
    "sales": 999,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p2903",
    "name": "招牌酱油炒面面",
    "photo": "ndl4",
    "cat": "主食",
    "desc": "酱油裹到每一根面，镬气是这碗面的灵魂",
    "price": 6,
    "origPrice": 8,
    "rating": 4.5,
    "sales": 1890,
    "tags": []
   },
   {
    "id": "p2904",
    "name": "招牌酱油炒面面（大份）",
    "photo": "ndl4",
    "cat": "主食",
    "desc": "汤头熬足八小时",
    "price": 8.5,
    "origPrice": 11.5,
    "rating": 4.7,
    "sales": 1484,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p2905",
    "name": "飘香拌面面",
    "photo": "ndl5",
    "cat": "主食",
    "desc": "大火快炒的镬气",
    "price": 5.5,
    "origPrice": 7,
    "rating": 4.7,
    "sales": 295,
    "tags": []
   },
   {
    "id": "p2906",
    "name": "飘香拌面面（大份）",
    "photo": "ndl5",
    "cat": "主食",
    "desc": "面条劲道，久泡不坨",
    "price": 8,
    "origPrice": 10,
    "rating": 4.4,
    "sales": 1321,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p2907",
    "name": "蛋炒饭饭",
    "photo": "rc4",
    "cat": "主食",
    "desc": "粒粒分明，干香扑鼻",
    "price": 7,
    "origPrice": 9,
    "rating": 4.7,
    "sales": 4964,
    "tags": [
     "满15减2"
    ]
   },
   {
    "id": "p2908",
    "name": "蛋炒饭饭（大份）",
    "photo": "rc4",
    "cat": "主食",
    "desc": "每一粒米都裹上蛋液",
    "price": 10,
    "origPrice": 13,
    "rating": 4.4,
    "sales": 3199,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p2909",
    "name": "春卷什锦拼盘盘",
    "photo": "roll1",
    "cat": "小吃卤味",
    "desc": "入口松软，老人小孩都爱",
    "price": 10,
    "origPrice": 13,
    "rating": 4.7,
    "sales": 5731,
    "tags": []
   },
   {
    "id": "p2910",
    "name": "黄油可丽饼卷卷",
    "photo": "crepe1",
    "cat": "小吃卤味",
    "desc": "配一碟蘸汁，朴素但对味",
    "price": 2.5,
    "origPrice": 3.5,
    "rating": 4.7,
    "sales": 324,
    "tags": []
   },
   {
    "id": "p2911",
    "name": "卤味拼盘盘",
    "photo": "coldcut",
    "cat": "小吃卤味",
    "desc": "回购率很高的一款，闭眼点不踩雷",
    "price": 13,
    "origPrice": 17,
    "rating": 4.7,
    "sales": 425,
    "tags": [
     "满15减2"
    ]
   },
   {
    "id": "p2912",
    "name": "凉拌时蔬蔬",
    "photo": "sal4",
    "cat": "小吃卤味",
    "desc": "拍完照记得趁新鲜吃",
    "price": 6,
    "origPrice": 8,
    "rating": 4.4,
    "sales": 5422,
    "tags": []
   },
   {
    "id": "p2913",
    "name": "炖罐奶白浓汤汤",
    "photo": "soup5",
    "cat": "炖罐汤",
    "desc": "暖胃暖心，一碗见底",
    "price": 10,
    "origPrice": 13,
    "rating": 4.8,
    "sales": 681,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p2914",
    "name": "番茄蛋花汤汤",
    "photo": "soup3",
    "cat": "炖罐汤",
    "desc": "暖胃暖心，一碗见底",
    "price": 6,
    "origPrice": 8,
    "rating": 4.4,
    "sales": 5516,
    "tags": [
     "满15减2"
    ]
   },
   {
    "id": "p2915",
    "name": "双蛋培根手抓饼饼",
    "photo": "ds18",
    "cat": "煎饼铺子",
    "desc": "配咖喱蘸碟是隐藏吃法",
    "price": 23,
    "origPrice": 29,
    "rating": 4.8,
    "sales": 2543,
    "tags": []
   },
   {
    "id": "p2916",
    "name": "红枣发糕糕",
    "photo": "id15",
    "cat": "蒸笼现蒸",
    "desc": "入口松软，老人小孩都爱",
    "price": 11,
    "origPrice": 14,
    "rating": 4.6,
    "sales": 7763,
    "tags": []
   },
   {
    "id": "p2917",
    "name": "咖喱角角",
    "photo": "sm13",
    "cat": "现炸小食",
    "desc": "外脆内糯，配蘸水更妙",
    "price": 15.5,
    "origPrice": 20,
    "rating": 4.6,
    "sales": 421,
    "tags": []
   },
   {
    "id": "p2918",
    "name": "土豆丝卷饼饼",
    "photo": "ds19",
    "cat": "煎饼铺子",
    "desc": "边缘脆芯软，趁热吃风味翻倍",
    "price": 16.5,
    "origPrice": 21,
    "rating": 4.4,
    "sales": 2008,
    "tags": []
   },
   {
    "id": "p2919",
    "name": "紫米松糕糕",
    "photo": "id16",
    "cat": "蒸笼现蒸",
    "desc": "蒸得白白胖胖，松软回甜",
    "price": 24,
    "origPrice": 30.5,
    "rating": 4.8,
    "sales": 7435,
    "tags": []
   },
   {
    "id": "p2920",
    "name": "洋葱脆角角",
    "photo": "sm14",
    "cat": "现炸小食",
    "desc": "外脆内糯，配蘸水更妙",
    "price": 17.5,
    "origPrice": 22.5,
    "rating": 4.7,
    "sales": 785,
    "tags": []
   },
   {
    "id": "p2921",
    "name": "加蛋加肠煎饼饼",
    "photo": "ds20",
    "cat": "煎饼铺子",
    "desc": "摊得比脸还大，卷起来刚刚好",
    "price": 37.5,
    "origPrice": 48,
    "rating": 4.6,
    "sales": 708,
    "tags": []
   },
   {
    "id": "p2922",
    "name": "酒酿米糕糕",
    "photo": "id17",
    "cat": "蒸笼现蒸",
    "desc": "入口松软，老人小孩都爱",
    "price": 34,
    "origPrice": 43.5,
    "rating": 4.9,
    "sales": 5857,
    "tags": []
   },
   {
    "id": "p2923",
    "name": "香辣里脊煎饼饼",
    "photo": "ds21",
    "cat": "煎饼铺子",
    "desc": "摊得比脸还大，卷起来刚刚好",
    "price": 25.5,
    "origPrice": 32.5,
    "rating": 4.8,
    "sales": 2454,
    "tags": []
   },
   {
    "id": "p2924",
    "name": "蜜豆松糕糕",
    "photo": "id18",
    "cat": "蒸笼现蒸",
    "desc": "出笼带着白雾，早晨该有的味道",
    "price": 36,
    "origPrice": 46,
    "rating": 4.5,
    "sales": 728,
    "tags": []
   },
   {
    "id": "p2925",
    "name": "原味脆皮煎饼饼",
    "photo": "ds22",
    "cat": "煎饼铺子",
    "desc": "边缘脆芯软，趁热吃风味翻倍",
    "price": 10,
    "origPrice": 12.5,
    "rating": 4.7,
    "sales": 1128,
    "tags": []
   },
   {
    "id": "p2926",
    "name": "双脆杂粮煎饼饼",
    "photo": "ds23",
    "cat": "煎饼铺子",
    "desc": "摊得比脸还大，卷起来刚刚好",
    "price": 26,
    "origPrice": 33.5,
    "rating": 4.5,
    "sales": 4896,
    "tags": []
   },
   {
    "id": "p2927",
    "name": "椰蓉雪糕点点",
    "photo": "id19",
    "cat": "蒸笼现蒸",
    "desc": "入口松软，老人小孩都爱",
    "price": 30,
    "origPrice": 38,
    "rating": 4.6,
    "sales": 595,
    "tags": []
   },
   {
    "id": "p2928",
    "name": "黄金脆角角",
    "photo": "sm15",
    "cat": "现炸小食",
    "desc": "外脆内糯，配蘸水更妙",
    "price": 16.5,
    "origPrice": 21.5,
    "rating": 4.4,
    "sales": 263,
    "tags": []
   },
   {
    "id": "p2929",
    "name": "梅干菜脆饼饼",
    "photo": "ds24",
    "cat": "煎饼铺子",
    "desc": "面糊现摊现卷，金黄薄脆",
    "price": 26.5,
    "origPrice": 34,
    "rating": 4.7,
    "sales": 4511,
    "tags": []
   },
   {
    "id": "p2930",
    "name": "老面葱花饼饼",
    "photo": "ds25",
    "cat": "煎饼铺子",
    "desc": "边缘脆芯软，趁热吃风味翻倍",
    "price": 20,
    "origPrice": 25.5,
    "rating": 4.4,
    "sales": 575,
    "tags": []
   },
   {
    "id": "p2931",
    "name": "奶香米糕糕",
    "photo": "id20",
    "cat": "蒸笼现蒸",
    "desc": "出笼带着白雾，早晨该有的味道",
    "price": 30.5,
    "origPrice": 39,
    "rating": 4.9,
    "sales": 4765,
    "tags": []
   },
   {
    "id": "p2932",
    "name": "葱香鸡蛋饼饼",
    "photo": "ds26",
    "cat": "煎饼铺子",
    "desc": "摊得比脸还大，卷起来刚刚好",
    "price": 30,
    "origPrice": 38.5,
    "rating": 4.7,
    "sales": 824,
    "tags": []
   },
   {
    "id": "p2933",
    "name": "芝麻千层饼饼",
    "photo": "ds27",
    "cat": "煎饼铺子",
    "desc": "配咖喱蘸碟是隐藏吃法",
    "price": 12,
    "origPrice": 15.5,
    "rating": 4.6,
    "sales": 1263,
    "tags": []
   },
   {
    "id": "p2934",
    "name": "培根芝士卷饼饼",
    "photo": "ds28",
    "cat": "煎饼铺子",
    "desc": "配咖喱蘸碟是隐藏吃法",
    "price": 37,
    "origPrice": 47.5,
    "rating": 4.8,
    "sales": 1054,
    "tags": []
   },
   {
    "id": "p2935",
    "name": "斑斓椰香糕糕",
    "photo": "id21",
    "cat": "蒸笼现蒸",
    "desc": "配一碟蘸汁，朴素但对味",
    "price": 13.5,
    "origPrice": 17.5,
    "rating": 4.5,
    "sales": 1626,
    "tags": []
   },
   {
    "id": "p2936",
    "name": "玉米蒸糕糕",
    "photo": "id22",
    "cat": "蒸笼现蒸",
    "desc": "蒸得白白胖胖，松软回甜",
    "price": 12,
    "origPrice": 15,
    "rating": 4.9,
    "sales": 4693,
    "tags": []
   },
   {
    "id": "p2937",
    "name": "双色米糕糕",
    "photo": "id23",
    "cat": "蒸笼现蒸",
    "desc": "出笼带着白雾，早晨该有的味道",
    "price": 24,
    "origPrice": 30.5,
    "rating": 4.5,
    "sales": 2308,
    "tags": []
   },
   {
    "id": "p2938",
    "name": "芋泥夹心糕糕",
    "photo": "id24",
    "cat": "蒸笼现蒸",
    "desc": "入口松软，老人小孩都爱",
    "price": 18,
    "origPrice": 23.5,
    "rating": 4.8,
    "sales": 4436,
    "tags": []
   }
  ]
 },
 {
  "id": "s30",
  "name": "包蒸万象象",
  "category": "breakfast",
  "logo": "🧺",
  "brand": "包蒸万象象（广式茶点铺风）",
  "rating": 4.7,
  "monthlySales": 6540,
  "deliveryMin": 30,
  "deliveryFee": 3,
  "minOrder": 15,
  "distanceKm": 1.3,
  "notice": "蒸笼一开，白雾升起，早晨就该是这个味道。",
  "promos": [
   "满20减3"
  ],
  "photo": "id44",
  "products": [
   {
    "id": "p3001",
    "name": "白玉水晶米糕糕",
    "photo": "id25",
    "cat": "招牌蒸糕",
    "desc": "蒸得白白胖胖，松软回甜",
    "price": 8,
    "origPrice": 10,
    "rating": 4.6,
    "sales": 2981,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p3002",
    "name": "椰香米发糕糕",
    "photo": "id26",
    "cat": "招牌蒸糕",
    "desc": "入口松软，老人小孩都爱",
    "price": 9,
    "origPrice": 11,
    "rating": 4.5,
    "sales": 3737,
    "tags": []
   },
   {
    "id": "p3003",
    "name": "红糖马拉糕糕",
    "photo": "id27",
    "cat": "招牌蒸糕",
    "desc": "配一碟蘸汁，朴素但对味",
    "price": 9.5,
    "origPrice": 12,
    "rating": 4.8,
    "sales": 1199,
    "tags": []
   },
   {
    "id": "p3004",
    "name": "桂花双色糕糕",
    "photo": "id28",
    "cat": "招牌蒸糕",
    "desc": "蒸得白白胖胖，松软回甜",
    "price": 10,
    "origPrice": 13,
    "rating": 4.6,
    "sales": 7408,
    "tags": [
     "满20减3"
    ]
   },
   {
    "id": "p3005",
    "name": "奶香松糕拼拼",
    "photo": "id29",
    "cat": "招牌蒸糕",
    "desc": "入口松软，老人小孩都爱",
    "price": 12,
    "origPrice": 15,
    "rating": 4.7,
    "sales": 2138,
    "tags": []
   },
   {
    "id": "p3006",
    "name": "金银小米糕糕",
    "photo": "id30",
    "cat": "招牌蒸糕",
    "desc": "出笼带着白雾，早晨该有的味道",
    "price": 8.5,
    "origPrice": 11,
    "rating": 4.6,
    "sales": 220,
    "tags": []
   },
   {
    "id": "p3007",
    "name": "手工鲜虾水饺饺",
    "photo": "dmp1",
    "cat": "蒸点",
    "desc": "出笼带着白雾，早晨该有的味道",
    "price": 11,
    "origPrice": 14,
    "rating": 4.6,
    "sales": 7059,
    "tags": [
     "满20减3"
    ]
   },
   {
    "id": "p3008",
    "name": "春卷拼碟碟",
    "photo": "roll1",
    "cat": "蒸点",
    "desc": "出笼带着白雾，早晨该有的味道",
    "price": 9,
    "origPrice": 12,
    "rating": 4.5,
    "sales": 3617,
    "tags": []
   },
   {
    "id": "p3009",
    "name": "黄金流沙包包",
    "photo": "id31",
    "cat": "蒸点",
    "desc": "出笼带着白雾，早晨该有的味道",
    "price": 10,
    "origPrice": 13,
    "rating": 4.5,
    "sales": 498,
    "tags": []
   },
   {
    "id": "p3010",
    "name": "明前绿茶茶",
    "photo": "tea5",
    "cat": "茶饮",
    "desc": "甜度冰量可备注调整",
    "price": 6,
    "origPrice": 8,
    "rating": 4.6,
    "sales": 851,
    "tags": [
     "满20减3"
    ]
   },
   {
    "id": "p3011",
    "name": "明前绿茶茶（大杯）",
    "photo": "tea5",
    "cat": "茶饮",
    "desc": "茶底当日现泡，过夜就倒",
    "price": 9,
    "origPrice": 11,
    "rating": 4.8,
    "sales": 264,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p3012",
    "name": "工夫红茶壶壶",
    "photo": "tea2",
    "cat": "茶饮",
    "desc": "茶汤现萃，香气立体",
    "price": 12,
    "origPrice": 15,
    "rating": 4.6,
    "sales": 2517,
    "tags": []
   },
   {
    "id": "p3013",
    "name": "芝士流心煎饼饼",
    "photo": "ds29",
    "cat": "煎饼铺子",
    "desc": "摊得比脸还大，卷起来刚刚好",
    "price": 10,
    "origPrice": 13,
    "rating": 4.6,
    "sales": 733,
    "tags": []
   },
   {
    "id": "p3014",
    "name": "南瓜蒸糕糕",
    "photo": "id32",
    "cat": "蒸笼现蒸",
    "desc": "入口松软，老人小孩都爱",
    "price": 9.5,
    "origPrice": 12.5,
    "rating": 4.5,
    "sales": 2404,
    "tags": []
   },
   {
    "id": "p3015",
    "name": "洋葱脆角角",
    "photo": "sm16",
    "cat": "现炸小食",
    "desc": "外脆内糯，配蘸水更妙",
    "price": 12,
    "origPrice": 15.5,
    "rating": 4.6,
    "sales": 815,
    "tags": []
   },
   {
    "id": "p3016",
    "name": "香辣里脊煎饼饼",
    "photo": "ds30",
    "cat": "煎饼铺子",
    "desc": "边缘脆芯软，趁热吃风味翻倍",
    "price": 28,
    "origPrice": 35.5,
    "rating": 4.4,
    "sales": 590,
    "tags": []
   },
   {
    "id": "p3017",
    "name": "斑斓椰香糕糕",
    "photo": "id33",
    "cat": "蒸笼现蒸",
    "desc": "出笼带着白雾，早晨该有的味道",
    "price": 36.5,
    "origPrice": 46.5,
    "rating": 4.7,
    "sales": 4409,
    "tags": []
   },
   {
    "id": "p3018",
    "name": "咖喱角角",
    "photo": "sm17",
    "cat": "现炸小食",
    "desc": "三角酥脆，馅料给足",
    "price": 18,
    "origPrice": 23,
    "rating": 4.6,
    "sales": 2530,
    "tags": []
   },
   {
    "id": "p3019",
    "name": "黑糖发糕糕",
    "photo": "id34",
    "cat": "蒸笼现蒸",
    "desc": "入口松软，老人小孩都爱",
    "price": 12,
    "origPrice": 15.5,
    "rating": 4.4,
    "sales": 1222,
    "tags": []
   },
   {
    "id": "p3020",
    "name": "酱香手抓饼饼",
    "photo": "ds31",
    "cat": "煎饼铺子",
    "desc": "摊得比脸还大，卷起来刚刚好",
    "price": 33,
    "origPrice": 42,
    "rating": 4.7,
    "sales": 2410,
    "tags": []
   },
   {
    "id": "p3021",
    "name": "双脆杂粮煎饼饼",
    "photo": "ds32",
    "cat": "煎饼铺子",
    "desc": "配咖喱蘸碟是隐藏吃法",
    "price": 11.5,
    "origPrice": 14.5,
    "rating": 4.7,
    "sales": 1156,
    "tags": []
   },
   {
    "id": "p3022",
    "name": "芋泥夹心糕糕",
    "photo": "id35",
    "cat": "蒸笼现蒸",
    "desc": "出笼带着白雾，早晨该有的味道",
    "price": 35,
    "origPrice": 45,
    "rating": 4.6,
    "sales": 3237,
    "tags": []
   },
   {
    "id": "p3023",
    "name": "酒酿米糕糕",
    "photo": "id36",
    "cat": "蒸笼现蒸",
    "desc": "出笼带着白雾，早晨该有的味道",
    "price": 22.5,
    "origPrice": 29,
    "rating": 4.4,
    "sales": 5167,
    "tags": []
   },
   {
    "id": "p3024",
    "name": "奶香米糕糕",
    "photo": "id37",
    "cat": "蒸笼现蒸",
    "desc": "入口松软，老人小孩都爱",
    "price": 26,
    "origPrice": 33.5,
    "rating": 4.7,
    "sales": 1099,
    "tags": []
   },
   {
    "id": "p3025",
    "name": "原味脆皮煎饼饼",
    "photo": "ds33",
    "cat": "煎饼铺子",
    "desc": "摊得比脸还大，卷起来刚刚好",
    "price": 36,
    "origPrice": 46,
    "rating": 4.9,
    "sales": 3074,
    "tags": []
   },
   {
    "id": "p3026",
    "name": "红枣发糕糕",
    "photo": "id38",
    "cat": "蒸笼现蒸",
    "desc": "出笼带着白雾，早晨该有的味道",
    "price": 9.5,
    "origPrice": 12,
    "rating": 4.9,
    "sales": 827,
    "tags": []
   },
   {
    "id": "p3027",
    "name": "甜面酱大饼卷卷",
    "photo": "ds34",
    "cat": "煎饼铺子",
    "desc": "面糊现摊现卷，金黄薄脆",
    "price": 9,
    "origPrice": 11.5,
    "rating": 4.9,
    "sales": 4851,
    "tags": []
   },
   {
    "id": "p3028",
    "name": "紫米松糕糕",
    "photo": "id39",
    "cat": "蒸笼现蒸",
    "desc": "出笼带着白雾，早晨该有的味道",
    "price": 8.5,
    "origPrice": 10.5,
    "rating": 4.6,
    "sales": 5565,
    "tags": []
   },
   {
    "id": "p3029",
    "name": "黄金脆角角",
    "photo": "sm18",
    "cat": "现炸小食",
    "desc": "酥皮现包现炸，咬开小心烫",
    "price": 27,
    "origPrice": 35,
    "rating": 4.8,
    "sales": 3193,
    "tags": []
   },
   {
    "id": "p3030",
    "name": "老面葱花饼饼",
    "photo": "ds35",
    "cat": "煎饼铺子",
    "desc": "摊得比脸还大，卷起来刚刚好",
    "price": 37.5,
    "origPrice": 48,
    "rating": 4.4,
    "sales": 1906,
    "tags": []
   },
   {
    "id": "p3031",
    "name": "双色米糕糕",
    "photo": "id40",
    "cat": "蒸笼现蒸",
    "desc": "出笼带着白雾，早晨该有的味道",
    "price": 18,
    "origPrice": 23.5,
    "rating": 4.6,
    "sales": 3305,
    "tags": []
   },
   {
    "id": "p3032",
    "name": "葱香鸡蛋饼饼",
    "photo": "ds36",
    "cat": "煎饼铺子",
    "desc": "边缘脆芯软，趁热吃风味翻倍",
    "price": 32,
    "origPrice": 41,
    "rating": 4.6,
    "sales": 6333,
    "tags": []
   },
   {
    "id": "p3033",
    "name": "梅干菜脆饼饼",
    "photo": "ds37",
    "cat": "煎饼铺子",
    "desc": "摊得比脸还大，卷起来刚刚好",
    "price": 28.5,
    "origPrice": 36.5,
    "rating": 4.6,
    "sales": 4486,
    "tags": []
   },
   {
    "id": "p3034",
    "name": "双蛋培根手抓饼饼",
    "photo": "ds38",
    "cat": "煎饼铺子",
    "desc": "配咖喱蘸碟是隐藏吃法",
    "price": 34,
    "origPrice": 44,
    "rating": 4.7,
    "sales": 1906,
    "tags": []
   },
   {
    "id": "p3035",
    "name": "椰蓉雪糕点点",
    "photo": "id41",
    "cat": "蒸笼现蒸",
    "desc": "出笼带着白雾，早晨该有的味道",
    "price": 36,
    "origPrice": 46,
    "rating": 4.4,
    "sales": 866,
    "tags": []
   },
   {
    "id": "p3036",
    "name": "培根芝士卷饼饼",
    "photo": "ds39",
    "cat": "煎饼铺子",
    "desc": "面糊现摊现卷，金黄薄脆",
    "price": 37.5,
    "origPrice": 48,
    "rating": 4.6,
    "sales": 609,
    "tags": []
   },
   {
    "id": "p3037",
    "name": "玉米蒸糕糕",
    "photo": "id42",
    "cat": "蒸笼现蒸",
    "desc": "蒸得白白胖胖，松软回甜",
    "price": 32,
    "origPrice": 41,
    "rating": 4.6,
    "sales": 521,
    "tags": []
   },
   {
    "id": "p3038",
    "name": "蜜豆松糕糕",
    "photo": "id43",
    "cat": "蒸笼现蒸",
    "desc": "配一碟蘸汁，朴素但对味",
    "price": 30.5,
    "origPrice": 39,
    "rating": 4.6,
    "sales": 594,
    "tags": []
   }
  ]
 },
 {
  "id": "s31",
  "name": "兰州拉拉面",
  "category": "noodle",
  "logo": "🍜",
  "brand": "兰州拉拉面（兰州拉面风）",
  "rating": 4.6,
  "monthlySales": 9311,
  "deliveryMin": 30,
  "deliveryFee": 2.5,
  "minOrder": 15,
  "distanceKm": 1.1,
  "notice": "一清二白三红四绿五黄，拉面师傅的手艺在汤里。",
  "promos": [
   "满20减3"
  ],
  "photo": "ndl1",
  "products": [
   {
    "id": "p3101",
    "name": "牛肉拉面·细面面",
    "photo": "ndl1",
    "cat": "拉面",
    "desc": "汤清肉烂面劲道，先喝汤是老规矩",
    "price": 16,
    "origPrice": 20,
    "rating": 4.8,
    "sales": 2107,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p3102",
    "name": "牛肉拉面·细面面（大份）",
    "photo": "ndl1",
    "cat": "拉面",
    "desc": "汤头熬足八小时",
    "price": 23,
    "origPrice": 29,
    "rating": 4.9,
    "sales": 6100,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p3103",
    "name": "牛肉拉面·二细细",
    "photo": "ndl1",
    "cat": "拉面",
    "desc": "大火快炒的镬气",
    "price": 16,
    "origPrice": 20,
    "rating": 4.7,
    "sales": 3624,
    "tags": []
   },
   {
    "id": "p3104",
    "name": "牛肉拉面·二细细（大份）",
    "photo": "ndl1",
    "cat": "拉面",
    "desc": "汤头熬足八小时",
    "price": 23,
    "origPrice": 29,
    "rating": 4.9,
    "sales": 5907,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p3105",
    "name": "牛肉拉面·韭叶叶",
    "photo": "ndl1",
    "cat": "拉面",
    "desc": "汤头熬足八小时",
    "price": 16,
    "origPrice": 20,
    "rating": 4.4,
    "sales": 7336,
    "tags": []
   },
   {
    "id": "p3106",
    "name": "牛肉拉面·韭叶叶（大份）",
    "photo": "ndl1",
    "cat": "拉面",
    "desc": "面条劲道，久泡不坨",
    "price": 23,
    "origPrice": 29,
    "rating": 4.7,
    "sales": 1242,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p3107",
    "name": "加肉加蛋豪华面面",
    "photo": "ndl1",
    "cat": "拉面",
    "desc": "牛肉多到盖住面，打工人的顶配午餐",
    "price": 24,
    "origPrice": 30,
    "rating": 4.9,
    "sales": 3633,
    "tags": [
     "满20减3"
    ]
   },
   {
    "id": "p3108",
    "name": "兰州炒拉条条",
    "photo": "ndl3",
    "cat": "炒面炒饭",
    "desc": "面条劲道，久泡不坨",
    "price": 18,
    "origPrice": 23,
    "rating": 4.5,
    "sales": 1773,
    "tags": []
   },
   {
    "id": "p3109",
    "name": "兰州炒拉条条（大份）",
    "photo": "ndl3",
    "cat": "炒面炒饭",
    "desc": "汤头熬足八小时",
    "price": 26,
    "origPrice": 33.5,
    "rating": 4.4,
    "sales": 316,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p3110",
    "name": "酱爆炒面片片",
    "photo": "ndl4",
    "cat": "炒面炒饭",
    "desc": "汤头熬足八小时",
    "price": 17,
    "origPrice": 22,
    "rating": 4.7,
    "sales": 1104,
    "tags": []
   },
   {
    "id": "p3111",
    "name": "新疆炒米饭饭",
    "photo": "rc5",
    "cat": "炒面炒饭",
    "desc": "大火快炒，锅气是灵魂",
    "price": 15,
    "origPrice": 19,
    "rating": 4.5,
    "sales": 3397,
    "tags": [
     "满20减3"
    ]
   },
   {
    "id": "p3112",
    "name": "凉拌开胃小菜菜",
    "photo": "sal4",
    "cat": "凉菜硬菜",
    "desc": "拍完照记得趁新鲜吃",
    "price": 6,
    "origPrice": 8,
    "rating": 4.5,
    "sales": 1658,
    "tags": []
   },
   {
    "id": "p3113",
    "name": "手抓羊肉肉",
    "photo": "grill3",
    "cat": "凉菜硬菜",
    "desc": "大块羊肉配椒盐，豪迈是西北的底色",
    "price": 38,
    "origPrice": 48,
    "rating": 4.7,
    "sales": 3515,
    "tags": []
   },
   {
    "id": "p3114",
    "name": "烤馕饼饼",
    "photo": "ds40",
    "cat": "凉菜硬菜",
    "desc": "边缘脆芯软，趁热吃风味翻倍",
    "price": 6,
    "origPrice": 8,
    "rating": 4.6,
    "sales": 1020,
    "tags": [
     "满20减3"
    ]
   },
   {
    "id": "p3115",
    "name": "甜胚子饮饮",
    "photo": "jc5",
    "cat": "饮品",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 7,
    "origPrice": 9,
    "rating": 4.6,
    "sales": 2359,
    "tags": []
   },
   {
    "id": "p3116",
    "name": "泡菜芝士炒饭饭",
    "photo": "rc6",
    "cat": "盖码饭",
    "desc": "配汤免费续（并不能）",
    "price": 29.5,
    "origPrice": 38,
    "rating": 4.8,
    "sales": 3854,
    "tags": []
   },
   {
    "id": "p3117",
    "name": "火腿蛋炒饭饭",
    "photo": "rc7",
    "cat": "盖码饭",
    "desc": "粒粒分明，干香扑鼻",
    "price": 19,
    "origPrice": 24.5,
    "rating": 4.7,
    "sales": 4082,
    "tags": []
   },
   {
    "id": "p3118",
    "name": "虾仁蛋白炒饭饭",
    "photo": "rc8",
    "cat": "盖码饭",
    "desc": "粒粒分明，干香扑鼻",
    "price": 9,
    "origPrice": 11.5,
    "rating": 4.6,
    "sales": 1643,
    "tags": []
   },
   {
    "id": "p3119",
    "name": "腊肠煲仔炒饭饭",
    "photo": "rc9",
    "cat": "盖码饭",
    "desc": "配汤免费续（并不能）",
    "price": 26,
    "origPrice": 33,
    "rating": 4.6,
    "sales": 2215,
    "tags": []
   },
   {
    "id": "p3120",
    "name": "虾酱空心菜炒饭饭",
    "photo": "rc10",
    "cat": "盖码饭",
    "desc": "配汤免费续（并不能）",
    "price": 25.5,
    "origPrice": 33,
    "rating": 4.8,
    "sales": 333,
    "tags": []
   },
   {
    "id": "p3121",
    "name": "培根玉米炒饭饭",
    "photo": "rc11",
    "cat": "盖码饭",
    "desc": "大火快炒，锅气是灵魂",
    "price": 36,
    "origPrice": 46,
    "rating": 4.6,
    "sales": 1875,
    "tags": []
   },
   {
    "id": "p3122",
    "name": "澳门瑶柱炒饭饭",
    "photo": "rc12",
    "cat": "盖码饭",
    "desc": "粒粒分明，干香扑鼻",
    "price": 26,
    "origPrice": 33,
    "rating": 4.6,
    "sales": 3674,
    "tags": []
   },
   {
    "id": "p3123",
    "name": "青椒牛柳炒饭饭",
    "photo": "rc13",
    "cat": "盖码饭",
    "desc": "粒粒分明，干香扑鼻",
    "price": 19,
    "origPrice": 24,
    "rating": 4.6,
    "sales": 3454,
    "tags": []
   },
   {
    "id": "p3124",
    "name": "XO酱海鲜炒饭饭",
    "photo": "rc14",
    "cat": "盖码饭",
    "desc": "大火快炒，锅气是灵魂",
    "price": 15,
    "origPrice": 19,
    "rating": 4.8,
    "sales": 238,
    "tags": []
   },
   {
    "id": "p3125",
    "name": "菠萝什锦炒饭饭",
    "photo": "rc15",
    "cat": "盖码饭",
    "desc": "粒粒分明，干香扑鼻",
    "price": 29.5,
    "origPrice": 38,
    "rating": 4.6,
    "sales": 553,
    "tags": []
   },
   {
    "id": "p3126",
    "name": "樱花虾炒饭饭",
    "photo": "rc16",
    "cat": "盖码饭",
    "desc": "大火快炒，锅气是灵魂",
    "price": 8.5,
    "origPrice": 11,
    "rating": 4.7,
    "sales": 4397,
    "tags": []
   },
   {
    "id": "p3127",
    "name": "牛肉黑椒炒饭饭",
    "photo": "rc17",
    "cat": "盖码饭",
    "desc": "粒粒分明，干香扑鼻",
    "price": 34.5,
    "origPrice": 44,
    "rating": 4.6,
    "sales": 2135,
    "tags": []
   }
  ]
 },
 {
  "id": "s32",
  "name": "粉面江湖湖",
  "category": "noodle",
  "logo": "🌊",
  "brand": "粉面江湖湖（南方米粉店风）",
  "rating": 4.6,
  "monthlySales": 8311,
  "deliveryMin": 28,
  "deliveryFee": 2.5,
  "minOrder": 15,
  "distanceKm": 1,
  "notice": "一碗好粉，汤底熬足八小时。江湖规矩：先喝汤再动筷。",
  "promos": [
   "满20减3"
  ],
  "photo": "ndl2",
  "products": [
   {
    "id": "p3201",
    "name": "红烧牛肉汤粉粉",
    "photo": "ndl1",
    "cat": "汤粉",
    "desc": "大块牛肉沉在碗底，汤头清亮香菜点睛",
    "price": 16,
    "origPrice": 20,
    "rating": 4.6,
    "sales": 4455,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p3202",
    "name": "红烧牛肉汤粉粉（大份）",
    "photo": "ndl1",
    "cat": "汤粉",
    "desc": "汤头熬足八小时",
    "price": 23,
    "origPrice": 29,
    "rating": 4.6,
    "sales": 3630,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p3203",
    "name": "原汤鸭腿粉粉",
    "photo": "ndl1",
    "cat": "汤粉",
    "desc": "大火快炒的镬气",
    "price": 18,
    "origPrice": 23,
    "rating": 4.8,
    "sales": 8206,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p3204",
    "name": "原汤鸭腿粉粉（大份）",
    "photo": "ndl1",
    "cat": "汤粉",
    "desc": "面条劲道，久泡不坨",
    "price": 26,
    "origPrice": 33.5,
    "rating": 4.7,
    "sales": 243,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p3205",
    "name": "三鲜米线线",
    "photo": "soup6",
    "cat": "汤粉",
    "desc": "暖胃暖心，一碗见底",
    "price": 14,
    "origPrice": 18,
    "rating": 4.9,
    "sales": 758,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p3206",
    "name": "三鲜米线线（大份）",
    "photo": "soup6",
    "cat": "汤粉",
    "desc": "暖胃暖心，一碗见底",
    "price": 20.5,
    "origPrice": 26,
    "rating": 4.6,
    "sales": 3795,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p3207",
    "name": "泰式镬气炒河粉粉",
    "photo": "ndl2",
    "cat": "炒粉炒面",
    "desc": "大火快炒的镬气，花生碎和柠檬角不能少",
    "price": 24,
    "origPrice": 30,
    "rating": 4.8,
    "sales": 2240,
    "tags": [
     "满20减3"
    ]
   },
   {
    "id": "p3208",
    "name": "豉油皇炒面面",
    "photo": "ndl4",
    "cat": "炒粉炒面",
    "desc": "面条劲道，久泡不坨",
    "price": 15,
    "origPrice": 19,
    "rating": 4.8,
    "sales": 680,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p3209",
    "name": "豉油皇炒面面（大份）",
    "photo": "ndl4",
    "cat": "炒粉炒面",
    "desc": "大火快炒的镬气",
    "price": 22,
    "origPrice": 27.5,
    "rating": 4.5,
    "sales": 1506,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p3210",
    "name": "香菇鸡丝焖面面",
    "photo": "ndl3",
    "cat": "炒粉炒面",
    "desc": "汤头熬足八小时",
    "price": 16,
    "origPrice": 20,
    "rating": 4.8,
    "sales": 216,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p3211",
    "name": "凉拌米线线",
    "photo": "ndl5",
    "cat": "凉粉凉面",
    "desc": "汤头熬足八小时",
    "price": 12,
    "origPrice": 15,
    "rating": 4.7,
    "sales": 201,
    "tags": [
     "满20减3"
    ]
   },
   {
    "id": "p3212",
    "name": "照烧鸡腿饭饭",
    "photo": "bowl8",
    "cat": "盖浇饭",
    "desc": "低卡不低配，吃饱不胖",
    "price": 24,
    "origPrice": 30,
    "rating": 4.8,
    "sales": 466,
    "tags": []
   },
   {
    "id": "p3213",
    "name": "开胃小菜拼拼",
    "photo": "sal4",
    "cat": "小菜",
    "desc": "爽脆时蔬配油醋汁",
    "price": 6,
    "origPrice": 8,
    "rating": 4.9,
    "sales": 4477,
    "tags": []
   },
   {
    "id": "p3214",
    "name": "冰镇酸梅汁汁",
    "photo": "jc5",
    "cat": "小菜",
    "desc": "冷压锁鲜，果肉打到细腻",
    "price": 6,
    "origPrice": 8,
    "rating": 4.6,
    "sales": 628,
    "tags": [
     "满20减3"
    ]
   },
   {
    "id": "p3215",
    "name": "青椒牛柳炒饭饭",
    "photo": "rc18",
    "cat": "盖码饭",
    "desc": "粒粒分明，干香扑鼻",
    "price": 16,
    "origPrice": 20.5,
    "rating": 4.4,
    "sales": 4069,
    "tags": []
   },
   {
    "id": "p3216",
    "name": "澳门瑶柱炒饭饭",
    "photo": "rc19",
    "cat": "盖码饭",
    "desc": "配汤免费续（并不能）",
    "price": 28.5,
    "origPrice": 37,
    "rating": 4.5,
    "sales": 430,
    "tags": []
   },
   {
    "id": "p3217",
    "name": "菠萝什锦炒饭饭",
    "photo": "rc20",
    "cat": "盖码饭",
    "desc": "大火快炒，锅气是灵魂",
    "price": 18,
    "origPrice": 23,
    "rating": 4.5,
    "sales": 587,
    "tags": []
   },
   {
    "id": "p3218",
    "name": "虾酱空心菜炒饭饭",
    "photo": "rc21",
    "cat": "盖码饭",
    "desc": "配汤免费续（并不能）",
    "price": 17,
    "origPrice": 21.5,
    "rating": 4.8,
    "sales": 940,
    "tags": []
   },
   {
    "id": "p3219",
    "name": "虾仁蛋白炒饭饭",
    "photo": "rc22",
    "cat": "盖码饭",
    "desc": "每一粒米都裹上蛋液",
    "price": 12.5,
    "origPrice": 16,
    "rating": 4.8,
    "sales": 5773,
    "tags": []
   },
   {
    "id": "p3220",
    "name": "樱花虾炒饭饭",
    "photo": "rc23",
    "cat": "盖码饭",
    "desc": "粒粒分明，干香扑鼻",
    "price": 14.5,
    "origPrice": 18.5,
    "rating": 4.9,
    "sales": 921,
    "tags": []
   },
   {
    "id": "p3221",
    "name": "泡菜芝士炒饭饭",
    "photo": "rc24",
    "cat": "盖码饭",
    "desc": "配汤免费续（并不能）",
    "price": 32.5,
    "origPrice": 42,
    "rating": 4.6,
    "sales": 1909,
    "tags": []
   },
   {
    "id": "p3222",
    "name": "牛肉黑椒炒饭饭",
    "photo": "rc25",
    "cat": "盖码饭",
    "desc": "粒粒分明，干香扑鼻",
    "price": 22.5,
    "origPrice": 29,
    "rating": 4.9,
    "sales": 3638,
    "tags": []
   },
   {
    "id": "p3223",
    "name": "火腿蛋炒饭饭",
    "photo": "rc26",
    "cat": "盖码饭",
    "desc": "粒粒分明，干香扑鼻",
    "price": 37,
    "origPrice": 47,
    "rating": 4.9,
    "sales": 374,
    "tags": []
   },
   {
    "id": "p3224",
    "name": "XO酱海鲜炒饭饭",
    "photo": "rc27",
    "cat": "盖码饭",
    "desc": "每一粒米都裹上蛋液",
    "price": 11,
    "origPrice": 14.5,
    "rating": 4.8,
    "sales": 585,
    "tags": []
   },
   {
    "id": "p3225",
    "name": "培根玉米炒饭饭",
    "photo": "rc28",
    "cat": "盖码饭",
    "desc": "大火快炒，锅气是灵魂",
    "price": 26.5,
    "origPrice": 34,
    "rating": 4.7,
    "sales": 3028,
    "tags": []
   },
   {
    "id": "p3226",
    "name": "腊肠煲仔炒饭饭",
    "photo": "rc29",
    "cat": "盖码饭",
    "desc": "每一粒米都裹上蛋液",
    "price": 17,
    "origPrice": 22,
    "rating": 4.5,
    "sales": 785,
    "tags": []
   }
  ]
 },
 {
  "id": "s33",
  "name": "老乡鸡鸡",
  "category": "rice",
  "logo": "🐔",
  "brand": "老乡鸡鸡（老乡鸡风）",
  "rating": 4.7,
  "monthlySales": 16788,
  "deliveryMin": 26,
  "deliveryFee": 3,
  "minOrder": 18,
  "distanceKm": 1.4,
  "notice": "肥西老母鸡汤每天现炖，家的味道，干净卫生看得见。",
  "promos": [
   "满25减4"
  ],
  "photo": "bc5",
  "products": [
   {
    "id": "p3301",
    "name": "肥西老母鸡汤汤",
    "photo": "soup5",
    "cat": "招牌汤品",
    "desc": "一只鸡的精华都在这碗汤里，鲜掉眉毛",
    "price": 15.5,
    "origPrice": 19,
    "rating": 4.5,
    "sales": 590,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p3302",
    "name": "肥西老母鸡汤汤（大份）",
    "photo": "soup5",
    "cat": "招牌汤品",
    "desc": "炖足八小时，浓稠挂勺",
    "price": 22.5,
    "origPrice": 27.5,
    "rating": 4.4,
    "sales": 7494,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p3303",
    "name": "番茄蛋花汤汤",
    "photo": "soup3",
    "cat": "招牌汤品",
    "desc": "暖胃暖心，一碗见底",
    "price": 8,
    "origPrice": 10,
    "rating": 4.9,
    "sales": 2106,
    "tags": []
   },
   {
    "id": "p3304",
    "name": "咖喱嫩鸡浇汁饭饭",
    "photo": "bc1",
    "cat": "大碗浇饭",
    "desc": "浓郁咖喱浇在热饭上，配饼蘸汁都香",
    "price": 15.5,
    "origPrice": 19,
    "rating": 4.7,
    "sales": 2025,
    "tags": []
   },
   {
    "id": "p3305",
    "name": "咖喱嫩鸡浇汁饭饭（大份）",
    "photo": "bc1",
    "cat": "大碗浇饭",
    "desc": "咖喱熬到起沙，蘸饼一绝",
    "price": 22.5,
    "origPrice": 27.5,
    "rating": 4.5,
    "sales": 6106,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p3306",
    "name": "香辣鸡杂浇饭饭",
    "photo": "bc2",
    "cat": "大碗浇饭",
    "desc": "香料现磨现炒，浓郁到拌三碗饭",
    "price": 16,
    "origPrice": 20,
    "rating": 4.8,
    "sales": 331,
    "tags": [
     "满25减4"
    ]
   },
   {
    "id": "p3307",
    "name": "香辣鸡杂浇饭饭（大份）",
    "photo": "bc2",
    "cat": "大碗浇饭",
    "desc": "咖喱熬到起沙，蘸饼一绝",
    "price": 23,
    "origPrice": 29,
    "rating": 4.9,
    "sales": 3785,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p3308",
    "name": "梅菜扣肉浇饭饭",
    "photo": "bc3",
    "cat": "大碗浇饭",
    "desc": "香料现磨现炒，浓郁到拌三碗饭",
    "price": 18,
    "origPrice": 22,
    "rating": 4.4,
    "sales": 4462,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p3309",
    "name": "农家小炒肉浇饭饭",
    "photo": "bc4",
    "cat": "大碗浇饭",
    "desc": "嫩鸡吸饱酱汁，入口即化",
    "price": 17,
    "origPrice": 21,
    "rating": 4.5,
    "sales": 1030,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p3310",
    "name": "砂锅鸡腿焖饭饭",
    "photo": "br1",
    "cat": "大碗浇饭",
    "desc": "揭盖那刻香气翻涌",
    "price": 22,
    "origPrice": 28,
    "rating": 4.7,
    "sales": 5750,
    "tags": [
     "满25减4"
    ]
   },
   {
    "id": "p3311",
    "name": "农家酱油蛋炒饭饭",
    "photo": "rc30",
    "cat": "炒饭",
    "desc": "每一粒米都裹上蛋液",
    "price": 6,
    "origPrice": 8,
    "rating": 4.6,
    "sales": 1651,
    "tags": []
   },
   {
    "id": "p3312",
    "name": "农家酱油蛋炒饭饭（大份）",
    "photo": "rc30",
    "cat": "炒饭",
    "desc": "配汤免费续（并不能）",
    "price": 8.5,
    "origPrice": 11.5,
    "rating": 4.6,
    "sales": 5264,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p3313",
    "name": "什锦虾仁炒饭饭",
    "photo": "rc31",
    "cat": "炒饭",
    "desc": "粒粒分明，干香扑鼻",
    "price": 5,
    "origPrice": 7,
    "rating": 4.5,
    "sales": 2334,
    "tags": []
   },
   {
    "id": "p3314",
    "name": "什锦虾仁炒饭饭（大份）",
    "photo": "rc31",
    "cat": "炒饭",
    "desc": "配汤免费续（并不能）",
    "price": 7.5,
    "origPrice": 10,
    "rating": 4.5,
    "sales": 6073,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p3315",
    "name": "老干妈牛肉炒饭饭",
    "photo": "rc32",
    "cat": "炒饭",
    "desc": "大火快炒，锅气是灵魂",
    "price": 13,
    "origPrice": 17,
    "rating": 4.8,
    "sales": 244,
    "tags": [
     "满25减4"
    ]
   },
   {
    "id": "p3316",
    "name": "扬州什锦炒饭饭",
    "photo": "rc33",
    "cat": "炒饭",
    "desc": "每一粒米都裹上蛋液",
    "price": 12,
    "origPrice": 16,
    "rating": 4.8,
    "sales": 4971,
    "tags": []
   },
   {
    "id": "p3317",
    "name": "卤味拼盘小碟碟",
    "photo": "coldcut2",
    "cat": "小菜",
    "desc": "外卖也不将就，包装扎实",
    "price": 11,
    "origPrice": 14,
    "rating": 4.4,
    "sales": 1074,
    "tags": []
   },
   {
    "id": "p3318",
    "name": "凉拌黄瓜瓜",
    "photo": "sal4",
    "cat": "小菜",
    "desc": "爽脆时蔬配油醋汁",
    "price": 5,
    "origPrice": 7,
    "rating": 4.7,
    "sales": 570,
    "tags": [
     "满25减4"
    ]
   },
   {
    "id": "p3319",
    "name": "鲜榨玉米汁汁",
    "photo": "jc5",
    "cat": "饮品",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 8,
    "origPrice": 10,
    "rating": 4.7,
    "sales": 1155,
    "tags": []
   },
   {
    "id": "p3320",
    "name": "樱花虾炒饭饭",
    "photo": "rc34",
    "cat": "炒饭专区",
    "desc": "粒粒分明，干香扑鼻",
    "price": 8.5,
    "origPrice": 10.5,
    "rating": 4.7,
    "sales": 4938,
    "tags": []
   },
   {
    "id": "p3321",
    "name": "咖喱鸡肉焖饭饭",
    "photo": "br2",
    "cat": "焖饭专区",
    "desc": "每粒米都站着入味",
    "price": 36.5,
    "origPrice": 47,
    "rating": 4.5,
    "sales": 221,
    "tags": []
   },
   {
    "id": "p3322",
    "name": "虾仁蛋白炒饭饭",
    "photo": "rc35",
    "cat": "炒饭专区",
    "desc": "大火快炒，锅气是灵魂",
    "price": 24.5,
    "origPrice": 31.5,
    "rating": 4.4,
    "sales": 4005,
    "tags": []
   },
   {
    "id": "p3323",
    "name": "黄萝卜羊排饭饭",
    "photo": "br3",
    "cat": "焖饭专区",
    "desc": "每粒米都站着入味",
    "price": 12.5,
    "origPrice": 16,
    "rating": 4.6,
    "sales": 802,
    "tags": []
   },
   {
    "id": "p3324",
    "name": "XO酱海鲜炒饭饭",
    "photo": "rc1",
    "cat": "炒饭专区",
    "desc": "大火快炒，锅气是灵魂",
    "price": 10,
    "origPrice": 13,
    "rating": 4.6,
    "sales": 2422,
    "tags": []
   },
   {
    "id": "p3325",
    "name": "藏红花鸡肉饭饭",
    "photo": "br4",
    "cat": "焖饭专区",
    "desc": "揭盖那刻香气翻涌",
    "price": 27,
    "origPrice": 35,
    "rating": 4.6,
    "sales": 789,
    "tags": []
   },
   {
    "id": "p3326",
    "name": "腊肠煲仔炒饭饭",
    "photo": "rc2",
    "cat": "炒饭专区",
    "desc": "每一粒米都裹上蛋液",
    "price": 14,
    "origPrice": 18,
    "rating": 4.4,
    "sales": 1759,
    "tags": []
   },
   {
    "id": "p3327",
    "name": "培根玉米炒饭饭",
    "photo": "rc3",
    "cat": "炒饭专区",
    "desc": "每一粒米都裹上蛋液",
    "price": 24,
    "origPrice": 30.5,
    "rating": 4.8,
    "sales": 220,
    "tags": []
   },
   {
    "id": "p3328",
    "name": "椒麻鸡丁焖饭饭",
    "photo": "br5",
    "cat": "焖饭专区",
    "desc": "配料埋在饭里，挖到就是惊喜",
    "price": 17.5,
    "origPrice": 22,
    "rating": 4.6,
    "sales": 6463,
    "tags": []
   },
   {
    "id": "p3329",
    "name": "葡萄干甜饭饭",
    "photo": "br6",
    "cat": "焖饭专区",
    "desc": "每粒米都站着入味",
    "price": 28,
    "origPrice": 36,
    "rating": 4.5,
    "sales": 440,
    "tags": []
   },
   {
    "id": "p3330",
    "name": "虾酱空心菜炒饭饭",
    "photo": "rc4",
    "cat": "炒饭专区",
    "desc": "配汤免费续（并不能）",
    "price": 17,
    "origPrice": 22,
    "rating": 4.6,
    "sales": 4995,
    "tags": []
   },
   {
    "id": "p3331",
    "name": "果干坚果焖饭饭",
    "photo": "br7",
    "cat": "焖饭专区",
    "desc": "揭盖那刻香气翻涌",
    "price": 9.5,
    "origPrice": 12,
    "rating": 4.8,
    "sales": 800,
    "tags": []
   },
   {
    "id": "p3332",
    "name": "澳门瑶柱炒饭饭",
    "photo": "rc5",
    "cat": "炒饭专区",
    "desc": "大火快炒，锅气是灵魂",
    "price": 32.5,
    "origPrice": 41.5,
    "rating": 4.9,
    "sales": 274,
    "tags": []
   },
   {
    "id": "p3333",
    "name": "番茄牛腩焖饭饭",
    "photo": "br8",
    "cat": "焖饭专区",
    "desc": "焖足四十分钟，米粒吸饱汤汁",
    "price": 19.5,
    "origPrice": 25.5,
    "rating": 4.5,
    "sales": 3937,
    "tags": []
   },
   {
    "id": "p3334",
    "name": "火腿蛋炒饭饭",
    "photo": "rc6",
    "cat": "炒饭专区",
    "desc": "大火快炒，锅气是灵魂",
    "price": 34,
    "origPrice": 44,
    "rating": 4.7,
    "sales": 2847,
    "tags": []
   },
   {
    "id": "p3335",
    "name": "蘑菇鸡腿焖饭饭",
    "photo": "br9",
    "cat": "焖饭专区",
    "desc": "焖足四十分钟，米粒吸饱汤汁",
    "price": 28.5,
    "origPrice": 36.5,
    "rating": 4.9,
    "sales": 8096,
    "tags": []
   },
   {
    "id": "p3336",
    "name": "泡菜芝士炒饭饭",
    "photo": "rc7",
    "cat": "炒饭专区",
    "desc": "配汤免费续（并不能）",
    "price": 12.5,
    "origPrice": 15.5,
    "rating": 4.5,
    "sales": 3089,
    "tags": []
   },
   {
    "id": "p3337",
    "name": "孜然羊肉焖饭饭",
    "photo": "br10",
    "cat": "焖饭专区",
    "desc": "揭盖那刻香气翻涌",
    "price": 26,
    "origPrice": 33,
    "rating": 4.4,
    "sales": 5900,
    "tags": []
   },
   {
    "id": "p3338",
    "name": "青椒牛柳炒饭饭",
    "photo": "rc8",
    "cat": "炒饭专区",
    "desc": "大火快炒，锅气是灵魂",
    "price": 19,
    "origPrice": 24.5,
    "rating": 4.7,
    "sales": 222,
    "tags": []
   },
   {
    "id": "p3339",
    "name": "牛肉黑椒炒饭饭",
    "photo": "rc9",
    "cat": "炒饭专区",
    "desc": "每一粒米都裹上蛋液",
    "price": 21,
    "origPrice": 27,
    "rating": 4.9,
    "sales": 1856,
    "tags": []
   },
   {
    "id": "p3340",
    "name": "菠萝什锦炒饭饭",
    "photo": "rc10",
    "cat": "炒饭专区",
    "desc": "大火快炒，锅气是灵魂",
    "price": 20,
    "origPrice": 25.5,
    "rating": 4.5,
    "sales": 280,
    "tags": []
   }
  ]
 },
 {
  "id": "s34",
  "name": "干饭研究所所",
  "category": "rice",
  "logo": "🍚",
  "brand": "干饭研究所所（猛男的炒饭风）",
  "rating": 4.6,
  "monthlySales": 7890,
  "deliveryMin": 24,
  "deliveryFee": 2.5,
  "minOrder": 15,
  "distanceKm": 0.9,
  "notice": "每一粒米都要裹上蛋液，这是研究所的学术底线。",
  "promos": [
   "满18减3"
  ],
  "photo": "rc32",
  "products": [
   {
    "id": "p3401",
    "name": "黄金蛋炒饭饭",
    "photo": "rc11",
    "cat": "经典炒饭",
    "desc": "蛋花均匀裹住每粒米，简单到极致就是好吃",
    "price": 12,
    "origPrice": 15,
    "rating": 4.4,
    "sales": 4844,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p3402",
    "name": "黄金蛋炒饭饭（大份）",
    "photo": "rc11",
    "cat": "经典炒饭",
    "desc": "配汤免费续（并不能）",
    "price": 17.5,
    "origPrice": 22,
    "rating": 4.4,
    "sales": 4579,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p3403",
    "name": "腊味煲仔炒饭饭",
    "photo": "rc12",
    "cat": "经典炒饭",
    "desc": "配汤免费续（并不能）",
    "price": 16,
    "origPrice": 20,
    "rating": 4.8,
    "sales": 2265,
    "tags": []
   },
   {
    "id": "p3404",
    "name": "腊味煲仔炒饭饭（大份）",
    "photo": "rc12",
    "cat": "经典炒饭",
    "desc": "配汤免费续（并不能）",
    "price": 23,
    "origPrice": 29,
    "rating": 4.4,
    "sales": 2203,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p3405",
    "name": "虾仁什锦炒饭饭",
    "photo": "rc13",
    "cat": "经典炒饭",
    "desc": "大火快炒，锅气是灵魂",
    "price": 17,
    "origPrice": 21,
    "rating": 4.7,
    "sales": 714,
    "tags": []
   },
   {
    "id": "p3406",
    "name": "虾仁什锦炒饭饭（大份）",
    "photo": "rc13",
    "cat": "经典炒饭",
    "desc": "配汤免费续（并不能）",
    "price": 24.5,
    "origPrice": 30.5,
    "rating": 4.4,
    "sales": 3228,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p3407",
    "name": "牛肉粒炒饭饭",
    "photo": "rc14",
    "cat": "经典炒饭",
    "desc": "粒粒分明，干香扑鼻",
    "price": 18,
    "origPrice": 23,
    "rating": 4.5,
    "sales": 1148,
    "tags": [
     "满18减3"
    ]
   },
   {
    "id": "p3408",
    "name": "牛肉粒炒饭饭（大份）",
    "photo": "rc14",
    "cat": "经典炒饭",
    "desc": "配汤免费续（并不能）",
    "price": 26,
    "origPrice": 33.5,
    "rating": 4.8,
    "sales": 2725,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p3409",
    "name": "菠萝海鲜炒饭饭",
    "photo": "rc15",
    "cat": "风味炒饭",
    "desc": "每一粒米都裹上蛋液",
    "price": 19,
    "origPrice": 24,
    "rating": 4.7,
    "sales": 253,
    "tags": []
   },
   {
    "id": "p3410",
    "name": "泡菜五花炒饭饭",
    "photo": "rc16",
    "cat": "风味炒饭",
    "desc": "配汤免费续（并不能）",
    "price": 16,
    "origPrice": 20,
    "rating": 4.4,
    "sales": 212,
    "tags": []
   },
   {
    "id": "p3411",
    "name": "咖喱鸡肉炒饭饭",
    "photo": "rc17",
    "cat": "风味炒饭",
    "desc": "每一粒米都裹上蛋液",
    "price": 17,
    "origPrice": 21,
    "rating": 4.6,
    "sales": 981,
    "tags": [
     "满18减3"
    ]
   },
   {
    "id": "p3412",
    "name": "酱油皇炒饭饭",
    "photo": "rc18",
    "cat": "风味炒饭",
    "desc": "每一粒米都裹上蛋液",
    "price": 13,
    "origPrice": 16,
    "rating": 4.6,
    "sales": 251,
    "tags": []
   },
   {
    "id": "p3413",
    "name": "轻卡藜麦炒饭饭",
    "photo": "rc19",
    "cat": "风味炒饭",
    "desc": "大火快炒，锅气是灵魂",
    "price": 18,
    "origPrice": 23,
    "rating": 4.6,
    "sales": 2272,
    "tags": []
   },
   {
    "id": "p3414",
    "name": "例汤·紫菜蛋花花",
    "photo": "soup3",
    "cat": "汤品小菜",
    "desc": "暖胃暖心，一碗见底",
    "price": 4,
    "origPrice": 6,
    "rating": 4.9,
    "sales": 3431,
    "tags": [
     "满18减3"
    ]
   },
   {
    "id": "p3415",
    "name": "拍黄瓜瓜",
    "photo": "sal4",
    "cat": "汤品小菜",
    "desc": "拍完照记得趁新鲜吃",
    "price": 6,
    "origPrice": 8,
    "rating": 4.8,
    "sales": 4943,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p3416",
    "name": "冰豆浆浆",
    "photo": "jc5",
    "cat": "汤品小菜",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 5,
    "origPrice": 7,
    "rating": 4.5,
    "sales": 1203,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p3417",
    "name": "菠萝什锦炒饭饭",
    "photo": "rc20",
    "cat": "炒饭专区",
    "desc": "粒粒分明，干香扑鼻",
    "price": 26.5,
    "origPrice": 33.5,
    "rating": 4.8,
    "sales": 4214,
    "tags": []
   },
   {
    "id": "p3418",
    "name": "咖喱鸡肉焖饭饭",
    "photo": "br11",
    "cat": "焖饭专区",
    "desc": "配料埋在饭里，挖到就是惊喜",
    "price": 28.5,
    "origPrice": 36.5,
    "rating": 4.8,
    "sales": 1603,
    "tags": []
   },
   {
    "id": "p3419",
    "name": "培根玉米炒饭饭",
    "photo": "rc21",
    "cat": "炒饭专区",
    "desc": "粒粒分明，干香扑鼻",
    "price": 27,
    "origPrice": 34.5,
    "rating": 4.6,
    "sales": 2923,
    "tags": []
   },
   {
    "id": "p3420",
    "name": "青椒牛柳炒饭饭",
    "photo": "rc22",
    "cat": "炒饭专区",
    "desc": "配汤免费续（并不能）",
    "price": 8.5,
    "origPrice": 11,
    "rating": 4.6,
    "sales": 703,
    "tags": []
   },
   {
    "id": "p3421",
    "name": "腊味什锦焖饭饭",
    "photo": "br12",
    "cat": "焖饭专区",
    "desc": "配料埋在饭里，挖到就是惊喜",
    "price": 24.5,
    "origPrice": 31,
    "rating": 4.7,
    "sales": 3162,
    "tags": []
   },
   {
    "id": "p3422",
    "name": "火腿蛋炒饭饭",
    "photo": "rc23",
    "cat": "炒饭专区",
    "desc": "每一粒米都裹上蛋液",
    "price": 23.5,
    "origPrice": 30,
    "rating": 4.6,
    "sales": 297,
    "tags": []
   },
   {
    "id": "p3423",
    "name": "虾仁蛋白炒饭饭",
    "photo": "rc24",
    "cat": "炒饭专区",
    "desc": "大火快炒，锅气是灵魂",
    "price": 35,
    "origPrice": 45,
    "rating": 4.4,
    "sales": 884,
    "tags": []
   },
   {
    "id": "p3424",
    "name": "孜然羊肉焖饭饭",
    "photo": "br13",
    "cat": "焖饭专区",
    "desc": "配料埋在饭里，挖到就是惊喜",
    "price": 31,
    "origPrice": 39.5,
    "rating": 4.8,
    "sales": 2678,
    "tags": []
   },
   {
    "id": "p3425",
    "name": "泡菜芝士炒饭饭",
    "photo": "rc25",
    "cat": "炒饭专区",
    "desc": "每一粒米都裹上蛋液",
    "price": 16.5,
    "origPrice": 21,
    "rating": 4.6,
    "sales": 1865,
    "tags": []
   },
   {
    "id": "p3426",
    "name": "黄萝卜羊排饭饭",
    "photo": "br14",
    "cat": "焖饭专区",
    "desc": "每粒米都站着入味",
    "price": 32,
    "origPrice": 41,
    "rating": 4.7,
    "sales": 3841,
    "tags": []
   },
   {
    "id": "p3427",
    "name": "XO酱海鲜炒饭饭",
    "photo": "rc26",
    "cat": "炒饭专区",
    "desc": "大火快炒，锅气是灵魂",
    "price": 27,
    "origPrice": 34.5,
    "rating": 4.7,
    "sales": 4908,
    "tags": []
   },
   {
    "id": "p3428",
    "name": "藏红花鸡肉饭饭",
    "photo": "br15",
    "cat": "焖饭专区",
    "desc": "焖足四十分钟，米粒吸饱汤汁",
    "price": 11.5,
    "origPrice": 15,
    "rating": 4.7,
    "sales": 2241,
    "tags": []
   },
   {
    "id": "p3429",
    "name": "椒麻鸡丁焖饭饭",
    "photo": "br16",
    "cat": "焖饭专区",
    "desc": "焖足四十分钟，米粒吸饱汤汁",
    "price": 11,
    "origPrice": 14,
    "rating": 4.7,
    "sales": 3742,
    "tags": []
   },
   {
    "id": "p3430",
    "name": "果干坚果焖饭饭",
    "photo": "br17",
    "cat": "焖饭专区",
    "desc": "每粒米都站着入味",
    "price": 17.5,
    "origPrice": 22.5,
    "rating": 4.9,
    "sales": 6282,
    "tags": []
   },
   {
    "id": "p3431",
    "name": "樱花虾炒饭饭",
    "photo": "rc27",
    "cat": "炒饭专区",
    "desc": "每一粒米都裹上蛋液",
    "price": 28,
    "origPrice": 36,
    "rating": 4.7,
    "sales": 1443,
    "tags": []
   },
   {
    "id": "p3432",
    "name": "蘑菇鸡腿焖饭饭",
    "photo": "br18",
    "cat": "焖饭专区",
    "desc": "揭盖那刻香气翻涌",
    "price": 21.5,
    "origPrice": 28,
    "rating": 4.9,
    "sales": 363,
    "tags": []
   },
   {
    "id": "p3433",
    "name": "牛肉黑椒炒饭饭",
    "photo": "rc28",
    "cat": "炒饭专区",
    "desc": "粒粒分明，干香扑鼻",
    "price": 8.5,
    "origPrice": 10.5,
    "rating": 4.4,
    "sales": 1966,
    "tags": []
   },
   {
    "id": "p3434",
    "name": "腊肠煲仔炒饭饭",
    "photo": "rc29",
    "cat": "炒饭专区",
    "desc": "每一粒米都裹上蛋液",
    "price": 13,
    "origPrice": 16.5,
    "rating": 4.6,
    "sales": 7507,
    "tags": []
   },
   {
    "id": "p3435",
    "name": "番茄牛腩焖饭饭",
    "photo": "br19",
    "cat": "焖饭专区",
    "desc": "揭盖那刻香气翻涌",
    "price": 18,
    "origPrice": 23.5,
    "rating": 4.6,
    "sales": 1917,
    "tags": []
   },
   {
    "id": "p3436",
    "name": "葡萄干甜饭饭",
    "photo": "br20",
    "cat": "焖饭专区",
    "desc": "焖足四十分钟，米粒吸饱汤汁",
    "price": 11,
    "origPrice": 14,
    "rating": 4.7,
    "sales": 973,
    "tags": []
   },
   {
    "id": "p3437",
    "name": "澳门瑶柱炒饭饭",
    "photo": "rc30",
    "cat": "炒饭专区",
    "desc": "配汤免费续（并不能）",
    "price": 28.5,
    "origPrice": 36.5,
    "rating": 4.9,
    "sales": 419,
    "tags": []
   },
   {
    "id": "p3438",
    "name": "虾酱空心菜炒饭饭",
    "photo": "rc31",
    "cat": "炒饭专区",
    "desc": "粒粒分明，干香扑鼻",
    "price": 24,
    "origPrice": 30.5,
    "rating": 4.9,
    "sales": 5028,
    "tags": []
   }
  ]
 },
 {
  "id": "s35",
  "name": "疆域大盘盘鸡",
  "category": "rice",
  "logo": "🏔️",
  "brand": "疆域大盘盘鸡（新疆菜馆风）",
  "rating": 4.7,
  "monthlySales": 5670,
  "deliveryMin": 38,
  "deliveryFee": 5,
  "minOrder": 30,
  "distanceKm": 2.5,
  "notice": "皮带面按盘算，手抓饭按锅算，豪迈按新疆算。",
  "promos": [
   "满40减8"
  ],
  "photo": "br35",
  "products": [
   {
    "id": "p3501",
    "name": "羊肉手抓饭饭",
    "photo": "br21",
    "cat": "手抓饭",
    "desc": "黄萝卜和羊肉焖进每粒米，揭盖香气翻涌",
    "price": 26,
    "origPrice": 33,
    "rating": 4.9,
    "sales": 2321,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p3502",
    "name": "羊肉手抓饭饭（大份）",
    "photo": "br21",
    "cat": "手抓饭",
    "desc": "揭盖那刻香气翻涌",
    "price": 37.5,
    "origPrice": 48,
    "rating": 4.8,
    "sales": 7968,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p3503",
    "name": "鸡腿手抓饭饭",
    "photo": "br22",
    "cat": "手抓饭",
    "desc": "每粒米都站着入味",
    "price": 24,
    "origPrice": 30,
    "rating": 4.8,
    "sales": 484,
    "tags": []
   },
   {
    "id": "p3504",
    "name": "鸡腿手抓饭饭（大份）",
    "photo": "br22",
    "cat": "手抓饭",
    "desc": "揭盖那刻香气翻涌",
    "price": 35,
    "origPrice": 43.5,
    "rating": 4.6,
    "sales": 866,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p3505",
    "name": "什锦果干手抓饭饭",
    "photo": "br23",
    "cat": "手抓饭",
    "desc": "焖足四十分钟，米粒吸饱汤汁",
    "price": 22,
    "origPrice": 28,
    "rating": 4.8,
    "sales": 4178,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p3506",
    "name": "砂锅羊排焖饭饭",
    "photo": "br24",
    "cat": "手抓饭",
    "desc": "揭盖那刻香气翻涌",
    "price": 32,
    "origPrice": 40,
    "rating": 4.6,
    "sales": 498,
    "tags": [
     "满40减8"
    ]
   },
   {
    "id": "p3507",
    "name": "大盘鸡·中盘盘",
    "photo": "bc6",
    "cat": "大盘鸡",
    "desc": "土豆软糯鸡块入味，最后皮带面收汁封神",
    "price": 48,
    "origPrice": 60,
    "rating": 4.9,
    "sales": 339,
    "tags": []
   },
   {
    "id": "p3508",
    "name": "大盘鸡·大盘盘",
    "photo": "bc7",
    "cat": "大盘鸡",
    "desc": "咖喱熬到起沙，蘸饼一绝",
    "price": 68,
    "origPrice": 85,
    "rating": 4.8,
    "sales": 2561,
    "tags": []
   },
   {
    "id": "p3509",
    "name": "椒麻鸡拌拌",
    "photo": "bc8",
    "cat": "大盘鸡",
    "desc": "咖喱熬到起沙，蘸饼一绝",
    "price": 28,
    "origPrice": 35,
    "rating": 4.5,
    "sales": 2022,
    "tags": [
     "满40减8"
    ]
   },
   {
    "id": "p3510",
    "name": "红柳烤羊肉串串（五串）",
    "photo": "grill4",
    "cat": "烤串烤馕",
    "desc": "炭火现烤，滋滋冒油",
    "price": 28,
    "origPrice": 35,
    "rating": 4.4,
    "sales": 1017,
    "tags": []
   },
   {
    "id": "p3511",
    "name": "红柳烤羊肉串串（10串）",
    "photo": "grill4",
    "cat": "烤串烤馕",
    "desc": "趁热撸串，凉了味道减半",
    "price": 53,
    "origPrice": 66.5,
    "rating": 4.5,
    "sales": 6522,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p3512",
    "name": "红柳烤羊肉串串（20串）",
    "photo": "grill4",
    "cat": "烤串烤馕",
    "desc": "趁热撸串，凉了味道减半",
    "price": 101,
    "origPrice": 126,
    "rating": 4.7,
    "sales": 1496,
    "tags": [
     "夜宵局"
    ]
   },
   {
    "id": "p3513",
    "name": "馕坑烤肉肉",
    "photo": "grill3",
    "cat": "烤串烤馕",
    "desc": "趁热撸串，凉了味道减半",
    "price": 36,
    "origPrice": 45,
    "rating": 4.5,
    "sales": 251,
    "tags": []
   },
   {
    "id": "p3514",
    "name": "芝麻烤馕馕",
    "photo": "ds41",
    "cat": "烤串烤馕",
    "desc": "面糊现摊现卷，金黄薄脆",
    "price": 8,
    "origPrice": 10,
    "rating": 4.8,
    "sales": 543,
    "tags": [
     "满40减8"
    ]
   },
   {
    "id": "p3515",
    "name": "西域酸奶碗碗",
    "photo": "bowl4",
    "cat": "甜品饮品",
    "desc": "低卡不低配，吃饱不胖",
    "price": 12,
    "origPrice": 15,
    "rating": 4.6,
    "sales": 842,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p3516",
    "name": "卡瓦斯气泡饮饮",
    "photo": "jc7",
    "cat": "甜品饮品",
    "desc": "冷压锁鲜，果肉打到细腻",
    "price": 9,
    "origPrice": 12,
    "rating": 4.6,
    "sales": 251,
    "tags": []
   },
   {
    "id": "p3517",
    "name": "虾酱空心菜炒饭饭",
    "photo": "rc33",
    "cat": "炒饭专区",
    "desc": "粒粒分明，干香扑鼻",
    "price": 11,
    "origPrice": 14,
    "rating": 4.7,
    "sales": 1419,
    "tags": []
   },
   {
    "id": "p3518",
    "name": "葡萄干甜饭饭",
    "photo": "br25",
    "cat": "焖饭专区",
    "desc": "焖足四十分钟，米粒吸饱汤汁",
    "price": 36,
    "origPrice": 46,
    "rating": 4.7,
    "sales": 1923,
    "tags": []
   },
   {
    "id": "p3519",
    "name": "XO酱海鲜炒饭饭",
    "photo": "rc34",
    "cat": "炒饭专区",
    "desc": "每一粒米都裹上蛋液",
    "price": 20.5,
    "origPrice": 26.5,
    "rating": 4.7,
    "sales": 528,
    "tags": []
   },
   {
    "id": "p3520",
    "name": "果干坚果焖饭饭",
    "photo": "br26",
    "cat": "焖饭专区",
    "desc": "揭盖那刻香气翻涌",
    "price": 9.5,
    "origPrice": 12,
    "rating": 4.4,
    "sales": 2530,
    "tags": []
   },
   {
    "id": "p3521",
    "name": "泡菜芝士炒饭饭",
    "photo": "rc35",
    "cat": "炒饭专区",
    "desc": "粒粒分明，干香扑鼻",
    "price": 17,
    "origPrice": 21.5,
    "rating": 4.7,
    "sales": 582,
    "tags": []
   },
   {
    "id": "p3522",
    "name": "孜然羊肉焖饭饭",
    "photo": "br27",
    "cat": "焖饭专区",
    "desc": "焖足四十分钟，米粒吸饱汤汁",
    "price": 27.5,
    "origPrice": 35,
    "rating": 4.5,
    "sales": 5253,
    "tags": []
   },
   {
    "id": "p3523",
    "name": "腊肠煲仔炒饭饭",
    "photo": "rc1",
    "cat": "炒饭专区",
    "desc": "每一粒米都裹上蛋液",
    "price": 21,
    "origPrice": 26.5,
    "rating": 4.7,
    "sales": 2558,
    "tags": []
   },
   {
    "id": "p3524",
    "name": "腊味什锦焖饭饭",
    "photo": "br28",
    "cat": "焖饭专区",
    "desc": "揭盖那刻香气翻涌",
    "price": 37.5,
    "origPrice": 48,
    "rating": 4.7,
    "sales": 6510,
    "tags": []
   },
   {
    "id": "p3525",
    "name": "青椒牛柳炒饭饭",
    "photo": "rc2",
    "cat": "炒饭专区",
    "desc": "配汤免费续（并不能）",
    "price": 27,
    "origPrice": 34.5,
    "rating": 4.4,
    "sales": 2091,
    "tags": []
   },
   {
    "id": "p3526",
    "name": "澳门瑶柱炒饭饭",
    "photo": "rc3",
    "cat": "炒饭专区",
    "desc": "配汤免费续（并不能）",
    "price": 12.5,
    "origPrice": 15.5,
    "rating": 4.8,
    "sales": 258,
    "tags": []
   },
   {
    "id": "p3527",
    "name": "蘑菇鸡腿焖饭饭",
    "photo": "br29",
    "cat": "焖饭专区",
    "desc": "每粒米都站着入味",
    "price": 17,
    "origPrice": 22,
    "rating": 4.6,
    "sales": 1628,
    "tags": []
   },
   {
    "id": "p3528",
    "name": "番茄牛腩焖饭饭",
    "photo": "br30",
    "cat": "焖饭专区",
    "desc": "每粒米都站着入味",
    "price": 30,
    "origPrice": 38.5,
    "rating": 4.8,
    "sales": 2096,
    "tags": []
   },
   {
    "id": "p3529",
    "name": "樱花虾炒饭饭",
    "photo": "rc4",
    "cat": "炒饭专区",
    "desc": "配汤免费续（并不能）",
    "price": 16,
    "origPrice": 20.5,
    "rating": 4.7,
    "sales": 459,
    "tags": []
   },
   {
    "id": "p3530",
    "name": "咖喱鸡肉焖饭饭",
    "photo": "br31",
    "cat": "焖饭专区",
    "desc": "每粒米都站着入味",
    "price": 19,
    "origPrice": 24.5,
    "rating": 4.6,
    "sales": 1071,
    "tags": []
   },
   {
    "id": "p3531",
    "name": "培根玉米炒饭饭",
    "photo": "rc5",
    "cat": "炒饭专区",
    "desc": "粒粒分明，干香扑鼻",
    "price": 24,
    "origPrice": 31,
    "rating": 4.7,
    "sales": 508,
    "tags": []
   },
   {
    "id": "p3532",
    "name": "黄萝卜羊排饭饭",
    "photo": "br32",
    "cat": "焖饭专区",
    "desc": "焖足四十分钟，米粒吸饱汤汁",
    "price": 11,
    "origPrice": 14.5,
    "rating": 4.8,
    "sales": 6188,
    "tags": []
   },
   {
    "id": "p3533",
    "name": "菠萝什锦炒饭饭",
    "photo": "rc6",
    "cat": "炒饭专区",
    "desc": "每一粒米都裹上蛋液",
    "price": 11.5,
    "origPrice": 14.5,
    "rating": 4.7,
    "sales": 3190,
    "tags": []
   },
   {
    "id": "p3534",
    "name": "椒麻鸡丁焖饭饭",
    "photo": "br33",
    "cat": "焖饭专区",
    "desc": "配料埋在饭里，挖到就是惊喜",
    "price": 31,
    "origPrice": 39.5,
    "rating": 4.5,
    "sales": 4952,
    "tags": []
   },
   {
    "id": "p3535",
    "name": "藏红花鸡肉饭饭",
    "photo": "br34",
    "cat": "焖饭专区",
    "desc": "焖足四十分钟，米粒吸饱汤汁",
    "price": 34,
    "origPrice": 43.5,
    "rating": 4.7,
    "sales": 8276,
    "tags": []
   },
   {
    "id": "p3536",
    "name": "虾仁蛋白炒饭饭",
    "photo": "rc7",
    "cat": "炒饭专区",
    "desc": "配汤免费续（并不能）",
    "price": 19.5,
    "origPrice": 24.5,
    "rating": 4.5,
    "sales": 3951,
    "tags": []
   },
   {
    "id": "p3537",
    "name": "牛肉黑椒炒饭饭",
    "photo": "rc8",
    "cat": "炒饭专区",
    "desc": "粒粒分明，干香扑鼻",
    "price": 28.5,
    "origPrice": 36,
    "rating": 4.4,
    "sales": 1393,
    "tags": []
   },
   {
    "id": "p3538",
    "name": "火腿蛋炒饭饭",
    "photo": "rc9",
    "cat": "炒饭专区",
    "desc": "每一粒米都裹上蛋液",
    "price": 29.5,
    "origPrice": 37.5,
    "rating": 4.9,
    "sales": 4143,
    "tags": []
   }
  ]
 },
 {
  "id": "s36",
  "name": "咖喱当家家",
  "category": "rice",
  "logo": "🍛",
  "brand": "咖喱当家家（印度料理屋风）",
  "rating": 4.6,
  "monthlySales": 4320,
  "deliveryMin": 32,
  "deliveryFee": 4,
  "minOrder": 25,
  "distanceKm": 1.9,
  "notice": "香料现磨现炒，飞饼现甩现烤，观赏性和味道都在线。",
  "promos": [
   "满30减6"
  ],
  "photo": "bc13",
  "products": [
   {
    "id": "p3601",
    "name": "黄油咖喱鸡鸡",
    "photo": "bc9",
    "cat": "招牌咖喱",
    "desc": "番茄黄油打底的国民咖喱，浓郁到可以拌三碗饭",
    "price": 32,
    "origPrice": 40,
    "rating": 4.4,
    "sales": 937,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p3602",
    "name": "黄油咖喱鸡鸡（大份）",
    "photo": "bc9",
    "cat": "招牌咖喱",
    "desc": "咖喱熬到起沙，蘸饼一绝",
    "price": 46.5,
    "origPrice": 58,
    "rating": 4.7,
    "sales": 1911,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p3603",
    "name": "玛莎拉咖喱鸡鸡",
    "photo": "bc10",
    "cat": "招牌咖喱",
    "desc": "香料现磨现炒，浓郁到拌三碗饭",
    "price": 30,
    "origPrice": 38,
    "rating": 4.7,
    "sales": 1923,
    "tags": []
   },
   {
    "id": "p3604",
    "name": "玛莎拉咖喱鸡鸡（大份）",
    "photo": "bc10",
    "cat": "招牌咖喱",
    "desc": "嫩鸡吸饱酱汁，入口即化",
    "price": 43.5,
    "origPrice": 55,
    "rating": 4.9,
    "sales": 3153,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p3605",
    "name": "菠菜芝士咖喱喱",
    "photo": "soup6",
    "cat": "招牌咖喱",
    "desc": "暖胃暖心，一碗见底",
    "price": 26,
    "origPrice": 33,
    "rating": 4.5,
    "sales": 460,
    "tags": []
   },
   {
    "id": "p3606",
    "name": "咖喱牛腩腩",
    "photo": "bc11",
    "cat": "招牌咖喱",
    "desc": "微辣回甘，越吃越上头",
    "price": 34,
    "origPrice": 42,
    "rating": 4.7,
    "sales": 1169,
    "tags": [
     "满30减6"
    ]
   },
   {
    "id": "p3607",
    "name": "咖喱肉丸丸",
    "photo": "bc12",
    "cat": "招牌咖喱",
    "desc": "嫩鸡吸饱酱汁，入口即化",
    "price": 28,
    "origPrice": 35,
    "rating": 4.6,
    "sales": 5706,
    "tags": []
   },
   {
    "id": "p3608",
    "name": "香料鸡肉焖饭饭",
    "photo": "br36",
    "cat": "焖饭主食",
    "desc": "每粒米都站着入味",
    "price": 24,
    "origPrice": 30,
    "rating": 4.5,
    "sales": 2622,
    "tags": []
   },
   {
    "id": "p3609",
    "name": "香料鸡肉焖饭饭（大份）",
    "photo": "br36",
    "cat": "焖饭主食",
    "desc": "焖足四十分钟，米粒吸饱汤汁",
    "price": 35,
    "origPrice": 43.5,
    "rating": 4.6,
    "sales": 8238,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p3610",
    "name": "藏红花香米饭饭",
    "photo": "br37",
    "cat": "焖饭主食",
    "desc": "揭盖那刻香气翻涌",
    "price": 10,
    "origPrice": 13,
    "rating": 4.5,
    "sales": 1714,
    "tags": [
     "满30减6"
    ]
   },
   {
    "id": "p3611",
    "name": "黄油原味飞饼饼",
    "photo": "ds42",
    "cat": "现甩飞饼",
    "desc": "现甩现烤，观赏性和味道都在线",
    "price": 9,
    "origPrice": 12,
    "rating": 4.5,
    "sales": 1367,
    "tags": []
   },
   {
    "id": "p3612",
    "name": "蒜香芝士飞饼饼",
    "photo": "ds43",
    "cat": "现甩飞饼",
    "desc": "面糊现摊现卷，金黄薄脆",
    "price": 12,
    "origPrice": 15,
    "rating": 4.4,
    "sales": 2572,
    "tags": []
   },
   {
    "id": "p3613",
    "name": "甜蕉飞饼饼",
    "photo": "ds44",
    "cat": "现甩飞饼",
    "desc": "面糊现摊现卷，金黄薄脆",
    "price": 11,
    "origPrice": 14,
    "rating": 4.6,
    "sales": 1709,
    "tags": [
     "满30减6"
    ]
   },
   {
    "id": "p3614",
    "name": "马萨拉脆脆饼饼",
    "photo": "ds45",
    "cat": "现甩飞饼",
    "desc": "摊得比脸还大，卷起来刚刚好",
    "price": 10,
    "origPrice": 13,
    "rating": 4.9,
    "sales": 321,
    "tags": []
   },
   {
    "id": "p3615",
    "name": "咖喱酥炸三角角",
    "photo": "sm19",
    "cat": "小食",
    "desc": "外脆内糯，配蘸水更妙",
    "price": 8,
    "origPrice": 11,
    "rating": 4.4,
    "sales": 201,
    "tags": []
   },
   {
    "id": "p3616",
    "name": "酸奶芒果昔昔",
    "photo": "jc4",
    "cat": "小食",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 13,
    "origPrice": 17,
    "rating": 4.6,
    "sales": 3253,
    "tags": [
     "满30减6"
    ]
   },
   {
    "id": "p3617",
    "name": "拉茶茶",
    "photo": "tea3",
    "cat": "小食",
    "desc": "甜度冰量可备注调整",
    "price": 9,
    "origPrice": 12,
    "rating": 4.6,
    "sales": 3371,
    "tags": []
   },
   {
    "id": "p3618",
    "name": "拉茶茶（大杯）",
    "photo": "tea3",
    "cat": "小食",
    "desc": "茶汤现萃，香气立体",
    "price": 12,
    "origPrice": 15,
    "rating": 4.7,
    "sales": 3781,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p3619",
    "name": "澳门瑶柱炒饭饭",
    "photo": "rc10",
    "cat": "炒饭专区",
    "desc": "粒粒分明，干香扑鼻",
    "price": 9,
    "origPrice": 11.5,
    "rating": 4.7,
    "sales": 1402,
    "tags": []
   },
   {
    "id": "p3620",
    "name": "番茄牛腩焖饭饭",
    "photo": "br38",
    "cat": "焖饭专区",
    "desc": "每粒米都站着入味",
    "price": 22,
    "origPrice": 28,
    "rating": 4.6,
    "sales": 1482,
    "tags": []
   },
   {
    "id": "p3621",
    "name": "火腿蛋炒饭饭",
    "photo": "rc11",
    "cat": "炒饭专区",
    "desc": "每一粒米都裹上蛋液",
    "price": 11.5,
    "origPrice": 14.5,
    "rating": 4.4,
    "sales": 3395,
    "tags": []
   },
   {
    "id": "p3622",
    "name": "葡萄干甜饭饭",
    "photo": "br39",
    "cat": "焖饭专区",
    "desc": "揭盖那刻香气翻涌",
    "price": 17,
    "origPrice": 22,
    "rating": 4.5,
    "sales": 5680,
    "tags": []
   },
   {
    "id": "p3623",
    "name": "樱花虾炒饭饭",
    "photo": "rc12",
    "cat": "炒饭专区",
    "desc": "粒粒分明，干香扑鼻",
    "price": 19.5,
    "origPrice": 24.5,
    "rating": 4.8,
    "sales": 396,
    "tags": []
   },
   {
    "id": "p3624",
    "name": "果干坚果焖饭饭",
    "photo": "br40",
    "cat": "焖饭专区",
    "desc": "每粒米都站着入味",
    "price": 28,
    "origPrice": 35.5,
    "rating": 4.7,
    "sales": 1354,
    "tags": []
   },
   {
    "id": "p3625",
    "name": "培根玉米炒饭饭",
    "photo": "rc13",
    "cat": "炒饭专区",
    "desc": "配汤免费续（并不能）",
    "price": 23,
    "origPrice": 29,
    "rating": 4.7,
    "sales": 251,
    "tags": []
   },
   {
    "id": "p3626",
    "name": "孜然羊肉焖饭饭",
    "photo": "br41",
    "cat": "焖饭专区",
    "desc": "揭盖那刻香气翻涌",
    "price": 14,
    "origPrice": 18,
    "rating": 4.5,
    "sales": 3084,
    "tags": []
   },
   {
    "id": "p3627",
    "name": "牛肉黑椒炒饭饭",
    "photo": "rc14",
    "cat": "炒饭专区",
    "desc": "粒粒分明，干香扑鼻",
    "price": 12,
    "origPrice": 15,
    "rating": 4.8,
    "sales": 4909,
    "tags": []
   },
   {
    "id": "p3628",
    "name": "腊肠煲仔炒饭饭",
    "photo": "rc15",
    "cat": "炒饭专区",
    "desc": "配汤免费续（并不能）",
    "price": 13.5,
    "origPrice": 17.5,
    "rating": 4.5,
    "sales": 785,
    "tags": []
   },
   {
    "id": "p3629",
    "name": "腊味什锦焖饭饭",
    "photo": "br42",
    "cat": "焖饭专区",
    "desc": "揭盖那刻香气翻涌",
    "price": 15.5,
    "origPrice": 20,
    "rating": 4.6,
    "sales": 3643,
    "tags": []
   },
   {
    "id": "p3630",
    "name": "藏红花鸡肉饭饭",
    "photo": "br43",
    "cat": "焖饭专区",
    "desc": "焖足四十分钟，米粒吸饱汤汁",
    "price": 27.5,
    "origPrice": 35.5,
    "rating": 4.7,
    "sales": 598,
    "tags": []
   },
   {
    "id": "p3631",
    "name": "椒麻鸡丁焖饭饭",
    "photo": "br44",
    "cat": "焖饭专区",
    "desc": "每粒米都站着入味",
    "price": 29.5,
    "origPrice": 37.5,
    "rating": 4.9,
    "sales": 2595,
    "tags": []
   },
   {
    "id": "p3632",
    "name": "青椒牛柳炒饭饭",
    "photo": "rc16",
    "cat": "炒饭专区",
    "desc": "每一粒米都裹上蛋液",
    "price": 28.5,
    "origPrice": 36.5,
    "rating": 4.7,
    "sales": 871,
    "tags": []
   },
   {
    "id": "p3633",
    "name": "蘑菇鸡腿焖饭饭",
    "photo": "br45",
    "cat": "焖饭专区",
    "desc": "焖足四十分钟，米粒吸饱汤汁",
    "price": 30.5,
    "origPrice": 39,
    "rating": 4.6,
    "sales": 7942,
    "tags": []
   },
   {
    "id": "p3634",
    "name": "虾仁蛋白炒饭饭",
    "photo": "rc17",
    "cat": "炒饭专区",
    "desc": "配汤免费续（并不能）",
    "price": 15.5,
    "origPrice": 20,
    "rating": 4.7,
    "sales": 691,
    "tags": []
   },
   {
    "id": "p3635",
    "name": "XO酱海鲜炒饭饭",
    "photo": "rc18",
    "cat": "炒饭专区",
    "desc": "配汤免费续（并不能）",
    "price": 20,
    "origPrice": 26,
    "rating": 4.5,
    "sales": 3941,
    "tags": []
   },
   {
    "id": "p3636",
    "name": "咖喱鸡肉焖饭饭",
    "photo": "br46",
    "cat": "焖饭专区",
    "desc": "每粒米都站着入味",
    "price": 28.5,
    "origPrice": 36.5,
    "rating": 4.8,
    "sales": 1433,
    "tags": []
   },
   {
    "id": "p3637",
    "name": "黄萝卜羊排饭饭",
    "photo": "br47",
    "cat": "焖饭专区",
    "desc": "每粒米都站着入味",
    "price": 12.5,
    "origPrice": 16,
    "rating": 4.6,
    "sales": 7965,
    "tags": []
   },
   {
    "id": "p3638",
    "name": "菠萝什锦炒饭饭",
    "photo": "rc19",
    "cat": "炒饭专区",
    "desc": "粒粒分明，干香扑鼻",
    "price": 20,
    "origPrice": 25.5,
    "rating": 4.4,
    "sales": 616,
    "tags": []
   },
   {
    "id": "p3639",
    "name": "虾酱空心菜炒饭饭",
    "photo": "rc20",
    "cat": "炒饭专区",
    "desc": "粒粒分明，干香扑鼻",
    "price": 8.5,
    "origPrice": 11,
    "rating": 4.7,
    "sales": 4576,
    "tags": []
   },
   {
    "id": "p3640",
    "name": "泡菜芝士炒饭饭",
    "photo": "rc21",
    "cat": "炒饭专区",
    "desc": "配汤免费续（并不能）",
    "price": 13.5,
    "origPrice": 17.5,
    "rating": 4.8,
    "sales": 1355,
    "tags": []
   }
  ]
 },
 {
  "id": "s37",
  "name": "西堤牛牛排",
  "category": "western",
  "logo": "🥩",
  "brand": "西堤牛牛排（王品西堤风）",
  "rating": 4.8,
  "monthlySales": 3901,
  "deliveryMin": 33,
  "deliveryFee": 4,
  "minOrder": 25,
  "distanceKm": 2.2,
  "notice": "牛排五分熟起送（三分熟需备注），黑椒汁单独打包不泡软。",
  "promos": [
   "满35减6"
  ],
  "photo": "stk1",
  "products": [
   {
    "id": "p3701",
    "name": "菲力牛排排",
    "photo": "stk1",
    "cat": "招牌牛排",
    "desc": "厚切菲力，五分熟的粉红剖面是尊严",
    "price": 68,
    "origPrice": 85,
    "rating": 4.4,
    "sales": 2235,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p3702",
    "name": "黑椒牛排双拼盘盘",
    "photo": "stk2",
    "cat": "招牌牛排",
    "desc": "刀叉切下去的瞬间，值回票价",
    "price": 55,
    "origPrice": 68,
    "rating": 4.7,
    "sales": 3596,
    "tags": []
   },
   {
    "id": "p3703",
    "name": "菌菇酱牛排排",
    "photo": "stk3",
    "cat": "招牌牛排",
    "desc": "刀叉切下去的瞬间，值回票价",
    "price": 52,
    "origPrice": 65,
    "rating": 4.4,
    "sales": 3136,
    "tags": []
   },
   {
    "id": "p3704",
    "name": "炭烤战斧牛排排",
    "photo": "stk4",
    "cat": "招牌牛排",
    "desc": "黑椒汁现磨现淋",
    "price": 88,
    "origPrice": 110,
    "rating": 4.8,
    "sales": 1172,
    "tags": [
     "满35减6"
    ]
   },
   {
    "id": "p3705",
    "name": "牛排大虾双拼饭饭",
    "photo": "stk5",
    "cat": "招牌牛排",
    "desc": "刀叉切下去的瞬间，值回票价",
    "price": 45,
    "origPrice": 56,
    "rating": 4.7,
    "sales": 2372,
    "tags": []
   },
   {
    "id": "p3706",
    "name": "芦笋煎牛排排",
    "photo": "stk7",
    "cat": "招牌牛排",
    "desc": "黑椒汁现磨现淋",
    "price": 49,
    "origPrice": 61,
    "rating": 4.8,
    "sales": 439,
    "tags": []
   },
   {
    "id": "p3707",
    "name": "烤鱼排配时蔬蔬",
    "photo": "stk6",
    "cat": "海陆主菜",
    "desc": "厚切现煎，五分熟的粉红剖面",
    "price": 38,
    "origPrice": 47,
    "rating": 4.8,
    "sales": 2411,
    "tags": [
     "满35减6"
    ]
   },
   {
    "id": "p3708",
    "name": "烤三文鱼米饭碗碗",
    "photo": "stk8",
    "cat": "海陆主菜",
    "desc": "刀叉切下去的瞬间，值回票价",
    "price": 34,
    "origPrice": 42,
    "rating": 4.8,
    "sales": 755,
    "tags": []
   },
   {
    "id": "p3709",
    "name": "蒜香烤大虾虾",
    "photo": "sea1",
    "cat": "海陆主菜",
    "desc": "当日海货，鲜字当头",
    "price": 42,
    "origPrice": 52,
    "rating": 4.7,
    "sales": 1524,
    "tags": []
   },
   {
    "id": "p3710",
    "name": "奶油蘑菇汤汤",
    "photo": "soup5",
    "cat": "汤品甜点",
    "desc": "先喝汤是老规矩",
    "price": 14,
    "origPrice": 18,
    "rating": 4.5,
    "sales": 760,
    "tags": [
     "满35减6"
    ]
   },
   {
    "id": "p3711",
    "name": "南瓜浓汤汤",
    "photo": "soup2",
    "cat": "汤品甜点",
    "desc": "先喝汤是老规矩",
    "price": 13,
    "origPrice": 17,
    "rating": 4.5,
    "sales": 3785,
    "tags": []
   },
   {
    "id": "p3712",
    "name": "树莓酱厚松饼塔塔",
    "photo": "pk1",
    "cat": "汤品甜点",
    "desc": "甜品胃是另一个胃",
    "price": 16,
    "origPrice": 21,
    "rating": 4.6,
    "sales": 447,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p3713",
    "name": "提拉米苏苏",
    "photo": "cake2",
    "cat": "汤品甜点",
    "desc": "叉子下去像踩进云端",
    "price": 18,
    "origPrice": 23,
    "rating": 4.7,
    "sales": 945,
    "tags": [
     "满35减6"
    ]
   },
   {
    "id": "p3714",
    "name": "气泡果饮饮",
    "photo": "drk3",
    "cat": "汤品甜点",
    "desc": "冰块加到怀疑人生，解暑一流",
    "price": 12,
    "origPrice": 15,
    "rating": 4.5,
    "sales": 1053,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p3715",
    "name": "肉桂糖霜卷卷",
    "photo": "dt33",
    "cat": "甜品吧",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 37,
    "origPrice": 47.5,
    "rating": 4.8,
    "sales": 393,
    "tags": []
   },
   {
    "id": "p3716",
    "name": "芝士条条",
    "photo": "dt34",
    "cat": "甜品吧",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 31,
    "origPrice": 39.5,
    "rating": 4.4,
    "sales": 1451,
    "tags": []
   },
   {
    "id": "p3717",
    "name": "蔓越莓司康康",
    "photo": "dt35",
    "cat": "甜品吧",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 34,
    "origPrice": 43.5,
    "rating": 4.8,
    "sales": 778,
    "tags": []
   },
   {
    "id": "p3718",
    "name": "椰蓉球球",
    "photo": "dt36",
    "cat": "甜品吧",
    "desc": "冷藏后风味更佳",
    "price": 27,
    "origPrice": 35,
    "rating": 4.8,
    "sales": 3652,
    "tags": []
   },
   {
    "id": "p3719",
    "name": "巧克力脆脆卷卷",
    "photo": "dt1",
    "cat": "甜品吧",
    "desc": "下午茶的正确打开方式",
    "price": 20,
    "origPrice": 25.5,
    "rating": 4.5,
    "sales": 2759,
    "tags": []
   },
   {
    "id": "p3720",
    "name": "乳酪蛋糕条条",
    "photo": "dt2",
    "cat": "甜品吧",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 22.5,
    "origPrice": 28.5,
    "rating": 4.6,
    "sales": 6597,
    "tags": []
   },
   {
    "id": "p3721",
    "name": "海盐芝士卷卷",
    "photo": "dt3",
    "cat": "甜品吧",
    "desc": "冷藏后风味更佳",
    "price": 31.5,
    "origPrice": 40.5,
    "rating": 4.4,
    "sales": 295,
    "tags": []
   },
   {
    "id": "p3722",
    "name": "抹茶雪媚娘娘",
    "photo": "dt4",
    "cat": "甜品吧",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 23.5,
    "origPrice": 30,
    "rating": 4.9,
    "sales": 264,
    "tags": []
   },
   {
    "id": "p3723",
    "name": "莓果慕斯杯杯",
    "photo": "dt5",
    "cat": "甜品吧",
    "desc": "下午茶的正确打开方式",
    "price": 8.5,
    "origPrice": 10.5,
    "rating": 4.8,
    "sales": 5659,
    "tags": []
   },
   {
    "id": "p3724",
    "name": "焦糖布丁挞挞",
    "photo": "dt6",
    "cat": "甜品吧",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 26.5,
    "origPrice": 33.5,
    "rating": 4.7,
    "sales": 3039,
    "tags": []
   },
   {
    "id": "p3725",
    "name": "杏仁瓦片酥酥",
    "photo": "dt7",
    "cat": "甜品吧",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 36.5,
    "origPrice": 46.5,
    "rating": 4.8,
    "sales": 4069,
    "tags": []
   },
   {
    "id": "p3726",
    "name": "黄油曲奇奇",
    "photo": "dt8",
    "cat": "甜品吧",
    "desc": "下午茶的正确打开方式",
    "price": 19.5,
    "origPrice": 25,
    "rating": 4.5,
    "sales": 866,
    "tags": []
   },
   {
    "id": "p3727",
    "name": "奶香小方方",
    "photo": "dt9",
    "cat": "甜品吧",
    "desc": "下午茶的正确打开方式",
    "price": 37.5,
    "origPrice": 48,
    "rating": 4.7,
    "sales": 2313,
    "tags": []
   },
   {
    "id": "p3728",
    "name": "流心芝士挞挞",
    "photo": "dt10",
    "cat": "甜品吧",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 37.5,
    "origPrice": 48,
    "rating": 4.6,
    "sales": 3972,
    "tags": []
   }
  ]
 },
 {
  "id": "s38",
  "name": "板前寿寿司",
  "category": "western",
  "logo": "🍣",
  "brand": "板前寿寿司（争鲜/板前寿司风）",
  "rating": 4.7,
  "monthlySales": 5430,
  "deliveryMin": 30,
  "deliveryFee": 4.5,
  "minOrder": 30,
  "distanceKm": 2.1,
  "notice": "当日渔获当日售完，芥末给量守恒：你哭的程度=新鲜的程度。",
  "promos": [
   "满40减8"
  ],
  "photo": "sushi1",
  "products": [
   {
    "id": "p3801",
    "name": "深海刺身拼盘盘",
    "photo": "sushi1",
    "cat": "刺身",
    "desc": "当日到店的新鲜，刺身盘就是检验标准",
    "price": 58,
    "origPrice": 72,
    "rating": 4.5,
    "sales": 3267,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p3802",
    "name": "深海刺身拼盘盘（大份）",
    "photo": "sushi1",
    "cat": "刺身",
    "desc": "当日渔获，新鲜看得见",
    "price": 84,
    "origPrice": 104.5,
    "rating": 4.5,
    "sales": 1201,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p3803",
    "name": "金枪鱼塔塔杯杯",
    "photo": "sushi4",
    "cat": "刺身",
    "desc": "芥末给量守恒：眼泪=新鲜度",
    "price": 32,
    "origPrice": 40,
    "rating": 4.8,
    "sales": 1061,
    "tags": []
   },
   {
    "id": "p3804",
    "name": "炙烤大虾寿司团团",
    "photo": "sushi2",
    "cat": "寿司",
    "desc": "芥末给量守恒：眼泪=新鲜度",
    "price": 28,
    "origPrice": 35,
    "rating": 4.6,
    "sales": 3863,
    "tags": []
   },
   {
    "id": "p3805",
    "name": "炙烤大虾寿司团团（大份）",
    "photo": "sushi2",
    "cat": "寿司",
    "desc": "芥末给量守恒：眼泪=新鲜度",
    "price": 40.5,
    "origPrice": 51,
    "rating": 4.4,
    "sales": 329,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p3806",
    "name": "一口寿司精选勺勺",
    "photo": "sushi3",
    "cat": "寿司",
    "desc": "当日渔获，新鲜看得见",
    "price": 26,
    "origPrice": 33,
    "rating": 4.6,
    "sales": 5581,
    "tags": [
     "满40减8"
    ]
   },
   {
    "id": "p3807",
    "name": "一口寿司精选勺勺（大份）",
    "photo": "sushi3",
    "cat": "寿司",
    "desc": "当日渔获，新鲜看得见",
    "price": 37.5,
    "origPrice": 48,
    "rating": 4.6,
    "sales": 202,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p3808",
    "name": "烤三文鱼定食食",
    "photo": "sea8",
    "cat": "定食",
    "desc": "壳一掀开，海风扑面",
    "price": 38,
    "origPrice": 47,
    "rating": 4.9,
    "sales": 699,
    "tags": []
   },
   {
    "id": "p3809",
    "name": "照烧鸡腿定食食",
    "photo": "bowl8",
    "cat": "定食",
    "desc": "低卡不低配，吃饱不胖",
    "price": 32,
    "origPrice": 40,
    "rating": 4.8,
    "sales": 3279,
    "tags": []
   },
   {
    "id": "p3810",
    "name": "盐烤三文鱼排排",
    "photo": "sea9",
    "cat": "定食",
    "desc": "当日海货，鲜字当头",
    "price": 36,
    "origPrice": 45,
    "rating": 4.8,
    "sales": 2672,
    "tags": [
     "满40减8"
    ]
   },
   {
    "id": "p3811",
    "name": "日式炸鸡块块",
    "photo": "fried1",
    "cat": "小食",
    "desc": "外脆内糯，配蘸水更妙",
    "price": 18,
    "origPrice": 23,
    "rating": 4.7,
    "sales": 5072,
    "tags": []
   },
   {
    "id": "p3812",
    "name": "黄金炸虾天妇罗罗",
    "photo": "fried2",
    "cat": "小食",
    "desc": "外脆内糯，配蘸水更妙",
    "price": 22,
    "origPrice": 28,
    "rating": 4.7,
    "sales": 3867,
    "tags": []
   },
   {
    "id": "p3813",
    "name": "味噌汤汤",
    "photo": "soup6",
    "cat": "小食",
    "desc": "炖足八小时，浓稠挂勺",
    "price": 8,
    "origPrice": 10,
    "rating": 4.6,
    "sales": 2270,
    "tags": [
     "满40减8"
    ]
   },
   {
    "id": "p3814",
    "name": "抹茶拿铁铁",
    "photo": "tea7",
    "cat": "饮品",
    "desc": "茶底当日现泡，过夜就倒",
    "price": 15,
    "origPrice": 19,
    "rating": 4.5,
    "sales": 2864,
    "tags": []
   },
   {
    "id": "p3815",
    "name": "抹茶拿铁铁（大杯）",
    "photo": "tea7",
    "cat": "饮品",
    "desc": "甜度冰量可备注调整",
    "price": 18,
    "origPrice": 22,
    "rating": 4.4,
    "sales": 265,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p3816",
    "name": "杏仁瓦片酥酥",
    "photo": "dt11",
    "cat": "甜品吧",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 32.5,
    "origPrice": 41.5,
    "rating": 4.8,
    "sales": 1415,
    "tags": []
   },
   {
    "id": "p3817",
    "name": "椰蓉球球",
    "photo": "dt12",
    "cat": "甜品吧",
    "desc": "冷藏后风味更佳",
    "price": 34,
    "origPrice": 43.5,
    "rating": 4.6,
    "sales": 3716,
    "tags": []
   },
   {
    "id": "p3818",
    "name": "抹茶雪媚娘娘",
    "photo": "dt13",
    "cat": "甜品吧",
    "desc": "冷藏后风味更佳",
    "price": 9,
    "origPrice": 11,
    "rating": 4.5,
    "sales": 1470,
    "tags": []
   },
   {
    "id": "p3819",
    "name": "黄油曲奇奇",
    "photo": "dt14",
    "cat": "甜品吧",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 26.5,
    "origPrice": 34,
    "rating": 4.7,
    "sales": 5333,
    "tags": []
   },
   {
    "id": "p3820",
    "name": "蔓越莓司康康",
    "photo": "dt15",
    "cat": "甜品吧",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 37,
    "origPrice": 47.5,
    "rating": 4.9,
    "sales": 4477,
    "tags": []
   },
   {
    "id": "p3821",
    "name": "奶香小方方",
    "photo": "dt16",
    "cat": "甜品吧",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 21,
    "origPrice": 27,
    "rating": 4.6,
    "sales": 2756,
    "tags": []
   },
   {
    "id": "p3822",
    "name": "巧克力脆脆卷卷",
    "photo": "dt17",
    "cat": "甜品吧",
    "desc": "下午茶的正确打开方式",
    "price": 18,
    "origPrice": 23,
    "rating": 4.6,
    "sales": 3499,
    "tags": []
   },
   {
    "id": "p3823",
    "name": "流心芝士挞挞",
    "photo": "dt18",
    "cat": "甜品吧",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 38,
    "origPrice": 48.5,
    "rating": 4.6,
    "sales": 4141,
    "tags": []
   },
   {
    "id": "p3824",
    "name": "肉桂糖霜卷卷",
    "photo": "dt19",
    "cat": "甜品吧",
    "desc": "冷藏后风味更佳",
    "price": 24.5,
    "origPrice": 31.5,
    "rating": 4.6,
    "sales": 7661,
    "tags": []
   },
   {
    "id": "p3825",
    "name": "提子燕麦饼饼",
    "photo": "dt20",
    "cat": "甜品吧",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 15,
    "origPrice": 19,
    "rating": 4.7,
    "sales": 754,
    "tags": []
   },
   {
    "id": "p3826",
    "name": "海盐芝士卷卷",
    "photo": "dt21",
    "cat": "甜品吧",
    "desc": "下午茶的正确打开方式",
    "price": 31.5,
    "origPrice": 40.5,
    "rating": 4.6,
    "sales": 200,
    "tags": []
   },
   {
    "id": "p3827",
    "name": "焦糖布丁挞挞",
    "photo": "dt22",
    "cat": "甜品吧",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 15.5,
    "origPrice": 19.5,
    "rating": 4.7,
    "sales": 821,
    "tags": []
   },
   {
    "id": "p3828",
    "name": "乳酪蛋糕条条",
    "photo": "dt23",
    "cat": "甜品吧",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 20.5,
    "origPrice": 26,
    "rating": 4.8,
    "sales": 653,
    "tags": []
   }
  ]
 },
 {
  "id": "s39",
  "name": "蟹老板海鲜鲜",
  "category": "western",
  "logo": "🦀",
  "brand": "蟹老板海鲜鲜（海鲜大排档风）",
  "rating": 4.7,
  "monthlySales": 3210,
  "deliveryMin": 45,
  "deliveryFee": 6.5,
  "minOrder": 50,
  "distanceKm": 3.4,
  "notice": "今日海货看板每天更新，蒜蓉粉丝是所有贝类的官配。",
  "promos": [
   "满80减15"
  ],
  "photo": "sea5",
  "products": [
   {
    "id": "p3901",
    "name": "香烤大蟹蟹",
    "photo": "sea5",
    "cat": "今日海货",
    "desc": "整只烤蟹端上桌，钳子里全是干货",
    "price": 88,
    "origPrice": 108,
    "rating": 4.8,
    "sales": 394,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p3902",
    "name": "碳烤大虾拼盘盘",
    "photo": "sea2",
    "cat": "今日海货",
    "desc": "当日海货，鲜字当头",
    "price": 58,
    "origPrice": 72,
    "rating": 4.5,
    "sales": 233,
    "tags": []
   },
   {
    "id": "p3903",
    "name": "碳烤大虾拼盘盘（大份）",
    "photo": "sea2",
    "cat": "今日海货",
    "desc": "当日海货，鲜字当头",
    "price": 84,
    "origPrice": 104.5,
    "rating": 4.6,
    "sales": 6836,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p3904",
    "name": "蒜蓉开边大虾虾",
    "photo": "sea1",
    "cat": "今日海货",
    "desc": "蒜蓉是所有海鲜的官配",
    "price": 52,
    "origPrice": 65,
    "rating": 4.4,
    "sales": 676,
    "tags": []
   },
   {
    "id": "p3905",
    "name": "蒜蓉开边大虾虾（大份）",
    "photo": "sea1",
    "cat": "今日海货",
    "desc": "蒜蓉是所有海鲜的官配",
    "price": 75.5,
    "origPrice": 94.5,
    "rating": 4.5,
    "sales": 1120,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p3906",
    "name": "椒盐濑尿虾虾",
    "photo": "sea3",
    "cat": "今日海货",
    "desc": "蒜蓉是所有海鲜的官配",
    "price": 48,
    "origPrice": 60,
    "rating": 4.5,
    "sales": 3324,
    "tags": [
     "满80减15"
    ]
   },
   {
    "id": "p3907",
    "name": "蛤蜊贻贝拼锅锅",
    "photo": "sea7",
    "cat": "今日海货",
    "desc": "当日海货，鲜字当头",
    "price": 42,
    "origPrice": 52,
    "rating": 4.9,
    "sales": 1936,
    "tags": []
   },
   {
    "id": "p3908",
    "name": "海鲜什锦暖锅锅",
    "photo": "sea6",
    "cat": "今日海货",
    "desc": "蒜蓉是所有海鲜的官配",
    "price": 68,
    "origPrice": 85,
    "rating": 4.4,
    "sales": 334,
    "tags": []
   },
   {
    "id": "p3909",
    "name": "虾仁柠檬饭碗碗",
    "photo": "ricebowl1",
    "cat": "主食",
    "desc": "门店同款，现做现送",
    "price": 26,
    "origPrice": 33,
    "rating": 4.7,
    "sales": 7220,
    "tags": [
     "满80减15"
    ]
   },
   {
    "id": "p3910",
    "name": "海鲜浓汤汤",
    "photo": "soup4",
    "cat": "主食",
    "desc": "暖胃暖心，一碗见底",
    "price": 18,
    "origPrice": 23,
    "rating": 4.8,
    "sales": 7252,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p3911",
    "name": "蒜香面包盅盅",
    "photo": "bread",
    "cat": "主食",
    "desc": "门店同款，现做现送",
    "price": 8,
    "origPrice": 11,
    "rating": 4.8,
    "sales": 2653,
    "tags": []
   },
   {
    "id": "p3912",
    "name": "冰镇青柠特饮饮",
    "photo": "drk2",
    "cat": "饮品",
    "desc": "鲜果现切现榨，不加一滴香精",
    "price": 10,
    "origPrice": 13,
    "rating": 4.4,
    "sales": 2012,
    "tags": [
     "满80减15"
    ]
   },
   {
    "id": "p3913",
    "name": "冰镇青柠特饮饮（大杯）",
    "photo": "drk2",
    "cat": "饮品",
    "desc": "冰块加到怀疑人生，解暑一流",
    "price": 13,
    "origPrice": 16,
    "rating": 4.9,
    "sales": 756,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p3914",
    "name": "杏仁瓦片酥酥",
    "photo": "dt24",
    "cat": "甜品吧",
    "desc": "冷藏后风味更佳",
    "price": 28,
    "origPrice": 36,
    "rating": 4.5,
    "sales": 433,
    "tags": []
   },
   {
    "id": "p3915",
    "name": "奶油泡芙芙",
    "photo": "dt25",
    "cat": "甜品吧",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 14.5,
    "origPrice": 19,
    "rating": 4.6,
    "sales": 4251,
    "tags": []
   },
   {
    "id": "p3916",
    "name": "肉桂糖霜卷卷",
    "photo": "dt26",
    "cat": "甜品吧",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 9.5,
    "origPrice": 12,
    "rating": 4.5,
    "sales": 411,
    "tags": []
   },
   {
    "id": "p3917",
    "name": "芝士条条",
    "photo": "dt27",
    "cat": "甜品吧",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 10,
    "origPrice": 13,
    "rating": 4.5,
    "sales": 3209,
    "tags": []
   },
   {
    "id": "p3918",
    "name": "黄油曲奇奇",
    "photo": "dt28",
    "cat": "甜品吧",
    "desc": "下午茶的正确打开方式",
    "price": 33.5,
    "origPrice": 43,
    "rating": 4.6,
    "sales": 2944,
    "tags": []
   },
   {
    "id": "p3919",
    "name": "巧克力脆脆卷卷",
    "photo": "dt29",
    "cat": "甜品吧",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 30.5,
    "origPrice": 39,
    "rating": 4.7,
    "sales": 1730,
    "tags": []
   },
   {
    "id": "p3920",
    "name": "奶香小方方",
    "photo": "dt30",
    "cat": "甜品吧",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 10,
    "origPrice": 13,
    "rating": 4.6,
    "sales": 1487,
    "tags": []
   },
   {
    "id": "p3921",
    "name": "莓果慕斯杯杯",
    "photo": "dt31",
    "cat": "甜品吧",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 29,
    "origPrice": 37,
    "rating": 4.6,
    "sales": 417,
    "tags": []
   },
   {
    "id": "p3922",
    "name": "提子燕麦饼饼",
    "photo": "dt32",
    "cat": "甜品吧",
    "desc": "下午茶的正确打开方式",
    "price": 20.5,
    "origPrice": 26.5,
    "rating": 4.5,
    "sales": 4354,
    "tags": []
   },
   {
    "id": "p3923",
    "name": "蔓越莓司康康",
    "photo": "dt33",
    "cat": "甜品吧",
    "desc": "冷藏后风味更佳",
    "price": 23.5,
    "origPrice": 30,
    "rating": 4.8,
    "sales": 2575,
    "tags": []
   },
   {
    "id": "p3924",
    "name": "抹茶雪媚娘娘",
    "photo": "dt34",
    "cat": "甜品吧",
    "desc": "冷藏后风味更佳",
    "price": 9.5,
    "origPrice": 12,
    "rating": 4.8,
    "sales": 1778,
    "tags": []
   },
   {
    "id": "p3925",
    "name": "流心芝士挞挞",
    "photo": "dt35",
    "cat": "甜品吧",
    "desc": "冷藏后风味更佳",
    "price": 12,
    "origPrice": 15.5,
    "rating": 4.7,
    "sales": 1762,
    "tags": []
   },
   {
    "id": "p3926",
    "name": "乳酪蛋糕条条",
    "photo": "dt36",
    "cat": "甜品吧",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 9.5,
    "origPrice": 12.5,
    "rating": 4.6,
    "sales": 449,
    "tags": []
   },
   {
    "id": "p3927",
    "name": "椰蓉球球",
    "photo": "dt1",
    "cat": "甜品吧",
    "desc": "下午茶的正确打开方式",
    "price": 14,
    "origPrice": 18,
    "rating": 4.7,
    "sales": 2838,
    "tags": []
   },
   {
    "id": "p3928",
    "name": "焦糖布丁挞挞",
    "photo": "dt2",
    "cat": "甜品吧",
    "desc": "下午茶的正确打开方式",
    "price": 37.5,
    "origPrice": 48,
    "rating": 4.8,
    "sales": 5646,
    "tags": []
   }
  ]
 },
 {
  "id": "s40",
  "name": "果然多多果切",
  "category": "fruit",
  "logo": "🍉",
  "brand": "果然多多果切（百果园风）",
  "rating": 4.8,
  "monthlySales": 9870,
  "deliveryMin": 20,
  "deliveryFee": 2.5,
  "minOrder": 12,
  "distanceKm": 0.6,
  "notice": "当日鲜果当日切，不甜包退（真的可以）。",
  "promos": [
   "满20减3"
  ],
  "photo": "frt1",
  "products": [
   {
    "id": "p4001",
    "name": "奶油草莓盒盒",
    "photo": "frt1",
    "cat": "当季鲜果",
    "desc": "一颗一颗都是当天早上摘的",
    "price": 19,
    "origPrice": 25,
    "rating": 4.9,
    "sales": 1835,
    "tags": [
     "招牌"
    ],
    "seckill": true
   },
   {
    "id": "p4002",
    "name": "巨峰葡萄串串",
    "photo": "frt2",
    "cat": "当季鲜果",
    "desc": "果切师傅的手比外科医生还稳",
    "price": 15,
    "origPrice": 19,
    "rating": 4.4,
    "sales": 3175,
    "tags": []
   },
   {
    "id": "p4003",
    "name": "阳光青提盒盒",
    "photo": "frt3",
    "cat": "当季鲜果",
    "desc": "果切师傅的手比外科医生还稳",
    "price": 18,
    "origPrice": 23,
    "rating": 4.5,
    "sales": 563,
    "tags": []
   },
   {
    "id": "p4004",
    "name": "无籽黑提盒盒",
    "photo": "frt4",
    "cat": "当季鲜果",
    "desc": "当日鲜果当日切，不甜包退",
    "price": 16,
    "origPrice": 20,
    "rating": 4.6,
    "sales": 1945,
    "tags": [
     "满20减3"
    ]
   },
   {
    "id": "p4005",
    "name": "香水柠檬袋袋",
    "photo": "frt5",
    "cat": "当季鲜果",
    "desc": "果切师傅的手比外科医生还稳",
    "price": 9,
    "origPrice": 12,
    "rating": 4.6,
    "sales": 7152,
    "tags": []
   },
   {
    "id": "p4006",
    "name": "红富士苹果切切",
    "photo": "frt6",
    "cat": "鲜切果盒",
    "desc": "当日鲜果当日切，不甜包退",
    "price": 10,
    "origPrice": 13,
    "rating": 4.9,
    "sales": 589,
    "tags": []
   },
   {
    "id": "p4007",
    "name": "奇异果双拼盒盒",
    "photo": "frt7",
    "cat": "鲜切果盒",
    "desc": "果切师傅的手比外科医生还稳",
    "price": 14,
    "origPrice": 18,
    "rating": 4.7,
    "sales": 440,
    "tags": [
     "满20减3"
    ]
   },
   {
    "id": "p4008",
    "name": "树莓精选盒盒",
    "photo": "frt8",
    "cat": "鲜切果盒",
    "desc": "当日鲜果当日切，不甜包退",
    "price": 22,
    "origPrice": 28,
    "rating": 4.5,
    "sales": 2224,
    "tags": [
     "人气"
    ]
   },
   {
    "id": "p4009",
    "name": "缤纷果切大拼盘盘",
    "photo": "veg1",
    "cat": "鲜切果盒",
    "desc": "菜篮子直送，新鲜看得见",
    "price": 26,
    "origPrice": 33,
    "rating": 4.7,
    "sales": 3755,
    "tags": []
   },
   {
    "id": "p4010",
    "name": "缤纷果切大拼盘盘（大份）",
    "photo": "veg1",
    "cat": "鲜切果盒",
    "desc": "菜篮子直送，新鲜看得见",
    "price": 37.5,
    "origPrice": 48,
    "rating": 4.4,
    "sales": 3733,
    "tags": [
     "大份"
    ]
   },
   {
    "id": "p4011",
    "name": "菠萝鲜切杯杯",
    "photo": "frt9",
    "cat": "鲜切果盒",
    "desc": "果切师傅的手比外科医生还稳",
    "price": 12,
    "origPrice": 15,
    "rating": 4.5,
    "sales": 1896,
    "tags": [
     "满20减3"
    ]
   },
   {
    "id": "p4012",
    "name": "苹果什锦篮篮",
    "photo": "frt10",
    "cat": "整果礼篮",
    "desc": "当日鲜果当日切，不甜包退",
    "price": 28,
    "origPrice": 35,
    "rating": 4.7,
    "sales": 1162,
    "tags": []
   },
   {
    "id": "p4013",
    "name": "当季果篮混搭搭",
    "photo": "veg2",
    "cat": "整果礼篮",
    "desc": "菜篮子直送，新鲜看得见",
    "price": 39,
    "origPrice": 48,
    "rating": 4.4,
    "sales": 421,
    "tags": []
   },
   {
    "id": "p4014",
    "name": "鲜榨青汁汁",
    "photo": "jc6",
    "cat": "鲜榨果汁",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 13,
    "origPrice": 16,
    "rating": 4.5,
    "sales": 3094,
    "tags": [
     "满20减3"
    ]
   },
   {
    "id": "p4015",
    "name": "鲜榨青汁汁（大杯）",
    "photo": "jc6",
    "cat": "鲜榨果汁",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 16,
    "origPrice": 19,
    "rating": 4.6,
    "sales": 3078,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p4016",
    "name": "冷压混合果蔬汁汁",
    "photo": "jc5",
    "cat": "鲜榨果汁",
    "desc": "一杯下去，蔬菜水果指标全达标",
    "price": 15,
    "origPrice": 19,
    "rating": 4.8,
    "sales": 661,
    "tags": []
   },
   {
    "id": "p4017",
    "name": "冷压混合果蔬汁汁（大杯）",
    "photo": "jc5",
    "cat": "鲜榨果汁",
    "desc": "冷压锁鲜，果肉打到细腻",
    "price": 18,
    "origPrice": 22,
    "rating": 4.6,
    "sales": 3493,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p4018",
    "name": "西瓜鲜榨杯杯",
    "photo": "drk7",
    "cat": "鲜榨果汁",
    "desc": "鲜果现切现榨，不加一滴香精",
    "price": 11,
    "origPrice": 14,
    "rating": 4.4,
    "sales": 834,
    "tags": []
   },
   {
    "id": "p4019",
    "name": "西瓜鲜榨杯杯（大杯）",
    "photo": "drk7",
    "cat": "鲜榨果汁",
    "desc": "喝一口从喉咙凉到天灵盖",
    "price": 14,
    "origPrice": 17,
    "rating": 4.8,
    "sales": 1634,
    "tags": [
     "大杯"
    ]
   },
   {
    "id": "p4020",
    "name": "奶香小方方",
    "photo": "dt3",
    "cat": "甜品搭子",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 27,
    "origPrice": 34.5,
    "rating": 4.8,
    "sales": 2588,
    "tags": []
   },
   {
    "id": "p4021",
    "name": "巧克力脆脆卷卷",
    "photo": "dt4",
    "cat": "甜品搭子",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 28.5,
    "origPrice": 36.5,
    "rating": 4.9,
    "sales": 3343,
    "tags": []
   },
   {
    "id": "p4022",
    "name": "黄油曲奇奇",
    "photo": "dt5",
    "cat": "甜品搭子",
    "desc": "下午茶的正确打开方式",
    "price": 37,
    "origPrice": 47,
    "rating": 4.4,
    "sales": 796,
    "tags": []
   },
   {
    "id": "p4023",
    "name": "莓果慕斯杯杯",
    "photo": "dt6",
    "cat": "甜品搭子",
    "desc": "下午茶的正确打开方式",
    "price": 35,
    "origPrice": 44.5,
    "rating": 4.5,
    "sales": 470,
    "tags": []
   },
   {
    "id": "p4024",
    "name": "乳酪蛋糕条条",
    "photo": "dt7",
    "cat": "甜品搭子",
    "desc": "当日现烤，掉渣是酥的勋章",
    "price": 32.5,
    "origPrice": 41.5,
    "rating": 4.8,
    "sales": 4548,
    "tags": []
   },
   {
    "id": "p4025",
    "name": "焦糖布丁挞挞",
    "photo": "dt8",
    "cat": "甜品搭子",
    "desc": "甜度经过盲测校准，齁不到你",
    "price": 14,
    "origPrice": 18,
    "rating": 4.7,
    "sales": 1227,
    "tags": []
   },
   {
    "id": "p4026",
    "name": "提子燕麦饼饼",
    "photo": "dt9",
    "cat": "甜品搭子",
    "desc": "下午茶的正确打开方式",
    "price": 28.5,
    "origPrice": 36.5,
    "rating": 4.7,
    "sales": 2526,
    "tags": []
   }
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

})();

/* 供 Node/jsdom 测试引用 */
if (typeof module !== 'undefined' && module.exports) { module.exports = CT_DATA; }
