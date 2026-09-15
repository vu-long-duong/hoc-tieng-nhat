import json
import sqlite3
import re
from pathlib import Path

DATA_DIR = Path(__file__).resolve().parent.parent / "data"
KANJI_JSON = DATA_DIR / "kanji_data_1000.json"

# Sino-Vietnamese character map for converting compound words
HV_MAP = {}

def get_han_viet_word(word, candidates_map):
    hv_parts = []
    for char in word:
        if char in candidates_map:
            # Take the first Hán-Việt reading (e.g. "Thượng" from "Thượng, Thướng")
            first_reading = candidates_map[char]["han_viet"].split(",")[0].strip()
            hv_parts.append(first_reading.lower())
        else:
            hv_parts.append(char)
    return " ".join(hv_parts).capitalize()

def generate_example_sentences(kanji, word, meaning):
    # Dictionary of high-quality, simple example sentences for standard intermediate vocabulary
    sentences = {
        "中級": {
            "jp": "中級の日本語クラスに入る。",
            "vi": "Vào lớp tiếng Nhật trung cấp."
        },
        "予習": {
            "jp": "授業の予習をする。",
            "vi": "Chuẩn bị bài học trước khi lên lớp."
        },
        "予定": {
            "jp": "予定をカレンダーに書く。",
            "vi": "Viết lịch trình vào lịch."
        },
        "表": {
            "jp": "表の中に数字を書き入れる。",
            "vi": "Điền các con số vào bảng."
        },
        "発表": {
            "jp": "来週の研究発表を準備する。",
            "vi": "Chuẩn bị cho buổi báo cáo nghiên cứu tuần tới."
        },
        "授業": {
            "jp": "午前中は日本語の授業があります。",
            "vi": "Buổi sáng có giờ học tiếng Nhật."
        },
        "宿題": {
            "jp": "毎日の宿題を忘れないでください。",
            "vi": "Xin đừng quên làm bài tập mỗi ngày."
        },
        "復習": {
            "jp": "習った漢字を復習する。",
            "vi": "Ôn tập lại các chữ Hán đã học."
        },
        "辞書": {
            "jp": "わからない単語は辞書で調べる。",
            "vi": "Tra từ điển những từ chưa biết."
        },
        "初級": {
            "jp": "初級レベルの文法を復習する。",
            "vi": "Ôn tập ngữ pháp trình độ sơ cấp."
        },
        "第": {
            "jp": "第一回の会議に出席する。",
            "vi": "Tham dự cuộc họp lần thứ nhất."
        }
    }
    
    # Generic generator based on word and meaning if not in dictionary
    if word in sentences:
        return [sentences[word]]
        
    # Default fallbacks
    return [
        {
            "jp": f"この言葉は「{word}」と言います。",
            "vi": f"Từ này có nghĩa là: {meaning}."
        }
    ]

def main():
    # Load candidate database
    with open(KANJI_JSON, "r", encoding="utf-8") as f:
        candidates = json.load(f)
    cand_by_char = {c["kanji"]: c for c in candidates}
    
    # Load matched results
    with open("matched_kanji_perfect.json", "r", encoding="utf-8") as f:
        matched = json.load(f)
        
    # Connect to Anki DB
    db_path = 'temp_db/collection.anki2'
    conn = sqlite3.connect(db_path)
    c = conn.cursor()
    c.execute("SELECT flds, tags FROM notes")
    notes = c.fetchall()
    conn.close()
    
    # Parse Anki DB notes
    lesson_vocab = {}
    for flds, tags in notes:
        fields = flds.split('\x1f')
        reading = fields[0]
        meaning = fields[1]
        word = fields[2]
        
        match = re.search(r'RGS700_Ch(\d+)', tags)
        if match:
            lesson_num = int(match.group(1))
            if lesson_num not in lesson_vocab:
                lesson_vocab[lesson_num] = []
            lesson_vocab[lesson_num].append({
                "word": word,
                "reading": reading,
                "meaning": meaning
            })
            
    # Rebuild final Kanji database
    final_db = []
    
    # 1. Add beginner Kanji (IDs 1 to 300)
    # We can take the first 300 items from candidates (which are the beginner ones)
    # Let's filter out candidates that are NOT matched to IDs 301-1000
    matched_kanjis = set(item["kanji"] for item in matched.values() if item["kanji"])
    
    beginner_candidates = [c for c in candidates if c["kanji"] not in matched_kanjis]
    
    print(f"Total candidates: {len(candidates)}")
    print(f"Matched intermediate: {len(matched_kanjis)}")
    print(f"Classified as beginner: {len(beginner_candidates)}")
    
    # Take first 300 beginner candidates
    for idx, cand in enumerate(beginner_candidates[:300]):
        final_db.append({
            "id": idx + 1,
            "kanji": cand["kanji"],
            "han_viet": cand["han_viet"],
            "nghia": cand["nghia"],
            "on": cand.get("on", ""),
            "kun": cand.get("kun", ""),
            "page": 11,
            "jlpt": "N5-N4"
        })
        
    # 2. Add intermediate Kanji (IDs 301 to 1000)
    for id_str, item in sorted(matched.items(), key=lambda x: int(x[0])):
        kanji_id = int(id_str)
        char = item["kanji"]
        
        if not char:
            # Fallback placeholder if unmatched
            final_db.append({
                "id": kanji_id,
                "kanji": "？",
                "han_viet": "Chưa rõ",
                "nghia": "Chưa rõ",
                "page": item["page"],
                "lesson": item["lesson"]
            })
            continue
            
        cand = cand_by_char[char]
        lesson_num = item["lesson"]
        page_num = item["page"]
        
        # Build vocabulary list (tu_ghep) from Anki deck for this Kanji
        tu_ghep_list = []
        words_in_lesson = lesson_vocab.get(lesson_num, [])
        for w_info in words_in_lesson:
            w = w_info["word"]
            if char in w:
                tu_ghep_list.append({
                    "han": w,
                    "viet": get_han_viet_word(w, cand_by_char),
                    "meaning": w_info["meaning"]
                })
                
        # If no vocabulary found in Anki deck, fall back to existing tu_ghep
        if not tu_ghep_list:
            for tg in cand.get("tu_ghep", []):
                tu_ghep_list.append({
                    "han": tg["han"],
                    "viet": tg["viet"],
                    "meaning": tg.get("viet", "")
                })
                
        # Take first 5 vocabulary words to keep it clean
        tu_ghep_list = tu_ghep_list[:5]
        
        # Generate example sentences (vi_du)
        vi_du_list = []
        if tu_ghep_list:
            primary_word = tu_ghep_list[0]["han"]
            primary_mean = tu_ghep_list[0]["meaning"]
            vi_du_list = generate_example_sentences(char, primary_word, primary_mean)
            
        final_db.append({
            "id": kanji_id,
            "kanji": char,
            "han_viet": cand["han_viet"],
            "nghia": cand["nghia"],
            "on": cand.get("on", ""),
            "kun": cand.get("kun", ""),
            "chi_tiet": cand.get("chi_tiet", ""),
            "jlpt": cand.get("jlpt", "N3-N2"),
            "lesson": lesson_num,
            "page": page_num,
            "tu_ghep": tu_ghep_list,
            "vi_du": vi_du_list
        })
        
    # Write to kanji_data_1000.json
    with open(KANJI_JSON, "w", encoding="utf-8") as f:
        json.dump(final_db, f, ensure_ascii=False, indent=2)
        
    print(f"Successfully generated new kanji_data_1000.json with {len(final_db)} entries!")

if __name__ == "__main__":
    main()
