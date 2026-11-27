# -*- coding: utf-8 -*-
import json, os, sys
sys.stdout.reconfigure(encoding="utf-8")

OUT_PATH = r"c:\Users\duong\OneDrive\Máy tính\Tiếng nhật\Học hán tự\data\jlpt_n3_2021_12.js"

PASSAGES = {
    "2021_12_bm3": {
        "title": "桜の絵の傘（留学生の作文・パーカー キャサリン）",
        "kind": "cloze",
        "html": (
            "<div class='passage-header-meta'><strong>桜の絵の傘</strong><span class='passage-author'>パーカー キャサリン</span></div>"
            "<p>私は4月に日本に来ました。授業がないときや休みの日には、花見をしたり、買い物をしたり、大好きなテニスをしたりして、楽しく過ごしていました。<span class='p-anchor' data-qid='2021_12_bd_19'>（ 19 ）</span>、6月になると、梅雨で雨の日が多くなりました。雨の日は、傘を持って歩くのがめんどうくさいし、テニスもできません。私は雨の日は嫌だと思っていました。雨の日が何日も続いたので、雨がほとんど降らないふるさとが懐かしくなりました。</p>"
            "<p>そんなとき、<span class='p-anchor' data-qid='2021_12_bd_20'>（ 20 ）</span>が傘をプレゼントしてくれました。それまで、私はコンビニで買った黒い傘を使っていました。プレゼントの傘も黒で、私が持っている傘と似ていました。ところが、傘を開くと内側は全く違っていました。友達がくれた傘は内側に美しい桜の絵が<span class='p-anchor' data-qid='2021_12_bd_21'>（ 21 ）</span>。傘をさすと、まるで桜の木の下にいるようでした。私は楽しかった花見を思い出しました。</p>"
            "<p>今は、この傘があるので雨の日が嫌ではありません。晴れの日が続いたときに、雨が降ってほしいなあと<span class='p-anchor' data-qid='2021_12_bd_22'>（ 22 ）</span>。傘だけで気持ちがこんなに変わることに驚きました。</p>"
        ),
        "summary_vi": "Du học sinh Catherine đến Nhật tháng 4 rất vui, nhưng sang tháng 6 mùa mưa thấy chán và nhớ quê. Một người bạn tặng cô chiếc ô bên ngoài màu đen nhưng bên trong vẽ hoa anh đào tuyệt đẹp. Từ đó cô không còn ghét ngày mưa, thậm chí trời nắng mãi đôi khi còn mong trời mưa."
    },
    "2021_12_dm4_1": {
        "title": "問題4（1）— 山川市マラソン大会 ボランティア募集",
        "kind": "short",
        "html": (
            "<div class='passage-box-note'>"
            "<p class='passage-note-intro'>これは、マラソン大会を手伝ってくれる人を募集するお知らせである。</p>"
            "<p style='text-align:center;'><strong>第3回 山川市マラソン大会</strong><br>大会当日に手伝ってくださる方、大募集！</p>"
            "<div class='passage-subbox'>"
            "<strong>日時：</strong>4月17日（土）午前7時〜午後3時ごろ<br>"
            "<strong>場所：</strong>山川市民運動場<br>"
            "<strong>内容：</strong>当日の準備や会場案内など　<strong>募集人数：</strong>約100人<br>"
            "<strong>募集期間：</strong>1月8日（金）〜2月12日（金）<br>"
            "お願いする具体的な内容は、3月下旬に郵送でお知らせいたします。"
            "</div>"
            "<p><strong>応募できる方：</strong><br>"
            "・山川市民で18歳以上の方<br>"
            "<span class='p-anchor' data-qid='2021_12_bd_23'>・大会当日の午前7時からの説明会に参加できる方</span><br>"
            "特に、マラソン大会を手伝った経験がある方は歓迎します。</p>"
            "<p><strong>応募方法：</strong>スポーツ課ホームページからお願いします。ホームページが見られない方は、スポーツ課窓口でも受付をいたします。</p>"
            "<p style='text-align:right;'>山川市役所スポーツ課マラソン大会係</p>"
            "</div>"
        ),
        "summary_vi": "Thông báo tuyển tình nguyện viên hỗ trợ giải chạy marathon TP Yamakawa (17/4): đăng ký từ 8/1–12/2, cuối tháng 3 gửi thư báo việc cụ thể, điều kiện bắt buộc là công dân ≥18 tuổi và tham gia buổi hướng dẫn 7h sáng ngày thi (có kinh nghiệm được hoan nghênh chứ không bắt buộc)."
    },
    "2021_12_dm4_2": {
        "title": "問題4（2）— 朝日市の新しい規則",
        "kind": "short",
        "html": (
            "<p>朝日市は、市民全員が力を合わせて美しい町を作り、気持ちのいい生活が送れるように、新しい規則を作った。その規則では、次の三つのことを禁止している。</p>"
            "<div class='passage-subbox'>"
            "① ごみ箱などの決められた場所以外にごみを捨てること<br>"
            "<span class='p-anchor' data-qid='2021_12_bd_24'>② 歩きながらたばこを吸うこと</span><br>"
            "③ 指定の場所以外に自転車をとめること"
            "</div>"
            "<p>守らなかった場合は、お金を払わされることもあるそうだ。</p>"
        ),
        "summary_vi": "TP Asahi ban hành quy định mới cấm 3 hành vi: vứt rác ngoài nơi quy định, vừa đi bộ vừa hút thuốc, và đỗ xe đạp ngoài chỗ chỉ định. Ai vi phạm có trường hợp bị phạt tiền."
    },
    "2021_12_dm4_3": {
        "title": "問題4（3）— 鈴木電気工業からのビジネス文書",
        "kind": "short",
        "html": (
            "<div class='passage-box-note'>"
            "<p style='text-align:right;'>10月15日</p>"
            "<p>田中電気株式会社 営業部<br>青山 一郎様</p>"
            "<p style='text-align:right;'><span class='p-anchor' data-qid='2021_12_bd_25'>鈴木電気工業株式会社<br>営業第二課 山本和男</span></p>"
            "<p>拝啓</p>"
            "<p>いつもお世話になっております。先日はわが社の新製品説明会にご参加くださいまして、ありがとうございました。<span class='p-anchor' data-qid='2021_12_bd_25'>その他の製品についての説明を、ということでしたので、パンフレットと説明書、価格表をお送りいたします。</span>よろしくお願いいたします。</p>"
            "</div>"
        ),
        "summary_vi": "Thư thương mại của ông Yamamoto (Công ty Điện Suzuki) gửi ông Aoyama (Công ty Điện Tanaka): cảm ơn đã dự buổi giới thiệu sản phẩm mới, và theo yêu cầu muốn tìm hiểu thêm về CÁC SẢN PHẨM KHÁC của công ty Suzuki nên gửi kèm tờ rơi, hướng dẫn và bảng giá."
    },
    "2021_12_dm4_4": {
        "title": "問題4（4）— インクで汚れた白い服",
        "kind": "short",
        "html": (
            "<p>先日、私は白い服をインクで汚してしまった。<span class='p-anchor' data-qid='2021_12_bd_26'>近所のクリーニング店に持っていったら、この汚れは落とせないと断られてしまった。</span>そこで、インターネットで探すと、家からは遠いが、引き受けてくれそうな店が見つかった。服は郵送しなければならないが、相談のために電話をしてみたら落とせそうだと言われたので、送ってみることにした。きれいになって戻ってきたが、値段が高いので、この店に頼むのは<span class='p-anchor' data-qid='2021_12_bd_26'><u>今回のように仕方ないとき</u></span>だけにしようと思う。</p>"
        ),
        "summary_vi": "Tác giả làm dính mực lên áo trắng, tiệm giặt là gần nhà từ chối vì không tẩy được nên phải gửi bưu điện đến tiệm ở xa tìm trên mạng. Tẩy sạch đẹp nhưng giá đắt nên tác giả quyết chỉ dùng tiệm này vào những lúc bất đắc dĩ như lần này (khi tiệm gần nhà từ chối)."
    },
    "2021_12_dm5_1": {
        "title": "問題5（1）— 85歳の母とスポーツクラブ",
        "kind": "medium",
        "html": (
            "<p>スポーツクラブは運動するために行くところだ。しかし、私の母にとっては、それ以上の場所であった。</p>"
            "<p>85歳になる母は、今、スポーツクラブに通っている。<span class='p-anchor' data-qid='2021_12_bd_27'>実は、母は半年前に転んで腕を骨折し、それ以来すっかり元気をなくしてしまっていた。</span>食欲が落ち、体重も減った。骨折は3週間で治ったが、腕を動かす訓練のための病院へはあまり行きたがらなかった。</p>"
            "<p>ところが、そんな母がある日、友達に誘われて近くのスポーツクラブに通い始めた。すると、たった1か月で全く違う人のように元気になったのだ。病院でもスポーツクラブでも、無理をせずにできるトレーニングを一人一人に考えてくれる。</p>"
            "<p>しかし、<span class='p-anchor' data-qid='2021_12_bd_28'>元気な若い人たちと同じ場所で運動したり、同じくらいの年の仲間と一緒に頑張ったりすることは、スポーツクラブだからできたのである。</span>そして、<span class='p-anchor' data-qid='2021_12_bd_29'>それが母の生きる力を引き出してくれたのだろう。</span>スポーツクラブは運動するだけの場所ではない。それ以上の価値があるのだ。私は、今、母の通うスポーツクラブに心から感謝している。</p>"
        ),
        "summary_vi": "Mẹ 85 tuổi của tác giả nửa năm trước bị ngã gãy tay nên mất hết tinh thần, biếng ăn, sụt cân và không muốn đến bệnh viện tập phục hồi. Nhờ đi câu lạc bộ thể thao cùng bạn, chỉ 1 tháng bà khỏe hẳn lên vì được tập chung không gian với người trẻ khỏe và cố gắng cùng bạn đồng trang lứa — điều giúp khơi dậy sức sống của bà."
    },
    "2021_12_dm5_2": {
        "title": "問題5（2）— 部屋が片付けられない人の買い物",
        "kind": "medium",
        "html": (
            "<p>「部屋が片付けられない」と悩む人から相談を受けることがある。詳しく話を聞いてみると、整理が下手なのではなく、買い物のしかたに原因があることが多い。「セール」や「割引」の看板を見つけると、喜んで、つい店に入ってしまう。そして、安くなっているのを見ると、それが必要かどうか深く考えず、<span class='p-anchor' data-qid='2021_12_bd_30'>①<u>財布を開く</u></span>。その結果、部屋に物があふれるのだ。</p>"
            "<p>このような人には、次のような<span class='p-anchor' data-qid='2021_12_bd_31'>②<u>アドバイス</u></span>をしている。買う前に、まず、必要かどうかを考える。必要だと思ったら、次に、同じような物を持っていないかどうかを考える。持っていなければ、最後に、それをしまう場所があるかどうかを考える。場所がなければ、あきらめる。そこまで考えて、必要だったら、買えばいい。</p>"
            "<p>安いからといって、必要のない物やしまう場所のない物を次々と買えば、部屋が片付かないのは当然だ。もうすぐ、あちこちのデパートでセールが始まるが、<span class='p-anchor' data-qid='2021_12_bd_32'>（　　　）</span>。</p>"
        ),
        "summary_vi": "Người không dọn nổi phòng thường do cách mua sắm: thấy giảm giá là mừng rỡ mở ví mua mà không nghĩ kỹ. Lời khuyên gồm 3 bước trước khi mua: (1) có cần không, (2) đã có đồ tương tự chưa, (3) có chỗ cất không. Sắp vào mùa sale nên ai đang đau đầu vì dọn phòng hãy cẩn thận."
    },
    "2021_12_dm6": {
        "title": "問題6 — 小川さんから大山先生への手紙",
        "kind": "long",
        "html": (
            "<div class='passage-box-note'>"
            "<p><strong>大山先生</strong></p>"
            "<p>暑かった夏が過ぎ、涼しい風が吹き始めました。大山先生、いかがお過ごしでしょうか。</p>"
            "<p><span class='p-anchor' data-qid='2021_12_bd_33'>先生と最後にお会いしたのは、卒業後10年を記念して集まったクラス会の席でした。</span>あの時はなつかしい仲間たちと先生を囲んで、学生時代の思い出話をしましたね。みんな家族ができ、それぞれ仕事でもがんばっているようでしたが、中身は昔とちっとも変わっていないと感じました。<span class='p-anchor' data-qid='2021_12_bd_34'>あれからもう4年も経ってしまいました。</span></p>"
            "<p>先日京都に参りましたときに、高校の先生をしている川上君、マツダ銀行の木下君と会い、先生のご様子をうかがいました。<span class='p-anchor' data-qid='2021_12_bd_35'>もう大学をおやめになったと聞いて驚きました。しかし、相変わらずお元気で、奥様との自由でゆっくりした生活を楽しんでいらっしゃるそうで、安心いたしました。</span></p>"
            "<p>私は前と同じ会社で働いており、出張で国内外へ行くことの多い生活です。先生もご存知のとおり、昔から体は丈夫ですから、仕事が大変だと思ったことはありません。家族も皆、元気に過ごしております。</p>"
            "<p><span class='p-anchor' data-qid='2021_12_bd_36'>京都で二人と会った時の写真をお送りいたします。</span>二人とも以前より太っていたのでそれを笑ったら、「お前も腹が出てきたじゃないか」と言われました。みんないつまでも若くはないということですね。これからは時々先生にもお目にかかって、みんなでなつかしい思い出話がしたいと話し合いました。近いうちにまたご連絡を申し上げます。</p>"
            "<p>では、本日はこれで失礼いたします。どうぞお体を大切に。</p>"
            "<p style='text-align:right;'>9月10日　小川 進</p>"
            "</div>"
        ),
        "summary_vi": "Thư của cựu sinh viên Ogawa gửi thầy Oyama: lần cuối gặp thầy ở buổi họp lớp kỷ niệm 10 năm ra trường đã cách đây 4 năm. Vừa rồi đi công tác Kyoto có gặp 2 bạn Kawakami và Kinoshita (gửi kèm ảnh chụp chung 3 người), nghe tin thầy đã nghỉ dạy đại học và đang tận hưởng cuộc sống thoải mái bên vợ."
    },
    "2021_12_dm7": {
        "title": "問題7 — あおい市市立図書館のお知らせ A・B",
        "kind": "info_table",
        "html": (
            "<div class='flyer-box'>"
            "<div class='flyer-title'>【お知らせ A】あおい市市立図書館のご利用案内</div>"
            "<p style='margin-bottom:6px;'><strong>図書館の開館時間・休館日</strong></p>"
            "<table class='flyer-table'>"
            "<thead><tr><th>図書館名</th><th>開館時間</th><th>休館日</th></tr></thead>"
            "<tbody>"
            "<tr class='p-anchor' data-qid='2021_12_bd_37'><td><strong>深川町図書館</strong></td><td><strong>9時〜18時</strong></td><td>毎週月曜</td></tr>"
            "<tr><td>南田町図書館</td><td>9時〜20時</td><td>毎週火曜</td></tr>"
            "<tr class='p-anchor' data-qid='2021_12_bd_38'><td><strong>大山町図書館</strong></td><td>9時〜20時</td><td><strong>毎週月曜</strong></td></tr>"
            "</tbody>"
            "</table>"
            "<p style='margin-bottom:6px;'><strong>借り方・返し方：本・雑誌</strong></p>"
            "<table class='flyer-table'>"
            "<tbody>"
            "<tr><td style='width:80px;'><strong>借りる</strong></td><td>三つの図書館から合計10冊、2週間まで借りることができます。</td></tr>"
            "<tr class='p-anchor' data-qid='2021_12_bd_37'><td><strong>返す</strong></td><td>三つの図書館のどちらでも返すことができます。<br>開館中：窓口にお返しください。<br><strong>閉館中：入り口にあるブックポストに入れてください。</strong></td></tr>"
            "</tbody>"
            "</table>"
            "<p style='margin-bottom:6px;'><strong>CD・DVD</strong></p>"
            "<table class='flyer-table'>"
            "<tbody>"
            "<tr><td style='width:80px;'><strong>借りる</strong></td><td>三つの図書館から合計5枚、1週間まで借りることができます。</td></tr>"
            "<tr><td><strong>返す</strong></td><td>開館中に、お借りになった図書館の窓口にお返しください。</td></tr>"
            "</tbody>"
            "</table>"
            "</div>"
            "<div class='flyer-box' style='margin-top:14px;'>"
            "<div class='flyer-title'>【お知らせ B】4月の読書会のお知らせ</div>"
            "<div class='flyer-highlight p-anchor' data-qid='2021_12_bd_38'>"
            "<strong>◆ 大山町図書館 ◆</strong><br>"
            "<strong>4月12日（土）</strong>10:00〜11:00 ／ 大山町図書館ロビー<br>"
            "今月のテーマは「大人も楽しめる絵本」です。<strong>親子での参加も可能です。</strong>昔から人気のある絵本、最近人気のある絵本、世界中で読まれている絵本など、さまざまな絵本を読んでみましょう。"
            "</div>"
            "<div class='flyer-highlight'>"
            "<strong>◆ 南田町図書館 ◆</strong><br>"
            "4月19日（土）14:00〜15:00 ／ 南田町図書館 2階会議室<br>"
            "今月のテキストは、小林ゆり『手ぶくろ』です。本が好きな方、図書館で語り合ってみませんか。<strong>大学生から参加できます。</strong>主に感想を話し合いますので、テキストを読んでからご参加ください。"
            "</div>"
            "<div class='flyer-notes p-anchor' data-qid='2021_12_bd_38'>"
            "<strong>〈ご参加方法〉</strong> <strong>参加希望日の3日前まで</strong>に、それぞれの図書館の窓口か、お電話で申し込んでください。<br>"
            "南田町図書館 電話：056-123-4567 ／ 大山町図書館 電話：056-123-4578"
            "</div>"
            "</div>"
        ),
        "summary_vi": "Hai thông báo A & B của hệ thống thư viện TP Aoi: Bảng A cho giờ mở cửa/ngày nghỉ của 3 cơ sở và quy định trả sách (giờ đóng cửa bỏ vào Book Post); Bảng B thông báo 2 buổi câu lạc bộ đọc sách tháng 4 (cơ sở Oyama 12/4 cho cả bố mẹ + con tham gia, đăng ký trước 3 ngày, lưu ý cơ sở Oyama nghỉ thứ Hai)."
    }
}

QUESTIONS = [
    # ========== MOJI-GOI MONDAI 1 (1..8) ==========
    {
        "id": "2021_12_mg_1", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 1,
        "mondai_label": "文字・語彙 問題1 (Đọc Kanji)", "num": 1, "passage_id": None, "is_star": False,
        "sentence_html": "この国の人は<u class='q-target'>自然</u>を大切にしている。",
        "sentence_tts": "この国の人は自然を大切にしている。",
        "options": ["しぜん", "じぜん", "しせん", "じせん"], "answer": 0,
        "sentence_vi": "Người dân đất nước này rất trân trọng thiên nhiên.",
        "explain_vi": "自然（しぜん • TỰ NHIÊN）= thiên nhiên. Chú ý 自 ở đây đọc âm trong し (khác 自分 じぶん), 然 có tenten ぜん.",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_mg_2", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 1,
        "mondai_label": "文字・語彙 問題1 (Đọc Kanji)", "num": 2, "passage_id": None, "is_star": False,
        "sentence_html": "あと30<u class='q-target'>秒</u>で完成します。",
        "sentence_tts": "あと30秒で完成します。",
        "options": ["じょう", "しょう", "びょう", "ひょう"], "answer": 2,
        "sentence_vi": "Còn 30 giây nữa là hoàn thành.",
        "explain_vi": "秒（びょう • MIỂU）= giây đồng hồ. Nhớ có âm đục びょう (đừng nhầm với 表 ひょう = bảng biểu).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_mg_3", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 1,
        "mondai_label": "文字・語彙 問題1 (Đọc Kanji)", "num": 3, "passage_id": None, "is_star": False,
        "sentence_html": "夏休みも<u class='q-target'>残り</u>三日になってしまった。",
        "sentence_tts": "夏休みも残り三日になってしまった。",
        "options": ["もとり", "おわり", "のこり", "あまり"], "answer": 2,
        "sentence_vi": "Kỳ nghỉ hè cũng chỉ còn lại 3 ngày mất rồi.",
        "explain_vi": "残り（のこり • TÀN）= phần còn lại (từ động từ 残る のこる). Bẫy: 終わり(おわり), 余り(あまり).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_mg_4", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 1,
        "mondai_label": "文字・語彙 問題1 (Đọc Kanji)", "num": 4, "passage_id": None, "is_star": False,
        "sentence_html": "このグラフは、人口の<u class='q-target'>増減</u>を表している。",
        "sentence_tts": "このグラフは、人口の増減を表している。",
        "options": ["ぞうけん", "ぞうげん", "じょうけん", "じょうげん"], "answer": 1,
        "sentence_vi": "Biểu đồ này biểu thị sự tăng giảm của dân số.",
        "explain_vi": "増減（ぞうげん • TĂNG GIẢM）= tăng giảm. Cả 2 chữ đều âm đục: 増 ぞう + 減 げん (bẫy 条件 じょうけん = điều kiện).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_mg_5", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 1,
        "mondai_label": "文字・語彙 問題1 (Đọc Kanji)", "num": 5, "passage_id": None, "is_star": False,
        "sentence_html": "面接の結果は、1週間以内に<u class='q-target'>通知</u>します。",
        "sentence_tts": "面接の結果は、1週間以内に通知します。",
        "options": ["つうち", "とおち", "つうし", "とおし"], "answer": 0,
        "sentence_vi": "Kết quả phỏng vấn sẽ được thông báo trong vòng 1 tuần.",
        "explain_vi": "通知（つうち • THÔNG TRI）= thông báo chính thức. 音読み: 通 つう + 知 ち.",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_mg_6", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 1,
        "mondai_label": "文字・語彙 問題1 (Đọc Kanji)", "num": 6, "passage_id": None, "is_star": False,
        "sentence_html": "庭に<u class='q-target'>生えた</u>草にきれいな花が咲いていた。",
        "sentence_tts": "庭に生えた草にきれいな花が咲いていた。",
        "options": ["はえた", "せいえた", "しょうえた", "うえた"], "answer": 0,
        "sentence_vi": "Trên đám cỏ mọc ngoài sân có nở những bông hoa đẹp.",
        "explain_vi": "生える（はえる • SINH）= mọc lên (cỏ, răng, râu). Bẫy: 植える(うえる: trồng cây).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_mg_7", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 1,
        "mondai_label": "文字・語彙 問題1 (Đọc Kanji)", "num": 7, "passage_id": None, "is_star": False,
        "sentence_html": "外国で一人暮らしをしているので、国の料理が<u class='q-target'>恋しく</u>なる。",
        "sentence_tts": "外国で一人暮らしをしているので、国の料理が恋しくなる。",
        "options": ["なつかしく", "うれしく", "ほしく", "こいしく"], "answer": 3,
        "sentence_vi": "Vì sống một mình ở nước ngoài nên tôi trở nên nhớ da diết món ăn quê hương.",
        "explain_vi": "恋しい（こいしい • LUYẾN）= nhớ nhung da diết (quê nhà, gia đình, đồ ăn quê). Bẫy: 懐かしい(なつかしい: hoài niệm).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_mg_8", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 1,
        "mondai_label": "文字・語彙 問題1 (Đọc Kanji)", "num": 8, "passage_id": None, "is_star": False,
        "sentence_html": "これを<u class='q-target'>郵送</u>してください。",
        "sentence_tts": "これを郵送してください。",
        "options": ["ほそう", "ほうそう", "ゆそう", "ゆうそう"], "answer": 3,
        "sentence_vi": "Xin hãy gửi cái này qua đường bưu điện.",
        "explain_vi": "郵送（ゆうそう • BƯU TỐNG）= gửi bưu điện (cùng 郵 trong 郵便局 ゆうびんきょく). Chú ý trường âm ゆう (bẫy 輸送 ゆそう = vận chuyển).",
        "evidence_jp": None, "star_order": None
    },

    # ========== MOJI-GOI MONDAI 2 (9..14) ==========
    {
        "id": "2021_12_mg_9", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 2,
        "mondai_label": "文字・語彙 問題2 (Chọn Kanji)", "num": 9, "passage_id": None, "is_star": False,
        "sentence_html": "あそこにいるのが私の<u class='q-target'>むすめ</u>です。",
        "sentence_tts": "あそこにいるのが私の娘です。",
        "options": ["妹", "嫁", "婦", "娘"], "answer": 3,
        "sentence_vi": "Người đang ở đằng kia là con gái tôi.",
        "explain_vi": "娘（むすめ • NƯƠNG）= con gái mình. Phân biệt: 妹(いもうと: em gái), 嫁(よめ: con dâu), 婦(phụ nữ).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_mg_10", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 2,
        "mondai_label": "文字・語彙 問題2 (Chọn Kanji)", "num": 10, "passage_id": None, "is_star": False,
        "sentence_html": "彼女は頭もいいし、<u class='q-target'>せいかく</u>もいい。",
        "sentence_tts": "彼女は頭もいいし、性格もいい。",
        "options": ["性格", "正格", "性確", "正確"], "answer": 0,
        "sentence_vi": "Cô ấy vừa thông minh lại vừa có tính cách tốt.",
        "explain_vi": "性格（せいかく • TÍNH CÁCH）= tính cách. Bẫy kinh điển: 正確（せいかく • CHÍNH XÁC）= chính xác (đồng âm khác nghĩa!).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_mg_11", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 2,
        "mondai_label": "文字・語彙 問題2 (Chọn Kanji)", "num": 11, "passage_id": None, "is_star": False,
        "sentence_html": "それは誰かの<u class='q-target'>めいれい</u>ですか。",
        "sentence_tts": "それは誰かの命令ですか。",
        "options": ["命例", "命令", "企例", "企令"], "answer": 1,
        "sentence_vi": "Đó là mệnh lệnh của ai sao?",
        "explain_vi": "命令（めいれい • MỆNH LỆNH）= mệnh lệnh, chỉ thị. Nhớ 令 (lệnh) chứ không phải 例 (ví dụ).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_mg_12", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 2,
        "mondai_label": "文字・語彙 問題2 (Chọn Kanji)", "num": 12, "passage_id": None, "is_star": False,
        "sentence_html": "銀行へお金を<u class='q-target'>あずけ</u>に行ってきます。",
        "sentence_tts": "銀行へお金を預けに行ってきます。",
        "options": ["預け", "借け", "替け", "貯け"], "answer": 0,
        "sentence_vi": "Tôi đi ra ngân hàng gửi tiền đây.",
        "explain_vi": "預ける（あずける • DỰ）= gửi gắm (tiền vào ngân hàng, hành lý). Phân biệt với 貯める(ためる: tích góp).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_mg_13", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 2,
        "mondai_label": "文字・語彙 問題2 (Chọn Kanji)", "num": 13, "passage_id": None, "is_star": False,
        "sentence_html": "テストの点数が<u class='q-target'>よそう</u>以上によかった。",
        "sentence_tts": "テストの点数が予想以上によかった。",
        "options": ["予習", "予測", "予想", "予定"], "answer": 2,
        "sentence_vi": "Điểm kiểm tra tốt hơn dự đoán.",
        "explain_vi": "予想（よそう • DỰ TƯỞNG）= dự đoán, dự tính. 予習(よしゅう: chuẩn bị bài), 予測(よそく: dự trắc), 予定(よてい: dự định).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_mg_14", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 2,
        "mondai_label": "文字・語彙 問題2 (Chọn Kanji)", "num": 14, "passage_id": None, "is_star": False,
        "sentence_html": "これはとても<u class='q-target'>こうか</u>なものだ。",
        "sentence_tts": "これはとても高価なものだ。",
        "options": ["高値", "高費", "高給", "高価"], "answer": 3,
        "sentence_vi": "Đây là một món đồ rất đắt tiền/có giá trị cao.",
        "explain_vi": "高価（こうか • CAO GIÁ）= đắt giá, giá trị cao (đừng nhầm với 効果 こうか = hiệu quả).",
        "evidence_jp": None, "star_order": None
    },

    # ========== MOJI-GOI MONDAI 3 (15..25) ==========
    {
        "id": "2021_12_mg_15", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 3,
        "mondai_label": "文字・語彙 問題3 (Điền từ vào câu)", "num": 15, "passage_id": None, "is_star": False,
        "sentence_html": "会社に帰ったら、今回の出張の<u class='q-target'>（　　　）</u>をしなければならない。",
        "sentence_tts": "会社に帰ったら、今回の出張の報告をしなければならない。",
        "options": ["発言", "報告", "講演", "応答"], "answer": 1,
        "sentence_vi": "Về đến công ty tôi phải báo cáo về chuyến công tác lần này.",
        "explain_vi": "出張の報告（ほうこく • BÁO CÁO）= báo cáo công tác. 発言(phát ngôn), 講演(diễn thuyết), 応答(đối đáp).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_mg_16", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 3,
        "mondai_label": "文字・語彙 問題3 (Điền từ vào câu)", "num": 16, "passage_id": None, "is_star": False,
        "sentence_html": "試合を見ていた人にテニスボールが<u class='q-target'>（　　　）</u>。",
        "sentence_tts": "試合を見ていた人にテニスボールがあたった。",
        "options": ["なぐった", "うつった", "あたった", "うった"], "answer": 2,
        "sentence_vi": "Quả bóng tennis đã bay trúng vào người đang xem trận đấu.",
        "explain_vi": "ボールが当たる（あたる）= bóng bay trúng vào (tự động từ đi với が!). 殴る(đánh/đấm), 移る(lây/chuyển), 打つ(đánh bóng — tha động từ).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_mg_17", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 3,
        "mondai_label": "文字・語彙 問題3 (Điền từ vào câu)", "num": 17, "passage_id": None, "is_star": False,
        "sentence_html": "必要がないものを買うのは、お金の<u class='q-target'>（　　　）</u>だ。",
        "sentence_tts": "必要がないものを買うのは、お金の無駄だ。",
        "options": ["苦手", "無駄", "貧乏", "不用"], "answer": 1,
        "sentence_vi": "Mua những thứ không cần thiết là sự lãng phí tiền bạc.",
        "explain_vi": "お金の無駄（むだ • VÔ ĐÀ）= lãng phí tiền bạc. 苦手(kém/không giỏi), 貧乏(nghèo khó), 不用(không cần dùng).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_mg_18", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 3,
        "mondai_label": "文字・語彙 問題3 (Điền từ vào câu)", "num": 18, "passage_id": None, "is_star": False,
        "sentence_html": "今回は三日間の旅行であまり時間がないが、<u class='q-target'>（　　　）</u>多くの寺に行きたい。",
        "sentence_tts": "あまり時間がないが、なるべく多くの寺に行きたい。",
        "options": ["うっかり", "たいてい", "そっと", "なるべく"], "answer": 3,
        "sentence_vi": "Lần này đi du lịch 3 ngày không có nhiều thời gian, nhưng tôi muốn đi nhiều chùa nhất có thể.",
        "explain_vi": "なるべく ＝ できるだけ (cố gắng hết mức có thể). うっかり(lỡ quên), たいてい(thông thường), そっと(nhẹ nhàng/lén lút).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_mg_19", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 3,
        "mondai_label": "文字・語彙 問題3 (Điền từ vào câu)", "num": 19, "passage_id": None, "is_star": False,
        "sentence_html": "日本に着いた<u class='q-target'>（　　　）</u>、大学で授業の説明会があった。",
        "sentence_tts": "日本に着いた翌日、大学で授業の説明会があった。",
        "options": ["翌日", "今後", "明日", "早速"], "answer": 0,
        "sentence_vi": "Ngày hôm sau ngày tôi đến Nhật, ở trường đại học có buổi hướng dẫn về tiết học.",
        "explain_vi": "翌日（よくじつ • DỰC NHẬT）= ngày hôm sau (một mốc thời điểm cụ thể trong quá khứ/kế hoạch; còn 明日 あした chỉ tính từ hôm nay!).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_mg_20", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 3,
        "mondai_label": "文字・語彙 問題3 (Điền từ vào câu)", "num": 20, "passage_id": None, "is_star": False,
        "sentence_html": "来年は何か新しいことに<u class='q-target'>（　　　）</u>しようと思っている。",
        "sentence_tts": "来年は何か新しいことにチャレンジしようと思っている。",
        "options": ["オープン", "ノック", "マーク", "チャレンジ"], "answer": 3,
        "sentence_vi": "Năm sau tôi định sẽ thử thách bản thân với một điều gì đó mới mẻ.",
        "explain_vi": "新しいことにチャレンジする = thử thách với điều mới (từ tủ trong 78 Katakana!). オープン(mở cửa), ノック(gõ cửa), マーク(đánh dấu).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_mg_21", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 3,
        "mondai_label": "文字・語彙 問題3 (Điền từ vào câu)", "num": 21, "passage_id": None, "is_star": False,
        "sentence_html": "駅前の<u class='q-target'>（　　　）</u>を安く買った。",
        "sentence_tts": "駅前の土地を安く買った。",
        "options": ["住所", "土地", "近所", "番地"], "answer": 1,
        "sentence_vi": "Tôi đã mua được mảnh đất trước nhà ga với giá rẻ.",
        "explain_vi": "土地（とち • THỔ ĐỊA）= mảnh đất, đất đai. 住所(địa chỉ), 近所(hàng xóm/lân cận), 番地(số nhà).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_mg_22", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 3,
        "mondai_label": "文字・語彙 問題3 (Điền từ vào câu)", "num": 22, "passage_id": None, "is_star": False,
        "sentence_html": "<u class='q-target'>（　　　）</u>電話でお願いした件は、どうなりましたか。",
        "sentence_tts": "このあいだ電話でお願いした件は、どうなりましたか。",
        "options": ["これから", "このあいだ", "ふだん", "しばらく"], "answer": 1,
        "sentence_vi": "Việc mà hôm nọ tôi đã nhờ qua điện thoại, tình hình thế nào rồi ạ?",
        "explain_vi": "このあいだ（この間）= dạo trước, hôm nọ (đi với quá khứ お願いした). これから(từ bây giờ), ふだん(thường ngày), しばらく(một lúc).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_mg_23", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 3,
        "mondai_label": "文字・語彙 問題3 (Điền từ vào câu)", "num": 23, "passage_id": None, "is_star": False,
        "sentence_html": "みんなの意見が<u class='q-target'>（　　　）</u>で、一つの意見にすることができません。",
        "sentence_tts": "みんなの意見がばらばらで、一つの意見にすることができません。",
        "options": ["がらがら", "どきどき", "ばらばら", "ずきずき"], "answer": 2,
        "sentence_vi": "Ý kiến của mọi người rời rạc/mỗi người một phách nên không thể gộp thành một ý kiến chung được.",
        "explain_vi": "ばらばら = rời rạc, phân tán, mỗi người một ý. がらがら(vắng tanh), どきどき(hồi hộp), ずきずき(đau nhức).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_mg_24", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 3,
        "mondai_label": "文字・語彙 問題3 (Điền từ vào câu)", "num": 24, "passage_id": None, "is_star": False,
        "sentence_html": "佐藤さんには、絶対に音楽家になるという強い<u class='q-target'>（　　　）</u>があるようだ。",
        "sentence_tts": "佐藤さんには、絶対に音楽家になるという強い意志があるようだ。",
        "options": ["満足", "将来", "努力", "意志"], "answer": 3,
        "sentence_vi": "Anh Sato có vẻ mang một ý chí mạnh mẽ rằng nhất định sẽ trở thành nhạc sĩ.",
        "explain_vi": "強い意志（つよいいし • Ý CHÍ）= ý chí mạnh mẽ, quyết tâm sắt đá. 満足(hài lòng), 将来(tương lai), 努力(nỗ lực).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_mg_25", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 3,
        "mondai_label": "文字・語彙 問題3 (Điền từ vào câu)", "num": 25, "passage_id": None, "is_star": False,
        "sentence_html": "山田「仕事が終わりましたので、お先に失礼します。」<br>田中「<u class='q-target'>（　　　）</u>。」",
        "sentence_tts": "おつかれさま。",
        "options": ["おまちどおさま", "おつかれさま", "おかえりなさい", "おかげさまで"], "answer": 1,
        "sentence_vi": "Yamada: Xong việc rồi nên tôi xin phép về trước ạ. Tanaka: Anh vất vả rồi (おつかれさま).",
        "explain_vi": "Câu chào đáp công sở chuẩn Nhật khi đồng nghiệp về trước: お疲れ様（おつかれさま）. お待たせ/お待ち遠様(xin lỗi để đợi lâu), おかげさまで(nhờ ơn bạn).",
        "evidence_jp": None, "star_order": None
    },

    # ========== MOJI-GOI MONDAI 4 (26..30) ==========
    {
        "id": "2021_12_mg_26", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 4,
        "mondai_label": "文字・語彙 問題4 (Từ đồng nghĩa)", "num": 26, "passage_id": None, "is_star": False,
        "sentence_html": "昨日見た映画は<u class='q-target'>退屈だった</u>。",
        "sentence_tts": "昨日見た映画は退屈だった。",
        "options": ["めずらしかった", "つまらなかった", "おかしかった", "おもしろかった"], "answer": 1,
        "sentence_vi": "Bộ phim xem hôm qua thật nhàm chán.",
        "explain_vi": "退屈（たいくつ • THOÁI KHUẤT）＝ つまらない (buồn chán, nhàm chán).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_mg_27", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 4,
        "mondai_label": "文字・語彙 問題4 (Từ đồng nghĩa)", "num": 27, "passage_id": None, "is_star": False,
        "sentence_html": "危険なので絶対に<u class='q-target'>ふれないで</u>ください。",
        "sentence_tts": "危険なので絶対にふれないでください。",
        "options": ["座らないで", "走らないで", "触らないで", "休まないで"], "answer": 2,
        "sentence_vi": "Vì nguy hiểm nên tuyệt đối đừng chạm vào.",
        "explain_vi": "触れる（ふれる）＝ 触る（さわる）= chạm vào, sờ vào. Cả hai đều dùng chung chữ Hán 触 (XÚC)!",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_mg_28", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 4,
        "mondai_label": "文字・語彙 問題4 (Từ đồng nghĩa)", "num": 28, "passage_id": None, "is_star": False,
        "sentence_html": "それはとてもいい<u class='q-target'>機会</u>だと思います。",
        "sentence_tts": "それはとてもいい機会だと思います。",
        "options": ["プレゼント", "アイディア", "パーティー", "チャンス"], "answer": 3,
        "sentence_vi": "Tôi nghĩ đó là một cơ hội rất tốt.",
        "explain_vi": "機会（きかい • CƠ HỘI）＝ チャンス (chance). Trúng tủ 80 Đồng Nghĩa + 78 Katakana N3!",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_mg_29", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 4,
        "mondai_label": "文字・語彙 問題4 (Từ đồng nghĩa)", "num": 29, "passage_id": None, "is_star": False,
        "sentence_html": "今回の仕事は、いつもより<u class='q-target'>きつかった</u>。",
        "sentence_tts": "今回の仕事は、いつもよりきつかった。",
        "options": ["大変だった", "簡単だった", "楽しかった", "長かった"], "answer": 0,
        "sentence_vi": "Công việc lần này vất vả/nặng nhọc hơn mọi khi.",
        "explain_vi": "きつい (công việc) ＝ 大変だ (vất vả, căng thẳng). Ngoài ra với quần áo thì きつい nghĩa là 'chật'.",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_mg_30", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 4,
        "mondai_label": "文字・語彙 問題4 (Từ đồng nghĩa)", "num": 30, "passage_id": None, "is_star": False,
        "sentence_html": "なぜ私のこたえが違うのか、友達の説明を聞いて<u class='q-target'>納得した</u>。",
        "sentence_tts": "友達の説明を聞いて納得した。",
        "options": ["少し分かった", "とてもよく分かった", "もう一度考えた", "何度も考えた"], "answer": 1,
        "sentence_vi": "Nghe bạn giải thích tôi đã hoàn toàn hiểu ra (tâm phục khẩu phục) vì sao đáp án của mình sai.",
        "explain_vi": "納得する（なっとく • NẠP ĐẮC）＝ とてもよく分かる (hiểu thấu đáo và hoàn toàn đồng tình/chấp nhận).",
        "evidence_jp": None, "star_order": None
    },

    # ========== MOJI-GOI MONDAI 5 (31..35) ==========
    {
        "id": "2021_12_mg_31", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 5,
        "mondai_label": "文字・語彙 問題5 (Cách dùng từ)", "num": 31, "passage_id": None, "is_star": False,
        "sentence_html": "Chọn câu dùng từ <u class='q-target'>集合</u> (しゅうごう) đúng nhất:",
        "sentence_tts": "あしたは駅前に7時に集合してください。",
        "options": [
            "あしたは駅前に7時に集合してください。",
            "短時間に雨が集合して降った。",
            "この店にはおいしいワインが集合している。",
            "私の趣味は切手を集合することです。"
        ], "answer": 0,
        "sentence_vi": "Ngày mai hãy tập trung trước nhà ga lúc 7 giờ nhé.",
        "explain_vi": "集合する（TẬP HỢP）dùng cho NGƯỜI tập trung lại một địa điểm. Câu 2 mưa (集中して), Câu 3 rượu phong phú (揃っている), Câu 4 sưu tầm tem (集める/収集する).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_mg_32", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 5,
        "mondai_label": "文字・語彙 問題5 (Cách dùng từ)", "num": 32, "passage_id": None, "is_star": False,
        "sentence_html": "Chọn câu dùng từ <u class='q-target'>中古</u> (ちゅうこ) đúng nhất:",
        "sentence_tts": "あの店に行けば、中古のカメラが安く買えますよ。",
        "options": [
            "これは中古の卵なので、早く食べたほうがいいですね。",
            "彼女は、子どものころから仲良くしている中古の友達です。",
            "あの店に行けば、中古のカメラが安く買えますよ。",
            "ここでアルバイトを始めてから3年なので、私は中古の店員です。"
        ], "answer": 2,
        "sentence_vi": "Nếu đến cửa hàng kia thì có thể mua máy ảnh cũ (second-hand) với giá rẻ đấy.",
        "explain_vi": "中古（TRUNG CỔ）= đồ đã qua sử dụng (máy ảnh, xe, sách, đồ điện tử). Không dùng cho thực phẩm (1: 古い) hay con người (2, 4).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_mg_33", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 5,
        "mondai_label": "文字・語彙 問題5 (Cách dùng từ)", "num": 33, "passage_id": None, "is_star": False,
        "sentence_html": "Chọn câu dùng từ <u class='q-target'>追い抜く</u> (おいぬく) đúng nhất:",
        "sentence_tts": "マラソンで前の人を追い抜くときに、腕がぶつかってしまった。",
        "options": [
            "マラソンで前の人を追い抜くときに、腕がぶつかってしまった。",
            "この山を追い抜いたら、向こうに海が見えると思います。",
            "この国では二十歳を追い抜くと、もう大人だ。",
            "12時を追い抜いたので、お昼ご飯にしましょう。"
        ], "answer": 0,
        "sentence_vi": "Trong cuộc chạy marathon, lúc vượt mặt người phía trước thì tay tôi bị va vào họ.",
        "explain_vi": "追い抜く = đuổi kịp rồi vượt qua mặt (người chạy trước, xe chạy trước). Câu 2 vượt núi (越えたら), Câu 3 & 4 vượt quá tuổi/giờ (過ぎると/過ぎた).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_mg_34", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 5,
        "mondai_label": "文字・語彙 問題5 (Cách dùng từ)", "num": 34, "passage_id": None, "is_star": False,
        "sentence_html": "Chọn câu dùng từ <u class='q-target'>見本</u> (みほん) đúng nhất:",
        "sentence_tts": "ここに申込書の書き方の見本があるので、参考にしてください。",
        "options": [
            "今度のスピーチ大会には、川井さんが学校の見本で出るそうだ。",
            "私の兄は、日本人の見本の身長より10センチくらい高い。",
            "ここに申込書の書き方の見本があるので、参考にしてください。",
            "ギターを弾くのが初めての人は、見本から教えてもらえます。"
        ], "answer": 2,
        "sentence_vi": "Ở đây có bản mẫu cách điền đơn đăng ký, hãy tham khảo nhé.",
        "explain_vi": "見本（KIẾN BẢN）= vật mẫu, bản mẫu để tham khảo. Câu 1 đại diện (代表), Câu 2 trung bình (平均), Câu 4 cơ bản (基本).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_mg_35", "exam_id": "2021_12", "section": "moji_goi", "jlpt_shift": 1, "mondai": 5,
        "mondai_label": "文字・語彙 問題5 (Cách dùng từ)", "num": 35, "passage_id": None, "is_star": False,
        "sentence_html": "Chọn câu dùng từ <u class='q-target'>だるい</u> đúng nhất:",
        "sentence_tts": "体がだるくて起きられない。",
        "options": [
            "このスープは味がだるいから、塩を足したほうがいい。",
            "ダイエットをしたら、スカートがだるくなった。",
            "レポートが終わったら少しだるくしたい。",
            "体がだるくて起きられない。"
        ], "answer": 3,
        "sentence_vi": "Cơ thể uể oải rã rời không dậy nổi.",
        "explain_vi": "だるい = mệt mỏi, uể oải, rã rời (chỉ trạng thái cơ thể/chân tay). Câu 1 nhạt (薄い), Câu 2 rộng/lỏng (ゆるくなった), Câu 3 nghỉ ngơi thư giãn (ゆっくりしたい).",
        "evidence_jp": None, "star_order": None
    },

    # ========== BUNPOU MONDAI 1 (1..13) ==========
    {
        "id": "2021_12_bd_1", "exam_id": "2021_12", "section": "bunpou", "jlpt_shift": 2, "mondai": 1,
        "mondai_label": "文法 問題1 (Chọn ngữ pháp)", "num": 1, "passage_id": None, "is_star": False,
        "sentence_html": "母は、留学している兄と久しぶりに電話で話して、とてもうれしそうな顔<u class='q-target'>（　　　）</u>していた。",
        "sentence_tts": "とてもうれしそうな顔をしていた。",
        "options": ["へ", "が", "を", "の"], "answer": 2,
        "sentence_vi": "Mẹ nói chuyện điện thoại với anh trai đang du học sau một thời gian dài, gương mặt trông rất vui mừng.",
        "explain_vi": "Cụm cố định 「〜顔をしている」(có vẻ mặt...). Bắt buộc dùng trợ từ を!",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_bd_2", "exam_id": "2021_12", "section": "bunpou", "jlpt_shift": 2, "mondai": 1,
        "mondai_label": "文法 問題1 (Chọn ngữ pháp)", "num": 2, "passage_id": None, "is_star": False,
        "sentence_html": "長い間建設中だったABCビルが、昨日<u class='q-target'>（　　　）</u>完成した。",
        "sentence_tts": "長い間建設中だったABCビルが、昨日ついに完成した。",
        "options": ["ずっと", "今にも", "次第に", "ついに"], "answer": 3,
        "sentence_vi": "Tòa nhà ABC đang xây dựng suốt thời gian dài hôm qua cuối cùng cũng hoàn thành.",
        "explain_vi": "「ついに」= cuối cùng thì cũng (kết quả đạt được sau quá trình chờ đợi lâu dài). 今にも(sắp sửa ngay lập tức), 次第に(dần dần).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_bd_3", "exam_id": "2021_12", "section": "bunpou", "jlpt_shift": 2, "mondai": 1,
        "mondai_label": "文法 問題1 (Chọn ngữ pháp)", "num": 3, "passage_id": None, "is_star": False,
        "sentence_html": "（電話で）<br>店長「大下さん、急で申し訳ないんですけど、明日出勤することはできますか。」<br>大下「午後<u class='q-target'>（　　　）</u>行けますが、それでも大丈夫ですか。」<br>店長「ありがとうございます。お願いします。」",
        "sentence_tts": "午後からなら行けますが、それでも大丈夫ですか。",
        "options": ["でなら", "からなら", "へでも", "まででも"], "answer": 1,
        "sentence_vi": "Oshita: Nếu là từ buổi chiều thì em có thể đi làm được, như vậy có ổn không ạ?",
        "explain_vi": "「午後からなら」= nếu bắt đầu TỪ buổi chiều thì... (trợ từ điểm xuất phát から + điều kiện なら).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_bd_4", "exam_id": "2021_12", "section": "bunpou", "jlpt_shift": 2, "mondai": 1,
        "mondai_label": "文法 問題1 (Chọn ngữ pháp)", "num": 4, "passage_id": None, "is_star": False,
        "sentence_html": "音楽会は、あすの11時からさくら広場<u class='q-target'>（　　　）</u>開かれます。",
        "sentence_tts": "音楽会は、あすの11時からさくら広場において開かれます。",
        "options": ["に対して", "によって", "について", "において"], "answer": 3,
        "sentence_vi": "Buổi hòa nhạc sẽ được tổ chức từ 11 giờ ngày mai tại quảng trường Sakura.",
        "explain_vi": "「Nにおいて」(tại địa điểm N — dùng cực nhiều ở JLPT N3, lặp lại y hệt đề T12/2022 câu 2!).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_bd_5", "exam_id": "2021_12", "section": "bunpou", "jlpt_shift": 2, "mondai": 1,
        "mondai_label": "文法 問題1 (Chọn ngữ pháp)", "num": 5, "passage_id": None, "is_star": False,
        "sentence_html": "去年姉に子供が生まれた。2、3か月に1回ぐらい会っているが、会う<u class='q-target'>（　　　）</u>大きくなっていて、びっくりする。",
        "sentence_tts": "会うたびに大きくなっていて、びっくりする。",
        "options": ["たびに", "うちに", "間に", "前に"], "answer": 0,
        "sentence_vi": "Năm ngoái chị gái sinh con. Khoảng 2–3 tháng tôi gặp cháu 1 lần, mỗi lần gặp lại thấy cháu lớn hẳn lên nên ngạc nhiên quá.",
        "explain_vi": "「Vる + たびに」= mỗi lần làm V là lại... (lặp đi lặp lại). うちに(nhân lúc/trong khi).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_bd_6", "exam_id": "2021_12", "section": "bunpou", "jlpt_shift": 2, "mondai": 1,
        "mondai_label": "文法 問題1 (Chọn ngữ pháp)", "num": 6, "passage_id": None, "is_star": False,
        "sentence_html": "私は10年前から同じかばんを<u class='q-target'>（　　　）</u>続けている。",
        "sentence_tts": "私は10年前から同じかばんを使い続けている。",
        "options": ["使う", "使い", "使おう", "使った"], "answer": 1,
        "sentence_vi": "Tôi vẫn tiếp tục dùng cùng một chiếc cặp suốt từ 10 năm trước.",
        "explain_vi": "Cấu trúc ghép động từ 「Vます (bỏ ます) + 続ける」= tiếp tục làm V -> 使い続けている.",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_bd_7", "exam_id": "2021_12", "section": "bunpou", "jlpt_shift": 2, "mondai": 1,
        "mondai_label": "文法 問題1 (Chọn ngữ pháp)", "num": 7, "passage_id": None, "is_star": False,
        "sentence_html": "田中さんがわたしの方に<u class='q-target'>（　　　）</u>見えました。",
        "sentence_tts": "田中さんがわたしの方に走ってくるのが見えました。",
        "options": ["走っていくことが", "走ってくることが", "走っていくのが", "走ってくるのが"], "answer": 3,
        "sentence_vi": "Tôi nhìn thấy anh Tanaka đang chạy về phía mình.",
        "explain_vi": "2 điểm mấu chốt: (1) Chạy hướng VỀ phía mình (わたしの方に) -> 走ってくる (không dùng いく); (2) Đi với động từ giác quan 見える / 聞こえる bắt buộc danh từ hóa bằng 「のが」(KHÔNG dùng ことが)!",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_bd_8", "exam_id": "2021_12", "section": "bunpou", "jlpt_shift": 2, "mondai": 1,
        "mondai_label": "文法 問題1 (Chọn ngữ pháp)", "num": 8, "passage_id": None, "is_star": False,
        "sentence_html": "山田「ジョンくんは、毎日バスケットボールの練習をしているんですか。」<br>ジョン「はい。早く試合に<u class='q-target'>（　　　）</u>なりたいんです。」",
        "sentence_tts": "はい。早く試合に出られるようになりたいんです。",
        "options": ["出られるように", "出られるために", "出させるように", "出させるために"], "answer": 0,
        "sentence_vi": "John: Vâng, em muốn sớm trở nên có thể ra sân thi đấu được.",
        "explain_vi": "Cấu trúc 「V khả năng + ようになる」= trở nên có thể làm được... (試合に出られるようになりたい).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_bd_9", "exam_id": "2021_12", "section": "bunpou", "jlpt_shift": 2, "mondai": 1,
        "mondai_label": "文法 問題1 (Chọn ngữ pháp)", "num": 9, "passage_id": None, "is_star": False,
        "sentence_html": "今朝はすごい雨だったが、今はもう<u class='q-target'>（　　　）</u>。",
        "sentence_tts": "今朝はすごい雨だったが、今はもう降っていない。",
        "options": ["降っている", "降っていない", "降る", "降らない"], "answer": 1,
        "sentence_vi": "Sáng nay mưa to kinh khủng, nhưng bây giờ đã không còn mưa nữa rồi.",
        "explain_vi": "Trạng thái thời tiết hiện tại đang diễn ra/đã ngừng: 今はもう + Vていない -> 降っていない.",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_bd_10", "exam_id": "2021_12", "section": "bunpou", "jlpt_shift": 2, "mondai": 1,
        "mondai_label": "文法 問題1 (Chọn ngữ pháp)", "num": 10, "passage_id": None, "is_star": False,
        "sentence_html": "西川「あ、森さん、携帯電話がポケットから<u class='q-target'>（　　　）</u>よ。」<br>森「本当だ。ありがとうございます。」",
        "sentence_tts": "あ、森さん、携帯電話がポケットから落ちそうですよ。",
        "options": ["落ちるそうです", "落ちそうです", "落とすそうです", "落としそうです"], "answer": 1,
        "sentence_vi": "Nishikawa: À anh Mori ơi, điện thoại sắp rơi khỏi túi kìa! Mori: Thật thế, cảm ơn anh.",
        "explain_vi": "2 điểm ngữ pháp: (1) Chủ ngữ là 携帯電話が -> dùng tự động từ 落ちる; (2) Sắp xảy ra ngay trước mắt -> 「Vます + そうだ」(落ちそうです, khác với 落ちるそうです = nghe nói là rơi).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_bd_11", "exam_id": "2021_12", "section": "bunpou", "jlpt_shift": 2, "mondai": 1,
        "mondai_label": "文法 問題1 (Chọn ngữ pháp)", "num": 11, "passage_id": None, "is_star": False,
        "sentence_html": "A「今度駅前に新しいケーキ屋さんができる<u class='q-target'>（　　　）</u>ね。」<br>B「本当ですか。楽しみですね。」",
        "sentence_tts": "今度駅前に新しいケーキ屋さんができるみたいだね。",
        "options": ["でしょう", "といい", "ほうがいい", "みたいだ"], "answer": 3,
        "sentence_vi": "A: Hình như sắp tới trước nhà ga có mở một tiệm bánh ngọt mới đấy nhỉ. B: Thật sao? Mong quá nhỉ.",
        "explain_vi": "Người B đáp 「本当ですか」(Thật sao? -> thông tin mới nghe lần đầu!) nên câu A đang truyền đạt tin đồn/suy đoán khách quan 「〜みたいだね」 (loại といい 'ước gì' vì nếu ước thì B không hỏi 'Thật sao?').",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_bd_12", "exam_id": "2021_12", "section": "bunpou", "jlpt_shift": 2, "mondai": 1,
        "mondai_label": "文法 問題1 (Chọn ngữ pháp)", "num": 12, "passage_id": None, "is_star": False,
        "sentence_html": "この花は、土が乾いたら水をやる必要があるが、<u class='q-target'>（　　　）</u>。水が多いと根が腐ってしまう。",
        "sentence_tts": "土が乾いたら水をやる必要があるが、やりすぎるのもよくない。",
        "options": ["やりすぎるのもよくない", "やらなくていいのがいい", "やってやるのもよくない", "やらないでおくのがいい"], "answer": 0,
        "sentence_vi": "Loài hoa này khi đất khô cần tưới nước, nhưng tưới quá nhiều cũng không tốt. Nếu nhiều nước rễ sẽ bị thối mất.",
        "explain_vi": "Vế sau giải thích 「水が多いと根が腐ってしまう」(nhiều nước quá rễ sẽ thối) -> vế trước khớp hoàn hảo 「やりすぎるのもよくない」(tưới quá tay cũng không tốt).",
        "evidence_jp": None, "star_order": None
    },
    {
        "id": "2021_12_bd_13", "exam_id": "2021_12", "section": "bunpou", "jlpt_shift": 2, "mondai": 1,
        "mondai_label": "文法 問題1 (Chọn ngữ pháp)", "num": 13, "passage_id": None, "is_star": False,
        "sentence_html": "（患者が病院に電話をする）<br>受付の人「はい。山田病院でございます。」<br>患者「すみません。10時に予約した田中と申しますが、11時に<u class='q-target'>（　　　）</u>。」",
        "sentence_tts": "10時に予約した田中と申しますが、11時に変えていただけないでしょうか。",
        "options": ["変えましょうか", "変えたほうがいいですか", "変えていただきましょう", "変えていただけないでしょうか"], "answer": 3,
        "sentence_vi": "Bệnh nhân: Xin lỗi, tôi là Tanaka đã hẹn lịch lúc 10 giờ, xin hỏi có thể đổi giúp tôi sang 11 giờ được không ạ?",
        "explain_vi": "Mẫu nhờ vả cực lịch sự chuẩn N3: 「Vていただけないでしょうか」= ngài có thể vui lòng làm V giúp tôi được không ạ?",
        "evidence_jp": None, "star_order": None
    },

    # ========== BUNPOU MONDAI 2 ★ (14..18) ==========
    {
        "id": "2021_12_bd_14", "exam_id": "2021_12", "section": "bunpou", "jlpt_shift": 2, "mondai": 2,
        "mondai_label": "文法 問題2 (Sắp xếp dấu sao ★)", "num": 14, "passage_id": None, "is_star": True,
        "sentence_html": "この小学生は<span class='star-slots'>＿＿＿　＿＿＿　<u class='q-target'>＿★＿</u>　＿＿＿</span>問題を簡単に解いてしまう。",
        "sentence_tts": "この小学生は大人でも解けないような問題を簡単に解いてしまう。",
        "options": ["大人", "ような", "解けない", "でも"], "answer": 2,
        "sentence_vi": "Cậu học sinh tiểu học này giải ngon ơ cả những bài toán đến người lớn cũng không giải nổi.",
        "explain_vi": "Cấu trúc 「Nでも〜ない」(ngay cả N cũng không...) + 「ような + N」(những bài toán cỡ như...). Ghép: 大人でも + 解けない + ような + 問題.",
        "evidence_jp": None,
        "star_order": "1(大人) → 4(でも) → ★3(解けない) → 2(ような)"
    },
    {
        "id": "2021_12_bd_15", "exam_id": "2021_12", "section": "bunpou", "jlpt_shift": 2, "mondai": 2,
        "mondai_label": "文法 問題2 (Sắp xếp dấu sao ★)", "num": 15, "passage_id": None, "is_star": True,
        "sentence_html": "去年、初めて一人で海外を旅行した。行く前は心配なこともあったが、<span class='star-slots'>＿＿＿　＿＿＿　<u class='q-target'>＿★＿</u>　＿＿＿</span>だった。",
        "sentence_tts": "旅行していた2週間は楽しいことばかりだった。",
        "options": ["楽しいこと", "ばかり", "旅行していた", "2週間は"], "answer": 0,
        "sentence_vi": "Năm ngoái tôi lần đầu du lịch nước ngoài một mình. Trước khi đi cũng có chút lo lắng nhưng 2 tuần đi du lịch toàn là chuyện vui.",
        "explain_vi": "Mệnh đề định ngữ làm chủ ngữ 「旅行していた2週間は」+ 「楽しいことばかりだった」(toàn là điều vui vẻ).",
        "evidence_jp": None,
        "star_order": "3(旅行していた) → 4(2週間は) → ★1(楽しいこと) → 2(ばかり)"
    },
    {
        "id": "2021_12_bd_16", "exam_id": "2021_12", "section": "bunpou", "jlpt_shift": 2, "mondai": 2,
        "mondai_label": "文法 問題2 (Sắp xếp dấu sao ★)", "num": 16, "passage_id": None, "is_star": True,
        "sentence_html": "A「昨日は日曜日だったから、遊園地は人が多かったでしょう？」<br>B「いや、<span class='star-slots'>＿＿＿　＿＿＿　<u class='q-target'>＿★＿</u>　＿＿＿</span>いませんでしたよ。」",
        "sentence_tts": "いや、思っていたほど込んでいませんでしたよ。",
        "options": ["いた", "込んで", "ほど", "思って"], "answer": 2,
        "sentence_vi": "B: Không đâu, không đông đến mức như tôi nghĩ đâu.",
        "explain_vi": "Cấu trúc tủ N3 「思っていたほど〜ない」= không ... đến mức như đã nghĩ! Ghép: 思っていたほど + 込んで + いませんでしたよ.",
        "evidence_jp": None,
        "star_order": "4(思って) → 1(いた) → ★3(ほど) → 2(込んで)"
    },
    {
        "id": "2021_12_bd_17", "exam_id": "2021_12", "section": "bunpou", "jlpt_shift": 2, "mondai": 2,
        "mondai_label": "文法 問題2 (Sắp xếp dấu sao ★)", "num": 17, "passage_id": None, "is_star": True,
        "sentence_html": "一人暮らしを始めて、両親が毎日仕事を<span class='star-slots'>＿＿＿　＿＿＿　<u class='q-target'>＿★＿</u>　＿＿＿</span>大変なことだったか、よくわかった。",
        "sentence_tts": "両親が毎日仕事をしながら食事の準備や洗濯をしてくれていたことがどれだけ大変なことだったか、よくわかった。",
        "options": ["どれだけ", "しながら", "食事の準備や洗濯を", "してくれていたことが"], "answer": 3,
        "sentence_vi": "Bắt đầu sống một mình rồi tôi mới hiểu rõ việc bố mẹ hằng ngày vừa đi làm vừa nấu cơm giặt giũ cho mình vất vả đến nhường nào.",
        "explain_vi": "Cấu trúc 「仕事をしながら〜してくれていたことが」+ câu hỏi lồng 「どれだけ大変なことだったか」(vất vả đến mức nào).",
        "evidence_jp": None,
        "star_order": "2(しながら) → 3(食事の準備や洗濯を) → ★4(してくれていたことが) → 1(どれだけ)"
    },
    {
        "id": "2021_12_bd_18", "exam_id": "2021_12", "section": "bunpou", "jlpt_shift": 2, "mondai": 2,
        "mondai_label": "文法 問題2 (Sắp xếp dấu sao ★)", "num": 18, "passage_id": None, "is_star": True,
        "sentence_html": "患者「先生、おふろに入ってもいいんでしょうか。」<br>医者「<span class='star-slots'>＿＿＿　＿＿＿　<u class='q-target'>＿★＿</u>　＿＿＿</span>いいですよ。」",
        "sentence_tts": "あしたになって熱が下がっていたらいいですよ。",
        "options": ["なって", "いたら", "熱が下がって", "あしたに"], "answer": 2,
        "sentence_vi": "Bác sĩ: Sang ngày mai nếu sốt đã hạ rồi thì tắm được nhé.",
        "explain_vi": "Ghép chuỗi thời gian + điều kiện: 「あしたになって」(sang đến ngày mai) + 「熱が下がっていたら」(nếu trạng thái sốt đã hạ) + いいですよ.",
        "evidence_jp": None,
        "star_order": "4(あしたに) → 1(なって) → ★3(熱が下がって) → 2(いたら)"
    },

    # ========== BUNPOU MONDAI 3 (19..22) ==========
    {
        "id": "2021_12_bd_19", "exam_id": "2021_12", "section": "bunpou", "jlpt_shift": 2, "mondai": 3,
        "mondai_label": "文法 問題3 (Ngữ pháp đoạn văn)", "num": 19, "passage_id": "2021_12_bm3", "is_star": False,
        "sentence_html": "Chọn đáp án điền vào chỗ trống <u class='q-target'>（ 19 ）</u> trong bài đọc bên trái:",
        "sentence_tts": "でも、6月になると、梅雨で雨の日が多くなりました。",
        "options": ["だから", "つまり", "でも", "そのうえ"], "answer": 2,
        "sentence_vi": "Thế nhưng sang tháng 6 thì vào mùa mưa nên số ngày mưa nhiều lên.",
        "explain_vi": "Câu trước: 'Ngắm hoa, mua sắm, chơi tennis rất vui' ↔ Câu sau: 'Mùa mưa đến, phiền phức không chơi tennis được' -> chuyển ý đối lập dùng 「でも」.",
        "evidence_jp": "楽しく過ごしていました。［でも］、6月になると、梅雨で雨の日が多くなりました。", "star_order": None
    },
    {
        "id": "2021_12_bd_20", "exam_id": "2021_12", "section": "bunpou", "jlpt_shift": 2, "mondai": 3,
        "mondai_label": "文法 問題3 (Ngữ pháp đoạn văn)", "num": 20, "passage_id": "2021_12_bm3", "is_star": False,
        "sentence_html": "Chọn đáp án điền vào chỗ trống <u class='q-target'>（ 20 ）</u> trong bài đọc bên trái:",
        "sentence_tts": "そんなとき、友達が傘をプレゼントしてくれました。",
        "options": ["その友達", "こういう友達", "どちらかの友達", "友達"], "answer": 3,
        "sentence_vi": "Đúng lúc đó, một người bạn đã tặng tôi chiếc ô.",
        "explain_vi": "Ở đoạn 1 CHƯA HỀ nhắc đến người bạn nào cả -> lần đầu xuất hiện trong bài không được dùng chỉ thị từ その / こういう / どちらかの -> chọn 「友達」!",
        "evidence_jp": "そんなとき、［友達］が傘をプレゼントしてくれました。", "star_order": None
    },
    {
        "id": "2021_12_bd_21", "exam_id": "2021_12", "section": "bunpou", "jlpt_shift": 2, "mondai": 3,
        "mondai_label": "文法 問題3 (Ngữ pháp đoạn văn)", "num": 21, "passage_id": "2021_12_bm3", "is_star": False,
        "sentence_html": "Chọn đáp án điền vào chỗ trống <u class='q-target'>（ 21 ）</u> trong bài đọc bên trái:",
        "sentence_tts": "友達がくれた傘は内側に美しい桜の絵がかいてあったのです。",
        "options": ["かいてあったそうです", "かいてあったのです", "かいてあったはずです", "かいてあったおかげです"], "answer": 1,
        "sentence_vi": "Chiếc ô bạn tặng có vẽ bức tranh hoa anh đào tuyệt đẹp ở mặt bên trong.",
        "explain_vi": "Giải thích cho câu ngay trước ('Mở ô ra thì bên trong khác hẳn') -> dùng mẫu giải thích 「〜のです」(かいてあったのです). Tác giả tự mở ô nhìn thấy trực tiếp nên loại そうです(nghe kể) & はずです(suy đoán).",
        "evidence_jp": "傘を開くと内側は全く違っていました。友達がくれた傘は内側に美しい桜の絵が［かいてあったのです］。", "star_order": None
    },
    {
        "id": "2021_12_bd_22", "exam_id": "2021_12", "section": "bunpou", "jlpt_shift": 2, "mondai": 3,
        "mondai_label": "文法 問題3 (Ngữ pháp đoạn văn)", "num": 22, "passage_id": "2021_12_bm3", "is_star": False,
        "sentence_html": "Chọn đáp án điền vào chỗ trống <u class='q-target'>（ 22 ）</u> trong bài đọc bên trái:",
        "sentence_tts": "晴れの日が続いたときに、雨が降ってほしいなあと思うこともあります。",
        "options": ["思うこともあります", "思ったらいいです", "思うことができません", "思わなくなりました"], "answer": 0,
        "sentence_vi": "Khi những ngày nắng kéo dài liên tục, đôi lúc tôi còn nghĩ 'giá mà trời mưa nhỉ'.",
        "explain_vi": "「Vる + こともあります」= thỉnh thoảng cũng có lúc nghĩ như vậy (nhấn mạnh tâm trạng thay đổi tích cực nhờ chiếc ô hoa anh đào).",
        "evidence_jp": "今は、この傘があるので雨の日が嫌ではありません。晴れの日が続いたときに、雨が降ってほしいなあと［思うこともあります］。", "star_order": None
    },

    # ========== DOKKAI MONDAI 4 (23..26) ==========
    {
        "id": "2021_12_bd_23", "exam_id": "2021_12", "section": "dokkai", "jlpt_shift": 2, "mondai": 4,
        "mondai_label": "読解 問題4 (Đoạn ngắn)", "num": 23, "passage_id": "2021_12_dm4_1", "is_star": False,
        "sentence_html": "お知らせの内容に合っているのはどれか。",
        "sentence_tts": "お知らせの内容に合っているのはどれか。",
        "options": [
            "応募は、1月8日までにスポーツ課ホームページからしなければならない。",
            "応募した人がどんなことを手伝うかは、当日にならないとわからない。",
            "大会当日の朝の説明会に行けない人は応募できない。",
            "マラソン大会を手伝ったことがある人だけが応募できる。"
        ], "answer": 2,
        "sentence_vi": "Ý nào khớp với nội dung thông báo?",
        "explain_vi": "Đáp án 3 khớp mục 応募できる方 ('Người có thể dự buổi hướng dẫn 7h sáng ngày thi' -> ai không đi được buổi đó sẽ không đăng ký được). Loại 1 (hạn 2/12, có nhận tại quầy), loại 2 (báo cuối tháng 3 qua thư), loại 4 (chỉ 'hoan nghênh' người có kinh nghiệm chứ không bắt buộc).",
        "evidence_jp": "応募できる方：・山川市民で18歳以上の方 ・大会当日の午前7時からの説明会に参加できる方",
        "star_order": None
    },
    {
        "id": "2021_12_bd_24", "exam_id": "2021_12", "section": "dokkai", "jlpt_shift": 2, "mondai": 4,
        "mondai_label": "読解 問題4 (Đoạn ngắn)", "num": 24, "passage_id": "2021_12_dm4_2", "is_star": False,
        "sentence_html": "この規則について、正しいものはどれか。",
        "sentence_tts": "この規則について、正しいものはどれか。",
        "options": [
            "自分の家以外では、ごみを捨ててはならない。",
            "道を歩きながら、たばこを吸ってはいけない。",
            "自転車は、決められた場所以外走ってはいけない。",
            "規則を守らない人は、全員お金を払わなければならない。"
        ], "answer": 1,
        "sentence_vi": "Điều nào đúng về quy định này?",
        "explain_vi": "Đáp án 2 khớp mục ② (Cấm vừa đi bộ vừa hút thuốc). Bẫy cực hay: loại 1 (được vứt vào thùng rác công cộng), loại 3 (cấm ĐỖ xe とめる chứ không phải cấm chạy 走る), loại 4 (bài nói こともある = có trường hợp bị phạt chứ không phải 全員).",
        "evidence_jp": "②歩きながらたばこを吸うこと（を禁止している）",
        "star_order": None
    },
    {
        "id": "2021_12_bd_25", "exam_id": "2021_12", "section": "dokkai", "jlpt_shift": 2, "mondai": 4,
        "mondai_label": "読解 問題4 (Đoạn ngắn)", "num": 25, "passage_id": "2021_12_dm4_3", "is_star": False,
        "sentence_html": "山本さんがしたことはどれか。",
        "sentence_tts": "山本さんがしたことはどれか。",
        "options": [
            "田中電気の新製品のパンフレットと説明書、価格表を送った。",
            "鈴木電気の新製品のパンフレットと説明書、価格表を送った。",
            "田中電気の新製品以外のパンフレットと説明書、価格表を送った。",
            "鈴木電気の新製品以外のパンフレットと説明書、価格表を送った。"
        ], "answer": 3,
        "sentence_vi": "Việc mà ông Yamamoto đã làm là việc nào?",
        "explain_vi": "Đáp án 4! Bẫy thư thương mại kinh điển (người gửi vs người nhận): Người gửi là 山本 (Công ty 鈴木電気工業), gửi cho 青山 (田中電気), tài liệu gửi là về 「その他の製品」(các sản phẩm KHÁC ngoài sản phẩm mới của Suzuki)!",
        "evidence_jp": "鈴木電気工業株式会社 山本和男｜その他の製品についての説明を、ということでしたので、パンフレットと説明書、価格表をお送りいたします。",
        "star_order": None
    },
    {
        "id": "2021_12_bd_26", "exam_id": "2021_12", "section": "dokkai", "jlpt_shift": 2, "mondai": 4,
        "mondai_label": "読解 問題4 (Đoạn ngắn)", "num": 26, "passage_id": "2021_12_dm4_4", "is_star": False,
        "sentence_html": "<u class='q-target'>今回のように仕方ないとき</u>とあるが、どのようなときか。",
        "sentence_tts": "今回のように仕方ないときとあるが、どのようなときか。",
        "options": [
            "近所の店に行く時間がないとき",
            "近所の店に断られたとき",
            "白い服を汚したとき",
            "あまりお金がないとき"
        ], "answer": 1,
        "sentence_vi": "'Lúc bất đắc dĩ như lần này' là lúc như thế nào?",
        "explain_vi": "Đáp án 2: Khi bị tiệm giặt gần nhà từ chối không tẩy được vết bẩn nên đành phải gửi sang tiệm xa nhưng giá đắt kia.",
        "evidence_jp": "近所のクリーニング店に持っていったら、この汚れは落とせないと断られてしまった。",
        "star_order": None
    },

    # ========== DOKKAI MONDAI 5 (27..32) ==========
    {
        "id": "2021_12_bd_27", "exam_id": "2021_12", "section": "dokkai", "jlpt_shift": 2, "mondai": 5,
        "mondai_label": "読解 問題5 (Đoạn trung 1)", "num": 27, "passage_id": "2021_12_dm5_1", "is_star": False,
        "sentence_html": "母が元気をなくした原因は何か。",
        "sentence_tts": "母が元気をなくした原因は何か。",
        "options": [
            "食欲が落ちたから",
            "体重が減ったから",
            "腕を骨折したから",
            "けがが治らないから"
        ], "answer": 2,
        "sentence_vi": "Nguyên nhân khiến người mẹ mất hết tinh thần/sức khỏe là gì?",
        "explain_vi": "Đáp án 3: Vì nửa năm trước ngã gãy tay (腕を骨折し、それ以来すっかり元気をなくしてしまっていた). Loại 1 & 2 (là HỆ QUẢ sau đó), loại 4 (vết gãy xương đã khỏi sau 3 tuần).",
        "evidence_jp": "実は、母は半年前に転んで腕を骨折し、それ以来すっかり元気をなくしてしまっていた。",
        "star_order": None
    },
    {
        "id": "2021_12_bd_28", "exam_id": "2021_12", "section": "dokkai", "jlpt_shift": 2, "mondai": 5,
        "mondai_label": "読解 問題5 (Đoạn trung 1)", "num": 28, "passage_id": "2021_12_dm5_1", "is_star": False,
        "sentence_html": "母が病院ではなく、スポーツクラブで元気になれたのはなぜか。",
        "sentence_tts": "母が病院ではなく、スポーツクラブで元気になれたのはなぜか。",
        "options": [
            "無理をせずにできるトレーニングを自分用に作ってもらったから",
            "若い人たちがいるところで運動したり、仲間と頑張ったりできたから",
            "たった1か月で効果が出るようなトレーニングを考えてもらったから",
            "元気な人と仲間になったり、若い人たちと同じ運動をしたりしたから"
        ], "answer": 1,
        "sentence_vi": "Vì sao mẹ không khỏe lên ở bệnh viện mà lại khỏe lên ở câu lạc bộ thể thao?",
        "explain_vi": "Đáp án 2 khớp chính xác đoạn cuối! Bẫy cực tinh vi: loại 1 vì CẢ bệnh viện lẫn CLB đều thiết kế bài tập riêng; loại 4 vì mẹ tập CÙNG ĐỊA ĐIỂM với người trẻ (同じ場所で運動) chứ không tập CÙNG BÀI TẬP với người trẻ (同じ運動)!",
        "evidence_jp": "元気な若い人たちと同じ場所で運動したり、同じくらいの年の仲間と一緒に頑張ったりすることは、スポーツクラブだからできたのである。",
        "star_order": None
    },
    {
        "id": "2021_12_bd_29", "exam_id": "2021_12", "section": "dokkai", "jlpt_shift": 2, "mondai": 5,
        "mondai_label": "読解 問題5 (Đoạn trung 1)", "num": 29, "passage_id": "2021_12_dm5_1", "is_star": False,
        "sentence_html": "この文章を書いた人は、スポーツクラブにはどんな特別な価値があると考えているか。",
        "sentence_tts": "スポーツクラブにはどんな特別な価値があると考えているか。",
        "options": [
            "自分は生きる価値のある人間だと気づかせてくれる。",
            "運動不足にならないようにしてくれる。",
            "けがを早く治す方法を考えてくれる。",
            "生きる力を引き出してくれる。"
        ], "answer": 3,
        "sentence_vi": "Tác giả bài viết cho rằng câu lạc bộ thể thao có giá trị đặc biệt gì?",
        "explain_vi": "Đáp án 4 khớp nguyên văn câu chốt: Khơi dậy sức sống/động lực sống (生きる力を引き出してくれる).",
        "evidence_jp": "そして、それが母の生きる力を引き出してくれたのだろう。スポーツクラブは運動するだけの場所ではない。それ以上の価値があるのだ。",
        "star_order": None
    },
    {
        "id": "2021_12_bd_30", "exam_id": "2021_12", "section": "dokkai", "jlpt_shift": 2, "mondai": 5,
        "mondai_label": "読解 問題5 (Đoạn trung 2)", "num": 30, "passage_id": "2021_12_dm5_2", "is_star": False,
        "sentence_html": "①<u class='q-target'>財布を開く</u>とあるが、どうしてですか。",
        "sentence_tts": "財布を開くとあるが、どうしてですか。",
        "options": [
            "まだ部屋に物を入れる場所があるから",
            "何も買わずに店を出るのは悪いと思うから",
            "安い値段がうれしくて買いたくなるから",
            "自分にとって必要な物に違いないと思うから"
        ], "answer": 2,
        "sentence_vi": "Vì sao người đó lại ①'mở ví' (mua đồ)?",
        "explain_vi": "Đáp án 3: Thấy biển sale/giảm giá thì vui mừng bước vào, thấy rẻ nên muốn mua luôn mà không suy nghĩ kỹ xem có cần không (loại 4 vì 必要かどうか深く考えず).",
        "evidence_jp": "「セール」や「割引」の看板を見つけると、喜んで、つい店に入ってしまう。そして、安くなっているのを見ると、それが必要かどうか深く考えず、①財布を開く。",
        "star_order": None
    },
    {
        "id": "2021_12_bd_31", "exam_id": "2021_12", "section": "dokkai", "jlpt_shift": 2, "mondai": 5,
        "mondai_label": "読解 問題5 (Đoạn trung 2)", "num": 31, "passage_id": "2021_12_dm5_2", "is_star": False,
        "sentence_html": "買い物についての②<u class='q-target'>アドバイス</u>の内容に合っているものは、どれか。",
        "sentence_tts": "買い物についてのアドバイスの内容に合っているものは、どれか。",
        "options": [
            "しまえる場所があったら、同じような物を持っていても、買えばいい。",
            "必要な物だと思ったら、いろいろなことを考えずに、すぐ買えばいい。",
            "必要かどうか、同じような物がないか、しまう場所があるかを、よく考える。",
            "似た物を持っていないか、しまう場所があるか、本当に安いかを、よく考える。"
        ], "answer": 2,
        "sentence_vi": "Ý nào đúng với nội dung ②'lời khuyên' về mua sắm?",
        "explain_vi": "Đáp án 3 chuẩn đúng 3 bước trong đoạn 2: Nghĩ kỹ (1) có cần không, (2) có đồ tương tự chưa, (3) có chỗ cất không. (Bẫy câu 4: thay 'có cần không' bằng 'có thật sự rẻ không').",
        "evidence_jp": "まず、必要かどうかを考える。…次に、同じような物を持っていないかどうかを考える。…最後に、それをしまう場所があるかどうかを考える。",
        "star_order": None
    },
    {
        "id": "2021_12_bd_32", "exam_id": "2021_12", "section": "dokkai", "jlpt_shift": 2, "mondai": 5,
        "mondai_label": "読解 問題5 (Đoạn trung 2)", "num": 32, "passage_id": "2021_12_dm5_2", "is_star": False,
        "sentence_html": "文章の最後の<u class='q-target'>（　　　）</u>に入れるのに、最もよいものはどれか。",
        "sentence_tts": "もうすぐ、あちこちのデパートでセールが始まるが、部屋の整理に悩んでいる人は、気をつけよう。",
        "options": [
            "部屋の整理が上手な人も、買い物を楽しもう",
            "買い物が好きな人は、値段をよく見て買おう",
            "安い物を買いたい人は、急いで店に行こう",
            "部屋の整理に悩んでいる人は、気をつけよう"
        ], "answer": 3,
        "sentence_vi": "Chọn câu phù hợp nhất điền vào chỗ trống cuối bài đọc:",
        "explain_vi": "Đáp án 4 chốt đúng thông điệp toàn bài: Sắp tới các trung tâm thương mại đồng loạt giảm giá, những ai đang đau đầu vì không dọn được phòng hãy cẩn thận nhé!",
        "evidence_jp": "もうすぐ、あちこちのデパートでセールが始まるが、［部屋の整理に悩んでいる人は、気をつけよう］。",
        "star_order": None
    },

    # ========== DOKKAI MONDAI 6 (33..36) ==========
    {
        "id": "2021_12_bd_33", "exam_id": "2021_12", "section": "dokkai", "jlpt_shift": 2, "mondai": 6,
        "mondai_label": "読解 問題6 (Đoạn dài)", "num": 33, "passage_id": "2021_12_dm6", "is_star": False,
        "sentence_html": "この手紙を書いた小川さんはどんな人か。",
        "sentence_tts": "この手紙を書いた小川さんはどんな人か。",
        "options": [
            "川上君、木下君と同じ会社で働いている人",
            "出張の時に京都で大山先生と会った人",
            "大山先生と同じ大学で教えていた人",
            "大学の時、大山先生に教えてもらった人"
        ], "answer": 3,
        "sentence_vi": "Anh Ogawa — người viết bức thư này — là người như thế nào?",
        "explain_vi": "Đáp án 4: Cựu sinh viên từng được thầy Oyama dạy thời đại học (kể về 卒業後10年のクラス会 với thầy và bạn đồng môn, nghe tin thầy nghỉ dạy đại học). Loại 1 (Kawakami làm giáo viên cấp 3, Kinoshita làm ngân hàng), loại 2 (gặp 2 bạn ở Kyoto chứ không gặp thầy).",
        "evidence_jp": "先生と最後にお会いしたのは、卒業後10年を記念して集まったクラス会の席でした。…もう大学をおやめになったと聞いて驚きました。",
        "star_order": None
    },
    {
        "id": "2021_12_bd_34", "exam_id": "2021_12", "section": "dokkai", "jlpt_shift": 2, "mondai": 6,
        "mondai_label": "読解 問題6 (Đoạn dài)", "num": 34, "passage_id": "2021_12_dm6", "is_star": False,
        "sentence_html": "小川さんが大山先生と最後に会ったのはいつか。",
        "sentence_tts": "小川さんが大山先生と最後に会ったのはいつか。",
        "options": ["4年前", "6年前", "10年前", "14年前"], "answer": 0,
        "sentence_vi": "Lần cuối cùng anh Ogawa gặp thầy Oyama là khi nào?",
        "explain_vi": "Đáp án 1 (4 năm trước)! Bẫy phép cộng số năm kinh điển: Buổi họp lớp là kỷ niệm 10 năm sau tốt nghiệp, và 'từ lúc đó đến nay đã trôi qua 4 năm rồi' (あれからもう4年も経ってしまいました) -> lần cuối gặp thầy là 4 năm trước (còn tốt nghiệp mới là 14 năm trước!).",
        "evidence_jp": "先生と最後にお会いしたのは、卒業後10年を記念して集まったクラス会の席でした。…あれからもう4年も経ってしまいました。",
        "star_order": None
    },
    {
        "id": "2021_12_bd_35", "exam_id": "2021_12", "section": "dokkai", "jlpt_shift": 2, "mondai": 6,
        "mondai_label": "読解 問題6 (Đoạn dài)", "num": 35, "passage_id": "2021_12_dm6", "is_star": False,
        "sentence_html": "大山先生は今、どうしているか。",
        "sentence_tts": "大山先生は今、どうしているか。",
        "options": [
            "相変わらず京都の大学で教えている。",
            "出張で国内外へ行くような生活をしている。",
            "仕事をやめて奥さんと生活を楽しんでいる。",
            "体を壊して自宅でゆっくりと過ごしている。"
        ], "answer": 2,
        "sentence_vi": "Hiện tại thầy Oyama đang sống thế nào?",
        "explain_vi": "Đáp án 3: Đã nghỉ dạy ở đại học và vẫn khỏe mạnh, tận hưởng cuộc sống tự do thư thái bên vợ. Loại 2 (đó là cuộc sống của Ogawa), loại 4 (thầy vẫn khỏe 相変わらずお元気).",
        "evidence_jp": "もう大学をおやめになったと聞いて驚きました。しかし、相変わらずお元気で、奥様との自由でゆっくりした生活を楽しんでいらっしゃるそうで、安心いたしました。",
        "star_order": None
    },
    {
        "id": "2021_12_bd_36", "exam_id": "2021_12", "section": "dokkai", "jlpt_shift": 2, "mondai": 6,
        "mondai_label": "読解 問題6 (Đoạn dài)", "num": 36, "passage_id": "2021_12_dm6", "is_star": False,
        "sentence_html": "小川さんが手紙といっしょに送った写真には、小川さんのほかにだれが写っているか。",
        "sentence_tts": "手紙といっしょに送った写真には、小川さんのほかにだれが写っているか。",
        "options": [
            "小川さんの家族",
            "川上君と木下君",
            "大山先生と奥さん",
            "クラス会に集まった人たち"
        ], "answer": 1,
        "sentence_vi": "Trong bức ảnh anh Ogawa gửi kèm thư, ngoài anh Ogawa ra còn có ai trong ảnh?",
        "explain_vi": "Đáp án 2: Ảnh chụp lúc gặp 2 người bạn (Kawakami và Kinoshita) ở Kyoto.",
        "evidence_jp": "先日京都に参りましたときに、高校の先生をしている川上君、マツダ銀行の木下君と会い…／京都で二人と会った時の写真をお送りいたします。",
        "star_order": None
    },

    # ========== DOKKAI MONDAI 7 (37..38) ==========
    {
        "id": "2021_12_bd_37", "exam_id": "2021_12", "section": "dokkai", "jlpt_shift": 2, "mondai": 7,
        "mondai_label": "読解 問題7 (Tìm kiếm thông tin)", "num": 37, "passage_id": "2021_12_dm7", "is_star": False,
        "sentence_html": "コウさんは火曜日の19時ごろ、深川町図書館に本を返しに行こうと思っている。コウさんはどうしなければならないか。",
        "sentence_tts": "コウさんはどうしなければならないか。",
        "options": [
            "窓口に返す。",
            "ブックポストに返す。",
            "窓口かブックポストに返す。",
            "返せないので、違う日に行く。"
        ], "answer": 1,
        "sentence_vi": "Bạn Ko định đi trả SÁCH vào khoảng 19h Thứ Ba ở Thư viện Fukagawacho. Bạn ấy phải làm thế nào?",
        "explain_vi": "Đáp án 2! Tra 2 bảng ở Thông báo A: (1) Thư viện Fukagawacho chỉ mở 9h–18h (nghỉ Thứ Hai) -> 19h Thứ Ba là ĐÃ ĐÓNG CỬA (閉館中); (2) Quy định trả SÁCH/TẠP CHÍ lúc đóng cửa: bỏ vào hộp trả sách (ブックポスト) ở lối vào!",
        "evidence_jp": "深川町図書館：開館時間9時〜18時（19時は閉館中）｜本・雑誌を返す・閉館中：入り口にあるブックポストに入れてください。",
        "star_order": None
    },
    {
        "id": "2021_12_bd_38", "exam_id": "2021_12", "section": "dokkai", "jlpt_shift": 2, "mondai": 7,
        "mondai_label": "読解 問題7 (Tìm kiếm thông tin)", "num": 38, "passage_id": "2021_12_dm7", "is_star": False,
        "sentence_html": "ビルさんは小学生の息子と一緒に参加できる読書会に行きたいと思っている。電話で申し込みをする場合、どうしなければならないか。",
        "sentence_tts": "電話で申し込みをする場合、どうしなければならないか。",
        "options": [
            "4月9日までの月曜以外の日に、大山町図書館に電話する。",
            "4月9日までの火曜以外の日に、大山町図書館に電話する。",
            "4月12日までの月曜以外の日に、大山町図書館に電話する。",
            "4月16日までの火曜以外の日に、南田町図書館に電話する。"
        ], "answer": 0,
        "sentence_vi": "Anh Bill muốn dự buổi đọc sách cùng con trai học tiểu học. Nếu đăng ký qua điện thoại thì phải làm thế nào?",
        "explain_vi": "Đáp án 1! Kiểm tra 3 điều kiện kết hợp A + B: (1) Con tiểu học -> chỉ chọn 大山町図書館 (親子での参加も可能; còn Minamidacho yêu cầu từ sinh viên đại học trở lên); (2) Ngày tổ chức 4/12, đăng ký trước 3 ngày -> hạn chót 4/9; (3) Tra Bảng A: 大山町図書館 nghỉ Thứ Hai (毎週月曜) -> gọi các ngày TRỪ Thứ Hai!",
        "evidence_jp": "大山町図書館：4月12日（土）親子での参加も可能｜参加希望日の3日前（4月9日）までに電話｜休館日：毎週月曜",
        "star_order": None
    }
]

def validate_and_write():
    assert len(QUESTIONS) == 73, f"Expected 73, got {len(QUESTIONS)}"
    ids = set()
    for q in QUESTIONS:
        assert q["id"] not in ids, f"Duplicate id: {q['id']}"
        ids.add(q["id"])
        assert len(q["options"]) == 4 and len(set(q["options"])) == 4, f"Bad options on {q['id']}: {q['options']}"
        assert 0 <= q["answer"] <= 3, f"Bad answer on {q['id']}"
        if q["passage_id"]:
            assert q["passage_id"] in PASSAGES, f"Missing passage {q['passage_id']}"
        if q["is_star"]:
            assert q["star_order"], f"Missing star_order on {q['id']}"

    exam_obj = {
        "exam_id": "2021_12",
        "label": "JLPT N3 — Tháng 12/2021",
        "short_label": "T12/2021",
        "wave": 2,
        "counts": {
            "moji_goi": sum(1 for q in QUESTIONS if q["section"] == "moji_goi"),
            "bunpou": sum(1 for q in QUESTIONS if q["section"] == "bunpou"),
            "dokkai": sum(1 for q in QUESTIONS if q["section"] == "dokkai"),
            "total": len(QUESTIONS)
        },
        "passages": PASSAGES,
        "questions": QUESTIONS
    }

    js = (
        "// Verified JLPT N3 Official Past Exam: December 2021 (Moji-Goi + Bunpou + Dokkai, No Listening)\n"
        "window.JLPT_PAST_EXAMS = window.JLPT_PAST_EXAMS || [];\n"
        f"window.JLPT_PAST_EXAMS.push({json.dumps(exam_obj, ensure_ascii=False, indent=2)});\n"
    )
    with open(OUT_PATH, "w", encoding="utf-8") as f:
        f.write(js)
    print(f"SUCCESS! Wrote {OUT_PATH} | Counts: {exam_obj['counts']} | Passages: {len(PASSAGES)}")

if __name__ == "__main__":
    validate_and_write()
