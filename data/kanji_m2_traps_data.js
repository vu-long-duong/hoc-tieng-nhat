// Verified JLPT N3 Taisaku Ch3 (pp.50-60): 3 Mondai 2 Kanji Confusion Trap Tables (On-Similar, Shape-Similar, Kun-Confusing)
const KANJI_M2_TRAPS_LIST = [
  {
    "id": "m2trap_1",
    "stt": 1,
    "trap_type": "on",
    "trap_label": "🔊 Âm On giống nhau",
    "group_title": "Âm 「てい」: 停 vs 亭",
    "items": [
      {
        "kanji": "停",
        "hv": "ĐÌNH",
        "read": "てい",
        "word_jp": "停車・停止・停電",
        "word_read": "ていしゃ・ていし・ていでん",
        "meaning_vi": "Dừng lại, đình chỉ (dừng xe, ngưng hoạt động, mất điện)",
        "exams": "12/2013"
      },
      {
        "kanji": "亭",
        "hv": "ĐÌNH",
        "read": "てい",
        "word_jp": "亭主・料亭",
        "word_read": "ていしゅ・りょうてい",
        "meaning_vi": "Chủ nhà/chồng, quán ăn Nhật cao cấp",
        "exams": "12/2014"
      }
    ],
    "diff_tip": "停 có bộ Nhân đứng 亻 (người dừng chân → 停車 dừng xe, 停電 mất điện); 亭 không có bộ Nhân (nhà đình, quán ăn sang 料亭).",
    "tts": "ていしゃ、ていし、ていでん、ていしゅ、りょうてい"
  },
  {
    "id": "m2trap_2",
    "stt": 2,
    "trap_type": "on",
    "trap_label": "🔊 Âm On giống nhau",
    "group_title": "Âm 「そく」: 則 vs 足",
    "items": [
      {
        "kanji": "則",
        "hv": "TẮC",
        "read": "そく",
        "word_jp": "規則・法則",
        "word_read": "きそく・ほうそく",
        "meaning_vi": "Quy tắc, định luật, nguyên tắc",
        "exams": "07/2015, 07/2019"
      },
      {
        "kanji": "足",
        "hv": "TÚC",
        "read": "そく",
        "word_jp": "不足・満足・遠足",
        "word_read": "ふそく・まんぞく・えんそく",
        "meaning_vi": "Đủ/thiếu, đôi chân (thiếu hụt, mãn nguyện, dã ngoại)",
        "exams": "12/2016"
      }
    ],
    "diff_tip": "則 có bộ Bối 貝 + Đao 刂 (chia tiền rạch ròi thành quy tắc 規則); 足 là bàn chân/sự đầy đủ (不足 thiếu, 遠足 đi bộ dã ngoại).",
    "tts": "きそく、ほうそく、ふそく、まんぞく、えんそく"
  },
  {
    "id": "m2trap_3",
    "stt": 3,
    "trap_type": "on",
    "trap_label": "🔊 Âm On giống nhau",
    "group_title": "Âm 「ちょう」: 重 vs 長",
    "items": [
      {
        "kanji": "重",
        "hv": "TRỌNG",
        "read": "ちょう・じゅう",
        "word_jp": "貴重・慎重・尊重",
        "word_read": "きちょう・しんちょう・そんちょう",
        "meaning_vi": "Quý trọng, thận trọng, tôn trọng",
        "exams": "07/2013"
      },
      {
        "kanji": "長",
        "hv": "TRƯỜNG",
        "read": "ちょう",
        "word_jp": "成長・社長・特長",
        "word_read": "せいちょう・しゃちょう・とくちょう",
        "meaning_vi": "Lớn lên/dài, người đứng đầu, ưu điểm nổi bật",
        "exams": "07/2010"
      }
    ],
    "diff_tip": "重 đọc ちょう mang nghĩa quý giá/coi trọng (貴重 quý báu, 慎重 cẩn trọng); 長 đọc ちょう là trưởng thành, dài hoặc người đứng đầu (成長, 社長).",
    "tts": "きちょう、しんちょう、そんちょう、せいちょう、しゃちょう、とくちょう"
  },
  {
    "id": "m2trap_4",
    "stt": 4,
    "trap_type": "on",
    "trap_label": "🔊 Âm On giống nhau",
    "group_title": "Âm 「し」: 師 vs 誌",
    "items": [
      {
        "kanji": "師",
        "hv": "SƯ",
        "read": "し",
        "word_jp": "医師・教師・看護師",
        "word_read": "いし・きょうし・かんごし",
        "meaning_vi": "Bậc thầy, người làm nghề chuyên môn (bác sĩ, giáo viên, y tá)",
        "exams": "12/2017"
      },
      {
        "kanji": "誌",
        "hv": "CHÍ",
        "read": "し",
        "word_jp": "雑誌・日誌",
        "word_read": "ざっし・にっし",
        "meaning_vi": "Sách báo ghi chép (tạp chí, nhật ký công việc)",
        "exams": "07/2012, 12/2018"
      }
    ],
    "diff_tip": "師 chỉ nghề chuyên môn có bằng cấp (医師 bác sĩ, 教師 giáo viên); 誌 có bộ Ngôn 言 nên chỉ ấn phẩm ghi chép (雑誌 tạp chí).",
    "tts": "いし、きょうし、かんごし、ざっし、にっし"
  },
  {
    "id": "m2trap_5",
    "stt": 5,
    "trap_type": "on",
    "trap_label": "🔊 Âm On giống nhau",
    "group_title": "Âm 「りょう」: 料 vs 量",
    "items": [
      {
        "kanji": "料",
        "hv": "LIỆU",
        "read": "りょう",
        "word_jp": "料金・材料・料理",
        "word_read": "りょうきん・ざいりょう・りょうり",
        "meaning_vi": "Cước phí, nguyên liệu, nấu ăn",
        "exams": "07/2011, 07/2012"
      },
      {
        "kanji": "量",
        "hv": "LƯỢNG",
        "read": "りょう",
        "word_jp": "重量・分量・大量",
        "word_read": "じゅうりょう・ぶんりょう・たいりょう",
        "meaning_vi": "Khối lượng, định lượng, số lượng lớn",
        "exams": "07/2011"
      }
    ],
    "diff_tip": "料 có bộ Mễ 米 (gạo → nguyên liệu 材料, tiền phí 料金, nấu nướng 料理); 量 có bộ Lý 里 (đo lường khối lượng, số lượng 大量).",
    "tts": "りょうきん、ざいりょう、りょうり、じゅうりょう、たいりょう"
  },
  {
    "id": "m2trap_6",
    "stt": 6,
    "trap_type": "on",
    "trap_label": "🔊 Âm On giống nhau",
    "group_title": "Âm 「たい」: 待 vs 退",
    "items": [
      {
        "kanji": "待",
        "hv": "ĐÃI",
        "read": "たい",
        "word_jp": "期待・招待・優待",
        "word_read": "きたい・しょうたい・ゆうたい",
        "meaning_vi": "Chờ đợi, tiếp đãi (kỳ vọng, mời dự, ưu đãi)",
        "exams": "07/2017"
      },
      {
        "kanji": "退",
        "hv": "THOÁI",
        "read": "たい",
        "word_jp": "退院・退職・引退",
        "word_read": "たいいん・たいしょく・いんたい",
        "meaning_vi": "Rút lui, rời khỏi (xuất viện, nghỉ việc, giải nghệ)",
        "exams": "12/2018"
      }
    ],
    "diff_tip": "待 là chờ mong/đón tiếp (期待 kỳ vọng, 招待 chiêu đãi); 退 có bộ Sước 辶 là bước lùi rời đi (退院 ra viện, 退職 nghỉ việc).",
    "tts": "きたい、しょうたい、たいいん、たいしょく"
  },
  {
    "id": "m2trap_7",
    "stt": 7,
    "trap_type": "on",
    "trap_label": "🔊 Âm On giống nhau",
    "group_title": "Âm 「じょう」: 常 vs 乗",
    "items": [
      {
        "kanji": "常",
        "hv": "THƯỜNG",
        "read": "じょう",
        "word_jp": "日常・常識・非常",
        "word_read": "にちじょう・じょうしき・ひじょう",
        "meaning_vi": "Thông thường, hằng ngày (thường nhật, kiến thức phổ thông, khẩn cấp)",
        "exams": "07/2010"
      },
      {
        "kanji": "乗",
        "hv": "THỪA",
        "read": "じょう",
        "word_jp": "乗車・乗客",
        "word_read": "じょうしゃ・じょうきゃく",
        "meaning_vi": "Lên xe, đi phương tiện (lên tàu xe, hành khách)",
        "exams": "07/2016"
      }
    ],
    "diff_tip": "常 là điều lặp lại hằng ngày (日常, 常識); 乗 nghĩa là lên/ngồi trên phương tiện giao thông (乗車 lên xe, 乗客 hành khách).",
    "tts": "にちじょう、じょうしき、ひじょう、じょうしゃ、じょうきゃく"
  },
  {
    "id": "m2trap_8",
    "stt": 8,
    "trap_type": "on",
    "trap_label": "🔊 Âm On giống nhau",
    "group_title": "Âm 「ざい」: 材 vs 在",
    "items": [
      {
        "kanji": "材",
        "hv": "TÀI",
        "read": "ざい",
        "word_jp": "材料・木材・教材",
        "word_read": "ざいりょう・もくざい・きょうざい",
        "meaning_vi": "Vật liệu, nguyên liệu, giáo trình",
        "exams": "07/2012"
      },
      {
        "kanji": "在",
        "hv": "TẠI",
        "read": "ざい",
        "word_jp": "存在・現在・滞在",
        "word_read": "そんざい・げんざい・たいざい",
        "meaning_vi": "Có mặt, hiện tại, lưu trú",
        "exams": "12/2011, 12/2015"
      }
    ],
    "diff_tip": "材 có bộ Mộc 木 (gỗ → vật liệu 材料, 木材); 在 có bộ Thổ 土 (đứng trên đất → tồn tại 存在, hiện tại 現在).",
    "tts": "ざいりょう、もくざい、きょうざい、そんざい、げんざい、たいざい"
  },
  {
    "id": "m2trap_9",
    "stt": 9,
    "trap_type": "on",
    "trap_label": "🔊 Âm On giống nhau",
    "group_title": "Âm 「かい」: 改 vs 解",
    "items": [
      {
        "kanji": "改",
        "hv": "CẢI",
        "read": "かい",
        "word_jp": "改善・改札・改正",
        "word_read": "かいぜん・かいさつ・かいせい",
        "meaning_vi": "Sửa đổi cho tốt hơn, soát vé (cải thiện, cửa soát vé, sửa luật)",
        "exams": "07/2011"
      },
      {
        "kanji": "解",
        "hv": "GIẢI",
        "read": "かい",
        "word_jp": "解決・理解・正解",
        "word_read": "かいけつ・りかい・せいかい",
        "meaning_vi": "Tháo gỡ, hiểu rõ (giải quyết, lý giải, đáp án đúng)",
        "exams": "07/2011"
      }
    ],
    "diff_tip": "改 là sửa lại cái cũ thành mới (改善 cải thiện, 改札 soát vé); 解 có Dao 刀 + Trâu 牛 là mổ xẻ cho rõ ràng (理解 hiểu, 解決 giải quyết).",
    "tts": "かいぜん、かいさつ、かいせい、かいけつ、りかい、せいかい"
  },
  {
    "id": "m2trap_10",
    "stt": 10,
    "trap_type": "on",
    "trap_label": "🔊 Âm On giống nhau",
    "group_title": "Âm 「しゃ」: 者 vs 車",
    "items": [
      {
        "kanji": "者",
        "hv": "GIẢ",
        "read": "しゃ",
        "word_jp": "医者・記者・読者",
        "word_read": "いしゃ・きしゃ・どくしゃ",
        "meaning_vi": "Người làm nghề/đối tượng (bác sĩ, phóng viên, độc giả)",
        "exams": "12/2013"
      },
      {
        "kanji": "車",
        "hv": "XA",
        "read": "しゃ",
        "word_jp": "電車・駐車・乗車",
        "word_read": "でんしゃ・ちゅうしゃ・じょうしゃ",
        "meaning_vi": "Xe cộ (tàu điện, đỗ xe, lên xe)",
        "exams": "12/2014"
      }
    ],
    "diff_tip": "者 chỉ CON NGƯỜI (記者 nhà báo, 読者 người đọc); 車 là hình chiếc XE (電車 tàu điện, 駐車 đỗ xe). Hay bị bẫy nghe âm しゃ!",
    "tts": "いしゃ、きしゃ、どくしゃ、でんしゃ、ちゅうしゃ"
  },
  {
    "id": "m2trap_11",
    "stt": 11,
    "trap_type": "on",
    "trap_label": "🔊 Âm On giống nhau",
    "group_title": "Âm 「か」: 仮 vs 家",
    "items": [
      {
        "kanji": "仮",
        "hv": "GIẢ",
        "read": "か",
        "word_jp": "仮定・仮面",
        "word_read": "かてい・かめん",
        "meaning_vi": "Tạm thời, giả định (giả thuyết, mặt nạ)",
        "exams": "12/2014, 12/2015"
      },
      {
        "kanji": "家",
        "hv": "GIA",
        "read": "か",
        "word_jp": "作家・画家・家族",
        "word_read": "さっか・がか・かぞく",
        "meaning_vi": "Chuyên gia, ngôi nhà/gia đình (nhà văn, họa sĩ, gia tộc)",
        "exams": "07/2011, 12/2012, 07/2016"
      }
    ],
    "diff_tip": "仮 (亻 + 反) là tạm bợ, không thật (仮定 giả định); 家 có mái nhà 宀 chỉ gia đình (家族) hoặc bậc chuyên gia (作家, 専門家).",
    "tts": "かてい、かめん、さっか、がか、かぞく"
  },
  {
    "id": "m2trap_12",
    "stt": 12,
    "trap_type": "on",
    "trap_label": "🔊 Âm On giống nhau",
    "group_title": "Âm 「てん」: 点 vs 天",
    "items": [
      {
        "kanji": "点",
        "hv": "ĐIỂM",
        "read": "てん",
        "word_jp": "点数・欠点・交差点",
        "word_read": "てんすう・けってん・こうさてん",
        "meaning_vi": "Điểm số, điểm yếu, giao điểm/ngã tư",
        "exams": "12/2015"
      },
      {
        "kanji": "天",
        "hv": "THIÊN",
        "read": "てん",
        "word_jp": "天気・天才・晴天",
        "word_read": "てんき・てんさい・せいてん",
        "meaning_vi": "Bầu trời, trời phú (thời tiết, thiên tài, trời quang)",
        "exams": "12/2015, 07/2019"
      }
    ],
    "diff_tip": "点 có 4 chấm Hỏa 灬 ở dưới → chấm điểm, địa điểm (点数, 欠点); 天 là bầu trời ở trên đầu người 大 (天気, 天才).",
    "tts": "てんすう、けってん、こうさてん、てんき、てんさい、せいてん"
  },
  {
    "id": "m2trap_13",
    "stt": 13,
    "trap_type": "on",
    "trap_label": "🔊 Âm On giống nhau",
    "group_title": "Âm 「ほう」: 方 vs 法",
    "items": [
      {
        "kanji": "方",
        "hv": "PHƯƠNG",
        "read": "ほう",
        "word_jp": "方法・方向・地方",
        "word_read": "ほうほう・ほうこう・ちほう",
        "meaning_vi": "Phương hướng, cách thức, địa phương",
        "exams": "12/2011"
      },
      {
        "kanji": "法",
        "hv": "PHÁP",
        "read": "ほう",
        "word_jp": "法律・文法・方法",
        "word_read": "ほうりつ・ぶんぽう・ほうほう",
        "meaning_vi": "Luật pháp, quy chuẩn, phương pháp",
        "exams": "12/2011"
      }
    ],
    "diff_tip": "方 là phương hướng/vùng miền (方向, 地方); 法 có chấm thủy 氵 (phẳng như mặt nước → công bằng như pháp luật 法律, quy tắc 文法).",
    "tts": "ほうほう、ほうこう、ちほう、ほうりつ、ぶんぽう"
  },
  {
    "id": "m2trap_14",
    "stt": 14,
    "trap_type": "on",
    "trap_label": "🔊 Âm On giống nhau",
    "group_title": "Âm 「りつ」: 立 vs 律",
    "items": [
      {
        "kanji": "立",
        "hv": "LẬP",
        "read": "りつ",
        "word_jp": "独立・設立・国立",
        "word_read": "どくりつ・せつりつ・こくりつ",
        "meaning_vi": "Đứng vững, thành lập (độc lập, thiết lập, quốc lập)",
        "exams": "12/2011"
      },
      {
        "kanji": "律",
        "hv": "LUẬT",
        "read": "りつ",
        "word_jp": "法律・規律・自律",
        "word_read": "ほうりつ・きりつ・じりつ",
        "meaning_vi": "Luật lệ, kỷ luật, tự giác",
        "exams": "12/2011"
      }
    ],
    "diff_tip": "立 là đứng/dựng nên tổ chức (設立 thành lập, 独立 độc lập); 律 có bộ Sách 彳 (khuôn khổ đi theo → 法律 pháp luật, 規律 kỷ luật). Đừng nhầm 自立 (tự lập) với 自律 (tự kỷ luật)!",
    "tts": "どくりつ、せつりつ、こくりつ、ほうりつ、きりつ、じりつ"
  },
  {
    "id": "m2trap_15",
    "stt": 15,
    "trap_type": "on",
    "trap_label": "🔊 Âm On giống nhau",
    "group_title": "Âm 「ゆう」: 由 vs 有",
    "items": [
      {
        "kanji": "由",
        "hv": "DO",
        "read": "ゆう・ゆ",
        "word_jp": "自由・理由・経由",
        "word_read": "じゆう・りゆう・けいゆ",
        "meaning_vi": "Nguyên do, tự do, đi qua/quá cảnh",
        "exams": "07/2017, 12/2019"
      },
      {
        "kanji": "有",
        "hv": "HỮU",
        "read": "ゆう",
        "word_jp": "有名・有料・所有",
        "word_read": "ゆうめい・ゆうりょう・しょゆう",
        "meaning_vi": "Có, sở hữu (nổi tiếng, có tính phí, sở hữu)",
        "exams": "12/2011"
      }
    ],
    "diff_tip": "由 là lý do/nguồn gốc đi qua (理由, 自由); 有 là CÓ cái gì đó (有名 có tiếng, 有料 có phí). Cực hay nhầm 理由 (lý do) với 有!",
    "tts": "じゆう、りゆう、けいゆ、ゆうめい、ゆうりょう、しょゆう"
  },
  {
    "id": "m2trap_16",
    "stt": 16,
    "trap_type": "on",
    "trap_label": "🔊 Âm On giống nhau",
    "group_title": "Âm 「じ」: 事 vs 自 vs 持",
    "items": [
      {
        "kanji": "事",
        "hv": "SỰ",
        "read": "じ",
        "word_jp": "事故・食事・返事",
        "word_read": "じこ・しょくじ・へんじ",
        "meaning_vi": "Sự việc, công việc (tai nạn, bữa ăn, hồi âm)",
        "exams": "12/2011"
      },
      {
        "kanji": "自",
        "hv": "TỰ",
        "read": "じ",
        "word_jp": "自由・自分・自動",
        "word_read": "じゆう・じぶん・じどう",
        "meaning_vi": "Tự bản thân (tự do, bản thân, tự động)",
        "exams": "12/2011"
      },
      {
        "kanji": "持",
        "hv": "TRÌ",
        "read": "じ",
        "word_jp": "維持・支持・持続",
        "word_read": "いじ・しじ・じぞく",
        "meaning_vi": "Cầm giữ, duy trì, ủng hộ, kéo dài",
        "exams": "07/2012"
      }
    ],
    "diff_tip": "事 là sự việc (食事, 返事); 自 là hình cái mũi chỉ bản thân (自分, 自動); 持 có bộ Tay 扌 là nắm giữ/duy trì (維持, 支持).",
    "tts": "じこ、しょくじ、へんじ、じゆう、じぶん、いじ、しじ"
  },
  {
    "id": "m2trap_17",
    "stt": 17,
    "trap_type": "on",
    "trap_label": "🔊 Âm On giống nhau",
    "group_title": "Âm 「いん」: 因 vs 院 vs 員",
    "items": [
      {
        "kanji": "因",
        "hv": "NHÂN",
        "read": "いん",
        "word_jp": "原因・要因",
        "word_read": "げんいん・よういん",
        "meaning_vi": "Nguyên nhân, yếu tố gây ra",
        "exams": "07/2017"
      },
      {
        "kanji": "院",
        "hv": "VIỆN",
        "read": "いん",
        "word_jp": "病院・入院・大学院",
        "word_read": "びょういん・にゅういん・だいがくいん",
        "meaning_vi": "Cơ sở, học viện, bệnh viện",
        "exams": "12/2018"
      },
      {
        "kanji": "員",
        "hv": "VIÊN",
        "read": "いん",
        "word_jp": "店員・社員・全員",
        "word_read": "てんいん・しゃいん・ぜんいん",
        "meaning_vi": "Thành viên, nhân viên (nhân viên cửa hàng, công ty, toàn thể)",
        "exams": "12/2018"
      }
    ],
    "diff_tip": "因 (大 trong 囗) là nguyên nhân gốc (原因); 院 có bộ Ấp 阝 chỉ tòa nhà cơ sở (病院); 員 có 貝 chỉ người/thành viên (店員, 社員).",
    "tts": "げんいん、よういん、びょういん、にゅういん、てんいん、しゃいん"
  },
  {
    "id": "m2trap_18",
    "stt": 18,
    "trap_type": "on",
    "trap_label": "🔊 Âm On giống nhau",
    "group_title": "Âm 「せき」: 績 vs 積 vs 席",
    "items": [
      {
        "kanji": "績",
        "hv": "TÍCH",
        "read": "せき",
        "word_jp": "成績・実績・業績",
        "word_read": "せいせき・じっせき・ぎょうせき",
        "meaning_vi": "Thành tích, kết quả đạt được, hiệu suất kinh doanh",
        "exams": "07/2016, 12/2018"
      },
      {
        "kanji": "積",
        "hv": "TÍCH",
        "read": "せき",
        "word_jp": "面積・積極的・蓄積",
        "word_read": "めんせき・せっきょくてき・ちくせき",
        "meaning_vi": "Chất đống, tích lũy (diện tích, tích cực, tích tụ)",
        "exams": "07/2016"
      },
      {
        "kanji": "席",
        "hv": "TỊCH",
        "read": "せき",
        "word_jp": "出席・欠席・座席",
        "word_read": "しゅっせき・けっせき・ざせき",
        "meaning_vi": "Chỗ ngồi, ghế (có mặt, vắng mặt, chỗ ngồi)",
        "exams": "07/2014"
      }
    ],
    "diff_tip": "績 có bộ Mịch 糸 (dệt sợi thành thành quả → 成績); 積 có bộ Hòa 禾 (chất lúa thành đống → 面積, 積極的); 席 có bộ Khăn 巾 dưới mái 广 (trải chiếu làm chỗ ngồi → 出席).",
    "tts": "せいせき、じっせき、めんせき、せっきょくてき、しゅっせき、ざせき"
  },
  {
    "id": "m2trap_19",
    "stt": 19,
    "trap_type": "on",
    "trap_label": "🔊 Âm On giống nhau",
    "group_title": "Âm 「こう」: 好 vs 康 vs 光",
    "items": [
      {
        "kanji": "好",
        "hv": "HẢO",
        "read": "こう",
        "word_jp": "好評・友好・好意",
        "word_read": "こうひょう・ゆうこう・こうい",
        "meaning_vi": "Tốt đẹp, yêu thích (đánh giá tốt, hữu nghị, thiện ý)",
        "exams": "12/2014"
      },
      {
        "kanji": "康",
        "hv": "KHANG",
        "read": "こう",
        "word_jp": "健康・健康診断",
        "word_read": "けんこう・けんこうしんだん",
        "meaning_vi": "An khang, khỏe mạnh (sức khỏe, khám sức khỏe)",
        "exams": "07/2011"
      },
      {
        "kanji": "光",
        "hv": "QUANG",
        "read": "こう",
        "word_jp": "観光・日光・光線",
        "word_read": "かんこう・にっこう・こうせん",
        "meaning_vi": "Ánh sáng, cảnh đẹp (du lịch tham quan, ánh nắng, tia sáng)",
        "exams": "12/2011"
      }
    ],
    "diff_tip": "好 (女 + 子) là yêu thương/tốt đẹp (好評, 友好); 康 hầu như chỉ đi trong 健康 (sức khỏe); 光 là ánh sáng (日光, 観光 đi ngắm cảnh sáng đẹp).",
    "tts": "こうひょう、ゆうこう、けんこう、かんこう、にっこう"
  },
  {
    "id": "m2trap_20",
    "stt": 20,
    "trap_type": "on",
    "trap_label": "🔊 Âm On giống nhau",
    "group_title": "Âm 「かい」: 解 vs 介 vs 界",
    "items": [
      {
        "kanji": "解",
        "hv": "GIẢI",
        "read": "かい",
        "word_jp": "理解・解説・解決",
        "word_read": "りかい・かいせつ・かいけつ",
        "meaning_vi": "Tháo gỡ, hiểu thấu (hiểu biết, giải thích, giải quyết)",
        "exams": "07/2015"
      },
      {
        "kanji": "介",
        "hv": "GIỚI",
        "read": "かい",
        "word_jp": "紹介・介護・仲介",
        "word_read": "しょうかい・かいご・ちゅうかい",
        "meaning_vi": "Làm cầu nối, chăm sóc (giới thiệu, hộ lý, môi giới)",
        "exams": "Trọng tâm N3"
      },
      {
        "kanji": "界",
        "hv": "GIỚI",
        "read": "かい",
        "word_jp": "世界・限界・業界",
        "word_read": "せかい・げんかい・ぎょうかい",
        "meaning_vi": "Ranh giới, phạm vi (thế giới, giới hạn, giới/ngành nghề)",
        "exams": "Trọng tâm N3"
      }
    ],
    "diff_tip": "解 là phân tích/giải thích (理解, 解説); 介 (không có ruộng 田) là đứng giữa kết nối (紹介 giới thiệu, 介護 chăm sóc); 界 có 田 ở trên là ranh giới lãnh thổ (世界, 限界).",
    "tts": "りかい、かいせつ、しょうかい、かいご、せかい、げんかい"
  },
  {
    "id": "m2trap_21",
    "stt": 21,
    "trap_type": "on",
    "trap_label": "🔊 Âm On giống nhau",
    "group_title": "Âm 「けい」: 系 vs 係 vs 経",
    "items": [
      {
        "kanji": "系",
        "hv": "HỆ",
        "read": "けい",
        "word_jp": "系統・体系",
        "word_read": "けいとう・たいけい",
        "meaning_vi": "Hệ thống, dòng dõi, chuỗi liên kết",
        "exams": "12/2017"
      },
      {
        "kanji": "係",
        "hv": "HỆ",
        "read": "けい",
        "word_jp": "関係・無関係",
        "word_read": "かんけい・むかんけい",
        "meaning_vi": "Mối liên hệ, sự liên quan giữa người với người",
        "exams": "12/2017"
      },
      {
        "kanji": "経",
        "hv": "KINH",
        "read": "けい",
        "word_jp": "経験・経済・経過",
        "word_read": "けいけん・けいざい・けいか",
        "meaning_vi": "Trải qua, quản lý (kinh nghiệm, kinh tế, quá trình)",
        "exams": "07/2017, 12/2017"
      }
    ],
    "diff_tip": "系 không có bộ Nhân 亻 là hệ thống khoa học (系統, 太陽系); 係 có bộ Nhân 亻 là quan hệ liên quan đến con người (関係); 経 là trải qua thời gian (経験, 経済).",
    "tts": "けいとう、たいけい、かんけい、むかんけい、けいけん、けいざい"
  },
  {
    "id": "m2trap_22",
    "stt": 22,
    "trap_type": "on",
    "trap_label": "🔊 Âm On giống nhau",
    "group_title": "Âm 「けつ」: 結 vs 決 vs 欠 vs 血",
    "items": [
      {
        "kanji": "結",
        "hv": "KẾT",
        "read": "けつ",
        "word_jp": "結果・結婚・結論",
        "word_read": "けっか・けっこん・けつろん",
        "meaning_vi": "Buộc chặt, kết lại (kết quả, kết hôn, kết luận)",
        "exams": "07/2011"
      },
      {
        "kanji": "決",
        "hv": "QUYẾT",
        "read": "けつ",
        "word_jp": "決定・解決・決心",
        "word_read": "けってい・かいけつ・けっしん",
        "meaning_vi": "Quyết định, giải quyết, quyết tâm",
        "exams": "07/2011, 12/2015"
      },
      {
        "kanji": "欠",
        "hv": "KHUYẾT",
        "read": "けつ",
        "word_jp": "欠席・欠点・欠乏",
        "word_read": "けっせき・けってん・けつぼう",
        "meaning_vi": "Thiếu sót, vắng mặt (nghỉ học, khuyết điểm, thiếu thốn)",
        "exams": "07/2014, 12/2015"
      },
      {
        "kanji": "血",
        "hv": "HUYẾT",
        "read": "けつ",
        "word_jp": "血液・出血・血圧",
        "word_read": "けつえき・しゅっけつ・けつあつ",
        "meaning_vi": "Máu (máu, chảy máu, huyết áp)",
        "exams": "07/2010"
      }
    ],
    "diff_tip": "結 có bộ Mịch 糸 (buộc kết quả 結果); 決 có chấm thủy 氵 (dứt khoát như dòng nước → 決定); 欠 là ngáp/thiếu hụt (欠席, 欠点); 血 là giọt máu trên đĩa 皿 (血液).",
    "tts": "けっか、けっこん、けってい、けっせき、けってん、けつえき"
  },
  {
    "id": "m2trap_23",
    "stt": 23,
    "trap_type": "on",
    "trap_label": "🔊 Âm On giống nhau",
    "group_title": "Âm 「げん」: 元 vs 原 vs 現",
    "items": [
      {
        "kanji": "元",
        "hv": "NGUYÊN",
        "read": "げん",
        "word_jp": "元気・次元",
        "word_read": "げんき・じげん",
        "meaning_vi": "Gốc ban đầu, tinh thần (khỏe mạnh, chiều không gian)",
        "exams": "07/2015"
      },
      {
        "kanji": "原",
        "hv": "NGUYÊN",
        "read": "げん",
        "word_jp": "原因・原料・原則",
        "word_read": "げんいん・げんりょう・げんそく",
        "meaning_vi": "Nguồn gốc, nguyên bản (nguyên nhân, nguyên liệu, nguyên tắc)",
        "exams": "07/2015, 12/2015"
      },
      {
        "kanji": "現",
        "hv": "HIỆN",
        "read": "げん",
        "word_jp": "現在・表現・実現",
        "word_read": "げんざい・ひょうげん・じつげん",
        "meaning_vi": "Hiện hữu, lộ ra (hiện tại, biểu hiện, thực hiện hóa)",
        "exams": "12/2015"
      }
    ],
    "diff_tip": "元 là khởi đầu/sức sống (元気); 原 có vách đá 厂 + suối nước là cội nguồn gốc rễ (原因, 原則); 現 có bộ Kiến 見 (nhìn thấy trước mắt → 現在, 実現).",
    "tts": "げんき、げんいん、げんりょう、げんそく、げんざい、ひょうげん"
  },
  {
    "id": "m2trap_24",
    "stt": 24,
    "trap_type": "on",
    "trap_label": "🔊 Âm On giống nhau",
    "group_title": "Âm 「かん」: 関 vs 簡 vs 観 vs 歓",
    "items": [
      {
        "kanji": "関",
        "hv": "QUAN",
        "read": "かん",
        "word_jp": "関係・関心・玄関",
        "word_read": "かんけい・かんしん・げんかん",
        "meaning_vi": "Liên quan, cửa ngõ (quan hệ, sự quan tâm, lối vào nhà)",
        "exams": "07/2015, 12/2017"
      },
      {
        "kanji": "簡",
        "hv": "GIẢN",
        "read": "かん",
        "word_jp": "簡単・簡潔",
        "word_read": "かんたん・かんけつ",
        "meaning_vi": "Đơn giản, ngắn gọn súc tích",
        "exams": "12/2011"
      },
      {
        "kanji": "観",
        "hv": "QUAN",
        "read": "かん",
        "word_jp": "観光・観客・観察",
        "word_read": "かんこう・かんきゃく・かんさつ",
        "meaning_vi": "Ngắm nhìn, quan sát (du lịch, khán giả, quan sát)",
        "exams": "12/2011"
      },
      {
        "kanji": "歓",
        "hv": "HOAN",
        "read": "かん",
        "word_jp": "歓迎・歓声",
        "word_read": "かんげい・かんせい",
        "meaning_vi": "Vui mừng chào đón (hoan nghênh, tiếng reo hò)",
        "exams": "Trọng tâm N3"
      }
    ],
    "diff_tip": "関 có cổng 門 (mối liên hệ 関係); 簡 có bộ Trúc ⺮ (thẻ tre ghi chép gọn → 簡単); 観 có bộ 見 (xem/ngắm → 観光, 観察); 歓 có 欠 (há miệng reo vui → 歓迎).",
    "tts": "かんけい、かんしん、かんたん、かんこう、かんさつ、かんげい"
  },
  {
    "id": "m2trap_25",
    "stt": 25,
    "trap_type": "on",
    "trap_label": "🔊 Âm On giống nhau",
    "group_title": "Âm 「しん」: 真 vs 信 vs 身 vs 心",
    "items": [
      {
        "kanji": "真",
        "hv": "CHÂN",
        "read": "しん",
        "word_jp": "写真・真剣・真実",
        "word_read": "しゃしん・しんけん・しんじつ",
        "meaning_vi": "Chân thực, sự thật (bức ảnh, nghiêm túc, chân lý)",
        "exams": "07/2012, 07/2013, 12/2018"
      },
      {
        "kanji": "信",
        "hv": "TÍN",
        "read": "しん",
        "word_jp": "自信・信用・信号",
        "word_read": "じしん・しんよう・しんごう",
        "meaning_vi": "Tin tưởng, tín hiệu (tự tin, uy tín, đèn tín hiệu)",
        "exams": "07/2013, 12/2013"
      },
      {
        "kanji": "身",
        "hv": "THÂN",
        "read": "しん",
        "word_jp": "身長・出身・自身",
        "word_read": "しんちょう・しゅっしん・じしん",
        "meaning_vi": "Cơ thể, bản thân (chiều cao, quê quán, chính mình)",
        "exams": "07/2010, 07/2013"
      },
      {
        "kanji": "心",
        "hv": "TÂM",
        "read": "しん",
        "word_jp": "心配・安心・関心",
        "word_read": "しんぱい・あんしん・かんしん",
        "meaning_vi": "Tấm lòng, tâm trạng (lo lắng, yên tâm, quan tâm)",
        "exams": "07/2012, 12/2018"
      }
    ],
    "diff_tip": "Siêu bẫy じしん: 自信 (tự tin, có 言 lời tin tưởng) vs 自身 (bản thân, là thân thể 身)! Còn 真 là sự thật (真実), 心 là trái tim/tâm trí (安心, 関心).",
    "tts": "しゃしん、しんじつ、じしん、しんよう、しんちょう、しんぱい、あんしん"
  },
  {
    "id": "m2trap_26",
    "stt": 26,
    "trap_type": "on",
    "trap_label": "🔊 Âm On giống nhau",
    "group_title": "Âm 「せい」: 精 vs 正 vs 成 vs 整",
    "items": [
      {
        "kanji": "精",
        "hv": "TINH",
        "read": "せい",
        "word_jp": "精神・精一杯",
        "word_read": "せいしん・せいいっぱい",
        "meaning_vi": "Tinh thần, dồn hết sức lực",
        "exams": "12/2018"
      },
      {
        "kanji": "正",
        "hv": "CHÍNH",
        "read": "せい",
        "word_jp": "正解・正確・正式",
        "word_read": "せいかい・せいかく・せいしき",
        "meaning_vi": "Đúng đắn, chính xác, chính thức",
        "exams": "07/2015, 07/2016"
      },
      {
        "kanji": "成",
        "hv": "THÀNH",
        "read": "せい",
        "word_jp": "成功・成長・完成",
        "word_read": "せいこう・せいちょう・かんせい",
        "meaning_vi": "Hoàn thành, trở nên (thành công, trưởng thành, hoàn tất)",
        "exams": "07/2015"
      },
      {
        "kanji": "整",
        "hv": "CHỈNH",
        "read": "せい",
        "word_jp": "整理・調整・整備",
        "word_read": "せいり・ちょうせい・せいび",
        "meaning_vi": "Sắp xếp chỉnh tề (dọn dẹp sắp xếp, điều chỉnh, bảo dưỡng)",
        "exams": "07/2016"
      }
    ],
    "diff_tip": "精 có bộ Mễ 米 (gạo tinh khiết → 精神 tinh thần); 正 là chuẩn/đúng (正解); 成 là nên việc (成功, 完成); 整 là CHỈNH đốn gọn gàng (整理, 調整 — lưu ý sách gốc in nhầm CHẾ!).",
    "tts": "せいしん、せいかい、せいかく、せいこう、せいちょう、せいり、ちょうせい"
  },
  {
    "id": "m2trap_27",
    "stt": 27,
    "trap_type": "on",
    "trap_label": "🔊 Âm On giống nhau",
    "group_title": "Âm 「き」 (1): 器 vs 機 vs 規 vs 記",
    "items": [
      {
        "kanji": "器",
        "hv": "KHÍ",
        "read": "き",
        "word_jp": "楽器・食器・容器",
        "word_read": "がっき・しょっき・ようき",
        "meaning_vi": "Dụng cụ, đồ đựng (nhạc cụ, bát đĩa, hộp đựng)",
        "exams": "12/2015"
      },
      {
        "kanji": "機",
        "hv": "CƠ",
        "read": "き",
        "word_jp": "機会・機械・飛行機",
        "word_read": "きかい・きかい・ひこうき",
        "meaning_vi": "Máy móc, cơ hội (cơ hội, máy móc, máy bay)",
        "exams": "07/2013"
      },
      {
        "kanji": "規",
        "hv": "QUY",
        "read": "き",
        "word_jp": "規則・規律・規模",
        "word_read": "きそく・きりつ・きぼ",
        "meaning_vi": "Quy định, chuẩn mực (quy tắc, kỷ luật, quy mô)",
        "exams": "07/2015, 07/2017"
      },
      {
        "kanji": "記",
        "hv": "KÝ",
        "read": "き",
        "word_jp": "記事・記憶・日記",
        "word_read": "きじ・きおく・にっき",
        "meaning_vi": "Ghi chép lại (bài báo, ký ức, nhật ký)",
        "exams": "07/2016"
      }
    ],
    "diff_tip": "器 có 4 miệng 口 (đồ đựng/nhạc cụ 食器, 楽器); 機 có bộ Mộc 木 là máy móc & cơ hội (機械, 機会); 規 có 見 là thước đo quy củ (規則); 記 có 言 là ghi chép (記事, 日記).",
    "tts": "がっき、しょっき、きかい、ひこうき、きそく、きじ、にっき"
  },
  {
    "id": "m2trap_28",
    "stt": 28,
    "trap_type": "on",
    "trap_label": "🔊 Âm On giống nhau",
    "group_title": "Âm 「き」 (2): 帰 vs 気 vs 基 vs 期",
    "items": [
      {
        "kanji": "帰",
        "hv": "QUY",
        "read": "き",
        "word_jp": "帰宅・帰国",
        "word_read": "きたく・きこく",
        "meaning_vi": "Trở về (về nhà, về nước)",
        "exams": "12/2012, 12/2018"
      },
      {
        "kanji": "気",
        "hv": "KHÍ",
        "read": "き",
        "word_jp": "天気・空気・元気",
        "word_read": "てんき・くうき・げんき",
        "meaning_vi": "Khí trời, không khí, tinh thần",
        "exams": "07/2011"
      },
      {
        "kanji": "基",
        "hv": "CƠ",
        "read": "き",
        "word_jp": "基本・基準・基礎",
        "word_read": "きほん・きじゅん・きそ",
        "meaning_vi": "Nền móng, nền tảng (cơ bản, tiêu chuẩn, cơ sở)",
        "exams": "07/2017"
      },
      {
        "kanji": "期",
        "hv": "KỲ",
        "read": "き",
        "word_jp": "期間・期待・期限",
        "word_read": "きかん・きたい・きげん",
        "meaning_vi": "Thời kỳ, kỳ hạn, sự mong đợi",
        "exams": "Trọng tâm N3"
      }
    ],
    "diff_tip": "帰 là quay về nhà (帰宅, 帰国); 気 là hơi khí/tâm trạng (天気, 空気); 基 có bộ Thổ 土 ở đáy là nền móng (基本, 基準); 期 có bộ Nguyệt 月 (trăng tròn theo chu kỳ → 期間, 期限).",
    "tts": "きたく、きこく、てんき、くうき、きほん、きじゅん、きかん、きげん"
  },
  {
    "id": "m2trap_29",
    "stt": 29,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Cùng bộ 巾: 市 vs 常",
    "items": [
      {
        "kanji": "市",
        "hv": "THỊ",
        "read": "し・いち",
        "word_jp": "都市・市場・市民",
        "word_read": "とし・いちば・しみん",
        "meaning_vi": "Thành phố, chợ, người dân thành phố",
        "exams": "07/2010"
      },
      {
        "kanji": "常",
        "hv": "THƯỜNG",
        "read": "じょう・つね",
        "word_jp": "日常・常識・常に",
        "word_read": "にちじょう・じょうしき・つねに",
        "meaning_vi": "Thường ngày, kiến thức chung, luôn luôn",
        "exams": "07/2010"
      }
    ],
    "diff_tip": "市 gọn chỉ có 亠 trên 巾 (đô thị 都市); 常 thêm đầu 尚 ở trên rất dày nét (thường xuyên 日常).",
    "tts": "とし、しみん、にちじょう、じょうしき"
  },
  {
    "id": "m2trap_30",
    "stt": 30,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Khung dọc giống nhau: 身 vs 耳",
    "items": [
      {
        "kanji": "身",
        "hv": "THÂN",
        "read": "しん・み",
        "word_jp": "身長・出身・中身",
        "word_read": "しんちょう・しゅっしん・なかみ",
        "meaning_vi": "Cơ thể, quê quán, phần ruột bên trong",
        "exams": "07/2010, 12/2013"
      },
      {
        "kanji": "耳",
        "hv": "NHĨ",
        "read": "じ・みみ",
        "word_jp": "耳・耳鼻科",
        "word_read": "みみ・じびか",
        "meaning_vi": "Cái tai, khoa tai mũi họng",
        "exams": "Trọng tâm N3"
      }
    ],
    "diff_tip": "身 có nét phẩy xiên dài cắt ngang bụng (hình thân người có bụng → 身長); 耳 chỉ là khung vuông thẳng đứng (cái tai みみ).",
    "tts": "しんちょう、しゅっしん、なかみ、みみ"
  },
  {
    "id": "m2trap_31",
    "stt": 31,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Hơn kém 1 phẩy: 血 vs 皿",
    "items": [
      {
        "kanji": "血",
        "hv": "HUYẾT",
        "read": "けつ・ち",
        "word_jp": "血液・出血・鼻血",
        "word_read": "けつえき・しゅっけつ・はなぢ",
        "meaning_vi": "Máu, chảy máu, chảy máu cam",
        "exams": "07/2010"
      },
      {
        "kanji": "皿",
        "hv": "MÃNH",
        "read": "さら",
        "word_jp": "お皿・小皿",
        "word_read": "おさら・こざら",
        "meaning_vi": "Cái đĩa, đĩa nhỏ",
        "exams": "Trọng tâm N3"
      }
    ],
    "diff_tip": "血 là đĩa 皿 có thêm 1 giọt máu 丿 nhỏ trên đầu (血液 máu); 皿 phẳng không có giọt trên đầu (お皿 cái đĩa).",
    "tts": "けつえき、しゅっけつ、おさら、こざら"
  },
  {
    "id": "m2trap_32",
    "stt": 32,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Thêm bộ Thủy 氵: 夜 vs 液",
    "items": [
      {
        "kanji": "夜",
        "hv": "DẠ",
        "read": "や・よる",
        "word_jp": "今夜・夜中・深夜",
        "word_read": "こんや・よなか・しんや",
        "meaning_vi": "Ban đêm (tối nay, nửa đêm, đêm khuya)",
        "exams": "07/2010"
      },
      {
        "kanji": "液",
        "hv": "DỊCH",
        "read": "えき",
        "word_jp": "液体・血液・胃液",
        "word_read": "えきたい・けつえき・いえき",
        "meaning_vi": "Chất lỏng, dịch (chất lỏng, máu, dịch vị)",
        "exams": "07/2010"
      }
    ],
    "diff_tip": "夜 không có nước là màn đêm (今夜, 深夜); 液 thêm chấm thủy 氵 bên trái là chất lỏng (液体, 血液).",
    "tts": "こんや、よなか、しんや、えきたい、けつえき"
  },
  {
    "id": "m2trap_33",
    "stt": 33,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Cùng bộ Ngôn 言: 語 vs 話",
    "items": [
      {
        "kanji": "語",
        "hv": "NGỮ",
        "read": "ご・かたる",
        "word_jp": "言語・単語・語る",
        "word_read": "げんご・たんご・かたる",
        "meaning_vi": "Ngôn ngữ, từ vựng, kể/trò chuyện sâu",
        "exams": "07/2010"
      },
      {
        "kanji": "話",
        "hv": "THOẠI",
        "read": "わ・はなす",
        "word_jp": "会話・電話・話す",
        "word_read": "かいわ・でんわ・はなす",
        "meaning_vi": "Nói chuyện (hội thoại, điện thoại, nói)",
        "exams": "Trọng tâm N3"
      }
    ],
    "diff_tip": "語 bên phải là 吾 (五 + 口 → năm thứ tiếng, ngôn ngữ 言語, 単語); 話 bên phải là 舌 (cái lưỡi → nói chuyện 会話, 話す).",
    "tts": "げんご、たんご、かたる、かいわ、でんわ、はなす"
  },
  {
    "id": "m2trap_34",
    "stt": 34,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Bộ Thủy 氵 vs Tâm 忄: 決 vs 快",
    "items": [
      {
        "kanji": "決",
        "hv": "QUYẾT",
        "read": "けつ・きめる",
        "word_jp": "決定・決める・解決",
        "word_read": "けってい・きめる・かいけつ",
        "meaning_vi": "Quyết định, giải quyết",
        "exams": "07/2011"
      },
      {
        "kanji": "快",
        "hv": "KHOÁI",
        "read": "かい・こころよい",
        "word_jp": "快適・快晴・不快",
        "word_read": "かいてき・かいせい・ふかい",
        "meaning_vi": "Dễ chịu, sảng khoái (thoải mái, trời quang, khó chịu)",
        "exams": "Trọng tâm N3"
      }
    ],
    "diff_tip": "決 có chấm thủy 氵 là quyết định dứt khoát (決定, 決める); 快 có tâm đứng 忄 là cảm giác sảng khoái trong lòng (快適 thoải mái).",
    "tts": "けってい、きめる、かいてき、かいせい、ふかい"
  },
  {
    "id": "m2trap_35",
    "stt": 35,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Bộ Nhân 亻 vs Nghiễm 广: 低 vs 底",
    "items": [
      {
        "kanji": "低",
        "hv": "ĐÊ",
        "read": "てい・ひくい",
        "word_jp": "低い・最低・低下",
        "word_read": "ひくい・さいてい・ていか",
        "meaning_vi": "Thấp (thấp bé, thấp nhất/tồi tệ, giảm sút)",
        "exams": "12/2020"
      },
      {
        "kanji": "底",
        "hv": "ĐẾ",
        "read": "てい・そこ",
        "word_jp": "底・海底・靴底",
        "word_read": "そこ・かいてい・くつぞこ",
        "meaning_vi": "Cái đáy (đáy, đáy biển, đế giày)",
        "exams": "12/2020"
      }
    ],
    "diff_tip": "低 có bộ Nhân 亻 (người cúi thấp → 低い thấp, 最低); 底 có mái nhà 广 (phần đáy nằm sâu bên dưới → 底 đáy, 海底 đáy biển).",
    "tts": "ひくい、さいてい、ていか、そこ、かいてい"
  },
  {
    "id": "m2trap_36",
    "stt": 36,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Bộ Mịch 糸 vs Thị 礻: 組 vs 祖",
    "items": [
      {
        "kanji": "組",
        "hv": "TỔ",
        "read": "そ・くむ・くみ",
        "word_jp": "組織・番組・組む",
        "word_read": "そしき・ばんぐみ・くむ",
        "meaning_vi": "Kết hợp, nhóm/tổ (tổ chức, chương trình TV, ghép lại)",
        "exams": "12/2016"
      },
      {
        "kanji": "祖",
        "hv": "TỔ",
        "read": "そ",
        "word_jp": "祖父・祖母・先祖",
        "word_read": "そふ・そぼ・せんぞ",
        "meaning_vi": "Ông bà, tổ tiên",
        "exams": "Trọng tâm N3"
      }
    ],
    "diff_tip": "組 có bộ Mịch 糸 (sợi chỉ đan vào nhau → 組織 tổ chức, 番組 chương trình); 祖 có bộ Thị 礻 (bàn thờ cúng → 祖父 ông, 先祖 tổ tiên).",
    "tts": "そしき、ばんぐみ、くむ、そふ、そぼ、せんぞ"
  },
  {
    "id": "m2trap_37",
    "stt": 37,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Thêm bộ Tâm 心: 相 vs 想",
    "items": [
      {
        "kanji": "相",
        "hv": "TƯƠNG",
        "read": "そう・しょう・あい",
        "word_jp": "相談・相手・首相",
        "word_read": "そうだん・あいて・しゅしょう",
        "meaning_vi": "Cùng nhau, đối tác (bàn bạc, đối phương, thủ tướng)",
        "exams": "07/2012"
      },
      {
        "kanji": "想",
        "hv": "TƯỞNG",
        "read": "そう",
        "word_jp": "想像・感想・予想",
        "word_read": "そうぞう・かんそう・よそう",
        "meaning_vi": "Nghĩ ngợi, tưởng tượng (tưởng tượng, cảm tưởng, dự đoán)",
        "exams": "07/2012"
      }
    ],
    "diff_tip": "相 (木 + 目) là nhìn nhau/tương tác (相談 bàn bạc, 相手 đối phương); 想 thêm trái tim 心 ở dưới là suy nghĩ trong tâm (想像, 感想).",
    "tts": "そうだん、あいて、そうぞう、かんそう、よそう"
  },
  {
    "id": "m2trap_38",
    "stt": 38,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Thêm bộ Nhân 亻: 系 vs 係",
    "items": [
      {
        "kanji": "系",
        "hv": "HỆ",
        "read": "けい",
        "word_jp": "系統・体系・太陽系",
        "word_read": "けいとう・たいけい・たいようけい",
        "meaning_vi": "Hệ thống, chuỗi liên kết (hệ thống, hệ mặt trời)",
        "exams": "12/2018"
      },
      {
        "kanji": "係",
        "hv": "HỆ",
        "read": "けい・かかり",
        "word_jp": "関係・係員・無関係",
        "word_read": "かんけい・かかりいん・むかんけい",
        "meaning_vi": "Liên quan, người phụ trách (quan hệ, nhân viên phụ trách)",
        "exams": "07/2017, 12/2017"
      }
    ],
    "diff_tip": "系 không có Nhân 亻 chỉ hệ thống/nhánh (系統); 係 có bộ Nhân 亻 chỉ quan hệ giữa người với người hoặc nhân viên phụ trách (関係, 係員).",
    "tts": "けいとう、たいけい、かんけい、かかりいん"
  },
  {
    "id": "m2trap_39",
    "stt": 39,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Bộ Nạch 疒 vs Sước 辶: 痛 vs 通",
    "items": [
      {
        "kanji": "痛",
        "hv": "THỐNG",
        "read": "つう・いたい",
        "word_jp": "痛い・頭痛・苦痛",
        "word_read": "いたい・ずつう・くつう",
        "meaning_vi": "Đau đớn (đau, đau đầu, nỗi đau khổ)",
        "exams": "07/2017"
      },
      {
        "kanji": "通",
        "hv": "THÔNG",
        "read": "つう・とおる・かよう",
        "word_jp": "交通・通う・普通",
        "word_read": "こうつう・かよう・ふつう",
        "meaning_vi": "Đi qua, thông suốt (giao thông, đi học/làm đều đặn, bình thường)",
        "exams": "12/2016, 12/2020"
      }
    ],
    "diff_tip": "痛 mang bộ Bệnh 疒 bên ngoài nên là đau ốm (痛い, 頭痛); 通 mang bộ Sước 辶 (con đường) nên là đi lại thông suốt (交通, 通う).",
    "tts": "いたい、ずつう、こうつう、かよう、ふつう"
  },
  {
    "id": "m2trap_40",
    "stt": 40,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Bộ Nạch 疒 vs Thủy 氵: 疲 vs 波",
    "items": [
      {
        "kanji": "疲",
        "hv": "BÌ",
        "read": "ひ・つかれる",
        "word_jp": "疲れる・疲労・疲れ",
        "word_read": "つかれる・ひろう・つかれ",
        "meaning_vi": "Mệt mỏi, sự kiệt sức",
        "exams": "07/2017"
      },
      {
        "kanji": "波",
        "hv": "BA",
        "read": "は・なみ",
        "word_jp": "波・津波・電波",
        "word_read": "なみ・つなみ・でんぱ",
        "meaning_vi": "Con sóng, sóng thần, sóng điện từ",
        "exams": "Trọng tâm N3"
      }
    ],
    "diff_tip": "Cùng phần phải 皮 (da): 疲 khoác bộ Bệnh 疒 là mệt mỏi (疲れる); 波 thêm chấm thủy 氵 là sóng nước (波, 津波).",
    "tts": "つかれる、ひろう、なみ、つなみ、でんぱ"
  },
  {
    "id": "m2trap_41",
    "stt": 41,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Đao 刀 vs Tay 手: 券 vs 挙",
    "items": [
      {
        "kanji": "券",
        "hv": "KHOÁN",
        "read": "けん",
        "word_jp": "乗車券・入場券・食券",
        "word_read": "じょうしゃけん・にゅうじょうけん・しょっけん",
        "meaning_vi": "Tấm vé, phiếu (vé tàu xe, vé vào cửa, phiếu ăn)",
        "exams": "12/2011"
      },
      {
        "kanji": "挙",
        "hv": "CỬ",
        "read": "きょ・あげる",
        "word_jp": "選挙・挙げる・挙手",
        "word_read": "せんきょ・あげる・きょしゅ",
        "meaning_vi": "Giơ lên, bầu chọn (bầu cử, nêu/giơ lên, giơ tay)",
        "exams": "Trọng tâm N3"
      }
    ],
    "diff_tip": "券 phía dưới là Đao 刀 (dao cắt giấy làm vé → 乗車券); 挙 phía dưới là Tay 手 (giơ tay biểu quyết → 選挙 bầu cử, 挙手).",
    "tts": "じょうしゃけん、にゅうじょうけん、せんきょ、あげる、きょしゅ"
  },
  {
    "id": "m2trap_42",
    "stt": 42,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Thêm bộ Cung 弓: 長 vs 張",
    "items": [
      {
        "kanji": "長",
        "hv": "TRƯỜNG",
        "read": "ちょう・ながい",
        "word_jp": "長い・成長・社長",
        "word_read": "ながい・せいちょう・しゃちょう",
        "meaning_vi": "Dài, lớn lên, người đứng đầu",
        "exams": "07/2010"
      },
      {
        "kanji": "張",
        "hv": "TRƯƠNG",
        "read": "ちょう・はる",
        "word_jp": "緊張・主張・張る",
        "word_read": "きんちょう・しゅちょう・はる",
        "meaning_vi": "Kéo căng, dán (căng thẳng, chủ trương, căng/dán)",
        "exams": "07/2010"
      }
    ],
    "diff_tip": "長 đứng một mình là dài/trưởng (長い, 成長); 張 thêm cây cung 弓 bên trái (giương cung kéo căng → 緊張 căng thẳng, 主張 chủ trương).",
    "tts": "ながい、せいちょう、きんちょう、しゅちょう、はる"
  },
  {
    "id": "m2trap_43",
    "stt": 43,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Bộ Sước 辶 vs Nhân 亻: 違 vs 偉",
    "items": [
      {
        "kanji": "違",
        "hv": "VI",
        "read": "い・ちがう",
        "word_jp": "違う・違反・間違い",
        "word_read": "ちがう・いはん・まちがい",
        "meaning_vi": "Khác biệt, sai trái, vi phạm",
        "exams": "12/2017"
      },
      {
        "kanji": "偉",
        "hv": "VĨ",
        "read": "い・えらい",
        "word_jp": "偉い・偉大",
        "word_read": "えらい・いだい",
        "meaning_vi": "Vĩ đại, xuất sắc, đáng nể",
        "exams": "Trọng tâm N3"
      }
    ],
    "diff_tip": "Cùng phần 韋 và âm On い: 違 có bộ Sước 辶 (đi lệch đường → 違う khác, 違反 vi phạm); 偉 có bộ Nhân 亻 (con người vĩ đại → 偉い, 偉大).",
    "tts": "ちがう、いはん、まちがい、えらい、いだい"
  },
  {
    "id": "m2trap_44",
    "stt": 44,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "工 vs 亻+土: 左 vs 在",
    "items": [
      {
        "kanji": "左",
        "hv": "TẢ",
        "read": "さ・ひだり",
        "word_jp": "左右・左側・左手",
        "word_read": "さゆう・ひだりがわ・ひだりて",
        "meaning_vi": "Bên trái (trái phải, phía trái, tay trái)",
        "exams": "07/2018"
      },
      {
        "kanji": "在",
        "hv": "TẠI",
        "read": "ざい",
        "word_jp": "現在・存在・滞在",
        "word_read": "げんざい・そんざい・たいざい",
        "meaning_vi": "Hiện tại, tồn tại, lưu trú",
        "exams": "12/2011"
      }
    ],
    "diff_tip": "左 bên trong là 工 (bên trái 左側); 在 có thêm nét sổ của 亻 và bộ Thổ 土 (đứng trên mặt đất → 現在, 存在).",
    "tts": "さゆう、ひだりがわ、げんざい、そんざい、たいざい"
  },
  {
    "id": "m2trap_45",
    "stt": 45,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Thêm bộ Thủy 氵: 去 vs 法",
    "items": [
      {
        "kanji": "去",
        "hv": "KHỨ",
        "read": "きょ・こ・さる",
        "word_jp": "去年・過去・去る",
        "word_read": "きょねん・かこ・さる",
        "meaning_vi": "Đi qua, rời bỏ (năm ngoái, quá khứ, rời đi)",
        "exams": "Trọng tâm N3"
      },
      {
        "kanji": "法",
        "hv": "PHÁP",
        "read": "ほう",
        "word_jp": "法律・方法・文法",
        "word_read": "ほうりつ・ほうほう・ぶんぽう",
        "meaning_vi": "Pháp luật, phương pháp, ngữ pháp",
        "exams": "12/2011"
      }
    ],
    "diff_tip": "去 đứng một mình là rời đi/quá khứ (去年, 過去); 法 thêm chấm thủy 氵 bên trái là pháp luật/quy tắc (法律, 方法).",
    "tts": "きょねん、かこ、さる、ほうりつ、ほうほう、ぶんぽう"
  },
  {
    "id": "m2trap_46",
    "stt": 46,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Thêm bộ Nhân 亻: 言 vs 信",
    "items": [
      {
        "kanji": "言",
        "hv": "NGÔN",
        "read": "げん・ごん・いう",
        "word_jp": "言葉・言語・発言",
        "word_read": "ことば・げんご・はつげん",
        "meaning_vi": "Lời nói, ngôn ngữ, phát ngôn",
        "exams": "Trọng tâm N3"
      },
      {
        "kanji": "信",
        "hv": "TÍN",
        "read": "しん",
        "word_jp": "信じる・自信・信用",
        "word_read": "しんじる・じしん・しんよう",
        "meaning_vi": "Tin tưởng, tự tin, uy tín",
        "exams": "07/2012, 07/2013"
      }
    ],
    "diff_tip": "言 là lời nói (言葉, 発言); 信 là người 亻 giữ đúng lời nói 言 → lòng tin (信じる, 信用).",
    "tts": "ことば、げんご、はつげん、しんじる、じしん、しんよう"
  },
  {
    "id": "m2trap_47",
    "stt": 47,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Đao 刂 vs Thủy 氵: 刊 vs 汗",
    "items": [
      {
        "kanji": "刊",
        "hv": "KHAN",
        "read": "かん",
        "word_jp": "週刊誌・夕刊・朝刊",
        "word_read": "しゅうかんし・ゆうかん・ちょうかん",
        "meaning_vi": "Xuất bản, ấn phẩm (tuần san, báo chiều, báo sáng)",
        "exams": "07/2012, 12/2018"
      },
      {
        "kanji": "汗",
        "hv": "HÃN",
        "read": "かん・あせ",
        "word_jp": "汗・冷や汗・発汗",
        "word_read": "あせ・ひやあせ・はっかん",
        "meaning_vi": "Mồ hôi, toát mồ hôi lạnh, tiết mồ hôi",
        "exams": "Trọng tâm N3"
      }
    ],
    "diff_tip": "刊 (干 + 刂) là khắc in phát hành báo (週刊誌, 朝刊); 汗 (氵 + 干) có nước là mồ hôi (汗 あせ — lưu ý Hán Việt là HÃN, sách gốc in nhầm CAN!).",
    "tts": "しゅうかんし、ちょうかん、あせ、ひやあせ"
  },
  {
    "id": "m2trap_48",
    "stt": 48,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Cùng bộ Vũ 羽: 習 vs 翌",
    "items": [
      {
        "kanji": "習",
        "hv": "TẬP",
        "read": "しゅう・ならう",
        "word_jp": "練習・習慣・習う",
        "word_read": "れんしゅう・しゅうかん・ならう",
        "meaning_vi": "Luyện tập, thói quen, học tập",
        "exams": "12/2012"
      },
      {
        "kanji": "翌",
        "hv": "DỰC",
        "read": "よく",
        "word_jp": "翌日・翌朝・翌年",
        "word_read": "よくじつ・よくあさ・よくねん",
        "meaning_vi": "Kế tiếp (ngày hôm sau, sáng hôm sau, năm sau)",
        "exams": "12/2014"
      }
    ],
    "diff_tip": "習 dưới đôi cánh 羽 là chữ 白 (luyện tập hằng ngày → 練習, 習慣); 翌 dưới đôi cánh 羽 là chữ 立 (ngày hôm sau → 翌日, 翌朝).",
    "tts": "れんしゅう、しゅうかん、ならう、よくじつ、よくあさ"
  },
  {
    "id": "m2trap_49",
    "stt": 49,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Bộ Mễ 米 vs Hòa 禾: 料 vs 科",
    "items": [
      {
        "kanji": "料",
        "hv": "LIỆU",
        "read": "りょう",
        "word_jp": "料理・料金・材料",
        "word_read": "りょうり・りょうきん・ざいりょう",
        "meaning_vi": "Nấu ăn, cước phí, nguyên liệu",
        "exams": "Trọng tâm N3"
      },
      {
        "kanji": "科",
        "hv": "KHOA",
        "read": "か",
        "word_jp": "科学・教科書・内科",
        "word_read": "かがく・きょうかしょ・ないか",
        "meaning_vi": "Khoa học, sách giáo khoa, khoa nội",
        "exams": "Trọng tâm N3"
      }
    ],
    "diff_tip": "料 bên trái là gạo 米 (2 hạt trên → nấu ăn 料理, phí 料金); 科 bên trái là cây lúa 禾 (1 nét phẩy trên → phân môn/khoa học 科学, 教科書).",
    "tts": "りょうり、りょうきん、かがく、きょうかしょ"
  },
  {
    "id": "m2trap_50",
    "stt": 50,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Cùng bộ Mịch 糸: 続 vs 統",
    "items": [
      {
        "kanji": "続",
        "hv": "TỤC",
        "read": "ぞく・つづく・つづける",
        "word_jp": "連続・続ける・手続き",
        "word_read": "れんぞく・つづける・てつづき",
        "meaning_vi": "Tiếp nối (liên tục, tiếp tục, thủ tục)",
        "exams": "12/2018, 12/2019"
      },
      {
        "kanji": "統",
        "hv": "THỐNG",
        "read": "とう",
        "word_jp": "伝統・統一・系統",
        "word_read": "でんとう・とういつ・けいとう",
        "meaning_vi": "Thống nhất, truyền thống, hệ thống",
        "exams": "12/2018, 12/2019"
      }
    ],
    "diff_tip": "続 bên phải là 売 (bán tiếp tục → 連続, 続ける); 統 bên phải là 充 (tổng hợp thành mối thống nhất → 伝統 truyền thống, 統一).",
    "tts": "れんぞく、つづける、てつづき、でんとう、とういつ"
  },
  {
    "id": "m2trap_51",
    "stt": 51,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Bộ Ngôn 言 vs Mịch 糸: 記 vs 紀",
    "items": [
      {
        "kanji": "記",
        "hv": "KÝ",
        "read": "き・しるす",
        "word_jp": "日記・記事・記念",
        "word_read": "にっき・きじ・きねん",
        "meaning_vi": "Ghi chép, lưu niệm (nhật ký, bài báo, kỷ niệm)",
        "exams": "12/2012"
      },
      {
        "kanji": "紀",
        "hv": "KỶ",
        "read": "き",
        "word_jp": "世紀・紀元前",
        "word_read": "せいき・きげんぜん",
        "meaning_vi": "Thế kỷ, trước Công nguyên",
        "exams": "12/2012"
      }
    ],
    "diff_tip": "Bẫy kinh điển N3: 記念 (kỷ niệm) dùng 記 (có bộ Ngôn 言), KHÔNG dùng 紀! Còn 紀 có bộ Mịch 糸 là sợi dây lịch sử (世紀 thế kỷ).",
    "tts": "にっき、きじ、きねん、せいき、きげんぜん"
  },
  {
    "id": "m2trap_52",
    "stt": 52,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Thêm bộ Mịch 糸: 泉 vs 線",
    "items": [
      {
        "kanji": "泉",
        "hv": "TUYỀN",
        "read": "せん・いずみ",
        "word_jp": "温泉・泉・源泉",
        "word_read": "おんせん・いずみ・げんせん",
        "meaning_vi": "Suối nước nóng, dòng suối, đầu nguồn suối",
        "exams": "12/2014"
      },
      {
        "kanji": "線",
        "hv": "TUYẾN",
        "read": "せん",
        "word_jp": "路線・新幹線・下線",
        "word_read": "ろせん・しんかんせん・かせん",
        "meaning_vi": "Tuyến đường, tàu Shinkansen, gạch chân",
        "exams": "Trọng tâm N3"
      }
    ],
    "diff_tip": "泉 (白 + 水) là suối nước trong (温泉 suối nước nóng); 線 thêm sợi chỉ 糸 bên trái là đường kẻ/tuyến tàu (路線, 新幹線).",
    "tts": "おんせん、いずみ、ろせん、しんかんせん、かせん"
  },
  {
    "id": "m2trap_53",
    "stt": 53,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Cùng bộ Mịch 糸: 結 vs 給",
    "items": [
      {
        "kanji": "結",
        "hv": "KẾT",
        "read": "けつ・むすぶ",
        "word_jp": "結婚・結果・結ぶ",
        "word_read": "けっこん・けっか・むすぶ",
        "meaning_vi": "Kết nối, buộc lại (kết hôn, kết quả, thắt nút)",
        "exams": "12/2012"
      },
      {
        "kanji": "給",
        "hv": "CẤP",
        "read": "きゅう",
        "word_jp": "給料・供給・給食",
        "word_read": "きゅうりょう・きょうきゅう・きゅうしょく",
        "meaning_vi": "Cung cấp (tiền lương, cung ứng, bữa ăn trường học)",
        "exams": "12/2012"
      }
    ],
    "diff_tip": "結 bên phải là 吉 (tốt lành → 結婚 kết hôn, 結果); 給 bên phải là 合 (cung cấp vừa đủ → 給料 tiền lương, 供給 cung cấp).",
    "tts": "けっこん、けっか、むすぶ、きゅうりょう、きょうきゅう"
  },
  {
    "id": "m2trap_54",
    "stt": 54,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Thêm bộ Thảo 艹: 楽 vs 薬",
    "items": [
      {
        "kanji": "楽",
        "hv": "LẠC",
        "read": "らく・がく・たのしい",
        "word_jp": "楽しい・音楽・気楽",
        "word_read": "たのしい・おんがく・きらく",
        "meaning_vi": "Vui vẻ, âm nhạc, thoải mái nhẹ nhàng",
        "exams": "12/2015"
      },
      {
        "kanji": "薬",
        "hv": "DƯỢC",
        "read": "やく・くすり",
        "word_jp": "薬・薬局・飲み薬",
        "word_read": "くすり・やっきょく・のみぐすり",
        "meaning_vi": "Thuốc, hiệu thuốc, thuốc uống",
        "exams": "12/2015"
      }
    ],
    "diff_tip": "楽 không có cỏ là vui vẻ/nhạc (楽しい, 音楽); 薬 thêm bộ Thảo 艹 ở trên là thảo dược → thuốc men (薬, 薬局).",
    "tts": "たのしい、おんがく、きらく、くすり、やっきょく"
  },
  {
    "id": "m2trap_55",
    "stt": 55,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Thêm bộ Thủy 氵: 容 vs 溶",
    "items": [
      {
        "kanji": "容",
        "hv": "DUNG",
        "read": "よう",
        "word_jp": "内容・容器・美容院",
        "word_read": "ないよう・ようき・びよういん",
        "meaning_vi": "Chứa đựng, dung mạo (nội dung, hộp đựng, tiệm làm đẹp)",
        "exams": "07/2013"
      },
      {
        "kanji": "溶",
        "hv": "DUNG",
        "read": "よう・とける・とかす",
        "word_jp": "溶ける・溶かす・溶液",
        "word_read": "とける・とかす・ようえき",
        "meaning_vi": "Tan chảy, hòa tan, dung dịch",
        "exams": "07/2013"
      }
    ],
    "diff_tip": "容 không có nước là sức chứa/dung mạo (内容, 容器); 溶 thêm chấm thủy 氵 là tan chảy vào nước (溶ける tan chảy, 溶液 dung dịch).",
    "tts": "ないよう、ようき、とける、とかす、ようえき"
  },
  {
    "id": "m2trap_56",
    "stt": 56,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Đáy Tâm 心 vs Phộc 攵: 恋 vs 変",
    "items": [
      {
        "kanji": "恋",
        "hv": "LUYẾN",
        "read": "れん・こい",
        "word_jp": "恋人・恋愛・恋しい",
        "word_read": "こいびと・れんあい・こいしい",
        "meaning_vi": "Tình yêu (người yêu, yêu đương, nhớ nhung)",
        "exams": "12/2014"
      },
      {
        "kanji": "変",
        "hv": "BIẾN",
        "read": "へん・かわる・かえる",
        "word_jp": "変化・大変・変わる",
        "word_read": "へんか・たいへん・かわる",
        "meaning_vi": "Thay đổi, kỳ lạ (biến hóa, vất vả, thay đổi)",
        "exams": "12/2014"
      }
    ],
    "diff_tip": "Cùng phần đầu 亦: 恋 đáy là trái tim 心 nên là yêu đương (恋人, 恋愛); 変 đáy là 攵 nên là thay đổi (変化, 大変).",
    "tts": "こいびと、れんあい、へんか、たいへん、かわる"
  },
  {
    "id": "m2trap_57",
    "stt": 57,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Thêm bộ Nhân 亻: 借 vs 昔",
    "items": [
      {
        "kanji": "借",
        "hv": "TÁ",
        "read": "しゃく・かりる",
        "word_jp": "借りる・借金",
        "word_read": "かりる・しゃっきん",
        "meaning_vi": "Đi mượn, vay nợ",
        "exams": "12/2015"
      },
      {
        "kanji": "昔",
        "hv": "TÍCH",
        "read": "せき・むかし",
        "word_jp": "昔・昔話",
        "word_read": "むかし・むかしばなし",
        "meaning_vi": "Ngày xưa, truyện cổ tích",
        "exams": "Trọng tâm N3"
      }
    ],
    "diff_tip": "昔 đứng một mình là chuyện ngày xưa (昔 むかし); 借 thêm bộ Nhân 亻 bên trái (người đi mượn đồ → 借りる, 借金).",
    "tts": "かりる、しゃっきん、むかし、むかしばなし"
  },
  {
    "id": "m2trap_58",
    "stt": 58,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Đáy Sơn 山 vs Hỏa 灬: 島 vs 鳥",
    "items": [
      {
        "kanji": "島",
        "hv": "ĐẢO",
        "read": "とう・しま",
        "word_jp": "島・半島・島国",
        "word_read": "しま・はんとう・しまぐに",
        "meaning_vi": "Hòn đảo, bán đảo, quốc đảo",
        "exams": "12/2019"
      },
      {
        "kanji": "鳥",
        "hv": "ĐIỂU",
        "read": "ちょう・とり",
        "word_jp": "鳥・白鳥・焼き鳥",
        "word_read": "とり・はくちょう・やきとり",
        "meaning_vi": "Con chim, thiên nga, gà nướng xiên",
        "exams": "Trọng tâm N3"
      }
    ],
    "diff_tip": "島 phía dưới là ngọn núi 山 nhô giữa biển (島 しま đảo); 鳥 phía dưới là 4 chấm 灬 như chân/đuôi chim (鳥 とり con chim).",
    "tts": "しま、はんとう、とり、はくちょう、やきとり"
  },
  {
    "id": "m2trap_59",
    "stt": 59,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Thêm 1 nét gạch xiên: 心 vs 必",
    "items": [
      {
        "kanji": "心",
        "hv": "TÂM",
        "read": "しん・こころ",
        "word_jp": "心配・安心・心",
        "word_read": "しんぱい・あんしん・こころ",
        "meaning_vi": "Trái tim, tấm lòng (lo lắng, yên tâm)",
        "exams": "07/2012, 07/2013, 12/2018, 12/2019"
      },
      {
        "kanji": "必",
        "hv": "TẤT",
        "read": "ひつ・かならず",
        "word_jp": "必要・必ず・必死",
        "word_read": "ひつよう・かならず・ひっし",
        "meaning_vi": "Nhất định, cần thiết, liều mạng/hết sức",
        "exams": "12/2019"
      }
    ],
    "diff_tip": "心 là trái tim mở (心, 安心); 必 gạch chéo dứt khoát xuyên qua chữ 心 → quyết tâm nhất định (必要, 必ず).",
    "tts": "しんぱい、あんしん、こころ、ひつよう、かならず、ひっし"
  },
  {
    "id": "m2trap_60",
    "stt": 60,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Bộ Thủy 氵 vs Đãi 歹: 浅 vs 残",
    "items": [
      {
        "kanji": "浅",
        "hv": "THIỂN",
        "read": "せん・あさい",
        "word_jp": "浅い・浅瀬",
        "word_read": "あさい・あさせ",
        "meaning_vi": "Nông, cạn, bãi cạn",
        "exams": "07/2013"
      },
      {
        "kanji": "残",
        "hv": "TÀN",
        "read": "ざん・のこる・のこす",
        "word_jp": "残念・残る・残業",
        "word_read": "ざんねん・のこる・ざんぎょう",
        "meaning_vi": "Còn sót lại (đáng tiếc, còn lại, làm thêm giờ)",
        "exams": "07/2013"
      }
    ],
    "diff_tip": "Cùng phần phải 戋: 浅 có chấm thủy 氵 là mực nước nông cạn (浅い); 残 có bộ Đãi 歹 là phần còn sót lại (残る, 残念, 残業).",
    "tts": "あさい、ざんねん、のこる、ざんぎょう"
  },
  {
    "id": "m2trap_61",
    "stt": 61,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Bộ Sước 辶 vs Phụ 阝: 退 vs 限",
    "items": [
      {
        "kanji": "退",
        "hv": "THOÁI",
        "read": "たい・しりぞく",
        "word_jp": "退院・退職・退屈",
        "word_read": "たいいん・たいしょく・たいくつ",
        "meaning_vi": "Rút lui, rời đi (ra viện, nghỉ việc, nhàm chán)",
        "exams": "12/2018"
      },
      {
        "kanji": "限",
        "hv": "HẠN",
        "read": "げん・かぎる",
        "word_jp": "限界・期限・限る",
        "word_read": "げんかい・きげん・かぎる",
        "meaning_vi": "Giới hạn, kỳ hạn, hạn chế",
        "exams": "Trọng tâm N3"
      }
    ],
    "diff_tip": "Cùng phần 艮: 退 có bộ Sước 辶 là bước chân lùi ra (退院, 退職); 限 có bộ Phụ 阝 (bức tường đất) chặn lại thành giới hạn (限界, 期限).",
    "tts": "たいいん、たいしょく、げんかい、きげん、かぎる"
  },
  {
    "id": "m2trap_62",
    "stt": 62,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Cùng bộ Chu 舟: 般 vs 船",
    "items": [
      {
        "kanji": "般",
        "hv": "BÀN",
        "read": "はん",
        "word_jp": "一般・全般",
        "word_read": "いっぱん・ぜんぱん",
        "meaning_vi": "Phổ thông, nói chung, toàn diện",
        "exams": "12/2019"
      },
      {
        "kanji": "船",
        "hv": "THUYỀN",
        "read": "せん・ふね",
        "word_jp": "船・風船・客船",
        "word_read": "ふね・ふうせん・きゃくせん",
        "meaning_vi": "Con tàu/thuyền, bóng bay, tàu chở khách",
        "exams": "12/2020"
      }
    ],
    "diff_tip": "般 bên phải là 殳 (mang nghĩa chung chung → 一般 phổ thông); 船 bên phải là 几 + 口 (con thuyền chở người → 船, 風船 bóng bay).",
    "tts": "いっぱん、ぜんぱん、ふね、ふうせん"
  },
  {
    "id": "m2trap_63",
    "stt": 63,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Thêm bộ Hòa 禾: 重 vs 種",
    "items": [
      {
        "kanji": "重",
        "hv": "TRỌNG",
        "read": "じゅう・ちょう・おもい",
        "word_jp": "重い・重要・体重",
        "word_read": "おもい・じゅうよう・たいじゅう",
        "meaning_vi": "Nặng, quan trọng, cân nặng",
        "exams": "07/2013"
      },
      {
        "kanji": "種",
        "hv": "CHỦNG",
        "read": "しゅ・たね",
        "word_jp": "種類・種・人種",
        "word_read": "しゅるい・たね・じんしゅ",
        "meaning_vi": "Chủng loại, hạt giống, chủng tộc",
        "exams": "Trọng tâm N3"
      }
    ],
    "diff_tip": "重 đứng một mình là nặng/quan trọng (重い, 重要); 種 thêm cây lúa 禾 bên trái là hạt giống & chủng loại (種 hạt, 種類 loại).",
    "tts": "おもい、じゅうよう、しゅるい、たね"
  },
  {
    "id": "m2trap_64",
    "stt": 64,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Cùng bộ Xa 車: 輪 vs 輸",
    "items": [
      {
        "kanji": "輪",
        "hv": "LUÂN",
        "read": "りん・わ",
        "word_jp": "車輪・指輪・五輪",
        "word_read": "しゃりん・ゆびわ・ごりん",
        "meaning_vi": "Vòng tròn, bánh xe (bánh xe, chiếc nhẫn, Thế vận hội)",
        "exams": "12/2016"
      },
      {
        "kanji": "輸",
        "hv": "DU",
        "read": "ゆ",
        "word_jp": "輸出・輸入・輸送",
        "word_read": "ゆしゅつ・ゆにゅう・ゆそう",
        "meaning_vi": "Vận chuyển (xuất khẩu, nhập khẩu, vận tải)",
        "exams": "12/2016"
      }
    ],
    "diff_tip": "輪 bên phải là 侖 (chữ 冊 tròn như vòng → 車輪 bánh xe, 指輪 nhẫn); 輸 bên phải có 月 + 刂 (vận tải đi xa → 輸出, 輸入 — Hán Việt là DU, sách gốc in nhầm THÂU!).",
    "tts": "しゃりん、ゆびわ、ゆしゅつ、ゆにゅう、ゆそう"
  },
  {
    "id": "m2trap_65",
    "stt": 65,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Cùng bộ Ngôn 言: 誌 vs 議",
    "items": [
      {
        "kanji": "誌",
        "hv": "CHÍ",
        "read": "し",
        "word_jp": "雑誌・日誌・週刊誌",
        "word_read": "ざっし・にっし・しゅうかんし",
        "meaning_vi": "Tạp chí, nhật ký ghi chép, tuần san",
        "exams": "07/2012, 12/2018"
      },
      {
        "kanji": "議",
        "hv": "NGHỊ",
        "read": "ぎ",
        "word_jp": "会議・議論・不思議",
        "word_read": "かいぎ・ぎろん・ふしぎ",
        "meaning_vi": "Bàn bạc, thảo luận (cuộc họp, tranh luận, kỳ lạ)",
        "exams": "07/2012"
      }
    ],
    "diff_tip": "誌 bên phải là 志 (ít nét hơn → 雑誌 tạp chí); 議 bên phải là 義 (dày nét hơn → 会議 họp hành, 議論 tranh luận).",
    "tts": "ざっし、にっし、かいぎ、ぎろん、ふしぎ"
  },
  {
    "id": "m2trap_66",
    "stt": 66,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Bộ Ngôn 言 vs Thủy 氵: 談 vs 淡",
    "items": [
      {
        "kanji": "談",
        "hv": "ĐÀM",
        "read": "だん",
        "word_jp": "相談・冗談・面談",
        "word_read": "そうだん・じょうだん・めんだん",
        "meaning_vi": "Trò chuyện, bàn bạc (thảo luận, nói đùa, phỏng vấn trực tiếp)",
        "exams": "07/2012"
      },
      {
        "kanji": "淡",
        "hv": "ĐẠM",
        "read": "たん・あわい",
        "word_jp": "淡い・淡水",
        "word_read": "あわい・たんすい",
        "meaning_vi": "Nhạt, thanh đạm (màu/vị nhạt, nước ngọt)",
        "exams": "07/2012"
      }
    ],
    "diff_tip": "Cùng phần phải 炎 (2 ngọn lửa): 談 có bộ Ngôn 言 là nói chuyện sôi nổi (相談, 冗談); 淡 có nước 氵 dập lửa nên nhạt màu/vị (淡い).",
    "tts": "そうだん、じょうだん、あわい、たんすい"
  },
  {
    "id": "m2trap_67",
    "stt": 67,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Thêm bộ Ngôn 言: 志 vs 誌",
    "items": [
      {
        "kanji": "志",
        "hv": "CHÍ",
        "read": "し・こころざす",
        "word_jp": "志望・意志・志す",
        "word_read": "しぼう・いし・こころざす",
        "meaning_vi": "Ý chí, nguyện vọng (nguyện vọng thi/việc, ý chí)",
        "exams": "12/2014"
      },
      {
        "kanji": "誌",
        "hv": "CHÍ",
        "read": "し",
        "word_jp": "雑誌・日誌",
        "word_read": "ざっし・にっし",
        "meaning_vi": "Ấn phẩm ghi chép (tạp chí, sổ nhật ký)",
        "exams": "12/2014"
      }
    ],
    "diff_tip": "志 đứng một mình là chí hướng trong lòng (志望, 意志); 誌 thêm bộ Ngôn 言 bên trái là chữ viết in thành sách báo (雑誌).",
    "tts": "しぼう、いし、ざっし、にっし"
  },
  {
    "id": "m2trap_68",
    "stt": 68,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Cùng phần 隹: 稚 vs 雑",
    "items": [
      {
        "kanji": "稚",
        "hv": "TRĨ",
        "read": "ち",
        "word_jp": "幼稚園・幼稚",
        "word_read": "ようちえん・ようち",
        "meaning_vi": "Non nớt, trẻ thơ (trường mẫu giáo, ấu trĩ)",
        "exams": "12/2014, 07/2018, 07/2020"
      },
      {
        "kanji": "雑",
        "hv": "TẠP",
        "read": "ざつ・ぞう",
        "word_jp": "雑誌・複雑・混雑",
        "word_read": "ざっし・ふくざつ・こんざつ",
        "meaning_vi": "Lẫn lộn, tạp (tạp chí, phức tạp, đông đúc)",
        "exams": "12/2014, 07/2018, 07/2019, 07/2020"
      }
    ],
    "diff_tip": "稚 bên trái là cây lúa non 禾 → trẻ nhỏ non nớt (幼稚園 mẫu giáo); 雑 bên trái là 九 + 木 → pha trộn phức tạp (雑誌, 複雑, 混雑).",
    "tts": "ようちえん、ようち、ざっし、ふくざつ、こんざつ"
  },
  {
    "id": "m2trap_69",
    "stt": 69,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Cùng bộ Ngôn 言: 諭 vs 論",
    "items": [
      {
        "kanji": "諭",
        "hv": "DỤ",
        "read": "ゆ・さとす",
        "word_jp": "教諭・諭す",
        "word_read": "きょうゆ・さとす",
        "meaning_vi": "Khuyên bảo, chỉ dạy (giáo viên, khuyên nhủ)",
        "exams": "12/2016"
      },
      {
        "kanji": "論",
        "hv": "LUẬN",
        "read": "ろん",
        "word_jp": "議論・論文・結論",
        "word_read": "ぎろん・ろんぶん・けつろん",
        "meaning_vi": "Bàn luận, lý luận (tranh luận, luận văn, kết luận)",
        "exams": "12/2016"
      }
    ],
    "diff_tip": "諭 bên phải giống 輸 (月 + 刂 → khuyên nhủ 教諭); 論 bên phải giống 輪 (冊 → sách vở lập luận 議論, 論文, 結論).",
    "tts": "きょうゆ、さとす、ぎろん、ろんぶん、けつろん"
  },
  {
    "id": "m2trap_70",
    "stt": 70,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "目 + ハ vs nét gạch ngang: 貝 vs 具",
    "items": [
      {
        "kanji": "貝",
        "hv": "BỐI",
        "read": "かい",
        "word_jp": "貝・貝殻",
        "word_read": "かい・かいがら",
        "meaning_vi": "Con sò/ốc, vỏ sò",
        "exams": "07/2019"
      },
      {
        "kanji": "具",
        "hv": "CỤ",
        "read": "ぐ",
        "word_jp": "道具・家具・具体的",
        "word_read": "どうぐ・かぐ・ぐたいてき",
        "meaning_vi": "Công cụ, đồ đạc (dụng cụ, nội thất, cụ thể)",
        "exams": "12/2015"
      }
    ],
    "diff_tip": "貝 không có nét ngang đỡ dưới 目 (vỏ sò 貝 かい); 具 có 3 nét ngang trong 目 và 1 thanh ngang 一 đỡ bên dưới (道具 dụng cụ, 家具 nội thất).",
    "tts": "かい、かいがら、どうぐ、かぐ、ぐたいてき"
  },
  {
    "id": "m2trap_71",
    "stt": 71,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Bộ Thổ 土 vs Nhân 亻: 培 vs 倍",
    "items": [
      {
        "kanji": "培",
        "hv": "BỒI",
        "read": "ばい・つちかう",
        "word_jp": "栽培・培う",
        "word_read": "さいばい・つちかう",
        "meaning_vi": "Vun trồng, bồi đắp (canh tác/trồng trọt, nuôi dưỡng)",
        "exams": "12/2013, 12/2017"
      },
      {
        "kanji": "倍",
        "hv": "BỘI",
        "read": "ばい",
        "word_jp": "二倍・倍増",
        "word_read": "にばい・ばいぞう",
        "meaning_vi": "Gấp bội (gấp đôi, tăng gấp đôi)",
        "exams": "12/2013, 12/2017"
      }
    ],
    "diff_tip": "Cùng âm ばい: 培 có bộ Thổ 土 (đắp đất trồng cây → 栽培 trồng trọt); 倍 có bộ Nhân 亻 (nhân đôi số lượng → 二倍 gấp đôi).",
    "tts": "さいばい、つちかう、にばい、ばいぞう"
  },
  {
    "id": "m2trap_72",
    "stt": 72,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Cùng bộ Phộc 攵: 数 vs 枚",
    "items": [
      {
        "kanji": "数",
        "hv": "SỐ",
        "read": "すう・かず・かぞえる",
        "word_jp": "数字・数える・多数",
        "word_read": "すうじ・かぞえる・たすう",
        "meaning_vi": "Con số, đếm, số lượng lớn",
        "exams": "07/2014"
      },
      {
        "kanji": "枚",
        "hv": "MAI",
        "read": "まい",
        "word_jp": "一枚・枚数",
        "word_read": "いちまい・まいすう",
        "meaning_vi": "Đơn vị đếm vật mỏng (1 tờ/chiếc, số tờ)",
        "exams": "07/2014"
      }
    ],
    "diff_tip": "数 bên trái phức tạp (米 + 女 → đếm số 数字, 数える); 枚 bên trái chỉ có 1 chữ Mộc 木 (tờ giấy/vật mỏng từ gỗ → 一枚, 枚数).",
    "tts": "すうじ、かぞえる、たすう、いちまい、まいすう"
  },
  {
    "id": "m2trap_73",
    "stt": 73,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Bộ Thổ 土 vs Tâm 忄: 増 vs 憎",
    "items": [
      {
        "kanji": "増",
        "hv": "TĂNG",
        "read": "ぞう・ふえる・ふやす",
        "word_jp": "増加・増える・増やす",
        "word_read": "ぞうか・ふえる・ふやす",
        "meaning_vi": "Tăng lên, làm tăng thêm",
        "exams": "12/2013"
      },
      {
        "kanji": "憎",
        "hv": "TĂNG",
        "read": "ぞう・にくむ・にくい",
        "word_jp": "憎む・憎い",
        "word_read": "にくむ・にくい",
        "meaning_vi": "Căm ghét, đáng ghét",
        "exams": "12/2013"
      }
    ],
    "diff_tip": "Cùng phần phải 曽: 増 có bộ Thổ 土 (đắp thêm đất → 増加, 増える tăng lên); 憎 có tâm đứng 忄 (nỗi hận trong lòng → 憎む ghét).",
    "tts": "ぞうか、ふえる、ふやす、にくむ、にくい"
  },
  {
    "id": "m2trap_74",
    "stt": 74,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Cùng khung Vi 囗: 因 vs 困 vs 囚",
    "items": [
      {
        "kanji": "因",
        "hv": "NHÂN",
        "read": "いん",
        "word_jp": "原因・要因",
        "word_read": "げんいん・よういん",
        "meaning_vi": "Nguyên nhân, yếu tố",
        "exams": "07/2015"
      },
      {
        "kanji": "困",
        "hv": "KHỐN",
        "read": "こん・こまる",
        "word_jp": "困る・困難",
        "word_read": "こまる・こんなん",
        "meaning_vi": "Gặp rắc rối, khó khăn",
        "exams": "07/2015, 07/2017"
      },
      {
        "kanji": "囚",
        "hv": "TÙ",
        "read": "しゅう",
        "word_jp": "囚人・囚われる",
        "word_read": "しゅうじん・とらわれる",
        "meaning_vi": "Tù nhân, bị giam giữ/trói buộc",
        "exams": "07/2017"
      }
    ],
    "diff_tip": "Nhìn ruột trong khung 囗: 大 lớn là 原因 (nguyên nhân); 木 cây bị nhốt chật là 困る (khó khăn); 人 người bị nhốt là 囚人 (tù nhân — sách gốc in nhầm TỪ!).",
    "tts": "げんいん、こまる、こんなん、しゅうじん"
  },
  {
    "id": "m2trap_75",
    "stt": 75,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Cùng bộ Thủy 氵 + Nhật 日: 温 vs 湿 vs 湯",
    "items": [
      {
        "kanji": "温",
        "hv": "ÔN",
        "read": "おん・あたたかい",
        "word_jp": "温度・温かい・温泉",
        "word_read": "おんど・あたたかい・おんせん",
        "meaning_vi": "Ấm áp, nhiệt độ, suối nước nóng",
        "exams": "07/2011, 07/2012, 12/2014"
      },
      {
        "kanji": "湿",
        "hv": "THẤP",
        "read": "しつ・しめる",
        "word_jp": "湿度・湿気・湿る",
        "word_read": "しつど・しっけ・しめる",
        "meaning_vi": "Độ ẩm, hơi ẩm, bị ẩm ướt",
        "exams": "07/2011, 12/2014"
      },
      {
        "kanji": "湯",
        "hv": "THANG",
        "read": "とう・ゆ",
        "word_jp": "お湯・銭湯",
        "word_read": "おゆ・せんとう",
        "meaning_vi": "Nước nóng, nhà tắm công cộng",
        "exams": "07/2011, 07/2012, 12/2014"
      }
    ],
    "diff_tip": "Cùng có 氵 và 日: 温 đáy là đĩa 皿 (bát canh ấm → 温度, 温かい); 湿 đáy là 业 (ẩm ướt → 湿度, 湿気); 湯 đáy là 勿 (dòng nước nóng chảy → お湯).",
    "tts": "おんど、あたたかい、しつど、しっけ、おゆ、せんとう"
  },
  {
    "id": "m2trap_76",
    "stt": 76,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Cùng bộ Kiến 見: 現 vs 規 vs 視",
    "items": [
      {
        "kanji": "現",
        "hv": "HIỆN",
        "read": "げん・あらわれる",
        "word_jp": "現在・表現・現れる",
        "word_read": "げんざい・ひょうげん・あらわれる",
        "meaning_vi": "Hiện tại, biểu hiện, xuất hiện",
        "exams": "12/2011, 12/2020"
      },
      {
        "kanji": "規",
        "hv": "QUY",
        "read": "き",
        "word_jp": "規則・規律・規模",
        "word_read": "きそく・きりつ・きぼ",
        "meaning_vi": "Quy tắc, kỷ luật, quy mô",
        "exams": "07/2015"
      },
      {
        "kanji": "視",
        "hv": "THỊ",
        "read": "し",
        "word_jp": "無視・重視・視力",
        "word_read": "むし・じゅうし・しりょく",
        "meaning_vi": "Nhìn nhận (phớt lờ, coi trọng, thị lực)",
        "exams": "12/2011"
      }
    ],
    "diff_tip": "Xem bộ bên trái chữ 見: 現 có 王 (ngọc sáng hiện ra → 現在); 規 có 夫 (khuôn thước → 規則); 視 có bộ Thị 礻 (nhìn ngắm/coi trọng → 無視, 視力).",
    "tts": "げんざい、ひょうげん、きそく、むし、じゅうし、しりょく"
  },
  {
    "id": "m2trap_77",
    "stt": 77,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Cùng phần 則: 則 vs 側 vs 測",
    "items": [
      {
        "kanji": "則",
        "hv": "TẮC",
        "read": "そく",
        "word_jp": "規則・法則・原則",
        "word_read": "きそく・ほうそく・げんそく",
        "meaning_vi": "Quy tắc, định luật, nguyên tắc",
        "exams": "07/2015"
      },
      {
        "kanji": "側",
        "hv": "TRẮC",
        "read": "そく・がわ",
        "word_jp": "右側・左側・側面",
        "word_read": "みぎがわ・ひだりがわ・そくめん",
        "meaning_vi": "Phía, bên cạnh, khía cạnh",
        "exams": "07/2019"
      },
      {
        "kanji": "測",
        "hv": "TRẮC",
        "read": "そく・はかる",
        "word_jp": "測定・予測・測る",
        "word_read": "そくてい・よそく・はかる",
        "meaning_vi": "Đo đạc, dự đoán",
        "exams": "07/2019"
      }
    ],
    "diff_tip": "則 đứng một mình là quy tắc (規則); 側 thêm Nhân 亻 là phía/bên cạnh (右側 bên phải); 測 thêm nước 氵 là đo mực nước → đo đạc (測定, 予測).",
    "tts": "きそく、みぎがわ、そくめん、そくてい、よそく、はかる"
  },
  {
    "id": "m2trap_78",
    "stt": 78,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Cùng phần 責: 責 vs 績 vs 積",
    "items": [
      {
        "kanji": "責",
        "hv": "TRÁCH",
        "read": "せき・せめる",
        "word_jp": "責任・責める",
        "word_read": "せきにん・せめる",
        "meaning_vi": "Trách nhiệm, khiển trách",
        "exams": "07/2016"
      },
      {
        "kanji": "績",
        "hv": "TÍCH",
        "read": "せき",
        "word_jp": "成績・実績",
        "word_read": "せいせき・じっせき",
        "meaning_vi": "Thành tích, kết quả thực tế",
        "exams": "12/2018"
      },
      {
        "kanji": "積",
        "hv": "TÍCH",
        "read": "せき・つむ",
        "word_jp": "面積・積極的・積む",
        "word_read": "めんせき・せっきょくてき・つむ",
        "meaning_vi": "Diện tích, tích cực, chất đống/tích lũy",
        "exams": "07/2016"
      }
    ],
    "diff_tip": "Cả 3 đều đọc せき: 責 không có bộ trái là trách nhiệm (責任); 績 có chỉ 糸 là thành tích (成績); 積 có lúa 禾 là chất đống (面積, 積極的).",
    "tts": "せきにん、せめる、せいせき、めんせき、せっきょくてき"
  },
  {
    "id": "m2trap_79",
    "stt": 79,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Phần 尺 và bộ Mã 馬: 訳 vs 駅 vs 駐",
    "items": [
      {
        "kanji": "訳",
        "hv": "DỊCH",
        "read": "やく・わけ",
        "word_jp": "通訳・翻訳・訳",
        "word_read": "つうやく・ほんやく・わけ",
        "meaning_vi": "Phiên dịch, biên dịch, lý do",
        "exams": "07/2019"
      },
      {
        "kanji": "駅",
        "hv": "DỊCH",
        "read": "えき",
        "word_jp": "駅前・駅員",
        "word_read": "えきまえ・えきいん",
        "meaning_vi": "Nhà ga (trước ga, nhân viên nhà ga)",
        "exams": "12/2014"
      },
      {
        "kanji": "駐",
        "hv": "TRÚ",
        "read": "ちゅう",
        "word_jp": "駐車・駐車場",
        "word_read": "ちゅうしゃ・ちゅうしゃじょう",
        "meaning_vi": "Đỗ xe, bãi đỗ xe",
        "exams": "12/2014"
      }
    ],
    "diff_tip": "訳 có bộ Ngôn 言 (dịch ngôn ngữ 通訳); 駅 có Ngựa 馬 + 尺 (trạm ngựa → nhà ga 駅前); 駐 có Ngựa 馬 + 主 (dừng ngựa/đỗ xe → 駐車場).",
    "tts": "つうやく、ほんやく、えきまえ、えきいん、ちゅうしゃじょう"
  },
  {
    "id": "m2trap_80",
    "stt": 80,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Cùng phần 正: 正 vs 証 vs 症",
    "items": [
      {
        "kanji": "正",
        "hv": "CHÍNH",
        "read": "せい・しょう・ただしい",
        "word_jp": "正しい・正解・正直",
        "word_read": "ただしい・せいかい・しょうじき",
        "meaning_vi": "Đúng đắn, đáp án đúng, trung thực",
        "exams": "07/2010, 07/2015"
      },
      {
        "kanji": "証",
        "hv": "CHỨNG",
        "read": "しょう",
        "word_jp": "証明・証拠・保証",
        "word_read": "しょうめい・しょうこ・ほしょう",
        "meaning_vi": "Chứng minh, bằng chứng, bảo hành",
        "exams": "12/2016"
      },
      {
        "kanji": "症",
        "hv": "CHỨNG",
        "read": "しょう",
        "word_jp": "症状・重症・花粉症",
        "word_read": "しょうじょう・じゅうしょう・かふんしょう",
        "meaning_vi": "Triệu chứng, bệnh nặng, dị ứng phấn hoa",
        "exams": "07/2016"
      }
    ],
    "diff_tip": "正 đứng riêng là đúng (正しい); 証 thêm bộ Ngôn 言 là lời chứng minh/giấy tờ (証明, 保証); 症 khoác bộ Bệnh 疒 là chứng bệnh (症状, 花粉症).",
    "tts": "ただしい、せいかい、しょうめい、しょうこ、しょうじょう、かふんしょう"
  },
  {
    "id": "m2trap_81",
    "stt": 81,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Cùng gốc 小/少: 秒 vs 抄 vs 少 vs 小",
    "items": [
      {
        "kanji": "秒",
        "hv": "MIỂU",
        "read": "びょう",
        "word_jp": "一秒・秒針",
        "word_read": "いちびょう・びょうしん",
        "meaning_vi": "Giây đồng hồ, kim giây",
        "exams": "12/2017"
      },
      {
        "kanji": "抄",
        "hv": "SAO",
        "read": "しょう",
        "word_jp": "抄録・抄本",
        "word_read": "しょうろく・しょうほん",
        "meaning_vi": "Trích lục, bản sao trích yếu",
        "exams": "12/2017"
      },
      {
        "kanji": "少",
        "hv": "THIỂU",
        "read": "しょう・すくない・すこし",
        "word_jp": "少し・少ない・減少",
        "word_read": "すこし・すくない・げんしょう",
        "meaning_vi": "Ít ỏi, một chút, giảm thiểu",
        "exams": "07/2014"
      },
      {
        "kanji": "小",
        "hv": "TIỂU",
        "read": "しょう・ちいさい",
        "word_jp": "小さい・小学校・小説",
        "word_read": "ちいさい・しょうがっこう・しょうせつ",
        "meaning_vi": "Nhỏ bé, tiểu học, tiểu thuyết",
        "exams": "07/2014"
      }
    ],
    "diff_tip": "小 là nhỏ bé (小さい), thêm nét phẩy thành 少 là ít (少ない); 秒 ghép 禾 + 少 là đơn vị giây siêu nhỏ (一秒); 抄 ghép tay 扌 + 少 là chép trích đoạn (抄本).",
    "tts": "いちびょう、しょうほん、すこし、すくない、ちいさい、しょうせつ"
  },
  {
    "id": "m2trap_82",
    "stt": 82,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Cùng phần 聿: 筆 vs 律",
    "items": [
      {
        "kanji": "筆",
        "hv": "BÚT",
        "read": "ひつ・ふで",
        "word_jp": "鉛筆・筆記・筆",
        "word_read": "えんぴつ・ひっき・ふで",
        "meaning_vi": "Cây bút (bút chì, thi viết, bút lông)",
        "exams": "12/2011"
      },
      {
        "kanji": "律",
        "hv": "LUẬT",
        "read": "りつ",
        "word_jp": "法律・規律",
        "word_read": "ほうりつ・きりつ",
        "meaning_vi": "Pháp luật, kỷ luật",
        "exams": "Trọng tâm N3"
      }
    ],
    "diff_tip": "筆 có bộ Trúc ⺮ trên đầu (cán bút bằng tre → 鉛筆 bút chì — sách gốc in nhầm DUẬT!); 律 có bộ Sách 彳 bên trái (đường lối kỷ luật → 法律).",
    "tts": "えんぴつ、ひっき、ふで、ほうりつ、きりつ"
  },
  {
    "id": "m2trap_83",
    "stt": 83,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Thêm bộ Nhân 亻: 健 vs 建",
    "items": [
      {
        "kanji": "健",
        "hv": "KIỆN",
        "read": "けん",
        "word_jp": "健康・健全・保健",
        "word_read": "けんこう・けんぜん・ほけん",
        "meaning_vi": "Khỏe mạnh (sức khỏe, lành mạnh, y tế/bảo vệ sức khỏe)",
        "exams": "07/2011"
      },
      {
        "kanji": "建",
        "hv": "KIẾN",
        "read": "けん・たてる",
        "word_jp": "建物・建築・建設",
        "word_read": "たてもの・けんちく・けんせつ",
        "meaning_vi": "Xây dựng (tòa nhà, kiến trúc, kiến thiết)",
        "exams": "07/2011"
      }
    ],
    "diff_tip": "健 có bộ Nhân 亻 (con người khỏe mạnh → 健康 sức khỏe); 建 không có Nhân 亻 là xây nhà cửa (建物, 建築 — Hán Việt là KIẾN, sách gốc in nhầm KIỆN!).",
    "tts": "けんこう、けんぜん、たてもの、けんちく、けんせつ"
  },
  {
    "id": "m2trap_84",
    "stt": 84,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Cùng phần 复: 復 vs 複 vs 腹",
    "items": [
      {
        "kanji": "復",
        "hv": "PHỤC",
        "read": "ふく",
        "word_jp": "復習・回復・往復",
        "word_read": "ふくしゅう・かいふく・おうふく",
        "meaning_vi": "Quay lại, lặp lại (ôn tập, hồi phục, khứ hồi)",
        "exams": "12/2012, 07/2014, 07/2018, 12/2020"
      },
      {
        "kanji": "複",
        "hv": "PHỨC",
        "read": "ふく",
        "word_jp": "複雑・複数",
        "word_read": "ふくざつ・ふくすう",
        "meaning_vi": "Nhiều lớp, phức tạp, số nhiều",
        "exams": "12/2012, 07/2014, 07/2018, 12/2020"
      },
      {
        "kanji": "腹",
        "hv": "PHÚC",
        "read": "ふく・はら",
        "word_jp": "腹・空腹・満腹",
        "word_read": "はら・くうふく・まんぷく",
        "meaning_vi": "Cái bụng (bụng, đói bụng, no bụng)",
        "exams": "Trọng tâm N3"
      }
    ],
    "diff_tip": "Cả 3 đều đọc ふく: 復 có bộ Sách 彳 (đi đi về về → 復習, 往復); 複 có bộ Y 衤 (áo nhiều lớp → 複雑 phức tạp); 腹 có bộ Nhục 月 (bộ phận cơ thể → 腹 cái bụng).",
    "tts": "ふくしゅう、かいふく、おうふく、ふくざつ、ふくすう、はら、くうふく"
  },
  {
    "id": "m2trap_85",
    "stt": 85,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Cùng vách 厂: 源 vs 原 vs 厚",
    "items": [
      {
        "kanji": "源",
        "hv": "NGUYÊN",
        "read": "げん・みなもと",
        "word_jp": "資源・電源・語源",
        "word_read": "しげん・でんげん・ごげん",
        "meaning_vi": "Nguồn tài nguyên, nguồn điện, nguồn gốc từ",
        "exams": "07/2015, 12/2015"
      },
      {
        "kanji": "原",
        "hv": "NGUYÊN",
        "read": "げん・はら",
        "word_jp": "原因・原料・高原",
        "word_read": "げんいん・げんりょう・こうげん",
        "meaning_vi": "Nguyên nhân, nguyên liệu, cao nguyên",
        "exams": "07/2015, 12/2015"
      },
      {
        "kanji": "厚",
        "hv": "HẬU",
        "read": "こう・あつい",
        "word_jp": "厚い・濃厚・厚かましい",
        "word_read": "あつい・のうこう・あつかましい",
        "meaning_vi": "Dày, đậm đặc, mặt dày/trơ trẽn",
        "exams": "12/2018, 07/2019"
      }
    ],
    "diff_tip": "源 có nước 氵 là nguồn chảy ra (資源, 電源); 原 không có 氵 là nguyên nhân/cánh đồng (原因, 高原); 厚 bên trong là 日 + 子 (độ dày → 厚い).",
    "tts": "しげん、でんげん、げんいん、こうげん、あつい"
  },
  {
    "id": "m2trap_86",
    "stt": 86,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Cùng bộ Mịch 糸 / Kim 金: 録 vs 緑 vs 線",
    "items": [
      {
        "kanji": "録",
        "hv": "LỤC",
        "read": "ろく",
        "word_jp": "記録・録音・登録",
        "word_read": "きろく・ろくおん・とうろく",
        "meaning_vi": "Ghi chép lại (kỷ lục/ghi chép, thu âm, đăng ký)",
        "exams": "12/2012"
      },
      {
        "kanji": "緑",
        "hv": "LỤC",
        "read": "りょく・みどり",
        "word_jp": "緑・新緑・緑茶",
        "word_read": "みどり・しんりょく・りょくちゃ",
        "meaning_vi": "Màu xanh lá, chồi xanh mới, trà xanh",
        "exams": "12/2012"
      },
      {
        "kanji": "線",
        "hv": "TUYẾN",
        "read": "せん",
        "word_jp": "路線・下線・新幹線",
        "word_read": "ろせん・かせん・しんかんせん",
        "meaning_vi": "Đường kẻ, tuyến đường sắt",
        "exams": "Trọng tâm N3"
      }
    ],
    "diff_tip": "録 có bộ Kim 金 (khắc lên kim loại → 記録 ghi chép, 録音 thu âm); 緑 có bộ Mịch 糸 + 录 (nhuộm tơ màu xanh → 緑 xanh lá); 線 là 糸 + 泉 (đường dây 路線).",
    "tts": "きろく、ろくおん、とうろく、みどり、りょくちゃ、ろせん"
  },
  {
    "id": "m2trap_87",
    "stt": 87,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Cùng bộ Lực 力: 勤 vs 動 vs 働",
    "items": [
      {
        "kanji": "勤",
        "hv": "CẦN",
        "read": "きん・つとめる",
        "word_jp": "出勤・勤務・勤める",
        "word_read": "しゅっきん・きんむ・つとめる",
        "meaning_vi": "Đi làm, làm việc cho cơ quan/công ty",
        "exams": "07/2013, 07/2015, 12/2018"
      },
      {
        "kanji": "動",
        "hv": "ĐỘNG",
        "read": "どう・うごく",
        "word_jp": "運動・動物・動く",
        "word_read": "うんどう・どうぶつ・うごく",
        "meaning_vi": "Chuyển động, vận động, động vật",
        "exams": "12/2014"
      },
      {
        "kanji": "働",
        "hv": "ĐỘNG",
        "read": "どう・はたらく",
        "word_jp": "働く・労働",
        "word_read": "はたらく・ろうどう",
        "meaning_vi": "Lao động, làm việc",
        "exams": "07/2015, 12/2018"
      }
    ],
    "diff_tip": "動 (重 + 力) là chuyển động chung (運動, 動く); 働 thêm Nhân 亻 là người lao động (働く, 労働); 勤 là đi làm công sở (出勤 đi làm, 勤める).",
    "tts": "しゅっきん、つとめる、うんどう、うごく、はたらく、ろうどう"
  },
  {
    "id": "m2trap_88",
    "stt": 88,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Cùng phần 圣: 経 vs 軽 vs 径",
    "items": [
      {
        "kanji": "経",
        "hv": "KINH",
        "read": "けい・へる・たつ",
        "word_jp": "経験・経済・経つ",
        "word_read": "けいけん・けいざい・たつ",
        "meaning_vi": "Kinh nghiệm, kinh tế, thời gian trôi qua",
        "exams": "07/2017, 12/2017"
      },
      {
        "kanji": "軽",
        "hv": "KHINH",
        "read": "けい・かるい",
        "word_jp": "軽い・気軽・軽食",
        "word_read": "かるい・きがる・けいしょく",
        "meaning_vi": "Nhẹ nhàng, thoải mái, bữa ăn nhẹ",
        "exams": "12/2016, 07/2019"
      },
      {
        "kanji": "径",
        "hv": "KÍNH",
        "read": "けい",
        "word_jp": "直径・半径",
        "word_read": "ちょっけい・はんけい",
        "meaning_vi": "Đường kính, bán kính",
        "exams": "Trọng tâm N3"
      }
    ],
    "diff_tip": "Cả 3 đều đọc けい: 経 có chỉ 糸 (sợi thời gian → 経験, 経済); 軽 có xe 車 (xe chạy nhẹ → 軽い); 径 có bước chân 彳 (đường thẳng cắt ngang → 直径, 半径).",
    "tts": "けいけん、けいざい、かるい、きがる、ちょっけい、はんけい"
  },
  {
    "id": "m2trap_89",
    "stt": 89,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Cùng đáy Hỏa 灬: 熱 vs 熟",
    "items": [
      {
        "kanji": "熱",
        "hv": "NHIỆT",
        "read": "ねつ・あつい",
        "word_jp": "熱い・熱心・発熱",
        "word_read": "あつい・ねっしん・はつねつ",
        "meaning_vi": "Nóng, sốt, nhiệt tình",
        "exams": "07/2012, 12/2018"
      },
      {
        "kanji": "熟",
        "hv": "THỤC",
        "read": "じゅく・うれる",
        "word_jp": "熟語・熟す・未熟",
        "word_read": "じゅくご・じゅくす・みじゅく",
        "meaning_vi": "Chín muồi, thuần thục (từ ghép Hán tự, chín, non nớt)",
        "exams": "07/2012, 12/2018"
      }
    ],
    "diff_tip": "熱 bên trái là 埶 (cảm giác nóng/sốt → 熱い, 熱心); 熟 bên trái là 享 (đun chín kỹ → 熟語 từ ghép, 未熟 chưa chín chắn).",
    "tts": "あつい、ねっしん、はつねつ、じゅくご、みじゅく"
  },
  {
    "id": "m2trap_90",
    "stt": 90,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Thêm bộ Hỏa 火: 燃 vs 然",
    "items": [
      {
        "kanji": "燃",
        "hv": "NHIÊN",
        "read": "ねん・もえる・もやす",
        "word_jp": "燃える・燃やす・燃料",
        "word_read": "もえる・もやす・ねんりょう",
        "meaning_vi": "Cháy, đốt cháy, nhiên liệu",
        "exams": "07/2016"
      },
      {
        "kanji": "然",
        "hv": "NHIÊN",
        "read": "ぜん・ねん",
        "word_jp": "自然・当然・突然",
        "word_read": "しぜん・とうぜん・とつぜん",
        "meaning_vi": "Tự nhiên, đương nhiên, đột nhiên",
        "exams": "Trọng tâm N3"
      }
    ],
    "diff_tip": "燃 thêm ngọn lửa 火 bên trái (rực cháy → 燃える, 燃料); 然 không có 火 bên trái đi vào các từ phó từ/trạng thái (自然, 当然, 突然).",
    "tts": "もえる、もやす、ねんりょう、しぜん、とうぜん、とつぜん"
  },
  {
    "id": "m2trap_91",
    "stt": 91,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Cùng phần 寺: 待 vs 持 vs 特 vs 時",
    "items": [
      {
        "kanji": "待",
        "hv": "ĐÃI",
        "read": "たい・まつ",
        "word_jp": "待つ・期待・招待",
        "word_read": "まつ・きたい・しょうたい",
        "meaning_vi": "Chờ đợi, kỳ vọng, chiêu đãi",
        "exams": "07/2017"
      },
      {
        "kanji": "持",
        "hv": "TRÌ",
        "read": "じ・もつ",
        "word_jp": "持つ・気持ち・維持",
        "word_read": "もつ・きもち・いじ",
        "meaning_vi": "Cầm nắm, tâm trạng, duy trì",
        "exams": "07/2012"
      },
      {
        "kanji": "特",
        "hv": "ĐẶC",
        "read": "とく",
        "word_jp": "特別・特徴・特に",
        "word_read": "とくべつ・とくちょう・とくに",
        "meaning_vi": "Đặc biệt, đặc trưng, nhất là",
        "exams": "Trọng tâm N3"
      },
      {
        "kanji": "時",
        "hv": "THỜI",
        "read": "じ・とき",
        "word_jp": "時間・時代・時計",
        "word_read": "じかん・じだい・とけい",
        "meaning_vi": "Thời gian, thời đại, đồng hồ",
        "exams": "Trọng tâm N3"
      }
    ],
    "diff_tip": "Nhìn bộ bên trái chữ 寺: 彳 bước dừng đợi là 待 (待つ); 扌 bàn tay cầm là 持 (持つ); 牜 con trâu quý là 特 (特別); 日 mặt trời đo giờ là 時 (時間).",
    "tts": "まつ、きたい、もつ、きもち、とくべつ、じかん"
  },
  {
    "id": "m2trap_92",
    "stt": 92,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Khối 口 + nét phẩy: 右 vs 若 vs 岩 vs 石",
    "items": [
      {
        "kanji": "右",
        "hv": "HỮU",
        "read": "う・ゆう・みぎ",
        "word_jp": "右側・左右・右手",
        "word_read": "みぎがわ・さゆう・みぎて",
        "meaning_vi": "Bên phải (phía phải, trái phải, tay phải)",
        "exams": "07/2018"
      },
      {
        "kanji": "若",
        "hv": "NHƯỢC",
        "read": "じゃく・わかい",
        "word_jp": "若い・若者",
        "word_read": "わかい・わかもの",
        "meaning_vi": "Trẻ trung, thanh niên/giới trẻ",
        "exams": "12/2017"
      },
      {
        "kanji": "岩",
        "hv": "NHAM",
        "read": "がん・いわ",
        "word_jp": "岩・岩石・溶岩",
        "word_read": "いわ・がんせき・ようがん",
        "meaning_vi": "Tảng đá lớn, nham thạch, dung nham",
        "exams": "Trọng tâm N3"
      },
      {
        "kanji": "石",
        "hv": "THẠCH",
        "read": "せき・いし",
        "word_jp": "石・石油・磁石",
        "word_read": "いし・せきゆ・じしゃく",
        "meaning_vi": "Hòn đá, dầu mỏ, nam châm",
        "exams": "Trọng tâm N3"
      }
    ],
    "diff_tip": "石 có nét phẩy không chọc qua nét ngang (hòn đá いし), đội thêm 山 là 岩 (tảng đá lớn いわ); 右 nét phẩy chọc lên trên (bên phải みぎ), đội thêm cỏ 艹 là 若 (trẻ trung わかい).",
    "tts": "みぎがわ、わかい、わかもの、いわ、いし、せきゆ"
  },
  {
    "id": "m2trap_93",
    "stt": 93,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Cùng phần 反: 反 vs 坂 vs 板 vs 返 vs 販",
    "items": [
      {
        "kanji": "反",
        "hv": "PHẢN",
        "read": "はん",
        "word_jp": "反対・違反・反省",
        "word_read": "はんたい・いはん・はんせい",
        "meaning_vi": "Ngược lại (phản đối, vi phạm, tự kiểm điểm)",
        "exams": "12/2017"
      },
      {
        "kanji": "坂",
        "hv": "PHẢN",
        "read": "はん・さか",
        "word_jp": "坂・坂道",
        "word_read": "さか・さかみち",
        "meaning_vi": "Con dốc, đường dốc",
        "exams": "Trọng tâm N3"
      },
      {
        "kanji": "板",
        "hv": "BẢN",
        "read": "はん・ばん・いた",
        "word_jp": "黒板・看板・板",
        "word_read": "こくばん・かんばん・いた",
        "meaning_vi": "Tấm ván, bảng đen, biển hiệu",
        "exams": "12/2017"
      },
      {
        "kanji": "返",
        "hv": "PHẢN",
        "read": "へん・かえす",
        "word_jp": "返事・返す・返品",
        "word_read": "へんじ・かえす・へんぴん",
        "meaning_vi": "Trả lại (hồi âm, trả đồ, trả hàng lỗi)",
        "exams": "12/2013, 07/2016"
      },
      {
        "kanji": "販",
        "hv": "PHÁN",
        "read": "はん",
        "word_jp": "販売・自動販売機",
        "word_read": "はんばい・じどうはんばいき",
        "meaning_vi": "Buôn bán, máy bán hàng tự động",
        "exams": "Trọng tâm N3"
      }
    ],
    "diff_tip": "Cứ nhìn bộ bên trái 反 là ăn điểm tuyệt đối: 土 đất dốc là 坂 (con dốc); 木 gỗ xẻ là 板 (tấm bảng); 辶 đi ngược lại là 返 (trả lại); 貝 tiền bạc là 販 (bán hàng 販売).",
    "tts": "はんたい、さかみち、こくばん、かんばん、へんじ、かえす、はんばい"
  },
  {
    "id": "m2trap_94",
    "stt": 94,
    "trap_type": "shape",
    "trap_label": "👀 Hình dạng giống nhau",
    "group_title": "Cùng cổng 門: 関 vs 聞 vs 問 vs 間 vs 簡",
    "items": [
      {
        "kanji": "関",
        "hv": "QUAN",
        "read": "かん",
        "word_jp": "関係・関心・玄関",
        "word_read": "かんけい・かんしん・げんかん",
        "meaning_vi": "Quan hệ, sự quan tâm, lối vào nhà",
        "exams": "12/2017"
      },
      {
        "kanji": "聞",
        "hv": "VĂN",
        "read": "ぶん・きく",
        "word_jp": "新聞・聞く",
        "word_read": "しんぶん・きく",
        "meaning_vi": "Nghe, báo chí",
        "exams": "12/2017"
      },
      {
        "kanji": "問",
        "hv": "VẤN",
        "read": "もん・とう",
        "word_jp": "問題・質問・疑問",
        "word_read": "もんだい・しつもん・ぎもん",
        "meaning_vi": "Câu hỏi, vấn đề, thắc mắc",
        "exams": "Trọng tâm N3"
      },
      {
        "kanji": "間",
        "hv": "GIAN",
        "read": "かん・けん・あいだ・ま",
        "word_jp": "時間・人間・間に合う",
        "word_read": "じかん・にんげん・まにあう",
        "meaning_vi": "Khoảng giữa, thời gian, con người, kịp giờ",
        "exams": "07/2012"
      },
      {
        "kanji": "簡",
        "hv": "GIẢN",
        "read": "かん",
        "word_jp": "簡単・簡潔",
        "word_read": "かんたん・かんけつ",
        "meaning_vi": "Đơn giản, ngắn gọn",
        "exams": "12/2017"
      }
    ],
    "diff_tip": "Mở cổng 門 xem ruột: 耳 tai nghe là 聞 (新聞); 口 miệng hỏi là 問 (問題 — Hán Việt là VẤN, sách gốc in nhầm MÔN!); 日 mặt trời là 間 (時間), đội thêm ⺮ là 簡 (簡単); chốt cửa 关 là 関 (関係).",
    "tts": "かんけい、しんぶん、もんだい、しつもん、じかん、かんたん"
  },
  {
    "id": "m2trap_95",
    "stt": 95,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Mượn vs Cho mượn: 借 vs 貸",
    "items": [
      {
        "kanji": "借",
        "hv": "TÁ",
        "read": "かりる",
        "word_jp": "借りる・借金",
        "word_read": "かりる・しゃっきん",
        "meaning_vi": "Đi mượn (mượn từ người khác), vay nợ",
        "exams": "12/2013, 12/2015, 07/2017"
      },
      {
        "kanji": "貸",
        "hv": "THẢI",
        "read": "かす",
        "word_jp": "貸す・貸し出し",
        "word_read": "かす・かしだし",
        "meaning_vi": "Cho mượn, cho vay (cho mượn sách ở thư viện)",
        "exams": "12/2015"
      }
    ],
    "diff_tip": "Mẹo nhớ không bao giờ lộn: 貸 có tiền 貝 ở dưới (có tiền mới CHO VAY かす); 借 có 昔 ở bên (đi mượn かりる). Nhớ cụm: 借りる (mượn về) ↔ 貸す (đưa ra).",
    "tts": "かりる、しゃっきん、かす、かしだし"
  },
  {
    "id": "m2trap_96",
    "stt": 96,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Ước nguyện vs Nhờ vả: 願 vs 頼",
    "items": [
      {
        "kanji": "願",
        "hv": "NGUYỆN",
        "read": "ねがう",
        "word_jp": "願う・お願い・願い事",
        "word_read": "ねがう・おねがい・ねがいごと",
        "meaning_vi": "Cầu nguyện, ước mong, xin nhờ lịch sự",
        "exams": "12/2015, 07/2017"
      },
      {
        "kanji": "頼",
        "hv": "LẠI",
        "read": "たのむ・たよる",
        "word_jp": "頼む・頼る・頼もしい",
        "word_read": "たのむ・たよる・たのもしい",
        "meaning_vi": "Nhờ vả, gọi món, dựa dẫm, đáng tin cậy",
        "exams": "12/2015"
      }
    ],
    "diff_tip": "Cùng có đầu 頁 bên phải: 願 bên trái là 原 (từ cõi lòng ước nguyện → 願う ねがう); 頼 bên trái là 束 (bó việc gửi nhờ người khác → 頼む たのむ, 頼る たよる).",
    "tts": "ねがう、おねがい、たのむ、たよる"
  },
  {
    "id": "m2trap_97",
    "stt": 97,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Xa xôi vs Chạy trốn: 遠 vs 逃",
    "items": [
      {
        "kanji": "遠",
        "hv": "VIỄN",
        "read": "とおい",
        "word_jp": "遠い・遠回り・遠慮",
        "word_read": "とおい・とおまわり・えんりょ",
        "meaning_vi": "Xa, đi đường vòng, khách sáo/ngần ngại",
        "exams": "12/2013, 07/2016"
      },
      {
        "kanji": "逃",
        "hv": "ĐÀO",
        "read": "にげる・のがす",
        "word_jp": "逃げる・逃す・逃亡",
        "word_read": "にげる・のがす・とうぼう",
        "meaning_vi": "Chạy trốn, bỏ lỡ cơ hội, đào tẩu",
        "exams": "12/2013, 07/2016"
      }
    ],
    "diff_tip": "Đều có bộ Sước 辶: 遠 là đường dài xa xôi (遠い とおい); 逃 có 兆 (dấu hiệu nguy hiểm) nên phải bỏ chạy (逃げる にげる) hoặc để sổng mất (逃す のがす).",
    "tts": "とおい、とおまわり、にげる、のがす"
  },
  {
    "id": "m2trap_98",
    "stt": 98,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Trả lại vs Ngược lại: 返 vs 逆",
    "items": [
      {
        "kanji": "返",
        "hv": "PHẢN",
        "read": "かえす・かえる",
        "word_jp": "返す・返事・繰り返す",
        "word_read": "かえす・へんじ・くりかえす",
        "meaning_vi": "Trả lại, lời đáp lại, lặp đi lặp lại",
        "exams": "12/2013, 07/2016"
      },
      {
        "kanji": "逆",
        "hv": "NGHỊCH",
        "read": "さか・さからう",
        "word_jp": "逆さ・逆らう・逆転",
        "word_read": "さかさ・さからう・ぎゃくてん",
        "meaning_vi": "Lộn ngược, chống lại/trái lệnh, lội ngược dòng",
        "exams": "12/2013, 07/2016, 12/2020"
      }
    ],
    "diff_tip": "返 đọc かえす là trả lại đồ/lời (返す, 繰り返す — đừng nhầm với 帰る về nhà!); 逆 đọc さか / ぎゃく là đảo ngược chiều (逆さ lộn ngược, 逆らう chống đối).",
    "tts": "かえす、くりかえす、さかさ、さからう、ぎゃくてん"
  },
  {
    "id": "m2trap_99",
    "stt": 99,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Nhóm Lửa 火: 焼 vs 煙 vs 燃",
    "items": [
      {
        "kanji": "焼",
        "hv": "THIÊU",
        "read": "やく・やける",
        "word_jp": "焼く・焼ける・日焼け",
        "word_read": "やく・やける・ひやけ",
        "meaning_vi": "Nướng, cháy xém, bị rám nắng",
        "exams": "07/2016"
      },
      {
        "kanji": "煙",
        "hv": "YÊN",
        "read": "けむり・けむい",
        "word_jp": "煙・煙い・禁煙",
        "word_read": "けむり・けむい・きんえん",
        "meaning_vi": "Làn khói, cay mắt vì khói, cấm hút thuốc",
        "exams": "07/2016, 07/2018"
      },
      {
        "kanji": "燃",
        "hv": "NHIÊN",
        "read": "もえる・もやす",
        "word_jp": "燃える・燃やす・燃えるごみ",
        "word_read": "もえる・もやす・もえるごみ",
        "meaning_vi": "Cháy bùng, đốt cháy, rác cháy được",
        "exams": "07/2016"
      }
    ],
    "diff_tip": "Cả 3 đều có bộ Hỏa 火 và cực hay thi chung: 焼 (やく nướng bánh/thịt), 煙 (けむり khói bay lên), 燃 (もえる bốc lửa cháy bùng).",
    "tts": "やく、やける、けむり、けむい、もえる、もやす"
  },
  {
    "id": "m2trap_100",
    "stt": 100,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Xoay, Rẽ, Ấn: 回 vs 曲 vs 押",
    "items": [
      {
        "kanji": "回",
        "hv": "HỒI",
        "read": "まわる・まわす",
        "word_jp": "回る・回す・遠回り",
        "word_read": "まわる・まわす・とおまわり",
        "meaning_vi": "Quay tròn, xoay, đi vòng quanh",
        "exams": "07/2016"
      },
      {
        "kanji": "曲",
        "hv": "KHÚC",
        "read": "まがる・まげる",
        "word_jp": "曲がる・曲げる・曲がり角",
        "word_read": "まがる・まげる・まがりかど",
        "meaning_vi": "Rẽ, uốn cong, khúc cua/góc đường",
        "exams": "07/2016"
      },
      {
        "kanji": "押",
        "hv": "ÁP",
        "read": "おす・おさえる",
        "word_jp": "押す・押さえる・押し入れ",
        "word_read": "おす・おさえる・おしいれ",
        "meaning_vi": "Ấn nút/đẩy, giữ chặt/kìm nén, tủ âm tường",
        "exams": "07/2010, 07/2016"
      }
    ],
    "diff_tip": "Cực dễ lộn まわる vs まがる: 回 (2 vòng vuông lồng nhau) là XOAY tròn まわる; 曲 là RẼ/BẺ CONG まがる; còn 押 có bộ Tay 扌 là ấn/đẩy おす.",
    "tts": "まわる、まわす、まがる、まげる、おす、おさえる"
  },
  {
    "id": "m2trap_101",
    "stt": 101,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Hồ, Cảng, Ao, Phố: 湖 vs 港 vs 池 vs 巷",
    "items": [
      {
        "kanji": "湖",
        "hv": "HỒ",
        "read": "みずうみ",
        "word_jp": "湖・湖畔",
        "word_read": "みずうみ・こはん",
        "meaning_vi": "Cái hồ lớn, bờ hồ",
        "exams": "12/2011, 12/2016"
      },
      {
        "kanji": "港",
        "hv": "CẢNG",
        "read": "みなと",
        "word_jp": "港・空港・港町",
        "word_read": "みなと・くうこう・みなとまち",
        "meaning_vi": "Bến cảng, sân bay, thành phố cảng",
        "exams": "12/2016"
      },
      {
        "kanji": "池",
        "hv": "TRÌ",
        "read": "いけ",
        "word_jp": "池・電池",
        "word_read": "いけ・でんち",
        "meaning_vi": "Cái ao, cục pin",
        "exams": "12/2014, 12/2016"
      },
      {
        "kanji": "巷",
        "hv": "HẠNG",
        "read": "ちまた",
        "word_jp": "巷・巷の噂",
        "word_read": "ちまた・ちまたのうわさ",
        "meaning_vi": "Đường phố, ngõ hẻm, tin đồn trong thiên hạ",
        "exams": "12/2011"
      }
    ],
    "diff_tip": "Phân biệt vùng nước: 湖 (みずうみ hồ rộng như biển nước), 池 (いけ ao nhỏ), 港 (みなと cảng biển có 氵); mất 氵 thành 巷 (ちまた ngõ phố — bẫy nhìn nhầm 港!).",
    "tts": "みずうみ、みなと、くうこう、いけ、ちまた"
  },
  {
    "id": "m2trap_102",
    "stt": 102,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Tiến, Ghép, Tiếp tục: 進 vs 組 vs 続",
    "items": [
      {
        "kanji": "進",
        "hv": "TIẾN",
        "read": "すすむ・すすめる",
        "word_jp": "進む・進める・進歩",
        "word_read": "すすむ・すすめる・しんぽ",
        "meaning_vi": "Tiến lên, xúc tiến, sự tiến bộ",
        "exams": "12/2016"
      },
      {
        "kanji": "組",
        "hv": "TỔ",
        "read": "くむ・くみ",
        "word_jp": "組む・組み合わせ・番組",
        "word_read": "くむ・くみあわせ・ばんぐみ",
        "meaning_vi": "Khoanh tay/lắp ghép, sự kết hợp, chương trình TV",
        "exams": "12/2012, 12/2016"
      },
      {
        "kanji": "続",
        "hv": "TỤC",
        "read": "つづく・つづける",
        "word_jp": "続く・続ける・手続き",
        "word_read": "つづく・つづける・てつづき",
        "meaning_vi": "Tiếp diễn, tiếp tục làm, thủ tục",
        "exams": "12/2016"
      }
    ],
    "diff_tip": "進 đọc すすむ (tiến tới phía trước — đừng nhầm với 勧める khuyên bảo); 組 đọc くむ (ghép tổ hợp); 続 đọc つづく (kéo dài liên tục, nhớ 手続き thủ tục!).",
    "tts": "すすむ、すすめる、くむ、くみあわせ、つづく、つづける"
  },
  {
    "id": "m2trap_103",
    "stt": 103,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Gửi, Tích trữ, Chuyển: 預 vs 貯 vs 移",
    "items": [
      {
        "kanji": "預",
        "hv": "DỰ",
        "read": "あずける・あずかる",
        "word_jp": "預ける・預かる・預金",
        "word_read": "あずける・あずかる・よきん",
        "meaning_vi": "Gửi nhờ (tiền/đồ), nhận giữ hộ, tiền gửi ngân hàng",
        "exams": "07/2017"
      },
      {
        "kanji": "貯",
        "hv": "TRỮ",
        "read": "ためる",
        "word_jp": "貯める・貯金",
        "word_read": "ためる・ちょきん",
        "meaning_vi": "Tích góp, tiết kiệm tiền",
        "exams": "07/2017"
      },
      {
        "kanji": "移",
        "hv": "DI",
        "read": "うつる・うつす",
        "word_jp": "移る・移す・移動",
        "word_read": "うつる・うつす・いどう",
        "meaning_vi": "Di chuyển, dời sang, lây lan",
        "exams": "07/2010, 12/2014, 12/2020"
      }
    ],
    "diff_tip": "預ける (đưa tiền/hành lý gửi giữ) ↔ 預かる (nhận giữ hộ); 貯める (có 貝 tiền → gom góp tiết kiệm 貯金); 移る (うつる di dời chỗ — đừng nhầm 写す chép/chụp!).",
    "tts": "あずける、あずかる、ためる、ちょきん、うつる、うつす"
  },
  {
    "id": "m2trap_104",
    "stt": 104,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Thiên nhiên xanh: 葉 vs 草 vs 緑",
    "items": [
      {
        "kanji": "葉",
        "hv": "DIỆP",
        "read": "は",
        "word_jp": "葉・落ち葉・言葉",
        "word_read": "は・おちば・ことば",
        "meaning_vi": "Chiếc lá, lá rụng, từ ngữ/lời nói",
        "exams": "07/2017"
      },
      {
        "kanji": "草",
        "hv": "THẢO",
        "read": "くさ",
        "word_jp": "草・雑草・草花",
        "word_read": "くさ・ざっそう・くさばな",
        "meaning_vi": "Ngọn cỏ, cỏ dại, hoa cỏ",
        "exams": "07/2017"
      },
      {
        "kanji": "緑",
        "hv": "LỤC",
        "read": "みどり",
        "word_jp": "緑・緑色・新緑",
        "word_read": "みどり・みどりいろ・しんりょく",
        "meaning_vi": "Màu xanh lá cây, cây xanh, chồi non xanh",
        "exams": "12/2015"
      }
    ],
    "diff_tip": "葉 trên cây 木 nên là lá は (chú ý biến âm 落ち葉 おちば, 言葉 ことば); 草 dưới 艹 là 早 nên là cỏ くさ; 緑 là màu xanh lá みどり (dễ nhầm 録).",
    "tts": "は、おちば、くさ、ざっそう、みどり、みどりいろ"
  },
  {
    "id": "m2trap_105",
    "stt": 105,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Bộ phận cơ thể: 頭 vs 腹 vs 背",
    "items": [
      {
        "kanji": "頭",
        "hv": "ĐẦU",
        "read": "あたま・かしら",
        "word_jp": "頭・頭痛・先頭",
        "word_read": "あたま・ずつう・せんとう",
        "meaning_vi": "Cái đầu, đau đầu, dẫn đầu hàng",
        "exams": "12/2012, 07/2017"
      },
      {
        "kanji": "腹",
        "hv": "PHÚC",
        "read": "はら",
        "word_jp": "腹・腹が立つ・空腹",
        "word_read": "はら・はらがたつ・くうふく",
        "meaning_vi": "Cái bụng, nổi giận, đói bụng",
        "exams": "07/2017"
      },
      {
        "kanji": "背",
        "hv": "BỐI",
        "read": "せ・せい・そむく",
        "word_jp": "背中・背が高い・背景",
        "word_read": "せなか・せがたかい・はいけい",
        "meaning_vi": "Cái lưng, dáng người cao, bối cảnh/nền sau",
        "exams": "07/2010"
      }
    ],
    "diff_tip": "頭 (あたま cái đầu, âm On ず/とう); 腹 (はら cái bụng — nhớ thành ngữ 腹が立つ tức giận!); 背 (せ lưng/chiều cao せがたかい, đừng đọc nhầm はい!).",
    "tts": "あたま、はら、はらがたつ、せなか、せがたかい"
  },
  {
    "id": "m2trap_106",
    "stt": 106,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Khóc, Nước mắt, Buồn: 泣 vs 涙 vs 悲",
    "items": [
      {
        "kanji": "泣",
        "hv": "KHẤP",
        "read": "なく",
        "word_jp": "泣く・泣き声",
        "word_read": "なく・なきごえ",
        "meaning_vi": "Khóc (người khóc), tiếng khóc",
        "exams": "12/2011, 07/2018, 12/2020"
      },
      {
        "kanji": "涙",
        "hv": "LỆ",
        "read": "なみだ",
        "word_jp": "涙・涙を流す",
        "word_read": "なみだ・なみだをながす",
        "meaning_vi": "Giọt nước mắt, rơi nước mắt",
        "exams": "12/2011, 07/2018, 12/2020"
      },
      {
        "kanji": "悲",
        "hv": "BI",
        "read": "かなしい・かなしむ",
        "word_jp": "悲しい・悲しむ・悲劇",
        "word_read": "かなしい・かなしむ・ひげき",
        "meaning_vi": "Buồn bã, đau buồn, bi kịch",
        "exams": "07/2018, 12/2020"
      }
    ],
    "diff_tip": "Bộ 3 thi đi thi lại nhiều năm: 泣 là động từ khóc なく (氵 + 立); 涙 là danh từ nước mắt なみだ (氵 + 戻); 悲 có tim 心 là tính từ buồn かなしい.",
    "tts": "なく、なきごえ、なみだ、かなしい、かなしむ"
  },
  {
    "id": "m2trap_107",
    "stt": 107,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Mệt, Đau, Buồn ngủ: 疲 vs 痛 vs 眠",
    "items": [
      {
        "kanji": "疲",
        "hv": "BÌ",
        "read": "つかれる",
        "word_jp": "疲れる・お疲れ様",
        "word_read": "つかれる・おつかれさま",
        "meaning_vi": "Mệt mỏi, lời cảm ơn sau khi làm việc vất vả",
        "exams": "07/2013, 07/2018"
      },
      {
        "kanji": "痛",
        "hv": "THỐNG",
        "read": "いたい・いたむ",
        "word_jp": "痛い・痛む・痛み止め",
        "word_read": "いたい・いたむ・いたみどめ",
        "meaning_vi": "Đau nhức, nhói đau, thuốc giảm đau",
        "exams": "12/2017"
      },
      {
        "kanji": "眠",
        "hv": "MIÊN",
        "read": "ねむる・ねむい",
        "word_jp": "眠る・眠い・睡眠",
        "word_read": "ねむる・ねむい・すいみん",
        "meaning_vi": "Ngủ say, buồn ngủ, giấc ngủ",
        "exams": "12/2016"
      }
    ],
    "diff_tip": "疲 và 痛 đều khoác bộ Bệnh 疒: 疲 là mệt つかれる, 痛 là đau いたい; còn 眠 có con mắt 目 là buồn ngủ ねむい / ngủ ねむる (chú ý 睡眠 すいみん).",
    "tts": "つかれる、いたい、いたむ、ねむる、ねむい、すいみん"
  },
  {
    "id": "m2trap_108",
    "stt": 108,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Dày, Nông, Nhỏ mảnh: 厚 vs 浅 vs 細",
    "items": [
      {
        "kanji": "厚",
        "hv": "HẬU",
        "read": "あつい",
        "word_jp": "厚い・厚み",
        "word_read": "あつい・あつみ",
        "meaning_vi": "Dày (sách dày, áo dày), độ dày",
        "exams": "12/2018, 07/2019"
      },
      {
        "kanji": "浅",
        "hv": "THIỂN",
        "read": "あさい",
        "word_jp": "浅い・浅瀬",
        "word_read": "あさい・あさせ",
        "meaning_vi": "Nông, cạn, ngủ chập chờn, kinh nghiệm non",
        "exams": "12/2018, 07/2019"
      },
      {
        "kanji": "細",
        "hv": "TẾ",
        "read": "ほそい・こまかい",
        "word_jp": "細い・細かい・細長い",
        "word_read": "ほそい・こまかい・ほそながい",
        "meaning_vi": "Thon/mảnh, nhỏ li ti/chi tiết (tiền lẻ, tỉ mỉ)",
        "exams": "07/2014, 12/2018, 07/2019"
      }
    ],
    "diff_tip": "Siêu bẫy 細 có 2 âm Kun: 細い ほそい (thon nhỏ, ngõ hẹp) vs 細かい こまかい (chi tiết, tiền lẻ)! Còn 厚い (dày, phân biệt 暑い/熱い nóng) và 浅い (nông cạn).",
    "tts": "あつい、あさい、ほそい、こまかい"
  },
  {
    "id": "m2trap_109",
    "stt": 109,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Cứng, Đắng/Khổ, Ngắn: 固 vs 苦 vs 短",
    "items": [
      {
        "kanji": "固",
        "hv": "CỐ",
        "read": "かたい・かたまる・かためる",
        "word_jp": "固い・固まる・固定",
        "word_read": "かたい・かたまる・こてい",
        "meaning_vi": "Cứng chắc/đông đặc, đông lại, cố định",
        "exams": "07/2017"
      },
      {
        "kanji": "苦",
        "hv": "KHỔ",
        "read": "くるしい・にがい",
        "word_jp": "苦しい・苦い・苦手",
        "word_read": "くるしい・にがい・にがて",
        "meaning_vi": "Khổ sở/khó thở, vị đắng, kém/sở đoản",
        "exams": "07/2014"
      },
      {
        "kanji": "短",
        "hv": "ĐOẢN",
        "read": "みじかい",
        "word_jp": "短い・短所・短期",
        "word_read": "みじかい・たんしょ・たんき",
        "meaning_vi": "Ngắn, nhược điểm, ngắn hạn",
        "exams": "07/2014"
      }
    ],
    "diff_tip": "苦 cực dễ bẫy vì có 2 âm Kun: 苦しい くるしい (đau khổ) vs 苦い にがい (vị đắng → 苦手 にがて sở đoản)! 固い là cứng chắc (bánh/lời hứa); 短い là ngắn みじかい.",
    "tts": "かたい、かたまる、くるしい、にがい、にがて、みじかい"
  },
  {
    "id": "m2trap_110",
    "stt": 110,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Lạnh, Tắt, Trộn lẫn: 冷 vs 消 vs 混",
    "items": [
      {
        "kanji": "冷",
        "hv": "LÃNH",
        "read": "つめたい・ひえる・さめる",
        "word_jp": "冷たい・冷える・冷める",
        "word_read": "つめたい・ひえる・さめる",
        "meaning_vi": "Lạnh (sờ vào/thái độ), trở lạnh, nguội đi",
        "exams": "07/2018, 12/2020"
      },
      {
        "kanji": "消",
        "hv": "TIÊU",
        "read": "きえる・けす",
        "word_jp": "消える・消す・消しゴム",
        "word_read": "きえる・けす・けしごむ",
        "meaning_vi": "Tắt/biến mất, xóa/tắt đi, cục tẩy",
        "exams": "07/2014, 07/2019"
      },
      {
        "kanji": "混",
        "hv": "HỖN",
        "read": "まじる・まぜる・こむ",
        "word_jp": "混じる・混ぜる・混む",
        "word_read": "まじる・まぜる・こむ",
        "meaning_vi": "Bị lẫn vào, trộn lẫn, đông đúc/tắc nghẽn",
        "exams": "07/2011"
      }
    ],
    "diff_tip": "2 siêu sao nhiều âm Kun: 冷 đọc つめたい (lạnh tay), ひえる (lạnh buốt), さめる (đồ ăn nguội); 混 đọc まぜる (trộn) và こむ (đường đông 混む)! Còn 消 là きえる/けす.",
    "tts": "つめたい、ひえる、さめる、きえる、けす、まぜる、こむ"
  },
  {
    "id": "m2trap_111",
    "stt": 111,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Gói, Buộc, Tháo gỡ: 包 vs 結 vs 解",
    "items": [
      {
        "kanji": "包",
        "hv": "BAO",
        "read": "つつむ",
        "word_jp": "包む・小包・包装",
        "word_read": "つつむ・こづつみ・ほうそう",
        "meaning_vi": "Gói/bọc lại, bưu kiện nhỏ, đóng gói",
        "exams": "12/2013"
      },
      {
        "kanji": "結",
        "hv": "KẾT",
        "read": "むすぶ・ゆう",
        "word_jp": "結ぶ・結び目・結婚",
        "word_read": "むすぶ・むすびめ・けっこん",
        "meaning_vi": "Thắt nút/ký kết, nút thắt, kết hôn",
        "exams": "12/2013"
      },
      {
        "kanji": "解",
        "hv": "GIẢI",
        "read": "とく・とける",
        "word_jp": "解く・解ける・誤解",
        "word_read": "とく・とける・ごかい",
        "meaning_vi": "Giải bài/tháo dây, tự tuột ra, hiểu lầm",
        "exams": "07/2011, 12/2016"
      }
    ],
    "diff_tip": "Chuỗi thao tác ngược nhau: 包む (つつむ gói quà) → 結ぶ (むすぶ thắt dây) → 解く (とく tháo dây / giải đề toán — đừng nhầm 溶ける tan chảy!).",
    "tts": "つつむ、こづつみ、むすぶ、とく、とける"
  },
  {
    "id": "m2trap_112",
    "stt": 112,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Nhanh, Chậm, Bay: 速 vs 遅 vs 飛",
    "items": [
      {
        "kanji": "速",
        "hv": "TỐC",
        "read": "はやい・すみやか",
        "word_jp": "速い・速度・高速",
        "word_read": "はやい・そくど・こうそく",
        "meaning_vi": "Nhanh (tốc độ), vận tốc, cao tốc",
        "exams": "12/2016"
      },
      {
        "kanji": "遅",
        "hv": "TRÌ",
        "read": "おそい・おくれる",
        "word_jp": "遅い・遅れる・遅刻",
        "word_read": "おそい・おくれる・ちこく",
        "meaning_vi": "Chậm/muộn, bị trễ giờ, đi học/làm muộn",
        "exams": "07/2013"
      },
      {
        "kanji": "飛",
        "hv": "PHI",
        "read": "とぶ・とばす",
        "word_jp": "飛ぶ・飛ばす・飛行機",
        "word_read": "とぶ・とばす・ひこうき",
        "meaning_vi": "Bay, phóng/bỏ qua, máy bay",
        "exams": "12/2017"
      }
    ],
    "diff_tip": "速い là nhanh về TỐC ĐỘ (phân biệt 早い sớm về thời gian); 遅 đọc おそい (chậm/muộn) và おくれる (trễ tàu/giờ); 飛 đọc とぶ (bay trên trời).",
    "tts": "はやい、そくど、おそい、おくれる、ちこく、とぶ、とばす"
  },
  {
    "id": "m2trap_113",
    "stt": 113,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Bảo vệ, Giữ gìn, Giúp đỡ: 守 vs 保 vs 助",
    "items": [
      {
        "kanji": "守",
        "hv": "THỦ",
        "read": "まもる・もり",
        "word_jp": "守る・留守・お守り",
        "word_read": "まもる・るす・おまもり",
        "meaning_vi": "Tuân thủ/bảo vệ, vắng nhà, bùa hộ mệnh",
        "exams": "07/2012, 12/2012"
      },
      {
        "kanji": "保",
        "hv": "BẢO",
        "read": "たもつ",
        "word_jp": "保つ・保存・保証",
        "word_read": "たもつ・ほぞん・ほしょう",
        "meaning_vi": "Duy trì trạng thái, bảo quản, bảo hành",
        "exams": "07/2012"
      },
      {
        "kanji": "助",
        "hv": "TRỢ",
        "read": "たすける・たすかる",
        "word_jp": "助ける・助かる・助手",
        "word_read": "たすける・たすかる・じょしゅ",
        "meaning_vi": "Cứu giúp, được cứu/đỡ vất vả, trợ lý",
        "exams": "12/2012"
      }
    ],
    "diff_tip": "Rất hay bị bẫy nghĩa giống nhau: 守る (まもる giữ lời hứa/luật lệ), 保つ (たもつ duy trì nhiệt độ/sức khỏe), 助ける (たすける cứu giúp ai đó).",
    "tts": "まもる、るす、たもつ、ほぞん、たすける、たすかる"
  },
  {
    "id": "m2trap_114",
    "stt": 114,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Tăng, Giảm, Đầy: 増 vs 減 vs 満",
    "items": [
      {
        "kanji": "増",
        "hv": "TĂNG",
        "read": "ふえる・ふやす",
        "word_jp": "増える・増やす・増加",
        "word_read": "ふえる・ふやす・ぞうか",
        "meaning_vi": "Tăng lên (tự động từ), làm tăng thêm (tha động từ)",
        "exams": "07/2013, 07/2014"
      },
      {
        "kanji": "減",
        "hv": "GIẢM",
        "read": "へる・へらす",
        "word_jp": "減る・減らす・減少",
        "word_read": "へる・へらす・げんしょう",
        "meaning_vi": "Giảm đi, cắt giảm, sự sụt giảm",
        "exams": "07/2014"
      },
      {
        "kanji": "満",
        "hv": "MÃN",
        "read": "みちる・みたす",
        "word_jp": "満ちる・満たす・満足",
        "word_read": "みちる・みたす・まんぞく",
        "meaning_vi": "Tràn đầy, đáp ứng đủ điều kiện, hài lòng",
        "exams": "12/2016"
      }
    ],
    "diff_tip": "Cặp tự/tha siêu chuẩn N3: 増える/増やす (ふえる/ふやす tăng) ↔ 減る/減らす (へる/へらす giảm — hay nhớ nhầm sang げる!); 満ちる/満たす (đầy/đáp ứng điều kiện).",
    "tts": "ふえる、ふやす、へる、へらす、みちる、みたす"
  },
  {
    "id": "m2trap_115",
    "stt": 115,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Hành động bằng tay 扌: 折 vs 投 vs 打",
    "items": [
      {
        "kanji": "折",
        "hv": "CHIẾT",
        "read": "おる・おれる",
        "word_jp": "折る・折れる・折り紙",
        "word_read": "おる・おれる・おりがみ",
        "meaning_vi": "Bẻ gãy/gấp giấy, bị gãy, nghệ thuật gấp giấy",
        "exams": "07/2010, 12/2016, 07/2018"
      },
      {
        "kanji": "投",
        "hv": "ĐẦU",
        "read": "なげる",
        "word_jp": "投げる・投票・投資",
        "word_read": "なげる・とうひょう・とうし",
        "meaning_vi": "Ném, bỏ phiếu, đầu tư",
        "exams": "07/2015, 12/2017"
      },
      {
        "kanji": "打",
        "hv": "ĐẢ",
        "read": "うつ",
        "word_jp": "打つ・打ち合わせ",
        "word_read": "うつ・うちあわせ",
        "meaning_vi": "Đánh/gõ phím/tiêm, cuộc họp bàn trước",
        "exams": "07/2015"
      }
    ],
    "diff_tip": "Đều có bộ Tay 扌: 折る (おる bẻ gãy/gấp giấy), 投げる (なげる ném bóng), 打つ (うつ đánh bóng/gõ máy — nhớ 打ち合わせ họp bàn! Lưu ý sách gốc in nhầm 打 TẢ!).",
    "tts": "おる、おれる、なげる、とうひょう、うつ、うちあわせ"
  },
  {
    "id": "m2trap_116",
    "stt": 116,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Hướng tới, Vượt quá, Rút lui: 向 vs 過 vs 退",
    "items": [
      {
        "kanji": "向",
        "hv": "HƯỚNG",
        "read": "むく・むける・むかう",
        "word_jp": "向く・向かう・向こう",
        "word_read": "むく・むかう・むこう",
        "meaning_vi": "Quay mặt về/hợp với, đi về phía, phía bên kia",
        "exams": "07/2015, 07/2018, 12/2018"
      },
      {
        "kanji": "過",
        "hv": "QUÁ",
        "read": "すぎる・すごす・あやまち",
        "word_jp": "過ぎる・過ごす・過去",
        "word_read": "すぎる・すごす・かこ",
        "meaning_vi": "Trôi qua/quá mức, trải qua thời gian, quá khứ",
        "exams": "07/2018"
      },
      {
        "kanji": "退",
        "hv": "THOÁI",
        "read": "しりぞく・どく",
        "word_jp": "退く・退院・退職",
        "word_read": "しりぞく・たいいん・たいしょく",
        "meaning_vi": "Rút lui/tránh ra, xuất viện, nghỉ việc",
        "exams": "12/2018"
      }
    ],
    "diff_tip": "向 đọc むく (quay hướng/hợp), むかう (tiến về phía); 過 đọc すぎる (vượt quá) vs すごす (trải qua kỳ nghỉ — sách gốc thiếu dấu sắc chữ QUÁ!); 退 đọc しりぞく / どく (lùi ra).",
    "tts": "むく、むかう、むこう、すぎる、すごす、しりぞく"
  },
  {
    "id": "m2trap_117",
    "stt": 117,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Đuổi, Lăn ngã, Rơi/Xuống: 追 vs 転 vs 降",
    "items": [
      {
        "kanji": "追",
        "hv": "TRUY",
        "read": "おう",
        "word_jp": "追う・追いつく・追い越す",
        "word_read": "おう・おいつく・おいこす",
        "meaning_vi": "Đuổi theo, đuổi kịp, vượt qua",
        "exams": "07/2010"
      },
      {
        "kanji": "転",
        "hv": "CHUYỂN",
        "read": "ころぶ・ころがる",
        "word_jp": "転ぶ・転がる・自転車",
        "word_read": "ころぶ・ころがる・じてんしゃ",
        "meaning_vi": "Bị vấp ngã, lăn tròn, xe đạp",
        "exams": "12/2017"
      },
      {
        "kanji": "降",
        "hv": "GIÁNG",
        "read": "おりる・おろす・ふる",
        "word_jp": "降りる・降る・降ろす",
        "word_read": "おりる・ふる・おろす",
        "meaning_vi": "Xuống tàu/xe, mưa/tuyết rơi, dỡ hàng xuống",
        "exams": "07/2010, 07/2016"
      }
    ],
    "diff_tip": "Bẫy đọc Kun cực gắt: 追う (おう đuổi theo), 転ぶ (ころぶ té ngã — đừng đọc てんぶ!), 降 có cả 2 nghĩa 降りる (おりる xuống xe) và 降る (ふる mưa rơi)!",
    "tts": "おう、おいつく、ころぶ、ころがる、おりる、ふる"
  },
  {
    "id": "m2trap_118",
    "stt": 118,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Thay đổi, Cải cách, Khôi phục: 替 vs 改 vs 復",
    "items": [
      {
        "kanji": "替",
        "hv": "THẾ",
        "read": "かえる・かわる",
        "word_jp": "着替える・両替・取り替える",
        "word_read": "きがえる・りょうがえ・とりかえる",
        "meaning_vi": "Thay quần áo, đổi tiền, thay cái mới",
        "exams": "07/2017"
      },
      {
        "kanji": "改",
        "hv": "CẢI",
        "read": "あらためる・あらたまる",
        "word_jp": "改める・改めて・改札",
        "word_read": "あらためる・あらためて・かいさつ",
        "meaning_vi": "Sửa đổi/xem xét lại, một lần nữa trịnh trọng, cửa soát vé",
        "exams": "07/2011"
      },
      {
        "kanji": "復",
        "hv": "PHỤC",
        "read": "ふく",
        "word_jp": "復習・回復・往復",
        "word_read": "ふくしゅう・かいふく・おうふく",
        "meaning_vi": "Ôn bài lại, phục hồi sức khỏe, khứ hồi",
        "exams": "07/2013"
      }
    ],
    "diff_tip": "替 đọc かえる/がえ chuyên dùng thay thế vật/tiền (着替える thay đồ, 両替 đổi tiền); 改 đọc あらためる (sửa đổi, 改めて lần nữa); 復 chuyên âm On ふく (dễ bị bẫy đọc nhầm thành もどる của 戻!).",
    "tts": "きがえる、りょうがえ、あらためる、あらためて、ふくしゅう、かいふく"
  },
  {
    "id": "m2trap_119",
    "stt": 119,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Quy định, Tri thức, Ghi, Kể: 定 vs 識 vs 記 vs 語",
    "items": [
      {
        "kanji": "定",
        "hv": "ĐỊNH",
        "read": "さだめる・さだまる",
        "word_jp": "定める・予定・決定",
        "word_read": "さだめる・よてい・けってい",
        "meaning_vi": "Quy định, dự định, quyết định",
        "exams": "07/2014"
      },
      {
        "kanji": "識",
        "hv": "THỨC",
        "read": "しき",
        "word_jp": "知識・常識・意識",
        "word_read": "ちしき・じょうしき・いしき",
        "meaning_vi": "Kiến thức, kiến thức phổ thông, ý thức",
        "exams": "07/2010"
      },
      {
        "kanji": "記",
        "hv": "KÝ",
        "read": "しるす",
        "word_jp": "記す・記入・記事",
        "word_read": "しるす・きにゅう・きじ",
        "meaning_vi": "Ghi chép lại, điền vào, bài báo",
        "exams": "07/2010, 12/2018, 07/2019"
      },
      {
        "kanji": "語",
        "hv": "NGỮ",
        "read": "かたる・かたらう",
        "word_jp": "語る・物語・言語",
        "word_read": "かたる・ものがたり・げんご",
        "meaning_vi": "Kể chuyện, câu chuyện/truyền thuyết, ngôn ngữ",
        "exams": "07/2010"
      }
    ],
    "diff_tip": "Đều là nhóm chữ dễ đọc nhầm Kun: 定める (さだめる quy định), 記す (しるす ghi lại), 語る (かたる kể chuyện — không phải はなす!), còn 識 chỉ dùng âm On しき (知識, 意識 — dễ bị bẫy với 知 しる!).",
    "tts": "さだめる、ちしき、いしき、しるす、かたる、ものがたり"
  },
  {
    "id": "m2trap_120",
    "stt": 120,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Mặc/Đến, Nuôi lớn, Sinh đẻ: 着 vs 育 vs 産",
    "items": [
      {
        "kanji": "着",
        "hv": "TRƯỚC",
        "read": "きる・つく・つける",
        "word_jp": "着る・着く・落ち着く",
        "word_read": "きる・つく・おちつく",
        "meaning_vi": "Mặc (áo), đến nơi, bình tĩnh lại",
        "exams": "12/2012, 12/2014, 07/2018"
      },
      {
        "kanji": "育",
        "hv": "DỤC",
        "read": "そだつ・そだてる",
        "word_jp": "育つ・育てる・教育",
        "word_read": "そだつ・そだてる・きょういく",
        "meaning_vi": "Lớn lên, nuôi dạy/trồng trọt, giáo dục",
        "exams": "12/2012, 12/2020"
      },
      {
        "kanji": "産",
        "hv": "SẢN",
        "read": "うむ・うまれる",
        "word_jp": "産む・出産・お土産",
        "word_read": "うむ・しゅっさん・おみやげ",
        "meaning_vi": "Sinh con/đẻ trứng, việc sinh nở, quà lưu niệm",
        "exams": "12/2012"
      }
    ],
    "diff_tip": "着 có 2 nghĩa Kun cực quan trọng: 着る (きる mặc) và 着く (つく đến nơi → 落ち着く bình tĩnh); 育つ/育てる (そだつ lớn lên/nuôi dạy); 産む (うむ sinh đẻ, nhớ đặc biệt お土産 おみやげ!).",
    "tts": "きる、つく、おちつく、そだつ、そだてる、うむ、おみやげ"
  },
  {
    "id": "m2trap_121",
    "stt": 121,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Đi làm, Trọ, Phụ trách, Vướng: 勤 vs 宿 vs 係 vs 絡",
    "items": [
      {
        "kanji": "勤",
        "hv": "CẦN",
        "read": "つとめる・つとまる",
        "word_jp": "勤める・出勤・通勤",
        "word_read": "つとめる・しゅっきん・つうきん",
        "meaning_vi": "Làm việc cho công ty, đi làm, đi làm hằng ngày",
        "exams": "07/2013, 07/2015, 12/2018"
      },
      {
        "kanji": "宿",
        "hv": "TÚC",
        "read": "やど・やどる",
        "word_jp": "宿・宿題・宿泊",
        "word_read": "やど・しゅくだい・しゅくはく",
        "meaning_vi": "Nhà trọ, bài tập về nhà, việc lưu trú qua đêm",
        "exams": "12/2016"
      },
      {
        "kanji": "係",
        "hv": "HỆ",
        "read": "かかり・かかる",
        "word_jp": "係・係員・関係",
        "word_read": "かかり・かかりいん・かんけい",
        "meaning_vi": "Người phụ trách, nhân viên phụ trách, mối quan hệ",
        "exams": "07/2017"
      },
      {
        "kanji": "絡",
        "hv": "LẠC",
        "read": "からむ・からまる",
        "word_jp": "絡む・絡まる・連絡",
        "word_read": "からむ・からまる・れんらく",
        "meaning_vi": "Quấn vào/gây sự, bị rối vào nhau, liên lạc",
        "exams": "12/2012"
      }
    ],
    "diff_tip": "4 âm Kun hay quên dù biết On: 勤める (つとめる đi làm công ty), 宿 (やど nhà trọ — không đọc しゅく khi đứng 1 mình!), 係 (かかり người phụ trách), 絡む (からむ quấn/vướng).",
    "tts": "つとめる、やど、しゅくはく、かかり、かかりいん、からむ、れんらく"
  },
  {
    "id": "m2trap_122",
    "stt": 122,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Trúng, Đầu tiên, Một mình: 当 vs 初 vs 独",
    "items": [
      {
        "kanji": "当",
        "hv": "ĐƯƠNG",
        "read": "あたる・あてる",
        "word_jp": "当たる・当てる・本当",
        "word_read": "あたる・あてる・ほんとう",
        "meaning_vi": "Trúng thưởng/chiếu vào, đoán trúng, sự thật",
        "exams": "07/2018"
      },
      {
        "kanji": "初",
        "hv": "SƠ",
        "read": "はじめ・はつ",
        "word_jp": "初めて・初雪・最初",
        "word_read": "はじめて・はつゆき・さいしょ",
        "meaning_vi": "Lần đầu tiên, tuyết đầu mùa, ban đầu",
        "exams": "07/2019"
      },
      {
        "kanji": "独",
        "hv": "ĐỘC",
        "read": "ひとり",
        "word_jp": "独り言・独身・独立",
        "word_read": "ひとりごと・どくしん・どくりつ",
        "meaning_vi": "Nói một mình, độc thân, độc lập",
        "exams": "12/2013"
      }
    ],
    "diff_tip": "当たる/当てる (あたる trúng vé số/ánh nắng); 初 có 初めて (はじめて lần đầu — phân biệt 始める bắt đầu!) và 初雪 (はつゆき); 独 đọc ひとり trong 独り言 (nói lẩm bẩm 1 mình)!",
    "tts": "あたる、あてる、はじめて、はつゆき、ひとりごと、どくしん"
  },
  {
    "id": "m2trap_123",
    "stt": 123,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Trẻ, Già, Thân/Cha mẹ: 若 vs 老 vs 親",
    "items": [
      {
        "kanji": "若",
        "hv": "NHƯỢC",
        "read": "わかい",
        "word_jp": "若い・若者",
        "word_read": "わかい・わかもの",
        "meaning_vi": "Trẻ tuổi, người trẻ/thanh niên",
        "exams": "07/2014, 07/2019"
      },
      {
        "kanji": "老",
        "hv": "LÃO",
        "read": "おいる・ふける",
        "word_jp": "老いる・老ける・老人",
        "word_read": "おいる・ふける・ろうじん",
        "meaning_vi": "Già đi (tuổi tác), trông già trước tuổi, người cao tuổi",
        "exams": "07/2014"
      },
      {
        "kanji": "親",
        "hv": "THÂN",
        "read": "おや・したしい",
        "word_jp": "親・親しい・親切",
        "word_read": "おや・したしい・しんせつ",
        "meaning_vi": "Bố mẹ, thân thiết, tử tế/tốt bụng",
        "exams": "07/2013, 12/2014"
      }
    ],
    "diff_tip": "Nhìn kỹ bộ thảo 艹 của 若 (わかい trẻ — hay lộn 苦 にがい!); 老 có 2 Kun: おいる (già đi) và ふける (nhìn già); 親 có 2 Kun: おや (cha mẹ) và したしい (thân thiết).",
    "tts": "わかい、わかもの、おいる、ふける、おや、したしい"
  },
  {
    "id": "m2trap_124",
    "stt": 124,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Nhóm Màu sắc cơ bản: 青 vs 赤 vs 黄",
    "items": [
      {
        "kanji": "青",
        "hv": "THANH",
        "read": "あおい・あお",
        "word_jp": "青い・青空・青信号",
        "word_read": "あおい・あおぞら・あおしんごう",
        "meaning_vi": "Màu xanh da trời, bầu trời xanh, đèn xanh giao thông",
        "exams": "12/2015"
      },
      {
        "kanji": "赤",
        "hv": "XÍCH",
        "read": "あかい・あか",
        "word_jp": "赤い・赤ちゃん・赤字",
        "word_read": "あかい・あかちゃん・あかじ",
        "meaning_vi": "Màu đỏ, em bé sơ sinh, thâm hụt/lỗ vốn",
        "exams": "12/2015"
      },
      {
        "kanji": "黄",
        "hv": "HOÀNG",
        "read": "き・こ",
        "word_jp": "黄色・黄色い・黄身",
        "word_read": "きいろ・きいろい・きみ",
        "meaning_vi": "Màu vàng, có màu vàng, lòng đỏ trứng",
        "exams": "12/2015"
      }
    ],
    "diff_tip": "Chú ý bẫy nghĩa mở rộng N3: 青信号 là đèn xanh giao thông (không dùng 緑!); 赤字 là thâm hụt tài chính (あかじ); 黄色い đọc きいろい (KHÔNG có chữ 黄い đứng riêng!).",
    "tts": "あおい、あおしんごう、あかい、あかじ、きいろい、きみ"
  },
  {
    "id": "m2trap_125",
    "stt": 125,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Tình yêu, Lòng thương, Lý do: 恋 vs 情 vs 訳",
    "items": [
      {
        "kanji": "恋",
        "hv": "LUYẾN",
        "read": "こい・こいしい",
        "word_jp": "恋・恋人・恋しい",
        "word_read": "こい・こいびと・こいしい",
        "meaning_vi": "Tình yêu, người yêu, nhớ nhung da diết",
        "exams": "12/2014, 12/2020"
      },
      {
        "kanji": "情",
        "hv": "TÌNH",
        "read": "なさけ",
        "word_jp": "情け・情けない・情報",
        "word_read": "なさけ・なさけない・じょうほう",
        "meaning_vi": "Lòng trắc ẩn/tình thương, thật đáng xấu hổ/thảm hại, thông tin",
        "exams": "07/2010"
      },
      {
        "kanji": "訳",
        "hv": "DỊCH",
        "read": "わけ",
        "word_jp": "訳・言い訳・申し訳ない",
        "word_read": "わけ・いいわけ・もうしわけない",
        "meaning_vi": "Lý do, lời bào chữa, vô cùng xin lỗi",
        "exams": "07/2019"
      }
    ],
    "diff_tip": "3 siêu bẫy Kun của Mondai 1 & 2: 情け (なさけ lòng thương → 情けない đáng chán), 訳 (わけ lý do → 言い訳 bào chữa), 恋しい (こいしい nhớ nhung).",
    "tts": "こいびと、こいしい、なさけ、なさけない、わけ、いいわけ"
  },
  {
    "id": "m2trap_126",
    "stt": 126,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Phòng, Kho, Bên trong: 室 vs 庫 vs 内",
    "items": [
      {
        "kanji": "室",
        "hv": "THẤT",
        "read": "むろ・しつ",
        "word_jp": "教室・会議室・室内",
        "word_read": "きょうしつ・かいぎしつ・しつない",
        "meaning_vi": "Căn phòng (lớp học, phòng họp, trong phòng)",
        "exams": "07/2011"
      },
      {
        "kanji": "庫",
        "hv": "KHỐ",
        "read": "くら・こ",
        "word_jp": "冷蔵庫・車庫・金庫",
        "word_read": "れいぞうこ・しゃこ・きんこ",
        "meaning_vi": "Kho chứa (tủ lạnh, ga-ra xe, két sắt)",
        "exams": "07/2011"
      },
      {
        "kanji": "内",
        "hv": "NỘI",
        "read": "うち",
        "word_jp": "内側・国内・案内",
        "word_read": "うちがわ・こくない・あんない",
        "meaning_vi": "Bên trong, trong nước, hướng dẫn",
        "exams": "07/2011, 07/2019"
      }
    ],
    "diff_tip": "Phân biệt không gian trong nhà: 室 có mái nhà 宀 (phòng cho người 教室, 室内; Kun cổ là むろ); 庫 có mái 广 + xe 車 (kho cất đồ 冷蔵庫, 車庫; dễ nhầm 倉/蔵 くら); 内 đọc うち là bên trong (内側).",
    "tts": "きょうしつ、しつない、れいぞうこ、しゃこ、うちがわ、こくない"
  },
  {
    "id": "m2trap_127",
    "stt": 127,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Tròn, Răng, Bệnh: 丸 vs 歯 vs 病",
    "items": [
      {
        "kanji": "丸",
        "hv": "HOÀN",
        "read": "まる・まるい",
        "word_jp": "丸い・丸める・日の丸",
        "word_read": "まるい・まるめる・ひのまる",
        "meaning_vi": "Hình tròn, vo tròn lại, quốc kỳ Nhật Bản",
        "exams": "07/2014, 12/2018"
      },
      {
        "kanji": "歯",
        "hv": "XỈ",
        "read": "は",
        "word_jp": "歯・歯磨き・虫歯",
        "word_read": "は・はみがき・むしば",
        "meaning_vi": "Cái răng, đánh răng, sâu răng",
        "exams": "12/2012"
      },
      {
        "kanji": "病",
        "hv": "BỆNH",
        "read": "やむ・やまい",
        "word_jp": "病む・病・病気",
        "word_read": "やむ・やまい・びょうき",
        "meaning_vi": "Mắc bệnh/đau ốm, căn bệnh, bệnh tật",
        "exams": "07/2011, 07/2013, 07/2017, 07/2018"
      }
    ],
    "diff_tip": "丸い (まるい vật hình tròn/cầu — phân biệt 円い đồng yên/vòng tròn); 歯 đọc は giống 葉 (nhưng 歯 có 米 hạt gạo trong miệng là cái răng!); 病 đọc Kun là やむ (ốm) / やまい (bệnh) siêu hay thi!",
    "tts": "まるい、まるめる、はみがき、むしば、やむ、やまい、びょうき"
  },
  {
    "id": "m2trap_128",
    "stt": 128,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Tuyển mộ, Chảy, Cần: 募 vs 流 vs 要",
    "items": [
      {
        "kanji": "募",
        "hv": "MỘ",
        "read": "つのる",
        "word_jp": "募る・募集・応募",
        "word_read": "つのる・ぼしゅう・おうぼ",
        "meaning_vi": "Tuyển mộ/dâng trào mạnh hơn, tuyển dụng, ứng tuyển",
        "exams": "12/2012"
      },
      {
        "kanji": "流",
        "hv": "LƯU",
        "read": "ながれる・ながす",
        "word_jp": "流れる・流す・流行",
        "word_read": "ながれる・ながす・りゅうこう",
        "meaning_vi": "Chảy/trôi, xả nước/rơi lệ, xu hướng thịnh hành",
        "exams": "12/2011"
      },
      {
        "kanji": "要",
        "hv": "YẾU",
        "read": "いる・かなめ",
        "word_jp": "要る・必要・重要",
        "word_read": "いる・ひつよう・じゅうよう",
        "meaning_vi": "Cần thiết, tất yếu, quan trọng",
        "exams": "07/2012"
      }
    ],
    "diff_tip": "Cẩn thận 3 bẫy kinh điển: 募る đọc つのる (tuyển mộ/nỗi nhớ tăng lên); 流れる đọc ながれる (không phải はやれる, chú ý 流行 りゅうこう!); 要る đọc いる (cần — nhóm I, phủ định là 要らない, KHÔNG phải 居る!).",
    "tts": "つのる、ぼしゅう、ながれる、ながす、りゅうこう、いる、ひつよう"
  },
  {
    "id": "m2trap_129",
    "stt": 129,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Đồng cỏ, Nguồn gốc, Luôn luôn: 原 vs 源 vs 常",
    "items": [
      {
        "kanji": "原",
        "hv": "NGUYÊN",
        "read": "はら",
        "word_jp": "原・野原・原因",
        "word_read": "はら・のはら・げんいん",
        "meaning_vi": "Cánh đồng, đồng cỏ hoang, nguyên nhân",
        "exams": "07/2012"
      },
      {
        "kanji": "源",
        "hv": "NGUYÊN",
        "read": "みなもと",
        "word_jp": "源・資源・電源",
        "word_read": "みなもと・しげん・でんげん",
        "meaning_vi": "Cội nguồn/đầu nguồn, tài nguyên, nguồn điện",
        "exams": "07/2010, 07/2019"
      },
      {
        "kanji": "常",
        "hv": "THƯỜNG",
        "read": "つね・とこ",
        "word_jp": "常に・日常・常識",
        "word_read": "つねに・にちじょう・じょうしき",
        "meaning_vi": "Luôn luôn/thường xuyên, thường nhật, kiến thức phổ thông",
        "exams": "07/2010"
      }
    ],
    "diff_tip": "Bộ 3 siêu bẫy Kun: 原 đọc はら giống 腹 (野原 đồng cỏ); 源 đọc みなもと (suối nguồn — cực dễ nhầm âm với 港 みなと bến cảng!); 常 đọc つね trong 常に (luôn luôn).",
    "tts": "のはら、みなもと、しげん、つねに、にちじょう"
  },
  {
    "id": "m2trap_130",
    "stt": 130,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Dừng, Nối, Trôi qua: 停 vs 接 vs 経",
    "items": [
      {
        "kanji": "停",
        "hv": "ĐÌNH",
        "read": "てい",
        "word_jp": "停車・停止・停電",
        "word_read": "ていしゃ・ていし・ていでん",
        "meaning_vi": "Dừng xe, ngưng hoạt động, mất điện",
        "exams": "12/2013"
      },
      {
        "kanji": "接",
        "hv": "TIẾP",
        "read": "つぐ・せつ",
        "word_jp": "直接・面接・接する",
        "word_read": "ちょくせつ・めんせつ・せっする",
        "meaning_vi": "Tiếp xúc, trực tiếp, phỏng vấn",
        "exams": "12/2016"
      },
      {
        "kanji": "経",
        "hv": "KINH",
        "read": "たつ・へる",
        "word_jp": "経つ・経る・経験",
        "word_read": "たつ・へる・けいけん",
        "meaning_vi": "Thời gian trôi qua, trải qua, kinh nghiệm",
        "exams": "07/2017, 12/2017"
      }
    ],
    "diff_tip": "Bẫy đổi chữ đồng âm Kun: 経つ (たつ thời gian trôi — hay viết nhầm 立つ đứng!); 停 thường dùng âm On てい (hay bị bẫy với 止める とめる); 接 hay thi 接する (tiếp xúc) và âm Kun つぐ (nối ghép, dễ lộn 次).",
    "tts": "ていしゃ、ていでん、ちょくせつ、せっする、たつ、へる、けいけん"
  },
  {
    "id": "m2trap_131",
    "stt": 131,
    "trap_type": "kun",
    "trap_label": "🔀 Âm Kun dễ nhớ nhầm",
    "group_title": "Tất cả vs Xuất hiện: 総 vs 現",
    "items": [
      {
        "kanji": "総",
        "hv": "TỔNG",
        "read": "そう・すべて",
        "word_jp": "総合・総額・総理大臣",
        "word_read": "そうごう・そうがく・そうりだいじん",
        "meaning_vi": "Tổng hợp, tổng số tiền, Thủ tướng",
        "exams": "12/2018"
      },
      {
        "kanji": "現",
        "hv": "HIỆN",
        "read": "あらわれる・あらわす",
        "word_jp": "現れる・現す・現在",
        "word_read": "あらわれる・あらわす・げんざい",
        "meaning_vi": "Xuất hiện (lộ diện), làm lộ ra, hiện tại",
        "exams": "12/2019"
      }
    ],
    "diff_tip": "総 dùng rộng với nghĩa tổng thể (総合, 総額 — Kun cổ là すべて, dễ lộn 全!); 現れる (あらわれる xuất hiện người/hình dáng — phân biệt với 表す biểu đạt cảm xúc/ý nghĩa!).",
    "tts": "そうごう、そうがく、あらわれる、あらわす、げんざい"
  }
];
