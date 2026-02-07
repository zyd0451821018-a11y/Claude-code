#!/usr/bin/env python3
"""Generate Mark&Lona China Strategy PDF report with Chinese font support."""

from fpdf import FPDF
import os

class StrategyPDF(FPDF):
    def __init__(self):
        super().__init__()
        # Register WenQuanYi Zen Hei font for Chinese support
        self.add_font("WenQuanYi", "", "/usr/share/fonts/truetype/wqy/wqy-zenhei.ttc", uni=True)
        self.add_font("WenQuanYi", "B", "/usr/share/fonts/truetype/wqy/wqy-zenhei.ttc", uni=True)
        self.set_auto_page_break(auto=True, margin=20)

    def header(self):
        if self.page_no() > 1:
            self.set_font("WenQuanYi", "B", 8)
            self.set_text_color(140, 140, 140)
            self.cell(0, 8, "Mark&Lona 中国市场三年全面策略 (2026-2028)", align="C")
            self.ln(4)
            self.set_draw_color(200, 200, 200)
            self.line(10, self.get_y(), 200, self.get_y())
            self.ln(6)

    def footer(self):
        self.set_y(-15)
        self.set_font("WenQuanYi", "", 8)
        self.set_text_color(160, 160, 160)
        self.cell(0, 10, f"第 {self.page_no()} 页", align="C")

    def title_page(self):
        self.add_page()
        self.ln(60)
        # Brand accent bar
        self.set_fill_color(30, 30, 30)
        self.rect(10, 55, 190, 3, "F")
        self.ln(10)
        self.set_font("WenQuanYi", "B", 28)
        self.set_text_color(30, 30, 30)
        self.cell(0, 15, "Mark&Lona", ln=True, align="C")
        self.set_font("WenQuanYi", "B", 22)
        self.cell(0, 14, "中国市场三年全面策略", ln=True, align="C")
        self.set_font("WenQuanYi", "", 16)
        self.set_text_color(100, 100, 100)
        self.cell(0, 12, "2026 - 2028", ln=True, align="C")
        self.ln(10)
        self.set_fill_color(30, 30, 30)
        self.rect(80, self.get_y(), 50, 1, "F")
        self.ln(15)
        self.set_font("WenQuanYi", "", 11)
        self.set_text_color(120, 120, 120)
        self.cell(0, 8, "基于品牌全球战略、中国高尔夫服饰市场竞争格局、", ln=True, align="C")
        self.cell(0, 8, "奢侈品消费趋势及社交媒体生态的综合研判", ln=True, align="C")
        self.ln(30)
        self.set_font("WenQuanYi", "", 10)
        self.set_text_color(150, 150, 150)
        self.cell(0, 8, "分析日期：2026年2月  |  版本 v1.0", ln=True, align="C")
        self.cell(0, 8, "CONFIDENTIAL", ln=True, align="C")

    def section_title(self, num, title):
        self.set_font("WenQuanYi", "B", 16)
        self.set_text_color(30, 30, 30)
        self.set_fill_color(30, 30, 30)
        self.rect(10, self.get_y(), 4, 10, "F")
        self.set_x(18)
        self.cell(0, 11, f"{num}  {title}", ln=True)
        self.ln(3)

    def sub_title(self, title):
        self.set_font("WenQuanYi", "B", 13)
        self.set_text_color(50, 50, 50)
        self.cell(0, 10, title, ln=True)
        self.ln(1)

    def sub_sub_title(self, title):
        self.set_font("WenQuanYi", "B", 11)
        self.set_text_color(70, 70, 70)
        self.cell(0, 8, title, ln=True)
        self.ln(1)

    def body_text(self, text):
        self.set_font("WenQuanYi", "", 10)
        self.set_text_color(50, 50, 50)
        self.multi_cell(0, 6.5, text)
        self.ln(2)

    def bullet(self, text, indent=10):
        x = self.get_x()
        self.set_font("WenQuanYi", "", 10)
        self.set_text_color(50, 50, 50)
        self.set_x(x + indent)
        self.cell(5, 6.5, "•")
        self.multi_cell(0, 6.5, text)
        self.ln(1)

    def highlight_box(self, text, bg_r=245, bg_g=245, bg_b=250):
        self.set_fill_color(bg_r, bg_g, bg_b)
        self.set_font("WenQuanYi", "B", 10)
        self.set_text_color(40, 40, 40)
        y_start = self.get_y()
        self.set_x(15)
        self.multi_cell(180, 7, text, fill=True)
        self.ln(3)

    def simple_table(self, headers, data, col_widths=None):
        if col_widths is None:
            col_widths = [190 / len(headers)] * len(headers)
        # Header
        self.set_font("WenQuanYi", "B", 9)
        self.set_fill_color(40, 40, 40)
        self.set_text_color(255, 255, 255)
        for i, h in enumerate(headers):
            self.cell(col_widths[i], 8, h, border=1, fill=True, align="C")
        self.ln()
        # Data
        self.set_font("WenQuanYi", "", 9)
        self.set_text_color(50, 50, 50)
        fill = False
        for row in data:
            if self.get_y() > 265:
                self.add_page()
            if fill:
                self.set_fill_color(248, 248, 248)
            else:
                self.set_fill_color(255, 255, 255)
            for i, cell in enumerate(row):
                self.cell(col_widths[i], 7, str(cell), border=1, fill=True, align="C")
            self.ln()
            fill = not fill
        self.ln(3)


def build_report():
    pdf = StrategyPDF()

    # ---- TITLE PAGE ----
    pdf.title_page()

    # ---- TOC ----
    pdf.add_page()
    pdf.section_title("", "目 录")
    pdf.ln(3)
    toc_items = [
        "一、战略总纲",
        "二、市场环境研判",
        "三、第一年：扎根破圈（2026）",
        "四、第二年：规模扩张（2027）",
        "五、第三年：生态构建（2028）",
        "六、产品策略",
        "七、定价与渠道策略",
        "八、数字营销与社交媒体策略",
        "九、品牌传播与公关策略",
        "十、组织与运营架构",
        "十一、风险管理",
        "十二、KPI 体系与里程碑",
        "十三、财务预测模型",
    ]
    for item in toc_items:
        pdf.set_font("WenQuanYi", "", 11)
        pdf.set_text_color(50, 50, 50)
        pdf.cell(0, 9, f"    {item}", ln=True)
    pdf.ln(5)

    # ====================================================================
    # SECTION 1
    # ====================================================================
    pdf.add_page()
    pdf.section_title("一", "战略总纲")

    pdf.sub_title("1.1 战略愿景")
    pdf.highlight_box(
        "三年目标：到2028年底，Mark&Lona 成为中国市场 Top 3 的高端高尔夫时尚品牌，\n"
        "年营收突破 3.5 亿元人民币，品牌辅助认知度在目标客群中达到 40% 以上。"
    )

    pdf.sub_title("1.2 核心战略定位")
    pdf.body_text(
        '"奢华运动潮流"（Luxury Sport Culture）品类的定义者——不做传统高尔夫品牌，'
        "也不做纯街头潮牌，而是创造一个融合二者的新品类。"
    )
    pdf.bullet("品牌精神：\"Wear the Freedom\" —— 打破规则的勇气")
    pdf.bullet("功能价值：日本制造 · 三维立裁  |  情感价值：骷髅美学 · 个性表达")
    pdf.bullet("双场景覆盖：球场（On-Course）+ 生活方式（Off-Course）")

    pdf.sub_title("1.3 三年战略路线图")
    pdf.simple_table(
        ["阶段", "时间", "主题", "核心目标"],
        [
            ["Y1", "2026", "扎根破圈", "品牌认知建立，首店模型验证"],
            ["Y2", "2027", "规模扩张", "多城市渠道布局，多品牌矩阵引入"],
            ["Y3", "2028", "生态构建", "生活方式平台化，会员体系成熟"],
        ],
        [20, 30, 40, 100],
    )

    pdf.sub_title("1.4 目标客群画像")
    pdf.sub_sub_title("客群 A：高尔夫时尚先锋（占比 40%）")
    pdf.bullet("年龄 28-42 岁 | 年可支配收入 50 万+ | 高尔夫运动参与者，追求球场穿搭时尚感")
    pdf.sub_sub_title("客群 B：潮流生活方式消费者（占比 35%）")
    pdf.bullet("年龄 23-35 岁 | 年可支配收入 20-50 万 | 热衷 Golfcore 穿搭，追求松弛感生活态度")
    pdf.sub_sub_title("客群 C：高端运动跨界消费者（占比 25%）")
    pdf.bullet("年龄 30-50 岁 | 年可支配收入 80 万+ | 高端运动爱好者，注重品牌调性与身份认同")

    # ====================================================================
    # SECTION 2
    # ====================================================================
    pdf.add_page()
    pdf.section_title("二", "市场环境研判")

    pdf.sub_title("2.1 中国高尔夫服饰市场")
    pdf.simple_table(
        ["指标", "数据"],
        [
            ["2024 年市场规模", "14.95 亿元"],
            ["同比增速", "6.86%"],
            ["预计 2028 年规模", "20-25 亿元（CAGR 7-8%）"],
            ["小红书高尔夫穿搭浏览量", "4 亿人次"],
            ["小红书高尔夫兴趣人群", "1,500 万（环比+9%）"],
        ],
        [95, 95],
    )

    pdf.sub_title("2.2 竞争格局")
    pdf.body_text(
        "Mark&Lona 差异化定位：唯一占据「高端定价 × 时尚潮流」象限且具有强烈视觉辨识度（骷髅 Logo）的品牌。"
    )
    pdf.simple_table(
        ["竞品", "中国门店", "优势", "Mark&Lona 对策"],
        [
            ["比音勒芬", "1000+", "渠道深、毛利率 78%", "差异化年轻潮流定位"],
            ["迪桑特 Golf", "80+", "安踏集团资源", "高尔夫时尚纯度优势"],
            ["FILA Golf", "20+", "主品牌认知度高", "骷髅美学强辨识度"],
            ["G/FORE", "3-5", "色彩鲜明同赛道", "木村拓哉亚洲亲和力"],
            ["PIV'VEE", "3-5", "韩系甜美切女性", "男女通吃全品类"],
        ],
        [30, 25, 55, 80],
    )

    pdf.sub_title("2.3 中国奢侈品消费趋势")
    pdf.bullet("年轻化：90% 中国消费者 30 岁前开始购买奢侈品，30 岁以下客群占比近 50%")
    pdf.bullet("体验化：57% 消费者计划增加身心健康、高端出行方面支出")
    pdf.bullet("可持续性：85% 消费者认为可持续性至关重要，42% 愿为此付溢价")
    pdf.bullet("Z 世代：81% 认为奢侈不局限于品牌 Logo，独特标识反成为个性表达工具")

    # ====================================================================
    # SECTION 3
    # ====================================================================
    pdf.add_page()
    pdf.section_title("三", "第一年：扎根破圈（2026）")

    pdf.sub_title("3.1 核心目标")
    pdf.simple_table(
        ["维度", "目标"],
        [
            ["品牌认知", "目标客群辅助认知度 15%"],
            ["营收", "5,000 万 - 8,000 万元"],
            ["门店", "2-3 家直营店"],
            ["会员", "5,000+ 核心会员"],
            ["小红书粉丝", "10 万+"],
        ],
        [50, 140],
    )

    pdf.sub_title("3.2 渠道布局")
    pdf.sub_sub_title("北京国贸旗舰店——打造标杆")
    pdf.bullet("沉浸式体验空间：高尔夫模拟器体验区 + 骷髅 Logo 定制区 + 日本工艺展示墙")
    pdf.bullet("坪效目标：月坪效 8,000-12,000 元/㎡")
    pdf.sub_sub_title("第二家店选址：上海恒隆广场/前滩太古里（2026 Q3）")
    pdf.sub_sub_title("线上渠道启动")
    pdf.simple_table(
        ["平台", "定位", "上线时间"],
        [
            ["天猫旗舰店", "官方主力电商，全品类覆盖", "Q1"],
            ["小红书官方店", "种草即购买，主推限定款", "Q2"],
            ["微信小程序", "私域运营，会员专属权益", "Q2"],
            ["抖音旗舰店", "直播带货+内容电商", "Q4"],
        ],
        [45, 90, 55],
    )

    pdf.sub_title("3.3 品牌破圈三大战役")
    pdf.sub_sub_title("战役一：「SKULL ON THE GREEN」品牌登陆事件（Q1）")
    pdf.bullet("CBD 核心区域巨型骷髅头装置展 + 夜间灯光秀，全网话题目标 1 亿+")
    pdf.sub_sub_title("战役二：「木村拓哉 × 中国」内容共创（Q2）")
    pdf.bullet("邀请木村拓哉来华拍摄品牌大片，选取中国标志性高尔夫球场与城市地标")
    pdf.sub_sub_title("战役三：首发中国限定联名（Q3-Q4）")
    pdf.bullet("与中国潮流设计师（SANKUANZ / Feng Chen Wang）或文化 IP（敦煌/三星堆）联名")
    pdf.bullet("线上线下同步限量发售，48 小时售罄率目标 80%+")

    pdf.sub_title("3.4 会员体系 1.0：SKULL CLUB")
    pdf.simple_table(
        ["等级", "门槛", "核心权益"],
        [
            ["Silver Skull", "消费满 5,000 元", "新品优先购买权、生日礼遇"],
            ["Gold Skull", "消费满 20,000 元", "限量款预购、线下活动邀请"],
            ["Black Skull", "消费满 50,000 元/邀请制", "全球 VIP、高尔夫赛事、私人定制"],
        ],
        [35, 60, 95],
    )

    # ====================================================================
    # SECTION 4
    # ====================================================================
    pdf.add_page()
    pdf.section_title("四", "第二年：规模扩张（2027）")

    pdf.sub_title("4.1 核心目标")
    pdf.simple_table(
        ["维度", "目标"],
        [
            ["品牌认知", "目标客群辅助认知度 30%"],
            ["营收", "1.5 亿 - 2 亿元"],
            ["门店", "6-8 家直营 + 2-3 家买手店"],
            ["会员", "20,000+ 核心会员"],
        ],
        [50, 140],
    )

    pdf.sub_title("4.2 多城市渠道网络")
    pdf.simple_table(
        ["城市", "选址", "类型", "开业"],
        [
            ["深圳", "万象城", "旗舰店", "Q1"],
            ["成都", "SKP/太古里", "标准店", "Q2"],
            ["杭州", "湖滨银泰", "标准店", "Q3"],
            ["三亚", "海棠湾免税城", "度假概念店", "Q3"],
            ["广州", "太古汇", "标准店", "Q4"],
        ],
        [30, 50, 50, 60],
    )

    pdf.sub_sub_title("三亚度假概念店——战略级布局")
    pdf.bullet("海南离岛免税占中国免税市场 95%，免税渠道 + 正价渠道双轨运行")
    pdf.bullet("店内迷你室内推杆体验区 + 三亚限定款（热带元素 × 骷髅头）")

    pdf.sub_title("4.3 多品牌矩阵引入")
    pdf.simple_table(
        ["品牌/系列", "定位", "引入时间", "客单价"],
        [
            ["Mark&Lona 主线", "高端奢华高尔夫", "已有", "2,000-5,000 元"],
            ["Horn Garment", "加州休闲可持续", "Q2", "800-2,000 元"],
            ["gravis golf", "入门级高尔夫时尚", "Q3", "500-1,200 元"],
            ["SEASONLESS", "全年无季节基本款", "Q4", "600-1,500 元"],
        ],
        [45, 55, 30, 60],
    )
    pdf.body_text("三线形成「金字塔型」价格覆盖，争夺不同消费力客群。")

    pdf.sub_title("4.4 球场渠道战略合作")
    pdf.bullet("目标与 10-15 家顶级高尔夫俱乐部建立 Pro Shop 合作（寄售+品牌专区）")
    pdf.bullet("每月举办 1 次 SKULL GOLF DAY：穿搭教学 + 高尔夫入门体验 + 社交酒会")

    pdf.sub_title("4.5 数字化基建升级")
    pdf.bullet("CDP（客户数据平台）：打通全渠道数据，建立 360 度客户画像")
    pdf.bullet("O2O 闭环：线上种草 → 线下体验 → 线上复购；门店 AR 试穿镜")

    # ====================================================================
    # SECTION 5
    # ====================================================================
    pdf.add_page()
    pdf.section_title("五", "第三年：生态构建（2028）")

    pdf.sub_title("5.1 核心目标")
    pdf.simple_table(
        ["维度", "目标"],
        [
            ["品牌认知", "目标客群辅助认知度 40%+"],
            ["营收", "3 亿 - 4 亿元"],
            ["门店", "12-15 家直营 + 5-8 家合作渠道"],
            ["会员", "50,000+，Black Skull 500+"],
            ["品牌价值", "中国高端高尔夫时尚 Top 3"],
        ],
        [50, 140],
    )

    pdf.sub_title("5.2 Mark&Lona HOUSE 体验空间")
    pdf.body_text(
        "选址上海或深圳，300-500㎡独栋空间。参考路易威登「路易号」上海体验空间模式。"
    )
    pdf.simple_table(
        ["区域", "内容"],
        [
            ["Gallery", "品牌历史展、限量艺术品、联名回顾展"],
            ["Lounge", "会员专属休息区，高端咖啡/清酒吧"],
            ["Fitting Studio", "私人定制服务，面料/版型/刺绣个性化"],
            ["Golf Simulator", "TrackMan 高尔夫模拟器"],
            ["Event Space", "品牌活动、KOL 私享会、高尔夫沙龙"],
        ],
        [50, 140],
    )

    pdf.sub_title("5.3 品类扩展")
    pdf.simple_table(
        ["品类", "产品", "战略意义"],
        [
            ["高尔夫球具配件", "球包、球帽、手套、推杆套", "强化高尔夫专业属性"],
            ["生活方式配件", "墨镜、香水、手机壳", "拓展日常触点"],
            ["美妆护肤", "防晒、护肤（COSMETIC 线）", "球场户外场景延伸"],
            ["家居生活", "高尔夫主题家居、车载香薰", "渗透全场景"],
        ],
        [45, 65, 80],
    )

    pdf.sub_title("5.4 可持续发展战略")
    pdf.bullet("Horn Garment：4 个回收塑料瓶制作 1 件衣服")
    pdf.bullet("UP CYCLE 系列：使用回收衣物的胶囊系列，中国首发")
    pdf.bullet("Mark&Lona HOUSE 率先实现碳中和认证")
    pdf.bullet("与得物/红布林合作推出官方二手认证平台")

    pdf.sub_title("5.5 本地化设计创新：China Design Lab")
    pdf.bullet("上海设立设计工作室，招募 2-3 名中国设计师")
    pdf.bullet("方向：水墨风骷髅头、陶瓷/玉石质感配件、中国传统色彩体系")
    pdf.bullet("年度中国限定系列：\"Born in Tokyo, Inspired by China\"")

    pdf.sub_title("5.6 自有赛事：SKULL CUP")
    pdf.bullet("定位：最时尚的业余高尔夫锦标赛")
    pdf.bullet("年度巡回：北京 → 上海 → 深圳 → 三亚")
    pdf.bullet("全程小红书/抖音直播 + 赛后纪录片")

    # ====================================================================
    # SECTION 6
    # ====================================================================
    pdf.add_page()
    pdf.section_title("六", "产品策略")

    pdf.sub_title("6.1 产品金字塔")
    pdf.simple_table(
        ["层级", "占比", "客单价", "定义"],
        [
            ["ICON", "10%", "5,000-15,000 元", "骷髅联名 / 限量款"],
            ["CORE", "50%", "1,500-5,000 元", "主线当季系列"],
            ["ENTRY", "30%", "800-2,000 元", "GENERAL / 基本款"],
            ["ACCESS", "10%", "200-800 元", "配件 / 小物件"],
        ],
        [30, 25, 55, 80],
    )

    pdf.sub_title("6.2 中国市场产品适配")
    pdf.simple_table(
        ["维度", "全球标准线", "中国适配"],
        [
            ["尺码", "日本/欧美尺码", "增加中国体型数据库"],
            ["设计强度", "全系列骷髅元素", "低调骷髅到大胆骷髅完整梯度"],
            ["季节性", "春夏/秋冬两季", "增加早春、盛夏、初秋微季节"],
            ["面料", "日本高性能面料", "增加南方湿热气候速干系列"],
        ],
        [35, 65, 90],
    )

    pdf.sub_title("6.3 联名策略三年路线")
    pdf.simple_table(
        ["年份", "合作方向", "目的"],
        [
            ["2026", "中国潮流设计师 + 文化 IP", "建立「懂中国潮流」认知"],
            ["2027", "奢侈品跨界 + 科技品牌", "圈层渗透"],
            ["2028", "当代艺术家 + 中国高尔夫国家队", "艺术性 + 专业背书"],
        ],
        [25, 80, 85],
    )

    # ====================================================================
    # SECTION 7
    # ====================================================================
    pdf.add_page()
    pdf.section_title("七", "定价与渠道策略")

    pdf.sub_title("7.1 定价策略（比日本官网上浮 15-25%）")
    pdf.simple_table(
        ["品类", "日本价格 (RMB)", "中国建议零售价", "溢价率"],
        [
            ["T 恤 / Polo 衫", "950-1,900", "1,200-2,400", "~25%"],
            ["卫衣/毛衣", "1,900-2,850", "2,400-3,600", "~25%"],
            ["夹克/外套", "2,380-3,810", "2,880-4,800", "~20%"],
            ["裤装/裙装", "1,420-2,380", "1,680-2,880", "~18%"],
            ["配件", "470-950", "580-1,200", "~25%"],
            ["限定/联名", "-", "3,000-15,000", "按稀缺性"],
        ],
        [40, 50, 55, 45],
    )

    pdf.sub_title("7.2 折扣管控")
    pdf.bullet("正价销售期不低于 8 折，季末最低 7 折，暂不开设奥莱渠道")
    pdf.bullet("私域专属：会员早鸟价 9 折，不影响公域价格体系")

    pdf.sub_title("7.3 渠道利润模型（Y3）")
    pdf.simple_table(
        ["渠道", "毛利率目标", "占营收比"],
        [
            ["直营门店", "65-70%", "45%"],
            ["天猫/京东旗舰店", "55-60%", "25%"],
            ["小红书/抖音电商", "50-55%", "10%"],
            ["微信私域", "70-75%", "10%"],
            ["买手店/球场", "40-45%（批发）", "10%"],
        ],
        [70, 60, 60],
    )

    # ====================================================================
    # SECTION 8
    # ====================================================================
    pdf.add_page()
    pdf.section_title("八", "数字营销与社交媒体策略")

    pdf.sub_title("8.1 平台矩阵")
    pdf.simple_table(
        ["平台", "定位", "Y3 KPI"],
        [
            ["小红书", "核心种草阵地", "粉丝 30 万+"],
            ["抖音", "破圈传播+电商", "GMV 3,000 万+"],
            ["微信", "品牌深度+私域入口", "社群 5 万+"],
            ["微博", "话题营销+明星联动", "话题阅读 10 亿+"],
            ["得物", "年轻潮流消费", "月 GMV 500 万+"],
        ],
        [35, 75, 80],
    )

    pdf.sub_title("8.2 KOL 投放金字塔")
    pdf.simple_table(
        ["层级", "规模", "作用", "占比"],
        [
            ["头部 KOL（100 万+粉）", "2-3 位/季", "品牌事件引爆", "20-30%"],
            ["中腰部（10-100 万）", "10-15 位/季", "深度种草+内容共创", "35-40%"],
            ["KOC/素人（1-10 万）", "50-100 位/季", "真实口碑+场景 UGC", "30-45%"],
        ],
        [55, 35, 55, 45],
    )

    pdf.sub_title("8.3 年度 KOL 预算分配")
    pdf.simple_table(
        ["年份", "总预算", "头部", "中腰部", "KOC/素人"],
        [
            ["Y1", "800 万", "30%", "40%", "30%"],
            ["Y2", "1,500 万", "25%", "40%", "35%"],
            ["Y3", "2,500 万", "20%", "35%", "45%"],
        ],
        [25, 40, 40, 45, 40],
    )

    pdf.sub_title("8.4 四大内容支柱")
    pdf.bullet("#SkullOnTheGreen —— 球场穿搭系列：KOL/KOC 各地球场穿搭分享（每周 3-5 篇）")
    pdf.bullet("#WearTheFreedom —— 日常生活方式：城市、旅行、社交场景穿搭（每周 5-8 篇）")
    pdf.bullet("#MadeInTokyo —— 工艺品质系列：面料科技、设计师故事（每月 2-3 篇）")
    pdf.bullet("#SkullCulture —— 品牌文化系列：联名故事、木村拓哉、品牌活动（随事件节奏）")

    pdf.sub_title("8.5 私域运营体系")
    pdf.body_text("公域获客 → 私域沉淀 → 价值转化：")
    pdf.bullet("客单价 5,000+ 消费者配备专属造型顾问（1 对 1 服务）")
    pdf.bullet("按城市+消费等级分群运营，每日 1 条朋友圈，每周 2 次社群互动")
    pdf.bullet("社群专属新品预览、限量款优先购买权")

    # ====================================================================
    # SECTION 9
    # ====================================================================
    pdf.add_page()
    pdf.section_title("九", "品牌传播与公关策略")

    pdf.sub_title("9.1 年度 PR 日历（Y1 示例）")
    pdf.simple_table(
        ["月份", "事件", "传播层级"],
        [
            ["1 月", "天猫旗舰店开业", "行业媒体+社交传播"],
            ["3 月", "SKULL ON THE GREEN 装置展", "全国媒体+社交引爆"],
            ["4 月", "春夏新品发布会", "时尚媒体+KOL"],
            ["5 月", "中国限定联名官宣", "全渠道传播"],
            ["6 月", "木村拓哉中国拍摄", "核弹级社交事件"],
            ["7 月", "上海新店开业", "区域媒体+本地 KOL"],
            ["8 月", "SKULL GOLF DAY 首场", "圈层传播+体验口碑"],
            ["9 月", "秋冬新品发布", "时尚媒体+KOL"],
            ["11 月", "双 11 营销战役", "电商平台联合"],
            ["12 月", "年度回顾+新年限定", "情感营销"],
        ],
        [25, 70, 95],
    )

    pdf.sub_title("9.2 品牌大使体系（Y3 目标）")
    pdf.simple_table(
        ["层级", "人数", "身份", "作用"],
        [
            ["全球代言人", "1", "木村拓哉", "品牌高度"],
            ["中国品牌挚友", "3-5", "明星/顶流 KOL", "社交破圈"],
            ["城市大使", "10-15/城", "高尔夫/生活方式博主", "本地种草"],
            ["SKULL MEMBER", "100+", "核心消费者", "UGC 内容"],
        ],
        [45, 30, 55, 60],
    )

    # ====================================================================
    # SECTION 10
    # ====================================================================
    pdf.add_page()
    pdf.section_title("十", "组织与运营架构")

    pdf.sub_title("10.1 中国区团队规划")
    pdf.simple_table(
        ["阶段", "人数", "核心部门"],
        [
            ["Y1", "20-25 人", "品牌市场(6) + 零售(10) + 电商(4) + 供应链/财务(4)"],
            ["Y2", "35-45 人", "新增 CRM 组(3) + 球场渠道(2) + 门店扩张"],
            ["Y3", "60-80 人", "新增 China Design Lab(5) + HOUSE 运营团队"],
        ],
        [20, 30, 140],
    )

    pdf.sub_title("10.2 合作伙伴生态")
    pdf.simple_table(
        ["领域", "合作类型", "建议合作方"],
        [
            ["运营代理", "初期电商代运营", "宝尊电商/百秋尚美"],
            ["PR 公关", "品牌公关与媒体关系", "罗德/拉法兰集团"],
            ["KOL 管理", "达人投放与管理", "微播易/蝉妈妈"],
            ["物流仓储", "电商履约", "菜鸟/京东物流"],
            ["数据分析", "CDP 与营销分析", "秒针/GrowingIO"],
        ],
        [35, 55, 100],
    )

    pdf.sub_title("10.3 总部与中国区协同")
    pdf.bullet("设计：东京主导，中国区提供本地洞察；Y3 起 Design Lab 拥有中国限定设计权")
    pdf.bullet("营销：中国区拥有社交媒体和本地营销自主权，全球 Campaign 统一调性")
    pdf.bullet("定价：中国区有建议权，总部审批")

    # ====================================================================
    # SECTION 11
    # ====================================================================
    pdf.add_page()
    pdf.section_title("十一", "风险管理")

    pdf.sub_title("11.1 风险矩阵")
    pdf.simple_table(
        ["风险", "可能性", "影响", "应对策略"],
        [
            ["Golfcore 风潮退热", "中", "高", "强化生活方式品牌定位"],
            ["经济下行消费降级", "中", "高", "Horn Garment 下沉缓冲"],
            ["竞品低价狙击", "高", "中", "坚守定价+限量稀缺策略"],
            ["中日关系波动", "低-中", "中-高", "强调 Born in LA 品牌起源"],
            ["木村拓哉代言风险", "低", "高", "构建品牌自有 IP"],
            ["供应链关税风险", "中", "中", "多元化生产基地"],
            ["假货/仿品泛滥", "高", "中", "防伪+得物鉴定+法律维权"],
        ],
        [45, 25, 25, 95],
    )

    pdf.sub_title("11.2 退出/收缩预案")
    pdf.bullet("Y1 营收低于 3,000 万且增长停滞 → 收缩为纯线上 + 1 家旗舰店模式")
    pdf.bullet("Y2 未达 1 亿营收 → 暂停新城市拓展，集中优化已有门店坪效")
    pdf.bullet("始终保留轻资产退出能力：门店优先灵活租约（1+1 或 2+1）")

    # ====================================================================
    # SECTION 12
    # ====================================================================
    pdf.add_page()
    pdf.section_title("十二", "KPI 体系与里程碑")

    pdf.sub_title("12.1 北极星指标")
    pdf.simple_table(
        ["年份", "北极星指标", "目标值"],
        [
            ["Y1", "品牌辅助认知度", "15%"],
            ["Y2", "核心会员数量", "20,000"],
            ["Y3", "会员年均消费金额", "8,000 元"],
        ],
        [30, 80, 80],
    )

    pdf.sub_title("12.2 关键里程碑")
    pdf.simple_table(
        ["时间", "里程碑", "达成标准"],
        [
            ["2026 Q1", "天猫旗舰店上线", "首月 GMV 100 万+"],
            ["2026 Q2", "SKULL ON THE GREEN", "全网曝光 1 亿+"],
            ["2026 Q3", "上海店开业", "首月坪效 8,000+"],
            ["2026 Q4", "首个中国限定联名", "48h 售罄率 80%+"],
            ["2027 Q2", "深圳+成都双店", "累计门店 6 家"],
            ["2027 Q4", "年度营收达 1.5 亿", "同比增长 100%+"],
            ["2028 Q2", "Mark&Lona HOUSE", "月均到店 3,000+"],
            ["2028 Q3", "SKULL CUP 首届", "传播 5,000 万+"],
            ["2028 Q4", "年度营收达 3.5 亿", "认知度 40%+"],
        ],
        [30, 60, 100],
    )

    pdf.sub_title("12.3 月度追踪仪表盘")
    pdf.simple_table(
        ["维度", "关键指标", "频率"],
        [
            ["品牌", "社交声量、搜索指数、提及量", "周"],
            ["获客", "新客获取成本 CAC、渠道转化率", "周"],
            ["销售", "GMV、客单价、坪效、电商转化率", "日"],
            ["会员", "新增会员、活跃率、ARPU", "月"],
            ["产品", "售罄率、退货率、SKU 贡献度", "月"],
            ["利润", "毛利率、营销 ROI、门店 P&L", "月"],
        ],
        [30, 100, 60],
    )

    # ====================================================================
    # SECTION 13
    # ====================================================================
    pdf.add_page()
    pdf.section_title("十三", "财务预测模型")

    pdf.sub_title("13.1 三年营收预测")
    pdf.simple_table(
        ["渠道", "Y1 (2026)", "Y2 (2027)", "Y3 (2028)"],
        [
            ["直营门店", "3,000 万", "7,500 万", "1.6 亿"],
            ["电商（天猫/京东）", "1,500 万", "4,500 万", "8,500 万"],
            ["社交电商", "800 万", "2,500 万", "3,500 万"],
            ["私域（微信）", "500 万", "1,500 万", "3,500 万"],
            ["买手店/球场", "700 万", "2,000 万", "3,500 万"],
            ["总营收", "6,500 万", "1.8 亿", "3.5 亿"],
        ],
        [55, 45, 45, 45],
    )

    pdf.sub_title("13.2 三年利润预测")
    pdf.simple_table(
        ["指标", "Y1 (2026)", "Y2 (2027)", "Y3 (2028)"],
        [
            ["总营收", "6,500 万", "1.8 亿", "3.5 亿"],
            ["毛利率", "62%", "64%", "66%"],
            ["毛利", "4,030 万", "1.15 亿", "2.31 亿"],
            ["营销费用", "1,800 万(28%)", "4,000 万(22%)", "6,500 万(19%)"],
            ["租金", "800 万", "2,200 万", "4,000 万"],
            ["人力成本", "600 万", "1,500 万", "2,800 万"],
            ["其他运营", "400 万", "1,000 万", "1,800 万"],
            ["营业利润", "430 万", "2,850 万", "8,200 万"],
            ["营业利润率", "6.6%", "15.8%", "23.4%"],
        ],
        [50, 47, 47, 46],
    )

    pdf.sub_title("13.3 投资回收预期")
    pdf.bullet("Y1：投入期，微利运营，主要目标是品牌建设和模型验证")
    pdf.bullet("Y2：规模效应显现，营销费用率从 28% 降至 22%")
    pdf.bullet("Y3：进入盈利加速期，累计投资回收期约 2.5 年")
    pdf.bullet("三年累计投资：约 5,000 万 - 8,000 万元")
    pdf.bullet("三年累计营收：约 6.3 亿元")
    pdf.bullet("三年累计净利润：约 1.1 亿元")

    # ---- CLOSING PAGE ----
    pdf.add_page()
    pdf.ln(50)
    pdf.set_fill_color(30, 30, 30)
    pdf.rect(10, 55, 190, 3, "F")
    pdf.ln(15)
    pdf.set_font("WenQuanYi", "B", 18)
    pdf.set_text_color(30, 30, 30)
    pdf.cell(0, 12, "Mark&Lona", ln=True, align="C")
    pdf.set_font("WenQuanYi", "", 14)
    pdf.cell(0, 10, "中国市场三年全面策略", ln=True, align="C")
    pdf.ln(10)
    pdf.set_fill_color(30, 30, 30)
    pdf.rect(80, pdf.get_y(), 50, 1, "F")
    pdf.ln(15)
    pdf.set_font("WenQuanYi", "", 11)
    pdf.set_text_color(100, 100, 100)
    pdf.cell(0, 8, "\"高尔夫为骨，潮流为皮\"", ln=True, align="C")
    pdf.cell(0, 8, "用高尔夫建立文化高度，用潮牌语言降低参与门槛，", ln=True, align="C")
    pdf.cell(0, 8, "用产品线分层覆盖双重人群。", ln=True, align="C")
    pdf.ln(20)
    pdf.set_font("WenQuanYi", "", 9)
    pdf.set_text_color(160, 160, 160)
    pdf.cell(0, 8, "Wear the Freedom.", ln=True, align="C")
    pdf.ln(30)
    pdf.set_font("WenQuanYi", "", 8)
    pdf.cell(0, 6, "分析日期：2026 年 2 月  |  版本 v1.0", ln=True, align="C")
    pdf.cell(0, 6, "免责声明：本报告中的市场数据基于公开信息和行业研究，财务预测为基于假设的估算模型。", ln=True, align="C")

    # Save
    output_path = "/home/user/Claude-code/Mark&Lona_中国市场三年策略_2026-2028.pdf"
    pdf.output(output_path)
    return output_path


if __name__ == "__main__":
    path = build_report()
    print(f"PDF generated: {path}")
    print(f"Size: {os.path.getsize(path) / 1024:.1f} KB")
