// ==========================================
// LUYỆN ĐỀ N3 — MULTI-BANK & ANTI-ROTE ENGINE
// Supports: [kanji240] | [syn80] | [kata78] | [pastN3] Đề Thi Thật JLPT N3 (2021–2023)
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
        name: '240 Câu Kanji N3',
        keys: {
            mistakes: 'n3_kanji240_mistakes',
            history: 'n3_kanji240_history',
            touched: 'n3_kanji240_touched',
            inprogress: 'n3_kanji240_inprogress'
        },
        secPerQuestion: 15,
        shifts: [
            { session: 1, shift: 'Ca 1 • Sáng', icon: 'fa-sun', title: 'Buổi 1 — 60 Câu Kanji N3', desc: 'Câu 1–60 (30 đọc Kanji + 30 chọn Kanji)', count: 60, timeLbl: '15p' },
            { session: 2, shift: 'Ca 2 • Trưa', icon: 'fa-cloud-sun', title: 'Buổi 2 — 60 Câu Kanji N3', desc: 'Câu 61–120 (31 đọc Kanji + 29 chọn Kanji)', count: 60, timeLbl: '15p' },
            { session: 3, shift: 'Ca 3 • Chiều', icon: 'fa-mountain-sun', title: 'Buổi 3 — 60 Câu Kanji N3', desc: 'Câu 121–180 (30 đọc Kanji + 30 chọn Kanji)', count: 60, timeLbl: '15p' },
            { session: 4, shift: 'Ca 4 • Tối', icon: 'fa-moon', title: 'Buổi 4 — 60 Câu Kanji N3', desc: 'Câu 181–240 (30 đọc Kanji + 30 chọn Kanji)', count: 60, timeLbl: '15p' }
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
        name: '78 Từ Katakana N3',
        keys: {
            mistakes: 'n3_kata78_mistakes',
            history: 'n3_kata78_history',
            touched: 'n3_kata78_touched',
            inprogress: 'n3_kata78_inprogress'
        },
        secPerQuestion: 15,
        shifts: [
            { session: 1, shift: 'Ca 1 • Bài 1', icon: 'fa-sun', title: 'Bài 1 — 39 Câu Katakana N3', desc: 'Mondai 3 điền từ Katakana vào câu (Từ #1–#39)', count: 39, timeLbl: '10p' },
            { session: 2, shift: 'Ca 2 • Bài 2', icon: 'fa-cloud-sun', title: 'Bài 2 — 39 Câu Katakana N3', desc: 'Mondai 3 điền từ Katakana vào câu (Từ #40–#78)', count: 39, timeLbl: '10p' }
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
    'n3_syn80_mistakes', 'n3_syn80_history', 'n3_syn80_touched', 'n3_syn80_inprogress',
    'n3_kata78_mistakes', 'n3_kata78_history', 'n3_kata78_touched', 'n3_kata78_inprogress',
    'n3_pastN3_mistakes', 'n3_pastN3_history', 'n3_pastN3_touched', 'n3_pastN3_inprogress',
    LS_HUB_SRS_KEY, LS_HUB_STATS_KEY,
    'n3_grammar_progress', 'kanji_progress', 'vocab_progress'
];

// Active Bank State
let activeBank = 'kanji240'; // 'kanji240' | 'syn80' | 'kata78' | 'pastN3'
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
let pastLaunchMode = 'exam'; // 'exam' | 'drill'
let lastRenderedPassageId = null;
let passageFontSize = 16;

// Quick-Study Table State (80 Synonyms & 78 Katakana)
let pairsMaskMode = 'none'; // 'none' | 'right' | 'left'
let currentPairsOrder = [];
let currentKataOrder = [];

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    activeBank = localStorage.getItem(LS_ACTIVE_BANK_KEY) || 'kanji240';
    if (!BANK_CONFIGS[activeBank]) activeBank = 'kanji240';
    if (typeof SYNONYM_80_PAIRS !== 'undefined') currentPairsOrder = [...SYNONYM_80_PAIRS];
    if (typeof KATAKANA_78_LIST !== 'undefined') currentKataOrder = [...KATAKANA_78_LIST];
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

function getPassageForQuestion(qObj) {
    if (!qObj || !qObj.passage_id) return null;
    const exam = getPastExamById(qObj.exam_id);
    return exam && exam.passages ? (exam.passages[qObj.passage_id] || null) : null;
}

function getBankDataset(bankId = activeBank) {
    if (bankId === 'syn80') return SYNONYM_N3_DATA;
    if (bankId === 'kata78') return KATAKANA_N3_DATA;
    if (bankId === 'pastN3') return getPastAllQuestions();
    return KANJI_240_DATA;
}

function getItemSessionNum(qObj, bankId = activeBank) {
    if (bankId === 'pastN3') return qObj.exam_id;
    return (bankId === 'syn80' || bankId === 'kata78') ? qObj.part : qObj.session;
}

function getPastExamShortLabel(examId) {
    const ex = getPastExamById(examId) || PAST_EXAM_CATALOG.find(x => x.exam_id === examId);
    return ex ? ex.short_label : examId;
}

function setPastLaunchMode(mode) {
    pastLaunchMode = mode === 'drill' ? 'drill' : 'exam';
    const eBtn = document.getElementById('past-mode-exam-btn');
    const dBtn = document.getElementById('past-mode-drill-btn');
    if (eBtn) eBtn.classList.toggle('active', pastLaunchMode === 'exam');
    if (dBtn) dBtn.classList.toggle('active', pastLaunchMode === 'drill');
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
    const isSyn = activeBank === 'syn80';
    const isKata = activeBank === 'kata78';
    const isPast = activeBank === 'pastN3';
    const hasTable = isSyn || isKata;

    document.getElementById('bank-chip-kanji240').classList.toggle('active', activeBank === 'kanji240');
    document.getElementById('bank-chip-syn80').classList.toggle('active', isSyn);
    const kataChip = document.getElementById('bank-chip-kata78');
    if (kataChip) kataChip.classList.toggle('active', isKata);
    const pastChip = document.getElementById('bank-chip-pastN3');
    if (pastChip) pastChip.classList.toggle('active', isPast);

    document.getElementById('nav-view-pairs-btn').style.display = hasTable ? 'inline-flex' : 'none';
    document.getElementById('open-pairs-quick-btn').style.display = hasTable ? 'inline-flex' : 'none';
    const pastModeSw = document.getElementById('past-mode-switch');
    if (pastModeSw) pastModeSw.style.display = isPast ? 'inline-flex' : 'none';

    const hardRevBtn = document.getElementById('start-revenge-hard-btn');
    if (hardRevBtn) hardRevBtn.style.display = isPast ? 'none' : 'inline-flex';

    // Anti-Rote toggle visibility & smart defaults for Past JLPT Exams vs Drill Banks
    const chkShufQ = document.getElementById('opt-shuffle-questions');
    const chkShufOpt = document.getElementById('opt-shuffle-answers');
    const chkHide = document.getElementById('opt-hide-context');
    const chkRev = document.getElementById('opt-reverse-mode');
    if (chkHide && chkHide.closest('.toggle-chip')) chkHide.closest('.toggle-chip').style.display = isPast ? 'none' : 'flex';
    if (chkRev && chkRev.closest('.toggle-chip')) chkRev.closest('.toggle-chip').style.display = isPast ? 'none' : 'flex';
    if (isPast) {
        if (chkShufQ) chkShufQ.checked = false;
        if (chkShufOpt) chkShufOpt.checked = false;
        if (chkHide) chkHide.checked = false;
        if (chkRev) chkRev.checked = false;
    } else {
        if (chkShufQ) chkShufQ.checked = true;
        if (chkShufOpt) chkShufOpt.checked = true;
    }

    const navPairsLbl = document.getElementById('nav-pairs-lbl');
    const openPairsLbl = document.getElementById('open-pairs-quick-lbl');
    if (navPairsLbl) navPairsLbl.textContent = isKata ? 'Bảng 78 Từ Katakana' : 'Bảng 80 Cặp A = B';
    if (openPairsLbl) openPairsLbl.textContent = isKata ? 'Mở Bảng Dò 78 Từ Katakana' : 'Mở Bảng Dò 80 Cặp A = B';

    document.getElementById('nav-lobby-lbl').textContent = isPast
        ? 'Sảnh Đề Thi Thật'
        : (isKata ? 'Sảnh Katakana (2 Ca)' : (isSyn ? 'Sảnh Đồng Nghĩa' : 'Sảnh Bộ Đề (4 Ca)'));
    document.getElementById('sidebar-sprint-heading').textContent = isPast
        ? 'Lịch Thực Chiến 4 Đề Thật N3'
        : (isKata ? 'Lịch Cày 78 Từ Katakana N3' : (isSyn ? 'Lịch Cày 80 Cặp Đồng Nghĩa' : 'Lịch Cày Siêu Tốc 240 Kanji'));

    // Update KPI labels
    document.getElementById('kpi-m1-lbl').textContent = isPast
        ? 'Kiến thức ngôn ngữ (TV + NP)'
        : (isKata ? 'Mondai 3 Xuôi (Câu → Katakana)' : (isSyn ? 'Đồng nghĩa Xuôi (A → B)' : 'Mondai 1 (Đọc Kanji)'));
    document.getElementById('kpi-m2-lbl').textContent = isPast
        ? 'Đọc hiểu — 読解 (M4–M7)'
        : (isKata ? 'Đảo chiều (Katakana → Nghĩa)' : (isSyn ? 'Đảo chiều Chống Vẹt (B → A)' : 'Mondai 2 (Chọn Kanji)'));

    // Update Anti-Rote toggle labels
    document.getElementById('toggle-hide-sub').textContent = isKata
        ? 'Ẩn câu Nhật, hiện nghĩa Việt (hoặc từ đơn) ép nhớ từ'
        : (isSyn ? 'Chỉ hiện từ A (hoặc B), ép nhớ nghĩa gốc' : 'Chỉ hiện từ gạch chân, ép nhớ mặt chữ');
    document.getElementById('toggle-rev-title').textContent = isKata
        ? '🔄 Đảo chiều (Katakana → Nghĩa)'
        : (isSyn ? '🔄 Đảo chiều (B → A)' : '🔄 Đảo chiều (M1 ↔ M2)');
    document.getElementById('toggle-rev-sub').textContent = isKata
        ? 'Cho Katakana trong câu, chọn đúng nghĩa tiếng Việt'
        : (isSyn ? 'Cho nghĩa B trong câu, chọn ngược từ N3 A' : 'Kanji↔Hiragana với 3 nhiễu tự sinh');

    document.getElementById('sessions-panel-title').innerHTML = isPast
        ? '<i class="fa-solid fa-scroll" style="color: var(--primary);"></i> Kho Đề Thi Chính Thức JLPT N3 (Bỏ Nghe • Chuẩn 2 Ca & Tách Lẻ)'
        : (isKata
            ? '<i class="fa-solid fa-bolt" style="color: var(--hub-warn-text);"></i> Lộ Trình 2 Ca Thực Chiến — 78 Từ Katakana N3 (Mondai 3)'
            : (isSyn
                ? '<i class="fa-solid fa-bolt" style="color: var(--hub-warn-text);"></i> Lộ Trình 3 Ca Thực Chiến — 80 Cặp Đồng Nghĩa (95 Câu)'
                : '<i class="fa-solid fa-bolt" style="color: var(--hub-warn-text);"></i> Lộ Trình 4 Ca Siêu Tốc — 240 Câu Kanji N3'));

    document.getElementById('custom-panel-title').innerHTML = isPast
        ? '<i class="fa-solid fa-sliders" style="color: var(--primary);"></i> Luyện Chuyên Sâu Theo Dạng Bài (Dấu ★ • Cách dùng từ • Đọc hiểu)'
        : (isKata
            ? '<i class="fa-solid fa-sliders" style="color: var(--primary);"></i> Tùy Chọn Luyện Nhanh / Trộn Tổng 78 Câu Katakana'
            : (isSyn
                ? '<i class="fa-solid fa-sliders" style="color: var(--primary);"></i> Tùy Chọn Luyện Nhanh / Trộn Tổng 95 Câu Đồng Nghĩa'
                : '<i class="fa-solid fa-sliders" style="color: var(--primary);"></i> Tùy Chọn Luyện Nhanh / Trộn Tổng 240 Câu'));

    // Populate custom selects per bank
    const sessSel = document.getElementById('custom-session-select');
    const monSel = document.getElementById('custom-mondai-select');
    const cntSel = document.getElementById('custom-count-select');

    if (isPast) {
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
    } else if (isKata) {
        sessSel.innerHTML = `
            <option value="all">Trộn tổng cả 78 câu (Bài 1 + Bài 2)</option>
            <option value="1">Chỉ Bài 1 (Câu 1–39)</option>
            <option value="2">Chỉ Bài 2 (Câu 40–78)</option>
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
            <option value="15">15 câu (Lượt nhanh 4 phút)</option>
            <option value="30" selected>30 câu (8 phút)</option>
            <option value="39">39 câu (Trọn 1 bài 10 phút)</option>
            <option value="78">Tất cả 78 câu</option>
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
            <option value="all">Trộn tổng cả 240 câu (4 Buổi)</option>
            <option value="1">Chỉ Buổi 1 (60 câu)</option>
            <option value="2">Chỉ Buổi 2 (60 câu)</option>
            <option value="3">Chỉ Buổi 3 (60 câu)</option>
            <option value="4">Chỉ Buổi 4 (60 câu)</option>
        `;
        monSel.style.display = 'inline-block';
        monSel.innerHTML = `
            <option value="all">Cả Mondai 1 & Mondai 2</option>
            <option value="1">Chỉ Mondai 1 (Đọc Kanji)</option>
            <option value="2">Chỉ Mondai 2 (Chọn chữ Kanji)</option>
        `;
        cntSel.innerHTML = `
            <option value="15">15 câu (Lượt nhanh 4 phút)</option>
            <option value="30" selected>30 câu (Nửa buổi 8 phút)</option>
            <option value="60">60 câu (Trọn 1 buổi 15 phút)</option>
            <option value="240">Tất cả câu lọc được</option>
        `;
    }

    // Configure Quick-Study Table (#view-pairs) for Syn80 vs Kata78
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

    if (isKata) {
        if (pairsTitle) pairsTitle.innerHTML = '<i class="fa-solid fa-table-list" style="color: var(--primary);"></i> Bảng Dò Nhanh 78 Từ Katakana N3 (Từ mượn • Gốc ngoại lai)';
        if (maskRightBtn) maskRightBtn.textContent = '🙈 Che Nghĩa & Gợi ý (Katakana → ???)';
        if (maskLeftBtn) maskLeftBtn.textContent = '🙈 Che Katakana & Gợi ý (??? ← Nghĩa)';
        if (pairsSearch) pairsSearch.placeholder = 'Tìm nhanh Katakana, từ gốc Anh/Pháp/Đức, thuần Nhật hoặc nghĩa Việt...';
        if (pairsCat) {
            pairsCat.innerHTML = `
                <option value="all">Tất cả chủ đề (78 từ)</option>
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
        } else {
            entry = {
                id: qObj.id,
                type: `240 Kanji (B${qObj.session})`,
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

function buildPreparedQuestion(qObj, antiRote, bankId = activeBank) {
    const isReversed = !!antiRote.reverseMode;

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

    if (bankId === 'kata78') {
        const rawTuples = qObj.options.map((katTxt, i) => {
            const rawVi = qObj.options_vi[i] || '';
            const cleanVi = rawVi.replace(/\s*\(ĐÚNG\)\s*$/, '').trim();
            return {
                katTxt,
                rawVi,
                cleanVi,
                isAns: i === qObj.answer
            };
        });
        const finalTuples = antiRote.shuffleOpt ? fisherYatesShuffle(rawTuples) : rawTuples;
        const correctIdx = finalTuples.findIndex(t => t.isAns);

        if (!isReversed) {
            return {
                bankId: 'kata78',
                orig: qObj,
                effectiveMondai: 1, // 1 = Forward Mondai 3 (Sentence/Meaning -> Katakana)
                isReversed: false,
                displayHtml: qObj.sentence_html,
                displayOnlyWord: qObj.meaning_vi,
                options: finalTuples.map(t => t.katTxt),
                optionsVi: finalTuples.map(t => t.rawVi),
                optionsKata: finalTuples.map(t => t.katTxt),
                correctIdx
            };
        } else {
            return {
                bankId: 'kata78',
                orig: qObj,
                effectiveMondai: 2, // 2 = Reverse (Katakana -> Vietnamese Meaning)
                isReversed: true,
                displayHtml: qObj.sentence_reverse_html,
                displayOnlyWord: qObj.word,
                options: finalTuples.map(t => t.cleanVi),
                optionsVi: finalTuples.map(t => t.rawVi),
                optionsKata: finalTuples.map(t => t.katTxt),
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

function computeJlptN3Estimate(items, answers) {
    let mgOk = 0, mgTot = 0;
    let bpOk = 0, bpTot = 0;
    let dokOk = 0, dokTot = 0;
    let dokWOk = 0, dokWTot = 0;
    const dokWeights = { 4: 1.0, 5: 1.25, 6: 1.5, 7: 1.25 };

    items.forEach((item, i) => {
        const q = item.orig;
        const ok = answers[i] === item.correctIdx;
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
        langCritical, readCritical
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
    const modeIcon = pastLaunchMode === 'exam' ? 'fa-stopwatch' : 'fa-bolt';
    const modeTag = pastLaunchMode === 'exam' ? 'Thi Thử' : 'Chữa Ngay';

    PAST_EXAM_CATALOG.forEach(meta => {
        const loadedExam = getPastExamById(meta.exam_id);
        const card = document.createElement('div');
        card.className = 'session-card';

        if (!loadedExam) {
            card.style.opacity = '0.68';
            card.innerHTML = `
                <div class="session-top">
                    <div>
                        <span class="shift-badge" style="background: var(--hub-surface); color: var(--hub-text-sub);"><i class="fa-solid fa-hourglass-half"></i> Đợt 2 • Sắp nạp</span>
                        <h4 style="font-size: 17.5px; color: var(--hub-text); margin-top: 7px;">${meta.label}</h4>
                        <span style="font-size: 12.5px; color: var(--hub-text-sub);">${meta.note} — Giữ nguyên 100% điểm Đợt 1 khi mở khóa</span>
                    </div>
                    <span class="score-badge">⏳ Đợt 2</span>
                </div>
            `;
            container.appendChild(card);

            const sItem = document.createElement('div');
            sItem.style.cssText = 'padding:9px 11px; border-radius:9px; background:var(--hub-surface-2); border-left:3px solid var(--hub-border-strong); opacity:0.7;';
            sItem.innerHTML = `<strong style="color: var(--hub-text);">⏳ ${meta.short_label}:</strong> Sẽ mở ở Đợt 2`;
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
                    <span class="shift-badge"><i class="fa-solid fa-scroll"></i> Đề Chính Thức • ${modeTag}</span>
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
            <div style="font-size: 11.5px; font-weight: 700; color: var(--hub-text-sub); text-transform: uppercase;">Chuẩn phòng thi JLPT (2 Ca):</div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <button class="btn-pill primary" style="flex: 1; min-width: 145px;" onclick="launchPastExam('${meta.exam_id}', 'shift1')">
                    <i class="fa-solid ${modeIcon}"></i> Ca 1: Từ vựng (${c.moji_goi}c • 30p)
                </button>
                <button class="btn-pill primary" style="flex: 1; min-width: 175px;" onclick="launchPastExam('${meta.exam_id}', 'shift2')">
                    <i class="fa-solid ${modeIcon}"></i> Ca 2: NP + Đọc hiểu (${ca2Count}c • 70p)
                </button>
            </div>
            <div class="past-split-row">
                <button class="btn-pill" onclick="launchPastExam('${meta.exam_id}', 'moji_goi')" title="Luyện riêng Từ vựng">📝 Từ vựng (30p)</button>
                <button class="btn-pill" onclick="launchPastExam('${meta.exam_id}', 'bunpou')" title="Luyện riêng Ngữ pháp">🧩 Ngữ pháp (25p)</button>
                <button class="btn-pill" onclick="launchPastExam('${meta.exam_id}', 'dokkai')" title="Luyện riêng Đọc hiểu Split-Screen">📖 Đọc hiểu (45p)</button>
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
                    alert(`✅ Đã khôi phục thành công ${restored} nhóm dữ liệu (Kanji 240, Đồng Nghĩa 80, Katakana 78, Đề Thi N3 2021–2023, Kho Phục Thù, Ngữ pháp, Hán tự, Từ vựng)!`);
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
        else pool = pool.filter(q => getItemSessionNum(q) === parseInt(sVal, 10));
    }
    if (mVal !== 'all') {
        if (activeBank === 'kanji240') pool = pool.filter(q => q.mondai === parseInt(mVal, 10));
        else if (activeBank === 'kata78') pool = pool.filter(q => q.category === mVal);
        else if (activeBank === 'pastN3') {
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

    const antiRote = getAntiRoteSettings(activeBank === 'pastN3' ? { hideCtx: false, reverseMode: false } : {});
    if (antiRote.shuffleQ) pool = fisherYatesShuffle(pool);
    pool = pool.slice(0, Math.min(cntVal, pool.length));

    const prefix = activeBank === 'pastN3'
        ? (sVal === 'all' ? 'Chuyên sâu Đề Thi N3' : `${getPastExamShortLabel(sVal)} Chuyên sâu`)
        : (activeBank === 'kata78'
            ? (sVal === 'all' ? 'Tổng hợp Katakana N3' : `Bài ${sVal} Katakana`)
            : (activeBank === 'syn80'
                ? (sVal === 'all' ? 'Tổng hợp Đồng Nghĩa' : `Bài ${sVal} Đồng Nghĩa`)
                : (sVal === 'all' ? 'Tổng hợp 240 Kanji' : `Buổi ${sVal}`)));
    startQuizEngine({
        bankId: activeBank,
        title: `${prefix} • ${pool.length} câu`,
        sessionNum: sVal === 'all' ? null : (activeBank === 'pastN3' ? sVal : parseInt(sVal, 10)),
        expectedFullCount: -1,
        pool,
        mode,
        isRevenge: false,
        antiRote,
        alreadyShuffled: true
    });
}

function launchRevengeSession(mode, forceAntiRote = {}, subsetIds = null) {
    const targetIds = subsetIds || Object.keys(mistakesMap);
    const pool = getBankDataset().filter(q => targetIds.includes(q.id));
    if (pool.length === 0) {
        alert(`🎉 Kho Phục Thù của ${getBankCfg().name} đang trống! Bạn chưa có câu sai hay câu gắn cờ nào cần ôn lại.`);
        return;
    }
    const isPast = activeBank === 'pastN3';
    const antiRote = getAntiRoteSettings(isPast
        ? { shuffleQ: false, shuffleOpt: true, hideCtx: false, reverseMode: false }
        : { shuffleQ: true, shuffleOpt: true, ...forceAntiRote }
    );
    const revLabel = isPast ? 'Đề Thi N3' : (activeBank === 'kata78' ? 'Katakana N3' : (activeBank === 'syn80' ? 'Đồng Nghĩa' : 'Kanji'));
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
    let orderedPool = cfg.alreadyShuffled ? [...cfg.pool] : (cfg.antiRote.shuffleQ ? fisherYatesShuffle(cfg.pool) : [...cfg.pool]);
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
            activeSession.bankId === 'kata78'
                ? '🔄 Đảo Kata→Nghĩa'
                : (activeSession.bankId === 'syn80' ? '🔄 Đảo B→A' : '🔄 Đảo M1↔M2')
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
    const passage = item.bankId === 'pastN3' ? getPassageForQuestion(orig) : null;

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
    const isPast = item.bankId === 'pastN3';
    const chosen = activeSession.answers[idx];
    const isAnswered = chosen !== null;
    const isDrill = activeSession.mode === 'drill';
    const hideCtxNow = !isPast && activeSession.antiRote.hideCtx && !activeSession.revealedCtx[idx] && !(isDrill && isAnswered);

    renderPassagePane(item, isDrill, isAnswered);

    document.getElementById('exam-progress-txt').textContent = `${idx + 1}/${activeSession.items.length}`;
    document.getElementById('q-num-badge').textContent = isPast
        ? `Câu ${idx + 1} / ${activeSession.items.length} (${getPastExamShortLabel(orig.exam_id)} • #${orig.num})`
        : `Câu ${idx + 1} / ${activeSession.items.length} (Gốc B${getItemSessionNum(orig, item.bankId)}-#${orig.num})`;

    if (isPast) {
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
        if (isKata && !item.isReversed) {
            sentBox.className = 'q-sentence only-meaning';
            sentBox.innerHTML = `<div style="font-size: 13px; color: var(--hub-text-sub); font-weight: 600; margin-bottom: 8px;">Chọn từ Katakana tương ứng với nghĩa:</div><span class="q-target">${item.displayOnlyWord}</span>`;
        } else {
            sentBox.className = 'q-sentence only-word';
            sentBox.innerHTML = `<u class="q-target">${item.displayOnlyWord}</u>`;
        }
        revealBtn.style.display = 'inline-flex';
    } else {
        sentBox.className = 'q-sentence';
        if (isPast && (orig.passage_id || orig.sentence_html.length > 65)) {
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
    if (orig.hint && !hideCtxNow) {
        hintBox.style.display = 'block';
        hintBox.textContent = orig.hint;
    } else {
        hintBox.style.display = 'none';
    }

    const optContainer = document.getElementById('exam-options-container');
    optContainer.innerHTML = '';
    const hasLongOpt = isPast && item.options.some(o => o.length > 14);
    optContainer.style.gridTemplateColumns = hasLongOpt ? '1fr' : '';

    item.options.forEach((optTxt, optIdx) => {
        const btn = document.createElement('button');
        const compactText = (isKata && item.isReversed) || hasLongOpt;
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

    // Kanji 240 explanation
    return `
        <div class="exp-box ${isCorrect ? 'is-correct' : 'is-wrong'}">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; font-weight: 700; font-size: 15px;">
                <div>${statusTitle}</div>
                <button class="btn-pill" style="padding: 5px 11px; font-size: 12.5px;" onclick="speakJapanese('${safeTts}')">
                    <i class="fa-solid fa-volume-high"></i> Nghe phát âm
                </button>
            </div>
            <div class="exp-word-row">
                <strong style="font-size: 20px; color: var(--hub-text);">${q.kanji_form}</strong>
                <span style="font-size: 16px; color: var(--primary); font-weight: 700;">（${q.reading}）</span>
                <span class="hanviet-pill">Hán Việt: ${q.han_viet}</span>
                <span style="font-size: 14.5px; font-weight: 600; color: var(--hub-text-body);">→ ${q.meaning_vi}</span>
            </div>
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
        const cfg = {
            ...activeSession.sourceConfig,
            alreadyShuffled: false,
            antiRote: isPast
                ? { shuffleQ: false, shuffleOpt: true, hideCtx: false, reverseMode: false }
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
        breakdownStr = parts.join(' • ');
    } else if (isKata) {
        breakdownStr = m2Tot > 0 ? `Đảo Kata→Nghĩa: ${m2Ok}/${m2Tot}` : `Mondai 3: ${m1Ok}/${m1Tot}`;
    } else if (isSyn) {
        breakdownStr = m2Tot > 0 ? `Đảo B→A: ${m2Ok}/${m2Tot}` : `Xuôi A→B: ${m1Ok}/${m1Tot}`;
    }

    if (!Array.isArray(historyData.attemptsLog)) historyData.attemptsLog = [];
    historyData.attemptsLog.unshift({
        timestamp: nowTime,
        title: activeSession.title,
        modeLabel: activeSession.isRevenge ? 'Phục Thù' : (activeSession.mode === 'exam' ? 'Thi Thử' : 'Luyện Nhanh'),
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
    const bankShort = isPast ? 'Đề Thi Thật N3' : (isKata ? 'Katakana N3' : (isSyn ? 'Đồng nghĩa N3' : 'Kanji N3'));
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
        if (item.bankId === 'pastN3') {
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
        } else if (item.bankId === 'kata78') {
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
                    <strong style="font-size: 17px; color: var(--primary);">${q.word}</strong>
                    <span class="hanviet-pill">Gốc: ${q.origin}</span>
                    <span class="q-tag" style="background: var(--hub-surface-2); color: var(--hub-text-body);">Thuần Nhật: ${q.native_jp}</span>
                    <span style="font-size: 13.5px; color: var(--hub-text); font-weight: 600;">→ ${q.meaning_vi}</span>
                </div>
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
            bodyHtml = `
                <div class="exp-word-row" style="margin-bottom: 8px;">
                    <strong style="font-size: 17px; color: var(--hub-text);">${q.kanji_form}</strong>
                    <span style="color: var(--primary); font-weight: 700;">（${q.reading}）</span>
                    <span class="hanviet-pill">${q.han_viet}</span>
                    <span style="font-size: 13.5px; color: var(--hub-text-body);">→ ${q.meaning_vi}</span>
                </div>
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
// 8. MISTAKE BANK & QUICK-STUDY TABLES (80 SYNONYMS / 78 KATAKANA)
// ==========================================
function renderMistakesView() {
    const container = document.getElementById('mistakes-bank-list');
    const dataset = getBankDataset();
    const isSyn = activeBank === 'syn80';
    const isKata = activeBank === 'kata78';
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
            : (isKata ? `Bài ${q.part} • ${q.category}` : (isSyn ? `Bài ${q.part}` : `Buổi ${q.session} • M${q.mondai}`));
        const headline = isPast
            ? `<strong style="font-size: 15.5px; color: var(--primary);">Đáp án: ${q.options[q.answer]}</strong>`
            : (isKata
                ? `<strong style="font-size: 17px; color: var(--primary);">${q.word}</strong> <span class="hanviet-pill">Gốc: ${q.origin}</span> <span style="font-size: 12.5px; color: var(--hub-text-sub);">(${q.native_jp})</span>`
                : (isSyn
                    ? `<strong style="font-size: 16.5px; color: var(--hub-text);">${q.target_word} ＝ ${q.synonym_word}</strong> <span class="hanviet-pill">${q.meaning_vi}</span>`
                    : `<strong style="font-size: 17px; color: var(--hub-text);">${q.kanji_form}（${q.reading}）</strong> <span class="hanviet-pill">${q.han_viet}</span>`));
        const subNote = isPast ? q.explain_vi : (isKata ? q.wasei_note : (isSyn ? q.nuance_note : q.trap_note));
        const midLine = isPast
            ? `<em>${q.sentence_vi}</em>`
            : `${isSyn ? '' : q.meaning_vi + ' — '}<em>${q.sentence_vi}</em>`;

        const div = document.createElement('div');
        div.className = 'mistake-item';
        div.innerHTML = `
            <div style="flex: 1; min-width: 240px;">
                <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 5px;">
                    <span class="q-tag">${tagText}</span>
                    <span class="streak-pill">Tiến độ: [${m.streak || 0}/2]</span>
                    ${m.flagged ? '<span class="streak-pill">🚩 Cờ đoán bừa</span>' : ''}
                    ${headline}
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
        if (activeBank === 'kata78') {
            currentKataOrder = fisherYatesShuffle(currentKataOrder);
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

function pushPairToRevenge(pairStt) {
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
    if (!container) return;

    const q = (document.getElementById('pairs-search-input').value || '').trim().toLowerCase();
    const cat = document.getElementById('pairs-cat-select').value;
    const isMaskedInit = pairsMaskMode !== 'none';

    if (activeBank === 'kata78') {
        if (typeof KATAKANA_78_LIST === 'undefined') return;
        const list = currentKataOrder.filter(p => {
            const catOk = cat === 'all' || p.category === cat;
            const qOk = !q ||
                p.word.toLowerCase().includes(q) ||
                p.origin.toLowerCase().includes(q) ||
                p.native_jp.toLowerCase().includes(q) ||
                p.meaning_vi.toLowerCase().includes(q) ||
                p.wasei_note.toLowerCase().includes(q);
            return catOk && qOk;
        });

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
                        <div class="pair-word-read">Katakana N3 • #${p.stt}</div>
                    </div>
                    <strong style="color: var(--primary); font-size: 16px;">→</strong>
                    <div class="pair-side pair-side-right ${pairsMaskMode === 'right' ? 'masked' : ''}" onclick="togglePairCardMask(this)">
                        <div class="pair-word-main" style="font-size: 14.5px;">${p.meaning_vi}</div>
                        <div class="pair-word-read">${p.category}</div>
                    </div>
                </div>
                <div class="pair-meaning ${isMaskedInit ? 'masked' : ''}" data-mask-label="🙈 Đã ẩn Từ gốc, Thuần Nhật & Mẹo (Bấm để mở)" onclick="togglePairCardMask(this)" style="text-align: left; font-weight: 500; font-size: 12.5px; line-height: 1.45;">
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
        if (isKata) {
            return `${idx + 1}. [Bài ${q.part} | ${m.streak}/2] ${q.word} (${q.origin} • ${q.native_jp}) — ${q.meaning_vi} | ${q.wasei_note}`;
        }
        return isSyn
            ? `${idx + 1}. [Bài ${q.part} | ${m.streak}/2] ${q.target_word} ＝ ${q.synonym_word} (${q.meaning_vi}) | ${q.nuance_note}`
            : `${idx + 1}. [B${q.session}-M${q.mondai} | ${m.streak}/2] ${q.kanji_form}（${q.reading}）[${q.han_viet}] — ${q.meaning_vi} | Bẫy: ${q.trap_note}`;
    }).filter(Boolean).join('\n');

    const accLine = isPast
        ? `Kiến thức ngôn ngữ (TV+NP) ${m1Acc} | Đọc hiểu (Dokkai) ${m2Acc}`
        : (isKata ? `Mondai 3 Xuôi ${m1Acc} | Đảo Kata→Nghĩa ${m2Acc}` : (isSyn ? `Xuôi A→B ${m1Acc} | Đảo B→A ${m2Acc}` : `Mondai 1 ${m1Acc} | Mondai 2 ${m2Acc}`));

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
