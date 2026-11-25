# -*- coding: utf-8 -*-
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8")

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SCRATCH_JSON = r"C:\Users\duong\.gemini\antigravity\brain\1d1c2086-9e3f-4b92-b196-5e7109baee86\scratch\synonym_80_extracted.json"
OUT_JS = os.path.join(BASE_DIR, "data", "synonym_n3_data.js")

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from synonym_80_pairs_and_part3 import SYNONYM_80_PAIRS, PART3_SUPPLEMENTAL
from synonym_80_part1_2 import PART1_2_ANNOTATIONS


def clean_spaces(text):
    return re.sub(r"\s{2,}", " ", text).strip()


def main():
    with open(SCRATCH_JSON, encoding="utf-8") as f:
        extracted = json.load(f)

    by_id = {q["id"]: q for q in extracted}
    assert len(PART1_2_ANNOTATIONS) == 80, f"Expected 80 annotations, got {len(PART1_2_ANNOTATIONS)}"
    assert len(SYNONYM_80_PAIRS) == 80, f"Expected 80 pairs, got {len(SYNONYM_80_PAIRS)}"

    pairs_js = []
    for stt, word_a, read_a, word_b, read_b, meaning_vi, cat in SYNONYM_80_PAIRS:
        pairs_js.append({
            "id": f"pair_{stt}",
            "stt": stt,
            "word_a": word_a,
            "read_a": read_a,
            "word_b": word_b,
            "read_b": read_b,
            "meaning_vi": meaning_vi,
            "category": cat
        })

    quizzes_js = []
    errors = []

    # 1. Process Bài 1 & Bài 2 (80 questions)
    for row in PART1_2_ANNOTATIONS:
        qid, ans_idx, target_word, target_reading, syn_reading, meaning_vi, sentence_vi, options_vi, nuance_note, overrides = row
        if qid not in by_id:
            errors.append(f"Missing extracted ID: {qid}")
            continue
        raw = dict(by_id[qid])
        if overrides:
            raw.update(overrides)

        options = [o.strip() for o in raw["options"]]
        sentence_raw = clean_spaces(raw["sentence_raw"])
        uls = re.findall(r"\[\[(.*?)\]\]", sentence_raw)
        if len(uls) != 1:
            errors.append(f"{qid}: expected 1 underline, got {uls}")
            continue
        ul_text = uls[0].strip()
        if ul_text != target_word:
            errors.append(f"{qid}: ul '{ul_text}' != target_word '{target_word}'")
            continue
        if len(options) != 4 or len(set(options)) != 4 or len(options_vi) != 4:
            errors.append(f"{qid}: invalid options or options_vi: {options}")
            continue
        if not (0 <= ans_idx <= 3):
            errors.append(f"{qid}: invalid answer idx {ans_idx}")
            continue

        synonym_word = options[ans_idx]
        sentence_html = re.sub(r"\[\[(.*?)\]\]", r'<u class="q-target">\1</u>', sentence_raw)
        sentence_reverse_html = re.sub(r"\[\[(.*?)\]\]", f'<u class="q-target">{synonym_word}</u>', sentence_raw)
        sentence_tts = re.sub(r"\[\[(.*?)\]\]", r"\1", sentence_raw).replace(" ", "")

        quizzes_js.append({
            "id": qid,
            "part": raw["part"],
            "num": raw["num"],
            "sentence_html": sentence_html,
            "sentence_reverse_html": sentence_reverse_html,
            "sentence_tts": sentence_tts,
            "target_word": target_word,
            "target_reading": target_reading,
            "synonym_word": synonym_word,
            "synonym_reading": syn_reading,
            "options": options,
            "options_vi": options_vi,
            "answer": ans_idx,
            "meaning_vi": meaning_vi,
            "sentence_vi": sentence_vi,
            "nuance_note": nuance_note
        })

    # 2. Process Bài 3 Supplemental (15 questions covering 100% uncovered pairs!)
    for item in PART3_SUPPLEMENTAL:
        qid = item["id"]
        options = [o.strip() for o in item["options"]]
        options_vi = item["options_vi"]
        ans_idx = item["answer"]
        target_word = item["target_word"]
        sentence_raw = clean_spaces(item["sentence_raw"])

        uls = re.findall(r"\[\[(.*?)\]\]", sentence_raw)
        if len(uls) != 1 or uls[0].strip() != target_word:
            errors.append(f"{qid}: underline mismatch {uls} vs {target_word}")
            continue
        if len(options) != 4 or len(set(options)) != 4 or len(options_vi) != 4:
            errors.append(f"{qid}: invalid options")
            continue

        synonym_word = options[ans_idx]
        sentence_html = re.sub(r"\[\[(.*?)\]\]", r'<u class="q-target">\1</u>', sentence_raw)
        sentence_reverse_html = re.sub(r"\[\[(.*?)\]\]", f'<u class="q-target">{synonym_word}</u>', sentence_raw)
        sentence_tts = re.sub(r"\[\[(.*?)\]\]", r"\1", sentence_raw).replace(" ", "")

        quizzes_js.append({
            "id": qid,
            "part": 3,
            "num": item["num"],
            "sentence_html": sentence_html,
            "sentence_reverse_html": sentence_reverse_html,
            "sentence_tts": sentence_tts,
            "target_word": target_word,
            "target_reading": item["target_reading"],
            "synonym_word": synonym_word,
            "synonym_reading": synonym_word,
            "options": options,
            "options_vi": options_vi,
            "answer": ans_idx,
            "meaning_vi": item["meaning_vi"],
            "sentence_vi": item["sentence_vi"],
            "nuance_note": item["nuance_note"]
        })

    if errors:
        print(f"VALIDATION FAILED ({len(errors)} errors):")
        for e in errors:
            print("  ERROR:", e)
        sys.exit(1)

    with open(OUT_JS, "w", encoding="utf-8") as f:
        f.write("// Verified JLPT N3 80 Synonym Pairs & 95 Mondai 4 Quiz Questions\n")
        f.write("const SYNONYM_80_PAIRS = " + json.dumps(pairs_js, ensure_ascii=False, indent=2) + ";\n\n")
        f.write("const SYNONYM_N3_DATA = " + json.dumps(quizzes_js, ensure_ascii=False, indent=2) + ";\n")

    p_counts = {p: sum(1 for q in quizzes_js if q["part"] == p) for p in [1, 2, 3]}
    print(f"SUCCESS! Built {OUT_JS}")
    print(f"80 Pairs: {len(pairs_js)} | Total Quizzes: {len(quizzes_js)} | Parts: {p_counts}")


if __name__ == "__main__":
    main()
