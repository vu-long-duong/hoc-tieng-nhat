// ==========================================
// LUYỆN ĐỀ N3 — MULTI-BANK & ANTI-ROTE ENGINE
// Supports: [kanji240] 240 Câu Kanji N3 | [syn80] 80 Cặp Đồng Nghĩa N3
// ==========================================

const LS_HUB_SRS_KEY = 'n3_srs_mistakes';
const LS_HUB_STATS_KEY = 'n3_campaign_stats';
const LS_ACTIVE_BANK_KEY = 'n3_luyende_active_bank';

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
    }
};

const ALL_BACKUP_KEYS = [
    'n3_kanji240_mistakes', 'n3_kanji240_history', 'n3_kanji240_touched', 'n3_kanji240_inprogress',
    'n3_syn80_mistakes', 'n3_syn80_history', 'n3_syn80_touched', 'n3_syn80_inprogress',
    LS_HUB_SRS_KEY, LS_HUB_STATS_KEY,
    'n3_grammar_progress', 'kanji_progress', 'vocab_progress'
];

// Active Bank State
let activeBank = 'kanji240'; // 'kanji240' | 'syn80'
let mistakesMap = {};
let historyData = {
    sessions: {},
    m1Correct: 0, m1Total: 0,
    m2Correct: 0, m2Total: 0,
    attemptsLog: []
};
let touchedSet = new Set();

// Active Exam Session State
let activeSession = null;
let lastResultFilter = 'wrong';

// 80 Synonym Pairs Quick-Study Table State
let pairsMaskMode = 'none'; // 'none' | 'right' | 'left'
let currentPairsOrder = [];

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    activeBank = localStorage.getItem(LS_ACTIVE_BANK_KEY) || 'kanji240';
    if (!BANK_CONFIGS[activeBank]) activeBank = 'kanji240';
    if (typeof SYNONYM_80_PAIRS !== 'undefined') currentPairsOrder = [...SYNONYM_80_PAIRS];

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

function getBankDataset(bankId = activeBank) {
    return bankId === 'syn80' ? SYNONYM_N3_DATA : KANJI_240_DATA;
}

function getItemSessionNum(qObj, bankId = activeBank) {
    return bankId === 'syn80' ? qObj.part : qObj.session;
}

function switchBank(newBankId) {
    if (!BANK_CONFIGS[newBankId] || newBankId === activeBank) return;
    if (activeSession && !activeSession.finished && document.getElementById('view-exam').style.display === 'block') {
        if (!confirm('Chuyển bộ đề sẽ quay về Sảnh (bài đang làm đã tự lưu)?')) return;
    }
    activeBank = newBankId;
    localStorage.setItem(LS_ACTIVE_BANK_KEY, activeBank);
    loadBankState();
    applyBankUI();
    showMainView('lobby');
}

function applyBankUI() {
    const isSyn = activeBank === 'syn80';
    document.getElementById('bank-chip-kanji240').classList.toggle('active', !isSyn);
    document.getElementById('bank-chip-syn80').classList.toggle('active', isSyn);

    document.getElementById('nav-view-pairs-btn').style.display = isSyn ? 'inline-flex' : 'none';
    document.getElementById('open-pairs-quick-btn').style.display = isSyn ? 'inline-flex' : 'none';
    document.getElementById('nav-lobby-lbl').textContent = isSyn ? 'Sảnh Đồng Nghĩa' : 'Sảnh Bộ Đề (4 Ca)';
    document.getElementById('sidebar-sprint-heading').textContent = isSyn ? 'Lịch Cày 80 Cặp Đồng Nghĩa' : 'Lịch Cày Siêu Tốc 240 Kanji';

    // Update KPI labels
    document.getElementById('kpi-m1-lbl').textContent = isSyn ? 'Đồng nghĩa Xuôi (A → B)' : 'Mondai 1 (Đọc Kanji)';
    document.getElementById('kpi-m2-lbl').textContent = isSyn ? 'Đảo chiều Chống Vẹt (B → A)' : 'Mondai 2 (Chọn Kanji)';

    // Update Anti-Rote toggle labels
    document.getElementById('toggle-hide-sub').textContent = isSyn
        ? 'Chỉ hiện từ A (hoặc B), ép nhớ nghĩa gốc'
        : 'Chỉ hiện từ gạch chân, ép nhớ mặt chữ';
    document.getElementById('toggle-rev-title').textContent = isSyn
        ? '🔄 Đảo chiều (B → A)'
        : '🔄 Đảo chiều (M1 ↔ M2)';
    document.getElementById('toggle-rev-sub').textContent = isSyn
        ? 'Cho nghĩa B trong câu, chọn ngược từ N3 A'
        : 'Kanji↔Hiragana với 3 nhiễu tự sinh';

    document.getElementById('sessions-panel-title').innerHTML = isSyn
        ? '<i class="fa-solid fa-bolt" style="color: var(--hub-warn-text);"></i> Lộ Trình 3 Ca Thực Chiến — 80 Cặp Đồng Nghĩa (95 Câu)'
        : '<i class="fa-solid fa-bolt" style="color: var(--hub-warn-text);"></i> Lộ Trình 4 Ca Siêu Tốc — 240 Câu Kanji N3';

    document.getElementById('custom-panel-title').innerHTML = isSyn
        ? '<i class="fa-solid fa-sliders" style="color: var(--primary);"></i> Tùy Chọn Luyện Nhanh / Trộn Tổng 95 Câu Đồng Nghĩa'
        : '<i class="fa-solid fa-sliders" style="color: var(--primary);"></i> Tùy Chọn Luyện Nhanh / Trộn Tổng 240 Câu';

    // Populate custom selects per bank
    const sessSel = document.getElementById('custom-session-select');
    const monSel = document.getElementById('custom-mondai-select');
    const cntSel = document.getElementById('custom-count-select');

    if (isSyn) {
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

    historyData = { sessions: {}, m1Correct: 0, m1Total: 0, m2Correct: 0, m2Total: 0, attemptsLog: [] };
    try {
        const h = JSON.parse(localStorage.getItem(keys.history));
        if (h) {
            historyData = {
                ...historyData,
                ...h,
                sessions: { ...(h.sessions || {}) },
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
        const entry = bankId === 'syn80'
            ? {
                id: qObj.id,
                type: `Đồng Nghĩa (B${qObj.part})`,
                title: `${qObj.target_word} ＝ ${qObj.synonym_word} — ${qObj.meaning_vi}`,
                detail: `${qObj.sentence_vi} | ${qObj.nuance_note}`,
                level: 0,
                nextReview: getTodayStr(),
                addedAt: new Date().toLocaleDateString('vi-VN')
            }
            : {
                id: qObj.id,
                type: `240 Kanji (B${qObj.session})`,
                title: `${qObj.kanji_form}（${qObj.reading}）• ${qObj.han_viet} — ${qObj.meaning_vi}`,
                detail: `${qObj.sentence_vi} | ${qObj.trap_note}`,
                level: 0,
                nextReview: getTodayStr(),
                addedAt: new Date().toLocaleDateString('vi-VN')
            };
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
        sourceConfig: { bankId, title: snap.title, sessionNum: snap.sessionNum, pool: restoredItems.map(i => i.orig), mode: snap.mode, isRevenge: snap.isRevenge, antiRote: snap.antiRote },
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
                    alert(`✅ Đã khôi phục thành công ${restored} nhóm dữ liệu (Kanji 240, Đồng Nghĩa 80, Kho Phục Thù, Ngữ pháp, Hán tự, Từ vựng)!`);
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
    const mVal = activeBank === 'kanji240' ? document.getElementById('custom-mondai-select').value : 'all';
    const cntVal = parseInt(document.getElementById('custom-count-select').value, 10);

    let pool = [...getBankDataset()];
    if (sVal !== 'all') pool = pool.filter(q => getItemSessionNum(q) === parseInt(sVal, 10));
    if (mVal !== 'all') pool = pool.filter(q => q.mondai === parseInt(mVal, 10));

    const antiRote = getAntiRoteSettings();
    if (antiRote.shuffleQ) pool = fisherYatesShuffle(pool);
    pool = pool.slice(0, Math.min(cntVal, pool.length));

    const prefix = activeBank === 'syn80'
        ? (sVal === 'all' ? 'Tổng hợp Đồng Nghĩa' : `Bài ${sVal} Đồng Nghĩa`)
        : (sVal === 'all' ? 'Tổng hợp 240 Kanji' : `Buổi ${sVal}`);
    startQuizEngine({
        bankId: activeBank,
        title: `${prefix} • ${pool.length} câu`,
        sessionNum: sVal === 'all' ? null : parseInt(sVal, 10),
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
    const antiRote = getAntiRoteSettings({ shuffleQ: true, shuffleOpt: true, ...forceAntiRote });
    startQuizEngine({
        bankId: activeBank,
        title: `🔥 Phục Thù ${activeBank === 'syn80' ? 'Đồng Nghĩa' : 'Kanji'} (${pool.length} câu)`,
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
    const totalSeconds = Math.max(120, items.length * getBankCfg(bankId).secPerQuestion);

    activeSession = {
        bankId,
        title: cfg.title,
        sessionNum: cfg.sessionNum,
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
    if (activeSession.antiRote.reverseMode) tags.push(activeSession.bankId === 'syn80' ? '🔄 Đảo B→A' : '🔄 Đảo M1↔M2');
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
function renderQuestionStage() {
    const idx = activeSession.currentIndex;
    const item = activeSession.items[idx];
    const orig = item.orig;
    const isSyn = item.bankId === 'syn80';
    const chosen = activeSession.answers[idx];
    const isAnswered = chosen !== null;
    const isDrill = activeSession.mode === 'drill';

    document.getElementById('exam-progress-txt').textContent = `${idx + 1}/${activeSession.items.length}`;
    document.getElementById('q-num-badge').textContent = `Câu ${idx + 1} / ${activeSession.items.length} (Gốc B${getItemSessionNum(orig, item.bankId)}-#${orig.num})`;

    if (isSyn) {
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
    const hideCtxNow = activeSession.antiRote.hideCtx && !activeSession.revealedCtx[idx] && !(isDrill && isAnswered);

    if (hideCtxNow) {
        sentBox.className = 'q-sentence only-word';
        sentBox.innerHTML = `<u class="q-target">${item.displayOnlyWord}</u>`;
        revealBtn.style.display = 'inline-flex';
    } else {
        sentBox.className = 'q-sentence';
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
    item.options.forEach((optTxt, optIdx) => {
        const btn = document.createElement('button');
        btn.className = 'exam-opt-btn';

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

    const safeTts = q.sentence_tts.replace(/'/g, "\\'");

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
        const cfg = { ...activeSession.sourceConfig, alreadyShuffled: false, antiRote: { ...activeSession.antiRote, shuffleQ: true, shuffleOpt: true } };
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

    const total = activeSession.items.length;
    const pct = Math.round((totalCorrect / total) * 100);
    const minStr = String(Math.floor(elapsedSec / 60)).padStart(2, '0');
    const secStr = String(elapsedSec % 60).padStart(2, '0');
    const nowTime = new Date().toLocaleString('vi-VN', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
    const breakdownStr = isSyn
        ? (m2Tot > 0 ? `Đảo B→A: ${m2Ok}/${m2Tot}` : `Xuôi A→B: ${m1Ok}/${m1Tot}`)
        : `M1: ${m1Ok}/${m1Tot} • M2: ${m2Ok}/${m2Tot}`;

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
    document.getElementById('res-headline').textContent = pct >= 90
        ? `🏆 Quá đỉnh! ${isSyn ? 'Đồng nghĩa N3' : 'Kanji N3'} chắc như đinh đóng cột!`
        : (pct >= 75 ? '🔥 Rất tốt! Chỉ cần vá nốt vài lỗ hổng bên dưới.' : '⚡ Đã bắt sống được nhiều lỗ hổng quan trọng — Phục thù ngay!');
    document.getElementById('res-subtext').textContent = `Sai ${wrongCnt} câu • Gắn cờ đoán bừa ${flagCnt} câu (Tất cả đã lưu vào Kho Phục Thù [0/2] và đồng bộ sang Chiến Dịch N3).`;

    document.getElementById('res-score-big').textContent = `${totalCorrect} / ${total}`;
    document.getElementById('res-pct-lbl').textContent = `${pct}% chính xác`;
    document.getElementById('res-m1-m2').textContent = breakdownStr;
    document.getElementById('res-time-lbl').textContent = `Thời gian làm: ${minStr}:${secStr}`;

    document.getElementById('res-revenge-now-btn').style.display = (wrongCnt + flagCnt) > 0 ? 'inline-flex' : 'none';

    lastResultFilter = (wrongCnt + flagCnt) > 0 ? 'wrong' : 'all';
    document.getElementById('filter-rev-wrong-btn').classList.toggle('primary', lastResultFilter === 'wrong');
    document.getElementById('filter-rev-all-btn').classList.toggle('primary', lastResultFilter === 'all');

    showMainView('result');
    renderResultReviewList();
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
        const safeTts = q.sentence_tts.replace(/'/g, "\\'");

        let bodyHtml = '';
        if (item.bankId === 'syn80') {
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

        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 10px;">
                <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                    <span class="q-tag">Câu ${i + 1} (B${getItemSessionNum(q, item.bankId)}-#${q.num})</span>
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
// 8. MISTAKE BANK & 80 SYNONYM PAIRS TABLE
// ==========================================
function renderMistakesView() {
    const container = document.getElementById('mistakes-bank-list');
    const dataset = getBankDataset();
    const isSyn = activeBank === 'syn80';
    const ids = Object.keys(mistakesMap);
    document.getElementById('top-mistake-count').textContent = ids.length;

    if (ids.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 36px; background: var(--hub-surface-2); border-radius: 14px; color: var(--hub-text-sub);">
                <i class="fa-solid fa-trophy" style="font-size: 36px; color: var(--hub-ok-text); margin-bottom: 10px;"></i>
                <p style="font-size: 15px; font-weight: 600; color: var(--hub-text);">Kho Phục Thù (${getBankCfg().name}) đang sạch bóng!</p>
                <p style="font-size: 13.5px; margin-top: 4px;">Làm bài ở Sảnh hoặc gắn cờ 🚩 / đẩy cặp khó nhớ từ Bảng 80 Cặp để luyện phục thù tại đây.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = '';
    ids.forEach(qid => {
        const q = dataset.find(x => x.id === qid);
        if (!q) return;
        const m = mistakesMap[qid];
        const safeTts = q.sentence_tts.replace(/'/g, "\\'");

        const headline = isSyn
            ? `<strong style="font-size: 16.5px; color: var(--hub-text);">${q.target_word} ＝ ${q.synonym_word}</strong> <span class="hanviet-pill">${q.meaning_vi}</span>`
            : `<strong style="font-size: 17px; color: var(--hub-text);">${q.kanji_form}（${q.reading}）</strong> <span class="hanviet-pill">${q.han_viet}</span>`;
        const subNote = isSyn ? q.nuance_note : q.trap_note;

        const div = document.createElement('div');
        div.className = 'mistake-item';
        div.innerHTML = `
            <div style="flex: 1; min-width: 240px;">
                <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 5px;">
                    <span class="q-tag">${isSyn ? 'Bài ' + q.part : 'Buổi ' + q.session + ' • M' + q.mondai}</span>
                    <span class="streak-pill">Tiến độ: [${m.streak || 0}/2]</span>
                    ${m.flagged ? '<span class="streak-pill">🚩 Cờ đoán bừa</span>' : ''}
                    ${headline}
                </div>
                <div style="font-size: 13.5px; color: var(--hub-text-body); margin-bottom: 4px;">
                    ${isSyn ? '' : q.meaning_vi + ' — '}<em>${q.sentence_vi}</em>
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
        currentPairsOrder = fisherYatesShuffle(currentPairsOrder);
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

function pushPairToRevenge(pairStt) {
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
    if (!container || typeof SYNONYM_80_PAIRS === 'undefined') return;

    const q = (document.getElementById('pairs-search-input').value || '').trim().toLowerCase();
    const cat = document.getElementById('pairs-cat-select').value;

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
        const isMaskedInit = pairsMaskMode !== 'none';

        const card = document.createElement('div');
        card.className = 'pair-card';
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="q-tag">#${p.stt} • ${p.category}</span>
                <div style="display: flex; gap: 6px;">
                    <button class="btn-pill" style="padding: 4px 9px; font-size: 12px;" onclick="speakPairAudio(this, '${safeKanaTts}', '${safeReadA}', '${safeReadB}')" title="Nghe phát âm chuẩn tiếng Nhật">
                        <i class="fa-solid fa-volume-high"></i>
                    </button>
                    <button class="btn-pill danger" style="padding: 4px 9px; font-size: 11.5px;" onclick="pushPairToRevenge(${p.stt})" title="Đẩy vào Kho Phục Thù [2/2]">
                        <i class="fa-solid fa-fire"></i> Ôn lại
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
            <div class="pair-meaning ${isMaskedInit ? 'masked' : ''}" onclick="togglePairCardMask(this)">
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
    const ids = Object.keys(mistakesMap);
    const m1Acc = historyData.m1Total > 0 ? `${Math.round((historyData.m1Correct / historyData.m1Total) * 100)}%` : '--';
    const m2Acc = historyData.m2Total > 0 ? `${Math.round((historyData.m2Correct / historyData.m2Total) * 100)}%` : '--';
    const topItems = ids.slice(0, 15).map((id, idx) => {
        const q = dataset.find(x => x.id === id);
        if (!q) return '';
        const m = mistakesMap[id];
        return isSyn
            ? `${idx + 1}. [Bài ${q.part} | ${m.streak}/2] ${q.target_word} ＝ ${q.synonym_word} (${q.meaning_vi}) | ${q.nuance_note}`
            : `${idx + 1}. [B${q.session}-M${q.mondai} | ${m.streak}/2] ${q.kanji_form}（${q.reading}）[${q.han_viet}] — ${q.meaning_vi} | Bẫy: ${q.trap_note}`;
    }).filter(Boolean).join('\n');

    return `📊 BÁO CÁO ${getBankCfg().name.toUpperCase()} (${getTodayStr()})
- Đã quét: ${touchedSet.size}/${dataset.length} câu
- Tỷ lệ đúng: ${isSyn ? `Xuôi A→B ${m1Acc} | Đảo B→A ${m2Acc}` : `Mondai 1 ${m1Acc} | Mondai 2 ${m2Acc}`}
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
