import json
import urllib.request
import urllib.parse
import re
import time
from pathlib import Path

DATA_DIR = Path(__file__).resolve().parent.parent / "data"
KANJI_JSON = DATA_DIR / "kanji_data_1000.json"
DATA_JS = DATA_DIR / "data.js"

def extract_han_viet(html):
    idx = html.find("Âm Hán Việt:")
    if idx == -1:
        return ""
    sub = html[idx:idx+500]
    readings = re.findall(r'data-goto-idx="\d+">(.*?)</span>', sub)
    return ", ".join([r.strip().capitalize() for r in readings if r.strip() and not r.strip().startswith('<')])

def main():
    # Load kanji_data_1000.json
    with open(KANJI_JSON, "r", encoding="utf-8") as f:
        db = json.load(f)
        
    print(f"Total records: {len(db)}")
    
    # Check empty Hán-Việt entries
    missing_entries = [item for item in db if not item.get("han_viet")]
    print(f"Missing Han-Viet count: {len(missing_entries)}")
    
    # Manual fallback mappings for common basic Kanji to be 100% safe
    manual_fallbacks = {
        '一': 'Nhất', '二': 'Nhị', '三': 'Tam', '四': 'Tứ', '五': 'Ngũ',
        '六': 'Lục', '七': 'Thất', '八': 'Bát', '九': 'Cửu', '十': 'Thập',
        '百': 'Bách', '千': 'Thiên', '万': 'Vạn', '円': 'Viên', '口': 'Khẩu',
        '目': 'Mục', '耳': 'Nhĩ', '手': 'Thủ', '足': 'Túc', '人': 'Nhân',
        '子': 'Tử', '女': 'Nữ', '男': 'Nam', '先': 'Tiên', '生': 'Sinh',
        '学': 'Học', '校': 'Hiệu', '日': 'Nhật', '月': 'Nguyệt', '火': 'Hỏa',
        '水': 'Thủy', '木': 'Mộc', '金': 'Kim', '土': 'Thổ', '本': 'Bổn, Bản',
        '東': 'Đông', '西': 'Tây', '南': 'Nam', '北': 'Bắc', '前': 'Tiền',
        '後': 'Hậu', '左': 'Tả', '右': 'Hữu', '中': 'Trung', '外': 'Ngoại',
        '下': 'Hạ', '上': 'Thượng', '山': 'Sơn', '川': 'Xuyên', '田': 'Điền',
        '花': 'Hoa', '雨': 'Vũ', '気': 'Khí', '天': 'Thiên', '空': 'Không',
        '森': 'Sâm', '林': 'Lâm', 'Xa': '車', '国': 'Quốc',
        '名': 'Danh', '何': 'Hà', '古': 'Cổ', '新': 'Tân', '多': 'Đa',
        '少': 'Thiểu', '大': 'Đại', '小': 'Tiểu', '長': 'Trường, Trưởng',
        '高': 'Cao', '安': 'An', '楽': 'Nhạc, Lạc', '駅': 'Dịch', '道': 'Đạo',
        '出': 'Xuất', '入': 'Nhập', '食': 'Thực', '飲': 'Ẩm', '見': 'Kiến',
        '聞': 'Văn', '書': 'Thư', '読': 'Độc', '話': 'Thoại', '買': 'Mãi',
        '来': 'Lai', '立': 'Lập', '帰': 'Quy', '起': 'Khởi', '歩': 'Bộ',
        '走': 'Tẩu', '待': 'Đãi', '持': 'Trì', '開': 'Khai', '閉': 'Bế',
        '友': 'Hữu', '会': 'Hội', '社': 'Xã', '店': 'Điếm', '駅': 'Dịch',
        '病': 'Bệnh', '院': 'Viện', '国': 'Quốc', '外': 'Ngoại', '語': 'Ngôn, Ngữ',
        '英': 'Anh', '間': 'Gian', '週': 'Chu', '年': 'Niên', '分': 'Phân',
        '時': 'Thời', '午': 'Ngọ', '半': 'Bán', '毎': 'Mỗi', '朝': 'Triều',
        '昼': 'Trú', '夜': 'Dạ', '夕': 'Tịch', '方': 'Phương', '曜': 'Diệu',
        '父': 'Phụ', '母': 'Mẫu', '兄': 'Huynh', '姉': 'Tỷ', '弟': 'Đệ',
        '妹': 'Muội', '家': 'Gia', '族': 'Tộc', '春': 'Xuân', '夏': 'Hạ',
        '秋': 'Thu', '冬': 'Đông', '風': 'Phong', '色': 'Sắc', '茶': 'Trà',
        '赤': 'Xích', '青': 'Thanh', '黄': 'Hoàng', '白': 'Bạch', '黒': 'Hắc',
        '音': 'Âm', '楽': 'Nhạc', '歌': 'Ca', '画': 'Họa, Hoạch', '映': 'Ánh',
        '海': 'Hải', '館': 'Quán', '室': 'Thất', '都': 'Đô', '府': 'Phủ',
        '県': 'Huyện', '市': 'Thị', '町': 'Đinh', '村': 'Thôn', '明': 'Minh',
        '暗': 'Ám', '有': 'Hữu', '無': 'Vô', '地': 'Địa', '池': 'Trì',
        '度': 'Độ', '回': 'Hồi', '答': 'Đáp', '問': 'Vấn', '題': 'Đề',
        '理': 'Lý', '意': 'Ý', '思': 'Tư', '野': 'Dã', '薬': 'Dược',
        '病': 'Bệnh', '院': 'Viện', '医': 'Y', '者': 'Giả', '研': 'Nghiên',
        '究': 'Cứu', '質': 'Chất', '問': 'Vấn', '答': 'Đáp', '紙': 'Chỉ',
        '字': 'Tự', '文': 'Văn', '物': 'Vật', '事': 'Sự', '用': 'Dụng',
        '料': 'Liệu', '工': 'Công', '場': 'Trường', '作': 'Tác', '使': 'Sử',
        '始': 'Thủy', '終': 'Chung', '考': 'Khảo', '代': 'Đại', '味': 'Vị',
        '洋': 'Dương', '服': 'Phục', '洗': 'Tẩy', '濯': 'Trạc', '寝': 'Tẩm',
        '全': 'Toàn', '部': 'Bộ', '閉': 'Bế', '米': 'Mễ', '利': 'Lợi',
        '和': 'Hòa', '運': 'Vận', '動': 'Động', '乗': 'Thừa', '降': 'Giáng, Hàng',
        '号': 'Hiệu', '取': 'Thủ', '酒': 'Tửu', '鉄': 'Thiết', '晩': 'Vãn',
        '番': 'Phiên', '奥': 'Áo', '押': 'Áp', '強': 'Cường, Cưỡng', '好': 'Hảo',
        '近': 'Cận', '銀': 'Ngân', '去': 'Khứ', '京': 'Kinh', '計': 'Kế',
        '建': 'Kiến', '犬': 'Khuyển', '元': 'Nguyên', '広': 'Quảng', '合': 'Hợp',
        '菜': 'Thái', '仕': 'Sĩ', '止': 'Chỉ', '死': 'Tử', '私': 'Tư',
        '説': 'Thuyết', '体': 'Thể', '短': 'Đoản', '知': 'Tri', '着': 'Trước',
        '通': 'Thông', '低': 'Đê', '転': 'Chuyển', '頭': 'Đầu', '働': 'Động',
        '同': 'Đồng', '堂': 'Đường', '特': 'Đặc', '肉': 'Nhục', '発': 'Phát',
        '品': 'Phẩm', '不': 'Bất', '別': 'Biệt', '便': 'Tiện', '勉': 'Miễn',
        '門': 'Môn', '夕': 'Tịch', '曜': 'Diệu', '薬': 'Dược'
    }
    
    # Fill manually matched meanings first to avoid empty fields
    for item in db:
        char = item["kanji"]
        # Handle '館' empty meaning
        if char == '館':
            item["nghia"] = "quan, tiem, toa nha"
            
        if not item.get("han_viet"):
            if char in manual_fallbacks:
                item["han_viet"] = manual_fallbacks[char]
                
    # Re-check remaining missing
    remaining_missing = [item for item in db if not item.get("han_viet")]
    print(f"Remaining missing Han-Viet count: {len(remaining_missing)}")
    
    # Query online for remaining missing
    for idx, item in enumerate(remaining_missing):
        char = item["kanji"]
        url_char = urllib.parse.quote(char)
        url = f"https://hvdic.thivien.net/whv/{url_char}"
        print(f"[{idx+1}/{len(remaining_missing)}] Fetching for character...")
        
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            html = urllib.request.urlopen(req, timeout=5).read().decode('utf-8')
            hv = extract_han_viet(html)
            if hv:
                item["han_viet"] = hv
            else:
                item["han_viet"] = "Chua ro"
        except Exception as e:
            item["han_viet"] = "Chua ro"
            
        time.sleep(0.5)
        
    # Write back to files
    with open(KANJI_JSON, "w", encoding="utf-8") as f:
        json.dump(db, f, ensure_ascii=False, indent=2)
        
    with open(DATA_JS, "w", encoding="utf-8") as f:
        f.write("const KANJI_DATA = ")
        json.dump(db, f, ensure_ascii=False, indent=2)
        f.write(";\n")
        
    print("Database updated successfully!")

if __name__ == "__main__":
    main()
