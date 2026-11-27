# -*- coding: utf-8 -*-
"""Build verified JLPT N3 191 Mondai 3 (Context / Điền từ vào ngữ cảnh) Database
covering 100% of all uncovered Mondai 3 words across 26 official exams (2010-2026)
with 2-tier Core (97 words: P1=64 >=2x + P2=33 2021-2026) + Full (94 words: P3=47 + P4=47).
"""
import json, os, re, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from m3_part1 import M3_PART1
from m3_part2 import M3_PART2
from m3_part3 import M3_PART3
from m3_part4 import M3_PART4

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CATALOG_PATH = r'C:\Users\duong\.gemini\antigravity\brain\1d1c2086-9e3f-4b92-b196-5e7109baee86\scratch\m3_191_catalog.json'
OUT_JS = os.path.join(BASE_DIR, 'data', 'mondai3_191_data.js')

def fmt_exam(ex_id):
    y, m = ex_id.split('_')
    return f"T{int(m)}/{y}"

def main():
    with open(CATALOG_PATH, encoding='utf-8') as f:
        cat = json.load(f)

    meta_by_word = {}
    for tier_key, part_num, tier_code in [
        ('part1', 1, 'core'),
        ('part2', 2, 'core'),
        ('part3', 3, 'full'),
        ('part4', 4, 'full')
    ]:
        for r in cat[tier_key]:
            meta_by_word[r['word']] = {
                'part': part_num,
                'tier': tier_code,
                'freq_m3': r['freq_m3'],
                'freq_all': r['freq_all'],
                'm3_exams': r['m3_exams'],
                'all_exams': r['all_exams']
            }

    all_parts = [
        (1, 'core', '⭐ Trọng tâm', M3_PART1),
        (2, 'core', '⭐ Trọng tâm', M3_PART2),
        (3, 'full', '🛡️ Phủ kín', M3_PART3),
        (4, 'full', '🛡️ Phủ kín', M3_PART4),
    ]

    expected_words = set(meta_by_word.keys())
    seen_words = set()
    list_out = []
    data_out = []
    stt = 0
    errors = []

    for part_num, tier_code, tier_label, items in all_parts:
        for num, row in enumerate(items, 1):
            stt += 1
            word, reading, category, meaning_vi, collocation, note_vi, sent_tpl, display_word, ans_idx, opts, vi_opts, sent_vi = row

            if word in seen_words:
                errors.append(f"Duplicate word: {word}")
            seen_words.add(word)

            if word not in meta_by_word:
                errors.append(f"Word not in 191 catalog: {word}")
                continue

            if not reading or re.search(r'[\u4E00-\u9FFF]', reading):
                errors.append(f"Reading contains Kanji or empty (TTS risk): {word} -> {reading}")

            if '{}' not in sent_tpl:
                errors.append(f"Missing {{}} placeholder in sentence_tpl for {word}")
            if len(opts) != 4 or len(set(opts)) != 4:
                errors.append(f"Need 4 unique options for {word}: {opts}")
            if len(vi_opts) != 4:
                errors.append(f"Need 4 Vietnamese option meanings for {word}")
            if not (0 <= ans_idx <= 3):
                errors.append(f"Invalid ans_idx for {word}")
            elif opts[ans_idx] != display_word:
                errors.append(f"opts[ans_idx]={opts[ans_idx]} != display_word={display_word} for {word}")

            m = meta_by_word[word]
            m3_str = ", ".join(fmt_exam(e) for e in m['m3_exams'])
            other_exs = [f"{fmt_exam(e)}(M{mon})" for e, mon in m['all_exams'] if mon != 3]
            all_str = f"M3: {m3_str}" + (f" • Khác: {', '.join(other_exs)}" if other_exs else "")

            if m['freq_m3'] >= 2:
                freq_badge = f"🔥 Lặp {m['freq_m3']}x M3 ({m3_str})"
            elif m['freq_all'] >= 2:
                freq_badge = f"🔥 Đề thật {m['freq_all']}x (M3 + M khác)"
            elif any(e >= '2021' for e in m['m3_exams']):
                freq_badge = f"🆕 Đề mới {m3_str} (M3)"
            else:
                freq_badge = f"📌 Đề thật {m3_str} (M3)"

            qid = f"m3_p{part_num}_q{num}"
            has_kanji = bool(re.search(r'[\u4E00-\u9FFF]', word))
            word_disp = f"{word}（{reading}）" if has_kanji else word
            sentence_html = sent_tpl.replace('{}', '<u class="q-target">（　　　）</u>')
            sentence_reverse_html = sent_tpl.replace('{}', f'<u class="q-target">{display_word}</u>')
            sentence_tts = sent_tpl.replace('{}', display_word)

            # Build options_vi where correct answer uses full meaning_vi + (ĐÚNG) so Reverse Mode matches exact meaning_vi!
            options_vi = []
            for oi, v in enumerate(vi_opts):
                if oi == ans_idx:
                    options_vi.append(f"{meaning_vi} (ĐÚNG)")
                else:
                    options_vi.append(v)

            list_out.append({
                "id": f"m3item_{stt}",
                "quiz_id": qid,
                "stt": stt,
                "part": part_num,
                "tier": tier_code,
                "tier_label": tier_label,
                "word": word,
                "reading": reading,
                "category": category,
                "meaning_vi": meaning_vi,
                "collocation": collocation,
                "note_vi": note_vi,
                "sample_jp": sentence_tts,
                "sample_vi": sent_vi,
                "freq_m3": m['freq_m3'],
                "freq_all": m['freq_all'],
                "freq_badge": freq_badge,
                "freq_exams": all_str
            })

            data_out.append({
                "id": qid,
                "stt": stt,
                "part": part_num,
                "num": num,
                "tier": tier_code,
                "tier_label": tier_label,
                "word": word,
                "reading": reading,
                "word_disp": word_disp,
                "display_word": display_word,
                "category": category,
                "meaning_vi": meaning_vi,
                "collocation": collocation,
                "note_vi": note_vi,
                "sentence_html": sentence_html,
                "sentence_reverse_html": sentence_reverse_html,
                "sentence_tts": sentence_tts,
                "options": opts,
                "options_vi": options_vi,
                "answer": ans_idx,
                "sentence_vi": sent_vi,
                "freq_m3": m['freq_m3'],
                "freq_all": m['freq_all'],
                "freq_badge": freq_badge,
                "freq_exams": all_str
            })

    missing = expected_words - seen_words
    if missing:
        errors.append(f"Missing catalog words ({len(missing)}): {sorted(missing)}")

    if errors:
        print("VALIDATION ERRORS:")
        for e in errors:
            print("  -", e)
        sys.exit(1)

    js_content = (
        "// Verified JLPT N3 191 Mondai 3 (Context / Điền từ vào ngữ cảnh) Database (2010-2026, 26 Official Exams)\n"
        "// 2-Tier Structure: Core (97 words: P1=64 >=2x + P2=33 2021-2026) + Full (94 words: P3=47 + P4=47)\n"
        f"const MONDAI3_191_LIST = {json.dumps(list_out, ensure_ascii=False, indent=2)};\n\n"
        f"const MONDAI3_191_DATA = {json.dumps(data_out, ensure_ascii=False, indent=2)};\n"
    )
    with open(OUT_JS, 'w', encoding='utf-8') as f:
        f.write(js_content)

    core_cnt = sum(1 for x in data_out if x['tier'] == 'core')
    full_cnt = sum(1 for x in data_out if x['tier'] == 'full')
    print(f"SUCCESS: Built {OUT_JS}")
    print(f"  Total: {len(data_out)} Qs & {len(list_out)} Table items (Core={core_cnt}: P1={len(M3_PART1)}, P2={len(M3_PART2)} | Full={full_cnt}: P3={len(M3_PART3)}, P4={len(M3_PART4)})")

if __name__ == '__main__':
    main()
