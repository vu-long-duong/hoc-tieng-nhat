# -*- coding: utf-8 -*-
# Part 1: Top 22 Ultra-High-Frequency Mondai 5 Words (Repeated 2-3x inside M5 across 2010-2026)
# Tuple format:
# (word, reading, pos, meaning_vi, collocation, trap_rule, ans_idx, [opt0, opt1, opt2, opt3], [exp0, exp1, exp2, exp3])

M5_PART1 = [
    (
        "募集", "ぼしゅう", "Danh từ / Danh động từ",
        "Tuyển dụng, kêu gọi tham gia / đóng góp (nhân viên, thành viên, tác phẩm, ý kiến)",
        "アルバイトを募集する / 参加者を募集する / アイデアを募集する",
        "CHỈ dùng khi thông báo rộng rãi để kêu gọi nhiều người đăng ký/gửi bài; KHÔNG dùng cho thu gom đồ vật/rác (集める) hay rủ rê bạn bè đi chơi (誘う).",
        1,
        [
            "部屋に落ちているごみを募集して、ごみ箱に入れた。",
            "駅前の新しいカフェで、アルバイトを募集している。",
            "今度の土曜日に映画を見に行こうと友達を募集した。",
            "図書館で借りた本を全部募集して、返しに行った。"
        ],
        [
            "❌ SAI — Nhặt/gom rác phải dùng 集める (あつめる), không dùng 募集 cho đồ vật rơi vãi.",
            "✅ ĐÚNG — Quán cà phê mới trước ga đang tuyển nhân viên làm thêm (アルバイトを募集する).",
            "❌ SAI — Rủ bạn đi xem phim phải dùng 誘う (さそう), không dùng 募集.",
            "❌ SAI — Gom sách đã mượn lại phải dùng 集める hoặc まとめる, không dùng 募集."
        ]
    ),
    (
        "断る", "ことわる", "Động từ",
        "Từ chối (lời mời, lời nhờ vả, đề nghị); xin phép trước",
        "誘いを断る / 頼みを断る / 申し込みを断る",
        "CHỈ dùng để từ chối yêu cầu/lời mời/đề xuất từ người khác (hoặc hủy hợp đồng); KHÔNG dùng cho việc cắt đứt vật lý (切る) hay bỏ thói quen (やめる).",
        2,
        [
            "健康のために、今年からお酒を断ることにした。",
            "はさみで長いひもを半分に断った。",
            "用事があったので、友達のパーティーの誘いを断った。",
            "雨が降ってきたので、ピクニックを断ることにした。"
        ],
        [
            "❌ SAI — Cai rượu/bỏ thói quen dùng やめる (hoặc văn viết 断つ), không dùng 断る.",
            "❌ SAI — Cắt dây bằng kéo phải dùng 切る (きる), bẫy nghĩa Hán Việt 'ĐOẠN'.",
            "✅ ĐÚNG — Vì có việc bận nên tôi đã từ chối lời mời dự tiệc của bạn (誘いを断る).",
            "❌ SAI — Hủy kế hoạch dã ngoại phải dùng 中止する (ちゅうしする) hoặc やめる."
        ]
    ),
    (
        "性格", "せいかく", "Danh từ",
        "Tính cách, bản tính (của con người / thú cưng)",
        "性格が明るい / 性格が合う / やさしい性格",
        "CHỈ dùng cho tính cách của CON NGƯỜI (hoặc động vật nuôi); KHÔNG dùng cho thời tiết, chất lượng đồ vật (品質) hay hương vị món ăn (味).",
        0,
        [
            "妹は明るくてやさしい性格なので、みんなに好かれている。",
            "このパソコンは性格がいいので、仕事がとてもやりやすい。",
            "今日は天気がよくて、気持ちのいい性格の日だ。",
            "このレストランの料理は、辛くて濃い性格をしている。"
        ],
        [
            "✅ ĐÚNG — Em gái có tính cách tươi sáng, dịu dàng nên được mọi người yêu quý.",
            "❌ SAI — Máy tính chạy tốt/hiệu năng cao dùng 性能がいい (せいのう), không dùng 性格.",
            "❌ SAI — Thời tiết/ngày dễ chịu dùng 天気 hoặc 気候, không dùng 性格.",
            "❌ SAI — Món ăn có vị cay đậm dùng 味 (あじ) hoặc 特徴, không dùng 性格."
        ]
    ),
    (
        "渋滞", "じゅうたい", "Danh từ / Danh động từ",
        "Tắc đường, kẹt xe (giao thông)",
        "道が渋滞する / 交通渋滞 / 渋滞に巻き込まれる",
        "CHỈ dùng cho XE CỘ / GIAO THÔNG trên đường bị tắc nghẽn; KHÔNG dùng cho người xếp hàng (並ぶ/混む), cống bị nghẹt (詰まる) hay công việc tồn đọng (たまる).",
        3,
        [
            "人気のあるラーメン屋の前で、お客さんが渋滞している。",
            "台所の排水口にごみが渋滞して、水が流れなくなった。",
            "忙しくてメールの返信がずっと渋滞している。",
            "事故で高速道路が渋滞していたので、約束に遅れてしまった。"
        ],
        [
            "❌ SAI — Khách xếp hàng đông trước quán ăn dùng 並んでいる hoặc 混んでいる, không dùng 渋滞.",
            "❌ SAI — Ống thoát nước bị nghẹt dùng 詰まる (つまる), không dùng 渋滞.",
            "❌ SAI — Email/công việc tồn đọng dùng たまる (溜まる), không dùng 渋滞.",
            "✅ ĐÚNG — Do tai nạn nên đường cao tốc bị tắc xe khiến tôi trễ hẹn (道路が渋滞する)."
        ]
    ),
    (
        "発展", "はってん", "Danh từ / Danh động từ",
        "Phát triển, mở rộng quy mô (kinh tế, thành phố, khoa học, ngành nghề, tình cảm)",
        "経済が発展する / 町が発展する / 技術が発展する",
        "Dùng cho sự phát triển quy mô lớn (đô thị, kinh tế, công nghệ, mối quan hệ); KHÔNG dùng cho chiều cao/cơ thể lớn lên (成長する) hay kỹ năng cá nhân giỏi lên (上達する).",
        1,
        [
            "息子は中学生になって、背が急に発展した。",
            "新しい駅ができてから、この町は大きく発展した。",
            "毎日練習したので、日本語の会話が発展した。",
            "水をあげたら、庭の花がきれいに発展した。"
        ],
        [
            "❌ SAI — Chiều cao/trẻ con lớn lên phải dùng 伸びる (のびる) hoặc 成長する (せいちょう).",
            "✅ ĐÚNG — Từ khi có nhà ga mới, thị trấn này đã phát triển vượt bậc (町が発展する).",
            "❌ SAI — Trình độ hội thoại/kỹ năng cá nhân tiến bộ dùng 上達する (じょうたつ) hoặc うまくなる.",
            "❌ SAI — Hoa nở/cây lớn lên dùng 咲く (さく) hoặc 育つ (そだつ), không dùng 発展."
        ]
    ),
    (
        "盛ん", "さかん", "Tính từ / Phó từ",
        "Thịnh hành, phát triển mạnh mẽ, sôi nổi (ngành nghề, thể thao, hoạt động)",
        "スポーツが盛んだ / 農業が盛んだ / 交流が盛んになる",
        "Mang sắc thái TÍCH CỰC cho phong trào, ngành kinh tế, thể thao, văn hóa tại một khu vực/thời kỳ; KHÔNG dùng cho tai nạn/dịch bệnh/mưa gió hay sức khỏe cá nhân.",
        2,
        [
            "最近は風邪が盛んなので、気をつけてください。",
            "祖父は80歳ですが、今でもとても盛んです。",
            "この地域は昔から米作りや漁業が盛んです。",
            "昨日は台風で風がすごく盛んだった。"
        ],
        [
            "❌ SAI — Cảm cúm/dịch bệnh lây lan dùng 流行している (はやっている), không dùng 盛ん.",
            "❌ SAI — Ông khỏe mạnh dùng 元気 (げんき), không dùng 盛ん cho sức khỏe 1 cá nhân.",
            "✅ ĐÚNG — Vùng này từ xưa trồng lúa và đánh cá rất phát triển (〜が盛んです).",
            "❌ SAI — Gió thổi mạnh dùng 風が強い (つよい), không dùng 盛ん."
        ]
    ),
    (
        "だるい", "だるい", "Tính từ / Phó từ",
        "Uể oải, rã rời, nặng nề mệt mỏi (cơ thể, chân tay)",
        "体がだるい / 足がだるい / なんとなく体がだるい",
        "CHỈ dùng cho cảm giác mệt rã rời về THỂ CHẤT của cơ thể/chân tay (do ốm, thiếu ngủ, đi bộ nhiều); KHÔNG dùng cho đồ vật nặng, bài tập chán (退屈) hay quần áo rộng (ゆるい).",
        0,
        [
            "熱があるみたいで、朝から体がだるい。",
            "この映画は話が長くて、とてもだるかった。",
            "このズボンはウエストがだるいので、ベルトが必要だ。",
            "荷物がだるくて、一人では階段を運べない。"
        ],
        [
            "✅ ĐÚNG — Hình như bị sốt nên từ sáng cả người cứ uể oải, rã rời (体がだるい).",
            "❌ SAI — Bộ phim dài dòng chán ngắt dùng 退屈 (たいくつ) hoặc つまらない.",
            "❌ SAI — Quần bị lỏng/rộng eo dùng ゆるい, không dùng だるい.",
            "❌ SAI — Hành lý nặng dùng 重い (おもい), không dùng だるい."
        ]
    ),
    (
        "落ち着く", "おちつく", "Động từ",
        "Bình tĩnh lại, lắng xuống; yên bình, trang nhã (không gian/màu sắc)",
        "気持ちが落ち着く / 落ち着いて話す / 落ち着いた雰囲気",
        "Là TỰ ĐỘNG TỪ (người/tâm trạng bình tĩnh lại, cơn đau/công việc dịu xuống, không gian tĩnh lặng); KHÔNG dùng cho đồ vật rơi xuống (落ちる) hay làm ai đó hết buồn (慰める).",
        3,
        [
            "机の上からペンが床に落ち着いた。",
            "この薬を飲めば、高い熱がすぐに落ち着くでしょう。",
            "泣いている子どもをやさしく落ち着いた。",
            "深呼吸をしたら、緊張していた気持ちが少し落ち着いた。"
        ],
        [
            "❌ SAI — Bút rơi từ bàn xuống sàn là 落ちた (おちた), bẫy chữ 落.",
            "❌ SAI — Hạ sốt dùng 熱が下がる (さがる), không dùng 熱が落ち着く.",
            "❌ SAI — 落ち着く là tự động từ, KHÔNG đi với を để an ủi người khác (dùng 落ち着かせる hoặc 慰める).",
            "✅ ĐÚNG — Hít thở sâu xong, tâm trạng căng thẳng đã dịu xuống, bình tĩnh lại một chút."
        ]
    ),
    (
        "空", "から", "Danh từ / Danh động từ",
        "Trống rỗng, không có gì bên trong (hộp, chai, ví, tủ lạnh, bụng)",
        "箱が空になる / 冷蔵庫が空だ / おなかが空っぽ",
        "CHỈ dùng cho VẬT CHỨA (chai, hộp, túi, bình, ví, tủ lạnh) không còn gì bên trong; KHÔNG dùng cho ghế trống/phòng trống/thời gian rảnh (空いている: あいている) hay đầu óc quên sạch.",
        1,
        [
            "明日の午後は空なので、いつでも会えますよ。",
            "水を全部飲んでしまったので、ペットボトルが空になった。",
            "この電車は空だから、どこでも座れる。",
            "昨日の勉強を忘れて、テストのとき頭が空だった。"
        ],
        [
            "❌ SAI — Thời gian rảnh dùng 空いている (あいている) hoặc ひまだ, không nói 午後は空だ.",
            "✅ ĐÚNG — Uống hết sạch nước nên chai nhựa đã trở nên trống rỗng (ペットボトルが空になった).",
            "❌ SAI — Tàu vắng khách/còn chỗ trống dùng 空いている (すいている), không dùng 空 (から).",
            "❌ SAI — Đầu óc trống rỗng dùng 真っ白 (まっしろ) hoặc 空っぽ trong văn nói đặc thù, chuẩn N3 chỉ dùng 空 cho vật chứa."
        ]
    ),
    (
        "消費", "しょうひ", "Danh từ / Danh động từ",
        "Tiêu thụ, tiêu dùng (điện, nước, năng lượng, tiền bạc, thời gian, calo)",
        "電気を消費する / エネルギーを消費する / 消費量が増える",
        "Dùng cho việc tiêu hao tài nguyên/năng lượng/hàng hóa/tiền bạc (dạng kinh tế - sinh hoạt); KHÔNG dùng cho việc xóa chữ (消す), tắt lửa (消す) hay làm mất đồ (なくす).",
        2,
        [
            "間違えた漢字を消しゴムで消費した。",
            "火事にならないように、寝る前にストーブを消費した。",
            "夏はエアコンを使うので、電気の消費量が増える。",
            "旅行先で大切なカメラを消費してしまった。"
        ],
        [
            "❌ SAI — Xóa chữ bằng tẩy dùng 消す (けす), bẫy chữ 消.",
            "❌ SAI — Tắt lò sưởi dùng 消す (けす), không dùng 消費.",
            "✅ ĐÚNG — Mùa hè dùng điều hòa nên lượng tiêu thụ điện tăng lên (電気の消費量).",
            "❌ SAI — Làm mất máy ảnh dùng なくす (失くす), không dùng 消費."
        ]
    ),
    (
        "知り合う", "しりあう", "Động từ",
        "Quen biết nhau (tình cờ/qua dịp nào đó trở thành người quen của nhau)",
        "〜と知り合う / 旅行先で知り合った人",
        "CHỈ dùng cho MỐI QUAN HỆ GIỮA NGƯỜI VỚI NGƯỜI (lần đầu quen biết nhau); KHÔNG dùng để nói biết tin tức/kiến thức/địa điểm (知る).",
        0,
        [
            "今の妻とは、大学のテニスサークルで知り合った。",
            "今日のニュースで、その事件のことを初めて知り合った。",
            "駅までの近い道を地図で調べて知り合った。",
            "日本の歴史についてもっとたくさん知り合いたい。"
        ],
        [
            "✅ ĐÚNG — Tôi và vợ hiện tại quen biết nhau ở câu lạc bộ tennis đại học (〜と知り合う).",
            "❌ SAI — Biết về 1 sự việc/tin tức dùng 知る (しる), không có nghĩa 'nhau' (合う).",
            "❌ SAI — Biết đường đi dùng 知る hoặc わかる, không dùng 知り合う.",
            "❌ SAI — Muốn biết thêm về lịch sử dùng 知りたい, không dùng 知り合いたい."
        ]
    ),
    (
        "にぎる", "にぎる", "Động từ",
        "Nắm chặt trong lòng bàn tay (tay ai đó, tay vịn, chìa khóa, nắm cơm sushi/onigiri)",
        "手をにぎる / おにぎりをにぎる / しっかりにぎる",
        "CHỈ dùng cho hành động nắm gọn vật nhỏ/tay/tay nắm bằng CÁC NGÓN TAY (hoặc nặn cơm nắm); KHÔNG dùng cho ôm người (抱く), vác đồ to (持つ/抱える) hay bắt bóng bằng vợt.",
        3,
        [
            "重くて大きな段ボール箱を両手でにぎって運んだ。",
            "お母さんが泣いている赤ちゃんをやさしくにぎった。",
            "肩にバッグをにぎって、会社へ出かけた。",
            "迷子にならないように、子どもの手をしっかりにぎって歩いた。"
        ],
        [
            "❌ SAI — Bê thùng các-tông to nặng dùng 抱える (かかえる) hoặc 持つ (もつ), không thể nắm bằng bàn tay.",
            "❌ SAI — Ôm em bé dùng 抱く (だく), không dùng にぎる.",
            "❌ SAI — Đeo túi lên vai dùng 肩にかける, không dùng にぎる.",
            "✅ ĐÚNG — Để khỏi bị lạc, tôi nắm chặt tay con rồi đi (手をしっかりにぎる)."
        ]
    ),
    (
        "修理", "しゅうり", "Danh từ / Danh động từ",
        "Sửa chữa (máy móc, xe cộ, đồng hồ, nhà cửa bị hỏng hóc)",
        "パソコンを修理する / 修理に出す / 自転車を修理してもらう",
        "CHỈ dùng cho ĐỒ VẬT / MÁY MÓC / CÔNG TRÌNH bị hỏng hóc; KHÔNG dùng cho sửa lỗi bài văn/chính tả (直す/訂正する), chữa bệnh (治す) hay sửa thói quen xấu (直す).",
        1,
        [
            "先生に作文の間違いを赤ペンで修理してもらった。",
            "自転車のブレーキが壊れたので、店で修理してもらった。",
            "風邪を早く修理するために、薬を飲んで寝た。",
            "遅刻する悪い癖を今月から修理しようと思う。"
        ],
        [
            "❌ SAI — Sửa lỗi bài văn dùng 直す (なおす) hoặc 訂正する, không dùng 修理.",
            "✅ ĐÚNG — Phanh xe đạp bị hỏng nên tôi nhờ cửa hàng sửa chữa (自転車を修理する).",
            "❌ SAI — Chữa bệnh/cảm cúm dùng 治す (なおす), không dùng 修理.",
            "❌ SAI — Sửa thói quen xấu dùng 直す (なおす), không dùng 修理."
        ]
    ),
    (
        "行き先", "いきさき", "Danh từ",
        "Điểm đến, nơi sẽ đi tới (của người, tàu xe, chuyến du lịch, bưu phẩm)",
        "行き先を決める / バスの行き先 / 行き先を伝える",
        "CHỈ nói về ĐỊA ĐIỂM ĐÍCH mà người/phương tiện hướng tới; KHÔNG dùng để chỉ tương lai cuộc đời (将来), quá khứ hay địa chỉ nhà cố định (住所).",
        2,
        [
            "この申込書に、お名前とご行き先を書いてください。",
            "大学を卒業した後の行き先について、両親と相談した。",
            "夏休みの旅行の行き先はまだ決まっていない。",
            "駅を出たら、行き先を右に曲がってください。"
        ],
        [
            "❌ SAI — Ghi họ tên và địa chỉ nhà dùng 住所 (じゅうしょ), không dùng 行き先.",
            "❌ SAI — Hướng đi tương lai sau tốt nghiệp dùng 進路 (しんろ) hoặc 将来 (しょうらい).",
            "✅ ĐÚNG — Điểm đến của chuyến du lịch nghỉ hè vẫn chưa được quyết định (旅行の行き先).",
            "❌ SAI — Rẽ phải ở ngã tư/góc phía trước dùng 角 (かど) hoặc 突き当たり, không dùng 行き先."
        ]
    ),
    (
        "話しかける", "はなしかける", "Động từ",
        "Bắt chuyện, chủ động mở lời nói với ai đó",
        "〜に話しかける / 隣の人に話しかけられた",
        "Mang nghĩa CHỦ ĐỘNG MỞ LỜI (gọi/hỏi chuyện 1 chiều, đi với trợ từ に); KHÔNG dùng cho việc nói chuyện qua lại lâu dài (話し合う/話す) hay kể chuyện trước đám đông (スピーチする).",
        0,
        [
            "昨日、駅で外国の観光客に英語で話しかけられた。",
            "会議で2時間もみんなと問題を話しかけた。",
            "昨日の夜、友達と電話で楽しく話しかけた。",
            "社長が社員全員の前で、今年の目標を話しかけた。"
        ],
        [
            "✅ ĐÚNG — Hôm qua tôi được du khách nước ngoài bắt chuyện bằng tiếng Anh ở ga (〜に話しかけられた).",
            "❌ SAI — Thảo luận vấn đề cùng mọi người trong cuộc họp dùng 話し合う (はなしあう).",
            "❌ SAI — Tán gẫu qua điện thoại dùng 話す (はなす) hoặc しゃべる.",
            "❌ SAI — Phát biểu/nói mục tiêu trước toàn nhân viên dùng 話す hoặc 説明する."
        ]
    ),
    (
        "進歩", "しんぽ", "Danh từ / Danh động từ",
        "Tiến bộ, phát triển vượt bậc lên mức cao hơn (khoa học kỹ thuật, y học, kỹ năng)",
        "技術が進歩する / 医学の進歩 / 大きく進歩する",
        "CHỈ sự tiến bộ về CHẤT LƯỢNG / TRÌNH ĐỘ (kỹ thuật, y học, năng lực); KHÔNG dùng cho bước đi vật lý về phía trước (歩く/進む) hay tiến độ hoàn thành 1 công việc cụ thể (進む).",
        3,
        [
            "駅まであと10分なので、もう少し早く進歩しましょう。",
            "手伝ってもらったおかげで、引っ越しの準備が進歩した。",
            "赤い信号が青に変わってから、車が前に進歩した。",
            "科学技術が進歩して、私たちの生活はとても便利になった。"
        ],
        [
            "❌ SAI — Đi bộ nhanh hơn dùng 歩く (あるく), bẫy chữ 歩 (bộ).",
            "❌ SAI — Tiến độ công việc chuẩn bị chuyển nhà chạy nhanh dùng 進む (すすむ).",
            "❌ SAI — Xe di chuyển về phía trước dùng 進む (すすむ), không dùng 進歩.",
            "✅ ĐÚNG — Khoa học kỹ thuật tiến bộ nên cuộc sống của chúng ta trở nên rất tiện lợi (技術が進歩する)."
        ]
    ),
    (
        "参加", "さんか", "Danh từ / Danh động từ",
        "Tham gia, góp mặt (vào sự kiện, cuộc họp, giải đấu, hoạt động tình nguyện)",
        "会議に参加する / 大会に参加する / ボランティアに参加する",
        "CHỈ dùng cho SỰ KIỆN / HOẠT ĐỘNG / CUỘC HỌP có tổ chức (〜に参加する); KHÔNG dùng cho đi vào nơi chốn bình thường (行く/入る), vào công ty làm việc (入社する) hay lên tàu xe (乗る).",
        1,
        [
            "毎日朝8時の電車に参加して、会社へ通っている。",
            "来月開かれる地域のマラソン大会に参加するつもりだ。",
            "大学を卒業したら、大手の貿易会社に参加したい。",
            "買い物の帰りに、駅前のスーパーに参加した。"
        ],
        [
            "❌ SAI — Lên tàu điện dùng 乗る (のる), không dùng 参加.",
            "✅ ĐÚNG — Tôi định tham gia giải chạy marathon địa phương tổ chức tháng sau (大会に参加する).",
            "❌ SAI — Gia nhập công ty đi làm dùng 入社する (にゅうしゃ) hoặc 入る, không dùng 参加.",
            "❌ SAI — Ghé vào siêu thị dùng 寄る (よる) hoặc 入る, không dùng 参加."
        ]
    ),
    (
        "通り過ぎる", "とおりすぎる", "Động từ",
        "Đi lướt qua, đi quá mất (cửa hàng, nhà ga, người đối diện) mà không dừng lại",
        "店の前を通り過ぎる / 降りる駅を通り過ぎる",
        "CHỈ hành động DI CHUYỂN VẬT LÝ đi ngang qua / lố qua 1 địa điểm hay đối tượng; KHÔNG dùng cho thời gian trôi qua (過ぎる/たつ) hay việc ăn/uống quá mức (食べ過ぎる).",
        2,
        [
            "あっという間に、楽しい夏休みが通り過ぎてしまった。",
            "昨日は甘いお菓子を通り過ぎて、おなかが痛くなった。",
            "スマホを見ていて、目的の喫茶店の前を通り過ぎてしまった。",
            "もう約束の時間を10分も通り過ぎている。"
        ],
        [
            "❌ SAI — Kỳ nghỉ hè trôi qua nhanh dùng 過ぎる (すぎる) hoặc 終わる, không dùng 通り過ぎる.",
            "❌ SAI — Ăn quá nhiều dùng 食べ過ぎる, không dùng 通り過ぎる.",
            "✅ ĐÚNG — Mải nhìn điện thoại nên tôi đã đi quá mất trước quán cà phê cần đến (前を通り過ぎる).",
            "❌ SAI — Quá giờ hẹn dùng 時間を過ぎる (すぎる), không dùng 通り過ぎる."
        ]
    ),
    (
        "中古", "ちゅうこ", "Danh từ",
        "Đồ cũ, hàng đã qua sử dụng (xe cũ, sách cũ, đồ điện tử, quần áo secondhand)",
        "中古の車 / 中古パソコン / 中古で買う",
        "CHỈ dùng cho HÀNG HÓA BỀN ĐÃ QUA SỬ DỤNG đem bán lại (xe, máy, sách, đồ gia dụng); KHÔNG dùng cho đồ ăn cũ/hết hạn (古い), di tích cổ đại (古い/古代) hay người lớn tuổi.",
        0,
        [
            "新品は高いので、中古の自転車を買った。",
            "冷蔵庫の中に中古の牛乳が残っていたから捨てた。",
            "京都には何百年も前に建てられた中古のお寺が多い。",
            "この言葉は昔使われていた中古の日本語です。"
        ],
        [
            "✅ ĐÚNG — Hàng mới đắt nên tôi đã mua một chiếc xe đạp cũ (中古の自転車).",
            "❌ SAI — Sữa cũ/hỏng dùng 古い (ふるい) hoặc 賞味期限が切れた, không bán 'sữa secondhand'!",
            "❌ SAI — Chùa cổ hàng trăm năm dùng 古い (ふるい), không dùng 中古 (chỉ đồ cũ mua đi bán lại).",
            "❌ SAI — Tiếng Nhật cổ dùng 古い hoặc 古語 (こご), không dùng 中古."
        ]
    ),
    (
        "発生", "はっせい", "Danh từ / Danh động từ",
        "Phát sinh, xảy ra (sự cố, tai nạn, hỏa hoạn, động đất, vấn đề, bệnh dịch)",
        "事故が発生する / 問題が発生する / 台風が発生する",
        "Là TỰ ĐỘNG TỪ (〜が発生する) và thường đi với SỰ VIỆC BẤT THƯỜNG / THIÊN TAI / SỰ CỐ / VẤN ĐỀ; KHÔNG dùng cho tiệc vui/lễ hội được tổ chức (開かれる) hay sinh con (生まれる).",
        3,
        [
            "来週の日曜日に、公園で楽しいお祭りが発生するそうだ。",
            "姉の家に先週、かわいい女の子が発生した。",
            "新しいアイデアを発生して、会議で発表した。",
            "システムにトラブルが発生し、電車が止まってしまった。"
        ],
        [
            "❌ SAI — Lễ hội được tổ chức dùng 開かれる (ひらかれる) hoặc 行われる, không dùng 発生.",
            "❌ SAI — Em bé chào đời dùng 生まれる (うまれる), bẫy chữ 生!",
            "❌ SAI — 発生 là tự động từ, không dùng を発生 để chỉ 'nghĩ ra ý tưởng' (dùng 思いつく/考える).",
            "✅ ĐÚNG — Hệ thống phát sinh sự cố khiến tàu điện phải dừng lại (トラブルが発生する)."
        ]
    ),
    (
        "活動", "かつどう", "Danh từ / Danh động từ",
        "Hoạt động (tình nguyện, câu lạc bộ, nghiên cứu, xã hội, nghệ thuật, núi lửa)",
        "ボランティア活動 / クラブ活動 / 活発に活動する",
        "CHỈ chuỗi HOẠT ĐỘNG CÓ MỤC ĐÍCH của tổ chức/nhóm/người (tình nguyện, CLB, xã hội) hoặc núi lửa hoạt động; KHÔNG dùng cho vận động thể dục (運動) hay máy móc chạy (動く).",
        1,
        [
            "ダイエットのために、毎朝30分活動している。",
            "大学では環境を守るボランティア活動に参加している。",
            "電池が切れて、時計が活動しなくなった。",
            "赤ちゃんがおなかの中で元気に活動している。"
        ],
        [
            "❌ SAI — Tập thể dục giảm cân dùng 運動する (うんどうする), không dùng 活動.",
            "✅ ĐÚNG — Ở đại học tôi tham gia hoạt động tình nguyện bảo vệ môi trường (ボランティア活動).",
            "❌ SAI — Đồng hồ hết pin không chạy nữa dùng 動く (うごく), không dùng 活動.",
            "❌ SAI — Em bé cử động trong bụng mẹ dùng 動く (うごく), không dùng 活動."
        ]
    ),
    (
        "身につける", "みにつける", "Động từ",
        "Nắm vững, tích lũy thành kỹ năng/thói quen của bản thân; mặc/đeo lên người",
        "技術を身につける / 知識を身につける / マナーを身につける",
        "Nghĩa tủ N3: học hỏi & biến KIẾN THỨC / KỸ NĂNG / TÁC PHONG thành của mình (hoặc đeo đồ trên người); KHÔNG dùng cho cầm đồ vật trong tay, dán đồ lên tường hay tăng cân (太る).",
        2,
        [
            "旅行の思い出に、お土産をたくさん身につけて帰った。",
            "冬はよく食べるので、毎年3キロぐらい身につけてしまう。",
            "将来料理人になるために、専門学校で基本の技術を身につけたい。",
            "壁にお気に入りのポスターを身につけた。"
        ],
        [
            "❌ SAI — Mua/mang quà lưu niệm về dùng 買う hoặc 持って帰る, không dùng 身につける.",
            "❌ SAI — Tăng cân dùng 太る (ふとる) hoặc 体重が増える, không dùng 身につける.",
            "✅ ĐÚNG — Để tương lai làm đầu bếp, tôi muốn rèn vững kỹ thuật cơ bản ở trường chuyên môn (技術を身につける).",
            "❌ SAI — Dán áp phích lên tường dùng 貼る (はる), không dùng 身につける."
        ]
    ),
]
