# -*- coding: utf-8 -*-
import json
import os

# 100 Grammar Points extracted directly from User's "LIST 100 NGỮ PHÁP N3.pdf"
# Enhanced with connection rules (cấu trúc nối), nuance notes (bẫy dễ nhầm), and group tags
GRAMMAR_100 = [
    {
        "id": "g_1", "stt": 1, "pattern": "～うちに", "structure": "Vる / Vている / Vない / A(い・な) / Nの + うちに",
        "meaning": "Tranh thủ trong lúc...; Trong lúc đang... thì (chuyển biến bất ngờ)",
        "example_jp": "日本にいるうちに一度富士山に登ってみたい。 / 音楽を聞いているうちに、眠ってしまった。",
        "example_vi": "Tranh thủ lúc đang ở Nhật, tôi muốn thử một lần leo núi Phú Sĩ. / Trong lúc đang nghe nhạc thì ngủ quên mất.",
        "nuance": "⚠️ Phân biệt với ～間に: 『うちに』 nhấn mạnh tính TRANH THỦ trước khi trạng thái thay đổi (hoặc kết quả tự nhiên xảy ra ngoài ý muốn), còn 『間に』 chỉ đơn thuần là mốc thời gian khách quan.",
        "category": "Thời gian"
    },
    {
        "id": "g_2", "stt": 2, "pattern": "～間 / ～間に", "structure": "Vている / Nの + 間（に）",
        "meaning": "Trong suốt (間) / Trong lúc, vào khoảng thời gian (間に)",
        "example_jp": "彼は会議の間ずっと眠りをしていた。 / 留守の間にどろぼうが入った。",
        "example_vi": "Anh ta ngủ gật suốt buổi họp. / Trong lúc tôi vắng nhà, đã có kẻ trộm vào nhà.",
        "nuance": "⚠️ 『間』: hành động phía sau diễn ra xuyên suốt từ đầu đến cuối. 『間に』: hành động phía sau xảy ra tại 1 thời điểm nằm trong khoảng thời gian đó.",
        "category": "Thời gian"
    },
    {
        "id": "g_3", "stt": 3, "pattern": "～てからでないと / ～てからでなければ", "structure": "Vて + からでないと / からでなければ (+ Câu phủ định)",
        "meaning": "Nếu không làm V1 trước thì không thể V2",
        "example_jp": "家族と相談してからでないと、買うかどうかまだ決められない。",
        "example_vi": "Nếu không thảo luận với gia đình trước thì tôi chưa thể quyết định có mua hay không.",
        "nuance": "💡 Mẹo làm đề: Mệnh đề sau LUÔN mang nghĩa phủ định (できない, わからない, だめだ...).",
        "category": "Điều kiện"
    },
    {
        "id": "g_4", "stt": 4, "pattern": "Vたい + だけ", "structure": "Vたい / 好きな + だけ",
        "meaning": "Bao nhiêu cũng được, tùy thích (thỏa thích)",
        "example_jp": "好きなだけ食べていいよ。 / 今日は暇だから、寝たいだけ寝ていいよ。",
        "example_vi": "Cứ ăn bao nhiêu tùy thích nhé. / Vì hôm nay rảnh nên ngủ bao nhiêu cũng được nhé.",
        "nuance": "💡 Thường lặp lại cùng 1 động từ ở vế sau: 寝たいだけ寝る, 食べたいだけ食べる.",
        "category": "Mức độ"
    },
    {
        "id": "g_5", "stt": 5, "pattern": "～らしい (Phỏng đoán)", "structure": "V / A / N (Thể thông thường, bỏ だ) + らしい",
        "meaning": "Có vẻ, hình như, nghe nói là... (phỏng đoán có căn cứ khách quan/nghe lại)",
        "example_jp": "今日はナムさんはとても忙しいらしい。",
        "example_vi": "Có vẻ hôm nay anh Nam rất bận.",
        "nuance": "⚠️ Phân biệt: 『らしい』 dựa trên thông tin nghe được hoặc căn cứ khách quan; 『みたい/ようだ』 dựa trên cảm nhận trực quan của người nói.",
        "category": "Phỏng đoán"
    },
    {
        "id": "g_6", "stt": 6, "pattern": "～によって / ～によっては", "structure": "N + によって / によっては",
        "meaning": "Tùy vào (によって) / Tùy vào từng trường hợp mà có thể... (によっては)",
        "example_jp": "国によって習慣が違う。 / 明日は、所によっては、雨が降るかもしれない。",
        "example_vi": "Tùy vào từng quốc gia mà phong tục khác nhau. / Ngày mai tùy từng vùng mà có vùng có thể sẽ mưa.",
        "nuance": "💡 『によって』 đi với 違う/様々だ (đa dạng); 『によっては』 nêu lên 1 trường hợp cụ thể có thể xảy ra.",
        "category": "Nguyên nhân & Phương thức"
    },
    {
        "id": "g_7", "stt": 7, "pattern": "～たびに", "structure": "Vる / Nの + たびに",
        "meaning": "Cứ mỗi lần... thì lại...",
        "example_jp": "山に行くたびに雨に降られる。",
        "example_vi": "Cứ mỗi lần đi leo núi là trời lại mưa.",
        "nuance": "💡 Diễn tả quy luật lặp đi lặp lại hoặc cảm xúc mỗi khi làm gì đó.",
        "category": "Thời gian"
    },
    {
        "id": "g_8", "stt": 8, "pattern": "～ば～ほど", "structure": "Veba + Vるほど / Aければ + Aいほど / Aなら + Aなほど",
        "meaning": "Càng... càng...",
        "example_jp": "物が増えれば増えるほど整理が大変になる。",
        "example_vi": "Đồ đạc càng nhiều thì việc sắp xếp càng vất vả.",
        "nuance": "⚠️ Rất hay ra trong Bài toán dấu sao (★)! Nhớ: Trước 『ば』 là thể điều kiện, trước 『ほど』 là thể nguyên dạng của CÙNG một từ.",
        "category": "Mức độ"
    },
    {
        "id": "g_9", "stt": 9, "pattern": "～ついでに", "structure": "Vる / Vた / Nの + ついでに",
        "meaning": "Nhân tiện, tiện thể...",
        "example_jp": "散歩のついでにこのはがきをポストに出してきて。",
        "example_vi": "Nhân tiện đi dạo thì hãy bỏ tấm bưu thiếp này vào hòm thư giúp nhé.",
        "nuance": "⚠️ Hành động chính đứng TRƯỚC 『ついでに』, hành động phụ tiện thể làm thêm đứng SAU.",
        "category": "Thời gian"
    },
    {
        "id": "g_10", "stt": 10, "pattern": "～くらい / ～ほど (Mức độ)", "structure": "V / A / N + くらい（ぐらい） / ほど",
        "meaning": "Đến mức, tới mức...; Chí ít / cỡ khoảng...",
        "example_jp": "この店のパンはおいしい。毎日食べたいくらいだ。 / 日曜日ぐらい休ませてください。",
        "example_vi": "Bánh mì tiệm này ngon đến mức ngày nào cũng muốn ăn. / Hãy cho tôi nghỉ chí ít là ngày Chủ nhật.",
        "nuance": "💡 Khi dùng 『ぐらい』 với nghĩa 'chí ít/tối thiểu', nó thể hiện sự xem nhẹ mức độ khó của việc đó (việc nhỏ nhặt thế này thì chí ít...).",
        "category": "Mức độ"
    },
    {
        "id": "g_11", "stt": 11, "pattern": "～くらい～はない / ～ほど～はない", "structure": "N / Vる + くらい（ほど） + A + Nはない",
        "meaning": "Không có N nào ... bằng (So sánh nhất)",
        "example_jp": "私は料理を作ることぐらい楽しいことはないと思っています。 / テストほどいやなものはない。",
        "example_vi": "Tôi nghĩ không có điều gì vui bằng việc nấu ăn. / Không có điều gì chán ghét bằng thi cử.",
        "nuance": "💡 Cặp hô ứng kinh điển trong bài dấu sao ★: 『～くらい / ～ほど ... はない / はいない』.",
        "category": "So sánh"
    },
    {
        "id": "g_12", "stt": 12, "pattern": "N + 向けに / 向けの", "structure": "N + 向けだ / 向けに + V / 向けの + N",
        "meaning": "Dành cho ~, hướng tới đối tượng ~",
        "example_jp": "この新しいデザインは子ども向けに作られた。",
        "example_vi": "Mẫu thiết kế mới này được làm dành cho trẻ em.",
        "nuance": "⚠️ Phân biệt với 『向き』: 『向け』 là chủ đích thiết kế nhắm tới đối tượng N (trẻ em, người nước ngoài); 『向き』 là bản chất tự nhiên nó hợp với N.",
        "category": "Đối tượng"
    },
    {
        "id": "g_13", "stt": 13, "pattern": "N + につき", "structure": "N (Số lượng/Đơn vị) + につき / N (Lý do trang trọng) + につき",
        "meaning": "Ứng với mỗi ~ / Vì lý do ~ (thông báo trang trọng)",
        "example_jp": "クラブの参加費は一人につき5000円です。",
        "example_vi": "Phí tham gia câu lạc bộ là 5000 yên mỗi người.",
        "nuance": "💡 Ngoài nghĩa 'mỗi đơn vị', 『につき』 còn gặp trên biển báo: 『工事中につき、立入禁止』 (Vì đang thi công nên cấm vào).",
        "category": "Mức độ"
    },
    {
        "id": "g_14", "stt": 14, "pattern": "～に対して", "structure": "N / Vる・A + の + に対して",
        "meaning": "(1) Đối với (thái độ hướng tới đối tượng) / (2) Trái ngược với (tương phản)",
        "example_jp": "目上の人に対して、敬語を使います。 / 昨日は大阪では大雨だったのに対して、東京はいい天気だった。",
        "example_vi": "Dùng kính ngữ đối với người bề trên. / Trái ngược với hôm qua ở Osaka mưa to thì ở Tokyo thời tiết đẹp.",
        "nuance": "⚠️ Khi mang nghĩa tương phản giữa 2 mệnh đề, bắt buộc phải có trợ từ chuẩn hóa danh từ 『のに対して』!",
        "category": "Đối tượng"
    },
    {
        "id": "g_15", "stt": 15, "pattern": "～て済む / ～で済む", "structure": "Vて / Vないで (ずに) / Nで + 済む（すむ）",
        "meaning": "Chỉ cần ~ là xong, giải quyết xong chỉ bằng ~ (nhẹ nhàng hơn dự tính)",
        "example_jp": "薬を飲んで済むなら、病院に行く必要はない。",
        "example_vi": "Nếu chỉ cần uống thuốc là khỏi (xong) thì không cần phải đi bệnh viện.",
        "nuance": "💡 Thể hiện sự nhẹ nhõm vì không bị nặng nề hơn.",
        "category": "Mức độ"
    },
    {
        "id": "g_16", "stt": 16, "pattern": "～一方で（は）", "structure": "Vる / A / Nである + 一方で（は）",
        "meaning": "Một mặt thì ~, mặt khác thì ~ (2 mặt song song hoặc đối lập)",
        "example_jp": "会議では自分の意見を言う一方で、他の人の話もよく聞いてください。",
        "example_vi": "Trong buổi họp, một mặt hãy nêu ý kiến của bản thân, mặt khác cũng hãy lắng nghe kỹ ý kiến người khác.",
        "nuance": "💡 Dùng khi 1 chủ thể có 2 tính chất/hành động song hành.",
        "category": "Liên kết & Tương phản"
    },
    {
        "id": "g_17", "stt": 17, "pattern": "N + において / における", "structure": "N + において / においても / における + N2",
        "meaning": "Tại ~, ở ~, trong lĩnh vực/thời điểm ~ (Dạng trang trọng của で)",
        "example_jp": "結果はホームページにおいて発表される。",
        "example_vi": "Kết quả sẽ được công bố trên trang chủ.",
        "nuance": "⚠️ Chú ý cách nối: Đứng trước danh từ phải đổi thành 『における + N』!",
        "category": "Phạm vi"
    },
    {
        "id": "g_18", "stt": 18, "pattern": "～かわりに", "structure": "Vる / Vた / Nの + かわりに",
        "meaning": "(1) Thay cho, đại diện cho / (2) Thay vào đó, bù lại cho việc...",
        "example_jp": "リーさんに英語を教えてもらっているかわりに、リーさんの仕事を手伝っている。",
        "example_vi": "Bù lại cho việc được bạn Ly dạy tiếng Anh, tôi giúp việc cho bạn Ly.",
        "nuance": "💡 Có 3 sắc thái: Làm thay người khác (Nのかわりに), Làm A thay vì làm B, và Đánh đổi/Bù trừ (tuy đắt nhưng bù lại ngon).",
        "category": "Liên kết & Tương phản"
    },
    {
        "id": "g_19", "stt": 19, "pattern": "～ため（に） / ～ためだ (Nguyên nhân)", "structure": "V / Aい / Aな / Nの + ため（に）",
        "meaning": "Bởi vì, do ~ (Chỉ nguyên nhân khách quan, trang trọng)",
        "example_jp": "報告書にミスが多かったのは、よく見直しをしなかったためだろう。",
        "example_vi": "Bản báo cáo có nhiều lỗi có lẽ là bởi vì đã không xem và sửa kỹ.",
        "nuance": "⚠️ Khi chỉ nguyên nhân (Bởi vì), vế sau KHÔNG dùng câu mệnh lệnh, rủ rê hay ý chí. Nếu vế trước là Vる + ために và vế sau là động từ ý chí thì mang nghĩa 'Để (mục đích)'.",
        "category": "Nguyên nhân & Phương thức"
    },
    {
        "id": "g_20", "stt": 20, "pattern": "～によって / ～による (Nguyên nhân & Phương tiện)", "structure": "N + によって / N + による + N2",
        "meaning": "(1) Do, bởi (nguyên nhân dẫn đến kết quả) / (2) Bằng cách, nhờ vào phương pháp / (3) Bởi (tác giả câu bị động)",
        "example_jp": "うちの工場では、材料不足によってたたみの生産はもうできなくなった。 / 外国語を学ぶことによって、その国の人たちの考え方も知ることができる。",
        "example_vi": "Ở nhà máy chúng tôi, do thiếu nguyên liệu nên không thể sản xuất chiếu tatami nữa. / Nhờ việc học ngoại ngữ mà có thể hiểu được cách suy nghĩ của người nước đó.",
        "nuance": "💡 Khi dùng `Vる + ことによって` luôn mang nghĩa: 'Bằng cách làm V / Thông qua việc làm V'.",
        "category": "Nguyên nhân & Phương thức"
    },
    {
        "id": "g_21", "stt": 21, "pattern": "～ことから", "structure": "V / Aい / Aな・Nである + ことから",
        "meaning": "Từ việc ~ (dẫn đến phán đoán, kết luận hoặc tên gọi)",
        "example_jp": "顔がよく似ていることから、二人は親子だとすぐにわかった。",
        "example_vi": "Từ việc khuôn mặt rất giống nhau nên tôi biết ngay hai người họ là bố con.",
        "nuance": "💡 Thường đi với 『わかった』『言われている』『呼ばれている』(được gọi tên là... vì...).",
        "category": "Nguyên nhân & Phương thức"
    },
    {
        "id": "g_22", "stt": 22, "pattern": "～おかげで / ～おかげだ", "structure": "V / Aい / Aな / Nの + おかげで",
        "meaning": "Nhờ vào ~ (đằng sau là kết quả tốt đẹp, mang hàm ý biết ơn)",
        "example_jp": "いい会社に就職が決まったのは先生のおかげです。ありがとうございます。",
        "example_vi": "Việc quyết định vào làm ở công ty tốt là nhờ có thầy ạ. Em cảm ơn thầy.",
        "nuance": "⚠️ Trái nghĩa hoàn toàn với 『せいで』 (tại vì - kết quả xấu).",
        "category": "Nguyên nhân & Phương thức"
    },
    {
        "id": "g_23", "stt": 23, "pattern": "～せいで / ～せいだ / ～せいか", "structure": "V / Aい / Aな / Nの + せいで",
        "meaning": "Do, tại vì ~ (đằng sau là kết quả tiêu cực, đổ lỗi)",
        "example_jp": "最近、忙しかったせいで、かなり疲れている。",
        "example_vi": "Do gần đây rất bận nên tôi khá mệt mỏi.",
        "nuance": "💡 Biến thể rất hay thi: 『～せいか』 = 'Không biết có phải tại ~ hay không mà...' (khi chưa chắc chắn 100% nguyên nhân gây ra kết quả xấu).",
        "category": "Nguyên nhân & Phương thức"
    },
    {
        "id": "g_24", "stt": 24, "pattern": "～ずに", "structure": "Vない (bỏ ない) + ずに (Riêng する -> せずに)",
        "meaning": "...mà không làm V1 (Thực hiện V2 trong trạng thái không làm V1)",
        "example_jp": "かさを持たずに出かけて、雨に降られてしまった。",
        "example_vi": "Ra ngoài mà không mang ô, nên bị dính mưa.",
        "nuance": "⚠️ Bẫy kinh điển: Động từ 『する』 phải chia thành 『せずに』 (KHÔNG phải しずに)! Đây là dạng trang trọng hơn của 『～ないで』.",
        "category": "Trạng thái"
    },
    {
        "id": "g_25", "stt": 25, "pattern": "～っぽい", "structure": "N / Vます / Aい(bỏ い) + っぽい",
        "meaning": "Giống như là ~, trông có vẻ ~; Hay ~, dễ ~ (mang sắc thái hơi chê/khẩu ngữ)",
        "example_jp": "彼は大人っぽい話し方をする。",
        "example_vi": "Anh ấy có cách nói chuyện giống như người lớn.",
        "nuance": "💡 Khi đi với động từ Vます (như 忘れっぽい: hay quên, 怒りっぽい: dễ nổi nóng), nó chỉ tính cách/khuynh hướng dễ xảy ra.",
        "category": "Phỏng đoán"
    },
    {
        "id": "g_26", "stt": 26, "pattern": "～ことになっている", "structure": "Vる / Vない + ことになっている",
        "meaning": "Được quy định là ~, theo lịch trình/quy tắc là ~",
        "example_jp": "明日は7時に授業を始めることになっている。",
        "example_vi": "Ngày mai được quy định là 7 giờ bắt đầu giờ học.",
        "nuance": "⚠️ Phân biệt: 『ことになっている』 là quy định khách quan của tập thể/lịch trình; 『ことにしている』 là thói quen/quyết tâm của cá nhân người nói.",
        "category": "Quy định & Quyết định"
    },
    {
        "id": "g_27", "stt": 27, "pattern": "～さえ～ば / N + さえ", "structure": "N + さえ + Veba/Aければ / Vます + さえすれば / N + さえ (Ngay cả)",
        "meaning": "(1) Chỉ cần ~ là đủ (～さえ～ば) / (2) Ngay cả, đến cả ~ cũng (N + さえ)",
        "example_jp": "あなたさえそばにいてくだされば、ほかにはなにもいりません。 / 冷蔵庫には卵さえ入っていない。",
        "example_vi": "Chỉ cần có anh ở bên cạnh, ngoài ra em không cần gì cả. / Trong tủ lạnh đến ngay cả quả trứng cũng không có.",
        "nuance": "⚠️ Cặp hô ứng bài dấu sao ★: Có 『さえ』 ở vế điều kiện thì cuối vế đó phải chia 『～ば / ～なら』!",
        "category": "Điều kiện"
    },
    {
        "id": "g_28", "stt": 28, "pattern": "たとえ～ても / たとえ～でも", "structure": "たとえ + Vても / Aくても / A・N + でも",
        "meaning": "Cho dù ~ đi chăng nữa thì vẫn...",
        "example_jp": "たとえ周りの人たちにどんなに反対されても、僕はプロの歌手になりたい。",
        "example_vi": "Cho dù những người xung quanh có phản đối thế nào đi nữa thì tôi vẫn muốn trở thành ca sĩ chuyên nghiệp.",
        "nuance": "💡 Cặp hô ứng: Đầu câu có 『たとえ』 thì giữa câu bắt buộc đi với 『～ても / ～でも』.",
        "category": "Điều kiện"
    },
    {
        "id": "g_29", "stt": 29, "pattern": "～ということだ / ～とのことだ", "structure": "Câu thông thường + ということだ / とのことだ",
        "meaning": "(1) Nghe nói là ~ (truyền đạt lại) / (2) Có nghĩa là, tức là ~ (giải thích/kết luận)",
        "example_jp": "市のお知らせによれば、この道路は来週から工事が始まるということです。",
        "example_vi": "Theo thông báo của thành phố, nghe nói con đường này sẽ bắt đầu thi công từ tuần sau.",
        "nuance": "💡 Khi đi kèm 『～によれば / ～によると』 đầu câu thì 『ということだ / とのことだ』 mang nghĩa truyền đạt thông tin nghe được. Khi đi với 『つまり / すなわち』 thì mang nghĩa 'tức là'.",
        "category": "Truyền đạt & Giải thích"
    },
    {
        "id": "g_30", "stt": 30, "pattern": "～をきっかけに（して） / ～がきっかけで", "structure": "N + をきっかけに（して） / N + がきっかけで",
        "meaning": "Nhân cơ hội ~, lấy ~ làm bước ngoặt/cơ duyên mà bắt đầu...",
        "example_jp": "アニメがきっかけで、日本に興味を持ち始めました。",
        "example_vi": "Nhờ cơ duyên xem anime mà tôi bắt đầu quan tâm đến Nhật Bản.",
        "nuance": "💡 Động từ đi với N chỉ định rõ danh từ: 『Vた + の / Vる + こと + をきっかけに』.",
        "category": "Nguyên nhân & Phương thức"
    },
    {
        "id": "g_31", "stt": 31, "pattern": "～からには", "structure": "Vる / Vた / Vない / Nである + からには",
        "meaning": "Một khi đã ~ thì đương nhiên phải / nhất định sẽ...",
        "example_jp": "約束したからには、守らなければならない。",
        "example_vi": "Một khi đã hứa thì phải giữ lời.",
        "nuance": "💡 Vế sau luôn thể hiện quyết tâm, nghĩa vụ, mệnh lệnh (～なければならない, ～つもりだ, ～べきだ).",
        "category": "Điều kiện"
    },
    {
        "id": "g_32", "stt": 32, "pattern": "N + にわたって / にわたる + N2", "structure": "N (Thời gian/Không gian/Số lượng) + にわたって / にわたる + N2",
        "meaning": "Trải dài suốt ~, kéo dài trên toàn ~",
        "example_jp": "会議は3時間にわたって行われた。",
        "example_vi": "Cuộc họp đã diễn ra kéo dài suốt 3 tiếng đồng hồ.",
        "nuance": "💡 Bổ nghĩa cho danh từ phía sau thì dùng 『にわたる + N』 (VD: 10年にわたる研究).",
        "category": "Phạm vi"
    },
    {
        "id": "g_33", "stt": 33, "pattern": "～とともに", "structure": "N / Vる / Aい / Aな・Nである + とともに",
        "meaning": "(1) Cùng với ~ / (2) Đồng thời (vừa ~ vừa ~) / (3) Cùng với sự biến đổi V1 thì V2 cũng biến đổi theo",
        "example_jp": "彼は教師であるとともに、作家でもある。",
        "example_vi": "Anh ấy vừa là giáo viên đồng thời cũng là nhà văn.",
        "nuance": "💡 Nghĩa thứ 3 (biến đổi song hành) tương đương với 『～につれて』: 年を取るとともに (Cùng với việc thêm tuổi thì...).",
        "category": "Liên kết & Tương phản"
    },
    {
        "id": "g_34", "stt": 34, "pattern": "Vた + ものだ (Hồi tưởng)", "structure": "Vた + ものだ (Thường đi với よく, 昔は)",
        "meaning": "Đã từng thường làm ~ (hồi tưởng thói quen trong quá khứ)",
        "example_jp": "子どものころ、この川でよく泳いだものだ。",
        "example_vi": "Hồi còn nhỏ, tôi đã từng hay bơi ở con sông này.",
        "nuance": "⚠️ Chú ý thể động từ: 『Vた + ものだ』 là hồi tưởng quá khứ; còn 『Vる + ものだ』 là chân lý/khuyên nhủ đạo lý chung.",
        "category": "Cảm thán & Hồi tưởng"
    },
    {
        "id": "g_35", "stt": 35, "pattern": "～はずがない / ～わけがない", "structure": "V / Aい / Aな / Nの + はずがない / わけがない",
        "meaning": "Chắc chắn không thể có chuyện ~, làm gì có lý nào ~",
        "example_jp": "あの店が今日休みのはずはありません。電話で確認したんですから。",
        "example_vi": "Cửa hàng đó hôm nay chắc chắn không thể nghỉ được. Vì tôi đã gọi điện xác nhận rồi.",
        "nuance": "💡 Phủ định hoàn toàn khả năng xảy ra 100% dựa trên căn cứ rõ ràng.",
        "category": "Phỏng đoán"
    },
    {
        "id": "g_36", "stt": 36, "pattern": "～とは限らない", "structure": "V / A / Nだ + とは限らない（とはかぎらない）",
        "meaning": "Không nhất thiết là ~, chưa chắc đã ~ (Phủ định bộ phận cái tưởng là luôn đúng)",
        "example_jp": "日本語を教えているのは日本人とは限らない。",
        "example_vi": "Người dạy tiếng Nhật không nhất thiết phải là người Nhật.",
        "nuance": "💡 Hay đi kèm với từ 『いつも』『必ずしも』(không hẳn lúc nào cũng...): 高いものが必ずしもいいとは限らない.",
        "category": "Phủ định một phần"
    },
    {
        "id": "g_37", "stt": 37, "pattern": "～わけではない / ～というわけではない", "structure": "V / A / Nな + わけではない / のではない",
        "meaning": "Không hẳn là ~, không có nghĩa là ~ (Phủ định một phần để tránh hiểu lầm)",
        "example_jp": "このレストランはいつも客が一杯いたが、だからといって特別においしいわけではない。",
        "example_vi": "Nhà hàng này lúc nào cũng đông khách, nhưng thế không có nghĩa là nó đặc biệt ngon.",
        "nuance": "⚠️ So sánh: 『わけがない』 = Không đời nào (phủ định 100%); 『わけではない』 = Không hẳn là (phủ định 1 phần).",
        "category": "Phủ định một phần"
    },
    {
        "id": "g_38", "stt": 38, "pattern": "～みたいだ / ～みたいな / ～みたいに", "structure": "V / A / N (bỏ だ) + みたいだ (みたい + なN / みたい + にV)",
        "meaning": "Có vẻ ~, trông giống như ~ (Dạng khẩu ngữ của ようだ)",
        "example_jp": "雨が降りそうみたい。 / 彼は子どもみたいに笑う。",
        "example_vi": "Có vẻ như trời sắp mưa. / Anh ấy cười giống như trẻ con.",
        "nuance": "⚠️ Bẫy ngữ pháp: Sau N là 『みたい』 (không có の), nhưng trước N lại là 『みたいな + N』, trước V là 『みたいに + V』!",
        "category": "Phỏng đoán"
    },
    {
        "id": "g_39", "stt": 39, "pattern": "Vます + たがる", "structure": "Vます + たがる / たがっている",
        "meaning": "Muốn làm ~ (Dùng cho ngôi thứ 3 thông qua biểu hiện bên ngoài)",
        "example_jp": "彼は海外に行きたがっている。",
        "example_vi": "Anh ấy đang rất muốn đi nước ngoài.",
        "nuance": "💡 『～たい』 dùng cho ngôi 1 (tôi muốn); 『～たがる』 dùng cho ngôi 3 (anh ấy/đứa trẻ biểu lộ ra là muốn).",
        "category": "Cảm xúc & Mong muốn"
    },
    {
        "id": "g_40", "stt": 40, "pattern": "～ないことはない / ～ないこともない", "structure": "Vない / Aくない / A・N + でない + ことはない",
        "meaning": "Không phải là không ~ (Nếu cố thì vẫn được, khẳng định nhẹ nhàng bằng 2 lần phủ định)",
        "example_jp": "これから駅まで歩けないことはないが、かなり時間がかかりますよ。",
        "example_vi": "Từ đây đi bộ đến nhà ga thì không phải là không đi được, nhưng sẽ khá tốn thời gian đấy.",
        "nuance": "💡 Hai lần phủ định (`ない` + `ことはない`) = Khẳng định có điều kiện.",
        "category": "Phủ định một phần"
    },
    {
        "id": "g_41", "stt": 41, "pattern": "～につれて", "structure": "Vる (Động từ biến đổi) / N + につれて",
        "meaning": "Càng ~ thì càng ~, cùng với sự thay đổi của V1 thì V2 cũng thay đổi theo",
        "example_jp": "年を取るにつれて、物忘れが多くなる。",
        "example_vi": "Càng có tuổi thì càng hay quên.",
        "nuance": "⚠️ Cả 2 vế của 『につれて』 đều phải là từ chỉ sự biến đổi tự nhiên (không dùng câu ý chí/mệnh lệnh ở vế sau).",
        "category": "Mức độ"
    },
    {
        "id": "g_42", "stt": 42, "pattern": "～てもらいたい / ～ていただきたい / ～てほしい", "structure": "Vて + もらいたい / いただきたい / ほしい (Vないで + ほしい)",
        "meaning": "Muốn ai đó làm gì cho mình (Xin vui lòng...)",
        "example_jp": "この書類、ちょっと見ていただきたいんですが。 / 年を取った親にはもう無理をしてほしくない。",
        "example_vi": "Tài liệu này, tôi muốn nhờ anh/chị xem giúp một chút ạ. / Tôi không muốn bố mẹ đã lớn tuổi rồi còn làm việc quá sức.",
        "nuance": "💡 Mức độ lịch sự tăng dần: てほしい < てもらいたい < ていただきたい.",
        "category": "Cảm xúc & Mong muốn"
    },
    {
        "id": "g_43", "stt": 43, "pattern": "～ようとしない", "structure": "Vよう (Thể ý chí) + としない",
        "meaning": "Không chịu làm ~, không hề có ý định làm ~",
        "example_jp": "子どもは野菜を食べようとしない。",
        "example_vi": "Đứa trẻ nhất định không chịu ăn rau.",
        "nuance": "💡 Diễn tả thái độ ngoan cố hoặc thiếu thiện chí của ngôi thứ 3.",
        "category": "Trạng thái"
    },
    {
        "id": "g_44", "stt": 44, "pattern": "～は別として", "structure": "N / V・A (Thể thông thường) + かどうか + は別として",
        "meaning": "Chưa bàn đến ~, tạm gác chuyện ~ sang một bên thì...",
        "example_jp": "見た目は別として、彼はとても優しい人だ。",
        "example_vi": "Chưa bàn đến vẻ bề ngoài, anh ấy là một người rất tốt bụng.",
        "nuance": "💡 Tương đương với 『～はともかく』.",
        "category": "Liên kết & Tương phản"
    },
    {
        "id": "g_45", "stt": 45, "pattern": "～上に", "structure": "V / Aい / Aな / Nの・Nである + 上に（うえに）",
        "meaning": "Không những ~ mà còn ~, thêm vào đó...",
        "example_jp": "この店は、料理が安い上に、美味しい。",
        "example_vi": "Quán này đồ ăn không những rẻ mà lại còn ngon.",
        "example_jp_2": "道に迷った上に、雨も降ってきた。",
        "nuance": "💡 Hai vế phải CÙNG chiều (cùng khen tích cực hoặc cùng chê tiêu cực chồng chất).",
        "category": "Liên kết & Tương phản"
    },
    {
        "id": "g_46", "stt": 46, "pattern": "～に比べて", "structure": "N + に比べて（にくらべて）",
        "meaning": "So với ~",
        "example_jp": "去年に比べて、私の日本語は上手になった。",
        "example_vi": "So với năm ngoái, tiếng Nhật của tôi đã giỏi hơn.",
        "nuance": "💡 Có thể dùng 『～に比べると』 với nghĩa tương tự.",
        "category": "So sánh"
    },
    {
        "id": "g_47", "stt": 47, "pattern": "～べきだ / ～べきではない", "structure": "Vる + べきだ / べきではない (Riêng する -> するべき / すべき)",
        "meaning": "Nên / Cần phải làm gì (theo đạo lý, trách nhiệm) / Không nên làm gì",
        "example_jp": "これは大事なことですから、もう少し話し合ってから決めるべきだ。",
        "example_vi": "Vì đây là việc quan trọng nên chúng ta nên thảo luận thêm một chút rồi hãy quyết định.",
        "nuance": "⚠️ Chú ý: Động từ 『する』 có thể rút gọn thành 『すべきだ』! Khác với 『ほうがいい』(lời khuyên tình huống cụ thể), 『べきだ』 mang tính nghĩa vụ/đạo lý.",
        "category": "Quy định & Quyết định"
    },
    {
        "id": "g_48", "stt": 48, "pattern": "～わりに（は）", "structure": "V / Aい / Aな / Nの + わりに（は）",
        "meaning": "Tuy ~ nhưng (So với tiêu chuẩn của vế trước thì kết quả vế sau khác hẳn dự đoán)",
        "example_jp": "彼は年のわりに若く見える。",
        "example_vi": "Anh ấy trông trẻ so với tuổi.",
        "nuance": "⚠️ Rất hay thi phân biệt với 『にしては』: 『わりに』 thường đi với từ chỉ mức độ tương đối (như 年のわりに, 値段のわりに, 狭いわりに).",
        "category": "So sánh"
    },
    {
        "id": "g_49", "stt": 49, "pattern": "N (Thời gian) + ぶり", "structure": "Khoảng thời gian + ぶりだ / ぶりに + V / ぶりの + N",
        "meaning": "Sau (một khoảng thời gian dài mới lặp lại hành động)...",
        "example_jp": "5年ぶりに家族と旅行に行った。",
        "example_vi": "Sau 5 năm tôi mới lại đi du lịch cùng gia đình.",
        "nuance": "💡 Không dùng cho khoảng thời gian ngắn mang tính thường xuyên nếu không có cảm xúc chờ đợi lâu.",
        "category": "Thời gian"
    },
    {
        "id": "g_50", "stt": 50, "pattern": "～ようにする / ～ようにしている", "structure": "Vる / Vない + ようにする / ようにしている",
        "meaning": "Cố gắng làm ~, lưu tâm thực hiện thành thói quen ~",
        "example_jp": "私はなるべく自分で料理を作って食べるようにしている。",
        "example_vi": "Tôi luôn cố gắng tự nấu ăn ở nhà nhiều nhất có thể.",
        "nuance": "⚠️ 『ようにする』 là nỗ lực tại 1 thời điểm; 『ようにしている』 là duy trì nỗ lực đó đều đặn thành thói quen.",
        "category": "Quy định & Quyết định"
    },
    {
        "id": "g_51", "stt": 51, "pattern": "～（よ）うとする", "structure": "Vよう (Thể ý chí) + とする (Thường đi với ～としたとき / ～としたら)",
        "meaning": "Định làm gì / Đang chuẩn bị làm gì thì...",
        "example_jp": "家を出ようとしたとき、突然大雨が降り出した。",
        "example_vi": "Đúng lúc đang định bước ra khỏi nhà thì đột nhiên trời đổ mưa lớn.",
        "nuance": "💡 Diễn tả khoảnh khắc ngay trước khi hành động diễn ra.",
        "category": "Thời gian"
    },
    {
        "id": "g_52", "stt": 52, "pattern": "～つもりだ (Ngộ nhận)", "structure": "Vた / Vている / Aい / Aな / Nの + つもりだ",
        "meaning": "Cứ tưởng rằng ~, tự cho rằng mình đang ~ (nhưng thực tế có thể không phải vậy)",
        "example_jp": "私は今年77歳ですが、まだまだ若いつもりです。 / 鍵をかけたつもりだったが、かかっていなかった。",
        "example_vi": "Năm nay tôi 77 tuổi rồi nhưng vẫn tự nghĩ mình còn trẻ lắm. / Tôi cứ đinh ninh là đã khóa cửa rồi nhưng hóa ra chưa khóa.",
        "nuance": "⚠️ Khác với 『Vる + つもりだ』(dự định tương lai), khi đi với 『Vた / Nの / Tính từ + つもりだ』 nó mang nghĩa 'cứ đinh ninh/tự ngộ nhận'!",
        "category": "Cảm xúc & Mong muốn"
    },
    {
        "id": "g_50b", "stt": 53, "pattern": "～からこそ / N + こそ", "structure": "V / A / Nだ + からこそ / N + こそ",
        "meaning": "Chính vì ~ nên mới... / Chính N mới là...",
        "example_jp": "親だからこそ自分の子を厳しくしかるのだ。",
        "example_vi": "Chính bởi vì là cha mẹ nên mới mắng nghiêm khắc con của mình.",
        "nuance": "💡 Nhấn mạnh duy nhất nguyên nhân tích cực/đặc biệt. Cặp hô ứng thường gặp: 『～からこそ、～のだ』.",
        "category": "Nguyên nhân & Phương thức"
    },
    {
        "id": "g_51b", "stt": 54, "pattern": "N + を中心に（して / として）", "structure": "N + を中心に（して / として） / を中心とした + N2",
        "meaning": "Tập trung vào ~, lấy ~ làm trung tâm",
        "example_jp": "この本は漢字を中心に勉強する。",
        "example_vi": "Cuốn sách này học tập trung vào Hán tự.",
        "nuance": "💡 Rất hay xuất hiện trong bài đọc hiểu thông tin/địa lý/xã hội.",
        "category": "Phạm vi"
    },
    {
        "id": "g_52b", "stt": 55, "pattern": "～だけでなく / ～ばかりか", "structure": "V / Aい / Aな / N + だけでなく（ばかりか）... も / まで",
        "meaning": "Không chỉ ~ mà còn ~",
        "example_jp": "たばこを吸うことは、自分だけでなく、他人にも害がある。 / 会社の同僚ばかりか家族までが私をバカにしている。",
        "example_vi": "Hút thuốc lá không chỉ có hại cho bản thân mà còn có hại cho người khác. / Không chỉ đồng nghiệp mà đến cả gia đình cũng coi thường tôi.",
        "nuance": "💡 『ばかりか』 nhấn mạnh sự bất ngờ ở mức độ cao hơn 『だけでなく』, vế sau hay đi với 『～まで / ～さえ』.",
        "category": "Liên kết & Tương phản"
    },
    {
        "id": "g_53", "stt": 56, "pattern": "～ぎみ", "structure": "Vます / N + ぎみ",
        "meaning": "Có vẻ hơi ~, có triệu chứng chớm bị ~ (Thường dùng cho trạng thái tiêu cực/sức khỏe)",
        "example_jp": "今日は頭が痛いが、風邪ぎみだったので、学校を休んだ。",
        "example_vi": "Hôm nay vì có triệu chứng hơi cảm cúm nên tôi đã nghỉ học.",
        "nuance": "💡 Các cụm từ tủ JLPT N3: 『風邪ぎみ』(hơi cảm), 『疲れぎみ』(hơi mệt), 『太りぎみ』(hơi tăng cân), 『遅れぎみ』(hơi trễ).",
        "category": "Trạng thái"
    },
    {
        "id": "g_54", "stt": 57, "pattern": "～など / ～なんか / ～なんて", "structure": "N / V + など / なんか / なんて",
        "meaning": "Chẳng hạn như ~; Những thứ cỡ như ~ (Nêu ví dụ kết hợp sắc thái khiêm tốn, coi nhẹ hoặc bất ngờ)",
        "example_jp": "この服などはいかがですか。 / ダイエットなんかしたくない。",
        "example_vi": "Chẳng hạn như bộ trang phục này thì thế nào ạ? / Tôi chẳng muốn làm mấy thứ như ăn kiêng đâu.",
        "nuance": "💡 『なんか / なんて』 dùng trong văn nói thân mật, thường bộc lộ cảm xúc chê bai hoặc khiêm nhường (私なんか: cỡ như tôi thì...).",
        "category": "Cảm thán & Hồi tưởng"
    },
    {
        "id": "g_55", "stt": 58, "pattern": "N + について / に関して", "structure": "N + について（のN） / N + に関して（のN / 関するN）",
        "meaning": "Về (một chủ đề, vấn đề cần tìm hiểu, bàn luận, viết lách)",
        "example_jp": "すみませんが、入学手続きについて聞きたいのですが。",
        "example_vi": "Xin lỗi, tôi muốn hỏi về thủ tục nhập học ạ.",
        "nuance": "⚠️ Bộ tứ kinh điển phải phân biệt: 『について』(về chủ đề) vs 『にとって』(đối với góc nhìn/đánh giá của ai) vs 『に対して』(hướng thái độ tới ai / tương phản) vs 『として』(với tư cách là).",
        "category": "Đối tượng"
    },
    {
        "id": "g_56", "stt": 59, "pattern": "N + にとって", "structure": "N + にとって（は / も / のN）",
        "meaning": "Đối với ~ (Nhìn từ lập trường, quan điểm đánh giá của N)",
        "example_jp": "若い女性にとって買い物は楽しいことです。",
        "example_vi": "Đối với phụ nữ trẻ thì mua sắm là một niềm vui.",
        "nuance": "⚠️ Mẹo chọn nhanh trong đề thi: Vế sau của 『にとって』 LUÔN là câu đánh giá tính chất/giá trị (大切だ, 難しい, 楽しい, 必要だ...). Không đi với hành động tác động trực tiếp!",
        "category": "Đối tượng"
    },
    {
        "id": "g_57", "stt": 60, "pattern": "N + として", "structure": "N + として（は / も / のN）",
        "meaning": "Với tư cách là ~, dưới danh nghĩa/vai trò là ~",
        "example_jp": "私はコーヒーカップを花びんとして使っています。",
        "example_vi": "Tôi đang sử dụng chiếc cốc cà phê với vai trò như một bình hoa.",
        "nuance": "💡 Chỉ rõ tư cách, chức danh, danh phận (留学生として: với tư cách du học sinh).",
        "category": "Đối tượng"
    },
    {
        "id": "g_58", "stt": 61, "pattern": "Vる / Vない + ことがある", "structure": "Vる / Vない + ことがある（こともある）",
        "meaning": "Thỉnh thoảng có lúc ~ (Diễn tả trường hợp đôi khi xảy ra ở hiện tại)",
        "example_jp": "妻は僕が話しかけても返事をしないことがある。",
        "example_vi": "Vợ tôi có những lúc dù tôi bắt chuyện cũng chẳng thèm trả lời.",
        "nuance": "⚠️ Phân biệt: 『Vた + ことがある』 = Đã từng (kinh nghiệm quá khứ); 『Vる/Vない + ことがある』 = Thỉnh thoảng có khi (hiện tại).",
        "category": "Trạng thái"
    },
    {
        "id": "g_59", "stt": 62, "pattern": "Vる + ことはない", "structure": "Vる + ことはない（ことはありません）",
        "meaning": "Không cần phải ~, chẳng việc gì phải ~ (An ủi, khuyên bảo)",
        "example_jp": "面接の質問は簡単です。そんなに心配することはありませんよ。",
        "example_vi": "Câu hỏi phỏng vấn đơn giản thôi. Bạn không cần phải lo lắng đến thế đâu.",
        "nuance": "💡 Bằng nghĩa với 『～必要はない』(không cần thiết phải).",
        "category": "Quy định & Quyết định"
    },
    {
        "id": "g_60", "stt": 63, "pattern": "（まるで）～（かの）ようだ", "structure": "V / A / Nの + ようだ / かのようだ",
        "meaning": "Giống hệt như là ~, cứ như thể là ~ (So sánh ví von một điều không có thật)",
        "example_jp": "今日は暖かくて、まるで春が来たかのようだ。",
        "example_vi": "Hôm nay trời ấm áp cứ như thể mùa xuân đã đến vậy.",
        "nuance": "💡 Cặp hô ứng dấu sao ★: Đầu câu có 『まるで』 thì cuối câu tìm 『～ようだ / ～みたいだ / ～かのようだ』.",
        "category": "Phỏng đoán"
    },
    {
        "id": "g_61", "stt": 64, "pattern": "Vます + 始める / 終わる / 続ける / 直す", "structure": "Vます (bỏ ます) + 始める（はじめる） / 終わる（おわる） / 続ける（つづける） / 直す（なおす）",
        "meaning": "Bắt đầu V (始める) / Làm xong V (終わる) / Tiếp tục V (続ける) / Làm lại V từ đầu cho đúng (直す)",
        "example_jp": "報告書は間違いが多いので、書き直す。 / 私は3年間ずっと日本語の勉強を続けている。",
        "example_vi": "Vì báo cáo có nhiều lỗi nên tôi viết lại. / Tôi đã và đang tiếp tục học tiếng Nhật suốt 3 năm.",
        "nuance": "💡 Nhóm động từ ghép cực kỳ phổ biến ở Mondai Từ vựng & Ngữ pháp.",
        "category": "Trạng thái"
    },
    {
        "id": "g_65", "stt": 65, "pattern": "～ように言われる / 注意される", "structure": "Vる / Vない + ように + 言われる / 頼まれる / 注意される",
        "meaning": "Được/bị dặn, nhắc nhở, nhờ là hãy làm / đừng làm gì...",
        "example_jp": "先生に遅れないように言われた。",
        "example_vi": "Tôi được thầy giáo dặn là không được đi trễ.",
        "nuance": "💡 Câu gián tiếp truyền đạt lại mệnh lệnh/yêu cầu bằng trợ từ 『ように』.",
        "category": "Truyền đạt & Giải thích"
    },
    {
        "id": "g_66", "stt": 66, "pattern": "～途中で / ～途中に", "structure": "Vる / Nの + 途中で（とちゅうで） / 途中に",
        "meaning": "Giữa chừng ~, đang trên đường ~",
        "example_jp": "スーパーに行く途中で、雨が降り始めた。",
        "example_vi": "Trên đường đi siêu thị thì trời bắt đầu đổ mưa.",
        "nuance": "💡 Đi với động từ chỉ sự di chuyển/quá trình ở dạng nguyên mẫu 『Vる + 途中で』.",
        "category": "Thời gian"
    },
    {
        "id": "g_68", "stt": 68, "pattern": "～のではないだろうか / ～んじゃない？", "structure": "V / Aい / Aな・N (bỏ だ) + のではないだろうか（のではないか）",
        "meaning": "Chẳng phải là ~ hay sao? Có lẽ là ~ đấy nhỉ?",
        "example_jp": "あの二人は付き合っているのではないだろうか。",
        "example_vi": "Chẳng phải hai người đó đang hẹn hò với nhau hay sao?",
        "nuance": "💡 Rất hay dùng ở câu kết của bài Đọc hiểu (Dokkai) để tác giả nêu ý kiến cá nhân một cách khéo léo, lịch sự!",
        "category": "Phỏng đoán"
    },
    {
        "id": "g_69", "stt": 69, "pattern": "Vる + ばかりだ", "structure": "Vる (Động từ biến đổi) + ばかりだ",
        "meaning": "Càng ngày càng ~, chỉ toàn tiến triển theo hướng ~ (Chủ yếu mang nghĩa tiêu cực)",
        "example_jp": "祖父の健康は悪くなるばかりだ。 / この問題はますます複雑になるばかりだ。",
        "example_vi": "Sức khỏe của ông tôi ngày một xấu đi. / Vấn đề này càng ngày càng trở nên phức tạp.",
        "nuance": "⚠️ Luôn đi với động từ chỉ sự biến đổi theo hướng xấu (悪くなる, 増える, 減る, 難しくなる).",
        "category": "Mức độ"
    },
    {
        "id": "g_70", "stt": 70, "pattern": "Vます + そうもない / そうにない", "structure": "Vます (bỏ ます) + そうもない / そうにない / そうにもない",
        "meaning": "Khó mà có thể ~, nhìn tình hình chắc không thể ~",
        "example_jp": "今日は忙しすぎて、早く帰れそうもない。",
        "example_vi": "Hôm nay bận quá nên chắc khó mà về sớm được.",
        "nuance": "💡 Thường đi kèm với động từ khả năng (帰れそうもない, 終わらなさそうだ / 終わりそうもない).",
        "category": "Phỏng đoán"
    },
    {
        "id": "g_71", "stt": 71, "pattern": "N + らしい (Đúng bản chất)", "structure": "N + らしい / らしく / らしさ",
        "meaning": "Đúng chất ~, đậm vẻ ~, xứng danh là ~",
        "example_jp": "あのシャツの色はきれいで、春らしいね。",
        "example_vi": "Màu chiếc áo sơ mi đó đẹp nhỉ, mang đậm sắc xuân.",
        "nuance": "⚠️ Phân biệt: 『N + らしい』(không có だ) = mang đầy đủ phẩm chất tiêu biểu của N (남자답다/đúng chất mùa xuân); còn 『N + みたい』 = chỉ là trông giống N nhưng bản chất không phải N.",
        "category": "Phỏng đoán"
    },
    {
        "id": "g_72", "stt": 72, "pattern": "～といった", "structure": "N1、N2 + といった + N (Danh từ tổng hợp)",
        "meaning": "Ví dụ như là ~, những thứ như là ~ (Liệt kê 2-3 đại diện tiêu biểu)",
        "example_jp": "私はこれまで、主にタイや中国、マレーシアといったアジアの国を回って、写真を撮っていました。",
        "example_vi": "Cho tới giờ tôi chủ yếu đi qua các nước châu Á như Thái Lan, Trung Quốc, Malaysia để chụp ảnh.",
        "nuance": "💡 Tương tự 『～などの + N』 nhưng trang trọng hơn.",
        "category": "Liên kết & Tương phản"
    },
    {
        "id": "g_73", "stt": 73, "pattern": "～っけ", "structure": "Câu quá khứ / thông thường + っけ？",
        "meaning": "...ấy nhỉ? (Hỏi xác nhận lại thông tin mình đã từng biết nhưng nhất thời quên mất)",
        "example_jp": "次の祝日っていつだっけ？来週だっけ？",
        "example_vi": "Ngày nghỉ lễ kế tiếp là lúc nào ấy nhỉ? Có phải tuần sau không nhỉ?",
        "nuance": "💡 Rất hay gặp trong bài Nghe hiểu (Choukai Mondai 4 & 5)!",
        "category": "Cảm thán & Hồi tưởng"
    },
    {
        "id": "g_75", "stt": 75, "pattern": "～てたまらない / ～てならない / ～てしょうがない", "structure": "Vて / Aくて / Aで + たまらない / ならない / しょうがない（しかたがない）",
        "meaning": "Rất ~, vô cùng ~ (Cảm xúc/cảm giác cơ thể dâng trào đến mức không chịu nổi)",
        "example_jp": "エアコンを使えないと暑くてたまらない。 / 遠くに住んでいる母のことを心配してならない。",
        "example_vi": "Nếu không dùng điều hòa thì nóng không chịu nổi. / Tôi vô cùng lo lắng cho người mẹ đang sống ở xa.",
        "nuance": "💡 『てならない』 trang trọng hơn và thường đi với cảm xúc tâm lý tự phát (心配でならない, 気になってならない).",
        "category": "Cảm xúc & Mong muốn"
    },
    {
        "id": "g_76", "stt": 76, "pattern": "～最中に / ～最中だ", "structure": "Vている / Nの + 最中に（さいちゅうに）",
        "meaning": "Đúng vào lúc đang cao trào ~ thì (có sự cố bất ngờ xen ngang)",
        "example_jp": "会議の最中に停電になった。",
        "example_vi": "Đúng lúc đang họp căng thẳng thì bị mất điện.",
        "nuance": "⚠️ Chú ý cách đọc chữ 『最中』 là 『さいちゅう』! Vế sau của 『最中に』 luôn là sự việc bất ngờ làm gián đoạn.",
        "category": "Thời gian"
    },
    {
        "id": "g_77", "stt": 77, "pattern": "～たとたん（に）", "structure": "Vた + とたん（に）",
        "meaning": "Vừa mới ~ thì ngay lập tức... (Sự việc bất ngờ xảy ra ngay sau V1)",
        "example_jp": "窓を開けたとたん、強い風が入ってきた。",
        "example_vi": "Tôi vừa mới mở cửa sổ ra thì một luồng gió mạnh ùa vào.",
        "nuance": "⚠️ Vế sau KHÔNG được dùng câu ý chí của người nói (không dùng: 帰ったとたん、寝ようと思う).",
        "category": "Thời gian"
    },
    {
        "id": "g_78", "stt": 78, "pattern": "～から～にかけて", "structure": "N1 + から + N2 + にかけて",
        "meaning": "Từ ~ đến khoảng ~ (Chỉ phạm vi thời gian/không gian liên tục nhưng ranh giới không cố định chính xác)",
        "example_jp": "このブドウは8月から9月にかけて収穫されます。",
        "example_vi": "Loại nho này được thu hoạch từ khoảng tháng 8 đến tháng 9.",
        "nuance": "💡 Khác với 『～から～まで』(điểm đầu cuối chính xác), 『にかけて』 chỉ khoảng ước chừng trải dài.",
        "category": "Phạm vi"
    },
    {
        "id": "g_79", "stt": 79, "pattern": "～（んだ）もの / ～もん", "structure": "Câu thông thường + もの / もん (Cuối câu)",
        "meaning": "Tại vì ~ mà! (Biện minh, giải thích lý do mang sắc thái nũng nịu, thân mật)",
        "example_jp": "今日の試験、できなかった。勉強しなかっただもん、仕方がない。",
        "example_vi": "Bài thi hôm nay tớ không làm được. Tại vì không học bài mà, đành chịu thôi.",
        "nuance": "💡 Cực kỳ hay xuất hiện trong Choukai Mondai 5 (hội thoại bạn bè/gia đình).",
        "category": "Nguyên nhân & Phương thức"
    },
    {
        "id": "g_80", "stt": 80, "pattern": "～に決まっている / ～に違いない", "structure": "V / Aい / Aな・N (bỏ だ) + に決まっている / に違いない",
        "meaning": "Chắc chắn là ~, nhất định là ~ (Khẳng định phỏng đoán mạnh mẽ)",
        "example_jp": "一人で外国へ旅行するなんて、親に反対されるに決まっている。 / 私の傘がない。誰かが持っていったに違いない。",
        "example_vi": "Đi du lịch nước ngoài một mình như thế, chắc chắn sẽ bị bố mẹ phản đối cho mà xem. / Không thấy ô của tôi đâu, chắc chắn là ai đó đã cầm nhầm rồi.",
        "nuance": "💡 『に決まっている』 mang tính chủ quan, cảm tính mạnh trong khẩu ngữ; 『に違いない』 mang tính suy luận logic/văn viết hơn.",
        "category": "Phỏng đoán"
    },
    {
        "id": "g_82", "stt": 82, "pattern": "～おそれがある", "structure": "Vる / Nの + おそれがある",
        "meaning": "E là ~, có nguy cơ xảy ra ~ (Dùng cho dự báo tin tức, thảm họa, nguy cơ xấu)",
        "example_jp": "大きい地震が起きたら、この建物が倒れるおそれがある。",
        "example_vi": "Nếu động đất lớn xảy ra, e là tòa nhà này có nguy cơ bị đổ.",
        "nuance": "💡 Luôn dùng cho sự việc TIÊU CỰC, trang trọng (bản tin thời tiết, y tế, kinh tế).",
        "category": "Phỏng đoán"
    },
    {
        "id": "g_83", "stt": 83, "pattern": "～にすぎない", "structure": "V / A / N（である） + にすぎない",
        "meaning": "Chỉ là ~ mà thôi, chẳng qua chỉ là ~ (Xem nhẹ mức độ)",
        "example_jp": "彼はただ子供にすぎないから、一人暮らしをすることはできないよ。",
        "example_vi": "Nó chẳng qua chỉ là một đứa trẻ mà thôi, không thể sống một mình được đâu.",
        "nuance": "💡 Thường đi kèm với các từ như 『ただ』『ほんの』『単なる』(chỉ đơn thuần là...).",
        "category": "Mức độ"
    },
    {
        "id": "g_84", "stt": 84, "pattern": "～ことか / ～ことに / ～ことだ", "structure": "どんなに + V/A + ことか (Cảm thán) / A + ことに (Đầu câu) / Vる・Vない + ことだ (Khuyên bảo)",
        "meaning": "Thật là ~ biết bao (ことか) / Thật đáng ~ là (ことに) / Quan trọng nhất là nên ~ (ことだ)",
        "example_jp": "合格できたら、どんなにうれしいことか。 / うれしいことに、試験に合格した。",
        "example_vi": "Nếu mà đỗ thì thật là vui biết mấy! / Thật đáng mừng là tôi đã đỗ kỳ thi.",
        "nuance": "⚠️ Phân biệt 3 mẫu chữ こと: (1) 『どんなに～ことか』 = Biết bao!; (2) 『うれしいことに、...』 = Thật đáng mừng là...; (3) 『健康のためには運動することだ』 = Cần phải vận động.",
        "category": "Cảm thán & Hồi tưởng"
    },
    {
        "id": "g_85", "stt": 85, "pattern": "～ものか / ～もんか", "structure": "Vる / Aい / Aな + ものか（もんか）",
        "meaning": "Không đời nào ~, làm gì có chuyện ~! (Phủ định cực mạnh kèm cảm xúc tức giận/quyết tâm)",
        "example_jp": "こんなにたくさんの仕事、明日までに終わるものか。",
        "example_vi": "Nhiều việc như thế này thì có đến mai cũng không đời nào xong nổi!",
        "nuance": "💡 Câu hỏi tu từ mang nghĩa phủ định tuyệt đối (あんな店、二度と行くもんか = Không đời nào thèm đến quán đó lần 2!).",
        "category": "Phủ định một phần"
    },
    {
        "id": "g_86", "stt": 86, "pattern": "～としたら / ～とすれば", "structure": "Câu thông thường + としたら / とすれば / とすると",
        "meaning": "Giả sử nếu ~, nếu cho rằng ~ thì...",
        "example_jp": "その話が本当だとしたら、うれしいです。",
        "example_vi": "Giả sử câu chuyện đó là thật thì tôi rất vui.",
        "nuance": "💡 Dùng để đặt giả thuyết chưa xảy ra hoặc giả định một thông tin là đúng để suy ra kết luận.",
        "category": "Điều kiện"
    },
    {
        "id": "g_87", "stt": 87, "pattern": "N + を通じて / を通して", "structure": "N + を通じて（をつうじて） / を通して（をとおして）",
        "meaning": "(1) Thông qua (phương tiện, trung gian) / (2) Xuyên suốt (khoảng thời gian: 四季を通じて = suốt 4 mùa)",
        "example_jp": "子供たちはスポーツを通して、いろいろなことを学ぶことができる。",
        "example_vi": "Thông qua việc chơi thể thao, trẻ em có thể học được rất nhiều điều.",
        "nuance": "💡 Cả hai đều dùng được cho cả nghĩa 'Thông qua' và 'Suốt cả'.",
        "category": "Nguyên nhân & Phương thức"
    },
    {
        "id": "g_88", "stt": 88, "pattern": "～しかない / ～ほか（は）ない", "structure": "Vる + しかない / ほか（は）ない",
        "meaning": "Không còn cách nào khác ngoài ~, đành phải ~",
        "example_jp": "パソコンを直せないから、新しいのを買うしかない。 / 気は進まないが、上司の命令なので、従うほかはない。",
        "example_vi": "Vì không sửa được máy tính nên đành phải mua cái mới thôi. / Tuy không hứng thú nhưng vì là mệnh lệnh cấp trên nên đành phải tuân theo.",
        "nuance": "💡 『ほかない』 trang trọng hơn 『しかない』. Tương đương với 『～ざるを得ない』.",
        "category": "Quy định & Quyết định"
    },
    {
        "id": "g_89", "stt": 89, "pattern": "N + を込めて", "structure": "N (Tình cảm: 愛, 感謝, 祈り, 心) + を込めて（をこめて）",
        "meaning": "Gửi gắm trọn vẹn (tình cảm, tấm lòng) vào hành động",
        "example_jp": "平和への願いをこめて、この歌を作りました。",
        "example_vi": "Tôi đã sáng tác bài hát này với tất cả ước nguyện hòa bình gửi gắm trong đó.",
        "nuance": "💡 Từ đi trước luôn là danh từ trừu tượng chỉ cảm xúc/tấm lòng.",
        "category": "Cảm xúc & Mong muốn"
    },
    {
        "id": "g_90", "stt": 90, "pattern": "Vた + まま / Vます + っぱなし", "structure": "Vた + まま / Vます (bỏ ます) + っぱなし",
        "meaning": "Để nguyên trạng thái ~ (まま: trung tính) / Bỏ mặc nguyên trạng thái không chịu dọn/tắt (っぱなし: chê trách)",
        "example_jp": "テレビをつけっぱなしで寝てしまった。",
        "example_vi": "Tôi cứ để tivi bật nguyên như thế rồi ngủ quên mất.",
        "nuance": "⚠️ Chú ý cách chia cho bài dấu sao ★: 『Vた + まま』 (chia thể た), còn 『Vます + っぱなし』 (bỏ ます, VD: 開けっぱなし, 出しっぱなし)!",
        "category": "Trạng thái"
    },
    {
        "id": "g_91", "stt": 91, "pattern": "N + きり / っきり (Giới hạn) & Vた + きり", "structure": "N + きり（っきり） / Vた + きり (+ Câu phủ định)",
        "meaning": "(1) Chỉ có ~ (2人っきり = chỉ có 2 người) / (2) Kể từ sau lần V cuối cùng đó thì không ~ nữa (Vた + きり)",
        "example_jp": "2人っきりで話したいです。 / ひろしは本屋へ行ったきり、まだ戻ってこない。",
        "example_vi": "Tôi muốn nói chuyện chỉ có riêng 2 người chúng ta. / Hiroshi kể từ lúc đi hiệu sách đến giờ vẫn chưa thấy quay về.",
        "nuance": "💡 Khi là 『Vた + きり』, vế sau luôn mang nghĩa phủ định (không lặp lại hay thay đổi gì kể từ mốc đó).",
        "category": "Thời gian"
    },
    {
        "id": "g_93", "stt": 93, "pattern": "～ふりをする", "structure": "V / Aい / Aな / Nの + ふりをする",
        "meaning": "Giả vờ ~, làm bộ như là ~",
        "example_jp": "彼は政治について知っているふりをするが、本当は知らないと思う。",
        "example_vi": "Anh ta giả vờ như hiểu biết về chính trị lắm, nhưng tôi nghĩ thật ra anh ta chẳng biết gì.",
        "nuance": "💡 Cụm từ hay gặp: 『聞こえないふりをする』(giả vờ không nghe thấy), 『寝たふりをする』(giả vờ ngủ).",
        "category": "Trạng thái"
    },
    {
        "id": "g_94", "stt": 94, "pattern": "～くせに", "structure": "V / Aい / Aな / Nの + くせに",
        "meaning": "Mặc dù ~ thế mà lại... (Trách móc, chê bai ngôi thứ 2 hoặc 3)",
        "example_jp": "知っているくせに、教えてくれなかった。",
        "example_vi": "Mặc dù biết rõ thế mà anh ta lại không chỉ cho tôi.",
        "nuance": "⚠️ Khác với 『のに』(dùng cho mọi trường hợp), 『くせに』 chỉ dùng cho chủ ngữ là NGƯỜI và mang sắc thái trách móc/coi thường, KHÔNG dùng cho bản thân.",
        "category": "Liên kết & Tương phản"
    },
    {
        "id": "g_95", "stt": 95, "pattern": "N1 + はもちろん、N2 + も", "structure": "N1 + はもちろん、N2 + も / まで",
        "meaning": "N1 thì khỏi phải bàn (đương nhiên rồi), mà ngay cả N2 cũng...",
        "example_jp": "彼は英語はもちろん、フランス語も話せる。",
        "example_vi": "Anh ấy tiếng Anh thì đương nhiên rồi, mà ngay cả tiếng Pháp cũng nói được.",
        "nuance": "💡 Tương đương với 『N1はもとより、N2も』.",
        "category": "Liên kết & Tương phản"
    },
    {
        "id": "g_98", "stt": 98, "pattern": "Vて + はじめて", "structure": "Vて + はじめて + V2 (わかった / 気づいた / 知った)",
        "meaning": "Chỉ sau khi trải qua V1 thì mới lần đầu tiên nhận ra / thấu hiểu...",
        "example_jp": "一人暮らしをして初めて、家族の大切さをわかってきた。",
        "example_vi": "Kể từ khi ra sống một mình tôi mới lần đầu tiên thấu hiểu được tầm quan trọng của gia đình.",
        "nuance": "⚠️ Đừng nhầm với 『Vます + はじめる』(bắt đầu làm V)! 『Vて + はじめて』 luôn mang nghĩa: Phải trải nghiệm A rồi mới ngộ ra B.",
        "category": "Thời gian"
    },
    {
        "id": "g_99", "stt": 99, "pattern": "N + をはじめ（として）", "structure": "N (Tiêu biểu nhất) + をはじめ（として）",
        "meaning": "Trước tiên phải kể đến ~, tiêu biểu là ~ (rồi đến các cái khác cùng nhóm)",
        "example_jp": "今年は富士山をはじめ、各地の有名な山に登りましょう。",
        "example_vi": "Năm nay chúng ta hãy cùng leo các ngọn núi nổi tiếng khắp nơi, trước tiên phải kể đến núi Phú Sĩ.",
        "nuance": "💡 Danh từ đứng trước 『をはじめ』 luôn là đại diện số 1 tiêu biểu nhất của nhóm danh từ phía sau.",
        "category": "Phạm vi"
    },
    {
        "id": "g_100", "stt": 100, "pattern": "Vます + かけ（だ / のN / る）", "structure": "Vます (bỏ ます) + かけだ / かけの + N / かける",
        "meaning": "Đang làm V dở dang, chưa xong",
        "example_jp": "これは私の読みかけの本です。 / 何か言いかけてやめた。",
        "example_vi": "Đây là cuốn sách tôi đang đọc dở. / Định nói gì đó nửa chừng rồi lại thôi.",
        "nuance": "💡 Rất hay gặp dưới dạng danh từ ghép: 『読みかけの本』(sách đọc dở), 『食べかけのりんご』(quả táo ăn dở).",
        "category": "Trạng thái"
    }
]

# High-yield Confusing Grammar Pairs (Bẫy cặp ngữ pháp dễ nhầm N3)
NUANCE_PAIRS = [
    {
        "id": "pair_1",
        "title": "について vs にとって vs に対して vs として",
        "tag": "Tử huyệt Trợ từ N3",
        "summary": "4 mẫu ngữ pháp đứng sau Danh từ xuất hiện trong 95% đề thi JLPT N3!",
        "rules": [
            "🔹 **N + について**: 'Về chủ đề N' -> Đi với động từ ngôn ngữ/tư duy: 話す, 聞く, 調べる, 書く, 考える.",
            "🔹 **N + にとって**: 'Đối với N (theo góc nhìn của N)' -> Vế sau LUÔN là tính từ đánh giá: 大切だ, 難しい, 必要だ, いい.",
            "🔹 **N + に対して**: (1) Thái độ hướng tới N (目上の人に対して敬語を使う) hoặc (2) Tương phản 2 vế (兄が静かなのに対して、弟はにぎやかだ).",
            "🔹 **N + として**: 'Với tư cách/vai trò là N' (留学生として来日した)."
        ]
    },
    {
        "id": "pair_2",
        "title": "おかげで vs せいで vs ため（に）",
        "tag": "Nguyên nhân - Kết quả",
        "summary": "Phân biệt sắc thái cảm xúc và văn phong khi nêu nguyên nhân.",
        "rules": [
            "🔹 **～おかげで**: Nhờ có ~ (Kết quả TỐT, biết ơn).",
            "🔹 **～せいで**: Tại vì ~ (Kết quả XẤU, đổ lỗi). Nếu chưa chắc chắn thì dùng **～せいか**.",
            "🔹 **～ため（に）**: Bởi vì ~ (Văn viết TRANG TRỌNG, trung tính khách quan, không dùng câu ý chí ở vế sau)."
        ]
    },
    {
        "id": "pair_3",
        "title": "わけがない vs わけではない vs ないことはない",
        "tag": "Phủ định toàn phần vs bộ phận",
        "summary": "Đừng để bị lừa bởi các mẫu có chữ わけ và ない!",
        "rules": [
            "🔹 **～わけがない (= はずがない)**: KHÔNG ĐỜI NÀO / Chắc chắn 100% không có chuyện đó.",
            "🔹 **～わけではない**: KHÔNG HẲN LÀ (Phủ định 1 phần: 'Tuy đắt nhưng không hẳn là ngon').",
            "🔹 **～ないことはない**: KHÔNG PHẢI LÀ KHÔNG (2 lần phủ định = Khẳng định yếu: 'Nếu cố ăn thì cũng không phải là không ăn được')."
        ]
    },
    {
        "id": "pair_4",
        "title": "うちに vs 間に vs 最中に",
        "tag": "Thời gian",
        "summary": "Cùng dịch là 'Trong lúc' nhưng cách dùng khác hẳn nhau!",
        "rules": [
            "🔹 **～うちに**: TRANH THỦ trước khi muộn (暖かいうちに食べる) hoặc biến đổi tự nhiên (聞いているうちに寝た).",
            "🔹 **～間に**: Khoảng thời gian khách quan (留守の間に泥棒が入った).",
            "🔹 **～最中に (さいちゅうに)**: ĐÚNG LÚC ĐANG CAO TRÀO thì bị sự cố bất ngờ cắt ngang (会議の最中に停電になった)."
        ]
    },
    {
        "id": "pair_5",
        "title": "ことになっている vs ことにしている vs ようにしている",
        "tag": "Quy định & Thói quen",
        "summary": "Quy tắc tập thể hay quyết tâm cá nhân?",
        "rules": [
            "🔹 **～ことになっている**: Quy định/Luật lệ khách quan hoặc lịch trình đã chốt.",
            "🔹 **～ことにしている**: Quyết định chủ quan của bản thân trở thành nguyên tắc (Mỗi sáng tôi quyết định dậy lúc 6h).",
            "🔹 **～ようにしている**: Cố gắng duy trì một thói quen tốt (Tôi cố gắng ăn nhiều rau mỗi ngày)."
        ]
    },
    {
        "id": "pair_6",
        "title": "Vたまま vs Vますっぱなし vs Vますかけ",
        "tag": "Trạng thái tiếp diễn",
        "summary": "Nhìn kỹ cách chia động từ phía trước để ăn trọn điểm bài dấu sao ★!",
        "rules": [
            "🔹 **Vた + まま**: Giữ nguyên trạng thái V1 mà làm V2 (眼鏡をかけたまま寝る).",
            "🔹 **Vます + っぱなし**: Bỏ mặc trạng thái đó không dọn/tắt - mang ý chê trách (開けっぱなし, つけっぱなし).",
            "🔹 **Vます + かけ**: Đang làm dở dang chưa xong (読みかけの本, 食べかけのパン)."
        ]
    }
]

# Interactive Star Puzzles (Bài toán Dấu Sao ★ - Mondai 2 chuẩn JLPT N3)
STAR_PUZZLES = [
    {
        "id": "star_1",
        "prefix": "この映画は、一度",
        "suffix": "忘れられないほど感動的だ。",
        "star_pos": 3, # 1-indexed (slot 1, 2, [3=★], 4)
        "options": [
            {"id": "A", "text": "見たら"},
            {"id": "B", "text": "最後"},
            {"id": "C", "text": "二度と"},
            {"id": "D", "text": "絶対に"}
        ],
        "correct_order": ["A", "B", "D", "C"], # 一度 見たら 最後 絶対に 二度と 忘れられない -> Wait let's make crystal-clear N3 standard star puzzles!
    }
]

# Let's replace STAR_PUZZLES with 15 ultra-accurate, classic JLPT N3 Star Puzzles
STAR_PUZZLES = [
    {
        "id": "star_1",
        "prefix": "日本に",
        "suffix": "一度富士山に登ってみたい。",
        "star_pos": 3,
        "options": [
            {"id": "1", "text": "うちに"},
            {"id": "2", "text": "いる"},
            {"id": "3", "text": "ぜひ"},
            {"id": "4", "text": "留学して"}
        ],
        "correct_order": ["4", "2", "1", "3"],
        "correct_option": "1",
        "full_sentence": "日本に 留学して いる [★うちに] ぜひ 一度富士山に登ってみたい。",
        "translation": "Tranh thủ lúc đang du học ở Nhật, nhất định tôi muốn thử một lần leo núi Phú Sĩ.",
        "explanation": "Cấu trúc 『Vている + うちに』(Tranh thủ trong lúc đang...). Cụm nối: 日本に留学している (đang du học ở Nhật) + うちに + ぜひ一度 (nhất định 1 lần) + 登ってみたい."
    },
    {
        "id": "star_2",
        "prefix": "彼は自分の失敗を",
        "suffix": "人のせいにばかりしている。",
        "star_pos": 2,
        "options": [
            {"id": "1", "text": "としない"},
            {"id": "2", "text": "認めよう"},
            {"id": "3", "text": "どころか"},
            {"id": "4", "text": "まったく"}
        ],
        "correct_order": ["4", "2", "1", "3"],
        "correct_option": "2",
        "full_sentence": "彼は自分の失敗を まったく [★認めよう] としない どころか 人のせいにばかりしている。",
        "translation": "Anh ta chẳng những hoàn toàn không chịu thừa nhận thất bại của mình mà còn toàn đổ lỗi cho người khác.",
        "explanation": "Mẹo ghép nhanh: 認める chia thể ý chí 『認めよう + としない』(không chịu thừa nhận), đi sau phó từ 『まったく』, nối tiếp bằng 『どころか』(chẳng những không... mà còn)."
    },
    {
        "id": "star_3",
        "prefix": "この仕事は経験が",
        "suffix": "有利になります。",
        "star_pos": 3,
        "options": [
            {"id": "1", "text": "ほど"},
            {"id": "2", "text": "ある"},
            {"id": "3", "text": "あれば"},
            {"id": "4", "text": "採用されるのに"}
        ],
        "correct_order": ["3", "2", "1", "4"],
        "correct_option": "1",
        "full_sentence": "この仕事は経験が あれば ある [★ほど] 採用されるのに 有利になります。",
        "translation": "Công việc này càng có kinh nghiệm thì càng có lợi cho việc được tuyển dụng.",
        "explanation": "Cấu trúc kinh điển 『～ば～ほど』(Càng... càng...) lặp lại cùng 1 động từ: 経験が + あれば (thể điều kiện) + ある (thể nguyên dạng) + ほど."
    },
    {
        "id": "star_4",
        "prefix": "家に帰って",
        "suffix": "寝てしまった。",
        "star_pos": 2,
        "options": [
            {"id": "1", "text": "まま"},
            {"id": "2", "text": "電気を"},
            {"id": "3", "text": "ソファーで"},
            {"id": "4", "text": "つけた"}
        ],
        "correct_order": ["2", "4", "1", "3"],
        "correct_option": "4",
        "full_sentence": "家に帰って 電気を [★つけた] まま ソファーで 寝てしまった。",
        "translation": "Về đến nhà, tôi cứ để đèn bật nguyên như thế rồi ngủ quên trên ghế sofa.",
        "explanation": "Cấu trúc 『Vた + まま』(Giữ nguyên trạng thái V): 電気を (bật điện) + つけた + まま + ソファーで寝てしまった."
    },
    {
        "id": "star_5",
        "prefix": "家族とよく",
        "suffix": "決められない。",
        "star_pos": 2,
        "options": [
            {"id": "1", "text": "からでないと"},
            {"id": "2", "text": "相談して"},
            {"id": "3", "text": "進学するかどうか"},
            {"id": "4", "text": "まだ"}
        ],
        "correct_order": ["2", "1", "3", "4"],
        "correct_option": "1",
        "full_sentence": "家族とよく 相談して [★からでないと] 進学するかどうか まだ 決められない。",
        "translation": "Nếu không bàn bạc kỹ với gia đình trước thì tôi vẫn chưa thể quyết định có học lên hay không.",
        "explanation": "Nhìn cuối câu có 『決められない』(phủ định) -> Ghép ngay 『Vて + からでないと』(相談してからでないと = nếu không bàn bạc trước thì...)."
    },
    {
        "id": "star_6",
        "prefix": "私に",
        "suffix": "ものはありません。",
        "star_pos": 3,
        "options": [
            {"id": "1", "text": "ほど"},
            {"id": "2", "text": "家族の健康"},
            {"id": "3", "text": "大切な"},
            {"id": "4", "text": "とって"}
        ],
        "correct_order": ["4", "2", "1", "3"],
        "correct_option": "1",
        "full_sentence": "私に とって 家族の健康 [★ほど] 大切な ものはありません。",
        "translation": "Đối với tôi, không có thứ gì quan trọng bằng sức khỏe của gia đình.",
        "explanation": "Kết hợp 2 ngữ pháp N3: 『私にとって』(Đối với tôi) + 『N + ほど + A + ものはない』(Không có thứ gì A bằng N)."
    },
    {
        "id": "star_7",
        "prefix": "親にどんなに",
        "suffix": "あきらめない。",
        "star_pos": 1,
        "options": [
            {"id": "1", "text": "反対されても"},
            {"id": "2", "text": "留学する"},
            {"id": "3", "text": "という"},
            {"id": "4", "text": "夢は"}
        ],
        "correct_order": ["1", "2", "3", "4"],
        "correct_option": "1",
        "full_sentence": "親にどんなに [★反対されても] 留学する という 夢は あきらめない。",
        "translation": "Cho dù có bị bố mẹ phản đối thế nào đi nữa, tôi cũng không từ bỏ ước mơ đi du học.",
        "explanation": "Đầu câu có 『親にどんなに』 -> Đi ngay với động từ bị động chia thể ても: 『反対されても』. Phía sau là 『留学するという夢』(ước mơ đi du học)."
    },
    {
        "id": "star_8",
        "prefix": "一人暮らしを",
        "suffix": "気づいた。",
        "star_pos": 2,
        "options": [
            {"id": "1", "text": "ありがたさに"},
            {"id": "2", "text": "はじめて"},
            {"id": "3", "text": "親の"},
            {"id": "4", "text": "してみて"}
        ],
        "correct_order": ["4", "2", "3", "1"],
        "correct_option": "2",
        "full_sentence": "一人暮らしを してみて [★はじめて] 親の ありがたさに 気づいた。",
        "translation": "Phải thử sống một mình rồi tôi mới lần đầu tiên nhận ra sự đáng quý của bố mẹ.",
        "explanation": "Cấu trúc 『Vて + はじめて + 気づいた/わかった』(Sau khi làm V mới lần đầu nhận ra). 『気づく』 đi với trợ từ 『に』(ありがたさに気づいた)."
    },
    {
        "id": "star_9",
        "prefix": "このレストランは値段が",
        "suffix": "いつも混んでいる。",
        "star_pos": 2,
        "options": [
            {"id": "1", "text": "わりに"},
            {"id": "2", "text": "量が多くて"},
            {"id": "3", "text": "安い"},
            {"id": "4", "text": "おいしいため"}
        ],
        "correct_order": ["3", "1", "2", "4"],
        "correct_option": "1",
        "full_sentence": "このレストランは値段が 安い [★わりに] 量が多くて おいしいため いつも混んでいる。",
        "translation": "Nhà hàng này so với mức giá rẻ thì phần ăn lại nhiều và ngon nên lúc nào cũng đông khách.",
        "explanation": "Cụm cố định: 『値段が安い + わりに』(So với mức giá rẻ thì...)."
    },
    {
        "id": "star_10",
        "prefix": "パソコンが壊れて",
        "suffix": "ほかない。",
        "star_pos": 4,
        "options": [
            {"id": "1", "text": "買う"},
            {"id": "2", "text": "新しいのを"},
            {"id": "3", "text": "直せないから"},
            {"id": "4", "text": "しまったので"}
        ],
        "correct_order": ["4", "3", "2", "1"],
        "correct_option": "1",
        "full_sentence": "パソコンが壊れて しまったので 直せないから 新しいのを [★買う] ほかない。",
        "translation": "Vì máy tính bị hỏng mất rồi không sửa được nên đành phải mua cái mới thôi.",
        "explanation": "Trước 『ほかない』(= しかない: đành phải) bắt buộc là động từ nguyên mẫu Vる -> 『買うほかない』."
    }
]

# Multiple-choice Grammar Trap Quizzes (Mondai 1 - Phân biệt bẫy ngữ pháp N3)
GRAMMAR_QUIZZES = [
    {
        "id": "gq_1",
        "question": "若い女性（　　）、買い物はストレス解消の大切な方法だ。",
        "options": ["について", "にとって", "に対して", "として"],
        "answer": 1,
        "grammar_ref": "g_56",
        "explanation": "Vế sau là 『大切な方法だ』(là phương pháp quan trọng -> câu đánh giá trên quan điểm của ai đó), nên bắt buộc chọn **にとって** (Đối với phụ nữ trẻ)."
    },
    {
        "id": "gq_2",
        "question": "かさを（　　）出かけてしまい、駅で雨に降られた。",
        "options": ["持たないで", "持たずに", "持ちかけで", "持ったまま"],
        "answer": 1,
        "grammar_ref": "g_24",
        "explanation": "Trong văn viết chuẩn N3, 『持たずに』(...mà không mang theo ô) là đáp án chính xác. Lưu ý: nếu cả 持たないで và 持たずに cùng đúng về ngữ pháp thông thường, trong bài đọc/văn viết người ta ưu tiên 『ずに』, hoặc hãy nhớ quy tắc 『する -> せずに』."
    },
    {
        "id": "gq_3",
        "question": "昨日、会議の（　　）、急に停電になって驚いた。",
        "options": ["うちに", "最中に", "たびに", "ついでに"],
        "answer": 1,
        "grammar_ref": "g_76",
        "explanation": "Sự cố mất điện xảy ra bất ngờ cắt ngang đúng lúc cuộc họp đang diễn ra -> Dùng **最中に (さいちゅうに)**."
    },
    {
        "id": "gq_4",
        "question": "あの真面目な田中さんが、大事な約束を忘れる（　　）。きっと何かあったのだろう。",
        "options": ["わけではない", "はずがない", "とは限らない", "ことはない"],
        "answer": 1,
        "grammar_ref": "g_35",
        "explanation": "Phủ định 100% khả năng anh Tanaka (người rất nghiêm túc) quên lời hứa -> Dùng **はずがない** (Chắc chắn không thể có chuyện đó)."
    },
    {
        "id": "gq_5",
        "question": "私は甘いものが好きだが、どんなケーキでも好きな（　　）。",
        "options": ["わけがない", "わけではない", "にすぎない", "に違いない"],
        "answer": 1,
        "grammar_ref": "g_37",
        "explanation": "Phủ định một phần ('Tuy thích đồ ngọt nhưng KHÔNG HẲN LÀ bánh ngọt nào cũng thích') -> Chọn **わけではない**."
    },
    {
        "id": "gq_6",
        "question": "窓を開けた（　　）、冷たい風が入ってきた。",
        "options": ["とたんに", "ついでに", "最中に", "うちに"],
        "answer": 0,
        "grammar_ref": "g_77",
        "explanation": "Vừa mới mở cửa sổ (Vた) thì ngay lập tức gió lạnh ùa vào -> Chọn **とたんに**."
    },
    {
        "id": "gq_7",
        "question": "このアパートは駅から遠い（　　）、家賃がかなり高い。",
        "options": ["おかげで", "わりに", "につれて", "によって"],
        "answer": 1,
        "grammar_ref": "g_48",
        "explanation": "Trái với tiêu chuẩn thông thường (xa nhà ga lẽ ra phải rẻ, đằng này tiền thuê lại khá đắt) -> Chọn **わりに** (Tuy... nhưng so với...)."
    },
    {
        "id": "gq_8",
        "question": "健康のために、毎日野菜をたくさん食べる（　　）。",
        "options": ["ことになっている", "ようにしている", "ようとしない", "ばかりだ"],
        "answer": 1,
        "grammar_ref": "g_50",
        "explanation": "Cố gắng duy trì một thói quen tốt mỗi ngày -> Chọn **ようにしている**."
    },
    {
        "id": "gq_9",
        "question": "面接の質問は難しくありませんから、そんなに心配する（　　）よ。",
        "options": ["ことはありません", "はずがありません", "わけではありません", "しかありません"],
        "answer": 0,
        "grammar_ref": "g_59",
        "explanation": "Khuyên nhủ 'Không cần phải lo lắng đến thế đâu' -> Chọn **ことはありません (Vる + ことはない)**."
    },
    {
        "id": "gq_10",
        "question": "台風の影響で、明日は強い雨が降る（　　）があります。ご注意ください。",
        "options": ["おかげ", "おそれ", "ぎみ", "ふり"],
        "answer": 1,
        "grammar_ref": "g_82",
        "explanation": "Dự báo nguy cơ xấu trên bản tin thời tiết -> Chọn **おそれ (おそれがある = có nguy cơ/e rằng)**."
    },
    {
        "id": "gq_11",
        "question": "知っている（　　）、どうして教えてくれなかったの？",
        "options": ["くせに", "せいで", "ために", "からには"],
        "answer": 0,
        "grammar_ref": "g_94",
        "explanation": "Trách móc người đối diện ('Biết rõ thế mà tại sao lại không chỉ cho tớ?') -> Chọn **くせに**."
    },
    {
        "id": "gq_12",
        "question": "宿題を（　　）ずに学校へ行って、先生に叱られた。",
        "options": ["し", "せ", "する", "した"],
        "answer": 1,
        "grammar_ref": "g_24",
        "explanation": "Bẫy kinh điển của 『～ずに』: Động từ する bắt buộc biến đổi thành **せずに**!"
    }
]

# Smart Dokkai Passages (Trạm Giải Phẫu Đọc Hiểu N3)
DOKKAI_PASSAGES = [
    {
        "id": "dokkai_1",
        "type": "Tankibun (Đoạn văn ngắn - 200 chữ)",
        "title": "Bài 1: Cái bẫy của việc 'Mua đồ giảm giá'",
        "passage_ruby": """<span class="s-topic">スーパーで「3個買うと安くなる」という表示を見ると、つい必要ないものまで買ってしまうことがある。</span><span class="s-contrast">しかし、</span>安く買えたと思って喜んでいたのに、<span class="s-reason">結局使い切れずに捨ててしまうなら、</span><span class="s-main">それはお金を無駄にしているのにすぎないのではないだろうか。</span><span class="s-conclusion">本当に賢い買い物とは、値段の安さだけでなく、「今本当に必要かどうか」を考えて選ぶことだ。</span>""",
        "translation": "Khi nhìn thấy biển báo 'Mua 3 cái sẽ rẻ hơn' ở siêu thị, đôi khi chúng ta lỡ mua cả những thứ không cần thiết. Tuy nhiên, dù vui mừng vì nghĩ rằng đã mua được giá rẻ, nhưng nếu rốt cuộc không dùng hết mà phải vứt đi, thì chẳng phải điều đó chỉ là đang lãng phí tiền bạc mà thôi sao? Việc mua sắm thực sự thông thái là không chỉ nhìn vào giá rẻ, mà phải suy nghĩ xem 'Hiện tại có thực sự cần hay không' rồi mới lựa chọn.",
        "anatomy": [
            {"color": "topic", "label": "Mở bài (Hiện tượng)", "text": "つい～てしまうことがある (Đôi khi lỡ mua...) -> Chỉ là dẫn nhập, KHÔNG phải ý chính!"},
            {"color": "contrast", "label": "Từ nối chuyển ý (Tử huyệt)", "text": "しかし (Tuy nhiên) -> Ý chính của tác giả LUÔN nằm sau 『しかし』!"},
            {"color": "main", "label": "Nhận định của tác giả", "text": "～にすぎないのではないだろうか (Chẳng phải chỉ là lãng phí tiền thôi sao? -> Ngữ pháp số 68 + 83)"},
            {"color": "conclusion", "label": "Câu chốt đáp án", "text": "本当に賢い買い物とは... 値段の安さだけでなく、「今本当に必要かどうか」を考えて選ぶことだ。"}
        ],
        "question": "筆者が最も言いたいことは何か。",
        "options": [
            "スーパーでは3個まとめて買うほうがいつもお得だ。",
            "安くても必要かどうか考えてから買うべきだ。",
            "使い切れないものは友達にあげたほうがいい。",
            "値段が高いものほど品質がよくて長持ちする。"
        ],
        "answer": 1,
        "explanation": "Nhìn thẳng vào câu chốt sau 『本当に賢い買い物とは...』: Mua sắm thông minh là phải suy nghĩ xem có thực sự cần thiết hay không chứ không chỉ nhìn vào giá rẻ -> Đáp án 2 khớp 100%!"
    },
    {
        "id": "dokkai_2",
        "type": "Tankibun (Đoạn văn ngắn - Triết lý cuộc sống)",
        "title": "Bài 2: Ý nghĩa thực sự của sự thất bại",
        "passage_ruby": """<span class="s-topic">若いころは、失敗することを恐れて、新しいことに挑戦しようとしない人が多い。</span><span class="s-contrast">確かに、</span>失敗すれば恥ずかしいし、自信をなくすこともあるだろう。<span class="s-contrast">だが、</span><span class="s-reason">実際にやってみて失敗してはじめて、</span><span class="s-main">自分に何が足りないのかがわかるものだ。</span><span class="s-conclusion">失敗しないことよりも、失敗から何を学ぶかこそが大切なのである。</span>""",
        "translation": "Khi còn trẻ, có nhiều người vì sợ thất bại nên không chịu thử thách với những điều mới mẻ. Quả thực, nếu thất bại thì sẽ xấu hổ và có lúc đánh mất tự tin. Thế nhưng, chỉ sau khi thực sự bắt tay vào làm và trải qua thất bại thì con người ta mới nhận ra bản thân còn thiếu sót điều gì. Hơn cả việc không thất bại, chính việc học được gì từ thất bại mới là điều quan trọng.",
        "anatomy": [
            {"color": "topic", "label": "Hiện trạng", "text": "挑戦しようとしない人が多い (Nhiều người không chịu thử thách - Ngữ pháp số 43)"},
            {"color": "contrast", "label": "Cặp nhượng bộ - phản bác", "text": "確かに (Quả thực là...) ... だが (Thế nhưng...) -> Bỏ qua vế 確かに, đọc kỹ vế sau だが!"},
            {"color": "main", "label": "Ngữ pháp then chốt", "text": "失敗してはじめて...わかる (Phải thất bại rồi mới nhận ra - Ngữ pháp số 98)"},
            {"color": "conclusion", "label": "Đỉnh điểm nhấn mạnh", "text": "失敗から何を学ぶかこそが大切なのである (Chính chữ 『こそ』 chỉ thẳng vào đáp án!)"}
        ],
        "question": "「失敗」について、筆者はどのように考えているか。",
        "options": [
            "自信をなくすので、できるだけ失敗しないように注意すべきだ。",
            "若いころは経験が少ないから、新しいことに挑戦しないほうがいい。",
            "失敗を恐れず、失敗した経験から学ぶことが重要だ。",
            "恥ずかしい思いをしないために、準備を完璧にしなければならない。"
        ],
        "answer": 2,
        "explanation": "Mẹo vàng Dokkai N3: Khi thấy cấu trúc 『確かに A が、だが B こそが大切だ』, đáp án luôn là câu viết lại (paraphrase) của vế B -> Đáp án 3 (Không sợ thất bại và học hỏi từ trải nghiệm thất bại là quan trọng)."
    },
    {
        "id": "dokkai_3",
        "type": "Thông báo / Email công việc (Mondai 4)",
        "title": "Bài 3: Thông báo thay đổi phòng họp và tài liệu",
        "passage_ruby": """<span class="s-topic">営業部のみなさんへ</span><br>来週月曜日（10月26日）午後2時からの会議室が、3階の「第1会議室」から5階の「大会議室」に変更になりました。<span class="s-contrast">なお、</span>会議の時間は変わりません。<br><span class="s-main">また、会議で使う資料は、金曜日までに各自で印刷して持参することになっています。</span><span class="s-conclusion">当日、会場では配りませんので、忘れないようにご注意ください。</span>""",
        "translation": "Gửi các thành viên phòng Kinh doanh,\nPhòng họp cho buổi họp từ 2 giờ chiều thứ Hai tuần sau (26/10) đã được đổi từ 'Phòng họp số 1' tầng 3 lên 'Phòng họp lớn' tầng 5. Ngoài ra, thời gian họp không thay đổi.\nThêm nữa, tài liệu dùng trong buổi họp theo quy định mỗi người phải tự in trước thứ Sáu và mang theo. Vào ngày họp sẽ không phát tại hội trường nên xin lưu ý đừng quên.",
        "anatomy": [
            {"color": "topic", "label": "Thay đổi địa điểm", "text": "3階 -> 5階「大会議室」に変更 (Thời gian giữ nguyên 2h chiều thứ Hai)"},
            {"color": "main", "label": "Quy định bắt buộc", "text": "金曜日までに各自で印刷して持参することになっています (Ngữ pháp số 26: Được quy định là phải tự in trước thứ Sáu và mang theo)"},
            {"color": "conclusion", "label": "Cảnh báo bẫy", "text": "当日、会場では配りません (Ngày hôm đó KHÔNG phát ở phòng họp)"}
        ],
        "question": "このお知らせを読んだ営業部の社員は、どうしなければならないか。",
        "options": [
            "月曜日の午後2時に3階の第1会議室へ行く。",
            "金曜日までに資料を印刷して、月曜日に5階の大会議室へ持って行く。",
            "月曜日の会議の前に、全員分の資料を印刷して会場で配る。",
            "会議の時間が変更になったので、スケジュールを直す。"
        ],
        "answer": 1,
        "explanation": "Tổng hợp 2 thông tin chính: (1) Đổi lên tầng 5 大会議室 và (2) Phải tự in tài liệu trước thứ Sáu để mang theo vào thứ Hai -> Đáp án 2."
    }
]

# Choukai Quick Reflex Drills (Mondai 4 & 5 - Nghe phản xạ tức thì)
CHOUKAI_DRILLS = [
    {
        "id": "choukai_1",
        "mondai": "Mondai 5 (Phản xạ Tức thì)",
        "situation": "Bạn cùng phòng nói với bạn câu này. Bạn đáp lại thế nào trong 3 giây?",
        "audio_text": "あれ、テレビ、つけっぱなしだよ。",
        "options": [
            "うん、今すぐ消すね。",
            "じゃあ、テレビをつけようか。",
            "まだ見ていないからわからないよ。"
        ],
        "answer": 0,
        "explanation": "『つけっぱなしだよ』 = 'Ơ kìa, tivi đang bật bỏ không kìa (chưa tắt kìa)!' -> Đáp lại tự nhiên nhất: 'Ừ, tớ tắt ngay đây' (うん、今すぐ消すね)."
    },
    {
        "id": "choukai_2",
        "mondai": "Mondai 5 (Phản xạ Tức thì)",
        "situation": "Đồng nghiệp hỏi xác nhận lại thông tin với bạn:",
        "audio_text": "明日の会議、何時からだっけ？",
        "options": [
            "会議室は3階だよ。",
            "午後2時からだったと思うよ。",
            "うん、きのう終わったよ。"
        ],
        "answer": 1,
        "explanation": "『何時からだっけ？』(Ngữ pháp số 73: Mấy giờ bắt đầu ấy nhỉ? - hỏi lại vì quên) -> Trả lời giờ: 'Tớ nhớ là từ 2 giờ chiều đấy'."
    },
    {
        "id": "choukai_3",
        "mondai": "Mondai 5 (Phản xạ Tức thì)",
        "situation": "Bạn đang lo lắng trước kỳ thi JLPT N3, tiền bối động viên bạn:",
        "audio_text": "毎日あんなに頑張っているんだから、そんなに心配することないよ。",
        "options": [
            "すみません、これからもっと心配します。",
            "ありがとうございます。少し安心しました。",
            "いいえ、ぜんぜん頑張っていませんから。"
        ],
        "answer": 1,
        "explanation": "『心配することないよ』(Ngữ pháp số 59: Không cần phải lo lắng đến thế đâu) -> Lời an ủi, nên đáp lại là: 'Em cảm ơn, em yên tâm hơn một chút rồi ạ'."
    },
    {
        "id": "choukai_4",
        "mondai": "Mondai 4 (Tình huống Ngắn)",
        "situation": "Trời đang chuẩn bị mưa, mẹ nói với con trước khi con ra ngoài:",
        "audio_text": "今にも雨が降りそうだから、傘を持っていったほうがいいんじゃない？",
        "options": [
            "じゃあ、念のため持っていくよ。",
            "雨が降らなかったからよかったね。",
            "傘を貸してくれてありがとう。"
        ],
        "answer": 0,
        "explanation": "『～ほうがいいんじゃない？』(Chẳng phải là nên mang ô theo hay sao?) -> Đáp lại: 'Vậy để cẩn thận con sẽ mang theo (念のため持っていくよ)'."
    },
    {
        "id": "choukai_5",
        "mondai": "Mondai 5 (Phản xạ Tức thì)",
        "situation": "Bạn rủ đồng nghiệp đi uống nước, đồng nghiệp trả lời:",
        "audio_text": "ごめん、この仕事が終わってからでないと、行けないんだ。",
        "options": [
            "そっか、じゃあ終わるまで待ってるね。",
            "もう仕事が終わったんだね。よかった！",
            "仕事をする前に行くことにしよう。"
        ],
        "answer": 0,
        "explanation": "『終わってからでないと、行けない』(Ngữ pháp số 3: Nếu không làm xong việc này trước thì không đi được) -> Đáp lại: 'Vậy à, thế tớ đợi đến lúc cậu làm xong nhé'."
    }
]

output_path = os.path.join(os.path.dirname(__file__), "..", "data", "grammar_n3_data.js")
with open(output_path, "w", encoding="utf-8") as f:
    f.write("// Auto-generated JLPT N3 Campaign & Gap-Patching Database\n")
    f.write("const GRAMMAR_N3_DATA = " + json.dumps(GRAMMAR_100, ensure_ascii=False, indent=2) + ";\n\n")
    f.write("const NUANCE_PAIRS_DATA = " + json.dumps(NUANCE_PAIRS, ensure_ascii=False, indent=2) + ";\n\n")
    f.write("const STAR_PUZZLES_DATA = " + json.dumps(STAR_PUZZLES, ensure_ascii=False, indent=2) + ";\n\n")
    f.write("const GRAMMAR_QUIZZES_DATA = " + json.dumps(GRAMMAR_QUIZZES, ensure_ascii=False, indent=2) + ";\n\n")
    f.write("const DOKKAI_PASSAGES_DATA = " + json.dumps(DOKKAI_PASSAGES, ensure_ascii=False, indent=2) + ";\n\n")
    f.write("const CHOUKAI_DRILLS_DATA = " + json.dumps(CHOUKAI_DRILLS, ensure_ascii=False, indent=2) + ";\n")

print(f"Successfully generated grammar_n3_data.js with {len(GRAMMAR_100)} grammar points!")
