# -*- coding: utf-8 -*-
"""Build verified JLPT N3 107 Mondai 5 (Usage / Cách dùng từ đúng ngữ cảnh) Database
covering 100% of all 26 official JLPT N3 exams (2010-2026) with 2-tier Core + Full structure.
"""
import json, os, re, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from m5_part1 import M5_PART1
from m5_part2 import M5_PART2
from m5_part3 import M5_PART3

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CATALOG_PATH = r'C:\Users\duong\.gemini\antigravity\brain\1d1c2086-9e3f-4b92-b196-5e7109baee86\scratch\m5_107_catalog.json'
OUT_JS = os.path.join(BASE_DIR, 'data', 'mondai5_107_data.js')

def fmt_exam(ex_id):
    y, m = ex_id.split('_')
    return f"T{int(m)}/{y}"

def main():
    with open(CATALOG_PATH, encoding='utf-8') as f:
        cat = json.load(f)

    # Map every word to its exact 26-exam frequency & tier metadata
    meta_by_word = {}
    for tier_key, part_num, tier_code in [('part1', 1, 'core'), ('part2', 2, 'core'), ('part3', 3, 'full')]:
        for r in cat[tier_key]:
            meta_by_word[r['word']] = {
                'part': part_num,
                'tier': tier_code,
                'freq_m5': r['freq_m5'],
                'freq_all': r['freq_all'],
                'm5_exams': r['m5_exams'],
                'all_exams': r['all_exams']
            }

    all_parts = [
        (1, 'core', '⭐ Trọng tâm', M5_PART1),
        (2, 'core', '⭐ Trọng tâm', M5_PART2),
        (3, 'full', '🛡️ Phủ kín', M5_PART3),
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
            word, reading, pos, meaning_vi, collocation, trap_rule, ans_idx, opts, exps = row

            if word in seen_words:
                errors.append(f"Duplicate word: {word}")
            seen_words.add(word)

            if word not in meta_by_word:
                errors.append(f"Word not in 26-exam M5 catalog: {word}")
                continue

            if not reading or re.search(r'[\u4E00-\u9FFF]', reading):
                errors.append(f"Reading contains Kanji or empty (TTS risk): {word} -> {reading}")

            if len(opts) != 4 or len(set(opts)) != 4:
                errors.append(f"Need 4 unique options for {word}")
            if len(exps) != 4:
                errors.append(f"Need 4 option explanations for {word}")
            if not (0 <= ans_idx <= 3):
                errors.append(f"Invalid ans_idx for {word}: {ans_idx}")
            else:
                if not exps[ans_idx].startswith('✅'):
                    errors.append(f"Correct explanation missing ✅ for {word}")
                for oi in range(4):
                    if oi != ans_idx and not exps[oi].startswith('❌'):
                        errors.append(f"Wrong explanation #{oi} missing ❌ for {word}")

            m = meta_by_word[word]
            m5_str = ", ".join(fmt_exam(e) for e in m['m5_exams'])
            other_exs = [f"{fmt_exam(e)}(M{mon})" for e, mon in m['all_exams'] if mon != 5]
            all_str = f"M5: {m5_str}" + (f" • Khác: {', '.join(other_exs)}" if other_exs else "")

            if m['freq_m5'] >= 2:
                freq_badge = f"🔥 Lặp {m['freq_m5']}x M5 ({m5_str})"
            elif m['freq_all'] >= 2:
                freq_badge = f"🔥 Đề thật {m['freq_all']}x (M5 + M khác)"
            elif any(e >= '2021' for e in m['m5_exams']):
                freq_badge = f"🆕 Đề mới {m5_str} (M5)"
            else:
                freq_badge = f"📌 Đề thật {m5_str} (M5)"

            qid = f"m5_p{part_num}_q{num}"
            correct_sent = opts[ans_idx]
            correct_vi = re.sub(r'^✅\s*ĐÚNG\s*[—–-]\s*', '', exps[ans_idx]).strip()
            # Build display label: show reading only when word has Kanji
            has_kanji = bool(re.search(r'[\u4E00-\u9FFF]', word))
            word_disp = f"{word}（{reading}）" if has_kanji else word
            sentence_html = f'Chọn câu dùng từ <u class="q-target">{word}</u>' + (f'（{reading}）' if has_kanji else '') + ' đúng ngữ cảnh nhất:'
            sentence_reverse_html = correct_sent.replace(word, f'<u class="q-target">{word}</u>', 1)
            if '<u class="q-target">' not in sentence_reverse_html:
                # Try matching stem (e.g. 断る -> 断っ)
                stem = word[:-1] if len(word) >= 2 else word
                if stem and stem in correct_sent:
                    sentence_reverse_html = correct_sent.replace(stem, f'<u class="q-target">{stem}</u>', 1)
                else:
                    sentence_reverse_html = f'<u class="q-target">{word}</u>：{correct_sent}'

            list_out.append({
                "id": f"m5item_{stt}",
                "quiz_id": qid,
                "stt": stt,
                "part": part_num,
                "tier": tier_code,
                "tier_label": tier_label,
                "word": word,
                "reading": reading,
                "pos": pos,
                "meaning_vi": meaning_vi,
                "collocation": collocation,
                "trap_rule": trap_rule,
                "sample_jp": correct_sent,
                "sample_vi": correct_vi,
                "freq_m5": m['freq_m5'],
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
                "pos": pos,
                "meaning_vi": meaning_vi,
                "collocation": collocation,
                "trap_rule": trap_rule,
                "sentence_html": sentence_html,
                "sentence_reverse_html": sentence_reverse_html,
                "sentence_tts": correct_sent,
                "options": opts,
                "options_explain": exps,
                "answer": ans_idx,
                "sentence_vi": correct_vi,
                "freq_m5": m['freq_m5'],
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
        "// Verified JLPT N3 107 Mondai 5 (Usage / Cách dùng từ đúng ngữ cảnh) Database (2010-2026, 26 Official Exams)\n"
        "// 2-Tier Structure: Core (65 words: Part 1 Top 22 M5 Repeats + Part 2 43 Cross-Mondai/2021-2026) + Full (42 words: Part 3 2010-2019)\n"
        f"const MONDAI5_107_LIST = {json.dumps(list_out, ensure_ascii=False, indent=2)};\n\n"
        f"const MONDAI5_107_DATA = {json.dumps(data_out, ensure_ascii=False, indent=2)};\n"
    )
    with open(OUT_JS, 'w', encoding='utf-8') as f:
        f.write(js_content)

    core_cnt = sum(1 for x in data_out if x['tier'] == 'core')
    full_cnt = sum(1 for x in data_out if x['tier'] == 'full')
    print(f"SUCCESS: Built {OUT_JS}")
    print(f"  Total: {len(data_out)} Qs & {len(list_out)} Table items (Core={core_cnt}: P1={len(M5_PART1)}, P2={len(M5_PART2)} | Full={full_cnt}: P3={len(M5_PART3)})")

if __name__ == '__main__':
    main()
