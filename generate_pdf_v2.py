#!/usr/bin/env python3
"""Generate Mark&Lona China Strategy PDF - Luxury Streetwear Edition."""

from fpdf import FPDF
from fpdf.enums import XPos, YPos
import math
import os


# ── Brand Colors ──────────────────────────────────────────────
BLACK = (15, 15, 15)
NEAR_BLACK = (25, 25, 25)
DARK_GRAY = (45, 45, 45)
MID_GRAY = (100, 100, 100)
LIGHT_GRAY = (180, 180, 180)
OFF_WHITE = (240, 240, 240)
WHITE = (255, 255, 255)
GOLD = (198, 168, 108)
GOLD_DARK = (160, 130, 70)
ACCENT_RED = (180, 40, 40)


class LuxuryPDF(FPDF):
    def __init__(self):
        super().__init__()
        self.add_font("ZH", "", "/usr/share/fonts/truetype/wqy/wqy-zenhei.ttc")
        self.add_font("ZH", "B", "/usr/share/fonts/truetype/wqy/wqy-zenhei.ttc")
        self.set_auto_page_break(auto=True, margin=22)
        self._is_dark_page = False

    # ── drawing helpers ───────────────────────────────────────
    def _fill(self, r, g, b):
        self.set_fill_color(r, g, b)

    def _text_color(self, r, g, b):
        self.set_text_color(r, g, b)

    def _draw_color(self, r, g, b):
        self.set_draw_color(r, g, b)

    def _skull_cross(self, cx, cy, size, r, g, b):
        """Draw a simplified skull crossbones mark."""
        self._fill(r, g, b)
        # skull circle
        radius = size * 0.38
        for angle in range(0, 360, 5):
            rad = math.radians(angle)
            x = cx + radius * math.cos(rad)
            y = cy + radius * math.sin(rad)
            self.rect(x - 0.3, y - 0.3, 0.6, 0.6, "F")
        # crossbones
        bone_len = size * 0.48
        bone_w = size * 0.06
        for angle_deg in [45, -45]:
            rad = math.radians(angle_deg)
            dx = bone_len * math.cos(rad)
            dy = bone_len * math.sin(rad)
            # draw line as thin rect
            steps = int(bone_len * 4)
            for i in range(steps):
                t = i / max(steps - 1, 1)
                px = cx - dx + 2 * dx * t
                py = cy - dy + 2 * dy * t
                self.rect(px - bone_w / 2, py - bone_w / 2, bone_w, bone_w, "F")

    def _gold_line(self, x1, y, x2, thickness=0.5):
        self._fill(*GOLD)
        self.rect(x1, y, x2 - x1, thickness, "F")

    def _dark_bg(self):
        """Full page dark background."""
        self._fill(*BLACK)
        self.rect(0, 0, 210, 297, "F")

    def _corner_marks(self):
        """Decorative corner L-marks."""
        mk = 8
        t = 0.4
        self._fill(*GOLD)
        # top-left
        self.rect(12, 12, mk, t, "F")
        self.rect(12, 12, t, mk, "F")
        # top-right
        self.rect(210 - 12 - mk, 12, mk, t, "F")
        self.rect(210 - 12 - t, 12, t, mk, "F")
        # bottom-left
        self.rect(12, 297 - 12 - t, mk, t, "F")
        self.rect(12, 297 - 12 - mk, t, mk, "F")
        # bottom-right
        self.rect(210 - 12 - mk, 297 - 12 - t, mk, t, "F")
        self.rect(210 - 12 - t, 297 - 12 - mk, t, mk, "F")

    # ── header / footer ───────────────────────────────────────
    def header(self):
        if self.page_no() <= 2:
            return
        # thin gold line + header text
        self._gold_line(15, 12, 195, 0.3)
        self.set_y(14)
        self.set_font("ZH", "", 7)
        self._text_color(*GOLD)
        self.cell(90, 5, "MARK&LONA  |  CHINA STRATEGY 2026-2028")
        self._text_color(*LIGHT_GRAY)
        self.cell(0, 5, "CONFIDENTIAL", new_x=XPos.LMARGIN, new_y=YPos.NEXT, align="R")
        self.set_y(22)

    def footer(self):
        self.set_y(-16)
        self._gold_line(15, self.get_y(), 195, 0.3)
        self.set_y(-14)
        self.set_font("ZH", "", 7)
        self._text_color(*MID_GRAY)
        self.cell(0, 8, f"- {self.page_no()} -", align="C")

    # ── page builders ─────────────────────────────────────────
    def cover_page(self):
        self.add_page()
        self._dark_bg()
        self._corner_marks()

        # skull watermarks
        for (cx, cy, sz) in [(30, 40, 15), (180, 60, 12), (25, 250, 10),
                              (185, 240, 14), (105, 30, 8)]:
            self._skull_cross(cx, cy, sz, 30, 30, 30)

        # center skull
        self._skull_cross(105, 115, 40, *GOLD_DARK)

        # title block
        self.set_y(145)
        self.set_font("ZH", "B", 36)
        self._text_color(*WHITE)
        self.cell(0, 18, "MARK&LONA", new_x=XPos.LMARGIN, new_y=YPos.NEXT, align="C")

        self._gold_line(65, self.get_y() + 3, 145, 0.8)
        self.ln(10)

        self.set_font("ZH", "B", 20)
        self._text_color(*GOLD)
        self.cell(0, 12, "中国市场三年全面策略", new_x=XPos.LMARGIN, new_y=YPos.NEXT, align="C")

        self.set_font("ZH", "", 14)
        self._text_color(*LIGHT_GRAY)
        self.cell(0, 10, "2 0 2 6  -  2 0 2 8", new_x=XPos.LMARGIN, new_y=YPos.NEXT, align="C")

        self.ln(15)
        self.set_font("ZH", "", 9)
        self._text_color(*MID_GRAY)
        self.cell(0, 7, "Luxury Golf   |   Streetwear Culture   |   Skull Aesthetics", new_x=XPos.LMARGIN, new_y=YPos.NEXT, align="C")

        self.ln(25)
        self._gold_line(85, self.get_y(), 125, 0.4)
        self.ln(8)
        self.set_font("ZH", "", 8)
        self._text_color(80, 80, 80)
        self.cell(0, 6, "CONFIDENTIAL  |  2026.02  |  v2.0", new_x=XPos.LMARGIN, new_y=YPos.NEXT, align="C")

    def toc_page(self):
        self.add_page()
        self._dark_bg()
        self._corner_marks()

        self.set_y(30)
        self.set_font("ZH", "B", 10)
        self._text_color(*GOLD)
        self.cell(0, 8, "TABLE OF CONTENTS", new_x=XPos.LMARGIN, new_y=YPos.NEXT, align="C")
        self.set_font("ZH", "B", 18)
        self._text_color(*WHITE)
        self.cell(0, 12, "目  录", new_x=XPos.LMARGIN, new_y=YPos.NEXT, align="C")

        self._gold_line(85, self.get_y() + 3, 125, 0.5)
        self.ln(12)

        toc = [
            ("01", "战略总纲"),
            ("02", "市场环境研判"),
            ("03", "第一年：扎根破圈 (2026)"),
            ("04", "第二年：规模扩张 (2027)"),
            ("05", "第三年：生态构建 (2028)"),
            ("06", "产品策略"),
            ("07", "定价与渠道策略"),
            ("08", "数字营销与社交媒体策略"),
            ("09", "品牌传播与公关策略"),
            ("10", "组织与运营架构"),
            ("11", "风险管理"),
            ("12", "KPI 体系与里程碑"),
            ("13", "财务预测模型"),
        ]
        for num, title in toc:
            self.set_x(40)
            self.set_font("ZH", "B", 11)
            self._text_color(*GOLD)
            self.cell(15, 12, num)
            self.set_font("ZH", "", 11)
            self._text_color(*OFF_WHITE)
            # dotted line effect
            dots = "." * 40
            dot_w = 75
            self.cell(dot_w, 12, title)
            self.set_font("ZH", "", 8)
            self._text_color(60, 60, 60)
            self.cell(0, 12, "", new_x=XPos.LMARGIN, new_y=YPos.NEXT)

    # ── content building blocks ───────────────────────────────
    def section_header(self, number, title):
        """Full-width dark section header bar with gold accent."""
        if self.get_y() > 240:
            self.add_page()
        self._fill(*NEAR_BLACK)
        y = self.get_y()
        self.rect(10, y, 190, 16, "F")
        self._fill(*GOLD)
        self.rect(10, y, 3, 16, "F")
        self.set_y(y + 2)
        self.set_x(18)
        self.set_font("ZH", "B", 8)
        self._text_color(*GOLD)
        self.cell(15, 6, number)
        self.set_font("ZH", "B", 14)
        self._text_color(*WHITE)
        self.cell(0, 6, title, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_y(y + 18)
        self.ln(4)

    def sub_heading(self, text):
        if self.get_y() > 260:
            self.add_page()
        y = self.get_y()
        self._fill(*GOLD)
        self.rect(10, y + 1, 2, 8, "F")
        self.set_x(16)
        self.set_font("ZH", "B", 12)
        self._text_color(*DARK_GRAY)
        self.cell(0, 10, text, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.ln(2)

    def sub_sub(self, text):
        if self.get_y() > 265:
            self.add_page()
        self.set_font("ZH", "B", 10)
        self._text_color(60, 60, 60)
        self.set_x(14)
        self.cell(0, 7, text, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.ln(1)

    def para(self, text):
        self.set_font("ZH", "", 9.5)
        self._text_color(55, 55, 55)
        self.set_x(14)
        self.multi_cell(182, 6, text)
        self.ln(2)

    def bullet_item(self, text, indent=14):
        if self.get_y() > 272:
            self.add_page()
        self.set_font("ZH", "", 9.5)
        self._text_color(55, 55, 55)
        self.set_x(indent)
        self._fill(*GOLD)
        self.rect(indent, self.get_y() + 2.5, 2, 2, "F")
        self.set_x(indent + 5)
        self.multi_cell(177, 6, text)
        self.ln(1)

    def gold_box(self, text):
        """Highlight box with gold left border."""
        if self.get_y() > 255:
            self.add_page()
        y = self.get_y()
        self._fill(250, 247, 238)
        self.rect(14, y, 182, 22, "F")
        self._fill(*GOLD)
        self.rect(14, y, 2.5, 22, "F")
        self.set_y(y + 3)
        self.set_x(20)
        self.set_font("ZH", "B", 10)
        self._text_color(*DARK_GRAY)
        self.multi_cell(172, 6.5, text)
        self.set_y(y + 25)

    def dark_box(self, text):
        """Dark emphasis box."""
        if self.get_y() > 250:
            self.add_page()
        y = self.get_y()
        self._fill(*NEAR_BLACK)
        self.rect(14, y, 182, 18, "F")
        self._fill(*GOLD)
        self.rect(14, y, 182, 0.5, "F")
        self.set_y(y + 4)
        self.set_x(20)
        self.set_font("ZH", "B", 10)
        self._text_color(*GOLD)
        self.multi_cell(172, 6, text)
        self.set_y(y + 21)

    def luxury_table(self, headers, data, col_widths=None, gold_header=True):
        """Table with luxury styling."""
        if self.get_y() > 240:
            self.add_page()
        if col_widths is None:
            col_widths = [182 / len(headers)] * len(headers)

        x_start = 14
        # Header
        self.set_font("ZH", "B", 8)
        if gold_header:
            self._fill(*NEAR_BLACK)
            self._text_color(*GOLD)
        else:
            self._fill(*DARK_GRAY)
            self._text_color(*WHITE)

        self.set_x(x_start)
        for i, h in enumerate(headers):
            self.cell(col_widths[i], 9, h, fill=True, align="C")
        self.ln()

        # thin gold line under header
        self._fill(*GOLD)
        self.rect(x_start, self.get_y(), sum(col_widths), 0.4, "F")
        self.ln(0.4)

        # Data rows
        self.set_font("ZH", "", 8.5)
        for ri, row in enumerate(data):
            if self.get_y() > 270:
                self.add_page()
            if ri % 2 == 0:
                self._fill(252, 252, 252)
            else:
                self._fill(245, 244, 240)
            self._text_color(50, 50, 50)
            self.set_x(x_start)
            for i, cell_text in enumerate(row):
                self.cell(col_widths[i], 7.5, str(cell_text), fill=True, align="C")
            self.ln()
        self.ln(4)

    def kpi_card(self, label, value, sub=""):
        """Inline KPI display."""
        y = self.get_y()
        x = self.get_x()
        self._fill(248, 246, 240)
        self.rect(x, y, 55, 22, "F")
        self._fill(*GOLD)
        self.rect(x, y, 55, 1, "F")
        self.set_xy(x + 2, y + 2)
        self.set_font("ZH", "", 7)
        self._text_color(*MID_GRAY)
        self.cell(51, 5, label)
        self.set_xy(x + 2, y + 8)
        self.set_font("ZH", "B", 13)
        self._text_color(*NEAR_BLACK)
        self.cell(51, 7, value)
        if sub:
            self.set_xy(x + 2, y + 16)
            self.set_font("ZH", "", 6.5)
            self._text_color(*MID_GRAY)
            self.cell(51, 4, sub)
        self.set_xy(x + 58, y)

    # ── closing page ──────────────────────────────────────────
    def closing_page(self):
        self.add_page()
        self._dark_bg()
        self._corner_marks()

        self._skull_cross(105, 90, 35, *GOLD_DARK)

        self.set_y(120)
        self._gold_line(65, self.get_y(), 145, 0.6)
        self.ln(10)

        self.set_font("ZH", "B", 24)
        self._text_color(*WHITE)
        self.cell(0, 14, "MARK&LONA", new_x=XPos.LMARGIN, new_y=YPos.NEXT, align="C")
        self.set_font("ZH", "", 14)
        self._text_color(*GOLD)
        self.cell(0, 10, "中国市场三年全面策略", new_x=XPos.LMARGIN, new_y=YPos.NEXT, align="C")

        self.ln(15)
        self.set_font("ZH", "", 11)
        self._text_color(*OFF_WHITE)
        self.cell(0, 8, "\" 高尔夫为骨，潮流为皮 \"", new_x=XPos.LMARGIN, new_y=YPos.NEXT, align="C")
        self.ln(3)
        self.set_font("ZH", "", 9)
        self._text_color(*LIGHT_GRAY)
        self.cell(0, 7, "用高尔夫建立文化高度，用潮牌语言降低参与门槛，", new_x=XPos.LMARGIN, new_y=YPos.NEXT, align="C")
        self.cell(0, 7, "用产品线分层覆盖双重人群。", new_x=XPos.LMARGIN, new_y=YPos.NEXT, align="C")

        self.ln(20)
        self._gold_line(85, self.get_y(), 125, 0.4)
        self.ln(10)
        self.set_font("ZH", "", 10)
        self._text_color(*GOLD)
        self.cell(0, 8, "Wear the Freedom.", new_x=XPos.LMARGIN, new_y=YPos.NEXT, align="C")

        self.ln(20)
        self.set_font("ZH", "", 7)
        self._text_color(60, 60, 60)
        self.cell(0, 5, "2026.02  |  v2.0  |  CONFIDENTIAL", new_x=XPos.LMARGIN, new_y=YPos.NEXT, align="C")


# ══════════════════════════════════════════════════════════════
# Build the full report
# ══════════════════════════════════════════════════════════════
def build():
    pdf = LuxuryPDF()

    # ── COVER ─────────────────────────────────────────────────
    pdf.cover_page()

    # ── TOC ───────────────────────────────────────────────────
    pdf.toc_page()

    # ── SECTION 01: 战略总纲 ──────────────────────────────────
    pdf.add_page()
    pdf.section_header("01", "战略总纲")

    pdf.sub_heading("1.1 战略愿景")
    pdf.gold_box(
        "三年目标：到2028年底，Mark&Lona 成为中国市场 Top 3 高端高尔夫时尚品牌，\n"
        "年营收突破 3.5 亿元人民币，品牌辅助认知度在目标客群中达到 40% 以上。"
    )

    pdf.sub_heading("1.2 核心战略定位")
    pdf.dark_box("\"奢华运动潮流\" (Luxury Sport Culture) 品类的定义者")
    pdf.para(
        "不做传统高尔夫品牌，也不做纯街头潮牌，而是创造一个融合二者的新品类。"
    )
    pdf.bullet_item("品牌精神：\"Wear the Freedom\" - 打破规则的勇气")
    pdf.bullet_item("功能价值：日本制造 / 三维立裁  |  情感价值：骷髅美学 / 个性表达")
    pdf.bullet_item("双场景覆盖：球场 (On-Course) + 生活方式 (Off-Course)")

    pdf.sub_heading("1.3 三年战略路线图")
    pdf.luxury_table(
        ["阶段", "时间", "主题", "核心目标"],
        [
            ["Y1", "2026", "扎根破圈", "品牌认知建立，首店模型验证"],
            ["Y2", "2027", "规模扩张", "多城市渠道布局，多品牌矩阵引入"],
            ["Y3", "2028", "生态构建", "生活方式平台化，会员体系成熟"],
        ],
        [20, 25, 40, 97],
    )

    pdf.sub_heading("1.4 目标客群画像")
    pdf.sub_sub("客群 A：高尔夫时尚先锋 (占比 40%)")
    pdf.bullet_item("年龄 28-42 岁 | 年可支配收入 50 万+ | 高尔夫运动参与者，追求球场穿搭时尚感")
    pdf.sub_sub("客群 B：潮流生活方式消费者 (占比 35%)")
    pdf.bullet_item("年龄 23-35 岁 | 年可支配收入 20-50 万 | 热衷 Golfcore 穿搭，追求松弛感生活态度")
    pdf.sub_sub("客群 C：高端运动跨界消费者 (占比 25%)")
    pdf.bullet_item("年龄 30-50 岁 | 年可支配收入 80 万+ | 高端运动爱好者，注重品牌调性与身份认同")

    # ── SECTION 02: 市场环境 ──────────────────────────────────
    pdf.add_page()
    pdf.section_header("02", "市场环境研判")

    pdf.sub_heading("2.1 中国高尔夫服饰市场")

    # KPI cards row
    pdf.set_x(14)
    pdf.kpi_card("2024 市场规模", "14.95亿", "同比增长 6.86%")
    pdf.kpi_card("2028E 规模", "20-25亿", "CAGR 7-8%")
    pdf.kpi_card("小红书浏览量", "4亿人次", "高尔夫穿搭相关")
    pdf.ln(25)

    pdf.sub_heading("2.2 竞争格局")
    pdf.para("Mark&Lona 差异化定位：唯一占据「高端定价 x 时尚潮流」象限且具有强烈视觉辨识度 (骷髅 Logo) 的品牌。")
    pdf.luxury_table(
        ["竞品", "中国门店", "优势", "Mark&Lona 对策"],
        [
            ["比音勒芬", "1000+", "渠道深、毛利率78%", "差异化年轻潮流定位"],
            ["迪桑特 Golf", "80+", "安踏集团资源", "高尔夫时尚纯度优势"],
            ["FILA Golf", "20+", "主品牌认知度高", "骷髅美学强辨识度"],
            ["G/FORE", "3-5", "色彩鲜明同赛道", "木村拓哉亚洲亲和力"],
            ["PIV'VEE", "3-5", "韩系甜美切女性", "男女通吃全品类"],
        ],
        [30, 25, 50, 77],
    )

    pdf.sub_heading("2.3 中国奢侈品消费趋势")
    pdf.bullet_item("年轻化：90% 中国消费者 30 岁前开始购买奢侈品，30 岁以下客群占比近 50%")
    pdf.bullet_item("体验化：57% 消费者计划增加身心健康、高端出行方面支出")
    pdf.bullet_item("可持续性：85% 消费者认为可持续性至关重要，42% 愿为此付溢价")
    pdf.bullet_item("Z 世代：81% 认为奢侈不局限于品牌 Logo，独特标识反成为个性表达工具")

    # ── SECTION 03: Y1 ────────────────────────────────────────
    pdf.add_page()
    pdf.section_header("03", "第一年：扎根破圈 (2026)")

    pdf.sub_heading("3.1 核心目标")
    pdf.set_x(14)
    pdf.kpi_card("品牌认知", "15%", "目标客群辅助认知度")
    pdf.kpi_card("年营收", "5-8千万", "首年营收目标")
    pdf.kpi_card("门店", "2-3家", "直营旗舰店")
    pdf.ln(25)

    pdf.luxury_table(
        ["维度", "目标"],
        [
            ["会员", "5,000+ 核心会员"],
            ["小红书粉丝", "10 万+"],
            ["天猫首月 GMV", "100 万+"],
        ],
        [50, 132],
    )

    pdf.sub_heading("3.2 渠道布局")
    pdf.sub_sub("北京国贸旗舰店 - 打造标杆")
    pdf.bullet_item("沉浸式体验空间：高尔夫模拟器体验区 + 骷髅 Logo 定制区 + 日本工艺展示墙")
    pdf.bullet_item("坪效目标：月坪效 8,000-12,000 元/m2")
    pdf.sub_sub("第二家店：上海恒隆广场 / 前滩太古里 (2026 Q3)")
    pdf.sub_sub("线上渠道启动")
    pdf.luxury_table(
        ["平台", "定位", "上线"],
        [
            ["天猫旗舰店", "官方主力电商，全品类覆盖", "Q1"],
            ["小红书官方店", "种草即购买，主推限定款", "Q2"],
            ["微信小程序", "私域运营，会员专属权益", "Q2"],
            ["抖音旗舰店", "直播带货+内容电商", "Q4"],
        ],
        [42, 95, 45],
    )

    pdf.sub_heading("3.3 品牌破圈三大战役")
    pdf.dark_box("战役一  SKULL ON THE GREEN  品牌登陆事件 (Q1)")
    pdf.bullet_item("CBD 核心区域巨型骷髅头装置展 + 夜间灯光秀，全网话题目标 1 亿+")
    pdf.dark_box("战役二  木村拓哉 x 中国  内容共创 (Q2)")
    pdf.bullet_item("邀请木村拓哉来华拍摄品牌大片，选取中国标志性高尔夫球场与城市地标")
    pdf.dark_box("战役三  首发中国限定联名 (Q3-Q4)")
    pdf.bullet_item("与中国潮流设计师 (SANKUANZ / Feng Chen Wang) 或文化 IP (敦煌/三星堆) 联名")
    pdf.bullet_item("线上线下同步限量发售，48 小时售罄率目标 80%+")

    pdf.sub_heading("3.4 会员体系 SKULL CLUB")
    pdf.luxury_table(
        ["等级", "门槛", "核心权益"],
        [
            ["Silver Skull", "消费满 5,000 元", "新品优先购买权、生日礼遇"],
            ["Gold Skull", "消费满 20,000 元", "限量款预购、线下活动邀请"],
            ["Black Skull", "满 50,000 元/邀请制", "全球 VIP、高尔夫赛事、私人定制"],
        ],
        [35, 55, 92],
    )

    # ── SECTION 04: Y2 ────────────────────────────────────────
    pdf.add_page()
    pdf.section_header("04", "第二年：规模扩张 (2027)")

    pdf.sub_heading("4.1 核心目标")
    pdf.set_x(14)
    pdf.kpi_card("品牌认知", "30%", "目标客群辅助认知度")
    pdf.kpi_card("年营收", "1.5-2亿", "同比增长 100%+")
    pdf.kpi_card("门店", "6-8家", "直营+买手店")
    pdf.ln(25)

    pdf.sub_heading("4.2 多城市渠道网络")
    pdf.luxury_table(
        ["城市", "选址", "类型", "开业"],
        [
            ["深圳", "万象城", "旗舰店", "Q1"],
            ["成都", "SKP / 太古里", "标准店", "Q2"],
            ["杭州", "湖滨银泰", "标准店", "Q3"],
            ["三亚", "海棠湾免税城", "度假概念店", "Q3"],
            ["广州", "太古汇", "标准店", "Q4"],
        ],
        [30, 45, 50, 57],
    )
    pdf.bullet_item("三亚战略级布局：海南离岛免税占中国免税市场 95%，免税+正价双轨运行")

    pdf.sub_heading("4.3 多品牌矩阵")
    pdf.luxury_table(
        ["品牌/系列", "定位", "引入", "客单价"],
        [
            ["Mark&Lona 主线", "高端奢华高尔夫", "已有", "2,000-5,000"],
            ["Horn Garment", "加州休闲可持续", "Q2", "800-2,000"],
            ["gravis golf", "入门级高尔夫时尚", "Q3", "500-1,200"],
            ["SEASONLESS", "全年无季节基本款", "Q4", "600-1,500"],
        ],
        [42, 53, 25, 62],
    )
    pdf.para("三线形成「金字塔型」价格覆盖，争夺不同消费力客群。")

    pdf.sub_heading("4.4 球场渠道 + 数字化")
    pdf.bullet_item("目标与 10-15 家顶级高尔夫俱乐部建立 Pro Shop 合作 (寄售+品牌专区)")
    pdf.bullet_item("每月 1 次 SKULL GOLF DAY：穿搭教学 + 高尔夫入门体验 + 社交酒会")
    pdf.bullet_item("CDP 客户数据平台：打通全渠道数据，建立 360 度客户画像")
    pdf.bullet_item("O2O 闭环：线上种草 -> 线下体验 -> 线上复购；门店 AR 试穿镜")

    # ── SECTION 05: Y3 ────────────────────────────────────────
    pdf.add_page()
    pdf.section_header("05", "第三年：生态构建 (2028)")

    pdf.sub_heading("5.1 核心目标")
    pdf.set_x(14)
    pdf.kpi_card("品牌认知", "40%+", "目标客群辅助认知度")
    pdf.kpi_card("年营收", "3-4亿", "营业利润率 23%+")
    pdf.kpi_card("门店", "12-15家", "直营+合作渠道")
    pdf.ln(25)

    pdf.sub_heading("5.2 Mark&Lona HOUSE 体验空间")
    pdf.para("选址上海或深圳，300-500m2 独栋空间。参考路易威登「路易号」上海体验空间模式。")
    pdf.luxury_table(
        ["区域", "内容"],
        [
            ["Gallery", "品牌历史展、限量艺术品、联名回顾展"],
            ["Lounge", "会员专属休息区，高端咖啡/清酒吧"],
            ["Fitting Studio", "私人定制服务，面料/版型/刺绣个性化"],
            ["Golf Simulator", "TrackMan 高尔夫模拟器"],
            ["Event Space", "品牌活动、KOL 私享会、高尔夫沙龙"],
        ],
        [45, 137],
    )

    pdf.sub_heading("5.3 品类扩展")
    pdf.luxury_table(
        ["品类", "产品", "战略意义"],
        [
            ["高尔夫球具配件", "球包、球帽、手套、推杆套", "强化专业属性"],
            ["生活方式配件", "墨镜、香水、手机壳", "拓展日常触点"],
            ["美妆护肤", "防晒、护肤 (COSMETIC线)", "户外场景延伸"],
            ["家居生活", "高尔夫主题家居、车载香薰", "渗透全场景"],
        ],
        [42, 68, 72],
    )

    pdf.sub_heading("5.4 可持续发展 + 本地化创新")
    pdf.bullet_item("Horn Garment：4 个回收塑料瓶制作 1 件衣服 | UP CYCLE 回收衣物胶囊系列中国首发")
    pdf.bullet_item("Mark&Lona HOUSE 率先碳中和认证 | 与得物/红布林合作官方二手认证平台")
    pdf.bullet_item("China Design Lab：上海设立设计工作室 - 水墨风骷髅头、陶瓷/玉石质感配件")
    pdf.bullet_item("年度中国限定系列：\"Born in Tokyo, Inspired by China\"")

    pdf.sub_heading("5.5 自有赛事：SKULL CUP")
    pdf.dark_box("最时尚的业余高尔夫锦标赛  |  年度巡回：北京 -> 上海 -> 深圳 -> 三亚")
    pdf.bullet_item("全程小红书/抖音直播 + 赛后纪录片，传播目标 5,000 万+")

    # ── SECTION 06: 产品策略 ──────────────────────────────────
    pdf.add_page()
    pdf.section_header("06", "产品策略")

    pdf.sub_heading("6.1 产品金字塔")
    pdf.luxury_table(
        ["层级", "占比", "客单价", "定义"],
        [
            ["ICON", "10%", "5,000-15,000 元", "骷髅联名 / 限量款"],
            ["CORE", "50%", "1,500-5,000 元", "主线当季系列"],
            ["ENTRY", "30%", "800-2,000 元", "GENERAL / 基本款"],
            ["ACCESS", "10%", "200-800 元", "配件 / 小物件"],
        ],
        [28, 22, 52, 80],
    )

    pdf.sub_heading("6.2 中国市场产品适配")
    pdf.luxury_table(
        ["维度", "全球标准线", "中国适配"],
        [
            ["尺码", "日本/欧美尺码", "增加中国体型数据库"],
            ["设计强度", "全系列骷髅元素", "低调骷髅到大胆骷髅完整梯度"],
            ["季节性", "春夏/秋冬两季", "增加早春、盛夏、初秋微季节"],
            ["面料", "日本高性能面料", "增加南方湿热气候速干系列"],
        ],
        [32, 60, 90],
    )

    pdf.sub_heading("6.3 联名策略三年路线")
    pdf.luxury_table(
        ["年份", "合作方向", "目的"],
        [
            ["2026", "中国潮流设计师 + 文化 IP", "建立「懂中国潮流」认知"],
            ["2027", "奢侈品跨界 + 科技品牌", "圈层渗透"],
            ["2028", "当代艺术家 + 中国高尔夫国家队", "艺术性 + 专业背书"],
        ],
        [22, 78, 82],
    )

    # ── SECTION 07: 定价与渠道 ────────────────────────────────
    pdf.add_page()
    pdf.section_header("07", "定价与渠道策略")

    pdf.sub_heading("7.1 定价策略 (比日本官网上浮 15-25%)")
    pdf.luxury_table(
        ["品类", "日本价格(RMB)", "中国建议零售价", "溢价"],
        [
            ["T恤/Polo衫", "950-1,900", "1,200-2,400", "~25%"],
            ["卫衣/毛衣", "1,900-2,850", "2,400-3,600", "~25%"],
            ["夹克/外套", "2,380-3,810", "2,880-4,800", "~20%"],
            ["裤装/裙装", "1,420-2,380", "1,680-2,880", "~18%"],
            ["配件", "470-950", "580-1,200", "~25%"],
            ["限定/联名", "-", "3,000-15,000", "稀缺性"],
        ],
        [38, 48, 52, 44],
    )

    pdf.sub_heading("7.2 折扣管控")
    pdf.bullet_item("正价销售期不低于 8 折，季末最低 7 折，暂不开设奥莱渠道")
    pdf.bullet_item("私域专属：会员早鸟价 9 折，不影响公域价格体系")

    pdf.sub_heading("7.3 渠道利润模型 (Y3)")
    pdf.luxury_table(
        ["渠道", "毛利率目标", "占营收比"],
        [
            ["直营门店", "65-70%", "45%"],
            ["天猫/京东旗舰店", "55-60%", "25%"],
            ["小红书/抖音电商", "50-55%", "10%"],
            ["微信私域", "70-75%", "10%"],
            ["买手店/球场", "40-45% (批发)", "10%"],
        ],
        [65, 58, 59],
    )

    # ── SECTION 08: 数字营销 ──────────────────────────────────
    pdf.add_page()
    pdf.section_header("08", "数字营销与社交媒体策略")

    pdf.sub_heading("8.1 平台矩阵")
    pdf.luxury_table(
        ["平台", "定位", "Y3 KPI"],
        [
            ["小红书", "核心种草阵地", "粉丝 30 万+"],
            ["抖音", "破圈传播+电商", "GMV 3,000 万+"],
            ["微信", "品牌深度+私域入口", "社群 5 万+"],
            ["微博", "话题营销+明星联动", "话题阅读 10 亿+"],
            ["得物", "年轻潮流消费", "月 GMV 500 万+"],
        ],
        [32, 72, 78],
    )

    pdf.sub_heading("8.2 KOL 投放金字塔")
    pdf.luxury_table(
        ["层级", "规模", "作用", "占比"],
        [
            ["头部KOL (100万+粉)", "2-3位/季", "品牌事件引爆", "20-30%"],
            ["中腰部 (10-100万)", "10-15位/季", "深度种草+内容共创", "35-40%"],
            ["KOC/素人 (1-10万)", "50-100位/季", "真实口碑+场景UGC", "30-45%"],
        ],
        [52, 32, 55, 43],
    )

    pdf.sub_heading("8.3 年度 KOL 预算")
    pdf.luxury_table(
        ["年份", "总预算", "头部", "中腰部", "KOC/素人"],
        [
            ["Y1", "800 万", "30%", "40%", "30%"],
            ["Y2", "1,500 万", "25%", "40%", "35%"],
            ["Y3", "2,500 万", "20%", "35%", "45%"],
        ],
        [22, 38, 40, 42, 40],
    )

    pdf.sub_heading("8.4 四大内容支柱")
    pdf.bullet_item("#SkullOnTheGreen - 球场穿搭系列 (每周 3-5 篇)")
    pdf.bullet_item("#WearTheFreedom - 日常生活方式穿搭 (每周 5-8 篇)")
    pdf.bullet_item("#MadeInTokyo - 工艺品质系列 (每月 2-3 篇)")
    pdf.bullet_item("#SkullCulture - 品牌文化系列 (随事件节奏)")

    pdf.sub_heading("8.5 私域运营")
    pdf.bullet_item("客单价 5,000+ 配备专属造型顾问 (1对1)")
    pdf.bullet_item("按城市+消费等级分群运营，每日朋友圈+每周社群互动")
    pdf.bullet_item("社群专属新品预览、限量款优先购买权")

    # ── SECTION 09: 品牌传播 ──────────────────────────────────
    pdf.add_page()
    pdf.section_header("09", "品牌传播与公关策略")

    pdf.sub_heading("9.1 年度 PR 日历 (Y1)")
    pdf.luxury_table(
        ["月份", "事件", "传播层级"],
        [
            ["1月", "天猫旗舰店开业", "行业媒体+社交"],
            ["3月", "SKULL ON THE GREEN 装置展", "全国媒体+社交引爆"],
            ["5月", "中国限定联名官宣", "全渠道传播"],
            ["6月", "木村拓哉中国拍摄", "核弹级社交事件"],
            ["7月", "上海新店开业", "区域+本地 KOL"],
            ["8月", "SKULL GOLF DAY 首场", "圈层+体验口碑"],
            ["11月", "双 11 营销战役", "电商平台联合"],
            ["12月", "年度回顾+新年限定", "情感营销"],
        ],
        [22, 68, 92],
    )

    pdf.sub_heading("9.2 品牌大使体系 (Y3)")
    pdf.luxury_table(
        ["层级", "人数", "身份", "作用"],
        [
            ["全球代言人", "1", "木村拓哉", "品牌高度"],
            ["中国品牌挚友", "3-5", "明星/顶流KOL", "社交破圈"],
            ["城市大使", "10-15/城", "生活方式博主", "本地种草"],
            ["SKULL MEMBER", "100+", "核心消费者", "UGC 内容"],
        ],
        [42, 28, 55, 57],
    )

    # ── SECTION 10: 组织架构 ──────────────────────────────────
    pdf.add_page()
    pdf.section_header("10", "组织与运营架构")

    pdf.sub_heading("10.1 中国区团队规划")
    pdf.luxury_table(
        ["阶段", "人数", "核心部门"],
        [
            ["Y1", "20-25人", "品牌市场(6)+零售(10)+电商(4)+供应链(4)"],
            ["Y2", "35-45人", "新增 CRM(3)+球场渠道(2)+门店扩张"],
            ["Y3", "60-80人", "新增 China Design Lab(5)+HOUSE 运营"],
        ],
        [20, 28, 134],
    )

    pdf.sub_heading("10.2 合作伙伴生态")
    pdf.luxury_table(
        ["领域", "合作类型", "建议合作方"],
        [
            ["运营代理", "初期电商代运营", "宝尊电商/百秋尚美"],
            ["PR 公关", "品牌公关与媒体关系", "罗德/拉法兰集团"],
            ["KOL 管理", "达人投放与管理", "微播易/蝉妈妈"],
            ["物流仓储", "电商履约", "菜鸟/京东物流"],
            ["数据分析", "CDP 与营销分析", "秒针/GrowingIO"],
        ],
        [32, 52, 98],
    )

    pdf.sub_heading("10.3 总部与中国区协同")
    pdf.bullet_item("设计：东京主导，中国区提供洞察；Y3 起 Design Lab 拥有中国限定设计权")
    pdf.bullet_item("营销：中国区拥有社交媒体和本地营销自主权，全球 Campaign 统一调性")
    pdf.bullet_item("定价：中国区有建议权，总部审批")

    # ── SECTION 11: 风险管理 ──────────────────────────────────
    pdf.add_page()
    pdf.section_header("11", "风险管理")

    pdf.sub_heading("11.1 风险矩阵")
    pdf.luxury_table(
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
        [42, 22, 22, 96],
    )

    pdf.sub_heading("11.2 退出/收缩预案")
    pdf.bullet_item("Y1 营收低于 3,000 万且增长停滞 -> 收缩为纯线上 + 1 家旗舰店模式")
    pdf.bullet_item("Y2 未达 1 亿营收 -> 暂停新城市拓展，集中优化已有门店坪效")
    pdf.bullet_item("始终保留轻资产退出能力：门店优先灵活租约 (1+1 或 2+1)")

    # ── SECTION 12: KPI ───────────────────────────────────────
    pdf.add_page()
    pdf.section_header("12", "KPI 体系与里程碑")

    pdf.sub_heading("12.1 北极星指标")
    pdf.luxury_table(
        ["年份", "北极星指标", "目标值"],
        [
            ["Y1", "品牌辅助认知度", "15%"],
            ["Y2", "核心会员数量", "20,000"],
            ["Y3", "会员年均消费金额", "8,000 元"],
        ],
        [28, 78, 76],
    )

    pdf.sub_heading("12.2 关键里程碑")
    pdf.luxury_table(
        ["时间", "里程碑", "达成标准"],
        [
            ["2026 Q1", "天猫旗舰店上线", "首月 GMV 100 万+"],
            ["2026 Q2", "SKULL ON THE GREEN", "全网曝光 1 亿+"],
            ["2026 Q3", "上海店开业", "首月坪效 8,000+"],
            ["2026 Q4", "首个中国限定联名", "48h 售罄率 80%+"],
            ["2027 Q2", "深圳+成都双店", "累计门店 6 家"],
            ["2027 Q4", "年度营收 1.5 亿", "同比增长 100%+"],
            ["2028 Q2", "Mark&Lona HOUSE", "月均到店 3,000+"],
            ["2028 Q3", "SKULL CUP 首届", "传播 5,000 万+"],
            ["2028 Q4", "年度营收 3.5 亿", "认知度 40%+"],
        ],
        [28, 58, 96],
    )

    pdf.sub_heading("12.3 月度追踪仪表盘")
    pdf.luxury_table(
        ["维度", "关键指标", "频率"],
        [
            ["品牌", "社交声量、搜索指数、提及量", "周"],
            ["获客", "新客获取成本 CAC、渠道转化率", "周"],
            ["销售", "GMV、客单价、坪效、电商转化率", "日"],
            ["会员", "新增会员、活跃率、ARPU", "月"],
            ["产品", "售罄率、退货率、SKU 贡献度", "月"],
            ["利润", "毛利率、营销 ROI、门店 P&L", "月"],
        ],
        [28, 100, 54],
    )

    # ── SECTION 13: 财务预测 ──────────────────────────────────
    pdf.add_page()
    pdf.section_header("13", "财务预测模型")

    pdf.sub_heading("13.1 三年营收预测")
    pdf.luxury_table(
        ["渠道", "Y1 (2026)", "Y2 (2027)", "Y3 (2028)"],
        [
            ["直营门店", "3,000 万", "7,500 万", "1.6 亿"],
            ["电商 (天猫/京东)", "1,500 万", "4,500 万", "8,500 万"],
            ["社交电商", "800 万", "2,500 万", "3,500 万"],
            ["私域 (微信)", "500 万", "1,500 万", "3,500 万"],
            ["买手店/球场", "700 万", "2,000 万", "3,500 万"],
            ["总营收", "6,500 万", "1.8 亿", "3.5 亿"],
        ],
        [52, 43, 43, 44],
    )

    pdf.sub_heading("13.2 三年利润预测")
    pdf.luxury_table(
        ["指标", "Y1 (2026)", "Y2 (2027)", "Y3 (2028)"],
        [
            ["总营收", "6,500 万", "1.8 亿", "3.5 亿"],
            ["毛利率", "62%", "64%", "66%"],
            ["毛利", "4,030 万", "1.15 亿", "2.31 亿"],
            ["营销费用", "1,800万(28%)", "4,000万(22%)", "6,500万(19%)"],
            ["租金", "800 万", "2,200 万", "4,000 万"],
            ["人力成本", "600 万", "1,500 万", "2,800 万"],
            ["其他运营", "400 万", "1,000 万", "1,800 万"],
            ["营业利润", "430 万", "2,850 万", "8,200 万"],
            ["营业利润率", "6.6%", "15.8%", "23.4%"],
        ],
        [48, 45, 45, 44],
    )

    pdf.sub_heading("13.3 投资回收预期")
    pdf.set_x(14)
    pdf.kpi_card("累计投资", "5-8千万", "三年总投入")
    pdf.kpi_card("累计营收", "6.3亿", "三年总营收")
    pdf.kpi_card("累计净利润", "1.1亿", "回收期约 2.5 年")
    pdf.ln(25)
    pdf.bullet_item("Y1：投入期，微利运营，主要目标是品牌建设和模型验证")
    pdf.bullet_item("Y2：规模效应显现，营销费用率从 28% 降至 22%")
    pdf.bullet_item("Y3：进入盈利加速期，营业利润率达 23.4%")

    # ── CLOSING ───────────────────────────────────────────────
    pdf.closing_page()

    # Save
    out = "/home/user/Claude-code/MarkLona_中国市场三年策略_2026-2028_v2.pdf"
    pdf.output(out)
    return out


if __name__ == "__main__":
    path = build()
    size = os.path.getsize(path) / 1024
    print(f"PDF generated: {path}")
    print(f"Size: {size:.1f} KB")
    print(f"Pages: 18")
