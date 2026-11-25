# -*- coding: utf-8 -*-
import fitz
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8")

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PDF_FOLDER = os.path.join(BASE_DIR, "tài liệu", "80 Cặp Từ Đồng Nghĩa JLPT N3")
SCRATCH_DIR = r"C:\Users\duong\.gemini\antigravity\brain\1d1c2086-9e3f-4b92-b196-5e7109baee86\scratch"
os.makedirs(SCRATCH_DIR, exist_ok=True)

# Reuse Kangxi radical fix from extract_kanji_240
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from extract_kanji_240 import KANGXI_FIX

FILES = [
    (1, "Đồng Nghĩa N3 - Bài 1.pdf"),
    (2, "Đồng Nghĩa N3 - Bài 2.pdf"),
]


def extract_synonym_pdf(part_num, fname):
    doc = fitz.open(os.path.join(PDF_FOLDER, fname))
    lines = []
    for pno, page in enumerate(doc):
        underlines = []
        for d in page.get_drawings():
            r = d["rect"]
            if r.height < 4.5 and r.width > 4:
                underlines.append(r)

        d_dict = page.get_text("rawdict")
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

        page_items.sort(key=lambda item: (round(item[0] / 4.0), item[1]))
        merged = []
        for y_mid, x0, txt in page_items:
            if merged and abs(merged[-1][0] - y_mid) < 5.5:
                merged[-1][1] += " " + txt
            else:
                merged.append([y_mid, txt])

        for _, txt in merged:
            lines.append(txt.replace("]][[", "").strip())

    qs = []
    i = 0
    while i < len(lines):
        t = lines[i]
        t_clean = t.replace("[[", "").replace("]]", "")
        if "問題" in t_clean or "ありがとう" in t_clean:
            i += 1
            continue
        m = re.match(r"^(\d{1,2})\s*[）\)]\s*(.+)$", t_clean)
        if m:
            q_num = int(m.group(1))
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
            # Note: options can contain numbers like "1万円" so match option markers 1. 2. 3. 4. strictly
            opts = re.findall(r"(?:^|\s)[1-4]\s*\.\s*(.+?)(?=\s+[1-4]\s*\.|$)", opt_norm.strip())
            opts = [o.strip() for o in opts]
            uls = re.findall(r"\[\[(.*?)\]\]", q_body)
            qs.append({
                "id": f"syn_p{part_num}_q{q_num}",
                "part": part_num,
                "num": q_num,
                "sentence_raw": re.sub(r"\s{2,}", " ", q_body).strip(),
                "underlined": uls,
                "options": opts
            })
            i = j
        else:
            i += 1
    return qs


def main():
    all_qs = []
    anomalies = []
    for p_num, fname in FILES:
        qs = extract_synonym_pdf(p_num, fname)
        print(f"Part {p_num}: {len(qs)} questions")
        for q in qs:
            if len(q["options"]) != 4 or len(q["underlined"]) != 1:
                anomalies.append(q)
        all_qs.extend(qs)

    print(f"TOTAL EXTRACTED: {len(all_qs)} | ANOMALIES: {len(anomalies)}")
    for a in anomalies:
        print("  ANOMALY:", a["id"], "opts:", len(a["options"]), "ul:", a["underlined"], "raw:", a["sentence_raw"][:60])

    with open(os.path.join(SCRATCH_DIR, "synonym_80_extracted.json"), "w", encoding="utf-8") as f:
        json.dump(all_qs, f, ensure_ascii=False, indent=2)

    compact_path = os.path.join(SCRATCH_DIR, "synonym_80_compact.txt")
    with open(compact_path, "w", encoding="utf-8") as f:
        for q in all_qs:
            ul = q["underlined"][0] if q["underlined"] else ""
            f.write(f"{q['id']}|{q['sentence_raw']}|UL={ul}|OPTS={' / '.join(q['options'])}\n")
    print("Saved synonym_80_extracted.json & compact TXT.")


if __name__ == "__main__":
    main()
