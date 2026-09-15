const vocabData = [
    {
        "id": "vocab_1",
        "kanji": "男性",
        "furigana": "だんせい",
        "meaning": "đàn ông, giới tính nam, nam tính",
        "example": "理想の男性と結婚する",
        "unit": "Unit 1",
        "example_vi": "Cưới người đàn ông trong mơ của tôi"
    },
    {
        "id": "vocab_2",
        "kanji": "女性",
        "furigana": "じょせい",
        "meaning": "phụ nữ, nữ tính, nữ tính",
        "example": "あの女性は誰ですか",
        "unit": "Unit 1",
        "example_vi": "Người phụ nữ đó là ai"
    },
    {
        "id": "vocab_3",
        "kanji": "高齢",
        "furigana": "こうれい",
        "meaning": "tuổi già",
        "example": "祖母は高齢だが、まだとても元気だ",
        "unit": "Unit 1",
        "example_vi": "Bà tôi đã già nhưng vẫn còn rất khỏe mạnh"
    },
    {
        "id": "vocab_4",
        "kanji": "年上",
        "furigana": "としうえ",
        "meaning": "cao cấp",
        "example": "年上の友達",
        "unit": "Unit 1",
        "example_vi": "Một người bạn lớn tuổi"
    },
    {
        "id": "vocab_5",
        "kanji": "目上",
        "furigana": "めうえ",
        "meaning": "sếp, tiền bối",
        "example": "目上の人には敬語で話したほうがいい",
        "unit": "Unit 1",
        "example_vi": "Tốt hơn hết là nên nói chuyện tôn trọng với người lớn tuổi hơn mình"
    },
    {
        "id": "vocab_6",
        "kanji": "先輩",
        "furigana": "せんぱい",
        "meaning": "đồng chí cao cấp, tất nhiên là cao cấp",
        "example": "田中さんと私は同じ年だが、職場では彼のほうが先輩だ",
        "unit": "Unit 1",
        "example_vi": "Tôi và anh Tanaka bằng tuổi nhau nhưng anh ấy là cấp trên của tôi ở nơi làm việc"
    },
    {
        "id": "vocab_7",
        "kanji": "後輩",
        "furigana": "こうはい",
        "meaning": "đồng chí trẻ, thế hệ trẻ",
        "example": "田中さんと私は同じ年だが、職場では彼のほうが先輩だ",
        "unit": "Unit 1",
        "example_vi": "Tôi và anh Tanaka bằng tuổi nhau nhưng anh ấy là cấp trên của tôi ở nơi làm việc"
    },
    {
        "id": "vocab_8",
        "kanji": "上司",
        "furigana": "じょうし",
        "meaning": "cấp trên, trưởng phòng",
        "example": "上司に相談してから、決定する",
        "unit": "Unit 1",
        "example_vi": "Sau khi tham khảo ý kiến ​​sếp, tôi đưa ra quyết định"
    },
    {
        "id": "vocab_9",
        "kanji": "相手",
        "furigana": "あいて",
        "meaning": "đối tác, người đối thoại",
        "example": "相手の目を見て話す",
        "unit": "Unit 1",
        "example_vi": "Nhìn vào mắt người khác và nói chuyện"
    },
    {
        "id": "vocab_10",
        "kanji": "知り合い",
        "furigana": "しりあい",
        "meaning": "người quen",
        "example": "知り合いに息子の就職を頼む",
        "unit": "Unit 1",
        "example_vi": "Nhờ người quen tìm việc làm cho con trai tôi"
    },
    {
        "id": "vocab_11",
        "kanji": "友人",
        "furigana": "ゆうじん",
        "meaning": "bạn, anh bạn",
        "example": "学生時代の友人です",
        "unit": "Unit 1",
        "example_vi": "Một người bạn cùng trường"
    },
    {
        "id": "vocab_12",
        "kanji": "仲",
        "furigana": "なか",
        "meaning": "mối quan hệ với ai đó",
        "example": "私は山本さんと仲がいい",
        "unit": "Unit 1",
        "example_vi": "Tôi là bạn tốt của ông Yamamoto"
    },
    {
        "id": "vocab_13",
        "kanji": "生年月日",
        "furigana": "せいねんがっぴ",
        "meaning": "ngày sinh",
        "example": "書類に生年月日を記入する",
        "unit": "Unit 1",
        "example_vi": "Ghi ngày sinh trên giấy tờ"
    },
    {
        "id": "vocab_14",
        "kanji": "誕生",
        "furigana": "たんじょう",
        "meaning": "sinh",
        "example": "新しい命の誕生を祝う",
        "unit": "Unit 1",
        "example_vi": "Kỷ niệm sự ra đời của một cuộc sống mới"
    },
    {
        "id": "vocab_15",
        "kanji": "年",
        "furigana": "とし",
        "meaning": "năm",
        "example": "年の始に一年の計画を立てる",
        "unit": "Unit 1",
        "example_vi": "Lập kế hoạch đầu năm"
    },
    {
        "id": "vocab_16",
        "kanji": "出身",
        "furigana": "しゅっしん",
        "meaning": "ban đầu từ, tốt nghiệp",
        "example": "ご出身はどちらですか",
        "unit": "Unit 1",
        "example_vi": "Bạn đến từ đâu?"
    },
    {
        "id": "vocab_17",
        "kanji": "故郷",
        "furigana": "こきょう",
        "meaning": "quê hương, làng quê",
        "example": "仕事は忙しくて、もう何年も故郷に帰っていない",
        "unit": "Unit 1",
        "example_vi": "Tôi bận công việc đã nhiều năm chưa về quê"
    },
    {
        "id": "vocab_18",
        "kanji": "成長",
        "furigana": "せいちょう",
        "meaning": "tăng trưởng",
        "example": "子供の成長を喜ぶ",
        "unit": "Unit 1",
        "example_vi": "Tôi hạnh phúc khi thấy con mình lớn lên"
    },
    {
        "id": "vocab_19",
        "kanji": "成人",
        "furigana": "せいじん",
        "meaning": "người lớn",
        "example": "日本では二十歳以上の人を成人という",
        "unit": "Unit 1",
        "example_vi": "Ở Nhật, người trên 20 tuổi được coi là người lớn"
    },
    {
        "id": "vocab_20",
        "kanji": "合格",
        "furigana": "ごうかく",
        "meaning": "đáp ứng các yêu cầu",
        "example": "大学に合格する",
        "unit": "Unit 1",
        "example_vi": "Được nhận vào đại học"
    },
    {
        "id": "vocab_21",
        "kanji": "進学",
        "furigana": "しんがく",
        "meaning": "nhập học vào một cơ sở giáo dục đại học",
        "example": "子供の進学について考える",
        "unit": "Unit 1",
        "example_vi": "Nghĩ về việc học cao hơn của con tôi"
    },
    {
        "id": "vocab_22",
        "kanji": "退学",
        "furigana": "たいがく",
        "meaning": "ra khỏi cơ sở giáo dục",
        "example": "退学の理由を説明する",
        "unit": "Unit 1",
        "example_vi": "Giải thích lý do bỏ học"
    },
    {
        "id": "vocab_23",
        "kanji": "就職",
        "furigana": "しゅうしょく",
        "meaning": "nhận được một công việc; tìm kiếm việc làm",
        "example": "旅行会社に就職する",
        "unit": "Unit 1",
        "example_vi": "Việc làm tại một công ty du lịch"
    },
    {
        "id": "vocab_24",
        "kanji": "退職",
        "furigana": "たいしょく",
        "meaning": "nghỉ hưu",
        "example": "母の介護のため、退職を決めた",
        "unit": "Unit 1",
        "example_vi": "Quyết nghỉ việc để chăm sóc mẹ"
    },
    {
        "id": "vocab_25",
        "kanji": "失業",
        "furigana": "しつぎょう",
        "meaning": "thất nghiệp",
        "example": "会社が倒産して失業した",
        "unit": "Unit 1",
        "example_vi": "Tôi bị mất việc vì công ty phá sản"
    },
    {
        "id": "vocab_26",
        "kanji": "残業",
        "furigana": "ざんぎょう",
        "meaning": "làm thêm giờ, làm thêm giờ",
        "example": "残業が多くて疲れた",
        "unit": "Unit 1",
        "example_vi": "Tôi mệt mỏi vì phải làm thêm giờ"
    },
    {
        "id": "vocab_27",
        "kanji": "生活",
        "furigana": "せいかつ",
        "meaning": "lối sống",
        "example": "健康的な生活を送る",
        "unit": "Unit 1",
        "example_vi": "Tôi sống một cuộc sống lành mạnh"
    },
    {
        "id": "vocab_28",
        "kanji": "通勤",
        "furigana": "つうきん",
        "meaning": "đi lại",
        "example": "私は毎日一時間かけて通勤している",
        "unit": "Unit 1",
        "example_vi": "Tôi đi làm một giờ mỗi ngày"
    },
    {
        "id": "vocab_29",
        "kanji": "学歴",
        "furigana": "がくれき",
        "meaning": "lịch sử giáo dục, giáo dục tiếp nhận",
        "example": "学歴が高くても、実力があるかどうかは分からない",
        "unit": "Unit 1",
        "example_vi": "Dù có học vấn cao nhưng không biết mình có đủ năng lực không"
    },
    {
        "id": "vocab_30",
        "kanji": "給料",
        "furigana": "きゅうりょう",
        "meaning": "lương",
        "example": "会社から給料を貰う",
        "unit": "Unit 1",
        "example_vi": "Tôi nhận lương từ công ty"
    },
    {
        "id": "vocab_31",
        "kanji": "面接",
        "furigana": "めんせつ",
        "meaning": "phỏng vấn",
        "example": "今日会社の人との面接がある",
        "unit": "Unit 1",
        "example_vi": "Hôm nay tôi có cuộc phỏng vấn với một người ở công ty"
    },
    {
        "id": "vocab_32",
        "kanji": "休憩",
        "furigana": "きゅうけい",
        "meaning": "nghỉ ngơi, thay đổi, nghỉ ngơi",
        "example": "ではここで、十分間の休憩です",
        "unit": "Unit 1",
        "example_vi": "Tôi sẽ nghỉ giải lao 10 phút ở đây"
    },
    {
        "id": "vocab_33",
        "kanji": "観光",
        "furigana": "かんこう",
        "meaning": "du lịch",
        "example": "来日の目的は観光です",
        "unit": "Unit 1",
        "example_vi": "Mục đích đến Nhật Bản là tham quan"
    },
    {
        "id": "vocab_34",
        "kanji": "帰国",
        "furigana": "きこく",
        "meaning": "về quê hương",
        "example": "今度の正月には帰国するつもりだ",
        "unit": "Unit 1",
        "example_vi": "Tôi dự định sẽ trở lại Nhật Bản vào dịp Tết tới"
    },
    {
        "id": "vocab_35",
        "kanji": "帰省",
        "furigana": "きせい",
        "meaning": "về thăm quê hương, về thăm quê hương",
        "example": "お盆には故郷に帰省する日本人が多い",
        "unit": "Unit 1",
        "example_vi": "Nhiều người Nhật trở về quê hương trong dịp lễ Obon"
    },
    {
        "id": "vocab_36",
        "kanji": "帰宅",
        "furigana": "きたく",
        "meaning": "trở về nhà (đi làm, v.v.)",
        "example": "毎日忙しくて帰宅が遅い",
        "unit": "Unit 1",
        "example_vi": "Họ bận rộn mỗi ngày và về nhà muộn"
    },
    {
        "id": "vocab_37",
        "kanji": "参加",
        "furigana": "さんか",
        "meaning": "tham gia, tham gia",
        "example": "ボランティア活動に参加する",
        "unit": "Unit 1",
        "example_vi": "Tham gia hoạt động tình nguyện"
    },
    {
        "id": "vocab_38",
        "kanji": "出席",
        "furigana": "しゅっせき",
        "meaning": "tham dự",
        "example": "ミーティングに出席する",
        "unit": "Unit 1",
        "example_vi": "Tham dự các cuộc họp"
    },
    {
        "id": "vocab_39",
        "kanji": "欠席",
        "furigana": "けっせき",
        "meaning": "vắng mặt",
        "example": "授業を欠席する",
        "unit": "Unit 1",
        "example_vi": "Bỏ lỡ lớp học"
    },
    {
        "id": "vocab_40",
        "kanji": "遅刻",
        "furigana": "ちこく",
        "meaning": "muộn",
        "example": "寝坊して授業に遅刻する",
        "unit": "Unit 1",
        "example_vi": "Ngủ quên và đến lớp muộn"
    },
    {
        "id": "vocab_41",
        "kanji": "化粧",
        "furigana": "けしょう",
        "meaning": "mỹ phẩm",
        "example": "あなたは毎日、お化粧に何分ぐらいかけていますか",
        "unit": "Unit 1",
        "example_vi": "Bạn dành bao nhiêu phút để trang điểm mỗi ngày? Tôi không giỏi tính toán"
    },
    {
        "id": "vocab_42",
        "kanji": "計算",
        "furigana": "けいさん",
        "meaning": "tính toán",
        "example": "私は計算が苦手だ",
        "unit": "Unit 1",
        "example_vi": "Lập kế hoạch cho năm tới"
    },
    {
        "id": "vocab_43",
        "kanji": "計画",
        "furigana": "けいかく",
        "meaning": "kế hoạch",
        "example": "来年の計画を立てる",
        "unit": "Unit 1",
        "example_vi": "Thử nghiệm thành công"
    },
    {
        "id": "vocab_44",
        "kanji": "成功",
        "furigana": "せいこう",
        "meaning": "thành công",
        "example": "実験に成功する",
        "unit": "Unit 1",
        "example_vi": "Kế hoạch bị hủy do thí nghiệm thất bại"
    },
    {
        "id": "vocab_45",
        "kanji": "失敗",
        "furigana": "しっぱい",
        "meaning": "thất bại, lỗi",
        "example": "実験の失敗で、計画は中止になった",
        "unit": "Unit 1",
        "example_vi": "Công tác chuẩn bị di chuyển đã hoàn tất"
    },
    {
        "id": "vocab_46",
        "kanji": "準備",
        "furigana": "じゅんび",
        "meaning": "chuẩn bị",
        "example": "引っ越しの準備が終わった",
        "unit": "Unit 1",
        "example_vi": "Tổ chức tài liệu"
    },
    {
        "id": "vocab_47",
        "kanji": "整理",
        "furigana": "せいり",
        "meaning": "tổ chức, dọn dẹp",
        "example": "資料の整理",
        "unit": "Unit 1",
        "example_vi": "Đơn hàng đến"
    },
    {
        "id": "vocab_48",
        "kanji": "注文",
        "furigana": "ちゅうもん",
        "meaning": "đặt hàng",
        "example": "注文の品が届く",
        "unit": "Unit 1",
        "example_vi": "Tiết kiệm tăng"
    },
    {
        "id": "vocab_49",
        "kanji": "貯金",
        "furigana": "ちょきん",
        "meaning": "tiền gửi ngân hàng",
        "example": "貯金が増える",
        "unit": "Unit 1",
        "example_vi": "Thức suốt đêm"
    },
    {
        "id": "vocab_50",
        "kanji": "徹夜",
        "furigana": "てつや",
        "meaning": "đêm mất ngủ",
        "example": "徹夜が続く",
        "unit": "Unit 1",
        "example_vi": "Giúp di chuyển"
    },
    {
        "id": "vocab_51",
        "kanji": "引っ越し",
        "furigana": "ひっこし",
        "meaning": "di chuyển",
        "example": "引っ越しを手伝う",
        "unit": "Unit 1",
        "example_vi": "Đo chiều cao"
    },
    {
        "id": "vocab_52",
        "kanji": "身長",
        "furigana": "しんちょう",
        "meaning": "chiều cao của con người",
        "example": "身長を測る",
        "unit": "Unit 1",
        "example_vi": "Đo trọng lượng"
    },
    {
        "id": "vocab_53",
        "kanji": "体重",
        "furigana": "たいじゅう",
        "meaning": "cân nặng",
        "example": "体重を測る",
        "unit": "Unit 1",
        "example_vi": "Chấn thương nhỏ"
    },
    {
        "id": "vocab_54",
        "kanji": "けが",
        "furigana": "けが",
        "meaning": "vết thương",
        "example": "小さな怪我",
        "unit": "Unit 1",
        "example_vi": "Tổ chức tiệc cuối năm"
    },
    {
        "id": "vocab_55",
        "kanji": "会",
        "furigana": "かい",
        "meaning": "bữa tiệc",
        "example": "忘年会を開く",
        "unit": "Unit 1",
        "example_vi": "Sở thích của tôi là đọc sách"
    },
    {
        "id": "vocab_56",
        "kanji": "趣味",
        "furigana": "しゅみ",
        "meaning": "sở thích",
        "example": "趣味は読書です",
        "unit": "Unit 1",
        "example_vi": "Tôi quan tâm đến lịch sử"
    },
    {
        "id": "vocab_57",
        "kanji": "興味",
        "furigana": "きょうみ",
        "meaning": "quan tâm đến điều gì đó",
        "example": "私は歴史に興味がある",
        "unit": "Unit 1",
        "example_vi": "Ký ức tuổi thơ"
    },
    {
        "id": "vocab_58",
        "kanji": "思い出",
        "furigana": "おもいで",
        "meaning": "kỷ niệm",
        "example": "子供の頃の思い出",
        "unit": "Unit 1",
        "example_vi": "Khi tôi kể chuyện cười, mọi người đều coi trọng"
    },
    {
        "id": "vocab_59",
        "kanji": "冗談",
        "furigana": "じょうだん",
        "meaning": "đùa",
        "example": "冗談を言ったら皆が本気にした",
        "unit": "Unit 1",
        "example_vi": "Mục đích đến Nhật Bản là để vào đại học"
    },
    {
        "id": "vocab_60",
        "kanji": "目的",
        "furigana": "もくてき",
        "meaning": "mục tiêu, nhiệm vụ",
        "example": "日本に来た目的は大学への入学だ",
        "unit": "Unit 1",
        "example_vi": ""
    },
    {
        "id": "vocab_61",
        "kanji": "約束",
        "furigana": "やくそく",
        "meaning": "hứa",
        "example": "彼と結婚の約束をした",
        "unit": "Unit 1",
        "example_vi": "Tôi đã hứa cưới anh"
    },
    {
        "id": "vocab_62",
        "kanji": "おしゃべり",
        "furigana": "おしゃべり",
        "meaning": "cuộc trò chuyện, tán gẫu",
        "example": "授業中に隣の人とお喋りしていて、先生に怒られた",
        "unit": "Unit 1",
        "example_vi": "Trong giờ học đang nói chuyện với bạn bên cạnh thì bị giáo viên mắng"
    },
    {
        "id": "vocab_63",
        "kanji": "遠慮",
        "furigana": "えんりょ",
        "meaning": "xấu hổ, xấu hổ",
        "example": "遠慮しないで、食べてください",
        "unit": "Unit 1",
        "example_vi": "Đừng ngại ăn"
    },
    {
        "id": "vocab_64",
        "kanji": "我慢",
        "furigana": "がまん",
        "meaning": "kiên nhẫn",
        "example": "痛くても我慢する",
        "unit": "Unit 1",
        "example_vi": "Hãy kiên nhẫn dù đau đớn"
    },
    {
        "id": "vocab_65",
        "kanji": "迷惑",
        "furigana": "めいわく",
        "meaning": "lo lắng, bối rối, gánh nặng",
        "example": "人に迷惑をかけてはいけない",
        "unit": "Unit 1",
        "example_vi": "Đừng gây rắc rối cho người khác"
    },
    {
        "id": "vocab_66",
        "kanji": "希望",
        "furigana": "きぼう",
        "meaning": "hy vọng, mong muốn",
        "example": "最後まで希望を捨ててはいけない",
        "unit": "Unit 1",
        "example_vi": "Đừng từ bỏ hy vọng đến cùng"
    },
    {
        "id": "vocab_67",
        "kanji": "夢",
        "furigana": "ゆめ",
        "meaning": "mơ, mơ",
        "example": "昨日怖い夢を見た",
        "unit": "Unit 1",
        "example_vi": "Hôm qua tôi có một giấc mơ đáng sợ"
    },
    {
        "id": "vocab_68",
        "kanji": "賛成",
        "furigana": "さんせい",
        "meaning": "\"đồng ý!\"",
        "example": "賛成の人は手を挙げてください",
        "unit": "Unit 1",
        "example_vi": "Hãy giơ tay nếu bạn đồng ý"
    },
    {
        "id": "vocab_69",
        "kanji": "反対",
        "furigana": "はんたい",
        "meaning": "chống lại",
        "example": "プラスの反対はマイナスだ",
        "unit": "Unit 1",
        "example_vi": "Ngược lại với tích cực là tiêu cực"
    },
    {
        "id": "vocab_70",
        "kanji": "想像",
        "furigana": "そうぞう",
        "meaning": "trí tưởng tượng",
        "example": "想像と現実は違う",
        "unit": "Unit 1",
        "example_vi": "Tưởng tượng và thực tế là khác nhau"
    },
    {
        "id": "vocab_71",
        "kanji": "努力",
        "furigana": "どりょく",
        "meaning": "nỗ lực, nỗ lực",
        "example": "一生懸命努力をする",
        "unit": "Unit 1",
        "example_vi": "Hãy cố gắng"
    },
    {
        "id": "vocab_72",
        "kanji": "太陽",
        "furigana": "たいよう",
        "meaning": "mặt trời",
        "example": "太陽が昇って、暖かくなった",
        "unit": "Unit 1",
        "example_vi": "Mặt trời đã mọc và ấm áp"
    },
    {
        "id": "vocab_73",
        "kanji": "地球",
        "furigana": "ちきゅう",
        "meaning": "trái đất",
        "example": "地球の環境が悪化している",
        "unit": "Unit 1",
        "example_vi": "Môi trường Trái đất đang xấu đi"
    },
    {
        "id": "vocab_74",
        "kanji": "温度",
        "furigana": "おんど",
        "meaning": "nhiệt độ không khí",
        "example": "温度を測る",
        "unit": "Unit 1",
        "example_vi": "Đo nhiệt độ"
    },
    {
        "id": "vocab_75",
        "kanji": "湿度",
        "furigana": "しつど",
        "meaning": "độ ẩm, độ ẩm",
        "example": "今年の夏は特に湿度が高い",
        "unit": "Unit 2",
        "example_vi": "Mùa hè năm nay đặc biệt ẩm ướt"
    },
    {
        "id": "vocab_76",
        "kanji": "湿気",
        "furigana": "しっけ",
        "meaning": "độ ẩm, độ ẩm",
        "example": "日本の夏は湿気が多い",
        "unit": "Unit 2",
        "example_vi": "Mùa hè ở Nhật ẩm ướt"
    },
    {
        "id": "vocab_77",
        "kanji": "梅雨",
        "furigana": "つゆ",
        "meaning": "mùa mưa",
        "example": "六月から七月は梅雨の時期だ",
        "unit": "Unit 2",
        "example_vi": "Tháng 6 đến tháng 7 là mùa mưa"
    },
    {
        "id": "vocab_78",
        "kanji": "かび",
        "furigana": "かび",
        "meaning": "khuôn",
        "example": "梅雨の時期はかびが生えやすい",
        "unit": "Unit 2",
        "example_vi": "Nấm mốc dễ phát triển trong mùa mưa"
    },
    {
        "id": "vocab_79",
        "kanji": "暖房",
        "furigana": "だんぼう",
        "meaning": "sưởi ấm",
        "example": "寒いので暖房をつける",
        "unit": "Unit 2",
        "example_vi": "Bật máy sưởi vì trời lạnh"
    },
    {
        "id": "vocab_80",
        "kanji": "皮",
        "furigana": "かわ",
        "meaning": "bóc",
        "example": "果物の皮",
        "unit": "Unit 2",
        "example_vi": "Vỏ trái cây"
    },
    {
        "id": "vocab_81",
        "kanji": "缶",
        "furigana": "かん",
        "meaning": "lọ, thiếc",
        "example": "お菓子をカンに入れて保存する",
        "unit": "Unit 2",
        "example_vi": "お菓子をカンに入れて保存する"
    },
    {
        "id": "vocab_82",
        "kanji": "画面",
        "furigana": "がめん",
        "meaning": "màn hình",
        "example": "パソコンの画面をずっと見ていると、目が疲れる",
        "unit": "Unit 2",
        "example_vi": "パソコンの画面をずっと見ていると、目が疲れる"
    },
    {
        "id": "vocab_83",
        "kanji": "番組",
        "furigana": "ばんぐみ",
        "meaning": "chuyển nhượng",
        "example": "テレビの番組を見る",
        "unit": "Unit 2",
        "example_vi": "テレビの番組を見る"
    },
    {
        "id": "vocab_84",
        "kanji": "記事",
        "furigana": "きじ",
        "meaning": "lưu ý",
        "example": "この記事によると、日本に住む外国人が増えているそうだ",
        "unit": "Unit 2",
        "example_vi": "この記事によると、日本に住む外国人が増えているそうだ"
    },
    {
        "id": "vocab_85",
        "kanji": "近所",
        "furigana": "きんじょ",
        "meaning": "nơi lân cận, nơi lân cận",
        "example": "近所の人とは仲良くしたほうがいい",
        "unit": "Unit 2",
        "example_vi": "近所の人とは仲良くしたほうがいい"
    },
    {
        "id": "vocab_86",
        "kanji": "警察",
        "furigana": "けいさつ",
        "meaning": "cảnh sát",
        "example": "自転車を盗まれたので、警察に届けた",
        "unit": "Unit 2",
        "example_vi": "自転車を盗まれたので、警察に届けた"
    },
    {
        "id": "vocab_87",
        "kanji": "犯人",
        "furigana": "はんにん",
        "meaning": "tội phạm",
        "example": "事件の犯人",
        "unit": "Unit 2",
        "example_vi": "事件の犯人"
    },
    {
        "id": "vocab_88",
        "kanji": "小銭",
        "furigana": "こぜに",
        "meaning": "tiền nhỏ",
        "example": "バスに乗ってから、小銭がないことに気が付き、とても困った",
        "unit": "Unit 2",
        "example_vi": "バスに乗ってから、小銭がないことに気が付き、とても困った"
    },
    {
        "id": "vocab_89",
        "kanji": "ごちそう",
        "furigana": "ごちそう",
        "meaning": "xử lý",
        "example": "家族皆でご馳走を食べて、祖父の誕生日を祝った",
        "unit": "Unit 2",
        "example_vi": "家族皆でご馳走を食べて、祖父の誕生日を祝った"
    },
    {
        "id": "vocab_90",
        "kanji": "作者",
        "furigana": "さくしゃ",
        "meaning": "nhà văn, tác giả",
        "example": "小説の作者",
        "unit": "Unit 2",
        "example_vi": "小説の作者"
    },
    {
        "id": "vocab_91",
        "kanji": "作品",
        "furigana": "さくひん",
        "meaning": "tác phẩm, tác phẩm của tác giả",
        "example": "学生の作品をロビーに展示する",
        "unit": "Unit 2",
        "example_vi": "学生の作品をロビーに展示する"
    },
    {
        "id": "vocab_92",
        "kanji": "制服",
        "furigana": "せいふく",
        "meaning": "đồng phục học sinh",
        "example": "日本の中学校には制服のある学校が多い",
        "unit": "Unit 2",
        "example_vi": "日本の中学校には制服のある学校が多い"
    },
    {
        "id": "vocab_93",
        "kanji": "洗剤",
        "furigana": "せんざい",
        "meaning": "chất tẩy rửa",
        "example": "洗剤で食器を洗う",
        "unit": "Unit 2",
        "example_vi": "洗剤で食器を洗う"
    },
    {
        "id": "vocab_94",
        "kanji": "底",
        "furigana": "そこ",
        "meaning": "dưới cùng",
        "example": "靴の底に穴が空く",
        "unit": "Unit 2",
        "example_vi": "靴の底に穴が空く"
    },
    {
        "id": "vocab_95",
        "kanji": "地下",
        "furigana": "ちか",
        "meaning": "tầng hầm",
        "example": "大都市は地下の開発が進んでいる",
        "unit": "Unit 2",
        "example_vi": "大都市は地下の開発が進んでいる"
    },
    {
        "id": "vocab_96",
        "kanji": "寺",
        "furigana": "てら",
        "meaning": "ngôi đền",
        "example": "寺に参る",
        "unit": "Unit 2",
        "example_vi": "寺に参る"
    },
    {
        "id": "vocab_97",
        "kanji": "道路",
        "furigana": "どうろ",
        "meaning": "đường",
        "example": "道路が込む",
        "unit": "Unit 2",
        "example_vi": "道路が込む"
    },
    {
        "id": "vocab_98",
        "kanji": "坂",
        "furigana": "さか",
        "meaning": "độ dốc",
        "example": "坂を上る",
        "unit": "Unit 2",
        "example_vi": "坂を上る"
    },
    {
        "id": "vocab_99",
        "kanji": "煙",
        "furigana": "けむり",
        "meaning": "khói",
        "example": "火事のときは煙に注意して逃げてください",
        "unit": "Unit 2",
        "example_vi": "火事のときは煙に注意して逃げてください"
    },
    {
        "id": "vocab_100",
        "kanji": "灰",
        "furigana": "はい",
        "meaning": "tro",
        "example": "煙草の灰",
        "unit": "Unit 2",
        "example_vi": "煙草の灰"
    },
    {
        "id": "vocab_101",
        "kanji": "判",
        "furigana": "はん",
        "meaning": "tem cá nhân",
        "example": "書類に判を押す",
        "unit": "Unit 2",
        "example_vi": "Dập tài liệu"
    },
    {
        "id": "vocab_102",
        "kanji": "名刺",
        "furigana": "めいし",
        "meaning": "danh thiếp",
        "example": "名刺を交換する",
        "unit": "Unit 2",
        "example_vi": "Trao đổi danh thiếp"
    },
    {
        "id": "vocab_103",
        "kanji": "免許",
        "furigana": "めんきょ",
        "meaning": "giấy phép",
        "example": "レストランを開くには調理師の免許が必要だ",
        "unit": "Unit 2",
        "example_vi": "Bạn cần có bằng đầu bếp để mở nhà hàng"
    },
    {
        "id": "vocab_104",
        "kanji": "多く",
        "furigana": "おおく",
        "meaning": "rất nhiều",
        "example": "オリンピックには多くの国が参加した",
        "unit": "Unit 2",
        "example_vi": "Nhiều quốc gia tham gia Thế vận hội"
    },
    {
        "id": "vocab_105",
        "kanji": "前半",
        "furigana": "ぜんはん",
        "meaning": "nửa đầu",
        "example": "映画の前半は退屈だったが、後半は面白かった",
        "unit": "Unit 2",
        "example_vi": "Nửa đầu phim chán nhưng nửa sau lại thú vị"
    },
    {
        "id": "vocab_106",
        "kanji": "後半",
        "furigana": "こうはん",
        "meaning": "nửa sau",
        "example": "映画の前半は退屈だったが、後半は面白かった",
        "unit": "Unit 2",
        "example_vi": "Nửa đầu phim chán nhưng nửa sau lại thú vị"
    },
    {
        "id": "vocab_107",
        "kanji": "最高",
        "furigana": "さいこう",
        "meaning": "tốt nhất, cao nhất",
        "example": "最高気温",
        "unit": "Unit 2",
        "example_vi": "Nhiệt độ tối đa"
    },
    {
        "id": "vocab_108",
        "kanji": "最低",
        "furigana": "さいてい",
        "meaning": "thấp nhất",
        "example": "最低気温",
        "unit": "Unit 2",
        "example_vi": "Có rất nhiều loại hoa trong công viên"
    },
    {
        "id": "vocab_109",
        "kanji": "最初",
        "furigana": "さいしょ",
        "meaning": "lúc đầu",
        "example": "最初にひらがなを、次にカタカナを勉強した",
        "unit": "Unit 2",
        "example_vi": "Người đó được mọi người quý mến vì có nhân cách tốt"
    },
    {
        "id": "vocab_110",
        "kanji": "最後",
        "furigana": "さいご",
        "meaning": "gần đây nhất",
        "example": "あとから来た人は列の最後に並んでください",
        "unit": "Unit 2",
        "example_vi": "Loại vải này có đặc tính không bắt lửa"
    },
    {
        "id": "vocab_111",
        "kanji": "自動",
        "furigana": "じどう",
        "meaning": "tự hành",
        "example": "このドアは自動だから、手で開けなくてもいい",
        "unit": "Unit 2",
        "example_vi": "Quyết định thứ tự trình bày"
    },
    {
        "id": "vocab_112",
        "kanji": "種類",
        "furigana": "しゅるい",
        "meaning": "loại, cấp",
        "example": "公園には色々な種類の花がある",
        "unit": "Unit 2",
        "example_vi": "Đến lượt tôi tiếp theo"
    },
    {
        "id": "vocab_113",
        "kanji": "性格",
        "furigana": "せいかく",
        "meaning": "nhân vật",
        "example": "あの人は性格がいいので、みんなに好かれている",
        "unit": "Unit 2",
        "example_vi": "Tìm một phương pháp tốt"
    },
    {
        "id": "vocab_114",
        "kanji": "性質",
        "furigana": "せいしつ",
        "meaning": "đặc điểm, tính cách, tính chất",
        "example": "この布は燃えにくい性質を持っている",
        "unit": "Unit 2",
        "example_vi": "Kiểm tra thành phẩm"
    },
    {
        "id": "vocab_115",
        "kanji": "順番",
        "furigana": "じゅんばん",
        "meaning": "xếp hàng, xếp hàng",
        "example": "発表の順番を決める",
        "unit": "Unit 2",
        "example_vi": "Tăng giá thực phẩm"
    },
    {
        "id": "vocab_116",
        "kanji": "番",
        "furigana": "ばん",
        "meaning": "thứ tự, số lượng, xếp hàng",
        "example": "次は私の番だ",
        "unit": "Unit 2",
        "example_vi": "Cá sống"
    },
    {
        "id": "vocab_117",
        "kanji": "方法",
        "furigana": "ほうほう",
        "meaning": "cách",
        "example": "いい方法を探す",
        "unit": "Unit 2",
        "example_vi": ""
    },
    {
        "id": "vocab_118",
        "kanji": "製品",
        "furigana": "せいひん",
        "meaning": "thành phẩm, hàng hóa",
        "example": "完成した製品を検査する",
        "unit": "Unit 2",
        "example_vi": ""
    },
    {
        "id": "vocab_119",
        "kanji": "値上がり",
        "furigana": "ねあがり",
        "meaning": "tăng giá",
        "example": "食品の値上がり",
        "unit": "Unit 2",
        "example_vi": ""
    },
    {
        "id": "vocab_120",
        "kanji": "生",
        "furigana": "なま",
        "meaning": "tươi, thô",
        "example": "生の魚",
        "unit": "Unit 2",
        "example_vi": ""
    },
    {
        "id": "vocab_121",
        "kanji": "渇く",
        "furigana": "かわく",
        "meaning": "muốn uống (một động từ)",
        "example": "喉が渇いた",
        "unit": "Unit 2",
        "example_vi": "喉が渇いた"
    },
    {
        "id": "vocab_122",
        "kanji": "嗅ぐ",
        "furigana": "かぐ",
        "meaning": "ngửi, ngửi, ngửi",
        "example": "匂いを嗅ぐ",
        "unit": "Unit 2",
        "example_vi": "匂いを嗅ぐ"
    },
    {
        "id": "vocab_123",
        "kanji": "叩く",
        "furigana": "たたく",
        "meaning": "đánh, đánh; chỉ trích",
        "example": "子供のお尻を叩く",
        "unit": "Unit 2",
        "example_vi": "子供のお尻を叩く"
    },
    {
        "id": "vocab_124",
        "kanji": "殴る",
        "furigana": "なぐる",
        "meaning": "đánh, đánh, đập",
        "example": "教師が生徒を殴って、問題になっている",
        "unit": "Unit 2",
        "example_vi": "教師が生徒を殴って、問題になっている"
    },
    {
        "id": "vocab_125",
        "kanji": "ける",
        "furigana": "ける",
        "meaning": "đá, đá",
        "example": "ボールを蹴る",
        "unit": "Unit 2",
        "example_vi": "ボールを蹴る"
    },
    {
        "id": "vocab_126",
        "kanji": "抱く",
        "furigana": "だく",
        "meaning": "ôm, ôm",
        "example": "子供を両手でしっかりと抱く",
        "unit": "Unit 2",
        "example_vi": "子供を両手でしっかりと抱く"
    },
    {
        "id": "vocab_127",
        "kanji": "倒れる",
        "furigana": "たおれる",
        "meaning": "ngã, sụp đổ, sụp đổ, diệt vong",
        "example": "台風で木が倒れた",
        "unit": "Unit 2",
        "example_vi": "台風で木が倒れた"
    },
    {
        "id": "vocab_128",
        "kanji": "倒す",
        "furigana": "たおす",
        "meaning": "hạ bệ, lật đổ, lật đổ, giết",
        "example": "花瓶を倒して割ってしまった",
        "unit": "Unit 2",
        "example_vi": "花瓶を倒して割ってしまった"
    },
    {
        "id": "vocab_129",
        "kanji": "起きる／起こる",
        "furigana": "おきる／おこる",
        "meaning": "thức dậy, thức dậy; xảy ra, xảy ra",
        "example": "今日は八時に起きた<br>昨日教室でちょっとした事件が起こった",
        "unit": "Unit 2",
        "example_vi": "今日は八時に起きた<br>昨日教室でちょっとした事件が起こった"
    },
    {
        "id": "vocab_130",
        "kanji": "起こす",
        "furigana": "おこす",
        "meaning": "đứng dậy, thức tỉnh, tìm thấy",
        "example": "うちの子は朝起こしても、中々起きない",
        "unit": "Unit 2",
        "example_vi": "うちの子は朝起こしても、中々起きない"
    },
    {
        "id": "vocab_131",
        "kanji": "尋ねる",
        "furigana": "たずねる",
        "meaning": "hỏi, tìm kiếm",
        "example": "交番で景観に市役所までの道を尋ねた",
        "unit": "Unit 2",
        "example_vi": "交番で景観に市役所までの道を尋ねた"
    },
    {
        "id": "vocab_132",
        "kanji": "呼ぶ",
        "furigana": "よぶ",
        "meaning": "gọi, gọi, gọi",
        "example": "名前を呼ばれたら、返事をしてください",
        "unit": "Unit 2",
        "example_vi": "名前を呼ばれたら、返事をしてください"
    },
    {
        "id": "vocab_133",
        "kanji": "叫ぶ",
        "furigana": "さけぶ",
        "meaning": "hét lên",
        "example": "大声で叫んだが、相手は気づかずに行ってしまった",
        "unit": "Unit 2",
        "example_vi": "大声で叫んだが、相手は気づかずに行ってしまった"
    },
    {
        "id": "vocab_134",
        "kanji": "黙る",
        "furigana": "だまる",
        "meaning": "giữ im lặng, giữ im lặng",
        "example": "先生が質問したが、誰も答えないで黙っている",
        "unit": "Unit 2",
        "example_vi": "先生が質問したが、誰も答えないで黙っている"
    },
    {
        "id": "vocab_135",
        "kanji": "飼う",
        "furigana": "かう",
        "meaning": "cho ăn, nuôi, chứa (động vật)",
        "example": "何かペットを飼いたいと思っている",
        "unit": "Unit 2",
        "example_vi": "何かペットを飼いたいと思っている"
    },
    {
        "id": "vocab_136",
        "kanji": "数える",
        "furigana": "かぞえる",
        "meaning": "đếm, đếm",
        "example": "数を数える",
        "unit": "Unit 2",
        "example_vi": "数を数える"
    },
    {
        "id": "vocab_137",
        "kanji": "乾く",
        "furigana": "かわく",
        "meaning": "khô đi, khô đi",
        "example": "風が強かったので、外に干した洗濯物はすぐに乾いた",
        "unit": "Unit 2",
        "example_vi": "風が強かったので、外に干した洗濯物はすぐに乾いた"
    },
    {
        "id": "vocab_138",
        "kanji": "乾かす",
        "furigana": "かわかす",
        "meaning": "khô, khô",
        "example": "ドライヤーで濡れた髪を乾かした",
        "unit": "Unit 2",
        "example_vi": "ドライヤーで濡れた髪を乾かした"
    },
    {
        "id": "vocab_139",
        "kanji": "畳む",
        "furigana": "たたむ",
        "meaning": "gấp (chăn), đóng, khóa",
        "example": "洗濯物を畳む",
        "unit": "Unit 2",
        "example_vi": "洗濯物を畳む"
    },
    {
        "id": "vocab_140",
        "kanji": "誘う",
        "furigana": "さそう",
        "meaning": "mời, gọi",
        "example": "友達を誘って映画を見に行った",
        "unit": "Unit 2",
        "example_vi": "友達を誘って映画を見に行った"
    },
    {
        "id": "vocab_141",
        "kanji": "おごる",
        "furigana": "おごる",
        "meaning": "khoe khoang, trả tiền cho ai, chiêu đãi",
        "example": "昨日は後輩に焼き肉を奢った",
        "unit": "Unit 2",
        "example_vi": "Hôm qua đãi đàn em món thịt nướng"
    },
    {
        "id": "vocab_142",
        "kanji": "預かる",
        "furigana": "あずかる",
        "meaning": "bart một lúc, đem đi cất giữ",
        "example": "旅行に行く友達から犬を預かることになった",
        "unit": "Unit 2",
        "example_vi": "Tôi quyết định nuôi một chú chó từ một người bạn đang đi du lịch"
    },
    {
        "id": "vocab_143",
        "kanji": "預ける",
        "furigana": "あずける",
        "meaning": "cho vay một thời gian, gửi tiền",
        "example": "銀行にお金を預けると、利子がつく",
        "unit": "Unit 2",
        "example_vi": "Khi bạn gửi tiền vào ngân hàng, bạn sẽ được hưởng lãi"
    },
    {
        "id": "vocab_144",
        "kanji": "決まる",
        "furigana": "きまる",
        "meaning": "được quyết định, được quyết định",
        "example": "帰国の日が決まった",
        "unit": "Unit 2",
        "example_vi": "Ngày trở về của bạn đã được quyết định"
    },
    {
        "id": "vocab_145",
        "kanji": "決める",
        "furigana": "きめる",
        "meaning": "quyết định, thiết lập, xác định",
        "example": "進学か就職か、早く決めたほうがいいですよ",
        "unit": "Unit 2",
        "example_vi": "Bạn nên quyết định nhanh chóng xem nên học cao hơn hay đi làm"
    },
    {
        "id": "vocab_146",
        "kanji": "写る",
        "furigana": "うつる",
        "meaning": "đi chơi (về bức tranh)",
        "example": "このカメラは暗い所でも良く写る",
        "unit": "Unit 2",
        "example_vi": "Máy ảnh này chụp ảnh đẹp ngay cả ở những nơi tối"
    },
    {
        "id": "vocab_147",
        "kanji": "写す",
        "furigana": "うつす",
        "meaning": "sao chép, viết lại, chụp ảnh, miêu tả",
        "example": "写真を写す",
        "unit": "Unit 2",
        "example_vi": "Chụp ảnh"
    },
    {
        "id": "vocab_148",
        "kanji": "思い出す",
        "furigana": "おもいだす",
        "meaning": "nhớ",
        "example": "毎年春になると、高校の入学式を思い出します",
        "unit": "Unit 2",
        "example_vi": "Mỗi mùa xuân tôi lại nhớ lễ khai giảng cấp 3"
    },
    {
        "id": "vocab_149",
        "kanji": "教わる",
        "furigana": "おそわる",
        "meaning": "học tập, rèn luyện",
        "example": "この料理の作り方は母から教わりました",
        "unit": "Unit 3",
        "example_vi": "Mẹ dạy tôi làm món này"
    },
    {
        "id": "vocab_150",
        "kanji": "申し込む",
        "furigana": "もうしこむ",
        "meaning": "áp dụng, đề nghị, đặt hàng, dự trữ",
        "example": "パーティーに参加を申し込む",
        "unit": "Unit 3",
        "example_vi": "Tôi đã nộp đơn xin gia nhập đảng"
    },
    {
        "id": "vocab_151",
        "kanji": "断る",
        "furigana": "ことわる",
        "meaning": "từ chối, từ chối, xin lỗi, xin phép",
        "example": "頼まれた仕事を断った",
        "unit": "Unit 3",
        "example_vi": "Tôi từ chối công việc tôi được yêu cầu làm"
    },
    {
        "id": "vocab_152",
        "kanji": "見つかる",
        "furigana": "みつかる",
        "meaning": "được khám phá",
        "example": "無くなったと思っていた指輪がソファーの下で見つかった",
        "unit": "Unit 3",
        "example_vi": "Tôi tìm thấy chiếc nhẫn mà tôi tưởng đã mất dưới ghế sofa"
    },
    {
        "id": "vocab_153",
        "kanji": "見つける",
        "furigana": "みつける",
        "meaning": "tìm, khám phá",
        "example": "無くなったと思っていた指輪をソファーの下で見つけた",
        "unit": "Unit 3",
        "example_vi": "Tôi tìm thấy chiếc nhẫn mà tôi tưởng đã mất dưới ghế sofa"
    },
    {
        "id": "vocab_154",
        "kanji": "捕まる",
        "furigana": "つかまる",
        "meaning": "bị bắt, bị bắt",
        "example": "犯人が警察に捕まった",
        "unit": "Unit 3",
        "example_vi": "Tên trộm bị cảnh sát bắt"
    },
    {
        "id": "vocab_155",
        "kanji": "捕まえる",
        "furigana": "つかまえる",
        "meaning": "thu giữ, bắt giữ",
        "example": "警察が泥棒を捕まえた",
        "unit": "Unit 3",
        "example_vi": "Cảnh sát bắt được tên trộm"
    },
    {
        "id": "vocab_156",
        "kanji": "乗る",
        "furigana": "のる",
        "meaning": "lên xe, đi xe",
        "example": "毎朝電車に乗って、学校に通っている",
        "unit": "Unit 3",
        "example_vi": "Tôi bắt tàu đến trường mỗi sáng"
    },
    {
        "id": "vocab_157",
        "kanji": "乗せる",
        "furigana": "のせる",
        "meaning": "đón khách, đưa đón",
        "example": "子供を車に乗せて、学校まで送って行った",
        "unit": "Unit 3",
        "example_vi": "Tôi đưa con lên xe đưa con đi học"
    },
    {
        "id": "vocab_158",
        "kanji": "降りる／下りる",
        "furigana": "おりる",
        "meaning": "đi xuống, đi xuống (xuống); xuống xe, rơi ra ngoài (về lượng mưa)",
        "example": "電車を降りる",
        "unit": "Unit 3",
        "example_vi": "Tôi xuống tàu"
    },
    {
        "id": "vocab_159",
        "kanji": "降ろす／下ろす",
        "furigana": "おろす",
        "meaning": "hạ xuống, gỡ bỏ, dỡ bỏ; để tôi xuống xe, giúp tôi ra ngoài; thấp hơn, thấp hơn",
        "example": "あの銀行の前で降ろしてください",
        "unit": "Unit 3",
        "example_vi": "Hãy thả tôi xuống trước ngân hàng đó"
    },
    {
        "id": "vocab_160",
        "kanji": "直る",
        "furigana": "なおる",
        "meaning": "được sửa chữa, để phục hồi",
        "example": "壊れたパソコンが直った",
        "unit": "Unit 3",
        "example_vi": "Máy tính của tôi bị hỏng đã được sửa"
    },
    {
        "id": "vocab_161",
        "kanji": "直す",
        "furigana": "なおす",
        "meaning": "sửa chữa, sửa chữa, sắp xếp; chữa bệnh",
        "example": "壊れた時計を直す",
        "unit": "Unit 3",
        "example_vi": "Sửa đồng hồ bị hỏng"
    },
    {
        "id": "vocab_162",
        "kanji": "治る",
        "furigana": "なおる",
        "meaning": "khỏe lại",
        "example": "中々頭痛が治らない",
        "unit": "Unit 3",
        "example_vi": "Cơn đau đầu của tôi sẽ không biến mất"
    },
    {
        "id": "vocab_163",
        "kanji": "治す",
        "furigana": "なおす",
        "meaning": "điều trị, chữa bệnh",
        "example": "良く休んで、早く風邪を治してください",
        "unit": "Unit 3",
        "example_vi": "Hãy nghỉ ngơi thật tốt và nhanh chóng vượt qua cơn cảm lạnh"
    },
    {
        "id": "vocab_164",
        "kanji": "亡くなる",
        "furigana": "なくなる",
        "meaning": "chết, chết",
        "example": "社長が九十歳で亡くなった",
        "unit": "Unit 3",
        "example_vi": "Chủ tịch công ty qua đời ở tuổi 90"
    },
    {
        "id": "vocab_165",
        "kanji": "亡くす",
        "furigana": "なくす",
        "meaning": "thua (người thân)",
        "example": "彼は子供のとき、父親を亡くした",
        "unit": "Unit 3",
        "example_vi": "Anh mất cha khi còn nhỏ"
    },
    {
        "id": "vocab_166",
        "kanji": "生まれる",
        "furigana": "うまれる",
        "meaning": "được sinh ra",
        "example": "先月子供が生まれた",
        "unit": "Unit 3",
        "example_vi": "Một đứa trẻ được sinh ra vào tháng trước"
    },
    {
        "id": "vocab_167",
        "kanji": "産む／生む",
        "furigana": "うむ",
        "meaning": "sinh con, sinh con",
        "example": "妻が先日元気な女の子を産んだ",
        "unit": "Unit 3",
        "example_vi": "Hôm nọ vợ tôi đã sinh ra một bé gái khỏe mạnh"
    },
    {
        "id": "vocab_168",
        "kanji": "出会う",
        "furigana": "であう",
        "meaning": "tình cờ gặp nhau, tình cờ gặp nhau, hẹn hò; hòa hợp",
        "example": "駅で偶然大学時代の友人に出会った",
        "unit": "Unit 3",
        "example_vi": "Tôi tình cờ gặp một người bạn thời đại học ở nhà ga"
    },
    {
        "id": "vocab_169",
        "kanji": "訪ねる",
        "furigana": "たずねる",
        "meaning": "đến, thăm, thăm",
        "example": "友人の家を訪ねた",
        "unit": "Unit 3",
        "example_vi": "Tôi đến thăm nhà bạn tôi"
    },
    {
        "id": "vocab_170",
        "kanji": "付き合う",
        "furigana": "つきあう",
        "meaning": "duy trì sự quen biết",
        "example": "隣の家の人と親しく付き合っている",
        "unit": "Unit 3",
        "example_vi": "Tôi đang có mối quan hệ thân thiết với người bên cạnh"
    },
    {
        "id": "vocab_171",
        "kanji": "効く",
        "furigana": "きく",
        "meaning": "có hiệu quả",
        "example": "この薬は頭痛に良く効く",
        "unit": "Unit 3",
        "example_vi": "Thuốc này có tác dụng chữa đau đầu tốt"
    },
    {
        "id": "vocab_172",
        "kanji": "はやる",
        "furigana": "はやる",
        "meaning": "hợp thời trang; giận dữ (về bệnh tật)",
        "example": "この冬は赤い色が流行っている",
        "unit": "Unit 3",
        "example_vi": "Màu đỏ đang là xu hướng mùa đông năm nay"
    },
    {
        "id": "vocab_173",
        "kanji": "経つ",
        "furigana": "たつ",
        "meaning": "(thời gian) đi",
        "example": "日本へ来てから、十年が経った",
        "unit": "Unit 3",
        "example_vi": "Mười năm đã trôi qua kể từ khi tôi đến Nhật Bản"
    },
    {
        "id": "vocab_174",
        "kanji": "間に合う",
        "furigana": "まにあう",
        "meaning": "đến đúng giờ; vừa vặn, vừa vặn",
        "example": "電車が遅れたが、駅から走って、何とか授業に間に合った",
        "unit": "Unit 3",
        "example_vi": "Chuyến tàu của tôi bị trễ nhưng tôi đã chạy khỏi ga và đến được lớp"
    },
    {
        "id": "vocab_175",
        "kanji": "間に合わせる",
        "furigana": "まにあわせる",
        "meaning": "đương đầu với việc gì đó, đến kịp thời, chuẩn bị cho thời hạn",
        "example": "レポートを、頑張って締め切りに間に合わせた",
        "unit": "Unit 3",
        "example_vi": "Tôi đã cố gắng hết sức để hoàn thành báo cáo đúng hạn"
    },
    {
        "id": "vocab_176",
        "kanji": "通う",
        "furigana": "かよう",
        "meaning": "đi bộ tới lui, đi lại, đi bộ (đến trường, đi làm)",
        "example": "学校に通う",
        "unit": "Unit 3",
        "example_vi": "Tôi đi học"
    },
    {
        "id": "vocab_177",
        "kanji": "込む",
        "furigana": "こむ",
        "meaning": "đông đúc (với mọi người)",
        "example": "電車が込む",
        "unit": "Unit 3",
        "example_vi": "Tàu đang bận"
    },
    {
        "id": "vocab_178",
        "kanji": "すれ違う",
        "furigana": "すれちがう",
        "meaning": "lướt qua nhau, nhớ nhau",
        "example": "この道は狭いので、自動車がすれ違うのは大変だ",
        "unit": "Unit 3",
        "example_vi": "Đường này hẹp nên ô tô khó tránh nhau"
    },
    {
        "id": "vocab_179",
        "kanji": "掛かる",
        "furigana": "かかる",
        "meaning": "treo, nạc, bám, đòi, v.v.",
        "example": "このサラダには何も掛かっていないようだ",
        "unit": "Unit 3",
        "example_vi": "Món salad này dường như không có gì trên đó"
    },
    {
        "id": "vocab_180",
        "kanji": "掛ける",
        "furigana": "かける",
        "meaning": "bám vào cái gì đó, dựa vào, che phủ, v.v.",
        "example": "料理に醤油を掛けて食べる",
        "unit": "Unit 3",
        "example_vi": "Tôi rưới nước tương lên và ăn."
    },
    {
        "id": "vocab_181",
        "kanji": "動く",
        "furigana": "うごく",
        "meaning": "chuyển động, làm việc (về một cơ chế)",
        "example": "写真を撮るから、動かないでください",
        "unit": "Unit 3",
        "example_vi": "Tôi sẽ chụp ảnh nên xin đừng di chuyển"
    },
    {
        "id": "vocab_182",
        "kanji": "動かす",
        "furigana": "うごかす",
        "meaning": "chuyển động, bắt đầu chuyển động",
        "example": "酷い怪我をして、体を動かすこともできない",
        "unit": "Unit 3",
        "example_vi": "Bạn bị thương nặng và không thể cử động"
    },
    {
        "id": "vocab_183",
        "kanji": "離れる",
        "furigana": "はなれる",
        "meaning": "tách ra, khởi hành, rời bỏ, chia tay",
        "example": "危ないから、ストーブから離れて遊びなさい",
        "unit": "Unit 3",
        "example_vi": "Nguy hiểm lắm nên tránh xa bếp ra mà chơi"
    },
    {
        "id": "vocab_184",
        "kanji": "離す",
        "furigana": "はなす",
        "meaning": "chia ly, chia ly, buông bỏ bản thân",
        "example": "テストのときは机を離して並べる",
        "unit": "Unit 3",
        "example_vi": "Khi làm bài kiểm tra, hãy đặt bàn của các bạn cách xa nhau"
    },
    {
        "id": "vocab_185",
        "kanji": "ぶつかる",
        "furigana": "ぶつかる",
        "meaning": "va vào ai đó, va vào",
        "example": "道で自転車にぶつかって、怪我をした",
        "unit": "Unit 3",
        "example_vi": "Tôi tông vào xe đạp trên đường và bị thương"
    },
    {
        "id": "vocab_186",
        "kanji": "ぶつける",
        "furigana": "ぶつける",
        "meaning": "ném cái gì đó vào ai đó, đánh, đánh cái gì đó",
        "example": "運転していて、車を電柱にぶつけてしまった",
        "unit": "Unit 3",
        "example_vi": "Tôi đang lái xe đâm vào cột điện"
    },
    {
        "id": "vocab_187",
        "kanji": "こぼれる",
        "furigana": "こぼれる",
        "meaning": "tràn, tràn, bắn tung tóe",
        "example": "手が震えて、お茶が零れてしまった",
        "unit": "Unit 3",
        "example_vi": "Tay tôi run và trà đổ"
    },
    {
        "id": "vocab_188",
        "kanji": "こぼす",
        "furigana": "こぼす",
        "meaning": "tràn, phân tán, phàn nàn, rên rỉ",
        "example": "コップを倒して、水を零してしまった",
        "unit": "Unit 3",
        "example_vi": "Tôi làm đổ cốc làm đổ nước"
    },
    {
        "id": "vocab_189",
        "kanji": "ふく",
        "furigana": "ふく",
        "meaning": "lau, rửa (bụi, bẩn)",
        "example": "汗を拭く",
        "unit": "Unit 3",
        "example_vi": "Lau mồ hôi cho tôi"
    },
    {
        "id": "vocab_190",
        "kanji": "片付く",
        "furigana": "かたづく",
        "meaning": "ngăn nắp, ngăn nắp, ổn định",
        "example": "大掃除をして、やっと部屋が片付いた",
        "unit": "Unit 3",
        "example_vi": "Tôi đã dọn dẹp rất nhiều và cuối cùng phòng của tôi cũng gọn gàng"
    },
    {
        "id": "vocab_191",
        "kanji": "片付ける",
        "furigana": "かたづける",
        "meaning": "sắp xếp, dọn dẹp",
        "example": "机の上を片付ける",
        "unit": "Unit 3",
        "example_vi": "Dọn dẹp bàn làm việc của tôi"
    },
    {
        "id": "vocab_192",
        "kanji": "包む",
        "furigana": "つつむ",
        "meaning": "bọc, bọc, bao bọc, giấu",
        "example": "プレゼントをきれいな紙で包む",
        "unit": "Unit 3",
        "example_vi": "Gói quà bằng giấy sạch"
    },
    {
        "id": "vocab_193",
        "kanji": "張る",
        "furigana": "はる",
        "meaning": "căng, kéo, che, dán",
        "example": "壁にポスターを張る",
        "unit": "Unit 3",
        "example_vi": "Dán áp phích lên tường"
    },
    {
        "id": "vocab_194",
        "kanji": "無くなる",
        "furigana": "なくなる",
        "meaning": "biến mất, kết thúc, cạn kiệt",
        "example": "部屋の鍵が無くなってしまった",
        "unit": "Unit 3",
        "example_vi": "Tôi bị mất chìa khóa phòng"
    },
    {
        "id": "vocab_195",
        "kanji": "無くす",
        "furigana": "なくす",
        "meaning": "tiêu diệt",
        "example": "パスポートを無くして、困っている",
        "unit": "Unit 3",
        "example_vi": "Tôi bị mất hộ chiếu và đang gặp rắc rối"
    },
    {
        "id": "vocab_196",
        "kanji": "足りる",
        "furigana": "たりる",
        "meaning": "đủ, đủ",
        "example": "この収入では生活するのに全然足りない",
        "unit": "Unit 3",
        "example_vi": "Thu nhập này không đủ sống"
    },
    {
        "id": "vocab_197",
        "kanji": "残る",
        "furigana": "のこる",
        "meaning": "ở lại",
        "example": "料理を作りすぎて、たくさん残ってしまった",
        "unit": "Unit 3",
        "example_vi": "Tôi đã nấu quá nhiều thức ăn và còn thừa rất nhiều"
    },
    {
        "id": "vocab_198",
        "kanji": "残す",
        "furigana": "のこす",
        "meaning": "rời đi",
        "example": "ご飯を残してしまった",
        "unit": "Unit 3",
        "example_vi": ""
    },
    {
        "id": "vocab_199",
        "kanji": "腐る",
        "furigana": "くさる",
        "meaning": "hư hỏng, thối rữa",
        "example": "腐った物を食べて、お腹を壊してしまった",
        "unit": "Unit 3",
        "example_vi": ""
    },
    {
        "id": "vocab_200",
        "kanji": "むける",
        "furigana": "むける",
        "meaning": "bóc ra, bóc ra",
        "example": "海で日焼けをして、背中の皮が剥けた",
        "unit": "Unit 3",
        "example_vi": ""
    },
    {
        "id": "vocab_201",
        "kanji": "むく",
        "furigana": "むく",
        "meaning": "xé, lột, bóc, bóc vỏ",
        "example": "果物の皮を剥く",
        "unit": "Unit 3",
        "example_vi": "Gọt vỏ trái cây"
    },
    {
        "id": "vocab_202",
        "kanji": "滑る",
        "furigana": "すべる",
        "meaning": "trượt, trượt ván (skate), trượt, trơn trượt",
        "example": "新しいスケート場はきれいで、楽しく滑ることができた",
        "unit": "Unit 3",
        "example_vi": "Sân trượt băng mới sạch sẽ và tôi đã trượt băng rất vui"
    },
    {
        "id": "vocab_203",
        "kanji": "積もる",
        "furigana": "つもる",
        "meaning": "chồng chất, tích lũy; gần đúng",
        "example": "昨日降った雪が積もっている",
        "unit": "Unit 3",
        "example_vi": "Tuyết rơi hôm qua chất thành đống"
    },
    {
        "id": "vocab_204",
        "kanji": "積む",
        "furigana": "つむ",
        "meaning": "chất đống, tích lũy, chất lên, tích lũy, tích lũy",
        "example": "机の上に本がたくさん積んである",
        "unit": "Unit 3",
        "example_vi": "Có rất nhiều sách trên bàn"
    },
    {
        "id": "vocab_205",
        "kanji": "空く",
        "furigana": "あく",
        "meaning": "trống rỗng (tự do), có mục đích, kết thúc, đi đến hồi kết",
        "example": "靴下に穴が空いてしまった",
        "unit": "Unit 3",
        "example_vi": "Tôi bị thủng một lỗ trên tất"
    },
    {
        "id": "vocab_206",
        "kanji": "空ける",
        "furigana": "あける",
        "meaning": "trống, phát hành",
        "example": "壁に穴を空ける",
        "unit": "Unit 3",
        "example_vi": "Tạo một lỗ trên tường"
    },
    {
        "id": "vocab_207",
        "kanji": "下がる",
        "furigana": "さがる",
        "meaning": "rũ xuống, rũ xuống, rơi, đi xuống",
        "example": "熱が下る",
        "unit": "Unit 3",
        "example_vi": "Cơn sốt hạ"
    },
    {
        "id": "vocab_208",
        "kanji": "下げる",
        "furigana": "さげる",
        "meaning": "thấp hơn, thấp hơn, thấp hơn; đi chơi",
        "example": "熱を下げる",
        "unit": "Unit 3",
        "example_vi": "Hạ sốt"
    },
    {
        "id": "vocab_209",
        "kanji": "冷える",
        "furigana": "ひえる",
        "meaning": "nguội đi, nguội đi, đóng băng, lạnh đi",
        "example": "寒い所に長くいたので、手足が冷えてしまった",
        "unit": "Unit 3",
        "example_vi": "Tay chân lạnh vì lâu ngày bị lạnh"
    },
    {
        "id": "vocab_210",
        "kanji": "冷やす",
        "furigana": "ひやす",
        "meaning": "mát mẻ, đóng băng",
        "example": "この果物は冷やして、食べたほうが美味しい",
        "unit": "Unit 3",
        "example_vi": "Loại quả này ngon hơn khi ăn lạnh"
    },
    {
        "id": "vocab_211",
        "kanji": "冷める",
        "furigana": "さめる",
        "meaning": "hạ nhiệt, hạ nhiệt",
        "example": "この料理は冷めると、美味しくない",
        "unit": "Unit 3",
        "example_vi": "Món này để nguội ăn không ngon"
    },
    {
        "id": "vocab_212",
        "kanji": "冷ます",
        "furigana": "さます",
        "meaning": "ngầu, ngầu",
        "example": "お風呂のお湯が熱くなりすぎた、少し冷ましてから、入ろう",
        "unit": "Unit 3",
        "example_vi": "Nước tắm quá nóng. Hãy để nó nguội một chút trước khi vào."
    },
    {
        "id": "vocab_213",
        "kanji": "燃える",
        "furigana": "もえる",
        "meaning": "đốt cháy, phát sáng",
        "example": "火が燃える",
        "unit": "Unit 3",
        "example_vi": "Ngọn lửa bùng cháy"
    },
    {
        "id": "vocab_214",
        "kanji": "燃やす",
        "furigana": "もやす",
        "meaning": "đốt cháy, đốt cháy",
        "example": "火を燃やす",
        "unit": "Unit 3",
        "example_vi": "Ngọn lửa bùng cháy"
    },
    {
        "id": "vocab_215",
        "kanji": "沸く",
        "furigana": "わく",
        "meaning": "sôi lên, sôi sục, giận dữ",
        "example": "湯が沸く",
        "unit": "Unit 3",
        "example_vi": "Nước sôi"
    },
    {
        "id": "vocab_216",
        "kanji": "沸かす",
        "furigana": "わかす",
        "meaning": "đun sôi; để kích thích",
        "example": "湯を沸かす",
        "unit": "Unit 3",
        "example_vi": "Nước sôi"
    },
    {
        "id": "vocab_217",
        "kanji": "鳴る",
        "furigana": "なる",
        "meaning": "âm thanh, tiếng vang, tiếng sấm",
        "example": "雷が鳴っている",
        "unit": "Unit 3",
        "example_vi": "Có sấm sét"
    },
    {
        "id": "vocab_218",
        "kanji": "鳴らす",
        "furigana": "ならす",
        "meaning": "gây ra âm thanh bằng một cái gì đó; vòng, lan rộng",
        "example": "ブザーを鳴らす",
        "unit": "Unit 3",
        "example_vi": "Tiếng còi vang lên"
    },
    {
        "id": "vocab_219",
        "kanji": "役立つ／役に立つ",
        "furigana": "やくだつ／やくにたつ",
        "meaning": "trở nên phù hợp, phù hợp",
        "example": "インタネットの情報は勉強や仕事の役に立つ",
        "unit": "Unit 3",
        "example_vi": "Thông tin trên Internet hữu ích cho việc học tập và làm việc"
    },
    {
        "id": "vocab_220",
        "kanji": "役立てる／役に立てる",
        "furigana": "やくだてる／やくにたてる",
        "meaning": "thích nghi, thích nghi, đưa vào hành động",
        "example": "インタネットの情報を勉強や仕事の役に立てる",
        "unit": "Unit 3",
        "example_vi": "Thông tin trên Internet hữu ích cho việc học tập và làm việc"
    },
    {
        "id": "vocab_221",
        "kanji": "飾り",
        "furigana": "かざり",
        "meaning": "trang trí, trang trí, trang trí",
        "example": "",
        "unit": "Unit 3"
    },
    {
        "id": "vocab_222",
        "kanji": "遊び",
        "furigana": "あそび",
        "meaning": "trò chơi, giải trí",
        "example": "",
        "unit": "Unit 3"
    },
    {
        "id": "vocab_223",
        "kanji": "集まり",
        "furigana": "あつまり",
        "meaning": "hội họp, tụ tập; bộ sưu tập",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_224",
        "kanji": "教え",
        "furigana": "おしえ",
        "meaning": "học tập, giảng dạy, giảng dạy, giáo lý",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_225",
        "kanji": "踊り",
        "furigana": "おどり",
        "meaning": "khiêu vũ",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_226",
        "kanji": "思い",
        "furigana": "おもい",
        "meaning": "nghĩ; kỳ vọng; lời chúc",
        "example": "あの人に私の思いが届いた",
        "unit": "Unit 4",
        "example_vi": "Cảm xúc của tôi đã chạm tới người đó"
    },
    {
        "id": "vocab_227",
        "kanji": "考え",
        "furigana": "かんがえ",
        "meaning": "suy nghĩ, ý tưởng, quan điểm, ý định",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_228",
        "kanji": "片づけ",
        "furigana": "かたづけ",
        "meaning": "sắp xếp đồ đạc, dọn dẹp, hoàn thiện việc gì đó",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_229",
        "kanji": "手伝い",
        "furigana": "てつだい",
        "meaning": "giúp đỡ",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_230",
        "kanji": "働き",
        "furigana": "はたらき",
        "meaning": "công việc, lao động, hoạt động, khả năng",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_231",
        "kanji": "決まり",
        "furigana": "きまり",
        "meaning": "\"quyết định rồi!\"",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_232",
        "kanji": "騒ぎ",
        "furigana": "さわぎ",
        "meaning": "ồn ào, cường điệu",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_233",
        "kanji": "知らせ",
        "furigana": "しらせ",
        "meaning": "thông báo, thông báo, báo trước",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_234",
        "kanji": "頼み",
        "furigana": "たのみ",
        "meaning": "yêu cầu, hy vọng, hỗ trợ",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_235",
        "kanji": "疲れ",
        "furigana": "つかれ",
        "meaning": "mệt mỏi, kiệt sức",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_236",
        "kanji": "違い",
        "furigana": "ちがい",
        "meaning": "sự khác biệt, sự khác biệt, sự khác biệt, sai sót",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_237",
        "kanji": "始め",
        "furigana": "はじめ",
        "meaning": "bắt đầu",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_238",
        "kanji": "続き",
        "furigana": "つづき",
        "meaning": "tiếp tục",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_239",
        "kanji": "暮れ",
        "furigana": "くれ",
        "meaning": "cuối ngày, chạng vạng, cuối năm hay mùa",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_240",
        "kanji": "行き",
        "furigana": "いき",
        "meaning": "đi bộ; cưỡi",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_241",
        "kanji": "帰り",
        "furigana": "かえり",
        "meaning": "trở lại",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_242",
        "kanji": "急ぎ",
        "furigana": "いそぎ",
        "meaning": "vội vàng",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_243",
        "kanji": "遅れ",
        "furigana": "おくれ",
        "meaning": "chậm trễ, thất bại, thất bại, rụt rè, không chắc chắn",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_244",
        "kanji": "貸し",
        "furigana": "かし",
        "meaning": "cho thuê, cho thuê, cho vay",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_245",
        "kanji": "借り",
        "furigana": "かり",
        "meaning": "vay, nợ",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_246",
        "kanji": "勝ち",
        "furigana": "かち",
        "meaning": "chiến thắng",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_247",
        "kanji": "負け",
        "furigana": "まけ",
        "meaning": "thất bại, thua",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_248",
        "kanji": "迎え",
        "furigana": "むかえ",
        "meaning": "gặp gỡ, chào hỏi",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_249",
        "kanji": "始まり",
        "furigana": "はじまり",
        "meaning": "bắt đầu",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_250",
        "kanji": "終わり",
        "furigana": "おわり",
        "meaning": "kết thúc",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_251",
        "kanji": "戻り",
        "furigana": "もどり",
        "meaning": "trở lại",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_252",
        "kanji": "別れ",
        "furigana": "わかれ",
        "meaning": "tách, nhánh, nĩa, tách",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_253",
        "kanji": "喜び",
        "furigana": "よろこび",
        "meaning": "vui mừng, chúc mừng",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_254",
        "kanji": "楽しみ",
        "furigana": "たのしみ",
        "meaning": "niềm vui, sự giải trí; dự đoán",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_255",
        "kanji": "笑い",
        "furigana": "わらい",
        "meaning": "tiếng cười",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_256",
        "kanji": "驚き",
        "furigana": "おどろき",
        "meaning": "kinh ngạc, sợ hãi",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_257",
        "kanji": "怒り",
        "furigana": "いかり",
        "meaning": "giận dữ, thịnh nộ",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_258",
        "kanji": "悲しみ",
        "furigana": "かなしみ",
        "meaning": "nỗi buồn",
        "example": "",
        "unit": "Unit 4"
    },
    {
        "id": "vocab_259",
        "kanji": "幸せな",
        "furigana": "しあわせな",
        "meaning": "hạnh phúc, may mắn",
        "example": "幸せな人生",
        "unit": "Unit 4",
        "example_vi": "Cuộc sống hạnh phúc"
    },
    {
        "id": "vocab_260",
        "kanji": "得意な",
        "furigana": "とくいな",
        "meaning": "hiểu biết",
        "example": "彼女はギターが得意だ",
        "unit": "Unit 4",
        "example_vi": "Cô ấy chơi guitar giỏi"
    },
    {
        "id": "vocab_261",
        "kanji": "苦手な",
        "furigana": "にがてな",
        "meaning": "khó chịu, khó chịu",
        "example": "彼女はギターが苦手だ",
        "unit": "Unit 4",
        "example_vi": "Cô ấy chơi guitar không giỏi"
    },
    {
        "id": "vocab_262",
        "kanji": "熱心な",
        "furigana": "ねっしんな",
        "meaning": "nhiệt tình, hăng hái, nóng bỏng",
        "example": "熱心な仕事ぶりが認められて、昇進した",
        "unit": "Unit 4",
        "example_vi": "Cô được thăng chức vì làm việc chăm chỉ"
    },
    {
        "id": "vocab_263",
        "kanji": "夢中な",
        "furigana": "むちゅうな",
        "meaning": "không nhớ mình như trong mơ, mất đầu",
        "example": "子供の頃、SF漫画に夢中になった",
        "unit": "Unit 4",
        "example_vi": "Khi còn nhỏ cô đã yêu thích phim hoạt hình khoa học viễn tưởng"
    },
    {
        "id": "vocab_264",
        "kanji": "退屈な",
        "furigana": "たいくつな",
        "meaning": "nhàm chán",
        "example": "他の観客は笑いながら見ていたが、私には退屈な映画だった",
        "unit": "Unit 4",
        "example_vi": "Các khán giả khác vừa xem phim vừa cười nhưng đối với tôi đó là một bộ phim nhàm chán"
    },
    {
        "id": "vocab_265",
        "kanji": "健康な",
        "furigana": "けんこうな",
        "meaning": "vui vẻ, lạc quan",
        "example": "心も体も健康な子供を育てたい",
        "unit": "Unit 4",
        "example_vi": "Tôi muốn nuôi dạy một đứa trẻ khỏe mạnh về tinh thần và thể chất"
    },
    {
        "id": "vocab_266",
        "kanji": "苦しい",
        "furigana": "くるしい",
        "meaning": "khó khăn, đau đớn, khó khăn",
        "example": "息が苦しい",
        "unit": "Unit 4",
        "example_vi": "Thật khó thở"
    },
    {
        "id": "vocab_267",
        "kanji": "平気な",
        "furigana": "へいきな",
        "meaning": "thản nhiên, thờ ơ",
        "example": "彼女はどんなに悪口を言われても、平気な顔をしている",
        "unit": "Unit 4",
        "example_vi": "Dù có nói bao nhiêu điều không hay với cô ấy thì cô ấy vẫn tỏ ra không quan tâm"
    },
    {
        "id": "vocab_268",
        "kanji": "悔しい",
        "furigana": "くやしい",
        "meaning": "khó chịu, đáng trách, đáng trách",
        "example": "何度練習しても、上手くできなくて、悔しい",
        "unit": "Unit 4",
        "example_vi": "Dù có tập bao nhiêu lần thì cô ấy cũng không thể làm đúng, thật là bực bội"
    },
    {
        "id": "vocab_269",
        "kanji": "うらやましい",
        "furigana": "うらやましい",
        "meaning": "ghen tị",
        "example": "才能の豊かな人が羨ましい",
        "unit": "Unit 4",
        "example_vi": "Tôi ghen tị với những người tài năng"
    },
    {
        "id": "vocab_270",
        "kanji": "かゆい",
        "furigana": "かゆい",
        "meaning": "ngứa",
        "example": "蚊に刺されて、首が痒い",
        "unit": "Unit 4",
        "example_vi": "Cổ tôi bị ngứa do muỗi đốt"
    },
    {
        "id": "vocab_271",
        "kanji": "おとなしい",
        "furigana": "おとなしい",
        "meaning": "bình tĩnh (về tính cách)",
        "example": "彼は大人しい人だ",
        "unit": "Unit 4",
        "example_vi": "Anh ấy là một người trầm tính"
    },
    {
        "id": "vocab_272",
        "kanji": "我慢強い",
        "furigana": "がまんづよい",
        "meaning": "bệnh nhân",
        "example": "我慢強い性格",
        "unit": "Unit 4",
        "example_vi": "Anh ấy có tính cách kiên nhẫn"
    },
    {
        "id": "vocab_273",
        "kanji": "正直な",
        "furigana": "しょうじきな",
        "meaning": "trung thực, trung thực, chân thành",
        "example": "彼は正直な人だから、嘘を吐くことができない",
        "unit": "Unit 4",
        "example_vi": "Anh ấy là người lương thiện nên tôi không thể nói dối"
    },
    {
        "id": "vocab_274",
        "kanji": "けちな",
        "furigana": "けちな",
        "meaning": "keo kiệt, tham lam; tồi tàn, khốn khổ",
        "example": "あの人はとてもけちだ",
        "unit": "Unit 4",
        "example_vi": "Anh ấy rất keo kiệt"
    },
    {
        "id": "vocab_275",
        "kanji": "我儘な",
        "furigana": "わがままな",
        "meaning": "tự nguyện",
        "example": "我が儘な人",
        "unit": "Unit 4",
        "example_vi": "Một người ích kỷ |"
    },
    {
        "id": "vocab_276",
        "kanji": "積極的な",
        "furigana": "せっきょくてきな",
        "meaning": "tích cực, tích cực",
        "example": "積極的な人",
        "unit": "Unit 4",
        "example_vi": ""
    },
    {
        "id": "vocab_277",
        "kanji": "消極的な",
        "furigana": "しょうきょくてきな",
        "meaning": "tiêu cực, thụ động",
        "example": "消極的な人",
        "unit": "Unit 4",
        "example_vi": ""
    },
    {
        "id": "vocab_278",
        "kanji": "満足な",
        "furigana": "まんぞくな",
        "meaning": "thỏa đáng, đủ, đầy đủ",
        "example": "アルバイトだけでは満足な収入は得られない",
        "unit": "Unit 4",
        "example_vi": ""
    },
    {
        "id": "vocab_279",
        "kanji": "不満な",
        "furigana": "ふまんな",
        "meaning": "không hài lòng, không hài lòng",
        "example": "この仕事に不満な点はない",
        "unit": "Unit 4",
        "example_vi": ""
    },
    {
        "id": "vocab_280",
        "kanji": "不安な",
        "furigana": "ふあんな",
        "meaning": "lo lắng, không chắc chắn, mong manh",
        "example": "最近、体の調子が良くない、悪い病気ではないかと不安だ",
        "unit": "Unit 4",
        "example_vi": ""
    },
    {
        "id": "vocab_281",
        "kanji": "大変な",
        "furigana": "たいへんな",
        "meaning": "khủng khiếp",
        "example": "子育て中のお母さんは大変だ",
        "unit": "Unit 4",
        "example_vi": "Khó khăn của bà mẹ nuôi con"
    },
    {
        "id": "vocab_282",
        "kanji": "無理な",
        "furigana": "むりな",
        "meaning": "không thể, bạo lực, vô lý",
        "example": "たった百万円で家を建てるなんて、無理な話だ",
        "unit": "Unit 4",
        "example_vi": "Không thể xây nhà chỉ với một triệu yên"
    },
    {
        "id": "vocab_283",
        "kanji": "不注意な",
        "furigana": "ふちゅういな",
        "meaning": "thiếu chú ý, bất cẩn",
        "example": "不注意な人",
        "unit": "Unit 4",
        "example_vi": "Người bất cẩn"
    },
    {
        "id": "vocab_284",
        "kanji": "楽な",
        "furigana": "らくな",
        "meaning": "dễ chịu, nhẹ nhàng",
        "example": "もう少し楽な暮らしがしたい",
        "unit": "Unit 4",
        "example_vi": "Tôi muốn sống một cuộc sống thoải mái hơn"
    },
    {
        "id": "vocab_285",
        "kanji": "面倒な",
        "furigana": "めんどうな",
        "meaning": "nặng nề, rắc rối, tẻ nhạt",
        "example": "ご入会には面倒な手続きは要りません",
        "unit": "Unit 4",
        "example_vi": "Không cần phải thực hiện các thủ tục rắc rối để tham gia"
    },
    {
        "id": "vocab_286",
        "kanji": "失礼な",
        "furigana": "しつれいな",
        "meaning": "bất lịch sự, thô lỗ",
        "example": "挨拶しても返事もしない、なんて失礼な人だろう",
        "unit": "Unit 4",
        "example_vi": "Thật là một người thô lỗ khi bạn nói xin chào thậm chí không trả lời"
    },
    {
        "id": "vocab_287",
        "kanji": "当然な",
        "furigana": "とうぜんな",
        "meaning": "tự nhiên, đúng mực",
        "example": "お金を借りたら、返すのが当然だ",
        "unit": "Unit 4",
        "example_vi": "Vay tiền thì trả lại là đương nhiên"
    },
    {
        "id": "vocab_288",
        "kanji": "意外な",
        "furigana": "いがいな",
        "meaning": "bất ngờ, không lường trước được",
        "example": "事故を調査するうちに意外な事実が分かった",
        "unit": "Unit 4",
        "example_vi": "Trong khi điều tra vụ tai nạn, tôi phát hiện ra một số sự thật đáng ngạc nhiên"
    },
    {
        "id": "vocab_289",
        "kanji": "結構な",
        "furigana": "けっこうな",
        "meaning": "tuyệt vời, xuất sắc, tráng lệ",
        "example": "お味はいかがですか、大変結構です",
        "unit": "Unit 4",
        "example_vi": "Bạn thích đồ ăn như thế nào? Không sao đâu"
    },
    {
        "id": "vocab_290",
        "kanji": "派手な",
        "furigana": "はでな",
        "meaning": "tươi sáng, lôi cuốn, hào nhoáng",
        "example": "派手な人",
        "unit": "Unit 4",
        "example_vi": "Người hào nhoáng"
    },
    {
        "id": "vocab_291",
        "kanji": "地味な",
        "furigana": "じみな",
        "meaning": "đơn giản, khiêm tốn, vừa phải",
        "example": "地味な人",
        "unit": "Unit 4",
        "example_vi": "Người bình thường"
    },
    {
        "id": "vocab_292",
        "kanji": "おしゃれな",
        "furigana": "おしゃれな",
        "meaning": "thời trang",
        "example": "彼女はとてもお洒落だ",
        "unit": "Unit 4",
        "example_vi": "Cô ấy rất thời trang"
    },
    {
        "id": "vocab_293",
        "kanji": "変な",
        "furigana": "へんな",
        "meaning": "lạ",
        "example": "変なメールが届いたので、すぐに消した",
        "unit": "Unit 4",
        "example_vi": "Mình nhận được email lạ nên xóa ngay"
    },
    {
        "id": "vocab_294",
        "kanji": "不思議な",
        "furigana": "ふしぎな",
        "meaning": "tuyệt vời, tuyệt vời, bí ẩn",
        "example": "この村には不思議な話が伝わっている",
        "unit": "Unit 4",
        "example_vi": "Có một câu chuyện kỳ ​​lạ về ngôi làng này"
    },
    {
        "id": "vocab_295",
        "kanji": "ましな",
        "furigana": "ましな",
        "meaning": "tốt hơn, thích hợp hơn",
        "example": "咳が酷かったが、うがいをしたら、前より増しになった",
        "unit": "Unit 4",
        "example_vi": "Tôi bị ho dữ dội nhưng khi súc miệng thì lại trở nên nặng hơn trước"
    },
    {
        "id": "vocab_296",
        "kanji": "むだな",
        "furigana": "むだな",
        "meaning": "trống rỗng, vô ích",
        "example": "落ちると分かっているのに試験を受けるのは無駄なことだ",
        "unit": "Unit 4",
        "example_vi": "Chẳng ích gì khi làm bài thi khi bạn biết mình sẽ trượt"
    },
    {
        "id": "vocab_297",
        "kanji": "自由な",
        "furigana": "じゆうな",
        "meaning": "miễn phí",
        "example": "赤ちゃんがいるので、自由な時間が殆どない",
        "unit": "Unit 5",
        "example_vi": "Mình có con nhỏ nên có rất ít thời gian rảnh"
    },
    {
        "id": "vocab_298",
        "kanji": "不自由な",
        "furigana": "ふじゆうな",
        "meaning": "vụng về, ngượng ngùng",
        "example": "目が不自由な人",
        "unit": "Unit 5",
        "example_vi": "Một người mù"
    },
    {
        "id": "vocab_299",
        "kanji": "暖まる／温まる",
        "furigana": "あたたまる",
        "meaning": "để tắm nắng",
        "example": "",
        "unit": "Unit 5"
    },
    {
        "id": "vocab_300",
        "kanji": "暖める／温める",
        "furigana": "あたためる",
        "meaning": "hâm nóng, hâm nóng",
        "example": "",
        "unit": "Unit 5"
    },
    {
        "id": "vocab_301",
        "kanji": "高まる",
        "furigana": "たかまる",
        "meaning": "tăng",
        "example": "",
        "unit": "Unit 5"
    },
    {
        "id": "vocab_302",
        "kanji": "高める",
        "furigana": "たかめる",
        "meaning": "nâng cao",
        "example": "",
        "unit": "Unit 5"
    },
    {
        "id": "vocab_303",
        "kanji": "強まる",
        "furigana": "つよまる",
        "meaning": "tăng cường, tăng cường",
        "example": "",
        "unit": "Unit 5"
    },
    {
        "id": "vocab_304",
        "kanji": "強める",
        "furigana": "つよめる",
        "meaning": "tăng cường, tăng cường",
        "example": "",
        "unit": "Unit 5"
    },
    {
        "id": "vocab_305",
        "kanji": "弱まる",
        "furigana": "よわまる",
        "meaning": "suy yếu, suy yếu",
        "example": "",
        "unit": "Unit 5"
    },
    {
        "id": "vocab_306",
        "kanji": "弱める",
        "furigana": "よわめる",
        "meaning": "suy yếu",
        "example": "",
        "unit": "Unit 5"
    },
    {
        "id": "vocab_307",
        "kanji": "広まる",
        "furigana": "ひろまる",
        "meaning": "lan truyền",
        "example": "",
        "unit": "Unit 5"
    },
    {
        "id": "vocab_308",
        "kanji": "広める",
        "furigana": "ひろめる",
        "meaning": "mở rộng, phân phối, thông báo;",
        "example": "",
        "unit": "Unit 5"
    },
    {
        "id": "vocab_309",
        "kanji": "深まる",
        "furigana": "ふかまる",
        "meaning": "đi sâu hơn",
        "example": "",
        "unit": "Unit 5"
    },
    {
        "id": "vocab_310",
        "kanji": "深める",
        "furigana": "ふかめる",
        "meaning": "đào sâu",
        "example": "",
        "unit": "Unit 5"
    },
    {
        "id": "vocab_311",
        "kanji": "世話",
        "furigana": "せわ",
        "meaning": "dịch vụ, giúp đỡ; quan tâm, rắc rối",
        "example": "家ではペットの世話は私の仕事だ",
        "unit": "Unit 5",
        "example_vi": "Ở nhà chăm sóc thú cưng là việc của tôi"
    },
    {
        "id": "vocab_312",
        "kanji": "家庭",
        "furigana": "かてい",
        "meaning": "gia đình, tổ ấm, lò sưởi",
        "example": "田中課長は仕事では厳しいが、家庭では優しいお父さんだそうだ",
        "unit": "Unit 5",
        "example_vi": "Quản lý Tanaka nghiêm khắc trong công việc nhưng ở nhà lại là người cha tốt bụng"
    },
    {
        "id": "vocab_313",
        "kanji": "協力",
        "furigana": "きょうりょく",
        "meaning": "hợp tác, tương tác",
        "example": "家族で協力して祖母の介護をした",
        "unit": "Unit 5",
        "example_vi": "Tôi đã cùng gia đình chăm sóc bà ngoại"
    },
    {
        "id": "vocab_314",
        "kanji": "感謝",
        "furigana": "かんしゃ",
        "meaning": "biết ơn, đánh giá cao",
        "example": "アドバイスしてくれた先輩にとても感謝している",
        "unit": "Unit 5",
        "example_vi": "Em rất biết ơn các tiền bối đã cho em lời khuyên"
    },
    {
        "id": "vocab_315",
        "kanji": "（お）礼",
        "furigana": "れい",
        "meaning": "cây cung; chào hỏi, lịch sự, nhã nhặn; phép xã giao;",
        "example": "お世話になった方にお礼をした",
        "unit": "Unit 5",
        "example_vi": "Tôi cảm ơn những người đã giúp đỡ tôi"
    },
    {
        "id": "vocab_316",
        "kanji": "（お）詫び",
        "furigana": "わび",
        "meaning": "lời xin lỗi",
        "example": "迷惑をかけた人にお詫びをした",
        "unit": "Unit 5",
        "example_vi": "Tôi đã xin lỗi những người tôi đã gây ra"
    },
    {
        "id": "vocab_317",
        "kanji": "お辞儀",
        "furigana": "おじぎ",
        "meaning": "cung",
        "example": "お客様には丁寧にお辞儀をしましょう",
        "unit": "Unit 5",
        "example_vi": "Cúi chào lịch sự với khách hàng"
    },
    {
        "id": "vocab_318",
        "kanji": "握手",
        "furigana": "あくしゅ",
        "meaning": "bắt tay",
        "example": "コンサートで歌手と握手した",
        "unit": "Unit 5",
        "example_vi": "Tôi bắt tay một ca sĩ tại buổi hòa nhạc"
    },
    {
        "id": "vocab_319",
        "kanji": "いじわる",
        "furigana": "いじわる",
        "meaning": "người ác (cứng đầu, độc ác);;~をする là ác nhân (cứng đầu, độc ác); trêu chọc, trêu chọc smb.",
        "example": "好きな子にはつい意地悪してしまう",
        "unit": "Unit 5",
        "example_vi": "Tôi có xu hướng ác ý với đứa con yêu thích của mình"
    },
    {
        "id": "vocab_320",
        "kanji": "いたずら",
        "furigana": "いたずら",
        "meaning": "trò đùa, trò nghịch ngợm, vui vẻ, giải trí",
        "example": "悪戯をして先生に怒られた",
        "unit": "Unit 5",
        "example_vi": "Tôi bị giáo viên mắng vì chơi khăm"
    },
    {
        "id": "vocab_321",
        "kanji": "節約",
        "furigana": "せつやく",
        "meaning": "tiết kiệm",
        "example": "生活費の節約",
        "unit": "Unit 5",
        "example_vi": "Tiết kiệm chi phí sinh hoạt"
    },
    {
        "id": "vocab_322",
        "kanji": "経営",
        "furigana": "けいえい",
        "meaning": "quản lý (doanh nghiệp, kinh tế, kinh doanh), quản lý",
        "example": "父はスーパーを経営している",
        "unit": "Unit 5",
        "example_vi": "Bố tôi kinh doanh siêu thị"
    },
    {
        "id": "vocab_323",
        "kanji": "反省",
        "furigana": "はんせい",
        "meaning": "nội tâm, nội tâm, suy ngẫm (về những gì đã làm, những gì đã nói)",
        "example": "一日の反省を日記に書く",
        "unit": "Unit 5",
        "example_vi": "Viết nhật ký suy ngẫm hàng ngày"
    },
    {
        "id": "vocab_324",
        "kanji": "実行",
        "furigana": "じっこう",
        "meaning": "thực hiện, thực hiện, thực hiện [trong thực tế]",
        "example": "この計画は実行が難しい",
        "unit": "Unit 5",
        "example_vi": "Thật khó để thực hiện kế hoạch này"
    },
    {
        "id": "vocab_325",
        "kanji": "進歩",
        "furigana": "しんぽ",
        "meaning": "tiến bộ",
        "example": "英語を勉強しているが、進歩がない",
        "unit": "Unit 5",
        "example_vi": "Tôi đang học tiếng Anh nhưng không tiến bộ chút nào"
    },
    {
        "id": "vocab_326",
        "kanji": "変化",
        "furigana": "へんか",
        "meaning": "thay đổi, thay đổi; sự chuyển hóa, biến thái;",
        "example": "大きな変化",
        "unit": "Unit 5",
        "example_vi": "Những thay đổi lớn"
    },
    {
        "id": "vocab_327",
        "kanji": "発達",
        "furigana": "はったつ",
        "meaning": "phát triển, tăng trưởng, tiến bộ",
        "example": "体や心が発達する",
        "unit": "Unit 5",
        "example_vi": "Phát triển thể chất và tinh thần"
    },
    {
        "id": "vocab_328",
        "kanji": "体力",
        "furigana": "たいりょく",
        "meaning": "sức mạnh thể chất",
        "example": "若者の体力が低下している",
        "unit": "Unit 5",
        "example_vi": "Thể lực giới trẻ ngày càng suy giảm"
    },
    {
        "id": "vocab_329",
        "kanji": "出場",
        "furigana": "しゅつじょう",
        "meaning": "lối ra (trên sân khấu, v.v.); biểu diễn, tham gia",
        "example": "オリンピックへの出場が決まった",
        "unit": "Unit 5",
        "example_vi": "Người ta đã quyết định rằng họ sẽ tham gia Thế vận hội"
    },
    {
        "id": "vocab_330",
        "kanji": "活躍",
        "furigana": "かつやく",
        "meaning": "[bận] hoạt động, hoạt động",
        "example": "田中選手の活躍を期待する",
        "unit": "Unit 5",
        "example_vi": "Tôi mong chờ sự thành công của Tanaka"
    },
    {
        "id": "vocab_331",
        "kanji": "競争",
        "furigana": "きょうそう",
        "meaning": "sự cạnh tranh, cuộc thi; sự ganh đua, cạnh tranh",
        "example": "どちらがいい成績を取るか、友達と競争した",
        "unit": "Unit 5",
        "example_vi": "Tôi thi đua với bạn bè xem ai sẽ đạt điểm cao nhất"
    },
    {
        "id": "vocab_332",
        "kanji": "応援",
        "furigana": "おうえん",
        "meaning": "hỗ trợ, giúp đỡ",
        "example": "自分の学校のチームを応援する",
        "unit": "Unit 5",
        "example_vi": "Tôi ủng hộ đội của trường tôi"
    },
    {
        "id": "vocab_333",
        "kanji": "拍手",
        "furigana": "はくしゅ",
        "meaning": "vỗ tay, vỗ tay",
        "example": "ステージの歌手に拍手をする",
        "unit": "Unit 5",
        "example_vi": "Tôi vỗ tay khen ngợi các ca sĩ trên sân khấu"
    },
    {
        "id": "vocab_334",
        "kanji": "人気",
        "furigana": "にんき",
        "meaning": "sự nổi tiếng, thành công;",
        "example": "彼はクラスで一番人気がある",
        "unit": "Unit 5",
        "example_vi": "Anh ấy là người nổi tiếng nhất lớp"
    },
    {
        "id": "vocab_335",
        "kanji": "うわさ",
        "furigana": "うわさ",
        "meaning": "tin đồn, tin đồn, tin đồn",
        "example": "クラスメートの噂をしていたら、そこに本人が現れた",
        "unit": "Unit 5",
        "example_vi": "Khi tôi đang nói về các bạn cùng lớp của mình thì người được đề cập xuất hiện"
    },
    {
        "id": "vocab_336",
        "kanji": "情報",
        "furigana": "じょうほう",
        "meaning": "thông tin ;",
        "example": "テレビから色々な情報を得る",
        "unit": "Unit 5",
        "example_vi": "Chúng tôi nhận được nhiều thông tin khác nhau từ TV"
    },
    {
        "id": "vocab_337",
        "kanji": "交換",
        "furigana": "こうかん",
        "meaning": "trao đổi; trao đổi, thay thế; thay thế",
        "example": "プレゼントを交換する",
        "unit": "Unit 5",
        "example_vi": "Chúng ta trao đổi quà"
    },
    {
        "id": "vocab_338",
        "kanji": "流行",
        "furigana": "りゅうこう",
        "meaning": "thời trang, dịch bệnh;",
        "example": "新しい流行",
        "unit": "Unit 5",
        "example_vi": "Một xu hướng mới"
    },
    {
        "id": "vocab_339",
        "kanji": "宣伝",
        "furigana": "せんでん",
        "meaning": "tuyên truyền; quảng cáo",
        "example": "バーゲンセールの宣伝が始まった",
        "unit": "Unit 5",
        "example_vi": "Bán hàng mặc cả đã bắt đầu quảng cáo"
    },
    {
        "id": "vocab_340",
        "kanji": "広告",
        "furigana": "こうこく",
        "meaning": "thông báo; quảng cáo; áp phích",
        "example": "新聞に新製品の広告が載っていた",
        "unit": "Unit 5",
        "example_vi": "Có một quảng cáo cho một sản phẩm mới trên báo"
    },
    {
        "id": "vocab_341",
        "kanji": "注目",
        "furigana": "ちゅうもく",
        "meaning": "chú ý; quan sát",
        "example": "有名歌手の結婚が注目を集めている",
        "unit": "Unit 5",
        "example_vi": "Cuộc hôn nhân của ca sĩ nổi tiếng đang thu hút sự chú ý"
    },
    {
        "id": "vocab_342",
        "kanji": "通訳",
        "furigana": "つうやく",
        "meaning": "dịch thuật [bằng miệng]; dịch giả",
        "example": "英語を日本語に通訳する",
        "unit": "Unit 5",
        "example_vi": "Phiên dịch tiếng Anh sang tiếng Nhật"
    },
    {
        "id": "vocab_343",
        "kanji": "翻訳",
        "furigana": "ほんやく",
        "meaning": "[viết] bản dịch;",
        "example": "日本語の小説を英語に翻訳する",
        "unit": "Unit 5",
        "example_vi": "Dịch tiểu thuyết tiếng Nhật sang tiếng Anh"
    },
    {
        "id": "vocab_344",
        "kanji": "伝言",
        "furigana": "でんごん",
        "meaning": "tin nhắn [bằng miệng]",
        "example": "留守番電話に伝言を残す",
        "unit": "Unit 5",
        "example_vi": "Để lại tin nhắn trên máy trả lời tự động"
    },
    {
        "id": "vocab_345",
        "kanji": "報告",
        "furigana": "ほうこく",
        "meaning": "báo cáo, báo cáo, tin nhắn, báo cáo, báo cáo",
        "example": "出張の報告",
        "unit": "Unit 5",
        "example_vi": "Báo cáo chuyến công tác"
    },
    {
        "id": "vocab_346",
        "kanji": "録画",
        "furigana": "ろくが",
        "meaning": "quay video; băng video",
        "example": "テレビ番組をビデオに録画する",
        "unit": "Unit 5",
        "example_vi": "Ghi chương trình TV trên video"
    },
    {
        "id": "vocab_347",
        "kanji": "混雑",
        "furigana": "こんざつ",
        "meaning": "nhộn nhịp, nhộn nhịp, phù phiếm",
        "example": "デパートは大勢の人で混雑している",
        "unit": "Unit 5",
        "example_vi": "Một cửa hàng bách hóa đông đúc người"
    },
    {
        "id": "vocab_348",
        "kanji": "渋滞",
        "furigana": "じゅうたい",
        "meaning": "trì hoãn; trì trệ; ùn tắc giao thông",
        "example": "道路が渋滞していて、会議に遅刻した",
        "unit": "Unit 5",
        "example_vi": "Đường tắc nghẽn và tôi đến muộn cuộc họp"
    },
    {
        "id": "vocab_349",
        "kanji": "衝突",
        "furigana": "しょうとつ",
        "meaning": "va chạm (ví dụ như ô tô); xung đột, cãi vã",
        "example": "電車の衝突の場面を見た",
        "unit": "Unit 5",
        "example_vi": "Tôi nhìn thấy một vụ va chạm tàu ​​| Thiệt hại do bão"
    },
    {
        "id": "vocab_350",
        "kanji": "被害",
        "furigana": "ひがい",
        "meaning": "thiệt hại, mất mát, tổn thất",
        "example": "台風の被害",
        "unit": "Unit 5",
        "example_vi": "Điều tra nguyên nhân vụ tai nạn"
    },
    {
        "id": "vocab_351",
        "kanji": "事故",
        "furigana": "じこ",
        "meaning": "sự cố, tai nạn; tai nạn; hoàn cảnh [không thể cưỡng lại]",
        "example": "事故の原因を調べる",
        "unit": "Unit 5",
        "example_vi": "Xảy ra vụ trẻ em hàng xóm lần lượt biến mất"
    },
    {
        "id": "vocab_352",
        "kanji": "事件",
        "furigana": "じけん",
        "meaning": "sự việc, sự việc, vụ việc, sự việc; kinh doanh hợp pháp",
        "example": "近所で子供が次々とい無くなるという事件があった",
        "unit": "Unit 5",
        "example_vi": "Máy giặt của tôi bị hỏng nên tôi đi giặt đồ"
    },
    {
        "id": "vocab_353",
        "kanji": "故障",
        "furigana": "こしょう",
        "meaning": "trở ngại, trở ngại; tai nạn",
        "example": "洗濯機が故障したので、コインランドリーへ行った",
        "unit": "Unit 5",
        "example_vi": "Máy tính của tôi bị hỏng nên tôi gửi đi sửa"
    },
    {
        "id": "vocab_354",
        "kanji": "修理",
        "furigana": "しゅうり",
        "meaning": "sửa chữa, sửa chữa",
        "example": "パソコンが壊れたので、修理に出した",
        "unit": "Unit 5",
        "example_vi": "Sét đánh và mất điện"
    },
    {
        "id": "vocab_355",
        "kanji": "停電",
        "furigana": "ていでん",
        "meaning": "mất điện (cung cấp điện)",
        "example": "雷が落ちて停電した",
        "unit": "Unit 5",
        "example_vi": "Cơ thể tôi đang trong tình trạng tốt"
    },
    {
        "id": "vocab_356",
        "kanji": "調子",
        "furigana": "ちょうし",
        "meaning": "giai điệu; ngữ điệu, nhịp điệu âm nhạc; nhịp độ, cách thức;",
        "example": "体の調子がいい",
        "unit": "Unit 5",
        "example_vi": "Tôi rất lo lắng khi phỏng vấn và không thể trả lời tốt"
    },
    {
        "id": "vocab_357",
        "kanji": "緊張",
        "furigana": "きんちょう",
        "meaning": "căng thẳng, căng thẳng",
        "example": "面接では緊張して、上手く答えられなかった",
        "unit": "Unit 5",
        "example_vi": "Tôi tự tin vào thể lực của mình"
    },
    {
        "id": "vocab_358",
        "kanji": "自信",
        "furigana": "じしん",
        "meaning": "sự tự tin;",
        "example": "体力に自信がある",
        "unit": "Unit 5",
        "example_vi": "Tôi nấu những món ăn đặc trưng của mình"
    },
    {
        "id": "vocab_359",
        "kanji": "自慢",
        "furigana": "じまん",
        "meaning": "sự tự mãn; khoe khoang, tự hào",
        "example": "自慢の料理を作る",
        "unit": "Unit 5",
        "example_vi": "Tôi rất ấn tượng với tốc độ tiến bộ của anh Chín"
    },
    {
        "id": "vocab_360",
        "kanji": "感心",
        "furigana": "かんしん",
        "meaning": "ngưỡng mộ, thích thú",
        "example": "チンさんの進歩の速さに感心した",
        "unit": "Unit 5",
        "example_vi": ""
    },
    {
        "id": "vocab_361",
        "kanji": "感動",
        "furigana": "かんどう",
        "meaning": "hứng thú, ấn tượng",
        "example": "パラリンピックを見て、とても感動した",
        "unit": "Unit 5",
        "example_vi": "Tôi rất xúc động khi xem Paralympic"
    },
    {
        "id": "vocab_362",
        "kanji": "興奮",
        "furigana": "こうふん",
        "meaning": "phấn khích",
        "example": "試合を見ていた観客たちは、興奮して大声を出した",
        "unit": "Unit 5",
        "example_vi": "Khán giả đang theo dõi trận đấu rất phấn khích và hét lên"
    },
    {
        "id": "vocab_363",
        "kanji": "感想",
        "furigana": "かんそう",
        "meaning": "số lần hiển thị",
        "example": "ご感想はいかがですか",
        "unit": "Unit 5",
        "example_vi": "Suy nghĩ của bạn là gì?"
    },
    {
        "id": "vocab_364",
        "kanji": "予想",
        "furigana": "よそう",
        "meaning": "giả định, kỳ vọng",
        "example": "選挙の結果を予想する",
        "unit": "Unit 5",
        "example_vi": "Dự đoán kết quả bầu cử"
    },
    {
        "id": "vocab_365",
        "kanji": "専門",
        "furigana": "せんもん",
        "meaning": "đặc sản",
        "example": "専門は言語学です",
        "unit": "Unit 5",
        "example_vi": "Chuyên môn của tôi là ngôn ngữ học"
    },
    {
        "id": "vocab_366",
        "kanji": "研究",
        "furigana": "けんきゅう",
        "meaning": "nghiên cứu, công tác khoa học",
        "example": "私は大学で日本の政治を研究している",
        "unit": "Unit 5",
        "example_vi": "Tôi học chính trị Nhật Bản tại trường đại học"
    },
    {
        "id": "vocab_367",
        "kanji": "調査",
        "furigana": "ちょうさ",
        "meaning": "nghiên cứu, khảo sát, học tập",
        "example": "調査を行う",
        "unit": "Unit 5",
        "example_vi": "Tiến hành điều tra"
    },
    {
        "id": "vocab_368",
        "kanji": "原因",
        "furigana": "げんいん",
        "meaning": "gây ra; nhân tố; gốc, nguồn",
        "example": "今警察が事故の原因を調べている",
        "unit": "Unit 5",
        "example_vi": "Hiện cảnh sát đang điều tra nguyên nhân vụ tai nạn"
    },
    {
        "id": "vocab_369",
        "kanji": "結果",
        "furigana": "けっか",
        "meaning": "kết quả, kết quả, [bởi] hậu quả",
        "example": "一位になりたかったが、結果は三位だった",
        "unit": "Unit 5",
        "example_vi": "Tôi muốn đứng ở vị trí đầu tiên nhưng cuối cùng lại đứng ở vị trí thứ ba"
    },
    {
        "id": "vocab_370",
        "kanji": "解決",
        "furigana": "かいけつ",
        "meaning": "[lần] giải pháp (của một câu hỏi, v.v.)",
        "example": "大きな問題が解決した",
        "unit": "Unit 5",
        "example_vi": "Một vấn đề lớn đã được giải quyết"
    },
    {
        "id": "vocab_371",
        "kanji": "確認",
        "furigana": "かくにん",
        "meaning": "xác nhận, công nhận",
        "example": "間違いがないかどうかを確認する",
        "unit": "Unit 6",
        "example_vi": "Kiểm tra xem tôi có mắc lỗi không"
    },
    {
        "id": "vocab_372",
        "kanji": "利用",
        "furigana": "りよう",
        "meaning": "sử dụng",
        "example": "水不足なので、水道の利用を減らした",
        "unit": "Unit 6",
        "example_vi": "Vì thiếu nước nên tôi đã giảm lượng nước sử dụng"
    },
    {
        "id": "vocab_373",
        "kanji": "理解",
        "furigana": "りかい",
        "meaning": "hiểu biết",
        "example": "意味の理解",
        "unit": "Unit 6",
        "example_vi": "Hiểu ý nghĩa"
    },
    {
        "id": "vocab_374",
        "kanji": "発見",
        "furigana": "はっけん",
        "meaning": "khai mạc",
        "example": "大きな発見",
        "unit": "Unit 6",
        "example_vi": "Khám phá lớn"
    },
    {
        "id": "vocab_375",
        "kanji": "発明",
        "furigana": "はつめい",
        "meaning": "sự phát minh;  năng khiếu",
        "example": "ベルは電話を発明した",
        "unit": "Unit 6",
        "example_vi": "Bell phát minh ra điện thoại"
    },
    {
        "id": "vocab_376",
        "kanji": "関係",
        "furigana": "かんけい",
        "meaning": "thái độ, mối quan tâm, kết nối, ảnh hưởng",
        "example": "お二人の関係は、親子です",
        "unit": "Unit 6",
        "example_vi": "Mối quan hệ giữa hai người là cha mẹ và con cái"
    },
    {
        "id": "vocab_377",
        "kanji": "団体",
        "furigana": "だんたい",
        "meaning": "nhóm, tập thể; tổ chức, hiệp hội",
        "example": "博物館で団体のチケットを買う",
        "unit": "Unit 6",
        "example_vi": "Mua vé đoàn tại bảo tàng"
    },
    {
        "id": "vocab_378",
        "kanji": "選挙",
        "furigana": "せんきょ",
        "meaning": "bầu cử",
        "example": "一月に選挙が行われる",
        "unit": "Unit 6",
        "example_vi": "Cuộc bầu cử sẽ được tổ chức vào tháng 1"
    },
    {
        "id": "vocab_379",
        "kanji": "税金",
        "furigana": "ぜいきん",
        "meaning": "thuế; nhiệm vụ; bộ sưu tập",
        "example": "年度末に税金を払う",
        "unit": "Unit 6",
        "example_vi": "Nộp thuế cuối năm"
    },
    {
        "id": "vocab_380",
        "kanji": "責任",
        "furigana": "せきにん",
        "meaning": "trách nhiệm",
        "example": "この失敗はあなたの責任ではない",
        "unit": "Unit 6",
        "example_vi": "Thất bại này không phải lỗi của bạn"
    },
    {
        "id": "vocab_381",
        "kanji": "書類",
        "furigana": "しょるい",
        "meaning": "tài liệu, giấy tờ",
        "example": "留学の手続きに必要な書類を準備する",
        "unit": "Unit 6",
        "example_vi": "Chuẩn bị các giấy tờ cần thiết cho thủ tục du học"
    },
    {
        "id": "vocab_382",
        "kanji": "題名",
        "furigana": "だいめい",
        "meaning": "tiêu đề, tiêu đề",
        "example": "コンクールに出す作品に題名を付ける",
        "unit": "Unit 6",
        "example_vi": "Đặt tiêu đề cho tác phẩm dự thi"
    },
    {
        "id": "vocab_383",
        "kanji": "条件",
        "furigana": "じょうけん",
        "meaning": "tình trạng; điều kiện",
        "example": "運転免許を持っていることが採用の条件だ",
        "unit": "Unit 6",
        "example_vi": "Có bằng lái xe là điều kiện được nhận"
    },
    {
        "id": "vocab_384",
        "kanji": "締め切り",
        "furigana": "しめきり",
        "meaning": "thời hạn, ngày cuối cùng (để nộp đơn, v.v.);",
        "example": "レポートの締め切りは三十日です",
        "unit": "Unit 6",
        "example_vi": "Hạn chót báo cáo là ngày 30"
    },
    {
        "id": "vocab_385",
        "kanji": "期間",
        "furigana": "きかん",
        "meaning": "thời hạn, thời hạn, khoảng thời gian",
        "example": "申し込み期間は十二月一日から三日までです",
        "unit": "Unit 6",
        "example_vi": "Thời gian nộp đơn từ ngày 1 đến ngày 3 tháng 12"
    },
    {
        "id": "vocab_386",
        "kanji": "倍",
        "furigana": "ばい",
        "meaning": "gấp đôi; gấp đôi, nhân đôi",
        "example": "値段が倍になる",
        "unit": "Unit 6",
        "example_vi": "Giá sẽ tăng gấp đôi"
    },
    {
        "id": "vocab_387",
        "kanji": "くじ",
        "furigana": "くじ",
        "meaning": "nhiều; xổ số",
        "example": "スーパーで買い物をして、くじを引いたら、テレビが当たった",
        "unit": "Unit 6",
        "example_vi": "Mua sắm ở siêu thị, trúng số, trúng tivi"
    },
    {
        "id": "vocab_388",
        "kanji": "近道",
        "furigana": "ちかみち",
        "meaning": "con đường ngắn nhất (trực tiếp)",
        "example": "駅への近道を通る",
        "unit": "Unit 6",
        "example_vi": "Đi đường tắt tới ga"
    },
    {
        "id": "vocab_389",
        "kanji": "中心",
        "furigana": "ちゅうしん",
        "meaning": "trung tâm; ở giữa; tập trung, cân bằng",
        "example": "町の中心",
        "unit": "Unit 6",
        "example_vi": "Trung tâm thị trấn"
    },
    {
        "id": "vocab_390",
        "kanji": "辺り",
        "furigana": "あたり",
        "meaning": "môi trường ngay lập tức; khu phố",
        "example": "辺りを見回す",
        "unit": "Unit 6",
        "example_vi": "Nhìn xung quanh"
    },
    {
        "id": "vocab_391",
        "kanji": "周り",
        "furigana": "まわり",
        "meaning": "chu vi, hình tròn, cạnh, cạnh, đường viền",
        "example": "池の周りを歩く",
        "unit": "Unit 6",
        "example_vi": "Đi dạo quanh ao"
    },
    {
        "id": "vocab_392",
        "kanji": "穴",
        "furigana": "あな",
        "meaning": "lỗ, lỗ; tốt; khoảng cách; nứt",
        "example": "地面に穴を掘る",
        "unit": "Unit 6",
        "example_vi": "Đào một cái hố trên mặt đất"
    },
    {
        "id": "vocab_393",
        "kanji": "列",
        "furigana": "れつ",
        "meaning": "hàng ngang; đường kẻ; cột; sợi dây; xếp hàng",
        "example": "入口の前には長い列ができていた",
        "unit": "Unit 6",
        "example_vi": "Có một hàng dài trước lối vào"
    },
    {
        "id": "vocab_394",
        "kanji": "幅",
        "furigana": "はば",
        "meaning": "chiều rộng, ảnh hưởng, trọng lượng (trong thành ngữ)",
        "example": "道の幅が広い",
        "unit": "Unit 6",
        "example_vi": "Con đường đã rộng"
    },
    {
        "id": "vocab_395",
        "kanji": "範囲",
        "furigana": "はんい",
        "meaning": "hình cầu, diện tích, hình tròn; phạm vi; giới hạn",
        "example": "試験の範囲",
        "unit": "Unit 6",
        "example_vi": "Phạm vi kỳ thi"
    },
    {
        "id": "vocab_396",
        "kanji": "内容",
        "furigana": "ないよう",
        "meaning": "nội dung, nội dung;",
        "example": "話の内容",
        "unit": "Unit 6",
        "example_vi": "Nội dung câu chuyện"
    },
    {
        "id": "vocab_397",
        "kanji": "中身",
        "furigana": "なかみ",
        "meaning": "nội dung, nội dung; chất độn;",
        "example": "箱を開けて中身を見る",
        "unit": "Unit 6",
        "example_vi": "Mở hộp xem bên trong có gì"
    },
    {
        "id": "vocab_398",
        "kanji": "特徴",
        "furigana": "とくちょう",
        "meaning": "nét đặc trưng (đặc trưng), tính đặc thù, tính độc đáo",
        "example": "商品の特徴を確かめる",
        "unit": "Unit 6",
        "example_vi": "Kiểm tra đặc tính của sản phẩm"
    },
    {
        "id": "vocab_399",
        "kanji": "普通",
        "furigana": "ふつう",
        "meaning": "bình thường; đơn giản; bình thường",
        "example": "パスポートの申請には一週間ぐらいかかるのが普通だ",
        "unit": "Unit 6",
        "example_vi": "Việc làm hộ chiếu mất khoảng một tuần là điều bình thường"
    },
    {
        "id": "vocab_400",
        "kanji": "当たり前",
        "furigana": "あたりまえ",
        "meaning": "tất nhiên, không có gì đáng ngạc nhiên, không cần phải nói",
        "example": "そんな酷いことをされたら、怒るのが当たり前だ",
        "unit": "Unit 6",
        "example_vi": "Việc tức giận khi ai đó làm điều khủng khiếp như vậy là điều bình thường"
    },
    {
        "id": "vocab_401",
        "kanji": "偽",
        "furigana": "にせ",
        "meaning": "giả, giả mạo",
        "example": "偽の銀行員に騙されてお金を取られた",
        "unit": "Unit 6",
        "example_vi": "Tôi bị nhân viên ngân hàng giả lừa và lấy tiền của tôi"
    },
    {
        "id": "vocab_402",
        "kanji": "別",
        "furigana": "べつ",
        "meaning": "sự khác biệt, sự khác biệt, đặc biệt, riêng biệt, đặc biệt",
        "example": "米はご飯とは別の物だ",
        "unit": "Unit 6",
        "example_vi": "Gạo khác với gạo"
    },
    {
        "id": "vocab_403",
        "kanji": "国籍",
        "furigana": "こくせき",
        "meaning": "quốc tịch, quốc tịch",
        "example": "私はずっとアメリカで暮らしているが、国籍は日本だ",
        "unit": "Unit 6",
        "example_vi": "Tôi đã sống ở Mỹ cả đời nhưng quốc tịch của tôi là Nhật Bản"
    },
    {
        "id": "vocab_404",
        "kanji": "東洋",
        "furigana": "とうよう",
        "meaning": "đông, các nước phương đông",
        "example": "東洋の文化と西洋の文化を比べる",
        "unit": "Unit 6",
        "example_vi": "So sánh văn hóa phương Đông và phương Tây"
    },
    {
        "id": "vocab_405",
        "kanji": "西洋",
        "furigana": "せいよう",
        "meaning": "tây, các nước phương tây",
        "example": "東洋の文化と西洋の文化を比べる",
        "unit": "Unit 6",
        "example_vi": "So sánh văn hóa phương Đông và phương Tây"
    },
    {
        "id": "vocab_406",
        "kanji": "国際",
        "furigana": "こくさい",
        "meaning": "quốc tế, quốc tế",
        "example": "日本企業の海外支社でのトラブルが国際問題に発展した",
        "unit": "Unit 6",
        "example_vi": "Rắc rối tại chi nhánh nước ngoài của một công ty Nhật Bản phát triển thành vấn đề quốc tế"
    },
    {
        "id": "vocab_407",
        "kanji": "自然",
        "furigana": "しぜん",
        "meaning": "thiên nhiên",
        "example": "山や海へ行って、自然の中で過ごす",
        "unit": "Unit 6",
        "example_vi": "Lên núi và biển và hòa mình vào thiên nhiên"
    },
    {
        "id": "vocab_408",
        "kanji": "景色",
        "furigana": "けしき",
        "meaning": "quang cảnh, phong cảnh",
        "example": "初めて日本の山に行った、素晴らしい景色だった",
        "unit": "Unit 6",
        "example_vi": "Lần đầu tiên tôi đến vùng núi của Nhật Bản và đó là một khung cảnh tuyệt vời"
    },
    {
        "id": "vocab_409",
        "kanji": "宗教",
        "furigana": "しゅうきょう",
        "meaning": "tôn giáo",
        "example": "世界には色々な宗教がある",
        "unit": "Unit 6",
        "example_vi": "Trên thế giới có rất nhiều tôn giáo khác nhau"
    },
    {
        "id": "vocab_410",
        "kanji": "愛",
        "furigana": "あい",
        "meaning": "tình yêu",
        "example": "私は家族を愛している",
        "unit": "Unit 6",
        "example_vi": "Tôi yêu gia đình tôi"
    },
    {
        "id": "vocab_411",
        "kanji": "届く",
        "furigana": "とどく",
        "meaning": "được, tiếp cận, tiếp cận",
        "example": "父から手紙が届いた",
        "unit": "Unit 6",
        "example_vi": "Một lá thư đến từ cha anh"
    },
    {
        "id": "vocab_412",
        "kanji": "届ける",
        "furigana": "とどける",
        "meaning": "giao hàng, khai báo, báo cáo",
        "example": "隣の家に旅行のお土産を届けた",
        "unit": "Unit 6",
        "example_vi": "Tặng quà lưu niệm sau chuyến đi sang nhà hàng xóm"
    },
    {
        "id": "vocab_413",
        "kanji": "かく",
        "furigana": "かく",
        "meaning": "gãi, cào, ngồi xếp bằng, chặt, đổ mồ hôi",
        "example": "頭を掻く",
        "unit": "Unit 6",
        "example_vi": "Gãi đầu"
    },
    {
        "id": "vocab_414",
        "kanji": "つかむ",
        "furigana": "つかむ",
        "meaning": "tóm, tóm",
        "example": "電車で突然腕を掴まれて、びっくりした",
        "unit": "Unit 6",
        "example_vi": "Ngạc nhiên khi có người bất ngờ nắm lấy tay mình trên tàu"
    },
    {
        "id": "vocab_415",
        "kanji": "握る",
        "furigana": "にぎる",
        "meaning": "cầm (trong tay), cầm, nắm, nhận",
        "example": "子供は怖がって、母親の手を強く握った",
        "unit": "Unit 6",
        "example_vi": "Đứa trẻ sợ hãi nắm chặt tay mẹ"
    },
    {
        "id": "vocab_416",
        "kanji": "押さえる",
        "furigana": "おさえる",
        "meaning": "ấn, che (bằng tay)",
        "example": "あの人はお腹を押さえて、座っている、腹痛だろうか",
        "unit": "Unit 6",
        "example_vi": "Người đang ngồi ôm bụng, có lẽ đang bị đau bụng"
    },
    {
        "id": "vocab_417",
        "kanji": "近づく",
        "furigana": "ちかづく",
        "meaning": "tiếp cận, tiếp cận",
        "example": "目的地が近づいてきた",
        "unit": "Unit 6",
        "example_vi": "Điểm đến đã đến gần"
    },
    {
        "id": "vocab_418",
        "kanji": "近づける",
        "furigana": "ちかづける",
        "meaning": "di chuyển, đưa lại gần, để",
        "example": "車を道の脇に近づける",
        "unit": "Unit 6",
        "example_vi": "Anh cho xe sát vào lề đường"
    },
    {
        "id": "vocab_419",
        "kanji": "合う",
        "furigana": "あう",
        "meaning": "phù hợp (cho cái gì), khớp, đúng",
        "example": "不図顔を上げると、先生と目が合ってしまった",
        "unit": "Unit 6",
        "example_vi": "Khi bất ngờ ngước lên, anh bắt gặp ánh mắt của thầy"
    },
    {
        "id": "vocab_420",
        "kanji": "合わせる",
        "furigana": "あわせる",
        "meaning": "(at) kết nối, phối hợp, so sánh, so sánh",
        "example": "皆で力を合わせて頑張りましょう",
        "unit": "Unit 6",
        "example_vi": "Tất cả chúng ta hãy cùng nhau làm việc và cố gắng hết sức mình"
    },
    {
        "id": "vocab_421",
        "kanji": "当たる",
        "furigana": "あたる",
        "meaning": "đánh trúng (mục tiêu), đúng, thành công, phù hợp",
        "example": "ボールが当たって、窓ガラスが割れた",
        "unit": "Unit 6",
        "example_vi": "Bóng đập vỡ cửa sổ"
    },
    {
        "id": "vocab_422",
        "kanji": "当てる",
        "furigana": "あてる",
        "meaning": "áp đặt, đánh (mục tiêu), đoán, dự định",
        "example": "相手選手のボールが早いので、ラケットに当てるのも大変だ",
        "unit": "Unit 6",
        "example_vi": "Bóng đối phương quá nhanh khiến vợt khó đánh trúng"
    },
    {
        "id": "vocab_423",
        "kanji": "比べる",
        "furigana": "くらべる",
        "meaning": "so sánh",
        "example": "東京と大阪の面積を比べる",
        "unit": "Unit 6",
        "example_vi": "So sánh khu vực Tokyo và Osaka"
    },
    {
        "id": "vocab_424",
        "kanji": "似合う",
        "furigana": "にあう",
        "meaning": "để phù hợp",
        "example": "彼女は着物が良く似合う",
        "unit": "Unit 6",
        "example_vi": "Cô ấy trông thật đẹp trong bộ kimono"
    },
    {
        "id": "vocab_425",
        "kanji": "似る",
        "furigana": "にる",
        "meaning": "giống, giống",
        "example": "彼女は母親に良く似ている",
        "unit": "Unit 6",
        "example_vi": "Cô ấy trông rất giống mẹ"
    },
    {
        "id": "vocab_426",
        "kanji": "似せる",
        "furigana": "にせる",
        "meaning": "sao chép, giả mạo",
        "example": "アイドルに髪型を似せる",
        "unit": "Unit 6",
        "example_vi": "Cô nàng có kiểu tóc giống thần tượng"
    },
    {
        "id": "vocab_427",
        "kanji": "分かれる",
        "furigana": "わかれる",
        "meaning": "chia, tách, phần",
        "example": "トイレは男性用と女性用に分かれている",
        "unit": "Unit 6",
        "example_vi": "Nhà vệ sinh được chia thành nam và nữ"
    },
    {
        "id": "vocab_428",
        "kanji": "分ける",
        "furigana": "わける",
        "meaning": "chia. tách, sắp xếp",
        "example": "財産を三人の子供に分ける",
        "unit": "Unit 6",
        "example_vi": "Chia tài sản cho ba người con"
    },
    {
        "id": "vocab_429",
        "kanji": "足す",
        "furigana": "たす",
        "meaning": "thêm, thêm",
        "example": "味が薄かったので、塩を足した",
        "unit": "Unit 6",
        "example_vi": "Hương vị nhạt nhẽo nên tôi thêm muối"
    },
    {
        "id": "vocab_430",
        "kanji": "引く",
        "furigana": "ひく",
        "meaning": "kéo, kéo, thu hút (chú ý), vẽ (đường)",
        "example": "このドアは押すのではなく、引いて開けるんです",
        "unit": "Unit 6",
        "example_vi": "Cửa này mở bằng cách kéo chứ không phải đẩy"
    },
    {
        "id": "vocab_431",
        "kanji": "増える",
        "furigana": "ふえる",
        "meaning": "tăng,;thêm",
        "example": "貯金が増える",
        "unit": "Unit 6",
        "example_vi": "Tiết kiệm tăng"
    },
    {
        "id": "vocab_432",
        "kanji": "増やす",
        "furigana": "ふやす",
        "meaning": "tăng, nhân",
        "example": "貯金を増やす",
        "unit": "Unit 6",
        "example_vi": "Tiết kiệm tăng"
    },
    {
        "id": "vocab_433",
        "kanji": "減る",
        "furigana": "へる",
        "meaning": "giảm đi, co lại, mòn đi",
        "example": "貯金が減る",
        "unit": "Unit 6",
        "example_vi": "Tiết kiệm giảm"
    },
    {
        "id": "vocab_434",
        "kanji": "減らす",
        "furigana": "へらす",
        "meaning": "giảm, giảm, giảm",
        "example": "貯金を減らす",
        "unit": "Unit 6",
        "example_vi": "Tiết kiệm giảm"
    },
    {
        "id": "vocab_435",
        "kanji": "変わる",
        "furigana": "かわる",
        "meaning": "thay đổi, khác biệt<br><br>",
        "example": "季節が変わる",
        "unit": "Unit 6",
        "example_vi": "Các mùa thay đổi"
    },
    {
        "id": "vocab_436",
        "kanji": "変える",
        "furigana": "かえる",
        "meaning": "thay đổi, thay đổi",
        "example": "髪型を変える",
        "unit": "Unit 6",
        "example_vi": "Thay đổi kiểu tóc của bạn"
    },
    {
        "id": "vocab_437",
        "kanji": "代わる／替わる／換わる",
        "furigana": "かわる",
        "meaning": "thay thế, thay thế, thay thế",
        "example": "四月に店長が変わった",
        "unit": "Unit 6",
        "example_vi": "Quản lý cửa hàng thay đổi vào tháng 4"
    },
    {
        "id": "vocab_438",
        "kanji": "代える／替える／換える",
        "furigana": "かえる",
        "meaning": "thay đổi (cái này cho cái khác), thay thế",
        "example": "千円札を百円玉に変えてもらった",
        "unit": "Unit 6",
        "example_vi": "Tôi đã đổi tờ 1.000 yên thành đồng 100 yên"
    },
    {
        "id": "vocab_439",
        "kanji": "返る",
        "furigana": "かえる",
        "meaning": "trở lại (với cái gì đó), được trả lại",
        "example": "友達に貸したお金が返ってきた",
        "unit": "Unit 6",
        "example_vi": "Tôi đã lấy lại được số tiền tôi cho bạn bè vay"
    },
    {
        "id": "vocab_440",
        "kanji": "返す",
        "furigana": "かえす",
        "meaning": "trả lại, trả lại",
        "example": "この本は二週間以内に図書館に返さなければならない",
        "unit": "Unit 6",
        "example_vi": "Cuốn sách này phải được trả lại thư viện trong vòng hai tuần"
    },
    {
        "id": "vocab_441",
        "kanji": "譲る",
        "furigana": "ゆずる",
        "meaning": "cho, chuyển nhượng, nhượng lại (quyền, địa điểm, cách thức)",
        "example": "電車の中で、お年寄りに席を譲った",
        "unit": "Unit 6",
        "example_vi": "Anh nhường chỗ cho một cụ già trên tàu"
    },
    {
        "id": "vocab_442",
        "kanji": "助かる",
        "furigana": "たすかる",
        "meaning": "trốn thoát",
        "example": "飛行機が落ちたが、三人が助かった",
        "unit": "Unit 6",
        "example_vi": "Máy bay rơi nhưng ba người sống sót"
    },
    {
        "id": "vocab_443",
        "kanji": "助ける",
        "furigana": "たすける",
        "meaning": "lưu",
        "example": "川に落ちた子供を助けた",
        "unit": "Unit 6",
        "example_vi": "Anh cứu một đứa trẻ bị rơi xuống sông"
    },
    {
        "id": "vocab_444",
        "kanji": "いじめる",
        "furigana": "いじめる",
        "meaning": "dằn vặt, chế nhạo",
        "example": "弟を苛める",
        "unit": "Unit 6",
        "example_vi": "Anh bắt nạt em trai mình"
    },
    {
        "id": "vocab_445",
        "kanji": "だます",
        "furigana": "だます",
        "meaning": "lừa dối. để mê hoặc, để bình tĩnh",
        "example": "彼は独身だと騙して、五人の女性と付き合っていた",
        "unit": "Unit 7",
        "example_vi": "Anh ta tự lừa mình rằng mình độc thân và đang hẹn hò với 5 người phụ nữ"
    },
    {
        "id": "vocab_446",
        "kanji": "盗む",
        "furigana": "ぬすむ",
        "meaning": "ăn trộm, ăn trộm",
        "example": "留守中に泥棒に入られて、お金を盗まれてしまった",
        "unit": "Unit 7",
        "example_vi": "Anh ta bị cướp khi đi vắng và bị lấy trộm tiền"
    },
    {
        "id": "vocab_447",
        "kanji": "刺さる",
        "furigana": "ささる",
        "meaning": "dính vào, bị mắc kẹt",
        "example": "指に棘が刺さって、痛い",
        "unit": "Unit 7",
        "example_vi": "Anh ấy bị một chiếc gai đâm vào ngón tay và rất đau"
    },
    {
        "id": "vocab_448",
        "kanji": "刺す",
        "furigana": "さす",
        "meaning": "dính, dính, châm, khâu",
        "example": "指に棘を刺してしまった",
        "unit": "Unit 7",
        "example_vi": "Anh ta bị một cái gai đâm vào ngón tay"
    },
    {
        "id": "vocab_449",
        "kanji": "殺す",
        "furigana": "ころす",
        "meaning": "giết",
        "example": "ゴキブリをスリッパで叩いて、殺した",
        "unit": "Unit 7",
        "example_vi": "Anh ta dùng dép tông chết một con gián"
    },
    {
        "id": "vocab_450",
        "kanji": "隠れる",
        "furigana": "かくれる",
        "meaning": "trốn, trốn<br><br>",
        "example": "逃げた犯人は空き家に隠れていた",
        "unit": "Unit 7",
        "example_vi": "Tên tội phạm bỏ trốn đang trốn trong căn nhà trống"
    },
    {
        "id": "vocab_451",
        "kanji": "隠す",
        "furigana": "かくす",
        "meaning": "ẩn nấp, che giấu",
        "example": "お金を引き出しの奥に隠した",
        "unit": "Unit 7",
        "example_vi": "Anh ta giấu tiền sau ngăn kéo"
    },
    {
        "id": "vocab_452",
        "kanji": "埋まる",
        "furigana": "うまる",
        "meaning": "được đóng lại, được lấp đầy",
        "example": "山が崩れて家が埋まってしまった",
        "unit": "Unit 7",
        "example_vi": "Núi sập chôn vùi nhà"
    },
    {
        "id": "vocab_453",
        "kanji": "埋める",
        "furigana": "うめる",
        "meaning": "chôn, chôn, lấp đầy<br><br>",
        "example": "穴を掘って、ごみを埋めた",
        "unit": "Unit 7",
        "example_vi": "Anh đào hố chôn rác"
    },
    {
        "id": "vocab_454",
        "kanji": "囲む",
        "furigana": "かこむ",
        "meaning": "bao vây, bao vây",
        "example": "テーブルを囲んで、座る",
        "unit": "Unit 7",
        "example_vi": "Họ ngồi quanh một cái bàn"
    },
    {
        "id": "vocab_455",
        "kanji": "詰まる",
        "furigana": "つまる",
        "meaning": "trở nên đầy đủ, nhồi nhét, trở nên ngắn hơn",
        "example": "かばんにたくさん荷物が詰まっていて、重い",
        "unit": "Unit 7",
        "example_vi": "Chiếc túi chứa đầy đồ đạc và nặng nề"
    },
    {
        "id": "vocab_456",
        "kanji": "詰める",
        "furigana": "つめる",
        "meaning": "thứ, điền, cắt",
        "example": "かばんに荷物を詰める",
        "unit": "Unit 7",
        "example_vi": "Đóng gói đồ đạc vào túi"
    },
    {
        "id": "vocab_457",
        "kanji": "開く",
        "furigana": "ひらく",
        "meaning": "mở, tiết lộ, thành lập",
        "example": "ドアが開く",
        "unit": "Unit 7",
        "example_vi": "Cánh cửa mở"
    },
    {
        "id": "vocab_458",
        "kanji": "閉じる",
        "furigana": "とじる",
        "meaning": "đóng, khóa",
        "example": "エレベーターのドアが閉じた",
        "unit": "Unit 7",
        "example_vi": "Cửa thang máy đóng lại"
    },
    {
        "id": "vocab_459",
        "kanji": "飛ぶ",
        "furigana": "とぶ",
        "meaning": "bay, lao, nhảy",
        "example": "鳥が空を飛んでいる",
        "unit": "Unit 7",
        "example_vi": "Chim đang bay trên bầu trời"
    },
    {
        "id": "vocab_460",
        "kanji": "飛ばす",
        "furigana": "とばす",
        "meaning": "để (trong không khí), ném lên, thả ra",
        "example": "紙飛行機を飛ばす",
        "unit": "Unit 7",
        "example_vi": "Họ đang lái máy bay giấy"
    },
    {
        "id": "vocab_461",
        "kanji": "振る",
        "furigana": "ふる",
        "meaning": "vẫy tay, lắc, ném, từ chối",
        "example": "手を振る",
        "unit": "Unit 7",
        "example_vi": "Vẫy tay"
    },
    {
        "id": "vocab_462",
        "kanji": "めくる",
        "furigana": "めくる",
        "meaning": "lướt qua, gỡ bỏ, xé toạc",
        "example": "カードを捲る",
        "unit": "Unit 7",
        "example_vi": "Lật bài"
    },
    {
        "id": "vocab_463",
        "kanji": "見かける",
        "furigana": "みかける",
        "meaning": "xem, thông báo",
        "example": "街で偶然、昔の友達を見かけた",
        "unit": "Unit 7",
        "example_vi": "Tình cờ gặp lại người bạn cũ trên phố"
    },
    {
        "id": "vocab_464",
        "kanji": "確かめる",
        "furigana": "たしかめる",
        "meaning": "để chắc chắn, để làm rõ",
        "example": "ファックスが届いたかどうか、相手に電話して確かめた",
        "unit": "Unit 7",
        "example_vi": "Tôi gọi cho người đó để xem fax đã đến chưa"
    },
    {
        "id": "vocab_465",
        "kanji": "試す",
        "furigana": "ためす",
        "meaning": "kiểm tra, kiểm tra",
        "example": "洋服が似合うかどうか、着て試してみた",
        "unit": "Unit 7",
        "example_vi": "Tôi thử quần áo để xem chúng có hợp với tôi không"
    },
    {
        "id": "vocab_466",
        "kanji": "繰り返す",
        "furigana": "くりかえす",
        "meaning": "lặp lại, làm lại",
        "example": "同じ失敗を繰り返してはいけません",
        "unit": "Unit 7",
        "example_vi": "Tôi không nên phạm sai lầm tương tự nữa"
    },
    {
        "id": "vocab_467",
        "kanji": "訳す",
        "furigana": "やくす",
        "meaning": "dịch",
        "example": "英語を日本語に訳す",
        "unit": "Unit 7",
        "example_vi": "Dịch tiếng Anh sang tiếng Nhật"
    },
    {
        "id": "vocab_468",
        "kanji": "行う",
        "furigana": "おこなう",
        "meaning": "giữ (sự kiện)",
        "example": "試験を行う",
        "unit": "Unit 7",
        "example_vi": "Làm bài kiểm tra"
    },
    {
        "id": "vocab_469",
        "kanji": "間違う",
        "furigana": "まちがう",
        "meaning": "bị sai",
        "example": "この計算は間違っている",
        "unit": "Unit 7",
        "example_vi": "Tính toán này sai"
    },
    {
        "id": "vocab_470",
        "kanji": "間違える",
        "furigana": "まちがえる",
        "meaning": "bị sai",
        "example": "テストの答えを間違えた",
        "unit": "Unit 7",
        "example_vi": "Tôi đã trả lời sai trong bài kiểm tra"
    },
    {
        "id": "vocab_471",
        "kanji": "許す",
        "furigana": "ゆるす",
        "meaning": "cho phép, cho phép, tha thứ. xin lỗi",
        "example": "酷いことを言われて、喧嘩になったが、相手が謝ったので許してあげた",
        "unit": "Unit 7",
        "example_vi": "Có người nói lời cay nghiệt với tôi và chúng tôi xảy ra cãi vã nhưng người kia đã xin lỗi nên tôi đã tha thứ cho họ"
    },
    {
        "id": "vocab_472",
        "kanji": "慣れる",
        "furigana": "なれる",
        "meaning": "làm quen, làm quen, làm quen",
        "example": "日本へ来て半年経って、生活にも慣れた",
        "unit": "Unit 7",
        "example_vi": "Đến Nhật được nửa năm rồi, tôi cũng quen dần với cuộc sống"
    },
    {
        "id": "vocab_473",
        "kanji": "慣らす",
        "furigana": "ならす",
        "meaning": "làm quen",
        "example": "準備運動をして、体を慣らしてから、プールに入ったほうがいい",
        "unit": "Unit 7",
        "example_vi": "Nên khởi động, làm quen với cơ thể rồi xuống hồ bơi"
    },
    {
        "id": "vocab_474",
        "kanji": "立つ",
        "furigana": "たつ",
        "meaning": "đứng lên, đứng lên, dựng lên",
        "example": "名前を呼ばれたら、立ってください",
        "unit": "Unit 7",
        "example_vi": "Hãy đứng lên khi tên bạn được gọi"
    },
    {
        "id": "vocab_475",
        "kanji": "立てる",
        "furigana": "たてる",
        "meaning": "đặt, xây dựng, dựng lên",
        "example": "屋根の上にアンテナを立てる",
        "unit": "Unit 7",
        "example_vi": "Lắp ăng-ten trên mái nhà"
    },
    {
        "id": "vocab_476",
        "kanji": "建つ",
        "furigana": "たつ",
        "meaning": "được dựng lên, vươn lên, được thành lập",
        "example": "家の前に大きなマンションが建った",
        "unit": "Unit 7",
        "example_vi": "Một chung cư lớn được xây dựng trước nhà bạn"
    },
    {
        "id": "vocab_477",
        "kanji": "建てる",
        "furigana": "たてる",
        "meaning": "xây dựng, dựng lên, tìm thấy",
        "example": "都心に家を建てるのは大変だ",
        "unit": "Unit 7",
        "example_vi": "Xây nhà ở trung tâm thành phố khó"
    },
    {
        "id": "vocab_478",
        "kanji": "育つ",
        "furigana": "そだつ",
        "meaning": "trưởng thành, được giáo dục",
        "example": "雨が多い年は、米が良く育つ",
        "unit": "Unit 7",
        "example_vi": "Lúa sinh trưởng tốt trong những năm mưa nhiều"
    },
    {
        "id": "vocab_479",
        "kanji": "育てる",
        "furigana": "そだてる",
        "meaning": "giáo dục, nâng cao",
        "example": "母は五人の子供を育てた",
        "unit": "Unit 7",
        "example_vi": "Mẹ tôi nuôi năm người con"
    },
    {
        "id": "vocab_480",
        "kanji": "生える",
        "furigana": "はえる",
        "meaning": "mọc (về cây, răng, móng, tóc)",
        "example": "髪が生える",
        "unit": "Unit 7",
        "example_vi": "Tóc mọc"
    },
    {
        "id": "vocab_481",
        "kanji": "生やす",
        "furigana": "はやす",
        "meaning": "buông, đeo (râu, ria mép)",
        "example": "髭を生やす",
        "unit": "Unit 7",
        "example_vi": "Nuôi râu"
    },
    {
        "id": "vocab_482",
        "kanji": "汚れる",
        "furigana": "よごれる",
        "meaning": "bị bẩn",
        "example": "空気の汚れた所には住みたくない",
        "unit": "Unit 7",
        "example_vi": "Tôi không muốn sống ở nơi không khí bị ô nhiễm"
    },
    {
        "id": "vocab_483",
        "kanji": "汚す",
        "furigana": "よごす",
        "meaning": "bị bẩn",
        "example": "泥遊びをして、服を汚した",
        "unit": "Unit 7",
        "example_vi": "Tôi chơi bùn và làm bẩn quần áo"
    },
    {
        "id": "vocab_484",
        "kanji": "壊れる",
        "furigana": "こわれる",
        "meaning": "phá vỡ, phá vỡ, sụp đổ",
        "example": "家が壊れる",
        "unit": "Unit 7",
        "example_vi": "Nhà tôi bị phá hủy"
    },
    {
        "id": "vocab_485",
        "kanji": "壊す",
        "furigana": "こわす",
        "meaning": "phá hủy, bẻ gãy, bẻ (thành nhiều phần)",
        "example": "家を壊す",
        "unit": "Unit 7",
        "example_vi": "Nhà tôi bị phá hủy"
    },
    {
        "id": "vocab_486",
        "kanji": "割れる",
        "furigana": "われる",
        "meaning": "vỡ, vỡ, nứt, tách",
        "example": "ガラスが割れる",
        "unit": "Unit 7",
        "example_vi": "Kính bị vỡ"
    },
    {
        "id": "vocab_487",
        "kanji": "割る",
        "furigana": "わる",
        "meaning": "chia, chia, bẻ, chia",
        "example": "ガラスを割る",
        "unit": "Unit 7",
        "example_vi": "Kính bị vỡ"
    },
    {
        "id": "vocab_488",
        "kanji": "折れる",
        "furigana": "おれる",
        "meaning": "bẻ, gấp",
        "example": "強い風で枝が折れた",
        "unit": "Unit 7",
        "example_vi": "Gió mạnh làm gãy cành"
    },
    {
        "id": "vocab_489",
        "kanji": "折る",
        "furigana": "おる",
        "meaning": "bẻ gãy, uốn cong",
        "example": "スキーをして、足の骨を折った",
        "unit": "Unit 7",
        "example_vi": "Tôi trượt tuyết và gãy chân"
    },
    {
        "id": "vocab_490",
        "kanji": "破れる",
        "furigana": "やぶれる",
        "meaning": "vỡ, xé, vỡ",
        "example": "紙が破れる",
        "unit": "Unit 7",
        "example_vi": "Giấy bị rách"
    },
    {
        "id": "vocab_491",
        "kanji": "破る",
        "furigana": "やぶる",
        "meaning": "phá vỡ, phá vỡ, xé",
        "example": "紙を破る",
        "unit": "Unit 7",
        "example_vi": "Con đường quanh co"
    },
    {
        "id": "vocab_492",
        "kanji": "曲がる",
        "furigana": "まがる",
        "meaning": "uốn cong",
        "example": "曲がった道",
        "unit": "Unit 7",
        "example_vi": "Dây bị cong"
    },
    {
        "id": "vocab_493",
        "kanji": "曲げる",
        "furigana": "まげる",
        "meaning": "uốn cong, uốn cong, uốn cong",
        "example": "針金を曲げる",
        "unit": "Unit 7",
        "example_vi": "Một nút bật ra"
    },
    {
        "id": "vocab_494",
        "kanji": "外れる",
        "furigana": "はずれる",
        "meaning": "nhảy ra, trượt khỏi, trượt, thất bại",
        "example": "ボタンが外れる",
        "unit": "Unit 7",
        "example_vi": "Tôi cho con chơi xích đu"
    },
    {
        "id": "vocab_495",
        "kanji": "外す",
        "furigana": "はずす",
        "meaning": "tháo móc, ngắt kết nối, tháo, buông",
        "example": "メガネを外す",
        "unit": "Unit 7",
        "example_vi": "Con sông lớn chảy qua trung tâm thị trấn"
    },
    {
        "id": "vocab_496",
        "kanji": "揺れる",
        "furigana": "ゆれる",
        "meaning": "lắc lư, dao động, run rẩy",
        "example": "風で木の葉が揺れている",
        "unit": "Unit 7",
        "example_vi": "Đừng đổ nước bẩn xuống sông"
    },
    {
        "id": "vocab_497",
        "kanji": "揺らす",
        "furigana": "ゆらす",
        "meaning": "lắc, lắc lư, dao động",
        "example": "子供の乗ったブランコを揺らして遊ばせた",
        "unit": "Unit 7",
        "example_vi": "Tôi bị ướt dưới mưa và bị cảm lạnh"
    },
    {
        "id": "vocab_498",
        "kanji": "流れる",
        "furigana": "ながれる",
        "meaning": "dòng chảy, trôi nổi (theo dòng chảy)",
        "example": "町の中心を大きな川が流れている",
        "unit": "Unit 7",
        "example_vi": ""
    },
    {
        "id": "vocab_499",
        "kanji": "流す",
        "furigana": "ながす",
        "meaning": "buông tay (theo dòng chảy)",
        "example": "汚れた水を川に流してはいけない",
        "unit": "Unit 7",
        "example_vi": ""
    },
    {
        "id": "vocab_500",
        "kanji": "濡れる",
        "furigana": "ぬれる",
        "meaning": "bị ướt",
        "example": "雨に濡れて風邪を引いた",
        "unit": "Unit 7",
        "example_vi": ""
    },
    {
        "id": "vocab_501",
        "kanji": "濡らす",
        "furigana": "ぬらす",
        "meaning": "ướt",
        "example": "水を零して、服を濡らしてしまった",
        "unit": "Unit 7",
        "example_vi": "Tôi làm đổ nước, ướt quần áo"
    },
    {
        "id": "vocab_502",
        "kanji": "迷う",
        "furigana": "まよう",
        "meaning": "nghi ngờ, nhầm lẫn",
        "example": "道に迷う",
        "unit": "Unit 7",
        "example_vi": "Tôi bị lạc"
    },
    {
        "id": "vocab_503",
        "kanji": "悩む",
        "furigana": "なやむ",
        "meaning": "chịu đựng, chịu đựng",
        "example": "就職するか、進学するか、悩んでいる",
        "unit": "Unit 7",
        "example_vi": "Tôi đang lo lắng không biết nên đi xin việc hay đi học đại học"
    },
    {
        "id": "vocab_504",
        "kanji": "慌てる",
        "furigana": "あわてる",
        "meaning": "lo lắng, hồi hộp, ồn ào",
        "example": "学校に遅れそうになって、慌てて家を出た",
        "unit": "Unit 7",
        "example_vi": "Đi học muộn nên vội vã ra khỏi nhà"
    },
    {
        "id": "vocab_505",
        "kanji": "覚める",
        "furigana": "さめる",
        "meaning": "thức dậy, tỉnh táo",
        "example": "昨夜は暑くて、夜中に何度も目が覚めた",
        "unit": "Unit 7",
        "example_vi": "Đêm qua trời nóng và tôi thức dậy nhiều lần trong đêm"
    },
    {
        "id": "vocab_506",
        "kanji": "覚ます",
        "furigana": "さます",
        "meaning": "thức dậy, tỉnh táo",
        "example": "目を覚ますと、もう十時だった",
        "unit": "Unit 7",
        "example_vi": "Khi tôi thức dậy thì đã mười giờ"
    },
    {
        "id": "vocab_507",
        "kanji": "眠る",
        "furigana": "ねむる",
        "meaning": "ngủ quên, ngủ",
        "example": "入試の前の日、緊張して良く眠れなかった",
        "unit": "Unit 7",
        "example_vi": "Một ngày trước kỳ thi tuyển sinh, tôi lo lắng và không thể ngủ ngon"
    },
    {
        "id": "vocab_508",
        "kanji": "祈る",
        "furigana": "いのる",
        "meaning": "cầu nguyện",
        "example": "家族の健康を神に祈った",
        "unit": "Unit 7",
        "example_vi": "Tôi cầu nguyện Chúa cho gia đình tôi được khỏe mạnh"
    },
    {
        "id": "vocab_509",
        "kanji": "祝う",
        "furigana": "いわう",
        "meaning": "cầu nguyện ăn mừng",
        "example": "新年を祝って、乾杯した",
        "unit": "Unit 7",
        "example_vi": "Chúng tôi chúc mừng năm mới"
    },
    {
        "id": "vocab_510",
        "kanji": "感じる",
        "furigana": "かんじる",
        "meaning": "cảm thấy",
        "example": "寒さを感じる",
        "unit": "Unit 7",
        "example_vi": "Tôi cảm thấy lạnh"
    },
    {
        "id": "vocab_511",
        "kanji": "クラスメート",
        "furigana": "クラスメート",
        "meaning": "bạn cùng lớp",
        "example": "",
        "unit": "Unit 7"
    },
    {
        "id": "vocab_512",
        "kanji": "グループ",
        "furigana": "グループ",
        "meaning": "nhóm",
        "example": "",
        "unit": "Unit 7"
    },
    {
        "id": "vocab_513",
        "kanji": "チーム",
        "furigana": "チーム",
        "meaning": "đội",
        "example": "",
        "unit": "Unit 7"
    },
    {
        "id": "vocab_514",
        "kanji": "プロフェッショナル／プロ",
        "furigana": "プロフェッショナル／プロ",
        "meaning": "chuyên nghiệp",
        "example": "",
        "unit": "Unit 7"
    },
    {
        "id": "vocab_515",
        "kanji": "アマチュア",
        "furigana": "アマチュア",
        "meaning": "（アマ）",
        "example": "",
        "unit": "Unit 7"
    },
    {
        "id": "vocab_516",
        "kanji": "トレーニング",
        "furigana": "トレーニング",
        "meaning": "đào tạo",
        "example": "",
        "unit": "Unit 7"
    },
    {
        "id": "vocab_517",
        "kanji": "マッサージ",
        "furigana": "マッサージ",
        "meaning": "xoa bóp",
        "example": "",
        "unit": "Unit 7"
    },
    {
        "id": "vocab_518",
        "kanji": "アドバイス",
        "furigana": "アドバイス",
        "meaning": "lời khuyên",
        "example": "",
        "unit": "Unit 7"
    },
    {
        "id": "vocab_519",
        "kanji": "アイデア／アイディア",
        "furigana": "アイデア／アイディア",
        "meaning": "ý tưởng",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_520",
        "kanji": "トップ",
        "furigana": "トップ",
        "meaning": "đánh giá, hàng đầu",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_521",
        "kanji": "スピード",
        "furigana": "スピード",
        "meaning": "tốc độ",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_522",
        "kanji": "ラッシュ",
        "furigana": "ラッシュ",
        "meaning": "hối hả và nhộn nhịp",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_523",
        "kanji": "バイク",
        "furigana": "バイク",
        "meaning": "xe gắn máy",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_524",
        "kanji": "ヘルメット",
        "furigana": "ヘルメット",
        "meaning": "mũ bảo hiểm",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_525",
        "kanji": "コンタクトレンズ／コンタクト",
        "furigana": "コンタクトレンズ／コンタクト",
        "meaning": "kính áp tròng",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_526",
        "kanji": "ガラス",
        "furigana": "ガラス",
        "meaning": "kính",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_527",
        "kanji": "プラスチック",
        "furigana": "プラスチック",
        "meaning": "nhựa, nhựa",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_528",
        "kanji": "ベランダ",
        "furigana": "ベランダ",
        "meaning": "ban công",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_529",
        "kanji": "ペット",
        "furigana": "ペット",
        "meaning": "thú cưng, thú cưng",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_530",
        "kanji": "ベンチ",
        "furigana": "ベンチ",
        "meaning": "ghế dài, ghế dài",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_531",
        "kanji": "デザイン",
        "furigana": "デザイン",
        "meaning": "thiết kế",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_532",
        "kanji": "バーゲンセール",
        "furigana": "バーゲンセール",
        "meaning": "quà tặng",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_533",
        "kanji": "パート",
        "furigana": "パート",
        "meaning": "phần, bữa tiệc",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_534",
        "kanji": "コンビニエンスストア／コンビニ",
        "furigana": "コンビニエンスストア／コンビニ",
        "meaning": "cửa hàng nhỏ",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_535",
        "kanji": "レジ",
        "furigana": "レジ",
        "meaning": "máy tính tiền, nhân viên thu ngân",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_536",
        "kanji": "レシート",
        "furigana": "レシート",
        "meaning": "biên nhận",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_537",
        "kanji": "インスタント",
        "furigana": "インスタント",
        "meaning": "nấu ăn nhanh, tức thì",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_538",
        "kanji": "ファストフード",
        "furigana": "ファストフード",
        "meaning": "thức ăn nhanh",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_539",
        "kanji": "フルーツ",
        "furigana": "フルーツ",
        "meaning": "trái cây",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_540",
        "kanji": "デザート",
        "furigana": "デザート",
        "meaning": "món tráng miệng",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_541",
        "kanji": "インターネット",
        "furigana": "インターネット",
        "meaning": "internet",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_542",
        "kanji": "チャイム",
        "furigana": "チャイム",
        "meaning": "chuông, chuông, chuông cửa",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_543",
        "kanji": "アナウンス",
        "furigana": "アナウンス",
        "meaning": "phát thanh viên",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_544",
        "kanji": "メッセージ",
        "furigana": "メッセージ",
        "meaning": "tin nhắn",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_545",
        "kanji": "パンフレット",
        "furigana": "パンフレット",
        "meaning": "tập sách nhỏ, tờ rơi, bản cáo bạch",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_546",
        "kanji": "カード",
        "furigana": "カード",
        "meaning": "thẻ",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_547",
        "kanji": "インタビュー",
        "furigana": "インタビュー",
        "meaning": "phỏng vấn",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_548",
        "kanji": "アンケート",
        "furigana": "アンケート",
        "meaning": "câu hỏi, khảo sát",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_549",
        "kanji": "データ",
        "furigana": "データ",
        "meaning": "dữ liệu, thông tin",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_550",
        "kanji": "パーセント",
        "furigana": "パーセント",
        "meaning": "phần trăm",
        "example": "",
        "unit": "Unit 8"
    },
    {
        "id": "vocab_551",
        "kanji": "濃い",
        "furigana": "こい",
        "meaning": "dày, khỏe",
        "example": "色が濃い",
        "unit": "Unit 8",
        "example_vi": "Màu tối"
    },
    {
        "id": "vocab_552",
        "kanji": "薄い",
        "furigana": "うすい",
        "meaning": "mỏng, yếu, lỏng",
        "example": "薄い本",
        "unit": "Unit 8",
        "example_vi": "Sách mỏng"
    },
    {
        "id": "vocab_553",
        "kanji": "酸っぱい",
        "furigana": "すっぱい",
        "meaning": "chua",
        "example": "レモンは酸っぱい",
        "unit": "Unit 8",
        "example_vi": "chanh có vị chua"
    },
    {
        "id": "vocab_554",
        "kanji": "臭い",
        "furigana": "くさい",
        "meaning": "hôi hám, hôi hám",
        "example": "納豆は臭いから、嫌いだという日本人も多い",
        "unit": "Unit 8",
        "example_vi": "Nhiều người Nhật nói rằng họ không thích natto vì nó có mùi hôi"
    },
    {
        "id": "vocab_555",
        "kanji": "おかしい",
        "furigana": "おかしい",
        "meaning": "hài hước, lạ lùng, tuyệt vời",
        "example": "山本君は授業中にいつもおかしいことを言って、皆を笑わせる",
        "unit": "Unit 8",
        "example_vi": "Yamamoto-kun luôn nói những điều hài hước trong lớp và khiến mọi người cười"
    },
    {
        "id": "vocab_556",
        "kanji": "かっこいい",
        "furigana": "かっこいい",
        "meaning": "tuyệt vời",
        "example": "あの先輩はかっこいいので、人気がある",
        "unit": "Unit 8",
        "example_vi": "Tiền bối đó nổi tiếng vì ngầu"
    },
    {
        "id": "vocab_557",
        "kanji": "うまい",
        "furigana": "うまい",
        "meaning": "khéo léo",
        "example": "母は料理がうまい",
        "unit": "Unit 8",
        "example_vi": "Mẹ tôi là một đầu bếp giỏi"
    },
    {
        "id": "vocab_558",
        "kanji": "親しい",
        "furigana": "したしい",
        "meaning": "thân thiện, gần gũi, chân thành",
        "example": "私は田中さんと親しい",
        "unit": "Unit 8",
        "example_vi": "Tôi thân với anh Tanaka"
    },
    {
        "id": "vocab_559",
        "kanji": "詳しい",
        "furigana": "くわしい",
        "meaning": "chi tiết",
        "example": "この地図はとても詳しい",
        "unit": "Unit 8",
        "example_vi": "Bản đồ này rất chi tiết"
    },
    {
        "id": "vocab_560",
        "kanji": "細かい",
        "furigana": "こまかい",
        "meaning": "nhỏ bé, tinh tế, tỉ mỉ, keo kiệt",
        "example": "新聞の字は細かくて、お年寄りには読みづらい",
        "unit": "Unit 8",
        "example_vi": "Chữ in trên báo nhỏ, người lớn tuổi khó đọc."
    },
    {
        "id": "vocab_561",
        "kanji": "浅い",
        "furigana": "あさい",
        "meaning": "nông cạn, hời hợt",
        "example": "この川は浅いので、子供が泳いでも危なくない",
        "unit": "Unit 8",
        "example_vi": "Con sông này nông nên trẻ em có thể bơi vào an toàn."
    },
    {
        "id": "vocab_562",
        "kanji": "固い／硬い",
        "furigana": "かたい",
        "meaning": "cứng rắn, mạnh mẽ, chặt chẽ",
        "example": "このパンはとても固い",
        "unit": "Unit 8",
        "example_vi": "Bánh mì này rất cứng."
    },
    {
        "id": "vocab_563",
        "kanji": "ぬるい",
        "furigana": "ぬるい",
        "meaning": "nguội lạnh, lạnh lùng, trịch thượng",
        "example": "温いコーヒーは美味しくない",
        "unit": "Unit 8",
        "example_vi": "Cà phê nóng không ngon."
    },
    {
        "id": "vocab_564",
        "kanji": "まぶしい",
        "furigana": "まぶしい",
        "meaning": "rực rỡ, rất tươi sáng",
        "example": "カーテンを開けたら、太陽が眩しかった",
        "unit": "Unit 8",
        "example_vi": "Khi tôi mở rèm ra, mặt trời đang chiếu sáng."
    },
    {
        "id": "vocab_565",
        "kanji": "蒸し暑い",
        "furigana": "むしあつい",
        "meaning": "ngột ngạt, oi bức",
        "example": "日本の夏は蒸し暑い",
        "unit": "Unit 8",
        "example_vi": "Mùa hè Nhật Bản nóng và ẩm."
    },
    {
        "id": "vocab_566",
        "kanji": "清潔な",
        "furigana": "せいけつな",
        "meaning": "sạch sẽ",
        "example": "清潔な服を身につける",
        "unit": "Unit 8",
        "example_vi": "Mặc quần áo sạch sẽ. Điều một đứa trẻ cần là tình yêu thương ấm áp của cha mẹ"
    },
    {
        "id": "vocab_567",
        "kanji": "新鮮な",
        "furigana": "しんせんな",
        "meaning": "tươi, mới",
        "example": "新鮮な魚は美味しい",
        "unit": "Unit 8",
        "example_vi": "Thật lãng phí khi vứt bỏ quần áo lỗi thời nhưng vẫn mặc được"
    },
    {
        "id": "vocab_568",
        "kanji": "豊かな",
        "furigana": "ゆたかな",
        "meaning": "dồi dào, phong phú",
        "example": "豊かな資源",
        "unit": "Unit 8",
        "example_vi": "Cơn bão hôm qua thật khủng khiếp"
    },
    {
        "id": "vocab_569",
        "kanji": "立派な",
        "furigana": "りっぱな",
        "meaning": "tráng lệ",
        "example": "立派な人",
        "unit": "Unit 8",
        "example_vi": "Thật kinh khủng khi một người lại bị nhiều người bắt nạt"
    },
    {
        "id": "vocab_570",
        "kanji": "正確な",
        "furigana": "せいかくな",
        "meaning": "đúng, trung thực, chính xác, gọn gàng",
        "example": "正確な数は分からないが、この観客は五千人ぐらいだろう",
        "unit": "Unit 8",
        "example_vi": "Trời mưa to quá"
    },
    {
        "id": "vocab_571",
        "kanji": "確かな",
        "furigana": "たしかな",
        "meaning": "đáng tin cậy, đáng tin cậy, bền bỉ",
        "example": "新聞は確かな事実だけを伝えなければならない",
        "unit": "Unit 8",
        "example_vi": "Anh trai tôi có ngoại hình và giọng nói giống hệt bố tôi"
    },
    {
        "id": "vocab_572",
        "kanji": "重要な",
        "furigana": "じゅうような",
        "meaning": "quan trọng, nghiêm túc",
        "example": "今日は午後から重要な会議がある",
        "unit": "Unit 8",
        "example_vi": "Răng của tôi đột nhiên bắt đầu đau"
    },
    {
        "id": "vocab_573",
        "kanji": "必要な",
        "furigana": "ひつような",
        "meaning": "cần thiết",
        "example": "子供に必要なのは、親の温かい愛情だ",
        "unit": "Unit 8",
        "example_vi": "Tôi đang tìm gia sư nhưng không có nhiều người phù hợp."
    },
    {
        "id": "vocab_574",
        "kanji": "もったいない",
        "furigana": "もったいない",
        "meaning": "lãng phí, không cẩn thận, không tốt, không tốt",
        "example": "流行遅れでも、まだ着られる服を捨てるのは勿体ない",
        "unit": "Unit 8",
        "example_vi": ""
    },
    {
        "id": "vocab_575",
        "kanji": "すごい",
        "furigana": "すごい",
        "meaning": "ngầu, ngầu",
        "example": "昨日の台風はすごかった",
        "unit": "Unit 8",
        "example_vi": ""
    },
    {
        "id": "vocab_576",
        "kanji": "ひどい",
        "furigana": "ひどい",
        "meaning": "tàn nhẫn, khủng khiếp, không công bằng",
        "example": "一人を大勢で苛めるとは酷い",
        "unit": "Unit 8",
        "example_vi": ""
    },
    {
        "id": "vocab_577",
        "kanji": "激しい",
        "furigana": "はげしい",
        "meaning": "mạnh mẽ, giận dữ",
        "example": "雨が激しい",
        "unit": "Unit 8",
        "example_vi": ""
    },
    {
        "id": "vocab_578",
        "kanji": "そっくりな",
        "furigana": "そっくりな",
        "meaning": "nguyên trạng",
        "example": "兄は父に顔も声もそっくりだ",
        "unit": "Unit 8",
        "example_vi": ""
    },
    {
        "id": "vocab_579",
        "kanji": "急な",
        "furigana": "きゅうな",
        "meaning": "khẩn cấp, đột ngột",
        "example": "急に歯が痛みだした",
        "unit": "Unit 8",
        "example_vi": ""
    },
    {
        "id": "vocab_580",
        "kanji": "適当な",
        "furigana": "てきとうな",
        "meaning": "phù hợp, thích hợp",
        "example": "家庭教師を探しているが、適当な人が中々いない",
        "unit": "Unit 8",
        "example_vi": ""
    },
    {
        "id": "vocab_581",
        "kanji": "特別な",
        "furigana": "とくべつな",
        "meaning": "đặc biệt, đặc biệt, đặc biệt",
        "example": "彼女には音楽家としての特別な才能がある",
        "unit": "Unit 8",
        "example_vi": "Cô ấy có tài năng đặc biệt là một nhạc sĩ"
    },
    {
        "id": "vocab_582",
        "kanji": "完全な",
        "furigana": "かんぜんな",
        "meaning": "hoàn hảo, trọn vẹn, trọn vẹn, trọn vẹn",
        "example": "土の中から古代の器が完全な形で出てきた",
        "unit": "Unit 8",
        "example_vi": "Một chiếc bình cổ xưa đã nổi lên từ lòng đất ở hình dạng hoàn hảo"
    },
    {
        "id": "vocab_583",
        "kanji": "盛んな",
        "furigana": "さかんな",
        "meaning": "thịnh vượng, thành công, mạnh mẽ, tràn đầy năng lượng",
        "example": "私の故郷は農業が盛んだ",
        "unit": "Unit 8",
        "example_vi": "Quê hương tôi có ngành nông nghiệp phát triển mạnh"
    },
    {
        "id": "vocab_584",
        "kanji": "様々な",
        "furigana": "さまざまな",
        "meaning": "đủ loại, đủ loại",
        "example": "インタネットから様々な情報が得られる",
        "unit": "Unit 8",
        "example_vi": "Nhiều thông tin khác nhau có thể được lấy từ Internet"
    },
    {
        "id": "vocab_585",
        "kanji": "可能な",
        "furigana": "かのうな",
        "meaning": "có thể",
        "example": "科学が進歩して、今まで不可能だったことも可能になった",
        "unit": "Unit 8",
        "example_vi": "Những tiến bộ trong khoa học đã biến những điều mà trước đây không thể thành có thể"
    },
    {
        "id": "vocab_586",
        "kanji": "不可能な",
        "furigana": "ふかのうな",
        "meaning": "có thể không thể",
        "example": "不可能な計画なら、始めから立てないほうがいい",
        "unit": "Unit 8",
        "example_vi": "Nếu bạn có một kế hoạch bất khả thi, tốt hơn hết là đừng bắt đầu lại từ đầu"
    },
    {
        "id": "vocab_587",
        "kanji": "基本的な",
        "furigana": "きほんてきな",
        "meaning": "cơ bản, tiêu chuẩn",
        "example": "パソコンの基本的な使い方はマニュアルに書いてある",
        "unit": "Unit 8",
        "example_vi": "Những điều cơ bản về cách sử dụng máy tính được viết trong sách hướng dẫn"
    },
    {
        "id": "vocab_588",
        "kanji": "国際的な",
        "furigana": "こくさいてきな",
        "meaning": "quốc tế, thế giới",
        "example": "東京で国際的なアニメフェスティバルが開かれた",
        "unit": "Unit 8",
        "example_vi": "Một lễ hội anime quốc tế được tổ chức tại Tokyo"
    },
    {
        "id": "vocab_589",
        "kanji": "ばらばらな",
        "furigana": "ばらばらな",
        "meaning": "rải rác",
        "example": "皆の意見がばらばらで、中々結論が出ない",
        "unit": "Unit 8",
        "example_vi": "Ý kiến ​​mỗi người mỗi khác nên khó đưa ra kết luận"
    },
    {
        "id": "vocab_590",
        "kanji": "ぼろぼろな",
        "furigana": "ぼろぼろな",
        "meaning": "rách nát, rách rưới, đổ nát",
        "example": "ぼろぼろな服",
        "unit": "Unit 8",
        "example_vi": "Quần áo rách rưới"
    },
    {
        "id": "vocab_591",
        "kanji": "非常に",
        "furigana": "ひじょうに",
        "meaning": "cực kỳ, bất thường, rất",
        "example": "これは非常に高価な物ですので、気をつけて運んでください",
        "unit": "Unit 8",
        "example_vi": "Đây là một món đồ rất đắt tiền, vì vậy hãy cẩn thận khi mang theo"
    },
    {
        "id": "vocab_592",
        "kanji": "大変（に）",
        "furigana": "たいへん（に）",
        "meaning": "khủng khiếp",
        "example": "朝夕は電車が大変込むので、疲れる",
        "unit": "Unit 8",
        "example_vi": "Tàu rất đông vào buổi sáng và buổi tối nên mệt mỏi"
    },
    {
        "id": "vocab_593",
        "kanji": "ほとんど",
        "furigana": "ほとんど",
        "meaning": "gần như, gần như, hầu hết mọi thứ",
        "example": "準備は殆どできた",
        "unit": "Unit 9",
        "example_vi": "Tôi gần như đã chuẩn bị xong"
    },
    {
        "id": "vocab_594",
        "kanji": "大体",
        "furigana": "だいたい",
        "meaning": "nói chung, về tổng thể, về cơ bản, về cơ bản",
        "example": "今日の試験は大体できた",
        "unit": "Unit 9",
        "example_vi": "Tôi đã làm gần xong bài kiểm tra hôm nay"
    },
    {
        "id": "vocab_595",
        "kanji": "かなり",
        "furigana": "かなり",
        "meaning": "khá, khá, đàng hoàng",
        "example": "頭痛の薬を飲んだら、三十分ぐらいで可也良くなった",
        "unit": "Unit 9",
        "example_vi": "Tôi cảm thấy dễ chịu hơn sau khi uống thuốc trị đau đầu trong khoảng 30 phút"
    },
    {
        "id": "vocab_596",
        "kanji": "ずいぶん",
        "furigana": "ずいぶん",
        "meaning": "theo thứ tự, rất, rất",
        "example": "暫く会わない間に、チンさんは随分日本語が上手になっていた",
        "unit": "Unit 9",
        "example_vi": "Tiếng Nhật của Chin-san đã tiến bộ hơn rất nhiều sau một thời gian chúng tôi không gặp nhau"
    },
    {
        "id": "vocab_597",
        "kanji": "けっこう",
        "furigana": "けっこう",
        "meaning": "tuyệt vời, xuất sắc, tráng lệ",
        "example": "日曜日なので、込んでいるかと思ったら、結構空いていた",
        "unit": "Unit 9",
        "example_vi": "Vì hôm nay là chủ nhật nên tôi tưởng sẽ đông đúc nhưng hóa ra lại khá vắng."
    },
    {
        "id": "vocab_598",
        "kanji": "大分",
        "furigana": "だいぶ／だいぶん",
        "meaning": "khá nhiều, rất nhiều, khá",
        "example": "病気は大分良くなった",
        "unit": "Unit 9",
        "example_vi": "Bệnh của tôi đã thuyên giảm rất nhiều."
    },
    {
        "id": "vocab_599",
        "kanji": "もっと",
        "furigana": "もっと",
        "meaning": "hơn nữa, hơn nữa",
        "example": "リンゴよりイチゴのほうが好きだ、でもメロンはもっと好きだ",
        "unit": "Unit 9",
        "example_vi": "Tôi thích dâu tây hơn táo, nhưng tôi còn thích dưa hơn."
    },
    {
        "id": "vocab_600",
        "kanji": "しっかり",
        "furigana": "しっかり",
        "meaning": "mạnh mẽ, đáng tin cậy",
        "example": "桜の花はもうすっかり散ってしまった",
        "unit": "Unit 9",
        "example_vi": "Hoa anh đào đã rụng rồi."
    },
    {
        "id": "vocab_601",
        "kanji": "一杯",
        "furigana": "いっぱい",
        "meaning": "đầy đủ",
        "example": "会場には子供たちが一杯いて、とても賑やかだった",
        "unit": "Unit 9",
        "example_vi": "Có rất nhiều trẻ em tại địa điểm và nó rất sôi động"
    },
    {
        "id": "vocab_602",
        "kanji": "ぎりぎり",
        "furigana": "ぎりぎり",
        "meaning": "ở mức giới hạn, vừa đủ, vừa đủ, chặt chẽ",
        "example": "走れば、九時の電車にぎりぎり間に合うだろう",
        "unit": "Unit 9",
        "example_vi": "Nếu tôi chạy, tôi sẽ có thể bắt kịp chuyến tàu lúc 9 giờ"
    },
    {
        "id": "vocab_603",
        "kanji": "ぴったり（と）",
        "furigana": "ぴったり（と）",
        "meaning": "chặt chẽ, chính xác, hoàn hảo, chỉ",
        "example": "七時ぴったりに目覚まし時計をセットした",
        "unit": "Unit 9",
        "example_vi": "Tôi đặt đồng hồ báo thức đúng 7 giờ"
    },
    {
        "id": "vocab_604",
        "kanji": "たいてい",
        "furigana": "たいてい",
        "meaning": "thường",
        "example": "日曜日は大抵家にいます",
        "unit": "Unit 9",
        "example_vi": "Tôi thường ở nhà vào ngày chủ nhật"
    },
    {
        "id": "vocab_605",
        "kanji": "同時に",
        "furigana": "どうじに",
        "meaning": "đồng thời, đồng bộ",
        "example": "二人は同時にゴールした",
        "unit": "Unit 9",
        "example_vi": "Cả hai chúng tôi đều hoàn thành cùng lúc"
    },
    {
        "id": "vocab_606",
        "kanji": "前もって",
        "furigana": "まえもって",
        "meaning": "trước",
        "example": "もし欠席する場合は、前もってご連絡します",
        "unit": "Unit 9",
        "example_vi": "Nếu bạn vắng mặt thì tôi sẽ báo trước cho bạn"
    },
    {
        "id": "vocab_607",
        "kanji": "すぐ（に）",
        "furigana": "すぐ（に）",
        "meaning": "ngay lập tức, bây giờ, sớm",
        "example": "チャイムを鳴らすと、すぐにドアが開いた",
        "unit": "Unit 9",
        "example_vi": "Tôi vừa bấm chuông thì cửa mở"
    },
    {
        "id": "vocab_608",
        "kanji": "もうすぐ",
        "furigana": "もうすぐ",
        "meaning": "sớm, sớm",
        "example": "日本へ来て、もうすぐ三年になる",
        "unit": "Unit 9",
        "example_vi": "Đã gần ba năm kể từ khi tôi đến Nhật Bản"
    },
    {
        "id": "vocab_609",
        "kanji": "突然",
        "furigana": "とつぜん",
        "meaning": "bất ngờ, đột nhiên, đột ngột",
        "example": "子供が突然飛び出してきたので、急ブレーキを掛けた",
        "unit": "Unit 9",
        "example_vi": "Con tôi bất ngờ nhảy ra ngoài nên tôi đạp phanh"
    },
    {
        "id": "vocab_610",
        "kanji": "あっという間（に）",
        "furigana": "あっというま（に）",
        "meaning": "trong chớp mắt",
        "example": "子供の成長は早い、あっという間に、もう小学生だ",
        "unit": "Unit 9",
        "example_vi": "Trẻ em lớn nhanh, chớp mắt đã vào tiểu học"
    },
    {
        "id": "vocab_611",
        "kanji": "いつの間にか",
        "furigana": "いつのまにか",
        "meaning": "không được chú ý, ngay lập tức, bạn sẽ không có thời gian để nhìn lại",
        "example": "いつの間にか、外は暗くなっていた",
        "unit": "Unit 9",
        "example_vi": "Trước khi tôi kịp nhận ra thì bên ngoài trời đã tối"
    },
    {
        "id": "vocab_612",
        "kanji": "しばらく",
        "furigana": "しばらく",
        "meaning": "một lúc, một chút",
        "example": "ただ今窓口が込んでいますので、もう暫くお待ちください",
        "unit": "Unit 9",
        "example_vi": "Hiện tại quầy đang bận nên vui lòng đợi một lát"
    },
    {
        "id": "vocab_613",
        "kanji": "ずっと",
        "furigana": "ずっと",
        "meaning": "mọi lúc, nhiều (thêm), xa",
        "example": "バスよりも地下鉄で行くほうがずっと速い",
        "unit": "Unit 9",
        "example_vi": "Đi bằng tàu điện ngầm nhanh hơn nhiều so với xe buýt"
    },
    {
        "id": "vocab_614",
        "kanji": "相変わらず",
        "furigana": "あいかわらず",
        "meaning": "không có thay đổi",
        "example": "あの女優は年を取った今も相変わらずきれいだ",
        "unit": "Unit 9",
        "example_vi": "Nữ diễn viên đó dù lớn tuổi vẫn xinh đẹp như ngày nào"
    },
    {
        "id": "vocab_615",
        "kanji": "次々に／と",
        "furigana": "つぎつぎに／と",
        "meaning": "cái này nối tiếp cái khác",
        "example": "新しいタイプのインスタント食品が次々に発売されている",
        "unit": "Unit 9",
        "example_vi": "Các loại thực phẩm ăn liền mới lần lượt ra đời"
    },
    {
        "id": "vocab_616",
        "kanji": "どんどん",
        "furigana": "どんどん",
        "meaning": "cú đánh. trống, nhanh, sớm, nhiều",
        "example": "今日は体調も良く、仕事がどんどん進んだ",
        "unit": "Unit 9",
        "example_vi": "Hôm nay tôi cảm thấy tốt và có thể làm việc nhanh chóng"
    },
    {
        "id": "vocab_617",
        "kanji": "ますます",
        "furigana": "ますます",
        "meaning": "ngày càng nhiều",
        "example": "朝から降っていた雨は、午後になると益々強くなった",
        "unit": "Unit 9",
        "example_vi": "Mưa rơi từ sáng đến chiều càng lúc càng nặng hạt"
    },
    {
        "id": "vocab_618",
        "kanji": "やっと",
        "furigana": "やっと",
        "meaning": "cuối cùng, hầu như không, bằng cách nào đó, gặp khó khăn",
        "example": "三十分も待って、やっとバスが来た",
        "unit": "Unit 9",
        "example_vi": "Sau 30 phút chờ đợi, cuối cùng xe cũng đến"
    },
    {
        "id": "vocab_619",
        "kanji": "とうとう",
        "furigana": "とうとう",
        "meaning": "cuối cùng, cuối cùng",
        "example": "長い間使っていた洗濯機が到頭壊れてしまった",
        "unit": "Unit 9",
        "example_vi": "Chiếc máy giặt tôi dùng lâu ngày bỗng nhiên bị hỏng"
    },
    {
        "id": "vocab_620",
        "kanji": "ついに",
        "furigana": "ついに",
        "meaning": "cuối cùng, cuối cùng",
        "example": "若い頃の夢を遂に実現することができた",
        "unit": "Unit 9",
        "example_vi": "Cuối cùng tôi đã có thể thực hiện được giấc mơ thời thơ ấu của mình."
    },
    {
        "id": "vocab_621",
        "kanji": "もちろん",
        "furigana": "もちろん",
        "meaning": "tất nhiên",
        "example": "マンションを買った、勿論、ローンでだ",
        "unit": "Unit 9",
        "example_vi": "Tôi đã mua một căn hộ, tất nhiên là bằng một khoản vay"
    },
    {
        "id": "vocab_622",
        "kanji": "やはり",
        "furigana": "やはり",
        "meaning": "xét cho cùng, dù sao, cũng vậy",
        "example": "矢張りAチームが勝った、予想通りだった",
        "unit": "Unit 9",
        "example_vi": "Yabari Đội A đã thắng đúng như dự đoán"
    },
    {
        "id": "vocab_623",
        "kanji": "きっと",
        "furigana": "きっと",
        "meaning": "chắc chắn, chắc chắn, chắc chắn",
        "example": "田中さんはいつも遅刻するから、今日もきっと遅れてくるだろう",
        "unit": "Unit 9",
        "example_vi": "Anh Tanaka luôn đến muộn nên tôi chắc chắn hôm nay anh ấy cũng sẽ đến muộn"
    },
    {
        "id": "vocab_624",
        "kanji": "ぜひ",
        "furigana": "ぜひ",
        "meaning": "chắc chắn, chắc chắn",
        "example": "若いときに、是非留学したいと思っている",
        "unit": "Unit 9",
        "example_vi": "Tôi chắc chắn muốn đi du học khi còn trẻ"
    },
    {
        "id": "vocab_625",
        "kanji": "なるべく",
        "furigana": "なるべく",
        "meaning": "càng nhiều càng tốt",
        "example": "成るべく辞書を見ないで、この本を読んでみてください",
        "unit": "Unit 9",
        "example_vi": "Hãy thử đọc cuốn sách này mà không cần tra từ điển nếu có thể"
    },
    {
        "id": "vocab_626",
        "kanji": "案外",
        "furigana": "あんがい",
        "meaning": "bất ngờ, trái với giả định",
        "example": "今日は曇っているが、案外暖かい",
        "unit": "Unit 9",
        "example_vi": "Hôm nay trời nhiều mây nhưng ấm áp đến lạ"
    },
    {
        "id": "vocab_627",
        "kanji": "もしかすると／もしかしたら／もしかして",
        "furigana": "もしかすると／もしかしたら／もしかして",
        "meaning": "đột nhiên, có lẽ",
        "example": "体調が悪いので、もしかすると、明日休むかもしれません",
        "unit": "Unit 9",
        "example_vi": "Tôi cảm thấy không khỏe nên có lẽ ngày mai tôi sẽ nghỉ làm"
    },
    {
        "id": "vocab_628",
        "kanji": "まさか",
        "furigana": "まさか",
        "meaning": "không thể được",
        "example": "あの二人、離婚するそうだよ、真逆あんなに仲が良くかったのに",
        "unit": "Unit 9",
        "example_vi": "Tôi nghe nói hai người đó sắp ly hôn, mặc dù họ rất thân thiết."
    },
    {
        "id": "vocab_629",
        "kanji": "うっかり",
        "furigana": "うっかり",
        "meaning": "lơ đãng, thiếu chú ý",
        "example": "うっかりして、砂糖と塩を間違えて入れてしまった",
        "unit": "Unit 9",
        "example_vi": "Tôi vô tình cho đường và muối vào nhầm thực phẩm."
    },
    {
        "id": "vocab_630",
        "kanji": "つい",
        "furigana": "つい",
        "meaning": "vô tình, vô tình",
        "example": "禁煙しようと思うのだが、食事の後などについ吸ってしまう",
        "unit": "Unit 9",
        "example_vi": "Tôi cố gắng bỏ thuốc lá nhưng cuối cùng lại hút thuốc sau bữa ăn."
    },
    {
        "id": "vocab_631",
        "kanji": "思わず",
        "furigana": "おもわず",
        "meaning": "vô tình, tình cờ",
        "example": "夜道で急に肩を叩かれ、思わずワーッと叫んでしまった",
        "unit": "Unit 9",
        "example_vi": "Tôi bất ngờ bị vỗ vào vai trên đường vào ban đêm, tôi không khỏi hét lên."
    },
    {
        "id": "vocab_632",
        "kanji": "ほっと",
        "furigana": "ほっと",
        "meaning": "thật sâu (thở) nhẹ nhõm",
        "example": "試験が終わってほっとした",
        "unit": "Unit 9",
        "example_vi": "Tôi cảm thấy nhẹ nhõm khi kỳ thi kết thúc. Tôi đang vội nhưng xe buýt không bao giờ đến, tôi bực mình."
    },
    {
        "id": "vocab_633",
        "kanji": "いらいら",
        "furigana": "いらいら",
        "meaning": "cáu kỉnh, lo lắng",
        "example": "急いでいるのに、バスが中々来なくて、いらいらした",
        "unit": "Unit 9",
        "example_vi": "Tôi bận rộn khoảng nửa năm và muốn đến suối nước nóng thư giãn"
    },
    {
        "id": "vocab_634",
        "kanji": "のんびり",
        "furigana": "のんびり",
        "meaning": "vô tư, nhàn nhã, lười biếng, nhàn nhã",
        "example": "半年ほどとても忙しかった、温泉へでも行ってのんびりしたい",
        "unit": "Unit 9",
        "example_vi": "Những gì tôi nói hôm qua thực chất là dối trá"
    },
    {
        "id": "vocab_635",
        "kanji": "実は",
        "furigana": "じつは",
        "meaning": "sự thật",
        "example": "昨日言ったことは、実は嘘なんです",
        "unit": "Unit 9",
        "example_vi": "Sở thích của tôi là đọc sách"
    },
    {
        "id": "vocab_636",
        "kanji": "読書",
        "furigana": "どくしょ",
        "meaning": "đọc",
        "example": "趣味は読書だ",
        "unit": "Unit 9",
        "example_vi": "Chơi nhạc cụ"
    },
    {
        "id": "vocab_637",
        "kanji": "演奏",
        "furigana": "えんそう",
        "meaning": "biểu diễn âm nhạc",
        "example": "楽器を演奏する",
        "unit": "Unit 9",
        "example_vi": "Nghệ thuật, âm nhạc, văn học, sân khấu, v.v. đều có thể được coi là loại hình nghệ thuật"
    },
    {
        "id": "vocab_638",
        "kanji": "芸術",
        "furigana": "げいじゅつ",
        "meaning": "nghệ thuật",
        "example": "美術、音楽、文学、演劇などは、みな、芸術の一種であると言える",
        "unit": "Unit 9",
        "example_vi": "Khám dạ dày"
    },
    {
        "id": "vocab_639",
        "kanji": "検査",
        "furigana": "けんさ",
        "meaning": "kiểm tra, thanh tra",
        "example": "胃の検査",
        "unit": "Unit 9",
        "example_vi": "Máu chảy khắp cơ thể"
    },
    {
        "id": "vocab_640",
        "kanji": "血液",
        "furigana": "けつえき",
        "meaning": "máu",
        "example": "体の中を血液が流れている",
        "unit": "Unit 9",
        "example_vi": ""
    },
    {
        "id": "vocab_641",
        "kanji": "治療",
        "furigana": "ちりょう",
        "meaning": "điều trị",
        "example": "病気を治療した",
        "unit": "Unit 9",
        "example_vi": "Chữa khỏi bệnh"
    },
    {
        "id": "vocab_642",
        "kanji": "症状",
        "furigana": "しょうじょう",
        "meaning": "triệu chứng, tình trạng (của bệnh nhân)",
        "example": "風邪の症状は熱、咳、鼻水などだ",
        "unit": "Unit 9",
        "example_vi": "Các triệu chứng cảm lạnh bao gồm sốt, ho và sổ mũi"
    },
    {
        "id": "vocab_643",
        "kanji": "予防",
        "furigana": "よぼう",
        "meaning": "phòng ngừa, phòng ngừa, phòng bệnh",
        "example": "風邪の予防",
        "unit": "Unit 9",
        "example_vi": "Phòng chống cảm lạnh"
    },
    {
        "id": "vocab_644",
        "kanji": "栄養",
        "furigana": "えいよう",
        "meaning": "dinh dưỡng, dinh dưỡng",
        "example": "栄養の、ある食べ物",
        "unit": "Unit 9",
        "example_vi": "Ăn thực phẩm bổ dưỡng"
    },
    {
        "id": "vocab_645",
        "kanji": "手術",
        "furigana": "しゅじゅつ",
        "meaning": "phẫu thuật",
        "example": "胃の手術をした",
        "unit": "Unit 9",
        "example_vi": "Đã phẫu thuật dạ dày"
    },
    {
        "id": "vocab_646",
        "kanji": "死亡",
        "furigana": "しぼう",
        "meaning": "cái chết, sự tàn lụi",
        "example": "死亡の原因を調べる",
        "unit": "Unit 9",
        "example_vi": "Điều tra nguyên nhân cái chết"
    },
    {
        "id": "vocab_647",
        "kanji": "命",
        "furigana": "いのち",
        "meaning": "cuộc sống",
        "example": "命は大切にしなければならない",
        "unit": "Unit 9",
        "example_vi": "Chúng ta phải trân trọng cuộc sống"
    },
    {
        "id": "vocab_648",
        "kanji": "一生",
        "furigana": "いっしょう",
        "meaning": "cả cuộc đời",
        "example": "ピカソの一生を調べる",
        "unit": "Unit 9",
        "example_vi": "Điều tra cuộc đời Picasso"
    },
    {
        "id": "vocab_649",
        "kanji": "誤解",
        "furigana": "ごかい",
        "meaning": "sai sót, nhầm lẫn, hiểu lầm",
        "example": "誤解がないようにするには、良く話し合うことが大切だ",
        "unit": "Unit 9",
        "example_vi": "Quan trọng là phải thảo luận tốt để tránh hiểu lầm"
    },
    {
        "id": "vocab_650",
        "kanji": "後悔",
        "furigana": "こうかい",
        "meaning": "ăn năn, hối hận",
        "example": "私は若い頃に勉強しなかったことを、とても後悔している",
        "unit": "Unit 9",
        "example_vi": "Tôi thực sự hối hận vì đã không học khi còn trẻ"
    },
    {
        "id": "vocab_651",
        "kanji": "訳",
        "furigana": "わけ",
        "meaning": "ý nghĩa, ý nghĩa, bản chất, lý do",
        "example": "遅刻した訳を話す",
        "unit": "Unit 9",
        "example_vi": "Giải thích lý do tôi đến muộn"
    },
    {
        "id": "vocab_652",
        "kanji": "態度",
        "furigana": "たいど",
        "meaning": "thái độ, vị trí, hành vi",
        "example": "あの学生は授業中の態度が悪い",
        "unit": "Unit 9",
        "example_vi": "Học sinh đó có thái độ không tốt trong lớp"
    },
    {
        "id": "vocab_653",
        "kanji": "癖",
        "furigana": "くせ",
        "meaning": "thói quen, cách cư xử, cách cư xử",
        "example": "私の癖は困ったとき、頭を掻くことだ",
        "unit": "Unit 9",
        "example_vi": "Thói quen của tôi là gãi đầu khi gặp khó khăn"
    },
    {
        "id": "vocab_654",
        "kanji": "礼儀",
        "furigana": "れいぎ",
        "meaning": "cách cư xử, sự đứng đắn, phép xã giao",
        "example": "目上の人への礼儀",
        "unit": "Unit 9",
        "example_vi": "Lễ phép với cấp trên"
    },
    {
        "id": "vocab_655",
        "kanji": "文句",
        "furigana": "もんく",
        "meaning": "từ, cách diễn đạt, cụm từ, phàn nàn",
        "example": "給料に文句がある",
        "unit": "Unit 9",
        "example_vi": "Tôi có khiếu nại về mức lương của mình"
    },
    {
        "id": "vocab_656",
        "kanji": "表情",
        "furigana": "ひょうじょう",
        "meaning": "biểu cảm (khuôn mặt)",
        "example": "顔の表情",
        "unit": "Unit 9",
        "example_vi": "Biểu cảm trên khuôn mặt"
    },
    {
        "id": "vocab_657",
        "kanji": "表面",
        "furigana": "ひょうめん",
        "meaning": "khuôn mặt. bề mặt, hình dáng",
        "example": "水の表面",
        "unit": "Unit 9",
        "example_vi": "Mặt nước"
    },
    {
        "id": "vocab_658",
        "kanji": "禁煙",
        "furigana": "きんえん",
        "meaning": "cấm hút thuốc",
        "example": "この部屋は禁煙です",
        "unit": "Unit 9",
        "example_vi": "Không hút thuốc trong phòng này"
    },
    {
        "id": "vocab_659",
        "kanji": "禁止",
        "furigana": "きんし",
        "meaning": "cấm, cấm",
        "example": "美術館の中では、写真を撮ることは禁止されている",
        "unit": "Unit 9",
        "example_vi": "Chụp ảnh bị cấm bên trong bảo tàng"
    },
    {
        "id": "vocab_660",
        "kanji": "完成",
        "furigana": "かんせい",
        "meaning": "hoàn thành, kết thúc",
        "example": "建物が完成した",
        "unit": "Unit 9",
        "example_vi": "Tòa nhà đã được hoàn thành"
    },
    {
        "id": "vocab_661",
        "kanji": "課題",
        "furigana": "かだい",
        "meaning": "chủ đề, vấn đề, nhiệm vụ, câu hỏi, bài học",
        "example": "現在の日本には、高齢か、ごみ問題など、多くの課題がある",
        "unit": "Unit 9",
        "example_vi": "Nhật Bản hiện nay có rất nhiều vấn đề như dân số già và vấn đề rác thải"
    },
    {
        "id": "vocab_662",
        "kanji": "例外",
        "furigana": "れいがい",
        "meaning": "ngoại lệ (theo quy tắc)",
        "example": "どんな規則にも例外がある",
        "unit": "Unit 9",
        "example_vi": "Mọi quy tắc đều có ngoại lệ"
    },
    {
        "id": "vocab_663",
        "kanji": "基本",
        "furigana": "きほん",
        "meaning": "cơ sở, cơ sở, nền tảng, tiêu chuẩn",
        "example": "何の練習でも、基本が大切だ",
        "unit": "Unit 9",
        "example_vi": "Những điều cơ bản rất quan trọng trong bất kỳ hoạt động thực hành nào"
    },
    {
        "id": "vocab_664",
        "kanji": "記録",
        "furigana": "きろく",
        "meaning": "ghi, đăng ký, giao thức",
        "example": "先週の会議の記録を読んだ",
        "unit": "Unit 9",
        "example_vi": "Tôi đã đọc biên bản cuộc họp tuần trước"
    },
    {
        "id": "vocab_665",
        "kanji": "状態",
        "furigana": "じょうたい",
        "meaning": "điều kiện, vị trí, điều kiện",
        "example": "あの会社は、今経営の状態が良くない",
        "unit": "Unit 9",
        "example_vi": "Công ty đó hiện đang quản lý không tốt"
    },
    {
        "id": "vocab_666",
        "kanji": "出来事",
        "furigana": "できごと",
        "meaning": "sự cố, biến cố, sự việc",
        "example": "大きな出来事",
        "unit": "Unit 9",
        "example_vi": "Một sự kiện lớn"
    },
    {
        "id": "vocab_667",
        "kanji": "場面",
        "furigana": "ばめん",
        "meaning": "cảnh, cảnh, tình trạng sàn giao dịch chứng khoán",
        "example": "目の前でトラックとバスが衝突した、その場面が夢に出てきた",
        "unit": "Unit 10",
        "example_vi": "Một chiếc xe tải và một chiếc xe buýt va chạm trước mặt tôi, và cảnh tượng đó hiện lên trong giấc mơ của tôi"
    },
    {
        "id": "vocab_668",
        "kanji": "機会",
        "furigana": "きかい",
        "meaning": "cơ hội thuận lợi, thời cơ thuận lợi",
        "example": "彼女と二人で話したいのだが、中々機会がない",
        "unit": "Unit 10",
        "example_vi": "Tôi muốn nói chuyện với bạn gái nhưng không có cơ hội"
    },
    {
        "id": "vocab_669",
        "kanji": "距離",
        "furigana": "きょり",
        "meaning": "khoảng cách, khoảng cách, khoảng cách",
        "example": "駅からの距離を測る",
        "unit": "Unit 10",
        "example_vi": "Đo khoảng cách từ nhà ga"
    },
    {
        "id": "vocab_670",
        "kanji": "提案",
        "furigana": "ていあん",
        "meaning": "đề xuất, dự án",
        "example": "会議で提案をする",
        "unit": "Unit 10",
        "example_vi": "Đưa ra đề xuất tại cuộc họp"
    },
    {
        "id": "vocab_671",
        "kanji": "やり取り",
        "furigana": "やりとり",
        "meaning": "trao đổi",
        "example": "友達とメールをやり取りする",
        "unit": "Unit 10",
        "example_vi": "Trao đổi email với bạn bè"
    },
    {
        "id": "vocab_672",
        "kanji": "知識",
        "furigana": "ちしき",
        "meaning": "kiến thức, thông tin",
        "example": "本を読んで、知識を身につける",
        "unit": "Unit 10",
        "example_vi": "Đọc sách và tiếp thu kiến ​​thức"
    },
    {
        "id": "vocab_673",
        "kanji": "実力",
        "furigana": "じつりょく",
        "meaning": "sức mạnh, khả năng thực sự",
        "example": "試合で実力を出す",
        "unit": "Unit 10",
        "example_vi": "Thể hiện kỹ năng của bạn trong các cuộc thi"
    },
    {
        "id": "vocab_674",
        "kanji": "手段",
        "furigana": "しゅだん",
        "meaning": "phương tiện, thước đo",
        "example": "問題を解決するために、必要な手段を取る",
        "unit": "Unit 10",
        "example_vi": "Thực hiện các bước cần thiết để giải quyết vấn đề"
    },
    {
        "id": "vocab_675",
        "kanji": "代表",
        "furigana": "だいひょう",
        "meaning": "đại diện, người đại diện, đại biểu",
        "example": "クラスの代表として、会議に参加する",
        "unit": "Unit 10",
        "example_vi": "Tham gia các cuộc họp với tư cách là đại diện của lớp"
    },
    {
        "id": "vocab_676",
        "kanji": "影響",
        "furigana": "えいきょう",
        "meaning": "ảnh hưởng. tác động",
        "example": "両親の影響で、私も子供の頃から絵を書き始めた",
        "unit": "Unit 10",
        "example_vi": "Chịu ảnh hưởng từ bố mẹ, tôi bắt đầu vẽ từ khi còn nhỏ"
    },
    {
        "id": "vocab_677",
        "kanji": "効果",
        "furigana": "こうか",
        "meaning": "hiệu ứng, hành động, kết quả",
        "example": "この薬を飲んだら、すぐに効果が出た",
        "unit": "Unit 10",
        "example_vi": "Khi tôi uống thuốc này thì có tác dụng tức thì"
    },
    {
        "id": "vocab_678",
        "kanji": "印象",
        "furigana": "いんしょう",
        "meaning": "ấn tượng",
        "example": "彼女と初めて会ったとき、優しそうな人だという印象を受けた",
        "unit": "Unit 10",
        "example_vi": "Khi tôi gặp cô ấy lần đầu tiên, tôi có ấn tượng rằng cô ấy có vẻ là một người tốt bụng"
    },
    {
        "id": "vocab_679",
        "kanji": "印",
        "furigana": "しるし",
        "meaning": "ký hiệu, nhãn hiệu, biểu tượng",
        "example": "地図の目的地に印を付ける",
        "unit": "Unit 10",
        "example_vi": "Đánh dấu điểm đến trên bản đồ"
    },
    {
        "id": "vocab_680",
        "kanji": "合図",
        "furigana": "あいず",
        "meaning": "tín hiệu, dấu hiệu",
        "example": "友達に目で合図する",
        "unit": "Unit 10",
        "example_vi": "Ra hiệu cho một người bạn bằng đôi mắt của cô ấy"
    },
    {
        "id": "vocab_681",
        "kanji": "共通",
        "furigana": "きょうつう",
        "meaning": "chung",
        "example": "二人の共通の趣味は音楽だ",
        "unit": "Unit 10",
        "example_vi": "Sở thích chung của họ là âm nhạc"
    },
    {
        "id": "vocab_682",
        "kanji": "強調",
        "furigana": "きょうちょう",
        "meaning": "gạch chân, nhấn mạnh",
        "example": "大事な点を強調して、説明する",
        "unit": "Unit 10",
        "example_vi": "Nhấn mạnh và giải thích những điểm quan trọng"
    },
    {
        "id": "vocab_683",
        "kanji": "省略",
        "furigana": "しょうりゃく",
        "meaning": "viết tắt, mệnh giá, thiếu sót",
        "example": "詳しい説明を省略して、簡単に話す",
        "unit": "Unit 10",
        "example_vi": "Bỏ qua những lời giải thích chi tiết và nói đơn giản"
    },
    {
        "id": "vocab_684",
        "kanji": "挑戦",
        "furigana": "ちょうせん",
        "meaning": "thách đấu (đấu tay đôi)",
        "example": "難しい課題に挑戦する",
        "unit": "Unit 10",
        "example_vi": "Đảm nhận những nhiệm vụ khó khăn"
    },
    {
        "id": "vocab_685",
        "kanji": "やる気",
        "furigana": "やるき",
        "meaning": "động lực",
        "example": "やる気のある人",
        "unit": "Unit 10",
        "example_vi": "Người có động lực"
    },
    {
        "id": "vocab_686",
        "kanji": "勇気",
        "furigana": "ゆうき",
        "meaning": "can đảm, táo bạo, dũng cảm, dũng cảm",
        "example": "困難に立ち向かう勇気",
        "unit": "Unit 10",
        "example_vi": "Dũng cảm đương đầu với khó khăn"
    },
    {
        "id": "vocab_687",
        "kanji": "資格",
        "furigana": "しかく",
        "meaning": "trình độ, khả năng, dữ liệu",
        "example": "弁護士の資格を取る",
        "unit": "Unit 10",
        "example_vi": "Đủ tiêu chuẩn làm luật sư"
    },
    {
        "id": "vocab_688",
        "kanji": "申請",
        "furigana": "しんせい",
        "meaning": "kiến nghị, kiến ​​nghị",
        "example": "パスポートの申請",
        "unit": "Unit 10",
        "example_vi": "Xin hộ chiếu"
    },
    {
        "id": "vocab_689",
        "kanji": "本人",
        "furigana": "ほんにん",
        "meaning": "khuôn mặt. đang được đề cập, chính anh ấy (cá nhân)",
        "example": "通帳は貯金をする本人が作らなければならない",
        "unit": "Unit 10",
        "example_vi": "Sổ tiết kiệm phải do người tiết kiệm tạo ra"
    },
    {
        "id": "vocab_690",
        "kanji": "契約",
        "furigana": "けいやく",
        "meaning": "thỏa thuận, thỏa thuận, hợp đồng",
        "example": "アパートを二年間借りる契約をした",
        "unit": "Unit 10",
        "example_vi": "Ký hợp đồng thuê căn hộ trong hai năm"
    },
    {
        "id": "vocab_691",
        "kanji": "証明",
        "furigana": "しょうめい",
        "meaning": "bằng chứng, xác nhận, bằng chứng",
        "example": "銀行口座を開くときには、身分を証明する物が必要だ",
        "unit": "Unit 10",
        "example_vi": "Cần có bằng chứng nhận dạng khi mở tài khoản ngân hàng"
    },
    {
        "id": "vocab_692",
        "kanji": "変更",
        "furigana": "へんこう",
        "meaning": "thay đổi. thay đổi",
        "example": "予定の変更を行う",
        "unit": "Unit 10",
        "example_vi": "Thay đổi kế hoạch"
    },
    {
        "id": "vocab_693",
        "kanji": "保存",
        "furigana": "ほぞん",
        "meaning": "bảo quản, an toàn",
        "example": "食料の保存",
        "unit": "Unit 10",
        "example_vi": "Bảo quản thực phẩm"
    },
    {
        "id": "vocab_694",
        "kanji": "保護",
        "furigana": "ほご",
        "meaning": "bảo vệ, an ninh, bảo tồn, bảo trợ",
        "example": "自然を保護する",
        "unit": "Unit 10",
        "example_vi": "Bảo vệ thiên nhiên"
    },
    {
        "id": "vocab_695",
        "kanji": "環境",
        "furigana": "かんきょう",
        "meaning": "môi trường, môi trường xung quanh",
        "example": "都心より、環境のいい郊外に住みたい",
        "unit": "Unit 10",
        "example_vi": "Tôi muốn sống ở vùng ngoại ô với môi trường tốt hơn trung tâm thành phố"
    },
    {
        "id": "vocab_696",
        "kanji": "資源",
        "furigana": "しげん",
        "meaning": "tài nguyên",
        "example": "資源を有効に利用する",
        "unit": "Unit 10",
        "example_vi": "Sử dụng tài nguyên hiệu quả"
    },
    {
        "id": "vocab_697",
        "kanji": "不足",
        "furigana": "ふそく",
        "meaning": "thiếu, thiếu, thâm hụt",
        "example": "野菜が不足した食事",
        "unit": "Unit 10",
        "example_vi": "Thực hiện chế độ ăn thiếu rau"
    },
    {
        "id": "vocab_698",
        "kanji": "平均",
        "furigana": "へいきん",
        "meaning": "trung bình (số), trạng thái cân bằng, số dư",
        "example": "テストの点を平均する",
        "unit": "Unit 10",
        "example_vi": "Điểm kiểm tra trung bình"
    },
    {
        "id": "vocab_699",
        "kanji": "割合",
        "furigana": "わりあい",
        "meaning": "tỷ lệ, tỉ lệ",
        "example": "デパートの客は女性の割合が高い",
        "unit": "Unit 10",
        "example_vi": "Một tỷ lệ cao khách hàng của cửa hàng bách hóa là phụ nữ"
    },
    {
        "id": "vocab_700",
        "kanji": "商売",
        "furigana": "しょうばい",
        "meaning": "buôn bán, kinh doanh",
        "example": "父は衣料品の商売をしている",
        "unit": "Unit 10",
        "example_vi": "Bố tôi kinh doanh quần áo"
    },
    {
        "id": "vocab_701",
        "kanji": "商品",
        "furigana": "しょうひん",
        "meaning": "hàng hóa",
        "example": "店に商品を並べる",
        "unit": "Unit 10",
        "example_vi": "Trưng bày sản phẩm tại cửa hàng"
    },
    {
        "id": "vocab_702",
        "kanji": "質",
        "furigana": "しつ",
        "meaning": "chất lượng, tính cách",
        "example": "このメーカーの製品は質がいい",
        "unit": "Unit 10",
        "example_vi": "Sản phẩm của nhà sản xuất này có chất lượng tốt"
    },
    {
        "id": "vocab_703",
        "kanji": "型",
        "furigana": "かた",
        "meaning": "loại, mẫu mã. hình dáng, phong cách",
        "example": "新しい型のパソコンを買った",
        "unit": "Unit 10",
        "example_vi": "Tôi đã mua một mẫu máy tính mới"
    },
    {
        "id": "vocab_704",
        "kanji": "生産",
        "furigana": "せいさん",
        "meaning": "sản xuất",
        "example": "日本は農作物の生産が少ない",
        "unit": "Unit 10",
        "example_vi": "Sản lượng nông nghiệp ở Nhật Bản thấp"
    },
    {
        "id": "vocab_705",
        "kanji": "消費",
        "furigana": "しょうひ",
        "meaning": "chi tiêu, tiêu dùng",
        "example": "牛乳の消費が減っている",
        "unit": "Unit 10",
        "example_vi": "Tiêu thụ sữa đang giảm"
    },
    {
        "id": "vocab_706",
        "kanji": "物価",
        "furigana": "ぶっか",
        "meaning": "giá (đối với hàng tiêu dùng)",
        "example": "東京は物価が高い",
        "unit": "Unit 10",
        "example_vi": "Giá ở Tokyo cao"
    },
    {
        "id": "vocab_707",
        "kanji": "倒産",
        "furigana": "とうさん",
        "meaning": "phá sản",
        "example": "会社が倒産する",
        "unit": "Unit 10",
        "example_vi": "Các công ty sắp phá sản"
    },
    {
        "id": "vocab_708",
        "kanji": "携帯",
        "furigana": "けいたい",
        "meaning": "mang theo bên mình, mang theo bên mình",
        "example": "外国人はいつも外国人登録証を携帯していなければならない",
        "unit": "Unit 10",
        "example_vi": "Người nước ngoài phải luôn mang theo thẻ đăng ký người nước ngoài"
    },
    {
        "id": "vocab_709",
        "kanji": "現代",
        "furigana": "げんだい",
        "meaning": "hiện đại",
        "example": "現代は情報の時代だと言われている",
        "unit": "Unit 10",
        "example_vi": "Người ta nói thời đại hiện nay là thời đại thông tin"
    },
    {
        "id": "vocab_710",
        "kanji": "世紀",
        "furigana": "せいき",
        "meaning": "thế kỷ, thế kỷ",
        "example": "二十一世紀が始まった",
        "unit": "Unit 10",
        "example_vi": "Thế kỷ 21 đã bắt đầu"
    },
    {
        "id": "vocab_711",
        "kanji": "文化",
        "furigana": "ぶんか",
        "meaning": "văn hóa",
        "example": "日本の文化",
        "unit": "Unit 10",
        "example_vi": "Văn hóa Nhật Bản"
    },
    {
        "id": "vocab_712",
        "kanji": "都市",
        "furigana": "とし",
        "meaning": "thành phố",
        "example": "都市に人口が集中する",
        "unit": "Unit 10",
        "example_vi": "Dân số tập trung ở các thành phố"
    },
    {
        "id": "vocab_713",
        "kanji": "地方",
        "furigana": "ちほう",
        "meaning": "huyện",
        "example": "雨が多い地方では植物が良く育つ",
        "unit": "Unit 10",
        "example_vi": "Cây phát triển tốt ở vùng có nhiều mưa"
    },
    {
        "id": "vocab_714",
        "kanji": "戦争",
        "furigana": "せんそう",
        "meaning": "chiến tranh",
        "example": "A国とB国の間で戦争が起きた",
        "unit": "Unit 10",
        "example_vi": "Chiến tranh nổ ra giữa nước A và nước B"
    },
    {
        "id": "vocab_715",
        "kanji": "平和",
        "furigana": "へいわ",
        "meaning": "hòa bình, yên bình",
        "example": "世界の平和を守る",
        "unit": "Unit 10",
        "example_vi": "Bảo vệ hòa bình thế giới"
    },
    {
        "id": "vocab_716",
        "kanji": "上る",
        "furigana": "のぼる",
        "meaning": "tăng, leo",
        "example": "階段を上る",
        "unit": "Unit 10",
        "example_vi": "Leo cầu thang"
    },
    {
        "id": "vocab_717",
        "kanji": "下る",
        "furigana": "くだる",
        "meaning": "đi xuống, đi xuống (xuống)",
        "example": "坂を下る",
        "unit": "Unit 10",
        "example_vi": "Đi xuống dốc"
    },
    {
        "id": "vocab_718",
        "kanji": "進む",
        "furigana": "すすむ",
        "meaning": "tiến về phía trước, tiến lên. phát triển",
        "example": "出口に向かって進む",
        "unit": "Unit 10",
        "example_vi": "Tiến về phía lối ra"
    },
    {
        "id": "vocab_719",
        "kanji": "進める",
        "furigana": "すすめる",
        "meaning": "quảng bá",
        "example": "もう少し車を前に進めてください",
        "unit": "Unit 10",
        "example_vi": "Hãy lái xe xa hơn một chút"
    },
    {
        "id": "vocab_720",
        "kanji": "通る",
        "furigana": "とおる",
        "meaning": "vượt qua, vượt qua",
        "example": "この道は車がたくさん通る",
        "unit": "Unit 10",
        "example_vi": "Có rất nhiều xe ô tô trên con đường này"
    },
    {
        "id": "vocab_721",
        "kanji": "通す",
        "furigana": "とおす",
        "meaning": "cho qua, cho qua",
        "example": "カーテンを通して、光が部屋の中に入ってくる",
        "unit": "Unit 10",
        "example_vi": "Ánh sáng vào phòng qua rèm"
    },
    {
        "id": "vocab_722",
        "kanji": "超える／越える",
        "furigana": "こえる",
        "meaning": "vượt quá, vượt quá, vượt qua",
        "example": "この山を越えると隣の県だ",
        "unit": "Unit 10",
        "example_vi": "Ngoài ngọn núi này là tỉnh tiếp theo"
    },
    {
        "id": "vocab_723",
        "kanji": "過ぎる",
        "furigana": "すぎる",
        "meaning": "vượt qua, vượt qua, vượt qua, vượt qua",
        "example": "列車は広島駅を過ぎた",
        "unit": "Unit 10",
        "example_vi": "Tàu đi qua ga Hiroshima"
    },
    {
        "id": "vocab_724",
        "kanji": "過ごす",
        "furigana": "すごす",
        "meaning": "dành (thời gian), vượt quá",
        "example": "大学時代を東京で過ごした",
        "unit": "Unit 10",
        "example_vi": "Tôi đã trải qua những năm đại học ở Tokyo"
    },
    {
        "id": "vocab_725",
        "kanji": "移る",
        "furigana": "うつる",
        "meaning": "di chuyển, vượt qua, lây nhiễm",
        "example": "黒板の字が見えにくかったので、前の席に移った",
        "unit": "Unit 10",
        "example_vi": "Thật khó để nhìn thấy chữ viết trên bảng đen, nên tôi chuyển sang ghế trước"
    },
    {
        "id": "vocab_726",
        "kanji": "移す",
        "furigana": "うつす",
        "meaning": "di chuyển, chuyển giao, lây nhiễm",
        "example": "本社を大阪から東京に移した",
        "unit": "Unit 10",
        "example_vi": "Chuyển trụ sở chính từ Osaka đến Tokyo"
    },
    {
        "id": "vocab_727",
        "kanji": "連れる",
        "furigana": "つれる",
        "meaning": "đưa (ai đó) đi cùng",
        "example": "子供を動物園へ連れていった",
        "unit": "Unit 10",
        "example_vi": "Tôi đưa con đi sở thú"
    },
    {
        "id": "vocab_728",
        "kanji": "寄る",
        "furigana": "よる",
        "meaning": "tiếp cận, tiếp cận, tụ tập, gặp gỡ",
        "example": "窓の側に寄って、外を見た",
        "unit": "Unit 10",
        "example_vi": "Tôi bước đến cửa sổ và nhìn ra ngoài"
    },
    {
        "id": "vocab_729",
        "kanji": "寄せる",
        "furigana": "よせる",
        "meaning": "đưa lại gần hơn, đưa lại gần hơn. tập hợp, gửi",
        "example": "地震のときは車を道の左側に寄せて、止めなければならない",
        "unit": "Unit 10",
        "example_vi": "khi xảy ra động đất phải cho xe tấp vào lề đường bên trái rồi dừng lại"
    },
    {
        "id": "vocab_730",
        "kanji": "与える",
        "furigana": "あたえる",
        "meaning": "cho, cung cấp, trao giải",
        "example": "成績の良い学生に奨学金を与える",
        "unit": "Unit 10",
        "example_vi": "Trao học bổng cho học sinh đạt điểm cao"
    },
    {
        "id": "vocab_731",
        "kanji": "得る",
        "furigana": "える",
        "meaning": "tiếp nhận, chinh phục, có thể, có thể",
        "example": "収入を得る",
        "unit": "Unit 10",
        "example_vi": "Kiếm tiền"
    },
    {
        "id": "vocab_732",
        "kanji": "向く",
        "furigana": "むく",
        "meaning": "được quay, quay",
        "example": "私の部屋は、東南を(に)向いている",
        "unit": "Unit 10",
        "example_vi": "Phòng của tôi hướng về phía đông nam"
    },
    {
        "id": "vocab_733",
        "kanji": "向ける",
        "furigana": "むける",
        "meaning": "rẽ, đảo ngược, gửi, trực tiếp",
        "example": "顔を右に向ける",
        "unit": "Unit 10",
        "example_vi": "Quay mặt sang phải"
    },
    {
        "id": "vocab_734",
        "kanji": "勧める",
        "furigana": "すすめる",
        "meaning": "khuyên, đề nghị, đề nghị",
        "example": "ダイエットしている友人に、一緒にウォーキングをしようと勧めた",
        "unit": "Unit 10",
        "example_vi": "Tôi đã khuyến khích một người bạn đang ăn kiêng đi dạo cùng tôi"
    },
    {
        "id": "vocab_735",
        "kanji": "薦める",
        "furigana": "すすめる",
        "meaning": "giới thiệu",
        "example": "先生に薦められた本を買った",
        "unit": "Unit 10",
        "example_vi": "Tôi đã mua một cuốn sách được giáo viên giới thiệu"
    },
    {
        "id": "vocab_736",
        "kanji": "任せる",
        "furigana": "まかせる",
        "meaning": "giao phó, giao phó, tin tưởng",
        "example": "責任の重い仕事を新人に任せてみた",
        "unit": "Unit 10",
        "example_vi": "Tôi giao công việc có trách nhiệm nặng nề cho người mới"
    },
    {
        "id": "vocab_737",
        "kanji": "守る",
        "furigana": "まもる",
        "meaning": "bảo vệ, bảo vệ, quan sát",
        "example": "法律を守る",
        "unit": "Unit 10",
        "example_vi": "Tôi tuân thủ pháp luật"
    },
    {
        "id": "vocab_738",
        "kanji": "争う",
        "furigana": "あらそう",
        "meaning": "tranh cãi, đánh nhau, cãi nhau",
        "example": "あの兄弟はいつも小さなことで争っている",
        "unit": "Unit 10",
        "example_vi": "Những anh em đó luôn cãi nhau vì những điều nhỏ nhặt"
    },
    {
        "id": "vocab_739",
        "kanji": "望む",
        "furigana": "のぞむ",
        "meaning": "ước, hy vọng",
        "example": "卒業後は、教師になることを望んでいる",
        "unit": "Unit 10",
        "example_vi": "Tôi mong muốn trở thành giáo viên sau khi tốt nghiệp"
    },
    {
        "id": "vocab_740",
        "kanji": "信じる",
        "furigana": "しんじる",
        "meaning": "tin tưởng, tin cậy. hãy chắc chắn",
        "example": "昨日、幽霊を見たよ、嘘、信じられない",
        "unit": "Unit 10",
        "example_vi": "Hôm qua tôi thấy ma, tôi không thể tin được"
    },
    {
        "id": "vocab_741",
        "kanji": "通じる",
        "furigana": "つうじる",
        "meaning": "truyền đạt, chuyển tiếp, dẫn đi đâu đó, có thể hiểu được",
        "example": "日本に来たとき、私の日本語が通じるかどうか心配だった",
        "unit": "Unit 11",
        "example_vi": "Khi đến Nhật Bản, tôi lo lắng liệu tiếng Nhật của mình có hiểu được không"
    },
    {
        "id": "vocab_742",
        "kanji": "飽きる",
        "furigana": "あきる",
        "meaning": "chán, mất hứng thú, chán",
        "example": "好きな物でも、毎日食べると、飽きてしまう",
        "unit": "Unit 11",
        "example_vi": "Dù ăn món mình thích nhưng ngày nào cũng thấy chán"
    },
    {
        "id": "vocab_743",
        "kanji": "思いつく",
        "furigana": "おもいつく",
        "meaning": "nghĩ ra, nghĩ ra, nảy ra ý tưởng",
        "example": "アイディアを思いつく",
        "unit": "Unit 11",
        "example_vi": "Tôi nảy ra một ý tưởng"
    },
    {
        "id": "vocab_744",
        "kanji": "思いやる",
        "furigana": "おもいやる",
        "meaning": "nghĩ về ai đó. bảo trọng",
        "example": "父親の言葉は厳しかったが、その言葉には子供を思いやる気持ちが表れていた",
        "unit": "Unit 11",
        "example_vi": "Lời của bố tuy gay gắt nhưng lời nói của ông cho thấy ông rất quan tâm đến con mình"
    },
    {
        "id": "vocab_745",
        "kanji": "熱中する",
        "furigana": "ねっちゅうする",
        "meaning": "cống hiến hết mình cho việc gì đó, say mê vào việc gì đó",
        "example": "母は今カラオケに熱中している",
        "unit": "Unit 11",
        "example_vi": "Mẹ tôi hiện nay đam mê karaoke"
    },
    {
        "id": "vocab_746",
        "kanji": "暮らす",
        "furigana": "くらす",
        "meaning": "sống, tồn tại, kiếm sống",
        "example": "都会で暮らすのは便利だが、お金がかかる",
        "unit": "Unit 11",
        "example_vi": "Sống ở thành phố thuận tiện nhưng đắt đỏ"
    },
    {
        "id": "vocab_747",
        "kanji": "巻く",
        "furigana": "まく",
        "meaning": "cuộn lên, cuộn lên, cuộn lại",
        "example": "マフラーを首に巻く",
        "unit": "Unit 11",
        "example_vi": "Quấn một chiếc khăn quanh cổ"
    },
    {
        "id": "vocab_748",
        "kanji": "結ぶ",
        "furigana": "むすぶ",
        "meaning": "ràng buộc, ràng buộc, kết luận (thỏa thuận)",
        "example": "靴の紐を結ぶ",
        "unit": "Unit 11",
        "example_vi": "Buộc giày của bạn"
    },
    {
        "id": "vocab_749",
        "kanji": "済む",
        "furigana": "すむ",
        "meaning": "kết thúc, quản lý, giải quyết",
        "example": "仕事が済んだら、すぐ帰る",
        "unit": "Unit 11",
        "example_vi": "Về nhà ngay sau giờ làm việc"
    },
    {
        "id": "vocab_750",
        "kanji": "済ませる／済ます",
        "furigana": "すませる／すます",
        "meaning": "xong, trả (nợ)",
        "example": "お金の支払いを済ませる",
        "unit": "Unit 11",
        "example_vi": "Thanh toán hóa đơn của bạn"
    },
    {
        "id": "vocab_751",
        "kanji": "出来る",
        "furigana": "できる",
        "meaning": "có thể",
        "example": "駅前に新しいスーパーができた",
        "unit": "Unit 11",
        "example_vi": "Một siêu thị mới đã mở trước nhà ga"
    },
    {
        "id": "vocab_752",
        "kanji": "切れる",
        "furigana": "きれる",
        "meaning": "cắt tốt, sắc nét, cắt",
        "example": "このはさみは良く切れる",
        "unit": "Unit 11",
        "example_vi": "Những chiếc kéo này cắt tốt"
    },
    {
        "id": "vocab_753",
        "kanji": "切らす",
        "furigana": "きらす",
        "meaning": "làm cạn kiệt nguồn cung cấp smth.",
        "example": "うっかりしていて、砂糖を切らしてしまった",
        "unit": "Unit 11",
        "example_vi": "Tôi đã bất cẩn và hết đường"
    },
    {
        "id": "vocab_754",
        "kanji": "伝わる",
        "furigana": "つたわる",
        "meaning": "được truyền đi, lan rộng, di chuyển theo thứ gì đó",
        "example": "彼が結婚するという噂が伝わってきた",
        "unit": "Unit 11",
        "example_vi": "Tin đồn bạn trai sắp lấy vợ lan truyền"
    },
    {
        "id": "vocab_755",
        "kanji": "伝える",
        "furigana": "つたえる",
        "meaning": "truyền tải, liên lạc, phân phối",
        "example": "電話で用事を伝える",
        "unit": "Unit 11",
        "example_vi": "Tôi nói với anh ấy về công việc kinh doanh của tôi qua điện thoại"
    },
    {
        "id": "vocab_756",
        "kanji": "続く",
        "furigana": "つづく",
        "meaning": "tiếp tục, cuối cùng, cuối cùng, theo dõi điều gì đó",
        "example": "雨の日が続く",
        "unit": "Unit 11",
        "example_vi": "Những ngày mưa tiếp tục"
    },
    {
        "id": "vocab_757",
        "kanji": "続ける",
        "furigana": "つづける",
        "meaning": "tiếp tục",
        "example": "もう三時間も会議を続けている",
        "unit": "Unit 11",
        "example_vi": "Chúng ta đã họp được ba tiếng rồi"
    },
    {
        "id": "vocab_758",
        "kanji": "つながる",
        "furigana": "つながる",
        "meaning": "được gắn vào, được gắn vào",
        "example": "本州と四国は橋で繋がっている",
        "unit": "Unit 11",
        "example_vi": "Honshu và Shikoku được kết nối bằng một cây cầu"
    },
    {
        "id": "vocab_759",
        "kanji": "つなぐ",
        "furigana": "つなぐ",
        "meaning": "buộc, ràng buộc, kết nối",
        "example": "この橋は本州と四国を繋いでいる",
        "unit": "Unit 11",
        "example_vi": "Tôi muốn biến cơ hội này thành công"
    },
    {
        "id": "vocab_760",
        "kanji": "つなげる",
        "furigana": "つなげる",
        "meaning": "buộc, ràng buộc, kết nối",
        "example": "このチャンスを是非成功に繋げたい",
        "unit": "Unit 11",
        "example_vi": ""
    },
    {
        "id": "vocab_761",
        "kanji": "伸びる",
        "furigana": "のびる",
        "meaning": "kéo dài. kéo dài, căng ra. phát triển",
        "example": "背が伸びる",
        "unit": "Unit 11",
        "example_vi": "Tôi đang cao dần"
    },
    {
        "id": "vocab_762",
        "kanji": "伸ばす",
        "furigana": "のばす",
        "meaning": "kéo dài, kéo dài, phát triển",
        "example": "髪を伸ばす",
        "unit": "Unit 11",
        "example_vi": "Tôi đang mọc tóc"
    },
    {
        "id": "vocab_763",
        "kanji": "延びる",
        "furigana": "のびる",
        "meaning": "duỗi ra, duỗi ra",
        "example": "レポートの締め切りが延びて、良かった",
        "unit": "Unit 11",
        "example_vi": "Tôi rất vui vì thời hạn báo cáo của tôi đã được gia hạn"
    },
    {
        "id": "vocab_764",
        "kanji": "延ばす",
        "furigana": "のばす",
        "meaning": "gia hạn",
        "example": "チケットが取れなかったので、帰国の日を延ばした",
        "unit": "Unit 11",
        "example_vi": "Không mua được vé nên hoãn ngày về"
    },
    {
        "id": "vocab_765",
        "kanji": "重なる",
        "furigana": "かさなる",
        "meaning": "nằm chồng lên nhau, tích tụ, nối tiếp nhau",
        "example": "印刷したら、紙が二枚重なって出てきた",
        "unit": "Unit 11",
        "example_vi": "Khi tôi in ra thì có hai tờ giấy xếp chồng lên nhau"
    },
    {
        "id": "vocab_766",
        "kanji": "重ねる",
        "furigana": "かさねる",
        "meaning": "chồng cái này lên cái kia, lặp lại, đeo cái này lên cái kia",
        "example": "皿を重ねて、置いておく",
        "unit": "Unit 11",
        "example_vi": "Xếp các đĩa lại và để chúng ở đó"
    },
    {
        "id": "vocab_767",
        "kanji": "広がる",
        "furigana": "ひろがる",
        "meaning": "mở rộng, lan rộng",
        "example": "道幅が広がって、歩きやすくなった",
        "unit": "Unit 11",
        "example_vi": "Đường đã rộng hơn, đi lại dễ dàng hơn"
    },
    {
        "id": "vocab_768",
        "kanji": "広げる",
        "furigana": "ひろげる",
        "meaning": "mở rộng, phân phối",
        "example": "お客さんが増えているので、もっと店を広げたい",
        "unit": "Unit 11",
        "example_vi": "Lượng khách hàng ngày càng tăng nên tôi muốn mở thêm cửa hàng"
    },
    {
        "id": "vocab_769",
        "kanji": "載る",
        "furigana": "のる",
        "meaning": "nằm trên một cái gì đó, được đắm mình",
        "example": "この荷物は大きすぎて、私の車には載らないだろう",
        "unit": "Unit 11",
        "example_vi": "Hành lý này quá lớn nên không vừa trong xe của tôi"
    },
    {
        "id": "vocab_770",
        "kanji": "載せる",
        "furigana": "のせる",
        "meaning": "đặt, đặt. tải",
        "example": "棚に荷物を載せる",
        "unit": "Unit 11",
        "example_vi": "Tôi đặt hành lý lên kệ"
    },
    {
        "id": "vocab_771",
        "kanji": "そろう",
        "furigana": "そろう",
        "meaning": "đầy đủ, có sức mạnh, hài hòa",
        "example": "全員が揃ったら、出発しましょう",
        "unit": "Unit 11",
        "example_vi": "Khi mọi người đã ở đây thì hãy rời đi"
    },
    {
        "id": "vocab_772",
        "kanji": "そろえる",
        "furigana": "そろえる",
        "meaning": "chọn (đặt), sắp xếp theo thứ tự",
        "example": "マージャンをするため、メンバーを揃えた",
        "unit": "Unit 11",
        "example_vi": "Tập hợp các thành viên chơi mạt chược"
    },
    {
        "id": "vocab_773",
        "kanji": "まとまる",
        "furigana": "まとまる",
        "meaning": "ổn định, giải quyết, thu thập, thỏa thuận",
        "example": "三時間話し合って、やっとクラスの意見が纏まった",
        "unit": "Unit 11",
        "example_vi": "Sau ba giờ thảo luận, cuối cùng cả lớp cũng đi đến thống nhất"
    },
    {
        "id": "vocab_774",
        "kanji": "まとめる",
        "furigana": "まとめる",
        "meaning": "giải quyết, giải quyết, thu thập",
        "example": "引っ越しの前に、要らなくなった物を纏めて、捨てた",
        "unit": "Unit 11",
        "example_vi": "Trước khi chuyển đi, chúng tôi đã đóng gói tất cả những thứ không còn cần thiết và vứt đi"
    },
    {
        "id": "vocab_775",
        "kanji": "付く",
        "furigana": "つく",
        "meaning": "được gắn bó. bám vào. được đính kèm",
        "example": "怪我をして、シャツに血が付いた",
        "unit": "Unit 11",
        "example_vi": "Bị thương và dính máu trên áo"
    },
    {
        "id": "vocab_776",
        "kanji": "付ける",
        "furigana": "つける",
        "meaning": "đính kèm, áp đặt, đính kèm",
        "example": "パンにジャムを付ける",
        "unit": "Unit 11",
        "example_vi": "Cho mứt vào bánh mì"
    },
    {
        "id": "vocab_777",
        "kanji": "たまる",
        "furigana": "たまる",
        "meaning": "tích lũy, tập hợp",
        "example": "お金が溜まる",
        "unit": "Unit 11",
        "example_vi": "Thu tiền"
    },
    {
        "id": "vocab_778",
        "kanji": "ためる",
        "furigana": "ためる",
        "meaning": "chồng chất lên. thu thập thành một đống, thu thập, tích lũy",
        "example": "お金を溜める",
        "unit": "Unit 11",
        "example_vi": "Tiết kiệm tiền"
    },
    {
        "id": "vocab_779",
        "kanji": "交じる／混じる",
        "furigana": "まじる",
        "meaning": "được trộn lẫn, tham gia",
        "example": "女の子が男の子に混じって、サッカーをしている",
        "unit": "Unit 11",
        "example_vi": "Con gái chơi bóng đá với con trai"
    },
    {
        "id": "vocab_780",
        "kanji": "交ざる／混ざる",
        "furigana": "まざる",
        "meaning": "được trộn lẫn, trộn lẫn",
        "example": "男女が混ざってサッカーをした",
        "unit": "Unit 11",
        "example_vi": "Nam nữ cùng nhau chơi bóng đá"
    },
    {
        "id": "vocab_781",
        "kanji": "交ぜる／混ぜる",
        "furigana": "まぜる",
        "meaning": "trộn, bao gồm",
        "example": "お米に豆を混ぜて炊いた",
        "unit": "Unit 11",
        "example_vi": "Tôi nấu cơm với đậu"
    },
    {
        "id": "vocab_782",
        "kanji": "解ける／溶ける",
        "furigana": "とける",
        "meaning": "hòa tan, tan chảy, tan chảy",
        "example": "三時間かかって、やっと問題が解けた",
        "unit": "Unit 11",
        "example_vi": "Tôi phải mất ba giờ mới giải quyết được vấn đề"
    },
    {
        "id": "vocab_783",
        "kanji": "解く／溶く／溶かす",
        "furigana": "とく／とかす",
        "meaning": "hòa tan, nới lỏng",
        "example": "数学の問題を解く",
        "unit": "Unit 11",
        "example_vi": "Giải một bài toán"
    },
    {
        "id": "vocab_784",
        "kanji": "含む",
        "furigana": "ふくむ",
        "meaning": "chứa, chứa",
        "example": "レモンはビタミンCを多く含んでいる",
        "unit": "Unit 11",
        "example_vi": "Quả chanh chứa nhiều vitamin C"
    },
    {
        "id": "vocab_785",
        "kanji": "含める",
        "furigana": "ふくめる",
        "meaning": "bao gồm, giải thích",
        "example": "家の家族は私を含めて五人です",
        "unit": "Unit 11",
        "example_vi": "Gia đình tôi có năm người, trong đó có tôi"
    },
    {
        "id": "vocab_786",
        "kanji": "抜ける",
        "furigana": "ぬける",
        "meaning": "rơi ra ngoài. đưa ra, vượt qua, bỏ đi",
        "example": "髪の毛が抜ける",
        "unit": "Unit 11",
        "example_vi": "Tóc của tôi đang rụng"
    },
    {
        "id": "vocab_787",
        "kanji": "抜く",
        "furigana": "ぬく",
        "meaning": "rút ra, rút ​​ra. xóa",
        "example": "虫歯を抜く",
        "unit": "Unit 11",
        "example_vi": "Tôi có một khoang được rút ra"
    },
    {
        "id": "vocab_788",
        "kanji": "現れる",
        "furigana": "あらわれる",
        "meaning": "biểu hiện, lộ ra, xuất hiện",
        "example": "犯人は金を取りに現れたところを逮捕された",
        "unit": "Unit 11",
        "example_vi": "Thủ phạm bị bắt khi đến nhận tiền"
    },
    {
        "id": "vocab_789",
        "kanji": "現す",
        "furigana": "あらわす",
        "meaning": "biểu hiện, tiết lộ, bày tỏ",
        "example": "雲が無くなって、富士山が姿を現した",
        "unit": "Unit 11",
        "example_vi": "Mây biến mất và núi Phú Sĩ xuất hiện"
    },
    {
        "id": "vocab_790",
        "kanji": "表れる",
        "furigana": "あらわれる",
        "meaning": "bày tỏ, được bày tỏ",
        "example": "彼の顔には合格した喜びが表れていた",
        "unit": "Unit 11",
        "example_vi": "Khuôn mặt anh hiện rõ niềm vui đi qua"
    },
    {
        "id": "vocab_791",
        "kanji": "表す",
        "furigana": "あらわす",
        "meaning": "thể hiện",
        "example": "気持ちを言葉で表す",
        "unit": "Unit 11",
        "example_vi": "Bày tỏ cảm xúc của mình bằng lời nói"
    },
    {
        "id": "vocab_792",
        "kanji": "散る",
        "furigana": "ちる",
        "meaning": "vỡ vụn, tiêu tan, vỡ vụn",
        "example": "風で桜が散ってしまった",
        "unit": "Unit 11",
        "example_vi": "Gió đã rải hoa anh đào"
    },
    {
        "id": "vocab_793",
        "kanji": "散らす",
        "furigana": "ちらす",
        "meaning": "tán xạ, tán xạ, tán xạ",
        "example": "風が桜を散らしてしまった",
        "unit": "Unit 11",
        "example_vi": "Gió đã rải hoa anh đào"
    },
    {
        "id": "vocab_794",
        "kanji": "明ける",
        "furigana": "あける",
        "meaning": "bình minh, bình minh, bắt đầu (về năm mới)",
        "example": "夜が明ける",
        "unit": "Unit 11",
        "example_vi": "Màn đêm đã buông xuống"
    },
    {
        "id": "vocab_795",
        "kanji": "差す",
        "furigana": "さす",
        "meaning": "rơi (về ánh sáng), đến (về nước). bước tới, mở ô, đưa tay",
        "example": "雨が止んで、日が差してきた",
        "unit": "Unit 11",
        "example_vi": "Mưa đã tạnh và nắng đã ló dạng"
    },
    {
        "id": "vocab_796",
        "kanji": "パートナー",
        "furigana": "パートナー",
        "meaning": "đối tác",
        "example": "",
        "unit": "Unit 11"
    },
    {
        "id": "vocab_797",
        "kanji": "リーダー",
        "furigana": "リーダー",
        "meaning": "lãnh đạo",
        "example": "",
        "unit": "Unit 11"
    },
    {
        "id": "vocab_798",
        "kanji": "ボランティア",
        "furigana": "ボランティア",
        "meaning": "tình nguyện",
        "example": "",
        "unit": "Unit 11"
    },
    {
        "id": "vocab_799",
        "kanji": "コミュニケーション",
        "furigana": "コミュニケーション",
        "meaning": "giao tiếp",
        "example": "",
        "unit": "Unit 11"
    },
    {
        "id": "vocab_800",
        "kanji": "ユーモア",
        "furigana": "ユーモア",
        "meaning": "hài hước",
        "example": "",
        "unit": "Unit 11"
    },
    {
        "id": "vocab_801",
        "kanji": "ショック",
        "furigana": "ショック",
        "meaning": "sốc",
        "example": "",
        "unit": "Unit 11"
    },
    {
        "id": "vocab_802",
        "kanji": "ストレス",
        "furigana": "ストレス",
        "meaning": "căng thẳng",
        "example": "",
        "unit": "Unit 11"
    },
    {
        "id": "vocab_803",
        "kanji": "バランス",
        "furigana": "バランス",
        "meaning": "cân bằng",
        "example": "",
        "unit": "Unit 11"
    },
    {
        "id": "vocab_804",
        "kanji": "レベル",
        "furigana": "レベル",
        "meaning": "cấp độ",
        "example": "",
        "unit": "Unit 11"
    },
    {
        "id": "vocab_805",
        "kanji": "アップ",
        "furigana": "アップ",
        "meaning": "lên",
        "example": "",
        "unit": "Unit 11"
    },
    {
        "id": "vocab_806",
        "kanji": "ダウン",
        "furigana": "ダウン",
        "meaning": "dưới cùng",
        "example": "",
        "unit": "Unit 11"
    },
    {
        "id": "vocab_807",
        "kanji": "プラス",
        "furigana": "プラス",
        "meaning": "cộng",
        "example": "",
        "unit": "Unit 11"
    },
    {
        "id": "vocab_808",
        "kanji": "マイナス",
        "furigana": "マイナス",
        "meaning": "trừ",
        "example": "",
        "unit": "Unit 11"
    },
    {
        "id": "vocab_809",
        "kanji": "イメージ",
        "furigana": "イメージ",
        "meaning": "hình ảnh, trí tưởng tượng",
        "example": "",
        "unit": "Unit 11"
    },
    {
        "id": "vocab_810",
        "kanji": "コンテスト",
        "furigana": "コンテスト",
        "meaning": "cạnh tranh, cạnh tranh",
        "example": "",
        "unit": "Unit 11"
    },
    {
        "id": "vocab_811",
        "kanji": "マスコミ",
        "furigana": "マスコミ",
        "meaning": "truyền thông đại chúng",
        "example": "",
        "unit": "Unit 11"
    },
    {
        "id": "vocab_812",
        "kanji": "プライバシー",
        "furigana": "プライバシー",
        "meaning": "đời sống riêng tư, chuyện riêng tư",
        "example": "",
        "unit": "Unit 11"
    },
    {
        "id": "vocab_813",
        "kanji": "オフィス",
        "furigana": "オフィス",
        "meaning": "văn phòng",
        "example": "",
        "unit": "Unit 11"
    },
    {
        "id": "vocab_814",
        "kanji": "ルール",
        "furigana": "ルール",
        "meaning": "quy tắc",
        "example": "",
        "unit": "Unit 11"
    },
    {
        "id": "vocab_815",
        "kanji": "マナー",
        "furigana": "マナー",
        "meaning": "cách cư xử",
        "example": "",
        "unit": "Unit 12"
    },
    {
        "id": "vocab_816",
        "kanji": "ミス",
        "furigana": "ミス",
        "meaning": "lỗi",
        "example": "",
        "unit": "Unit 12"
    },
    {
        "id": "vocab_817",
        "kanji": "スケジュール",
        "furigana": "スケジュール",
        "meaning": "lịch trình, kế hoạch. lịch trình",
        "example": "",
        "unit": "Unit 12"
    },
    {
        "id": "vocab_818",
        "kanji": "タイトル",
        "furigana": "タイトル",
        "meaning": "phụ đề, phụ đề",
        "example": "",
        "unit": "Unit 12"
    },
    {
        "id": "vocab_819",
        "kanji": "テーマ",
        "furigana": "テーマ",
        "meaning": "chủ đề",
        "example": "",
        "unit": "Unit 12"
    },
    {
        "id": "vocab_820",
        "kanji": "ストーリー",
        "furigana": "ストーリー",
        "meaning": "lịch sử, câu chuyện",
        "example": "",
        "unit": "Unit 12"
    },
    {
        "id": "vocab_821",
        "kanji": "ヒット",
        "furigana": "ヒット",
        "meaning": "đánh",
        "example": "",
        "unit": "Unit 12"
    },
    {
        "id": "vocab_822",
        "kanji": "ブランド",
        "furigana": "ブランド",
        "meaning": "thương hiệu",
        "example": "",
        "unit": "Unit 12"
    },
    {
        "id": "vocab_823",
        "kanji": "レンタル",
        "furigana": "レンタル",
        "meaning": "thuê",
        "example": "",
        "unit": "Unit 12"
    },
    {
        "id": "vocab_824",
        "kanji": "リサイクル",
        "furigana": "リサイクル",
        "meaning": "tái chế",
        "example": "",
        "unit": "Unit 12"
    },
    {
        "id": "vocab_825",
        "kanji": "ラベル",
        "furigana": "ラベル",
        "meaning": "nhãn, nhãn, nhãn",
        "example": "",
        "unit": "Unit 12"
    },
    {
        "id": "vocab_826",
        "kanji": "タイプ",
        "furigana": "タイプ",
        "meaning": "loại, cấp",
        "example": "",
        "unit": "Unit 12"
    },
    {
        "id": "vocab_827",
        "kanji": "スタイル",
        "furigana": "スタイル",
        "meaning": "phong cách",
        "example": "",
        "unit": "Unit 12"
    },
    {
        "id": "vocab_828",
        "kanji": "セット",
        "furigana": "セット",
        "meaning": "bộ, bộ",
        "example": "",
        "unit": "Unit 12"
    },
    {
        "id": "vocab_829",
        "kanji": "ウイルス",
        "furigana": "ウイルス",
        "meaning": "virus",
        "example": "",
        "unit": "Unit 12"
    },
    {
        "id": "vocab_830",
        "kanji": "ロボット",
        "furigana": "ロボット",
        "meaning": "robot",
        "example": "",
        "unit": "Unit 12"
    },
    {
        "id": "vocab_831",
        "kanji": "エネルギー",
        "furigana": "エネルギー",
        "meaning": "năng lượng",
        "example": "",
        "unit": "Unit 12"
    },
    {
        "id": "vocab_832",
        "kanji": "デジタル",
        "furigana": "デジタル",
        "meaning": "kỹ thuật số",
        "example": "",
        "unit": "Unit 12"
    },
    {
        "id": "vocab_833",
        "kanji": "マイク",
        "furigana": "マイク",
        "meaning": "micro",
        "example": "",
        "unit": "Unit 12"
    },
    {
        "id": "vocab_834",
        "kanji": "ブレーキ",
        "furigana": "ブレーキ",
        "meaning": "phanh",
        "example": "",
        "unit": "Unit 12"
    },
    {
        "id": "vocab_835",
        "kanji": "ペンキ",
        "furigana": "ペンキ",
        "meaning": "sơn sơn",
        "example": "",
        "unit": "Unit 12"
    },
    {
        "id": "vocab_836",
        "kanji": "炊ける",
        "furigana": "たける",
        "meaning": "được chuẩn bị",
        "example": "ごはんがかけた",
        "unit": "Unit 12",
        "example_vi": "Nấu cơm"
    },
    {
        "id": "vocab_837",
        "kanji": "炊く",
        "furigana": "たく",
        "meaning": "nấu ăn (thức ăn), nấu ăn",
        "example": "ごはんをたく",
        "unit": "Unit 12",
        "example_vi": "Nấu cơm"
    },
    {
        "id": "vocab_838",
        "kanji": "煮える",
        "furigana": "にえる",
        "meaning": "đun sôi, nấu chín",
        "example": "",
        "unit": "Unit 12"
    },
    {
        "id": "vocab_839",
        "kanji": "煮る",
        "furigana": "にる",
        "meaning": "nấu ăn",
        "example": "",
        "unit": "Unit 12"
    },
    {
        "id": "vocab_840",
        "kanji": "炒める",
        "furigana": "いためる",
        "meaning": "chiên rán",
        "example": "",
        "unit": "Unit 12"
    },
    {
        "id": "vocab_841",
        "kanji": "焼ける",
        "furigana": "やける",
        "meaning": "chiên, nướng, đốt",
        "example": "よく焼けていない豚肉は食べないほうがいい",
        "unit": "Unit 12",
        "example_vi": "Tốt hơn hết là không nên ăn thịt lợn chưa được nấu chín kỹ"
    },
    {
        "id": "vocab_842",
        "kanji": "焼く",
        "furigana": "やく",
        "meaning": "đốt, chiên, nướng",
        "example": "フライパンでオムレツを焼く",
        "unit": "Unit 12",
        "example_vi": "Nướng trứng tráng trong chảo rán"
    },
    {
        "id": "vocab_843",
        "kanji": "ゆでる",
        "furigana": "ゆでる",
        "meaning": "nấu ăn",
        "example": "厚い湯で卵をゆでる",
        "unit": "Unit 12",
        "example_vi": "Luộc trứng trong nước đặc"
    },
    {
        "id": "vocab_844",
        "kanji": "揚げる",
        "furigana": "あげる",
        "meaning": "chiên ngập dầu",
        "example": "油揚天ぷらをあげる",
        "unit": "Unit 12",
        "example_vi": "Phục vụ tempura đậu phụ chiên"
    },
    {
        "id": "vocab_845",
        "kanji": "蒸す",
        "furigana": "むす",
        "meaning": "hấp, đun nhỏ lửa",
        "example": "雪をわかして、その湯気でギョーザをむす",
        "unit": "Unit 12",
        "example_vi": "Làm tan tuyết và dùng hơi nước để làm gyoza"
    },
    {
        "id": "vocab_846",
        "kanji": "ぐっすり",
        "furigana": "ぐっすり",
        "meaning": "ngủ ngon",
        "example": "子供はぐっすり眠っていて、起こしても中々起きなかった",
        "unit": "Unit 12",
        "example_vi": "Đứa trẻ đang ngủ say và không thức dậy ngay cả khi tôi đánh thức nó"
    },
    {
        "id": "vocab_847",
        "kanji": "きちんと",
        "furigana": "きちんと",
        "meaning": "gọn gàng, sạch sẽ, chính xác",
        "example": "背中を真っ直ぐにして、きちんと座りなさい",
        "unit": "Unit 12",
        "example_vi": "Ngồi thẳng lưng"
    },
    {
        "id": "vocab_848",
        "kanji": "しっかり",
        "furigana": "しっかり",
        "meaning": "mạnh mẽ, đáng tin cậy",
        "example": "まず基礎をしっかりと身につけることが大切だ",
        "unit": "Unit 12",
        "example_vi": "Điều quan trọng là phải nắm vững những điều cơ bản trước"
    },
    {
        "id": "vocab_849",
        "kanji": "はっきり",
        "furigana": "はっきり",
        "meaning": "rõ ràng, rõ ràng",
        "example": "富士山がはっきり見える",
        "unit": "Unit 12",
        "example_vi": "Có thể thấy rõ núi Phú Sĩ"
    },
    {
        "id": "vocab_850",
        "kanji": "じっと",
        "furigana": "じっと",
        "meaning": "bình tĩnh, lặng lẽ, kiên nhẫn, chăm chú. sâu sắc",
        "example": "じっと見る",
        "unit": "Unit 12",
        "example_vi": "Nhìn kỹ"
    },
    {
        "id": "vocab_851",
        "kanji": "そっと",
        "furigana": "そっと",
        "meaning": "nhẹ nhàng, lặng lẽ, bí mật, lén lút, như vốn có, không chạm vào",
        "example": "寝ている人を起こさないように、そっと部屋を出た",
        "unit": "Unit 12",
        "example_vi": "Tôi lặng lẽ rời khỏi phòng để không đánh thức người đang ngủ. Bọc sôcôla và bánh quy riêng biệt. Mọi người đều bày tỏ ý kiến ​​của mình. Họ động viên nhau và luyện tập. Phóng viên báo chí cần được nghe trực tiếp ý kiến ​​của những người liên quan. Tôi thực sự hạnh phúc vì đã giành chiến thắng. Vui lòng đảm bảo gửi tài liệu này vào ngày mai. Tôi chắc chắn sẽ đậu trong năm nay. Tôi thích tất cả các loại trái cây, nhưng tôi đặc biệt thích dưa. Đứa trẻ nghe được gì thì cũng chỉ khóc."
    },
    {
        "id": "vocab_852",
        "kanji": "別々に",
        "furigana": "べつべつに",
        "meaning": "riêng biệt, riêng biệt",
        "example": "チョコレートとクッキーは別々に包んでください",
        "unit": "Unit 12",
        "example_vi": ""
    },
    {
        "id": "vocab_853",
        "kanji": "それぞれ",
        "furigana": "それぞれ",
        "meaning": "từng cái riêng lẻ",
        "example": "皆は其れ其れ意見を言った",
        "unit": "Unit 12",
        "example_vi": ""
    },
    {
        "id": "vocab_854",
        "kanji": "互いに",
        "furigana": "たがいに",
        "meaning": "lẫn nhau, lẫn nhau. nhau",
        "example": "彼らは互いに励まし合って練習した",
        "unit": "Unit 12",
        "example_vi": ""
    },
    {
        "id": "vocab_855",
        "kanji": "直接",
        "furigana": "ちょくせつ",
        "meaning": "trực tiếp, trực tiếp, đích thân",
        "example": "新聞記者は関係者から直接話しを聞く必要がある",
        "unit": "Unit 12",
        "example_vi": ""
    },
    {
        "id": "vocab_856",
        "kanji": "本当に",
        "furigana": "ほんとうに",
        "meaning": "sự thật, trên thực tế",
        "example": "優勝できて、本当に嬉しい",
        "unit": "Unit 12",
        "example_vi": ""
    },
    {
        "id": "vocab_857",
        "kanji": "必ず",
        "furigana": "かならず",
        "meaning": "chắc chắn. nhất thiết",
        "example": "この書類は明日必ず出してください",
        "unit": "Unit 12",
        "example_vi": ""
    },
    {
        "id": "vocab_858",
        "kanji": "絶対に",
        "furigana": "ぜったいに",
        "meaning": "tuyệt đối. tuyệt đối, chắc chắn",
        "example": "今年は絶対に合格するつもりだ",
        "unit": "Unit 12",
        "example_vi": ""
    },
    {
        "id": "vocab_859",
        "kanji": "特に",
        "furigana": "とくに",
        "meaning": "đặc biệt, đặc biệt",
        "example": "果物は何でも好きですが、特にメロンが好きです",
        "unit": "Unit 12",
        "example_vi": ""
    },
    {
        "id": "vocab_860",
        "kanji": "ただ",
        "furigana": "ただ",
        "meaning": "chỉ, đơn giản, chỉ",
        "example": "子供は何を聞いても、ただ泣いているだけだった",
        "unit": "Unit 12",
        "example_vi": ""
    },
    {
        "id": "vocab_861",
        "kanji": "少なくとも",
        "furigana": "すくなくとも",
        "meaning": "ít nhất",
        "example": "個々から駅まで歩いたら、少なくとも三十分はかかるだろう",
        "unit": "Unit 12",
        "example_vi": "Tôi sẽ mất ít nhất 30 phút đi bộ từ ga này đến ga khác"
    },
    {
        "id": "vocab_862",
        "kanji": "決して",
        "furigana": "けっして",
        "meaning": "không đời nào. không hề",
        "example": "このことは決して他の人には言わないつもりだ",
        "unit": "Unit 12",
        "example_vi": "Tôi sẽ không bao giờ nói với ai về điều này"
    },
    {
        "id": "vocab_863",
        "kanji": "少しも",
        "furigana": "すこしも",
        "meaning": "từ tiêu cực không hề, không hề, không hề, hoàn toàn;",
        "example": "毎日運動しているのに、少しも体重が減らない",
        "unit": "Unit 12",
        "example_vi": "Dù tập thể dục hàng ngày nhưng tôi vẫn không giảm được cân nào"
    },
    {
        "id": "vocab_864",
        "kanji": "ちっとも",
        "furigana": "ちっとも",
        "meaning": "không hề, không hề",
        "example": "あの二人、付き合っているらしいよ、へえ、ちっとも知らなかった",
        "unit": "Unit 12",
        "example_vi": "Hình như hai người đó đang hẹn hò, haha, tôi không hề biết"
    },
    {
        "id": "vocab_865",
        "kanji": "全く",
        "furigana": "まったく",
        "meaning": "thực sự, hoàn toàn, hoàn toàn, hoàn toàn",
        "example": "タンさんが帰国したことを、私は全く知らなかった",
        "unit": "Unit 12",
        "example_vi": "Tôi không hề biết anh Tân đã về Nhật Bản"
    },
    {
        "id": "vocab_866",
        "kanji": "とても",
        "furigana": "とても",
        "meaning": "rất",
        "example": "このレポートはとても良く書けている",
        "unit": "Unit 12",
        "example_vi": "Báo cáo này được viết rất tốt"
    },
    {
        "id": "vocab_867",
        "kanji": "どんなに",
        "furigana": "どんなに",
        "meaning": "thế nào, bao nhiêu",
        "example": "どうして連絡してくれなかったの、どんなに心配したか、分かる",
        "unit": "Unit 12",
        "example_vi": "Tại sao bạn không liên lạc với tôi? Tôi có thể hiểu bạn đã lo lắng như thế nào"
    },
    {
        "id": "vocab_868",
        "kanji": "どうしても",
        "furigana": "どうしても",
        "meaning": "bằng mọi giá, không có cách nào, chắc chắn",
        "example": "このレポートはどうしても明日までに完成させなければならない",
        "unit": "Unit 12",
        "example_vi": "Tôi thực sự phải hoàn thành báo cáo này trước ngày mai"
    },
    {
        "id": "vocab_869",
        "kanji": "まるで",
        "furigana": "まるで",
        "meaning": "tuyệt đối, hoàn toàn",
        "example": "まだ五月なのに、まるで真夏のように、暑い",
        "unit": "Unit 12",
        "example_vi": "Vẫn là tháng 5 mà nóng như giữa hè"
    },
    {
        "id": "vocab_870",
        "kanji": "一体",
        "furigana": "いったい",
        "meaning": "thực ra, thực ra",
        "example": "あの人は一体何をしているのだろう",
        "unit": "Unit 12",
        "example_vi": "Tôi tự hỏi người đó đang làm gì"
    },
    {
        "id": "vocab_871",
        "kanji": "別に",
        "furigana": "べつに",
        "meaning": "đặc biệt. riêng. đặc biệt",
        "example": "別に用はなかったが、声が聞きたくなって、母に電話した",
        "unit": "Unit 12",
        "example_vi": "Tôi không có việc gì đặc biệt để làm nhưng tôi muốn nghe giọng nói của anh ấy nên tôi đã gọi cho mẹ tôi"
    },
    {
        "id": "vocab_872",
        "kanji": "たった",
        "furigana": "たった",
        "meaning": "chỉ một. không còn nữa",
        "example": "五千人の会場に、たった(の)百人しかお客さんが来なかった",
        "unit": "Unit 12",
        "example_vi": "Chỉ có (chỉ) 100 người tại địa điểm dành cho 5.000 người"
    },
    {
        "id": "vocab_873",
        "kanji": "ほんの",
        "furigana": "ほんの",
        "meaning": "chỉ, chỉ",
        "example": "個々から、隣町まで、バスで本の五分しかかからない",
        "unit": "Unit 12",
        "example_vi": "Chỉ mất 5 phút đi xe buýt để đến thị trấn tiếp theo."
    },
    {
        "id": "vocab_874",
        "kanji": "それで",
        "furigana": "それで",
        "meaning": "và do đó, vậy",
        "example": "今朝駅で事故があった、それで、二三時間電車が遅れた",
        "unit": "Unit 12",
        "example_vi": "Sáng nay ở ga xảy ra tai nạn nên tàu bị trễ vài tiếng"
    },
    {
        "id": "vocab_875",
        "kanji": "そこで",
        "furigana": "そこで",
        "meaning": "và...",
        "example": "新しいパソコンが必要になった、そこで、銀行から、貯金を少し下ろすことにした",
        "unit": "Unit 12",
        "example_vi": "Tôi cần một chiếc máy tính mới nên tôi quyết định rút một phần tiền tiết kiệm từ ngân hàng"
    },
    {
        "id": "vocab_876",
        "kanji": "そのうえ",
        "furigana": "そのうえ",
        "meaning": "ngoài ra, ngoài ra, ngoài ra",
        "example": "彼女は優秀な研究者だ、そのうえ、性格もいいので、皆から尊敬されている",
        "unit": "Unit 12",
        "example_vi": "Cô ấy là một nhà nghiên cứu xuất sắc và có nhân cách tốt nên mọi người đều kính trọng cô ấy"
    },
    {
        "id": "vocab_877",
        "kanji": "また",
        "furigana": "また",
        "meaning": "cũng vậy, và",
        "example": "彼は銀行員で、また、有名な作家でもある",
        "unit": "Unit 12",
        "example_vi": "Anh là nhân viên ngân hàng và cũng là nhà văn nổi tiếng"
    },
    {
        "id": "vocab_878",
        "kanji": "または",
        "furigana": "または",
        "meaning": "hoặc",
        "example": "この書類は黒又は青のペンで書くこと",
        "unit": "Unit 12",
        "example_vi": "Tài liệu này phải được viết bằng bút đen hoặc xanh"
    },
    {
        "id": "vocab_879",
        "kanji": "それとも",
        "furigana": "それとも",
        "meaning": "hoặc (hoặc)",
        "example": "コーヒーにしますか、それとも紅茶にしますか",
        "unit": "Unit 12",
        "example_vi": "Bạn muốn cà phê hay trà?"
    },
    {
        "id": "vocab_880",
        "kanji": "つまり",
        "furigana": "つまり",
        "meaning": "nói cách khác",
        "example": "彼は父の姉の息子、詰まり私の従兄弟にあたる",
        "unit": "Unit 12",
        "example_vi": "Anh ấy là con trai của chị gái bố tôi và là anh họ của tôi."
    }
];
