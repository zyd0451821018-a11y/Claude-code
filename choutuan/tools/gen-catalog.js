/* ============================================================
 * 丑团 · gen-catalog.js —— 目录生成引擎
 * 输入 menus.js（40 家门店菜单规格）→ 产出：
 *   js/data.js                     数据层（GENERATED）
 *   tools/photo-map.generated.json 图片键 → 素材源映射（prepare-photos 用）
 * 规则：
 *   - 变体展开：C套餐 / L大杯 / W大份 / T串量(10/20串) / F口味
 *   - autoFill：照片池充足的店，用品类名库补位到目标 SKU 数
 *   - 照片池全局顺序消费，先保证不重复，耗尽后循环复用
 * 运行：node tools/gen-catalog.js
 * ============================================================ */

'use strict';

const fs = require('fs');
const path = require('path');
const MENUS = require('./menus.js');

/* ---------- 模板精选照片（prefix = ex 目录文件名前缀, suffix = 结尾匹配） ---------- */
const T = (p, s) => ({ prefix: p, suffix: s });
const TPL = {
  /* 汉堡（模板出处，与 foodish 池互补） */
  tb1: T('feane__', '_f2.png'), tb2: T('feane__', '_f7.png'), tb3: T('feane__', '_f8.png'),
  tb4: T('themewagon_burgerking', '_menu-burger-img.jpg'), tb5: T('themewagon_burgerking', '_blog-3.jpg'),
  tb6: T('themewagon_burgerking', '_feature-1.jpg'), tb7: T('themewagon_burgerking', '_carousel-1.jpg'),
  tb8: T('themewagon_burgerking', '_single.jpg'), tb9: T('themewagon_delicious', '_blog-img_3.jpg'),
  tb11: T('foodie__', '_hero-banner.png'), tb12: T('themewagon_burgerking', '_blog-1.jpg'),
  /* 披萨/意面 */
  pzt1: T('feane__', '_f3.png'), pzt2: T('feane__', '_f6.png'), pzt4: T('foodie__', '_banner-4.jpg'),
  pzt5: T('themewagon_pato', '_blog-06.jpg'), pzt6: T('themewagon_pato', '_blog-15.jpg'),
  pzt7: T('feane__', '_o2.jpg'),
  lasagna: T('feane__', '_f9.png'), 'pasta-salad': T('feane__', '_f4.png'),
  ricebowl1: T('grilli__', '_menu-6.png'),
  /* 小食炸物 */
  fries1: T('feane__', '_f5.png'), fries2: T('themewagon_burgerking', '_feature-3.jpg'),
  fried1: T('feliciano__', '_lunch-3.jpg'), fried2: T('feliciano__', '_breakfast-5.jpg'),
  /* 烧烤 */
  grill1: T('themewagon_restoran', '_hero.png'), grill2: T('themewagon_pato', '_intro-02.jpg'),
  grill3: T('themewagon_burgerking', '_carousel-2.jpg'), grill4: T('feliciano__', '_lunch-4.jpg'),
  grill5: T('grilli__', '_service-2.jpg'), grill6: T('foodie__', '_blog-3.jpg'),
  grill7: T('feliciano__', '_lunch-2.jpg'), grill8: T('grilli__', '_special-dish-banner.jpg'),
  grill9: T('foodie__', '_food-menu-3.png'), saus1: T('themewagon_pato', '_our-menu-10.jpg'),
  /* 牛排海鲜寿司 */
  stk1: T('themewagon_pato', '_our-menu-02.jpg'), stk2: T('foodie__', '_food-menu-5.png'),
  stk3: T('themewagon_pato', '_lunch-04.jpg'), stk4: T('restaurant-hugo__', '_blog-img-3.jpg'),
  stk5: T('foodie__', '_food-menu-2.png'), stk6: T('themewagon_pato', '_lunch-02.jpg'),
  stk7: T('feliciano__', '_lunch-6.jpg'), stk8: T('grilli__', '_menu-5.png'),
  sea1: T('themewagon_pato', '_our-menu-01.jpg'), sea2: T('themewagon_pato', '_blog-14.jpg'),
  sea3: T('themewagon_pato', '_our-menu-06.jpg'), sea4: T('themewagon_pato', '_lunch-05.jpg'),
  sea5: T('feliciano__', '_lunch-8.jpg'), sea6: T('feliciano__', '_lunch-5.jpg'),
  sea7: T('foodie__', '_food-menu-1.png'), sea8: T('feliciano__', '_lunch-1.jpg'),
  sea9: T('feliciano__', '_breakfast-7.jpg'),
  sushi1: T('foodie__', '_food-menu-4.png'), sushi2: T('grilli__', '_hero-slider-2.jpg'),
  sushi3: T('themewagon_pato', '_our-menu-09.jpg'), sushi4: T('themewagon_pato', '_our-menu-12.jpg'),
  /* 汤/面/饺/卷 */
  soup1: T('grilli__', '_menu-1.png'), soup2: T('themewagon_delicious', '_bg-img_r4.jpg'),
  soup3: T('restaurant-hugo__', '_header.jpg'), soup4: T('themewagon_delicious', '_bg-img_r1.jpg'),
  soup5: T('restaurant-hugo__', '_blog-img-1.jpg'), soup6: T('grilli__', '_menu-4.png'),
  ndl1: T('feliciano__', '_dinner-2.jpg'), ndl2: T('feliciano__', '_breakfast-1.jpg'),
  ndl3: T('grilli__', '_menu-2.png'), ndl4: T('grilli__', '_hero-slider-3.jpg'),
  ndl5: T('themewagon_delicious', '_bg-img_insta1.jpg'), ndl6: T('themewagon_pato', '_blog-04.jpg'),
  dmp1: T('restaurant-hugo__', '_slider-img-2.jpg'), roll1: T('foodie__', '_blog-1.jpg'),
  roll2: T('themewagon_teahouse', '_product-2.jpg'), crepe1: T('restaurant-hugo__', '_slider-img-4.jpg'),
  sand1: T('foodie__', '_blog-2.jpg'), sand2: T('themewagon_burgerking', '_feature-4.jpg'),
  sand3: T('feliciano__', '_dinner-6.jpg'),
  coldcut: T('themewagon_restoran', '_about-4.jpg'), coldcut2: T('themewagon_restoran', '_about-3.jpg'),
  bread: T('themewagon_pato', '_dinner-05.jpg'), chz: T('themewagon_pato', '_dinner-02.jpg'),
  /* 轻食碗/沙拉/早午餐 */
  bowl2: T('themewagon_vegefoods', '_image_5.jpg'), bowl3: T('themewagon_vegefoods', '_image_6.jpg'),
  bowl4: T('themewagon_delicious', '_bg-img_insta5.jpg'), bowl5: T('themewagon_delicious', '_bg-img_r6.jpg'),
  bowl6: T('themewagon_delicious', '_bg-img_r5.jpg'), bowl7: T('themewagon_delicious', '_bg-img_insta6.jpg'),
  bowl8: T('feliciano__', '_dinner-1.jpg'), bowl9: T('feliciano__', '_dinner-3.jpg'),
  bowl10: T('restaurant-hugo__', '_slider-img-3.jpg'), oat1: T('restaurant-hugo__', '_slider-img-1.jpg'),
  brk2: T('feliciano__', '_breakfast-2.jpg'), brk3: T('feliciano__', '_breakfast-3.jpg'),
  brk4: T('feliciano__', '_breakfast-4.jpg'), brk6: T('feliciano__', '_breakfast-6.jpg'),
  brk8: T('feliciano__', '_breakfast-8.jpg'), brk9: T('feliciano__', '_breakfast-9.jpg'),
  sal1: T('restaurant-hugo__', '_blog-img-6.jpg'), sal2: T('themewagon_burgerking', '_menu-snack-img.jpg'),
  sal3: T('feliciano__', '_breakfast-2.jpg'), sal4: T('themewagon_restoran', '_about-3.jpg'),
  sal5: T('themewagon_pato', '_lunch-01.jpg'), sal6: T('themewagon_pato', '_our-menu-11.jpg'),
  /* 咖啡/茶/果饮 */
  cafe1: T('themewagon_koppee', '_carousel-1.jpg'), cafe2: T('themewagon_koppee', '_menu-2.jpg'),
  cafe3: T('themewagon_koppee', '_menu-3.jpg'), cafe4: T('themewagon_koppee', '_service-3.jpg'),
  cafe5: T('themewagon_koppee', '_service-4.jpg'), cafe6: T('themewagon_coffee@', '_img_b1.jpg'),
  cafe7: T('themewagon_coffee@', '_img_g5.jpg'), cafe8: T('themewagon_coffee@', '_img_g1.jpg'),
  cafe9: T('themewagon_coffee@', '_img_g2.jpg'), cafe10: T('themewagon_koppee', '_carousel-2.jpg'),
  cafe11: T('themewagon_koppee', '_menu-1.jpg'),
  tea1: T('themewagon_teahouse', '_product-4.jpg'), tea2: T('themewagon_teahouse', '_about-3.jpg'),
  tea3: T('themewagon_teahouse', '_about-4.jpg'), tea4: T('themewagon_teahouse', '_product-3.jpg'),
  tea5: T('themewagon_teahouse', '_product-1.jpg'), tea6: T('themewagon_teahouse', '_about-1.jpg'),
  tea7: T('themewagon_teahouse', '_about-2.jpg'),
  drk1: T('feliciano__', '_drink-1.jpg'), drk2: T('feliciano__', '_drink-2.jpg'),
  drk3: T('feliciano__', '_drink-3.jpg'), drk5: T('feliciano__', '_drink-5.jpg'),
  drk6: T('feliciano__', '_drink-6.jpg'), drk7: T('feliciano__', '_drink-7.jpg'),
  bev1: T('feliciano__', '_drink-4.jpg'),
  jc1: T('themewagon_delicious', '_bg-img_bg7.jpg'), jc2: T('themewagon_delicious', '_bg-img_insta4.jpg'),
  jc3: T('themewagon_delicious', '_blog-img_2.jpg'), jc4: T('themewagon_delicious', '_bg-img_r3.jpg'),
  jc5: T('themewagon_vegefoods', '_product-8.jpg'), jc6: T('themewagon_vegefoods', '_category-3.jpg'),
  jc7: T('themewagon_burgerking', '_blog-4.jpg'), jc8: T('themewagon_burgerking', '_menu-beverage-img.jpg'),
  /* 甜品 */
  des1: T('feliciano__', '_dessert-1.jpg'), des2: T('feliciano__', '_dessert-2.jpg'),
  des3: T('feliciano__', '_dessert-3.jpg'), des4: T('feliciano__', '_dessert-4.jpg'),
  des5: T('feliciano__', '_dessert-5.jpg'),
  cake1: T('themewagon_pato', '_our-menu-19.jpg'), cake2: T('themewagon_pato', '_our-menu-18.jpg'),
  cake3: T('themewagon_pato', '_our-menu-16.jpg'), cake4: T('themewagon_pato', '_our-menu-17.jpg'),
  cake5: T('themewagon_pato', '_our-menu-20.jpg'), cake6: T('themewagon_delicious', '_bg-img_bg2.jpg'),
  wf1: T('restaurant-hugo__', '_blog-img-2.jpg'), pk1: T('restaurant-hugo__', '_blog-img-5.jpg'),
  /* 果蔬生鲜 */
  veg1: T('themewagon_vegefoods', '_bg_2.jpg'), veg2: T('themewagon_vegefoods', '_category-1.jpg'),
  veg5: T('themewagon_vegefoods', '_product-5.jpg'), veg6: T('themewagon_vegefoods', '_product-6.jpg'),
  frt1: T('themewagon_fruitkha', '_news-bg-2.jpg'), frt2: T('themewagon_fruitkha', '_news-bg-1.jpg'),
  frt3: T('themewagon_fruitkha', '_news-bg-6.jpg'), frt4: T('themewagon_fruitkha', '_product-img-2.jpg'),
  frt5: T('themewagon_fruitkha', '_product-img-3.jpg'), frt6: T('themewagon_fruitkha', '_product-img-5.jpg'),
  frt7: T('themewagon_fruitkha', '_product-img-4.jpg'), frt8: T('themewagon_fruitkha', '_product-img-6.jpg'),
  frt9: T('themewagon_fruitkha', '_news-bg-3.jpg'), frt10: T('themewagon_fruitkha', '_news-bg-4.jpg')
};

/* ---------- foodish 照片池（ordinal 由 prepare-photos 解析为具体文件） ---------- */
const POOLS = {
  bg: { cat: 'burger', size: 87 }, pz: { cat: 'pizza', size: 95 },
  ps: { cat: 'pasta', size: 34 }, ds: { cat: 'dosa', size: 83 },
  id: { cat: 'idly', size: 77 }, br: { cat: 'biryani', size: 81 },
  rc: { cat: 'rice', size: 35 }, bc: { cat: 'butter-chicken', size: 22 },
  sm: { cat: 'samosa', size: 22 }, dt: { cat: 'dessert', size: 36 }
};
const poolCursor = {};
function nextFromPool(pool) {
  poolCursor[pool] = (poolCursor[pool] || 0) + 1;
  const idx = ((poolCursor[pool] - 1) % POOLS[pool].size) + 1;
  return pool + idx;
}

/* ---------- 确定性伪随机 ---------- */
function seeded(str) {
  let s = 0;
  for (let i = 0; i < str.length; i++) s = (s * 31 + str.charCodeAt(i)) % 99991;
  return () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
}

/* ---------- 描述语料（按照片族） ---------- */
const DESC = {
  bg: ['牛肉饼现煎现夹，汁水锁在第一口', '面包胚烤到微焦，芝士刚好半融', '生菜脆到发出声音，酱汁给得大方', '一口下去五层风景，纸巾自备', '肉饼厚度经过反复较真，扎实不虚'],
  pz: ['饼底手工现擀，边缘微焦带麦香', '芝士拉丝一米不断（大概）', '出炉即打包，到手还是烫的', '料铺得看不见饼底，主打一个诚意', '窑炉高温快烤，锅气十足'],
  ps: ['面条煮到 al dente 的倔强', '酱汁当天现熬，裹面均匀', '橄榄油香气扑鼻，罗勒点睛', '意大利人看了都点头的火候'],
  ds: ['面糊现摊现卷，金黄薄脆', '配咖喱蘸碟是隐藏吃法', '边缘脆芯软，趁热吃风味翻倍', '摊得比脸还大，卷起来刚刚好'],
  id: ['蒸得白白胖胖，松软回甜', '出笼带着白雾，早晨该有的味道', '入口松软，老人小孩都爱', '配一碟蘸汁，朴素但对味'],
  br: ['焖足四十分钟，米粒吸饱汤汁', '揭盖那刻香气翻涌', '每粒米都站着入味', '配料埋在饭里，挖到就是惊喜'],
  rc: ['大火快炒，锅气是灵魂', '每一粒米都裹上蛋液', '粒粒分明，干香扑鼻', '配汤免费续（并不能）'],
  bc: ['香料现磨现炒，浓郁到拌三碗饭', '咖喱熬到起沙，蘸饼一绝', '嫩鸡吸饱酱汁，入口即化', '微辣回甘，越吃越上头'],
  sm: ['酥皮现包现炸，咬开小心烫', '三角酥脆，馅料给足', '外脆内糯，配蘸水更妙'],
  dt: ['甜度经过盲测校准，齁不到你', '当日现烤，掉渣是酥的勋章', '下午茶的正确打开方式', '冷藏后风味更佳'],
  cafe: ['豆子当周烘焙，奶泡打到绵密', '拉花看心情，好喝不看脸', '提神效果立竿见影', '苦得很诚实，回甘也是'],
  tea: ['茶汤现萃，香气立体', '甜度冰量可备注调整', '喝前摇一摇，风味更均匀', '茶底当日现泡，过夜就倒'],
  drk: ['冰块加到怀疑人生，解暑一流', '鲜果现切现榨，不加一滴香精', '喝一口从喉咙凉到天灵盖'],
  jc: ['冷压锁鲜，果肉打到细腻', '一杯下去，蔬菜水果指标全达标'],
  grill: ['炭火现烤，滋滋冒油', '孜然辣椒面双料齐下', '趁热撸串，凉了味道减半', '腌足十二小时再上炭火'],
  stk: ['厚切现煎，五分熟的粉红剖面', '黑椒汁现磨现淋', '刀叉切下去的瞬间，值回票价'],
  sea: ['当日海货，鲜字当头', '蒜蓉是所有海鲜的官配', '壳一掀开，海风扑面'],
  sushi: ['当日渔获，新鲜看得见', '芥末给量守恒：眼泪=新鲜度'],
  soup: ['炖足八小时，浓稠挂勺', '先喝汤是老规矩', '暖胃暖心，一碗见底'],
  ndl: ['汤头熬足八小时', '大火快炒的镬气', '面条劲道，久泡不坨'],
  bowl: ['食材当日直采，卡路里已帮你算好', '健身教练看了都点头', '低卡不低配，吃饱不胖'],
  sal: ['爽脆时蔬配油醋汁', '拍完照记得趁新鲜吃'],
  frt: ['当日鲜果当日切，不甜包退', '一颗一颗都是早上摘的', '果切师傅的手比外科医生还稳'],
  veg: ['菜篮子直送，新鲜看得见'],
  des: ['拍照五秒内请尽快食用', '甜品胃是另一个胃'],
  cake: ['一层一层都是心思', '叉子下去像踩进云端'],
  misc: ['回购率很高的一款，闭眼点不踩雷', '门店同款，现做现送', '外卖也不将就，包装扎实']
};
function descFor(photo, rnd) {
  const fam = photo.replace(/\d+$/, '').replace(/^(tb|pzt)$/, m => m === 'tb' ? 'bg' : 'pz');
  const key = DESC[fam] ? fam
    : /^(des|cake|wf|pk)/.test(photo) ? 'des'
    : /^(fried|fries)/.test(photo) ? 'sm'
    : /^(bowl|brk|oat|sand)/.test(photo) ? 'bowl'
    : /^(dmp|roll|crepe)/.test(photo) ? 'id'
    : /^(bev)/.test(photo) ? 'drk'
    : /^(coldcut|chz|bread|ricebowl|lasagna|pasta-salad|saus)/.test(photo) ? 'misc'
    : 'misc';
  const bank = DESC[key] || DESC.misc;
  return bank[Math.floor(rnd() * bank.length)];
}

/* ---------- autoFill 名库（照片池充足的店用来补位） ---------- */
const BANKS = {
  bg: ['照烧菠萝牛堡堡', '双层辣牛堡堡', '烟熏培根蛋堡堡', '黑椒蘑菇牛堡堡', '车打芝士牛堡堡', '墨西哥辣酱堡堡', '和牛芝士堡堡', '经典牛肉堡堡', '藤椒鸡腿堡堡', '双层安格斯堡堡', '洋葱圈牛堡堡', '溏心蛋牛堡堡', '烧烤酱手撕堡堡', '重芝士爆浆堡堡', '青花椒风味堡堡', '脆脆鸡排堡堡', '田园鲜蔬堡堡', '双拼双酱堡堡', '流心芝士厚牛堡堡', '烟熏西冷堡堡'],
  pz: ['玛格丽特薄底萨萨', '双倍芝士披萨萨', '意式辣肠披萨萨', '田园时蔬披萨萨', '烤菌菇披萨萨', '烧烤牛肉披萨萨', '虾仁菠萝披萨萨', '帕玛森火腿披萨萨', '奥尔良鸡肉披萨萨', '藤椒鸡披萨萨', '芝士流心披萨萨', '罗勒鲜虾披萨萨', '培根玉米披萨萨', '黑松露菌菇披萨萨', '烟熏三文鱼披萨萨', '双层重肉披萨萨', '榴莲芝士披萨萨', '川辣毛肚披萨萨', '至尊全家福披萨萨', '蜂蜜厚芝士披萨萨'],
  ps: ['番茄罗勒意面面', '蒜辣橄榄油意面面', '奶油蘑菇意面面', '海鲜青酱意面面', '培根蛋黄意面面', '辣味番茄意面面', '鸡肉芝士意面面', '黑椒牛柳意面面', '明太子奶油意面面', '罗勒松子意面面'],
  ds: ['原味脆皮煎饼饼', '加蛋加肠煎饼饼', '芝士流心煎饼饼', '双脆杂粮煎饼饼', '香辣里脊煎饼饼', '葱香鸡蛋饼饼', '培根芝士卷饼饼', '土豆丝卷饼饼', '梅干菜脆饼饼', '甜面酱大饼卷卷', '老面葱花饼饼', '芝麻千层饼饼', '酱香手抓饼饼', '双蛋培根手抓饼饼'],
  id: ['奶香米糕糕', '黑糖发糕糕', '南瓜蒸糕糕', '紫米松糕糕', '椰蓉雪糕点点', '玉米蒸糕糕', '双色米糕糕', '蜜豆松糕糕', '红枣发糕糕', '酒酿米糕糕', '芋泥夹心糕糕', '斑斓椰香糕糕'],
  br: ['孜然羊肉焖饭饭', '藏红花鸡肉饭饭', '果干坚果焖饭饭', '黄萝卜羊排饭饭', '腊味什锦焖饭饭', '蘑菇鸡腿焖饭饭', '椒麻鸡丁焖饭饭', '番茄牛腩焖饭饭', '咖喱鸡肉焖饭饭', '葡萄干甜饭饭'],
  rc: ['火腿蛋炒饭饭', '培根玉米炒饭饭', '虾仁蛋白炒饭饭', '牛肉黑椒炒饭饭', '泡菜芝士炒饭饭', '菠萝什锦炒饭饭', 'XO酱海鲜炒饭饭', '腊肠煲仔炒饭饭', '澳门瑶柱炒饭饭', '青椒牛柳炒饭饭', '虾酱空心菜炒饭饭', '樱花虾炒饭饭'],
  bc: ['椰浆咖喱鸡鸡', '香茅咖喱鸡鸡', '青咖喱嫩鸡鸡', '玛莎拉牛肉咖喱喱', '芝士咖喱鸡鸡'],
  dt: ['奶油泡芙芙', '焦糖布丁挞挞', '莓果慕斯杯杯', '巧克力脆脆卷卷', '芝士条条', '肉桂糖霜卷卷', '蔓越莓司康康', '黄油曲奇奇', '海盐芝士卷卷', '乳酪蛋糕条条', '杏仁瓦片酥酥', '抹茶雪媚娘娘', '流心芝士挞挞', '奶香小方方', '椰蓉球球', '提子燕麦饼饼'],
  sm: ['咖喱角角', '黄金脆角角', '洋葱脆角角']
};

/* ---------- 变体价格工具 ---------- */
const r5 = n => Math.round(n * 2) / 2;

/* ---------- 生成 ---------- */
const CATEGORIES = [
  { id: 'all', name: '全部', icon: '🍽️' },
  { id: 'burger', name: '汉堡炸鸡', icon: '🍔' },
  { id: 'pizza', name: '披萨意面', icon: '🍕' },
  { id: 'coffee', name: '咖啡', icon: '☕' },
  { id: 'drink', name: '奶茶果饮', icon: '🧋' },
  { id: 'dessert', name: '甜品烘焙', icon: '🍰' },
  { id: 'brunch', name: '轻食沙拉', icon: '🥗' },
  { id: 'hotpot', name: '火锅汤锅', icon: '🍲' },
  { id: 'bbq', name: '烧烤夜宵', icon: '🍢' },
  { id: 'breakfast', name: '早点小吃', icon: '🥟' },
  { id: 'noodle', name: '粉面', icon: '🍜' },
  { id: 'rice', name: '盖饭炒饭', icon: '🍛' },
  { id: 'western', name: '西餐日料', icon: '🥩' },
  { id: 'fruit', name: '果切生鲜', icon: '🍉' }
];

/* 每店目标 SKU（补位用）。基础 + 变体不足时由 autoFill 名库补齐 */
const TARGETS = {
  burger: 46, pizza: 42, coffee: 34, drink: 34, dessert: 32, brunch: 28,
  hotpot: 26, bbq: 30, breakfast: 38, noodle: 32, rice: 40, western: 28, fruit: 26
};
/* autoFill 用哪个池、放进哪个店内分类 */
const FILL = {
  burger: [['bg', '风味汉堡'], ['dt', '甜品站']],
  pizza: [['pz', '风味披萨'], ['ps', '意面工坊']],
  coffee: [['dt', '搭配甜点']],
  drink: [['dt', '加点甜']],
  dessert: [['dt', '每日现做']],
  brunch: [['dt', '轻甜点']],
  hotpot: [['veg?', '']],
  bbq: [['sm', '炸物小食']],
  breakfast: [['ds', '煎饼铺子'], ['id', '蒸笼现蒸'], ['sm', '现炸小食']],
  noodle: [['rc', '盖码饭']],
  rice: [['rc', '炒饭专区'], ['br', '焖饭专区']],
  western: [['dt', '甜品吧']],
  fruit: [['dt', '甜品搭子']]
};

const photoMap = {};   // imgKey -> {prefix,suffix} | {pool,index}
function registerPhoto(ref) {
  /* ref: 池名(bg) / 池名#n / TPL 键 / '=' 由调用方处理 */
  let key;
  if (POOLS[ref]) {
    key = nextFromPool(ref);
  } else if (/^([a-z]+)#(\d+)$/.test(ref)) {
    const m = ref.match(/^([a-z]+)#(\d+)$/);
    key = m[1] + m[2];
  } else {
    key = ref.replace(/[^a-zA-Z0-9_-]/g, '');
    if (!TPL[ref]) throw new Error('未知照片引用: ' + ref);
  }
  if (!photoMap[key]) {
    if (TPL[ref]) photoMap[key] = TPL[ref];
    else {
      const m = key.match(/^([a-z]+)(\d+)$/);
      photoMap[key] = { pool: POOLS[m[1]].cat, index: +m[2] };
    }
  }
  return key;
}

const shops = [];
let totalSku = 0;

MENUS.forEach((spec, si) => {
  const sid = 's' + String(si + 1).padStart(2, '0');
  const rnd = seeded(sid + spec.name);
  const products = [];
  let pn = 0;
  const nextPid = () => 'p' + String(si + 1).padStart(2, '0') + String(++pn).padStart(2, '0');

  function push(name, price, orig, cat, photoKey, opts) {
    opts = opts || {};
    const p = {
      id: nextPid(), name, photo: photoKey, cat,
      desc: opts.desc || descFor(photoKey, rnd),
      price: Math.round(price * 100) / 100, origPrice: Math.round(orig * 100) / 100,
      rating: Math.round((4.4 + rnd() * 0.5) * 10) / 10,
      sales: 200 + Math.floor(rnd() * rnd() * 9000),
      tags: opts.tags || []
    };
    if (opts.seckill) p.seckill = true;
    products.push(p);
    return p;
  }

  let lastPhoto = null;
  spec.items.forEach((it, ii) => {
    const [name, price, orig, cat, photoRef, flagsRaw, desc] = it;
    const flags = flagsRaw || '';
    const flavorM = flags.match(/F:([^,]+)/);
    const flavors = flavorM ? flavorM[1].split('|') : null;
    const letters = flags.replace(/,?F:[^,]+/, '');
    const photoKey = photoRef === '=' ? lastPhoto : registerPhoto(photoRef);
    lastPhoto = photoKey;

    const baseTags = [];
    if (ii === 0) baseTags.push('招牌');
    else if (ii % 3 === 0 && spec.promos && spec.promos[0]) baseTags.push(spec.promos[0]);
    else if (rnd() < 0.25) baseTags.push('人气');

    if (flavors) {
      flavors.forEach((fl, fi) => {
        push(name.replace(/(（|$)/, '') + '·' + fl, price, orig, cat, photoKey, {
          desc: fi === 0 ? desc : undefined,
          seckill: fi === 0 && letters.includes('S'),
          tags: baseTags.slice()
        });
      });
    } else {
      push(name, price, orig, cat, photoKey, {
        desc, seckill: letters.includes('S'), tags: baseTags
      });
    }

    if (letters.includes('C')) {
      push(name + '套餐', price + 11, orig + 15, '超值套餐', photoKey,
        { desc: '含' + (spec.comboDesc || '小食+饮品') + '，一单到位', tags: ['套餐'] });
    }
    if (letters.includes('L')) {
      push(name.replace(/（.*）$/, '') + '（大杯）', price + 3, orig + 3, cat, photoKey, { tags: ['大杯'] });
    }
    if (letters.includes('W')) {
      push(name.replace(/（.*）$/, '') + '（大份）', r5(price * 1.45), r5(orig * 1.45), cat, photoKey, { tags: ['大份'] });
    }
    if (letters.includes('T')) {
      const bare = name.replace(/（.*）$/, '');
      push(bare + '（10串）', r5(price * 1.9), r5(orig * 1.9), cat, photoKey, { tags: ['大份'] });
      push(bare + '（20串）', r5(price * 3.6), r5(orig * 3.6), cat, photoKey, { tags: ['夜宵局'] });
    }
  });

  /* autoFill 补位到目标 SKU */
  const target = TARGETS[spec.category] || 26;
  const fills = (FILL[spec.category] || []).filter(f => POOLS[f[0]]);
  let fi = 0;
  while (products.length < target && fills.length) {
    const [pool, fillCat] = fills[fi % fills.length];
    const bank = BANKS[pool] || [];
    if (!bank.length) break;
    const name = bank[Math.floor(rnd() * bank.length)];
    if (products.some(p => p.name === name)) { fi++; if (fi > 200) break; continue; }
    const photoKey = registerPhoto(pool);
    const base = 8 + rnd() * 30;
    push(name, r5(base), r5(base * 1.28), fillCat || '风味推荐', photoKey, {});
    fi++;
  }

  /* 店招 */
  const avatarKey = registerPhoto(spec.avatar);

  totalSku += products.length;
  shops.push({
    id: sid, name: spec.name, category: spec.category, logo: spec.logo,
    brand: spec.name + '（' + spec.proto + '风）',
    rating: spec.rating, monthlySales: spec.monthlySales,
    deliveryMin: spec.deliveryMin, deliveryFee: spec.deliveryFee,
    minOrder: spec.minOrder, distanceKm: spec.distanceKm,
    notice: spec.notice, promos: spec.promos || [],
    photo: avatarKey,
    products
  });
});

/* shop 店招 photoMap 键改名为 shop_<sid> 以兼容 views 的 imgSrc('shop_'+id) */
shops.forEach(s => {
  const src = photoMap[s.photo];
  photoMap['shop_' + s.id] = src;
});

/* ---------- 产出 data.js ---------- */
const TAIL = fs.readFileSync(path.join(__dirname, 'data-tail.js'), 'utf8');
const out = `/* ============================================================
 * 丑团 · data.js —— 静态数据层【GENERATED 请勿手改】
 * 由 tools/gen-catalog.js + tools/menus.js 生成
 * ${shops.length} 家店铺 / ${totalSku} 款商品（含套餐与规格变体）
 * 商品图为真实照片（来源见 tools/fetch-photos.sh）
 * ============================================================ */

'use strict';

var CT_DATA = (function () {

  var CATEGORIES = ${JSON.stringify(CATEGORIES, null, 2)};

  var SHOPS = ${JSON.stringify(shops, null, 1)};

${TAIL}
})();

/* 供 Node/jsdom 测试引用 */
if (typeof module !== 'undefined' && module.exports) { module.exports = CT_DATA; }
`;

fs.writeFileSync(path.join(__dirname, '..', 'js', 'data.js'), out);
fs.writeFileSync(path.join(__dirname, 'photo-map.generated.json'),
  JSON.stringify(photoMap, null, 1));

console.log(`generated: ${shops.length} shops, ${totalSku} SKUs, ${Object.keys(photoMap).length} photo keys`);
