/**
 * 起卦调度、签文匹配、解读渲染
 */

const Divination = (() => {
    let currentResult = null;

    function performDivination(question, userNumber, shakeCount, birthInfo) {
        const divinationResult = window.DivinationMethods.divine(question, userNumber, shakeCount, birthInfo);
        const signId = matchSign(divinationResult.fortune, userNumber);
        const sign = window.OracleData.getSignById(signId);

        currentResult = {
            divination: divinationResult,
            sign,
            question,
            plainReading: generatePlainReading(question, divinationResult, sign)
        };

        return currentResult;
    }

    function matchSign(fortune, userNumber) {
        const matchingSigns = window.OracleData.getSignByFortune(fortune);
        const idx = (userNumber - 1) % matchingSigns.length;
        return matchingSigns[idx].id;
    }

    function generatePlainReading(question, divination, sign) {
        const q = question || '';
        const fortune = divination.fortune;

        const categoryReadings = {
            love: {
                '大吉': '缘分天注定，你所问的感情之事，前景十分明朗。对方心中有你，只需真心以待，佳缘自成。',
                '吉': '感情之路虽有波折，但终将守得云开见月明。保持真诚与耐心，美好终会到来。',
                '中吉': '感情运势平稳向好，但还需要时间来培育。不要急于求成，顺其自然最好。',
                '中平': '感情之事目前处于平淡期，既无大碍也无大喜。保持自我，该来的会来。',
                '中凶': '感情方面暂时不太顺利，建议先修炼自身，缘分未到不必强求。',
                '凶': '当前感情运势较为低迷，建议暂缓行动，先理清自己的内心。时机未到，切莫强求。'
            },
            career: {
                '大吉': '事业运势大好！你所问之事，必能如愿以偿。贵人相助，机遇就在眼前，勇敢前行。',
                '吉': '事业前景光明，但需脚踏实地。付出终有回报，保持当前的努力方向。',
                '中吉': '事业发展稳中有进，虽非一帆风顺，但方向正确。继续坚持，成效渐显。',
                '中平': '事业运势平稳，无大起大落。当前宜守不宜攻，做好手头之事最为紧要。',
                '中凶': '事业方面暂遇阻碍，建议调整策略，不宜此时做重大决定。',
                '凶': '事业运势低迷，此时不宜冒进。退一步海阔天空，韬光养晦以待时机。'
            },
            wealth: {
                '大吉': '财运亨通！你所问的财务之事大有可为。把握机会，财源广进。',
                '吉': '财运不错，但需合理规划。正财为主，偏财亦可期待。',
                '中吉': '财运平稳，小有进账。稳健投资为宜，不可贪心。',
                '中平': '财运一般，收支平衡。守住现有即可，不宜冒险。',
                '中凶': '财运欠佳，近期宜节流。谨慎理财，避免不必要的开支。',
                '凶': '财运低迷，切忌投机。守住钱袋，静待转机。'
            },
            general: {
                '大吉': '你所问之事，签象大吉！万事俱备，天时地利人和皆在你这边。放心前行，必有所成。',
                '吉': '你所问之事吉利顺遂。虽有小波折，但总体向好。保持积极心态，好事将至。',
                '中吉': '你所问之事稳中带好。不必过于焦虑，按部就班地来，结果会令你满意。',
                '中平': '你所问之事不好不坏，处于平衡状态。现阶段宜静观其变，不宜有大动作。',
                '中凶': '你所问之事暂时不太顺利。建议暂缓行动，调整好心态再做打算。',
                '凶': '你所问之事目前时机未到，宜守不宜进。但凶中有机，只要心正念正，终能化险为夷。'
            }
        };

        let category = 'general';
        if (/感情|恋爱|爱情|婚姻|姻缘|对象|男友|女友|老公|老婆|暗恋|表白|复合|分手/.test(q)) {
            category = 'love';
        } else if (/事业|工作|升职|加薪|跳槽|面试|考试|学业|考研|高考|offer/.test(q)) {
            category = 'career';
        } else if (/钱|财|投资|理财|股票|基金|买房|收入|赚/.test(q)) {
            category = 'wealth';
        }

        const readings = categoryReadings[category];
        return readings[fortune] || readings['中平'];
    }

    function renderResult(container) {
        if (!currentResult) return;
        const { sign, divination, question, plainReading } = currentResult;

        container.innerHTML = `
            <div class="result-page">
                <div class="result-question">${escapeHtml(question)}</div>

                <div class="sign-card">
                    <div class="sign-header">
                        <span class="sign-number">第${sign.id}签</span>
                        <span class="sign-level level-${getLevelClass(sign.level)}">${sign.level}</span>
                    </div>
                    <div class="sign-name">${sign.name}</div>
                    <div class="sign-poem">${sign.poem}</div>
                    <div class="sign-story">典故：${sign.story}</div>
                </div>

                <div class="plain-reading">
                    <h3>解签</h3>
                    <p>${plainReading}</p>
                </div>

                <div class="sign-interpretation">
                    <p>${sign.interpretation}</p>
                </div>

                <details class="divination-details">
                    <summary>查看专业推演</summary>
                    <div class="details-content">
                        <div class="detail-item">
                            <span class="detail-label">推演方法</span>
                            <span class="detail-value">${divination.method}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">起卦时间</span>
                            <span class="detail-value">${divination.timeInfo.year}年 ${divination.timeInfo.month}月 ${divination.timeInfo.day}日 ${divination.timeInfo.hour}时</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">报数</span>
                            <span class="detail-value">${divination.userNumber}</span>
                        </div>
                        <div class="divination-analysis">
                            <h4>推演详解</h4>
                            <p>${divination.analysis}</p>
                        </div>
                        ${divination.hexName ? `
                        <div class="detail-item">
                            <span class="detail-label">本卦</span>
                            <span class="detail-value">${divination.hexName}</span>
                        </div>` : ''}
                        ${divination.changedHexName ? `
                        <div class="detail-item">
                            <span class="detail-label">变卦</span>
                            <span class="detail-value">${divination.changedHexName}</span>
                        </div>` : ''}
                        ${divination.method === '六爻' && divination.lines ? renderLiuyaoPaipan(divination) : ''}
                        ${divination.mainStar ? `
                        <div class="detail-item">
                            <span class="detail-label">${divination.chart ? '所问宫位主星' : '命宫主星'}</span>
                            <span class="detail-value">${divination.mainStar}（${divination.mainPalace}）</span>
                        </div>` : ''}
                        ${divination.chart ? renderZiweiChart(divination) : ''}
                    </div>
                </details>

                <button class="btn btn-primary restart-btn" onclick="window.App && window.App.restart()">再问一签</button>
            </div>
        `;
    }

    function renderZiweiChart(divination) {
        if (!window.ZiweiEngine || !divination.chart) return '';
        const chart = divination.chart;

        let html = '';
        html += `
            <div class="detail-item">
                <span class="detail-label">五行局</span>
                <span class="detail-value">${chart.fiveElements.name}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">农历生辰</span>
                <span class="detail-value">${chart.lunarDateCn} ${chart.timeCn}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">生年四化</span>
                <span class="detail-value">${chart.yearSihua['禄']}化禄 ${chart.yearSihua['权']}化权 ${chart.yearSihua['科']}化科 ${chart.yearSihua['忌']}化忌</span>
            </div>`;

        // 星曜档案（有主见解读：原型 + 类比）
        if (divination.starProfiles && divination.starProfiles.length > 0) {
            html += '<div class="star-profiles">';
            for (const p of divination.starProfiles) {
                html += `
                    <div class="star-profile">
                        <div class="star-profile-head">
                            <span class="star-profile-name">${p.name}</span>
                            <span class="star-profile-archetype">${p.data.archetype}</span>
                        </div>
                        <p class="star-profile-analogy">「${p.data.analogy}」</p>
                        <p class="star-profile-detail">优势：${p.data.strengths}<br>提醒：${p.data.risks}</p>
                    </div>`;
            }
            html += '</div>';
        }

        html += window.ZiweiEngine.renderMingpan(chart);
        return html;
    }

    function renderLiuyaoPaipan(divination) {
        if (!window.LiuyaoEngine) return '';
        const timeInfo = {
            dayGZ: divination.dayGZ,
            monthGZ: divination.monthGZ
        };
        const paipan = window.LiuyaoEngine.fullPaipan(divination.lines, timeInfo);
        return window.LiuyaoEngine.renderPaipan(paipan);
    }

    function getLevelClass(level) {
        const map = { '上上': 'best', '上吉': 'great', '中吉': 'good', '中平': 'neutral', '中凶': 'bad', '下下': 'worst' };
        return map[level] || 'neutral';
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    return { performDivination, renderResult, getCurrentResult: () => currentResult };
})();

window.Divination = Divination;
