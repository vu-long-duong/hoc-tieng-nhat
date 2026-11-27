# -*- coding: utf-8 -*-
# Part 2: 43 Core Mondai 5 Words (Repeated >=2x across M1-M5 OR appeared in M5 2021-2026)

M5_PART2 = [
    (
        "整理", "せいり", "Danh từ / Danh động từ",
        "Sắp xếp gọn gàng, phân loại dọn dẹp (tài liệu, đồ đạc, suy nghĩ, thông tin)",
        "書類を整理する / 頭の中を整理する / 荷物を整理する",
        "Dùng để sắp xếp thứ tự, bỏ đồ thừa cho ngăn nắp (giấy tờ, tủ đồ, ý tưởng); KHÔNG dùng cho việc lau chùi bụi bẩn (掃除する) hay sửa đồ hỏng (修理する).",
        0,
        [
            "引っ越し前に、いらない服や本を整理して捨てた。",
            "床がほこりだらけだったので、掃除機で床を整理した。",
            "壊れたパソコンを電気屋で整理してもらった。",
            "テストで間違えた答えを赤ペンで整理した。"
        ],
        [
            "✅ ĐÚNG — Trước khi chuyển nhà, tôi sắp xếp, lọc bỏ quần áo và sách không cần thiết (服や本を整理する).",
            "❌ SAI — Hút bụi lau sàn dùng 掃除する (そうじする), không dùng 整理.",
            "❌ SAI — Sửa máy tính hỏng dùng 修理する (しゅうり), không dùng 整理.",
            "❌ SAI — Sửa đáp án sai dùng 直す (なおす), không dùng 整理."
        ]
    ),
    (
        "清潔", "せいけつ", "Tính từ / Phó từ",
        "Sạch sẽ, hợp vệ sinh (quần áo, nhà bếp, phòng ốc, cơ thể, tay)",
        "清潔な部屋 / 清潔に保つ / 清潔感がある",
        "CHỈ sự sạch sẽ, không bẩn/không vi khuẩn về MẶT VỆ SINH; KHÔNG dùng cho cảnh đẹp (きれい), tâm hồn thuần khiết hay nước trong vắt nhìn thấu đáy (澄んでいる).",
        2,
        [
            "春になると、公園の桜がとても清潔に咲く。",
            "山のてっぺんから見る夜景は本当に清潔だった。",
            "料理をする前は、手を洗って清潔にしてください。",
            "彼はとても清潔な声で歌を歌う。"
        ],
        [
            "❌ SAI — Hoa anh đào nở đẹp dùng きれいに咲く, không dùng 清潔.",
            "❌ SAI — Cảnh đêm đẹp dùng きれい hoặc 美しい (うつくしい).",
            "✅ ĐÚNG — Trước khi nấu ăn, hãy rửa tay giữ cho sạch sẽ hợp vệ sinh (清潔にする).",
            "❌ SAI — Giọng hát trong trẻo dùng きれいな声 hoặc 澄んだ声, không dùng 清潔."
        ]
    ),
    (
        "預ける", "あずける", "Động từ",
        "Gửi nhờ ai giữ hộ (hành lý, tiền vào ngân hàng, con ở nhà trẻ, thú cưng)",
        "荷物を預ける / 銀行にお金を預ける / 子どもを預ける",
        "Cẩn thận cặp đối lập: 預ける (MÌNH gửi nhờ người khác giữ hộ) ↔ 預かる (MÌNH nhận giữ hộ cho người khác)! KHÔNG dùng cho việc gửi thư/bưu phẩm đi xa (送る).",
        1,
        [
            "誕生日に、国の母へプレゼントを郵便局から預けた。",
            "重いスーツケースをホテルのフロントに預けてから観光した。",
            "旅行に行く友達の犬を、1週間わたしの家で預けることになった。",
            "図書館で借りた本をカウンターに預けて帰った。"
        ],
        [
            "❌ SAI — Gửi quà qua bưu điện dùng 送る (おくる), không dùng 預ける.",
            "✅ ĐÚNG — Tôi gửi vali nặng ở quầy lễ tân khách sạn rồi mới đi tham quan (フロントに預ける).",
            "❌ SAI — Nhận trông hộ chó cho bạn phải dùng 預かる (あずかる), ngược chiều với 預ける!",
            "❌ SAI — Trả sách thư viện dùng 返す (かえす), không dùng 預ける."
        ]
    ),
    (
        "原料", "げんりょう", "Danh từ",
        "Nguyên liệu (vật liệu gốc được chế biến biến đổi chất để làm thực phẩm, giấy, nhựa, bia)",
        "パンの原料 / プラスチックの原料 / 原料を輸入する",
        "CHỈ nguyên liệu thô dùng để sản xuất/chế biến (thường biến đổi hình dạng như lúa mì làm bánh, dầu mỏ làm nhựa, đậu nành làm nước tương); KHÔNG dùng cho học phí/cước phí (料金) hay tài liệu học (資料).",
        3,
        [
            "この電車の原料は大人500円です。",
            "レポートを書くために、図書館で原料を集めた。",
            "テストの原料がよくわからなくて困っている。",
            "しょうゆの主な原料は大豆と小麦と塩だ。"
        ],
        [
            "❌ SAI — Tiền vé tàu dùng 料金 (りょうきん) hoặc 運賃 (うんちん), bẫy chữ 料.",
            "❌ SAI — Tài liệu viết báo cáo dùng 資料 (しりょう), không dùng 原料.",
            "❌ SAI — Nguyên nhân/lý do dùng 原因 (げんいん), không dùng 原料.",
            "✅ ĐÚNG — Nguyên liệu chính của nước tương là đậu nành, lúa mì và muối (しょうゆの原料)."
        ]
    ),
    (
        "どきどき", "どきどき", "Tính từ / Phó từ",
        "Hồi hộp, tim đập thình thịch (lo lắng, phấn khích, bất ngờ)",
        "胸がどきどきする / どきどきしながら待つ",
        "CHỈ nhịp TIM ĐẬP NHANH vì hồi hộp, căng thẳng hoặc phấn khích; KHÔNG dùng cho âm thanh đồ vật rơi/va đập hay cơn đau đầu nhói lên (ずきずき).",
        0,
        [
            "大勢の前でスピーチをする前、緊張して胸がどきどきした。",
            "頭が痛くて、さっきからずっとどきどきしている。",
            "強い風で窓ガラスがどきどき揺れている。",
            "お腹がすいて、さっきからどきどき鳴っている。"
        ],
        [
            "✅ ĐÚNG — Trước khi phát biểu trước đám đông, tôi căng thẳng tim đập thình thịch (胸がどきどきした).",
            "❌ SAI — Đau đầu/đau răng nhói từng cơn dùng ずきずき, không dùng どきどき.",
            "❌ SAI — Cửa kính rung lắc kêu lạch cạch dùng がたがた, không dùng どきどき.",
            "❌ SAI — Bụng đói kêu ùng ục dùng ぐうぐう, không dùng どきどき."
        ]
    ),
    (
        "出張", "しゅっちょう", "Danh từ / Danh động từ",
        "Đi công tác (vì việc công ty phải đến tỉnh/nước khác tạm thời)",
        "大阪へ出張する / 海外出張 / 出張から戻る",
        "CHỈ đi CÔNG TÁC theo nhiệm vụ công ty/cơ quan; KHÔNG dùng cho đi du lịch cá nhân (旅行), đi học (通学) hay chuyển công tác định cư lâu dài (転勤).",
        2,
        [
            "夏休みに家族みんなで沖縄へ出張して楽しかった。",
            "父は来月から大阪の支店に出張して、そこに5年住む予定だ。",
            "明日から3日間、仕事で名古屋へ出張することになった。",
            "毎日電車で30分かけて会社に出張している。"
        ],
        [
            "❌ SAI — Đi chơi cùng gia đình kỳ nghỉ hè dùng 旅行 (りょこう), không dùng 出張.",
            "❌ SAI — Chuyển chi nhánh làm việc và sống lâu dài 5 năm dùng 転勤 (てんきん), không phải đi công tác ngắn ngày.",
            "✅ ĐÚNG — Từ ngày mai tôi đi công tác ở Nagoya 3 ngày vì công việc (名古屋へ出張する).",
            "❌ SAI — Đi làm hằng ngày dùng 通勤する (つうきんする), không dùng 出張."
        ]
    ),
    (
        "どなる", "どなる", "Động từ",
        "Quát tháo, gầm lên giận dữ (nói rất to vì tức giận)",
        "大声でどなる / 部長にどなられた / どなり声",
        "Luôn mang sắc thái TỨC GIẬN quát mắng lớn tiếng; KHÔNG dùng cho việc reo hò cổ vũ vui vẻ (応援する/叫ぶ), hát to hay gọi to báo tin vui.",
        1,
        [
            "試合で勝ったとき、うれしくてみんなで大声でどなった。",
            "大事な書類をなくしてしまい、課長にひどくどなられた。",
            "カラオケで好きな歌を元気よくどなって楽しかった。",
            "遠くにいる友達を呼ぶために、名前をやさしくどなった。"
        ],
        [
            "❌ SAI — Reo hò vui mừng khi thắng trận dùng 叫ぶ (さけぶ) hoặc 歓声を上げる, không dùng どなる.",
            "✅ ĐÚNG — Làm mất tài liệu quan trọng nên bị trưởng phòng quát mắng dữ dội (課長にどなられた).",
            "❌ SAI — Hát karaoke vui vẻ dùng 歌う (うたう), không dùng どなる.",
            "❌ SAI — Gọi tên bạn dịu dàng không thể đi với どなる (quát dữ dội)."
        ]
    ),
    (
        "制限", "せいげん", "Danh từ / Danh động từ",
        "Giới hạn, hạn chế (tốc độ, thời gian, số lượng, độ tuổi, muối/đường)",
        "時間制限 / 制限速度 / 入場を制限する",
        "CHỈ việc ĐẶT RA MỨC TRẦN / RÀNG BUỘC theo quy định hoặc sức khỏe; KHÔNG dùng cho hạn chót nộp bài (締め切り) hay cấm tiệt 100% không cho làm (禁止).",
        3,
        [
            "レポートの制限は明日の夕方5時までです。",
            "この部屋は火を使うことが完全に制限されています。",
            "電車の時間が制限になったので、急いで走った。",
            "健康のために、医者から塩分の摂取を制限されている。"
        ],
        [
            "❌ SAI — Hạn chót nộp báo cáo dùng 締め切り (しめきり) hoặc 期限 (きげん).",
            "❌ SAI — Cấm tuyệt đối lửa dùng 禁止 (きんし), không dùng 完全に制限.",
            "❌ SAI — Sát giờ tàu chạy dùng 時間ぎりぎり, không dùng 時間制限.",
            "✅ ĐÚNG — Vì sức khỏe nên tôi bị bác sĩ hạn chế lượng muối nạp vào (塩分を制限する)."
        ]
    ),
    (
        "暗記", "あんき", "Danh từ / Danh động từ",
        "Học thuộc lòng (từ vựng, số điện thoại, bài thơ, công thức mà không cần nhìn sách)",
        "単語を暗記する / 電話番号を暗記する / 丸暗記",
        "CHỈ việc CỐ GẮNG GHI NHỚ THUỘC LÒNG thông tin/chữ nghĩa vào đầu; KHÔNG dùng cho ký ức tự nhiên về kỷ niệm xưa (思い出) hay ghi chép vào sổ (メモする/記録する).",
        0,
        [
            "スピーチコンテストのために、原稿を全部暗記した。",
            "忘れないように、先生の話をノートに暗記した。",
            "子どものころの楽しい思い出を今でもよく暗記している。",
            "昨日食べた晩ごはんのメニューを暗記している？"
        ],
        [
            "✅ ĐÚNG — Để thi hùng biện, tôi đã học thuộc lòng toàn bộ bài phát biểu (原稿を暗記する).",
            "❌ SAI — Ghi chép vào vở dùng メモする hoặc 書き留める, không dùng 暗記.",
            "❌ SAI — Nhớ kỷ niệm hồi nhỏ dùng 覚えている (おぼえている), không ai 'học thuộc lòng' kỷ niệm.",
            "❌ SAI — Nhớ tối qua ăn gì dùng 覚えている, không dùng 暗記."
        ]
    ),
    (
        "そっくり", "そっくり", "Tính từ / Phó từ",
        "Giống y hệt nhau, giống như đúc (ngoại hình, giọng nói, cách làm)",
        "AはBにそっくりだ / 母親にそっくりな顔",
        "Cấu trúc chuẩn: AはBにそっくりだ (giống hệt về tổng thể); KHÔNG dùng khi chỉ giống 1 phần nhỏ hay dùng để so sánh kích thước/giá tiền bằng nhau (同じ).",
        2,
        [
            "この2つのりんごは値段がそっくりで、どちらも100円だ。",
            "昨日のテストの点数は、田中さんとそっくりだった。",
            "あの双子は顔だけでなく、声までそっくりだ。",
            "明日の天気は今日とそっくりに暑くなるらしい。"
        ],
        [
            "❌ SAI — Giá tiền bằng nhau dùng 同じ (おなじ), không dùng そっくり.",
            "❌ SAI — Điểm số giống nhau dùng 同じ, không dùng そっくり.",
            "✅ ĐÚNG — Cặp song sinh kia không chỉ khuôn mặt mà cả giọng nói cũng giống nhau như đúc.",
            "❌ SAI — Nóng giống hôm nay dùng 今日と同じように, không dùng そっくりに."
        ]
    ),
    (
        "内側", "うちがわ", "Danh từ",
        "Mặt trong, phía bên trong (của túi, áo khoác, hộp, vạch trắng sân ga)",
        "ジャケットの内側 / 白線の内側 / ドアの内側",
        "CHỈ PHÍA BÊN TRONG có ranh giới đối lập với 外側 (mặt ngoài); KHÔNG dùng cho nội dung bên trong câu chuyện (内容) hay trong khoảng thời gian (以内).",
        1,
        [
            "この小説の内側はとても面白くて感動した。",
            "電車が来ますので、黄色い線の内側でお待ちください。",
            "3日以内、つまり水曜日の内側に返事をください。",
            "私の家族の内側では、誰も料理ができない。"
        ],
        [
            "❌ SAI — Nội dung cuốn tiểu thuyết dùng 内容 (ないよう), không dùng 内側.",
            "✅ ĐÚNG — Tàu sắp đến, xin vui lòng chờ phía bên trong vạch vàng (黄色い線の内側).",
            "❌ SAI — Trong vòng thời hạn dùng 以内 (いない) hoặc うちに, không dùng 内側.",
            "❌ SAI — Trong gia đình tôi dùng 家族の中で, không dùng 内側."
        ]
    ),
    (
        "変化", "へんか", "Danh từ / Danh động từ",
        "Thay đổi, biến hóa (thời tiết, môi trường, xã hội, nhiệt độ, tâm trạng)",
        "環境が変化する / 気温の変化 / 大きな変化がある",
        "Là TỰ ĐỘNG TỪ (tự thay đổi/biến đổi trạng thái theo thời gian); KHÔNG dùng với を để chủ động đổi đồ/đổi tiền (換える/変える/交換する).",
        3,
        [
            "空港で日本円をアメリカドルに変化した。",
            "サイズが合わなかったので、店へ行って靴を変化してもらった。",
            "引っ越しをしたので、銀行の住所を変化した。",
            "この10年で、人々の働き方は大きく変化した。"
        ],
        [
            "❌ SAI — Đổi ngoại tệ dùng 両替する (りょうがえ) hoặc 換える, không dùng 変化.",
            "❌ SAI — Đổi cỡ giày ở cửa hàng dùng 交換する (こうかん), không dùng 変化.",
            "❌ SAI — Thay đổi đăng ký địa chỉ dùng 変更する (へんこう), không dùng 変化.",
            "✅ ĐÚNG — Trong 10 năm qua, cách làm việc của mọi người đã thay đổi lớn (働き方が変化する)."
        ]
    ),
    (
        "目的", "もくてき", "Danh từ",
        "Mục đích (lý do/đích hướng tới của một chuyến đi, việc học, cuộc họp)",
        "旅行の目的 / 目的を達成する / 留学の目的",
        "CHỈ mục đích hướng tới; KHÔNG dùng để chỉ địa điểm đích (目的地 mới là nơi đến, không dùng 目的 một mình để thay cho 行き先) hay nguyên nhân đã xảy ra (原因).",
        0,
        [
            "今回の出張の目的は、新しい取引先と契約を結ぶことだ。",
            "遅刻した目的は、電車が事故で止まったからだ。",
            "次の駅がこの電車の目的ですので、お忘れ物のないように。",
            "この料理の目的は、新鮮な野菜を使うことです。"
        ],
        [
            "✅ ĐÚNG — Mục đích chuyến công tác lần này là ký hợp đồng với đối tác mới (出張の目的).",
            "❌ SAI — Lý do/nguyên nhân đi muộn phải dùng 理由 (りゆう) hoặc 原因 (げんいん), không dùng 目的.",
            "❌ SAI — Ga cuối/điểm đến dùng 終点 (しゅうてん) hoặc 目的地, không dùng 目的 đứng một mình.",
            "❌ SAI — Bí quyết/đặc trưng của món ăn dùng コツ hoặc 特徴, không dùng 目的."
        ]
    ),
    (
        "共通", "きょうつう", "Danh từ / Danh động từ",
        "Chung, giống nhau ở cả hai hay nhiều phía (sở thích chung, điểm chung, vé dùng chung)",
        "共通の趣味 / 共通点がある / 全員に共通する",
        "CHỈ ĐẶC ĐIỂM / SỞ THÍCH / QUY ĐỊNH dùng chung hoặc giống nhau giữa 2 bên trở lên; KHÔNG dùng cho giao thông đi lại (交通) hay việc cùng nhau đi đâu (一緒に).",
        2,
        [
            "明日は友達と共通で映画を見に行く予定だ。",
            "この道は朝になると共通が多くて危ない。",
            "私と田中さんは音楽が好きだという共通の趣味がある。",
            "この部屋は広くて共通がいいので、会議にぴったりだ。"
        ],
        [
            "❌ SAI — Cùng nhau đi xem phim dùng 一緒に (いっしょに), không dùng 共通で.",
            "❌ SAI — Giao thông đông đúc dùng 交通 (こうつう), bẫy chữ 通.",
            "✅ ĐÚNG — Tôi và anh Tanaka có sở thích chung là thích âm nhạc (共通の趣味).",
            "❌ SAI — Phòng thoáng gió/tiện đi lại dùng 風通しがいい hoặc 交通の便がいい."
        ]
    ),
    (
        "取り消す", "とりけす", "Động từ",
        "Hủy bỏ (lịch đặt chỗ, đơn hàng, lời đã nói, giấy phép)",
        "予約を取り消す / 注文を取り消す / 発言を取り消す",
        "CHỈ việc HỦY BỎ 1 đặt chỗ/đơn hàng/quyết định/lời nói đã có hiệu lực; KHÔNG dùng cho tắt đèn (消す), xóa bảng (消す) hay lấy đồ ra khỏi túi (取り出す).",
        1,
        [
            "部屋を出るときは、必ず電気を取り消してください。",
            "急な仕事が入ったので、レストランの予約を取り消した。",
            "かばんの中から財布を取り消して、お金を払った。",
            "黒板に書いてある文字をきれいに取り消した。"
        ],
        [
            "❌ SAI — Tắt điện dùng 消す (けす), không dùng 取り消す.",
            "✅ ĐÚNG — Vì có việc đột xuất nên tôi đã hủy đặt bàn nhà hàng (予約を取り消す).",
            "❌ SAI — Lấy ví từ trong cặp ra dùng 取り出す (とりだす), bẫy gần âm.",
            "❌ SAI — Xóa chữ trên bảng đen dùng 消す (けす), không dùng 取り消す."
        ]
    ),
    (
        "ほえる", "ほえる", "Động từ",
        "Sủa, gầm, hú (chó sủa, sư tử/sói gầm)",
        "犬がほえる / ライオンがほえる / 知らない人にほえる",
        "CHỈ tiếng kêu hung dữ/to của CHÓ / SƯ TỬ / THÚ DỮ; KHÔNG dùng cho mèo kêu (鳴く), chim hót (鳴く), em bé khóc (泣く) hay người nói chuyện.",
        3,
        [
            "朝早くから庭の木で小鳥がきれいにほえている。",
            "おなかがすいたのか、赤ちゃんが大きな声でほえ始めた。",
            "うちの子猫はえさがほしいとき、かわいくほえる。",
            "隣の家の犬は、知らない人が通るといつも激しくほえる。"
        ],
        [
            "❌ SAI — Chim hót dùng 鳴く (なく) hoặc さえずる, không dùng ほえる.",
            "❌ SAI — Em bé khóc dùng 泣く (なく), không dùng ほえる.",
            "❌ SAI — Mèo kêu meo meo dùng 鳴く (なく), không dùng ほえる.",
            "✅ ĐÚNG — Con chó nhà hàng xóm hễ có người lạ đi qua là sủa dữ dội (犬がほえる)."
        ]
    ),
    (
        "健康", "けんこう", "Danh từ / Tính từ / Phó từ",
        "Sức khỏe; khỏe mạnh (cơ thể & tinh thần con người, sinh vật)",
        "健康に気をつける / 健康的な生活 / 健康診断",
        "CHỈ sức khỏe của CON NGƯỜI (hoặc sinh vật sống); KHÔNG dùng cho đồ vật bền chắc (丈夫な), kinh tế ổn định hay bầu không khí vui vẻ.",
        0,
        [
            "健康のために、毎日野菜をたくさん食べてよく歩くようにしている。",
            "このかばんはとても健康なので、重い本を入れても壊れない。",
            "修理に出したら、パソコンがまた健康に動くようになった。",
            "今日は天気が健康で、洗濯物がよく乾きそうだ。"
        ],
        [
            "✅ ĐÚNG — Vì sức khỏe, tôi cố gắng mỗi ngày ăn nhiều rau và đi bộ nhiều (健康のために).",
            "❌ SAI — Cặp sách bền chắc dùng 丈夫 (じょうぶ), không dùng 健康 cho đồ vật.",
            "❌ SAI — Máy tính chạy ổn định dùng 正常 (せいじょう) hoặc 問題なく, không dùng 健康.",
            "❌ SAI — Thời tiết đẹp dùng 天気がいい, không dùng 健康."
        ]
    ),
    (
        "報告", "ほうこく", "Danh từ / Danh động từ",
        "Báo cáo (kết quả công việc, tình hình, sự việc cho cấp trên/nhóm)",
        "結果を報告する / 部長に報告する / 報告書を書く",
        "CHỈ việc trình bày lại KẾT QUẢ / TÌNH HÌNH đã điều tra hay thực hiện cho cấp trên/mọi người; KHÔNG dùng cho quảng cáo bán hàng (広告), dự báo thời tiết (予報) hay chào hỏi đơn thuần.",
        2,
        [
            "テレビの天気報告によると、明日は雨が降るそうだ。",
            "新しいスマホの報告を新聞で見て、欲しくなった。",
            "調査が終わったら、すぐに課長に結果を報告してください。",
            "朝、会社に着いたら同僚に「おはようございます」と報告した。"
        ],
        [
            "❌ SAI — Dự báo thời tiết dùng 天気予報 (てんきよほう), không dùng 報告.",
            "❌ SAI — Quảng cáo sản phẩm trên báo dùng 広告 (こうこく), bẫy chữ 告.",
            "✅ ĐÚNG — Điều tra xong hãy báo cáo kết quả ngay cho trưởng phòng (結果を報告する).",
            "❌ SAI — Chào buổi sáng đồng nghiệp dùng あいさつする, không dùng 報告."
        ]
    ),
    (
        "区別", "くべつ", "Danh từ / Danh động từ",
        "Phân biệt (giữa A và B để không nhầm lẫn, hoặc tách riêng loại)",
        "AとBを区別する / 区別がつかない / 仕事とプライベートを区別する",
        "CHỈ việc nhận ra sự KHÁC NHAU hoặc tách bạch giữa 2 đối tượng (〜と〜を区別する); KHÔNG dùng cho việc chia tay người yêu/bạn bè (別れる) hay chia bánh làm đôi (分ける).",
        1,
        [
            "大学を卒業して、仲のよかった友達と区別するのが寂しい。",
            "この2つの漢字は形がよく似ていて、区別するのが難しい。",
            "大きいケーキを4人で同じ大きさに区別して食べた。",
            "引っ越す前に、古い本を友達に区別してあげた。"
        ],
        [
            "❌ SAI — Chia tay bạn bè dùng 別れる (わかれる), bẫy chữ 別.",
            "✅ ĐÚNG — Hai chữ Kanji này hình dáng rất giống nhau nên khó phân biệt (区別するのが難しい).",
            "❌ SAI — Chia bánh làm 4 phần bằng nhau dùng 分ける (わける), không dùng 区別.",
            "❌ SAI — Chia/tặng sách cho bạn dùng 分ける hoặc あげる, không dùng 区別."
        ]
    ),
    (
        "延期", "えんき", "Danh từ / Danh động từ",
        "Hoãn lại, dời sang ngày sau (cuộc họp, trận đấu, sự kiện, chuyến đi)",
        "試合を延期する / 来週に延期になる",
        "CHỈ việc DỜI LỊCH sang thời điểm muộn hơn (vẫn sẽ diễn ra sau đó); KHÔNG dùng cho việc hủy bỏ luôn (中止), kéo dài thời lượng đang diễn ra (延長) hay đi trễ giờ (遅刻).",
        3,
        [
            "寝坊してしまい、朝の会議に15分延期した。",
            "映画がとても面白かったので、上映時間が30分延期された。",
            "この紐は短いから、もう少し長く延期してほしい。",
            "台風が近づいているため、明日の運動会は来週に延期された。"
        ],
        [
            "❌ SAI — Ngủ quên đến trễ cuộc họp dùng 遅刻する (ちこくする), không dùng 延期.",
            "❌ SAI — Kéo dài thêm thời lượng đang diễn ra dùng 延長する (えんちょうする), bẫy siêu hay ra!",
            "❌ SAI — Kéo dài sợi dây dùng 伸ばす (のばす), không dùng 延期.",
            "✅ ĐÚNG — Vì bão đang tới gần nên hội thao ngày mai đã bị hoãn sang tuần sau (来週に延期された)."
        ]
    ),
    (
        "追いつく", "おいつく", "Động từ",
        "Đuổi kịp, bắt kịp (người đi trước, trình độ, tiến độ công việc)",
        "前の人に追いつく / 勉強の遅れに追いつく",
        "CHỈ việc TỪ PHÍA SAU bắt kịp ngang hàng với người/tiến độ phía trước (đi với に); KHÔNG dùng cho việc vượt qua lên trước (追い抜く/追い越す) hay kịp giờ tàu/hẹn (間に合う).",
        0,
        [
            "先に出発した友達に、走ってやっと追いついた。",
            "急いで駅へ走ったので、8時の電車に追いついた。",
            "前の車をスピードを出して追いつき、先頭に出た。",
            "昨日の夜、ずっと欲しかった限定バッグにやっと追いついた。"
        ],
        [
            "✅ ĐÚNG — Tôi chạy theo và cuối cùng cũng đuổi kịp người bạn xuất phát trước (友達に追いついた).",
            "❌ SAI — Kịp giờ tàu điện dùng 間に合う (まにあう), không dùng 追いつく (trừ khi chạy theo tàu đang chạy).",
            "❌ SAI — Vượt qua xe trước lên dẫn đầu dùng 追い抜く (おいぬく) hoặc 追い越す (おいこす).",
            "❌ SAI — Mua/có được chiếc túi mơ ước dùng 手に入れる, không dùng 追いつく."
        ]
    ),
    (
        "かれる", "かれる", "Động từ",
        "Héo úa, khô héo (hoa, cây cối); khàn giọng (声がかれる)",
        "花がかれる / 木がかれる / 声がかれる",
        "CHỈ CÂY CỐI / HOA LÁ chết khô héo (枯れる) hoặc giọng nói bị khàn (嗄れる); KHÔNG dùng cho quần áo khô (乾く), thức ăn ôi thiu (腐る) hay sông cạn thông thường (cũng có thể dùng cho giếng/suối cạn 涸れる nhưng N3 chủ yếu hỏi cây/hoa).",
        2,
        [
            "天気がいいので、外に干した洗濯物がすぐにかれた。",
            "暑い部屋に置いておいた牛乳がかれてしまった。",
            "旅行中に水をあげられなかったので、ベランダの鉢植えの花がかれてしまった。",
            "昨日たくさん走ったので、今朝は足がかれている。"
        ],
        [
            "❌ SAI — Quần áo phơi nắng khô dùng 乾く (かわく), không dùng かれる.",
            "❌ SAI — Sữa để nóng bị hỏng/thiu dùng 腐る (くさる) hoặc 傷む, không dùng かれる.",
            "✅ ĐÚNG — Trong lúc đi du lịch không tưới nước được nên hoa trồng ngoài ban công bị héo mất.",
            "❌ SAI — Chân mỏi rã rời dùng だるい hoặc 疲れている, không dùng かれる."
        ]
    ),
    (
        "分類", "ぶんるい", "Danh từ / Danh động từ",
        "Phân loại (chia theo từng nhóm/loại dựa vào đặc điểm: sách, rác, dữ liệu)",
        "種類別に分類する / データを分類する / 本を分野ごとに分類する",
        "CHỈ việc XẾP CÁC ĐỐI TƯỢNG VÀO TỪNG NHÓM LOẠI (〜に分類する); KHÔNG dùng cho việc chia tiền/chia bánh (分ける) hay phân biệt 2 vật dễ nhầm (区別).",
        1,
        [
            "みんなで食べた食事代を4人で分類して払った。",
            "図書館の本は、歴史や文学などの分野ごとに分類されている。",
            "双子の兄と弟はそっくりなので、なかなか分類できない。",
            "紙をハサミで小さく分類した。"
        ],
        [
            "❌ SAI — Chia đều tiền ăn cho 4 người dùng 割り勘にする hoặc 分ける, không dùng 分類.",
            "✅ ĐÚNG — Sách thư viện được phân loại theo từng lĩnh vực như lịch sử, văn học (分野ごとに分類する).",
            "❌ SAI — Phân biệt 2 anh em sinh đôi dùng 区別する (くべつする), không dùng 分類.",
            "❌ SAI — Cắt giấy thành mảnh nhỏ dùng 切る (きる), không dùng 分類."
        ]
    ),
    (
        "引き受ける", "ひきうける", "Động từ",
        "Đảm nhận, nhận lời gánh vác trách nhiệm (công việc, vai trò, lời nhờ vả)",
        "仕事を引き受ける / 役を引き受ける / 頼みを引き受ける",
        "CHỈ việc NHẬN LỜI LÀM / CHỊU TRÁCH NHIỆM 1 việc hay vai trò ai đó giao phó; KHÔNG dùng cho việc nhận bưu phẩm/tiền (受け取る), thi cử (受ける) hay đón khách (迎える).",
        3,
        [
            "玄関に届いた荷物をサインして引き受けた。",
            "来月、日本語能力試験のN3を引き受ける予定だ。",
            "空港まで友達を迎えに行って、一緒に引き受けた。",
            "部長に頼まれて、新しいプロジェクトのリーダーを引き受けた。"
        ],
        [
            "❌ SAI — Ký nhận bưu kiện dùng 受け取る (うけとる), không dùng 引き受ける.",
            "❌ SAI — Tham dự kỳ thi JLPT dùng 試験を受ける (うける), không dùng 引き受ける.",
            "❌ SAI — Đón bạn ở sân bay dùng 迎える (むかえる), không dùng 引き受ける.",
            "✅ ĐÚNG — Được trưởng phòng nhờ, tôi đã nhận lời làm trưởng nhóm dự án mới (リーダーを引き受ける)."
        ]
    ),
    (
        "減少", "げんしょう", "Danh từ / Danh động từ",
        "Giảm sút, sụt giảm (dân số, số lượng, doanh thu, tai nạn)",
        "人口が減少する / 売上が減少する / 事故が減少する",
        "CHỈ SỐ LƯỢNG / TỶ LỆ giảm đi (trái nghĩa 増加); KHÔNG dùng cho việc giảm kích thước vật lý (小さくなる/縮む), giảm tốc độ (スピードを落とす) hay hạ giá (値下げ).",
        0,
        [
            "少子化の影響で、この町の人口は毎年減少している。",
            "このセーターは洗濯したら、サイズが減少してしまった。",
            "カーブの前では車のスピードを減少してください。",
            "セール中なので、コートの値段が30％減少して売られている。"
        ],
        [
            "✅ ĐÚNG — Do ảnh hưởng tỷ lệ sinh thấp, dân số thị trấn này giảm đi mỗi năm (人口が減少する).",
            "❌ SAI — Áo len giặt bị co rút nhỏ lại dùng 縮む (ちぢむ), không dùng 減少.",
            "❌ SAI — Giảm tốc độ xe dùng スピードを落とす hoặc 減速する (げんそく).",
            "❌ SAI — Giảm giá bán dùng 値下げする hoặc 安くなる, không dùng 値段が減少して売られる."
        ]
    ),
    (
        "締め切り", "しめきり", "Danh từ",
        "Hạn chót nộp/đăng ký (deadline bài báo cáo, hồ sơ dự tuyển, đơn đăng ký)",
        "締め切りに間に合う / 締め切りを守る / 応募の締め切り",
        "CHỈ THỜI HẠN CUỐI CÙNG để nộp bài/hồ sơ/đăng ký (deadline); KHÔNG dùng cho hạn sử dụng thực phẩm (賞味期限), giờ đóng cửa hàng (閉店時間) hay việc đóng cửa sổ.",
        2,
        [
            "この牛乳は締め切りが明日までだから、早く飲もう。",
            "スーパーの締め切りは夜9時なので、急いで買い物に行った。",
            "レポートの締め切りは今週の金曜日なので、もうすぐ完成させなければ。",
            "寒いので、部屋の窓を締め切りにした。"
        ],
        [
            "❌ SAI — Hạn sử dụng thực phẩm dùng 賞味期限 / 消費期限, không dùng 締め切り.",
            "❌ SAI — Giờ đóng cửa siêu thị dùng 閉店時間 (へいてんじかん), không dùng 締め切り.",
            "✅ ĐÚNG — Hạn chót nộp báo cáo là thứ Sáu tuần này nên tôi phải sắp hoàn thành thôi (レポートの締め切り).",
            "❌ SAI — Đóng cửa sổ dùng 閉める (しめる), không dùng 締め切りにした."
        ]
    ),
    (
        "期限", "きげん", "Danh từ",
        "Thời hạn, hạn định (hạn trả sách, hạn nộp tiền, hạn sử dụng, hạn visa)",
        "賞味期限 / 返却期限 / 期限が切れる / 期限を守る",
        "Dùng rộng hơn 締め切り: chỉ MỐC THỜI HẠN HIỆU LỰC của thẻ, visa, sách mượn, đồ ăn, hợp đồng; KHÔNG dùng cho khoảng thời gian kéo dài (期間: きかん) hay tâm trạng (機嫌: きげん)!",
        1,
        [
            "夏休みの期限は7月20日から8月31日までです。",
            "図書館で借りた本の返却期限が過ぎてしまった。",
            "今日は部長の期限が悪そうだから、話しかけないほうがいい。",
            "バスに乗る期限まで、喫茶店でコーヒーを飲んだ。"
        ],
        [
            "❌ SAI — Khoảng thời gian từ ngày A đến ngày B dùng 期間 (きかん), bẫy siêu kinh điển!",
            "✅ ĐÚNG — Đã quá hạn trả cuốn sách mượn ở thư viện mất rồi (返却期限が過ぎる).",
            "❌ SAI — Tâm trạng tốt/xấu là 機嫌 (きげん — đồng âm khác chữ!), bẫy cực ác!",
            "❌ SAI — Giờ xe buýt khởi hành dùng 時間 (じかん) hoặc 出発時刻, không dùng 期限."
        ]
    ),
    (
        "早退", "そうたい", "Danh từ / Danh động từ",
        "Về sớm (rời trường học hoặc công ty trước giờ tan làm/tan học vì ốm, việc bận)",
        "会社を早退する / 具合が悪くて早退する",
        "CHỈ việc XIN VỀ SỚM trước giờ kết thúc tại trường học/công ty; KHÔNG dùng cho việc dậy sớm (早起き), đến sớm (早く着く) hay nghỉ làm cả ngày (欠勤/休む).",
        3,
        [
            "明日は新幹線に乗るので、朝5時に早退しなければならない。",
            "約束の時間より15分早退して、駅前で友達を待った。",
            "昨日は熱が高かったので、会社を一日中早退した。",
            "午後から急に頭が痛くなったので、会社を早退して病院へ行った。"
        ],
        [
            "❌ SAI — Dậy sớm dùng 早起きする (はやおきする), không dùng 早退.",
            "❌ SAI — Đến sớm trước giờ hẹn dùng 早く着く, không dùng 早退.",
            "❌ SAI — Nghỉ cả ngày không đi làm dùng 休む (やすむ) hoặc 欠勤する, không phải 早退.",
            "✅ ĐÚNG — Từ chiều đột nhiên đau đầu nên tôi xin về sớm ở công ty để đi bệnh viện (会社を早退する)."
        ]
    ),
    (
        "経由", "けいゆ", "Danh từ / Danh động từ",
        "Quá cảnh, đi ngang qua điểm trung gian (〜を経由する / 〜経由で)",
        "シンガポール経由で行く / 東京を経由する",
        "CHỈ ĐIỂM TRUNG GIAN nằm trên tuyến đường di chuyển (máy bay quá cảnh, xe buýt đi qua) hoặc truyền tin qua trung gian; KHÔNG dùng cho lý do (理由) hay kinh nghiệm (経験).",
        0,
        [
            "直行便が高かったので、香港を経由してヨーロッパへ行った。",
            "会社を休んだ経由を部長にメールで説明した。",
            "海外で働いた経由があるので、英語でのやり取りに慣れている。",
            "長い経由の末に、やっと夢をかなえることができた。"
        ],
        [
            "✅ ĐÚNG — Vé bay thẳng đắt nên tôi đã quá cảnh qua Hồng Kông để đi châu Âu (香港を経由して).",
            "❌ SAI — Lý do nghỉ làm dùng 理由 (りゆう), bẫy chữ 由.",
            "❌ SAI — Kinh nghiệm làm việc dùng 経験 (けいけん), bẫy chữ 経.",
            "❌ SAI — Quá trình/nỗ lực dài dùng 努力 (どりょく) hoặc 苦労 (くろう), không dùng 経由."
        ]
    ),
    (
        "未来", "みらい", "Danh từ",
        "Tương lai (khoảng thời gian xa phía trước của thế giới, nhân loại, đời người)",
        "明るい未来 / 未来の社会 / 子どもたちの未来",
        "Chỉ TƯƠNG LAI XA, rộng lớn (xã hội, nhân loại, ước mơ tương lai); KHÔNG dùng cho thời gian rất gần như ngày mai/tuần sau (来週/この後) hay câu chuyện quá khứ.",
        2,
        [
            "今日の未来に、友達と駅前のレストランで食事をする予定だ。",
            "未来の月曜日にテストがあるので、今週末は勉強する。",
            "100年後の未来の世界は、ロボットと一緒に暮らしているかもしれない。",
            "昨日までの未来のことを思い出して、少し懐かしくなった。"
        ],
        [
            "❌ SAI — Tối nay/lát nữa trong ngày không dùng 未来 (dùng 今夜 / この後).",
            "❌ SAI — Thứ Hai tuần sau dùng 来週の月曜日, không nói 未来の月曜日.",
            "✅ ĐÚNG — Thế giới tương lai 100 năm sau có lẽ sẽ sống cùng robot (100年後の未来).",
            "❌ SAI — Chuyện đã qua là 過去 (かこ), trái nghĩa với 未来."
        ]
    ),
    (
        "看板", "かんばん", "Danh từ",
        "Biển hiệu, bảng hiệu quảng cáo (treo trước cửa hàng, ven đường)",
        "店の看板 / 看板を出す / 看板を見る",
        "CHỈ BIỂN HIỆU cửa hàng/công ty hoặc biển báo ngoài trời; KHÔNG dùng cho bảng đen lớp học (黒板), thực đơn bàn ăn (メニュー) hay tấm ván gỗ làm bàn (板).",
        1,
        [
            "教室の看板に書いてある漢字をノートに写した。",
            "角を曲がると、赤い看板のパン屋さんが見えてきます。",
            "テーブルの上に置いてある看板を見て、コーヒーを注文した。",
            "大工さんが長い看板をのこぎりで切っていた。"
        ],
        [
            "❌ SAI — Bảng đen lớp học dùng 黒板 (こくばん), bẫy chữ 板.",
            "✅ ĐÚNG — Rẽ ở góc đường là sẽ thấy tiệm bánh có biển hiệu màu đỏ (赤い看板).",
            "❌ SAI — Thực đơn để gọi món dùng メニュー, không dùng 看板.",
            "❌ SAI — Tấm ván gỗ dùng 板 (いた), không dùng 看板."
        ]
    ),
    (
        "懐かしい", "なつかしい", "Tính từ / Phó từ",
        "Hoài niệm, thấy nhớ nhung da diết (khi gặp lại thứ/người gợi nhớ kỷ niệm đẹp xưa cũ)",
        "懐かしい曲 / 懐かしい友達 / 昔が懐かしい",
        "CHỈ cảm giác ẤM ÁP HOÀI NIỆM về KỶ NIỆM ĐẸP TRONG QUÁ KHỨ (bạn cũ, bài hát xưa, trường cũ); KHÔNG dùng cho chuyện buồn/đáng tiếc (残念), chuyện mới xảy ra hôm qua hay mong chờ tương lai (楽しみ).",
        3,
        [
            "来月の海外旅行が今からとても懐かしいです。",
            "昨日買ったばかりの新しい靴を見て、懐かしい気持ちになった。",
            "試験に落ちてしまって、本当に懐かしい。",
            "高校時代によく聴いていた曲をラジオで聴いて、とても懐かしくなった。"
        ],
        [
            "❌ SAI — Mong chờ chuyến du lịch tháng sau dùng 楽しみ (たのしみ), không dùng 懐かしい cho tương lai.",
            "❌ SAI — Giày mới mua hôm qua không thể gây cảm giác hoài niệm xưa cũ.",
            "❌ SAI — Tiếc nuối vì trượt kỳ thi dùng 残念 (ざんねん) hoặc 悔しい (くやしい).",
            "✅ ĐÚNG — Nghe lại bài hát hay nghe thời cấp 3 trên radio, tôi thấy hoài niệm khôn xiết."
        ]
    ),
    (
        "にこにこ", "にこにこ", "Tính từ / Phó từ",
        "Cười tủm tỉm, cười tươi hiền hậu (nụ cười vui vẻ, không phát ra tiếng lớn)",
        "にこにこ笑う / にこにこしている / にこにこ顔",
        "CHỈ gương mặt CƯỜI TƯƠI NHẸ NHÀNG, KHÔNG THÀNH TIẾNG; KHÔNG dùng cho cười phá lên ầm ĩ (げらげら), nắng chiếu chói chang (ぴかぴか/かんかん) hay gương mặt giận dữ.",
        0,
        [
            "遊んでいる孫を見ながら、祖母はうれしそうににこにこしていた。",
            "面白いコメディ映画を見て、映画館で大きな声でにこにこ笑った。",
            "太陽が空でにこにこ光っていて、とても暑い。",
            "テストで0点を取って、母は怒ってにこにこしていた。"
        ],
        [
            "✅ ĐÚNG — Nhìn các cháu vui chơi, bà tôi cười tươi hiền hậu đầy hạnh phúc (にこにこしていた).",
            "❌ SAI — Cười phá lên thành tiếng to dùng げらげら hoặc 大声で笑う, còn にこにこ là cười mỉm không tiếng.",
            "❌ SAI — Mặt trời chói chang dùng かんかん hoặc ぎらぎら, không dùng にこにこ.",
            "❌ SAI — Mẹ tức giận không thể đi với にこにこ (dùng ぷんぷん / かんかん)."
        ]
    ),
    (
        "交流", "こうりゅう", "Danh từ / Danh động từ",
        "Giao lưu (trao đổi văn hóa, kết nối giữa các nhóm người, trường học, quốc gia)",
        "国際交流 / 地域の人と交流する / 交流を深める",
        "CHỈ sự GIAO LƯU VĂN HÓA / CON NGƯỜI giữa các nhóm, địa phương, quốc gia; KHÔNG dùng cho đổi hàng lấy tiền/đổi vật (交換) hay dòng nước sông chảy (流れ).",
        2,
        [
            "サイズが小さかったので、お店でLサイズと交流してもらった。",
            "大雨が降って、川の交流がとても速くなっている。",
            "この大学には、留学生と日本の学生が交流するイベントが多い。",
            "駅前の銀行で日本円をユーロに交流した。"
        ],
        [
            "❌ SAI — Đổi cỡ áo ở tiệm dùng 交換 (こうかん), không dùng 交流.",
            "❌ SAI — Dòng chảy của sông dùng 流れ (ながれ), bẫy chữ 流.",
            "✅ ĐÚNG — Trường đại học này có nhiều sự kiện để du học sinh và sinh viên Nhật giao lưu (交流する).",
            "❌ SAI — Đổi tiền tệ dùng 両替 (りょうがえ), không dùng 交流."
        ]
    ),
    (
        "診察", "しんさつ", "Danh từ / Danh động từ",
        "Khám bệnh (bác sĩ thăm khám chẩn đoán cho bệnh nhân)",
        "医者に診察してもらう / 診察室 / 診察を受ける",
        "CHỈ hành động BÁC SĨ KHÁM BỆNH cho bệnh nhân (người bệnh dùng 診察を受ける/してもらう); KHÔNG dùng cho cảnh sát điều tra (捜査), giáo viên chấm bài hay kiểm tra máy móc (点検/検査).",
        1,
        [
            "自動車が安全に走るか、工場で診察してもらった。",
            "のどが痛いので、内科の病院で医者に診察してもらった。",
            "テストの前に、ノートを全部診察して復習した。",
            "警察が事件の原因を詳しく診察している。"
        ],
        [
            "❌ SAI — Kiểm tra kỹ thuật ô tô dùng 点検 (てんけん) hoặc 検査 (けんさ), không dùng 診察.",
            "✅ ĐÚNG — Vì đau họng nên tôi đến khoa nội nhờ bác sĩ khám bệnh (医者に診察してもらう).",
            "❌ SAI — Xem lại vở ôn bài dùng 見直す (みなおす) hoặc 確認する.",
            "❌ SAI — Cảnh sát điều tra vụ án dùng 捜査する (そうさ) hoặc 調べる."
        ]
    ),
    (
        "詰める", "つめる", "Động từ",
        "Nhét đầy vào, đóng gói chật kín (đồ vào vali, cơm vào hộp bento); dồn lại cho sát",
        "スーツケースに荷物を詰める / お弁当箱にご飯を詰める / 席を詰める",
        "Là THA ĐỘNG TỪ (người chủ động nhét/xếp chặt đồ vào hộp/túi, hoặc ngồi xích lại cho gọn); KHÔNG dùng cho cống tự bị nghẹt (詰まる — tự động từ) hay cất đồ vào phòng.",
        3,
        [
            "落ち葉が排水口に詰めて、水が流れなくなった。",
            "風邪をひいて、朝から鼻が詰めている。",
            "部屋が散らかっているので、おもちゃを床に詰めた。",
            "旅行の前日に、スーツケースに服や日用品をぎっしり詰めた。"
        ],
        [
            "❌ SAI — Lá rụng tự làm tắc cống phải dùng tự động từ 詰まる (つまる), không dùng 詰める.",
            "❌ SAI — Bị nghẹt mũi dùng 鼻が詰まっている (tự động từ 詰まる).",
            "❌ SAI — Dọn đồ chơi dùng 片付ける (かたづける), không nhét xuống sàn.",
            "✅ ĐÚNG — Hôm trước chuyến đi, tôi xếp/nhét kín quần áo và đồ dùng vào vali (スーツケースに詰める)."
        ]
    ),
    (
        "だく", "だく", "Động từ",
        "Ôm vào lòng, bế (em bé, thú cưng, gối); ấp ủ (ước mơ, hy vọng)",
        "赤ちゃんをだく / ぬいぐるみをだく / 夢をだく",
        "CHỈ hành động vòng tay BẾ / ÔM VÀO LÒNG (trẻ nhỏ, chó mèo, gấu bông) hoặc ấp ủ ước mơ; KHÔNG dùng cho nắm tay (にぎる), cầm vật nhỏ 1 tay (持つ) hay đeo ba lô sau lưng (背負う).",
        0,
        [
            "泣いている赤ちゃんを優しく腕にだいてあやした。",
            "小さい鍵をポケットから出して手でだいた。",
            "重いリュックを背中にだいて山に登った。",
            "スーパーで買った大根を1本、指でだいて帰った。"
        ],
        [
            "✅ ĐÚNG — Tôi nhẹ nhàng bế em bé đang khóc vào lòng dỗ dành (赤ちゃんをだく).",
            "❌ SAI — Cầm/nắm chiếc chìa khóa nhỏ dùng 握る (にぎる) hoặc 持つ.",
            "❌ SAI — Đeo ba lô trên lưng dùng 背負う (せおう), không dùng だく.",
            "❌ SAI — Cầm bằng ngón tay không thể dùng だく (ôm bằng vòng tay)."
        ]
    ),
    (
        "異常", "いじょう", "Danh từ / Tính từ / Phó từ",
        "Bất thường, khác thường (nhiệt độ, thời tiết, máy móc, sức khỏe cơ thể)",
        "異常がある / 異常な暑さ / 異常なし",
        "CHỈ trạng thái KHÁC VỚI BÌNH THƯỜNG (mang sắc thái cảnh báo/nguy hiểm hoặc cực đoan); KHÔNG nhầm với đồng âm 以上 (いじょう: trở lên / hết bài phát biểu)!",
        2,
        [
            "発表はこれで異常です。ご清聴ありがとうございました。",
            "この映画館は18歳異常でないと入れない。",
            "健康診断を受けたが、どこにも異常はなかった。",
            "昨日より気温が5度異常も高くなった。"
        ],
        [
            "❌ SAI — 'Phần trình bày đến đây là hết' phải là 以上 (いじょう), bẫy đồng âm cực kinh điển!",
            "❌ SAI — 'Từ 18 tuổi trở lên' phải là 18歳以上 (いじょう).",
            "✅ ĐÚNG — Tôi đã đi khám sức khỏe tổng quát nhưng không có bất thường nào cả (異常はなかった).",
            "❌ SAI — 'Cao hơn trên 5 độ' phải là 5度以上 (いじょう)."
        ]
    ),
    (
        "諦める", "あきらめる", "Động từ",
        "Từ bỏ, bỏ cuộc (vì thấy không thể thực hiện được: ước mơ, mua món đồ, kế hoạch)",
        "夢を諦める / 行くのを諦める / 最後まで諦めない",
        "CHỈ việc TỪ BỎ HY VỌNG / MỤC TIÊU do hoàn cảnh bất khả kháng hoặc quá khó; KHÔNG dùng cho việc bỏ thuốc lá/nghỉ việc chủ động (やめる) hay vứt rác (捨てる).",
        1,
        [
            "古くなったテレビを燃えないごみの日に諦めた。",
            "チケットが売り切れていたので、コンサートに行くのを諦めた。",
            "健康のために、来月から毎日吸っていたタバコを諦めるつもりだ。",
            "来月で今のアルバイトを諦めて、新しい仕事を探す。"
        ],
        [
            "❌ SAI — Vứt tivi cũ vào ngày rác không cháy dùng 捨てる (すてる), không dùng 諦める.",
            "✅ ĐÚNG — Vì vé đã bán hết sạch nên tôi đành từ bỏ việc đi xem hòa nhạc (行くのを諦めた).",
            "❌ SAI — Bỏ thuốc lá dùng やめる (辞める/止める), không dùng 諦める.",
            "❌ SAI — Nghỉ việc làm thêm dùng 辞める (やめる), không dùng 諦める."
        ]
    ),
    (
        "重なる", "かさなる", "Động từ",
        "Trùng lịch, chồng chất lên nhau (lịch hẹn, sự việc, giấy tờ)",
        "予定が重なる / 仕事が重なる / 不幸が重なる",
        "Là TỰ ĐỘNG TỪ (các lịch trình/sự việc tự trùng nhau hoặc vật tự xếp chồng lên nhau); KHÔNG dùng với を làm tha động từ (phải dùng 重ねる: かさねる) hay dùng cho cân nặng (重い).",
        3,
        [
            "洗ったお皿を棚の上にきれいに重なった。",
            "このスーツケースは本をたくさん入れたので、とても重なっている。",
            "寒い日はセーターの上にコートを重なって出かける。",
            "日曜日に友達の結婚式と大事な出張の予定が重なってしまった。"
        ],
        [
            "❌ SAI — Chủ động xếp chồng đĩa lên kệ phải dùng tha động từ 重ねる (かさねる), không dùng 重なる.",
            "❌ SAI — Vali nặng dùng 重い (おもい), bẫy chữ 重.",
            "❌ SAI — Chủ động mặc chồng áo khoác dùng 重ねる (かさねる), không dùng 重なる.",
            "✅ ĐÚNG — Chủ nhật bị trùng lịch giữa đám cưới bạn và chuyến công tác quan trọng (予定が重なる)."
        ]
    ),
    (
        "見本", "みほん", "Danh từ",
        "Hàng mẫu, bản mẫu, vật mẫu trưng bày để xem thử trước khi mua/làm theo",
        "料理の見本 / 生地の見本 / 見本を見る",
        "CHỈ VẬT MẪU / HÀNG MẪU (mẫu đồ ăn nhựa trước quán Nhật, mẫu vải, sách mẫu, bài viết mẫu); KHÔNG dùng cho việc xem sách (本を読む) hay tấm gương đạo đức con người (手本: てほん).",
        0,
        [
            "店の前に並んでいる料理の見本を見て、何を食べるか決めた。",
            "図書館で歴史の見本を3冊借りてきた。",
            "兄はいつも親切で、私の人生のいい見本だ。",
            "昨日、映画館で面白い映画の見本を見て感動した。"
        ],
        [
            "✅ ĐÚNG — Tôi nhìn các mô hình món ăn mẫu trưng trước quán để quyết định ăn gì (料理の見本).",
            "❌ SAI — Mượn sách lịch sử ở thư viện dùng 本 (ほん), bẫy chữ 本.",
            "❌ SAI — Tấm gương sống/người mẫu mực để noi theo dùng 手本 (てほん) hoặc お手本, không dùng 見本.",
            "❌ SAI — Xem phim ở rạp dùng 映画を見る (xem trailer là 予告編), không dùng 映画の見本."
        ]
    ),
    (
        "追い抜く", "おいぬく", "Động từ",
        "Vượt qua, vượt mặt (xe/người chạy phía trước, vượt lên dẫn đầu về điểm số/thành tích)",
        "前の車を追い抜く / ランナーを追い抜く",
        "CHỈ việc CHẠY VƯỢT LÊN TRƯỚC người/xe đang đi cùng chiều (đi với を); KHÔNG dùng cho việc đi qua 1 cửa hàng cố định (通り過ぎる) hay nhổ cỏ/răng (抜く).",
        2,
        [
            "虫歯がひどくなったので、歯医者で歯を追い抜いた。",
            "うっかりして、降りるはずの駅を追い抜いてしまった。",
            "マラソン大会の最後の坂道で、前を走っていた選手を追い抜いた。",
            "電車に遅れそうだったので、必死に走って8時の電車を追い抜いた。"
        ],
        [
            "❌ SAI — Nhổ răng dùng 抜く (ぬく), bẫy chữ 抜.",
            "❌ SAI — Đi lố qua nhà ga cố định dùng 乗り過ごす (のりすごす) hoặc 通り過ぎる, không dùng 追い抜く.",
            "✅ ĐÚNG — Ở con dốc cuối giải marathon, tôi đã vượt mặt vận động viên chạy phía trước (選手を追い抜いた).",
            "❌ SAI — Kịp lên tàu dùng 間に合う (まにあう), không ai chạy vượt tàu để lên tàu."
        ]
    ),
    (
        "集合", "しゅうごう", "Danh từ / Danh động từ",
        "Tập hợp, tập trung (mọi người hẹn gặp tại 1 địa điểm vào 1 giờ cố định)",
        "駅前に集合する / 集合時間 / 集合場所",
        "CHỈ NHIỀU NGƯỜI tự tập hợp lại tại 1 điểm hẹn (tự động từ); KHÔNG dùng với を để gom đồ vật/tem/thông tin (集める: あつめる) hay họp riêng 2 người bình thường (会う).",
        1,
        [
            "趣味で世界中の珍しい切手を集合している。",
            "明日の朝8時に、学校の体育館の前に集合してください。",
            "レポートを書くために、インターネットで資料を集合した。",
            "部屋に落ちていたおもちゃを箱の中に集合した。"
        ],
        [
            "❌ SAI — Sưu tầm tem dùng 集める (あつめる), không dùng 集合 cho đồ vật.",
            "✅ ĐÚNG — Sáng mai 8 giờ xin mọi người hãy tập trung trước nhà thi đấu của trường (〜に集合する).",
            "❌ SAI — Thu thập tài liệu dùng 集める (あつめる), không dùng 集合.",
            "❌ SAI — Gom đồ chơi vào hộp dùng 集める hoặc 片付ける, không dùng 集合."
        ]
    ),
]
