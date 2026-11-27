# -*- coding: utf-8 -*-
import json
import os
import sys

sys.stdout.reconfigure(encoding="utf-8")

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_JS = os.path.join(BASE_DIR, "data", "hiragana_35_data.js")
MERGED_26 = r"C:\Users\duong\.gemini\antigravity\brain\1d1c2086-9e3f-4b92-b196-5e7109baee86\scratch\past_mojigoi\merged_26_exams.json"

# 35 High-Frequency JLPT N3 Hiragana / Onomatopoeia / Adverbs / Native Words (>=2x across 26 official exams 2010-2026)
# Tuple format:
# (stt, lemma, display_in_sentence, meaning_vi, syn_or_kanji, category, sentence_tpl, distractors_3, distractor_meanings_3, sentence_vi, nuance_note)
# Part 1: STT 1..12 (Top 12 appearing 3x-4x)
# Part 2: STT 13..35 (23 words appearing 2x)

HIRAGANA_35 = [
    # ================= BÀI 1: TOP 12 SIÊU TỦ (RA 3–4 LẦN) =================
    (1, "うっかり", "うっかり", "Lơ đễnh, vô ý, lỡ quên mất", "不注意で・つい", "Phó từ & Thời gian",
     "急いでいたので、___ 違うバスに乗ってしまった。",
     ["ぴったり", "ぐっすり", "がっかり"],
     ["vừa khít / chính xác", "ngủ say giấc", "thất vọng, chán nản"],
     "Vì đang vội nên tôi lơ đễnh lên nhầm mất chuyến xe buýt.",
     "🔥 TRÙM 4 LẦN M3 (2010/07, 2016/07, 2018/12, 2023/07)! Luôn đi với lỗi vô ý: うっかり忘れる / うっかり間違える / うっかり違うバスに乗る."),

    (2, "きつい", "きつい", "Nặng nhọc, vất vả; chật (áo/giày); gay gắt", "大変だ・狭い", "Động từ & Tính từ thuần Nhật",
     "今回の仕事は毎日残業があって、とても ___。",
     ["ゆるい", "だるい", "うまい"],
     ["lỏng lẻo, rộng", "uể oải, rã rời", "giỏi, ngon"],
     "Công việc lần này ngày nào cũng tăng ca nên rất vất vả.",
     "🔥 TRÙM 4 LẦN (M3 2018/07 + M4 2010/07, 2014/12, 2021/12)! Nghĩa đồng nghĩa tủ M4: きつい ＝ 大変だ. Trái nghĩa ゆるい(lỏng/nhẹ)."),

    (3, "おかしい", "おかしい", "Kỳ lạ, bất thường; buồn cười", "変だ・面白い", "Động từ & Tính từ thuần Nhật",
     "さっきからパソコンの調子が ___ ので、見てもらった。",
     ["くやしい", "まぶしい", "おしい"],
     ["cay cú, ấm ức", "chói mắt", "đáng tiếc"],
     "Từ nãy giờ máy tính có biểu hiện kỳ lạ nên tôi đã nhờ xem hộ.",
     "🔥 Ra 3 lần (M3 2013/07 + M4 2014/07, 2019/07)! Dạng bổ nghĩa danh từ hay ra M4: おかしな ＝ 変な(へんな: kỳ lạ)."),

    (4, "くたびれる", "くたびれた", "Mệt mỏi, kiệt sức rã rời", "疲れた (くたびれる)", "Động từ & Tính từ thuần Nhật",
     "一日中歩き回ったので、今日はとても ___。",
     ["あわてた", "あきれた", "おぼれた"],
     ["vội vàng, cuống cuồng", "ngán ngẩm, cạn lời", "chết đuối, ngập chìm"],
     "Đi bộ suốt cả ngày nên hôm nay tôi mệt rã rời.",
     "🔥 Ra 3 lần M4 (2010/07, 2014/12, 2015/07)! Đồng nghĩa tủ 100% ở M4: くたびれた ＝ 疲れた(つかれた)."),

    (5, "さっき", "さっき", "Lúc nãy, vừa mới đây", "少し前に", "Phó từ & Thời gian",
     "山田さんなら、___ までここにいましたよ。",
     ["さっそく", "そろそろ", "なるべく"],
     ["ngay lập tức", "sắp sửa, đến lúc", "cố gắng hết mức có thể"],
     "Nếu là anh Yamada thì lúc nãy vẫn còn ở đây đấy.",
     "🔥 Ra 3 lần M4 (2011/12, 2014/07, T12/2025)! Cả 3 lần đều hỏi đúng cặp đồng nghĩa: さっき ＝ 少し前に(すこしまえに)!"),

    (6, "しっかり", "しっかり", "Chắc chắn, chặt chẽ, kỹ lưỡng, vững vàng", "きちんと・強く", "Từ láy tượng thanh/hình",
     "危ないですから、自転車のハンドルを ___ 握ってください。",
     ["ぴったり", "うっかり", "はっきり"],
     ["vừa khít", "lơ đễnh, lỡ quên", "rõ ràng"],
     "Nguy hiểm lắm nên hãy nắm thật chặt tay lái xe đạp nhé.",
     "🔥 Ra 3 lần M3 (2011/12, 2018/07, T7/2026)! Hay đi với: しっかり握る(nắm chặt), しっかり勉強する(học kỹ), しっかり休む(nghỉ cho khỏe)."),

    (7, "しゃべる", "しゃべって", "Trò chuyện, nói chuyện phiếm, tán gẫu", "話す (しゃべる)", "Động từ & Tính từ thuần Nhật",
     "図書館の中では、大きな声で ___ はいけません。",
     ["どなって", "だまって", "ほえて"],
     ["quát mắng, hét to", "im lặng", "sủa (chó)"],
     "Trong thư viện không được nói chuyện to tiếng.",
     "🔥 Ra 3 lần M4 (2013/07, 2018/07, T7/2026)! Cả 3 lần M4 đều đổi sang 話す(はなす)."),

    (8, "そっくり", "そっくり", "Giống y hệt nhau (như đúc)", "とても似ている", "Từ láy tượng thanh/hình",
     "弟は父親に顔も声も ___ だ。",
     ["ぴったり", "ぐっすり", "うっかり"],
     ["vừa khít", "ngủ say giấc", "lơ đễnh"],
     "Em trai tôi giống bố y như đúc từ khuôn mặt đến giọng nói.",
     "🔥 Ra 3 lần (M5 2010/07 + M3 2015/07, 2017/12)! Cấu trúc tủ: AはBにそっくりだ (A giống B y hệt). Không dùng cho đồ vật giống 1 phần nhỏ."),

    (9, "だるい", "だるい", "Uể oải, rã rời, nặng nề (cơ thể khi ốm/mệt)", "体が重くて疲れる", "Động từ & Tính từ thuần Nhật",
     "熱があるせいか、体が ___ くて起きられない。",
     ["きつ", "ぬる", "ゆる"],
     ["vất vả / chật", "âm ấm (nước)", "lỏng lẻo"],
     "Chắc do bị sốt nên người tôi uể oải không dậy nổi.",
     "🔥 Ra 3 lần (M5 2013/07, 2021/12 + M3 2023/12)! CHỈ dùng cho cảm giác thể chất của cơ thể/chân tay (体がだるい / 足がだるい), không dùng cho bài tập hay tâm trạng!"),

    (10, "どきどき", "どきどき", "Hồi hộp, tim đập thình thịch (lo lắng/phấn khích)", "心臓が強く鳴る", "Từ láy tượng thanh/hình",
     "大勢の人の前でスピーチをしたとき、緊張で胸が ___ した。",
     ["ふらふら", "ぺこぺこ", "ずきずき"],
     ["choáng váng, lảo đảo", "đói meo", "đau nhói theo nhịp"],
     "Khi phát biểu trước đám đông, tim tôi đập thình thịch vì căng thẳng.",
     "🔥 Ra 3 lần (M5 2017/07 + M3 2019/12, 2022/12)! Luôn gắn với nhịp tim/lồng ngực (胸がどきどきする). Không dùng cho tiếng đồng hồ hay bảng hiệu rung!"),

    (11, "どなる", "どならないで", "Quát mắng, gào thét to tiếng", "大声で怒る (怒鳴る)", "Động từ & Tính từ thuần Nhật",
     "そんなに大きな声で ___ ください。静かに話しましょう。",
     ["しゃべらないで", "だまらないで", "ほえないで"],
     ["đừng nói chuyện", "đừng im lặng", "đừng sủa (dùng cho chó)"],
     "Xin đừng quát mắng to tiếng như vậy. Hãy nói chuyện bình tĩnh nào.",
     "🔥 Ra 3 lần (M5 2014/07 + M4 2017/12, 2023/07)! Cặp đồng nghĩa tủ M4: どなる ＝ 大声で怒る(おおごえでおこる)."),

    (12, "まぶしい", "まぶしくて", "Chói mắt, sáng chói quá mức", "明るすぎる (眩しい)", "Động từ & Tính từ thuần Nhật",
     "暗い所から急に明るい所に出たので、___ 目を閉じてしまった。",
     ["きびしくて", "めずらしくて", "あたたかくて"],
     ["nghiêm khắc, khắc nghiệt", "hiếm có, lạ", "ấm áp"],
     "Từ chỗ tối bước ra chỗ sáng đột ngột nên chói mắt quá tôi nhắm tịt mắt lại.",
     "🔥 Ra 3 lần (M4 2012/12, 2017/07 + M3 T7/2026)! Cặp đồng nghĩa tủ M4: まぶしい ＝ 明るすぎる (ánh nắng/đèn xe quá chói)."),

    # ================= BÀI 2: 23 TỪ LẶP ĐỀ THẬT (RA 2 LẦN) =================
    (13, "うわさ", "うわさ", "Tin đồn, lời đồn đại", "噂・世間の話", "Động từ & Tính từ thuần Nhật",
     "高田さんが引っ越すという ___ を聞いたが、本当かどうか気になる。",
     ["しみ", "くせ", "わけ"],
     ["vết ố bẩn", "thói quen/tật", "lý do"],
     "Tôi nghe tin đồn anh Takada sắp chuyển nhà, không biết có thật không.",
     "🔥 Ra 2 lần M3 (2013/07, 2016/12)! Cụm cố định: うわさを聞く (nghe đồn), うわさが広がる (tin đồn lan rộng)."),

    (14, "かれる", "かれて", "Héo úa, khô héo (hoa, cây cối)", "枯れる", "Động từ & Tính từ thuần Nhật",
     "一週間以上も水をやるのを忘れたので、庭の花が ___ しまった。",
     ["かわいて", "とけて", "われて"],
     ["khô ráo (áo/họng)", "tan chảy (tuyết/kem)", "bị vỡ"],
     "Vì quên tưới nước hơn một tuần nên hoa trong vườn đã héo úa mất rồi.",
     "🔥 Ra 2 lần (M3 2012/12 + M5 2017/07)! CHỈ dùng cho thực vật (hoa/cây) héo chết vì thiếu nước — KHÔNG dùng cho thịt cháy, tuyết tan hay máy hỏng!"),

    (15, "かわく", "かわいた", "Khô (quần áo, đất, tóc); khát (cổ họng)", "乾く・渇く", "Động từ & Tính từ thuần Nhật",
     "今日はよく晴れて風もあるので、洗濯物がすぐ ___。",
     ["かれた", "ぬれた", "ひえた"],
     ["đã héo (hoa/cây)", "đã bị ướt", "đã nguội lạnh"],
     "Hôm nay trời nắng đẹp lại có gió nên đồ giặt khô ngay lập tức.",
     "🔥 Ra 2 lần M3 (2013/07, 2022/07)! 2 nghĩa hay thi: 洗濯物が乾く (quần áo khô) và のどが渇く (khát nước)."),

    (16, "がっかり", "がっかり", "Thất vọng, hụt hẫng, chán nản", "残念に思う", "Từ láy tượng thanh/hình",
     "楽しみにしていたコンサートが中止になって、とても ___ した。",
     ["ぴったり", "うっかり", "すっきり"],
     ["vừa khít", "lơ đễnh", "sảng khoái, nhẹ nhõm"],
     "Buổi hòa nhạc tôi mong đợi bị hủy mất nên tôi thất vọng vô cùng.",
     "🔥 Ra 2 lần (M3 2012/12 + M4 2016/12)! Cặp đồng nghĩa M4: がっかりする ＝ 残念だと思う (thấy đáng tiếc/thất vọng)."),

    (17, "くやしい", "くやしかった", "Cay cú, ấm ức, tiếc nuối (vì thua/thất bại)", "悔しい", "Động từ & Tính từ thuần Nhật",
     "あともう少しで優勝できたのに、1点差で負けて本当に ___。",
     ["なつかしかった", "うらやましかった", "おとなしかった"],
     ["hoài niệm, nhớ nhung", "ghen tị, ngưỡng mộ", "hiền lành, ít nói"],
     "Chỉ còn chút nữa là vô địch mà lại thua sát nút 1 điểm, thật sự quá cay cú/tiếc nuối.",
     "🔥 Ra 2 lần M3 (2014/12, 2022/07)! Dùng khi thua trận, trượt thi hoặc không làm được điều mình muốn -> cảm giác cay cú, hậm hực muốn phục thù."),

    (18, "さっそく", "さっそく", "Ngay lập tức (làm ngay việc vừa nhận/nghe)", "すぐ・直ちに", "Phó từ & Thời gian",
     "友達から本を借りたので、家に帰って ___ 読み始めた。",
     ["さっき", "ずっと", "ようやく"],
     ["lúc nãy", "suốt, mãi", "cuối cùng thì cũng"],
     "Vừa mượn được sách của bạn nên về đến nhà tôi bắt đầu đọc ngay lập tức.",
     "🔥 Ra 2 lần M3 (2011/12, 2019/07)! Mang sắc thái hào hứng, làm ngay không chần chừ sau khi nhận quà/thông tin/đề nghị."),

    (19, "しまう", "しまって", "Cất đi, dọn vào (tủ, cặp, ngăn kéo)", "片付ける・収める", "Động từ & Tính từ thuần Nhật",
     "テストを始めますから、教科書をかばんの中に ___ ください。",
     ["ためて", "とじて", "たたんで"],
     ["tích trữ, để dành", "đóng/khép lại (mắt/sách)", "gấp lại (quần áo)"],
     "Sắp bắt đầu bài kiểm tra nên hãy cất sách giáo khoa vào trong cặp đi.",
     "🔥 Ra 2 lần M3 (2010/07, 2019/07)! Đừng nhầm với trợ động từ 〜てしまう: đứng 1 mình しまう(他動詞) nghĩa là 'cất đồ vào chỗ cũ'!"),

    (20, "しみ", "しみ", "Vết ố, vết bẩn (cà phê, nước tương trên áo)", "染み・汚れ", "Động từ & Tính từ thuần Nhật",
     "白いシャツにコーヒーをこぼして、___ がついてしまった。",
     ["うわさ", "くせ", "きず"],
     ["tin đồn", "thói quen", "vết thương / vết xước"],
     "Làm đổ cà phê lên áo sơ mi trắng nên dính mất vết ố.",
     "🔥 Ra 2 lần M3 (2017/12, 2022/07)! Cụm tủ: しみがつく (dính vết ố), しみが落ちない (vết ố giặt không ra)."),

    (21, "ずいぶん", "ずいぶん", "Khá là, nhiều lắm, vượt mức tưởng tượng", "非常に・かなり", "Phó từ & Thời gian",
     "久しぶりに会ったら、妹の子どもが ___ 大きくなっていた。",
     ["なるべく", "せっかく", "まったく"],
     ["cố gắng hết mức", "cất công", "hoàn toàn (đi với phủ định)"],
     "Lâu ngày gặp lại thấy con của em gái đã lớn lên khá nhiều rồi.",
     "🔥 Ra 2 lần (M3 2017/12 + M4 2022/12)! Đồng nghĩa tủ M4: ずいぶん ＝ 非常に(ひじょうに) / かなり."),

    (22, "そっと", "そっと", "Nhẹ nhàng, khẽ khàng, rón rén (không gây tiếng động)", "静かに・優しく", "Từ láy tượng thanh/hình",
     "赤ちゃんが寝ているので、音を立てないようにドアを ___ 閉めた。",
     ["がらがら", "とんとん", "ぐっすり"],
     ["vắng tanh / lọc xọc", "gõ cốc cốc", "ngủ say"],
     "Em bé đang ngủ nên tôi khẽ khàng đóng cửa để không gây tiếng động.",
     "🔥 Ra 2 lần (M4 2012/12 + M3 2017/07)! Đồng nghĩa tủ M4: そっと ＝ 静かに(しずかに). Luôn đi với đóng cửa/bước đi/đặt xuống thật nhẹ."),

    (23, "たしかめる", "たしかめて", "Xác nhận lại, kiểm tra lại cho chắc chắn", "確かめる・チェックする", "Động từ & Tính từ thuần Nhật",
     "申込書に間違いがないか、よく ___ から受付に出した。",
     ["くりかえして", "みつめて", "あわてて"],
     ["lặp đi lặp lại", "nhìn chằm chằm", "vội vã"],
     "Tôi kiểm tra lại thật kỹ xem đơn đăng ký có sai sót không rồi mới nộp ở quầy.",
     "🔥 Ra 2 lần (M4 2013/07 + M3 2016/12)! Đồng nghĩa M4: たしかめる ＝ チェックする / 確認する."),

    (24, "たつ", "たちました", "Trôi qua (thời gian: năm, tháng, giờ)", "経つ・過ぎる", "Động từ & Tính từ thuần Nhật",
     "日本に来てから、あっという間に3年が ___。",
     ["すぎました", "あまりました", "おわりました"],
     ["đi quá / quá mức (dùng với を/が)", "thừa ra", "kết thúc"],
     "Kể từ khi đến Nhật, thoắt cái đã 3 năm trôi qua.",
     "🔥 Ra 2 lần (M3 2013/12 + M4 2014/07)! Đồng nghĩa M4: 時間がたつ ＝ 時間が過ぎる. Trợ từ chuẩn: 3年がたつ."),

    (25, "だまる", "だまって", "Im lặng, nín thinh, không nói gì", "黙る・何も話さない", "Động từ & Tính từ thuần Nhật",
     "何を聞いても彼は ___ いて、何も答えなかった。",
     ["しゃべって", "どなって", "ほえて"],
     ["nói chuyện", "quát mắng", "sủa"],
     "Hỏi gì anh ấy cũng cứ im lặng không trả lời câu nào.",
     "🔥 Ra 2 lần M4 (2015/07, 2023/12)! Cả 2 lần M4 đều hỏi: だまって ＝ 何も言わずに / 話さないで."),

    (26, "なるべく", "なるべく", "Cố gắng hết sức có thể, càng ... càng tốt", "できるだけ", "Phó từ & Thời gian",
     "健康のために、___ 毎日歩くようにしています。",
     ["さっき", "さっそく", "あいかわらず"],
     ["lúc nãy", "ngay lập tức", "vẫn như mọi khi"],
     "Vì sức khỏe nên tôi cố gắng hết mức để đi bộ mỗi ngày.",
     "🔥 Ra 2 lần M3 (2013/07, 2021/12)! Đồng nghĩa chuẩn: なるべく ＝ できるだけ. Hay đi với 〜ようにする / 〜してください."),

    (27, "にぎる", "にぎった", "Nắm chặt (tay, tay lái, nắm cơm)", "握る", "Động từ & Tính từ thuần Nhật",
     "お祭りで弟が迷子にならないように、弟の手をしっかりと ___。",
     ["たたいた", "ふいた", "むいた"],
     ["vỗ, đập", "lau chùi", "gọt vỏ"],
     "Để em trai không bị lạc ở lễ hội, tôi đã nắm thật chặt tay em.",
     "🔥 Ra 2 lần M5 (2013/07, T12/2025)! CHỈ dùng cho bàn tay nắm lấy vật nhỏ/tay người/tay lái (手を握る, ハンドルを握る, おにぎりを握る) — KHÔNG dùng cho 'khiêng tủ nặng' hay 'bế em bé'!"),

    (28, "ぴったり", "ぴったり", "Vừa khít, vừa vặn; trùng khớp chính xác", "ちょうど合う", "Từ láy tượng thanh/hình",
     "試着してみたら、サイズも色も私に ___ だった。",
     ["うっかり", "がっかり", "ふらふら"],
     ["lơ đễnh", "thất vọng", "choáng váng"],
     "Mặc thử thì thấy cả kích cỡ lẫn màu sắc đều vừa vặn hợp với tôi.",
     "🔥 Ra 2 lần M3 (2015/12, 2022/12)! 2 cách dùng tủ: サイズがぴったり (size vừa khít) và 10時ぴったり (đúng 10 giờ tròn)."),

    (29, "ふらふら", "ふらふら", "Choáng váng, loạng choạng, lảo đảo (do ốm/sốt/say)", "めまいがして歩けない", "Từ láy tượng thanh/hình",
     "風邪で熱があるので、ベッドから起きて歩くと、体が ___ します。",
     ["はらはら", "きょろきょろ", "うろうろ"],
     ["thấp thỏm lo âu", "ngó nghiêng nhìn quanh", "đi loanh quanh không mục đích"],
     "Vì cảm cúm bị sốt nên bước xuống giường đi là người cứ loạng choạng, choáng váng.",
     "🔥 Ra 2 lần M3 (2014/12, T7/2026)! Cực hay đi với 頭がふらふらする / 体がふらふらする (sốt, thiếu ngủ, say nắng)."),

    (30, "ぺこぺこ", "ぺこぺこ", "Đói meo, bụng đói cồn cào; khúm núm cúi đầu", "おなかがすいている", "Từ láy tượng thanh/hình",
     "時間がなくて朝も昼も食べられなかったので、おなかが ___ だ。",
     ["ぺらぺら", "からから", "どきどき"],
     ["nói ngoại ngữ lưu loát", "khát khô cổ", "tim đập thình thịch"],
     "Vì không có thời gian ăn cả sáng lẫn trưa nên bụng tôi đói meo.",
     "🔥 Ra 2 lần (M4 2019/12 + M3 T12/2025)! Phân biệt cặp dễ lừa: おなかがぺこぺこ (đói meo) vs のどがからから (khát khô cổ) vs 英語がぺらぺら (nói tiếng Anh lưu loát)!"),

    (31, "ほえる", "ほえる", "Sủa (chó), gầm (sư tử, thú dữ)", "吠える", "Động từ & Tính từ thuần Nhật",
     "夜になると、隣の家の犬が ___ ので、とてもうるさい。",
     ["なく", "どなる", "しゃべる"],
     ["khóc / chim kêu, mèo kêu", "quát mắng (người)", "trò chuyện (người)"],
     "Cứ đến tối là con chó nhà hàng xóm lại sủa nên rất ồn.",
     "🔥 Ra 2 lần (M5 2019/12 + M3 2022/12)! CHỈ dùng cho chó sủa / thú dữ gầm — KHÔNG dùng cho chim hót (鳴く), đồng hồ kêu (鳴る) hay nhạc vang!"),

    (32, "むく", "むいて", "Gọt vỏ, bóc vỏ (táo, cam, khoai tây)", "剥く", "Động từ & Tính từ thuần Nhật",
     "りんごの皮を ___ から、食べやすい大きさに切った。",
     ["ふいて", "しぼって", "まぜて"],
     ["lau chùi", "vắt (khăn/chanh)", "trộn đều"],
     "Sau khi gọt vỏ táo xong, tôi cắt thành miếng vừa ăn.",
     "🔥 Ra 2 lần M3 (2012/12, 2022/07)! Cụm cố định: 皮をむく (gọt/bóc vỏ). Đừng nhầm với 向く(quay mặt về phía / phù hợp)."),

    (33, "めんどうくさい", "めんどうくさい", "Phiền phức, rắc rối, lười/ngại làm", "面倒くさい・手間がかかる", "Động từ & Tính từ thuần Nhật",
     "雨の日は傘を持って歩くのが ___ ので、外に出たくない。",
     ["なつかしい", "うらやましい", "はずかしい"],
     ["hoài niệm", "ghen tị", "xấu hổ"],
     "Ngày mưa cầm ô đi bộ thật phiền phức nên tôi không muốn ra ngoài.",
     "🔥 Ra 2 lần M3 (2019/12, 2023/07)! Rất hay xuất hiện trong cả Đọc hiểu M3/M4 để diễn tả việc lặt vặt làm mình ngại làm."),

    (34, "らく", "らくな", "Nhẹ nhàng, dễ dàng, thoải mái (ít vất vả)", "楽な・簡単な", "Động từ & Tính từ thuần Nhật",
     "思っていたより ___ アルバイトだった。",
     ["きつい", "だるい", "おかしい"],
     ["vất vả, nặng nhọc", "uể oải", "kỳ lạ"],
     "Đó là công việc làm thêm nhẹ nhàng hơn tôi tưởng.",
     "🔥 Ra 2 lần M4 (2011/12, T7/2026)! Cặp đồng nghĩa tủ M4: らくな ＝ かんたんな(簡単な). Trái nghĩa với きつい(vất vả)!"),

    (35, "わけ", "わけ", "Lý do, nguyên do, lẽ đương nhiên", "訳・理由", "Động từ & Tính từ thuần Nhật",
     "田中さんが遅れている ___ を知っていますか。",
     ["うわさ", "くせ", "しみ"],
     ["tin đồn", "thói quen", "vết ố"],
     "Bạn có biết lý do tại sao anh Tanaka đến muộn không?",
     "🔥 Ra 2 lần M4 (2011/07, 2013/12)! Cả 2 lần M4 đều hỏi đúng cặp: わけ ＝ 理由(りゆう: lý do)."),
]


def main():
    assert len(HIRAGANA_35) == 35, f"Expected 35 items, got {len(HIRAGANA_35)}"

    # Load 26 real exams occurrences
    all_ex = json.load(open(MERGED_26, encoding="utf-8"))["exams"]
    hira_occ = {}
    for ex in sorted(all_ex.keys()):
        yr, mo = ex.split("_")
        short = f"T{int(mo)}/{yr}"
        for q in all_ex[ex]:
            if q["script"] == "hiragana":
                lem = {"おかしな": "おかしい"}.get(q["lemma"].strip(), q["lemma"].strip())
                hira_occ.setdefault(lem, []).append(f"{short}(M{q['m']})")

    words = [r[1] for r in HIRAGANA_35]
    assert len(set(words)) == 35, "Duplicate hiragana lemma!"

    list_js = []
    quiz_js = []

    for row in HIRAGANA_35:
        stt, lemma, disp, meaning_vi, syn_k, cat, tpl, dist3, dist_vi3, sent_vi, note = row
        assert "___" in tpl, f"#{stt} {lemma}: missing ___"
        assert len(dist3) == 3 and len(dist_vi3) == 3 and disp not in dist3 and len(set(dist3)) == 3, f"#{stt} {lemma}: bad distractors"

        part = 1 if stt <= 12 else 2
        num_in_part = stt if stt <= 12 else (stt - 12)
        ans_idx = (stt * 3 + 2) % 4

        options = list(dist3)
        options.insert(ans_idx, disp)
        options_vi = list(dist_vi3)
        options_vi.insert(ans_idx, f"{meaning_vi} (ĐÚNG)")

        occ = hira_occ.get(lemma, [])
        freq_count = len(occ)
        freq_exams = ", ".join(occ)
        freq_badge = f"🔥 Đề thật {freq_count}x ({freq_exams})"

        qid = f"hira_p{part}_q{num_in_part}"
        s_html = tpl.replace("___", '<u class="q-target">（　　　）</u>')
        s_rev = tpl.replace("___", f'<u class="q-target">{disp}</u>')
        s_tts = tpl.replace("___", disp).replace(" ", "")

        list_js.append({
            "id": f"hpair_{stt}",
            "quiz_id": qid,
            "stt": stt,
            "word": lemma,
            "meaning_vi": meaning_vi,
            "syn_jp": syn_k,
            "category": cat,
            "nuance_note": note,
            "freq_count": freq_count,
            "freq_badge": freq_badge,
            "freq_exams": freq_exams,
        })

        quiz_js.append({
            "id": qid,
            "stt": stt,
            "part": part,
            "num": num_in_part,
            "word": lemma,
            "display_word": disp,
            "meaning_vi": meaning_vi,
            "syn_jp": syn_k,
            "category": cat,
            "sentence_html": s_html,
            "sentence_reverse_html": s_rev,
            "sentence_tts": s_tts,
            "options": options,
            "options_vi": options_vi,
            "answer": ans_idx,
            "sentence_vi": sent_vi,
            "nuance_note": note,
            "freq_count": freq_count,
            "freq_badge": freq_badge,
            "freq_exams": freq_exams,
        })

    with open(OUT_JS, "w", encoding="utf-8") as f:
        f.write("// Verified JLPT N3 35 High-Frequency Hiragana, Adverbs & Onomatopoeia Database (2010-2026, >=2x)\n")
        f.write("const HIRAGANA_35_LIST = " + json.dumps(list_js, ensure_ascii=False, indent=2) + ";\n\n")
        f.write("const HIRAGANA_35_DATA = " + json.dumps(quiz_js, ensure_ascii=False, indent=2) + ";\n")

    p1 = sum(1 for q in quiz_js if q["part"] == 1)
    p2 = sum(1 for q in quiz_js if q["part"] == 2)
    cats = sorted(set(x["category"] for x in list_js))
    print(f"SUCCESS! Built {OUT_JS}")
    print(f"Words: {len(list_js)} | Quizzes: {len(quiz_js)} (Part 1 Top 3-4x: {p1}, Part 2 2x: {p2}) | Categories: {cats}")


if __name__ == "__main__":
    main()
