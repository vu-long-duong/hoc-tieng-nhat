# -*- coding: utf-8 -*-
# Part 3: 42 Full-Coverage Mondai 5 Words (1x M5 across 2010-2019 — completes 100% of 107 unique M5 words)

M5_PART3 = [
    (
        "お互いに", "おたがいに", "Tính từ / Phó từ",
        "Lẫn nhau, cả hai bên cùng (giúp đỡ nhau, tôn trọng nhau, cố gắng cùng nhau)",
        "お互いに助け合う / お互いに頑張ろう / お互いに理解する",
        "CHỈ hành động / thái độ 2 CHIỀU giữa 2 bên trở lên; KHÔNG dùng cho việc 1 người làm 1 mình hay thay phiên lần lượt 1 chiều (交互に / 順番に).",
        1,
        [
            "部屋を掃除するとき、お互いに一人で全部片付けた。",
            "忙しいときは、職場の仲間とお互いに助け合って仕事をしている。",
            "この薬は朝と夜にお互いに1錠ずつ飲んでください。",
            "赤いボールと白いボールをお互いに1列に並べた。"
        ],
        [
            "❌ SAI — Làm một mình không thể dùng お互いに (cần ít nhất 2 bên tác động qua lại).",
            "✅ ĐÚNG — Lúc bận rộn, chúng tôi cùng đồng nghiệp giúp đỡ lẫn nhau làm việc (お互いに助け合う).",
            "❌ SAI — Uống mỗi buổi sáng/tối 1 viên dùng それぞれ hoặc 1錠ずつ, không dùng お互いに.",
            "❌ SAI — Xếp xen kẽ đỏ-trắng dùng 交互に (こうごに), không dùng お互いに."
        ]
    ),
    (
        "かき混ぜる", "かきまぜる", "Động từ",
        "Khuấy đều, đảo trộn lên (cà phê với đường, trứng, nước sốt, bột, súp)",
        "スプーンでかき混ぜる / 卵をよくかき混ぜる",
        "CHỈ hành động KHUẤY / ĐẢO TRỘN chất lỏng, bột, nguyên liệu mềm bằng thìa/đũa; KHÔNG dùng cho việc xáo trộn bài/thứ tự giấy tờ (シャッフルする/混ぜる) hay làm rối tóc.",
        2,
        [
            "トランプのカードを遊ぶ前によくかき混ぜた。",
            "強い風で髪の毛がぐちゃぐちゃにかき混ぜられた。",
            "コーヒーに砂糖とミルクを入れて、スプーンでよくかき混ぜた。",
            "机の上の書類を全部かき混ぜてしまったので、見つからない。"
        ],
        [
            "❌ SAI — Xáo bài tây dùng 切る (きる) hoặc よく混ぜる, không dùng かき混ぜる (khuấy).",
            "❌ SAI — Gió làm rối tóc dùng 乱れる (みだれる), không dùng かき混ぜる.",
            "✅ ĐÚNG — Cho đường và sữa vào cà phê rồi dùng thìa khuấy đều lên (スプーンでかき混ぜる).",
            "❌ SAI — Làm lộn xộn tài liệu dùng ぐちゃぐちゃにする, không dùng かき混ぜる."
        ]
    ),
    (
        "満員", "まんいん", "Danh từ",
        "Kín chỗ, hết chỗ, đông nghịt người (tàu điện, rạp hát, hội trường, bãi đỗ xe/quán)",
        "満員電車 / 会場は満員だ / 満員になる",
        "CHỈ số NGƯỜI (hoặc xe vào bãi) đã chật kín tối đa sức chứa; KHÔNG dùng cho bụng no căng (満腹), cốc nước đầy tràn (いっぱい) hay thùng đồ chật kín.",
        0,
        [
            "今朝の通勤電車は満員で、新聞を読むこともできなかった。",
            "ラーメンを2杯も食べたので、もうおなかが満員だ。",
            "コップに水が満員に入っているから、こぼさないように気をつけて。",
            "スーツケースにお土産が満員になって、ふたが閉まらない。"
        ],
        [
            "✅ ĐÚNG — Tàu đi làm sáng nay chật kín người đến mức không đọc báo nổi (満員電車).",
            "❌ SAI — Bụng no căng dùng おなかがいっぱい hoặc 満腹 (まんぷく), không dùng 満員 (chữ 員 = nhân viên/người).",
            "❌ SAI — Nước đầy cốc dùng いっぱい, không dùng 満員.",
            "❌ SAI — Vali đầy đồ dùng いっぱい, không dùng 満員."
        ]
    ),
    (
        "中旬", "ちゅうじゅん", "Danh từ",
        "Trung tuần, giữa tháng (khoảng ngày 11 đến ngày 20 của một tháng cụ thể)",
        "4月中旬 / 来月の中旬ごろ",
        "CHỈ đi với THÁNG (〜月の中旬 = ngày 11–20); KHÔNG dùng cho giữa tuần (週の半ば), giữa năm (年の半ば) hay giữa trưa (昼ごろ).",
        3,
        [
            "毎日の中旬に、1時間ぐらい昼休みを取っている。",
            "今週の中旬、水曜日か木曜日に会議を開きましょう。",
            "今年の中旬は雨が多くて、傘が手放せなかった。",
            "桜は例年、3月下旬から4月中旬にかけて見ごろを迎える。"
        ],
        [
            "❌ SAI — Giữa ngày/buổi trưa dùng 昼ごろ, không dùng 毎日の中旬.",
            "❌ SAI — Giữa tuần dùng 週の半ば (なかば), không dùng 中旬 (chỉ dùng cho tháng!).",
            "❌ SAI — Giữa năm không dùng 今年の中旬 (phải nói 6月ごろ / 年の半ば).",
            "✅ ĐÚNG — Hoa anh đào thường năm nở đẹp nhất từ cuối tháng 3 đến giữa tháng 4 (4月中旬)."
        ]
    ),
    (
        "距離", "きょり", "Danh từ",
        "Khoảng cách (độ dài giữa 2 điểm địa lý, hoặc khoảng cách tâm lý giữa người với người)",
        "駅からの距離 / 長い距離を走る / 距離を置く",
        "CHỈ KHOẢNG CÁCH giữa 2 điểm (A đến B); KHÔNG dùng cho độ dài 1 vật thể (長さ: chiều dài dây/tóc), khoảng thời gian (期間) hay chiều cao (高さ).",
        1,
        [
            "このスカートは距離が少し長いので、短く直したい。",
            "家から駅までの距離はおよそ1キロで、歩いて12分ほどだ。",
            "夏休みの距離がもっと長ければいいのにと思う。",
            "新しいテーブルの距離を測ってから、部屋に置いた。"
        ],
        [
            "❌ SAI — Chiều dài chiếc váy dùng 長さ (ながさ) hoặc 丈 (たけ), không dùng 距離.",
            "✅ ĐÚNG — Khoảng cách từ nhà đến ga khoảng 1 km, đi bộ chừng 12 phút (家から駅までの距離).",
            "❌ SAI — Khoảng thời gian nghỉ hè dùng 期間 (きかん), không dùng 距離.",
            "❌ SAI — Kích thước/chiều dài cái bàn dùng 長さ hoặc サイズ, không dùng 距離."
        ]
    ),
    (
        "埋める", "うめる", "Động từ",
        "Chôn xuống đất, lấp đầy (hố đất, khoảng trống, thời gian trống, chỗ khuyết)",
        "穴を埋める / 庭に埋める / 空白を埋める",
        "CHỈ việc CHÔN LẤP xuống dưới đất/lấp đầy lỗ hổng/chỗ trống; KHÔNG dùng cho cất đồ vào tủ (しまう), nhét đồ vào cặp (詰める) hay trồng cây (植える).",
        2,
        [
            "飲み終わった缶をごみ箱の中に埋めた。",
            "昨日買った服をクローゼットの中にきれいに埋めた。",
            "庭に穴を掘って、タイムカプセルを土の中に埋めた。",
            "旅行の準備で、スーツケースに服をたくさん埋めた。"
        ],
        [
            "❌ SAI — Bỏ vỏ lon vào thùng rác dùng 捨てる (すてる) hoặc 入れる, không dùng 埋める.",
            "❌ SAI — Cất quần áo vào tủ dùng しまう, không dùng 埋める.",
            "✅ ĐÚNG — Đào hố ngoài vườn rồi chôn hộp thời gian xuống đất (土の中に埋める).",
            "❌ SAI — Xếp/nhét quần áo vào vali dùng 詰める (つめる), không dùng 埋める."
        ]
    ),
    (
        "建築", "けんちく", "Danh từ / Danh động từ",
        "Kiến trúc, xây dựng nhà cửa (tòa nhà, nhà ở, đền chùa có mái & không gian ở)",
        "建物を建築する / 木造建築 / 建築家",
        "CHỈ việc xây dựng NHÀ CỬA / TÒA NHÀ (có kết cấu nhà ở/phòng ốc); KHÔNG dùng cho xây dựng đường xá, cầu cống, đập nước (dùng 建設: けんせつ) hay chế tạo xe/máy (製造).",
        0,
        [
            "この古い教会は、今から100年以上前に建築されたものだ。",
            "この工場では、毎日たくさんの自動車を建築している。",
            "町と町を結ぶ新しい高速道路を今、建築中だ。",
            "父は週末に庭で小さい棚を建築してくれた。"
        ],
        [
            "✅ ĐÚNG — Nhà thờ cổ này được xây dựng từ hơn 100 năm trước (教会を建築する).",
            "❌ SAI — Sản xuất ô tô ở nhà máy dùng 製造する (せいぞう) hoặc 作る, không dùng 建築.",
            "❌ SAI — Xây dựng đường cao tốc/hạ tầng công trình dùng 建設する (けんせつ), không dùng 建築.",
            "❌ SAI — Tự đóng cái kệ nhỏ dùng 作る (つくる), không dùng từ trang trọng 建築."
        ]
    ),
    (
        "重大", "じゅうだい", "Tính từ / Phó từ",
        "Trọng đại, nghiêm trọng (vấn đề, tai nạn, sai lầm, bí mật, trách nhiệm)",
        "重大な問題 / 重大なミス / 重大な事故",
        "CHỈ mức độ HỆ TRỌNG / NGHIÊM TRỌNG ảnh hưởng lớn (lỗi lầm, sự cố, quyết định, tin tức); KHÔNG dùng cho vật nặng ký (重い) hay kích thước to lớn vật lý (大きい).",
        3,
        [
            "この箱はとても重大なので、二人で運んだほうがいい。",
            "公園の真ん中に重大な木が1本立っている。",
            "今日は重大な雪が降って、電車が止まった。",
            "小さな不注意が、あとで重大な事故につながることもある。"
        ],
        [
            "❌ SAI — Cái hộp nặng dùng 重い (おもい), bẫy chữ 重.",
            "❌ SAI — Cái cây to lớn dùng 大きい (おおきい), bẫy chữ 大.",
            "❌ SAI — Tuyết rơi dày dùng 大雪 (おおゆき), không nói 重大な雪.",
            "✅ ĐÚNG — Một chút bất cẩn nhỏ đôi khi có thể dẫn đến tai nạn nghiêm trọng (重大な事故)."
        ]
    ),
    (
        "滞在", "たいざい", "Danh từ / Danh động từ",
        "Lưu trú, ở lại tạm thời (tại nước ngoài, khách sạn, thành phố khi đi công tác/du lịch)",
        "ホテルに滞在する / 1週間滞在する / 滞在先",
        "CHỈ việc Ở TẠM THỜI trong 1 khoảng thời gian nhất định (du lịch, công tác, trao đổi ngắn hạn); KHÔNG dùng cho việc sinh sống cố định lâu dài ở nhà mình (住む) hay ngồi chờ vài phút (待つ).",
        1,
        [
            "私は生まれてからずっと東京のこの家に滞在している。",
            "出張でパリに5日間滞在し、そのあとロンドンへ向かった。",
            "友達が来るまで、改札の前で10分ほど滞在した。",
            "風邪をひいたので、今日は一日中ベッドに滞在していた。"
        ],
        [
            "❌ SAI — Sống cố định từ nhỏ ở nhà mình dùng 住んでいる (すんでいる), không dùng 滞在.",
            "✅ ĐÚNG — Đi công tác tôi lưu trú ở Paris 5 ngày rồi đi tiếp sang London (パリに滞在する).",
            "❌ SAI — Chờ bạn 10 phút trước cổng soát vé dùng 待つ (まつ), không dùng 滞在.",
            "❌ SAI — Nằm nghỉ trên giường dùng 寝ている (ねている), không dùng 滞在."
        ]
    ),
    (
        "受け取る", "うけとる", "Động từ",
        "Nhận lấy (bưu kiện, tiền, thư, tài liệu ai gửi/đưa cho); tiếp nhận/hiểu ý lời nói",
        "荷物を受け取る / メールを受け取る / 給料を受け取る",
        "CHỈ việc NHẬN VẬT / TIỀN / THƯ từ người khác chuyển tới (hoặc hiểu 1 câu nói theo nghĩa nào đó); KHÔNG dùng cho tham dự kỳ thi (試験を受ける) hay bị thương/tác động (被害を受ける).",
        2,
        [
            "来週の日曜日に、運転免許の試験を受け取る予定だ。",
            "友達に誘われたパーティーを受け取って、楽しく過ごした。",
            "留守の間に届いた荷物を、郵便局まで行って受け取った。",
            "強い台風の影響で、この地域の農作物は大きな被害を受け取った。"
        ],
        [
            "❌ SAI — Đi thi lấy bằng lái dùng 試験を受ける (うける), không dùng 受け取る.",
            "❌ SAI — Tham gia bữa tiệc dùng 参加する hoặc 行く, không dùng 受け取る.",
            "✅ ĐÚNG — Tôi ra bưu điện nhận lại kiện hàng gửi tới lúc vắng nhà (荷物を受け取る).",
            "❌ SAI — Chịu thiệt hại do bão dùng 被害を受ける (うける), không dùng 受け取る."
        ]
    ),
    (
        "似合う", "にあう", "Động từ",
        "Hợp với, trông rất đẹp/xứng đôi khi mặc/đeo lên người (quần áo, kiểu tóc, màu sắc)",
        "その服がよく似合う / 短い髪が似合っている",
        "CHỈ sự HÀI HÒA VỀ NGOẠI HÌNH giữa quần áo/mũ/kiểu tóc/màu sắc với người mặc; KHÔNG dùng cho vừa kích cỡ (サイズが合う), món ăn hợp nhau hay giờ giấc phù hợp (都合がいい).",
        0,
        [
            "その青いネクタイ、山田さんにとてもよく似合っていますね。",
            "この靴はサイズが少し小さくて、私の足に似合わない。",
            "明日の午後3時なら、私の予定に似合います。",
            "この赤いバッグと昨日買った財布は値段が似合っている。"
        ],
        [
            "✅ ĐÚNG — Chiếc cà vạt xanh đó trông rất hợp với anh Yamada đấy (〜によく似合う).",
            "❌ SAI — Giày không vừa cỡ chân dùng 足に合う / サイズが合う, không dùng 似合う.",
            "❌ SAI — Hợp lịch/tiện giờ dùng 都合がいい (つごうがいい), không dùng 似合う.",
            "❌ SAI — Giá tiền tương xứng dùng 見合う hoặc 同じぐらい, không dùng 似合う."
        ]
    ),
    (
        "まげる", "まげる", "Động từ",
        "Uốn cong, bẻ cong, gập lại (đầu gối, lưng, ngón tay, thanh sắt, nguyên tắc)",
        "ひざをまげる / 針金をまげる / 腕をまげる",
        "Là THA ĐỘNG TỪ (tác động làm cong 1 vật hoặc khớp cơ thể: ひざをまげる); KHÔNG dùng cho việc RẼ Ở NGÃ TƯ (phải dùng tự động từ 曲がる: 角を右に曲がる) hay gấp quần áo gọn gàng (たたむ)!",
        3,
        [
            "次の信号を右にまげると、左側に銀行があります。",
            "洗濯して乾いたシャツをきれいにまげて、たんすにしまった。",
            "長い間座っていたので、道の角がまげている。",
            "ストレッチをするときは、ゆっくりひざをまげてください。"
        ],
        [
            "❌ SAI — Rẽ phải ở đèn tín hiệu dùng 曲がる (まがる — tự động từ), bẫy N3 siêu kinh điển!",
            "❌ SAI — Gấp áo sơ mi gọn gàng dùng たたむ (畳む), không dùng まげる.",
            "❌ SAI — Con đường cong dùng 道が曲がっている (tự động từ).",
            "✅ ĐÚNG — Khi giãn cơ, hãy từ từ gập đầu gối lại (ひざをまげる)."
        ]
    ),
    (
        "急", "きゅう", "Tính từ / Phó từ",
        "Đột ngột, gấp gáp (việc đột xuất, mưa bất chợt); dốc đứng (con dốc)",
        "急な用事 / 急に雨が降る / 急な坂道",
        "Dùng cho 2 nghĩa tủ: (1) ĐỘT NGỘT / KHẨN CẤP (急な用事, 急に変わる), (2) DỐC ĐỨNG (急な坂); KHÔNG dùng cho tốc độ chạy nhanh bình thường (速い) hay dậy sớm (早い).",
        1,
        [
            "新幹線は普通の電車よりずっと急なので、早く着く。",
            "急な用事ができてしまったので、今日の飲み会は欠席します。",
            "明日は旅行だから、朝5時に急で起きなければならない。",
            "彼は料理を作るのがとても急で、10分で3品も作った。"
        ],
        [
            "❌ SAI — Tàu Shinkansen chạy nhanh dùng 速い (はやい), không dùng 急.",
            "✅ ĐÚNG — Vì có việc đột xuất nên tôi xin vắng mặt buổi liên hoan hôm nay (急な用事).",
            "❌ SAI — Dậy sớm dùng 早く起きる, không dùng 急で.",
            "❌ SAI — Nấu ăn nhanh nhẹn dùng 速い hoặc 手際がいい, không dùng 急."
        ]
    ),
    (
        "慰める", "なぐさめる", "Động từ",
        "An ủi, động viên (làm dịu nỗi buồn cho người đang thất vọng, khóc, gặp chuyện buồn)",
        "友達を慰める / 優しい言葉で慰める",
        "CHỈ dùng cho NGƯỜI ĐANG BUỒN / THẤT BẠI / THẤT VỌNG; KHÔNG dùng cho khen ngợi người thành công (ほめる), chúc mừng (祝う) hay xoa dịu cơn đau vật lý/bệnh.",
        2,
        [
            "テストで100点を取った弟を、母はうれしそうに慰めた。",
            "友達が結婚すると聞いて、「おめでとう」と慰めた。",
            "試合に負けて落ち込んでいる後輩を、みんなで優しく慰めた。",
            "頭が痛いので、薬を飲んで痛みを慰めた。"
        ],
        [
            "❌ SAI — Khen em trai được 100 điểm dùng ほめる (褒める), không dùng 慰める.",
            "❌ SAI — Chúc mừng bạn kết hôn dùng 祝う (いわう), không dùng 慰める.",
            "✅ ĐÚNG — Mọi người cùng nhẹ nhàng an ủi đàn em đang suy sụp vì thua trận (後輩を慰める).",
            "❌ SAI — Giảm cơn đau đầu dùng 痛みを抑える / 止める, không dùng 慰める."
        ]
    ),
    (
        "沸騰", "ふっとう", "Danh từ / Danh động từ",
        "Sôi sùng sục (nước/chất lỏng đạt 100°C nổi bọt hơi)",
        "お湯が沸騰する / 沸騰させる",
        "CHỈ CHẤT LỎNG (nước, súp) sôi lên 100°C; KHÔNG dùng cho cơ thể sốt nóng (熱が出る), phòng nóng (暑い), đồ ăn nướng chín hay người tức giận (trong N3 chỉ dùng nghĩa đen nước sôi).",
        0,
        [
            "鍋のお湯が沸騰したら、パスタを入れて8分ゆでてください。",
            "真夏の車の中はエアコンを消すとすぐに沸騰してしまう。",
            "風邪をひいて39度まで熱が沸騰したので、病院へ行った。",
            "オーブンでパンがこんがり沸騰して、いいにおいがする。"
        ],
        [
            "✅ ĐÚNG — Khi nước trong nồi sôi lên, hãy cho mì ống vào luộc 8 phút (お湯が沸騰する).",
            "❌ SAI — Trong xe hơi nóng nực dùng 暑くなる (あつくなる), không dùng 沸騰.",
            "❌ SAI — Sốt lên 39 độ dùng 熱が上がる (あがる), không dùng 沸騰.",
            "❌ SAI — Bánh mì nướng chín vàng dùng 焼ける (やける), không dùng 沸騰."
        ]
    ),
    (
        "新鮮", "しんせん", "Tính từ / Phó từ",
        "Tươi ngon (cá, rau, thịt, không khí trong lành); mới mẻ đầy cảm hứng (cảm giác/ý tưởng)",
        "新鮮な魚 / 新鮮な野菜 / 新鮮な空気",
        "Dùng cho THỰC PHẨM TƯƠI SỐNG (rau, cá, thịt, hoa quả), không khí sạch, hoặc cảm giác mới mẻ; KHÔNG dùng cho đồ điện tử/quần áo/nhà mới mua (新しい / 新品).",
        3,
        [
            "昨日、電気屋で新鮮なパソコンを買った。",
            "入学式のために、新鮮なスーツと靴を用意した。",
            "駅の近くにとても新鮮なマンションが建てられた。",
            "港の近くの市場では、毎朝とれたての新鮮な魚が買える。"
        ],
        [
            "❌ SAI — Máy tính mới mua dùng 新しい (あたらしい) hoặc 新品, không dùng 新鮮.",
            "❌ SAI — Bộ vest mới dùng 新しい, không dùng 新鮮.",
            "❌ SAI — Chung cư mới xây dùng 新築 (しんちく) hoặc 新しい, không dùng 新鮮.",
            "✅ ĐÚNG — Ở chợ gần cảng, mỗi sáng đều mua được cá tươi ngon mới đánh bắt (新鮮な魚)."
        ]
    ),
    (
        "混ぜる", "まぜる", "Động từ",
        "Trộn lẫn, pha trộn (2 hay nhiều thứ khác nhau vào nhau: màu sơn, bột, nguyên liệu)",
        "AとBを混ぜる / 絵の具を混ぜる / ご飯に具を混ぜる",
        "Là THA ĐỘNG TỪ (người chủ động trộn 2 thứ trở lên lại với nhau: 〜と〜を混ぜる); KHÔNG dùng cho việc thêm vào 1 chỗ trống đơn thuần hay hòa mình/lẫn vào (tự động từ 混ざる).",
        1,
        [
            "白いシャツの中に赤い靴下が1足混ぜていて、色がついてしまった。",
            "青い絵の具と黄色い絵の具を混ぜると、緑色になる。",
            "駅までの道を友達と混ぜて一緒に歩いた。",
            "荷物をスーツケースの中にきれいに混ぜて入れた。"
        ],
        [
            "❌ SAI — Chiếc tất đỏ vô tình bị lẫn vào trong đống áo trắng phải dùng tự động từ 混ざる (まざる).",
            "✅ ĐÚNG — Trộn màu vẽ xanh dương với màu vàng sẽ ra màu xanh lá (AとBを混ぜる).",
            "❌ SAI — Đi cùng bạn dùng 一緒に歩く, không dùng 混ぜて.",
            "❌ SAI — Xếp đồ vào vali dùng 詰める hoặc 入れる, không dùng 混ぜる."
        ]
    ),
    (
        "移動", "いどう", "Danh từ / Danh động từ",
        "Di chuyển, chuyển chỗ (từ địa điểm này sang địa điểm khác; dời đồ đạc)",
        "隣の部屋へ移動する / バスで移動する / 机を移動する",
        "CHỈ việc THAY ĐỔI VỊ TRÍ ĐỊA ĐIỂM của người hoặc đồ vật (xe cộ, dời bàn ghế, đổi phòng); KHÔNG dùng cho chuyển đổi thời gian/lịch hẹn (変更) hay đổi tiền/đổi áo.",
        2,
        [
            "明日の会議の時間を午後2時から4時に移動した。",
            "この漢字の読み方が思い出せないので、別の言葉に移動した。",
            "雨が降ってきたので、バーベキューの場所を屋根のある所へ移動した。",
            "暑くなってきたので、冬服を夏服に移動した。"
        ],
        [
            "❌ SAI — Đổi giờ họp dùng 変更する (へんこうする), không dùng 移動.",
            "❌ SAI — Thay bằng từ khác dùng 言い換える (いいかえる) hoặc 変える.",
            "✅ ĐÚNG — Vì trời bắt đầu mưa nên chúng tôi di chuyển chỗ nướng BBQ sang nơi có mái che (場所を移動する).",
            "❌ SAI — Thay quần áo đông sang hè dùng 衣替えする hoặc 着替える / 変える."
        ]
    ),
    (
        "ゆでる", "ゆでる", "Động từ",
        "Luộc (cho nguyên liệu vào nước sôi nấu chín rồi vớt ra: trứng, mì, rau)",
        "卵をゆでる / パスタをゆでる / ほうれん草をゆでる",
        "CHỈ hành động LUỘC thực phẩm trong nước sôi (trứng, rau, mì ống); KHÔNG dùng cho đun nước sôi (沸かす: わかす), ninh/kho có gia vị (煮る: にる) hay rán/nướng (焼く/揚げる).",
        0,
        [
            "サラダに入れるために、じゃがいもと卵をお湯でゆでた。",
            "お茶を飲むために、やかんにお湯をゆでた。",
            "フライパンに油を引いて、肉と野菜をゆでた。",
            "トースターで食パンをこんがりゆでて食べた。"
        ],
        [
            "✅ ĐÚNG — Để trộn salad, tôi đã luộc khoai tây và trứng trong nước sôi (卵をゆでる).",
            "❌ SAI — Đun sôi nước uống trà dùng お湯を沸かす (わかす), bẫy cực hay ra!",
            "❌ SAI — Xào thịt rau trên chảo dầu dùng 炒める (いためる), không phải ゆでる.",
            "❌ SAI — Nướng bánh mì dùng 焼く (やく), không phải ゆでる."
        ]
    ),
    (
        "親しい", "したしい", "Tính từ / Phó từ",
        "Thân thiết, thân mật (mối quan hệ gắn bó gần gũi giữa người với người)",
        "親しい友人 / 親しくなる / 親しい間柄",
        "CHỈ MỐI QUAN HỆ THÂN THIẾT giữa CON NGƯỜI với nhau; KHÔNG dùng cho khoảng cách địa lý gần (近い), sở thích quen thuộc hay tính cách hiền lành thân thiện (親切/やさしい).",
        3,
        [
            "私の家から駅までは歩いて3分なので、とても親しい。",
            "この店の店員さんはいつも笑顔で、お客さんにとても親しい。",
            "毎日使っているので、このパソコンの操作にはもう親しい。",
            "大学時代に知り合った親しい友人と、今でも月に一度会っている。"
        ],
        [
            "❌ SAI — Khoảng cách gần dùng 近い (ちかい), không dùng 親しい.",
            "❌ SAI — Nhân viên thân thiện/tử tế với khách dùng 親切 (しんせつ), không dùng 親しい cho người lạ.",
            "❌ SAI — Quen thao tác máy tính dùng 慣れている (なれている), không dùng 親しい.",
            "✅ ĐÚNG — Đến nay mỗi tháng tôi vẫn gặp 1 lần người bạn thân quen từ thời đại học (親しい友人)."
        ]
    ),
    (
        "伝わる", "つたわる", "Động từ",
        "Được truyền đạt, lan truyền, truyền lại (cảm xúc, tin tức, truyền thống, nhiệt độ)",
        "気持ちが伝わる / ニュースが伝わる / 昔から伝わる料理",
        "Là TỰ ĐỘNG TỪ (〜が伝わる: cảm xúc/thông tin/văn hóa tự truyền tới người khác); KHÔNG dùng với を làm tha động từ (phải dùng 伝える: つたえる)!",
        1,
        [
            "田中さんに明日の会議の時間を電話で伝わった。",
            "一生懸命書いた手紙を読んで、私の感謝の気持ちが相手に伝わったようだ。",
            "受付の人に、社長への大事なメッセージを伝わっておいた。",
            "この荷物を隣の部署へ伝わってください。"
        ],
        [
            "❌ SAI — Chủ động báo giờ họp cho ai dùng tha động từ 伝える (つたえる), không dùng 伝わる.",
            "✅ ĐÚNG — Đọc lá thư tôi viết hết lòng, dường như lòng biết ơn của tôi đã truyền tới đối phương (気持ちが伝わる).",
            "❌ SAI — Chủ động nhắn gửi lời nhắn dùng 伝える (つたえる).",
            "❌ SAI — Chuyển/mang đồ sang phòng bên dùng 運ぶ (はこぶ) hoặc 届ける (とどける)."
        ]
    ),
    (
        "内容", "ないよう", "Danh từ",
        "Nội dung (thông tin bên trong sách, bài giảng, cuộc họp, email, hợp đồng, phim)",
        "会議の内容 / 本の内容 / 詳しい内容",
        "CHỈ THÔNG TIN / Ý NGHĨA BÊN TRONG của sách, báo, phim, cuộc họp, thư từ; KHÔNG dùng cho đồ vật/chất lỏng đựng bên trong hộp/chai (中身: なかみ)!",
        2,
        [
            "冷蔵庫の内容が少なくなったので、スーパーへ買い物に行った。",
            "ペットボトルの内容を全部飲んでしまった。",
            "昨日の会議に出られなかったので、同僚に詳しい内容を聞いた。",
            "重くて持てないので、かばんの内容を少し減らした。"
        ],
        [
            "❌ SAI — Đồ ăn bên trong tủ lạnh dùng 中身 (なかみ), bẫy kinh điển giữa 内容 và 中身!",
            "❌ SAI — Nước đựng trong chai dùng 中身 (なかみ), không dùng 内容.",
            "✅ ĐÚNG — Vì không dự họp hôm qua được nên tôi hỏi đồng nghiệp nội dung chi tiết (会議の内容).",
            "❌ SAI — Đồ vật trong cặp sách dùng 中身 (なかみ) hoặc 荷物."
        ]
    ),
    (
        "たまる", "たまる", "Động từ",
        "Tích tụ, dồn đọng lại (mệt mỏi, stress, tiền, bụi bẩn, công việc, nước mưa)",
        "疲れがたまる / ストレスがたまる / お金がたまる / 仕事がたまる",
        "Là TỰ ĐỘNG TỪ (〜がたまる: tự tích tụ dần theo thời gian); KHÔNG dùng với を làm tha động từ (phải dùng ためる: お金をためる) hay dùng cho người tụ tập (集まる).",
        0,
        [
            "今週は毎日残業が続いたので、体の疲れがたまっている。",
            "海外旅行に行くために、毎月少しずつお金をたまっている。",
            "公園の広場に大勢の人がたまって、イベントを見ている。",
            "テストに合格するために、毎日漢字をたくさんたまっている。"
        ],
        [
            "✅ ĐÚNG — Tuần này ngày nào cũng tăng ca nên mệt mỏi cơ thể đang tích tụ (疲れがたまる).",
            "❌ SAI — Chủ động tiết kiệm tiền dùng tha động từ ためる (お金をためる), không dùng をたまる!",
            "❌ SAI — Đám đông tụ tập ở công viên dùng 集まる (あつまる), không dùng たまる.",
            "❌ SAI — Học thuộc/ghi nhớ nhiều chữ Hán dùng 覚える (おぼえる), không dùng たまる."
        ]
    ),
    (
        "縮小", "しゅくしょう", "Danh từ / Danh động từ",
        "Thu nhỏ, cắt giảm quy mô (in phóng to/thu nhỏ copy, thu hẹp quy mô kinh doanh/sự kiện)",
        "コピーを縮小する / 規模を縮小する",
        "CHỈ việc THU NHỎ TỶ LỆ (bản copy, hình ảnh) hoặc THU HẸP QUY MÔ (công ty, sự kiện); KHÔNG dùng cho áo giặt bị co rút tự nhiên (縮む: ちぢむ) hay hạ âm lượng (音を小さくする).",
        3,
        [
            "お湯でセーターを洗ったら、サイズが小さくなって縮小してしまった。",
            "テレビの音が大きすぎるから、もう少し縮小してください。",
            "昨日より気温が5度も縮小して、とても寒い。",
            "B4サイズの資料をA4サイズに縮小してコピーした。"
        ],
        [
            "❌ SAI — Áo len giặt bị co rút dùng 縮む (ちぢむ), không dùng 縮小.",
            "❌ SAI — Vặn nhỏ tiếng tivi dùng 音を小さくする / 下げる, không dùng 縮小.",
            "❌ SAI — Nhiệt độ giảm 5 độ dùng 下がる (さがる), không dùng 縮小.",
            "✅ ĐÚNG — Tôi photo thu nhỏ tài liệu khổ B4 xuống khổ A4 (A4サイズに縮小してコピー)."
        ]
    ),
    (
        "離す", "はなす", "Động từ",
        "Tách rời ra, để cách xa nhau, buông ra (khoảng cách giữa 2 vật, bỏ tay/mắt ra)",
        "机を離す / 手を離す / 目を離す",
        "Là THA ĐỘNG TỪ (người chủ động tách rời / buông tay: 〜を離す); KHÔNG nhầm với đồng âm 話す (nói chuyện) và tự động từ 離れる (rời xa khỏi nơi nào đó)!",
        1,
        [
            "駅は家から歩いて20分も離している。",
            "試験中は不正を防ぐため、机と机の間を少し離して並べた。",
            "友達とカフェで2時間も楽しく離した。",
            "電車がホームからゆっくり離していった。"
        ],
        [
            "❌ SAI — Nhà cách xa ga dùng tự động từ 離れている (はなれている), không dùng 離している.",
            "✅ ĐÚNG — Trong giờ thi để tránh gian lận, người ta kê tách các bàn cách xa nhau một chút (机を離す).",
            "❌ SAI — Nói chuyện vui vẻ với bạn là 話す (はなす — đồng âm khác nghĩa!).",
            "❌ SAI — Tàu rời sân ga dùng tự động từ 離れる (はなれる) hoặc 出発する."
        ]
    ),
    (
        "建設", "けんせつ", "Danh từ / Danh động từ",
        "Xây dựng công trình quy mô lớn (đường sắt, sân bay, cầu, đập, nhà máy, tòa nhà lớn)",
        "新空港を建設する / 橋を建設する / 建設工事",
        "CHỈ việc XÂY DỰNG CÔNG TRÌNH QUY MÔ LỚN / CƠ SỞ HẠ TẦNG (cầu, đường, sân bay, bệnh viện lớn); KHÔNG dùng cho đóng đồ nội thất nhỏ (作る), lập kế hoạch (立てる) hay nấu ăn.",
        2,
        [
            "夏休みの旅行のスケジュールをみんなで建設した。",
            "日曜大工で、庭に犬小屋を建設した。",
            "渋滞を減らすため、来年から新しい高速道路を建設する予定だ。",
            "友達の誕生日に、大きなチョコレートケーキを建設した。"
        ],
        [
            "❌ SAI — Lập kế hoạch du lịch dùng 計画を立てる (たてる), không dùng 建設.",
            "❌ SAI — Tự đóng chuồng chó nhỏ ở vườn dùng 作る (つくる), không dùng 建設.",
            "✅ ĐÚNG — Để giảm tắc đường, từ sang năm dự định xây dựng tuyến cao tốc mới (高速道路を建設する).",
            "❌ SAI — Làm bánh sinh nhật dùng 作る (つくる), không dùng 建設."
        ]
    ),
    (
        "こぼす", "こぼす", "Động từ",
        "Làm đổ, làm rơi vãi (nước, cà phê, súp, muối, hạt cơm ra ngoài); than vãn (愚痴をこぼす)",
        "コーヒーをこぼす / 水をこぼす / ご飯をこぼす",
        "CHỈ làm ĐỔ / RƠI VÃI CHẤT LỎNG hoặc HẠT NHỎ từ vật chứa ra ngoài (tha động từ); KHÔNG dùng cho làm rơi 1 đồ vật rắn nguyên khối như bút/ví/điện thoại (落とす: おとす)!",
        0,
        [
            "手が滑って、テーブルの上にコーヒーをこぼしてしまった。",
            "ポケットに穴が開いていて、大事な鍵を道にこぼしてしまった。",
            "電車の中に傘をこぼしてきてしまった。",
            "階段からスマホをこぼして、画面が割れた。"
        ],
        [
            "✅ ĐÚNG — Trượt tay nên tôi làm đổ cà phê ra mặt bàn mất rồi (コーヒーをこぼす).",
            "❌ SAI — Làm rơi chìa khóa dùng 落とす (おとす), không dùng こぼす cho vật rắn đơn lẻ.",
            "❌ SAI — Bỏ quên ô trên tàu dùng 忘れる (わすれる), không dùng こぼす.",
            "❌ SAI — Làm rơi điện thoại vỡ màn hình dùng 落とす (おとす), không dùng こぼす."
        ]
    ),
    (
        "余る", "あまる", "Động từ",
        "Thừa ra, còn dư lại (thức ăn, tiền, thời gian, nguyên liệu sau khi đã dùng xong)",
        "料理が余る / 時間が余る / お金が余る",
        "Là TỰ ĐỘNG TỪ (〜が余る: còn thừa lại sau khi dùng/chia); KHÔNG dùng cho thứ còn thiếu (足りない) hay người ở lại sau cùng trong phòng (残る: のこる).",
        3,
        [
            "会議が終わったあとも、山田さんだけ部屋に余って仕事をしていた。",
            "財布に300円しかないので、この本を買うには200円余っている。",
            "買いすぎたパンを冷蔵庫に余っておいた。",
            "パーティーで料理を作りすぎて、たくさん余ってしまった。"
        ],
        [
            "❌ SAI — Người ở lại phòng sau cuộc họp dùng 残る (のこる), không nói 人が余る trong ngữ cảnh này.",
            "❌ SAI — Thiếu 200 yên dùng 足りない (たりない), trái nghĩa hoàn toàn với 余る!",
            "❌ SAI — Chủ động cất phần dư vào tủ lạnh dùng 残しておく hoặc しまっておく (余る là tự động từ).",
            "✅ ĐÚNG — Làm nhiều đồ ăn quá cho bữa tiệc nên còn thừa rất nhiều (料理が余る)."
        ]
    ),
    (
        "効果", "こうか", "Danh từ",
        "Hiệu quả, tác dụng tốt (thuốc, phương pháp học, quảng cáo, tập luyện, chế độ ăn)",
        "効果がある / 効果が出る / 薬の効果",
        "CHỈ TÁC DỤNG / HIỆU QUẢ ĐẠT ĐƯỢC sau khi áp dụng 1 biện pháp (thuốc, luyện tập, quảng cáo); KHÔNG nhầm với 結果 (kết quả kỳ thi/trận đấu) hay 原因 (nguyên nhân)!",
        1,
        [
            "昨日受けた健康診断の効果が、来週メールで届くそうだ。",
            "毎日ジョギングを続けた効果が出て、体力がずいぶんついた。",
            "試合の効果は3対1で、私たちのチームが勝った。",
            "事故の効果を警察が詳しく調べている。"
        ],
        [
            "❌ SAI — Kết quả khám sức khỏe dùng 結果 (けっか), bẫy siêu hay ra giữa 効果 và 結果!",
            "✅ ĐÚNG — Hiệu quả của việc chạy bộ mỗi ngày đã xuất hiện, thể lực tăng rõ rệt (効果が出る).",
            "❌ SAI — Tỷ số/kết quả trận đấu dùng 結果 (けっか), không dùng 効果.",
            "❌ SAI — Nguyên nhân tai nạn dùng 原因 (げんいん), không dùng 効果."
        ]
    ),
    (
        "緊張", "きんちょう", "Danh từ / Danh động từ",
        "Căng thẳng, hồi hộp (trước khi phỏng vấn, phát biểu, thi cử, gặp người quan trọng)",
        "緊張する / 緊張がほぐれる / 面接で緊張する",
        "CHỈ trạng thái CĂNG THẲNG TÂM LÝ / HỒI HỘP của con người (hoặc tình hình chính trị căng thẳng); KHÔNG dùng cho sợi dây căng cứng (ピンと張る), phòng chật chội hay cơ thể mệt (疲れる).",
        2,
        [
            "洗濯物を干すために、ロープを強く緊張して結んだ。",
            "今日は10キロも歩いたので、足がとても緊張している。",
            "初めての就職面接だったので、とても緊張してうまく話せなかった。",
            "このズボンはサイズが小さくて、おなかが緊張する。"
        ],
        [
            "❌ SAI — Kéo căng dây phơi dùng 張る (はる), bẫy chữ 張!",
            "❌ SAI — Chân mỏi dùng 疲れる (つかれる) hoặc だるい, không dùng 緊張.",
            "✅ ĐÚNG — Vì là lần đầu phỏng vấn xin việc nên tôi rất căng thẳng không nói trôi chảy được (緊張する).",
            "❌ SAI — Quần chật bụng dùng きつい, không dùng 緊張."
        ]
    ),
    (
        "翻訳", "ほんやく", "Danh từ / Danh động từ",
        "Biên dịch, dịch thuật văn bản (sách, tiểu thuyết, tài liệu, bài báo sang ngôn ngữ khác)",
        "小説を翻訳する / 日本語に翻訳する / 翻訳家",
        "CHỈ dịch VĂN BẢN / SÁCH BÁO viết sang ngôn ngữ khác; KHÔNG nhầm với 通訳 (つうやく: phiên dịch nói trực tiếp trong cuộc họp/hội nghị) hay giải thích bằng cùng 1 ngôn ngữ (説明)!",
        0,
        [
            "この日本の小説は、英語やベトナム語など10か国語に翻訳されている。",
            "社長の隣に座って、外国人客との会話をリアルタイムで翻訳した。",
            "難しい漢字の意味を、先生にやさしい日本語で翻訳してもらった。",
            "友達のメモの字が汚くて読めなかったので、本人に翻訳してもらった。"
        ],
        [
            "✅ ĐÚNG — Cuốn tiểu thuyết Nhật này đã được dịch ra 10 ngôn ngữ như tiếng Anh, tiếng Việt (翻訳されている).",
            "❌ SAI — Phiên dịch lời nói trực tiếp trong cuộc họp dùng 通訳 (つうやく), bẫy kinh điển!",
            "❌ SAI — Giải thích nghĩa bằng tiếng Nhật dễ hơn dùng 説明する hoặc 言い換える.",
            "❌ SAI — Đọc hộ chữ viết xấu dùng 読んでもらう, không dùng 翻訳."
        ]
    ),
    (
        "訪問", "ほうもん", "Danh từ / Danh động từ",
        "Thăm hỏi, ghé thăm (trang trọng: thăm nhà ai, công ty đối tác, quốc gia khác)",
        "取引先を訪問する / 自宅を訪問する / 日本を訪問する",
        "CHỈ việc ĐẾN THĂM (nhà ai, khách hàng, công ty, nước bạn — sắc thái lịch sự); KHÔNG dùng cho việc đặt câu hỏi (質問: しつもん — bẫy chữ 問!) hay đi mua sắm ở siêu thị bình thường.",
        3,
        [
            "授業の内容でわからないことがあったので、先生に訪問した。",
            "道に迷ってしまい、交番のお巡りさんに駅までの行き方を訪問した。",
            "毎日夕方になると、夕食の材料を買うためにスーパーを訪問する。",
            "来週、新しい商品の説明のために取引先の会社を訪問する予定だ。"
        ],
        [
            "❌ SAI — Hỏi bài thầy giáo dùng 質問する (しつもんする), bẫy chữ 問!",
            "❌ SAI — Hỏi đường chú cảnh sát dùng 聞く (きく) hoặc 尋ねる (たずねる), không dùng 訪問.",
            "❌ SAI — Đi siêu thị mua đồ ăn hằng ngày dùng 行く, không dùng từ trang trọng 訪問.",
            "✅ ĐÚNG — Tuần sau tôi dự định đến thăm công ty đối tác để giới thiệu sản phẩm mới (取引先を訪問する)."
        ]
    ),
    (
        "ころぶ", "ころぶ", "Động từ",
        "Bị vấp ngã, té nhào (người đang đi/chạy bị trượt chân ngã xuống đất)",
        "道でころぶ / 階段でころぶ / 氷の上でころぶ",
        "CHỈ NGƯỜI bị trượt chân / vấp té ngã trên mặt đất; KHÔNG dùng cho đồ vật rơi từ trên cao xuống (落ちる), quả bóng lăn (転がる: ころがる) hay cây đổ (倒れる: たおれる)!",
        1,
        [
            "机の上から消しゴムが床にころんだ。",
            "雨で道が滑りやすくなっていたので、走っていたらころんでしまった。",
            "昨日の強い台風で、公園の大きな木がころんだ。",
            "坂道でボールが下までずっところんでいった。"
        ],
        [
            "❌ SAI — Cục tẩy rơi từ trên bàn xuống sàn dùng 落ちる (おちる), không dùng ころぶ.",
            "✅ ĐÚNG — Đường mưa trơn quá nên đang chạy tôi bị trượt ngã (道でころぶ).",
            "❌ SAI — Cây to bị bão quật đổ dùng 倒れる (たおれる), không dùng ころぶ.",
            "❌ SAI — Quả bóng lăn xuống dốc dùng 転がる (ころがる), bẫy siêu sát âm!"
        ]
    ),
    (
        "指示", "しじ", "Danh từ / Danh động từ",
        "Chỉ thị, hướng dẫn (cấp trên/bác sĩ/giáo viên ra lệnh hoặc hướng dẫn cách làm)",
        "部長の指示に従う / 指示を出す / 指示どおりに動く",
        "CHỈ LỜI CHỈ ĐẠO / HƯỚNG DẪN từ người có thẩm quyền (sếp, thầy, bác sĩ); KHÔNG dùng cho chỉ tay vào đồ vật (指さす), bày tỏ ý kiến cá nhân hay bảng chỉ đường.",
        2,
        [
            "動物園で子どもがパンダを見て、「あそこにいるよ」と指で指示した。",
            "レストランの店員さんに、一番おいしいメニューを指示してもらった。",
            "地震が起きたときは、慌てずに係員の指示に従って避難してください。",
            "友達に「明日映画を見に行こう」と指示した。"
        ],
        [
            "❌ SAI — Chỉ tay vào con gấu trúc dùng 指さす (ゆびさす), không dùng 指示.",
            "❌ SAI — Nhờ nhân viên giới thiệu món ngon dùng おすすめを聞く / 教えてもらう.",
            "✅ ĐÚNG — Khi có động đất, đừng hoảng loạn mà hãy sơ tán theo hướng dẫn của nhân viên (指示に従う).",
            "❌ SAI — Rủ bạn đi xem phim dùng 誘う (さそう), không ra 'chỉ thị' cho bạn bè!"
        ]
    ),
    (
        "植える", "うえる", "Động từ",
        "Trồng cây, trồng hoa (đặt rễ cây/hạt giống xuống đất cho mọc lên)",
        "庭に花を植える / 木を植える / 苗を植える",
        "CHỈ việc TRỒNG CÂY / HOA / RAU xuống đất; KHÔNG dùng cho cắm hoa vào bình (生ける / 飾る), nuôi thú cưng (飼う) hay chôn đồ vật xuống đất (埋める).",
        0,
        [
            "春になったので、庭にチューリップとバラの花を植えた。",
            "友達にもらったきれいな花を、リビングの花瓶に植えた。",
            "うちでは小さいころから犬を2匹植えている。",
            "宝物を箱に入れて、庭の土の中に植えて隠した。"
        ],
        [
            "✅ ĐÚNG — Sang xuân rồi nên tôi trồng hoa tulip và hoa hồng ngoài vườn (庭に花を植える).",
            "❌ SAI — Cắm hoa vào bình dùng 生ける (いける) hoặc 飾る (かざる), không dùng 植える.",
            "❌ SAI — Nuôi chó dùng 飼う (かう), không dùng 植える.",
            "❌ SAI — Chôn giấu kho báu xuống đất dùng 埋める (うめる), không dùng 植える."
        ]
    ),
    (
        "正直", "しょうじき", "Tính từ / Phó từ",
        "Thật thà, trung thực, thẳng thắn (không nói dối, nói thật lòng mình)",
        "正直に言う / 正直な人 / 正直なところ",
        "CHỈ tính trung thực, thẳng thắn của CON NGƯỜI / lời nói; KHÔNG dùng cho đáp án đúng (正しい: ただしい), đường thẳng tắp (まっすぐ) hay giờ đồng hồ chuẩn xác (正確: せいかく)!",
        3,
        [
            "テストの答えが正直かどうか、先生に確認してもらった。",
            "この道を正直に進むと、右側に郵便局が見えます。",
            "この時計は電波時計なので、いつも時間が正直だ。",
            "うそをつかずに、自分が失敗したことを正直に話して謝った。"
        ],
        [
            "❌ SAI — Đáp án đúng dùng 正しい (ただしい), bẫy chữ 正!",
            "❌ SAI — Đi thẳng theo con đường dùng まっすぐ, bẫy chữ 直!",
            "❌ SAI — Đồng hồ chạy chính xác dùng 正確 (せいかく), không dùng 正直.",
            "✅ ĐÚNG — Không nói dối, tôi đã nói thật lòng chuyện mình làm hỏng rồi xin lỗi (正直に話す)."
        ]
    ),
    (
        "見送る", "みおくる", "Động từ",
        "Tiễn chân (ra cửa, ra ga, ra sân bay tiễn người sắp đi xa); tạm gác/bỏ qua dự án",
        "空港まで見送る / 玄関で見送る / 友達を見送る",
        "CHỈ hành động TIỄN NGƯỜI KHÁC khởi hành (đứng vẫy tay tiễn ở cửa/ga/sân bay); KHÔNG dùng cho việc đưa đón tận nhà bằng xe (送る), gửi bưu phẩm (送る) hay nhìn ngắm phong cảnh (眺める).",
        1,
        [
            "国の両親に日本のお土産を郵便で見送った。",
            "留学する親友を空港の出発ロビーまで見送りに行った。",
            "電車に乗るとき、窓の外のきれいな海をずっと見送っていた。",
            "雨が降っていたので、車で友達を家まで見送ってあげた。"
        ],
        [
            "❌ SAI — Gửi quà qua bưu điện dùng 送る (おくる), không dùng 見送る.",
            "✅ ĐÚNG — Tôi ra tận sảnh khởi hành sân bay để tiễn người bạn thân đi du học (空港まで見送る).",
            "❌ SAI — Ngắm biển ngoài cửa sổ dùng 眺める (ながめる) hoặc 見る, không dùng 見送る.",
            "❌ SAI — Chở bạn về tận nhà dùng 送る (おくる — 家まで送る), còn 見送る là đứng tiễn đi."
        ]
    ),
    (
        "そろそろ", "そろそろ", "Tính từ / Phó từ",
        "Sắp sửa, đã đến lúc rồi (thời điểm thích hợp để bắt đầu/kết thúc việc gì đó)",
        "そろそろ帰ろう / そろそろ始まる / そろそろ春だ",
        "CHỈ cảm giác THỜI ĐIỂM ĐÃ GẦN TỚI (đến lúc về, sắp vào mùa, sắp bắt đầu); KHÔNG dùng cho tốc độ chậm chạp (ゆっくり) hay chuyện xảy ra đột ngột bất ngờ (急に/突然).",
        2,
        [
            "道が暗いので、転ばないようにそろそろ歩いてください。",
            "晴れていたのに、そろそろ大雨が降り出して驚いた。",
            "もう夜10時を過ぎたから、そろそろ失礼しますね。",
            "さっき駅に着いたばかりなのに、そろそろ電車が出てしまった。"
        ],
        [
            "❌ SAI — Đi chầm chậm cẩn thận dùng ゆっくり, không dùng そろそろ.",
            "❌ SAI — Trời đột ngột đổ mưa to dùng 急に (きゅうに) hoặc 突然 (とつぜん), không dùng そろそろ.",
            "✅ ĐÚNG — Đã quá 10 giờ tối rồi nên tôi xin phép sắp sửa về đây (そろそろ失礼します).",
            "❌ SAI — Vừa đến thì tàu đã chạy mất tiêu dùng ちょうど hoặc もう, không dùng そろそろ."
        ]
    ),
    (
        "ゆるい", "ゆるい", "Tính từ / Phó từ",
        "Lỏng lẻo, rộng (quần áo, dây buộc, ốc vít); thoai thoải (con dốc); dễ dãi (quy định)",
        "ズボンがゆるい / ねじがゆるい / ゆるい坂道 / ルールがゆるい",
        "Trái nghĩa của きつい (chật/gắt): dùng cho đồ buộc/mặc bị LỎNG RỘNG, dốc thoải hoặc luật dễ; KHÔNG dùng cho tốc độ chậm (遅い/ゆっくり), nước ấm nhẹ (ぬるい) hay tính cách hiền lành.",
        0,
        [
            "5キロやせたので、去年買ったジーンズのウエストがゆるくなった。",
            "このお風呂のお湯は少しゆるいから、もっと熱くしてほしい。",
            "このバスはスピードがとてもゆるくて、なかなか着かない。",
            "彼は声も動作もゆるくて、とても上品な人だ。"
        ],
        [
            "✅ ĐÚNG — Giảm 5 kg nên cạp chiếc quần jean mua năm ngoái bị lỏng/rộng ra (ウエストがゆるい).",
            "❌ SAI — Nước tắm hơi nguội/âm ấm là ぬるい (bẫy siêu kinh điển chỉ khác 1 chữ ゆ/ぬ!).",
            "❌ SAI — Xe buýt chạy chậm dùng 遅い (おそい) hoặc ゆっくり, không dùng ゆるい.",
            "❌ SAI — Giọng nói/động tác nhẹ nhàng chậm rãi dùng 穏やか (おだやか) hoặc ゆっくり."
        ]
    ),
    (
        "受け入れる", "うけいれる", "Động từ",
        "Chấp nhận, tiếp nhận (ý kiến, đề nghị, sự thật, du học sinh, yêu cầu của người khác)",
        "意見を受け入れる / 要求を受け入れる / 留学生を受け入れる",
        "CHỈ việc ĐỒNG Ý CHẤP NHẬN đề nghị/ý kiến/sự thật hoặc đón nhận người (du học sinh/thực tập sinh) vào tổ chức; KHÔNG dùng cho việc cầm nhận gói hàng (受け取る) hay nhét đồ vào túi (入れる).",
        3,
        [
            "ポストに届いていた電気代の請求書を受け入れた。",
            "買ったばかりのりんごを冷蔵庫の中に受け入れた。",
            "誕生日に友達から素敵な花束を受け入れてうれしかった。",
            "会議で話し合った結果、チーム全員が私の提案を受け入れてくれた。"
        ],
        [
            "❌ SAI — Lấy/nhận hóa đơn tiền điện ở hòm thư dùng 受け取る (うけとる), không dùng 受け入れる.",
            "❌ SAI — Cho táo vào tủ lạnh dùng 入れる (いれる), không dùng 受け入れる.",
            "❌ SAI — Nhận bó hoa quà tặng dùng もらう hoặc 受け取る, không dùng 受け入れる.",
            "✅ ĐÚNG — Sau khi thảo luận cuộc họp, cả nhóm đã chấp nhận đề xuất của tôi (提案を受け入れる)."
        ]
    ),
    (
        "はかる", "はかる", "Động từ",
        "Đo đạc, cân đo (chiều dài, cân nặng, nhiệt độ, thời gian, huyết áp)",
        "体温をはかる / 体重をはかる / 長さをはかる / 時間をはかる",
        "CHỈ dùng dụng cụ ĐO / CÂN CÁC ĐẠI LƯỢNG SỐ HỌC (nhiệt độ, cân nặng, độ dài, thời gian); KHÔNG dùng cho việc đếm số lượng 1-2-3 cái (数える: かぞえる) hay tính tiền (計算する).",
        1,
        [
            "教室にいる学生の人数を一人ずつはかった。",
            "少し寒気がするので、体温計で熱をはかってみよう。",
            "レジで買い物した合計金額をはかってもらった。",
            "夜空に光っている星の数をはかるのは無理だ。"
        ],
        [
            "❌ SAI — Đếm số lượng sinh viên dùng 数える (かぞえる), không dùng はかる.",
            "✅ ĐÚNG — Thấy hơi ớn lạnh nên tôi thử lấy nhiệt kế đo nhiệt độ xem sao (熱をはかる).",
            "❌ SAI — Tính tổng tiền ở quầy thu ngân dùng 計算する (けいさんする), không dùng はかる.",
            "❌ SAI — Đếm số sao trên trời dùng 数える (かぞえる), không dùng はかる."
        ]
    ),
    (
        "ユーモア", "ユーモア", "Danh từ",
        "Sự hài hước, óc khôi hài (cách nói chuyện/tính cách duyên dáng khiến người khác cười)",
        "ユーモアがある / ユーモアたっぷり / ユーモアのセンス",
        "CHỈ KHIẾU HÀI HƯỚC tinh tế trong tính cách, lời nói, tác phẩm; KHÔNG dùng cho tin đồn (うわさ — bẫy gần âm tiếng Anh rumor!) hay trò đùa ác ý/nói dối.",
        2,
        [
            "駅前に新しいデパートができるというユーモアを聞いた。",
            "彼はとてもユーモアな人で、いつも大きな声で泣いている。",
            "佐藤先生はユーモアがあるので、授業がいつも楽しくて人気がある。",
            "テストで悪い点を取って、ユーモアな気持ちになった。"
        ],
        [
            "❌ SAI — Tin đồn là うわさ (tiếng Anh là rumor, bẫy siêu hay nhầm với humor = ユーモア!).",
            "❌ SAI — Hay khóc to không hề liên quan tới hài hước (và ユーモア là danh từ, không dùng ユーモアな人).",
            "✅ ĐÚNG — Thầy Sato rất có khiếu hài hước nên giờ học lúc nào cũng vui và được yêu thích (ユーモアがある).",
            "❌ SAI — Tâm trạng buồn chán dùng 落ち込む hoặc 悲しい, không dùng ユーモア."
        ]
    ),
]
