# -*- coding: utf-8 -*-
import json
import os
import re
import sys
from collections import defaultdict

sys.stdout.reconfigure(encoding="utf-8")

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE_DIR, "scripts"))

from kanji_extra_s5 import KANJI_EXTRA_S5
from kanji_extra_s6 import KANJI_EXTRA_S6

OUT_JS = os.path.join(BASE_DIR, "data", "kanji_extra_112_data.js")
K240_JS = os.path.join(BASE_DIR, "data", "kanji_240_data.js")
MERGED_26 = r"C:\Users\duong\.gemini\antigravity\brain\1d1c2086-9e3f-4b92-b196-5e7109baee86\scratch\past_mojigoi\merged_26_exams.json"

K240_LEMMA_MAP = {
    '包んで': '包む', '恋しく': '恋しい', '疑って': '疑う', '回して': '回す',
    '困って': '困る', '困りました': '困る', '生えた': '生える', '疲れました': '疲れる',
    '細かく': '細かい', '表して': '表す', '返しました': '返す', '遅く': '遅い',
    '重ねて': '重ねる', '預け': '預ける', '信じて': '信じる', '借りました': '借りる',
    '冷えて': '冷える', '助けて': '助ける', '固く': '固い', '断った': '断る',
    '比べた': '比べる', '温めました': '温める', '燃えません': '燃える', '現れた': '現れる',
    '眠って': '眠る', '示した': '示す', '笑って': '笑う', '覚えて': '覚える',
    '速く': '速い', '遅れて': '遅れる', '違います': '違う', '配って': '配る',
    '願って': '願う', '焼いて': '焼く', '勝った': '勝つ', '吸った': '吸う',
    '消して': '消す', 'ご自由': '自由', '貸して': '貸す', '追って': '追う',
    '飛んだ': '飛ぶ', '折って': '折る', '短すぎて': '短い', '若かった': '若い',
    '細く': '細い', '根': '木の根', '汚して': '汚す', '汚れた': '汚れる',
    '転んだ': '転ぶ', '払って': '払う', '加えました': '加える', '組んで': '腕を組む',
    '投げて': '投げる', '勤めて': '勤める', '伝えました': '伝える', '換えて': '換える',
    '替えて': '替える', '移りました': '移る', '割れて': '割れる', '降りましょう': '降りる',
    '降りる': '降りる', '泣かないで': '泣く', '当たった': '当たる', '疲れ': '疲れる',
    '申し込み': '申し込む', '測って': '測る', '折れて': '折れる', '逃げて': '逃げる',
    '訳して': '訳す', '表した': '表す', '割って': '割る', '怒られた': '怒る',
}


def norm_exam_lemma(q):
    lem = q["lemma"].strip()
    if q["m"] in (1, 2):
        return {"根": "木の根", "落ちつく": "落ち着く", "受取る": "受け取る"}.get(lem, lem)
    return {
        "整理する": "整理", "避難する": "避難", "配達する": "配達",
        "指導する": "指導", "協力する": "協力", "おかしな": "おかしい",
        "落ちつく": "落ち着く", "受取る": "受け取る",
    }.get(lem, lem)


def fmt_exam_short(code):
    yr, mo = code.split("_")
    return f"T{int(mo)}/{yr}"


def main():
    assert len(KANJI_EXTRA_S5) == 56, f"Expected 56 in S5, got {len(KANJI_EXTRA_S5)}"
    assert len(KANJI_EXTRA_S6) == 56, f"Expected 56 in S6, got {len(KANJI_EXTRA_S6)}"

    # Load 26 real exams frequency map
    all_exams = json.load(open(MERGED_26, encoding="utf-8"))["exams"]
    freq = defaultdict(lambda: {"m1": [], "m2": [], "m345": [], "reading": ""})
    for ex in sorted(all_exams.keys()):
        for q in all_exams[ex]:
            lem = norm_exam_lemma(q)
            m = q["m"]
            if m in (1, 2):
                freq[lem][f"m{m}"].append(ex)
                freq[lem]["reading"] = q["reading"]
            elif q["script"] == "kanji":
                freq[lem]["m345"].append(f"{ex}(M{m})")
                if not freq[lem]["reading"]:
                    freq[lem]["reading"] = q["reading"]

    # Load original 240 Kanji questions
    k240_raw = open(K240_JS, encoding="utf-8").read()
    k240 = json.loads(re.search(r"=\s*(\[\s*\{.*\}\s*\])\s*;", k240_raw, re.S).group(1))

    # Build frequency metadata helper
    def get_freq_meta(lem):
        r = freq.get(lem, {"m1": [], "m2": [], "m345": []})
        c1, c2, c345 = len(r["m1"]), len(r["m2"]), len(r["m345"])
        c12 = c1 + c2
        ctot = c12 + c345
        if c1 and c2:
            dir_type = "both"
            dir_lbl = "Lẫn lộn M1+M2"
        elif c1:
            dir_type = "m1"
            dir_lbl = "M1 (Kanji→Hira)"
        elif c2:
            dir_type = "m2"
            dir_lbl = "M2 (Hira→Kanji)"
        else:
            dir_type = "other"
            dir_lbl = "Đề 2020/2024+"

        parts = []
        if r["m1"]:
            parts.append("M1: " + ", ".join(fmt_exam_short(e) for e in r["m1"]))
        if r["m2"]:
            parts.append("M2: " + ", ".join(fmt_exam_short(e) for e in r["m2"]))
        if r["m345"]:
            parts.append("M3–5: " + ", ".join(f"{fmt_exam_short(x.split('(')[0])}({x.split('(')[1]}" for x in r["m345"]))
        exams_str = " • ".join(parts) if parts else "Tài liệu tổng hợp Kanji N3"

        if c12 >= 2:
            badge = f"🔥 {c12}x đề thật ({dir_lbl})"
        elif ctot >= 2:
            badge = f"🔥 {ctot}x (M1–M5) • {dir_lbl}"
        elif c12 == 1:
            ex_code = (r["m1"] + r["m2"])[0]
            if ex_code.startswith("2025") or ex_code.startswith("2026"):
                badge = f"🆕 Đề mới {fmt_exam_short(ex_code)} • {dir_lbl}"
            else:
                badge = f"📌 Đề {fmt_exam_short(ex_code)} • {dir_lbl}"
        else:
            badge = "📌 Bổ sung kho Kanji N3"

        return {
            "count_m12": c12,
            "count_all": ctot,
            "dir_type": dir_type,
            "dir_lbl": dir_lbl,
            "exams_str": exams_str,
            "badge": badge,
        }

    # Build 112 new Kanji quiz entries
    extra_questions = []
    seen_lemmas = set()
    for ses_num, rows in [(5, KANJI_EXTRA_S5), (6, KANJI_EXTRA_S6)]:
        for row in rows:
            num, mondai, lemma, kanji_form, reading, pre, post, opts, ans, hv, m_vi, s_vi, trap, hint = row
            assert len(opts) == 4, f"S{ses_num}#{num} {lemma}: opts != 4"
            assert 0 <= ans <= 3, f"S{ses_num}#{num} {lemma}: bad ans {ans}"
            assert len(set(opts)) == 4, f"S{ses_num}#{num} {lemma}: duplicate opts {opts}"
            if mondai == 1:
                assert opts[ans] == reading, f"S{ses_num}#{num} {lemma}: M1 ans {opts[ans]} != reading {reading}"
                s_html = f'{pre}<u class="q-target">{kanji_form}</u>{post}'
                s_rev = f'{pre}<u class="q-target">{reading}</u>{post}'
            else:
                assert opts[ans] == kanji_form, f"S{ses_num}#{num} {lemma}: M2 ans {opts[ans]} != kanji {kanji_form}"
                s_html = f'{pre}<u class="q-target">{reading}</u>{post}'
                s_rev = f'{pre}<u class="q-target">{kanji_form}</u>{post}'

            assert lemma not in seen_lemmas, f"Duplicate extra lemma: {lemma}"
            seen_lemmas.add(lemma)

            fm = get_freq_meta(lemma)
            qid = f"k240_s{ses_num}_q{num}"
            extra_questions.append({
                "id": qid,
                "session": ses_num,
                "num": num,
                "mondai": mondai,
                "lemma": lemma,
                "sentence_html": s_html,
                "sentence_reverse_html": s_rev,
                "sentence_tts": f"{pre}{kanji_form}{post}",
                "kanji_form": kanji_form,
                "reading": reading,
                "options": opts,
                "answer": ans,
                "han_viet": hv,
                "meaning_vi": m_vi,
                "sentence_vi": s_vi,
                "trap_note": trap,
                "hint": hint,
                "is_new": True,
                "freq_count_m12": fm["count_m12"],
                "freq_count_all": fm["count_all"],
                "dir_type": fm["dir_type"],
                "freq_badge": fm["badge"],
                "freq_exams": fm["exams_str"],
            })

    # Build KANJI_FREQ_META for all 240 original questions (by q.id) AND KANJI_MASTER_LIST (~311 unique words!)
    freq_by_qid = {}
    master_map = {}

    # 1) Add 199 unique lemmas from original 240 Kanji
    for q in k240:
        lem = K240_LEMMA_MAP.get(q["kanji_form"].strip(), q["kanji_form"].strip())
        fm = get_freq_meta(lem)
        freq_by_qid[q["id"]] = {
            "lemma": lem,
            "freq_count_m12": fm["count_m12"],
            "freq_count_all": fm["count_all"],
            "dir_type": fm["dir_type"],
            "freq_badge": fm["badge"],
            "freq_exams": fm["exams_str"],
        }
        if lem not in master_map:
            # Find clean dictionary reading from 26 exams if available, else q['reading']
            dict_rd = freq[lem]["reading"] if (lem in freq and freq[lem]["reading"]) else q["reading"]
            master_map[lem] = {
                "word": lem,
                "reading": dict_rd,
                "han_viet": q["han_viet"],
                "meaning_vi": q["meaning_vi"],
                "quiz_id": q["id"],
                "session": q["session"],
                "is_new": False,
                "count_m12": fm["count_m12"],
                "count_all": fm["count_all"],
                "dir_type": fm["dir_type"],
                "dir_lbl": fm["dir_lbl"],
                "exams_str": fm["exams_str"],
                "badge": fm["badge"],
                "trap_note": q["trap_note"],
            }

    # 2) Add all 112 new Kanji lemmas
    for q in extra_questions:
        lem = q["lemma"]
        assert lem not in master_map, f"Overlap with 240 Kanji found: {lem}"
        master_map[lem] = {
            "word": lem,
            "reading": q["reading"],
            "han_viet": q["han_viet"],
            "meaning_vi": q["meaning_vi"],
            "quiz_id": q["id"],
            "session": q["session"],
            "is_new": True,
            "count_m12": q["freq_count_m12"],
            "count_all": q["freq_count_all"],
            "dir_type": q["dir_type"],
            "dir_lbl": get_freq_meta(lem)["dir_lbl"],
            "exams_str": q["freq_exams"],
            "badge": q["freq_badge"],
            "trap_note": q["trap_note"],
        }

    # Sort master list: highest M1+M2 frequency first, then total frequency, then new before old, then Japanese word
    master_list = sorted(
        master_map.values(),
        key=lambda x: (-x["count_m12"], -x["count_all"], 0 if x["dir_type"] == "both" else 1, 0 if x["is_new"] else 1, x["word"])
    )
    for idx, entry in enumerate(master_list, 1):
        entry["stt"] = idx

    # Write JS file
    with open(OUT_JS, "w", encoding="utf-8") as f:
        f.write("// Verified JLPT N3 112 Extra Real-Exam Kanji Questions (Sessions 5 & 6) + 311-Word Master Lookup Table (2010-2026)\n")
        f.write("const KANJI_EXTRA_112_DATA = " + json.dumps(extra_questions, ensure_ascii=False, indent=2) + ";\n\n")
        f.write("const KANJI_FREQ_BY_QID = " + json.dumps(freq_by_qid, ensure_ascii=False, indent=2) + ";\n\n")
        f.write("const KANJI_MASTER_LIST = " + json.dumps(master_list, ensure_ascii=False, indent=2) + ";\n\n")
        f.write("// Automatically enrich original 240 Kanji with 2010-2026 real-exam frequency badges & append Sessions 5-6 (352 total Qs)\n")
        f.write("if (typeof KANJI_240_DATA !== 'undefined' && Array.isArray(KANJI_240_DATA)) {\n")
        f.write("  KANJI_240_DATA.forEach(q => {\n")
        f.write("    const fm = KANJI_FREQ_BY_QID[q.id];\n")
        f.write("    if (fm) Object.assign(q, fm);\n")
        f.write("  });\n")
        f.write("  if (!KANJI_240_DATA.some(q => q.session === 5)) {\n")
        f.write("    KANJI_240_DATA.push(...KANJI_EXTRA_112_DATA);\n")
        f.write("  }\n")
        f.write("}\n")

    s5_m1 = sum(1 for q in extra_questions if q["session"] == 5 and q["mondai"] == 1)
    s5_m2 = sum(1 for q in extra_questions if q["session"] == 5 and q["mondai"] == 2)
    s6_m1 = sum(1 for q in extra_questions if q["session"] == 6 and q["mondai"] == 1)
    s6_m2 = sum(1 for q in extra_questions if q["session"] == 6 and q["mondai"] == 2)
    both_cnt = sum(1 for x in master_list if x["dir_type"] == "both")
    ge2_cnt = sum(1 for x in master_list if x["count_m12"] >= 2)
    print(f"SUCCESS! Built {OUT_JS}")
    print(f"Extra Qs: {len(extra_questions)} (S5: {s5_m1} M1 + {s5_m2} M2 | S6: {s6_m1} M1 + {s6_m2} M2)")
    print(f"Master Kanji Table: {len(master_list)} unique words (199 from 240 + 112 new | {both_cnt} mixed M1+M2 | {ge2_cnt} >=2x M1/M2)")


if __name__ == "__main__":
    main()
