# -*- coding: utf-8 -*-
import fitz
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PDF_FOLDER = os.path.join(BASE_DIR, "tài liệu", "240 Câu KANJI N3")
SCRATCH_DIR = r"C:\Users\duong\.gemini\antigravity\brain\1d1c2086-9e3f-4b92-b196-5e7109baee86\scratch"
os.makedirs(SCRATCH_DIR, exist_ok=True)

FILES = [
    (1, "Kanji N3 (60 câu - 1).pdf"),
    (2, "Kanji N3 (60 câu - 2).pdf"),
    (3, "Kanji N3 (60 câu - 3).pdf"),
    (4, "Kanji N3 (60 câu - 4).pdf"),
]

# Also map Japanese compatibility ideographs (CJK Compatibility Ideographs / Kangxi Radicals) to standard Kanji
KANGXI_FIX = str.maketrans({
    "⾒": "見", "⾎": "血", "⺟": "母", "⾝": "身", "⻑": "長", "⽅": "方", "⽴": "立",
    "⻭": "歯", "⽂": "文", "⼒": "力", "⼤": "大", "⼈": "人", "⼝": "口", "⼀": "一",
    "⼆": "二", "⼗": "十", "⼦": "子", "⽊": "木", "⾦": "金", "⾛": "走", "⽉": "月",
    "⾞": "車", "⼊": "入", "⼯": "工", "⾃": "自", "⼼": "心", "⽌": "止", "⼭": "山",
    "⽥": "田", "⽇": "日", "⽕": "火", "⽔": "水", "⼟": "土", "⾵": "風", "⾬": "雨",
    "⾷": "食", "⾸": "首", "⾺": "馬", "⿂": "魚", "⿃": "鳥", "⿊": "黒", "⽩": "白",
    "⽬": "目", "⽯": "石", "⽰": "示", "⽵": "竹", "⽶": "米", "⽷": "糸", "⽿": "耳",
    "⾁": "肉", "⾍": "虫", "⾏": "行", "⾐": "衣", "⾔": "言", "⾕": "谷", "⾖": "豆",
    "⾙": "貝", "⾚": "赤", "⾜": "足", "⾟": "辛", "⾠": "辰", "⾣": "酉", "⾥": "里",
    "⾨": "門", "⾪": "隶", "⾬": "雨", "⻘": "青", "⾮": "非", "⾯": "面", "⾰": "革",
    "⾳": "音", "⾴": "頁", "⾶": "飛", "⾼": "高", "⻤": "鬼", "⻨": "麦", "⻩": "黄",
    "⻫": "斉", "⻯": "竜", "⼃": "ノ", "⼅": "亅", "⼆": "二", "⼇": "亠", "⼈": "人",
    "⼉": "儿", "⼊": "入", "⼋": "八", "⼌": "冂", "⼍": "冖", "⼎": "冫", "⼏": "几",
    "⼐": "凵", "⼑": "刀", "⼒": "力", "⼓": "勹", "⼔": "匕", "⼕": "匚", "⼖": "匸",
    "⼗": "十", "⼘": "卜", "⼙": "卩", "⼚": "厂", "⼛": "厶", "⼜": "又", "⼝": "口",
    "⼞": "囗", "⼟": "土", "⼠": "士", "⼡": "夂", "⼢": "夊", "⼣": "夕", "⼤": "大",
    "⼥": "女", "⼦": "子", "⼧": "宀", "⼨": "寸", "⼩": "小", "⼪": "尢", "⼫": "尸",
    "⼬": "屮", "⼭": "山", "⼮": "川", "⼯": "工", "⼰": "己", "⼱": "巾", "⼲": "干",
    "⼳": "幺", "⼴": "广", "⼵": "廴", "⼶": "廾", "⼷": "弋", "⼸": "弓", "⼹": "彐",
    "⼺": "彡", "⼻": "彳", "⼼": "心", "⼽": "戈", "⼾": "戸", "⼿": "手", "⽀": "支",
    "⽁": "攵", "⽂": "文", "⽃": "斗", "⽄": "斤", "⽅": "方", "⽆": "无", "⽇": "日",
    "⽈": "曰", "⽉": "月", "⽊": "木", "⽋": "欠", "⽌": "止", "⽍": "歹", "⽎": "殳",
    "⽏": "毋", "⽐": "比", "⽑": "毛", "⽒": "氏", "⽓": "气", "⽔": "水", "⽕": "火",
    "⽖": "爪", "⽗": "父", "⽘": "爻", "⽙": "爿", "⽚": "片", "⽛": "牙", "⽜": "牛",
    "⽝": "犬", "⽞": "玄", "⽟": "玉", "⽠": "瓜", "⽡": "瓦", "⽢": "甘", "⽣": "生",
    "⽤": "用", "⽥": "田", "⽦": "疋", "⽧": "疒", "⽨": "癶", "⽩": "白", "⽪": "皮",
    "⽫": "皿", "⽬": "目", "⽭": "矛", "⽮": "矢", "⽯": "石", "⽰": "示", "⽱": "禸",
    "⽲": "禾", "⽳": "穴", "⽴": "立", "⽵": "竹", "⽶": "米", "⽷": "糸", "⽸": "缶",
    "⽹": "网", "⽺": "羊", "⽻": "羽", "⽼": "老", "⽽": "而", "⽾": "耒", "⽿": "耳",
    "⾀": "聿", "⾁": "肉", "⾂": "臣", "⾃": "自", "⾄": "至", "⾅": "臼", "⾆": "舌",
    "⾇": "舛", "⾈": "舟", "⾉": "艮", "⾊": "色", "艸": "艹", "⾌": "虍", "⾍": "虫",
    "⾎": "血", "⾏": "行", "⾐": "衣", "⾑": "襾", "⾒": "見", "⾓": "角", "⾔": "言",
    "⾕": "谷", "⾖": "豆", "⾗": "豕", "⾘": "豸", "⾙": "貝", "⾚": "赤", "⾛": "走",
    "⾜": "足", "⾝": "身", "⾞": "車", "⾟": "辛", "⾠": "辰", "⾡": "辵", "⾢": "邑",
    "⾣": "酉", "⾤": "采", "⾥": "里", "⾦": "金", "⻑": "長", "⾨": "門", "⾩": "阜",
    "⾪": "隶", "⾫": "隹", "⾬": "雨", "⾭": "青", "⾮": "非", "⾯": "面", "⾰": "革",
    "⾱": "韋", "⾲": "韭", "⾳": "音", "⾴": "頁", "⾵": "風", "⾶": "飛", "⾷": "食",
    "⾸": "首", "⾹": "香", "⾺": "馬", "⾻": "骨", "⾼": "高", "⾽": "髟", "⾾": "鬥",
    "⾿": "鬯", "⿀": "鬲", "⿁": "鬼", "⿂": "魚", "⿃": "鳥", "⿄": "鹵", "⿅": "鹿",
    "⿆": "麦", "⿇": "麻", "⿈": "黄", "⿉": "黍", "⿊": "黒", "⿋": "黹", "⿌": "黽",
    "⿍": "鼎", "⿎": "鼓", "⿏": "鼠", "⿐": "鼻", "⿑": "齊", "⿒": "歯", "⿓": "龍",
    "⿔": "亀", "⿕": "龠"
})


def extract_session(session_num, fname):
    doc = fitz.open(os.path.join(PDF_FOLDER, fname))
    lines = []
    for pno, page in enumerate(doc):
        underlines = []
        for d in page.get_drawings():
            r = d["rect"]
            if r.height < 4.5 and r.width > 4:
                underlines.append(r)

        d_dict = page.get_text("rawdict")
        # Group lines by y-coordinate because some PDF lines break spans across blocks
        page_items = []
        for b in d_dict["blocks"]:
            if b["type"] != 0:
                continue
            for line in b["lines"]:
                spans_main = [s for s in line["spans"] if s["size"] >= 7.5]
                if not spans_main:
                    continue
                y_mid = (line["bbox"][1] + line["bbox"][3]) / 2
                x0 = line["bbox"][0]
                text = ""
                for s in spans_main:
                    for ch in s["chars"]:
                        c = ch["c"].translate(KANGXI_FIX)
                        cx0, cy0, cx1, cy1 = ch["bbox"]
                        cx_mid = (cx0 + cx1) / 2
                        is_ul = False
                        for ur in underlines:
                            if (ur.x0 - 2.5 <= cx_mid <= ur.x1 + 2.5) and (cy1 - 4.5 <= ur.y0 <= cy1 + 6.5):
                                is_ul = True
                                break
                        if is_ul and c.strip():
                            text += f"[[{c}]]"
                        else:
                            text += c
                text = text.replace("]][[", "").strip()
                if text:
                    page_items.append((y_mid, x0, text))

        # Sort by y_mid (bucketed within 4pt), then x0
        page_items.sort(key=lambda item: (round(item[0] / 4.0), item[1]))
        merged = []
        for y_mid, x0, txt in page_items:
            if merged and abs(merged[-1][0] - y_mid) < 5.5:
                merged[-1][1] += " " + txt
            else:
                merged.append([y_mid, txt])

        for _, txt in merged:
            lines.append(txt.replace("]][[", "").strip())

    # Parse into questions
    cur_mondai = 1
    qs = []
    i = 0
    while i < len(lines):
        t = lines[i]
        t_clean = t.replace("[[", "").replace("]]", "")
        if ("問題" in t_clean and ("漢字で" in t_clean or re.search(r"問題\s*[2２]", t_clean))):
            cur_mondai = 2
            i += 1
            continue
        if ("問題" in t_clean and ("読み方" in t_clean or re.search(r"問題\s*[1１]", t_clean))):
            cur_mondai = 1
            i += 1
            continue

        # Match question start: "1）..." or "1) ..." or "1．..." (ignore "1. opt 2. opt")
        m = re.match(r"^(\d{1,2})\s*[）\)]\s*(.+)$", t_clean)
        if m:
            q_num = int(m.group(1))
            # Recover underlined version from t
            q_body = re.sub(r"^(\d{1,2})\s*[）\)]\s*", "", t).strip()
            j = i + 1
            opt_text = ""
            while j < len(lines):
                nt = lines[j]
                nt_clean = nt.replace("[[", "").replace("]]", "")
                if re.match(r"^\d{1,2}\s*[）\)]", nt_clean) or "問題" in nt_clean or "ありがとう" in nt_clean:
                    break
                if re.match(r"^\d+$", nt_clean):
                    j += 1
                    continue
                if re.match(r"^[1１]\s*[\.\．]", nt_clean) or opt_text:
                    opt_text += " " + nt_clean
                else:
                    q_body += " " + nt
                j += 1

            opt_norm = opt_text.translate(str.maketrans("１２３４．", "1234."))
            # Parse options 1. ... 2. ... 3. ... 4. ...
            opts = re.findall(r"[1-4]\s*\.\s*(.+?)(?=\s+[1-4]\s*\.|$)", opt_norm.strip())
            opts = [o.strip() for o in opts]
            # Extract hints like *Gợi ý:...
            hint = ""
            hint_m = re.search(r"([＊\*]\s*Gợi ý.*)$", q_body.replace("[[", "").replace("]]", ""))
            if hint_m:
                hint = hint_m.group(1).strip()
                q_body = re.sub(r"[＊\*]\s*Gợi ý.*$", "", q_body).strip()
            uls = re.findall(r"\[\[(.*?)\]\]", q_body)
            qs.append({
                "id": f"k240_s{session_num}_q{q_num}",
                "session": session_num,
                "num": q_num,
                "mondai": cur_mondai,
                "sentence_raw": q_body,
                "underlined": uls,
                "options": opts,
                "hint": hint
            })
            i = j
        else:
            i += 1
    return qs


def main():
    all_qs = []
    anomalies = []
    for s_num, fname in FILES:
        qs = extract_session(s_num, fname)
        m1 = sum(1 for q in qs if q["mondai"] == 1)
        m2 = sum(1 for q in qs if q["mondai"] == 2)
        print(f"Session {s_num}: {len(qs)} questions (Mondai 1: {m1}, Mondai 2: {m2})")
        for q in qs:
            if len(q["options"]) != 4 or len(q["underlined"]) != 1:
                anomalies.append(q)
        all_qs.extend(qs)

    print(f"TOTAL EXTRACTED: {len(all_qs)} | ANOMALIES: {len(anomalies)}")
    for a in anomalies:
        print("  ANOMALY:", a["id"], "opts:", len(a["options"]), "ul:", a["underlined"], "raw:", a["sentence_raw"][:60])

    out_path = os.path.join(SCRATCH_DIR, "kanji_240_extracted.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(all_qs, f, ensure_ascii=False, indent=2)
    compact_path = os.path.join(SCRATCH_DIR, "kanji_240_compact.txt")
    with open(compact_path, "w", encoding="utf-8") as f:
        for q in all_qs:
            dup = " [DUP!]" if len(set(q["options"])) < 4 else ""
            ul = q["underlined"][0] if q["underlined"] else ""
            f.write(f"{q['id']}|M{q['mondai']}|{q['sentence_raw']}|UL={ul}|OPTS={' / '.join(q['options'])}{dup}\n")
    print("Saved extracted JSON and compact TXT to scratch.")


if __name__ == "__main__":
    main()
