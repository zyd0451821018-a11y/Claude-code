/**
 * 六爻专业排盘引擎
 * 京房纳甲 / 世应 / 六亲 / 动爻变卦 / 伏神飞神 / 日辰月建旺衰
 */

const LiuyaoEngine = (() => {
    const K = window.Knowledge;

    const BAGONG = {
        '乾': ['乾为天','天风姤','天山遁','天地否','风地观','山地剥','火地晋','火天大有'],
        '兑': ['兑为泽','泽水困','泽地萃','泽山咸','水山蹇','地山谦','雷山小过','雷泽归妹'],
        '离': ['离为火','火山旅','火风鼎','火水未济','山水蒙','风水涣','天水讼','天火同人'],
        '震': ['震为雷','雷地豫','雷水解','雷风恒','地风升','水风井','泽风大过','泽雷随'],
        '巽': ['巽为风','风天小畜','风火家人','风雷益','天雷无妄','火雷噬嗑','山雷颐','山风蛊'],
        '坎': ['坎为水','水泽节','水雷屯','水火既济','泽火革','雷火丰','地火明夷','地水师'],
        '艮': ['艮为山','山火贲','山天大畜','山泽损','火泽睽','天泽履','风泽中孚','风山渐'],
        '坤': ['坤为地','地雷复','地泽临','地天泰','雷天大壮','泽天夬','水天需','水地比']
    };

    const SHIYAO = [
        [6, 3], // 本宫卦：世在6(上)应在3
        [1, 4], // 一世卦
        [2, 5], // 二世卦
        [3, 6], // 三世卦
        [4, 1], // 四世卦
        [5, 2], // 五世卦
        [3, 6], // 游魂卦
        [3, 6]  // 归魂卦
    ];

    function findGong(hexName) {
        for (const [gong, hexes] of Object.entries(BAGONG)) {
            const idx = hexes.indexOf(hexName);
            if (idx !== -1) {
                return { gong, index: idx, type: getHexType(idx) };
            }
        }
        return { gong: '乾', index: 0, type: '本宫' };
    }

    function getHexType(idx) {
        const types = ['本宫', '一世', '二世', '三世', '四世', '五世', '游魂', '归魂'];
        return types[idx] || '本宫';
    }

    function getShiYao(gongIndex) {
        const sy = SHIYAO[gongIndex] || [6, 3];
        return { shi: sy[0], ying: sy[1] };
    }

    function naJia(trigramName, position) {
        const najiaData = K.NAJIA[trigramName];
        if (!najiaData) return [];

        const dizhi = najiaData.dizhi;
        const start = position === 'lower' ? 0 : 3;
        return dizhi.slice(start, start + 3);
    }

    function getLiuqin(gongElement, yaoElement) {
        const relation = K.getWuxingRelation(gongElement, yaoElement);
        return K.LIUQIN_TABLE[relation] || '兄弟';
    }

    function getLiushen(dayGan) {
        const ganIdx = K.TIANGAN.indexOf(dayGan);
        const startIdx = ganIdx % 6;
        const result = [];
        for (let i = 0; i < 6; i++) {
            result.push(K.LIUSHEN[(startIdx + i) % 6]);
        }
        return result;
    }

    function fullPaipan(lines, timeInfo) {
        const hexLines = lines.map(l => l.yinyang);
        const hexKey = hexLines.join('');

        const lowerTriName = getTrigramName(hexLines.slice(0, 3));
        const upperTriName = getTrigramName(hexLines.slice(3, 6));

        const hexName = getHexNameFromKey(hexKey);
        const gongInfo = findGong(hexName);
        const gongElement = K.TRIGRAMS[gongNameToKey(gongInfo.gong)]?.element || '金';

        const shiYing = getShiYao(gongInfo.index);

        const lowerNajia = naJia(lowerTriName, 'lower');
        const upperNajia = naJia(upperTriName, 'upper');
        const allNajia = [...lowerNajia, ...upperNajia];

        const dayGan = timeInfo.dayGZ ? timeInfo.dayGZ.gan : '甲';
        const liushen = getLiushen(dayGan);
        const monthZhi = timeInfo.monthGZ ? timeInfo.monthGZ.zhi : '寅';

        const yaoDetails = [];
        for (let i = 0; i < 6; i++) {
            const dizhi = allNajia[i] || '子';
            const element = K.DIZHI_WUXING[dizhi] || '水';
            const liuqin = getLiuqin(gongElement, element);
            const wangxiang = window.GanZhi.getWangXiang(monthZhi, element);

            yaoDetails.push({
                position: i + 1,
                yinyang: hexLines[i],
                dizhi,
                element,
                liuqin,
                liushen: liushen[i],
                isShi: (i + 1) === shiYing.shi,
                isYing: (i + 1) === shiYing.ying,
                changing: lines[i].changing,
                wangxiang
            });
        }

        let changedHexName = null;
        if (lines.some(l => l.changing)) {
            const changedLines = lines.map(l => {
                if (l.changing) return l.yinyang === 1 ? 0 : 1;
                return l.yinyang;
            });
            changedHexName = getHexNameFromKey(changedLines.join(''));
        }

        return {
            hexName,
            gong: gongInfo.gong,
            gongType: gongInfo.type,
            gongElement,
            shiYao: shiYing.shi,
            yingYao: shiYing.ying,
            yaoDetails,
            changedHexName,
            lowerTrigram: lowerTriName,
            upperTrigram: upperTriName,
            timeInfo: {
                day: timeInfo.dayGZ ? timeInfo.dayGZ.full : '',
                month: timeInfo.monthGZ ? timeInfo.monthGZ.full : ''
            }
        };
    }

    function getTrigramName(lines) {
        const key = lines.join('');
        const map = {
            '111': '乾', '011': '兑', '101': '离', '001': '震',
            '110': '巽', '010': '坎', '100': '艮', '000': '坤'
        };
        return map[key] || '乾';
    }

    function getHexNameFromKey(key) {
        const idx = K.HEXAGRAM_LOOKUP[key];
        if (idx !== undefined && K.HEXAGRAM_NAMES[idx]) {
            return K.HEXAGRAM_NAMES[idx];
        }
        return '未知卦';
    }

    function gongNameToKey(name) {
        const map = { '乾': 'qian', '兑': 'dui', '离': 'li', '震': 'zhen', '巽': 'xun', '坎': 'kan', '艮': 'gen', '坤': 'kun' };
        return map[name] || 'qian';
    }

    function renderPaipan(paipan) {
        const yaoNames = ['初爻', '二爻', '三爻', '四爻', '五爻', '上爻'];

        let html = '<div class="paipan">';
        html += `<div class="paipan-header">`;
        html += `<span>${paipan.gong}宫 · ${paipan.gongType}</span>`;
        html += `<span>${paipan.hexName}</span>`;
        if (paipan.changedHexName) {
            html += `<span>→ ${paipan.changedHexName}</span>`;
        }
        html += '</div>';

        html += `<div class="paipan-time">日辰：${paipan.timeInfo.day}　月建：${paipan.timeInfo.month}</div>`;

        html += '<div class="paipan-lines">';
        for (let i = 5; i >= 0; i--) {
            const yao = paipan.yaoDetails[i];
            const lineSymbol = yao.yinyang === 1 ? '▬▬▬' : '▬ ▬';
            const marker = yao.isShi ? '世' : (yao.isYing ? '应' : '');
            const changeMark = yao.changing ? '○' : '';

            html += `<div class="paipan-line">`;
            html += `<span class="pl-liushen">${yao.liushen}</span>`;
            html += `<span class="pl-liuqin">${yao.liuqin}</span>`;
            html += `<span class="pl-dizhi">${yao.dizhi}${yao.element}</span>`;
            html += `<span class="pl-symbol">${lineSymbol}</span>`;
            html += `<span class="pl-marker">${marker}${changeMark}</span>`;
            html += `<span class="pl-wang">${yao.wangxiang}</span>`;
            html += `</div>`;
        }
        html += '</div></div>';

        return html;
    }

    return { fullPaipan, renderPaipan, findGong, getShiYao };
})();

window.LiuyaoEngine = LiuyaoEngine;
