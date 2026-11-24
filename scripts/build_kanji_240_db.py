# -*- coding: utf-8 -*-
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8")

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SCRATCH_JSON = r"C:\Users\duong\.gemini\antigravity\brain\1d1c2086-9e3f-4b92-b196-5e7109baee86\scratch\kanji_240_extracted.json"
OUT_JS = os.path.join(BASE_DIR, "data", "kanji_240_data.js")

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from kanji_240_part1 import PART1_ANNOTATIONS
from kanji_240_part2 import PART2_ANNOTATIONS


def clean_spaces(text):
    # Collapse excess double spaces from PDF extraction into clean single space
    return re.sub(r"\s{2,}", " ", text).strip()


def main():
    with open(SCRATCH_JSON, encoding="utf-8") as f:
        extracted = json.load(f)

    by_id = {q["id"]: q for q in extracted}
    all_ann = PART1_ANNOTATIONS + PART2_ANNOTATIONS
    assert len(all_ann) == 240, f"Expected 240 annotations, got {len(all_ann)}"

    final_items = []
    errors = []

    for row in all_ann:
        qid, ans_idx, kanji_form, reading, han_viet, meaning_vi, sentence_vi, trap_note, overrides = row
        if qid not in by_id:
            errors.append(f"Missing extracted ID: {qid}")
            continue
        raw = dict(by_id[qid])
        if overrides:
            raw.update(overrides)

        mondai = raw["mondai"]
        options = [o.strip() for o in raw["options"]]
        sentence_raw = clean_spaces(raw["sentence_raw"])

        # Extract underlined span
        uls = re.findall(r"\[\[(.*?)\]\]", sentence_raw)
        if len(uls) != 1:
            errors.append(f"{qid}: expected 1 underlined span, got {uls}")
            continue
        ul_text = uls[0].strip()

        # Validate 4 unique options
        if len(options) != 4 or len(set(options)) != 4:
            errors.append(f"{qid}: invalid or duplicate options: {options}")
            continue

        # Validate exact answer match!
        if mondai == 1:
            if options[ans_idx] != reading:
                errors.append(f"{qid} (M1): options[{ans_idx}]='{options[ans_idx]}' != reading '{reading}'")
            if ul_text != kanji_form:
                errors.append(f"{qid} (M1): underlined '{ul_text}' != kanji_form '{kanji_form}'")
        elif mondai == 2:
            if options[ans_idx] != kanji_form:
                errors.append(f"{qid} (M2): options[{ans_idx}]='{options[ans_idx]}' != kanji_form '{kanji_form}'")
            if ul_text != reading:
                errors.append(f"{qid} (M2): underlined '{ul_text}' != reading '{reading}'")

        # Build clean HTML & plain Japanese sentence (with Kanji for natural TTS!)
        sentence_html = re.sub(r"\[\[(.*?)\]\]", r'<u class="q-target">\1</u>', sentence_raw)
        # For TTS: always pronounce the Kanji form in context (or natural sentence)
        sentence_tts = re.sub(r"\[\[(.*?)\]\]", kanji_form, sentence_raw).replace(" ", "")
        # For Reverse Mode: swap underlined span between kanji_form and reading
        reverse_target = reading if mondai == 1 else kanji_form
        sentence_reverse_html = re.sub(r"\[\[(.*?)\]\]", f'<u class="q-target">{reverse_target}</u>', sentence_raw)

        # Ensure all explanation fields present
        for fname_chk, fval in [
            ("han_viet", han_viet),
            ("meaning_vi", meaning_vi),
            ("sentence_vi", sentence_vi),
            ("trap_note", trap_note),
        ]:
            if not fval or not fval.strip():
                errors.append(f"{qid}: empty {fname_chk}")

        final_items.append({
            "id": qid,
            "session": raw["session"],
            "num": raw["num"],
            "mondai": mondai,
            "sentence_html": sentence_html,
            "sentence_reverse_html": sentence_reverse_html,
            "sentence_tts": sentence_tts,
            "kanji_form": kanji_form,
            "reading": reading,
            "options": options,
            "answer": ans_idx,
            "han_viet": han_viet,
            "meaning_vi": meaning_vi,
            "sentence_vi": sentence_vi,
            "trap_note": trap_note,
            "hint": raw.get("hint", "")
        })

    if errors:
        print(f"VALIDATION FAILED WITH {len(errors)} ERRORS:")
        for e in errors:
            print("  ERROR:", e)
        sys.exit(1)

    # Write final JS database
    with open(OUT_JS, "w", encoding="utf-8") as f:
        f.write("// Verified JLPT N3 240 Kanji Questions Database (4 Sessions x 60 Questions)\n")
        f.write("// Extracted from '240 Câu KANJI N3' PDFs & cross-validated 100%\n")
        f.write("const KANJI_240_DATA = " + json.dumps(final_items, ensure_ascii=False, indent=2) + ";\n")

    s_counts = {s: sum(1 for x in final_items if x["session"] == s) for s in [1, 2, 3, 4]}
    m1_cnt = sum(1 for x in final_items if x["mondai"] == 1)
    m2_cnt = sum(1 for x in final_items if x["mondai"] == 2)
    print(f"SUCCESS! Verified 100% of {len(final_items)} questions -> {OUT_JS}")
    print(f"Sessions: {s_counts} | Mondai 1: {m1_cnt} | Mondai 2: {m2_cnt}")


if __name__ == "__main__":
    main()
