# 🇯🇵 Ứng Dụng Học Hán Tự 700 & Từ Vựng Tiếng Nhật N3

Ứng dụng web tự học tiếng Nhật tương tác cao, kết hợp flashcards, trắc nghiệm phản xạ, luyện viết chữ Hán trên Canvas cảm ứng và thư viện tra cứu toàn diện.

---

## 📁 Cấu Trúc Dự Án

Dự án được phân chia thư mục rõ ràng theo từng tầng chức năng:

```text
Học hán tự/
│
├── index.html                     # [Giao diện] Học Hán Tự (700 chữ Kanji Trung cấp + 300 căn bản)
├── vocab.html                     # [Giao diện] Học Từ Vựng N3 (880 từ Mimi Kara Oboeru)
│
├── assets/                        # Tài nguyên tĩnh phục vụ giao diện web
│   ├── css/
│   │   └── style.css              # Hệ thống style, theme Dark/Light, hiệu ứng chuyển động
│   └── js/
│       ├── app.js                 # Logic tương tác trang Hán Tự (Flashcard, Quiz, Bảng vẽ viết chữ)
│       └── vocab_app.js           # Logic tương tác trang Từ Vựng
│
├── data/                          # Cơ sở dữ liệu học tập
│   ├── data.js                    # Dữ liệu Hán Tự dạng JS (KANJI_DATA) nhúng trực tiếp cho web
│   ├── vocab_data.js              # Dữ liệu Từ Vựng dạng JS (vocabData) nhúng trực tiếp cho web
│   └── kanji_data_1000.json       # Database JSON gốc 1000 chữ Hán đầy đủ thông tin
│
├── scripts/                       # Các kịch bản Python xử lý và kiểm tra dữ liệu
│   ├── verify_db.py               # Kiểm tra số lượng và tính toàn vẹn của dữ liệu Hán Tự
│   ├── fetch_missing_han_viet.py  # Tự động tra cứu và bổ sung âm Hán Việt từ Thi Viện
│   ├── build_final_db.py          # Kịch bản tổng hợp cơ sở dữ liệu
│   └── reconstruct_all.py         # Kịch bản tái tạo và chuẩn hóa cơ sở dữ liệu
│
├── anki/                          # Gói dữ liệu sao lưu cho Anki (.apkg)
│   ├── RGS700.apkg                # Deck Anki Hán Tự 700
│   └── deck.apkg                  # Deck Anki bổ sung
│
├── .vscode/                       # Cấu hình IDE (tự động mở Chrome khi bấm Go Live)
│   └── settings.json
│
└── README.md                      # Tài liệu hướng dẫn dự án
```

---

## 🚀 Hướng Dẫn Sử Dụng

### 1. Khởi chạy Ứng dụng Web
- **Cách 1 (Nhanh nhất):** Nhấp đúp chuột trực tiếp vào tệp `index.html` (để học Hán tự) hoặc `vocab.html` (để học Từ vựng) để mở trên trình duyệt (Chrome, Edge, Firefox, Cốc Cốc,...).
- **Cách 2 (Web Server / Live Server):** Nếu dùng VS Code, nhấp chuột phải vào `index.html` chọn **"Open with Live Server"**, hoặc dùng terminal:
  ```bash
  # Dùng Python có sẵn:
  python -m http.server 8000
  # Sau đó truy cập: http://localhost:8000
  ```

### 2. Các Tính Năng Nổi Bật
- **Luyện Flashcards**: Lật thẻ xem âm Hán Việt, Onyomi, Kunyomi, nghĩa tiếng Việt, các từ ghép tiêu biểu và câu ví dụ thực tế.
- **Trắc nghiệm (Quiz)**: Luyện phản xạ nhanh ghi nhớ chữ Hán và ý nghĩa.
- **Bảng tập viết (Writing Canvas)**: Hỗ trợ tập vẽ tô chữ bằng chuột hoặc cảm ứng trên màn hình cảm ứng / điện thoại, có chế độ gợi ý nét mờ (watermark) và quay lại nét trước (Undo).
- **Thư viện tra cứu (Library)**: Danh sách trực quan dạng lưới, hỗ trợ tìm kiếm nhanh theo Kanji, Hán Việt, nghĩa tiếng Việt, và lọc theo trạng thái (Chưa học / Đang học / Đã thuộc).
- **Lưu trữ tiến độ (Progress Tracking)**: Toàn bộ tiến độ học được tự động lưu trữ trên trình duyệt (`localStorage`), không bị mất khi tải lại trang.
- **Chế độ Giao diện Sáng/Tối (Dark/Light Mode)**: Nút chuyển đổi nhanh theme giao diện ở góc phải phía trên.

---

## 🛠️ Sử Dụng Các Kịch Bản Dữ Liệu (Python)

Các script trong thư mục `scripts/` hỗ trợ đường dẫn tương đối thông minh, bạn có thể chạy từ bất kỳ thư mục nào:

```bash
# 1. Kiểm tra tính toàn vẹn của dữ liệu Hán Tự:
python scripts/verify_db.py

# 2. Bổ sung âm Hán Việt còn thiếu (nếu có):
python scripts/fetch_missing_han_viet.py
```
