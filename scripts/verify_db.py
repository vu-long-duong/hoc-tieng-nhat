import json
import os
import time
from pathlib import Path

DATA_DIR = Path(__file__).resolve().parent.parent / "data"
KANJI_JSON = DATA_DIR / "kanji_data_1000.json"

def main():
    mtime = os.stat(KANJI_JSON).st_mtime
    print("Mtime:", time.ctime(mtime))
    
    with open(KANJI_JSON, 'r', encoding='utf-8') as f:
        db = json.load(f)
        
    print("Total count:", len(db))
    empty = [item for item in db if not item.get("han_viet")]
    print("Empty count:", len(empty))
    if empty:
        print("First 5 empty:", [(item['id'], item['kanji']) for item in empty[:5]])

if __name__ == '__main__':
    main()
