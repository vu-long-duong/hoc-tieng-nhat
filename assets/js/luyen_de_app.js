// ==========================================
// LUYỆN ĐỀ N3 — MULTI-BANK & ANTI-ROTE ENGINE (10 BANKS • 1,674 Qs)
// Supports: [kanji240: 352] | [m3_191: 191] | [syn80: 95] | [kata78: 90] | [hira35: 35] | [m5_107: 107] | [gp_m1: 273] | [gp_star: 99] | [gp_m3: 141] | [pastN3: 291]
// ==========================================

const LS_HUB_SRS_KEY = 'n3_srs_mistakes';
const LS_HUB_STATS_KEY = 'n3_campaign_stats';
const LS_ACTIVE_BANK_KEY = 'n3_luyende_active_bank';
const LS_PASSAGE_FS_KEY = 'n3_passage_font_size';

const PAST_EXAM_CATALOG = [
    { exam_id: '2023_07', label: 'JLPT N3 — Tháng 07/2023', short_label: 'T7/2023', wave: 2, note: '73 câu thật (35 Từ vựng • 22 Ngữ pháp • 16 Đọc hiểu)' },
    { exam_id: '2022_12', label: 'JLPT N3 — Tháng 12/2022', short_label: 'T12/2022', wave: 1, note: '73 câu thật (35 Từ vựng • 22 Ngữ pháp • 16 Đọc hiểu)' },
    { exam_id: '2022_07', label: 'JLPT N3 — Tháng 07/2022', short_label: 'T7/2022', wave: 1, note: '72 câu thật (34 Từ vựng • 22 Ngữ pháp • 16 Đọc hiểu)' },
    { exam_id: '2021_12', label: 'JLPT N3 — Tháng 12/2021', short_label: 'T12/2021', wave: 2, note: '73 câu thật (35 Từ vựng • 22 Ngữ pháp • 16 Đọc hiểu)' }
];

const BANK_CONFIGS = {
    kanji240: {
        id: 'kanji240',
        name: '352 Câu Kanji N3',
        keys: {
            mistakes: 'n3_kanji240_mistakes',
            history: 'n3_kanji240_history',
            touched: 'n3_kanji240_touched',
            inprogress: 'n3_kanji240_inprogress'
        },
        secPerQuestion: 15,
        shifts: [
            { session: 1, shift: 'Ca 1 • Sáng', icon: 'fa-sun', title: 'Buổi 1 — 60 Câu Kanji N3', desc: 'Câu 1–60 gốc (30 đọc Kanji + 30 chọn Kanji)', count: 60, timeLbl: '15p' },
            { session: 2, shift: 'Ca 2 • Trưa', icon: 'fa-cloud-sun', title: 'Buổi 2 — 60 Câu Kanji N3', desc: 'Câu 61–120 gốc (31 đọc Kanji + 29 chọn Kanji)', count: 60, timeLbl: '15p' },
            { session: 3, shift: 'Ca 3 • Chiều', icon: 'fa-mountain-sun', title: 'Buổi 3 — 60 Câu Kanji N3', desc: 'Câu 121–180 gốc (30 đọc Kanji + 30 chọn Kanji)', count: 60, timeLbl: '15p' },
            { session: 4, shift: 'Ca 4 • Tối', icon: 'fa-moon', title: 'Buổi 4 — 60 Câu Kanji N3', desc: 'Câu 181–240 gốc (30 đọc Kanji + 30 chọn Kanji)', count: 60, timeLbl: '15p' },
            { session: 5, shift: 'Ca 5 • Mới (Ưu Tiên & 2025–2026)', icon: 'fa-fire', title: 'Buổi 5 Mới — 56 Câu Kanji Đề Thật', desc: 'Ưu tiên từ lặp ≥2x, lẫn lộn M1+M2 & T12/2025–T7/2026 (35 M1 + 21 M2)', count: 56, timeLbl: '14p' },
            { session: 6, shift: 'Ca 6 • Mới (Phủ Kín 100%)', icon: 'fa-shield-halved', title: 'Buổi 6 Mới — 56 Câu Phủ Kín Đề Thật', desc: 'Phủ kín 100% Kanji đề 2010–2026 & bộ 10 ảnh (35 M1 + 21 M2)', count: 56, timeLbl: '14p' }
        ]
    },
    syn80: {
        id: 'syn80',
        name: '80 Cặp Từ Đồng Nghĩa N3',
        keys: {
            mistakes: 'n3_syn80_mistakes',
            history: 'n3_syn80_history',
            touched: 'n3_syn80_touched',
            inprogress: 'n3_syn80_inprogress'
        },
        secPerQuestion: 15,
        shifts: [
            { session: 1, shift: 'Ca 1 • Đề Gốc', icon: 'fa-sun', title: 'Bài 1 — 40 Câu Đồng Nghĩa', desc: 'Mondai 4 chuẩn đề gốc (40 câu đầu)', count: 40, timeLbl: '10p' },
            { session: 2, shift: 'Ca 2 • Đề Gốc', icon: 'fa-cloud-sun', title: 'Bài 2 — 40 Câu Đồng Nghĩa', desc: 'Mondai 4 chuẩn đề gốc (40 câu sau)', count: 40, timeLbl: '10p' },
            { session: 3, shift: 'Ca 3 • Phủ Kín', icon: 'fa-sparkles', title: 'Bài 3 Bổ Sung — 15 Câu Phủ Kín Bảng 80', desc: '15 cặp bảng 80 chưa hỏi ở Bài 1 & 2 (延期, 輝く, がっかり...)', count: 15, timeLbl: '4p' }
        ]
    },
    kata78: {
        id: 'kata78',
        name: '90 Từ Katakana N3',
        keys: {
            mistakes: 'n3_kata78_mistakes',
            history: 'n3_kata78_history',
            touched: 'n3_kata78_touched',
            inprogress: 'n3_kata78_inprogress'
        },
        secPerQuestion: 15,
        shifts: [
            { session: 1, shift: 'Ca 1 • Bài 1', icon: 'fa-sun', title: 'Bài 1 — 39 Câu Katakana N3', desc: 'Mondai 3 điền từ Katakana vào câu (Từ #1–#39)', count: 39, timeLbl: '10p' },
            { session: 2, shift: 'Ca 2 • Bài 2', icon: 'fa-cloud-sun', title: 'Bài 2 — 39 Câu Katakana N3', desc: 'Mondai 3 điền từ Katakana vào câu (Từ #40–#78)', count: 39, timeLbl: '10p' },
            { session: 3, shift: 'Ca 3 • Bổ Sung Đề Thật', icon: 'fa-sparkles', title: 'Bài 3 Mới — 12 Từ Katakana Đề Thật', desc: '12 từ ra thi 2010–2026 ngoài 78 từ gốc (キッチン, サイズ, レシピ...)', count: 12, timeLbl: '3p' }
        ]
    },
    hira35: {
        id: 'hira35',
        name: '35 Hiragana & Từ Láy N3',
        keys: {
            mistakes: 'n3_hira35_mistakes',
            history: 'n3_hira35_history',
            touched: 'n3_hira35_touched',
            inprogress: 'n3_hira35_inprogress'
        },
        secPerQuestion: 15,
        shifts: [
            { session: 1, shift: 'Ca 1 • Siêu Tủ (3–4x)', icon: 'fa-fire', title: 'Bài 1 — Top 12 Từ Lặp 3–4 Lần', desc: 'Trùm đề thật 2010–2026 (うっかり, きつい, おかしい, どきどき...)', count: 12, timeLbl: '4p' },
            { session: 2, shift: 'Ca 2 • Lặp Đề Thật (2x)', icon: 'fa-sparkles', title: 'Bài 2 — 23 Từ Lặp 2 Lần Đề Thật', desc: 'Từ láy, phó từ & động/tính từ thuần Nhật ra 2 lần (#13–#35)', count: 23, timeLbl: '6p' }
        ]
    },
    m3_191: {
        id: 'm3_191',
        name: '191 Từ Ngữ Cảnh Mondai 3',
        keys: {
            mistakes: 'n3_m3_191_mistakes',
            history: 'n3_m3_191_history',
            touched: 'n3_m3_191_touched',
            inprogress: 'n3_m3_191_inprogress'
        },
        secPerQuestion: 15,
        shifts: [
            { session: 1, shift: '⭐ Trọng Tâm • Bài 1 (Lặp ≥2x)', icon: 'fa-fire', title: 'Bài 1 — 64 Từ Lặp ≥2 Lần Đề Thật', desc: 'Tầng 1 Ưu tiên: 21 từ lặp M3 + 43 từ lặp chéo M1–M5 (想像, 冗談, 清潔, 調子, 差...)', count: 64, timeLbl: '16p' },
            { session: 2, shift: '⭐ Trọng Tâm • Bài 2 (2021–2026)', icon: 'fa-star', title: 'Bài 2 — 33 Từ Đề Mới 2021–2026', desc: 'Tầng 1 Ưu tiên: Phủ 100% M3 mới nhất T12/2021–T7/2026 (平気, あくび, 動作, 空席, 時差...)', count: 33, timeLbl: '9p' },
            { session: 3, shift: '🛡️ Phủ Kín • Bài 3 (2015–2019)', icon: 'fa-shield-halved', title: 'Bài 3 — 47 Từ Phủ Kín (2015–2019)', desc: 'Tầng 2 Phủ kín: 47 từ đề 2015–2019 lấy điểm tối đa (就職, 通訳, 意外, 申請, 流行, 文句...)', count: 47, timeLbl: '12p' },
            { session: 4, shift: '🛡️ Phủ Kín • Bài 4 (2010–2014)', icon: 'fa-shield-halved', title: 'Bài 4 — 47 Từ Phủ Kín (2010–2014)', desc: 'Tầng 2 Phủ kín: 47 từ đề 2010–2014 phủ sạch 26 đề (我慢, 物価, 両替, 影響, 家賃, 感動...)', count: 47, timeLbl: '12p' }
        ]
    },
    m5_107: {
        id: 'm5_107',
        name: '107 Cách Dùng Từ Mondai 5',
        keys: {
            mistakes: 'n3_m5_107_mistakes',
            history: 'n3_m5_107_history',
            touched: 'n3_m5_107_touched',
            inprogress: 'n3_m5_107_inprogress'
        },
        secPerQuestion: 25,
        shifts: [
            { session: 1, shift: '⭐ Trọng Tâm • Bài 1 (Lặp M5)', icon: 'fa-fire', title: 'Bài 1 — Top 22 Từ Siêu Tủ Lặp 2–3x M5', desc: 'Tầng 1 Ưu tiên: 22 từ thi lại nhiều lần ở M5 (募集, 渋滞, 発展, 修理, 消費, 知り合う...)', count: 22, timeLbl: '9p' },
            { session: 2, shift: '⭐ Trọng Tâm • Bài 2 (Chéo & 2021–2026)', icon: 'fa-star', title: 'Bài 2 — 43 Từ Trọng Tâm Chéo & Đề Mới', desc: 'Tầng 1 Ưu tiên: 30 từ lặp chéo M1–M5 + 13 từ mới 2021–2026 (整理, 清潔, 期限, 交流...)', count: 43, timeLbl: '18p' },
            { session: 3, shift: '🛡️ Phủ Kín • Bài 3 (2010–2019)', icon: 'fa-shield-halved', title: 'Bài 3 — 42 Từ Phủ Kín 100% Đề Thật', desc: 'Tầng 2 Phủ kín: 42 từ còn lại 2010–2019 để ăn trọn 5/5 câu M5 (満員, 沸騰, 翻訳, ゆるい...)', count: 42, timeLbl: '17p' }
        ]
    },
    gp_m1: {
        id: 'gp_m1',
        name: 'Ngữ Pháp M1 Thực Chiến (Taisaku)',
        keys: {
            mistakes: 'n3_gp_m1_mistakes',
            history: 'n3_gp_m1_history',
            touched: 'n3_gp_m1_touched',
            inprogress: 'n3_gp_m1_inprogress'
        },
        secPerQuestion: 35,
        shifts: [
            { session: 1, shift: 'Ca 1 • Ngữ Pháp Nền', icon: 'fa-layer-group', title: 'Ca 1 — 43 Câu Ngữ Pháp Cơ Bản Hay Ra N3', desc: 'Đề thật 2010–2020: 55 mẫu nền N4–N3 hay bẫy (可能形, ておく/てある, ば/たら/なら, ずに...)', count: 43, timeLbl: '25p' },
            { session: 2, shift: 'Ca 2 • Tử Huyệt N3', icon: 'fa-crown', title: 'Ca 2 — 57 Câu Kính Ngữ • Sai Khiến • Cho Nhận', desc: '38 đề thật + 19 hội thoại Kính ngữ 2 chỗ trống (尊敬語/謙譲語, 受身/使役, さしあげる/いただく)', count: 57, timeLbl: '33p' },
            { session: 3, shift: 'Ca 3 • Chuyên Đề Trợ Từ', icon: 'fa-link', title: 'Ca 3 — 48 Câu Bẫy Trợ Từ Đề Thật', desc: '21 nhóm trợ từ (で/に/まで/までに/も/のを・のが・のは/より/しか/なんか/ほど...)', count: 48, timeLbl: '28p' },
            { session: 4, shift: 'Ca 4 • Trợ Từ+X & 4 Group', icon: 'fa-cubes', title: 'Ca 4 — 47 Câu Trợ Từ+X & 4 Họ Dễ Nhầm', desc: '14 câu Trợ từ+X (にとって/に対して/によって/において) + 33 câu 4 Group よう/こと/ばかり/ところ', count: 47, timeLbl: '27p' },
            { session: 5, shift: 'Ca 5 • Ngữ Pháp N3 Đơn Lẻ', icon: 'fa-star', title: 'Ca 5 — 61 Câu Ngữ Pháp N3 Đơn Lẻ Đề Thật', desc: '22 mẫu đơn lẻ cốt lõi & hậu tố Vます (らしい/はずがない/たびに/うちに/せいで/だす/直す...)', count: 61, timeLbl: '35p' },
            { session: 6, shift: 'Ca 6 • Phó Từ Hô Ứng', icon: 'fa-bolt', title: 'Ca 6 — 17 Câu Phó Từ Đi Cặp Ngữ Pháp', desc: 'Phó từ bắt cặp đuôi câu (いつの間にか, たしかに, 次第に, ついに, 少しも～ない, 必ずしも...)', count: 17, timeLbl: '10p' }
        ]
    },
    gp_star: {
        id: 'gp_star',
        name: 'Sắp Xếp Dấu Sao ★ (Taisaku M2)',
        keys: {
            mistakes: 'n3_gp_star_mistakes',
            history: 'n3_gp_star_history',
            touched: 'n3_gp_star_touched',
            inprogress: 'n3_gp_star_inprogress'
        },
        secPerQuestion: 48,
        shifts: [
            { session: 1, shift: 'Ca 1 • Công Thức N/V/A', icon: 'fa-diagram-project', title: 'Ca 1 — 31 Câu ★ Kết Hợp Danh–Động–Tính', desc: 'Áp dụng bảng [Trợ từ+X]+の+N, [Trợ từ+X辞書形]+N, V普通形+N, AというB (Đề thật 2010–2020)', count: 31, timeLbl: '25p' },
            { session: 2, shift: 'Ca 2 • Công Thức Trợ Từ', icon: 'fa-link', title: 'Ca 2 — 22 Câu ★ Kết Hợp Với Trợ Từ', desc: 'Áp dụng Trợ từ+の+N (に→への), のは/のが/のを/のに, 2 trợ từ liền nhau (Đề thật 2010–2020)', count: 22, timeLbl: '18p' },
            { session: 3, shift: 'Ca 3 • Tổng Hợp Thực Chiến', icon: 'fa-trophy', title: 'Ca 3 — 46 Câu ★ Tổng Hợp Đề Thật N3', desc: 'Phối hợp đa cấu trúc dấu sao ★ đề thi thật JLPT N3 2010–2020 (đủ 4 mảnh ghép & công thức)', count: 46, timeLbl: '37p' }
        ]
    },
    gp_m3: {
        id: 'gp_m3',
        name: 'Ngữ Pháp Đoạn Văn M3 (Taisaku)',
        keys: {
            mistakes: 'n3_gp_m3_mistakes',
            history: 'n3_gp_m3_history',
            touched: 'n3_gp_m3_touched',
            inprogress: 'n3_gp_m3_inprogress'
        },
        secPerQuestion: 60,
        shifts: [
            { session: 1, shift: 'Ca 1 • Liên Từ & Chỉ Thị Từ', icon: 'fa-arrows-left-right', title: 'Ca 1 — 27 Đoạn Ngắn Liên Từ & Chỉ Thị Từ (47 Câu)', desc: 'Split-Screen rèn phản xạ 45 Liên từ (ところが/そこで/つまり...) & Chỉ thị từ こ・そ・あ (39 LT + 8 CTT)', count: 47, timeLbl: '40p' },
            { session: 2, shift: 'Ca 2 • Đục Lỗ Đề Thật P1', icon: 'fa-file-lines', title: 'Ca 2 — 10 Bài Văn Mondai 3 Đề Thật #1–#10 (50 Câu)', desc: 'Đọc mạch văn bên trái & điền 5 chỗ trống/bài — đề thi thật 2010–2015 có tóm tắt dịch Việt', count: 50, timeLbl: '45p' },
            { session: 3, shift: 'Ca 3 • Đục Lỗ Đề Thật P2', icon: 'fa-file-lines', title: 'Ca 3 — 9 Bài Văn Mondai 3 Đề Thật #11–#19 (44 Câu)', desc: 'Đọc mạch văn bên trái & điền 4–5 chỗ trống/bài — đề thi thật 2015–2020 có tóm tắt dịch Việt', count: 44, timeLbl: '40p' }
        ]
    },
    pastN3: {
        id: 'pastN3',
        name: 'Đề Thi Thật JLPT N3 (2021–2023)',
        keys: {
            mistakes: 'n3_pastN3_mistakes',
            history: 'n3_pastN3_history',
            touched: 'n3_pastN3_touched',
            inprogress: 'n3_pastN3_inprogress'
        },
        secPerQuestion: 60,
        shifts: []
    }
};

const ALL_BACKUP_KEYS = [
    'n3_kanji240_mistakes', 'n3_kanji240_history', 'n3_kanji240_touched', 'n3_kanji240_inprogress',
    'n3_m3_191_mistakes', 'n3_m3_191_history', 'n3_m3_191_touched', 'n3_m3_191_inprogress',
    'n3_syn80_mistakes', 'n3_syn80_history', 'n3_syn80_touched', 'n3_syn80_inprogress',
    'n3_kata78_mistakes', 'n3_kata78_history', 'n3_kata78_touched', 'n3_kata78_inprogress',
    'n3_hira35_mistakes', 'n3_hira35_history', 'n3_hira35_touched', 'n3_hira35_inprogress',
    'n3_m5_107_mistakes', 'n3_m5_107_history', 'n3_m5_107_touched', 'n3_m5_107_inprogress',
    'n3_gp_m1_mistakes', 'n3_gp_m1_history', 'n3_gp_m1_touched', 'n3_gp_m1_inprogress',
    'n3_gp_star_mistakes', 'n3_gp_star_history', 'n3_gp_star_touched', 'n3_gp_star_inprogress',
    'n3_gp_m3_mistakes', 'n3_gp_m3_history', 'n3_gp_m3_touched', 'n3_gp_m3_inprogress',
    'n3_pastN3_mistakes', 'n3_pastN3_history', 'n3_pastN3_touched', 'n3_pastN3_inprogress',
    LS_HUB_SRS_KEY, LS_HUB_STATS_KEY,
    'n3_grammar_progress', 'kanji_progress', 'vocab_progress'
];

// Active Bank State
let activeBank = 'kanji240'; // 'kanji240' | 'm3_191' | 'syn80' | 'kata78' | 'hira35' | 'm5_107' | 'gp_m1' | 'gp_star' | 'gp_m3' | 'pastN3'
let mistakesMap = {};
let historyData = {
    sessions: {},
    examStats: {},
    m1Correct: 0, m1Total: 0,
    m2Correct: 0, m2Total: 0,
    attemptsLog: []
};
let touchedSet = new Set();

// Active Exam Session State
let activeSession = null;
let lastResultFilter = 'wrong';
let pastLaunchMode = 'drill'; // Default to 'drill' (Học Chữa Ngay) so learners study before mock exam!
let lastRenderedPassageId = null;
let passageFontSize = 16;

// Quick-Study Table State (Vocab Lists + 3 Grammar Formula Cheat-Sheets)
let pairsMaskMode = 'none'; // 'none' | 'right' | 'left'
let currentKanjiOrder = [];
let currentM3Order = [];
let currentPairsOrder = [];
let currentKataOrder = [];
let currentHiraOrder = [];
let currentM5Order = [];
let currentGpM1SheetOrder = [];
let currentGpStarSheetOrder = [];
let currentGpM3SheetOrder = [];

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    activeBank = localStorage.getItem(LS_ACTIVE_BANK_KEY) || 'kanji240';
    if (!BANK_CONFIGS[activeBank]) activeBank = 'kanji240';
    if (typeof KANJI_MASTER_LIST !== 'undefined') currentKanjiOrder = [...KANJI_MASTER_LIST];
    if (typeof MONDAI3_191_LIST !== 'undefined') currentM3Order = [...MONDAI3_191_LIST];
    if (typeof SYNONYM_80_PAIRS !== 'undefined') currentPairsOrder = [...SYNONYM_80_PAIRS];
    if (typeof KATAKANA_78_LIST !== 'undefined') currentKataOrder = [...KATAKANA_78_LIST];
    if (typeof HIRAGANA_35_LIST !== 'undefined') currentHiraOrder = [...HIRAGANA_35_LIST];
    if (typeof MONDAI5_107_LIST !== 'undefined') currentM5Order = [...MONDAI5_107_LIST];
    if (typeof GP_M1_CHEATSHEET !== 'undefined') currentGpM1SheetOrder = [...GP_M1_CHEATSHEET];
    if (typeof GP_STAR_CHEATSHEET !== 'undefined') currentGpStarSheetOrder = [...GP_STAR_CHEATSHEET];
    if (typeof GP_M3_CHEATSHEET !== 'undefined') currentGpM3SheetOrder = [...GP_M3_CHEATSHEET];
    const savedFs = parseInt(localStorage.getItem(LS_PASSAGE_FS_KEY), 10);
    if (!isNaN(savedFs) && savedFs >= 13 && savedFs <= 22) passageFontSize = savedFs;

    loadBankState();
    setupMobileMenu();
    setupLobbyEvents();
    setupExamEvents();
    setupPairsEvents();
    setupKeyboardShortcuts();
    applyBankUI();
    renderLobby();
});

// ==========================================
// 1. BANK ACCESSORS & PERSISTENCE
// ==========================================
function getBankCfg(bankId = activeBank) {
    return BANK_CONFIGS[bankId];
}

function getPastExamsList() {
    const loaded = (typeof window !== 'undefined' && Array.isArray(window.JLPT_PAST_EXAMS)) ? window.JLPT_PAST_EXAMS : [];
    return [...loaded].sort((a, b) => b.exam_id.localeCompare(a.exam_id));
}

function getPastExamById(examId) {
    return getPastExamsList().find(e => e.exam_id === examId) || null;
}

function getPastAllQuestions() {
    return getPastExamsList().flatMap(ex => ex.questions || []);
}

function isGrammarBank(bankId = activeBank) {
    return bankId === 'gp_m1' || bankId === 'gp_star' || bankId === 'gp_m3';
}

function getPassageForQuestion(qObj) {
    if (!qObj || !qObj.passage_id) return null;
    if (qObj.exam_id) {
        const exam = getPastExamById(qObj.exam_id);
        if (exam && exam.passages && exam.passages[qObj.passage_id]) return exam.passages[qObj.passage_id];
    }
    if (typeof GP_M3_PASSAGES !== 'undefined' && GP_M3_PASSAGES[qObj.passage_id]) {
        return GP_M3_PASSAGES[qObj.passage_id];
    }
    return null;
}

function getBankDataset(bankId = activeBank) {
    if (bankId === 'm3_191') return MONDAI3_191_DATA;
    if (bankId === 'syn80') return SYNONYM_N3_DATA;
    if (bankId === 'kata78') return KATAKANA_N3_DATA;
    if (bankId === 'hira35') return HIRAGANA_35_DATA;
    if (bankId === 'm5_107') return MONDAI5_107_DATA;
    if (bankId === 'gp_m1') return typeof GP_M1_DATA !== 'undefined' ? GP_M1_DATA : [];
    if (bankId === 'gp_star') return typeof GP_STAR_DATA !== 'undefined' ? GP_STAR_DATA : [];
    if (bankId === 'gp_m3') return typeof GP_M3_DATA !== 'undefined' ? GP_M3_DATA : [];
    if (bankId === 'pastN3') return getPastAllQuestions();
    return KANJI_240_DATA;
}

function getItemSessionNum(qObj, bankId = activeBank) {
    if (bankId === 'pastN3') return qObj.exam_id;
    return (bankId === 'm3_191' || bankId === 'syn80' || bankId === 'kata78' || bankId === 'hira35' || bankId === 'm5_107' || bankId === 'gp_m1' || bankId === 'gp_star' || bankId === 'gp_m3') ? qObj.part : qObj.session;
}

function getPastExamShortLabel(examId) {
    const ex = getPastExamById(examId) || PAST_EXAM_CATALOG.find(x => x.exam_id === examId);
    return ex ? ex.short_label : examId;
}

function updatePastModeBannerUI() {
    const eBtn = document.getElementById('past-mode-exam-btn');
    const dBtn = document.getElementById('past-mode-drill-btn');
    const helper = document.getElementById('past-mode-helper-txt');
    const isDrill = pastLaunchMode === 'drill';
    if (dBtn) dBtn.classList.toggle('active-drill', isDrill);
    if (eBtn) eBtn.classList.toggle('active-exam', !isDrill);
    if (helper) {
        helper.style.color = isDrill ? 'var(--hub-ok-text)' : 'var(--hub-warn-text)';
        helper.textContent = isDrill
            ? '⚡ Đang bật Học Chữa Ngay — bấm bất kỳ phần nào bên dưới sẽ hiện ngay đáp án & giải thích từng câu!'
            : '⏱️ Đang bật Thi Thử Bấm Giờ — bấm bất kỳ phần nào bên dưới sẽ đếm ngược thời gian chuẩn phòng thi JLPT!';
    }
}

function setPastLaunchMode(mode) {
    pastLaunchMode = mode === 'exam' ? 'exam' : 'drill';
    updatePastModeBannerUI();
    if (activeBank === 'pastN3') renderLobby();
}

function adjustPassageFontSize(delta) {
    passageFontSize = Math.max(13, Math.min(22, passageFontSize + delta));
    localStorage.setItem(LS_PASSAGE_FS_KEY, String(passageFontSize));
    const bodyEl = document.getElementById('passage-body-content');
    if (bodyEl) bodyEl.style.setProperty('--passage-fs', `${passageFontSize}px`);
}

function switchBank(newBankId) {
    if (!BANK_CONFIGS[newBankId] || newBankId === activeBank) return;
    if (activeSession && !activeSession.finished && document.getElementById('view-exam').style.display === 'block') {
        if (!confirm('Chuyển bộ đề sẽ quay về Sảnh (bài đang làm đã tự lưu)?')) return;
    }
    activeBank = newBankId;
    localStorage.setItem(LS_ACTIVE_BANK_KEY, activeBank);
    pairsMaskMode = 'none';
    loadBankState();
    applyBankUI();
    showMainView('lobby');
}

function applyBankUI() {
    const isKanji = activeBank === 'kanji240';
    const isM3 = activeBank === 'm3_191';
    const isSyn = activeBank === 'syn80';
    const isKata = activeBank === 'kata78';
    const isHira = activeBank === 'hira35';
    const isM5 = activeBank === 'm5_107';
    const isGpM1 = activeBank === 'gp_m1';
    const isGpStar = activeBank === 'gp_star';
    const isGpM3 = activeBank === 'gp_m3';
    const isGp = isGpM1 || isGpStar || isGpM3;
    const isPast = activeBank === 'pastN3';
    const hasTable = isKanji || isM3 || isSyn || isKata || isHira || isM5 || isGp;

    document.getElementById('bank-chip-kanji240').classList.toggle('active', isKanji);
    const m3Chip = document.getElementById('bank-chip-m3_191');
    if (m3Chip) m3Chip.classList.toggle('active', isM3);
    document.getElementById('bank-chip-syn80').classList.toggle('active', isSyn);
    const kataChip = document.getElementById('bank-chip-kata78');
    if (kataChip) kataChip.classList.toggle('active', isKata);
    const hiraChip = document.getElementById('bank-chip-hira35');
    if (hiraChip) hiraChip.classList.toggle('active', isHira);
    const m5Chip = document.getElementById('bank-chip-m5_107');
    if (m5Chip) m5Chip.classList.toggle('active', isM5);
    const gpM1Chip = document.getElementById('bank-chip-gp_m1');
    if (gpM1Chip) gpM1Chip.classList.toggle('active', isGpM1);
    const gpStarChip = document.getElementById('bank-chip-gp_star');
    if (gpStarChip) gpStarChip.classList.toggle('active', isGpStar);
    const gpM3Chip = document.getElementById('bank-chip-gp_m3');
    if (gpM3Chip) gpM3Chip.classList.toggle('active', isGpM3);
    const pastChip = document.getElementById('bank-chip-pastN3');
    if (pastChip) pastChip.classList.toggle('active', isPast);

    document.getElementById('nav-view-pairs-btn').style.display = hasTable ? 'inline-flex' : 'none';
    document.getElementById('open-pairs-quick-btn').style.display = hasTable ? 'inline-flex' : 'none';
    const pastBanner = document.getElementById('past-mode-banner');
    if (pastBanner) {
        pastBanner.style.display = isPast ? 'block' : 'none';
        if (isPast) updatePastModeBannerUI();
    }

    const hardRevBtn = document.getElementById('start-revenge-hard-btn');
    if (hardRevBtn) hardRevBtn.style.display = (isPast || isGp) ? 'none' : 'inline-flex';

    // Anti-Rote toggle visibility & smart defaults
    const chkShufQ = document.getElementById('opt-shuffle-questions');
    const chkShufOpt = document.getElementById('opt-shuffle-answers');
    const chkHide = document.getElementById('opt-hide-context');
    const chkRev = document.getElementById('opt-reverse-mode');
    if (chkHide && chkHide.closest('.toggle-chip')) chkHide.closest('.toggle-chip').style.display = (isPast || isGp) ? 'none' : 'flex';
    if (chkRev && chkRev.closest('.toggle-chip')) chkRev.closest('.toggle-chip').style.display = (isPast || isGp) ? 'none' : 'flex';
    if (isPast) {
        if (chkShufQ) chkShufQ.checked = false;
        if (chkShufOpt) chkShufOpt.checked = false;
        if (chkHide) chkHide.checked = false;
        if (chkRev) chkRev.checked = false;
    } else if (isGpM3) {
        if (chkShufQ) chkShufQ.checked = false; // Keep passage order clean by default (shuffling groups by passage!)
        if (chkShufOpt) chkShufOpt.checked = true;
        if (chkHide) chkHide.checked = false;
        if (chkRev) chkRev.checked = false;
    } else if (isGp) {
        if (chkShufQ) chkShufQ.checked = true;
        if (chkShufOpt) chkShufOpt.checked = true;
        if (chkHide) chkHide.checked = false;
        if (chkRev) chkRev.checked = false;
    } else {
        if (chkShufQ) chkShufQ.checked = true;
        if (chkShufOpt) chkShufOpt.checked = true;
    }

    const navPairsLbl = document.getElementById('nav-pairs-lbl');
    const openPairsLbl = document.getElementById('open-pairs-quick-lbl');
    if (navPairsLbl) {
        navPairsLbl.textContent = isGpM1
            ? 'Bảng Công Thức NP M1'
            : (isGpStar ? 'Bảng Công Thức Dấu Sao ★' : (isGpM3 ? 'Bảng 45 Liên Từ & こ・そ・あ' : (isKanji
                ? 'Bảng 311 Kanji Đề Thật'
                : (isM3 ? 'Bảng 191 Từ Mondai 3' : (isM5 ? 'Bảng 107 Từ Mondai 5' : (isKata ? 'Bảng 90 Từ Katakana' : (isHira ? 'Bảng 35 Hiragana & Từ Láy' : 'Bảng 80 Cặp A = B')))))));
    }
    if (openPairsLbl) {
        openPairsLbl.textContent = isGpM1
            ? 'Mở Bảng Công Thức NP M1'
            : (isGpStar ? 'Mở Bảng Công Thức Ghép ★' : (isGpM3 ? 'Mở Bảng Liên Từ & Chỉ Thị Từ' : (isKanji
                ? 'Mở Bảng Tra Cứu 311 Kanji'
                : (isM3 ? 'Mở Bảng Tra Cứu 191 Từ M3' : (isM5 ? 'Mở Bảng Tra Cứu 107 Từ M5' : (isKata ? 'Mở Bảng Dò 90 Từ Katakana' : (isHira ? 'Mở Bảng Dò 35 Hiragana' : 'Mở Bảng Dò 80 Cặp A = B')))))));
    }

    document.getElementById('nav-lobby-lbl').textContent = isPast
        ? 'Sảnh Đề Thi Thật'
        : (isGpM1 ? 'Sảnh Ngữ Pháp M1 (6 Ca)' : (isGpStar ? 'Sảnh Dấu Sao ★ (3 Ca)' : (isGpM3 ? 'Sảnh Đoạn Văn M3 (3 Ca)' : (isM3 ? 'Sảnh Ngữ Cảnh M3 (4 Ca)' : (isM5 ? 'Sảnh Cách Dùng M5 (3 Ca)' : (isHira ? 'Sảnh Hiragana (2 Ca)' : (isKata ? 'Sảnh Katakana (3 Ca)' : (isSyn ? 'Sảnh Đồng Nghĩa' : 'Sảnh Kanji (6 Ca)'))))))));
    document.getElementById('sidebar-sprint-heading').textContent = isPast
        ? 'Lịch Thực Chiến 4 Đề Thật N3'
        : (isGpM1 ? 'Lộ Trình 6 Ca Ngữ Pháp M1' : (isGpStar ? 'Lộ Trình 3 Ca Dấu Sao ★' : (isGpM3 ? 'Lộ Trình 3 Ca Đoạn Văn M3' : (isM3 ? 'Lịch Cày 191 Từ Mondai 3' : (isM5 ? 'Lịch Cày 107 Từ Mondai 5' : (isHira ? 'Lịch Cày 35 Hiragana & Từ Láy' : (isKata ? 'Lịch Cày 90 Từ Katakana N3' : (isSyn ? 'Lịch Cày 80 Cặp Đồng Nghĩa' : 'Lịch Cày Siêu Tốc 352 Kanji'))))))));

    // Update KPI labels
    document.getElementById('kpi-m1-lbl').textContent = isPast
        ? 'Kiến thức ngôn ngữ (TV + NP)'
        : (isGp ? 'Câu Cơ bản (☆)' : (isM3 ? 'Mondai 3 Xuôi (Câu → Điền từ)' : (isM5 ? 'Mondai 5 Chuẩn (Chọn câu đúng)' : (isHira ? 'Mondai 3 Xuôi (Câu → Hiragana)' : (isKata ? 'Mondai 3 Xuôi (Câu → Katakana)' : (isSyn ? 'Đồng nghĩa Xuôi (A → B)' : 'Mondai 1 (Đọc Kanji)'))))));
    document.getElementById('kpi-m2-lbl').textContent = isPast
        ? 'Đọc hiểu — 読解 (M4–M7)'
        : (isGp ? 'Câu Nâng cao / Bẫy (☆☆)' : (isM3 ? 'Đảo chiều (Từ M3 → Nghĩa)' : (isM5 ? 'Đảo chiều (Câu chuẩn → Nghĩa)' : (isHira ? 'Đảo chiều (Hiragana → Nghĩa)' : (isKata ? 'Đảo chiều (Katakana → Nghĩa)' : (isSyn ? 'Đảo chiều Chống Vẹt (B → A)' : 'Mondai 2 (Chọn Kanji)'))))));

    // Update Anti-Rote toggle labels
    document.getElementById('toggle-hide-sub').textContent = isM5
        ? 'Ẩn cách đọc Furigana cạnh từ mục tiêu (ép tự đọc Kanji)'
        : ((isKata || isHira || isM3)
            ? 'Ẩn câu Nhật, hiện nghĩa Việt (hoặc từ đơn) ép nhớ từ'
            : (isSyn ? 'Chỉ hiện từ A (hoặc B), ép nhớ nghĩa gốc' : 'Chỉ hiện từ gạch chân, ép nhớ mặt chữ'));
    document.getElementById('toggle-rev-title').textContent = isM3
        ? '🔄 Đảo chiều (Từ M3 → Nghĩa)'
        : (isM5 ? '🔄 Đảo chiều (Câu chuẩn → Nghĩa)' : (isHira ? '🔄 Đảo chiều (Hiragana → Nghĩa)' : (isKata ? '🔄 Đảo chiều (Katakana → Nghĩa)' : (isSyn ? '🔄 Đảo chiều (B → A)' : '🔄 Đảo chiều (M1 ↔ M2)'))));
    document.getElementById('toggle-rev-sub').textContent = isM3
        ? 'Cho từ M3 gạch chân trong câu, chọn đúng nghĩa tiếng Việt'
        : (isM5 ? 'Cho câu chuẩn chứa từ M5, chọn đúng nghĩa tiếng Việt' : (isHira ? 'Cho từ Hiragana/từ láy trong câu, chọn đúng nghĩa Việt' : (isKata ? 'Cho Katakana trong câu, chọn đúng nghĩa tiếng Việt' : (isSyn ? 'Cho nghĩa B trong câu, chọn ngược từ N3 A' : 'Kanji↔Hiragana với 3 nhiễu tự sinh'))));

    document.getElementById('sessions-panel-title').innerHTML = isPast
        ? '<i class="fa-solid fa-scroll" style="color: var(--primary);"></i> Kho Đề Thi Chính Thức JLPT N3 (Bỏ Nghe • Học Chữa Ngay & Thi Thử)'
        : (isGpM1
            ? '<i class="fa-solid fa-book-open" style="color: var(--primary);"></i> Lộ Trình 6 Chuyên Đề — 273 Câu Ngữ Pháp M1 (Taisaku Đề Thật + Kính Ngữ)'
            : (isGpStar
                ? '<i class="fa-solid fa-star" style="color: var(--hub-warn-text);"></i> Lộ Trình 3 Chuyên Đề — 99 Câu Sắp Xếp Dấu Sao ★ Theo Công Thức (Taisaku M2)'
                : (isGpM3
                    ? '<i class="fa-solid fa-file-lines" style="color: var(--primary);"></i> Lộ Trình 3 Ca Split-Screen — 46 Bài Văn / 141 Câu Ngữ Pháp Đoạn Văn M3'
                    : (isM3
                        ? '<i class="fa-solid fa-puzzle-piece" style="color: var(--primary);"></i> Lộ Trình 2 Tầng — 191 Từ Ngữ Cảnh Mondai 3 (⭐ Trọng Tâm 97 + 🛡️ Phủ Kín 94)'
                        : (isM5
                            ? '<i class="fa-solid fa-bullseye" style="color: var(--primary);"></i> Lộ Trình 2 Tầng — 107 Cách Dùng Từ Mondai 5 (⭐ Trọng Tâm 65 + 🛡️ Phủ Kín 42)'
                            : (isHira
                                ? '<i class="fa-solid fa-bolt" style="color: var(--hub-warn-text);"></i> Lộ Trình 2 Ca Thực Chiến — 35 Hiragana & Từ Láy Tủ (Ra ≥2x)'
                                : (isKata
                                    ? '<i class="fa-solid fa-bolt" style="color: var(--hub-warn-text);"></i> Lộ Trình 3 Ca Thực Chiến — 90 Từ Katakana N3 (78 Gốc + 12 Đề Thật)'
                                    : (isSyn
                                        ? '<i class="fa-solid fa-bolt" style="color: var(--hub-warn-text);"></i> Lộ Trình 3 Ca Thực Chiến — 80 Cặp Đồng Nghĩa (95 Câu)'
                                        : '<i class="fa-solid fa-bolt" style="color: var(--hub-warn-text);"></i> Lộ Trình 6 Ca Siêu Tốc — 352 Câu Kanji N3 (240 Gốc + 112 Mới)'))))))));

    document.getElementById('custom-panel-title').innerHTML = isPast
        ? '<i class="fa-solid fa-sliders" style="color: var(--primary);"></i> Luyện Chuyên Sâu Theo Dạng Bài (Dấu ★ • Cách dùng từ • Đọc hiểu)'
        : (isGpM1
            ? '<i class="fa-solid fa-sliders" style="color: var(--primary);"></i> Tùy Chọn Luyện Nhanh / Lọc Theo Độ Khó (273 Câu NP M1)'
            : (isGpStar
                ? '<i class="fa-solid fa-sliders" style="color: var(--primary);"></i> Tùy Chọn Luyện Nhanh / Trộn Tổng 99 Câu Dấu Sao ★'
                : (isGpM3
                    ? '<i class="fa-solid fa-sliders" style="color: var(--primary);"></i> Tùy Chọn Luyện Nhanh Theo Chuyên Đề M3 (Liên Từ • Chỉ Thị Từ • Đục Lỗ)'
                    : (isM3
                        ? '<i class="fa-solid fa-sliders" style="color: var(--primary);"></i> Tùy Chọn Luyện Nhanh / Trộn Tổng 191 Từ Mondai 3'
                        : (isM5
                            ? '<i class="fa-solid fa-sliders" style="color: var(--primary);"></i> Tùy Chọn Luyện Nhanh / Trộn Tổng 107 Câu Mondai 5'
                            : (isHira
                                ? '<i class="fa-solid fa-sliders" style="color: var(--primary);"></i> Tùy Chọn Luyện Nhanh / Trộn Tổng 35 Hiragana & Từ Láy'
                                : (isKata
                                    ? '<i class="fa-solid fa-sliders" style="color: var(--primary);"></i> Tùy Chọn Luyện Nhanh / Trộn Tổng 90 Câu Katakana'
                                    : (isSyn
                                        ? '<i class="fa-solid fa-sliders" style="color: var(--primary);"></i> Tùy Chọn Luyện Nhanh / Trộn Tổng 95 Câu Đồng Nghĩa'
                                        : '<i class="fa-solid fa-sliders" style="color: var(--primary);"></i> Tùy Chọn Luyện Nhanh / Trộn Tổng 352 Câu Kanji'))))))));

    // Populate custom selects per bank
    const sessSel = document.getElementById('custom-session-select');
    const monSel = document.getElementById('custom-mondai-select');
    const cntSel = document.getElementById('custom-count-select');

    if (isGpM1) {
        sessSel.innerHTML = `
            <option value="all">Trộn tổng cả 273 câu Ngữ Pháp M1 (6 Ca)</option>
            <option value="1">Ca 1 — Ngữ pháp Nền N4–N3 (43 câu)</option>
            <option value="2">👑 Ca 2 — Kính ngữ • Sai khiến • Cho nhận (57 câu)</option>
            <option value="3">🔗 Ca 3 — Chuyên đề Trợ từ N3 (48 câu)</option>
            <option value="4">🧩 Ca 4 — Trợ từ+X & 4 Group dễ nhầm (47 câu)</option>
            <option value="5">⭐ Ca 5 — Ngữ pháp N3 Đơn lẻ (61 câu)</option>
            <option value="6">⚡ Ca 6 — Phó từ hô ứng ngữ pháp (17 câu)</option>
        `;
        monSel.style.display = 'inline-block';
        monSel.innerHTML = `
            <option value="all">Tất cả mức độ (☆ + ☆☆)</option>
            <option value="hard">🔥 Chỉ câu Bẫy nâng cao (☆☆)</option>
            <option value="base">⭐ Chỉ câu Cơ bản (☆)</option>
        `;
        cntSel.innerHTML = `
            <option value="15">15 câu (Lượt nhanh 8 phút)</option>
            <option value="25" selected>25 câu (15 phút)</option>
            <option value="45">45 câu (Trọn 1 chuyên đề)</option>
            <option value="273">Tất cả câu lọc được</option>
        `;
    } else if (isGpStar) {
        sessSel.innerHTML = `
            <option value="all">Trộn tổng cả 99 câu Dấu Sao ★ (3 Ca)</option>
            <option value="1">Ca 1 — Kết hợp Danh–Động–Tính từ (31 câu ★)</option>
            <option value="2">Ca 2 — Kết hợp với Trợ từ (22 câu ★)</option>
            <option value="3">Ca 3 — Tổng hợp Thực chiến Đề thật (46 câu ★)</option>
        `;
        monSel.style.display = 'inline-block';
        monSel.innerHTML = `
            <option value="all">Tất cả mức độ (☆ + ☆☆)</option>
            <option value="hard">🔥 Chỉ câu ★ Bẫy nâng cao (☆☆)</option>
            <option value="base">⭐ Chỉ câu ★ Cơ bản (☆)</option>
        `;
        cntSel.innerHTML = `
            <option value="10">10 câu ★ (Lượt nhanh 8 phút)</option>
            <option value="20" selected>20 câu ★ (16 phút)</option>
            <option value="31">31 câu ★ (Trọn Ca 1)</option>
            <option value="99">Tất cả 99 câu ★</option>
        `;
    } else if (isGpM3) {
        sessSel.innerHTML = `
            <option value="all">Tất cả 46 bài / 141 câu Mondai 3 (3 Ca)</option>
            <option value="1">Ca 1 — Chuyên đề Liên từ & Chỉ thị từ (47 câu)</option>
            <option value="2">Ca 2 — Đọc Đục Lỗ Đề Thật #1–#10 (50 câu)</option>
            <option value="3">Ca 3 — Đọc Đục Lỗ Đề Thật #11–#19 (44 câu)</option>
        `;
        monSel.style.display = 'inline-block';
        monSel.innerHTML = `
            <option value="all">Tất cả chuyên đề M3</option>
            <option value="lientu">Chỉ Liên từ (39 câu)</option>
            <option value="chithitu">Chỉ Chỉ thị từ こ・そ・あ (8 câu)</option>
            <option value="tonghop">Chỉ Bài đục lỗ Tổng hợp (94 câu)</option>
        `;
        cntSel.innerHTML = `
            <option value="15">15 câu (~3 bài văn)</option>
            <option value="25" selected>25 câu (~5 bài văn)</option>
            <option value="50">50 câu (Trọn Ca 2)</option>
            <option value="141">Tất cả câu lọc được</option>
        `;
    } else if (isPast) {
        const loadedExams = getPastExamsList();
        const examOpts = loadedExams.map(ex => `<option value="${ex.exam_id}">Chỉ đề ${ex.short_label} (${ex.questions.length} câu)</option>`).join('');
        sessSel.innerHTML = `<option value="all">Gom tất cả các đề đã nạp (${getPastAllQuestions().length} câu)</option>${examOpts}`;
        monSel.style.display = 'inline-block';
        monSel.innerHTML = `
            <option value="all">Tất cả dạng bài (TV + NP + ĐH)</option>
            <option value="moji_goi">Chỉ Từ vựng — 文字・語彙 (M1–M5)</option>
            <option value="moji_m5">Chỉ Cách dùng từ (Từ vựng M5)</option>
            <option value="bunpou">Chỉ Ngữ pháp — 文法 (M1–M3)</option>
            <option value="bunpou_star">Chỉ Sắp xếp dấu sao ★ (Ngữ pháp M2)</option>
            <option value="bunpou_m3">Chỉ Ngữ pháp đoạn văn (Ngữ pháp M3)</option>
            <option value="dokkai">Chỉ Đọc hiểu — 読解 (M4–M7)</option>
            <option value="dokkai_m4">Chỉ Đọc hiểu đoạn ngắn (M4)</option>
            <option value="dokkai_m56">Chỉ Đọc hiểu trung & dài (M5–M6)</option>
            <option value="dokkai_m7">Chỉ Tìm kiếm thông tin tờ rơi (M7)</option>
        `;
        cntSel.innerHTML = `
            <option value="10">10 câu (Lượt nhanh)</option>
            <option value="20" selected>20 câu</option>
            <option value="35">35 câu</option>
            <option value="999">Tất cả câu lọc được</option>
        `;
    } else if (isM3) {
        sessSel.innerHTML = `
            <option value="all">Trộn tổng cả 191 từ Mondai 3 (4 Bài)</option>
            <option value="core">⭐ Chỉ Nhóm Trọng Tâm — 97 từ (Bài 1 + Bài 2)</option>
            <option value="full">🛡️ Chỉ Nhóm Phủ Kín — 94 từ (Bài 3 + Bài 4)</option>
            <option value="1">🔥 Chỉ Bài 1 — 64 Từ Lặp ≥2x Đề Thật</option>
            <option value="2">⭐ Chỉ Bài 2 — 33 Từ Mới 2021–2026</option>
            <option value="3">🛡️ Chỉ Bài 3 — 47 Từ Phủ Kín (2015–2019)</option>
            <option value="4">🛡️ Chỉ Bài 4 — 47 Từ Phủ Kín (2010–2014)</option>
        `;
        monSel.style.display = 'inline-block';
        monSel.innerHTML = `
            <option value="all">Tất cả 4 nhóm từ loại</option>
            <option value="Danh từ / Hán ghép">Danh từ / Hán ghép</option>
            <option value="Động từ ngữ cảnh">Động từ ngữ cảnh</option>
            <option value="Tính từ / Trạng thái">Tính từ / Trạng thái</option>
            <option value="Phó từ / Từ láy / Cụm cố định">Phó từ / Từ láy / Cụm cố định</option>
        `;
        cntSel.innerHTML = `
            <option value="15">15 câu (Lượt nhanh 4 phút)</option>
            <option value="30" selected>30 câu (8 phút)</option>
            <option value="47">47 câu (Trọn 1 bài phủ kín)</option>
            <option value="64">64 câu (Trọn Bài 1 lặp ≥2x)</option>
            <option value="97">97 câu (Trọn Nhóm Trọng Tâm)</option>
            <option value="191">Tất cả 191 câu</option>
        `;
    } else if (isM5) {
        sessSel.innerHTML = `
            <option value="all">Trộn tổng cả 107 từ Mondai 5 (2010–2026)</option>
            <option value="core">⭐ Chỉ Nhóm Trọng Tâm — 65 từ (Bài 1 + Bài 2)</option>
            <option value="full">🛡️ Chỉ Nhóm Phủ Kín — 42 từ (Bài 3)</option>
            <option value="1">🔥 Chỉ Bài 1 — Top 22 Siêu Tủ Lặp 2–3x M5</option>
            <option value="2">⭐ Chỉ Bài 2 — 43 Từ Chéo M1–M5 & 2021–2026</option>
            <option value="3">🛡️ Chỉ Bài 3 — 42 Từ Phủ Kín 2010–2019</option>
        `;
        monSel.style.display = 'inline-block';
        monSel.innerHTML = `
            <option value="all">Tất cả từ loại</option>
            <option value="Danh từ">Chỉ Danh từ / Danh động từ</option>
            <option value="Động từ">Chỉ Động từ</option>
            <option value="Tính từ / Phó từ">Chỉ Tính từ / Phó từ / Từ láy</option>
        `;
        cntSel.innerHTML = `
            <option value="10">10 câu (Lượt nhanh 4 phút)</option>
            <option value="22" selected>22 câu (Trọn 1 lượt chuẩn)</option>
            <option value="43">43 câu (Trọn Bài 2)</option>
            <option value="65">65 câu (Trọn Nhóm Trọng Tâm)</option>
            <option value="107">Tất cả 107 câu</option>
        `;
    } else if (isHira) {
        sessSel.innerHTML = `
            <option value="all">Trộn tổng cả 35 câu (Bài 1 + Bài 2)</option>
            <option value="1">🔥 Chỉ Bài 1 — Top 12 Siêu Tủ (3–4x)</option>
            <option value="2">Chỉ Bài 2 — 23 Từ Lặp Đề Thật (2x)</option>
        `;
        monSel.style.display = 'inline-block';
        monSel.innerHTML = `
            <option value="all">Tất cả 3 nhóm từ loại</option>
            <option value="Từ láy tượng thanh/hình">Từ láy tượng thanh/hình</option>
            <option value="Phó từ & Thời gian">Phó từ & Thời gian</option>
            <option value="Động từ & Tính từ thuần Nhật">Động từ & Tính từ thuần Nhật</option>
        `;
        cntSel.innerHTML = `
            <option value="12">12 câu (Lượt nhanh 4 phút)</option>
            <option value="20" selected>20 câu (5 phút)</option>
            <option value="35">Tất cả 35 câu</option>
        `;
    } else if (isKata) {
        sessSel.innerHTML = `
            <option value="all">Trộn tổng cả 90 câu (Bài 1 + 2 + 3)</option>
            <option value="1">Chỉ Bài 1 Gốc (Câu 1–39)</option>
            <option value="2">Chỉ Bài 2 Gốc (Câu 40–78)</option>
            <option value="3">🆕 Chỉ Bài 3 Bổ Sung Đề Thật (12 câu)</option>
        `;
        monSel.style.display = 'inline-block';
        monSel.innerHTML = `
            <option value="all">Tất cả 6 chủ đề Katakana</option>
            <option value="Công việc & Giao tiếp">Công việc & Giao tiếp</option>
            <option value="Công nghệ & Đời sống">Công nghệ & Đời sống</option>
            <option value="Mua sắm & Ẩm thực">Mua sắm & Ẩm thực</option>
            <option value="Giao thông & Thể thao">Giao thông & Thể thao</option>
            <option value="Truyền thông & Văn hóa">Truyền thông & Văn hóa</option>
            <option value="Đánh giá & Trạng thái">Đánh giá & Trạng thái</option>
        `;
        cntSel.innerHTML = `
            <option value="12">12 câu (Lượt siêu nhanh 3 phút)</option>
            <option value="15">15 câu (Lượt nhanh 4 phút)</option>
            <option value="30" selected>30 câu (8 phút)</option>
            <option value="39">39 câu (Trọn 1 bài 10 phút)</option>
            <option value="90">Tất cả 90 câu</option>
        `;
    } else if (isSyn) {
        sessSel.innerHTML = `
            <option value="all">Trộn tổng cả 95 câu (Bài 1 + 2 + 3)</option>
            <option value="1">Chỉ Bài 1 Gốc (40 câu)</option>
            <option value="2">Chỉ Bài 2 Gốc (40 câu)</option>
            <option value="3">Chỉ Bài 3 Bổ Sung (15 câu phủ kín)</option>
        `;
        monSel.style.display = 'none';
        cntSel.innerHTML = `
            <option value="15">15 câu (Lượt nhanh 4 phút)</option>
            <option value="30" selected>30 câu (8 phút)</option>
            <option value="40">40 câu (Trọn 1 bài 10 phút)</option>
            <option value="95">Tất cả 95 câu</option>
        `;
    } else {
        sessSel.innerHTML = `
            <option value="all">Trộn tổng cả 352 câu (6 Buổi)</option>
            <option value="extra">🆕 Chỉ 112 câu mới (Buổi 5 + Buổi 6)</option>
            <option value="1">Chỉ Buổi 1 Gốc (60 câu)</option>
            <option value="2">Chỉ Buổi 2 Gốc (60 câu)</option>
            <option value="3">Chỉ Buổi 3 Gốc (60 câu)</option>
            <option value="4">Chỉ Buổi 4 Gốc (60 câu)</option>
            <option value="5">🔥 Chỉ Buổi 5 Mới — Ưu tiên & 2025–2026 (56 câu)</option>
            <option value="6">🆕 Chỉ Buổi 6 Mới — Phủ kín đề thật (56 câu)</option>
        `;
        monSel.style.display = 'inline-block';
        monSel.innerHTML = `
            <option value="all">Cả Mondai 1 & Mondai 2</option>
            <option value="1">Chỉ Mondai 1 (Đọc Kanji)</option>
            <option value="2">Chỉ Mondai 2 (Chọn chữ Kanji)</option>
            <option value="both">🔀 Chỉ nhóm Lẫn lộn M1 + M2</option>
            <option value="ge2">🔥 Chỉ từ ra ≥ 2 lần đề thật</option>
        `;
        cntSel.innerHTML = `
            <option value="15">15 câu (Lượt nhanh 4 phút)</option>
            <option value="30" selected>30 câu (Nửa buổi 8 phút)</option>
            <option value="56">56 câu (Trọn 1 buổi mới 14 phút)</option>
            <option value="60">60 câu (Trọn 1 buổi gốc 15 phút)</option>
            <option value="352">Tất cả câu lọc được</option>
        `;
    }

    // Configure Quick-Study Table (#view-pairs) for Kanji311, Syn80, Kata90, Hira35 & M5 107
    const pairsTitle = document.getElementById('pairs-view-title');
    const maskRightBtn = document.getElementById('pairs-mask-right-btn');
    const maskLeftBtn = document.getElementById('pairs-mask-left-btn');
    const maskNoneBtn = document.getElementById('pairs-mask-none-btn');
    const pairsSearch = document.getElementById('pairs-search-input');
    const pairsCat = document.getElementById('pairs-cat-select');

    if (pairsSearch) pairsSearch.value = '';
    if (maskNoneBtn) maskNoneBtn.classList.toggle('primary', pairsMaskMode === 'none');
    if (maskRightBtn) maskRightBtn.classList.toggle('primary', pairsMaskMode === 'right');
    if (maskLeftBtn) maskLeftBtn.classList.toggle('primary', pairsMaskMode === 'left');

    if (isGpM1) {
        if (pairsTitle) pairsTitle.innerHTML = '<i class="fa-solid fa-table-list" style="color: var(--primary);"></i> Bảng Công Thức & Bẫy Ngữ Pháp M1 (Kính ngữ • Sai khiến • Cho nhận • Trợ từ • 4 Group • Phó từ)';
        if (maskRightBtn) maskRightBtn.textContent = '🙈 Che Quy Tắc & Ví Dụ (Mẫu → ???)';
        if (maskLeftBtn) maskLeftBtn.textContent = '🙈 Che Tên Mẫu (??? ← Quy tắc)';
        if (pairsSearch) pairsSearch.placeholder = 'Tìm nhanh Kính ngữ, Trợ từ, よう, こと, ばかり, ところ, わざわざ, お/ご...';
        if (pairsCat) {
            pairsCat.innerHTML = `
                <option value="all">Tất cả 7 chuyên đề lý thuyết M1</option>
                <option value="Kính ngữ">👑 Kính ngữ (Tôn kính • Khiêm nhường • お/ご/×)</option>
                <option value="Sai khiến • Bị động">⚡ Sai khiến – Bị động – Bị động sai khiến</option>
                <option value="Cho nhận">🤝 Cho nhận & Kính ngữ cho nhận</option>
                <option value="Trợ từ">🔗 21 Trợ từ trọng tâm</option>
                <option value="Trợ từ + X">🧩 24 Mẫu Trợ từ + X</option>
                <option value="4 Group dễ nhầm">📦 4 Group dễ nhầm (よう/こと/ばかり/ところ)</option>
                <option value="Đơn lẻ & Hậu tố Vます">⭐ Đơn lẻ & Hậu tố Vます</option>
                <option value="Phó từ hô ứng">🎯 Phó từ hô ứng & Cặp dễ nhầm</option>
            `;
        }
    } else if (isGpStar) {
        if (pairsTitle) pairsTitle.innerHTML = '<i class="fa-solid fa-star" style="color: var(--hub-warn-text);"></i> Bảng 16 Công Thức Ghép Xương Câu Dấu Sao ★ (Chương 3 Taisaku)';
        if (maskRightBtn) maskRightBtn.textContent = '🙈 Che Công Thức & Ví Dụ (Tên → ???)';
        if (maskLeftBtn) maskLeftBtn.textContent = '🙈 Che Tên Quy Tắc (??? ← Công thức)';
        if (pairsSearch) pairsSearch.placeholder = 'Tìm nhanh công thức ★: に対する, への, のは, だけしか, という, ほど...';
        if (pairsCat) {
            pairsCat.innerHTML = `
                <option value="all">Tất cả 16 công thức ghép ★</option>
                <option value="Mẹo đọc khung câu ★">Mẹo đọc khung câu ★</option>
                <option value="Kết hợp Danh từ">Kết hợp Danh từ ([Trợ từ+X]+の+N / 辞書形+N)</option>
                <option value="Kết hợp Động từ">Kết hợp Động từ</option>
                <option value="Kết hợp Trợ từ">Kết hợp Trợ từ (に→への / のは・のが / 2 trợ từ)</option>
                <option value="Mẫu cặp hô ứng ★">Mẫu cặp hô ứng & Câu hỏi lồng ★</option>
            `;
        }
    } else if (isGpM3) {
        if (pairsTitle) pairsTitle.innerHTML = '<i class="fa-solid fa-arrows-left-right" style="color: var(--primary);"></i> Bảng Tra Cứu 45 Liên Từ & 8 Quy Tắc Chỉ Thị Từ こ・そ・あ (Chương 4 Taisaku)';
        if (maskRightBtn) maskRightBtn.textContent = '🙈 Che Quy Tắc & Mẹo (Từ nối → ???)';
        if (maskLeftBtn) maskLeftBtn.textContent = '🙈 Che Từ Nối / こ・そ・あ (??? ← Quy tắc)';
        if (pairsSearch) pairsSearch.placeholder = 'Tìm nhanh liên từ (ところが, そこで, つまり, すると...) hoặc こ・そ・あ...';
        if (pairsCat) {
            pairsCat.innerHTML = `
                <option value="all">Tất cả Liên từ & Chỉ thị từ (22 thẻ tổng hợp)</option>
                <option value="Liên từ: Đối lập">Liên từ: Đối lập / Nghịch ý (ところが, 一方, ただし...)</option>
                <option value="Liên từ: Nguyên nhân–KQ">Liên từ: Nguyên nhân – Kết quả (そこで, すると, そのため...)</option>
                <option value="Liên từ: Lý giải">Liên từ: Lý giải ngược (なぜなら, というのは)</option>
                <option value="Liên từ: Bổ sung">Liên từ: Bổ sung / Trình tự (そのうえ, それに, まず...)</option>
                <option value="Liên từ: Tóm tắt & Ví dụ">Liên từ: Tóm tắt & Ví dụ (つまり, 結局, たとえば)</option>
                <option value="Liên từ: Lựa chọn">Liên từ: Lựa chọn (または, それとも)</option>
                <option value="Liên từ: Chuyển ý">Liên từ: Chuyển chủ đề (ところで, そういえば, さて)</option>
                <option value="Chỉ thị từ こ・そ・あ">🎯 8 Quy tắc vàng Chỉ thị từ こ・そ・あ</option>
            `;
        }
    } else if (isM3) {
        if (pairsTitle) pairsTitle.innerHTML = '<i class="fa-solid fa-table-list" style="color: var(--primary);"></i> Bảng Tra Cứu 191 Từ Ngữ Cảnh Mondai 3 (⭐ Trọng Tâm 97 • 🛡️ Phủ Kín 94)';
        if (maskRightBtn) maskRightBtn.textContent = '🙈 Che Nghĩa & Cụm Kết Hợp (Từ → ???)';
        if (maskLeftBtn) maskLeftBtn.textContent = '🙈 Che Từ & Đọc (??? ← Nghĩa)';
        if (pairsSearch) pairsSearch.placeholder = 'Tìm nhanh Kanji, Hiragana, nghĩa Việt, cụm kết hợp hoặc kỳ thi (vd: T7/2026)...';
        if (pairsCat) {
            pairsCat.innerHTML = `
                <option value="all">Tất cả 191 từ (Trọng tâm + Phủ kín)</option>
                <option value="core">⭐ Nhóm Trọng Tâm (97 từ — Học trước)</option>
                <option value="rep2">🔥 Lặp ≥ 2 lần đề thật (64 từ)</option>
                <option value="recent">🆕 Đề mới 2021–2026 (33 từ)</option>
                <option value="full">🛡️ Nhóm Phủ Kín (94 từ — Lấy điểm tối đa)</option>
                <option value="Danh từ / Hán ghép">Loại: Danh từ / Hán ghép</option>
                <option value="Động từ ngữ cảnh">Loại: Động từ ngữ cảnh</option>
                <option value="Tính từ / Trạng thái">Loại: Tính từ / Trạng thái</option>
                <option value="Phó từ / Từ láy / Cụm cố định">Loại: Phó từ / Từ láy / Cụm cố định</option>
            `;
        }
    } else if (isM5) {
        if (pairsTitle) pairsTitle.innerHTML = '<i class="fa-solid fa-table-list" style="color: var(--primary);"></i> Bảng Tra Cứu 107 Cách Dùng Từ Mondai 5 (⭐ Trọng Tâm 65 • 🛡️ Phủ Kín 42)';
        if (maskRightBtn) maskRightBtn.textContent = '🙈 Che Công Thức & Bẫy (Từ → ???)';
        if (maskLeftBtn) maskLeftBtn.textContent = '🙈 Che Từ & Nghĩa (??? ← Công thức)';
        if (pairsSearch) pairsSearch.placeholder = 'Tìm nhanh từ, Hiragana, nghĩa Việt, cụm kết hợp hoặc kỳ thi (vd: T7/2026)...';
        if (pairsCat) {
            pairsCat.innerHTML = `
                <option value="all">Tất cả 107 từ (Trọng tâm + Phủ kín)</option>
                <option value="core">⭐ Nhóm Trọng Tâm (65 từ — Học trước)</option>
                <option value="top22">🔥 Top 22 Siêu Tủ (Lặp 2–3x M5)</option>
                <option value="full">🛡️ Nhóm Phủ Kín (42 từ — Lấy điểm tối đa)</option>
                <option value="Danh từ">Loại: Danh từ / Danh động từ</option>
                <option value="Động từ">Loại: Động từ</option>
                <option value="Tính từ / Phó từ">Loại: Tính từ / Phó từ / Từ láy</option>
            `;
        }
    } else if (isKanji) {
        if (pairsTitle) pairsTitle.innerHTML = '<i class="fa-solid fa-table-list" style="color: var(--primary);"></i> Bảng Tra Cứu 311 Kanji Đề Thật N3 (2010–2026 + 10 Ảnh)';
        if (maskRightBtn) maskRightBtn.textContent = '🙈 Che Hiragana & Nghĩa (Kanji → ???)';
        if (maskLeftBtn) maskLeftBtn.textContent = '🙈 Che Kanji & Nghĩa (??? ← Hiragana)';
        if (pairsSearch) pairsSearch.placeholder = 'Tìm nhanh Kanji, Hiragana, Hán Việt, nghĩa Việt hoặc kỳ thi (vd: T7/2026)...';
        if (pairsCat) {
            pairsCat.innerHTML = `
                <option value="all">Tất cả 311 từ độc nhất</option>
                <option value="new112">🆕 Chỉ 112 từ mới (Buổi 5–6)</option>
                <option value="both">🔀 Nhóm Lẫn lộn M1 + M2 (27 từ)</option>
                <option value="ge2">🔥 Ra thi ≥ 2 lần M1/M2 (65 từ)</option>
                <option value="m1">Chỉ ra Mondai 1 (Kanji → Hira)</option>
                <option value="m2">Chỉ ra Mondai 2 (Hira → Kanji)</option>
                <option value="s5">Chỉ Buổi 5 (Ưu tiên & 2025–2026)</option>
                <option value="s6">Chỉ Buổi 6 (Phủ kín)</option>
            `;
        }
    } else if (isHira) {
        if (pairsTitle) pairsTitle.innerHTML = '<i class="fa-solid fa-table-list" style="color: var(--primary);"></i> Bảng Dò Nhanh 35 Hiragana, Phó Từ & Từ Láy Tủ N3 (Ra ≥2x)';
        if (maskRightBtn) maskRightBtn.textContent = '🙈 Che Nghĩa & Mẹo (Hiragana → ???)';
        if (maskLeftBtn) maskLeftBtn.textContent = '🙈 Che Hiragana & Mẹo (??? ← Nghĩa)';
        if (pairsSearch) pairsSearch.placeholder = 'Tìm nhanh Hiragana, đồng nghĩa Nhật, nghĩa Việt hoặc kỳ thi...';
        if (pairsCat) {
            pairsCat.innerHTML = `
                <option value="all">Tất cả 35 từ (Ra ≥ 2 lần)</option>
                <option value="top12">🔥 Top 12 Siêu Tủ (3–4 lần)</option>
                <option value="Từ láy tượng thanh/hình">Từ láy tượng thanh/hình</option>
                <option value="Phó từ & Thời gian">Phó từ & Thời gian</option>
                <option value="Động từ & Tính từ thuần Nhật">Động từ & Tính từ thuần Nhật</option>
            `;
        }
    } else if (isKata) {
        if (pairsTitle) pairsTitle.innerHTML = '<i class="fa-solid fa-table-list" style="color: var(--primary);"></i> Bảng Dò Nhanh 90 Từ Katakana N3 (78 Gốc + 12 Đề Thật)';
        if (maskRightBtn) maskRightBtn.textContent = '🙈 Che Nghĩa & Gợi ý (Katakana → ???)';
        if (maskLeftBtn) maskLeftBtn.textContent = '🙈 Che Katakana & Gợi ý (??? ← Nghĩa)';
        if (pairsSearch) pairsSearch.placeholder = 'Tìm nhanh Katakana, từ gốc Anh/Pháp/Đức, thuần Nhật hoặc nghĩa Việt...';
        if (pairsCat) {
            pairsCat.innerHTML = `
                <option value="all">Tất cả chủ đề (90 từ)</option>
                <option value="extra12">🆕 Bổ sung đề thật 2010–2026 (12 từ)</option>
                <option value="freq">🔥 Đã từng ra đề thật 2010–2026</option>
                <option value="Công việc & Giao tiếp">Công việc & Giao tiếp</option>
                <option value="Công nghệ & Đời sống">Công nghệ & Đời sống</option>
                <option value="Mua sắm & Ẩm thực">Mua sắm & Ẩm thực</option>
                <option value="Giao thông & Thể thao">Giao thông & Thể thao</option>
                <option value="Truyền thông & Văn hóa">Truyền thông & Văn hóa</option>
                <option value="Đánh giá & Trạng thái">Đánh giá & Trạng thái</option>
            `;
        }
    } else {
        if (pairsTitle) pairsTitle.innerHTML = '<i class="fa-solid fa-table-list" style="color: var(--primary);"></i> Bảng Dò Nhanh 80 Cặp Từ Đồng Nghĩa N3 (A ＝ B)';
        if (maskRightBtn) maskRightBtn.textContent = '🙈 Che vế phải & Nghĩa (A = ???)';
        if (maskLeftBtn) maskLeftBtn.textContent = '🙈 Che vế trái & Nghĩa (??? = B)';
        if (pairsSearch) pairsSearch.placeholder = 'Tìm nhanh Kanji, Hiragana, Katakana hoặc nghĩa tiếng Việt...';
        if (pairsCat) {
            pairsCat.innerHTML = `
                <option value="all">Tất cả từ loại (80 cặp)</option>
                <option value="Động từ">Động từ</option>
                <option value="Tính từ">Tính từ</option>
                <option value="Danh từ">Danh từ</option>
                <option value="Phó từ">Phó từ</option>
                <option value="Katakana">Katakana</option>
                <option value="Cụm từ">Cụm từ</option>
            `;
        }
    }
}

function initTheme() {
    if (!localStorage.getItem('n3_theme_bright_v1')) {
        localStorage.setItem('kanji_theme', 'light');
        localStorage.setItem('vocab_theme', 'light');
        localStorage.setItem('n3_theme_bright_v1', '1');
    }
    let savedTheme = localStorage.getItem('kanji_theme') || localStorage.getItem('vocab_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcons(savedTheme);

    document.querySelectorAll('.theme-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            savedTheme = savedTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', savedTheme);
            localStorage.setItem('kanji_theme', savedTheme);
            localStorage.setItem('vocab_theme', savedTheme);
            updateThemeIcons(savedTheme);
        });
    });
}

function updateThemeIcons(theme) {
    document.querySelectorAll('.theme-toggle').forEach(btn => {
        btn.innerHTML = theme === 'light' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });
}

function loadBankState() {
    const keys = getBankCfg().keys;
    try { mistakesMap = JSON.parse(localStorage.getItem(keys.mistakes)) || {}; } catch (e) { mistakesMap = {}; }

    historyData = { sessions: {}, examStats: {}, m1Correct: 0, m1Total: 0, m2Correct: 0, m2Total: 0, attemptsLog: [] };
    try {
        const h = JSON.parse(localStorage.getItem(keys.history));
        if (h) {
            historyData = {
                ...historyData,
                ...h,
                sessions: { ...(h.sessions || {}) },
                examStats: { ...(h.examStats || {}) },
                attemptsLog: Array.isArray(h.attemptsLog) ? h.attemptsLog : []
            };
        }
    } catch (e) {}

    touchedSet = new Set();
    try {
        const t = JSON.parse(localStorage.getItem(keys.touched));
        if (Array.isArray(t)) touchedSet = new Set(t);
    } catch (e) {}
}

function saveBankState() {
    const keys = getBankCfg().keys;
    localStorage.setItem(keys.mistakes, JSON.stringify(mistakesMap));
    localStorage.setItem(keys.history, JSON.stringify(historyData));
    localStorage.setItem(keys.touched, JSON.stringify(Array.from(touchedSet)));
}

function getTodayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function syncMistakeToHubSrs(qObj, bankId = activeBank, remove = false) {
    let hubSrs = [];
    try { hubSrs = JSON.parse(localStorage.getItem(LS_HUB_SRS_KEY)) || []; } catch (e) { hubSrs = []; }

    const idx = hubSrs.findIndex(m => m.id === qObj.id);
    if (remove) {
        if (idx !== -1) hubSrs.splice(idx, 1);
    } else {
        let entry;
        if (bankId === 'syn80') {
            entry = {
                id: qObj.id,
                type: `Đồng Nghĩa (B${qObj.part})`,
                title: `${qObj.target_word} ＝ ${qObj.synonym_word} — ${qObj.meaning_vi}`,
                detail: `${qObj.sentence_vi} | ${qObj.nuance_note}`,
                level: 0,
                nextReview: getTodayStr(),
                addedAt: new Date().toLocaleDateString('vi-VN')
            };
        } else if (bankId === 'pastN3') {
            entry = {
                id: qObj.id,
                type: `Đề N3 ${getPastExamShortLabel(qObj.exam_id)}`,
                title: `[${qObj.mondai_label} #${qObj.num}] Đáp án: ${qObj.options[qObj.answer]}`,
                detail: `${qObj.sentence_vi} | ${qObj.explain_vi}`,
                level: 0,
                nextReview: getTodayStr(),
                addedAt: new Date().toLocaleDateString('vi-VN')
            };
        } else if (bankId === 'kata78') {
            entry = {
                id: qObj.id,
                type: `Katakana N3 (B${qObj.part})`,
                title: `${qObj.word} (${qObj.origin}) — ${qObj.meaning_vi}`,
                detail: `${qObj.sentence_vi} | Thuần Nhật: ${qObj.native_jp} | ${qObj.wasei_note}`,
                level: 0,
                nextReview: getTodayStr(),
                addedAt: new Date().toLocaleDateString('vi-VN')
            };
        } else if (bankId === 'hira35') {
            entry = {
                id: qObj.id,
                type: `Hiragana N3 (B${qObj.part})`,
                title: `${qObj.word} (${qObj.syn_jp}) — ${qObj.meaning_vi}`,
                detail: `${qObj.sentence_vi} | ${qObj.nuance_note}`,
                level: 0,
                nextReview: getTodayStr(),
                addedAt: new Date().toLocaleDateString('vi-VN')
            };
        } else if (bankId === 'm3_191') {
            entry = {
                id: qObj.id,
                type: `Mondai 3 (B${qObj.part})`,
                title: `${qObj.word_disp} — ${qObj.meaning_vi}`,
                detail: `Cụm chuẩn: ${qObj.collocation} | ${qObj.sentence_vi}`,
                level: 0,
                nextReview: getTodayStr(),
                addedAt: new Date().toLocaleDateString('vi-VN')
            };
        } else if (bankId === 'm5_107') {
            entry = {
                id: qObj.id,
                type: `Mondai 5 (B${qObj.part})`,
                title: `${qObj.word_disp} — ${qObj.meaning_vi}`,
                detail: `Công thức: ${qObj.collocation} | Bẫy: ${qObj.trap_rule}`,
                level: 0,
                nextReview: getTodayStr(),
                addedAt: new Date().toLocaleDateString('vi-VN')
            };
        } else if (bankId === 'gp_m1' || bankId === 'gp_star' || bankId === 'gp_m3') {
            const gpTag = bankId === 'gp_m1' ? `NP M1 (Ca ${qObj.part})` : (bankId === 'gp_star' ? `Dấu Sao ★ (Ca ${qObj.part})` : `NP Đoạn Văn M3 (Ca ${qObj.part})`);
            const keyLbl = qObj.pattern_key || qObj.rule_tag || qObj.topic || 'Ngữ pháp N3';
            entry = {
                id: qObj.id,
                type: gpTag,
                title: `[${keyLbl}] Đáp án: ${qObj.options[qObj.answer]}`,
                detail: `${qObj.star_order ? `Thứ tự ★: ${qObj.star_order} | ` : ''}${qObj.sentence_vi} | ${qObj.explain_vi}`,
                level: 0,
                nextReview: getTodayStr(),
                addedAt: new Date().toLocaleDateString('vi-VN')
            };
        } else {
            entry = {
                id: qObj.id,
                type: `Kanji N3 (B${qObj.session})`,
                title: `${qObj.kanji_form}（${qObj.reading}）• ${qObj.han_viet} — ${qObj.meaning_vi}`,
                detail: `${qObj.sentence_vi} | ${qObj.trap_note}`,
                level: 0,
                nextReview: getTodayStr(),
                addedAt: new Date().toLocaleDateString('vi-VN')
            };
        }
        if (idx !== -1) hubSrs[idx] = { ...hubSrs[idx], ...entry };
        else hubSrs.unshift(entry);
    }
    localStorage.setItem(LS_HUB_SRS_KEY, JSON.stringify(hubSrs));
}

function addHubXP(xp) {
    try {
        const stats = JSON.parse(localStorage.getItem(LS_HUB_STATS_KEY)) || { xp: 0, streak: 1, dojoCorrect: 0, dojoTotal: 0, dailyQuests: {} };
        stats.xp = (stats.xp || 0) + xp;
        localStorage.setItem(LS_HUB_STATS_KEY, JSON.stringify(stats));
    } catch (e) {}
}

function recordMistakeOrFlag(qObj, isFlagOnly = false, bankId = activeBank) {
    const cur = mistakesMap[qObj.id];
    mistakesMap[qObj.id] = {
        streak: 0,
        wrongCount: (cur ? cur.wrongCount : 0) + (isFlagOnly ? 0 : 1),
        flagged: isFlagOnly ? true : (cur ? cur.flagged : false),
        lastAt: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    };
    syncMistakeToHubSrs(qObj, bankId, false);
    saveBankState();
}

function recordRevengeSuccess(qObj, bankId = activeBank) {
    const cur = mistakesMap[qObj.id];
    if (!cur) return { cleared: false, newStreak: 0 };
    const nextStreak = (cur.streak || 0) + 1;
    if (nextStreak >= 2) {
        delete mistakesMap[qObj.id];
        syncMistakeToHubSrs(qObj, bankId, true);
        addHubXP(20);
        saveBankState();
        return { cleared: true, newStreak: 2 };
    } else {
        cur.streak = nextStreak;
        cur.flagged = false;
        saveBankState();
        return { cleared: false, newStreak: nextStreak };
    }
}

function manualClearMistake(qid) {
    const qObj = getBankDataset().find(x => x.id === qid);
    delete mistakesMap[qid];
    if (qObj) syncMistakeToHubSrs(qObj, activeBank, true);
    saveBankState();
    renderLobby();
    renderMistakesView();
}

// ==========================================
// 2. ANTI-ROTE RANDOMIZATION ENGINE
// ==========================================
function fisherYatesShuffle(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function buildKanjiReverseDistractors(qObj, targetMondai) {
    const correctText = targetMondai === 2 ? qObj.kanji_form : qObj.reading;
    const len = correctText.length;
    const uniqueCands = Array.from(new Set(
        KANJI_240_DATA
            .map(x => targetMondai === 2 ? x.kanji_form : x.reading)
            .filter(txt => txt && txt !== correctText)
    ));
    const lastChar = correctText.slice(-1);
    const isKanaEnding = /[\u3040-\u309F]/.test(lastChar);

    const tier1 = uniqueCands.filter(c => c.length === len && (!isKanaEnding || c.slice(-1) === lastChar));
    const tier2 = uniqueCands.filter(c => Math.abs(c.length - len) <= 1 && !tier1.includes(c));
    const tier3 = uniqueCands.filter(c => !tier1.includes(c) && !tier2.includes(c));

    const picked = [];
    for (const pool of [tier1, tier2, tier3]) {
        for (const cand of fisherYatesShuffle(pool)) {
            if (picked.length >= 3) break;
            if (!picked.includes(cand)) picked.push(cand);
        }
        if (picked.length >= 3) break;
    }
    return [correctText, ...picked.slice(0, 3)];
}

// Build 3 smart N3 word distractors (A) when Synonym Reverse Mode flips B -> A
function buildSynonymReverseOptions(qObj) {
    const correctA = qObj.target_word;
    const correctMeaning = qObj.meaning_vi;

    // Deduplicate candidate N3 target words with distinct meanings
    const byWord = new Map();
    SYNONYM_N3_DATA.forEach(x => {
        if (x.target_word !== correctA && x.synonym_word !== qObj.synonym_word && !byWord.has(x.target_word)) {
            byWord.set(x.target_word, x.meaning_vi);
        }
    });

    const entries = Array.from(byWord.entries()); // [ [wordA, meaningVi], ... ]
    const isKatakana = /^[\u30A0-\u30FFー]+$/.test(correctA);
    const tail = correctA.slice(-1);

    const tier1 = entries.filter(([w]) => (isKatakana && /^[\u30A0-\u30FFー]+$/.test(w)) || (!isKatakana && w.slice(-1) === tail));
    const tier2 = entries.filter(([w]) => Math.abs(w.length - correctA.length) <= 2 && !tier1.some(t => t[0] === w));
    const tier3 = entries.filter(([w]) => !tier1.some(t => t[0] === w) && !tier2.some(t => t[0] === w));

    const picked = [[correctA, `${correctMeaning} (ĐÚNG)`]];
    for (const pool of [tier1, tier2, tier3]) {
        for (const item of fisherYatesShuffle(pool)) {
            if (picked.length >= 4) break;
            if (!picked.some(p => p[0] === item[0])) picked.push(item);
        }
        if (picked.length >= 4) break;
    }
    return picked; // Array of [optionText, optionVi]
}

function buildM5ReverseOptions(qObj) {
    const picked = [{ wordDisp: qObj.word_disp, meaning: qObj.meaning_vi, isAns: true }];
    const samePos = MONDAI5_107_DATA.filter(x => x.id !== qObj.id && x.pos === qObj.pos && x.meaning_vi !== qObj.meaning_vi);
    const otherPos = MONDAI5_107_DATA.filter(x => x.id !== qObj.id && x.pos !== qObj.pos && x.meaning_vi !== qObj.meaning_vi);
    for (const pool of [samePos, otherPos]) {
        for (const cand of fisherYatesShuffle(pool)) {
            if (picked.length >= 4) break;
            if (!picked.some(p => p.meaning === cand.meaning_vi)) {
                picked.push({ wordDisp: cand.word_disp, meaning: cand.meaning_vi, isAns: false });
            }
        }
        if (picked.length >= 4) break;
    }
    return picked;
}

function buildPreparedQuestion(qObj, antiRote, bankId = activeBank) {
    const isReversed = !!antiRote.reverseMode;

    if (bankId === 'm5_107') {
        if (!isReversed) {
            const rawTuples = qObj.options.map((sentTxt, i) => ({
                txt: sentTxt,
                exp: (qObj.options_explain && qObj.options_explain[i]) || '',
                isAns: i === qObj.answer
            }));
            const finalTuples = antiRote.shuffleOpt ? fisherYatesShuffle(rawTuples) : rawTuples;
            const correctIdx = finalTuples.findIndex(t => t.isAns);
            return {
                bankId: 'm5_107',
                orig: qObj,
                effectiveMondai: 1, // 1 = Forward Mondai 5 (Pick 1 right sentence out of 4)
                isReversed: false,
                displayHtml: qObj.sentence_html,
                displayOnlyWord: qObj.word,
                options: finalTuples.map(t => t.txt),
                optionsVi: finalTuples.map(t => t.exp),
                optionsKata: null,
                correctIdx
            };
        } else {
            const rawTuples = buildM5ReverseOptions(qObj);
            const finalTuples = antiRote.shuffleOpt ? fisherYatesShuffle(rawTuples) : rawTuples;
            const correctIdx = finalTuples.findIndex(t => t.isAns);
            return {
                bankId: 'm5_107',
                orig: qObj,
                effectiveMondai: 2, // 2 = Reverse (Correct sentence -> Meaning)
                isReversed: true,
                displayHtml: qObj.sentence_reverse_html,
                displayOnlyWord: qObj.word,
                options: finalTuples.map(t => t.meaning),
                optionsVi: finalTuples.map(t => t.isAns ? `${t.meaning} (ĐÚNG)` : t.meaning),
                optionsKata: finalTuples.map(t => t.wordDisp),
                correctIdx
            };
        }
    }

    if (bankId === 'gp_m1' || bankId === 'gp_star' || bankId === 'gp_m3') {
        const rawTuples = qObj.options.map((txt, i) => ({
            txt,
            isAns: i === qObj.answer
        }));
        const finalTuples = antiRote.shuffleOpt ? fisherYatesShuffle(rawTuples) : rawTuples;
        const correctIdx = finalTuples.findIndex(t => t.isAns);
        const isHard = (qObj.level_star || '').length >= 2;
        return {
            bankId,
            orig: qObj,
            effectiveMondai: isHard ? 2 : 1, // 1 = Cơ bản ☆, 2 = Nâng cao / Bẫy ☆☆
            isReversed: false,
            displayHtml: qObj.sentence_html,
            displayOnlyWord: qObj.pattern_key || qObj.rule_tag || qObj.topic || '',
            options: finalTuples.map(t => t.txt),
            optionsVi: null,
            optionsKata: null,
            correctIdx
        };
    }

    if (bankId === 'pastN3') {
        const rawTuples = qObj.options.map((txt, i) => ({
            txt,
            isAns: i === qObj.answer
        }));
        const finalTuples = antiRote.shuffleOpt ? fisherYatesShuffle(rawTuples) : rawTuples;
        const correctIdx = finalTuples.findIndex(t => t.isAns);

        return {
            bankId: 'pastN3',
            orig: qObj,
            effectiveMondai: qObj.section === 'dokkai' ? 2 : 1, // 1 = Lang Knowledge (TV+NP), 2 = Reading (Dokkai)
            isReversed: false,
            displayHtml: qObj.sentence_html,
            displayOnlyWord: qObj.mondai_label,
            options: finalTuples.map(t => t.txt),
            optionsVi: null,
            optionsKata: null,
            correctIdx
        };
    }

    if (bankId === 'kata78' || bankId === 'hira35' || bankId === 'm3_191') {
        const rawTuples = qObj.options.map((jpTxt, i) => {
            const rawVi = qObj.options_vi[i] || '';
            const cleanVi = rawVi.replace(/\s*\(ĐÚNG\)\s*$/, '').trim();
            return {
                jpTxt,
                rawVi,
                cleanVi,
                isAns: i === qObj.answer
            };
        });
        const finalTuples = antiRote.shuffleOpt ? fisherYatesShuffle(rawTuples) : rawTuples;
        const correctIdx = finalTuples.findIndex(t => t.isAns);

        if (!isReversed) {
            return {
                bankId,
                orig: qObj,
                effectiveMondai: 1, // 1 = Forward Mondai 3 (Sentence/Meaning -> Word)
                isReversed: false,
                displayHtml: qObj.sentence_html,
                displayOnlyWord: qObj.meaning_vi,
                options: finalTuples.map(t => t.jpTxt),
                optionsVi: finalTuples.map(t => t.rawVi),
                optionsKata: finalTuples.map(t => t.jpTxt),
                correctIdx
            };
        } else {
            return {
                bankId,
                orig: qObj,
                effectiveMondai: 2, // 2 = Reverse (Word -> Vietnamese Meaning)
                isReversed: true,
                displayHtml: qObj.sentence_reverse_html,
                displayOnlyWord: qObj.display_word || qObj.word,
                options: finalTuples.map(t => t.cleanVi),
                optionsVi: finalTuples.map(t => t.rawVi),
                optionsKata: finalTuples.map(t => t.jpTxt),
                correctIdx
            };
        }
    }

    if (bankId === 'syn80') {
        let pairedOptions; // [[text, viMeaning], ...]
        let correctText;

        if (!isReversed) {
            pairedOptions = qObj.options.map((txt, i) => [txt, qObj.options_vi[i]]);
            correctText = qObj.options[qObj.answer];
        } else {
            pairedOptions = buildSynonymReverseOptions(qObj);
            correctText = qObj.target_word;
        }

        const finalPairs = antiRote.shuffleOpt ? fisherYatesShuffle(pairedOptions) : pairedOptions;
        const finalOptions = finalPairs.map(p => p[0]);
        const finalOptionsVi = finalPairs.map(p => p[1]);
        const correctIdx = finalOptions.indexOf(correctText);

        return {
            bankId: 'syn80',
            orig: qObj,
            effectiveMondai: isReversed ? 2 : 1, // 1 = Forward (A->B), 2 = Reverse (B->A)
            isReversed,
            displayHtml: isReversed ? qObj.sentence_reverse_html : qObj.sentence_html,
            displayOnlyWord: isReversed ? qObj.synonym_word : qObj.target_word,
            options: finalOptions,
            optionsVi: finalOptionsVi,
            optionsKata: null,
            correctIdx
        };
    } else {
        // Kanji 240
        const effectiveMondai = isReversed ? (qObj.mondai === 1 ? 2 : 1) : qObj.mondai;
        let rawOptions;
        let correctText;

        if (!isReversed) {
            rawOptions = [...qObj.options];
            correctText = qObj.options[qObj.answer];
        } else {
            rawOptions = buildKanjiReverseDistractors(qObj, effectiveMondai);
            correctText = rawOptions[0];
        }

        const finalOptions = antiRote.shuffleOpt ? fisherYatesShuffle(rawOptions) : rawOptions;
        const correctIdx = finalOptions.indexOf(correctText);

        return {
            bankId: 'kanji240',
            orig: qObj,
            effectiveMondai,
            isReversed,
            displayHtml: isReversed ? qObj.sentence_reverse_html : qObj.sentence_html,
            displayOnlyWord: effectiveMondai === 1 ? qObj.kanji_form : qObj.reading,
            options: finalOptions,
            optionsVi: null,
            optionsKata: null,
            correctIdx
        };
    }
}

// ==========================================
// 3. VIEW SWITCHING & LOBBY RENDERING
// ==========================================
function showMainView(viewName) {
    if (activeSession && activeSession.timerInterval) {
        clearInterval(activeSession.timerInterval);
        activeSession.timerInterval = null;
    }

    document.getElementById('view-lobby').style.display = viewName === 'lobby' ? 'block' : 'none';
    document.getElementById('view-exam').style.display = viewName === 'exam' ? 'block' : 'none';
    document.getElementById('view-result').style.display = viewName === 'result' ? 'block' : 'none';
    document.getElementById('view-mistakes').style.display = viewName === 'mistakes' ? 'block' : 'none';
    document.getElementById('view-pairs').style.display = viewName === 'pairs' ? 'block' : 'none';

    document.getElementById('nav-view-lobby-btn').classList.toggle('active', viewName === 'lobby');
    document.getElementById('nav-view-mistakes-btn').classList.toggle('active', viewName === 'mistakes');
    document.getElementById('nav-view-pairs-btn').classList.toggle('active', viewName === 'pairs');

    if (viewName === 'lobby') renderLobby();
    if (viewName === 'mistakes') renderMistakesView();
    if (viewName === 'pairs') renderPairsTable();
}

function renderLobby() {
    const dataset = getBankDataset();
    const cfg = getBankCfg();
    const mistakeIds = Object.keys(mistakesMap);

    document.getElementById('top-mistake-count').textContent = mistakeIds.length;
    document.getElementById('btn-revenge-cnt').textContent = mistakeIds.length;
    document.getElementById('kpi-mistakes').textContent = `${mistakeIds.length} câu`;
    document.getElementById('kpi-touched').textContent = `${touchedSet.size} / ${dataset.length}`;

    const m1Pct = historyData.m1Total > 0 ? `${Math.round((historyData.m1Correct / historyData.m1Total) * 100)}%` : '--%';
    const m2Pct = historyData.m2Total > 0 ? `${Math.round((historyData.m2Correct / historyData.m2Total) * 100)}%` : '--%';
    document.getElementById('kpi-m1-acc').textContent = m1Pct;
    document.getElementById('kpi-m2-acc').textContent = m2Pct;

    const container = document.getElementById('sessions-cards-container');
    container.innerHTML = '';
    const sidebarChecklist = document.getElementById('sidebar-sprint-checklist');
    sidebarChecklist.innerHTML = '';

    if (activeBank === 'pastN3') {
        renderPastExamsLobby(container, sidebarChecklist);
        renderResumeBanner();
        renderHistoryLog();
        return;
    }

    cfg.shifts.forEach(meta => {
        const rec = historyData.sessions[meta.session];
        const bestStr = rec ? `Cao nhất: ${rec.best}/${rec.total} (${Math.round((rec.best / rec.total) * 100)}%)` : 'Chưa làm';
        const passed = rec && (rec.best / rec.total) >= 0.85;
        const sessMistakeCount = dataset.filter(q => getItemSessionNum(q) === meta.session && mistakesMap[q.id]).length;

        const card = document.createElement('div');
        card.className = 'session-card';
        card.innerHTML = `
            <div class="session-top">
                <div>
                    <span class="shift-badge"><i class="fa-solid ${meta.icon}"></i> ${meta.shift}</span>
                    <h4 style="font-size: 17.5px; color: var(--hub-text); margin-top: 7px;">${meta.title}</h4>
                    <span style="font-size: 12.5px; color: var(--hub-text-sub);">${meta.desc}</span>
                </div>
                <span class="score-badge ${passed ? 'passed' : ''}">${passed ? '✅ ' : ''}${bestStr}</span>
            </div>
            <div style="font-size: 12.5px; color: var(--hub-text-body); display: flex; justify-content: space-between; align-items: center;">
                <span>Số lần luyện: <strong>${rec ? rec.attempts : 0}</strong></span>
                <span style="color: ${sessMistakeCount > 0 ? 'var(--hub-danger-text)' : 'var(--hub-ok-text)'}; font-weight: 600;">
                    ${sessMistakeCount > 0 ? `⚠️ ${sessMistakeCount} câu cần phục thù` : '✨ Không có câu sai tồn đọng'}
                </span>
            </div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <button class="btn-pill primary" style="flex: 1;" onclick="launchSession(${meta.session}, 'exam')">
                    <i class="fa-solid fa-stopwatch"></i> Thi Thử ${meta.timeLbl}
                </button>
                <button class="btn-pill" style="flex: 1;" onclick="launchSession(${meta.session}, 'drill')">
                    <i class="fa-solid fa-bolt"></i> Luyện Chữa Ngay
                </button>
            </div>
        `;
        container.appendChild(card);

        const sItem = document.createElement('div');
        sItem.style.padding = '9px 11px';
        sItem.style.borderRadius = '9px';
        sItem.style.background = 'var(--hub-surface-2)';
        sItem.style.borderLeft = `3px solid ${passed ? 'var(--hub-ok-text)' : (rec ? 'var(--hub-warn-text)' : 'var(--primary)')}`;
        sItem.innerHTML = `<strong style="color: var(--hub-text);">${passed ? '✅' : '⏳'} ${meta.shift}:</strong> ${rec ? `${rec.best}/${meta.count} điểm` : 'Chưa chạy'}`;
        sidebarChecklist.appendChild(sItem);
    });

    renderResumeBanner();
    renderHistoryLog();
}

const PAST_MONDAI_META = {
    moji_goi_1: { label: 'M1 Đọc Kanji', short: 'M1', suggestBank: 'kanji240', suggestLabel: '🈴 352 Kanji (M1)' },
    moji_goi_2: { label: 'M2 Chọn Kanji', short: 'M2', suggestBank: 'kanji240', suggestLabel: '🈴 352 Kanji (M2)' },
    moji_goi_3: { label: 'M3 Ngữ cảnh', short: 'M3', suggestBank: 'm3_191', suggestLabel: '🧩 191 Từ Ngữ Cảnh M3' },
    moji_goi_4: { label: 'M4 Đồng nghĩa', short: 'M4', suggestBank: 'syn80', suggestLabel: '🔁 80 Cặp Đồng Nghĩa' },
    moji_goi_5: { label: 'M5 Cách dùng', short: 'M5', suggestBank: 'm5_107', suggestLabel: '🎯 107 Cách Dùng Từ M5' },
    bunpou_1: { label: 'NP M1 Ngữ pháp', short: 'NP1', suggestBank: 'gp_m1', suggestLabel: '📘 Ngữ Pháp M1 (273 câu)' },
    bunpou_2: { label: 'NP M2 Dấu sao ★', short: 'NP★', suggestBank: 'gp_star', suggestLabel: '⭐ Dấu Sao ★ (99 câu)' },
    bunpou_3: { label: 'NP M3 Đoạn văn', short: 'NP3', suggestBank: 'gp_m3', suggestLabel: '📄 Đoạn Văn M3 (141 câu)' },
    dokkai_4: { label: 'ĐH M4 Đoạn ngắn', short: 'ĐH4', suggestBank: null, suggestLabel: 'Luyện chuyên sâu Đọc ngắn' },
    dokkai_5: { label: 'ĐH M5 Đoạn trung', short: 'ĐH5', suggestBank: null, suggestLabel: 'Luyện chuyên sâu Đọc trung' },
    dokkai_6: { label: 'ĐH M6 Đoạn dài', short: 'ĐH6', suggestBank: null, suggestLabel: 'Luyện chuyên sâu Đọc dài' },
    dokkai_7: { label: 'ĐH M7 Tờ rơi', short: 'ĐH7', suggestBank: null, suggestLabel: 'Luyện chuyên sâu Tờ rơi' }
};

function computeJlptN3Estimate(items, answers) {
    let mgOk = 0, mgTot = 0;
    let bpOk = 0, bpTot = 0;
    let dokOk = 0, dokTot = 0;
    let dokWOk = 0, dokWTot = 0;
    const dokWeights = { 4: 1.0, 5: 1.25, 6: 1.5, 7: 1.25 };
    const mMap = {};

    items.forEach((item, i) => {
        const q = item.orig;
        const ok = answers[i] === item.correctIdx;
        const mKey = `${q.section}_${q.mondai}`;
        if (!mMap[mKey]) mMap[mKey] = { key: mKey, ok: 0, tot: 0 };
        mMap[mKey].tot++;
        if (ok) mMap[mKey].ok++;

        if (q.section === 'moji_goi') {
            mgTot++;
            if (ok) mgOk++;
        } else if (q.section === 'bunpou') {
            bpTot++;
            if (ok) bpOk++;
        } else if (q.section === 'dokkai') {
            const w = dokWeights[q.mondai] || 1.0;
            dokTot++;
            dokWTot += w;
            if (ok) {
                dokOk++;
                dokWOk += w;
            }
        }
    });

    const orderedKeys = Object.keys(PAST_MONDAI_META);
    const mondaiBreakdown = orderedKeys
        .filter(k => mMap[k] && mMap[k].tot > 0)
        .map(k => {
            const st = mMap[k];
            const meta = PAST_MONDAI_META[k];
            return {
                key: k,
                label: meta.label,
                short: meta.short,
                ok: st.ok,
                tot: st.tot,
                pct: Math.round((st.ok / st.tot) * 100),
                suggestBank: meta.suggestBank,
                suggestLabel: meta.suggestLabel
            };
        });

    let langScore = null;
    let isPartialLang = false;
    if (mgTot > 0 && bpTot > 0) {
        langScore = Math.round(((mgOk / mgTot) * 0.55 + (bpOk / bpTot) * 0.45) * 60);
    } else if (mgTot > 0) {
        langScore = Math.round((mgOk / mgTot) * 60);
        isPartialLang = true;
    } else if (bpTot > 0) {
        langScore = Math.round((bpOk / bpTot) * 60);
        isPartialLang = true;
    }

    const readScore = dokWTot > 0 ? Math.round((dokWOk / dokWTot) * 60) : null;
    const total120 = (langScore !== null && readScore !== null) ? (langScore + readScore) : null;
    const langCritical = langScore !== null && langScore < 19;
    const readCritical = readScore !== null && readScore < 19;

    return {
        mgOk, mgTot, bpOk, bpTot, dokOk, dokTot,
        dokRatio: dokWTot > 0 ? (dokWOk / dokWTot) : null,
        langScore, isPartialLang, readScore, total120,
        langCritical, readCritical,
        mondaiBreakdown
    };
}

function getExamAggregateScore(examId) {
    const st = (historyData.examStats || {})[examId];
    if (!st) return null;
    const mg = st.moji_goi || null;
    const bp = st.bunpou || null;
    const dk = st.dokkai || null;

    let langScore = null;
    if (mg && bp) {
        langScore = Math.round(((mg.best / mg.total) * 0.55 + (bp.best / bp.total) * 0.45) * 60);
    } else if (mg) {
        langScore = Math.round((mg.best / mg.total) * 60);
    } else if (bp) {
        langScore = Math.round((bp.best / bp.total) * 60);
    }
    const readScore = dk ? (typeof dk.bestReadScore === 'number' ? dk.bestReadScore : Math.round((dk.best / dk.total) * 60)) : null;
    const total120 = (langScore !== null && readScore !== null && mg && bp && dk) ? (langScore + readScore) : null;
    return {
        mg, bp, dk, langScore, readScore, total120,
        anyCritical: (langScore !== null && langScore < 19) || (readScore !== null && readScore < 19)
    };
}

function renderPastExamsLobby(container, sidebarChecklist) {
    const isDrill = pastLaunchMode === 'drill';
    const modeIcon = isDrill ? 'fa-bolt' : 'fa-stopwatch';
    const modeTag = isDrill ? '⚡ Học Chữa Ngay' : '⏱️ Thi Thử Bấm Giờ';
    const mainBtnCls = isDrill ? 'btn-pill ok' : 'btn-pill primary';
    const splitPrefix = isDrill ? '⚡ Chữa' : '⏱️ Thi';

    PAST_EXAM_CATALOG.forEach(meta => {
        const loadedExam = getPastExamById(meta.exam_id);
        const card = document.createElement('div');
        card.className = 'session-card';

        if (!loadedExam) {
            card.style.opacity = '0.68';
            card.innerHTML = `
                <div class="session-top">
                    <div>
                        <span class="shift-badge" style="background: var(--hub-surface); color: var(--hub-text-sub);"><i class="fa-solid fa-hourglass-half"></i> Đợt sau • Sắp nạp</span>
                        <h4 style="font-size: 17.5px; color: var(--hub-text); margin-top: 7px;">${meta.label}</h4>
                        <span style="font-size: 12.5px; color: var(--hub-text-sub);">${meta.note}</span>
                    </div>
                    <span class="score-badge">⏳ Sắp nạp</span>
                </div>
            `;
            container.appendChild(card);

            const sItem = document.createElement('div');
            sItem.style.cssText = 'padding:9px 11px; border-radius:9px; background:var(--hub-surface-2); border-left:3px solid var(--hub-border-strong); opacity:0.7;';
            sItem.innerHTML = `<strong style="color: var(--hub-text);">⏳ ${meta.short_label}:</strong> Sắp nạp`;
            sidebarChecklist.appendChild(sItem);
            return;
        }

        const c = loadedExam.counts;
        const agg = getExamAggregateScore(meta.exam_id);
        const examMistakes = loadedExam.questions.filter(q => mistakesMap[q.id]).length;
        const examTouched = loadedExam.questions.filter(q => touchedSet.has(q.id)).length;
        const ca2Count = c.bunpou + c.dokkai;

        let topBadge = '<span class="score-badge">Chưa thi</span>';
        if (agg && agg.total120 !== null) {
            const cls = agg.anyCritical ? '' : (agg.total120 >= 70 ? 'passed' : '');
            const style = agg.anyCritical ? 'background:var(--hub-danger-bg);color:var(--hub-danger-text);border-color:var(--hub-danger-border);' : '';
            topBadge = `<span class="score-badge ${cls}" style="${style}">${agg.anyCritical ? '⚠️ Liệt • ' : (agg.total120 >= 70 ? '✅ ' : '')}Ước lượng: ${agg.total120}/120</span>`;
        } else if (agg && (agg.mg || agg.bp || agg.dk)) {
            topBadge = `<span class="score-badge">Đã quét ${examTouched}/${c.total} câu</span>`;
        }

        const mgStr = agg && agg.mg ? `${agg.mg.best}/${agg.mg.total}` : `--/${c.moji_goi}`;
        const bpStr = agg && agg.bp ? `${agg.bp.best}/${agg.bp.total}` : `--/${c.bunpou}`;
        const dkStr = agg && agg.dk ? `${agg.dk.best}/${agg.dk.total}` : `--/${c.dokkai}`;

        card.innerHTML = `
            <div class="session-top">
                <div>
                    <span class="shift-badge" style="${isDrill ? 'background:var(--hub-ok-bg);color:var(--hub-ok-text);' : ''}"><i class="fa-solid ${modeIcon}"></i> Đề Thật • ${modeTag}</span>
                    <h4 style="font-size: 17.5px; color: var(--hub-text); margin-top: 7px;">${loadedExam.label}</h4>
                    <span style="font-size: 12.5px; color: var(--hub-text-sub);">${c.total} câu (TV: ${c.moji_goi} • NP: ${c.bunpou} • ĐH: ${c.dokkai} — Bỏ Nghe)</span>
                </div>
                ${topBadge}
            </div>
            <div style="font-size: 12.5px; color: var(--hub-text-body); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 6px;">
                <span>Điểm cao nhất: <strong>TV ${mgStr}</strong> • <strong>NP ${bpStr}</strong> • <strong>ĐH ${dkStr}</strong></span>
                <span style="color: ${examMistakes > 0 ? 'var(--hub-danger-text)' : 'var(--hub-ok-text)'}; font-weight: 600;">
                    ${examMistakes > 0 ? `⚠️ ${examMistakes} câu sai` : '✨ Sạch lỗi'}
                </span>
            </div>
            <div style="font-size: 11.5px; font-weight: 700; color: var(--hub-text-sub); text-transform: uppercase;">${isDrill ? '⚡ Chữa ngay theo 2 Ca JLPT:' : '⏱️ Thi thử chuẩn phòng thi (2 Ca):'}</div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <button class="${mainBtnCls}" style="flex: 1; min-width: 145px;" onclick="launchPastExam('${meta.exam_id}', 'shift1')">
                    <i class="fa-solid ${modeIcon}"></i> ${isDrill ? 'Chữa Ca 1' : 'Ca 1'}: Từ vựng (${c.moji_goi}c${isDrill ? '' : ' • 30p'})
                </button>
                <button class="${mainBtnCls}" style="flex: 1; min-width: 175px;" onclick="launchPastExam('${meta.exam_id}', 'shift2')">
                    <i class="fa-solid ${modeIcon}"></i> ${isDrill ? 'Chữa Ca 2' : 'Ca 2'}: NP + ĐH (${ca2Count}c${isDrill ? '' : ' • 70p'})
                </button>
            </div>
            <div class="past-split-row">
                <button class="btn-pill" onclick="launchPastExam('${meta.exam_id}', 'moji_goi')" title="Làm riêng Từ vựng (${modeTag})">${splitPrefix} Từ vựng${isDrill ? '' : ' (30p)'}</button>
                <button class="btn-pill" onclick="launchPastExam('${meta.exam_id}', 'bunpou')" title="Làm riêng Ngữ pháp (${modeTag})">${splitPrefix} Ngữ pháp${isDrill ? '' : ' (25p)'}</button>
                <button class="btn-pill" onclick="launchPastExam('${meta.exam_id}', 'dokkai')" title="Làm riêng Đọc hiểu Split-Screen (${modeTag})">${splitPrefix} Đọc hiểu${isDrill ? '' : ' (45p)'}</button>
            </div>
        `;
        container.appendChild(card);

        const sItem = document.createElement('div');
        const passed = agg && agg.total120 !== null && !agg.anyCritical && agg.total120 >= 70;
        sItem.style.cssText = `padding:9px 11px; border-radius:9px; background:var(--hub-surface-2); border-left:3px solid ${passed ? 'var(--hub-ok-text)' : (agg ? 'var(--hub-warn-text)' : 'var(--primary)')};`;
        sItem.innerHTML = `<strong style="color: var(--hub-text);">${passed ? '✅' : '📜'} ${loadedExam.short_label}:</strong> ${agg && agg.total120 !== null ? `${agg.total120}/120 ước lượng` : `${examTouched}/${c.total} câu đã làm`}`;
        sidebarChecklist.appendChild(sItem);
    });
}

function launchPastExam(examId, partType, overrideMode = null) {
    const exam = getPastExamById(examId);
    if (!exam) return;
    const mode = overrideMode || pastLaunchMode;
    let pool = [];
    let partTitle = '';
    let customSeconds = 1800;

    if (partType === 'shift1' || partType === 'moji_goi') {
        pool = exam.questions.filter(q => q.section === 'moji_goi');
        partTitle = partType === 'shift1' ? 'Ca 1: Từ vựng (30p)' : 'Tách lẻ: Từ vựng (30p)';
        customSeconds = 30 * 60;
    } else if (partType === 'shift2') {
        pool = exam.questions.filter(q => q.section === 'bunpou' || q.section === 'dokkai');
        partTitle = 'Ca 2: Ngữ pháp + Đọc hiểu (70p)';
        customSeconds = 70 * 60;
    } else if (partType === 'bunpou') {
        pool = exam.questions.filter(q => q.section === 'bunpou');
        partTitle = 'Tách lẻ: Ngữ pháp (25p)';
        customSeconds = 25 * 60;
    } else if (partType === 'dokkai') {
        pool = exam.questions.filter(q => q.section === 'dokkai');
        partTitle = 'Tách lẻ: Đọc hiểu (45p)';
        customSeconds = 45 * 60;
    }

    if (pool.length === 0) return;

    const antiRote = getAntiRoteSettings({ hideCtx: false, reverseMode: false });
    startQuizEngine({
        bankId: 'pastN3',
        title: `${exam.short_label} • ${partTitle}`,
        sessionNum: examId,
        pastExamId: examId,
        pastPartType: partType,
        expectedFullCount: pool.length,
        customSeconds,
        pool,
        mode,
        isRevenge: false,
        antiRote
    });
}

// ==========================================
// 4. AUTO-SAVE, RESUME, HISTORY & BACKUP
// ==========================================
function saveInProgressSession() {
    if (!activeSession || activeSession.finished) return;
    try {
        const key = getBankCfg(activeSession.bankId).keys.inprogress;
        const snapshot = {
            bankId: activeSession.bankId,
            title: activeSession.title,
            sessionNum: activeSession.sessionNum,
            pastExamId: activeSession.pastExamId || null,
            pastPartType: activeSession.pastPartType || null,
            mode: activeSession.mode,
            isRevenge: activeSession.isRevenge,
            antiRote: activeSession.antiRote,
            items: activeSession.items.map(it => ({
                qid: it.orig.id,
                bankId: it.bankId,
                effectiveMondai: it.effectiveMondai,
                isReversed: it.isReversed,
                displayHtml: it.displayHtml,
                displayOnlyWord: it.displayOnlyWord,
                options: it.options,
                optionsVi: it.optionsVi,
                optionsKata: it.optionsKata || null,
                correctIdx: it.correctIdx
            })),
            answers: activeSession.answers,
            flags: activeSession.flags,
            revealedCtx: activeSession.revealedCtx,
            currentIndex: activeSession.currentIndex,
            timerSecondsLeft: activeSession.timerSecondsLeft,
            savedAt: new Date().toLocaleString('vi-VN')
        };
        localStorage.setItem(key, JSON.stringify(snapshot));
    } catch (e) {}
}

function clearInProgressSession(bankId = activeBank) {
    localStorage.removeItem(getBankCfg(bankId).keys.inprogress);
}

function renderResumeBanner() {
    const banner = document.getElementById('resume-banner');
    if (!banner) return;
    let snap = null;
    try { snap = JSON.parse(localStorage.getItem(getBankCfg().keys.inprogress)); } catch (e) {}
    if (!snap || !Array.isArray(snap.items) || snap.items.length === 0) {
        banner.style.display = 'none';
        return;
    }
    const doneCnt = (snap.answers || []).filter(a => a !== null).length;
    document.getElementById('resume-banner-desc').textContent =
        `${snap.title} • Đã làm ${doneCnt}/${snap.items.length} câu (Lưu lúc ${snap.savedAt || 'gần đây'})`;
    banner.style.display = 'block';
}

function resumeSavedSession() {
    const bankId = activeBank;
    let snap = null;
    try { snap = JSON.parse(localStorage.getItem(getBankCfg(bankId).keys.inprogress)); } catch (e) {}
    if (!snap || !Array.isArray(snap.items)) return;

    const dataset = getBankDataset(bankId);
    const restoredItems = snap.items.map(it => {
        const orig = dataset.find(x => x.id === it.qid);
        if (!orig) return null;
        return { ...it, bankId, orig };
    }).filter(Boolean);

    if (restoredItems.length === 0) {
        clearInProgressSession(bankId);
        return;
    }

    activeSession = {
        bankId,
        title: snap.title,
        sessionNum: snap.sessionNum,
        pastExamId: snap.pastExamId || null,
        pastPartType: snap.pastPartType || null,
        sourceConfig: { bankId, title: snap.title, sessionNum: snap.sessionNum, pastExamId: snap.pastExamId || null, pastPartType: snap.pastPartType || null, pool: restoredItems.map(i => i.orig), mode: snap.mode, isRevenge: snap.isRevenge, antiRote: snap.antiRote },
        mode: snap.mode,
        isRevenge: snap.isRevenge,
        antiRote: snap.antiRote,
        items: restoredItems,
        answers: snap.answers,
        flags: snap.flags,
        revealedCtx: snap.revealedCtx || new Array(restoredItems.length).fill(false),
        currentIndex: Math.min(snap.currentIndex || 0, restoredItems.length - 1),
        startedAt: Date.now(),
        timerSecondsLeft: snap.timerSecondsLeft || 600,
        timerInterval: null,
        finished: false
    };

    showMainView('exam');
    setupActiveExamHeader();
    renderQuestionStage();
    renderNavigatorGrid();
    if (activeSession.mode === 'exam') startExamTimer();
}

function renderHistoryLog() {
    const container = document.getElementById('history-log-container');
    const cntEl = document.getElementById('history-log-count');
    if (!container) return;
    const logs = historyData.attemptsLog || [];
    if (cntEl) cntEl.textContent = logs.length;

    if (logs.length === 0) {
        container.innerHTML = `<div style="font-size: 13px; color: var(--hub-text-sub); padding: 12px; text-align: center; background: var(--hub-surface-2); border-radius: 10px;">Chưa có lịch sử bài nộp nào cho kho ${getBankCfg().name}. Hoàn thành Ca 1 để lưu cột mốc đầu tiên nhé!</div>`;
        return;
    }

    container.innerHTML = '';
    logs.slice(0, 30).forEach(log => {
        const ok = log.pct >= 85;
        const row = document.createElement('div');
        row.style.cssText = 'display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; padding:10px 14px; border-radius:10px; background:var(--hub-surface-2); border:1px solid var(--hub-border);';
        row.innerHTML = `
            <div>
                <strong style="font-size: 14px; color: var(--hub-text);">${log.title}</strong>
                <span class="q-tag" style="margin-left: 6px; font-size: 11px;">${log.modeLabel}</span>
                <div style="font-size: 12px; color: var(--hub-text-sub); margin-top: 3px;">
                    🕒 ${log.timestamp} • ${log.breakdown || `M1: ${log.m1} • M2: ${log.m2}`} • Thời gian: ${log.duration}
                </div>
            </div>
            <span class="score-badge ${ok ? 'passed' : ''}" style="font-size: 13.5px;">
                ${log.score}/${log.total} (${log.pct}%)
            </span>
        `;
        container.appendChild(row);
    });
}

function getAntiRoteSettings(forceOverrides = {}) {
    return {
        shuffleQ: document.getElementById('opt-shuffle-questions').checked,
        shuffleOpt: document.getElementById('opt-shuffle-answers').checked,
        hideCtx: document.getElementById('opt-hide-context').checked,
        reverseMode: document.getElementById('opt-reverse-mode').checked,
        ...forceOverrides
    };
}

function setupLobbyEvents() {
    document.getElementById('quick-revenge-btn').addEventListener('click', () => launchRevengeSession('drill', {}));
    document.getElementById('start-revenge-drill-btn').addEventListener('click', () => launchRevengeSession('drill', { shuffleQ: true, shuffleOpt: true }));
    document.getElementById('start-revenge-hard-btn').addEventListener('click', () => launchRevengeSession('drill', { shuffleQ: true, shuffleOpt: true, hideCtx: true, reverseMode: true }));

    document.getElementById('start-custom-drill-btn').addEventListener('click', () => launchCustom('drill'));
    document.getElementById('start-custom-exam-btn').addEventListener('click', () => launchCustom('exam'));

    document.getElementById('copy-kanji-report-btn').addEventListener('click', () => {
        const report = buildAntigravityReport();
        navigator.clipboard.writeText(report).then(() => {
            alert(`📋 Đã copy Báo cáo ${getBankCfg().name} & Danh sách Lỗ hổng! Hãy Paste (Ctrl+V) vào khung chat Antigravity để Sensei phân tích giúp bạn nhé.`);
        });
    });

    const resumeBtn = document.getElementById('resume-exam-btn');
    const discardBtn = document.getElementById('discard-resume-btn');
    if (resumeBtn) resumeBtn.addEventListener('click', () => resumeSavedSession());
    if (discardBtn) discardBtn.addEventListener('click', () => {
        if (confirm('Xóa bài đang làm dở này?')) {
            clearInProgressSession();
            renderResumeBanner();
        }
    });

    const exportBtn = document.getElementById('export-backup-btn');
    const importBtn = document.getElementById('import-backup-btn');
    const importInput = document.getElementById('import-backup-input');

    if (exportBtn) {
        exportBtn.addEventListener('click', () => {
            const payload = { version: 2, exportedAt: new Date().toISOString(), data: {} };
            ALL_BACKUP_KEYS.forEach(k => {
                const v = localStorage.getItem(k);
                if (v !== null) payload.data[k] = v;
            });
            const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `jlpt_n3_backup_${getTodayStr()}.json`;
            a.click();
            URL.revokeObjectURL(url);
        });
    }

    if (importBtn && importInput) {
        importBtn.addEventListener('click', () => importInput.click());
        importInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (ev) => {
                try {
                    const parsed = JSON.parse(ev.target.result);
                    const map = parsed.data || parsed;
                    let restored = 0;
                    ALL_BACKUP_KEYS.forEach(k => {
                        if (typeof map[k] === 'string') {
                            localStorage.setItem(k, map[k]);
                            restored++;
                        }
                    });
                    loadBankState();
                    renderLobby();
                    alert(`✅ Đã khôi phục thành công ${restored} nhóm dữ liệu (6 Bộ Từ Vựng–Kanji, 3 Bộ Ngữ Pháp Thực Chiến Taisaku, Đề Thi N3 2021–2023, Kho Phục Thù, Ngữ pháp, Hán tự, Từ vựng)!`);
                } catch (err) {
                    alert('❌ File sao lưu không hợp lệ!');
                }
                importInput.value = '';
            };
            reader.readAsText(file);
        });
    }
}

// ==========================================
// 5. LAUNCHING EXAM / DRILL / REVENGE
// ==========================================
function launchSession(sessionNum, mode) {
    const cfg = getBankCfg();
    const shiftMeta = cfg.shifts.find(s => s.session === sessionNum);
    const pool = getBankDataset().filter(q => getItemSessionNum(q) === sessionNum);
    startQuizEngine({
        bankId: activeBank,
        title: shiftMeta ? shiftMeta.title : `Buổi ${sessionNum}`,
        sessionNum,
        expectedFullCount: shiftMeta ? shiftMeta.count : pool.length,
        pool,
        mode,
        isRevenge: false,
        antiRote: getAntiRoteSettings()
    });
}

function launchCustom(mode) {
    const sVal = document.getElementById('custom-session-select').value;
    const mVal = activeBank !== 'syn80' ? document.getElementById('custom-mondai-select').value : 'all';
    const cntVal = parseInt(document.getElementById('custom-count-select').value, 10);

    let pool = [...getBankDataset()];
    if (sVal !== 'all') {
        if (activeBank === 'pastN3') pool = pool.filter(q => q.exam_id === sVal);
        else if (activeBank === 'kanji240' && sVal === 'extra') pool = pool.filter(q => q.session >= 5);
        else if ((activeBank === 'm5_107' || activeBank === 'm3_191') && (sVal === 'core' || sVal === 'full')) pool = pool.filter(q => q.tier === sVal);
        else pool = pool.filter(q => getItemSessionNum(q) === parseInt(sVal, 10));
    }
    if (mVal !== 'all') {
        if (activeBank === 'kanji240') {
            if (mVal === 'both') pool = pool.filter(q => q.dir_type === 'both');
            else if (mVal === 'ge2') pool = pool.filter(q => (q.freq_count_m12 || 0) >= 2);
            else pool = pool.filter(q => q.mondai === parseInt(mVal, 10));
        } else if (activeBank === 'm5_107') {
            pool = pool.filter(q => (q.pos || '').startsWith(mVal));
        } else if (activeBank === 'kata78' || activeBank === 'hira35' || activeBank === 'm3_191') {
            pool = pool.filter(q => q.category === mVal);
        } else if (activeBank === 'gp_m1' || activeBank === 'gp_star') {
            if (mVal === 'hard') pool = pool.filter(q => (q.level_star || '').length >= 2);
            else if (mVal === 'base') pool = pool.filter(q => (q.level_star || '').length < 2);
        } else if (activeBank === 'gp_m3') {
            if (mVal === 'lientu') pool = pool.filter(q => (q.topic || '').includes('Liên từ'));
            else if (mVal === 'chithitu') pool = pool.filter(q => (q.topic || '').includes('Chỉ thị từ'));
            else if (mVal === 'tonghop') pool = pool.filter(q => q.part >= 2);
        } else if (activeBank === 'pastN3') {
            if (mVal === 'moji_goi') pool = pool.filter(q => q.section === 'moji_goi');
            else if (mVal === 'moji_m5') pool = pool.filter(q => q.section === 'moji_goi' && q.mondai === 5);
            else if (mVal === 'bunpou') pool = pool.filter(q => q.section === 'bunpou');
            else if (mVal === 'bunpou_star') pool = pool.filter(q => q.is_star);
            else if (mVal === 'bunpou_m3') pool = pool.filter(q => q.section === 'bunpou' && q.mondai === 3);
            else if (mVal === 'dokkai') pool = pool.filter(q => q.section === 'dokkai');
            else if (mVal === 'dokkai_m4') pool = pool.filter(q => q.section === 'dokkai' && q.mondai === 4);
            else if (mVal === 'dokkai_m56') pool = pool.filter(q => q.section === 'dokkai' && (q.mondai === 5 || q.mondai === 6));
            else if (mVal === 'dokkai_m7') pool = pool.filter(q => q.section === 'dokkai' && q.mondai === 7);
        }
    }

    if (pool.length === 0) {
        alert('Không tìm thấy câu hỏi phù hợp bộ lọc này. Hãy chọn lại nhé!');
        return;
    }

    const antiRote = getAntiRoteSettings((activeBank === 'pastN3' || isGrammarBank(activeBank)) ? { hideCtx: false, reverseMode: false } : {});
    if (antiRote.shuffleQ) {
        pool = activeBank === 'gp_m3' ? shuffleByPassageGroup(pool) : fisherYatesShuffle(pool);
    }
    pool = pool.slice(0, Math.min(cntVal, pool.length));

    const prefix = activeBank === 'pastN3'
        ? (sVal === 'all' ? 'Chuyên sâu Đề Thi N3' : `${getPastExamShortLabel(sVal)} Chuyên sâu`)
        : (activeBank === 'gp_m1'
            ? (sVal === 'all' ? 'Tổng hợp Ngữ Pháp M1' : `Ca ${sVal} Ngữ Pháp M1`)
            : (activeBank === 'gp_star'
                ? (sVal === 'all' ? 'Tổng hợp Dấu Sao ★' : `Ca ${sVal} Dấu Sao ★`)
                : (activeBank === 'gp_m3'
                    ? (sVal === 'all' ? 'Tổng hợp Đoạn Văn M3' : `Ca ${sVal} Đoạn Văn M3`)
                    : (activeBank === 'm3_191'
                        ? (sVal === 'core' ? '⭐ Trọng Tâm Mondai 3' : (sVal === 'full' ? '🛡️ Phủ Kín Mondai 3' : (sVal === 'all' ? 'Tổng hợp 191 Mondai 3' : `Bài ${sVal} Mondai 3`)))
                        : (activeBank === 'm5_107'
                            ? (sVal === 'core' ? '⭐ Trọng Tâm Mondai 5' : (sVal === 'full' ? '🛡️ Phủ Kín Mondai 5' : (sVal === 'all' ? 'Tổng hợp 107 Mondai 5' : `Bài ${sVal} Mondai 5`)))
                            : (activeBank === 'hira35'
                                ? (sVal === 'all' ? 'Tổng hợp Hiragana & Từ Láy' : `Bài ${sVal} Hiragana`)
                                : (activeBank === 'kata78'
                                    ? (sVal === 'all' ? 'Tổng hợp Katakana N3' : `Bài ${sVal} Katakana`)
                                    : (activeBank === 'syn80'
                                        ? (sVal === 'all' ? 'Tổng hợp Đồng Nghĩa' : `Bài ${sVal} Đồng Nghĩa`)
                                        : (sVal === 'extra' ? '112 Kanji Mới (B5–B6)' : (sVal === 'all' ? 'Tổng hợp 352 Kanji' : `Buổi ${sVal}`))))))))));
    const specialVals = ['all', 'extra', 'core', 'full'];
    startQuizEngine({
        bankId: activeBank,
        title: `${prefix} • ${pool.length} câu`,
        sessionNum: specialVals.includes(sVal) ? null : (activeBank === 'pastN3' ? sVal : parseInt(sVal, 10)),
        expectedFullCount: -1,
        pool,
        mode,
        isRevenge: false,
        antiRote,
        alreadyShuffled: true
    });
}

function shuffleByPassageGroup(pool) {
    const groups = new Map();
    pool.forEach(q => {
        const key = q.passage_id || q.id;
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push(q);
    });
    const keys = fisherYatesShuffle(Array.from(groups.keys()));
    return keys.flatMap(k => groups.get(k));
}

function launchRevengeSession(mode, forceAntiRote = {}, subsetIds = null) {
    const targetIds = subsetIds || Object.keys(mistakesMap);
    const pool = getBankDataset().filter(q => targetIds.includes(q.id));
    if (pool.length === 0) {
        alert(`🎉 Kho Phục Thù của ${getBankCfg().name} đang trống! Bạn chưa có câu sai hay câu gắn cờ nào cần ôn lại.`);
        return;
    }
    const isPast = activeBank === 'pastN3';
    const isGp = isGrammarBank(activeBank);
    const antiRote = getAntiRoteSettings((isPast || isGp)
        ? { shuffleQ: activeBank === 'gp_m1' || activeBank === 'gp_star', shuffleOpt: true, hideCtx: false, reverseMode: false }
        : { shuffleQ: true, shuffleOpt: true, ...forceAntiRote }
    );
    const revLabel = isPast
        ? 'Đề Thi N3'
        : (activeBank === 'gp_m1' ? 'Ngữ Pháp M1' : (activeBank === 'gp_star' ? 'Dấu Sao ★' : (activeBank === 'gp_m3' ? 'Đoạn Văn M3' : (activeBank === 'm3_191' ? 'Mondai 3' : (activeBank === 'm5_107' ? 'Mondai 5' : (activeBank === 'hira35' ? 'Hiragana & Từ Láy' : (activeBank === 'kata78' ? 'Katakana N3' : (activeBank === 'syn80' ? 'Đồng Nghĩa' : 'Kanji'))))))));
    startQuizEngine({
        bankId: activeBank,
        title: `🔥 Phục Thù ${revLabel} (${pool.length} câu)`,
        sessionNum: null,
        expectedFullCount: -1,
        pool,
        mode,
        isRevenge: true,
        antiRote
    });
}

function startQuizEngine(cfg) {
    const bankId = cfg.bankId || activeBank;
    let orderedPool = cfg.alreadyShuffled
        ? [...cfg.pool]
        : (cfg.antiRote.shuffleQ
            ? (bankId === 'gp_m3' ? shuffleByPassageGroup(cfg.pool) : fisherYatesShuffle(cfg.pool))
            : [...cfg.pool]);
    const items = orderedPool.map(q => buildPreparedQuestion(q, cfg.antiRote, bankId));
    const totalSeconds = cfg.customSeconds || Math.max(120, items.length * getBankCfg(bankId).secPerQuestion);
    lastRenderedPassageId = null;

    activeSession = {
        bankId,
        title: cfg.title,
        sessionNum: cfg.sessionNum,
        pastExamId: cfg.pastExamId || null,
        pastPartType: cfg.pastPartType || null,
        expectedFullCount: cfg.expectedFullCount || -1,
        sourceConfig: cfg,
        mode: cfg.mode,
        isRevenge: cfg.isRevenge,
        antiRote: cfg.antiRote,
        items,
        answers: new Array(items.length).fill(null),
        flags: new Array(items.length).fill(false),
        revealedCtx: new Array(items.length).fill(false),
        currentIndex: 0,
        startedAt: Date.now(),
        timerSecondsLeft: totalSeconds,
        timerInterval: null,
        finished: false
    };

    showMainView('exam');
    setupActiveExamHeader();
    renderQuestionStage();
    renderNavigatorGrid();
    saveInProgressSession();

    if (cfg.mode === 'exam') startExamTimer();
}

function setupActiveExamHeader() {
    document.getElementById('exam-title-lbl').textContent = activeSession.title;
    document.getElementById('exam-mode-badge').textContent = activeSession.isRevenge
        ? '🔥 Phục Thù [2/2]'
        : (activeSession.mode === 'exam' ? '⏱️ Thi Thử Bấm Giờ' : '⚡ Luyện Nhanh Chữa Ngay');

    const badgesEl = document.getElementById('active-antirote-badges');
    const tags = [];
    if (activeSession.antiRote.shuffleQ) tags.push('🔀 Xáo câu');
    if (activeSession.antiRote.shuffleOpt) tags.push('🎲 Xáo 1–4');
    if (activeSession.antiRote.hideCtx) tags.push('🙈 Ẩn câu');
    if (activeSession.antiRote.reverseMode) {
        tags.push(
            activeSession.bankId === 'm3_191'
                ? '🔄 Đảo M3→Nghĩa'
                : (activeSession.bankId === 'm5_107'
                    ? '🔄 Đảo M5→Nghĩa'
                    : (activeSession.bankId === 'hira35'
                        ? '🔄 Đảo Hira→Nghĩa'
                        : (activeSession.bankId === 'kata78'
                            ? '🔄 Đảo Kata→Nghĩa'
                            : (activeSession.bankId === 'syn80' ? '🔄 Đảo B→A' : '🔄 Đảo M1↔M2'))))
        );
    }
    badgesEl.innerHTML = tags.map(t => `<span class="q-tag" style="background: var(--hub-surface-2); color: var(--hub-text-body); font-size: 11px;">${t}</span>`).join('');

    const timerBox = document.getElementById('exam-timer-box');
    const liveScore = document.getElementById('drill-live-score');
    if (activeSession.mode === 'exam') {
        timerBox.style.display = 'inline-flex';
        liveScore.style.display = 'none';
        updateTimerUI();
    } else {
        timerBox.style.display = 'none';
        liveScore.style.display = 'inline-flex';
        updateDrillLiveScore();
    }
}

function startExamTimer() {
    if (activeSession.timerInterval) clearInterval(activeSession.timerInterval);
    activeSession.timerInterval = setInterval(() => {
        if (!activeSession || activeSession.finished) return;
        activeSession.timerSecondsLeft -= 1;
        updateTimerUI();
        if (activeSession.timerSecondsLeft <= 0) {
            clearInterval(activeSession.timerInterval);
            finishExamSession(true);
        }
    }, 1000);
}

function updateTimerUI() {
    const sec = Math.max(0, activeSession.timerSecondsLeft);
    const m = String(Math.floor(sec / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    document.getElementById('exam-timer-text').textContent = `${m}:${s}`;
    document.getElementById('exam-timer-box').classList.toggle('urgent', sec <= 60);
}

function updateDrillLiveScore() {
    let ans = 0, ok = 0;
    activeSession.answers.forEach((a, i) => {
        if (a !== null) {
            ans++;
            if (a === activeSession.items[i].correctIdx) ok++;
        }
    });
    document.getElementById('drill-live-correct').textContent = ok;
    document.getElementById('drill-live-answered').textContent = ans;
}

// ==========================================
// 6. QUESTION STAGE & 5-WORD EXPLANATION
// ==========================================
function renderPassagePane(item, isDrill, isAnswered) {
    const ws = document.getElementById('exam-workspace');
    const pane = document.getElementById('passage-pane');
    if (!ws || !pane) return;

    const orig = item.orig;
    const passage = (item.bankId === 'pastN3' || item.bankId === 'gp_m3') ? getPassageForQuestion(orig) : null;

    if (!passage) {
        ws.classList.remove('has-passage');
        pane.style.display = 'none';
        lastRenderedPassageId = null;
        return;
    }

    ws.classList.add('has-passage');
    pane.style.display = 'block';
    document.getElementById('passage-title-lbl').textContent = passage.title || 'Bài đọc';

    const bodyEl = document.getElementById('passage-body-content');
    bodyEl.style.setProperty('--passage-fs', `${passageFontSize}px`);
    if (lastRenderedPassageId !== orig.passage_id) {
        bodyEl.innerHTML = passage.html;
        lastRenderedPassageId = orig.passage_id;
        pane.scrollTop = 0;
    }

    // Highlight active anchor(s) for current question
    bodyEl.querySelectorAll('.p-anchor').forEach(el => el.classList.remove('active-anchor'));
    const activeAnchors = bodyEl.querySelectorAll(`.p-anchor[data-qid="${orig.id}"]`);
    if (activeAnchors.length > 0) {
        activeAnchors.forEach(el => el.classList.add('active-anchor'));
        try {
            activeAnchors[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
        } catch (e) {}
    }

    const sumBox = document.getElementById('passage-summary-box');
    if (sumBox) {
        if (isDrill && isAnswered && passage.summary_vi) {
            sumBox.style.display = 'block';
            sumBox.innerHTML = `<strong>📖 Tóm tắt mạch bài:</strong> ${passage.summary_vi}`;
        } else {
            sumBox.style.display = 'none';
            sumBox.innerHTML = '';
        }
    }
}

function renderQuestionStage() {
    const idx = activeSession.currentIndex;
    const item = activeSession.items[idx];
    const orig = item.orig;
    const isSyn = item.bankId === 'syn80';
    const isKata = item.bankId === 'kata78';
    const isHira = item.bankId === 'hira35';
    const isM3 = item.bankId === 'm3_191';
    const isM5 = item.bankId === 'm5_107';
    const isGpM1 = item.bankId === 'gp_m1';
    const isGpStar = item.bankId === 'gp_star';
    const isGpM3 = item.bankId === 'gp_m3';
    const isGp = isGpM1 || isGpStar || isGpM3;
    const isPast = item.bankId === 'pastN3';
    const chosen = activeSession.answers[idx];
    const isAnswered = chosen !== null;
    const isDrill = activeSession.mode === 'drill';
    const hideCtxNow = !isPast && !isGp && activeSession.antiRote.hideCtx && !activeSession.revealedCtx[idx] && !(isDrill && isAnswered);

    renderPassagePane(item, isDrill, isAnswered);

    document.getElementById('exam-progress-txt').textContent = `${idx + 1}/${activeSession.items.length}`;
    document.getElementById('q-num-badge').textContent = isPast
        ? `Câu ${idx + 1} / ${activeSession.items.length} (${getPastExamShortLabel(orig.exam_id)} • #${orig.num})`
        : (isGp
            ? `Câu ${idx + 1} / ${activeSession.items.length} (Ca ${orig.part} • #${orig.num}${orig.exam_tag ? ` • ${orig.exam_tag}` : ''})`
            : `Câu ${idx + 1} / ${activeSession.items.length} (Gốc B${getItemSessionNum(orig, item.bankId)}-#${orig.num})`);

    if (isGpM1) {
        document.getElementById('q-mondai-badge').textContent = `NP M1 • ${orig.subtopic || orig.topic}${orig.level_star ? ` • ${orig.level_star}` : ''}`;
        document.getElementById('q-instruction-text').textContent = '文法 問題1：Chọn ngữ pháp / trợ từ / kính ngữ phù hợp nhất điền vào chỗ trống （　　　）.';
    } else if (isGpStar) {
        document.getElementById('q-mondai-badge').textContent = `NP M2 (★) • ${orig.topic}${orig.level_star ? ` • ${orig.level_star}` : ''}`;
        document.getElementById('q-instruction-text').textContent = '文法 問題2 (★)：Áp dụng công thức ghép câu để sắp xếp 4 mảnh và chọn mảnh rơi đúng vị trí dấu sao ★.';
    } else if (isGpM3) {
        document.getElementById('q-mondai-badge').textContent = `NP M3 • ${orig.topic}${orig.level_star ? ` • ${orig.level_star}` : ''}`;
        document.getElementById('q-instruction-text').textContent = '文法 問題3：Đọc mạch bài văn bên trái (chú ý chỗ trống tô sáng) và chọn liên từ / chỉ thị từ / ngữ pháp phù hợp nhất.';
    } else if (isPast) {
        document.getElementById('q-mondai-badge').textContent = orig.mondai_label;
        let inst = 'Chọn đáp án chính xác nhất từ 1・2・3・4.';
        if (orig.section === 'moji_goi') {
            if (orig.mondai === 1) inst = '問題1：Chọn cách đọc Hiragana đúng nhất cho phần gạch chân.';
            else if (orig.mondai === 2) inst = '問題2：Chọn chữ Kanji đúng nhất tương ứng với phần gạch chân.';
            else if (orig.mondai === 3) inst = '問題3：Chọn từ thích hợp nhất điền vào chỗ trống （　　　）.';
            else if (orig.mondai === 4) inst = '問題4：Chọn từ/cụm từ có nghĩa gần nhất với phần gạch chân.';
            else if (orig.mondai === 5) inst = '問題5：Chọn câu sử dụng từ gạch chân tự nhiên và đúng ngữ cảnh nhất.';
        } else if (orig.section === 'bunpou') {
            if (orig.mondai === 1) inst = '文法 問題1：Chọn ngữ pháp đúng nhất điền vào chỗ trống （　　　）.';
            else if (orig.mondai === 2) inst = '文法 問題2 (★)：Sắp xếp 4 mảnh thành câu đúng và chọn mảnh nằm ở vị trí dấu sao ★.';
            else if (orig.mondai === 3) inst = '文法 問題3：Đọc mạch bài văn bên trái và chọn ngữ pháp phù hợp nhất cho chỗ trống đang tô sáng.';
        } else if (orig.section === 'dokkai') {
            inst = orig.mondai === 7
                ? '読解 問題7：Tra cứu thông tin trong tờ rơi/bảng biểu bên trái và chọn đáp án đúng nhất.'
                : `読解 問題${orig.mondai}：Đọc bài văn bên trái (chú ý đoạn tô sáng) và chọn câu trả lời đúng nhất.`;
        }
        document.getElementById('q-instruction-text').textContent = inst;
    } else if (isM3) {
        document.getElementById('q-mondai-badge').textContent = item.isReversed
            ? `Mondai 3 • Đảo chiều (${orig.tier_label})`
            : `Mondai 3 • ${orig.tier_label} • ${orig.category}`;
        document.getElementById('q-instruction-text').textContent = item.isReversed
            ? '🔄 Đảo chiều (Chống vẹt): Chọn NGHĨA TIẾNG VIỆT đúng nhất cho từ gạch chân trong câu.'
            : (hideCtxNow
                ? '🙈 Chế độ Ẩn câu: Đọc nghĩa tiếng Việt bên dưới và chọn đúng TỪ VỰNG N3 tương ứng.'
                : '問題3 (文脈規定)：Chọn từ thích hợp nhất điền vào chỗ trống （　　　） theo đúng ngữ cảnh.');
    } else if (isM5) {
        document.getElementById('q-mondai-badge').textContent = item.isReversed
            ? `Mondai 5 • Đảo chiều (${orig.tier_label})`
            : `Mondai 5 • ${orig.tier_label} • ${orig.pos}`;
        document.getElementById('q-instruction-text').textContent = item.isReversed
            ? '🔄 Đảo chiều (Chống vẹt): Đọc câu ví dụ chuẩn và chọn NGHĨA TIẾNG VIỆT đúng nhất của từ gạch chân.'
            : '問題5 (用法)：Đọc kỹ 4 câu bên dưới và chọn 1 câu sử dụng từ gạch chân ĐÚNG NGỮ CẢNH & CỤM KẾT HỢP nhất.';
    } else if (isHira) {
        document.getElementById('q-mondai-badge').textContent = item.isReversed
            ? 'Hiragana N3 • Đảo chiều (Hira → Nghĩa)'
            : `Mondai 3/4 • ${orig.category}`;
        document.getElementById('q-instruction-text').textContent = item.isReversed
            ? '🔄 Đảo chiều (Chống vẹt): Chọn NGHĨA TIẾNG VIỆT chính xác nhất cho từ Hiragana / từ láy được gạch chân.'
            : (hideCtxNow
                ? '🙈 Chế độ Ẩn câu: Đọc nghĩa tiếng Việt bên dưới và chọn đúng TỪ HIRAGANA / TỪ LÁY tương ứng.'
                : '問題3：Chọn từ Hiragana / từ láy thích hợp nhất để điền vào chỗ trống （　　　）.');
    } else if (isKata) {
        document.getElementById('q-mondai-badge').textContent = item.isReversed
            ? 'Katakana N3 • Đảo chiều (Kata → Nghĩa)'
            : `Mondai 3 • ${orig.category}`;
        document.getElementById('q-instruction-text').textContent = item.isReversed
            ? '🔄 Đảo chiều (Chống vẹt): Chọn NGHĨA TIẾNG VIỆT chính xác nhất cho từ Katakana được gạch chân.'
            : (hideCtxNow
                ? '🙈 Chế độ Ẩn câu: Đọc nghĩa tiếng Việt bên dưới và chọn đúng TỪ KATAKANA tương ứng.'
                : '問題3：Chọn từ Katakana thích hợp nhất để điền vào chỗ trống （　　　）.');
    } else if (isSyn) {
        document.getElementById('q-mondai-badge').textContent = item.isReversed
            ? 'Mondai 4 • Đảo chiều (B → A)'
            : 'Mondai 4 • Từ Đồng Nghĩa (A → B)';
        document.getElementById('q-instruction-text').textContent = item.isReversed
            ? '🔄 Đảo chiều (Chống vẹt): Chọn TỪ VỰNG N3 (A) có nghĩa gần nhất với cụm giải thích gạch chân (B).'
            : '問題4：Chọn từ hoặc cụm từ có ý nghĩa gần nhất với phần gạch chân.';
    } else {
        document.getElementById('q-mondai-badge').textContent = item.effectiveMondai === 1
            ? `Mondai 1 • Đọc Kanji${item.isReversed ? ' (Đảo chiều)' : ''}`
            : `Mondai 2 • Chọn chữ Kanji${item.isReversed ? ' (Đảo chiều)' : ''}`;
        document.getElementById('q-instruction-text').textContent = item.effectiveMondai === 1
            ? '問題1：Chọn cách đọc Hiragana chính xác nhất cho phần gạch chân.'
            : '問題2：Chọn chữ Kanji chính xác nhất tương ứng với phần gạch chân.';
    }

    const revBadge = document.getElementById('q-revenge-badge');
    const mEntry = mistakesMap[orig.id];
    if (mEntry) {
        revBadge.style.display = 'inline-flex';
        revBadge.textContent = `🔥 Phục thù [${mEntry.streak || 0}/2]`;
    } else {
        revBadge.style.display = 'none';
    }

    const flagBtn = document.getElementById('q-flag-btn');
    const isFlagged = activeSession.flags[idx];
    flagBtn.classList.toggle('warn', isFlagged);
    flagBtn.innerHTML = isFlagged
        ? '<i class="fa-solid fa-flag"></i> Đã gắn cờ 🚩'
        : '<i class="fa-regular fa-flag"></i> Cờ 🚩';

    const sentBox = document.getElementById('q-sentence-display');
    const revealBtn = document.getElementById('q-reveal-ctx-btn');

    if (hideCtxNow) {
        if ((isKata || isHira || isM3) && !item.isReversed) {
            sentBox.className = 'q-sentence only-meaning';
            const kindTxt = isM3 ? 'từ vựng Mondai 3' : (isHira ? 'Hiragana / từ láy' : 'Katakana');
            sentBox.innerHTML = `<div style="font-size: 13px; color: var(--hub-text-sub); font-weight: 600; margin-bottom: 8px;">Chọn ${kindTxt} tương ứng với nghĩa:</div><span class="q-target">${item.displayOnlyWord}</span>`;
        } else {
            sentBox.className = 'q-sentence only-word';
            sentBox.innerHTML = `<u class="q-target">${item.displayOnlyWord}</u>`;
        }
        revealBtn.style.display = 'inline-flex';
    } else {
        sentBox.className = 'q-sentence';
        if (((isPast || isGp) && (orig.passage_id || (orig.sentence_html || '').length > 65)) || (isM5 && item.isReversed)) {
            sentBox.style.fontSize = '19px';
            sentBox.style.textAlign = 'left';
            sentBox.style.padding = '16px 18px';
        } else {
            sentBox.style.fontSize = '';
            sentBox.style.textAlign = '';
            sentBox.style.padding = '';
        }
        sentBox.innerHTML = item.displayHtml;
        revealBtn.style.display = 'none';
    }

    const hintBox = document.getElementById('q-hint-display');
    // Only display genuine non-target JLPT footnotes (prefixed with '＊') before answering — NEVER spoil the tested word!
    if (orig.hint && orig.hint.trim().startsWith('＊') && !hideCtxNow) {
        hintBox.style.display = 'block';
        hintBox.textContent = orig.hint;
    } else {
        hintBox.style.display = 'none';
    }

    const optContainer = document.getElementById('exam-options-container');
    optContainer.innerHTML = '';
    const hasLongOpt = (isM5 && !item.isReversed) || ((isPast || isGp) && item.options.some(o => o.length > 14));
    optContainer.style.gridTemplateColumns = hasLongOpt ? '1fr' : '';

    item.options.forEach((optTxt, optIdx) => {
        const btn = document.createElement('button');
        const compactText = ((isKata || isHira || isM3 || isM5) && item.isReversed) || hasLongOpt;
        btn.className = 'exam-opt-btn' + (compactText ? ' opt-vi-mode' : '');

        if (isDrill && isAnswered) {
            btn.classList.add('locked-opt');
            if (optIdx === item.correctIdx) btn.classList.add('correct');
            else if (optIdx === chosen) btn.classList.add('wrong');
        } else if (chosen === optIdx) {
            btn.classList.add('selected');
        }

        btn.innerHTML = `<span class="opt-key">${optIdx + 1}</span><span>${optTxt}</span>`;
        btn.addEventListener('click', () => handleSelectOption(optIdx));
        optContainer.appendChild(btn);
    });

    const expContainer = document.getElementById('instant-exp-container');
    if (isDrill && isAnswered) {
        expContainer.style.display = 'block';
        expContainer.innerHTML = renderExplanationHTML(item, chosen);
    } else {
        expContainer.style.display = 'none';
        expContainer.innerHTML = '';
    }

    document.getElementById('q-prev-btn').disabled = idx === 0;
    const nextBtn = document.getElementById('q-next-btn');
    nextBtn.innerHTML = idx === activeSession.items.length - 1
        ? '<i class="fa-solid fa-flag-checkered"></i> Hoàn tất & Xem tổng kết'
        : 'Câu tiếp theo <i class="fa-solid fa-chevron-right"></i>';
}

function handleSelectOption(optIdx) {
    if (!activeSession || activeSession.finished) return;
    const idx = activeSession.currentIndex;
    const item = activeSession.items[idx];
    const isDrill = activeSession.mode === 'drill';

    if (isDrill && activeSession.answers[idx] !== null) return;

    activeSession.answers[idx] = optIdx;
    touchedSet.add(item.orig.id);

    if (isDrill) {
        const isCorrect = optIdx === item.correctIdx;
        if (item.effectiveMondai === 1) {
            historyData.m1Total += 1;
            if (isCorrect) historyData.m1Correct += 1;
        } else {
            historyData.m2Total += 1;
            if (isCorrect) historyData.m2Correct += 1;
        }

        if (isCorrect) {
            addHubXP(5);
            if (mistakesMap[item.orig.id]) {
                item._revengeOutcome = recordRevengeSuccess(item.orig, item.bankId);
            }
        } else {
            recordMistakeOrFlag(item.orig, false, item.bankId);
            item._revengeOutcome = { cleared: false, newStreak: 0, reset: true };
        }
        saveBankState();
        updateDrillLiveScore();
    } else {
        saveBankState();
    }

    saveInProgressSession();
    renderQuestionStage();
    renderNavigatorGrid();
}

function renderFreqBadgeHTML(q) {
    if (!q || !q.freq_badge) return '';
    const isHot = q.freq_badge.startsWith('🔥');
    const extraExams = (q.freq_exams && !q.freq_badge.includes(q.freq_exams))
        ? `<span style="color: var(--hub-text-sub); font-size: 12px;">${q.freq_exams}</span>`
        : '';
    return `<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 6px;"><span class="freq-pill ${isHot ? '' : 'subtle'}">${q.freq_badge}</span>${extraExams}</div>`;
}

function renderExplanationHTML(item, chosenIdx) {
    const q = item.orig;
    const isCorrect = chosenIdx === item.correctIdx;
    let statusTitle = isCorrect
        ? '<span style="color: var(--hub-ok-text);"><i class="fa-solid fa-circle-check"></i> Chính xác!</span>'
        : `<span style="color: var(--hub-danger-text);"><i class="fa-solid fa-circle-xmark"></i> Sai rồi! Đáp án đúng là số ${item.correctIdx + 1}: <strong>${item.options[item.correctIdx]}</strong></span>`;

    if (item._revengeOutcome) {
        if (item._revengeOutcome.cleared) {
            statusTitle += ' <span class="streak-pill" style="background: var(--hub-ok-bg); color: var(--hub-ok-text); border-color: var(--hub-ok-border);">🎉 Đã lấp lỗ hổng [2/2] — Gỡ khỏi kho sai!</span>';
        } else if (isCorrect) {
            statusTitle += ` <span class="streak-pill">🔥 Tiến độ Phục thù: [${item._revengeOutcome.newStreak}/2] — Đúng thêm 1 lượt nữa sẽ xóa sổ!</span>`;
        } else {
            statusTitle += ' <span class="streak-pill" style="background: var(--hub-danger-bg); color: var(--hub-danger-text); border-color: var(--hub-danger-border);">📌 Đã đưa vào Kho Phục Thù [0/2]</span>';
        }
    }

    const safeTts = (q.sentence_tts || '').replace(/'/g, "\\'");
    const freqBlock = renderFreqBadgeHTML(q);

    if (item.bankId === 'gp_m1' || item.bankId === 'gp_star' || item.bankId === 'gp_m3') {
        const keyBadge = q.pattern_key || q.rule_tag
            ? `<span class="gp-rule-pill"><i class="fa-solid fa-key"></i> ${q.pattern_key || q.rule_tag}</span>`
            : '';
        const metaBadge = (q.exam_tag || q.level_star)
            ? `<span class="gp-star-pill">${q.exam_tag ? `📅 ${q.exam_tag}` : ''}${q.exam_tag && q.level_star ? ' • ' : ''}${q.level_star || ''}</span>`
            : '';
        const starBlock = item.bankId === 'gp_star' && q.star_order
            ? `<div class="star-ans-box">⭐ Thứ tự ghép câu chuẩn (4 mảnh): ${q.star_order}<div style="font-weight: 500; margin-top: 4px; color: var(--hub-text-body);">→ ${q.sentence_tts}</div></div>`
            : '';
        return `
            <div class="exp-box ${isCorrect ? 'is-correct' : 'is-wrong'}">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; font-weight: 700; font-size: 15px;">
                    <div>${statusTitle}</div>
                    ${safeTts ? `<button class="btn-pill" style="padding: 5px 11px; font-size: 12px;" onclick="speakJapanese('${safeTts}')"><i class="fa-solid fa-volume-high"></i> Nghe câu chuẩn</button>` : ''}
                </div>
                <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 7px;">
                    ${keyBadge}${metaBadge}
                </div>
                ${starBlock}
                <div style="font-size: 14px; color: var(--hub-text-body); line-height: 1.55;">
                    <strong>📖 Dịch câu:</strong> ${q.sentence_vi}
                </div>
                <div class="trap-pill">
                    <strong style="color: var(--hub-warn-text);"><i class="fa-solid fa-lightbulb"></i> Phân tích công thức & Loại bẫy:</strong> ${q.explain_vi}
                </div>
            </div>
        `;
    }

    if (item.bankId === 'pastN3') {
        const starBlock = q.is_star && q.star_order
            ? `<div class="star-ans-box">⭐ Thứ tự ghép câu đúng: ${q.star_order}<div style="font-weight: 500; margin-top: 4px; color: var(--hub-text-body);">→ ${q.sentence_tts}</div></div>`
            : '';
        const evidenceBlock = q.evidence_jp
            ? `<div class="evidence-box"><strong>🔑 Căn cứ trong bài đọc:</strong><br>${q.evidence_jp}</div>`
            : '';
        return `
            <div class="exp-box ${isCorrect ? 'is-correct' : 'is-wrong'}">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; font-weight: 700; font-size: 15px;">
                    <div>${statusTitle}</div>
                    ${safeTts ? `<button class="btn-pill" style="padding: 5px 11px; font-size: 12px;" onclick="speakJapanese('${safeTts}')"><i class="fa-solid fa-volume-high"></i> Nghe câu</button>` : ''}
                </div>
                ${starBlock}
                ${evidenceBlock}
                <div style="font-size: 14px; color: var(--hub-text-body); line-height: 1.55;">
                    <strong>📖 Dịch câu:</strong> ${q.sentence_vi}
                </div>
                <div class="trap-pill">
                    <strong style="color: var(--hub-warn-text);"><i class="fa-solid fa-lightbulb"></i> Phân tích thực chiến & Loại bẫy:</strong> ${q.explain_vi}
                </div>
            </div>
        `;
    }

    if (item.bankId === 'm3_191') {
        const safeRead = (q.reading || '').replace(/'/g, "\\'");
        const tierCls = q.tier === 'core' ? 'core' : 'full';
        const optsBreakdown = item.options.map((optTxt, oi) => {
            const isAns = oi === item.correctIdx;
            if (item.isReversed && item.optionsKata) {
                return `<div class="opt-vi-card ${isAns ? 'is-ans' : ''}"><strong>${oi + 1}. ${item.optionsKata[oi]}</strong>: ${optTxt}${isAns ? ' (ĐÚNG)' : ''}</div>`;
            }
            const vi = item.optionsVi ? item.optionsVi[oi] : '';
            return `<div class="opt-vi-card ${isAns ? 'is-ans' : ''}"><strong>${oi + 1}. ${optTxt}</strong>: ${vi}</div>`;
        }).join('');

        return `
            <div class="exp-box ${isCorrect ? 'is-correct' : 'is-wrong'}">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; font-weight: 700; font-size: 15px;">
                    <div>${statusTitle}</div>
                    <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                        <button class="btn-pill" style="padding: 5px 10px; font-size: 12px;" onclick="speakJapanese('${safeRead}')">
                            <i class="fa-solid fa-volume-low"></i> Nghe từ
                        </button>
                        <button class="btn-pill" style="padding: 5px 11px; font-size: 12px;" onclick="speakJapanese('${safeTts}')">
                            <i class="fa-solid fa-volume-high"></i> Nghe câu
                        </button>
                    </div>
                </div>
                <div class="exp-word-row">
                    <strong style="font-size: 20px; color: var(--primary);">${q.word_disp}</strong>
                    <span class="tier-pill ${tierCls}">${q.tier_label}</span>
                    <span style="font-size: 14.5px; font-weight: 600; color: var(--hub-text);">→ ${q.meaning_vi}</span>
                </div>
                ${freqBlock}
                <div class="evidence-box">
                    <strong>🔑 Cụm kết hợp tủ (Collocation):</strong> ${q.collocation}
                </div>
                <div style="font-size: 14px; color: var(--hub-text-body); line-height: 1.5;">
                    <strong>📖 Dịch câu:</strong> ${q.sentence_vi}
                </div>
                <div>
                    <div style="font-size: 12px; font-weight: 700; color: var(--hub-text-sub); margin-bottom: 6px; text-transform: uppercase;">💡 Giải nghĩa cả 4 phương án (1 câu ăn luôn 4 từ):</div>
                    <div class="opts-vi-grid">${optsBreakdown}</div>
                </div>
                <div class="trap-pill">
                    <strong style="color: var(--hub-warn-text);"><i class="fa-solid fa-lightbulb"></i> Mẹo nhớ & Phân biệt bẫy:</strong> ${q.note_vi}
                </div>
            </div>
        `;
    }

    if (item.bankId === 'm5_107') {
        const safeRead = (q.reading || '').replace(/'/g, "\\'");
        const tierCls = q.tier === 'core' ? 'core' : 'full';
        let optsBreakdown = '';
        if (item.isReversed && item.optionsKata) {
            optsBreakdown = `<div class="opts-vi-grid">${item.options.map((optTxt, oi) => {
                const isAns = oi === item.correctIdx;
                return `<div class="opt-vi-card ${isAns ? 'is-ans' : ''}"><strong>${oi + 1}. ${item.optionsKata[oi]}</strong>: ${optTxt}${isAns ? ' (ĐÚNG)' : ''}</div>`;
            }).join('')}</div>`;
        } else {
            optsBreakdown = `<div class="m5-exp-list">${item.options.map((sentTxt, oi) => {
                const isAns = oi === item.correctIdx;
                const exp = item.optionsVi ? item.optionsVi[oi] : '';
                return `<div class="opt-vi-card ${isAns ? 'is-ans' : ''}">
                    <div style="font-weight: 700; color: var(--hub-text); margin-bottom: 2px;">${oi + 1}. ${sentTxt}</div>
                    <div style="font-size: 12.8px; color: var(--hub-text-body);">${exp}</div>
                </div>`;
            }).join('')}</div>`;
        }

        return `
            <div class="exp-box ${isCorrect ? 'is-correct' : 'is-wrong'}">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; font-weight: 700; font-size: 15px;">
                    <div>${statusTitle}</div>
                    <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                        <button class="btn-pill" style="padding: 5px 10px; font-size: 12px;" onclick="speakJapanese('${safeRead}')">
                            <i class="fa-solid fa-volume-low"></i> Nghe từ
                        </button>
                        <button class="btn-pill" style="padding: 5px 11px; font-size: 12px;" onclick="speakJapanese('${safeTts}')">
                            <i class="fa-solid fa-volume-high"></i> Nghe câu chuẩn
                        </button>
                    </div>
                </div>
                <div class="exp-word-row">
                    <strong style="font-size: 20px; color: var(--primary);">${q.word_disp}</strong>
                    <span class="tier-pill ${tierCls}">${q.tier_label}</span>
                    <span style="font-size: 14.5px; font-weight: 600; color: var(--hub-text);">→ ${q.meaning_vi}</span>
                </div>
                ${freqBlock}
                <div class="evidence-box">
                    <strong>🔑 Công thức kết hợp chuẩn (Collocation):</strong> ${q.collocation}
                </div>
                <div class="trap-pill">
                    <strong style="color: var(--hub-warn-text);"><i class="fa-solid fa-triangle-exclamation"></i> Quy tắc tránh bẫy Mondai 5:</strong> ${q.trap_rule}
                </div>
                <div>
                    <div style="font-size: 12px; font-weight: 700; color: var(--hub-text-sub); margin-bottom: 6px; text-transform: uppercase;">💡 Phân tích chi tiết cả 4 câu (1 ĐÚNG + 3 bẫy SAI):</div>
                    ${optsBreakdown}
                </div>
            </div>
        `;
    }

    if (item.bankId === 'hira35') {
        const safeWord = (q.display_word || q.word).replace(/'/g, "\\'");
        const optsBreakdown = item.options.map((optTxt, oi) => {
            const isAns = oi === item.correctIdx;
            if (item.isReversed && item.optionsKata) {
                return `<div class="opt-vi-card ${isAns ? 'is-ans' : ''}"><strong>${oi + 1}. ${item.optionsKata[oi]}</strong>: ${optTxt}${isAns ? ' (ĐÚNG)' : ''}</div>`;
            }
            const vi = item.optionsVi ? item.optionsVi[oi] : '';
            return `<div class="opt-vi-card ${isAns ? 'is-ans' : ''}"><strong>${oi + 1}. ${optTxt}</strong>: ${vi}</div>`;
        }).join('');

        return `
            <div class="exp-box ${isCorrect ? 'is-correct' : 'is-wrong'}">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; font-weight: 700; font-size: 15px;">
                    <div>${statusTitle}</div>
                    <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                        <button class="btn-pill" style="padding: 5px 10px; font-size: 12px;" onclick="speakJapanese('${safeWord}')">
                            <i class="fa-solid fa-volume-low"></i> Nghe từ
                        </button>
                        <button class="btn-pill" style="padding: 5px 11px; font-size: 12px;" onclick="speakJapanese('${safeTts}')">
                            <i class="fa-solid fa-volume-high"></i> Nghe câu
                        </button>
                    </div>
                </div>
                <div class="exp-word-row">
                    <strong style="font-size: 20px; color: var(--primary);">${q.word}</strong>
                    <span class="hanviet-pill">Đồng nghĩa: ${q.syn_jp}</span>
                    <span style="font-size: 14.5px; font-weight: 600; color: var(--hub-text);">→ ${q.meaning_vi}</span>
                </div>
                ${freqBlock}
                <div style="font-size: 14px; color: var(--hub-text-body); line-height: 1.5;">
                    <strong>📖 Dịch câu:</strong> ${q.sentence_vi}
                </div>
                <div>
                    <div style="font-size: 12px; font-weight: 700; color: var(--hub-text-sub); margin-bottom: 6px; text-transform: uppercase;">💡 Giải nghĩa cả 4 phương án (1 câu ăn luôn 4 từ):</div>
                    <div class="opts-vi-grid">${optsBreakdown}</div>
                </div>
                <div class="trap-pill">
                    <strong style="color: var(--hub-warn-text);"><i class="fa-solid fa-lightbulb"></i> Tần suất đề thật & Mẹo nhớ:</strong> ${q.nuance_note}
                </div>
            </div>
        `;
    }

    if (item.bankId === 'kata78') {
        const safeWord = q.word.replace(/'/g, "\\'");
        const optsBreakdown = item.options.map((optTxt, oi) => {
            const isAns = oi === item.correctIdx;
            if (item.isReversed && item.optionsKata) {
                return `<div class="opt-vi-card ${isAns ? 'is-ans' : ''}"><strong>${oi + 1}. ${item.optionsKata[oi]}</strong>: ${optTxt}${isAns ? ' (ĐÚNG)' : ''}</div>`;
            }
            const vi = item.optionsVi ? item.optionsVi[oi] : '';
            return `<div class="opt-vi-card ${isAns ? 'is-ans' : ''}"><strong>${oi + 1}. ${optTxt}</strong>: ${vi}</div>`;
        }).join('');

        return `
            <div class="exp-box ${isCorrect ? 'is-correct' : 'is-wrong'}">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; font-weight: 700; font-size: 15px;">
                    <div>${statusTitle}</div>
                    <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                        <button class="btn-pill" style="padding: 5px 10px; font-size: 12px;" onclick="speakJapanese('${safeWord}')">
                            <i class="fa-solid fa-volume-low"></i> Nghe từ
                        </button>
                        <button class="btn-pill" style="padding: 5px 11px; font-size: 12px;" onclick="speakJapanese('${safeTts}')">
                            <i class="fa-solid fa-volume-high"></i> Nghe câu
                        </button>
                    </div>
                </div>
                <div class="exp-word-row">
                    <strong style="font-size: 20px; color: var(--primary);">${q.word}</strong>
                    <span class="hanviet-pill">Gốc: ${q.origin}</span>
                    <span class="q-tag" style="background: var(--hub-surface-2); color: var(--hub-text-body);">Thuần Nhật: ${q.native_jp}</span>
                    <span style="font-size: 14.5px; font-weight: 600; color: var(--hub-text);">→ ${q.meaning_vi}</span>
                </div>
                ${freqBlock}
                <div style="font-size: 14px; color: var(--hub-text-body); line-height: 1.5;">
                    <strong>📖 Dịch câu:</strong> ${q.sentence_vi}
                </div>
                <div>
                    <div style="font-size: 12px; font-weight: 700; color: var(--hub-text-sub); margin-bottom: 6px; text-transform: uppercase;">💡 Giải nghĩa cả 4 từ Katakana (1 câu ăn luôn 4 từ):</div>
                    <div class="opts-vi-grid">${optsBreakdown}</div>
                </div>
                <div class="trap-pill">
                    <strong style="color: var(--hub-warn-text);"><i class="fa-solid fa-triangle-exclamation"></i> Wasei-eigo & Mẹo nhớ:</strong> ${q.wasei_note}
                </div>
            </div>
        `;
    }

    if (item.bankId === 'syn80') {
        // 5-word breakdown for ALL 4 shuffled options!
        const optsBreakdown = item.options.map((optTxt, oi) => {
            const isAns = oi === item.correctIdx;
            const vi = item.optionsVi ? item.optionsVi[oi] : '';
            return `<div class="opt-vi-card ${isAns ? 'is-ans' : ''}"><strong>${oi + 1}. ${optTxt}</strong>: ${vi}</div>`;
        }).join('');

        return `
            <div class="exp-box ${isCorrect ? 'is-correct' : 'is-wrong'}">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; font-weight: 700; font-size: 15px;">
                    <div>${statusTitle}</div>
                    <button class="btn-pill" style="padding: 5px 11px; font-size: 12.5px;" onclick="speakJapanese('${safeTts}')">
                        <i class="fa-solid fa-volume-high"></i> Nghe phát âm
                    </button>
                </div>
                <div class="exp-word-row">
                    <strong style="font-size: 18px; color: var(--hub-text);">${q.target_word}</strong>
                    <span style="font-size: 13.5px; color: var(--hub-text-sub);">(${q.target_reading})</span>
                    <span style="font-weight: 800; color: var(--primary);">＝</span>
                    <strong style="font-size: 18px; color: var(--primary);">${q.synonym_word}</strong>
                    <span class="hanviet-pill">Nghĩa: ${q.meaning_vi}</span>
                </div>
                <div style="font-size: 14px; color: var(--hub-text-body); line-height: 1.5;">
                    <strong>📖 Dịch câu:</strong> ${q.sentence_vi}
                </div>
                <div>
                    <div style="font-size: 12px; font-weight: 700; color: var(--hub-text-sub); margin-bottom: 6px; text-transform: uppercase;">💡 Giải nghĩa cả 4 phương án (1 câu ăn luôn 5 từ):</div>
                    <div class="opts-vi-grid">${optsBreakdown}</div>
                </div>
                <div class="trap-pill">
                    <strong style="color: var(--hub-warn-text);"><i class="fa-solid fa-lightbulb"></i> Mẹo nhớ & Sắc thái:</strong> ${q.nuance_note}
                </div>
            </div>
        `;
    }

    // Kanji 352 explanation
    const safeReading = (q.reading || '').replace(/'/g, "\\'");
    const hvDetailBlock = q.han_viet_detail
        ? `<div class="evidence-box"><strong>🧩 Chiết tự âm đọc:</strong> ${q.han_viet_detail}</div>`
        : '';
    return `
        <div class="exp-box ${isCorrect ? 'is-correct' : 'is-wrong'}">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; font-weight: 700; font-size: 15px;">
                <div>${statusTitle}</div>
                <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                    ${safeReading ? `<button class="btn-pill" style="padding: 5px 10px; font-size: 12px;" onclick="speakJapanese('${safeReading}')"><i class="fa-solid fa-volume-low"></i> Nghe từ</button>` : ''}
                    <button class="btn-pill" style="padding: 5px 11px; font-size: 12px;" onclick="speakJapanese('${safeTts}')"><i class="fa-solid fa-volume-high"></i> Nghe câu</button>
                </div>
            </div>
            <div class="exp-word-row">
                <strong style="font-size: 20px; color: var(--hub-text);">${q.kanji_form}</strong>
                <span style="font-size: 16px; color: var(--primary); font-weight: 700;">（${q.reading}）</span>
                <span class="hanviet-pill">Hán Việt: ${q.han_viet}</span>
                <span style="font-size: 14.5px; font-weight: 600; color: var(--hub-text-body);">→ ${q.meaning_vi}</span>
            </div>
            ${freqBlock}
            ${hvDetailBlock}
            <div style="font-size: 14px; color: var(--hub-text-body); line-height: 1.5;">
                <strong>📖 Dịch câu:</strong> ${q.sentence_vi}
            </div>
            <div class="trap-pill">
                <strong style="color: var(--hub-warn-text);"><i class="fa-solid fa-triangle-exclamation"></i> Phân tích bẫy & Mẹo nhớ:</strong> ${q.trap_note}
            </div>
        </div>
    `;
}

function renderNavigatorGrid() {
    const grid = document.getElementById('q-nav-grid');
    grid.innerHTML = '';
    const answeredCount = activeSession.answers.filter(a => a !== null).length;
    document.getElementById('nav-answered-lbl').textContent = `${answeredCount}/${activeSession.items.length} đã chọn`;

    activeSession.items.forEach((item, i) => {
        const cell = document.createElement('button');
        const chosen = activeSession.answers[i];
        let cls = 'q-nav-cell';
        if (i === activeSession.currentIndex) cls += ' current';
        if (activeSession.flags[i]) cls += ' flagged';
        if (chosen !== null) {
            if (activeSession.mode === 'drill') {
                cls += chosen === item.correctIdx ? ' rev-ok' : ' rev-bad';
            } else {
                cls += ' answered';
            }
        }
        cell.className = cls;
        cell.textContent = i + 1;
        cell.addEventListener('click', () => {
            activeSession.currentIndex = i;
            saveInProgressSession();
            renderQuestionStage();
            renderNavigatorGrid();
            document.getElementById('exam-nav-panel').classList.remove('mobile-open');
        });
        grid.appendChild(cell);
    });
}

function setupExamEvents() {
    document.getElementById('exit-exam-btn').addEventListener('click', () => {
        if (activeSession && !activeSession.finished) {
            saveInProgressSession();
        }
        showMainView('lobby');
    });

    document.getElementById('q-flag-btn').addEventListener('click', () => toggleCurrentFlag());
    document.getElementById('q-reveal-ctx-btn').addEventListener('click', () => {
        activeSession.revealedCtx[activeSession.currentIndex] = true;
        renderQuestionStage();
    });

    document.getElementById('q-prev-btn').addEventListener('click', () => {
        if (!activeSession || activeSession.currentIndex === 0) return;
        activeSession.currentIndex -= 1;
        saveInProgressSession();
        renderQuestionStage();
        renderNavigatorGrid();
    });

    document.getElementById('q-next-btn').addEventListener('click', () => {
        if (!activeSession) return;
        if (activeSession.currentIndex < activeSession.items.length - 1) {
            activeSession.currentIndex += 1;
            saveInProgressSession();
            renderQuestionStage();
            renderNavigatorGrid();
        } else {
            finishExamSession(false);
        }
    });

    document.getElementById('submit-exam-btn').addEventListener('click', () => {
        if (!activeSession) return;
        const unanswered = activeSession.answers.filter(a => a === null).length;
        if (unanswered > 0 && !confirm(`Bạn còn ${unanswered} câu chưa chọn đáp án. Bạn vẫn muốn nộp bài ngay bây giờ chứ?`)) return;
        finishExamSession(false);
    });

    document.getElementById('toggle-mobile-nav-btn').addEventListener('click', () => {
        document.getElementById('exam-nav-panel').classList.toggle('mobile-open');
    });

    document.getElementById('filter-rev-wrong-btn').addEventListener('click', () => {
        lastResultFilter = 'wrong';
        document.getElementById('filter-rev-wrong-btn').classList.add('primary');
        document.getElementById('filter-rev-all-btn').classList.remove('primary');
        renderResultReviewList();
    });
    document.getElementById('filter-rev-all-btn').addEventListener('click', () => {
        lastResultFilter = 'all';
        document.getElementById('filter-rev-all-btn').classList.add('primary');
        document.getElementById('filter-rev-wrong-btn').classList.remove('primary');
        renderResultReviewList();
    });

    document.getElementById('res-retry-shuffled-btn').addEventListener('click', () => {
        if (!activeSession) return;
        const isPast = activeSession.bankId === 'pastN3';
        const isGp = isGrammarBank(activeSession.bankId);
        const cfg = {
            ...activeSession.sourceConfig,
            alreadyShuffled: false,
            antiRote: (isPast || isGp)
                ? { shuffleQ: activeSession.bankId === 'gp_m1' || activeSession.bankId === 'gp_star', shuffleOpt: true, hideCtx: false, reverseMode: false }
                : { ...activeSession.antiRote, shuffleQ: true, shuffleOpt: true }
        };
        startQuizEngine(cfg);
    });

    document.getElementById('res-revenge-now-btn').addEventListener('click', () => {
        if (!activeSession) return;
        const wrongOrFlagIds = [];
        activeSession.items.forEach((item, i) => {
            if (activeSession.answers[i] !== item.correctIdx || activeSession.flags[i]) {
                wrongOrFlagIds.push(item.orig.id);
            }
        });
        launchRevengeSession('drill', { shuffleQ: true, shuffleOpt: true }, wrongOrFlagIds);
    });
}

function toggleCurrentFlag() {
    if (!activeSession) return;
    const idx = activeSession.currentIndex;
    activeSession.flags[idx] = !activeSession.flags[idx];
    if (activeSession.flags[idx]) {
        recordMistakeOrFlag(activeSession.items[idx].orig, true, activeSession.bankId);
    }
    saveInProgressSession();
    renderQuestionStage();
    renderNavigatorGrid();
}

// ==========================================
// 7. GRADING & RESULT REVIEW
// ==========================================
function finishExamSession(timedOut = false) {
    if (!activeSession || activeSession.finished) return;
    activeSession.finished = true;
    if (activeSession.timerInterval) {
        clearInterval(activeSession.timerInterval);
        activeSession.timerInterval = null;
    }

    const bankId = activeSession.bankId;
    const isSyn = bankId === 'syn80';
    const isKata = bankId === 'kata78';
    const isHira = bankId === 'hira35';
    const isM3 = bankId === 'm3_191';
    const isM5 = bankId === 'm5_107';
    const isGp = isGrammarBank(bankId);
    const isPast = bankId === 'pastN3';
    const elapsedSec = Math.max(1, Math.round((Date.now() - activeSession.startedAt) / 1000));
    let totalCorrect = 0, m1Ok = 0, m1Tot = 0, m2Ok = 0, m2Tot = 0, wrongCnt = 0, flagCnt = 0;

    activeSession.items.forEach((item, i) => {
        const chosen = activeSession.answers[i];
        const isCorrect = chosen === item.correctIdx;
        const isFlagged = activeSession.flags[i];
        if (isFlagged) flagCnt++;

        if (item.effectiveMondai === 1) { m1Tot++; if (isCorrect) m1Ok++; }
        else { m2Tot++; if (isCorrect) m2Ok++; }

        if (isCorrect) totalCorrect++;
        else wrongCnt++;

        if (activeSession.mode === 'exam') {
            touchedSet.add(item.orig.id);
            if (item.effectiveMondai === 1) {
                historyData.m1Total += 1;
                if (isCorrect) historyData.m1Correct += 1;
            } else {
                historyData.m2Total += 1;
                if (isCorrect) historyData.m2Correct += 1;
            }

            if (!isCorrect) recordMistakeOrFlag(item.orig, false, bankId);
            else if (isFlagged) recordMistakeOrFlag(item.orig, true, bankId);
            else if (mistakesMap[item.orig.id]) recordRevengeSuccess(item.orig, bankId);
        } else if (isFlagged) {
            recordMistakeOrFlag(item.orig, true, bankId);
        }
    });

    // Save Session High Score if full shift completed
    if (activeSession.sessionNum && activeSession.items.length === activeSession.expectedFullCount) {
        const prev = historyData.sessions[activeSession.sessionNum] || { best: 0, total: activeSession.items.length, attempts: 0 };
        historyData.sessions[activeSession.sessionNum] = {
            best: Math.max(prev.best, totalCorrect),
            total: activeSession.items.length,
            attempts: prev.attempts + 1,
            lastScore: totalCorrect,
            lastAt: getTodayStr()
        };
    }

    // Save per-section high scores for Past JLPT N3 Exams
    let jlptEst = null;
    if (isPast) {
        jlptEst = computeJlptN3Estimate(activeSession.items, activeSession.answers);
        if (activeSession.pastExamId) {
            const eid = activeSession.pastExamId;
            const exam = getPastExamById(eid);
            if (exam) {
                if (!historyData.examStats) historyData.examStats = {};
                if (!historyData.examStats[eid]) historyData.examStats[eid] = { attempts: 0 };
                const st = historyData.examStats[eid];
                st.attempts = (st.attempts || 0) + 1;
                if (jlptEst.mgTot === exam.counts.moji_goi) {
                    const prev = st.moji_goi || { best: 0, total: jlptEst.mgTot };
                    st.moji_goi = { best: Math.max(prev.best, jlptEst.mgOk), total: jlptEst.mgTot };
                }
                if (jlptEst.bpTot === exam.counts.bunpou) {
                    const prev = st.bunpou || { best: 0, total: jlptEst.bpTot };
                    st.bunpou = { best: Math.max(prev.best, jlptEst.bpOk), total: jlptEst.bpTot };
                }
                if (jlptEst.dokTot === exam.counts.dokkai) {
                    const prev = st.dokkai || { best: 0, total: jlptEst.dokTot, bestReadScore: 0 };
                    st.dokkai = {
                        best: Math.max(prev.best, jlptEst.dokOk),
                        total: jlptEst.dokTot,
                        bestReadScore: Math.max(prev.bestReadScore || 0, jlptEst.readScore || 0)
                    };
                }
            }
        }
    }

    const total = activeSession.items.length;
    const pct = Math.round((totalCorrect / total) * 100);
    const minStr = String(Math.floor(elapsedSec / 60)).padStart(2, '0');
    const secStr = String(elapsedSec % 60).padStart(2, '0');
    const nowTime = new Date().toLocaleString('vi-VN', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
    let breakdownStr = `M1: ${m1Ok}/${m1Tot} • M2: ${m2Ok}/${m2Tot}`;
    if (isPast && jlptEst) {
        const parts = [];
        if (jlptEst.mgTot > 0) parts.push(`TV: ${jlptEst.mgOk}/${jlptEst.mgTot}`);
        if (jlptEst.bpTot > 0) parts.push(`NP: ${jlptEst.bpOk}/${jlptEst.bpTot}`);
        if (jlptEst.dokTot > 0) parts.push(`ĐH: ${jlptEst.dokOk}/${jlptEst.dokTot}`);
        const subMondai = (jlptEst.mondaiBreakdown || []).map(x => `${x.short}:${x.ok}/${x.tot}`).join(' • ');
        breakdownStr = parts.join(' • ') + (subMondai ? ` (${subMondai})` : '');
    } else if (isGp) {
        breakdownStr = `Cơ bản ☆: ${m1Ok}/${m1Tot} • Nâng cao ☆☆: ${m2Ok}/${m2Tot}`;
    } else if (isM3) {
        breakdownStr = m2Tot > 0 ? `Đảo M3→Nghĩa: ${m2Ok}/${m2Tot}` : `Mondai 3: ${m1Ok}/${m1Tot}`;
    } else if (isM5) {
        breakdownStr = m2Tot > 0 ? `Đảo M5→Nghĩa: ${m2Ok}/${m2Tot}` : `Mondai 5: ${m1Ok}/${m1Tot}`;
    } else if (isHira) {
        breakdownStr = m2Tot > 0 ? `Đảo Hira→Nghĩa: ${m2Ok}/${m2Tot}` : `Mondai 3: ${m1Ok}/${m1Tot}`;
    } else if (isKata) {
        breakdownStr = m2Tot > 0 ? `Đảo Kata→Nghĩa: ${m2Ok}/${m2Tot}` : `Mondai 3: ${m1Ok}/${m1Tot}`;
    } else if (isSyn) {
        breakdownStr = m2Tot > 0 ? `Đảo B→A: ${m2Ok}/${m2Tot}` : `Xuôi A→B: ${m1Ok}/${m1Tot}`;
    }

    if (!Array.isArray(historyData.attemptsLog)) historyData.attemptsLog = [];
    historyData.attemptsLog.unshift({
        timestamp: nowTime,
        title: activeSession.title,
        modeLabel: activeSession.isRevenge ? 'Phục Thù' : (activeSession.mode === 'exam' ? 'Thi Thử' : 'Học Chữa Ngay'),
        score: totalCorrect,
        total,
        pct,
        m1: `${m1Ok}/${m1Tot}`,
        m2: `${m2Ok}/${m2Tot}`,
        breakdown: breakdownStr,
        duration: `${minStr}:${secStr}`
    });
    historyData.attemptsLog = historyData.attemptsLog.slice(0, 60);

    clearInProgressSession(bankId);
    if (activeSession.mode === 'exam') addHubXP(totalCorrect * 3);
    saveBankState();

    document.getElementById('res-mode-lbl').textContent = timedOut ? '⏰ Hết giờ — Tự động nộp bài' : `Kết quả • ${activeSession.title}`;
    const bankShort = isPast
        ? 'Đề Thi Thật N3'
        : (bankId === 'gp_m1' ? 'Ngữ Pháp M1' : (bankId === 'gp_star' ? 'Dấu Sao ★ N3' : (bankId === 'gp_m3' ? 'Đoạn Văn M3' : (isM3 ? 'Mondai 3 N3' : (isM5 ? 'Mondai 5 N3' : (isHira ? 'Hiragana N3' : (isKata ? 'Katakana N3' : (isSyn ? 'Đồng nghĩa N3' : 'Kanji N3'))))))));
    document.getElementById('res-headline').textContent = pct >= 85
        ? `🏆 Quá đỉnh! ${bankShort} đạt phong độ đỗ rất chắc!`
        : (pct >= 65 ? '🔥 Khá ổn! Vá kỹ các câu sai bên dưới là tăng vọt điểm ngay.' : '⚡ Đã bắt sống được nhiều lỗ hổng quan trọng — Chữa sâu & Phục thù ngay!');
    document.getElementById('res-subtext').textContent = `Sai ${wrongCnt} câu • Gắn cờ đoán bừa ${flagCnt} câu (Tất cả đã lưu vào Kho Phục Thù [0/2] và đồng bộ sang Chiến Dịch N3).`;

    document.getElementById('res-score-big').textContent = `${totalCorrect} / ${total}`;
    document.getElementById('res-pct-lbl').textContent = `${pct}% chính xác`;
    document.getElementById('res-m1-m2').textContent = breakdownStr;
    document.getElementById('res-time-lbl').textContent = `Thời gian làm: ${minStr}:${secStr}`;

    renderJlptScorePanel(isPast ? jlptEst : null);

    document.getElementById('res-revenge-now-btn').style.display = (wrongCnt + flagCnt) > 0 ? 'inline-flex' : 'none';

    lastResultFilter = (wrongCnt + flagCnt) > 0 ? 'wrong' : 'all';
    document.getElementById('filter-rev-wrong-btn').classList.toggle('primary', lastResultFilter === 'wrong');
    document.getElementById('filter-rev-all-btn').classList.toggle('primary', lastResultFilter === 'all');

    showMainView('result');
    renderResultReviewList();
}

function renderJlptScorePanel(est) {
    const panel = document.getElementById('jlpt-score-panel');
    if (!panel) return;
    if (!est) {
        panel.style.display = 'none';
        panel.innerHTML = '';
        return;
    }

    const langVal = est.langScore !== null ? `${est.langScore} / 60` : 'Chưa thi phần này';
    const langCls = est.langScore === null ? '' : (est.langCritical ? 'is-fail' : 'is-pass');
    const langSub = est.langScore === null
        ? 'Hãy làm thêm Ca 1 Từ vựng / Ngữ pháp để ước lượng'
        : (est.langCritical
            ? '⚠️ CẢNH BÁO ĐIỂM LIỆT (<19/60)! Cần phục thù ngay.'
            : (est.isPartialLang ? '✅ Qua liệt ≥19 (Ước lượng theo phần lẻ)' : '✅ Vượt ngưỡng điểm liệt (≥19/60)'));

    const readVal = est.readScore !== null ? `${est.readScore} / 60` : 'Chưa thi phần này';
    const readCls = est.readScore === null ? '' : (est.readCritical ? 'is-fail' : 'is-pass');
    const readSub = est.readScore === null
        ? 'Hãy làm thêm Ca 2 / Đọc hiểu để ước lượng'
        : (est.readCritical
            ? '⚠️ CẢNH BÁO ĐIỂM LIỆT (<19/60)! Cần đọc lại căn cứ Dokkai.'
            : '✅ Vượt ngưỡng điểm liệt (≥19/60 • Có trọng số M5–M6)');

    let aggTotal = est.total120;
    let aggNote = 'Mục tiêu an toàn ≥ 70/120 (để gánh nhẹ cho phần Nghe)';
    if (aggTotal === null && activeSession && activeSession.pastExamId) {
        const agg = getExamAggregateScore(activeSession.pastExamId);
        if (agg && agg.total120 !== null) {
            aggTotal = agg.total120;
            aggNote = `Tổng hợp Ca 1 + Ca 2 kỳ ${getPastExamShortLabel(activeSession.pastExamId)}`;
        }
    }
    const totCls = aggTotal === null ? '' : ((est.langCritical || est.readCritical) ? 'is-fail' : (aggTotal >= 70 ? 'is-pass' : ''));

    panel.style.display = 'block';
    panel.innerHTML = `
        <h3>
            <span><i class="fa-solid fa-chart-simple" style="color: var(--primary);"></i> Bảng Quy Đổi Điểm Ước Lượng JLPT N3 (2 Phần Đọc–Viết / 120)</span>
            <span style="font-size: 12px; color: var(--hub-text-sub); font-weight: 500;">Tham khảo theo trọng số chuẩn JLPT (điểm thật dùng IRT)</span>
        </h3>
        <div class="jlpt-score-grid">
            <div class="jlpt-score-box ${langCls}">
                <div style="font-size: 12px; font-weight: 700; color: var(--hub-text-sub); text-transform: uppercase;">Kiến thức ngôn ngữ (TV + NP)</div>
                <div style="font-size: 26px; font-weight: 800; color: var(--hub-text); margin: 4px 0;">${langVal}</div>
                <div style="font-size: 12.5px; color: var(--hub-text-body);">${langSub}</div>
            </div>
            <div class="jlpt-score-box ${readCls}">
                <div style="font-size: 12px; font-weight: 700; color: var(--hub-text-sub); text-transform: uppercase;">Đọc hiểu (読解 M4–M7)</div>
                <div style="font-size: 26px; font-weight: 800; color: var(--hub-text); margin: 4px 0;">${readVal}</div>
                <div style="font-size: 12.5px; color: var(--hub-text-body);">${readSub}</div>
            </div>
            <div class="jlpt-score-box ${totCls}">
                <div style="font-size: 12px; font-weight: 700; color: var(--hub-text-sub); text-transform: uppercase;">Tổng ước lượng (Không Nghe)</div>
                <div style="font-size: 26px; font-weight: 800; color: var(--primary); margin: 4px 0;">${aggTotal !== null ? `${aggTotal} / 120` : 'Chờ đủ 2 phần'}</div>
                <div style="font-size: 12.5px; color: var(--hub-text-body);">${aggNote}</div>
            </div>
        </div>
        ${(est.mondaiBreakdown && est.mondaiBreakdown.length > 0) ? (() => {
            const chipsHtml = est.mondaiBreakdown.map(m => {
                const cls = m.pct >= 80 ? 'm-ok' : (m.pct >= 60 ? 'm-warn' : 'm-bad');
                const icon = m.pct >= 80 ? '✅' : (m.pct >= 60 ? '🟡' : '🔴');
                return `<div class="mondai-chip ${cls}">
                    <div style="font-size: 12px; font-weight: 700; color: var(--hub-text-sub);">${icon} ${m.label}</div>
                    <div style="font-size: 18px; font-weight: 800; color: var(--hub-text);">${m.ok} / ${m.tot} <span style="font-size: 13px; font-weight: 700; opacity: 0.85;">(${m.pct}%)</span></div>
                </div>`;
            }).join('');
            const weakBanks = [];
            const seenB = new Set();
            est.mondaiBreakdown.filter(m => m.pct < 75 && m.suggestBank && !seenB.has(m.suggestBank)).forEach(m => {
                seenB.add(m.suggestBank);
                weakBanks.push(m);
            });
            const jumpBar = weakBanks.length > 0
                ? `<div style="margin-top: 12px; padding: 11px 14px; border-radius: 10px; background: var(--hub-surface-2); border: 1px dashed var(--primary); display: flex; flex-wrap: wrap; align-items: center; gap: 8px;">
                    <strong style="font-size: 13px; color: var(--hub-text);">🎯 Đề xuất vá lỗ hổng ngay theo điểm yếu của bài này:</strong>
                    ${weakBanks.map(w => `<button class="btn-pill primary" style="padding: 5px 11px; font-size: 12px;" onclick="switchBank('${w.suggestBank}')">${w.label} (${w.pct}%) → Mở ${w.suggestLabel}</button>`).join('')}
                   </div>`
                : '';
            return `<div style="margin-top: 16px; padding-top: 14px; border-top: 1px solid var(--hub-border);">
                <strong style="font-size: 14px; color: var(--hub-text);"><i class="fa-solid fa-magnifying-glass-chart" style="color: var(--primary);"></i> Bảng Phân Tích Điểm Lẻ Từng Mondai (Nhìn ra ngay phần đang mất điểm)</strong>
                <div class="mondai-breakdown-grid">${chipsHtml}</div>
                ${jumpBar}
            </div>`;
        })() : ''}
    `;
}

function renderResultReviewList() {
    const container = document.getElementById('result-review-list');
    container.innerHTML = '';

    let countShown = 0;
    activeSession.items.forEach((item, i) => {
        const chosen = activeSession.answers[i];
        const isCorrect = chosen === item.correctIdx;
        const isFlagged = activeSession.flags[i];
        if (lastResultFilter === 'wrong' && isCorrect && !isFlagged) return;

        countShown++;
        const q = item.orig;
        const card = document.createElement('div');
        card.className = `review-card ${!isCorrect ? 'bad' : (isFlagged ? 'flag' : 'ok')}`;
        const chosenText = chosen !== null ? `${chosen + 1}. ${item.options[chosen]}` : '(Chưa chọn)';
        const correctText = `${item.correctIdx + 1}. ${item.options[item.correctIdx]}`;
        const safeTts = (q.sentence_tts || '').replace(/'/g, "\\'");

        let bodyHtml = '';
        if (item.bankId === 'gp_m1' || item.bankId === 'gp_star' || item.bankId === 'gp_m3') {
            const pObj = item.bankId === 'gp_m3' ? getPassageForQuestion(q) : null;
            const keyBadge = (q.pattern_key || q.rule_tag)
                ? `<span class="gp-rule-pill" style="margin-bottom: 6px;"><i class="fa-solid fa-key"></i> ${q.pattern_key || q.rule_tag}</span>`
                : '';
            const metaBadge = (q.exam_tag || q.level_star)
                ? `<span class="gp-star-pill" style="margin-bottom: 6px;">${q.exam_tag ? `📅 ${q.exam_tag}` : ''}${q.exam_tag && q.level_star ? ' • ' : ''}${q.level_star || ''}</span>`
                : '';
            const starHtml = item.bankId === 'gp_star' && q.star_order
                ? `<div class="star-ans-box" style="margin-bottom: 8px;">⭐ Thứ tự ghép đúng: ${q.star_order}<div style="font-weight: 500; margin-top: 3px; color: var(--hub-text-body);">→ ${q.sentence_tts}</div></div>`
                : '';
            const passDetails = pObj
                ? `<details style="margin-bottom: 8px; padding: 8px 12px; border-radius: 9px; background: var(--hub-surface-2); border: 1px solid var(--hub-border);"><summary style="cursor: pointer; font-weight: 700; font-size: 13px; color: var(--primary);">📄 Xem lại bài đọc gốc: ${pObj.title}</summary><div class="passage-body" style="font-size: 14px; margin-top: 8px;">${pObj.html}</div>${pObj.summary_vi ? `<div class="passage-summary-box"><strong>📖 Tóm tắt:</strong> ${pObj.summary_vi}</div>` : ''}</details>`
                : '';
            bodyHtml = `
                <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 6px;">${keyBadge}${metaBadge}</div>
                ${passDetails}
                ${starHtml}
                <div style="font-size: 13.5px; color: var(--hub-text-body); margin-bottom: 6px;"><strong>📖 Dịch:</strong> ${q.sentence_vi}</div>
                <div style="font-size: 13px; color: var(--hub-text-sub);"><strong style="color: var(--hub-warn-text);">💡 Phân tích công thức & Loại bẫy:</strong> ${q.explain_vi}</div>
            `;
        } else if (item.bankId === 'pastN3') {
            const pObj = getPassageForQuestion(q);
            const starHtml = q.is_star && q.star_order
                ? `<div class="star-ans-box" style="margin-bottom: 8px;">⭐ Thứ tự ghép đúng: ${q.star_order}</div>`
                : '';
            const evHtml = q.evidence_jp
                ? `<div class="evidence-box" style="margin-bottom: 8px;"><strong>🔑 Căn cứ trong bài đọc:</strong> ${q.evidence_jp}</div>`
                : '';
            const passDetails = pObj
                ? `<details style="margin-bottom: 8px; padding: 8px 12px; border-radius: 9px; background: var(--hub-surface-2); border: 1px solid var(--hub-border);"><summary style="cursor: pointer; font-weight: 700; font-size: 13px; color: var(--primary);">📄 Xem lại bài đọc gốc: ${pObj.title}</summary><div class="passage-body" style="font-size: 14px; margin-top: 8px;">${pObj.html}</div>${pObj.summary_vi ? `<div class="passage-summary-box"><strong>📖 Tóm tắt:</strong> ${pObj.summary_vi}</div>` : ''}</details>`
                : '';
            bodyHtml = `
                ${passDetails}
                ${starHtml}
                ${evHtml}
                <div style="font-size: 13.5px; color: var(--hub-text-body); margin-bottom: 6px;"><strong>📖 Dịch:</strong> ${q.sentence_vi}</div>
                <div style="font-size: 13px; color: var(--hub-text-sub);"><strong style="color: var(--hub-warn-text);">💡 Phân tích thực chiến:</strong> ${q.explain_vi}</div>
            `;
        } else if (item.bankId === 'm3_191') {
            const tierCls = q.tier === 'core' ? 'core' : 'full';
            const freqHtml = renderFreqBadgeHTML(q);
            const optsBreakdown = item.options.map((optTxt, oi) => {
                const isAns = oi === item.correctIdx;
                if (item.isReversed && item.optionsKata) {
                    return `<div class="opt-vi-card ${isAns ? 'is-ans' : ''}"><strong>${oi + 1}. ${item.optionsKata[oi]}</strong>: ${optTxt}${isAns ? ' (ĐÚNG)' : ''}</div>`;
                }
                const vi = item.optionsVi ? item.optionsVi[oi] : '';
                return `<div class="opt-vi-card ${isAns ? 'is-ans' : ''}"><strong>${oi + 1}. ${optTxt}</strong>: ${vi}</div>`;
            }).join('');
            bodyHtml = `
                <div class="exp-word-row" style="margin-bottom: 8px;">
                    <strong style="font-size: 17px; color: var(--primary);">${q.word_disp}</strong>
                    <span class="tier-pill ${tierCls}">${q.tier_label}</span>
                    <span style="font-size: 13.5px; color: var(--hub-text); font-weight: 600;">→ ${q.meaning_vi}</span>
                </div>
                ${freqHtml ? `<div style="margin-bottom: 8px;">${freqHtml}</div>` : ''}
                <div class="evidence-box" style="margin-bottom: 8px;"><strong>🔑 Cụm tủ:</strong> ${q.collocation}</div>
                <div style="font-size: 13.5px; color: var(--hub-text-body); margin-bottom: 8px;"><strong>📖 Dịch:</strong> ${q.sentence_vi}</div>
                <div class="opts-vi-grid" style="margin-bottom: 8px;">${optsBreakdown}</div>
                <div style="font-size: 13px; color: var(--hub-text-sub);"><strong style="color: var(--hub-warn-text);">💡 Mẹo nhớ:</strong> ${q.note_vi}</div>
            `;
        } else if (item.bankId === 'm5_107') {
            const tierCls = q.tier === 'core' ? 'core' : 'full';
            const freqHtml = renderFreqBadgeHTML(q);
            const optsBreakdown = (item.isReversed && item.optionsKata)
                ? `<div class="opts-vi-grid" style="margin-bottom: 8px;">${item.options.map((optTxt, oi) => {
                    const isAns = oi === item.correctIdx;
                    return `<div class="opt-vi-card ${isAns ? 'is-ans' : ''}"><strong>${oi + 1}. ${item.optionsKata[oi]}</strong>: ${optTxt}${isAns ? ' (ĐÚNG)' : ''}</div>`;
                }).join('')}</div>`
                : `<div class="m5-exp-list" style="margin-bottom: 8px;">${item.options.map((sentTxt, oi) => {
                    const isAns = oi === item.correctIdx;
                    const exp = item.optionsVi ? item.optionsVi[oi] : '';
                    return `<div class="opt-vi-card ${isAns ? 'is-ans' : ''}"><strong>${oi + 1}. ${sentTxt}</strong><div style="font-size: 12.5px; margin-top: 2px;">${exp}</div></div>`;
                }).join('')}</div>`;
            bodyHtml = `
                <div class="exp-word-row" style="margin-bottom: 8px;">
                    <strong style="font-size: 17px; color: var(--primary);">${q.word_disp}</strong>
                    <span class="tier-pill ${tierCls}">${q.tier_label}</span>
                    <span style="font-size: 13.5px; color: var(--hub-text); font-weight: 600;">→ ${q.meaning_vi}</span>
                </div>
                ${freqHtml ? `<div style="margin-bottom: 8px;">${freqHtml}</div>` : ''}
                <div class="evidence-box" style="margin-bottom: 8px;"><strong>🔑 Công thức chuẩn:</strong> ${q.collocation}</div>
                <div style="font-size: 13px; color: var(--hub-text-sub); margin-bottom: 8px;"><strong style="color: var(--hub-warn-text);">⚠️ Quy tắc tránh bẫy:</strong> ${q.trap_rule}</div>
                ${optsBreakdown}
            `;
        } else if (item.bankId === 'hira35') {
            const optsBreakdown = item.options.map((optTxt, oi) => {
                const isAns = oi === item.correctIdx;
                if (item.isReversed && item.optionsKata) {
                    return `<div class="opt-vi-card ${isAns ? 'is-ans' : ''}"><strong>${oi + 1}. ${item.optionsKata[oi]}</strong>: ${optTxt}${isAns ? ' (ĐÚNG)' : ''}</div>`;
                }
                const vi = item.optionsVi ? item.optionsVi[oi] : '';
                return `<div class="opt-vi-card ${isAns ? 'is-ans' : ''}"><strong>${oi + 1}. ${optTxt}</strong>: ${vi}</div>`;
            }).join('');
            const freqHtml = renderFreqBadgeHTML(q);
            bodyHtml = `
                <div class="exp-word-row" style="margin-bottom: 8px;">
                    <strong style="font-size: 17px; color: var(--primary);">${q.word}</strong>
                    <span class="hanviet-pill">Đồng nghĩa: ${q.syn_jp}</span>
                    <span style="font-size: 13.5px; color: var(--hub-text); font-weight: 600;">→ ${q.meaning_vi}</span>
                </div>
                ${freqHtml ? `<div style="margin-bottom: 8px;">${freqHtml}</div>` : ''}
                <div style="font-size: 13.5px; color: var(--hub-text-body); margin-bottom: 8px;"><strong>📖 Dịch:</strong> ${q.sentence_vi}</div>
                <div class="opts-vi-grid" style="margin-bottom: 8px;">${optsBreakdown}</div>
                <div style="font-size: 13px; color: var(--hub-text-sub);"><strong style="color: var(--hub-warn-text);">💡 Mẹo nhớ & Đề thật:</strong> ${q.nuance_note}</div>
            `;
        } else if (item.bankId === 'kata78') {
            const optsBreakdown = item.options.map((optTxt, oi) => {
                const isAns = oi === item.correctIdx;
                if (item.isReversed && item.optionsKata) {
                    return `<div class="opt-vi-card ${isAns ? 'is-ans' : ''}"><strong>${oi + 1}. ${item.optionsKata[oi]}</strong>: ${optTxt}${isAns ? ' (ĐÚNG)' : ''}</div>`;
                }
                const vi = item.optionsVi ? item.optionsVi[oi] : '';
                return `<div class="opt-vi-card ${isAns ? 'is-ans' : ''}"><strong>${oi + 1}. ${optTxt}</strong>: ${vi}</div>`;
            }).join('');
            const freqHtml = renderFreqBadgeHTML(q);
            bodyHtml = `
                <div class="exp-word-row" style="margin-bottom: 8px;">
                    <strong style="font-size: 17px; color: var(--primary);">${q.word}</strong>
                    <span class="hanviet-pill">Gốc: ${q.origin}</span>
                    <span class="q-tag" style="background: var(--hub-surface-2); color: var(--hub-text-body);">Thuần Nhật: ${q.native_jp}</span>
                    <span style="font-size: 13.5px; color: var(--hub-text); font-weight: 600;">→ ${q.meaning_vi}</span>
                </div>
                ${freqHtml ? `<div style="margin-bottom: 8px;">${freqHtml}</div>` : ''}
                <div style="font-size: 13.5px; color: var(--hub-text-body); margin-bottom: 8px;"><strong>📖 Dịch:</strong> ${q.sentence_vi}</div>
                <div class="opts-vi-grid" style="margin-bottom: 8px;">${optsBreakdown}</div>
                <div style="font-size: 13px; color: var(--hub-text-sub);"><strong style="color: var(--hub-warn-text);">⚠️ Wasei-eigo & Mẹo nhớ:</strong> ${q.wasei_note}</div>
            `;
        } else if (item.bankId === 'syn80') {
            const optsBreakdown = item.options.map((optTxt, oi) => {
                const isAns = oi === item.correctIdx;
                const vi = item.optionsVi ? item.optionsVi[oi] : '';
                return `<div class="opt-vi-card ${isAns ? 'is-ans' : ''}"><strong>${oi + 1}. ${optTxt}</strong>: ${vi}</div>`;
            }).join('');
            bodyHtml = `
                <div class="exp-word-row" style="margin-bottom: 8px;">
                    <strong style="font-size: 16.5px; color: var(--hub-text);">${q.target_word}</strong>
                    <span style="font-size: 12.5px; color: var(--hub-text-sub);">(${q.target_reading})</span>
                    <span style="color: var(--primary); font-weight: 800;">＝ ${q.synonym_word}</span>
                    <span class="hanviet-pill">${q.meaning_vi}</span>
                </div>
                <div style="font-size: 13.5px; color: var(--hub-text-body); margin-bottom: 8px;"><strong>📖 Dịch:</strong> ${q.sentence_vi}</div>
                <div class="opts-vi-grid" style="margin-bottom: 8px;">${optsBreakdown}</div>
                <div style="font-size: 13px; color: var(--hub-text-sub);"><strong style="color: var(--hub-warn-text);">💡 Mẹo nhớ:</strong> ${q.nuance_note}</div>
            `;
        } else {
            const freqHtml = renderFreqBadgeHTML(q);
            const hvDetailHtml = q.han_viet_detail
                ? `<div class="evidence-box" style="margin-bottom: 6px;"><strong>🧩 Chiết tự âm đọc:</strong> ${q.han_viet_detail}</div>`
                : '';
            bodyHtml = `
                <div class="exp-word-row" style="margin-bottom: 8px;">
                    <strong style="font-size: 17px; color: var(--hub-text);">${q.kanji_form}</strong>
                    <span style="color: var(--primary); font-weight: 700;">（${q.reading}）</span>
                    <span class="hanviet-pill">${q.han_viet}</span>
                    <span style="font-size: 13.5px; color: var(--hub-text-body);">→ ${q.meaning_vi}</span>
                </div>
                ${freqHtml ? `<div style="margin-bottom: 8px;">${freqHtml}</div>` : ''}
                ${hvDetailHtml}
                <div style="font-size: 13.5px; color: var(--hub-text-body); margin-bottom: 6px;"><strong>📖 Dịch:</strong> ${q.sentence_vi}</div>
                <div style="font-size: 13px; color: var(--hub-text-sub);"><strong style="color: var(--hub-warn-text);">⚡ Bẫy nhiễu:</strong> ${q.trap_note}</div>
            `;
        }

        const qLabelTag = item.bankId === 'pastN3'
            ? `Câu ${i + 1} (${getPastExamShortLabel(q.exam_id)} • ${q.mondai_label} #${q.num})`
            : `Câu ${i + 1} (B${getItemSessionNum(q, item.bankId)}-#${q.num})`;
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 10px;">
                <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                    <span class="q-tag">${qLabelTag}</span>
                    <span style="font-weight: 700; color: ${isCorrect ? 'var(--hub-ok-text)' : 'var(--hub-danger-text)'};">${isCorrect ? '✅ Đúng' : '❌ Sai'}</span>
                    ${isFlagged ? '<span class="streak-pill">🚩 Đã gắn cờ</span>' : ''}
                </div>
                <button class="btn-pill" style="padding: 5px 10px; font-size: 12px;" onclick="speakJapanese('${safeTts}')">
                    <i class="fa-solid fa-volume-high"></i> Nghe câu
                </button>
            </div>
            <div style="font-size: 18px; font-weight: 700; color: var(--hub-text); margin-bottom: 10px;">${item.displayHtml}</div>
            <div style="font-size: 13.5px; color: var(--hub-text-body); display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 10px;">
                <span>Bạn chọn: <strong style="color: ${isCorrect ? 'var(--hub-ok-text)' : 'var(--hub-danger-text)'};">${chosenText}</strong></span>
                <span>Đáp án chuẩn: <strong style="color: var(--hub-ok-text);">${correctText}</strong></span>
            </div>
            ${bodyHtml}
        `;
        container.appendChild(card);
    });

    if (countShown === 0) {
        container.innerHTML = `<div style="text-align: center; padding: 28px; color: var(--hub-ok-text); font-weight: 700;">🎉 Không có câu nào sai hay gắn cờ trong lượt này!</div>`;
    }
}

// ==========================================
// 8. MISTAKE BANK & QUICK-STUDY TABLES (311 KANJI / 80 SYN / 90 KATA / 35 HIRA / 107 M5)
// ==========================================
function renderMistakesView() {
    const container = document.getElementById('mistakes-bank-list');
    const dataset = getBankDataset();
    const isSyn = activeBank === 'syn80';
    const isKata = activeBank === 'kata78';
    const isHira = activeBank === 'hira35';
    const isM3 = activeBank === 'm3_191';
    const isM5 = activeBank === 'm5_107';
    const isGp = isGrammarBank(activeBank);
    const isPast = activeBank === 'pastN3';
    const ids = Object.keys(mistakesMap);
    document.getElementById('top-mistake-count').textContent = ids.length;

    if (ids.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 36px; background: var(--hub-surface-2); border-radius: 14px; color: var(--hub-text-sub);">
                <i class="fa-solid fa-trophy" style="font-size: 36px; color: var(--hub-ok-text); margin-bottom: 10px;"></i>
                <p style="font-size: 15px; font-weight: 600; color: var(--hub-text);">Kho Phục Thù (${getBankCfg().name}) đang sạch bóng!</p>
                <p style="font-size: 13.5px; margin-top: 4px;">Làm bài ở Sảnh hoặc gắn cờ 🚩 / đẩy từ khó nhớ từ Bảng Dò Nhanh để luyện phục thù tại đây.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = '';
    ids.forEach(qid => {
        const q = dataset.find(x => x.id === qid);
        if (!q) return;
        const m = mistakesMap[qid];
        const safeTts = (q.sentence_tts || '').replace(/'/g, "\\'");

        const tagText = isPast
            ? `${getPastExamShortLabel(q.exam_id)} • ${q.mondai_label} #${q.num}`
            : (isGp
                ? `Ca ${q.part} • ${q.topic}${q.exam_tag ? ` (${q.exam_tag})` : ''}`
                : ((isM3 || isM5) ? `Bài ${q.part} • ${q.tier_label}` : (isHira ? `Bài ${q.part} • ${q.category}` : (isKata ? `Bài ${q.part} • ${q.category}` : (isSyn ? `Bài ${q.part}` : `Buổi ${q.session} • M${q.mondai}`)))));
        const headline = isPast
            ? `<strong style="font-size: 15.5px; color: var(--primary);">Đáp án: ${q.options[q.answer]}</strong>`
            : (isGp
                ? `<strong style="font-size: 15.5px; color: var(--primary);">Đáp án: ${q.options[q.answer]}</strong> <span class="gp-rule-pill">${q.pattern_key || q.rule_tag || ''}</span>`
                : ((isM3 || isM5)
                    ? `<strong style="font-size: 17px; color: var(--primary);">${q.word_disp}</strong> <span class="hanviet-pill">${q.collocation.split('/')[0].trim()}</span>`
                    : (isHira
                        ? `<strong style="font-size: 17px; color: var(--primary);">${q.word}</strong> <span class="hanviet-pill">Đồng nghĩa: ${q.syn_jp}</span>`
                        : (isKata
                            ? `<strong style="font-size: 17px; color: var(--primary);">${q.word}</strong> <span class="hanviet-pill">Gốc: ${q.origin}</span> <span style="font-size: 12.5px; color: var(--hub-text-sub);">(${q.native_jp})</span>`
                            : (isSyn
                                ? `<strong style="font-size: 16.5px; color: var(--hub-text);">${q.target_word} ＝ ${q.synonym_word}</strong> <span class="hanviet-pill">${q.meaning_vi}</span>`
                                : `<strong style="font-size: 17px; color: var(--hub-text);">${q.kanji_form}（${q.reading}）</strong> <span class="hanviet-pill">${q.han_viet}</span>`)))));
        const subNote = (isPast || isGp) ? `${q.star_order ? `⭐ ${q.star_order} — ` : ''}${q.explain_vi}` : (isM3 ? q.note_vi : (isM5 ? q.trap_rule : (isHira ? q.nuance_note : (isKata ? q.wasei_note : (isSyn ? q.nuance_note : q.trap_note)))));
        const midLine = (isPast || isGp)
            ? `<em>${q.sentence_vi}</em>`
            : `${isSyn ? '' : q.meaning_vi + ' — '}<em>${q.sentence_vi}</em>`;
        const freqMini = q.freq_badge ? `<span class="freq-pill ${q.freq_badge.startsWith('🔥') ? '' : 'subtle'}">${q.freq_badge}</span>` : '';

        const div = document.createElement('div');
        div.className = 'mistake-item';
        div.innerHTML = `
            <div style="flex: 1; min-width: 240px;">
                <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 5px;">
                    <span class="q-tag">${tagText}</span>
                    <span class="streak-pill">Tiến độ: [${m.streak || 0}/2]</span>
                    ${m.flagged ? '<span class="streak-pill">🚩 Cờ đoán bừa</span>' : ''}
                    ${headline}
                    ${freqMini}
                </div>
                <div style="font-size: 13.5px; color: var(--hub-text-body); margin-bottom: 4px;">
                    ${midLine}
                </div>
                <div style="font-size: 12.5px; color: var(--hub-text-sub);">⚡ ${subNote}</div>
            </div>
            <div style="display: flex; gap: 8px; flex-shrink: 0;">
                <button class="btn-pill" style="padding: 7px 11px;" onclick="speakJapanese('${safeTts}')" title="Nghe phát âm">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
                <button class="btn-pill ok" style="padding: 7px 12px; font-size: 12.5px;" onclick="manualClearMistake('${qid}')">
                    <i class="fa-solid fa-check"></i> Đã thuộc
                </button>
            </div>
        `;
        container.appendChild(div);
    });
}

function setupPairsEvents() {
    const searchEl = document.getElementById('pairs-search-input');
    const catEl = document.getElementById('pairs-cat-select');
    const shufBtn = document.getElementById('pairs-shuffle-btn');

    if (searchEl) searchEl.addEventListener('input', () => renderPairsTable());
    if (catEl) catEl.addEventListener('change', () => renderPairsTable());
    if (shufBtn) shufBtn.addEventListener('click', () => {
        if (activeBank === 'kanji240') {
            currentKanjiOrder = fisherYatesShuffle(currentKanjiOrder);
        } else if (activeBank === 'm3_191') {
            currentM3Order = fisherYatesShuffle(currentM3Order);
        } else if (activeBank === 'm5_107') {
            currentM5Order = fisherYatesShuffle(currentM5Order);
        } else if (activeBank === 'kata78') {
            currentKataOrder = fisherYatesShuffle(currentKataOrder);
        } else if (activeBank === 'hira35') {
            currentHiraOrder = fisherYatesShuffle(currentHiraOrder);
        } else if (activeBank === 'gp_m1') {
            currentGpM1SheetOrder = fisherYatesShuffle(currentGpM1SheetOrder);
        } else if (activeBank === 'gp_star') {
            currentGpStarSheetOrder = fisherYatesShuffle(currentGpStarSheetOrder);
        } else if (activeBank === 'gp_m3') {
            currentGpM3SheetOrder = fisherYatesShuffle(currentGpM3SheetOrder);
        } else {
            currentPairsOrder = fisherYatesShuffle(currentPairsOrder);
        }
        renderPairsTable();
    });
}

function setPairsMaskMode(mode) {
    pairsMaskMode = mode;
    document.getElementById('pairs-mask-none-btn').classList.toggle('primary', mode === 'none');
    document.getElementById('pairs-mask-right-btn').classList.toggle('primary', mode === 'right');
    document.getElementById('pairs-mask-left-btn').classList.toggle('primary', mode === 'left');
    renderPairsTable();
}

function findQuizForPair(pair) {
    return SYNONYM_N3_DATA.find(q =>
        q.target_word.includes(pair.word_a.slice(0, 2)) ||
        pair.word_a.includes(q.target_word.slice(0, 2)) ||
        q.target_reading === pair.read_a ||
        (pair.read_a.length >= 2 && q.target_reading.startsWith(pair.read_a.slice(0, 2))) ||
        (pair.word_b.length >= 2 && q.synonym_word.includes(pair.word_b.slice(0, 2)))
    );
}

function findQuizForKata(kataEntry) {
    return KATAKANA_N3_DATA.find(q => q.id === kataEntry.quiz_id);
}

function findQuizForHira(hiraEntry) {
    return HIRAGANA_35_DATA.find(q => q.id === hiraEntry.quiz_id);
}

function findQuizForKanji(kanjiEntry) {
    return KANJI_240_DATA.find(q => q.id === kanjiEntry.quiz_id);
}

function findQuizForM3(m3Entry) {
    return MONDAI3_191_DATA.find(q => q.id === m3Entry.quiz_id);
}

function findQuizForM5(m5Entry) {
    return MONDAI5_107_DATA.find(q => q.id === m5Entry.quiz_id);
}

function pushPairToRevenge(pairStt) {
    if (activeBank === 'm3_191') {
        if (typeof MONDAI3_191_LIST === 'undefined') return;
        const entry = MONDAI3_191_LIST.find(p => p.stt === pairStt);
        if (!entry) return;
        const match = findQuizForM3(entry);
        if (match) {
            recordMistakeOrFlag(match, true, 'm3_191');
            document.getElementById('top-mistake-count').textContent = Object.keys(mistakesMap).length;
            renderPairsTable();
        }
        return;
    }

    if (activeBank === 'm5_107') {
        if (typeof MONDAI5_107_LIST === 'undefined') return;
        const entry = MONDAI5_107_LIST.find(p => p.stt === pairStt);
        if (!entry) return;
        const match = findQuizForM5(entry);
        if (match) {
            recordMistakeOrFlag(match, true, 'm5_107');
            document.getElementById('top-mistake-count').textContent = Object.keys(mistakesMap).length;
            renderPairsTable();
        }
        return;
    }

    if (activeBank === 'kanji240') {
        if (typeof KANJI_MASTER_LIST === 'undefined') return;
        const entry = KANJI_MASTER_LIST.find(p => p.stt === pairStt);
        if (!entry) return;
        const match = findQuizForKanji(entry);
        if (match) {
            recordMistakeOrFlag(match, true, 'kanji240');
            document.getElementById('top-mistake-count').textContent = Object.keys(mistakesMap).length;
            renderPairsTable();
        }
        return;
    }

    if (activeBank === 'hira35') {
        if (typeof HIRAGANA_35_LIST === 'undefined') return;
        const entry = HIRAGANA_35_LIST.find(p => p.stt === pairStt);
        if (!entry) return;
        const match = findQuizForHira(entry);
        if (match) {
            recordMistakeOrFlag(match, true, 'hira35');
            document.getElementById('top-mistake-count').textContent = Object.keys(mistakesMap).length;
            renderPairsTable();
        }
        return;
    }

    if (activeBank === 'kata78') {
        const entry = KATAKANA_78_LIST.find(p => p.stt === pairStt);
        if (!entry) return;
        const match = findQuizForKata(entry);
        if (match) {
            recordMistakeOrFlag(match, true, 'kata78');
            document.getElementById('top-mistake-count').textContent = Object.keys(mistakesMap).length;
            renderPairsTable();
        }
        return;
    }

    const pair = SYNONYM_80_PAIRS.find(p => p.stt === pairStt);
    if (!pair) return;
    const match = findQuizForPair(pair);
    if (match) {
        recordMistakeOrFlag(match, true, 'syn80');
        document.getElementById('top-mistake-count').textContent = Object.keys(mistakesMap).length;
        renderPairsTable();
    }
}

function renderPairsTable() {
    const container = document.getElementById('pairs-grid-container');
    const countBar = document.getElementById('pairs-count-bar');
    if (!container) return;

    const q = (document.getElementById('pairs-search-input').value || '').trim().toLowerCase();
    const cat = document.getElementById('pairs-cat-select').value;
    const isMaskedInit = pairsMaskMode !== 'none';

    const renderEmpty = () => {
        container.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 28px; color: var(--hub-text-sub); background: var(--hub-surface-2); border-radius: 12px;">Không tìm thấy mục nào khớp bộ lọc / từ khóa này.</div>`;
    };

    if (isGrammarBank(activeBank)) {
        const srcOrder = activeBank === 'gp_m1'
            ? currentGpM1SheetOrder
            : (activeBank === 'gp_star' ? currentGpStarSheetOrder : currentGpM3SheetOrder);
        const totalSrc = activeBank === 'gp_m1'
            ? (typeof GP_M1_CHEATSHEET !== 'undefined' ? GP_M1_CHEATSHEET.length : 0)
            : (activeBank === 'gp_star'
                ? (typeof GP_STAR_CHEATSHEET !== 'undefined' ? GP_STAR_CHEATSHEET.length : 0)
                : (typeof GP_M3_CHEATSHEET !== 'undefined' ? GP_M3_CHEATSHEET.length : 0));
        const list = srcOrder.filter(p => {
            const catOk = cat === 'all' || p.category === cat;
            const qOk = !q ||
                (p.left_main || '').toLowerCase().includes(q) ||
                (p.left_sub || '').toLowerCase().includes(q) ||
                (p.right_main || '').toLowerCase().includes(q) ||
                (p.right_sub || '').toLowerCase().includes(q) ||
                (p.example_jp || '').toLowerCase().includes(q) ||
                (p.example_vi || '').toLowerCase().includes(q) ||
                (p.trap_note || '').toLowerCase().includes(q) ||
                (p.category || '').toLowerCase().includes(q);
            return catOk && qOk;
        });

        const sheetLbl = activeBank === 'gp_m1'
            ? 'thẻ công thức & bẫy Ngữ Pháp M1 (Taisaku Ch2)'
            : (activeBank === 'gp_star' ? 'công thức ghép xương câu Dấu Sao ★ (Taisaku Ch3)' : 'thẻ Liên từ & Quy tắc Chỉ thị từ こ・そ・あ (Taisaku Ch4)');
        if (countBar) countBar.textContent = `Đang hiển thị ${list.length} / ${totalSrc} ${sheetLbl} — Bấm thẻ bị che để tự dò bài!`;
        if (list.length === 0) { renderEmpty(); return; }

        container.innerHTML = '';
        list.forEach(p => {
            const safeTts = (p.tts || p.example_jp || '').replace(/'/g, "\\'");
            const card = document.createElement('div');
            card.className = 'pair-card';
            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; gap: 6px; flex-wrap: wrap;">
                    <span class="q-tag">#${p.stt} • ${p.category}</span>
                    ${safeTts ? `<button class="btn-pill" style="padding: 4px 9px; font-size: 11.5px;" onclick="speakJapanese('${safeTts}')" title="Nghe câu ví dụ tiếng Nhật"><i class="fa-solid fa-volume-high"></i> Nghe ví dụ</button>` : ''}
                </div>
                <div class="pair-eq-row">
                    <div class="pair-side pair-side-left ${pairsMaskMode === 'left' ? 'masked' : ''}" onclick="togglePairCardMask(this)" style="text-align: left;">
                        <div class="pair-word-main" style="color: var(--primary); font-size: 15px; line-height: 1.4;">${p.left_main}</div>
                        <div class="pair-word-read" style="margin-top: 3px;">${p.left_sub}</div>
                    </div>
                    <strong style="color: var(--primary); font-size: 15px;">🔑</strong>
                    <div class="pair-side pair-side-right ${pairsMaskMode === 'right' ? 'masked' : ''}" onclick="togglePairCardMask(this)" style="text-align: left;">
                        <div class="pair-word-main" style="font-size: 13.5px; line-height: 1.42;">${p.right_main}</div>
                        ${p.right_sub ? `<div class="pair-word-read" style="margin-top: 3px;">${p.right_sub}</div>` : ''}
                    </div>
                </div>
                <div class="pair-meaning ${isMaskedInit ? 'masked' : ''}" data-mask-label="🙈 Đã ẩn Ví dụ & Mẹo tránh bẫy (Bấm để mở)" onclick="togglePairCardMask(this)" style="text-align: left; font-weight: 500; font-size: 12.3px; line-height: 1.48;">
                    <div style="color: var(--hub-text); margin-bottom: 4px;"><strong>📖 Ví dụ:</strong> ${p.example_jp} <span style="color: var(--hub-text-sub);">(${p.example_vi})</span></div>
                    <div style="color: var(--hub-warn-text);">${p.trap_note}</div>
                </div>
            `;
            container.appendChild(card);
        });
        return;
    }

    if (activeBank === 'm3_191') {
        if (typeof MONDAI3_191_LIST === 'undefined') return;
        const list = currentM3Order.filter(p => {
            let catOk = true;
            if (cat === 'core') catOk = p.tier === 'core';
            else if (cat === 'rep2') catOk = p.part === 1;
            else if (cat === 'recent') catOk = p.part === 2;
            else if (cat === 'full') catOk = p.tier === 'full';
            else if (cat !== 'all') catOk = p.category === cat;

            const qOk = !q ||
                p.word.toLowerCase().includes(q) ||
                p.reading.toLowerCase().includes(q) ||
                p.meaning_vi.toLowerCase().includes(q) ||
                p.collocation.toLowerCase().includes(q) ||
                p.note_vi.toLowerCase().includes(q) ||
                (p.freq_exams || '').toLowerCase().includes(q);
            return catOk && qOk;
        });

        if (countBar) countBar.textContent = `Đang hiển thị ${list.length} / ${MONDAI3_191_LIST.length} từ Mondai 3 (⭐ Trọng tâm: 97 • 🛡️ Phủ kín: 94 — Phát âm chuẩn bằng Hiragana)`;
        if (list.length === 0) { renderEmpty(); return; }

        container.innerHTML = '';
        list.forEach(p => {
            const safeRead = (p.reading || '').replace(/'/g, "\\'");
            const safeSent = (p.sample_jp || '').replace(/'/g, "\\'");
            const inRevenge = !!mistakesMap[p.quiz_id];
            const tierCls = p.tier === 'core' ? 'core' : 'full';
            const isHot = (p.freq_badge || '').startsWith('🔥');

            const card = document.createElement('div');
            card.className = 'pair-card';
            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; gap: 6px; flex-wrap: wrap;">
                    <div style="display: flex; align-items: center; gap: 5px; flex-wrap: wrap;">
                        <span class="q-tag">#${p.stt} • B${p.part}</span>
                        <span class="tier-pill ${tierCls}">${p.tier_label}</span>
                    </div>
                    <div style="display: flex; gap: 6px;">
                        <button class="btn-pill" style="padding: 4px 8px; font-size: 11.5px;" onclick="speakJapanese('${safeRead}')" title="Nghe phát âm từ">
                            <i class="fa-solid fa-volume-low"></i>
                        </button>
                        <button class="btn-pill" style="padding: 4px 8px; font-size: 11.5px;" onclick="speakJapanese('${safeSent}')" title="Nghe câu ví dụ">
                            <i class="fa-solid fa-volume-high"></i>
                        </button>
                        <button class="btn-pill ${inRevenge ? 'warn' : 'danger'}" style="padding: 4px 9px; font-size: 11.5px;" onclick="pushPairToRevenge(${p.stt})" title="Đẩy câu này vào Kho Phục Thù [2/2]">
                            <i class="fa-solid fa-fire"></i> ${inRevenge ? 'Trong kho' : 'Ôn lại'}
                        </button>
                    </div>
                </div>
                <div class="pair-eq-row">
                    <div class="pair-side pair-side-left ${pairsMaskMode === 'left' ? 'masked' : ''}" onclick="togglePairCardMask(this)">
                        <div class="pair-word-main" style="color: var(--primary); font-size: 18px;">${p.word}</div>
                        <div class="pair-word-read">${p.reading} • ${p.category}</div>
                    </div>
                    <strong style="color: var(--primary); font-size: 15px;">→</strong>
                    <div class="pair-side pair-side-right ${pairsMaskMode === 'right' ? 'masked' : ''}" onclick="togglePairCardMask(this)" style="text-align: left;">
                        <div class="pair-word-main" style="font-size: 14px; line-height: 1.4;">${p.meaning_vi}</div>
                        <div class="pair-word-read" style="margin-top: 2px;">🔑 ${p.collocation}</div>
                    </div>
                </div>
                <div class="pair-meaning ${isMaskedInit ? 'masked' : ''}" data-mask-label="🙈 Đã ẩn Câu mẫu, Mẹo & Tần suất (Bấm để mở)" onclick="togglePairCardMask(this)" style="text-align: left; font-weight: 500; font-size: 12.2px; line-height: 1.48;">
                    <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 6px; margin-bottom: 4px;">
                        <span class="freq-pill ${isHot ? '' : 'subtle'}">${p.freq_badge}</span>
                        <span style="color: var(--hub-text-sub); font-size: 11px;">${p.freq_exams}</span>
                    </div>
                    <div style="color: var(--hub-text); margin-bottom: 3px;"><strong>📖 Ví dụ:</strong> ${p.sample_jp} <span style="color: var(--hub-text-sub);">(${p.sample_vi})</span></div>
                    <div style="color: var(--hub-text-sub);">💡 ${p.note_vi}</div>
                </div>
            `;
            container.appendChild(card);
        });
        return;
    }

    if (activeBank === 'm5_107') {
        if (typeof MONDAI5_107_LIST === 'undefined') return;
        const list = currentM5Order.filter(p => {
            let catOk = true;
            if (cat === 'core') catOk = p.tier === 'core';
            else if (cat === 'top22') catOk = (p.freq_m5 || 0) >= 2;
            else if (cat === 'full') catOk = p.tier === 'full';
            else if (cat !== 'all') catOk = (p.pos || '').startsWith(cat);

            const qOk = !q ||
                p.word.toLowerCase().includes(q) ||
                p.reading.toLowerCase().includes(q) ||
                p.meaning_vi.toLowerCase().includes(q) ||
                p.collocation.toLowerCase().includes(q) ||
                p.trap_rule.toLowerCase().includes(q) ||
                (p.freq_exams || '').toLowerCase().includes(q);
            return catOk && qOk;
        });

        if (countBar) countBar.textContent = `Đang hiển thị ${list.length} / ${MONDAI5_107_LIST.length} từ Mondai 5 (⭐ Trọng tâm: 65 • 🛡️ Phủ kín: 42 — Phát âm chuẩn bằng Hiragana)`;
        if (list.length === 0) { renderEmpty(); return; }

        container.innerHTML = '';
        list.forEach(p => {
            const safeRead = (p.reading || '').replace(/'/g, "\\'");
            const safeSent = (p.sample_jp || '').replace(/'/g, "\\'");
            const inRevenge = !!mistakesMap[p.quiz_id];
            const tierCls = p.tier === 'core' ? 'core' : 'full';
            const isHot = (p.freq_badge || '').startsWith('🔥');

            const card = document.createElement('div');
            card.className = 'pair-card';
            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; gap: 6px; flex-wrap: wrap;">
                    <div style="display: flex; align-items: center; gap: 5px; flex-wrap: wrap;">
                        <span class="q-tag">#${p.stt} • B${p.part}</span>
                        <span class="tier-pill ${tierCls}">${p.tier_label}</span>
                    </div>
                    <div style="display: flex; gap: 6px;">
                        <button class="btn-pill" style="padding: 4px 8px; font-size: 11.5px;" onclick="speakJapanese('${safeRead}')" title="Nghe phát âm từ">
                            <i class="fa-solid fa-volume-low"></i>
                        </button>
                        <button class="btn-pill" style="padding: 4px 8px; font-size: 11.5px;" onclick="speakJapanese('${safeSent}')" title="Nghe câu ví dụ chuẩn">
                            <i class="fa-solid fa-volume-high"></i>
                        </button>
                        <button class="btn-pill ${inRevenge ? 'warn' : 'danger'}" style="padding: 4px 9px; font-size: 11.5px;" onclick="pushPairToRevenge(${p.stt})" title="Đẩy câu này vào Kho Phục Thù [2/2]">
                            <i class="fa-solid fa-fire"></i> ${inRevenge ? 'Trong kho' : 'Ôn lại'}
                        </button>
                    </div>
                </div>
                <div class="pair-eq-row">
                    <div class="pair-side pair-side-left ${pairsMaskMode === 'left' ? 'masked' : ''}" onclick="togglePairCardMask(this)">
                        <div class="pair-word-main" style="color: var(--primary); font-size: 18px;">${p.word}</div>
                        <div class="pair-word-read">${p.reading} • ${p.meaning_vi}</div>
                    </div>
                    <strong style="color: var(--primary); font-size: 15px;">🔑</strong>
                    <div class="pair-side pair-side-right ${pairsMaskMode === 'right' ? 'masked' : ''}" onclick="togglePairCardMask(this)" style="text-align: left;">
                        <div class="pair-word-main" style="font-size: 13.5px; line-height: 1.4;">${p.collocation}</div>
                        <div class="pair-word-read" style="margin-top: 2px;">${p.pos}</div>
                    </div>
                </div>
                <div class="pair-meaning ${isMaskedInit ? 'masked' : ''}" data-mask-label="🙈 Đã ẩn Bẫy, Câu chuẩn & Tần suất (Bấm để mở)" onclick="togglePairCardMask(this)" style="text-align: left; font-weight: 500; font-size: 12.2px; line-height: 1.48;">
                    <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 6px; margin-bottom: 4px;">
                        <span class="freq-pill ${isHot ? '' : 'subtle'}">${p.freq_badge}</span>
                        <span style="color: var(--hub-text-sub); font-size: 11px;">${p.freq_exams}</span>
                    </div>
                    <div style="color: var(--hub-text); margin-bottom: 3px;"><strong>✅ Câu chuẩn:</strong> ${p.sample_jp} <span style="color: var(--hub-text-sub);">(${p.sample_vi})</span></div>
                    <div style="color: var(--hub-warn-text);">⚠️ ${p.trap_rule}</div>
                </div>
            `;
            container.appendChild(card);
        });
        return;
    }

    if (activeBank === 'kanji240') {
        if (typeof KANJI_MASTER_LIST === 'undefined') return;
        const list = currentKanjiOrder.filter(p => {
            let catOk = true;
            if (cat === 'new112') catOk = !!p.is_new;
            else if (cat === 'both') catOk = p.dir_type === 'both';
            else if (cat === 'ge2') catOk = (p.count_m12 || 0) >= 2;
            else if (cat === 'm1') catOk = p.dir_type === 'm1';
            else if (cat === 'm2') catOk = p.dir_type === 'm2';
            else if (cat === 's5') catOk = p.session === 5;
            else if (cat === 's6') catOk = p.session === 6;

            const qOk = !q ||
                p.word.toLowerCase().includes(q) ||
                p.reading.toLowerCase().includes(q) ||
                (p.han_viet || '').toLowerCase().includes(q) ||
                (p.meaning_vi || '').toLowerCase().includes(q) ||
                (p.exams_str || '').toLowerCase().includes(q) ||
                (p.trap_note || '').toLowerCase().includes(q);
            return catOk && qOk;
        });

        if (countBar) countBar.textContent = `Đang hiển thị ${list.length} / ${KANJI_MASTER_LIST.length} từ Kanji N3 độc nhất (Bấm loa nghe phát âm tiếng Nhật bằng Hiragana chuẩn)`;
        if (list.length === 0) { renderEmpty(); return; }

        container.innerHTML = '';
        list.forEach(p => {
            // ALWAYS pass pure Hiragana reading to TTS so Windows SAPI never switches to Chinese!
            const safeRead = (p.reading || '').replace(/'/g, "\\'");
            const inRevenge = !!mistakesMap[p.quiz_id];
            const isHot = (p.badge || '').startsWith('🔥');

            const card = document.createElement('div');
            card.className = 'pair-card';
            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; gap: 6px;">
                    <span class="q-tag">#${p.stt} • B${p.session}${p.is_new ? ' 🆕' : ''} • ${p.dir_lbl}</span>
                    <div style="display: flex; gap: 6px;">
                        <button class="btn-pill" style="padding: 4px 9px; font-size: 12px;" onclick="speakJapanese('${safeRead}')" title="Nghe phát âm chuẩn tiếng Nhật">
                            <i class="fa-solid fa-volume-high"></i>
                        </button>
                        <button class="btn-pill ${inRevenge ? 'warn' : 'danger'}" style="padding: 4px 9px; font-size: 11.5px;" onclick="pushPairToRevenge(${p.stt})" title="Đẩy câu này vào Kho Phục Thù [2/2]">
                            <i class="fa-solid fa-fire"></i> ${inRevenge ? 'Trong kho' : 'Ôn lại'}
                        </button>
                    </div>
                </div>
                <div class="pair-eq-row">
                    <div class="pair-side pair-side-left ${pairsMaskMode === 'left' ? 'masked' : ''}" onclick="togglePairCardMask(this)">
                        <div class="pair-word-main" style="font-size: 20px;">${p.word}</div>
                        <div class="pair-word-read" style="color: var(--hub-warn-text); font-weight: 700;">${p.han_viet}</div>
                    </div>
                    <strong style="color: var(--primary); font-size: 16px;">⇄</strong>
                    <div class="pair-side pair-side-right ${pairsMaskMode === 'right' ? 'masked' : ''}" onclick="togglePairCardMask(this)">
                        <div class="pair-word-main" style="color: var(--primary); font-size: 16px;">${p.reading}</div>
                        <div class="pair-word-read">${p.meaning_vi}</div>
                    </div>
                </div>
                <div class="pair-meaning ${isMaskedInit ? 'masked' : ''}" data-mask-label="🙈 Đã ẩn Tần suất đề thật & Bẫy nhiễu (Bấm để mở)" onclick="togglePairCardMask(this)" style="text-align: left; font-weight: 500; font-size: 12.2px; line-height: 1.45;">
                    <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 6px; margin-bottom: 3px;">
                        <span class="freq-pill ${isHot ? '' : 'subtle'}">${p.badge}</span>
                        <span style="color: var(--hub-text-sub); font-size: 11.5px;">${p.exams_str}</span>
                    </div>
                    <div style="color: var(--hub-text-sub);">💡 ${p.trap_note}</div>
                </div>
            `;
            container.appendChild(card);
        });
        return;
    }

    if (activeBank === 'hira35') {
        if (typeof HIRAGANA_35_LIST === 'undefined') return;
        const list = currentHiraOrder.filter(p => {
            const catOk = cat === 'all' || (cat === 'top12' ? (p.freq_count || 0) >= 3 : p.category === cat);
            const qOk = !q ||
                p.word.toLowerCase().includes(q) ||
                (p.syn_jp || '').toLowerCase().includes(q) ||
                p.meaning_vi.toLowerCase().includes(q) ||
                (p.nuance_note || '').toLowerCase().includes(q) ||
                (p.freq_exams || '').toLowerCase().includes(q);
            return catOk && qOk;
        });

        if (countBar) countBar.textContent = `Đang hiển thị ${list.length} / ${HIRAGANA_35_LIST.length} từ Hiragana, phó từ & từ láy tủ N3 (2010–2026)`;
        if (list.length === 0) { renderEmpty(); return; }

        container.innerHTML = '';
        list.forEach(p => {
            const safeWord = p.word.replace(/'/g, "\\'");
            const inRevenge = !!mistakesMap[p.quiz_id];

            const card = document.createElement('div');
            card.className = 'pair-card';
            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; gap: 6px;">
                    <span class="q-tag">#${p.stt} • ${p.category}</span>
                    <div style="display: flex; gap: 6px;">
                        <button class="btn-pill" style="padding: 4px 9px; font-size: 12px;" onclick="speakJapanese('${safeWord}')" title="Nghe phát âm chuẩn Nhật">
                            <i class="fa-solid fa-volume-high"></i>
                        </button>
                        <button class="btn-pill ${inRevenge ? 'warn' : 'danger'}" style="padding: 4px 9px; font-size: 11.5px;" onclick="pushPairToRevenge(${p.stt})" title="Đẩy vào Kho Phục Thù [2/2]">
                            <i class="fa-solid fa-fire"></i> ${inRevenge ? 'Trong kho' : 'Ôn lại'}
                        </button>
                    </div>
                </div>
                <div class="pair-eq-row">
                    <div class="pair-side pair-side-left ${pairsMaskMode === 'left' ? 'masked' : ''}" onclick="togglePairCardMask(this)">
                        <div class="pair-word-main" style="color: var(--primary); font-size: 18px;">${p.word}</div>
                        <div class="pair-word-read">🔥 Ra ${p.freq_count} lần đề thật</div>
                    </div>
                    <strong style="color: var(--primary); font-size: 16px;">→</strong>
                    <div class="pair-side pair-side-right ${pairsMaskMode === 'right' ? 'masked' : ''}" onclick="togglePairCardMask(this)">
                        <div class="pair-word-main" style="font-size: 14.5px;">${p.meaning_vi}</div>
                        <div class="pair-word-read">＝ ${p.syn_jp}</div>
                    </div>
                </div>
                <div class="pair-meaning ${isMaskedInit ? 'masked' : ''}" data-mask-label="🙈 Đã ẩn Kỳ thi & Mẹo nhớ (Bấm để mở)" onclick="togglePairCardMask(this)" style="text-align: left; font-weight: 500; font-size: 12.2px; line-height: 1.45;">
                    <div style="margin-bottom: 3px;"><span class="freq-pill">${p.freq_badge}</span></div>
                    <div style="color: var(--hub-text-sub);">💡 ${p.nuance_note}</div>
                </div>
            `;
            container.appendChild(card);
        });
        return;
    }

    if (activeBank === 'kata78') {
        if (typeof KATAKANA_78_LIST === 'undefined') return;
        const list = currentKataOrder.filter(p => {
            const catOk = cat === 'all'
                || (cat === 'extra12' ? !!p.is_extra : (cat === 'freq' ? (p.freq_count || 0) >= 1 : p.category === cat));
            const qOk = !q ||
                p.word.toLowerCase().includes(q) ||
                p.origin.toLowerCase().includes(q) ||
                p.native_jp.toLowerCase().includes(q) ||
                p.meaning_vi.toLowerCase().includes(q) ||
                p.wasei_note.toLowerCase().includes(q) ||
                (p.freq_exams || '').toLowerCase().includes(q);
            return catOk && qOk;
        });

        if (countBar) countBar.textContent = `Đang hiển thị ${list.length} / ${KATAKANA_78_LIST.length} từ Katakana N3 (78 gốc + 12 bổ sung đề thật)`;
        if (list.length === 0) { renderEmpty(); return; }

        container.innerHTML = '';
        list.forEach(p => {
            const safeWord = p.word.replace(/'/g, "\\'");
            const inRevenge = !!mistakesMap[p.quiz_id];
            const freqLine = p.freq_badge
                ? `<div style="margin-bottom: 3px;"><span class="freq-pill ${p.freq_badge.startsWith('🔥') ? '' : 'subtle'}">${p.freq_badge}</span></div>`
                : '';

            const card = document.createElement('div');
            card.className = 'pair-card';
            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; gap: 6px;">
                    <span class="q-tag">#${p.stt}${p.is_extra ? ' 🆕' : ''} • ${p.category}</span>
                    <div style="display: flex; gap: 6px;">
                        <button class="btn-pill" style="padding: 4px 9px; font-size: 12px;" onclick="speakJapanese('${safeWord}')" title="Nghe phát âm Katakana chuẩn Nhật">
                            <i class="fa-solid fa-volume-high"></i>
                        </button>
                        <button class="btn-pill ${inRevenge ? 'warn' : 'danger'}" style="padding: 4px 9px; font-size: 11.5px;" onclick="pushPairToRevenge(${p.stt})" title="Đẩy vào Kho Phục Thù [2/2]">
                            <i class="fa-solid fa-fire"></i> ${inRevenge ? 'Trong kho' : 'Ôn lại'}
                        </button>
                    </div>
                </div>
                <div class="pair-eq-row">
                    <div class="pair-side pair-side-left ${pairsMaskMode === 'left' ? 'masked' : ''}" onclick="togglePairCardMask(this)">
                        <div class="pair-word-main" style="color: var(--primary);">${p.word}</div>
                        <div class="pair-word-read">Katakana N3 • #${p.stt}${p.is_extra ? ' (Đề thật)' : ''}</div>
                    </div>
                    <strong style="color: var(--primary); font-size: 16px;">→</strong>
                    <div class="pair-side pair-side-right ${pairsMaskMode === 'right' ? 'masked' : ''}" onclick="togglePairCardMask(this)">
                        <div class="pair-word-main" style="font-size: 14.5px;">${p.meaning_vi}</div>
                        <div class="pair-word-read">${p.category}</div>
                    </div>
                </div>
                <div class="pair-meaning ${isMaskedInit ? 'masked' : ''}" data-mask-label="🙈 Đã ẩn Từ gốc, Thuần Nhật & Mẹo (Bấm để mở)" onclick="togglePairCardMask(this)" style="text-align: left; font-weight: 500; font-size: 12.5px; line-height: 1.45;">
                    ${freqLine}
                    <div><strong>🌐 Gốc:</strong> ${p.origin} &nbsp;|&nbsp; <strong>🇯🇵 Thuần Nhật:</strong> ${p.native_jp}</div>
                    <div style="color: var(--hub-text-sub); margin-top: 2px;">💡 ${p.wasei_note}</div>
                </div>
            `;
            container.appendChild(card);
        });
        return;
    }

    if (typeof SYNONYM_80_PAIRS === 'undefined') return;
    const list = currentPairsOrder.filter(p => {
        const catOk = cat === 'all' || p.category === cat;
        const qOk = !q ||
            p.word_a.toLowerCase().includes(q) ||
            p.read_a.toLowerCase().includes(q) ||
            p.word_b.toLowerCase().includes(q) ||
            p.read_b.toLowerCase().includes(q) ||
            p.meaning_vi.toLowerCase().includes(q);
        return catOk && qOk;
    });

    if (countBar) countBar.textContent = `Đang hiển thị ${list.length} / ${SYNONYM_80_PAIRS.length} cặp từ đồng nghĩa N3 (A ＝ B)`;
    if (list.length === 0) { renderEmpty(); return; }

    container.innerHTML = '';
    list.forEach(p => {
        // Use pure Hiragana/Katakana readings for TTS so it never triggers Chinese Kanji pronunciation
        const cleanReadB = p.read_b.split('/')[0].trim();
        const safeKanaTts = `${p.read_a}。${cleanReadB}`.replace(/'/g, "\\'");
        const safeReadA = p.read_a.replace(/'/g, "\\'");
        const safeReadB = cleanReadB.replace(/'/g, "\\'");
        const matchQ = findQuizForPair(p);
        const inRevenge = matchQ && !!mistakesMap[matchQ.id];

        const card = document.createElement('div');
        card.className = 'pair-card';
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="q-tag">#${p.stt} • ${p.category}</span>
                <div style="display: flex; gap: 6px;">
                    <button class="btn-pill" style="padding: 4px 9px; font-size: 12px;" onclick="speakPairAudio(this, '${safeKanaTts}', '${safeReadA}', '${safeReadB}')" title="Nghe phát âm chuẩn tiếng Nhật">
                        <i class="fa-solid fa-volume-high"></i>
                    </button>
                    <button class="btn-pill ${inRevenge ? 'warn' : 'danger'}" style="padding: 4px 9px; font-size: 11.5px;" onclick="pushPairToRevenge(${p.stt})" title="Đẩy vào Kho Phục Thù [2/2]">
                        <i class="fa-solid fa-fire"></i> ${inRevenge ? 'Trong kho' : 'Ôn lại'}
                    </button>
                </div>
            </div>
            <div class="pair-eq-row">
                <div class="pair-side pair-side-left ${pairsMaskMode === 'left' ? 'masked' : ''}" onclick="togglePairCardMask(this)">
                    <div class="pair-word-main">${p.word_a}</div>
                    <div class="pair-word-read">${p.read_a}</div>
                </div>
                <strong style="color: var(--primary); font-size: 18px;">＝</strong>
                <div class="pair-side pair-side-right ${pairsMaskMode === 'right' ? 'masked' : ''}" onclick="togglePairCardMask(this)">
                    <div class="pair-word-main" style="color: var(--primary);">${p.word_b}</div>
                    <div class="pair-word-read">${p.read_b}</div>
                </div>
            </div>
            <div class="pair-meaning ${isMaskedInit ? 'masked' : ''}" data-mask-label="🙈 Đã ẩn nghĩa tiếng Việt (Bấm để mở)" onclick="togglePairCardMask(this)">
                ${p.meaning_vi}
            </div>
        `;
        container.appendChild(card);
    });
}

function togglePairCardMask(el) {
    const card = el.closest('.pair-card');
    if (!card || pairsMaskMode === 'none') return;
    const targetSide = card.querySelector(pairsMaskMode === 'left' ? '.pair-side-left' : '.pair-side-right');
    const meaningBox = card.querySelector('.pair-meaning');
    const currentlyMasked = (targetSide && targetSide.classList.contains('masked')) || (meaningBox && meaningBox.classList.contains('masked'));
    if (targetSide) targetSide.classList.toggle('masked', !currentlyMasked);
    if (meaningBox) meaningBox.classList.toggle('masked', !currentlyMasked);
}

function speakPairAudio(btnEl, fullKana, readA, readB) {
    const card = btnEl.closest('.pair-card');
    if (card) {
        const leftMasked = card.querySelector('.pair-side-left')?.classList.contains('masked');
        const rightMasked = card.querySelector('.pair-side-right')?.classList.contains('masked');
        // If one side is masked, only speak the visible side so audio doesn't spoil the hidden answer!
        if (rightMasked && !leftMasked) {
            speakJapanese(readA);
            return;
        }
        if (leftMasked && !rightMasked) {
            speakJapanese(readB);
            return;
        }
    }
    speakJapanese(fullKana);
}

// ==========================================
// 9. KEYBOARD SHORTCUTS, TTS & REPORT
// ==========================================
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (!activeSession || activeSession.finished) return;
        if (document.getElementById('view-exam').style.display !== 'block') return;
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;

        if (['1', '2', '3', '4'].includes(e.key)) {
            e.preventDefault();
            handleSelectOption(parseInt(e.key, 10) - 1);
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            document.getElementById('q-next-btn').click();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            document.getElementById('q-prev-btn').click();
        } else if (e.key.toLowerCase() === 'f') {
            e.preventDefault();
            toggleCurrentFlag();
        } else if (e.key === 'Enter') {
            e.preventDefault();
            document.getElementById('q-next-btn').click();
        } else if (e.code === 'Space') {
            const idx = activeSession.currentIndex;
            if (activeSession.mode === 'drill' && activeSession.answers[idx] !== null) {
                e.preventDefault();
                speakJapanese(activeSession.items[idx].orig.sentence_tts);
            }
        }
    });
}

// Pre-warm browser voices & prevent Windows SAPI from routing Kanji to Chinese (zh-CN) TTS!
let cachedJaVoice = null;
let activeCloudAudio = null;

function findBestJapaneseVoice() {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices() || [];
    const jaVoices = voices.filter(v => {
        const lang = (v.lang || '').toLowerCase().replace('_', '-');
        const name = (v.name || '').toLowerCase();
        return lang.startsWith('ja') || name.includes('japanese') || name.includes('日本語');
    });
    if (jaVoices.length === 0) return null;
    // Prefer natural neural voices (Google 日本語, Microsoft Nanami/Keita/Haruka/Ayumi, Kyoko)
    return jaVoices.find(v => /google|nanami|keita|haruka|ayumi|ichiro|kyoko|siri/i.test(v.name)) || jaVoices[0];
}

if ('speechSynthesis' in window) {
    cachedJaVoice = findBestJapaneseVoice();
    window.speechSynthesis.onvoiceschanged = () => {
        cachedJaVoice = findBestJapaneseVoice();
    };
}

function playCloudJapaneseTts(text, rate = 0.95) {
    try {
        if (activeCloudAudio) {
            activeCloudAudio.pause();
            activeCloudAudio = null;
        }
        const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=ja&q=${encodeURIComponent(text)}`;
        const audio = new Audio(url);
        audio.referrerPolicy = 'no-referrer';
        audio.playbackRate = rate;
        activeCloudAudio = audio;
        audio.play().catch(() => {});
    } catch (e) {}
}

function speakJapanese(text, rate = 0.95) {
    if (!text) return;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
    const jaVoice = cachedJaVoice || findBestJapaneseVoice();
    if (jaVoice) {
        cachedJaVoice = jaVoice;
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = jaVoice.lang || 'ja-JP';
        utter.voice = jaVoice;
        utter.rate = rate;
        window.speechSynthesis.speak(utter);
        return;
    }
    // If voices haven't populated yet on first click, wait 120ms and re-check before falling back to Cloud Native ja-JP Audio
    setTimeout(() => {
        const retryVoice = findBestJapaneseVoice();
        if (retryVoice) {
            cachedJaVoice = retryVoice;
            const utter = new SpeechSynthesisUtterance(text);
            utter.lang = retryVoice.lang || 'ja-JP';
            utter.voice = retryVoice;
            utter.rate = rate;
            window.speechSynthesis.speak(utter);
        } else {
            // No local ja-JP pack installed on Windows (prevents Windows from using Chinese zh-CN voice!)
            playCloudJapaneseTts(text, rate);
        }
    }, 120);
}

function buildAntigravityReport() {
    const dataset = getBankDataset();
    const isSyn = activeBank === 'syn80';
    const isKata = activeBank === 'kata78';
    const isHira = activeBank === 'hira35';
    const isM3 = activeBank === 'm3_191';
    const isM5 = activeBank === 'm5_107';
    const isGp = isGrammarBank(activeBank);
    const isPast = activeBank === 'pastN3';
    const ids = Object.keys(mistakesMap);
    const m1Acc = historyData.m1Total > 0 ? `${Math.round((historyData.m1Correct / historyData.m1Total) * 100)}%` : '--';
    const m2Acc = historyData.m2Total > 0 ? `${Math.round((historyData.m2Correct / historyData.m2Total) * 100)}%` : '--';
    const topItems = ids.slice(0, 15).map((id, idx) => {
        const q = dataset.find(x => x.id === id);
        if (!q) return '';
        const m = mistakesMap[id];
        if (isPast) {
            return `${idx + 1}. [${getPastExamShortLabel(q.exam_id)} • ${q.mondai_label} #${q.num} | ${m.streak}/2] Đáp án: ${q.options[q.answer]} — ${q.sentence_vi} | ${q.explain_vi}`;
        }
        if (isGp) {
            return `${idx + 1}. [Ca ${q.part} • ${q.topic} #${q.num} | ${m.streak}/2] [${q.pattern_key || q.rule_tag || ''}] Đáp án: ${q.options[q.answer]}${q.star_order ? ` | ★ ${q.star_order}` : ''} — ${q.sentence_vi} | ${q.explain_vi}`;
        }
        if (isM3) {
            return `${idx + 1}. [Bài ${q.part} | ${m.streak}/2] ${q.word_disp} — ${q.meaning_vi} | Cụm: ${q.collocation} | ${q.note_vi}`;
        }
        if (isM5) {
            return `${idx + 1}. [Bài ${q.part} | ${m.streak}/2] ${q.word_disp} — ${q.meaning_vi} | Công thức: ${q.collocation} | Bẫy: ${q.trap_rule}`;
        }
        if (isHira) {
            return `${idx + 1}. [Bài ${q.part} | ${m.streak}/2] ${q.word} (${q.syn_jp}) — ${q.meaning_vi} | ${q.nuance_note}`;
        }
        if (isKata) {
            return `${idx + 1}. [Bài ${q.part} | ${m.streak}/2] ${q.word} (${q.origin} • ${q.native_jp}) — ${q.meaning_vi} | ${q.wasei_note}`;
        }
        return isSyn
            ? `${idx + 1}. [Bài ${q.part} | ${m.streak}/2] ${q.target_word} ＝ ${q.synonym_word} (${q.meaning_vi}) | ${q.nuance_note}`
            : `${idx + 1}. [B${q.session}-M${q.mondai} | ${m.streak}/2] ${q.kanji_form}（${q.reading}）[${q.han_viet}] — ${q.meaning_vi} | Bẫy: ${q.trap_note}`;
    }).filter(Boolean).join('\n');

    const accLine = isPast
        ? `Kiến thức ngôn ngữ (TV+NP) ${m1Acc} | Đọc hiểu (Dokkai) ${m2Acc}`
        : (isGp
            ? `Câu Cơ bản (☆) ${m1Acc} | Câu Nâng cao/Bẫy (☆☆) ${m2Acc}`
            : (isM3
                ? `Mondai 3 Xuôi ${m1Acc} | Đảo M3→Nghĩa ${m2Acc}`
                : (isM5
                    ? `Mondai 5 Chuẩn ${m1Acc} | Đảo M5→Nghĩa ${m2Acc}`
                    : (isHira
                        ? `Mondai 3 Xuôi ${m1Acc} | Đảo Hira→Nghĩa ${m2Acc}`
                        : (isKata ? `Mondai 3 Xuôi ${m1Acc} | Đảo Kata→Nghĩa ${m2Acc}` : (isSyn ? `Xuôi A→B ${m1Acc} | Đảo B→A ${m2Acc}` : `Mondai 1 ${m1Acc} | Mondai 2 ${m2Acc}`))))));

    return `📊 BÁO CÁO ${getBankCfg().name.toUpperCase()} (${getTodayStr()})
- Đã quét: ${touchedSet.size}/${dataset.length} câu
- Tỷ lệ đúng: ${accLine}
- Đang chờ Phục Thù [2/2]: ${ids.length} câu
- Danh sách câu sai/gắn cờ cần Sensei phân tích & ra mẹo nhớ:
${topItems || '(Chưa có câu sai nào!)'}`;
}

function setupMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-toggle');
    const closeBtn = document.getElementById('sidebar-close-btn');
    const overlay = document.getElementById('sidebar-overlay');
    const sidebar = document.querySelector('.sidebar');

    if (menuBtn) menuBtn.addEventListener('click', () => {
        sidebar.classList.add('open');
        overlay.classList.add('active');
    });
    if (closeBtn) closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    });
    if (overlay) overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    });
}
