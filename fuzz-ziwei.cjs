// 紫微引擎 vs iztro 模糊比对
const fs = require('fs');
const { astro } = require('iztro');

global.window = {};
eval(fs.readFileSync('/home/user/Claude-code/js/lunar.js', 'utf8'));
eval(fs.readFileSync('/home/user/Claude-code/js/ziwei-engine.js', 'utf8'));
const Engine = global.window.ZiweiEngine;

// 简单可复现伪随机
let seed = 987654321;
function rnd(n) { seed = (seed * 1103515245 + 12345) % 2147483648; return seed % n; }

const fails = {};
function fail(field, msg) {
    fails[field] = fails[field] || [];
    if (fails[field].length < 5) fails[field].push(msg);
    fails[field].count = (fails[field].count || 0) + 1;
}

const ALL_MINOR = ['文昌','文曲','左辅','右弼','天魁','天钺','禄存','天马','擎羊','陀罗','火星','铃星','地空','地劫'];

let total = 0;
const N = 2000;
for (let i = 0; i < N; i++) {
    const y = 1940 + rnd(81);
    const m = 1 + rnd(12);
    const d = 1 + rnd(28);
    const hour = rnd(24);
    const gender = rnd(2) === 0 ? '男' : '女';
    const dateStr = `${y}-${m}-${d}`;

    const timeIndex = global.window.Lunar.getTimeIndex(hour);
    let ref;
    try {
        ref = astro.bySolar(dateStr, timeIndex, gender, true, 'zh-CN');
    } catch (e) { continue; }
    total++;

    const mine = Engine.fullChart({ year: y, month: m, day: d, hour, gender });
    const tag = `${dateStr} h${hour} ${gender}`;

    // 五行局
    if (mine.fiveElements.name !== ref.fiveElementsClass) {
        fail('五行局', `${tag}: mine=${mine.fiveElements.name} ref=${ref.fiveElementsClass}`);
    }
    // 命宫身宫
    const refSoul = ref.palace('命宫');
    const refBody = ref.palace('身宫');
    if (mine.soulBranch !== refSoul.earthlyBranch) {
        fail('命宫', `${tag}: mine=${mine.soulBranch} ref=${refSoul.earthlyBranch}`);
    }
    if (mine.bodyBranch !== refBody.earthlyBranch) {
        fail('身宫', `${tag}: mine=${mine.bodyBranch} ref=${refBody.earthlyBranch}`);
    }

    // 主星位置 + 四化 / 辅星位置 / 宫干 / 宫名 / 大限
    const myByBranch = {};
    for (const pl of mine.palaces) myByBranch[pl.branch] = pl;

    for (const rp of ref.palaces) {
        const mp = myByBranch[rp.earthlyBranch];
        // 宫名
        const refName = rp.name === '仆役' || rp.name === '交友' ? '仆役' : rp.name;
        const myName = mp.name.replace('宫', '');
        if (myName !== refName && mp.name !== rp.name) {
            fail('宫名', `${tag} ${rp.earthlyBranch}: mine=${mp.name} ref=${rp.name}`);
        }
        // 宫干
        if (mp.stem !== rp.heavenlyStem) {
            fail('宫干', `${tag} ${rp.earthlyBranch}: mine=${mp.stem} ref=${rp.heavenlyStem}`);
        }
        // 主星集合+四化
        const refMajor = rp.majorStars.filter(s => s.type === 'major').map(s => s.name + (s.mutagen || '')).sort().join(',');
        const myMajor = mp.majorStars.map(s => s.name + (s.mutagen || '')).sort().join(',');
        if (refMajor !== myMajor) {
            fail('主星', `${tag} ${rp.earthlyBranch}: mine=[${myMajor}] ref=[${refMajor}]`);
        }
        // 辅星（六吉+禄存天马+六煞）集合+四化
        const refMinor = rp.minorStars.filter(s => ALL_MINOR.includes(s.name)).map(s => s.name + (s.mutagen || '')).sort().join(',');
        const myMinor = mp.luckyStars.map(s => s.name + (s.mutagen || '')).concat(mp.maleficStars).sort().join(',');
        if (refMinor !== myMinor) {
            fail('辅星', `${tag} ${rp.earthlyBranch}: mine=[${myMinor}] ref=[${refMinor}]`);
        }
        // 大限
        if (rp.decadal && (mp.decadal.start !== rp.decadal.range[0] || mp.decadal.end !== rp.decadal.range[1])) {
            fail('大限', `${tag} ${rp.earthlyBranch}: mine=${mp.decadal.start}-${mp.decadal.end} ref=${rp.decadal.range[0]}-${rp.decadal.range[1]}`);
        }
    }
}

console.log(`total charts compared: ${total}/${N}`);
const fields = Object.keys(fails);
if (fields.length === 0) {
    console.log('ALL PASS ✓ (五行局/命宫/身宫/宫名/宫干/主星/四化/辅星/大限)');
} else {
    for (const f of fields) {
        console.log(`FAIL [${f}] x${fails[f].count}:`);
        fails[f].slice(0, 5).forEach(m => console.log('  ' + m));
    }
    process.exit(1);
}
