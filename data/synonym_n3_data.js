// Verified JLPT N3 80 Synonym Pairs & 95 Mondai 4 Quiz Questions
const SYNONYM_80_PAIRS = [
  {
    "id": "pair_1",
    "stt": 1,
    "word_a": "きつい",
    "read_a": "きつい",
    "word_b": "大変な",
    "read_b": "たいへんな",
    "meaning_vi": "Vất vả, khó khăn, nặng nhọc",
    "category": "Tính từ"
  },
  {
    "id": "pair_2",
    "stt": 2,
    "word_a": "くたびれた",
    "read_a": "くたびれた",
    "word_b": "疲れた",
    "read_b": "つかれた",
    "meaning_vi": "Mệt mỏi, kiệt sức",
    "category": "Động từ"
  },
  {
    "id": "pair_3",
    "stt": 3,
    "word_a": "単純",
    "read_a": "たんじゅん",
    "word_b": "わかりやすい",
    "read_b": "わかりやすい",
    "meaning_vi": "Đơn giản, dễ hiểu",
    "category": "Tính từ"
  },
  {
    "id": "pair_4",
    "stt": 4,
    "word_a": "明ける",
    "read_a": "あける",
    "word_b": "終わる",
    "read_b": "おわる",
    "meaning_vi": "Kết thúc, hết (kỳ nghỉ, mùa mưa)",
    "category": "Động từ"
  },
  {
    "id": "pair_5",
    "stt": 5,
    "word_a": "混雑している",
    "read_a": "こんざつしている",
    "word_b": "お客さんが多い",
    "read_b": "おきゃくさんがおおい",
    "meaning_vi": "Đông đúc, chen chúc",
    "category": "Động từ"
  },
  {
    "id": "pair_6",
    "stt": 6,
    "word_a": "通勤している",
    "read_a": "つうきんしている",
    "word_b": "仕事に行く",
    "read_b": "しごとにいく",
    "meaning_vi": "Đi làm hằng ngày",
    "category": "Động từ"
  },
  {
    "id": "pair_7",
    "stt": 7,
    "word_a": "恐ろしい",
    "read_a": "おそろしい",
    "word_b": "怖い",
    "read_b": "こわい",
    "meaning_vi": "Sợ hãi, đáng sợ, kinh khủng",
    "category": "Tính từ"
  },
  {
    "id": "pair_8",
    "stt": 8,
    "word_a": "訳",
    "read_a": "わけ",
    "word_b": "理由",
    "read_b": "りゆう",
    "meaning_vi": "Lý do, nguyên nhân",
    "category": "Danh từ"
  },
  {
    "id": "pair_9",
    "stt": 9,
    "word_a": "減る",
    "read_a": "へる",
    "word_b": "少なくなる",
    "read_b": "すくなくなる",
    "meaning_vi": "Giảm xuống, ít đi",
    "category": "Động từ"
  },
  {
    "id": "pair_10",
    "stt": 10,
    "word_a": "やり直す",
    "read_a": "やりなおす",
    "word_b": "もう一度やる",
    "read_b": "もういちどやる",
    "meaning_vi": "Làm lại từ đầu, sửa lại",
    "category": "Động từ"
  },
  {
    "id": "pair_11",
    "stt": 11,
    "word_a": "欠点",
    "read_a": "けってん",
    "word_b": "悪いところ",
    "read_b": "わるいところ",
    "meaning_vi": "Khuyết điểm, điểm xấu",
    "category": "Danh từ"
  },
  {
    "id": "pair_12",
    "stt": 12,
    "word_a": "翌年",
    "read_a": "よくねん",
    "word_b": "次の年 / 来年",
    "read_b": "つぎのとし / らいねん",
    "meaning_vi": "Năm sau, năm tiếp theo",
    "category": "Danh từ"
  },
  {
    "id": "pair_13",
    "stt": 13,
    "word_a": "スケジュール",
    "read_a": "スケジュール",
    "word_b": "予定",
    "read_b": "よてい",
    "meaning_vi": "Lịch trình, dự định",
    "category": "Katakana"
  },
  {
    "id": "pair_14",
    "stt": 14,
    "word_a": "楽な",
    "read_a": "らくな",
    "word_b": "簡単な",
    "read_b": "かんたんな",
    "meaning_vi": "Nhàn, dễ dàng, đơn giản",
    "category": "Tính từ"
  },
  {
    "id": "pair_15",
    "stt": 15,
    "word_a": "さっき",
    "read_a": "さっき",
    "word_b": "少し前",
    "read_b": "すこしまえ",
    "meaning_vi": "Vừa nãy, cách đây một lúc",
    "category": "Phó từ"
  },
  {
    "id": "pair_16",
    "stt": 16,
    "word_a": "共通点",
    "read_a": "きょうつうてん",
    "word_b": "同じ所",
    "read_b": "おなじところ",
    "meaning_vi": "Điểm chung, điểm giống nhau",
    "category": "Danh từ"
  },
  {
    "id": "pair_17",
    "stt": 17,
    "word_a": "整理する",
    "read_a": "せいりする",
    "word_b": "片付ける",
    "read_b": "かたづける",
    "meaning_vi": "Sắp xếp gọn gàng, dọn dẹp",
    "category": "Động từ"
  },
  {
    "id": "pair_18",
    "stt": 18,
    "word_a": "絶対に",
    "read_a": "ぜったいに",
    "word_b": "必ず",
    "read_b": "かならず",
    "meaning_vi": "Tuyệt đối, nhất định",
    "category": "Phó từ"
  },
  {
    "id": "pair_19",
    "stt": 19,
    "word_a": "内緒にして",
    "read_a": "ないしょにして",
    "word_b": "誰にも話さないで",
    "read_b": "だれにもはなさないで",
    "meaning_vi": "Giữ bí mật, đừng nói cho ai",
    "category": "Cụm từ"
  },
  {
    "id": "pair_20",
    "stt": 20,
    "word_a": "気に入ってる",
    "read_a": "きにいってる",
    "word_b": "好きな / 好きになる",
    "read_b": "すきな / すきになる",
    "meaning_vi": "Ưng ý, yêu thích",
    "category": "Động từ"
  },
  {
    "id": "pair_21",
    "stt": 21,
    "word_a": "あきらめない",
    "read_a": "あきらめない",
    "word_b": "辞めようとしない",
    "read_b": "やめようとしない",
    "meaning_vi": "Không từ bỏ",
    "category": "Động từ"
  },
  {
    "id": "pair_22",
    "stt": 22,
    "word_a": "年中",
    "read_a": "ねんじゅう",
    "word_b": "いつも",
    "read_b": "いつも",
    "meaning_vi": "Quanh năm suốt tháng, luôn luôn",
    "category": "Phó từ"
  },
  {
    "id": "pair_23",
    "stt": 23,
    "word_a": "眩しくて",
    "read_a": "まぶしくて",
    "word_b": "明るすぎて",
    "read_b": "あかるすぎて",
    "meaning_vi": "Chói lóa, quá sáng",
    "category": "Tính từ"
  },
  {
    "id": "pair_24",
    "stt": 24,
    "word_a": "うばわれて",
    "read_a": "うばわれて",
    "word_b": "取られて",
    "read_b": "とられて",
    "meaning_vi": "Bị cướp mất, bị lấy đi",
    "category": "Động từ"
  },
  {
    "id": "pair_25",
    "stt": 25,
    "word_a": "そっと",
    "read_a": "そっと",
    "word_b": "静かに",
    "read_b": "しずかに",
    "meaning_vi": "Nhẹ nhàng, khẽ khàng, yên tĩnh",
    "category": "Phó từ"
  },
  {
    "id": "pair_26",
    "stt": 26,
    "word_a": "サイズ",
    "read_a": "サイズ",
    "word_b": "大きさ",
    "read_b": "おおきさ",
    "meaning_vi": "Kích cỡ, độ lớn",
    "category": "Katakana"
  },
  {
    "id": "pair_27",
    "stt": 27,
    "word_a": "注文します",
    "read_a": "ちゅうもんします",
    "word_b": "頼みます",
    "read_b": "たのみます",
    "meaning_vi": "Đặt hàng, gọi món",
    "category": "Động từ"
  },
  {
    "id": "pair_28",
    "stt": 28,
    "word_a": "確かめます",
    "read_a": "たしかめます",
    "word_b": "チェックします",
    "read_b": "チェックします",
    "meaning_vi": "Xác nhận lại, kiểm tra",
    "category": "Động từ"
  },
  {
    "id": "pair_29",
    "stt": 29,
    "word_a": "このごろ",
    "read_a": "このごろ",
    "word_b": "最近",
    "read_b": "さいきん",
    "meaning_vi": "Dạo gần đây",
    "category": "Phó từ"
  },
  {
    "id": "pair_30",
    "stt": 30,
    "word_a": "しゃべります",
    "read_a": "しゃべります",
    "word_b": "話します",
    "read_b": "はなします",
    "meaning_vi": "Nói chuyện, tán gẫu",
    "category": "Động từ"
  },
  {
    "id": "pair_31",
    "stt": 31,
    "word_a": "位置",
    "read_a": "いち",
    "word_b": "場所",
    "read_b": "ばしょ",
    "meaning_vi": "Vị trí, địa điểm",
    "category": "Danh từ"
  },
  {
    "id": "pair_32",
    "stt": 32,
    "word_a": "キッチン",
    "read_a": "キッチン",
    "word_b": "台所",
    "read_b": "だいどころ",
    "meaning_vi": "Nhà bếp",
    "category": "Katakana"
  },
  {
    "id": "pair_33",
    "stt": 33,
    "word_a": "売り切れた",
    "read_a": "うりきれた",
    "word_b": "全部売れた",
    "read_b": "ぜんぶうれた",
    "meaning_vi": "Bán sạch hết, cháy hàng",
    "category": "Động từ"
  },
  {
    "id": "pair_34",
    "stt": 34,
    "word_a": "回収",
    "read_a": "かいしゅう",
    "word_b": "集める",
    "read_b": "あつめる",
    "meaning_vi": "Thu hồi, thu gom lại",
    "category": "Động từ"
  },
  {
    "id": "pair_35",
    "stt": 35,
    "word_a": "おかしな音",
    "read_a": "おかしなおと",
    "word_b": "変な音",
    "read_b": "へんなおと",
    "meaning_vi": "Âm thanh kỳ lạ",
    "category": "Tính từ"
  },
  {
    "id": "pair_36",
    "stt": 36,
    "word_a": "経ちました",
    "read_a": "たちました",
    "word_b": "過ぎました",
    "read_b": "すぎました",
    "meaning_vi": "Trôi qua (thời gian)",
    "category": "Động từ"
  },
  {
    "id": "pair_37",
    "stt": 37,
    "word_a": "慌てる",
    "read_a": "あわてる",
    "word_b": "急いだ様子",
    "read_b": "いそいだようす",
    "meaning_vi": "Vội vàng, luống cuống, hốt hoảng",
    "category": "Động từ"
  },
  {
    "id": "pair_38",
    "stt": 38,
    "word_a": "カーブをしている",
    "read_a": "カーブをしている",
    "word_b": "曲がっている",
    "read_b": "まがっている",
    "meaning_vi": "Bị uốn cong, có khúc cua",
    "category": "Katakana"
  },
  {
    "id": "pair_39",
    "stt": 39,
    "word_a": "細かい",
    "read_a": "こまかい",
    "word_b": "小さい",
    "read_b": "ちいさい",
    "meaning_vi": "Nhỏ, vụn, tiền lẻ",
    "category": "Tính từ"
  },
  {
    "id": "pair_40",
    "stt": 40,
    "word_a": "戻ります",
    "read_a": "もどります",
    "word_b": "帰って来ます",
    "read_b": "かえってきます",
    "meaning_vi": "Quay trở lại, trở về",
    "category": "Động từ"
  },
  {
    "id": "pair_41",
    "stt": 41,
    "word_a": "得意",
    "read_a": "とくい",
    "word_b": "上手",
    "read_b": "じょうず",
    "meaning_vi": "Giỏi, sở trường",
    "category": "Tính từ"
  },
  {
    "id": "pair_42",
    "stt": 42,
    "word_a": "短気",
    "read_a": "たんき",
    "word_b": "すぐ怒る",
    "read_b": "すぐおこる",
    "meaning_vi": "Nóng tính, dễ nổi giận",
    "category": "Tính từ"
  },
  {
    "id": "pair_43",
    "stt": 43,
    "word_a": "機会",
    "read_a": "きかい",
    "word_b": "チャンス",
    "read_b": "チャンス",
    "meaning_vi": "Cơ hội, dịp",
    "category": "Danh từ"
  },
  {
    "id": "pair_44",
    "stt": 44,
    "word_a": "あいかわらず",
    "read_a": "あいかわらず",
    "word_b": "前と同じで",
    "read_b": "まえとおなじで",
    "meaning_vi": "Vẫn như xưa, không thay đổi",
    "category": "Phó từ"
  },
  {
    "id": "pair_45",
    "stt": 45,
    "word_a": "決まり",
    "read_a": "きまり",
    "word_b": "規則",
    "read_b": "きそく",
    "meaning_vi": "Quy định, quy tắc",
    "category": "Danh từ"
  },
  {
    "id": "pair_46",
    "stt": 46,
    "word_a": "疑う",
    "read_a": "うたがう",
    "word_b": "本当ではないと思う",
    "read_b": "ほんとうではないとおもう",
    "meaning_vi": "Nghi ngờ, cho là không thật",
    "category": "Động từ"
  },
  {
    "id": "pair_47",
    "stt": 47,
    "word_a": "不安",
    "read_a": "ふあん",
    "word_b": "心配",
    "read_b": "しんぱい",
    "meaning_vi": "Bất an, lo lắng",
    "category": "Tính từ"
  },
  {
    "id": "pair_48",
    "stt": 48,
    "word_a": "延期になる",
    "read_a": "えんきになる",
    "word_b": "後の別の日にやることになった",
    "read_b": "あとのべつのひにやることになった",
    "meaning_vi": "Bị trì hoãn, dời sang ngày khác",
    "category": "Động từ"
  },
  {
    "id": "pair_49",
    "stt": 49,
    "word_a": "輝いている",
    "read_a": "かがやいている",
    "word_b": "光っている",
    "read_b": "ひかっている",
    "meaning_vi": "Tỏa sáng, lấp lánh",
    "category": "Động từ"
  },
  {
    "id": "pair_50",
    "stt": 50,
    "word_a": "がっかり",
    "read_a": "がっかり",
    "word_b": "残念",
    "read_b": "ざんねん",
    "meaning_vi": "Thất vọng, chán nản, tiếc nuối",
    "category": "Phó từ"
  },
  {
    "id": "pair_51",
    "stt": 51,
    "word_a": "当然",
    "read_a": "とうぜん",
    "word_b": "もちろん",
    "read_b": "もちろん",
    "meaning_vi": "Đương nhiên, dĩ nhiên",
    "category": "Phó từ"
  },
  {
    "id": "pair_52",
    "stt": 52,
    "word_a": "余りました",
    "read_a": "あまりました",
    "word_b": "残りました",
    "read_b": "のこりました",
    "meaning_vi": "Còn dư, còn thừa lại",
    "category": "Động từ"
  },
  {
    "id": "pair_53",
    "stt": 53,
    "word_a": "横断禁止",
    "read_a": "おうだんきんし",
    "word_b": "渡ってはいけません",
    "read_b": "わたってはいけません",
    "meaning_vi": "Cấm băng qua đường",
    "category": "Cụm từ"
  },
  {
    "id": "pair_54",
    "stt": 54,
    "word_a": "協力する",
    "read_a": "きょうりょくする",
    "word_b": "手伝う",
    "read_b": "てつだう",
    "meaning_vi": "Hợp tác, chung sức giúp đỡ",
    "category": "Động từ"
  },
  {
    "id": "pair_55",
    "stt": 55,
    "word_a": "約",
    "read_a": "やく",
    "word_b": "だいたい",
    "read_b": "だいたい",
    "meaning_vi": "Khoảng chừng, xấp xỉ",
    "category": "Phó từ"
  },
  {
    "id": "pair_56",
    "stt": 56,
    "word_a": "あらゆる",
    "read_a": "あらゆる",
    "word_b": "全部",
    "read_b": "ぜんぶ",
    "meaning_vi": "Mọi, tất cả, toàn bộ",
    "category": "Cụm từ"
  },
  {
    "id": "pair_57",
    "stt": 57,
    "word_a": "怒鳴る",
    "read_a": "どなる",
    "word_b": "大声で怒る",
    "read_b": "おおごえでおこる",
    "meaning_vi": "Quát tháo, gào mắng lớn tiếng",
    "category": "Động từ"
  },
  {
    "id": "pair_58",
    "stt": 58,
    "word_a": "感謝",
    "read_a": "かんしゃ",
    "word_b": "お礼",
    "read_b": "おれい",
    "meaning_vi": "Cảm tạ, biết ơn",
    "category": "Danh từ"
  },
  {
    "id": "pair_59",
    "stt": 59,
    "word_a": "避難して",
    "read_a": "ひなんして",
    "word_b": "逃げて",
    "read_b": "にげて",
    "meaning_vi": "Lánh nạn, sơ tán (khi có thiên tai)",
    "category": "Động từ"
  },
  {
    "id": "pair_60",
    "stt": 60,
    "word_a": "びっくり",
    "read_a": "びっくり",
    "word_b": "驚く",
    "read_b": "おどろく",
    "meaning_vi": "Giật mình, ngạc nhiên",
    "category": "Phó từ"
  },
  {
    "id": "pair_61",
    "stt": 61,
    "word_a": "ぺこぺこ",
    "read_a": "ぺこぺこ",
    "word_b": "すいている",
    "read_b": "すいている",
    "meaning_vi": "Đói meo, đói cồn cào",
    "category": "Phó từ"
  },
  {
    "id": "pair_62",
    "stt": 62,
    "word_a": "黙って",
    "read_a": "だまって",
    "word_b": "何も話さないで",
    "read_b": "なにもはなさないで",
    "meaning_vi": "Im lặng, không nói gì",
    "category": "Động từ"
  },
  {
    "id": "pair_63",
    "stt": 63,
    "word_a": "退屈",
    "read_a": "たいくつ",
    "word_b": "つまらない",
    "read_b": "つまらない",
    "meaning_vi": "Buồn chán, nhàm chán",
    "category": "Tính từ"
  },
  {
    "id": "pair_64",
    "stt": 64,
    "word_a": "雨がざあざあ",
    "read_a": "あめがざあざあ",
    "word_b": "雨が強い",
    "read_b": "あめがつよい",
    "meaning_vi": "Mưa rào nặng hạt, mưa tầm tã",
    "category": "Phó từ"
  },
  {
    "id": "pair_65",
    "stt": 65,
    "word_a": "ふれないで",
    "read_a": "ふれないで",
    "word_b": "触らないで",
    "read_b": "さわらないで",
    "meaning_vi": "Đừng chạm vào, không được sờ",
    "category": "Động từ"
  },
  {
    "id": "pair_66",
    "stt": 66,
    "word_a": "納得する",
    "read_a": "なっとくする",
    "word_b": "とてもよくわかった",
    "read_b": "とてもよくわかった",
    "meaning_vi": "Tâm phục khẩu phục, hiểu thấu đáo",
    "category": "Động từ"
  },
  {
    "id": "pair_67",
    "stt": 67,
    "word_a": "ずいぶん",
    "read_a": "ずいぶん",
    "word_b": "非常に",
    "read_b": "ひじょうに",
    "meaning_vi": "Khá là, vô cùng, rất là",
    "category": "Phó từ"
  },
  {
    "id": "pair_68",
    "stt": 68,
    "word_a": "指定",
    "read_a": "してい",
    "word_b": "決められた",
    "read_b": "きめられた",
    "meaning_vi": "Chỉ định, đã được ấn định",
    "category": "Danh từ"
  },
  {
    "id": "pair_69",
    "stt": 69,
    "word_a": "与えよう",
    "read_a": "あたえよう",
    "word_b": "あげよう",
    "read_b": "あげよう",
    "meaning_vi": "Cho, trao tặng",
    "category": "Động từ"
  },
  {
    "id": "pair_70",
    "stt": 70,
    "word_a": "ふだん",
    "read_a": "ふだん",
    "word_b": "いつも",
    "read_b": "いつも",
    "meaning_vi": "Ngày thường, bình thường",
    "category": "Phó từ"
  },
  {
    "id": "pair_71",
    "stt": 71,
    "word_a": "詳しく",
    "read_a": "くわしく",
    "word_b": "細かく",
    "read_b": "こまかく",
    "meaning_vi": "Chi tiết, cặn kẽ, cụ thể",
    "category": "Tính từ"
  },
  {
    "id": "pair_72",
    "stt": 72,
    "word_a": "私のおい",
    "read_a": "わたしのおい",
    "word_b": "姉の息子",
    "read_b": "あねのむすこ",
    "meaning_vi": "Cháu trai (con trai của anh/chị/em)",
    "category": "Danh từ"
  },
  {
    "id": "pair_73",
    "stt": 73,
    "word_a": "グラウンド",
    "read_a": "グラウンド",
    "word_b": "運動場",
    "read_b": "うんどうじょう",
    "meaning_vi": "Sân vận động, bãi tập thể thao",
    "category": "Katakana"
  },
  {
    "id": "pair_74",
    "stt": 74,
    "word_a": "暗記",
    "read_a": "あんき",
    "word_b": "覚えて",
    "read_b": "おぼえて",
    "meaning_vi": "Học thuộc lòng, ghi nhớ",
    "category": "Động từ"
  },
  {
    "id": "pair_75",
    "stt": 75,
    "word_a": "欠点",
    "read_a": "けってん",
    "word_b": "よくないところ",
    "read_b": "よくないところ",
    "meaning_vi": "Khuyết điểm, điểm chưa tốt",
    "category": "Danh từ"
  },
  {
    "id": "pair_76",
    "stt": 76,
    "word_a": "案",
    "read_a": "あん",
    "word_b": "アイディア",
    "read_b": "アイディア",
    "meaning_vi": "Phương án, ý tưởng, đề xuất",
    "category": "Danh từ"
  },
  {
    "id": "pair_77",
    "stt": 77,
    "word_a": "ベスト",
    "read_a": "ベスト",
    "word_b": "最もよい",
    "read_b": "もっともよい",
    "meaning_vi": "Tốt nhất (best)",
    "category": "Katakana"
  },
  {
    "id": "pair_78",
    "stt": 78,
    "word_a": "配達して",
    "read_a": "はいたつして",
    "word_b": "届けて",
    "read_b": "とどけて",
    "meaning_vi": "Giao hàng, chuyển phát tới",
    "category": "Động từ"
  },
  {
    "id": "pair_79",
    "stt": 79,
    "word_a": "丁寧",
    "read_a": "ていねい",
    "word_b": "きれい / きちんと",
    "read_b": "きれい / きちんと",
    "meaning_vi": "Cẩn thận, lịch sự, trau chuốt",
    "category": "Tính từ"
  },
  {
    "id": "pair_80",
    "stt": 80,
    "word_a": "ニコニコ",
    "read_a": "ニコニコ",
    "word_b": "笑う",
    "read_b": "わらう",
    "meaning_vi": "Cười tủm tỉm, cười tươi thân thiện",
    "category": "Phó từ"
  }
];

const SYNONYM_N3_DATA = [
  {
    "id": "syn_p1_q1",
    "part": 1,
    "num": 1,
    "sentence_html": "今回の 仕事は とても <u class=\"q-target\">きつい</u>。",
    "sentence_reverse_html": "今回の 仕事は とても <u class=\"q-target\">大変だ</u>。",
    "sentence_tts": "今回の仕事はとてもきつい。",
    "target_word": "きつい",
    "target_reading": "きつい",
    "synonym_word": "大変だ",
    "synonym_reading": "たいへんだ",
    "options": [
      "大変だ",
      "簡単だ",
      "つまらない",
      "おもしろい"
    ],
    "options_vi": [
      "vất vả, khó khăn (ĐÚNG)",
      "đơn giản",
      "nhàm chán",
      "thú vị"
    ],
    "answer": 0,
    "meaning_vi": "vất vả, nặng nhọc",
    "sentence_vi": "Công việc lần này rất vất vả.",
    "nuance_note": "きつい vừa nghĩa 'chật' (quần áo), vừa nghĩa 'vất vả, khắc nghiệt' (= 大変だ)."
  },
  {
    "id": "syn_p1_q2",
    "part": 1,
    "num": 2,
    "sentence_html": "今日は とても <u class=\"q-target\">くたびれた</u>。",
    "sentence_reverse_html": "今日は とても <u class=\"q-target\">つかれた</u>。",
    "sentence_tts": "今日はとてもくたびれた。",
    "target_word": "くたびれた",
    "target_reading": "くたびれた",
    "synonym_word": "つかれた",
    "synonym_reading": "つかれた",
    "options": [
      "いそがしかった",
      "つかれた",
      "はずかしかった",
      "こまった"
    ],
    "options_vi": [
      "đã bận rộn",
      "đã mệt mỏi (ĐÚNG)",
      "đã xấu hổ",
      "đã bối rối"
    ],
    "answer": 1,
    "meaning_vi": "mệt mỏi, kiệt sức",
    "sentence_vi": "Hôm nay tôi rất mệt mỏi.",
    "nuance_note": "くたびれる = 疲れる(つかれる): mệt rã rời (hay dùng trong khẩu ngữ)."
  },
  {
    "id": "syn_p1_q3",
    "part": 1,
    "num": 3,
    "sentence_html": "休みが <u class=\"q-target\">明けたら</u>、また 連絡します。",
    "sentence_reverse_html": "休みが <u class=\"q-target\">おわったら</u>、また 連絡します。",
    "sentence_tts": "休みが明けたら、また連絡します。",
    "target_word": "明けたら",
    "target_reading": "あけたら",
    "synonym_word": "おわったら",
    "synonym_reading": "おわったら",
    "options": [
      "とれたら",
      "きまったら",
      "おわったら",
      "はじまったら"
    ],
    "options_vi": [
      "nếu lấy/xin được (nghỉ)",
      "nếu được quyết định",
      "nếu kết thúc, hết (ĐÚNG)",
      "nếu bắt đầu"
    ],
    "answer": 2,
    "meaning_vi": "hết, kết thúc (kỳ nghỉ/mùa)",
    "sentence_vi": "Hết kỳ nghỉ tôi sẽ liên lạc lại nhé.",
    "nuance_note": "明ける(あける) dùng cho kỳ nghỉ/mùa mưa/năm cũ kết thúc (休みが明ける = 休みが終わる)."
  },
  {
    "id": "syn_p1_q4",
    "part": 1,
    "num": 4,
    "sentence_html": "この 店は いつも <u class=\"q-target\">混雑している</u>。",
    "sentence_reverse_html": "この 店は いつも <u class=\"q-target\">客がたくさんいる</u>。",
    "sentence_tts": "この店はいつも混雑している。",
    "target_word": "混雑している",
    "target_reading": "こんざつしている",
    "synonym_word": "客がたくさんいる",
    "synonym_reading": "きゃくがたくさんいる",
    "options": [
      "客があまりいない",
      "品物があまりない",
      "客がたくさんいる",
      "品物がたくさんある"
    ],
    "options_vi": [
      "không có mấy khách",
      "không có mấy hàng hóa",
      "có rất nhiều khách (ĐÚNG)",
      "có rất nhiều hàng hóa"
    ],
    "answer": 2,
    "meaning_vi": "đông đúc, chen chúc",
    "sentence_vi": "Cửa hàng này lúc nào cũng đông đúc khách.",
    "nuance_note": "混雑(こんざつ - HỖN TẠP) chỉ người/xe đông nghẹt = 混んでいる / 客がたくさんいる."
  },
  {
    "id": "syn_p1_q5",
    "part": 1,
    "num": 5,
    "sentence_html": "この スポーツの ルールは <u class=\"q-target\">単純</u>だ。",
    "sentence_reverse_html": "この スポーツの ルールは <u class=\"q-target\">わかりやすい</u>だ。",
    "sentence_tts": "このスポーツのルールは単純だ。",
    "target_word": "単純",
    "target_reading": "たんじゅん",
    "synonym_word": "わかりやすい",
    "synonym_reading": "わかりやすい",
    "options": [
      "よく知られている",
      "わかりやすい",
      "あまり知られていない",
      "わかりにくい"
    ],
    "options_vi": [
      "được biết đến rộng rãi",
      "dễ hiểu, đơn giản (ĐÚNG)",
      "không được biết đến mấy",
      "khó hiểu"
    ],
    "answer": 1,
    "meaning_vi": "đơn giản, dễ hiểu",
    "sentence_vi": "Luật chơi của môn thể thao này rất đơn giản.",
    "nuance_note": "単純(たんじゅん - ĐƠN THUẦN) = 簡単 / わかりやすい. Trái nghĩa với 複雑(ふくざつ: phức tạp)."
  },
  {
    "id": "syn_p1_q6",
    "part": 1,
    "num": 6,
    "sentence_html": "わたしは 妻と 一緒に <u class=\"q-target\">通勤して</u>います。",
    "sentence_reverse_html": "わたしは 妻と 一緒に <u class=\"q-target\">仕事に行って</u>います。",
    "sentence_tts": "わたしは妻と一緒に通勤しています。",
    "target_word": "通勤して",
    "target_reading": "つうきんして",
    "synonym_word": "仕事に行って",
    "synonym_reading": "しごとにいって",
    "options": [
      "仕事に行って",
      "勉強に行って",
      "買い物に行って",
      "散歩に行って"
    ],
    "options_vi": [
      "đi làm việc (ĐÚNG)",
      "đi học (= 通学)",
      "đi mua sắm",
      "đi dạo"
    ],
    "answer": 0,
    "meaning_vi": "đi làm hằng ngày",
    "sentence_vi": "Tôi cùng vợ đi làm chung với nhau.",
    "nuance_note": "通勤(つうきん - THÔNG CẦN) = 仕事に行く. Đừng nhầm với 通学(つうがく: đi học)."
  },
  {
    "id": "syn_p1_q7",
    "part": 1,
    "num": 7,
    "sentence_html": "とても <u class=\"q-target\">おそろしい</u> 経験を した。",
    "sentence_reverse_html": "とても <u class=\"q-target\">こわい</u> 経験を した。",
    "sentence_tts": "とてもおそろしい経験をした。",
    "target_word": "おそろしい",
    "target_reading": "おそろしい",
    "synonym_word": "こわい",
    "synonym_reading": "こわい",
    "options": [
      "たのしい",
      "うれしい",
      "はずかしい",
      "こわい"
    ],
    "options_vi": [
      "vui vẻ",
      "vui mừng",
      "xấu hổ",
      "đáng sợ (ĐÚNG)"
    ],
    "answer": 3,
    "meaning_vi": "đáng sợ, kinh khủng",
    "sentence_vi": "Tôi đã trải qua một trải nghiệm vô cùng đáng sợ.",
    "nuance_note": "恐ろしい(おそろしい) = 怖い(こわい) nhưng mức độ rùng rợn mạnh hơn."
  },
  {
    "id": "syn_p1_q8",
    "part": 1,
    "num": 8,
    "sentence_html": "先生に <u class=\"q-target\">わけ</u>を 話した。",
    "sentence_reverse_html": "先生に <u class=\"q-target\">理由</u>を 話した。",
    "sentence_tts": "先生にわけを話した。",
    "target_word": "わけ",
    "target_reading": "わけ",
    "synonym_word": "理由",
    "synonym_reading": "りゆう",
    "options": [
      "アイディア",
      "ルール",
      "理由",
      "秘密"
    ],
    "options_vi": [
      "ý tưởng (= 案)",
      "quy tắc (= 決まり)",
      "lý do (ĐÚNG)",
      "bí mật (= 内緒)"
    ],
    "answer": 2,
    "meaning_vi": "lý do, nguyên nhân",
    "sentence_vi": "Tôi đã kể lại lý do cho thầy giáo nghe.",
    "nuance_note": "訳(わけ) = 理由(りゆう). Rất hay gặp trong わけを話す (kể rõ ngọn ngành/lý do)."
  },
  {
    "id": "syn_p1_q9",
    "part": 1,
    "num": 9,
    "sentence_html": "最近、この 川は 水が <u class=\"q-target\">へった</u> 気がする。",
    "sentence_reverse_html": "最近、この 川は 水が <u class=\"q-target\">少なくなった</u> 気がする。",
    "sentence_tts": "最近、この川は水がへった気がする。",
    "target_word": "へった",
    "target_reading": "へった",
    "synonym_word": "少なくなった",
    "synonym_reading": "すくなくなった",
    "options": [
      "多くなった",
      "少なくなった",
      "きれいになった",
      "きたなくなった"
    ],
    "options_vi": [
      "đã nhiều lên (= 増えた)",
      "đã ít đi (ĐÚNG)",
      "đã sạch hơn",
      "đã bẩn đi"
    ],
    "answer": 1,
    "meaning_vi": "giảm đi, ít đi",
    "sentence_vi": "Gần đây tôi có cảm giác nước ở con sông này ít đi.",
    "nuance_note": "減る(へる) = 少なくなる. Trái nghĩa với 増える(ふえる: tăng lên)."
  },
  {
    "id": "syn_p1_q10",
    "part": 1,
    "num": 10,
    "sentence_html": "実験が うまく いかなかったので、<u class=\"q-target\">やりなおした</u>。",
    "sentence_reverse_html": "実験が うまく いかなかったので、<u class=\"q-target\">もう一度やった</u>。",
    "sentence_tts": "実験がうまくいかなかったので、やりなおした。",
    "target_word": "やりなおした",
    "target_reading": "やりなおした",
    "synonym_word": "もう一度やった",
    "synonym_reading": "もういちどやった",
    "options": [
      "やり方を調べた",
      "やり方を教わった",
      "もう一度やった",
      "やるのを途中でやめた"
    ],
    "options_vi": [
      "đã tra cứu cách làm",
      "đã được chỉ dạy cách làm",
      "đã làm lại một lần nữa (ĐÚNG)",
      "đã bỏ dở giữa chừng"
    ],
    "answer": 2,
    "meaning_vi": "làm lại từ đầu",
    "sentence_vi": "Vì thí nghiệm không suôn sẻ nên tôi đã làm lại từ đầu.",
    "nuance_note": "Đuôi động từ ghép ～直す luôn mang nghĩa 'làm lại từ đầu cho chuẩn' = もう一度やる!"
  },
  {
    "id": "syn_p1_q11",
    "part": 1,
    "num": 11,
    "sentence_html": "それが この辞書の <u class=\"q-target\">欠点</u>なんです。",
    "sentence_reverse_html": "それが この辞書の <u class=\"q-target\">わるいところ</u>なんです。",
    "sentence_tts": "それがこの辞書の欠点なんです。",
    "target_word": "欠点",
    "target_reading": "けってん",
    "synonym_word": "わるいところ",
    "synonym_reading": "わるいところ",
    "options": [
      "すきなところ",
      "いいところ",
      "きらいなところ",
      "わるいところ"
    ],
    "options_vi": [
      "chỗ yêu thích",
      "điểm tốt (= 長所)",
      "chỗ ghét",
      "điểm xấu, điểm dở (ĐÚNG)"
    ],
    "answer": 3,
    "meaning_vi": "khuyết điểm, điểm xấu",
    "sentence_vi": "Đó chính là khuyết điểm của cuốn từ điển này.",
    "nuance_note": "欠点(けってん - KHIẾM ĐIỂM) = 悪いところ / よくないところ."
  },
  {
    "id": "syn_p1_q12",
    "part": 1,
    "num": 12,
    "sentence_html": "彼が 留学したのは、大学卒業の <u class=\"q-target\">翌年</u>です。",
    "sentence_reverse_html": "彼が 留学したのは、大学卒業の <u class=\"q-target\">次の年</u>です。",
    "sentence_tts": "彼が留学したのは、大学卒業の翌年です。",
    "target_word": "翌年",
    "target_reading": "よくねん",
    "synonym_word": "次の年",
    "synonym_reading": "つぎのとし",
    "options": [
      "前の前の年",
      "次の次の年",
      "前の年",
      "次の年"
    ],
    "options_vi": [
      "2 năm trước",
      "2 năm sau",
      "năm trước (= 前年)",
      "năm tiếp theo (ĐÚNG)"
    ],
    "answer": 3,
    "meaning_vi": "năm sau, năm kế tiếp",
    "sentence_vi": "Năm anh ấy đi du học là năm ngay sau khi tốt nghiệp đại học.",
    "nuance_note": "Chữ 翌(よく - DỰC) luôn mang nghĩa 'tiếp theo': 翌日(ngày hôm sau), 翌月(tháng sau), 翌年(năm sau)."
  },
  {
    "id": "syn_p1_q13",
    "part": 1,
    "num": 13,
    "sentence_html": "来週の 会議の <u class=\"q-target\">スケジュール</u>に ついて 連絡が あった。",
    "sentence_reverse_html": "来週の 会議の <u class=\"q-target\">予定</u>に ついて 連絡が あった。",
    "sentence_tts": "来週の会議のスケジュールについて連絡があった。",
    "target_word": "スケジュール",
    "target_reading": "スケジュール",
    "synonym_word": "予定",
    "synonym_reading": "よてい",
    "options": [
      "準備",
      "予定",
      "場所",
      "資料"
    ],
    "options_vi": [
      "sự chuẩn bị",
      "dự định, lịch trình (ĐÚNG)",
      "địa điểm",
      "tài liệu"
    ],
    "answer": 1,
    "meaning_vi": "lịch trình, dự định",
    "sentence_vi": "Đã có liên lạc về lịch trình cuộc họp tuần sau.",
    "nuance_note": "スケジュール (schedule) = 予定(よてい). Cặp Katakana kinh điển hay thi nhất N3!"
  },
  {
    "id": "syn_p1_q14",
    "part": 1,
    "num": 14,
    "sentence_html": "彼には <u class=\"q-target\">らくな</u> 仕事を 頼んだ。",
    "sentence_reverse_html": "彼には <u class=\"q-target\">かんたんな</u> 仕事を 頼んだ。",
    "sentence_tts": "彼にはらくな仕事を頼んだ。",
    "target_word": "らくな",
    "target_reading": "らくな",
    "synonym_word": "かんたんな",
    "synonym_reading": "かんたんな",
    "options": [
      "だいじな",
      "こまかい",
      "かんたんな",
      "あたらしい"
    ],
    "options_vi": [
      "quan trọng",
      "tỉ mỉ, nhỏ nhặt",
      "đơn giản, dễ dàng (ĐÚNG)",
      "mới mẻ"
    ],
    "answer": 2,
    "meaning_vi": "nhàn, dễ dàng, nhẹ nhàng",
    "sentence_vi": "Tôi đã giao cho anh ấy một công việc nhẹ nhàng/dễ làm.",
    "nuance_note": "楽な(らくな) = 簡単な / 大変ではない (nhàn hạ, không tốn sức)."
  },
  {
    "id": "syn_p1_q15",
    "part": 1,
    "num": 15,
    "sentence_html": "田中さんから <u class=\"q-target\">さっき</u> 電話が ありましたよ。",
    "sentence_reverse_html": "田中さんから <u class=\"q-target\">少し前に</u> 電話が ありましたよ。",
    "sentence_tts": "田中さんからさっき電話がありましたよ。",
    "target_word": "さっき",
    "target_reading": "さっき",
    "synonym_word": "少し前に",
    "synonym_reading": "すこしまえ",
    "options": [
      "ずっと前に",
      "少し前に",
      "何回か",
      "何回も"
    ],
    "options_vi": [
      "rất lâu trước đây",
      "một lát trước (ĐÚNG)",
      "vài lần",
      "rất nhiều lần"
    ],
    "answer": 1,
    "meaning_vi": "vừa nãy, một lát trước",
    "sentence_vi": "Vừa nãy anh Tanaka mới gọi điện đến đấy.",
    "nuance_note": "さっき = 少し前(すこしまえ). Phân biệt với さっそく (ngay lập tức)."
  },
  {
    "id": "syn_p1_q16",
    "part": 1,
    "num": 16,
    "sentence_html": "これらの やり方には、<u class=\"q-target\">共通点</u>が あります。",
    "sentence_reverse_html": "これらの やり方には、<u class=\"q-target\">同じところ</u>が あります。",
    "sentence_tts": "これらのやり方には、共通点があります。",
    "target_word": "共通点",
    "target_reading": "きょうつうてん",
    "synonym_word": "同じところ",
    "synonym_reading": "おなじところ",
    "options": [
      "悪いところ",
      "いいところ",
      "違うところ",
      "同じところ"
    ],
    "options_vi": [
      "điểm xấu (= 欠点)",
      "điểm tốt",
      "điểm khác nhau (= 相違点)",
      "điểm giống nhau (ĐÚNG)"
    ],
    "answer": 3,
    "meaning_vi": "điểm chung",
    "sentence_vi": "Các cách làm này có điểm chung với nhau.",
    "nuance_note": "共通(きょうつう - CỘNG THÔNG) + 点(điểm) = 同じところ."
  },
  {
    "id": "syn_p1_q17",
    "part": 1,
    "num": 17,
    "sentence_html": "書類を みんなで <u class=\"q-target\">整理した</u>。",
    "sentence_reverse_html": "書類を みんなで <u class=\"q-target\">片付けた</u>。",
    "sentence_tts": "書類をみんなで整理した。",
    "target_word": "整理した",
    "target_reading": "せいりした",
    "synonym_word": "片付けた",
    "synonym_reading": "かたづけた",
    "options": [
      "数えた",
      "片付けた",
      "運んだ",
      "探した"
    ],
    "options_vi": [
      "đã đếm",
      "đã dọn dẹp, sắp xếp (ĐÚNG)",
      "đã khuân vác",
      "đã tìm kiếm"
    ],
    "answer": 1,
    "meaning_vi": "sắp xếp, dọn dẹp",
    "sentence_vi": "Mọi người đã cùng nhau sắp xếp lại giấy tờ tài liệu.",
    "nuance_note": "整理する(せいりする - CHỈNH LÝ) = 片付ける(かたづける: dọn gọn gàng)."
  },
  {
    "id": "syn_p1_q18",
    "part": 1,
    "num": 18,
    "sentence_html": "田中さんは <u class=\"q-target\">ぜったいに</u> 来ると思います。",
    "sentence_reverse_html": "田中さんは <u class=\"q-target\">かならず</u> 来ると思います。",
    "sentence_tts": "田中さんはぜったいに来ると思います。",
    "target_word": "ぜったいに",
    "target_reading": "ぜったいに",
    "synonym_word": "かならず",
    "synonym_reading": "かならず",
    "options": [
      "すぐに",
      "たぶん",
      "かならず",
      "あとから"
    ],
    "options_vi": [
      "ngay lập tức",
      "có lẽ",
      "nhất định, chắc chắn (ĐÚNG)",
      "lát nữa / đến sau"
    ],
    "answer": 2,
    "meaning_vi": "tuyệt đối, nhất định",
    "sentence_vi": "Tôi nghĩ anh Tanaka nhất định sẽ đến.",
    "nuance_note": "絶対に(ぜったいに) = 必ず(かならず). Cặp phó từ kinh điển trong cả Ngữ pháp & Từ vựng."
  },
  {
    "id": "syn_p1_q19",
    "part": 1,
    "num": 19,
    "sentence_html": "この ことは、<u class=\"q-target\">ないしょにして</u>ください。",
    "sentence_reverse_html": "この ことは、<u class=\"q-target\">だれにも話さないで</u>ください。",
    "sentence_tts": "このことは、ないしょにしてください。",
    "target_word": "ないしょにして",
    "target_reading": "ないしょにして",
    "synonym_word": "だれにも話さないで",
    "synonym_reading": "だれにもはなさないで",
    "options": [
      "だれにも話さないで",
      "いろいろな人に話して",
      "早く忘れて",
      "忘れないで"
    ],
    "options_vi": [
      "đừng nói với ai cả (ĐÚNG)",
      "hãy kể cho nhiều người",
      "hãy quên nhanh đi",
      "đừng quên"
    ],
    "answer": 0,
    "meaning_vi": "giữ bí mật",
    "sentence_vi": "Chuyện này xin hãy giữ bí mật nhé.",
    "nuance_note": "内緒(ないしょ - NỘI TỰ) = 秘密(ひみつ: bí mật) -> 内緒にする = 誰にも話さない."
  },
  {
    "id": "syn_p1_q20",
    "part": 1,
    "num": 20,
    "sentence_html": "この CD の 中で 一番 <u class=\"q-target\">気に入っている</u> 曲は これです。",
    "sentence_reverse_html": "この CD の 中で 一番 <u class=\"q-target\">好きな</u> 曲は これです。",
    "sentence_tts": "このCDの中で一番気に入っている曲はこれです。",
    "target_word": "気に入っている",
    "target_reading": "きにいっている",
    "synonym_word": "好きな",
    "synonym_reading": "すきな",
    "options": [
      "人気がある",
      "よく覚えている",
      "好きな",
      "楽しい"
    ],
    "options_vi": [
      "nổi tiếng, được ưa chuộng",
      "nhớ rõ",
      "yêu thích (ĐÚNG)",
      "vui vẻ"
    ],
    "answer": 2,
    "meaning_vi": "ưng ý, yêu thích",
    "sentence_vi": "Trong đĩa CD này, bài hát tôi thích nhất là bài này.",
    "nuance_note": "気に入る(きにいる) = 好きになる -> 気に入っている = 好きな (đang rất ưng/thích)."
  },
  {
    "id": "syn_p1_q21",
    "part": 1,
    "num": 21,
    "sentence_html": "何度 失敗しても、彼女は <u class=\"q-target\">あきらめなかった</u>。",
    "sentence_reverse_html": "何度 失敗しても、彼女は <u class=\"q-target\">やめようとしなかった</u>。",
    "sentence_tts": "何度失敗しても、彼女はあきらめなかった。",
    "target_word": "あきらめなかった",
    "target_reading": "あきらめなかった",
    "synonym_word": "やめようとしなかった",
    "synonym_reading": "やめようとしなかった",
    "options": [
      "気にしなかった",
      "やめようとしなかった",
      "怒らなかった",
      "謝ろうとしなかった"
    ],
    "options_vi": [
      "không để tâm",
      "không có ý định dừng/bỏ (ĐÚNG)",
      "không nổi giận",
      "không chịu xin lỗi"
    ],
    "answer": 1,
    "meaning_vi": "không từ bỏ",
    "sentence_vi": "Dù thất bại bao nhiêu lần cô ấy cũng không chịu bỏ cuộc.",
    "nuance_note": "あきらめる(từ bỏ) -> あきらめない = 辞めようとしない (kết hợp ngữ pháp N3 Vようとしない!)."
  },
  {
    "id": "syn_p1_q22",
    "part": 1,
    "num": 22,
    "sentence_html": "あの スーパーは、<u class=\"q-target\">年中</u>、セールを している。",
    "sentence_reverse_html": "あの スーパーは、<u class=\"q-target\">いつも</u>、セールを している。",
    "sentence_tts": "あのスーパーは、年中、セールをしている。",
    "target_word": "年中",
    "target_reading": "ねんじゅう",
    "synonym_word": "いつも",
    "synonym_reading": "いつも",
    "options": [
      "最近",
      "ときどき",
      "いつも",
      "前から"
    ],
    "options_vi": [
      "gần đây",
      "thỉnh thoảng",
      "luôn luôn, lúc nào cũng (ĐÚNG)",
      "từ trước"
    ],
    "answer": 2,
    "meaning_vi": "quanh năm, lúc nào cũng",
    "sentence_vi": "Siêu thị kia lúc nào quanh năm cũng đang giảm giá.",
    "nuance_note": "年中(ねんじゅう - NIÊN TRUNG) = 一年中 = いつも (suốt quanh năm không ngừng)."
  },
  {
    "id": "syn_p1_q23",
    "part": 1,
    "num": 23,
    "sentence_html": "相手の 選手に ボールを <u class=\"q-target\">うばわれて</u>しまった。",
    "sentence_reverse_html": "相手の 選手に ボールを <u class=\"q-target\">取られて</u>しまった。",
    "sentence_tts": "相手の選手にボールをうばわれてしまった。",
    "target_word": "うばわれて",
    "target_reading": "うばわれて",
    "synonym_word": "取られて",
    "synonym_reading": "とられて",
    "options": [
      "入れられて",
      "止められて",
      "打たれて",
      "取られて"
    ],
    "options_vi": [
      "bị cho vào / bị ghi bàn",
      "bị chặn lại",
      "bị đánh",
      "bị lấy/cướp mất (ĐÚNG)"
    ],
    "answer": 3,
    "meaning_vi": "bị cướp mất, bị đoạt mất",
    "sentence_vi": "Tôi đã bị cầu thủ đối phương cướp mất bóng.",
    "nuance_note": "奪う(うばう - ĐOẠT) = 無理に取る (cướp giật lấy đi) -> bị động うばわれる = 取られる."
  },
  {
    "id": "syn_p1_q24",
    "part": 1,
    "num": 24,
    "sentence_html": "もう 会議が 始まっていますから、<u class=\"q-target\">そっと</u>中に 入ってください。",
    "sentence_reverse_html": "もう 会議が 始まっていますから、<u class=\"q-target\">静かに</u>中に 入ってください。",
    "sentence_tts": "もう会議が始まっていますから、そっと中に入ってください。",
    "target_word": "そっと",
    "target_reading": "そっと",
    "synonym_word": "静かに",
    "synonym_reading": "しずかに",
    "options": [
      "後ろから",
      "急いで",
      "静かに",
      "一人ずつ"
    ],
    "options_vi": [
      "từ phía sau",
      "vội vàng",
      "yên tĩnh, nhẹ nhàng (ĐÚNG)",
      "từng người một"
    ],
    "answer": 2,
    "meaning_vi": "khẽ khàng, nhẹ nhàng, im ắng",
    "sentence_vi": "Vì cuộc họp đã bắt đầu rồi nên hãy nhẹ nhàng đi vào trong nhé.",
    "nuance_note": "そっと = 静かに / 音を立てないように (nhẹ nhàng không gây tiếng động)."
  },
  {
    "id": "syn_p1_q25",
    "part": 1,
    "num": 25,
    "sentence_html": "<u class=\"q-target\">まぶしくて</u> ポスターの 字が よく 見えない。",
    "sentence_reverse_html": "<u class=\"q-target\">明るすぎて</u> ポスターの 字が よく 見えない。",
    "sentence_tts": "まぶしくてポスターの字がよく見えない。",
    "target_word": "まぶしくて",
    "target_reading": "まぶしくて",
    "synonym_word": "明るすぎて",
    "synonym_reading": "あかるすぎて",
    "options": [
      "明るすぎて",
      "遠すぎて",
      "薄すぎて",
      "小さすぎて"
    ],
    "options_vi": [
      "quá sáng (ĐÚNG)",
      "quá xa",
      "quá nhạt/mỏng",
      "quá nhỏ"
    ],
    "answer": 0,
    "meaning_vi": "chói mắt, quá sáng",
    "sentence_vi": "Chói quá nên tôi không nhìn rõ chữ trên tấm áp phích.",
    "nuance_note": "眩しい(まぶしい) = 光が強くて明るすぎる (chói lóa khó mở mắt)."
  },
  {
    "id": "syn_p1_q26",
    "part": 1,
    "num": 26,
    "sentence_html": "これと 同じ <u class=\"q-target\">サイズ</u>の 皿は ありますか。",
    "sentence_reverse_html": "これと 同じ <u class=\"q-target\">大きさ</u>の 皿は ありますか。",
    "sentence_tts": "これと同じサイズの皿はありますか。",
    "target_word": "サイズ",
    "target_reading": "サイズ",
    "synonym_word": "大きさ",
    "synonym_reading": "おおきさ",
    "options": [
      "大きさ",
      "値段",
      "色",
      "形"
    ],
    "options_vi": [
      "độ lớn, kích cỡ (ĐÚNG)",
      "giá cả",
      "màu sắc",
      "hình dáng"
    ],
    "answer": 0,
    "meaning_vi": "kích cỡ, size",
    "sentence_vi": "Có chiếc đĩa nào cùng kích cỡ với cái này không?",
    "nuance_note": "サイズ (size) = 大きさ(おおきさ). Rất hay ra ở câu hỏi đồ vật/quần áo/nội thất."
  },
  {
    "id": "syn_p1_q27",
    "part": 1,
    "num": 27,
    "sentence_html": "サラダは もう <u class=\"q-target\">注文しました</u>か。",
    "sentence_reverse_html": "サラダは もう <u class=\"q-target\">たのみましたか</u>か。",
    "sentence_tts": "サラダはもう注文しましたか。",
    "target_word": "注文しました",
    "target_reading": "ちゅうもんしました",
    "synonym_word": "たのみましたか",
    "synonym_reading": "たのみましたか",
    "options": [
      "作りましたか",
      "たのみましたか",
      "食べましたか",
      "はこびましたか"
    ],
    "options_vi": [
      "đã làm chưa",
      "đã gọi/đặt chưa (ĐÚNG)",
      "đã ăn chưa",
      "đã mang ra chưa"
    ],
    "answer": 1,
    "meaning_vi": "đặt món, đặt hàng",
    "sentence_vi": "Bạn đã gọi món salad chưa?",
    "nuance_note": "注文する(ちゅうもんする - CHÚ VĂN) = 頼む(たのむ: gọi món/đặt hàng)."
  },
  {
    "id": "syn_p1_q28",
    "part": 1,
    "num": 28,
    "sentence_html": "すみませんが、もう 一回 <u class=\"q-target\">たしかめて</u>くれませんか。",
    "sentence_reverse_html": "すみませんが、もう 一回 <u class=\"q-target\">チェックして</u>くれませんか。",
    "sentence_tts": "すみませんが、もう一回たしかめてくれませんか。",
    "target_word": "たしかめて",
    "target_reading": "たしかめて",
    "synonym_word": "チェックして",
    "synonym_reading": "チェックして",
    "options": [
      "コピーして",
      "メモして",
      "メールして",
      "チェックして"
    ],
    "options_vi": [
      "photocopy",
      "ghi chú (memo)",
      "gửi email",
      "kiểm tra, check (ĐÚNG)"
    ],
    "answer": 3,
    "meaning_vi": "xác nhận, kiểm tra lại",
    "sentence_vi": "Xin lỗi, bạn có thể kiểm tra lại giúp tôi một lần nữa không?",
    "nuance_note": "確かめる(たしかめる) = 確認する = チェックする (kiểm tra cho chắc chắn)."
  },
  {
    "id": "syn_p1_q29",
    "part": 1,
    "num": 29,
    "sentence_html": "山田さんは <u class=\"q-target\">このごろ</u> 忙しそうですね。",
    "sentence_reverse_html": "山田さんは <u class=\"q-target\">さいきん</u> 忙しそうですね。",
    "sentence_tts": "山田さんはこのごろ忙しそうですね。",
    "target_word": "このごろ",
    "target_reading": "このごろ",
    "synonym_word": "さいきん",
    "synonym_reading": "さいきん",
    "options": [
      "ずっと",
      "いつも",
      "まだ",
      "さいきん"
    ],
    "options_vi": [
      "suốt, mãi",
      "luôn luôn",
      "vẫn chưa",
      "gần đây (ĐÚNG)"
    ],
    "answer": 3,
    "meaning_vi": "dạo gần đây",
    "sentence_vi": "Anh Yamada dạo gần đây trông có vẻ bận rộn nhỉ.",
    "nuance_note": "このごろ = 最近(さいきん). Lưu ý không nhầm với あのころ (hồi đó trong quá khứ)."
  },
  {
    "id": "syn_p1_q30",
    "part": 1,
    "num": 30,
    "sentence_html": "さっきから あの 子ばかり <u class=\"q-target\">しゃべって</u>いる。",
    "sentence_reverse_html": "さっきから あの 子ばかり <u class=\"q-target\">話して</u>いる。",
    "sentence_tts": "さっきからあの子ばかりしゃべっている。",
    "target_word": "しゃべって",
    "target_reading": "しゃべって",
    "synonym_word": "話して",
    "synonym_reading": "はなして",
    "options": [
      "騒いで",
      "話して",
      "答えて",
      "遊んで"
    ],
    "options_vi": [
      "làm ồn, quậy phá",
      "nói chuyện (ĐÚNG)",
      "trả lời",
      "chơi đùa"
    ],
    "answer": 1,
    "meaning_vi": "nói chuyện, huyên thuyên",
    "sentence_vi": "Từ nãy giờ chỉ có mỗi đứa bé kia là cứ nói suốt.",
    "nuance_note": "しゃべる = 話す (nói chuyện, mang sắc thái thân mật/nói nhiều)."
  },
  {
    "id": "syn_p1_q31",
    "part": 1,
    "num": 31,
    "sentence_html": "高橋さんの 家は <u class=\"q-target\">キッチン</u>が 広くていいですね。",
    "sentence_reverse_html": "高橋さんの 家は <u class=\"q-target\">台所</u>が 広くていいですね。",
    "sentence_tts": "高橋さんの家はキッチンが広くていいですね。",
    "target_word": "キッチン",
    "target_reading": "キッチン",
    "synonym_word": "台所",
    "synonym_reading": "だいどころ",
    "options": [
      "玄関",
      "台所",
      "部屋",
      "廊下"
    ],
    "options_vi": [
      "lối vào (genkan)",
      "nhà bếp (ĐÚNG)",
      "căn phòng",
      "hành lang"
    ],
    "answer": 1,
    "meaning_vi": "nhà bếp",
    "sentence_vi": "Nhà anh Takahashi có căn bếp rộng rãi thích thật đấy.",
    "nuance_note": "キッチン (kitchen) = 台所(だいどころ). Nhớ luôn: リビング = 居間(いま: phòng khách)."
  },
  {
    "id": "syn_p1_q32",
    "part": 1,
    "num": 32,
    "sentence_html": "机の <u class=\"q-target\">位置</u>を 確認しておいてください。",
    "sentence_reverse_html": "机の <u class=\"q-target\">場所</u>を 確認しておいてください。",
    "sentence_tts": "机の位置を確認しておいてください。",
    "target_word": "位置",
    "target_reading": "いち",
    "synonym_word": "場所",
    "synonym_reading": "ばしょ",
    "options": [
      "値段",
      "場所",
      "数",
      "色"
    ],
    "options_vi": [
      "giá cả",
      "địa điểm, vị trí (ĐÚNG)",
      "số lượng",
      "màu sắc"
    ],
    "answer": 1,
    "meaning_vi": "vị trí",
    "sentence_vi": "Hãy xác nhận sẵn vị trí của chiếc bàn nhé.",
    "nuance_note": "位置(いち - VỊ TRÍ) = 場所(ばしょ)."
  },
  {
    "id": "syn_p1_q33",
    "part": 1,
    "num": 33,
    "sentence_html": "その 商品は <u class=\"q-target\">売り切れた</u>。",
    "sentence_reverse_html": "その 商品は <u class=\"q-target\">全部売れた</u>。",
    "sentence_tts": "その商品は売り切れた。",
    "target_word": "売り切れた",
    "target_reading": "うりきれた",
    "synonym_word": "全部売れた",
    "synonym_reading": "ぜんぶうれた",
    "options": [
      "全部売れた",
      "全部売れなかった",
      "だんだん売れなくなってきた",
      "よく売れるようになってきた"
    ],
    "options_vi": [
      "đã bán hết toàn bộ (ĐÚNG)",
      "hoàn toàn không bán được",
      "dần dần không bán được nữa",
      "đã bắt đầu bán chạy"
    ],
    "answer": 0,
    "meaning_vi": "bán hết sạch, cháy hàng",
    "sentence_vi": "Món hàng đó đã bán sạch hết rồi.",
    "nuance_note": "Đuôi động từ ～切る (làm đến cạn sạch): 売り切れる(うりきれる) = 全部売れる (cháy hàng)."
  },
  {
    "id": "syn_p1_q34",
    "part": 1,
    "num": 34,
    "sentence_html": "今度、<u class=\"q-target\">わけ</u>を 教えてください。",
    "sentence_reverse_html": "今度、<u class=\"q-target\">理由</u>を 教えてください。",
    "sentence_tts": "今度、わけを教えてください。",
    "target_word": "わけ",
    "target_reading": "わけ",
    "synonym_word": "理由",
    "synonym_reading": "りゆう",
    "options": [
      "計画",
      "意見",
      "規則",
      "理由"
    ],
    "options_vi": [
      "kế hoạch",
      "ý kiến",
      "quy tắc",
      "lý do (ĐÚNG)"
    ],
    "answer": 3,
    "meaning_vi": "lý do",
    "sentence_vi": "Lần tới hãy cho tôi biết lý do nhé.",
    "nuance_note": "訳(わけ) = 理由(りゆう). Một trong những từ lặp lại nhiều nhất ở JLPT N3!"
  },
  {
    "id": "syn_p1_q35",
    "part": 1,
    "num": 35,
    "sentence_html": "今から アンケートを <u class=\"q-target\">回収</u>します。",
    "sentence_reverse_html": "今から アンケートを <u class=\"q-target\">集める</u>します。",
    "sentence_tts": "今からアンケートを回収します。",
    "target_word": "回収",
    "target_reading": "かいしゅう",
    "synonym_word": "集める",
    "synonym_reading": "あつめる",
    "options": [
      "渡す",
      "贈る",
      "集める",
      "始める"
    ],
    "options_vi": [
      "trao, đưa",
      "tặng quà",
      "thu thập, gom lại (ĐÚNG)",
      "bắt đầu"
    ],
    "answer": 2,
    "meaning_vi": "thu hồi, thu gom",
    "sentence_vi": "Bây giờ tôi sẽ thu lại phiếu khảo sát.",
    "nuance_note": "回収する(かいしゅう - HỒI THU) = 集める(あつめる: thu gom lại từ mọi người)."
  },
  {
    "id": "syn_p1_q36",
    "part": 1,
    "num": 36,
    "sentence_html": "山口さんなら <u class=\"q-target\">さっき</u> 帰りましたよ。",
    "sentence_reverse_html": "山口さんなら <u class=\"q-target\">少し前に</u> 帰りましたよ。",
    "sentence_tts": "山口さんならさっき帰りましたよ。",
    "target_word": "さっき",
    "target_reading": "さっき",
    "synonym_word": "少し前に",
    "synonym_reading": "すこしまえに",
    "options": [
      "すぐに",
      "ずっと前に",
      "やっと",
      "少し前に"
    ],
    "options_vi": [
      "ngay lập tức",
      "từ rất lâu trước đây",
      "cuối cùng cũng",
      "một lúc trước (ĐÚNG)"
    ],
    "answer": 3,
    "meaning_vi": "vừa nãy, mới đây",
    "sentence_vi": "Nếu hỏi anh Yamaguchi thì anh ấy mới về vừa nãy rồi đấy.",
    "nuance_note": "さっき = 少し前に(すこしまえに)."
  },
  {
    "id": "syn_p1_q37",
    "part": 1,
    "num": 37,
    "sentence_html": "隣の 部屋から <u class=\"q-target\">おかしな</u> 音が 聞こえる。",
    "sentence_reverse_html": "隣の 部屋から <u class=\"q-target\">へんな</u> 音が 聞こえる。",
    "sentence_tts": "隣の部屋からおかしな音が聞こえる。",
    "target_word": "おかしな",
    "target_reading": "おかしな",
    "synonym_word": "へんな",
    "synonym_reading": "へんな",
    "options": [
      "いろいろな",
      "にぎやかな",
      "へんな",
      "大きな"
    ],
    "options_vi": [
      "đa dạng, nhiều loại",
      "náo nhiệt",
      "kỳ lạ, kỳ quặc (ĐÚNG)",
      "to lớn"
    ],
    "answer": 2,
    "meaning_vi": "kỳ lạ, khác thường",
    "sentence_vi": "Từ phòng bên cạnh nghe thấy âm thanh kỳ lạ.",
    "nuance_note": "おかしな / おかしい có 2 nghĩa: (1) buồn cười và (2) kỳ lạ, bất thường (= 変な)."
  },
  {
    "id": "syn_p1_q38",
    "part": 1,
    "num": 38,
    "sentence_html": "あれから 約1 週間<u class=\"q-target\">たちました</u>。",
    "sentence_reverse_html": "あれから 約1 週間<u class=\"q-target\">過ぎました</u>。",
    "sentence_tts": "あれから約1週間たちました。",
    "target_word": "たちました",
    "target_reading": "たちました",
    "synonym_word": "過ぎました",
    "synonym_reading": "すぎました",
    "options": [
      "過ぎました",
      "かかりました",
      "待ちました",
      "続けました"
    ],
    "options_vi": [
      "đã trôi qua (ĐÚNG)",
      "đã tốn mất (thời gian/tiền)",
      "đã chờ đợi",
      "đã tiếp tục"
    ],
    "answer": 0,
    "meaning_vi": "trôi qua (thời gian)",
    "sentence_vi": "Kể từ đó đến nay đã trôi qua khoảng 1 tuần rồi.",
    "nuance_note": "時間が経つ(たつ) = 時間が過ぎる(すぎる). Rất hay nhầm với かかる (tốn thời gian để làm gì)!"
  },
  {
    "id": "syn_p1_q39",
    "part": 1,
    "num": 39,
    "sentence_html": "山本さんは <u class=\"q-target\">あわてて</u>出ていきましたよ。",
    "sentence_reverse_html": "山本さんは <u class=\"q-target\">急いだようすで</u>出ていきましたよ。",
    "sentence_tts": "山本さんはあわてて出ていきましたよ。",
    "target_word": "あわてて",
    "target_reading": "あわてて",
    "synonym_word": "急いだようすで",
    "synonym_reading": "いそいだようすで",
    "options": [
      "困ったようすで",
      "急いだようすで",
      "疲れたようすで",
      "怒ったようすで"
    ],
    "options_vi": [
      "với vẻ bối rối",
      "với vẻ vội vã, gấp gáp (ĐÚNG)",
      "với vẻ mệt mỏi",
      "với vẻ tức giận"
    ],
    "answer": 1,
    "meaning_vi": "vội vã, cuống quýt",
    "sentence_vi": "Anh Yamamoto đã vội vã chạy ra ngoài rồi đấy.",
    "nuance_note": "慌てる(あわてる) = 急いだ様子 / 落ち着かない様子 (cuống quýt vội vàng)."
  },
  {
    "id": "syn_p1_q40",
    "part": 1,
    "num": 40,
    "sentence_html": "道が <u class=\"q-target\">カーブしている</u>ので、気を つけてください。",
    "sentence_reverse_html": "道が <u class=\"q-target\">曲がっている</u>ので、気を つけてください。",
    "sentence_tts": "道がカーブしているので、気をつけてください。",
    "target_word": "カーブしている",
    "target_reading": "カーブしている",
    "synonym_word": "曲がっている",
    "synonym_reading": "まがっている",
    "options": [
      "曲がっている",
      "坂になっている",
      "暗くなっている",
      "狭くなっている"
    ],
    "options_vi": [
      "đang uốn cong / rẽ (ĐÚNG)",
      "đang là con dốc",
      "đang tối đi",
      "đang hẹp lại"
    ],
    "answer": 0,
    "meaning_vi": "uốn cong, có khúc cua",
    "sentence_vi": "Đường có khúc cua nên hãy cẩn thận nhé.",
    "nuance_note": "カーブ (curve) = 曲がっている (đường cong/khúc cua)."
  },
  {
    "id": "syn_p2_q1",
    "part": 2,
    "num": 1,
    "sentence_html": "その 部屋に ある 家具の <u class=\"q-target\">サイズ</u>を 聞いてきてください。",
    "sentence_reverse_html": "その 部屋に ある 家具の <u class=\"q-target\">大きさ</u>を 聞いてきてください。",
    "sentence_tts": "その部屋にある家具のサイズを聞いてきてください。",
    "target_word": "サイズ",
    "target_reading": "サイズ",
    "synonym_word": "大きさ",
    "synonym_reading": "おおきさ",
    "options": [
      "重さ",
      "数",
      "形",
      "大きさ"
    ],
    "options_vi": [
      "cân nặng",
      "số lượng",
      "hình dáng",
      "độ lớn, kích cỡ (ĐÚNG)"
    ],
    "answer": 3,
    "meaning_vi": "kích cỡ",
    "sentence_vi": "Hãy đi hỏi giúp tôi kích cỡ của đồ nội thất trong căn phòng đó.",
    "nuance_note": "サイズ = 大きさ(おおきさ)."
  },
  {
    "id": "syn_p2_q2",
    "part": 2,
    "num": 2,
    "sentence_html": "この 部分を <u class=\"q-target\">暗記して</u>ください。",
    "sentence_reverse_html": "この 部分を <u class=\"q-target\">覚えて</u>ください。",
    "sentence_tts": "この部分を暗記してください。",
    "target_word": "暗記して",
    "target_reading": "あんきして",
    "synonym_word": "覚えて",
    "synonym_reading": "おぼえて",
    "options": [
      "読んで",
      "書いて",
      "覚えて",
      "教えて"
    ],
    "options_vi": [
      "đọc",
      "viết",
      "ghi nhớ, học thuộc (ĐÚNG)",
      "dạy, chỉ bảo"
    ],
    "answer": 2,
    "meaning_vi": "học thuộc lòng",
    "sentence_vi": "Hãy học thuộc lòng phần này.",
    "nuance_note": "暗記する(あんき - ÁM KÝ) = 頭の中に覚える (học thuộc lòng)."
  },
  {
    "id": "syn_p2_q3",
    "part": 2,
    "num": 3,
    "sentence_html": "伊藤さんは 魚を 料理するのが <u class=\"q-target\">得意な</u>ようです。",
    "sentence_reverse_html": "伊藤さんは 魚を 料理するのが <u class=\"q-target\">とても上手な</u>ようです。",
    "sentence_tts": "伊藤さんは魚を料理するのが得意なようです。",
    "target_word": "得意な",
    "target_reading": "とくいな",
    "synonym_word": "とても上手な",
    "synonym_reading": "とてもじょうずな",
    "options": [
      "あまり好きじゃない",
      "あまり上手じゃない",
      "とても好きな",
      "とても上手な"
    ],
    "options_vi": [
      "không thích lắm",
      "không giỏi lắm",
      "rất thích",
      "rất giỏi (ĐÚNG)"
    ],
    "answer": 3,
    "meaning_vi": "giỏi, sở trường",
    "sentence_vi": "Có vẻ chị Ito rất giỏi nấu các món cá.",
    "nuance_note": "得意(とくい - ĐẮC Ý) = とても上手(じょうず). Đừng nhầm với 'thích' (好き) nhé!"
  },
  {
    "id": "syn_p2_q4",
    "part": 2,
    "num": 4,
    "sentence_html": "誰にでも <u class=\"q-target\">欠点</u>は あると思う。",
    "sentence_reverse_html": "誰にでも <u class=\"q-target\">よくないところ</u>は あると思う。",
    "sentence_tts": "誰にでも欠点はあると思う。",
    "target_word": "欠点",
    "target_reading": "けってん",
    "synonym_word": "よくないところ",
    "synonym_reading": "よくないところ",
    "options": [
      "つまらないところ",
      "よくないところ",
      "間違えるところ",
      "忘れるところ"
    ],
    "options_vi": [
      "điểm nhàm chán",
      "điểm không tốt (ĐÚNG)",
      "chỗ hay nhầm",
      "chỗ hay quên"
    ],
    "answer": 1,
    "meaning_vi": "khuyết điểm",
    "sentence_vi": "Tôi nghĩ ai cũng đều có khuyết điểm cả.",
    "nuance_note": "欠点(けってん) = よくないところ / 悪いところ."
  },
  {
    "id": "syn_p2_q5",
    "part": 2,
    "num": 5,
    "sentence_html": "そんなに <u class=\"q-target\">どならないで</u>ください。",
    "sentence_reverse_html": "そんなに <u class=\"q-target\">大声で怒らないで</u>ください。",
    "sentence_tts": "そんなにどならないでください。",
    "target_word": "どならないで",
    "target_reading": "どならないで",
    "synonym_word": "大声で怒らないで",
    "synonym_reading": "おおごえでおこらないで",
    "options": [
      "大声で怒らないで",
      "強く押さないで",
      "たくさん食べないで",
      "早く歩かないで"
    ],
    "options_vi": [
      "đừng quát mắng lớn tiếng (ĐÚNG)",
      "đừng đẩy mạnh",
      "đừng ăn nhiều",
      "đừng đi bộ nhanh"
    ],
    "answer": 0,
    "meaning_vi": "đừng quát mắng lớn tiếng",
    "sentence_vi": "Xin đừng quát tháo ầm ĩ như thế.",
    "nuance_note": "怒鳴る(どなる - NỘ MINH) = 大声で怒る (gào thét quát mắng)."
  },
  {
    "id": "syn_p2_q6",
    "part": 2,
    "num": 6,
    "sentence_html": "みなさん、<u class=\"q-target\">避難して</u>ください。",
    "sentence_reverse_html": "みなさん、<u class=\"q-target\">にげて</u>ください。",
    "sentence_tts": "みなさん、避難してください。",
    "target_word": "避難して",
    "target_reading": "ひなんして",
    "synonym_word": "にげて",
    "synonym_reading": "にげて",
    "options": [
      "ならんで",
      "入って",
      "にげて",
      "急いで"
    ],
    "options_vi": [
      "xếp hàng",
      "đi vào",
      "chạy trốn, lánh nạn (ĐÚNG)",
      "vội vàng"
    ],
    "answer": 2,
    "meaning_vi": "sơ tán, lánh nạn",
    "sentence_vi": "Mọi người ơi, hãy mau đi sơ tán/lánh nạn đi!",
    "nuance_note": "避難する(ひなん - TỴ NẠN) = 安全な所へ逃げる (hay gặp khi động đất 地震 / hỏa hoạn 火事)."
  },
  {
    "id": "syn_p2_q7",
    "part": 2,
    "num": 7,
    "sentence_html": "何か いい<u class=\"q-target\">案</u> はありませんか。",
    "sentence_reverse_html": "何か いい<u class=\"q-target\">アイデア</u> はありませんか。",
    "sentence_tts": "何かいい案はありませんか。",
    "target_word": "案",
    "target_reading": "あん",
    "synonym_word": "アイデア",
    "synonym_reading": "アイデア",
    "options": [
      "ルール",
      "アイデア",
      "メニュー",
      "サービス"
    ],
    "options_vi": [
      "quy tắc",
      "ý tưởng, sáng kiến (ĐÚNG)",
      "thực đơn",
      "dịch vụ"
    ],
    "answer": 1,
    "meaning_vi": "ý tưởng, phương án",
    "sentence_vi": "Có phương án/ý tưởng nào hay không?",
    "nuance_note": "案(あん - ÁN) = アイデア / 考え (ý tưởng, phương án đề xuất)."
  },
  {
    "id": "syn_p2_q8",
    "part": 2,
    "num": 8,
    "sentence_html": "私が 何を 言っても、彼は ずっと <u class=\"q-target\">だまっていた</u>。",
    "sentence_reverse_html": "私が 何を 言っても、彼は ずっと <u class=\"q-target\">話さなかった</u>。",
    "sentence_tts": "私が何を言っても、彼はずっとだまっていた。",
    "target_word": "だまっていた",
    "target_reading": "だまっていた",
    "synonym_word": "話さなかった",
    "synonym_reading": "はなさなかった",
    "options": [
      "話さなかった",
      "笑わなかった",
      "動かなかった",
      "怒らなかった"
    ],
    "options_vi": [
      "không nói gì (ĐÚNG)",
      "không cười",
      "không cử động",
      "không tức giận"
    ],
    "answer": 0,
    "meaning_vi": "im lặng, không nói gì",
    "sentence_vi": "Dù tôi có nói gì đi nữa, anh ấy vẫn cứ im lặng suốt.",
    "nuance_note": "黙る(だまる - MẶC) = 何も話さない (im bặt không lên tiếng)."
  },
  {
    "id": "syn_p2_q9",
    "part": 2,
    "num": 9,
    "sentence_html": "この やり方が <u class=\"q-target\">ベスト</u>だ。",
    "sentence_reverse_html": "この やり方が <u class=\"q-target\">最も良い</u>だ。",
    "sentence_tts": "このやり方がベストだ。",
    "target_word": "ベスト",
    "target_reading": "ベスト",
    "synonym_word": "最も良い",
    "synonym_reading": "もっともよい",
    "options": [
      "最も良い",
      "最も良くない",
      "最も難しい",
      "最も難しくない"
    ],
    "options_vi": [
      "tốt nhất (ĐÚNG)",
      "tệ nhất",
      "khó nhất",
      "dễ nhất / ít khó nhất"
    ],
    "answer": 0,
    "meaning_vi": "tốt nhất (best)",
    "sentence_vi": "Cách làm này là tốt nhất.",
    "nuance_note": "ベスト (best) = 最も良い(もっともよい) = 一番良い."
  },
  {
    "id": "syn_p2_q10",
    "part": 2,
    "num": 10,
    "sentence_html": "お店の 人が <u class=\"q-target\">配達して</u>くれた。",
    "sentence_reverse_html": "お店の 人が <u class=\"q-target\">届けて</u>くれた。",
    "sentence_tts": "お店の人が配達してくれた。",
    "target_word": "配達して",
    "target_reading": "はいたつして",
    "synonym_word": "届けて",
    "synonym_reading": "とどけて",
    "options": [
      "組み立てて",
      "手伝って",
      "貸して",
      "届けて"
    ],
    "options_vi": [
      "lắp ráp",
      "giúp đỡ",
      "cho mượn",
      "giao tới, chuyển tới (ĐÚNG)"
    ],
    "answer": 3,
    "meaning_vi": "giao hàng, chuyển phát",
    "sentence_vi": "Nhân viên cửa hàng đã giao hàng đến tận nơi cho tôi.",
    "nuance_note": "配達(はいたつ - PHỐI ĐẠT) = 届ける(とどける: mang giao tận nơi)."
  },
  {
    "id": "syn_p2_q11",
    "part": 2,
    "num": 11,
    "sentence_html": "<u class=\"q-target\">ふだん</u>と 同じようにやってください。",
    "sentence_reverse_html": "<u class=\"q-target\">いつも</u>と 同じようにやってください。",
    "sentence_tts": "ふだんと同じようにやってください。",
    "target_word": "ふだん",
    "target_reading": "ふだん",
    "synonym_word": "いつも",
    "synonym_reading": "いつも",
    "options": [
      "みんな",
      "昔",
      "いつも",
      "例"
    ],
    "options_vi": [
      "mọi người",
      "ngày xưa",
      "luôn luôn, mọi khi (ĐÚNG)",
      "ví dụ"
    ],
    "answer": 2,
    "meaning_vi": "bình thường, ngày thường",
    "sentence_vi": "Hãy cứ làm giống như mọi ngày nhé.",
    "nuance_note": "普段(ふだん - PHỔ ĐOẠN) = いつも / 普通の日 (như thường lệ)."
  },
  {
    "id": "syn_p2_q12",
    "part": 2,
    "num": 12,
    "sentence_html": "あの 人は <u class=\"q-target\">短気</u>だ。",
    "sentence_reverse_html": "あの 人は <u class=\"q-target\">すぐ怒る</u>だ。",
    "sentence_tts": "あの人は短気だ。",
    "target_word": "短気",
    "target_reading": "たんき",
    "synonym_word": "すぐ怒る",
    "synonym_reading": "すぐおこる",
    "options": [
      "すぐ怒る",
      "すぐ謝る",
      "すぐ驚く",
      "すぐ喜ぶ"
    ],
    "options_vi": [
      "dễ/mau nổi giận (ĐÚNG)",
      "mau xin lỗi",
      "dễ giật mình",
      "mau vui mừng"
    ],
    "answer": 0,
    "meaning_vi": "nóng tính",
    "sentence_vi": "Người kia rất nóng tính.",
    "nuance_note": "短気(たんき - ĐOẢN KHÍ: tính khí ngắn) = すぐ怒る. Chú ý khác với 短期 (ngắn hạn)!"
  },
  {
    "id": "syn_p2_q13",
    "part": 2,
    "num": 13,
    "sentence_html": "12 時に <u class=\"q-target\">グラウンド</u>に 来てください。",
    "sentence_reverse_html": "12 時に <u class=\"q-target\">運動場</u>に 来てください。",
    "sentence_tts": "12時にグラウンドに来てください。",
    "target_word": "グラウンド",
    "target_reading": "グラウンド",
    "synonym_word": "運動場",
    "synonym_reading": "うんどうじょう",
    "options": [
      "屋上",
      "体育館",
      "公園",
      "運動場"
    ],
    "options_vi": [
      "sân thượng",
      "nhà thi đấu thể chất",
      "công viên",
      "sân vận động, bãi tập (ĐÚNG)"
    ],
    "answer": 3,
    "meaning_vi": "sân vận động, bãi tập",
    "sentence_vi": "12 giờ hãy tập trung ở sân vận động/sân trường nhé.",
    "nuance_note": "グラウンド (ground) = 運動場(うんどうじょう: sân tập ngoài trời)."
  },
  {
    "id": "syn_p2_q14",
    "part": 2,
    "num": 14,
    "sentence_html": "私の <u class=\"q-target\">おい</u>は 東京に 住んでいます。",
    "sentence_reverse_html": "私の <u class=\"q-target\">姉の息子</u>は 東京に 住んでいます。",
    "sentence_tts": "私のおいは東京に住んでいます。",
    "target_word": "おい",
    "target_reading": "おい",
    "synonym_word": "姉の息子",
    "synonym_reading": "あねのむすこ",
    "options": [
      "姉の息子",
      "姉の娘",
      "父の弟",
      "父の妹"
    ],
    "options_vi": [
      "con trai của chị gái (ĐÚNG)",
      "con gái của chị gái (= めい)",
      "em trai của bố (= おじ)",
      "em gái của bố (= おば)"
    ],
    "answer": 0,
    "meaning_vi": "cháu trai",
    "sentence_vi": "Cháu trai tôi đang sống ở Tokyo.",
    "nuance_note": "Nhớ cặp họ hàng hay thi: おい(甥: cháu trai = 兄/姉/弟/妹の息子) vs めい(姪: cháu gái)!"
  },
  {
    "id": "syn_p2_q15",
    "part": 2,
    "num": 15,
    "sentence_html": "もっと <u class=\"q-target\">くわしく</u> 説明してください。",
    "sentence_reverse_html": "もっと <u class=\"q-target\">細かく</u> 説明してください。",
    "sentence_tts": "もっとくわしく説明してください。",
    "target_word": "くわしく",
    "target_reading": "くわしく",
    "synonym_word": "細かく",
    "synonym_reading": "こまかく",
    "options": [
      "早く",
      "細かく",
      "簡単に",
      "熱心に"
    ],
    "options_vi": [
      "nhanh hơn",
      "tỉ mỉ, chi tiết (ĐÚNG)",
      "đơn giản",
      "nhiệt tình"
    ],
    "answer": 1,
    "meaning_vi": "chi tiết, cụ thể",
    "sentence_vi": "Xin hãy giải thích chi tiết hơn nữa.",
    "nuance_note": "詳しい(くわしい) = 細かい(こまかい: cặn kẽ, chi tiết từng điểm)."
  },
  {
    "id": "syn_p2_q16",
    "part": 2,
    "num": 16,
    "sentence_html": "もう 少し 時間を <u class=\"q-target\">あたえよう</u>と思う。",
    "sentence_reverse_html": "もう 少し 時間を <u class=\"q-target\">あげよう</u>と思う。",
    "sentence_tts": "もう少し時間をあたえようと思う。",
    "target_word": "あたえよう",
    "target_reading": "あたえよう",
    "synonym_word": "あげよう",
    "synonym_reading": "あげよう",
    "options": [
      "あげよう",
      "もらおう",
      "作ろう",
      "使おう"
    ],
    "options_vi": [
      "sẽ cho/tặng (ĐÚNG)",
      "sẽ nhận",
      "sẽ tạo ra",
      "sẽ sử dụng"
    ],
    "answer": 0,
    "meaning_vi": "cho, trao tặng",
    "sentence_vi": "Tôi định sẽ cho thêm một chút thời gian nữa.",
    "nuance_note": "与える(あたえる - DỮ) = あげる (trao cho — dùng trong văn viết/cấp trên trao cho)."
  },
  {
    "id": "syn_p2_q17",
    "part": 2,
    "num": 17,
    "sentence_html": "ここは 車が <u class=\"q-target\">ずいぶん</u> 多い ですね。",
    "sentence_reverse_html": "ここは 車が <u class=\"q-target\">非常に</u> 多い ですね。",
    "sentence_tts": "ここは車がずいぶん多いですね。",
    "target_word": "ずいぶん",
    "target_reading": "ずいぶん",
    "synonym_word": "非常に",
    "synonym_reading": "ひじょうに",
    "options": [
      "最も",
      "非常に",
      "まあまあ",
      "やっぱり"
    ],
    "options_vi": [
      "nhất",
      "rất là, vô cùng (ĐÚNG)",
      "tạm tạm, tàm tạm",
      "quả nhiên"
    ],
    "answer": 1,
    "meaning_vi": "khá là, rất là, vô cùng",
    "sentence_vi": "Ở đây xe cộ đông quá chừng nhỉ!",
    "nuance_note": "ずいぶん = 非常に(ひじょうに) / とても (thường đi kèm cảm giác bất ngờ 'nhiều/lâu hơn tưởng tượng')."
  },
  {
    "id": "syn_p2_q18",
    "part": 2,
    "num": 18,
    "sentence_html": "荷物は <u class=\"q-target\">指定</u>の 場所に 置いてください。",
    "sentence_reverse_html": "荷物は <u class=\"q-target\">決められた</u>の 場所に 置いてください。",
    "sentence_tts": "荷物は指定の場所に置いてください。",
    "target_word": "指定",
    "target_reading": "してい",
    "synonym_word": "決められた",
    "synonym_reading": "きめられた",
    "options": [
      "決められた",
      "空いている",
      "近くの",
      "ほかの"
    ],
    "options_vi": [
      "đã được quyết định/ấn định (ĐÚNG)",
      "đang trống",
      "ở gần",
      "chỗ khác"
    ],
    "answer": 0,
    "meaning_vi": "chỉ định, đã quy định",
    "sentence_vi": "Hành lý xin hãy đặt vào nơi đã được chỉ định.",
    "nuance_note": "指定(してい - CHỈ ĐỊNH) = 決められた. Rất hay gặp: 指定席 (ghế đặt chỗ chỉ định)."
  },
  {
    "id": "syn_p2_q19",
    "part": 2,
    "num": 19,
    "sentence_html": "山田さんの 話を 聞くまでは <u class=\"q-target\">不安</u>だった。",
    "sentence_reverse_html": "山田さんの 話を 聞くまでは <u class=\"q-target\">心配</u>だった。",
    "sentence_tts": "山田さんの話を聞くまでは不安だった。",
    "target_word": "不安",
    "target_reading": "ふあん",
    "synonym_word": "心配",
    "synonym_reading": "しんぱい",
    "options": [
      "賛成",
      "大変",
      "心配",
      "反対"
    ],
    "options_vi": [
      "tán thành",
      "vất vả",
      "lo lắng (ĐÚNG)",
      "phản đối"
    ],
    "answer": 2,
    "meaning_vi": "bất an, lo lắng",
    "sentence_vi": "Cho tới trước khi nghe anh Yamada nói, tôi đã rất bất an.",
    "nuance_note": "不安(ふあん - BẤT AN) = 心配(しんぱい). Trái nghĩa với 安心(あんしん: yên tâm)."
  },
  {
    "id": "syn_p2_q20",
    "part": 2,
    "num": 20,
    "sentence_html": "<u class=\"q-target\">スケジュール</u>は 川井さんに 聞いてください。",
    "sentence_reverse_html": "<u class=\"q-target\">予定</u>は 川井さんに 聞いてください。",
    "sentence_tts": "スケジュールは川井さんに聞いてください。",
    "target_word": "スケジュール",
    "target_reading": "スケジュール",
    "synonym_word": "予定",
    "synonym_reading": "よてい",
    "options": [
      "行き方",
      "理由",
      "やり方",
      "予定"
    ],
    "options_vi": [
      "cách đi",
      "lý do",
      "cách làm",
      "dự định, lịch trình (ĐÚNG)"
    ],
    "answer": 3,
    "meaning_vi": "lịch trình",
    "sentence_vi": "Về lịch trình thì hãy hỏi anh Kawai nhé.",
    "nuance_note": "スケジュール = 予定(よてい)."
  },
  {
    "id": "syn_p2_q21",
    "part": 2,
    "num": 21,
    "sentence_html": "昨日 見た 映画は <u class=\"q-target\">退屈だった</u>。",
    "sentence_reverse_html": "昨日 見た 映画は <u class=\"q-target\">つまらなかった</u>。",
    "sentence_tts": "昨日見た映画は退屈だった。",
    "target_word": "退屈だった",
    "target_reading": "たいくつだった",
    "synonym_word": "つまらなかった",
    "synonym_reading": "つまらなかった",
    "options": [
      "めずらしかった",
      "つまらなかった",
      "おかしかった",
      "おもしろかった"
    ],
    "options_vi": [
      "hiếm lạ",
      "nhàm chán (ĐÚNG)",
      "kỳ quặc / buồn cười",
      "thú vị"
    ],
    "answer": 1,
    "meaning_vi": "buồn chán, tẻ nhạt",
    "sentence_vi": "Bộ phim xem hôm qua thật nhàm chán.",
    "nuance_note": "退屈(たいくつ - THOÁI KHUẤT) = つまらない / 暇でつまらない (chán ngắt)."
  },
  {
    "id": "syn_p2_q22",
    "part": 2,
    "num": 22,
    "sentence_html": "危険なので、絶対に <u class=\"q-target\">ふれないで</u>ください。",
    "sentence_reverse_html": "危険なので、絶対に <u class=\"q-target\">触らないで</u>ください。",
    "sentence_tts": "危険なので、絶対にふれないでください。",
    "target_word": "ふれないで",
    "target_reading": "ふれないで",
    "synonym_word": "触らないで",
    "synonym_reading": "さわらないで",
    "options": [
      "座らないで",
      "走らないで",
      "触らないで",
      "休まないで"
    ],
    "options_vi": [
      "đừng ngồi",
      "đừng chạy",
      "đừng chạm/sờ vào (ĐÚNG)",
      "đừng nghỉ"
    ],
    "answer": 2,
    "meaning_vi": "đừng chạm vào",
    "sentence_vi": "Vì nguy hiểm nên tuyệt đối đừng chạm vào.",
    "nuance_note": "触れる(ふれる) = 触る(さわる). Biển báo bảo tàng/máy móc hay ghi: 手を触れないでください!"
  },
  {
    "id": "syn_p2_q23",
    "part": 2,
    "num": 23,
    "sentence_html": "それは とても いい <u class=\"q-target\">機会</u>だと思います。",
    "sentence_reverse_html": "それは とても いい <u class=\"q-target\">チャンス</u>だと思います。",
    "sentence_tts": "それはとてもいい機会だと思います。",
    "target_word": "機会",
    "target_reading": "きかい",
    "synonym_word": "チャンス",
    "synonym_reading": "チャンス",
    "options": [
      "プレゼント",
      "アイディア",
      "パーティー",
      "チャンス"
    ],
    "options_vi": [
      "quà tặng",
      "ý tưởng",
      "bữa tiệc",
      "cơ hội (ĐÚNG)"
    ],
    "answer": 3,
    "meaning_vi": "cơ hội, dịp",
    "sentence_vi": "Tôi nghĩ đó là một cơ hội rất tốt.",
    "nuance_note": "機会(きかい - CƠ HỘI) = チャンス (chance). Phân biệt với 機械(きかい: máy móc)!"
  },
  {
    "id": "syn_p2_q24",
    "part": 2,
    "num": 24,
    "sentence_html": "今回の 仕事は いつも より <u class=\"q-target\">きつかった</u>。",
    "sentence_reverse_html": "今回の 仕事は いつも より <u class=\"q-target\">大変だった</u>。",
    "sentence_tts": "今回の仕事はいつもよりきつかった。",
    "target_word": "きつかった",
    "target_reading": "きつかった",
    "synonym_word": "大変だった",
    "synonym_reading": "たいへんだった",
    "options": [
      "大変だった",
      "簡単だった",
      "楽しかった",
      "長かった"
    ],
    "options_vi": [
      "vất vả (ĐÚNG)",
      "đơn giản",
      "vui vẻ",
      "dài"
    ],
    "answer": 0,
    "meaning_vi": "vất vả, nặng nhọc",
    "sentence_vi": "Công việc lần này vất vả hơn mọi khi.",
    "nuance_note": "きつい = 大変だ (nặng nhọc, vất vả)."
  },
  {
    "id": "syn_p2_q25",
    "part": 2,
    "num": 25,
    "sentence_html": "なぜ 私の 答えが 違うのか、友達の 説明を 聞いて <u class=\"q-target\">納得した</u>。",
    "sentence_reverse_html": "なぜ 私の 答えが 違うのか、友達の 説明を 聞いて <u class=\"q-target\">とてもよく分かった</u>。",
    "sentence_tts": "なぜ私の答えが違うのか、友達の説明を聞いて納得した。",
    "target_word": "納得した",
    "target_reading": "なっとくした",
    "synonym_word": "とてもよく分かった",
    "synonym_reading": "とてもよくわかった",
    "options": [
      "少し分かった",
      "とてもよく分かった",
      "もう一度考えた",
      "何度も考えた"
    ],
    "options_vi": [
      "hiểu một chút",
      "hiểu rất rõ, hoàn toàn thông suốt (ĐÚNG)",
      "suy nghĩ thêm lần nữa",
      "suy nghĩ nhiều lần"
    ],
    "answer": 1,
    "meaning_vi": "hiểu thấu, tâm phục",
    "sentence_vi": "Nghe bạn giải thích tại sao đáp án của mình sai, tôi đã hiểu ra hoàn toàn.",
    "nuance_note": "納得する(なっとく - NẠP ĐẮC) = 理由がよくわかって受け入れる (hiểu cặn kẽ và đồng tình)."
  },
  {
    "id": "syn_p2_q26",
    "part": 2,
    "num": 26,
    "sentence_html": "鈴木さんへ <u class=\"q-target\">感謝</u>の 手紙を 送った。",
    "sentence_reverse_html": "鈴木さんへ <u class=\"q-target\">お礼</u>の 手紙を 送った。",
    "sentence_tts": "鈴木さんへ感謝の手紙を送った。",
    "target_word": "感謝",
    "target_reading": "かんしゃ",
    "synonym_word": "お礼",
    "synonym_reading": "おれい",
    "options": [
      "お願い",
      "お礼",
      "お見舞い",
      "お知らせ"
    ],
    "options_vi": [
      "lời nhờ vả",
      "lời cảm ơn, cảm tạ (ĐÚNG)",
      "lời thăm hỏi bệnh",
      "thông báo"
    ],
    "answer": 1,
    "meaning_vi": "cảm tạ, biết ơn",
    "sentence_vi": "Tôi đã gửi bức thư cảm ơn tới anh Suzuki.",
    "nuance_note": "感謝(かんしゃ - CẢM TẠ) = お礼(おれい: cảm ơn/bày tỏ lòng biết ơn)."
  },
  {
    "id": "syn_p2_q27",
    "part": 2,
    "num": 27,
    "sentence_html": "子どもたちは <u class=\"q-target\">キッチン</u>に います。",
    "sentence_reverse_html": "子どもたちは <u class=\"q-target\">台所</u>に います。",
    "sentence_tts": "子どもたちはキッチンにいます。",
    "target_word": "キッチン",
    "target_reading": "キッチン",
    "synonym_word": "台所",
    "synonym_reading": "だいどころ",
    "options": [
      "廊下",
      "居間",
      "玄関",
      "台所"
    ],
    "options_vi": [
      "hành lang",
      "phòng khách",
      "lối vào",
      "nhà bếp (ĐÚNG)"
    ],
    "answer": 3,
    "meaning_vi": "nhà bếp",
    "sentence_vi": "Lũ trẻ đang ở trong nhà bếp.",
    "nuance_note": "キッチン = 台所(だいどころ)."
  },
  {
    "id": "syn_p2_q28",
    "part": 2,
    "num": 28,
    "sentence_html": "<u class=\"q-target\">不安な</u>ので、私は 行かない ことにした。",
    "sentence_reverse_html": "<u class=\"q-target\">心配な</u>ので、私は 行かない ことにした。",
    "sentence_tts": "不安なので、私は行かないことにした。",
    "target_word": "不安な",
    "target_reading": "ふあんな",
    "synonym_word": "心配な",
    "synonym_reading": "しんぱいな",
    "options": [
      "時間がない",
      "お金がない",
      "危険な",
      "心配な"
    ],
    "options_vi": [
      "không có thời gian",
      "không có tiền",
      "nguy hiểm",
      "lo lắng (ĐÚNG)"
    ],
    "answer": 3,
    "meaning_vi": "bất an, lo lắng",
    "sentence_vi": "Vì cảm thấy bất an nên tôi đã quyết định không đi.",
    "nuance_note": "不安な = 心配な."
  },
  {
    "id": "syn_p2_q29",
    "part": 2,
    "num": 29,
    "sentence_html": "おなかが <u class=\"q-target\">ぺこぺこ</u>だ。",
    "sentence_reverse_html": "おなかが <u class=\"q-target\">すいている</u>だ。",
    "sentence_tts": "おなかがぺこぺこだ。",
    "target_word": "ぺこぺこ",
    "target_reading": "ぺこぺこ",
    "synonym_word": "すいている",
    "synonym_reading": "すいている",
    "options": [
      "痛い",
      "すいている",
      "かゆい",
      "いっぱいだ"
    ],
    "options_vi": [
      "đau",
      "đang đói/rỗng bụng (ĐÚNG)",
      "ngứa",
      "đang no căng"
    ],
    "answer": 1,
    "meaning_vi": "đói meo, đói cồn cào",
    "sentence_vi": "Bụng tôi đói meo rồi.",
    "nuance_note": "おなかがぺこぺこだ = おなかがとてもすいている (đói cồn cào). Đừng nhầm ぺらぺら (nói trôi chảy)!"
  },
  {
    "id": "syn_p2_q30",
    "part": 2,
    "num": 30,
    "sentence_html": "兄は <u class=\"q-target\">黙って</u> ずっと 漫画を 読んでいる。",
    "sentence_reverse_html": "兄は <u class=\"q-target\">何も話さないで</u> ずっと 漫画を 読んでいる。",
    "sentence_tts": "兄は黙ってずっと漫画を読んでいる。",
    "target_word": "黙って",
    "target_reading": "だまって",
    "synonym_word": "何も話さないで",
    "synonym_reading": "なにもはなさないで",
    "options": [
      "何も話さないで",
      "何も食べないで",
      "勉強しないで",
      "寝ないで"
    ],
    "options_vi": [
      "không nói gì cả (ĐÚNG)",
      "không ăn gì cả",
      "không học bài",
      "không ngủ"
    ],
    "answer": 0,
    "meaning_vi": "im lặng, không nói lời nào",
    "sentence_vi": "Anh trai tôi cứ im lặng đọc truyện tranh suốt.",
    "nuance_note": "黙って(だまって) = 何も話さないで."
  },
  {
    "id": "syn_p2_q31",
    "part": 2,
    "num": 31,
    "sentence_html": "<u class=\"q-target\">絶対</u> 会いに 来て くださいね。",
    "sentence_reverse_html": "<u class=\"q-target\">必ず</u> 会いに 来て くださいね。",
    "sentence_tts": "絶対会いに来てくださいね。",
    "target_word": "絶対",
    "target_reading": "ぜったい",
    "synonym_word": "必ず",
    "synonym_reading": "かならず",
    "options": [
      "いつでも",
      "すぐに",
      "また",
      "必ず"
    ],
    "options_vi": [
      "bất cứ lúc nào",
      "ngay lập tức",
      "lại / nữa",
      "nhất định, chắc chắn (ĐÚNG)"
    ],
    "answer": 3,
    "meaning_vi": "tuyệt đối, nhất định",
    "sentence_vi": "Nhất định hãy đến gặp tớ nhé!",
    "nuance_note": "絶対(ぜったい) = 必ず(かならず)."
  },
  {
    "id": "syn_p2_q32",
    "part": 2,
    "num": 32,
    "sentence_html": "山口さんは <u class=\"q-target\">逆</u>の ほうに 行きましたよ。",
    "sentence_reverse_html": "山口さんは <u class=\"q-target\">反対</u>の ほうに 行きましたよ。",
    "sentence_tts": "山口さんは逆のほうに行きましたよ。",
    "target_word": "逆",
    "target_reading": "ぎゃく",
    "synonym_word": "反対",
    "synonym_reading": "はんたい",
    "options": [
      "反対",
      "外",
      "遠",
      "奥"
    ],
    "options_vi": [
      "ngược lại, đối lập (ĐÚNG)",
      "bên ngoài",
      "xa",
      "bên trong sâu"
    ],
    "answer": 0,
    "meaning_vi": "ngược lại, ngược hướng",
    "sentence_vi": "Anh Yamaguchi đã đi về hướng ngược lại rồi đấy.",
    "nuance_note": "逆(ぎゃく - NGHỊCH) = 反対(はんたい: ngược chiều, trái ngược)."
  },
  {
    "id": "syn_p2_q33",
    "part": 2,
    "num": 33,
    "sentence_html": "みんな 木村さんの 話を <u class=\"q-target\">信じている</u>。",
    "sentence_reverse_html": "みんな 木村さんの 話を <u class=\"q-target\">本当だと思っている</u>。",
    "sentence_tts": "みんな木村さんの話を信じている。",
    "target_word": "信じている",
    "target_reading": "しんじている",
    "synonym_word": "本当だと思っている",
    "synonym_reading": "ほんとうだとおもっている",
    "options": [
      "面白いと思っている",
      "面白くないと思っている",
      "本当だと思っている",
      "本当じゃないと思っている"
    ],
    "options_vi": [
      "nghĩ là thú vị",
      "nghĩ là không thú vị",
      "nghĩ là sự thật (ĐÚNG)",
      "nghĩ là không phải thật (= 疑う)"
    ],
    "answer": 2,
    "meaning_vi": "tin tưởng",
    "sentence_vi": "Mọi người đều tin vào câu chuyện của anh Kimura.",
    "nuance_note": "信じる(しんじる) = 本当だと思う (tin là thật). Trái nghĩa hoàn toàn với 疑う(nghi ngờ)."
  },
  {
    "id": "syn_p2_q34",
    "part": 2,
    "num": 34,
    "sentence_html": "今日の 実験は <u class=\"q-target\">おしまい</u>です。",
    "sentence_reverse_html": "今日の 実験は <u class=\"q-target\">終わり</u>です。",
    "sentence_tts": "今日の実験はおしまいです。",
    "target_word": "おしまい",
    "target_reading": "おしまい",
    "synonym_word": "終わり",
    "synonym_reading": "おわり",
    "options": [
      "終わり",
      "初めて",
      "簡単",
      "成功"
    ],
    "options_vi": [
      "kết thúc (ĐÚNG)",
      "lần đầu tiên",
      "đơn giản",
      "thành công"
    ],
    "answer": 0,
    "meaning_vi": "kết thúc, hết",
    "sentence_vi": "Buổi thí nghiệm hôm nay đến đây là kết thúc.",
    "nuance_note": "おしまい = 終わり(おわり). Rất hay dùng trong văn nói lịch sự / kể chuyện cho trẻ em."
  },
  {
    "id": "syn_p2_q35",
    "part": 2,
    "num": 35,
    "sentence_html": "<u class=\"q-target\">まぶしくて</u> 看板 の 字が よく 見えません。",
    "sentence_reverse_html": "<u class=\"q-target\">明るすぎて</u> 看板 の 字が よく 見えません。",
    "sentence_tts": "まぶしくて看板の字がよく見えません。",
    "target_word": "まぶしくて",
    "target_reading": "まぶしくて",
    "synonym_word": "明るすぎて",
    "synonym_reading": "あかるすぎて",
    "options": [
      "小さすぎて",
      "暗すぎて",
      "薄すぎて",
      "明るすぎて"
    ],
    "options_vi": [
      "quá nhỏ",
      "quá tối",
      "quá mờ/nhạt",
      "quá sáng (ĐÚNG)"
    ],
    "answer": 3,
    "meaning_vi": "chói mắt, quá sáng",
    "sentence_vi": "Chói quá nên tôi không nhìn rõ chữ trên biển hiệu.",
    "nuance_note": "眩しい(まぶしい) = 明るすぎる (chói lóa)."
  },
  {
    "id": "syn_p2_q36",
    "part": 2,
    "num": 36,
    "sentence_html": "前田さんも <u class=\"q-target\">協力して</u>ください。",
    "sentence_reverse_html": "前田さんも <u class=\"q-target\">手伝って</u>ください。",
    "sentence_tts": "前田さんも協力してください。",
    "target_word": "協力して",
    "target_reading": "きょうりょくして",
    "synonym_word": "手伝って",
    "synonym_reading": "てつだって",
    "options": [
      "急いで",
      "決めて",
      "手伝って",
      "がんばって"
    ],
    "options_vi": [
      "vội lên",
      "quyết định đi",
      "giúp đỡ (ĐÚNG)",
      "cố gắng lên"
    ],
    "answer": 2,
    "meaning_vi": "hợp tác, phụ giúp",
    "sentence_vi": "Anh Maeda cũng hãy hợp tác/giúp một tay nhé.",
    "nuance_note": "協力する(きょうりょく - HIỆP LỰC) = 力を合わせる / 手伝う."
  },
  {
    "id": "syn_p2_q37",
    "part": 2,
    "num": 37,
    "sentence_html": "この 仕事の <u class=\"q-target\">スケジュール</u>を 教えてください。",
    "sentence_reverse_html": "この 仕事の <u class=\"q-target\">予定</u>を 教えてください。",
    "sentence_tts": "この仕事のスケジュールを教えてください。",
    "target_word": "スケジュール",
    "target_reading": "スケジュール",
    "synonym_word": "予定",
    "synonym_reading": "よてい",
    "options": [
      "規則",
      "やり方",
      "結果",
      "予定"
    ],
    "options_vi": [
      "quy tắc",
      "cách làm",
      "kết quả",
      "dự định, lịch trình (ĐÚNG)"
    ],
    "answer": 3,
    "meaning_vi": "lịch trình",
    "sentence_vi": "Hãy cho tôi biết lịch trình của công việc này.",
    "nuance_note": "スケジュール = 予定(よてい)."
  },
  {
    "id": "syn_p2_q38",
    "part": 2,
    "num": 38,
    "sentence_html": "食事代は <u class=\"q-target\">約1万円</u>でした。",
    "sentence_reverse_html": "食事代は <u class=\"q-target\">だいたい1万円</u>でした。",
    "sentence_tts": "食事代は約1万円でした。",
    "target_word": "約1万円",
    "target_reading": "やくいちまんえん",
    "synonym_word": "だいたい1万円",
    "synonym_reading": "だいたいいちまんえん",
    "options": [
      "だいたい1万円",
      "ちょうど1万円",
      "1万円以上",
      "1万円以下"
    ],
    "options_vi": [
      "khoảng chừng 1 man yên (ĐÚNG)",
      "đúng chẵn 1 man yên",
      "từ 1 man yên trở lên",
      "từ 1 man yên trở xuống"
    ],
    "answer": 0,
    "meaning_vi": "khoảng 1 man yên",
    "sentence_vi": "Tiền ăn là khoảng 1 man yên.",
    "nuance_note": "約(やく - ƯỚC) + số lượng = だいたい (khoảng chừng, xấp xỉ)."
  },
  {
    "id": "syn_p2_q39",
    "part": 2,
    "num": 39,
    "sentence_html": "高橋さんに<u class=\"q-target\">どなられた</u>。",
    "sentence_reverse_html": "高橋さんに<u class=\"q-target\">大声で怒られた</u>。",
    "sentence_tts": "高橋さんにどなられた。",
    "target_word": "どなられた",
    "target_reading": "どなられた",
    "synonym_word": "大声で怒られた",
    "synonym_reading": "おおごえでおこられた",
    "options": [
      "大声で怒られた",
      "小声で怒られた",
      "大声で笑われた",
      "小声で笑われた"
    ],
    "options_vi": [
      "bị mắng lớn tiếng (ĐÚNG)",
      "bị mắng nhỏ tiếng",
      "bị cười lớn tiếng",
      "bị cười nhỏ tiếng"
    ],
    "answer": 0,
    "meaning_vi": "bị quát mắng lớn tiếng",
    "sentence_vi": "Tôi đã bị anh Takahashi quát mắng lớn tiếng.",
    "nuance_note": "怒鳴る(どなる) chia thể bị động -> どなられた = 大声で怒られた."
  },
  {
    "id": "syn_p2_q40",
    "part": 2,
    "num": 40,
    "sentence_html": "中島さんは <u class=\"q-target\">あらゆる</u> 質問に 丁寧 に 答えた。",
    "sentence_reverse_html": "中島さんは <u class=\"q-target\">全部の</u> 質問に 丁寧 に 答えた。",
    "sentence_tts": "中島さんはあらゆる質問に丁寧に答えた。",
    "target_word": "あらゆる",
    "target_reading": "あらゆる",
    "synonym_word": "全部の",
    "synonym_reading": "ぜんぶの",
    "options": [
      "一つの",
      "全部の",
      "難しい",
      "簡単な"
    ],
    "options_vi": [
      "một cái",
      "tất cả, toàn bộ (ĐÚNG)",
      "khó khăn",
      "đơn giản"
    ],
    "answer": 1,
    "meaning_vi": "mọi, tất cả",
    "sentence_vi": "Chị Nakajima đã trả lời cẩn thận tất cả mọi câu hỏi.",
    "nuance_note": "あらゆる + Danh từ = 全部の / すべての + Danh từ (mọi ~, toàn bộ ~)."
  },
  {
    "id": "syn_p3_q1",
    "part": 3,
    "num": 1,
    "sentence_html": "すみません、<u class=\"q-target\">細かい</u> お金は ありますか。",
    "sentence_reverse_html": "すみません、<u class=\"q-target\">小さい</u> お金は ありますか。",
    "sentence_tts": "すみません、細かいお金はありますか。",
    "target_word": "細かい",
    "target_reading": "こまかい",
    "synonym_word": "小さい",
    "synonym_reading": "小さい",
    "options": [
      "小さい",
      "新しい",
      "高い",
      "重い"
    ],
    "options_vi": [
      "nhỏ / tiền lẻ (ĐÚNG)",
      "mới",
      "đắt / cao",
      "nặng"
    ],
    "answer": 0,
    "meaning_vi": "nhỏ, vụn, tiền lẻ",
    "sentence_vi": "Xin lỗi, anh/chị có tiền lẻ không ạ?",
    "nuance_note": "細かいお金 = 小さいお金 (tiền lẻ mệnh giá nhỏ). Ngoài ra 細かい còn nghĩa 'tỉ mỉ, chi tiết' (= 詳しい)."
  },
  {
    "id": "syn_p3_q2",
    "part": 3,
    "num": 2,
    "sentence_html": "田中さんは 3時ごろ 会社に <u class=\"q-target\">戻ります</u>。",
    "sentence_reverse_html": "田中さんは 3時ごろ 会社に <u class=\"q-target\">帰って来ます</u>。",
    "sentence_tts": "田中さんは3時ごろ会社に戻ります。",
    "target_word": "戻ります",
    "target_reading": "もどります",
    "synonym_word": "帰って来ます",
    "synonym_reading": "帰って来ます",
    "options": [
      "出かけます",
      "帰って来ます",
      "集まります",
      "休みます"
    ],
    "options_vi": [
      "đi ra ngoài",
      "quay trở về (ĐÚNG)",
      "tập trung",
      "nghỉ ngơi"
    ],
    "answer": 1,
    "meaning_vi": "quay trở lại, trở về",
    "sentence_vi": "Anh Tanaka sẽ quay lại công ty vào khoảng 3 giờ.",
    "nuance_note": "戻る(もどる) = 帰って来る (quay về vị trí/nơi xuất phát ban đầu)."
  },
  {
    "id": "syn_p3_q3",
    "part": 3,
    "num": 3,
    "sentence_html": "山田さんは <u class=\"q-target\">あいかわらず</u> 元気そうですね。",
    "sentence_reverse_html": "山田さんは <u class=\"q-target\">前と同じで</u> 元気そうですね。",
    "sentence_tts": "山田さんはあいかわらず元気そうですね。",
    "target_word": "あいかわらず",
    "target_reading": "あいかわらず",
    "synonym_word": "前と同じで",
    "synonym_reading": "前と同じで",
    "options": [
      "最近になって",
      "前と同じで",
      "前よりずっと",
      "ときどき"
    ],
    "options_vi": [
      "gần đây mới trở nên",
      "giống như trước, không đổi (ĐÚNG)",
      "hơn hẳn trước đây",
      "thỉnh thoảng"
    ],
    "answer": 1,
    "meaning_vi": "vẫn như xưa, không hề thay đổi",
    "sentence_vi": "Anh Yamada trông vẫn khỏe mạnh như xưa nhỉ.",
    "nuance_note": "相変わらず(あいかわらず) = 前と同じで. Cực kỳ hay dùng khi chào hỏi người quen lâu ngày gặp lại!"
  },
  {
    "id": "syn_p3_q4",
    "part": 3,
    "num": 4,
    "sentence_html": "この 寮の <u class=\"q-target\">決まり</u>を 守ってください。",
    "sentence_reverse_html": "この 寮の <u class=\"q-target\">規則</u>を 守ってください。",
    "sentence_tts": "この寮の決まりを守ってください。",
    "target_word": "決まり",
    "target_reading": "きまり",
    "synonym_word": "規則",
    "synonym_reading": "規則",
    "options": [
      "規則",
      "時間",
      "場所",
      "準備"
    ],
    "options_vi": [
      "quy tắc, nội quy (ĐÚNG)",
      "thời gian",
      "địa điểm",
      "sự chuẩn bị"
    ],
    "answer": 0,
    "meaning_vi": "quy định, nội quy",
    "sentence_vi": "Xin hãy tuân thủ nội quy của ký túc xá này.",
    "nuance_note": "決まり(きまり) = 規則(きそく) = ルール (quy tắc). Nhớ cụm cố định: 決まりを守る (tuân thủ quy định)."
  },
  {
    "id": "syn_p3_q5",
    "part": 3,
    "num": 5,
    "sentence_html": "みんな 彼の 話を <u class=\"q-target\">疑って</u>いる。",
    "sentence_reverse_html": "みんな 彼の 話を <u class=\"q-target\">本当ではないと思って</u>いる。",
    "sentence_tts": "みんな彼の話を疑っている。",
    "target_word": "疑って",
    "target_reading": "うたがって",
    "synonym_word": "本当ではないと思って",
    "synonym_reading": "本当ではないと思って",
    "options": [
      "本当ではないと思って",
      "本当だと思って",
      "おもしろいと思って",
      "大切だと思って"
    ],
    "options_vi": [
      "cho là không phải sự thật (ĐÚNG)",
      "cho là sự thật (= 信じる)",
      "cho là thú vị",
      "cho là quan trọng"
    ],
    "answer": 0,
    "meaning_vi": "nghi ngờ",
    "sentence_vi": "Mọi người đều đang nghi ngờ câu chuyện của anh ta.",
    "nuance_note": "Cặp trái nghĩa kinh điển JLPT N3: 疑う(うたがう: nghi ngờ = 本当ではないと思う) <-> 信じる(しんじる: tin = 本当だと思う)."
  },
  {
    "id": "syn_p3_q6",
    "part": 3,
    "num": 6,
    "sentence_html": "雨の ため、明日の 試合は <u class=\"q-target\">延期になった</u>。",
    "sentence_reverse_html": "雨の ため、明日の 試合は <u class=\"q-target\">後の別の日にやることになった</u>。",
    "sentence_tts": "雨のため、明日の試合は延期になった。",
    "target_word": "延期になった",
    "target_reading": "えんきになった",
    "synonym_word": "後の別の日にやることになった",
    "synonym_reading": "後の別の日にやることになった",
    "options": [
      "中止になった",
      "後の別の日にやることになった",
      "予定どおり行うことになった",
      "時間が短くなった"
    ],
    "options_vi": [
      "bị hủy bỏ hoàn toàn",
      "dời sang làm vào một ngày khác sau này (ĐÚNG)",
      "tổ chức đúng như dự định",
      "thời gian bị rút ngắn"
    ],
    "answer": 1,
    "meaning_vi": "bị trì hoãn, dời lịch",
    "sentence_vi": "Vì trời mưa nên trận đấu ngày mai đã bị hoãn sang ngày khác.",
    "nuance_note": "Bẫy siêu hay lừa: 延期(えんき: HOÃN sang ngày khác) khác hẳn 中止(ちゅうし: HỦY bỏ luôn không làm nữa)!"
  },
  {
    "id": "syn_p3_q7",
    "part": 3,
    "num": 7,
    "sentence_html": "夜空の 星が きれいに <u class=\"q-target\">輝いている</u>。",
    "sentence_reverse_html": "夜空の 星が きれいに <u class=\"q-target\">光っている</u>。",
    "sentence_tts": "夜空の星がきれいに輝いている。",
    "target_word": "輝いている",
    "target_reading": "かがやいている",
    "synonym_word": "光っている",
    "synonym_reading": "光っている",
    "options": [
      "落ちている",
      "光っている",
      "動いている",
      "消えている"
    ],
    "options_vi": [
      "đang rơi xuống",
      "đang tỏa sáng, phát sáng (ĐÚNG)",
      "đang chuyển động",
      "đang tắt/biến mất"
    ],
    "answer": 1,
    "meaning_vi": "tỏa sáng, lấp lánh",
    "sentence_vi": "Những ngôi sao trên bầu trời đêm đang tỏa sáng rực rỡ.",
    "nuance_note": "輝く(かがやく: tỏa sáng rực rỡ) = 光る(ひかる: phát sáng)."
  },
  {
    "id": "syn_p3_q8",
    "part": 3,
    "num": 8,
    "sentence_html": "試合に 負けて、とても <u class=\"q-target\">がっかりした</u>。",
    "sentence_reverse_html": "試合に 負けて、とても <u class=\"q-target\">残念に思った</u>。",
    "sentence_tts": "試合に負けて、とてもがっかりした。",
    "target_word": "がっかりした",
    "target_reading": "がっかりした",
    "synonym_word": "残念に思った",
    "synonym_reading": "残念に思った",
    "options": [
      "安心した",
      "残念に思った",
      "びっくりした",
      "うれしく思った"
    ],
    "options_vi": [
      "yên tâm",
      "cảm thấy đáng tiếc, thất vọng (ĐÚNG)",
      "giật mình ngạc nhiên",
      "cảm thấy vui mừng"
    ],
    "answer": 1,
    "meaning_vi": "thất vọng, chán nản",
    "sentence_vi": "Thua trận đấu nên tôi đã vô cùng thất vọng.",
    "nuance_note": "がっかりする = 残念に思う (thất vọng/tiếc nuối). Phân biệt với ほっとする (thở phào nhẹ nhõm = 安心する)."
  },
  {
    "id": "syn_p3_q9",
    "part": 3,
    "num": 9,
    "sentence_html": "約束を 守るのは <u class=\"q-target\">当然</u>の ことだ。",
    "sentence_reverse_html": "約束を 守るのは <u class=\"q-target\">もちろん</u>の ことだ。",
    "sentence_tts": "約束を守るのは当然のことだ。",
    "target_word": "当然",
    "target_reading": "とうぜん",
    "synonym_word": "もちろん",
    "synonym_reading": "もちろん",
    "options": [
      "めずらしい",
      "もちろん",
      "特別な",
      "むずかしい"
    ],
    "options_vi": [
      "hiếm có",
      "đương nhiên, dĩ nhiên (ĐÚNG)",
      "đặc biệt",
      "khó khăn"
    ],
    "answer": 1,
    "meaning_vi": "đương nhiên, tất nhiên",
    "sentence_vi": "Giữ lời hứa là chuyện đương nhiên.",
    "nuance_note": "当然(とうぜん) = もちろん = 当たり前(あたりまえ): chuyện hiển nhiên."
  },
  {
    "id": "syn_p3_q10",
    "part": 3,
    "num": 10,
    "sentence_html": "料理を たくさん 作りすぎて、半分 <u class=\"q-target\">余りました</u>。",
    "sentence_reverse_html": "料理を たくさん 作りすぎて、半分 <u class=\"q-target\">残りました</u>。",
    "sentence_tts": "料理をたくさん作りすぎて、半分余りました。",
    "target_word": "余りました",
    "target_reading": "あまりました",
    "synonym_word": "残りました",
    "synonym_reading": "残りました",
    "options": [
      "足りました",
      "残りました",
      "減りました",
      "なくなりました"
    ],
    "options_vi": [
      "đã đủ",
      "còn thừa/dư lại (ĐÚNG)",
      "đã giảm đi",
      "đã hết sạch"
    ],
    "answer": 1,
    "meaning_vi": "còn dư, thừa lại",
    "sentence_vi": "Vì nấu nhiều đồ ăn quá nên đã còn thừa lại một nửa.",
    "nuance_note": "余る(あまる: dư thừa) = 残る(のこる: còn lại). Đừng nhầm với 足りる(たりる: đủ)."
  },
  {
    "id": "syn_p3_q11",
    "part": 3,
    "num": 11,
    "sentence_html": "ここは <u class=\"q-target\">横断禁止</u> ですよ。",
    "sentence_reverse_html": "ここは <u class=\"q-target\">渡ってはいけません</u> ですよ。",
    "sentence_tts": "ここは横断禁止ですよ。",
    "target_word": "横断禁止",
    "target_reading": "おうだんきんし",
    "synonym_word": "渡ってはいけません",
    "synonym_reading": "渡ってはいけません",
    "options": [
      "車を止めてはいけません",
      "渡ってはいけません",
      "入ってはいけません",
      "写真を撮ってはいけません"
    ],
    "options_vi": [
      "không được đỗ xe (駐車禁止)",
      "không được băng qua đường (ĐÚNG)",
      "không được vào (立入禁止)",
      "không được chụp ảnh (撮影禁止)"
    ],
    "answer": 1,
    "meaning_vi": "cấm băng qua đường",
    "sentence_vi": "Ở đây cấm băng qua đường đấy.",
    "nuance_note": "横断(おうだん: băng ngang qua = 渡る) + 禁止(きんし: cấm = てはいけません). Học luôn cả 4 biển báo JLPT!"
  },
  {
    "id": "syn_p3_q12",
    "part": 3,
    "num": 12,
    "sentence_html": "急に 大きな 音が して、<u class=\"q-target\">びっくりした</u>。",
    "sentence_reverse_html": "急に 大きな 音が して、<u class=\"q-target\">驚いた</u>。",
    "sentence_tts": "急に大きな音がして、びっくりした。",
    "target_word": "びっくりした",
    "target_reading": "びっくりした",
    "synonym_word": "驚いた",
    "synonym_reading": "驚いた",
    "options": [
      "驚いた",
      "怒った",
      "困った",
      "笑った"
    ],
    "options_vi": [
      "ngạc nhiên, giật mình (ĐÚNG)",
      "tức giận",
      "bối rối/gặp rắc rối",
      "cười"
    ],
    "answer": 0,
    "meaning_vi": "giật mình, bất ngờ",
    "sentence_vi": "Đột nhiên có tiếng động lớn làm tôi giật mình.",
    "nuance_note": "びっくりする = 驚く(おどろく: kinh ngạc, giật mình)."
  },
  {
    "id": "syn_p3_q13",
    "part": 3,
    "num": 13,
    "sentence_html": "外は 朝から <u class=\"q-target\">雨がざあざあ</u> 降っている。",
    "sentence_reverse_html": "外は 朝から <u class=\"q-target\">雨が強く</u> 降っている。",
    "sentence_tts": "外は朝から雨がざあざあ降っている。",
    "target_word": "雨がざあざあ",
    "target_reading": "あめがざあざあ",
    "synonym_word": "雨が強く",
    "synonym_reading": "雨が強く",
    "options": [
      "雨が少しだけ",
      "雨が強く",
      "雨が静かに",
      "雨がときどき"
    ],
    "options_vi": [
      "mưa chỉ một chút",
      "mưa rơi mạnh/nặng hạt (ĐÚNG)",
      "mưa rơi nhẹ nhàng",
      "mưa thỉnh thoảng"
    ],
    "answer": 1,
    "meaning_vi": "mưa rơi rào rào nặng hạt",
    "sentence_vi": "Bên ngoài trời đang mưa tầm tã từ sáng tới giờ.",
    "nuance_note": "Từ tượng thanh N3 kinh điển: ざあざあ = mưa rơi ào ạt mạnh mẽ (強い雨)."
  },
  {
    "id": "syn_p3_q14",
    "part": 3,
    "num": 14,
    "sentence_html": "彼女は いつも 字を <u class=\"q-target\">丁寧に</u> 書きます。",
    "sentence_reverse_html": "彼女は いつも 字を <u class=\"q-target\">きれいに</u> 書きます。",
    "sentence_tts": "彼女はいつも字を丁寧に書きます。",
    "target_word": "丁寧に",
    "target_reading": "ていねいに",
    "synonym_word": "きれいに",
    "synonym_reading": "きれいに",
    "options": [
      "速く",
      "きれいに",
      "小さく",
      "簡単に"
    ],
    "options_vi": [
      "nhanh",
      "đẹp đẽ, nắn nót cẩn thận (ĐÚNG)",
      "nhỏ",
      "đơn giản"
    ],
    "answer": 1,
    "meaning_vi": "cẩn thận, nắn nót, lịch sự",
    "sentence_vi": "Cô ấy lúc nào cũng viết chữ rất cẩn thận, đẹp đẽ.",
    "nuance_note": "丁寧(ていねい): vừa nghĩa 'lịch sự' (giao tiếp), vừa nghĩa 'cẩn thận, tỉ mỉ, đẹp đẽ' (= きれいに)."
  },
  {
    "id": "syn_p3_q15",
    "part": 3,
    "num": 15,
    "sentence_html": "赤ちゃんが <u class=\"q-target\">ニコニコ</u> している。",
    "sentence_reverse_html": "赤ちゃんが <u class=\"q-target\">笑っている</u> している。",
    "sentence_tts": "赤ちゃんがニコニコしている。",
    "target_word": "ニコニコ",
    "target_reading": "にこにこ",
    "synonym_word": "笑っている",
    "synonym_reading": "笑っている",
    "options": [
      "泣いている",
      "笑っている",
      "怒っている",
      "寝ている"
    ],
    "options_vi": [
      "đang khóc",
      "đang cười tươi/tủm tỉm (ĐÚNG)",
      "đang tức giận",
      "đang ngủ"
    ],
    "answer": 1,
    "meaning_vi": "cười tươi, cười tủm tỉm",
    "sentence_vi": "Em bé đang cười tủm tỉm rất tươi.",
    "nuance_note": "Từ tượng hình N3 hay gặp: ニコニコする = 楽しそうに笑う (cười tươi không thành tiếng, hiền hậu)."
  }
];
