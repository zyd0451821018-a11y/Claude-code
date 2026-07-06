/**
 * 干支历法、日辰月建、五行旺衰计算引擎
 */

const GanZhi = (() => {
    const TIANGAN = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
    const DIZHI = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];

    const DIZHI_HOUR_RANGES = [
        [23, 1], [1, 3], [3, 5], [5, 7], [7, 9], [9, 11],
        [11, 13], [13, 15], [15, 17], [17, 19], [19, 21], [21, 23]
    ];

    const MONTH_WANGXIANG = {
        '寅': { '旺': '木', '相': '火', '休': '水', '囚': '金', '死': '土' },
        '卯': { '旺': '木', '相': '火', '休': '水', '囚': '金', '死': '土' },
        '辰': { '旺': '土', '相': '金', '休': '火', '囚': '木', '死': '水' },
        '巳': { '旺': '火', '相': '土', '休': '木', '囚': '水', '死': '金' },
        '午': { '旺': '火', '相': '土', '休': '木', '囚': '水', '死': '金' },
        '未': { '旺': '土', '相': '金', '休': '火', '囚': '木', '死': '水' },
        '申': { '旺': '金', '相': '水', '休': '土', '囚': '火', '死': '木' },
        '酉': { '旺': '金', '相': '水', '休': '土', '囚': '火', '死': '木' },
        '戌': { '旺': '土', '相': '金', '休': '火', '囚': '木', '死': '水' },
        '亥': { '旺': '水', '相': '木', '休': '金', '囚': '土', '死': '火' },
        '子': { '旺': '水', '相': '木', '休': '金', '囚': '土', '死': '火' },
        '丑': { '旺': '土', '相': '金', '休': '火', '囚': '木', '死': '水' }
    };

    const BASE_DATE = new Date(2000, 0, 7);
    const BASE_GAN_INDEX = 6;
    const BASE_ZHI_INDEX = 0;

    function daysBetween(d1, d2) {
        const t1 = Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate());
        const t2 = Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate());
        return Math.round((t2 - t1) / 86400000);
    }

    function getDayGanZhi(date) {
        const diff = daysBetween(BASE_DATE, date);
        const ganIdx = ((BASE_GAN_INDEX + diff) % 10 + 10) % 10;
        const zhiIdx = ((BASE_ZHI_INDEX + diff) % 12 + 12) % 12;
        return { gan: TIANGAN[ganIdx], zhi: DIZHI[zhiIdx], full: TIANGAN[ganIdx] + DIZHI[zhiIdx] };
    }

    function getHourZhi(hour) {
        if (hour === 23 || hour === 0) return '子';
        return DIZHI[Math.floor((hour + 1) / 2)];
    }

    function getHourGanZhi(dayGan, hour) {
        const hourZhi = getHourZhi(hour);
        const hourZhiIdx = DIZHI.indexOf(hourZhi);
        const dayGanIdx = TIANGAN.indexOf(dayGan);
        const baseGanIdx = (dayGanIdx % 5) * 2;
        const hourGanIdx = (baseGanIdx + hourZhiIdx) % 10;
        return { gan: TIANGAN[hourGanIdx], zhi: hourZhi, full: TIANGAN[hourGanIdx] + hourZhi };
    }

    function getMonthZhi(month) {
        return DIZHI[(month + 1) % 12];
    }

    function getYearGanZhi(year) {
        const ganIdx = (year - 4) % 10;
        const zhiIdx = (year - 4) % 12;
        return {
            gan: TIANGAN[(ganIdx + 10) % 10],
            zhi: DIZHI[(zhiIdx + 12) % 12],
            full: TIANGAN[(ganIdx + 10) % 10] + DIZHI[(zhiIdx + 12) % 12]
        };
    }

    function getMonthGanZhi(year, month) {
        const yearGan = getYearGanZhi(year).gan;
        const yearGanIdx = TIANGAN.indexOf(yearGan);
        const monthZhi = getMonthZhi(month);
        const monthZhiIdx = DIZHI.indexOf(monthZhi);
        const baseGanIdx = (yearGanIdx % 5) * 2 + 2;
        const monthGanIdx = (baseGanIdx + monthZhiIdx - 2 + 10) % 10;
        return { gan: TIANGAN[monthGanIdx], zhi: monthZhi, full: TIANGAN[monthGanIdx] + monthZhi };
    }

    function getCurrentTimeInfo() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();
        const hour = now.getHours();

        const yearGZ = getYearGanZhi(year);
        const monthGZ = getMonthGanZhi(year, month);
        const dayGZ = getDayGanZhi(now);
        const hourGZ = getHourGanZhi(dayGZ.gan, hour);

        return {
            year, month, day, hour,
            yearGZ, monthGZ, dayGZ, hourGZ,
            hourZhi: getHourZhi(hour),
            monthZhi: getMonthZhi(month)
        };
    }

    function getWangXiang(monthZhi, element) {
        const table = MONTH_WANGXIANG[monthZhi];
        if (!table) return '平';
        for (const [state, el] of Object.entries(table)) {
            if (el === element) return state;
        }
        return '平';
    }

    function isElementStrong(monthZhi, element) {
        const state = getWangXiang(monthZhi, element);
        return state === '旺' || state === '相';
    }

    return {
        TIANGAN, DIZHI,
        getDayGanZhi, getHourZhi, getHourGanZhi,
        getMonthZhi, getYearGanZhi, getMonthGanZhi,
        getCurrentTimeInfo, getWangXiang, isElementStrong,
        MONTH_WANGXIANG
    };
})();

window.GanZhi = GanZhi;
