/**
 * 周易卦象、五行、天干地支、紫微等玄学知识库
 */

const TRIGRAMS = {
    qian:  { name: '乾', nature: '天', element: '金', number: 1, symbol: '☰', lines: [1,1,1] },
    dui:   { name: '兑', nature: '泽', element: '金', number: 2, symbol: '☱', lines: [0,1,1] },
    li:    { name: '离', nature: '火', element: '火', number: 3, symbol: '☲', lines: [1,0,1] },
    zhen:  { name: '震', nature: '雷', element: '木', number: 4, symbol: '☳', lines: [0,0,1] },
    xun:   { name: '巽', nature: '风', element: '木', number: 5, symbol: '☴', lines: [1,1,0] },
    kan:   { name: '坎', nature: '水', element: '水', number: 6, symbol: '☵', lines: [0,1,0] },
    gen:   { name: '艮', nature: '山', element: '土', number: 7, symbol: '☶', lines: [1,0,0] },
    kun:   { name: '坤', nature: '地', element: '土', number: 8, symbol: '☷', lines: [0,0,0] }
};

const TRIGRAM_BY_NUMBER = {
    1: 'qian', 2: 'dui', 3: 'li', 4: 'zhen',
    5: 'xun',  6: 'kan', 7: 'gen', 8: 'kun'
};

const HEXAGRAM_NAMES = [
    '乾为天','坤为地','水雷屯','山水蒙','水天需','天水讼',
    '地水师','水地比','风天小畜','天泽履','地天泰','天地否',
    '天火同人','火天大有','地山谦','雷地豫','泽雷随','山风蛊',
    '地泽临','风地观','火雷噬嗑','山火贲','山地剥','地雷复',
    '天雷无妄','山天大畜','山雷颐','泽风大过','坎为水','离为火',
    '泽山咸','雷风恒','天山遁','雷天大壮','火地晋','地火明夷',
    '风火家人','火泽睽','水山蹇','雷水解','山泽损','风雷益',
    '泽天夬','天风姤','泽地萃','地风升','泽水困','水风井',
    '泽火革','火风鼎','震为雷','艮为山','风山渐','雷泽归妹',
    '雷火丰','火山旅','巽为风','兑为泽','风水涣','水泽节',
    '风泽中孚','雷山小过','水火既济','火水未济'
];

const HEXAGRAM_LOOKUP = {
    '111111': 0,  '000000': 1,  '001010': 2,  '010100': 3,
    '111010': 4,  '010111': 5,  '010000': 6,  '000010': 7,
    '111110': 8,  '011111': 9,  '111000': 10, '000111': 11,
    '101111': 12, '111101': 13, '100000': 14, '000001': 15,
    '001011': 16, '110100': 17, '011000': 18, '000110': 19,
    '001101': 20, '101100': 21, '000100': 22, '001000': 23,
    '001111': 24, '111100': 25, '001100': 26, '110011': 27,
    '010010': 28, '101101': 29, '100011': 30, '110001': 31,
    '100111': 32, '111001': 33, '000101': 34, '101000': 35,
    '101110': 36, '011101': 37, '100010': 38, '010001': 39,
    '011100': 40, '001110': 41, '111011': 42, '110111': 43,
    '000011': 44, '110000': 45, '010011': 46, '110010': 47,
    '101011': 48, '110101': 49, '001001': 50, '100100': 51,
    '100110': 52, '011001': 53, '101001': 54, '100101': 55,
    '110110': 56, '011011': 57, '010110': 58, '011010': 59,
    '011110': 60, '100001': 61, '101010': 62, '010101': 63
};

const WUXING = {
    elements: ['金', '木', '水', '火', '土'],
    generating: { '金': '水', '水': '木', '木': '火', '火': '土', '土': '金' },
    overcoming: { '金': '木', '木': '土', '土': '水', '水': '火', '火': '金' },
    generatedBy: { '水': '金', '木': '水', '火': '木', '土': '火', '金': '土' },
    overcomeBy:  { '木': '金', '土': '木', '水': '土', '火': '水', '金': '火' }
};

function getWuxingRelation(a, b) {
    if (a === b) return '比和';
    if (WUXING.generating[a] === b) return '我生';
    if (WUXING.generatedBy[a] === b) return '生我';
    if (WUXING.overcoming[a] === b) return '我克';
    if (WUXING.overcomeBy[a] === b) return '克我';
    return '无关';
}

const TIANGAN = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
const DIZHI = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
const DIZHI_WUXING = {
    '子': '水', '丑': '土', '寅': '木', '卯': '木',
    '辰': '土', '巳': '火', '午': '火', '未': '土',
    '申': '金', '酉': '金', '戌': '土', '亥': '水'
};
const TIANGAN_WUXING = {
    '甲': '木', '乙': '木', '丙': '火', '丁': '火', '戊': '土',
    '己': '土', '庚': '金', '辛': '金', '壬': '水', '癸': '水'
};

const LIUSHEN = ['青龙','朱雀','勾陈','螣蛇','白虎','玄武'];

const NAJIA = {
    '乾': { yinyang: '阳', tiangan: '甲壬', dizhi: ['子','寅','辰','午','申','戌'] },
    '坤': { yinyang: '阴', tiangan: '乙癸', dizhi: ['未','巳','卯','丑','亥','酉'] },
    '震': { yinyang: '阳', tiangan: '庚',   dizhi: ['子','寅','辰','午','申','戌'] },
    '巽': { yinyang: '阴', tiangan: '辛',   dizhi: ['丑','亥','酉','未','巳','卯'] },
    '坎': { yinyang: '阳', tiangan: '戊',   dizhi: ['寅','辰','午','申','戌','子'] },
    '离': { yinyang: '阴', tiangan: '己',   dizhi: ['卯','丑','亥','酉','未','巳'] },
    '艮': { yinyang: '阳', tiangan: '丙',   dizhi: ['辰','午','申','戌','子','寅'] },
    '兑': { yinyang: '阴', tiangan: '丁',   dizhi: ['巳','卯','丑','亥','酉','未'] }
};

const LIUQIN_TABLE = {
    '比和': '兄弟', '生我': '父母', '我生': '子孙', '克我': '官鬼', '我克': '妻财'
};

const HEXAGRAM_DESCRIPTIONS = {
    0:  { judgment: '元亨利贞', meaning: '刚健中正，自强不息', fortune: '大吉' },
    1:  { judgment: '元亨，利牝马之贞', meaning: '厚德载物，顺势而为', fortune: '大吉' },
    2:  { judgment: '元亨利贞，勿用有攸往', meaning: '万事开头难，守正待时', fortune: '中吉' },
    3:  { judgment: '亨，匪我求童蒙', meaning: '蒙昧初开，虚心求教', fortune: '中平' },
    4:  { judgment: '有孚，光亨，贞吉', meaning: '等待时机，蓄势待发', fortune: '中吉' },
    5:  { judgment: '有孚窒，惕中吉', meaning: '争讼之象，以和为贵', fortune: '凶' },
    6:  { judgment: '贞，丈人吉', meaning: '统率之道，纪律严明', fortune: '中吉' },
    7:  { judgment: '吉，原筮元永贞', meaning: '亲辅之道，择善而从', fortune: '吉' },
    8:  { judgment: '亨，密云不雨', meaning: '力量虽小，渐次积蓄', fortune: '中吉' },
    9:  { judgment: '履虎尾，不咥人', meaning: '谨慎行事，循礼而行', fortune: '中吉' },
    10: { judgment: '小往大来，吉亨', meaning: '通泰之象，万事亨通', fortune: '大吉' },
    11: { judgment: '大往小来', meaning: '闭塞不通，谨慎守成', fortune: '凶' },
    12: { judgment: '亨，利涉大川', meaning: '志同道合，协力共进', fortune: '吉' },
    13: { judgment: '元亨', meaning: '光明普照，事业昌盛', fortune: '大吉' },
    14: { judgment: '亨，利贞', meaning: '谦虚之德，有终有始', fortune: '大吉' },
    15: { judgment: '利建侯行师', meaning: '安乐和豫，顺势而动', fortune: '吉' },
    16: { judgment: '元亨利贞', meaning: '随机应变，与时俱进', fortune: '吉' },
    17: { judgment: '元亨利贞', meaning: '拨乱反正，除旧布新', fortune: '中吉' },
    18: { judgment: '元亨利贞', meaning: '临事而惧，好谋而成', fortune: '大吉' },
    19: { judgment: '亨，利贞', meaning: '观察入微，审时度势', fortune: '中吉' },
    20: { judgment: '亨，利用狱', meaning: '明辨是非，果断决策', fortune: '中吉' },
    21: { judgment: '亨，小利有攸往', meaning: '文饰修养，内实外华', fortune: '中平' },
    22: { judgment: '不利有攸往', meaning: '剥落衰败，顺势止损', fortune: '凶' },
    23: { judgment: '亨，利有攸往', meaning: '一阳来复，否极泰来', fortune: '吉' },
    24: { judgment: '元亨利贞', meaning: '天命所归，顺其自然', fortune: '大吉' },
    25: { judgment: '利贞，不家食吉', meaning: '蓄德积学，厚积薄发', fortune: '大吉' },
    26: { judgment: '贞吉，利涉大川', meaning: '颐养正道，自求口实', fortune: '中吉' },
    27: { judgment: '栋桡，利有攸往', meaning: '负重太过，量力而行', fortune: '中凶' },
    28: { judgment: '亨，习坎有孚', meaning: '重重险阻，以信突围', fortune: '凶' },
    29: { judgment: '亨，利贞', meaning: '光明附丽，文明以止', fortune: '吉' },
    30: { judgment: '亨，利贞', meaning: '感应之道，以诚相待', fortune: '大吉' },
    31: { judgment: '亨利贞', meaning: '恒久之道，持之以恒', fortune: '吉' },
    32: { judgment: '亨，小利贞', meaning: '退避三舍，知进知退', fortune: '中平' },
    33: { judgment: '利贞', meaning: '壮盛之象，适可而止', fortune: '吉' },
    34: { judgment: '康侯用锡马蕃庶', meaning: '日出地面，步步高升', fortune: '大吉' },
    35: { judgment: '利艰贞', meaning: '明入地中，韬光养晦', fortune: '中凶' },
    36: { judgment: '利女贞', meaning: '家道兴隆，和睦齐家', fortune: '吉' },
    37: { judgment: '小事吉', meaning: '乖违之象，求同存异', fortune: '中平' },
    38: { judgment: '利西南', meaning: '行动艰难，借力前行', fortune: '中凶' },
    39: { judgment: '利西南', meaning: '困境渐解，顺势而行', fortune: '吉' },
    40: { judgment: '有孚，元吉', meaning: '减损之道，以退为进', fortune: '中吉' },
    41: { judgment: '元吉，利贞', meaning: '增益之象，利人利己', fortune: '大吉' },
    42: { judgment: '扬于王庭', meaning: '刚决果断，除恶务尽', fortune: '中吉' },
    43: { judgment: '女壮，勿用取女', meaning: '不期而遇，把握机缘', fortune: '中平' },
    44: { judgment: '亨，王假有庙', meaning: '聚合之象，群英荟萃', fortune: '吉' },
    45: { judgment: '元亨，利见大人', meaning: '积小成大，步步上升', fortune: '大吉' },
    46: { judgment: '有孚，习坎', meaning: '困顿之象，守正待时', fortune: '凶' },
    47: { judgment: '改邑不改井', meaning: '养人之道，源源不绝', fortune: '中吉' },
    48: { judgment: '巳日乃孚', meaning: '变革创新，顺天应人', fortune: '吉' },
    49: { judgment: '元吉，亨', meaning: '鼎新之象，稳固根基', fortune: '大吉' },
    50: { judgment: '亨，震来虩虩', meaning: '雷动之象，行动果敢', fortune: '中吉' },
    51: { judgment: '亨，艮其背', meaning: '止步之象，知止则安', fortune: '中平' },
    52: { judgment: '女归吉', meaning: '循序渐进，稳步前行', fortune: '吉' },
    53: { judgment: '征凶', meaning: '行动失当，审慎抉择', fortune: '中凶' },
    54: { judgment: '亨，利贞', meaning: '丰盛之象，盛极宜守', fortune: '大吉' },
    55: { judgment: '小亨，利贞', meaning: '旅途之象，谦虚低调', fortune: '中平' },
    56: { judgment: '小亨，利贞', meaning: '顺风之象，柔顺通达', fortune: '吉' },
    57: { judgment: '亨，利贞', meaning: '喜悦之象，以和为贵', fortune: '吉' },
    58: { judgment: '亨，利贞', meaning: '涣散之象，凝聚力量', fortune: '中平' },
    59: { judgment: '亨，苦节不可贞', meaning: '节制有度，过犹不及', fortune: '中吉' },
    60: { judgment: '亨，利贞', meaning: '诚信之象，中正不偏', fortune: '大吉' },
    61: { judgment: '亨，利贞', meaning: '小有过越，行事谨慎', fortune: '中平' },
    62: { judgment: '亨，利贞', meaning: '功成名就，守成为要', fortune: '大吉' },
    63: { judgment: '亨，小利贞', meaning: '未完之业，坚持到底', fortune: '中吉' }
};

window.Knowledge = {
    TRIGRAMS, TRIGRAM_BY_NUMBER, HEXAGRAM_NAMES, HEXAGRAM_LOOKUP,
    WUXING, getWuxingRelation, TIANGAN, DIZHI, DIZHI_WUXING, TIANGAN_WUXING,
    LIUSHEN, NAJIA, LIUQIN_TABLE, HEXAGRAM_DESCRIPTIONS
};
