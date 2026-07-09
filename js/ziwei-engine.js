/**
 * 紫微斗数排盘引擎
 * 安命身宫 / 五虎遁 / 纳音五行局 / 安十四主星 / 六吉六煞 / 生年四化 / 大限
 * 安星诀依《紫微斗数全书》通行版本，约定与 iztro 排盘一致（经模糊测试逐项比对）
 * 依赖 window.Lunar（农历转换）
 */

const ZiweiEngine = (() => {
    const GAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    const ZHI = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

    // 紫微斗数以寅宫为第一个宫位，内部索引均以寅 = 0
    const YIN_FIRST = 2;

    // 自命宫起顺时针的宫名次序
    const PALACE_NAMES = ['命宫', '父母', '福德', '田宅', '官禄', '仆役', '迁移', '疾厄', '财帛', '子女', '夫妻', '兄弟'];

    // 五虎遁：年干定寅月（寅宫）天干
    const TIGER_RULE = {
        '甲': '丙', '己': '丙', '乙': '戊', '庚': '戊', '丙': '庚',
        '辛': '庚', '丁': '壬', '壬': '壬', '戊': '甲', '癸': '甲'
    };

    // 十天干四化 [禄, 权, 科, 忌]
    const SIHUA_TABLE = {
        '甲': ['廉贞', '破军', '武曲', '太阳'],
        '乙': ['天机', '天梁', '紫微', '太阴'],
        '丙': ['天同', '天机', '文昌', '廉贞'],
        '丁': ['太阴', '天同', '天机', '巨门'],
        '戊': ['贪狼', '太阴', '右弼', '天机'],
        '己': ['武曲', '贪狼', '天梁', '文曲'],
        '庚': ['太阳', '武曲', '太阴', '天同'],
        '辛': ['巨门', '太阳', '文曲', '文昌'],
        '壬': ['天梁', '紫微', '左辅', '武曲'],
        '癸': ['破军', '巨门', '太阴', '贪狼']
    };
    const SIHUA_KEYS = ['禄', '权', '科', '忌'];

    // 天魁天钺（年干）：甲戊庚丑未，乙己子申，辛午寅，丙丁亥酉，壬癸卯巳
    const KUI_YUE = {
        '甲': ['丑', '未'], '戊': ['丑', '未'], '庚': ['丑', '未'],
        '乙': ['子', '申'], '己': ['子', '申'],
        '辛': ['午', '寅'],
        '丙': ['亥', '酉'], '丁': ['亥', '酉'],
        '壬': ['卯', '巳'], '癸': ['卯', '巳']
    };

    // 禄存（年干）
    const LUCUN = {
        '甲': '寅', '乙': '卯', '丙': '巳', '戊': '巳', '丁': '午',
        '己': '午', '庚': '申', '辛': '酉', '壬': '亥', '癸': '子'
    };

    // 天马（年支三合）：寅午戌在申，申子辰在寅，巳酉丑在亥，亥卯未在巳
    const TIANMA = {
        '寅': '申', '午': '申', '戌': '申',
        '申': '寅', '子': '寅', '辰': '寅',
        '巳': '亥', '酉': '亥', '丑': '亥',
        '亥': '巳', '卯': '巳', '未': '巳'
    };

    // 火星铃星起子时宫（年支三合）
    const HUO_LING = {
        '寅': ['丑', '卯'], '午': ['丑', '卯'], '戌': ['丑', '卯'],
        '申': ['寅', '戌'], '子': ['寅', '戌'], '辰': ['寅', '戌'],
        '巳': ['卯', '戌'], '酉': ['卯', '戌'], '丑': ['卯', '戌'],
        '亥': ['酉', '戌'], '卯': ['酉', '戌'], '未': ['酉', '戌']
    };

    // 紫微星系（自紫微逆行）与天府星系（自天府顺行）
    const ZIWEI_GROUP = ['紫微', '天机', '', '太阳', '武曲', '天同', '', '', '廉贞'];
    const TIANFU_GROUP = ['天府', '太阴', '贪狼', '巨门', '天相', '天梁', '七杀', '', '', '', '破军'];

    function fixIndex(i, max) {
        max = max || 12;
        return ((i % max) + max) % max;
    }

    // 地支名 → 寅基索引
    function branchToIdx(zhi) {
        return fixIndex(ZHI.indexOf(zhi) - YIN_FIRST);
    }

    // 寅基索引 → 地支名
    function idxToBranch(idx) {
        return ZHI[fixIndex(idx + YIN_FIRST)];
    }

    /**
     * 定五行局：命宫干支纳音口诀法
     * 甲乙丙丁一到五，子丑午未一来数；干支相加多减五，五行木金水火土
     */
    function getFiveElements(gan, zhi) {
        const table = [
            { name: '木三局', number: 3 },
            { name: '金四局', number: 4 },
            { name: '水二局', number: 2 },
            { name: '火六局', number: 6 },
            { name: '土五局', number: 5 }
        ];
        const g = Math.floor(GAN.indexOf(gan) / 2) + 1;
        const z = Math.floor(fixIndex(ZHI.indexOf(zhi), 6) / 2) + 1;
        let n = g + z;
        while (n > 5) n -= 5;
        return table[n - 1];
    }

    /**
     * 完整排盘
     * @param {Object} p { year, month, day (公历), hour (0-23), gender ('男'|'女') }
     */
    function fullChart(p) {
        const L = window.Lunar;
        const lunar = L.solarToLunar(p.year, p.month, p.day);
        const timeIndex = L.getTimeIndex(p.hour);
        const hourBranchIdx = timeIndex % 12; // 早晚子时地支均为子

        // 闰月修正：闰月过半按下月算（晚子时除外）
        const leapAdd = (lunar.isLeapMonth && lunar.lunarDay > 15 && timeIndex !== 12) ? 1 : 0;
        const monthIndex = fixIndex(lunar.lunarMonth - 1 + leapAdd); // 正月起寅

        // 安命身宫：寅起正月顺数至生月，逆数生时安命、顺数生时安身
        const soulIdx = fixIndex(monthIndex - hourBranchIdx);
        const bodyIdx = fixIndex(monthIndex + hourBranchIdx);

        // 宫干：五虎遁自寅宫起
        const startGanIdx = GAN.indexOf(TIGER_RULE[lunar.yearGan]);
        const palaceStems = [];
        for (let i = 0; i < 12; i++) {
            palaceStems[i] = GAN[fixIndex(startGanIdx + i, 10)];
        }

        // 五行局（命宫干支纳音）
        const five = getFiveElements(palaceStems[soulIdx], idxToBranch(soulIdx));

        // 安紫微：晚子时日数加一（跨月则为下月初一）
        let zday = lunar.lunarDay;
        if (timeIndex === 12) {
            const next = new Date(Date.UTC(p.year, p.month - 1, p.day));
            next.setUTCDate(next.getUTCDate() + 1);
            zday = L.solarToLunar(next.getUTCFullYear(), next.getUTCMonth() + 1, next.getUTCDate()).lunarDay;
        }
        // 局数除日数，不尽添数至整除；商数起寅前行，添数奇逆偶顺
        let offset = -1;
        let quotient = 0;
        let remainder = -1;
        do {
            offset++;
            const divisor = zday + offset;
            quotient = Math.floor(divisor / five.number);
            remainder = divisor % five.number;
        } while (remainder !== 0);
        quotient %= 12;
        let ziweiIdx = quotient - 1;
        if (offset % 2 === 0) {
            ziweiIdx += offset;
        } else {
            ziweiIdx -= offset;
        }
        ziweiIdx = fixIndex(ziweiIdx);
        // 天府与紫微对称于寅申轴
        const tianfuIdx = fixIndex(12 - ziweiIdx);

        // 安十四主星
        const majorByPalace = [];
        for (let i = 0; i < 12; i++) majorByPalace.push([]);
        ZIWEI_GROUP.forEach((s, i) => {
            if (s) majorByPalace[fixIndex(ziweiIdx - i)].push(s);
        });
        TIANFU_GROUP.forEach((s, i) => {
            if (s) majorByPalace[fixIndex(tianfuIdx + i)].push(s);
        });

        // 六吉 + 禄存天马
        const t = fixIndex(timeIndex); // 晚子时按子时（0）
        const luckyByPalace = [];
        for (let i = 0; i < 12; i++) luckyByPalace.push([]);
        luckyByPalace[fixIndex(branchToIdx('戌') - t)].push('文昌');
        luckyByPalace[fixIndex(branchToIdx('辰') + t)].push('文曲');
        luckyByPalace[fixIndex(branchToIdx('辰') + monthIndex)].push('左辅');
        luckyByPalace[fixIndex(branchToIdx('戌') - monthIndex)].push('右弼');
        luckyByPalace[branchToIdx(KUI_YUE[lunar.yearGan][0])].push('天魁');
        luckyByPalace[branchToIdx(KUI_YUE[lunar.yearGan][1])].push('天钺');
        const luIdx = branchToIdx(LUCUN[lunar.yearGan]);
        luckyByPalace[luIdx].push('禄存');
        luckyByPalace[branchToIdx(TIANMA[lunar.yearZhi])].push('天马');

        // 六煞：禄前擎羊禄后陀罗，火铃依年支起子时，地劫亥起顺行、地空亥起逆行
        const maleficByPalace = [];
        for (let i = 0; i < 12; i++) maleficByPalace.push([]);
        maleficByPalace[fixIndex(luIdx + 1)].push('擎羊');
        maleficByPalace[fixIndex(luIdx - 1)].push('陀罗');
        maleficByPalace[fixIndex(branchToIdx(HUO_LING[lunar.yearZhi][0]) + t)].push('火星');
        maleficByPalace[fixIndex(branchToIdx(HUO_LING[lunar.yearZhi][1]) + t)].push('铃星');
        maleficByPalace[fixIndex(branchToIdx('亥') - t)].push('地空');
        maleficByPalace[fixIndex(branchToIdx('亥') + t)].push('地劫');

        // 生年四化（年干），化星可为主星或昌曲辅弼
        const sihuaStars = SIHUA_TABLE[lunar.yearGan];
        const mutagenOf = {};
        sihuaStars.forEach((star, i) => {
            mutagenOf[star] = SIHUA_KEYS[i];
        });

        // 大限：起于命宫，首限起始虚岁为五行局数；阳男阴女顺行，阴男阳女逆行
        const yearYang = ZHI.indexOf(lunar.yearZhi) % 2 === 0;
        const forward = (p.gender === '男') === yearYang;
        const decadalByPalace = [];
        for (let i = 0; i < 12; i++) {
            const idx = forward ? fixIndex(soulIdx + i) : fixIndex(soulIdx - i);
            const start = five.number + 10 * i;
            decadalByPalace[idx] = { start: start, end: start + 9 };
        }

        // 组装十二宫（寅基顺序）
        const palaces = [];
        for (let i = 0; i < 12; i++) {
            palaces.push({
                index: i,
                branchIdx: fixIndex(i + YIN_FIRST),  // 标准地支索引（子=0）
                stem: palaceStems[i],
                branch: idxToBranch(i),
                name: PALACE_NAMES[fixIndex(i - soulIdx)],
                majorStars: majorByPalace[i].map(s => ({ name: s, mutagen: mutagenOf[s] || null })),
                luckyStars: luckyByPalace[i].map(s => ({ name: s, mutagen: mutagenOf[s] || null })),
                maleficStars: maleficByPalace[i].slice(),
                isSoulPalace: i === soulIdx,
                isBodyPalace: i === bodyIdx,
                decadal: decadalByPalace[i]
            });
        }

        const timeCn = (timeIndex === 12 ? '晚子' : timeIndex === 0 ? '早子' : ZHI[hourBranchIdx]) + '时';

        return {
            lunarDateCn: lunar.yearGanZhi + '年 ' + lunar.monthCn + lunar.dayCn,
            yearGanZhi: lunar.yearGanZhi,
            timeIndex: timeIndex,
            timeCn: timeCn,
            gender: p.gender,
            fiveElements: five,
            soulBranchIdx: fixIndex(soulIdx + YIN_FIRST),
            bodyBranchIdx: fixIndex(bodyIdx + YIN_FIRST),
            soulBranch: idxToBranch(soulIdx),
            bodyBranch: idxToBranch(bodyIdx),
            palaces: palaces,
            yearSihua: {
                '禄': sihuaStars[0],
                '权': sihuaStars[1],
                '科': sihuaStars[2],
                '忌': sihuaStars[3]
            }
        };
    }

    /** 按宫名取宫 */
    function getPalace(chart, name) {
        return chart.palaces.find(pl => pl.name === name) || null;
    }

    /** 对宫（空宫借对宫用） */
    function getOppositePalace(chart, palace) {
        return chart.palaces[fixIndex(palace.index + 6)];
    }

    /**
     * 渲染十二宫命盘（4×4 布局，中央为盘面信息）
     * 巳午未申一行，辰酉两侧，卯戌两侧，寅丑子亥一行
     */
    function renderMingpan(chart) {
        let html = '<div class="mp-grid">';

        for (const pl of chart.palaces) {
            const stars = [];
            for (const s of pl.majorStars) {
                stars.push('<span class="mp-star-major">' + s.name +
                    (s.mutagen ? '<i class="mp-mutagen mp-mutagen-' + s.mutagen + '">' + s.mutagen + '</i>' : '') +
                    '</span>');
            }
            for (const s of pl.luckyStars) {
                stars.push('<span class="mp-star-lucky">' + s.name +
                    (s.mutagen ? '<i class="mp-mutagen mp-mutagen-' + s.mutagen + '">' + s.mutagen + '</i>' : '') +
                    '</span>');
            }
            for (const s of pl.maleficStars) {
                stars.push('<span class="mp-star-malefic">' + s + '</span>');
            }

            const tags = [];
            if (pl.isBodyPalace) tags.push('<span class="mp-tag mp-tag-body">身</span>');

            html += '<div class="mp-cell mp-b-' + pl.branch + '">';
            html += '<div class="mp-stars">' + (stars.join('') || '<span class="mp-empty">空宫</span>') + '</div>';
            html += '<div class="mp-cell-footer">';
            html += '<span class="mp-decadal">' + pl.decadal.start + '-' + pl.decadal.end + '</span>';
            html += '<span class="mp-palace-name">' + pl.name + tags.join('') + '</span>';
            html += '<span class="mp-dizhi">' + pl.stem + pl.branch + '</span>';
            html += '</div>';
            html += '</div>';
        }

        html += '<div class="mp-center">';
        html += '<div class="mp-center-title">紫微斗数</div>';
        html += '<div class="mp-center-row">' + chart.lunarDateCn + ' ' + chart.timeCn + '</div>';
        html += '<div class="mp-center-row">' + chart.gender + '命 · ' + chart.fiveElements.name + '</div>';
        html += '<div class="mp-center-sihua">';
        for (const k of SIHUA_KEYS) {
            html += '<span class="mp-sihua-item">' + chart.yearSihua[k] + '化' + k + '</span>';
        }
        html += '</div>';
        html += '</div>';

        html += '</div>';
        return html;
    }

    return { fullChart, getPalace, getOppositePalace, renderMingpan };
})();

window.ZiweiEngine = ZiweiEngine;
