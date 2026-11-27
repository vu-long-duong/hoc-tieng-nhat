# -*- coding: utf-8 -*-
import json
import os
import sys

sys.stdout.reconfigure(encoding="utf-8")

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_JS = os.path.join(BASE_DIR, "data", "katakana_n3_data.js")

# 78 JLPT N3 Katakana words extracted from "KATANANA XUẤT HIỆN TRONG JLPT N3" (1.png - 14.png)
# Tuple format:
# (stt, word, meaning_vi, origin, native_jp, category, sentence_tpl, distractors_3, sentence_vi, wasei_note)
# Note: sentence_tpl uses "___" for the blank. Distractors are 3 Katakana words from the same 78-word list!

KATAKANA_78 = [
    # ================= BÀI 1: CÂU 1–39 =================
    (1, "パートナー", "Đối tác, bạn đồng hành", "partner (Anh)", "相手・協力者", "Công việc & Giao tiếp",
     "この プロジェクトは、信頼できる ___ と 一緒に 進めたい。",
     ["リーダー", "ボランティア", "クラスメート"],
     "Dự án này tôi muốn cùng tiến hành với một đối tác đáng tin cậy.",
     "パートナー vừa dùng trong kinh doanh (đối tác), vừa dùng cho bạn nhảy/bạn đời."),

    (2, "リーダー", "Lãnh đạo, trưởng nhóm", "leader (Anh)", "指導者・代表", "Công việc & Giao tiếp",
     "田中さんが 今度の チームの ___ に 選ばれました。",
     ["パートナー", "アマチュア", "トップ"],
     "Anh Tanaka đã được chọn làm trưởng nhóm của đội lần này.",
     "Chú ý có 2 trường âm ー: リー + ダー. Phân biệt với クラスメート (bạn cùng lớp)."),

    (3, "ボランティア", "Tình nguyện viên, hoạt động tình nguyện", "volunteer (Anh)", "奉仕活動", "Công việc & Giao tiếp",
     "休みの 日に、地域の 清掃 ___ に 参加しています。",
     ["パート", "トレーニング", "コンテスト"],
     "Vào ngày nghỉ, tôi tham gia hoạt động tình nguyện dọn dẹp vệ sinh ở địa phương.",
     "Cụm hay thi JLPT N3: ボランティアに参加する / ボランティア活動 (hoạt động tình nguyện)."),

    (4, "コミュニケーション", "Giao tiếp, trao đổi thông tin", "communication (Anh)", "意思疎通", "Công việc & Giao tiếp",
     "職場では、同僚との ___ が とても 大切だ。",
     ["プライバシー", "スケジュール", "メッセージ"],
     "Ở nơi làm việc, việc giao tiếp với đồng nghiệp rất quan trọng.",
     "Cụm cố định: コミュニケーションをとる (giao tiếp, giữ liên lạc trao đổi)."),

    (5, "ユーモア", "Sự hài hước, óc khôi hài", "humor (Anh)", "おもしろみ", "Đánh giá & Trạng thái",
     "山田先生は ___ が あって、授業が いつも 楽しい。",
     ["マナー", "センス", "イメージ"],
     "Thầy Yamada có óc hài hước nên giờ học lúc nào cũng vui.",
     "Cụm hay gặp: ユーモアがある (có khiếu hài hước). Lưu ý cách viết ユーモア (không có âm h)."),

    (6, "ショック", "Sốc, cú sốc tinh thần", "shock (Anh)", "衝撃", "Đánh giá & Trạng thái",
     "試験に 落ちて、大きな ___ を 受けた。",
     ["ストレス", "ミス", "マイナス"],
     "Trượt kỳ thi khiến tôi chịu một cú sốc lớn.",
     "Cụm cố định JLPT N3: ショックを受ける (bị sốc). Đừng nhầm với ストレスがたまる (tích tụ stress)."),

    (7, "ストレス", "Stress, sự căng thẳng", "stress (Anh)", "精神的負担", "Đánh giá & Trạng thái",
     "仕事が 忙しくて、最近 ___ が たまっている。",
     ["ショック", "バランス", "エネルギー"],
     "Công việc bận rộn nên gần đây tôi bị tích tụ căng thẳng.",
     "Cụm tủ JLPT N3: ストレスがたまる (tích tụ stress) / ストレスを解消する (giải tỏa stress)."),

    (8, "バランス", "Sự cân bằng", "balance (Anh)", "つり合い", "Đánh giá & Trạng thái",
     "健康の ために、栄養の ___ を 考えて 食べている。",
     ["レベル", "スタイル", "スピード"],
     "Vì sức khỏe nên tôi chú ý cân bằng dinh dưỡng khi ăn uống.",
     "Cụm tủ: バランスがいい (cân bằng tốt) / バランスをとる (giữ cân bằng)."),

    (9, "レベル", "Trình độ, cấp độ", "level (Anh)", "水準・程度", "Đánh giá & Trạng thái",
     "毎日 練習したので、日本語の ___ が 上がった。",
     ["ラベル", "タイプ", "トップ"],
     "Nhờ luyện tập mỗi ngày mà trình độ tiếng Nhật của tôi đã tăng lên.",
     "⚠️ Bẫy nhìn nhầm 1 chữ Katakana: レベル (level: trình độ) khác với ラベル (label: nhãn dán)!"),

    (10, "アップ", "Tăng lên, nâng cao; cận cảnh", "up (Anh)", "上昇・向上", "Đánh giá & Trạng thái",
     "今年の 春から、商品の 値段が 10% ___ した。",
     ["ダウン", "マイナス", "キャンセル"],
     "Từ mùa xuân năm nay, giá sản phẩm đã tăng lên 10%.",
     "Dùng rất nhiều trong ghép từ kiểu Nhật: スピードアップ (tăng tốc), レベルアップ (lên trình)."),

    (11, "ダウン", "Hạ xuống, giảm sút; gục ngã", "down (Anh)", "低下・減少", "Đánh giá & Trạng thái",
     "あまりの 暑さに、途中で ___ してしまった。",
     ["アップ", "プラス", "ヒット"],
     "Vì trời nóng quá sức nên giữa chừng tôi đã bị gục ngã/kiệt sức.",
     "⚠️ Sắc thái kiểu Nhật: ダウンする ngoài 'giảm xuống' còn nghĩa 'ngã bệnh/gục vì quá mệt' (kèm ダウンロード = tải xuống)."),

    (12, "コンテスト", "Cuộc thi (hùng biện, ảnh, sắc đẹp...)", "contest (Anh)", "競技会・大会", "Truyền thông & Văn hóa",
     "来月 行われる スピーチ ___ に 参加する 予定です。",
     ["インタビュー", "アンケート", "トレーニング"],
     "Tháng sau tôi dự định tham gia cuộc thi hùng biện được tổ chức.",
     "Hay ghép: スピーチコンテスト (thi hùng biện), 写真コンテスト (thi nhiếp ảnh)."),

    (13, "プラス", "Cộng, dương, mặt tích cực", "plus (Anh)", "足し算・有利", "Đánh giá & Trạng thái",
     "海外での 経験は、将来の 仕事に ___ に なるだろう。",
     ["マイナス", "ミス", "ダウン"],
     "Kinh nghiệm ở nước ngoài chắc hẳn sẽ mang lại lợi ích tích cực cho công việc tương lai.",
     "Cặp đối lập: プラスになる (có lợi/tích cực) <-> マイナスになる (gây bất lợi/tiêu cực)."),

    (14, "マイナス", "Trừ, âm, lỗ, mặt tiêu cực", "minus (Anh)", "引き算・不利", "Đánh giá & Trạng thái",
     "今朝の 気温は ___ 3度まで 下がった。",
     ["プラス", "アップ", "パーセント"],
     "Nhiệt độ sáng nay đã giảm xuống tới âm 3 độ.",
     "Vừa dùng cho số âm (マイナス3度) vừa dùng cho mặt bất lợi (マイナスになる)."),

    (15, "イメージ", "Hình ảnh, ấn tượng hình dung", "image (Anh)", "印象・心象", "Truyền thông & Văn hóa",
     "実際に 会ってみたら、思っていた ___ と 違っていた。",
     ["デザイン", "タイトル", "スタイル"],
     "Khi gặp mặt trực tiếp thì thấy khác hẳn với hình dung ban đầu của tôi.",
     "イメージ = 印象 (ấn tượng/hình ảnh trong đầu). Cụm hay gặp: イメージチェンジ (thay đổi hình tượng)."),

    (16, "プライバシー", "Sự riêng tư, đời tư", "privacy (Anh)", "私生活の秘密", "Công việc & Giao tiếp",
     "他人の ___ を 守る ことは 大切な マナーだ。",
     ["マスコミ", "コミュニケーション", "ルール"],
     "Việc bảo vệ sự riêng tư của người khác là phép lịch sự quan trọng.",
     "Cụm cố định: プライバシーを守る (bảo vệ đời tư) / プライバシーを侵害する (xâm phạm đời tư)."),

    (17, "オフィス", "Văn phòng, công sở", "office (Anh)", "事務所・会社", "Công việc & Giao tiếp",
     "うちの 会社の ___ は 駅の すぐ 近くに あります。",
     ["コンビニ", "ベランダ", "レジ"],
     "Văn phòng công ty chúng tôi nằm ngay gần nhà ga.",
     "オフィス = 事務所(じむしょ). Ghép từ: オフィスビル (tòa nhà văn phòng)."),

    (18, "ルール", "Luật lệ, quy tắc", "rule (Anh)", "規則・決まり", "Công việc & Giao tiếp",
     "この スポーツは ___ が 単純なので、すぐ 覚えられる。",
     ["マナー", "テーマ", "スケジュール"],
     "Môn thể thao này luật chơi đơn giản nên có thể nhớ ngay.",
     "Phân biệt: ルール (quy tắc bắt buộc ＝ 規則) vs マナー (phép lịch sự, tác phong cư xử)."),

    (19, "マスコミ", "Giới truyền thông đại chúng", "mass communication (Wasei)", "報道機関", "Truyền thông & Văn hóa",
     "その 事件は テレビや 新聞などの ___ に 大きく 報道された。",
     ["インターネット", "アナウンス", "パンフレット"],
     "Vụ việc đó đã được các phương tiện truyền thông như tivi, báo chí đưa tin rầm rộ.",
     "⚠️ Từ rút gọn kiểu Nhật (Wasei-eigo): マス・コミュニケーション -> rút ngắn còn マスコミ!"),

    (20, "マナー", "Tác phong, phép lịch sự, cách cư xử", "manner (Anh)", "礼儀作法", "Công việc & Giao tiếp",
     "電車の中で 電話を しないのは 日本の ___ です。",
     ["ルール", "ユーモア", "タイプ"],
     "Không gọi điện thoại trên tàu điện là phép lịch sự ở Nhật Bản.",
     "Hay gặp ở Đọc hiểu N3: 食事のマナー (phép lịch sự bàn ăn), マナーを守る (giữ phép lịch sự)."),

    (21, "ミス", "Lỗi, sự sai sót", "mistake (Wasei)", "間違い・失敗", "Công việc & Giao tiếp",
     "急いで 書いたので、計算 ___ を してしまった。",
     ["ショック", "ストレス", "キャンセル"],
     "Vì viết vội nên tôi đã làm nhầm lỗi tính toán.",
     "⚠️ Từ rút gọn kiểu Nhật: mistake -> rút còn ミス! Hay dùng: ミスをする (mắc lỗi), ケアレスミス (lỗi bất cẩn)."),

    (22, "スケジュール", "Lịch trình, thời gian biểu", "schedule (Anh)", "予定・日程", "Công việc & Giao tiếp",
     "来週の 出張の ___ を メールで 送ってください。",
     ["アドバイス", "アイディア", "アンケート"],
     "Hãy gửi lịch trình chuyến công tác tuần sau qua email cho tôi.",
     "Đồng nghĩa chuẩn N3: スケジュール ＝ 予定(よてい)."),

    (23, "タイトル", "Tiêu đề, nhan đề (sách, phim, bài hát)", "title (Anh)", "題名・表題", "Truyền thông & Văn hóa",
     "昨日 見た 映画の ___ が 思い出せない。",
     ["テーマ", "ストーリー", "ラベル"],
     "Tôi không thể nhớ ra tiêu đề bộ phim đã xem hôm qua.",
     "Phân biệt bộ 3 phim/sách: タイトル (tựa đề), テーマ (chủ đề cốt lõi), ストーリー (cốt truyện)."),

    (24, "テーマ", "Chủ đề, đề tài", "Thema (Đức)", "主題・話題", "Truyền thông & Văn hóa",
     "今日の 会議の ___ は 「環境問題」です。",
     ["タイトル", "ストーリー", "ルール"],
     "Chủ đề của cuộc họp hôm nay là 'Vấn đề môi trường'.",
     "⚠️ Từ mượn tiếng ĐỨC (Thema) nên đọc là テーマ chứ không đọc theo tiếng Anh (theme)!"),

    (25, "ストーリー", "Câu chuyện, cốt truyện", "story (Anh)", "物語・あらすじ", "Truyền thông & Văn hóa",
     "この 小説は ___ が 面白くて、一気に 読んでしまった。",
     ["タイトル", "テーマ", "メッセージ"],
     "Cuốn tiểu thuyết này cốt truyện hấp dẫn nên tôi đã đọc một mạch hết luôn.",
     "ストーリー ＝ 物語(ものがたり) / あらすじ (cốt truyện)."),

    (26, "ヒット", "Nổi tiếng, thành công vang dội (hit)", "hit (Anh)", "大成功・大流行", "Truyền thông & Văn hóa",
     "あの 歌手の 新曲は 若者の 間で 大 ___ している。",
     ["トップ", "ブランド", "セール"],
     "Ca khúc mới của ca sĩ đó đang cực kỳ nổi tiếng trong giới trẻ.",
     "Cụm hay gặp: 大ヒットする (trở thành cú hit lớn), ヒット商品 (sản phẩm bán chạy đình đám)."),

    (27, "ブランド", "Thương hiệu, nhãn hiệu nổi tiếng", "brand (Anh)", "商標・銘柄", "Mua sắm & Ẩm thực",
     "彼女は 有名な ___ の バッグを 持っている。",
     ["デザイン", "タイプ", "ラベル"],
     "Cô ấy đang mang một chiếc túi của thương hiệu nổi tiếng.",
     "ブランド品 (hàng hiệu). Đừng nhầm với グラウンド (sân vận động)!"),

    (28, "レンタル", "Thuê, cho thuê (xe, đĩa, đồ)", "rental (Anh)", "貸し出し", "Mua sắm & Ẩm thực",
     "旅行先で 車を ___ して、観光地を 回った。",
     ["リサイクル", "セール", "キャンセル"],
     "Tôi đã thuê xe ở điểm du lịch và đi tham quan các danh thắng.",
     "Ghép từ phổ biến: レンタカー (xe thuê), レンタルショップ (tiệm cho thuê)."),

    (29, "リサイクル", "Tái chế", "recycle (Anh)", "再利用", "Công nghệ & Đời sống",
     "ペットボトルは 洗ってから ___ に 出してください。",
     ["レンタル", "プラスチック", "エネルギー"],
     "Chai nhựa hãy rửa sạch trước rồi mới đem đi tái chế nhé.",
     "Rất hay xuất hiện trong bài đọc hiểu phân loại rác ở Nhật: リサイクルショップ (tiệm đồ cũ tái sử dụng)."),

    (30, "ラベル", "Nhãn dán, tem mác (trên chai/hàng)", "label (Anh)", "荷札・表示", "Mua sắm & Ẩm thực",
     "ペットボトルを 捨てる ときは、___ を はがしてください。",
     ["レベル", "カード", "レシート"],
     "Khi vứt chai nhựa, xin hãy bóc nhãn dán ra.",
     "⚠️ Rất hay lừa với レベル (trình độ)! Nhớ: ラ(la)ベル = nhãn dán, レ(le)ベル = trình độ."),

    (31, "タイプ", "Kiểu, loại, mẫu (người/sản phẩm)", "type (Anh)", "型・種類", "Đánh giá & Trạng thái",
     "姉と 私は 性格が 全然 違う ___ だ。",
     ["スタイル", "デザイン", "ブランド"],
     "Chị gái và tôi là hai kiểu người có tính cách hoàn toàn khác nhau.",
     "Vừa chỉ chủng loại máy móc, vừa chỉ 'gu / kiểu người' (好きなタイプ)."),

    (32, "スタイル", "Dáng người, phong cách, kiểu dáng", "style (Anh)", "姿・様式", "Đánh giá & Trạng thái",
     "彼女は 背が 高くて ___ が とても いい。",
     ["タイプ", "デザイン", "バランス"],
     "Cô ấy cao ráo và có vóc dáng rất đẹp.",
     "⚠️ Sắc thái kiểu Nhật: スタイルがいい thường dùng để khen 'vóc dáng/body chuẩn đẹp'!"),

    (33, "キャンセル", "Hủy bỏ (đặt chỗ, lịch hẹn, đơn hàng)", "cancel (Anh)", "取り消し・中止", "Công việc & Giao tiếp",
     "急に 仕事が 入ったので、ホテルの 予約を ___ した。",
     ["レンタル", "ダウン", "ミス"],
     "Vì đột nhiên có việc nên tôi đã hủy đặt phòng khách sạn.",
     "Từ Katakana cực hay thi N3! キャンセルする ＝ 取り消す / 中止する (bổ sung thay thế cho từ trùng #26)."),

    (34, "ウイルス", "Virus (bệnh tật hoặc máy tính)", "virus (Latinh/Anh)", "病原体", "Công nghệ & Đời sống",
     "パソコンが ___ に 感染して 動かなくなった。",
     ["デジタル", "ロボット", "インターネット"],
     "Máy tính bị nhiễm virus nên không chạy được nữa.",
     "Chú ý cách đọc tiếng Nhật là ウイルス (u-i-ru-su), không đọc 'vai-rớt'!"),

    (35, "ロボット", "Người máy, rô-bốt", "robot (Séc/Anh)", "自動機械", "Công nghệ & Đời sống",
     "この 工場では ___ が 自動車を 組み立てている。",
     ["ウイルス", "マイク", "ブレーキ"],
     "Ở nhà máy này, rô-bốt đang lắp ráp ô tô.",
     "Lưu ý có âm ngắt ッ: ロボット."),

    (36, "エネルギー", "Năng lượng, nguồn điện/nhiên liệu", "Energie (Đức)", "動力・活力", "Công nghệ & Đời sống",
     "太陽や 風などの 自然 ___ を 利用する 研究が 進んでいる。",
     ["バランス", "ストレス", "リサイクル"],
     "Nghiên cứu sử dụng các nguồn năng lượng tự nhiên như mặt trời, gió đang tiến triển.",
     "⚠️ Từ mượn tiếng ĐỨC (Energie) nên đọc エネルギー (không đọc theo tiếng Anh 'energy')!"),

    (37, "デジタル", "Kỹ thuật số", "digital (Anh)", "数値化", "Công nghệ & Đời sống",
     "最近は ___ カメラではなく、スマホで 写真を 撮る 人が 多い。",
     ["インスタント", "プロフェッショナル", "プラスチック"],
     "Gần đây nhiều người chụp ảnh bằng smartphone thay vì máy ảnh kỹ thuật số.",
     "Trái nghĩa với アナログ (analog: thủ công/tương tự). Rút gọn hay gặp: デジカメ (máy ảnh KTS)."),

    (38, "マイク", "Micro, ống nói", "microphone (Wasei)", "拡声器", "Công nghệ & Đời sống",
     "後ろの 人にも 聞こえるように、___ を 使って 話してください。",
     ["チャイム", "アナウンス", "バイク"],
     "Để người ngồi phía sau cũng nghe được, xin hãy dùng micro khi nói.",
     "⚠️ Từ rút gọn kiểu Nhật: microphone -> マイク! Đừng nhìn nhầm với バイク (xe máy)!"),

    (39, "ブレーキ", "Phanh, thắng xe", "brake (Anh)", "制動装置", "Giao thông & Thể thao",
     "子どもが 飛び出してきたので、慌てて ___ を 踏んだ。",
     ["カーブ", "スピード", "バイク"],
     "Vì đứa trẻ bất ngờ lao ra đường nên tôi cuống cuồng đạp phanh.",
     "Cụm cố định JLPT: ブレーキを踏む (đạp phanh ô tô) / ブレーキをかける (bóp/phanh lại)."),

    # ================= BÀI 2: CÂU 40–78 =================
    (40, "ペンキ", "Sơn (sơn tường, gỗ, sắt)", "pek (Hà Lan)", "塗料", "Công nghệ & Đời sống",
     "壁に 塗った ___ が まだ 乾いていないので、触らないでください。",
     ["プラスチック", "ガラス", "デザイン"],
     "Sơn mới quét lên tường vẫn chưa khô nên xin đừng chạm vào.",
     "⚠️ Từ mượn tiếng HÀ LAN (pek)! Cực dễ bị lừa nếu chỉ đoán theo tiếng Anh. Cụm: ペンキを塗る (quét sơn)."),

    (41, "カーブ", "Khúc cua, đường cong", "curve (Anh)", "曲がり角・曲線", "Giao thông & Thể thao",
     "この 先は 急な ___ が あるので、スピードを 落としてください。",
     ["ブレーキ", "ラッシュ", "スピード"],
     "Phía trước có khúc cua gấp nên hãy giảm tốc độ xuống.",
     "Đồng nghĩa N3 đã học: カーブしている ＝ 曲がっている."),

    (42, "クラスメート", "Bạn cùng lớp", "classmate (Anh)", "同級生", "Công việc & Giao tiếp",
     "高校 時代の ___ と 10年ぶりに 会った。",
     ["パートナー", "リーダー", "ボランティア"],
     "Tôi đã gặp lại bạn cùng lớp thời cấp 3 sau 10 năm.",
     "クラス (lớp) + メート (bạn) ＝ 同級生(どうきゅうせい)."),

    (43, "グループ", "Nhóm, tập đoàn", "group (Anh)", "集団・組", "Công việc & Giao tiếp",
     "4人ずつの ___ に 分かれて、話し合ってください。",
     ["チーム", "クラスメート", "オフィス"],
     "Hãy chia thành từng nhóm 4 người rồi cùng thảo luận nhé.",
     "Phân biệt: グループ (nhóm nói chung, thảo luận/du lịch) vs チーム (đội cùng thi đấu/phối hợp mục tiêu)."),

    (44, "チーム", "Đội, nhóm (thi đấu/công việc)", "team (Anh)", "組・団", "Giao thông & Thể thao",
     "私たちの サッカー ___ は 今年の 大会で 優勝した。",
     ["グループ", "リーダー", "コンテスト"],
     "Đội bóng đá của chúng tôi đã vô địch giải đấu năm nay.",
     "Hay dùng: チームワーク (tinh thần đồng đội)."),

    (45, "プロフェッショナル", "Chuyên nghiệp", "professional (Anh)", "専門家・本職", "Giao thông & Thể thao",
     "彼は どんな 仕事も 完璧に こなす ___ だ。",
     ["アマチュア", "ボランティア", "パートナー"],
     "Anh ấy là một người chuyên nghiệp, xử lý hoàn hảo mọi công việc.",
     "Thường viết rút gọn là プロ (プロ野球: bóng chày chuyên nghiệp). Trái nghĩa hoàn toàn với アマチュア!"),

    (46, "アマチュア", "Nghiệp dư, không chuyên", "amateur (Pháp/Anh)", "素人・愛好家", "Giao thông & Thể thao",
     "彼女は ___ だが、プロに 負けないくらい ピアノが 上手だ。",
     ["プロフェッショナル", "リーダー", "パート"],
     "Cô ấy chỉ là người nghiệp dư nhưng chơi piano giỏi không kém gì dân chuyên nghiệp.",
     "Cặp trái nghĩa hay thi: プロ(フェッショナル) <-> アマチュア (hay viết tắt là アマ)."),

    (47, "トレーニング", "Luyện tập (thể lực, kỹ năng)", "training (Anh)", "訓練・練習", "Giao thông & Thể thao",
     "マラソン 大会に 向けて、毎日 ジムで ___ している。",
     ["マッサージ", "コンテスト", "ボランティア"],
     "Để chuẩn bị cho giải chạy marathon, ngày nào tôi cũng tập luyện ở phòng gym.",
     "トレーニング ＝ 練習・訓練 (thường nhấn mạnh rèn luyện thể lực, cơ bắp)."),

    (48, "マッサージ", "Xoa bóp, mát xa", "massage (Pháp/Anh)", "あんま・揉みほぐし", "Công nghệ & Đời sống",
     "肩が こったので、プロに ___ を して もらった。",
     ["トレーニング", "メッセージ", "ストレス"],
     "Vì bị mỏi vai nên tôi đã đi nhờ chuyên viên mát xa cho.",
     "⚠️ Cẩn thận nhìn nhầm với メッセージ (tin nhắn)! マッサージ (mát xa) vs メッセージ (tin nhắn)."),

    (49, "アドバイス", "Lời khuyên, sự tư vấn", "advice (Anh)", "助言・忠告", "Công việc & Giao tiếp",
     "就職 活動に ついて、先輩から 親切な ___ を もらった。",
     ["アイディア", "アナウンス", "アンケート"],
     "Về chuyện xin việc, tôi đã nhận được lời khuyên tận tình từ tiền bối.",
     "Cụm cố định: アドバイスをする (khuyên) / アドバイスをもらう (nhận lời khuyên)."),

    (50, "アイディア", "Ý tưởng, sáng kiến", "idea (Anh)", "考え・案", "Công việc & Giao tiếp",
     "新商品の 開発に ついて、何か いい ___ は ありませんか。",
     ["アドバイス", "イメージ", "テーマ"],
     "Về việc phát triển sản phẩm mới, có ý tưởng nào hay không?",
     "Đồng nghĩa chuẩn N3: アイディア (hoặc アイデア) ＝ 案(あん)."),

    (51, "トップ", "Đứng đầu, vị trí số 1, đỉnh", "top (Anh)", "首位・一番上", "Giao thông & Thể thao",
     "彼女は 常に クラスで ___ の 成績を キープしている。",
     ["レベル", "ヒット", "アップ"],
     "Cô ấy luôn giữ vững thành tích đứng đầu lớp.",
     "トップ ＝ 一番 / 首位 (đứng nhất bảng)."),

    (52, "スピード", "Tốc độ", "speed (Anh)", "速度・速さ", "Giao thông & Thể thao",
     "高速道路でも、___ の 出しすぎには 注意してください。",
     ["カーブ", "ブレーキ", "ラッシュ"],
     "Kể cả trên đường cao tốc, xin hãy chú ý đừng chạy quá tốc độ.",
     "Cụm tủ JLPT: スピードを出す (tăng tốc) / スピードを落とす (giảm tốc)."),

    (53, "ラッシュ", "Giờ cao điểm, cảnh chen chúc đông nghẹt", "rush hour (Wasei)", "混雑時", "Giao thông & Thể thao",
     "朝の 通勤 ___ の 電車は とても 混んでいる。",
     ["カーブ", "スピード", "セール"],
     "Tàu điện vào giờ cao điểm đi làm buổi sáng rất đông đúc.",
     "⚠️ Từ rút gọn kiểu Nhật: rush hour -> ラッシュ (hoặc ラッシュアワー: giờ cao điểm kẹt cứng)."),

    (54, "バイク", "Xe mô tô, xe gắn máy", "bike (Wasei)", "オートバイ", "Giao thông & Thể thao",
     "駅から 家まで 遠いので、___ で 通勤しています。",
     ["マイク", "ヘルメット", "ブレーキ"],
     "Vì từ ga đến nhà xa nên tôi đi làm bằng xe máy.",
     "⚠️ CẢNH BÁO WASEI-EIGO KINH ĐIỂN: Trong tiếng Nhật, バイク là XE MÁY (không phải xe đạp 自転車)!"),

    (55, "ヘルメット", "Mũ bảo hiểm", "helmet (Anh)", "安全帽", "Giao thông & Thể thao",
     "バイクに 乗る ときは、必ず ___ を かぶってください。",
     ["コンタクトレンズ", "バイク", "ガラス"],
     "Khi đi xe máy nhất định phải đội mũ bảo hiểm nhé.",
     "Động từ đi kèm đồ đội đầu: ヘルメットをかぶる (đội mũ bảo hiểm)."),

    (56, "コンタクトレンズ", "Kính áp tròng", "contact lens (Anh)", "接触眼鏡", "Công nghệ & Đời sống",
     "寝る 前に、___ を 外すのを 忘れないでください。",
     ["ガラス", "ヘルメット", "カード"],
     "Trước khi đi ngủ đừng quên tháo kính áp tròng ra nhé.",
     "Thường gọi ngắn là コンタクト. Động từ: つける (đeo vào) / 外す(はずす: tháo ra)."),

    (57, "ガラス", "Kính, thủy tinh", "glas (Hà Lan)", "硝子", "Công nghệ & Đời sống",
     "ボールが 当たって、教室の 窓 ___ が 割れてしまった。",
     ["プラスチック", "ペンキ", "ベランダ"],
     "Quả bóng đập trúng làm vỡ mất tấm kính cửa sổ lớp học.",
     "⚠️ Phân biệt: ガラス (chất liệu thủy tinh/cửa kính) khác グラス (cái cốc/ly uống nước)!"),

    (58, "プラスチック", "Nhựa (chất dẻo)", "plastic (Anh)", "合成樹脂", "Công nghệ & Đời sống",
     "この 容器は 軽くて 割れにくい ___ で できている。",
     ["ガラス", "ペンキ", "リサイクル"],
     "Chiếc hộp đựng này được làm bằng nhựa nhẹ và khó vỡ.",
     "Lưu ý chính tả chuẩn: プラスチック (chữ チ chứ KHÔNG phải チェ!)."),

    (59, "ベランダ", "Ban công", "veranda (Bồ Đào Nha/Anh)", "縁側・張り出し縁", "Công nghệ & Đời sống",
     "天気の いい 日は、___ に 布団を 干します。",
     ["オフィス", "コンビニ", "レジ"],
     "Những ngày trời đẹp, tôi phơi chăn đệm ngoài ban công.",
     "Cụm hay gặp ở Đọc hiểu/Nghe hiểu đời sống Nhật: ベランダに洗濯物を干す (phơi đồ ngoài ban công)."),

    (60, "デザイン", "Thiết kế, kiểu dáng", "design (Anh)", "設計・意匠", "Truyền thông & Văn hóa",
     "この 靴は ___ が おしゃれなので、すぐ 買ってしまった。",
     ["ブランド", "サイズ", "ラベル"],
     "Đôi giày này thiết kế sành điệu quá nên tôi đã mua ngay.",
     "Vừa là danh từ (thiết kế) vừa dùng デザインする (thiết kế ra)."),

    (61, "セール", "Đợt giảm giá, xả hàng (sale)", "sale (Anh)", "特売・安売り", "Mua sắm & Ẩm thực",
     "デパートで 夏物 バーゲン ___ が 始まった。",
     ["レンタル", "レジ", "レシート"],
     "Đợt giảm giá đồ mùa hè ở trung tâm thương mại đã bắt đầu.",
     "Hay gặp: タイムセール (giảm giá theo khung giờ), 年中セール (giảm giá quanh năm)."),

    (62, "パート", "Việc làm bán thời gian (part-time)", "part-time (Wasei)", "非常勤・アルバイト", "Công việc & Giao tiếp",
     "子どもが 学校に 行っている 間、スーパーで ___ を している。",
     ["ボランティア", "パートナー", "オフィス"],
     "Trong lúc con đi học, tôi làm việc bán thời gian ở siêu thị.",
     "⚠️ Sắc thái kiểu Nhật: パート thường chỉ việc làm thêm của các bà nội trợ/người lớn; アルバイト hay dùng cho sinh viên."),

    (63, "コンビニ", "Cửa hàng tiện lợi", "convenience store (Wasei)", "24時間営業店", "Mua sắm & Ẩm thực",
     "夜中に おなかが すいたので、近くの ___ で お弁当を 買った。",
     ["オフィス", "レジ", "ファストフード"],
     "Nửa đêm thấy đói bụng nên tôi đã ra cửa hàng tiện lợi gần nhà mua cơm hộp.",
     "⚠️ Từ rút gọn siêu phổ biến: コンビニエンスストア -> コンビニ!"),

    (64, "レジ", "Quầy tính tiền, máy thu ngân", "cash register (Wasei)", "会計場", "Mua sắm & Ẩm thực",
     "昼休みは お客さんが 多くて、___ の 前に 長い 列が できた。",
     ["レシート", "コンビニ", "セール"],
     "Giờ nghỉ trưa đông khách nên trước quầy tính tiền xếp hàng dài.",
     "⚠️ Rút gọn từ register -> レジ! Đừng nhầm với レシート (hóa đơn)!"),

    (65, "レシート", "Hóa đơn, biên lai thanh toán", "receipt (Anh)", "領収書", "Mua sắm & Ẩm thực",
     "返品する ときに 必要なので、___ を 捨てないでください。",
     ["レジ", "カード", "ラベル"],
     "Vì cần thiết khi đổi trả hàng nên xin đừng vứt hóa đơn đi nhé.",
     "Phân biệt: レシート (biên lai in tự động ở máy tính tiền) vs 領収書 (hóa đơn đỏ có ghi tên công ty)."),

    (66, "インスタント", "Ăn liền, pha liền, tức thì", "instant (Anh)", "即席", "Mua sắm & Ẩm thực",
     "忙しくて 料理する 時間が ない ときは、___ ラーメンを 食べる。",
     ["ファストフード", "デザート", "フルーツ"],
     "Những lúc bận không có thời gian nấu ăn, tôi hay ăn mì ăn liền.",
     "Hay ghép: インスタントコーヒー (cà phê hòa tan), インスタント食品 (thực phẩm ăn liền)."),

    (67, "フルーツ", "Hoa quả, trái cây", "fruits (Anh)", "果物", "Mua sắm & Ẩm thực",
     "朝ごはんには いつも 新鮮な ___ を 食べる ようにしている。",
     ["デザート", "ファストフード", "インスタント"],
     "Bữa sáng tôi luôn cố gắng ăn trái cây tươi.",
     "フルーツ ＝ 果物(くだもの). Hay gặp ở thực đơn: フルーツジュース, フルーツケーキ."),

    (68, "ファストフード", "Thức ăn nhanh", "fast food (Anh)", "手軽な軽食", "Mua sắm & Ẩm thực",
     "ハンバーガーなどの ___ ばかり 食べていると、体に よくない。",
     ["インスタント", "デザート", "フルーツ"],
     "Nếu cứ chỉ toàn ăn thức ăn nhanh như hamburger thì không tốt cho cơ thể.",
     "Cũng hay viết là ファーストフード (đều hiểu là đồ ăn nhanh)."),

    (69, "デザート", "Món tráng miệng", "dessert (Pháp/Anh)", "食後の菓子", "Mua sắm & Ẩm thực",
     "食事の あとの ___ に、アイスクリームを 注文した。",
     ["フルーツ", "ファストフード", "インスタント"],
     "Tôi đã gọi kem làm món tráng miệng sau bữa ăn.",
     "Cẩn thận cách viết: デザート (tráng miệng) — có âm đục ザ và trường âm ー!"),

    (70, "インターネット", "Mạng Internet", "Internet (Anh)", "情報通信網", "Công nghệ & Đời sống",
     "最近は ___ を 使って、家で 簡単に 買い物ができる。",
     ["マスコミ", "デジタル", "ウイルス"],
     "Gần đây nhờ có mạng Internet mà có thể mua sắm dễ dàng ngay tại nhà.",
     "Lưu ý có 2 trường âm ー: イン+ター+ネッ+ト (thường viết tắt là ネット)."),

    (71, "チャイム", "Chuông (chuông cửa, chuông báo giờ học)", "chime (Anh)", "呼び鈴・鐘", "Công nghệ & Đời sống",
     "授業 開始の ___ が 鳴ったので、急いで 教室に 入った。",
     ["アナウンス", "マイク", "メッセージ"],
     "Chuông báo bắt đầu tiết học đã reo nên tôi vội vàng bước vào lớp.",
     "Cụm cố định: チャイムが鳴る (chuông reo), チャイムを押す (bấm chuông cửa)."),

    (72, "アナウンス", "Thông báo (qua loa phát thanh ở ga/sân bay)", "announce (Anh)", "場内放送・案内", "Truyền thông & Văn hóa",
     "電車が 遅れているという 駅の ___ が 聞こえた。",
     ["チャイム", "メッセージ", "インタビュー"],
     "Tôi nghe thấy loa thông báo của nhà ga nói rằng tàu đang bị trễ.",
     "アナウンス ＝ 案内放送 (thông báo bằng giọng nói qua loa). Nghề phát thanh viên là アナウンサー."),

    (73, "メッセージ", "Tin nhắn, lời nhắn gửi", "message (Anh)", "伝言", "Công việc & Giao tiếp",
     "留守番 電話に ___ を 残して おきました。",
     ["マッサージ", "パンフレット", "アナウンス"],
     "Tôi đã để lại lời nhắn vào hộp thư thoại trả lời tự động rồi.",
     "⚠️ Cặp bẫy mặt chữ: メッセージ (tin nhắn ＝ 伝言) vs マッサージ (mát xa)!"),

    (74, "パンフレット", "Ấn phẩm quảng cáo, tờ rơi, sách giới thiệu", "pamphlet (Anh)", "小冊子・案内書", "Truyền thông & Văn hóa",
     "旅行 会社で 京都 観光の ___ を もらってきた。",
     ["アンケート", "レシート", "カード"],
     "Tôi đã đến công ty du lịch lấy tờ rơi giới thiệu du lịch Kyoto về.",
     "Rất hay xuất hiện trong Đọc hiểu Mondai 4 (Thông tin du lịch/Trường học)!"),

    (75, "カード", "Thẻ (thẻ tín dụng, thẻ tích điểm, thiệp)", "card (Anh)", "札・会員証", "Mua sắm & Ẩm thực",
     "現金が 足りなかったので、クレジット ___ で 払った。",
     ["レシート", "パンフレット", "ラベル"],
     "Vì không đủ tiền mặt nên tôi đã thanh toán bằng thẻ tín dụng.",
     "Hay gặp: クレジットカード (thẻ tín dụng), ポイントカード (thẻ tích điểm), キャッシュカード (thẻ ATM)."),

    (76, "インタビュー", "Cuộc phỏng vấn (báo chí, truyền hình)", "interview (Anh)", "取材・会見", "Truyền thông & Văn hóa",
     "優勝した 選手が テレビの ___ に 答えている。",
     ["アンケート", "コンテスト", "アナウンス"],
     "Vận động viên giành chức vô địch đang trả lời phỏng vấn của đài truyền hình.",
     "Phân biệt: インタビュー (phỏng vấn báo chí/TV) vs 面接(めんせつ: phỏng vấn xin việc/nhập học)!"),

    (77, "アンケート", "Bảng điều tra, phiếu khảo sát ý kiến", "enquête (Pháp)", "意識調査", "Truyền thông & Văn hóa",
     "サービスの 向上の ために、お客様に ___ に 協力して もらった。",
     ["パンフレット", "インタビュー", "アドバイス"],
     "Để nâng cao dịch vụ, chúng tôi đã nhờ khách hàng hợp tác điền phiếu khảo sát.",
     "⚠️ Từ mượn tiếng PHÁP (enquête)! Cực kỳ hay thi JLPT N3: アンケートをとる / アンケートに答える."),

    (78, "パーセント", "Phần trăm (%)", "percent (Anh)", "百分率・割", "Đánh giá & Trạng thái",
     "今日の 降水 確率は 80 ___ だから、傘を 持って 行こう。",
     ["マイナス", "プラス", "レベル"],
     "Xác suất mưa hôm nay là 80 phần trăm nên hãy mang ô theo nhé.",
     "Thường đi với tỷ lệ thời tiết (降水確率), giảm giá (20パーセント引き), thống kê biểu đồ Dokkai."),

    # ================= BÀI 3 BỔ SUNG ĐỀ THẬT 2010–2026: CÂU 79–90 =================
    (79, "キッチン", "Nhà bếp, gian bếp", "kitchen (Anh)", "台所", "Mua sắm & Ẩm thực",
     "この 新しい アパートは ___ が 広くて、料理が しやすい。",
     ["ベランダ", "オフィス", "フロント"],
     "Căn hộ mới này có nhà bếp rộng nên rất dễ nấu ăn.",
     "🔥 TRÙM 3 LẦN ĐỀ THẬT (M4: T12/2013, T12/2019, T12/2025)! Đồng nghĩa kinh điển JLPT N3: キッチン ＝ 台所(だいどころ)."),

    (80, "サイズ", "Kích cỡ, độ lớn (quần áo, giày, đồ)", "size (Anh)", "大きさ・寸法", "Mua sắm & Ẩm thực",
     "すみません、この 靴の もう 一つ 大きい ___ は ありますか。",
     ["タイプ", "スタイル", "デザイン"],
     "Xin lỗi, đôi giày này có kích cỡ lớn hơn một số không ạ?",
     "🔥 TRÙM 3 LẦN ĐỀ THẬT (M4: T7/2013, T7/2023, T7/2026)! Đồng nghĩa kinh điển JLPT N3: サイズ ＝ 大きさ(おおきさ)."),

    (81, "チャレンジ", "Thử thách, thử sức (một lĩnh vực mới)", "challenge (Anh)", "挑戦", "Công việc & Giao tiếp",
     "苦手だった 外国語の 勉強に 今年こそ ___ しようと 思っている。",
     ["キャンセル", "アクセス", "セット"],
     "Năm nay tôi quyết tâm thử sức với việc học ngoại ngữ mà trước đây mình kém.",
     "🔥 Ra 2 lần M3 (T7/2016, T12/2021)! Cụm cố định JLPT N3: 〜にチャレンジする (thử thách / thử sức với ~)."),

    (82, "ヒント", "Gợi ý, manh mối", "hint (Anh)", "手がかり・助言", "Công việc & Giao tiếp",
     "この 問題が 難しくて 解けないので、少し ___ を ください。",
     ["アドバイス", "タイトル", "メッセージ"],
     "Câu hỏi này khó quá không giải được nên hãy cho tôi chút gợi ý đi.",
     "🔥 Ra 2 lần M3 (T12/2012, T12/2023)! Phân biệt: ヒント (gợi ý giải đố/ý tưởng) vs アドバイス (lời khuyên cuộc sống/công việc)."),

    (83, "カタログ", "Danh mục sản phẩm, quyển catalog", "catalog (Anh)", "商品目録", "Mua sắm & Ẩm thực",
     "新しい 車を 買う ために、店で ___ を もらってきた。",
     ["レシート", "メモ", "ラベル"],
     "Để mua xe mới, tôi đã ra cửa hàng lấy quyển danh mục sản phẩm về.",
     "📌 Ra đề thật T7/2010 M3! Phân biệt: カタログ (danh mục giới thiệu sản phẩm để chọn mua) vs パンフレット (tờ gấp giới thiệu sự kiện/du lịch)."),

    (84, "カバー", "Vỏ bọc, bìa bọc; bù đắp, hỗ trợ", "cover (Anh)", "覆い・補うこと", "Công nghệ & Đời sống",
     "本が 汚れないように、紙の ___ を つけて 読んでいる。",
     ["ケース", "ラベル", "シート"],
     "Để sách không bị bẩn, tôi bọc bìa giấy vào rồi mới đọc.",
     "📌 Ra đề thật T7/2012 M3! Nghĩa hay thi N3: 本のカバー (bìa bọc sách), 失敗をカバーする (bù đắp/đỡ đần lỗi sai)."),

    (85, "グラウンド", "Sân vận động, bãi tập thể thao", "ground (Anh)", "運動場", "Giao thông & Thể thao",
     "雨で ___ が ぬれているので、今日の サッカーの 練習は 中止になった。",
     ["コース", "コート", "ホーム"],
     "Vì mưa làm sân tập bị ướt nên buổi tập bóng đá hôm nay bị hủy.",
     "📌 Ra đề thật T7/2022 M4! Đồng nghĩa chuẩn N3: グラウンド ＝ 運動場(うんどうじょう). Đừng nhầm với ブランド (thương hiệu)!"),

    (86, "セット", "Bộ, combo; thiết lập, cài đặt (đồng hồ/máy)", "set (Anh)", "一組・設定", "Mua sắm & Ẩm thực",
     "この 店では、コーヒーと ケーキを ___ で 注文すると 安くなる。",
     ["コース", "オーダー", "セール"],
     "Ở quán này, nếu gọi cà phê và bánh ngọt theo bộ (combo) sẽ rẻ hơn.",
     "📌 Ra đề thật T7/2012 M3! Dùng rất rộng: ランチセット (suất trưa combo), 目覚ましをセットする (đặt báo thức)."),

    (87, "ノック", "Gõ cửa", "knock (Anh)", "戸をたたくこと", "Công việc & Giao tiếp",
     "社長室に 入る 前に、ドアを 3回 ___ した。",
     ["ストップ", "チェック", "クリック"],
     "Trước khi bước vào phòng giám đốc, tôi đã gõ cửa 3 lần.",
     "📌 Ra đề thật T7/2019 M3! Cụm cố định: ドアをノックする (gõ cửa)."),

    (88, "バケツ", "Cái xô, thùng đựng nước", "bucket (Anh)", "手おけ・水桶", "Công nghệ & Đời sống",
     "掃除を する ために、___ に 水を たくさん 入れた。",
     ["ケース", "カップ", "ポケット"],
     "Để dọn dẹp, tôi đã đổ nhiều nước vào xô.",
     "📌 Ra đề thật T12/2018 M3! Lưu ý cách đọc kiểu Nhật từ bucket → バケツ (đuôi ツ, không có ッ)."),

    (89, "ベスト", "Tốt nhất, tối ưu nhất; áo ghi-lê", "best (Anh)", "最もよい・最善", "Đánh giá & Trạng thái",
     "いろいろ 考えた 結果、この 方法が ___ だと 思います。",
     ["トップ", "プラス", "ベテラン"],
     "Sau khi suy nghĩ nhiều, tôi thấy phương pháp này là tốt nhất.",
     "📌 Ra đề thật T12/2023 M4! Đồng nghĩa chuẩn N3: ベスト ＝ 最もよい(もっともよい). Cụm hay gặp: ベストを尽くす (cố hết sức)."),

    (90, "レシピ", "Công thức nấu ăn", "recipe (Anh)", "料理の作り方", "Mua sắm & Ẩm thực",
     "インターネットで 見つけた ___ を 見ながら、カレーを 作った。",
     ["メニュー", "リスト", "マニュアル"],
     "Tôi vừa nhìn công thức tìm trên mạng vừa nấu món cà ri.",
     "📌 Ra đề thật T12/2022 M3! Phân biệt: レシピ (công thức cách nấu ăn) vs メニュー (thực đơn gọi món ở quán)."),
]


def main():
    assert len(KATAKANA_78) == 90, f"Expected 90 items, got {len(KATAKANA_78)}"

    # Load 26 real exams frequency stats for Katakana badges
    merged_path = r"C:\Users\duong\.gemini\antigravity\brain\1d1c2086-9e3f-4b92-b196-5e7109baee86\scratch\past_mojigoi\merged_26_exams.json"
    kata_freq = {}
    if os.path.exists(merged_path):
        all_ex = json.load(open(merged_path, encoding="utf-8"))["exams"]
        for ex in sorted(all_ex.keys()):
            yr, mo = ex.split("_")
            short = f"T{int(mo)}/{yr}"
            for q in all_ex[ex]:
                if q["script"] == "katakana":
                    w = q["lemma"].strip()
                    kata_freq.setdefault(w, []).append(f"{short}(M{q['m']})")

    # Build lookup map for meaning_vi of all 90 words (plus fallback for any external distractor)
    meaning_by_word = {row[1]: row[2] for row in KATAKANA_78}
    meaning_by_word.update({
        "センス": "Gu thẩm mỹ, khiếu tinh tế",
        "クリック": "Nhấp chuột (click)",
        "マニュアル": "Sách hướng dẫn sử dụng, quy trình mẫu",
        "カップ": "Cái cốc, tách",
        "フロント": "Quầy lễ tân (khách sạn)",
        "アクセス": "Truy cập, đường đi tới",
        "メモ": "Ghi chú, tờ giấy note",
        "ケース": "Hộp đựng, trường hợp (case)",
        "シート": "Tấm trải, ghế ngồi, bảng tính",
        "コース": "Khóa học, lộ trình, suất ăn theo trình tự",
        "コート": "Sân (tennis/bóng rổ), áo khoác dài",
        "ホーム": "Sân ga tàu điện",
        "オーダー": "Đặt hàng, gọi món",
        "ストップ": "Dừng lại, ngưng",
        "チェック": "Kiểm tra, rà soát",
        "ポケット": "Túi áo, túi quần",
        "ベテラン": "Người lão luyện, kỳ cựu",
        "メニュー": "Thực đơn, bảng chọn",
        "リスト": "Danh sách",
    })

    # Check all 90 words are unique!
    words = [row[1] for row in KATAKANA_78]
    assert len(set(words)) == 90, f"Duplicate Katakana words found: {[w for w in words if words.count(w) > 1]}"

    pairs_js = []
    quizzes_js = []
    errors = []

    for idx, row in enumerate(KATAKANA_78):
        stt, word, meaning_vi, origin, native_jp, cat, tpl, dist3, sentence_vi, wasei_note = row
        if stt <= 39:
            part, num_in_part = 1, stt
        elif stt <= 78:
            part, num_in_part = 2, stt - 39
        else:
            part, num_in_part = 3, stt - 78

        if "___" not in tpl:
            errors.append(f"#{stt} {word}: missing ___ blank")
            continue
        if len(dist3) != 3 or word in dist3 or len(set(dist3)) != 3:
            errors.append(f"#{stt} {word}: invalid distractors {dist3}")
            continue

        # Deterministic varied answer position (0..3) before runtime shuffle
        ans_idx = (stt * 3 + 1) % 4
        options = list(dist3)
        options.insert(ans_idx, word)

        options_vi = []
        for oi, opt in enumerate(options):
            m_vi = meaning_by_word.get(opt)
            if not m_vi:
                errors.append(f"#{stt} {word}: missing Vietnamese meaning for distractor '{opt}'")
                m_vi = opt
            options_vi.append(f"{m_vi} (ĐÚNG)" if oi == ans_idx else m_vi)

        # Build HTML representations
        sentence_html = tpl.replace("___", '<u class="q-target">（　　　）</u>')
        sentence_reverse_html = tpl.replace("___", f'<u class="q-target">{word}</u>')
        sentence_tts = tpl.replace("___", word).replace(" ", "")

        occ = kata_freq.get(word, [])
        freq_count = len(occ)
        freq_exams = ", ".join(occ) if occ else ""
        is_extra = stt > 78
        if freq_count >= 2:
            freq_badge = f"🔥 Đề thật {freq_count}x ({freq_exams})"
        elif freq_count == 1:
            freq_badge = f"📌 Đề thật {freq_exams}"
        else:
            freq_badge = ""

        qid = f"kata_p{part}_q{num_in_part}"
        pairs_js.append({
            "id": f"kpair_{stt}",
            "quiz_id": qid,
            "stt": stt,
            "word": word,
            "meaning_vi": meaning_vi,
            "origin": origin,
            "native_jp": native_jp,
            "category": cat,
            "wasei_note": wasei_note,
            "is_extra": is_extra,
            "freq_count": freq_count,
            "freq_badge": freq_badge,
            "freq_exams": freq_exams
        })

        quizzes_js.append({
            "id": qid,
            "stt": stt,
            "part": part,
            "num": num_in_part,
            "word": word,
            "meaning_vi": meaning_vi,
            "origin": origin,
            "native_jp": native_jp,
            "category": cat,
            "sentence_html": sentence_html,
            "sentence_reverse_html": sentence_reverse_html,
            "sentence_tts": sentence_tts,
            "options": options,
            "options_vi": options_vi,
            "answer": ans_idx,
            "sentence_vi": sentence_vi,
            "wasei_note": wasei_note,
            "is_extra": is_extra,
            "freq_count": freq_count,
            "freq_badge": freq_badge,
            "freq_exams": freq_exams
        })

    if errors:
        print(f"VALIDATION FAILED ({len(errors)} errors):")
        for e in errors:
            print("  ERROR:", e)
        sys.exit(1)

    with open(OUT_JS, "w", encoding="utf-8") as f:
        f.write("// Verified JLPT N3 90 Katakana Words (78 Base + 12 Real-Exam 2010-2026 Extra) & Mondai 3 Practice Database\n")
        f.write("const KATAKANA_78_LIST = " + json.dumps(pairs_js, ensure_ascii=False, indent=2) + ";\n\n")
        f.write("const KATAKANA_N3_DATA = " + json.dumps(quizzes_js, ensure_ascii=False, indent=2) + ";\n")

    p1 = sum(1 for q in quizzes_js if q["part"] == 1)
    p2 = sum(1 for q in quizzes_js if q["part"] == 2)
    p3 = sum(1 for q in quizzes_js if q["part"] == 3)
    cats = sorted(set(x["category"] for x in pairs_js))
    print(f"SUCCESS! Built {OUT_JS}")
    print(f"Unique Words: {len(pairs_js)} | Quizzes: {len(quizzes_js)} (Part 1: {p1}, Part 2: {p2}, Part 3 Extra: {p3}) | Categories: {cats}")


if __name__ == "__main__":
    main()
