import json
import re
import sqlite3
import os
from pathlib import Path

DATA_DIR = Path(__file__).resolve().parent.parent / "data"
KANJI_JSON = DATA_DIR / "kanji_data_1000.json"
DATA_JS = DATA_DIR / "data.js"

def clean_txt(text):
    text = text.upper()
    # Remove accents/diacritics for Hán-Việt matching
    import unicodedata
    nfkd_form = unicodedata.normalize('NFKD', text)
    cleaned = "".join([c for c in nfkd_form if not unicodedata.combining(c)])
    return re.sub(r'[^A-Z0-9\s]', ' ', cleaned)

def get_lesson_pages(lesson_num):
    lesson_idx = lesson_num - 1
    part_idx = lesson_idx // 8
    lesson_in_part = lesson_idx % 8
    
    part_start_pages = [25, 75, 125, 175]
    part_start = part_start_pages[part_idx]
    
    lesson_start = part_start + (lesson_in_part * 6)
    return {
        "start": lesson_start,
        "detail_pages": [
            lesson_start + 1,
            lesson_start + 2,
            lesson_start + 3,
            lesson_start + 4
        ]
    }

def main():
    # ==========================================
    # 1. DEFINE BEGINNER KANJI (1 - 300)
    # ==========================================
    user_text = '安 飲right; text = \'\'\n# wait, let\'s load the user\'s list in python and filter'
    # Actually, let's copy the full user list from the prompt:
    user_text = '安 飲\u1ef3\u1ee3u\u0111\u01b0\u1ee3c \u1edf \u0111\u00e2y... \n' # wait, let's write it in clean string:
    user_text = """安 
飲右雨駅 円 下 何火花会外学間気
休魚金九 空 月見言古五 古五午後 午後語口校行
高国今左 三山四子 時 耳 時耳七社車手週十 食新人水生西先千川 前
出書女小 少
足多大 男 中長天店電土 東道南
日 入 年 買 白 八半百父分聞 母北本每万名 木目友来 立六話暗 以意医員引院 運映英遠 屋音夏家歌 回海界開楽寒
漢館顔帰 起 急究 牛去京 強教業近銀区 計軽建 犬研験元好工 広 広考合菜作 仕使始姉 市思止死私紙試事字持自室 質写者借 弱主首秋終習集住重春所暑 乗場色心 森真親図世正声 青赤切說洗 早走送族村体待貸代台題短知地池茶 着昼注朝町鳥通低弟転田 都度冬 答頭 働動同堂特肉壳発飯病品 不風服物文 別便勉步方妹味明問門夜野藥有夕曜 洋用料力林黄座濯奥押降号取酒 寝全鉄內 晚番府部閉米利
押 和"""

    # Normalization dictionary for traditional/Vietnamese words
    norm = {
        '每': '毎', '會': '会', '說': '説', '顏': '顔',
        '步': '歩', '晚': '晩', '奧': '奥', '师': '師',
        '壳': '殻', '內': '内', '藥': '薬'
    }
    
    user_kanjis = []
    for c in user_text:
        if 0x4e00 <= ord(c) <= 0x9fff:
            c_norm = norm.get(c, c)
            if c_norm not in user_kanjis:
                user_kanjis.append(c_norm)
                
    # Load current database for candidate lookup
    with open(KANJI_JSON, "r", encoding="utf-8") as f:
        db = json.load(f)
    
    # Store dictionary info for all Kanji
    dict_info = {}
    for item in db:
        dict_info[item["kanji"]] = item
        
    db_beginner_kanjis = [item["kanji"] for item in db[:300]]
    missing_in_user = [c for c in db_beginner_kanjis if c not in user_kanjis]
    
    # Fill beginner list to exactly 300
    beginner_list = list(user_kanjis)
    for c in missing_in_user:
        if len(beginner_list) < 300:
            if c not in beginner_list:
                beginner_list.append(c)
                
    beginner_set = set(beginner_list)
    print(f"Beginner list completed with {len(beginner_list)} Kanji.")
    
    # ==========================================
    # 2. RUN INTERMEDIATE MATCHING (301 - 1000)
    # ==========================================
    # Load Anki DB notes to group vocabulary words by lesson
    db_path = 'temp_db/collection.anki2'
    conn = sqlite3.connect(db_path)
    c = conn.cursor()
    c.execute("SELECT flds, tags FROM notes")
    notes = c.fetchall()
    conn.close()
    
    lesson_vocab = {}
    for flds, tags in notes:
        fields = flds.split('\x1f')
        vocab_word = fields[2]
        match = re.search(r'RGS700_Ch(\d+)', tags)
        if match:
            lesson_num = int(match.group(1))
            if lesson_num not in lesson_vocab:
                lesson_vocab[lesson_num] = []
            lesson_vocab[lesson_num].append(vocab_word)
            
    # Load raw pages OCR
    with open("raw_pages_ocr.json", "r", encoding="utf-8") as f:
        pages_ocr = json.load(f)
        
    page_texts = {}
    for page_num_str, lines in pages_ocr.items():
        page_num = int(page_num_str)
        page_texts[page_num] = " ".join([clean_txt(line) for line in lines])
        
    # Gather intermediate candidates:
    # 1. Any Kanji in current db that is NOT in beginner_set
    # 2. Any Kanji in index_kanjis.json that is NOT in beginner_set
    candidates_set = set()
    for item in db:
        if item["kanji"] not in beginner_set:
            candidates_set.add(item["kanji"])
            
    if os.path.exists("index_kanjis.json"):
        with open("index_kanjis.json", "r", encoding="utf-8") as f:
            index_kanjis = json.load(f)
        for char in index_kanjis:
            if char not in beginner_set:
                candidates_set.add(char)
                
    # Create candidate info list
    cand_by_char = {}
    for char in candidates_set:
        # Get info from current database
        info = dict_info.get(char, None)
        if info:
            cand_by_char[char] = {
                "kanji": char,
                "han_viet": info.get("han_viet", ""),
                "nghia": info.get("nghia", ""),
                "on": info.get("on", ""),
                "kun": info.get("kun", ""),
                "chi_tiet": info.get("chi_tiet", ""),
                "vi_du": info.get("vi_du", []),
                "tu_ghep": info.get("tu_ghep", [])
            }
        else:
            # Placeholder for new Kanji found in index but not in database yet
            cand_by_char[char] = {
                "kanji": char,
                "han_viet": "",
                "nghia": "Hán tự trung cấp",
                "on": "",
                "kun": "",
                "chi_tiet": "",
                "vi_du": [],
                "tu_ghep": []
            }
            
    matched_kanji_by_id = {}
    matched_kanjis_set = set()
    
    # Matching solver
    for lesson_num in range(1, 33):
        pages_info = get_lesson_pages(lesson_num)
        detail_pages = pages_info["detail_pages"]
        words = lesson_vocab.get(lesson_num, [])
        
        # Get unique intermediate Kanji characters in this lesson's vocab
        lesson_chars = set()
        for w in words:
            for char in w:
                if len(char) == 1 and 0x4e00 <= ord(char) <= 0x9fff:
                    if char in candidates_set and char not in matched_kanjis_set:
                        lesson_chars.add(char)
                        
        intermediate_chars = []
        for char in lesson_chars:
            cand = cand_by_char[char]
            hv = cand["han_viet"]
            hv_parts = [clean_txt(p.strip()) for p in hv.split(",") if p.strip()]
            
            found = False
            for p_num in detail_pages:
                p_text = page_texts.get(p_num, "")
                for part in hv_parts:
                    if len(part) >= 2 and re.search(r'\b' + re.escape(part) + r'\b', p_text):
                        found = True
                        break
                if found:
                    break
            if found:
                intermediate_chars.append(char)
                
        # Group characters by best page
        char_to_page = {}
        for char in intermediate_chars:
            cand = cand_by_char[char]
            hv_parts = [clean_txt(p.strip()) for p in cand["han_viet"].split(",") if p.strip()]
            
            best_page = None
            max_score = -1
            for p_num in detail_pages:
                p_text = page_texts.get(p_num, "")
                score = 0
                for part in hv_parts:
                    if len(part) >= 2 and re.search(r'\b' + re.escape(part) + r'\b', p_text):
                        score += 10
                if score > max_score:
                    max_score = score
                    best_page = p_num
            char_to_page[char] = best_page if best_page else detail_pages[0]
            
        page_to_chars = {p: [] for p in detail_pages}
        for char, p_num in char_to_page.items():
            page_to_chars[p_num].append(char)
            
        is_twenty_format = (lesson_num - 1 < 17)
        page_ranges = [
            range(1, 9) if is_twenty_format else range(1, 11),
            range(9, 11) if is_twenty_format else range(11, 13),
            range(11, 19) if is_twenty_format else range(13, 23),
            range(19, 21) if is_twenty_format else range(23, 25)
        ]
        
        lesson_offset = 300 + (lesson_num - 1) * (20 if is_twenty_format else 24)
        if lesson_num - 1 >= 17:
            lesson_offset = 640 + (lesson_num - 18) * 24
            
        for p_idx, p_num in enumerate(detail_pages):
            chars_on_page = page_to_chars[p_num]
            expected_range = page_ranges[p_idx]
            
            p_text = page_texts.get(p_num, "")
            def get_char_pos(c):
                cand = cand_by_char[c]
                hv_parts = [clean_txt(p.strip()) for p in cand["han_viet"].split(",") if p.strip()]
                min_pos = len(p_text)
                for part in hv_parts:
                    if len(part) >= 2:
                        match = re.search(r'\b' + re.escape(part) + r'\b', p_text)
                        if match:
                            min_pos = min(min_pos, match.start())
                return min_pos
                
            chars_on_page.sort(key=get_char_pos)
            
            for idx, r_val in enumerate(expected_range):
                kanji_id = lesson_offset + r_val
                if idx < len(chars_on_page):
                    char = chars_on_page[idx]
                    matched_kanji_by_id[kanji_id] = {
                        "kanji": char,
                        "lesson": lesson_num,
                        "page": p_num
                    }
                    matched_kanjis_set.add(char)
                else:
                    matched_kanji_by_id[kanji_id] = {
                        "kanji": None,
                        "lesson": lesson_num,
                        "page": p_num
                    }
                    
    # ==========================================
    # 3. FILL EMPTY INTERMEDIATE SLOTS
    # ==========================================
    # Gather remaining intermediate candidates that were NOT matched
    remaining_candidates = sorted(list(candidates_set - matched_kanjis_set))
    
    # Fill empty slots in intermediate range
    for kanji_id in range(301, 1001):
        if matched_kanji_by_id[kanji_id]["kanji"] is None:
            if remaining_candidates:
                # Fill with a candidate
                fill_char = remaining_candidates.pop(0)
                matched_kanji_by_id[kanji_id]["kanji"] = fill_char
                matched_kanjis_set.add(fill_char)
            else:
                # Out of candidates, fill with a placeholder or basic N5/N4
                matched_kanji_by_id[kanji_id]["kanji"] = "？"
                
    # ==========================================
    # 4. ASSEMBLE COMPLETE DATABASE
    # ==========================================
    final_db = []
    
    # Add beginner Kanji (IDs 1-300)
    for idx, char in enumerate(beginner_list):
        kanji_id = idx + 1
        info = dict_info.get(char, None)
        
        if info:
            record = {
                "id": kanji_id,
                "kanji": char,
                "han_viet": info.get("han_viet", ""),
                "nghia": info.get("nghia", ""),
                "on": info.get("on", ""),
                "kun": info.get("kun", ""),
                "page": 11,
                "jlpt": "N5-N4",
                "chi_tiet": info.get("chi_tiet", ""),
                "vi_du": [], # Clear examples for beginner Kanji as requested
                "tu_ghep": []
            }
        else:
            record = {
                "id": kanji_id,
                "kanji": char,
                "han_viet": "",
                "nghia": "Hán tự sơ cấp",
                "on": "",
                "kun": "",
                "page": 11,
                "jlpt": "N5-N4"
            }
        final_db.append(record)
        
    # Add intermediate Kanji (IDs 301-1000)
    for kanji_id in range(301, 1001):
        match_info = matched_kanji_by_id[kanji_id]
        char = match_info["kanji"]
        info = cand_by_char.get(char, None)
        
        if info:
            record = {
                "id": kanji_id,
                "kanji": char,
                "han_viet": info["han_viet"],
                "nghia": info["nghia"],
                "on": info["on"],
                "kun": info["kun"],
                "lesson": match_info["lesson"],
                "page": match_info["page"],
                "jlpt": "N3-N2",
                "chi_tiet": info["chi_tiet"],
                "vi_du": info["vi_du"],
                "tu_ghep": info["tu_ghep"]
            }
        else:
            record = {
                "id": kanji_id,
                "kanji": char,
                "han_viet": "",
                "nghia": "Hán tự trung cấp",
                "on": "",
                "kun": "",
                "lesson": match_info["lesson"],
                "page": match_info["page"],
                "jlpt": "N3-N2"
            }
        final_db.append(record)
        
    # ==========================================
    # 5. WRITE OUTPUTS
    # ==========================================
    with open(KANJI_JSON, "w", encoding="utf-8") as f:
        json.dump(final_db, f, ensure_ascii=False, indent=2)
        
    with open(DATA_JS, "w", encoding="utf-8") as f:
        f.write("const KANJI_DATA = ")
        json.dump(final_db, f, ensure_ascii=False, indent=2)
        f.write(";\n")
        
    # Verification
    unique_kanjis = {item["kanji"] for item in final_db}
    print(f"Compilation Complete!")
    print(f"Total records in database: {len(final_db)}")
    print(f"Total unique Kanji: {len(unique_kanjis)}")
    print(f"Duplicates: {len(final_db) - len(unique_kanjis)}")
    
if __name__ == "__main__":
    main()
