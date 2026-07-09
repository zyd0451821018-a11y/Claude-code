/**
 * 梅花易数 / 六爻 / 紫微 推演核心
 */

const DivinationMethods = (() => {

    function meihuaYishu(userNumber, timeInfo, shakeCount) {
        const K = window.Knowledge;
        const upperNum = ((userNumber - 1) % 8) + 1;
        const lowerNum = (((userNumber + timeInfo.hourGZ ? getDizhiIndex(timeInfo.hourGZ.zhi) : 0) - 1) % 8) + 1;
        const upperTrigram = K.TRIGRAM_BY_NUMBER[upperNum];
        const lowerTrigram = K.TRIGRAM_BY_NUMBER[lowerNum];

        const totalNum = userNumber + (timeInfo.hourGZ ? getDizhiIndex(timeInfo.hourGZ.zhi) : 0) + shakeCount;
        const changingLine = ((totalNum - 1) % 6) + 1;

        const hexLines = [
            ...K.TRIGRAMS[lowerTrigram].lines,
            ...K.TRIGRAMS[upperTrigram].lines
        ];

        const changedLines = [...hexLines];
        changedLines[changingLine - 1] = changedLines[changingLine - 1] === 1 ? 0 : 1;

        const innerLower = hexLines.slice(1, 4);
        const innerUpper = hexLines.slice(2, 5);

        const tiGua = changingLine <= 3 ? lowerTrigram : upperTrigram;
        const yongGua = changingLine <= 3 ? upperTrigram : lowerTrigram;

        const tiElement = K.TRIGRAMS[tiGua].element;
        const yongElement = K.TRIGRAMS[yongGua].element;
        const relation = K.getWuxingRelation(tiElement, yongElement);

        let fortune;
        switch (relation) {
            case '比和': fortune = '中吉'; break;
            case '生我': fortune = '大吉'; break;
            case '我生': fortune = '中平'; break;
            case '我克': fortune = '吉'; break;
            case '克我': fortune = '凶'; break;
            default: fortune = '中平';
        }

        const hexKey = hexLines.join('');
        const changedHexKey = changedLines.join('');

        return {
            method: '梅花易数',
            upperTrigram: K.TRIGRAMS[upperTrigram],
            lowerTrigram: K.TRIGRAMS[lowerTrigram],
            hexLines,
            changingLine,
            changedLines,
            tiGua: K.TRIGRAMS[tiGua],
            yongGua: K.TRIGRAMS[yongGua],
            tiElement,
            yongElement,
            relation,
            fortune,
            hexName: getHexName(hexKey),
            changedHexName: getHexName(changedHexKey),
            innerLower,
            innerUpper,
            analysis: buildMeihuaAnalysis(K.TRIGRAMS[tiGua], K.TRIGRAMS[yongGua], relation, fortune, timeInfo)
        };
    }

    function getDizhiIndex(zhi) {
        const DIZHI = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
        const idx = DIZHI.indexOf(zhi);
        return idx >= 0 ? idx + 1 : 1;
    }

    function getHexName(key) {
        const K = window.Knowledge;
        const idx = K.HEXAGRAM_LOOKUP[key];
        if (idx !== undefined && K.HEXAGRAM_NAMES[idx]) {
            return K.HEXAGRAM_NAMES[idx];
        }
        return '未知卦';
    }

    function buildMeihuaAnalysis(tiGua, yongGua, relation, fortune, timeInfo) {
        const monthState = timeInfo.monthGZ ?
            window.GanZhi.getWangXiang(timeInfo.monthGZ.zhi, tiGua.element) : '平';

        let analysis = `体卦为${tiGua.name}（${tiGua.nature}），五行属${tiGua.element}；`;
        analysis += `用卦为${yongGua.name}（${yongGua.nature}），五行属${yongGua.element}。`;
        analysis += `体用关系：${relation}。`;

        switch (relation) {
            case '生我':
                analysis += '用卦生体卦，为得助之象，所问之事顺利可成，有贵人相助。';
                break;
            case '比和':
                analysis += '体用比和，势均力敌，所问之事平稳进展，可得圆满。';
                break;
            case '我克':
                analysis += '体卦克用卦，主动出击有利，所问之事可成但需努力。';
                break;
            case '我生':
                analysis += '体卦生用卦，主耗泄之象，所问之事需付出较多方可成。';
                break;
            case '克我':
                analysis += '用卦克体卦，受制之象，所问之事阻碍较多，宜谨慎行事。';
                break;
        }

        analysis += `当前月建${timeInfo.monthGZ ? timeInfo.monthGZ.zhi : ''}月，体卦五行${monthState}。`;
        if (monthState === '旺' || monthState === '相') {
            analysis += '体卦得时令之助，增其吉象。';
        } else if (monthState === '囚' || monthState === '死') {
            analysis += '体卦不得时令，须多加留意。';
        }

        return analysis;
    }

    function liuyaoBasic(userNumber, timeInfo) {
        const K = window.Knowledge;
        const lines = [];
        let seed = userNumber;

        for (let i = 0; i < 6; i++) {
            seed = (seed * 9301 + 49297) % 233280;
            const val = seed % 4;
            lines.push({
                value: val === 0 ? 6 : val === 3 ? 9 : val === 1 ? 7 : 8,
                yinyang: (val === 0 || val === 3) ?
                    (val === 0 ? 0 : 1) :
                    (val === 1 ? 1 : 0),
                changing: val === 0 || val === 3
            });
        }

        const hexLines = lines.map(l => l.yinyang);
        const hexKey = hexLines.join('');
        const hexName = getHexName(hexKey);

        const changingCount = lines.filter(l => l.changing).length;
        let fortune;
        if (changingCount === 0) fortune = '中平';
        else if (changingCount <= 2) fortune = '中吉';
        else if (changingCount <= 4) fortune = '吉';
        else fortune = '大吉';

        return {
            method: '六爻',
            lines,
            hexLines,
            hexName,
            changingCount,
            fortune,
            dayGZ: timeInfo.dayGZ,
            monthGZ: timeInfo.monthGZ,
            analysis: buildLiuyaoAnalysis(hexName, lines, fortune, timeInfo)
        };
    }

    function buildLiuyaoAnalysis(hexName, lines, fortune, timeInfo) {
        const changingLines = lines.map((l, i) => l.changing ? (i + 1) : null).filter(Boolean);
        let analysis = `本卦：${hexName}。`;

        if (changingLines.length > 0) {
            analysis += `动爻在第${changingLines.join('、')}爻。`;
        } else {
            analysis += '六爻安静，以本卦断之。';
        }

        analysis += `日辰${timeInfo.dayGZ ? timeInfo.dayGZ.full : ''}，月建${timeInfo.monthGZ ? timeInfo.monthGZ.full : ''}月。`;

        if (fortune === '大吉' || fortune === '吉') {
            analysis += '卦象显示所问之事吉利顺遂，可积极推进。';
        } else if (fortune === '中吉') {
            analysis += '卦象平稳中带吉，宜稳中求进，不宜冒进。';
        } else {
            analysis += '卦象平和，宜守不宜攻，静待时机为上。';
        }

        return analysis;
    }

    /**
     * 紫微斗数完整排盘推演（需生辰）
     * 依问事类别取宫：感情→夫妻，事业→官禄，财→财帛，健康→疾厄，余者→命宫
     * 空宫借对宫；以四化、吉煞星定吉凶
     */
    function ziweiFull(question, userNumber, birthInfo) {
        const E = window.ZiweiEngine;
        const D = window.ZiweiData;
        const chart = E.fullChart(birthInfo);

        const targetName = selectTargetPalace(question);
        const palace = E.getPalace(chart, targetName);
        let srcPalace = palace;
        let borrowed = false;
        if (palace.majorStars.length === 0) {
            srcPalace = E.getOppositePalace(chart, palace);
            borrowed = true;
        }

        // 吉凶评分：化禄+2 化科+1 化权+1 化忌-2，吉星+1，煞星-1；借对宫减半
        let score = 0;
        const sihuaHits = [];
        const countStar = (s) => {
            if (s.mutagen === '禄') { score += 2; sihuaHits.push({ star: s.name, hua: '禄' }); }
            else if (s.mutagen === '科') { score += 1; sihuaHits.push({ star: s.name, hua: '科' }); }
            else if (s.mutagen === '权') { score += 1; sihuaHits.push({ star: s.name, hua: '权' }); }
            else if (s.mutagen === '忌') { score -= 2; sihuaHits.push({ star: s.name, hua: '忌' }); }
        };
        srcPalace.majorStars.forEach(countStar);
        srcPalace.luckyStars.forEach(s => { score += 1; countStar(s); });
        srcPalace.maleficStars.forEach(() => { score -= 1; });
        if (borrowed) score = score > 0 ? Math.floor(score / 2) : Math.ceil(score / 2);

        let fortune;
        if (score >= 4) fortune = '大吉';
        else if (score >= 2) fortune = '吉';
        else if (score >= 1) fortune = '中吉';
        else if (score === 0) fortune = '中平';
        else if (score >= -2) fortune = '中凶';
        else fortune = '凶';

        const mainStars = srcPalace.majorStars.map(s => s.name);
        const analysis = buildZiweiAnalysis(chart, palace, srcPalace, borrowed, targetName, sihuaHits, fortune, D);

        return {
            method: '紫微斗数',
            chart,
            targetName,
            palace,
            srcPalace,
            borrowed,
            sihuaHits,
            fortune,
            mainStar: mainStars.join('·') || '空宫',
            mainPalace: targetName + '（' + palace.stem + palace.branch + '）',
            starProfiles: mainStars.map(name => ({ name, data: D.MAJOR_STARS[name] })).filter(p => p.data),
            analysis
        };
    }

    function selectTargetPalace(question) {
        const q = question || '';
        if (/感情|恋爱|爱情|婚姻|姻缘|对象|男友|女友|老公|老婆|暗恋|表白|复合|分手/.test(q)) return '夫妻';
        if (/事业|工作|升职|加薪|跳槽|面试|考试|学业|考研|高考|offer/.test(q)) return '官禄';
        if (/钱|财|投资|理财|股票|基金|买房|收入|赚/.test(q)) return '财帛';
        if (/健康|身体|病|医|手术|养生/.test(q)) return '疾厄';
        return '命宫';
    }

    function buildZiweiAnalysis(chart, palace, srcPalace, borrowed, targetName, sihuaHits, fortune, D) {
        const palaceLabel = targetName === '命宫' ? '命宫' : targetName + '宫';
        let text = '你的命盘为' + chart.fiveElements.name + '，命宫在' + chart.soulBranch +
            '，身宫在' + chart.bodyBranch + '。所问之事看' + palaceLabel +
            '（' + palace.stem + palace.branch + '）。';

        if (borrowed) {
            text += '此宫无主星坐守，借对宫（' + srcPalace.name + '，' + srcPalace.stem + srcPalace.branch + '）之力来看——' +
                '这个领域对你而言更灵活、更受外界影响。';
        }

        const majors = srcPalace.majorStars.map(s => s.name);
        if (majors.length > 0) {
            const profiles = majors.map(name => {
                const star = D.MAJOR_STARS[name];
                if (!star) return name;
                const note = star.palaceNotes[targetName] || '';
                return name + '（' + star.archetype + '）坐守，这颗星在你盘里的角色是：' + star.analogy +
                    (note ? '。落在此宫，' + note : '');
            });
            text += profiles.join('；') + '。';
        }

        for (const hit of sihuaHits) {
            const meaning = D.SIHUA_MEANING[hit.hua];
            const palaceReading = D.SIHUA_PALACE[hit.hua] && (D.SIHUA_PALACE[hit.hua][targetName] || D.SIHUA_PALACE[hit.hua][targetName + '宫']);
            text += hit.star + '化' + hit.hua + (meaning ? '（' + meaning.core + '）' : '') + '在此，';
            text += palaceReading ? palaceReading + '。' : (meaning ? meaning.direction + '。' : '');
        }

        if (srcPalace.maleficStars.length > 0) {
            const m = srcPalace.maleficStars[0];
            const mData = D.MALEFIC_STARS[m];
            text += '宫中见' + srcPalace.maleficStars.join('、') + '，' +
                (mData ? '不必视为坏事——' + mData.positive + '，用对了反而是动力。' : '行事宜多一分谨慎。');
        }

        const decadal = palace.decadal;
        text += '此宫大限为' + decadal.start + '至' + decadal.end + '虚岁。';

        if (fortune === '大吉' || fortune === '吉') {
            text += '整体来看，这个格局倾向于顺遂，星曜的助力明显，可以积极推进。';
        } else if (fortune === '中吉') {
            text += '整体来看，格局稳中带好，方向对了，节奏不必太急。';
        } else if (fortune === '中平') {
            text += '整体来看，格局平稳，此事更多取决于你自己的行动——命盘显示可能性，行动决定现实。';
        } else {
            text += '整体来看，这个格局的课题多一些，但化忌所在即是你最在意之处，看清它反而是转机的开始。';
        }

        return text;
    }

    function ziweiSimple(userNumber, timeInfo) {
        const palaces = ['命宫','兄弟','夫妻','子女','财帛','疾厄','迁移','仆役','官禄','田宅','福德','父母'];
        const mainStars = ['紫微','天机','太阳','武曲','天同','廉贞','天府','太阴','贪狼','巨门','天相','天梁','七杀','破军'];

        const seed = (userNumber * 7 + (timeInfo.hour || 12)) % 12;
        const mainPalace = palaces[seed];
        const mainStar = mainStars[(userNumber + seed) % mainStars.length];

        let fortune;
        const luckyStars = ['紫微','天府','太阳','太阴','天同','天梁'];
        const neutralStars = ['天机','武曲','天相','巨门','贪狼'];
        if (luckyStars.includes(mainStar)) fortune = '大吉';
        else if (neutralStars.includes(mainStar)) fortune = '中吉';
        else fortune = '中平';

        return {
            method: '紫微斗数',
            mainPalace,
            mainStar,
            fortune,
            analysis: `命宫在${mainPalace}，主星为${mainStar}。${mainStar}坐命，` +
                (fortune === '大吉' ? '主其人聪慧明达，所问之事顺遂如意，贵人运旺。' :
                 fortune === '中吉' ? '主其人机敏善变，所问之事须运用智慧方可成事。' :
                 '主其人刚毅果断，所问之事需谨慎行事，防小人暗害。')
        };
    }

    function selectMethod(question) {
        const q = question || '';
        if (/感情|恋爱|爱情|婚姻|姻缘|对象|男友|女友|老公|老婆|暗恋|表白|复合|分手/.test(q)) {
            return 'ziwei';
        }
        if (/事业|工作|升职|加薪|跳槽|面试|考试|学业|考研|高考|offer/.test(q)) {
            return 'liuyao';
        }
        if (/钱|财|投资|理财|股票|基金|买房|收入|赚/.test(q)) {
            return 'liuyao';
        }
        if (/健康|身体|病|医|手术|养生/.test(q)) {
            return 'meihua';
        }
        return 'meihua';
    }

    function divine(question, userNumber, shakeCount, birthInfo) {
        const timeInfo = window.GanZhi.getCurrentTimeInfo();
        let method = selectMethod(question);

        // 提供生辰时，一律可用紫微精确排盘；感情类问题默认走紫微
        if (birthInfo && method === 'ziwei') {
            method = 'ziweiFull';
        }

        let result;
        switch (method) {
            case 'ziweiFull':
                result = ziweiFull(question, userNumber, birthInfo);
                break;
            case 'ziwei':
                result = ziweiSimple(userNumber, timeInfo);
                break;
            case 'liuyao':
                result = liuyaoBasic(userNumber, timeInfo);
                break;
            case 'meihua':
            default:
                result = meihuaYishu(userNumber, timeInfo, shakeCount);
                break;
        }

        result.timeInfo = {
            year: timeInfo.yearGZ.full,
            month: timeInfo.monthGZ.full,
            day: timeInfo.dayGZ.full,
            hour: timeInfo.hourGZ.full
        };
        result.question = question;
        result.userNumber = userNumber;

        return result;
    }

    return { divine, selectMethod, meihuaYishu, liuyaoBasic, ziweiSimple, ziweiFull };
})();

window.DivinationMethods = DivinationMethods;
