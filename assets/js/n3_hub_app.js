// ==========================================
// N3 CAMPAIGN HUB & GAP-PATCHING ENGINE
// ==========================================

let gProgress = {}; // { g_id: 'unlearned' | 'learning' | 'mastered' }
let srsMistakes = []; // [{ id, type, title, detail, level, nextReview, addedAt }]
let campaignStats = {
    xp: 0,
    streak: 1,
    lastStudyDate: null,
    dojoCorrect: 0,
    dojoTotal: 0,
    dailyQuests: {}
};

let filteredGrammars = [...GRAMMAR_N3_DATA];
let gActiveIdx = 0;
let gFilterStatus = 'all';

// Star Puzzle State
let starIdx = 0;
let currentStarSlots = [null, null, null, null]; // stores option objects

// Trap Quiz / SRS Quiz State
let trapMode = 'trap'; // 'trap' | 'srs'
let currentTrapPool = [];
let trapIdx = 0;
let trapSessionScore = { correct: 0, total: 0 };

// Dokkai & Choukai State
let activeDokkaiIdx = 0;
let activeChoukaiIdx = 0;

// Current Context for AI Sensei
let currentSenseiContext = "Đang ở Trạm Chiến Dịch 46 Ngày JLPT N3";

document.addEventListener('DOMContentLoaded', () => {
    initHubTheme();
    loadHubState();
    renderCountdownAndStats();
    renderDailyQuests();
    renderMasteryBars();
    renderSrsMistakeList();

    // Initialize Tabs & Grammar
    setupHubTabs();
    applyGrammarFilter();
    renderNuancePairs();
    setupGrammarCardEvents();

    // Initialize Dojo (Star ★ & Trap Quiz)
    setupDojoEvents();
    loadStarPuzzle(0);

    // Initialize Dokkai & Choukai
    setupDokkaiAndChoukai();

    // Initialize Sensei Companion
    setupSenseiCompanion();
    setupMobileMenu();
});

// ==========================================
// 1. THEME & STATE PERSISTENCE
// ==========================================
function initHubTheme() {
    if (!localStorage.getItem('n3_theme_bright_v1')) {
        localStorage.setItem('kanji_theme', 'light');
        localStorage.setItem('vocab_theme', 'light');
        localStorage.setItem('n3_theme_bright_v1', '1');
    }
    let savedTheme = localStorage.getItem('kanji_theme') || localStorage.getItem('vocab_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButtons(savedTheme);

    document.querySelectorAll('.theme-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            savedTheme = savedTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', savedTheme);
            localStorage.setItem('kanji_theme', savedTheme);
            localStorage.setItem('vocab_theme', savedTheme);
            updateThemeButtons(savedTheme);
        });
    });
}

function updateThemeButtons(theme) {
    document.querySelectorAll('.theme-toggle').forEach(btn => {
        btn.innerHTML = theme === 'light' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });
}

function getTodayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function loadHubState() {
    // Load Grammar Progress
    try {
        gProgress = JSON.parse(localStorage.getItem('n3_grammar_progress')) || {};
    } catch (e) {
        gProgress = {};
    }
    GRAMMAR_N3_DATA.forEach(g => {
        if (!gProgress[g.id]) gProgress[g.id] = 'unlearned';
    });

    // Load SRS Mistake Bank
    try {
        srsMistakes = JSON.parse(localStorage.getItem('n3_srs_mistakes')) || [];
    } catch (e) {
        srsMistakes = [];
    }

    // Load Campaign Stats & Streak
    try {
        const savedStats = JSON.parse(localStorage.getItem('n3_campaign_stats'));
        if (savedStats) campaignStats = { ...campaignStats, ...savedStats };
    } catch (e) {}

    const today = getTodayStr();
    if (campaignStats.lastStudyDate !== today) {
        if (campaignStats.lastStudyDate) {
            const last = new Date(campaignStats.lastStudyDate);
            const now = new Date(today);
            const diffDays = Math.round((now - last) / (1000 * 60 * 60 * 24));
            if (diffDays === 1) campaignStats.streak += 1;
            else if (diffDays > 1) campaignStats.streak = 1;
        }
        campaignStats.lastStudyDate = today;
        if (!campaignStats.dailyQuests[today]) {
            campaignStats.dailyQuests[today] = {
                q_grammar: false,
                q_star: false,
                q_dokkai: false,
                q_vocab: false
            };
        }
        saveHubState();
    }
}

function saveHubState() {
    localStorage.setItem('n3_grammar_progress', JSON.stringify(gProgress));
    localStorage.setItem('n3_srs_mistakes', JSON.stringify(srsMistakes));
    localStorage.setItem('n3_campaign_stats', JSON.stringify(campaignStats));
}

function addXP(amount) {
    campaignStats.xp += amount;
    saveHubState();
    renderCountdownAndStats();
}

// ==========================================
// 2. DASHBOARD: COUNTDOWN, QUESTS, MASTERY & SRS
// ==========================================
function renderCountdownAndStats() {
    const examDate = new Date('2026-12-06T08:00:00');
    const now = new Date();
    const diffDays = Math.max(0, Math.ceil((examDate - now) / (1000 * 60 * 60 * 24)));
    document.getElementById('days-left-num').textContent = diffDays;

    document.getElementById('streak-count').textContent = `${campaignStats.streak} ngày`;
    document.getElementById('xp-count').textContent = `${campaignStats.xp} XP`;

    // Calculate Estimated JLPT Score (Base 75 for someone who already studied N3 + up to 105 from mastery)
    const gMastered = GRAMMAR_N3_DATA.filter(g => gProgress[g.id] === 'mastered').length;
    const gRatio = gMastered / Math.max(1, GRAMMAR_N3_DATA.length);

    let vMastered = 0;
    try {
        const vp = JSON.parse(localStorage.getItem('vocab_progress')) || {};
        vMastered = Object.values(vp).filter(v => v === 'mastered').length;
    } catch (e) {}
    const vRatio = vMastered / Math.max(1, typeof vocabData !== 'undefined' ? vocabData.length : 880);

    let kMastered = 0;
    try {
        const kp = JSON.parse(localStorage.getItem('kanji_progress')) || {};
        kMastered = Object.values(kp).filter(v => v === 'mastered').length;
    } catch (e) {}
    const kRatio = kMastered / Math.max(1, typeof KANJI_DATA !== 'undefined' ? KANJI_DATA.length : 1000);

    const dojoAcc = campaignStats.dojoTotal > 0 ? (campaignStats.dojoCorrect / campaignStats.dojoTotal) : 0.5;
    const est = Math.min(180, Math.round(78 + (gRatio * 35) + (vRatio * 25) + (kRatio * 20) + (dojoAcc * 22)));
    document.getElementById('est-score').textContent = `${est} / 180`;
}

const QUEST_DEFINITIONS = [
    { key: 'q_grammar', title: 'Rà soát & đánh dấu 10 mẫu Ngữ pháp N3 (Tách lỗ hổng)', xp: 50 },
    { key: 'q_star', title: 'Xử lý 5 Bài toán Dấu sao ★ (Mondai 2 Ngữ pháp)', xp: 60 },
    { key: 'q_dokkai', title: 'Giải phẫu 1 bài Đọc hiểu Dokkai & 3 câu Nghe phản xạ Choukai', xp: 70 },
    { key: 'q_vocab', title: 'Ôn tập nhanh 30 Từ vựng Mimikara / Hán tự N3', xp: 50 }
];

function renderDailyQuests() {
    const today = getTodayStr();
    document.getElementById('today-date-label').textContent = `Ngày ${today}`;
    const todayState = campaignStats.dailyQuests[today] || {};
    const container = document.getElementById('daily-quest-list');
    container.innerHTML = '';

    QUEST_DEFINITIONS.forEach(q => {
        const isDone = !!todayState[q.key];
        const div = document.createElement('div');
        div.className = `quest-item ${isDone ? 'done' : ''}`;
        div.innerHTML = `
            <div class="quest-left">
                <div class="quest-check"><i class="fa-solid fa-check" style="font-size: 12px;"></i></div>
                <span class="quest-title" style="font-size: 14px; font-weight: 500;">${q.title}</span>
            </div>
            <span class="quest-xp">+${q.xp} XP</span>
        `;
        div.addEventListener('click', () => {
            if (!campaignStats.dailyQuests[today]) campaignStats.dailyQuests[today] = {};
            const nextVal = !campaignStats.dailyQuests[today][q.key];
            campaignStats.dailyQuests[today][q.key] = nextVal;
            addXP(nextVal ? q.xp : -q.xp);
            renderDailyQuests();
        });
        container.appendChild(div);
    });
}

function renderMasteryBars() {
    // 1. Grammar
    const gTotal = GRAMMAR_N3_DATA.length;
    const gMas = GRAMMAR_N3_DATA.filter(g => gProgress[g.id] === 'mastered').length;
    const gHole = GRAMMAR_N3_DATA.filter(g => gProgress[g.id] === 'learning').length;
    const gPct = Math.round((gMas / gTotal) * 100);
    document.getElementById('mastery-grammar-txt').textContent = `${gMas}/${gTotal} chắc chắn (${gHole} lỗ hổng)`;
    document.getElementById('mastery-grammar-bar').style.width = `${gPct}%`;

    // Sidebar counts
    document.getElementById('gcount-all').textContent = gTotal;
    document.getElementById('gcount-unlearned').textContent = gTotal - gMas - gHole;
    document.getElementById('gcount-learning').textContent = gHole;
    document.getElementById('gcount-mastered').textContent = gMas;

    // 2. Vocab
    let vMas = 0;
    const vTotal = typeof vocabData !== 'undefined' ? vocabData.length : 880;
    try {
        const vp = JSON.parse(localStorage.getItem('vocab_progress')) || {};
        vMas = Object.values(vp).filter(v => v === 'mastered').length;
    } catch (e) {}
    document.getElementById('mastery-vocab-txt').textContent = `${vMas} / ${vTotal} từ`;
    document.getElementById('mastery-vocab-bar').style.width = `${Math.round((vMas / vTotal) * 100)}%`;

    // 3. Kanji
    let kMas = 0;
    const kTotal = typeof KANJI_DATA !== 'undefined' ? KANJI_DATA.length : 1000;
    try {
        const kp = JSON.parse(localStorage.getItem('kanji_progress')) || {};
        kMas = Object.values(kp).filter(v => v === 'mastered').length;
    } catch (e) {}
    document.getElementById('mastery-kanji-txt').textContent = `${kMas} / ${kTotal} chữ`;
    document.getElementById('mastery-kanji-bar').style.width = `${Math.round((kMas / kTotal) * 100)}%`;

    // 4. Dojo Accuracy
    const acc = campaignStats.dojoTotal > 0 ? Math.round((campaignStats.dojoCorrect / campaignStats.dojoTotal) * 100) : 0;
    document.getElementById('mastery-dojo-txt').textContent = `${acc}% (${campaignStats.dojoCorrect}/${campaignStats.dojoTotal} câu đúng)`;
    document.getElementById('mastery-dojo-bar').style.width = `${acc}%`;
}

// ==========================================
// 3. SRS MISTAKE BANK ENGINE
// ==========================================
function addOrUpdateSrsMistake(item) {
    // item: { id, type, title, detail, questionObj }
    const existing = srsMistakes.find(m => m.id === item.id);
    const intervals = [1, 3, 7, 14]; // days
    const now = new Date();

    if (existing) {
        existing.level = Math.max(0, (existing.level || 0));
        existing.detail = item.detail || existing.detail;
        existing.nextReview = getTodayStr();
    } else {
        srsMistakes.unshift({
            id: item.id,
            type: item.type,
            title: item.title,
            detail: item.detail,
            questionObj: item.questionObj || null,
            level: 0,
            nextReview: getTodayStr(),
            addedAt: now.toLocaleDateString('vi-VN')
        });
    }
    saveHubState();
    renderSrsMistakeList();
}

function promoteSrsItem(id) {
    const idx = srsMistakes.findIndex(m => m.id === id);
    if (idx === -1) return;
    const item = srsMistakes[idx];
    const intervals = [1, 3, 7, 14];
    item.level = (item.level || 0) + 1;
    if (item.level >= intervals.length) {
        // Mastered completely!
        srsMistakes.splice(idx, 1);
    } else {
        const nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + intervals[item.level]);
        item.nextReview = `${nextDate.getFullYear()}-${String(nextDate.getMonth() + 1).padStart(2, '0')}-${String(nextDate.getDate()).padStart(2, '0')}`;
    }
    saveHubState();
    renderSrsMistakeList();
}

function renderSrsMistakeList() {
    const container = document.getElementById('srs-mistake-container');
    if (!srsMistakes || srsMistakes.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 26px; color: var(--hub-text-sub); background: var(--hub-surface-2); border: 1px solid var(--hub-border); border-radius: 12px;">
                <i class="fa-solid fa-shield-halved" style="font-size: 28px; color: var(--hub-ok-text); margin-bottom: 8px;"></i>
                <p>Chưa có lỗ hổng nào trong hàng đợi! Hãy làm bài ở <strong>Phòng Luyện Đề ★</strong> hoặc bấm <strong>"Hay nhầm"</strong> ở thẻ Ngữ pháp để gom lỗ hổng về đây.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = '';
    srsMistakes.forEach(m => {
        const intervals = ['Ôn ngay hôm nay', 'Chu kỳ 3 ngày', 'Chu kỳ 7 ngày', 'Chu kỳ 14 ngày'];
        const badgeTxt = intervals[m.level || 0] || 'Ôn ngay';
        const div = document.createElement('div');
        div.className = 'srs-item';
        div.innerHTML = `
            <div>
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px; flex-wrap: wrap;">
                    <span class="srs-badge">${m.type}</span>
                    <strong style="font-size: 15px; color: var(--hub-text);">${m.title}</strong>
                    <span style="font-size: 11.5px; color: var(--hub-text-sub);">• ${badgeTxt}</span>
                </div>
                <div style="font-size: 13.5px; color: var(--hub-text-body); line-height: 1.5;">${m.detail}</div>
            </div>
            <div style="display: flex; gap: 6px; flex-shrink: 0;">
                <button class="btn-pill" title="Đã thuộc kỹ, tăng bậc SRS" onclick="promoteSrsItem('${m.id}')">
                    <i class="fa-solid fa-check" style="color: var(--hub-ok-text);"></i> Đã lấp
                </button>
            </div>
        `;
        container.appendChild(div);
    });
}

// ==========================================
// 4. TAB SWITCHING & GRAMMAR MODULE
// ==========================================
function setupHubTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchHubTab(btn.getAttribute('data-tab'));
        });
    });

    // Sidebar Grammar Status Filters
    document.querySelectorAll('[data-gstatus]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-gstatus]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            gFilterStatus = btn.getAttribute('data-gstatus');
            applyGrammarFilter();
            switchHubTab('grammar');
        });
    });

    document.getElementById('grammar-search-input').addEventListener('input', () => {
        applyGrammarFilter();
        switchHubTab('grammar');
    });
}

function switchHubTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-tab') === tabId);
    });
    document.querySelectorAll('.tab-content').forEach(sec => {
        sec.classList.toggle('active', sec.id === `tab-${tabId}`);
    });
}

function applyGrammarFilter() {
    const q = (document.getElementById('grammar-search-input').value || '').trim().toLowerCase();
    filteredGrammars = GRAMMAR_N3_DATA.filter(g => {
        const statusMatch = gFilterStatus === 'all' || gProgress[g.id] === gFilterStatus;
        const searchMatch = !q ||
            g.pattern.toLowerCase().includes(q) ||
            g.meaning.toLowerCase().includes(q) ||
            g.structure.toLowerCase().includes(q) ||
            g.example_jp.toLowerCase().includes(q);
        return statusMatch && searchMatch;
    });
    gActiveIdx = 0;
    renderGrammarCard();
    renderGrammarTable();
}

function renderGrammarCard() {
    const total = filteredGrammars.length;
    document.getElementById('g-total-idx').textContent = total;
    if (total === 0) {
        document.getElementById('g-current-idx').textContent = 0;
        document.getElementById('g-front-pattern').textContent = 'Không tìm thấy';
        document.getElementById('g-front-struct').textContent = 'Hãy thử đổi bộ lọc ở thanh bên trái';
        return;
    }

    const g = filteredGrammars[gActiveIdx];
    document.getElementById('g-current-idx').textContent = gActiveIdx + 1;
    document.getElementById('grammar-flashcard').classList.remove('flipped');

    document.getElementById('g-front-cat').textContent = g.category;
    document.getElementById('g-front-stt').textContent = `Mẫu #${g.stt}`;
    document.getElementById('g-front-pattern').textContent = g.pattern;
    document.getElementById('g-front-struct').textContent = g.structure;

    document.getElementById('g-back-pattern').textContent = g.pattern;
    document.getElementById('g-back-struct').textContent = `Cấu trúc: ${g.structure}`;
    document.getElementById('g-back-meaning').textContent = g.meaning;
    document.getElementById('g-back-ex-jp').textContent = g.example_jp;
    document.getElementById('g-back-ex-vi').textContent = g.example_vi;
    document.getElementById('g-back-nuance').textContent = g.nuance;

    currentSenseiContext = `Đang học Ngữ pháp N3 #${g.stt}: ${g.pattern} (${g.meaning}). Ví dụ: ${g.example_jp}`;
}

function setupGrammarCardEvents() {
    const card = document.getElementById('grammar-flashcard');
    card.addEventListener('click', (e) => {
        if (e.target.closest('#g-tts-btn') || e.target.closest('#g-ask-ai-btn')) return;
        card.classList.toggle('flipped');
    });

    document.getElementById('g-flip-btn').addEventListener('click', () => {
        card.classList.toggle('flipped');
    });

    document.getElementById('g-prev-btn').addEventListener('click', () => {
        if (filteredGrammars.length === 0) return;
        gActiveIdx = (gActiveIdx - 1 + filteredGrammars.length) % filteredGrammars.length;
        renderGrammarCard();
    });

    document.getElementById('g-next-btn').addEventListener('click', () => {
        if (filteredGrammars.length === 0) return;
        gActiveIdx = (gActiveIdx + 1) % filteredGrammars.length;
        renderGrammarCard();
    });

    document.getElementById('g-tts-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        if (filteredGrammars.length === 0) return;
        const g = filteredGrammars[gActiveIdx];
        speakJapanese(g.example_jp.split('/')[0]);
    });

    document.getElementById('g-mark-hole-btn').addEventListener('click', () => {
        if (filteredGrammars.length === 0) return;
        const g = filteredGrammars[gActiveIdx];
        gProgress[g.id] = 'learning';
        addOrUpdateSrsMistake({
            id: g.id,
            type: 'Ngữ pháp N3',
            title: `${g.pattern} — ${g.meaning}`,
            detail: `${g.structure} | ${g.nuance}`
        });
        saveHubState();
        renderMasteryBars();
        renderCountdownAndStats();
        gActiveIdx = (gActiveIdx + 1) % filteredGrammars.length;
        renderGrammarCard();
    });

    document.getElementById('g-mark-mastered-btn').addEventListener('click', () => {
        if (filteredGrammars.length === 0) return;
        const g = filteredGrammars[gActiveIdx];
        gProgress[g.id] = 'mastered';
        addXP(10);
        saveHubState();
        renderMasteryBars();
        gActiveIdx = (gActiveIdx + 1) % filteredGrammars.length;
        renderGrammarCard();
    });

    document.getElementById('g-ask-ai-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        if (filteredGrammars.length === 0) return;
        const g = filteredGrammars[gActiveIdx];
        openSenseiWithPrompt(`Hãy phân tích sâu hơn mẫu ngữ pháp 「${g.pattern}」(${g.meaning}), cho mình thêm 2 câu ví dụ sát đề thi JLPT N3 và chỉ rõ dấu hiệu nhận biết để không nhầm với các mẫu tương tự.`);
    });

    // Subview toggles
    const btnCards = document.getElementById('view-g-cards-btn');
    const btnPairs = document.getElementById('view-g-pairs-btn');
    const btnList = document.getElementById('view-g-list-btn');

    const vCards = document.getElementById('grammar-subview-cards');
    const vPairs = document.getElementById('grammar-subview-pairs');
    const vList = document.getElementById('grammar-subview-list');

    btnCards.addEventListener('click', () => {
        btnCards.classList.add('active'); btnPairs.classList.remove('active'); btnList.classList.remove('active');
        vCards.style.display = 'flex'; vPairs.style.display = 'none'; vList.style.display = 'none';
    });
    btnPairs.addEventListener('click', () => {
        btnPairs.classList.add('active'); btnCards.classList.remove('active'); btnList.classList.remove('active');
        vPairs.style.display = 'block'; vCards.style.display = 'none'; vList.style.display = 'none';
    });
    btnList.addEventListener('click', () => {
        btnList.classList.add('active'); btnCards.classList.remove('active'); btnPairs.classList.remove('active');
        vList.style.display = 'block'; vCards.style.display = 'none'; vPairs.style.display = 'none';
    });
}

function renderNuancePairs() {
    const container = document.getElementById('nuance-pairs-container');
    container.innerHTML = '';
    NUANCE_PAIRS_DATA.forEach(pair => {
        const card = document.createElement('div');
        card.className = 'nuance-card';
        const rulesHtml = pair.rules.map(r => `<li>${r.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>`).join('');
        card.innerHTML = `
            <span class="srs-badge" style="background: var(--bg-btn-active); color: var(--primary); border-color: var(--hub-border);">${pair.tag}</span>
            <h4>${pair.title}</h4>
            <p style="font-size: 13px; color: var(--hub-text-sub);">${pair.summary}</p>
            <ul class="nuance-rule-list">${rulesHtml}</ul>
        `;
        container.appendChild(card);
    });
}

function renderGrammarTable() {
    const container = document.getElementById('grammar-library-container');
    container.innerHTML = '';
    filteredGrammars.forEach((g, idx) => {
        const st = gProgress[g.id] || 'unlearned';
        const card = document.createElement('div');
        card.className = `lib-card ${st}`;
        card.style.padding = '16px';
        card.style.textAlign = 'left';
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <span style="font-size: 11px; color: var(--hub-text-sub);">#${g.stt} • ${g.category}</span>
                <span class="dot ${st}"></span>
            </div>
            <div style="font-size: 19px; font-weight: 800; color: var(--primary); margin-bottom: 4px;">${g.pattern}</div>
            <div style="font-size: 13.5px; font-weight: 600; color: var(--hub-text); margin-bottom: 6px;">${g.meaning}</div>
            <div style="font-size: 12px; color: var(--hub-text-sub);">${g.structure}</div>
        `;
        card.addEventListener('click', () => {
            gActiveIdx = idx;
            renderGrammarCard();
            document.getElementById('view-g-cards-btn').click();
        });
        container.appendChild(card);
    });
}

// ==========================================
// 5. DOJO: STAR PUZZLES ★ & TRAP / SRS QUIZZES
// ==========================================
function setupDojoEvents() {
    const btnStar = document.getElementById('mode-star-btn');
    const btnTrap = document.getElementById('mode-trap-btn');
    const btnSrs = document.getElementById('mode-srs-quiz-btn');

    const starView = document.getElementById('dojo-star-view');
    const trapView = document.getElementById('dojo-trap-view');

    btnStar.addEventListener('click', () => {
        btnStar.classList.add('active'); btnTrap.classList.remove('active'); btnSrs.classList.remove('active');
        starView.style.display = 'block'; trapView.style.display = 'none';
    });

    btnTrap.addEventListener('click', () => {
        btnTrap.classList.add('active'); btnStar.classList.remove('active'); btnSrs.classList.remove('active');
        starView.style.display = 'none'; trapView.style.display = 'block';
        startTrapQuiz('trap');
    });

    btnSrs.addEventListener('click', () => {
        btnSrs.classList.add('active'); btnStar.classList.remove('active'); btnTrap.classList.remove('active');
        starView.style.display = 'none'; trapView.style.display = 'block';
        startTrapQuiz('srs');
    });

    document.getElementById('start-srs-revenge-btn').addEventListener('click', () => {
        switchHubTab('dojo');
        btnSrs.click();
    });

    document.getElementById('star-reset-slots-btn').addEventListener('click', () => {
        currentStarSlots = [null, null, null, null];
        renderStarPuzzleUI();
    });

    document.getElementById('star-next-btn').addEventListener('click', () => {
        starIdx = (starIdx + 1) % STAR_PUZZLES_DATA.length;
        loadStarPuzzle(starIdx);
    });

    document.getElementById('star-explain-ai-btn').addEventListener('click', () => {
        const p = STAR_PUZZLES_DATA[starIdx];
        openSenseiWithPrompt(`Hướng dẫn mình cách suy luận từng bước Bài toán dấu sao ★ này mà chưa lộ đáp án vội nhé: 「${p.prefix} ＿＿ ＿＿ ★ ＿＿ ${p.suffix}」 với 4 mảnh ghép: ${p.options.map(o => o.text).join(' / ')}`);
    });
}

function loadStarPuzzle(idx) {
    starIdx = idx;
    currentStarSlots = [null, null, null, null];
    document.getElementById('star-feedback-box').style.display = 'none';
    renderStarPuzzleUI();
}

function renderStarPuzzleUI() {
    const p = STAR_PUZZLES_DATA[starIdx];
    document.getElementById('star-idx-lbl').textContent = `${starIdx + 1}/${STAR_PUZZLES_DATA.length}`;
    currentSenseiContext = `Bài toán dấu sao ★ #${starIdx + 1}: ${p.prefix} [1] [2] [3] [4] ${p.suffix}. Đáp án chuẩn: ${p.full_sentence}`;

    const sentenceArea = document.getElementById('star-sentence-area');
    sentenceArea.innerHTML = `<span>${p.prefix}</span>`;

    for (let i = 0; i < 4; i++) {
        const slot = document.createElement('div');
        const isStar = (i + 1) === p.star_pos;
        const filledOpt = currentStarSlots[i];
        slot.className = `star-slot ${isStar ? 'is-star' : ''} ${filledOpt ? 'filled' : ''}`;
        slot.textContent = filledOpt ? filledOpt.text : (isStar ? '★' : `Ô ${i + 1}`);
        slot.addEventListener('click', () => {
            if (currentStarSlots[i]) {
                currentStarSlots[i] = null;
                document.getElementById('star-feedback-box').style.display = 'none';
                renderStarPuzzleUI();
            }
        });
        sentenceArea.appendChild(slot);
    }

    const suf = document.createElement('span');
    suf.textContent = p.suffix;
    sentenceArea.appendChild(suf);

    // Render 4 options
    const bank = document.getElementById('star-options-bank');
    bank.innerHTML = '';
    p.options.forEach(opt => {
        const isUsed = currentStarSlots.some(s => s && s.id === opt.id);
        const btn = document.createElement('button');
        btn.className = `star-word-btn ${isUsed ? 'used' : ''}`;
        btn.innerHTML = `<span class="srs-badge" style="background: rgba(139,92,246,0.2); color: var(--primary-light);">${opt.id}</span> <span>${opt.text}</span>`;
        btn.addEventListener('click', () => {
            const emptyIdx = currentStarSlots.findIndex(s => s === null);
            if (emptyIdx !== -1) {
                currentStarSlots[emptyIdx] = opt;
                renderStarPuzzleUI();
                if (currentStarSlots.every(s => s !== null)) {
                    evaluateStarPuzzle();
                }
            }
        });
        bank.appendChild(btn);
    });
}

function evaluateStarPuzzle() {
    const p = STAR_PUZZLES_DATA[starIdx];
    const userOrder = currentStarSlots.map(s => s.id);
    const isFullOrderCorrect = JSON.stringify(userOrder) === JSON.stringify(p.correct_order);
    const userStarOpt = currentStarSlots[p.star_pos - 1].id;
    const isStarCorrect = userStarOpt === p.correct_option;

    campaignStats.dojoTotal += 1;
    const fb = document.getElementById('star-feedback-box');
    fb.style.display = 'block';

    if (isFullOrderCorrect) {
        campaignStats.dojoCorrect += 1;
        addXP(25);
        fb.style.background = 'var(--hub-ok-bg)';
        fb.style.borderColor = 'var(--hub-ok-border)';
        document.getElementById('star-feedback-title').innerHTML = `<span style="color: var(--hub-ok-text);"><i class="fa-solid fa-circle-check"></i> Tuyệt đỉnh! Bạn xếp chuẩn xác cả 4 vị trí và ăn trọn điểm ★ (+25 XP)</span>`;
    } else {
        fb.style.background = 'var(--hub-danger-bg)';
        fb.style.borderColor = 'var(--hub-danger-border)';
        document.getElementById('star-feedback-title').innerHTML = `<span style="color: var(--hub-danger-text);"><i class="fa-solid fa-triangle-exclamation"></i> ${isStarCorrect ? 'Trúng vị trí ★ nhưng lệch thứ tự ghép!' : 'Bị lừa ở vị trí ★ rồi! Đã lưu vào Sổ tay Lỗ hổng SRS.'}</span>`;
        addOrUpdateSrsMistake({
            id: p.id,
            type: 'Dấu sao ★',
            title: `${p.prefix} ... ★ ... ${p.suffix}`,
            detail: `${p.full_sentence} — ${p.explanation}`
        });
    }

    document.getElementById('star-feedback-full').textContent = p.full_sentence;
    document.getElementById('star-feedback-trans').textContent = `Dịch: ${p.translation}`;
    document.getElementById('star-feedback-exp').innerHTML = `💡 <strong>Quy tắc nối câu:</strong> ${p.explanation}`;
    saveHubState();
    renderMasteryBars();
}

function startTrapQuiz(mode) {
    trapMode = mode;
    trapSessionScore = { correct: 0, total: 0 };
    document.getElementById('trap-score-val').textContent = '0/0';

    if (mode === 'srs') {
        document.getElementById('trap-mode-badge').textContent = '🔥 Đấu Trường Phục Thù SRS (Hỏi lại các mẫu trong Sổ tay Lỗ hổng)';
        // Build dynamic quiz from SRS mistakes + learning grammar points
        currentTrapPool = buildSrsQuizPool();
    } else {
        document.getElementById('trap-mode-badge').textContent = '⚡ Mondai 1 • Phân biệt Ngữ pháp N3 dễ nhầm';
        currentTrapPool = [...GRAMMAR_QUIZZES_DATA];
    }

    trapIdx = 0;
    renderTrapQuestion();

    document.getElementById('trap-next-btn').onclick = () => {
        trapIdx = (trapIdx + 1) % currentTrapPool.length;
        renderTrapQuestion();
    };

    document.getElementById('trap-ask-sensei-btn').onclick = () => {
        const q = currentTrapPool[trapIdx];
        openSenseiWithPrompt(`Giải thích chi tiết giúp mình câu trắc nghiệm N3 này và phân biệt cả 4 đáp án nhé: 「${q.question}」 (${q.options.join(' / ')})`);
    };
}

function buildSrsQuizPool() {
    const pool = [];
    // Include any trap quizzes matching SRS or all trap quizzes shuffled
    GRAMMAR_QUIZZES_DATA.forEach(q => {
        if (srsMistakes.some(m => m.id === q.id || m.id === q.grammar_ref)) {
            pool.push(q);
        }
    });
    // Also generate questions from Grammar items marked 'learning'
    GRAMMAR_N3_DATA.filter(g => gProgress[g.id] === 'learning').forEach(g => {
        const distractors = GRAMMAR_N3_DATA.filter(x => x.id !== g.id).sort(() => 0.5 - Math.random()).slice(0, 3);
        const opts = [g.meaning, ...distractors.map(d => d.meaning)].sort(() => 0.5 - Math.random());
        pool.push({
            id: `srs_${g.id}`,
            question: `Mẫu ngữ pháp 「${g.pattern}」 trong câu 「${g.example_jp.split('/')[0]}」 mang ý nghĩa chính xác là gì?`,
            options: opts,
            answer: opts.indexOf(g.meaning),
            grammar_ref: g.id,
            explanation: `${g.pattern} (${g.structure}): ${g.meaning}. ${g.nuance}`
        });
    });

    if (pool.length === 0) {
        return [...GRAMMAR_QUIZZES_DATA].sort(() => 0.5 - Math.random());
    }
    return pool;
}

function renderTrapQuestion() {
    const q = currentTrapPool[trapIdx];
    document.getElementById('trap-question-text').textContent = q.question;
    document.getElementById('trap-feedback-box').style.display = 'none';
    currentSenseiContext = `Đang làm câu trắc nghiệm N3: ${q.question} | Các lựa chọn: ${q.options.join(', ')}`;

    const grid = document.getElementById('trap-options-grid');
    grid.innerHTML = '';

    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.textContent = `${i + 1}. ${opt}`;
        btn.addEventListener('click', () => {
            if (document.getElementById('trap-feedback-box').style.display === 'block') return;
            const isCorrect = i === q.answer;
            trapSessionScore.total += 1;
            campaignStats.dojoTotal += 1;

            Array.from(grid.children).forEach((b, bi) => {
                if (bi === q.answer) b.classList.add('correct');
                else if (bi === i && !isCorrect) b.classList.add('wrong');
            });

            if (isCorrect) {
                trapSessionScore.correct += 1;
                campaignStats.dojoCorrect += 1;
                addXP(15);
                document.getElementById('trap-feedback-msg').innerHTML = `<strong style="color: var(--hub-ok-text);">✅ Chính xác (+15 XP)!</strong> ${q.explanation}`;
            } else {
                document.getElementById('trap-feedback-msg').innerHTML = `<strong style="color: var(--hub-danger-text);">❌ Sai rồi! Đã đẩy vào Sổ tay Lỗ hổng SRS.</strong><br>${q.explanation}`;
                addOrUpdateSrsMistake({
                    id: q.id,
                    type: 'Bẫy Ngữ pháp',
                    title: q.question,
                    detail: `Đáp án đúng: ${q.options[q.answer]} — ${q.explanation}`
                });
            }

            document.getElementById('trap-score-val').textContent = `${trapSessionScore.correct}/${trapSessionScore.total}`;
            document.getElementById('trap-feedback-box').style.display = 'block';
            saveHubState();
            renderMasteryBars();
        });
        grid.appendChild(btn);
    });
}

// ==========================================
// 6. SMART DOKKAI READER & CHOUKAI REFLEX
// ==========================================
function setupDokkaiAndChoukai() {
    const sel = document.getElementById('dokkai-select');
    DOKKAI_PASSAGES_DATA.forEach((d, idx) => {
        const opt = document.createElement('option');
        opt.value = idx;
        opt.textContent = d.title;
        sel.appendChild(opt);
    });
    sel.addEventListener('change', () => {
        activeDokkaiIdx = parseInt(sel.value, 10);
        renderDokkaiPassage();
    });

    document.getElementById('toggle-anatomy-btn').addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('active');
        document.getElementById('dokkai-passage-content').classList.toggle('show-anatomy');
    });

    document.getElementById('toggle-dokkai-trans-btn').addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('active');
        const box = document.getElementById('dokkai-trans-box');
        box.style.display = box.style.display === 'none' ? 'block' : 'none';
    });

    document.getElementById('dokkai-tts-btn').addEventListener('click', () => {
        const d = DOKKAI_PASSAGES_DATA[activeDokkaiIdx];
        const plainText = d.passage_ruby.replace(/<[^>]+>/g, '');
        speakJapanese(plainText, 0.95);
    });

    renderDokkaiPassage();

    // Choukai Events
    document.getElementById('choukai-play-normal').addEventListener('click', () => {
        speakJapanese(CHOUKAI_DRILLS_DATA[activeChoukaiIdx].audio_text, 1.0);
    });
    document.getElementById('choukai-play-slow').addEventListener('click', () => {
        speakJapanese(CHOUKAI_DRILLS_DATA[activeChoukaiIdx].audio_text, 0.8);
    });
    document.getElementById('choukai-toggle-script').addEventListener('click', () => {
        const sb = document.getElementById('choukai-script-box');
        sb.style.display = sb.style.display === 'none' ? 'block' : 'none';
    });
    document.getElementById('choukai-prev-btn').addEventListener('click', () => {
        activeChoukaiIdx = (activeChoukaiIdx - 1 + CHOUKAI_DRILLS_DATA.length) % CHOUKAI_DRILLS_DATA.length;
        renderChoukaiDrill();
    });
    document.getElementById('choukai-next-btn').addEventListener('click', () => {
        activeChoukaiIdx = (activeChoukaiIdx + 1) % CHOUKAI_DRILLS_DATA.length;
        renderChoukaiDrill();
    });

    renderChoukaiDrill();
}

function renderDokkaiPassage() {
    const d = DOKKAI_PASSAGES_DATA[activeDokkaiIdx];
    document.getElementById('dokkai-passage-content').innerHTML = d.passage_ruby;
    document.getElementById('dokkai-trans-box').textContent = d.translation;
    document.getElementById('dokkai-q-feedback').style.display = 'none';

    const notesContainer = document.getElementById('dokkai-anatomy-notes');
    notesContainer.innerHTML = '';
    const badgeColors = {
        topic: '#3b82f6',
        contrast: '#f43f5e',
        main: '#f59e0b',
        conclusion: '#10b981'
    };
    d.anatomy.forEach(a => {
        const item = document.createElement('div');
        item.style.fontSize = '13px';
        item.style.padding = '8px 12px';
        item.style.borderRadius = '8px';
        item.style.background = 'var(--hub-surface-2)';
        item.style.color = 'var(--hub-text-body)';
        item.style.borderLeft = `3px solid ${badgeColors[a.color] || '#8b5cf6'}`;
        item.innerHTML = `<strong style="color: ${badgeColors[a.color]};">[${a.label}]</strong> ${a.text}`;
        notesContainer.appendChild(item);
    });

    document.getElementById('dokkai-q-text').textContent = `❓ Câu hỏi: ${d.question}`;
    const optBox = document.getElementById('dokkai-q-options');
    optBox.innerHTML = '';
    d.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.style.textAlign = 'left';
        btn.style.padding = '12px 16px';
        btn.textContent = `${i + 1}. ${opt}`;
        btn.addEventListener('click', () => {
            const fb = document.getElementById('dokkai-q-feedback');
            fb.style.display = 'block';
            if (i === d.answer) {
                btn.classList.add('correct');
                addXP(30);
                fb.innerHTML = `<strong style="color: var(--hub-ok-text);">✅ Chính xác (+30 XP)!</strong> ${d.explanation}`;
            } else {
                btn.classList.add('wrong');
                fb.innerHTML = `<strong style="color: var(--hub-danger-text);">❌ Bị rơi vào bẫy Dokkai rồi!</strong> ${d.explanation}`;
            }
        });
        optBox.appendChild(btn);
    });
}

function renderChoukaiDrill() {
    const c = CHOUKAI_DRILLS_DATA[activeChoukaiIdx];
    document.getElementById('choukai-idx-lbl').textContent = `${activeChoukaiIdx + 1}/${CHOUKAI_DRILLS_DATA.length}`;
    document.getElementById('choukai-situation').textContent = `${c.mondai}: ${c.situation}`;
    const sb = document.getElementById('choukai-script-box');
    sb.textContent = `「${c.audio_text}」`;
    sb.style.display = 'none';
    document.getElementById('choukai-feedback-box').style.display = 'none';

    const list = document.getElementById('choukai-options-list');
    list.innerHTML = '';
    c.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.style.textAlign = 'left';
        btn.style.padding = '12px 16px';
        btn.innerHTML = `<strong>Đáp án ${i + 1}:</strong> ${opt}`;
        btn.addEventListener('click', () => {
            speakJapanese(opt, 1.0);
            const fb = document.getElementById('choukai-feedback-box');
            fb.style.display = 'block';
            sb.style.display = 'block';
            if (i === c.answer) {
                btn.classList.add('correct');
                addXP(20);
                fb.innerHTML = `<strong style="color: var(--hub-ok-text);">✅ Phản xạ chuẩn (+20 XP)!</strong> ${c.explanation}`;
            } else {
                btn.classList.add('wrong');
                fb.innerHTML = `<strong style="color: var(--hub-danger-text);">❌ Chưa tự nhiên!</strong> ${c.explanation}`;
            }
        });
        list.appendChild(btn);
    });
}

// ==========================================
// 7. JAPANESE TTS & AI SENSEI COMPANION
// ==========================================
function speakJapanese(text, rate = 0.95) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'ja-JP';
    utter.rate = rate;
    const voices = window.speechSynthesis.getVoices();
    const jaVoice = voices.find(v => v.lang.includes('ja') || v.lang.includes('JP'));
    if (jaVoice) utter.voice = jaVoice;
    window.speechSynthesis.speak(utter);
}

function setupSenseiCompanion() {
    const openBtn = document.getElementById('sensei-open-btn');
    const backdrop = document.getElementById('sensei-backdrop');
    const closeBtn = document.getElementById('sensei-close-btn');
    const apiKeyInput = document.getElementById('gemini-api-key-input');
    const apiKeyBar = document.getElementById('sensei-apikey-bar');
    const toggleKeyBtn = document.getElementById('toggle-apikey-bar-btn');

    apiKeyInput.value = localStorage.getItem('n3_gemini_api_key') || '';
    if (toggleKeyBtn && apiKeyBar) {
        toggleKeyBtn.addEventListener('click', () => {
            apiKeyBar.style.display = apiKeyBar.style.display === 'none' ? 'flex' : 'none';
        });
    }
    document.getElementById('save-api-key-btn').addEventListener('click', () => {
        const k = apiKeyInput.value.trim();
        localStorage.setItem('n3_gemini_api_key', k);
        if (apiKeyBar) apiKeyBar.style.display = 'none';
        appendSenseiMessage('sensei', k
            ? '✅ Đã lưu Gemini API Key! Giờ Sensei sẽ kết nối trực tiếp với máy chủ Google Gemini.'
            : 'ℹ️ Đã xóa Key — Đang dùng chế độ Gia sư Nội bộ (Miễn phí, không cần Key).'
        );
    });

    if (openBtn) openBtn.addEventListener('click', () => backdrop.classList.add('open'));
    if (closeBtn) closeBtn.addEventListener('click', () => backdrop.classList.remove('open'));
    if (backdrop) {
        backdrop.addEventListener('click', (e) => {
            if (e.target === backdrop) backdrop.classList.remove('open');
        });
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && backdrop) backdrop.classList.remove('open');
    });

    document.getElementById('sensei-send-btn').addEventListener('click', () => handleSenseiSend());
    document.getElementById('sensei-chat-input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleSenseiSend();
    });

    // Voice Recognition (Kaiwa N3)
    const micBtn = document.getElementById('sensei-mic-btn');
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRec) {
        const rec = new SpeechRec();
        rec.lang = 'ja-JP';
        rec.interimResults = false;
        micBtn.addEventListener('click', () => {
            micBtn.style.background = '#f43f5e';
            rec.start();
        });
        rec.onresult = (e) => {
            micBtn.style.background = '';
            const transcript = e.results[0][0].transcript;
            document.getElementById('sensei-chat-input').value = transcript;
            handleSenseiSend();
        };
        rec.onerror = () => { micBtn.style.background = ''; };
        rec.onend = () => { micBtn.style.background = ''; };
    }

    // Export / Copy Report for Antigravity IDE
    const copyReportHandler = () => {
        const report = buildAntigravityReport();
        navigator.clipboard.writeText(report).then(() => {
            alert('📋 Đã copy Báo cáo Tiến độ & Danh sách Lỗ hổng vào Clipboard! Bạn chỉ cần Paste (Ctrl+V) vào khung chat Antigravity để Sensei phân tích và khảo bài ngay nhé!');
        });
    };
    document.getElementById('export-antigravity-btn').addEventListener('click', copyReportHandler);
    document.getElementById('copy-mistakes-btn').addEventListener('click', copyReportHandler);
    document.getElementById('sensei-copy-for-agy-btn').addEventListener('click', () => {
        const q = document.getElementById('sensei-chat-input').value.trim();
        const textToCopy = `[Bối cảnh: ${currentSenseiContext}]\nCâu hỏi của mình: ${q || 'Hãy giải thích chi tiết câu này và cho mình 1 câu hỏi tương tự để luyện phản xạ nhé!'}`;
        navigator.clipboard.writeText(textToCopy).then(() => {
            appendSenseiMessage('sensei', '📋 <strong>Đã copy!</strong> Giờ bạn chỉ cần chuyển sang cửa sổ <strong>Antigravity</strong> và bấm <strong>Ctrl + V (Dán)</strong> để thảo luận trực tiếp với mình nhé!');
        });
    });
}

function triggerQuickSensei(actionType) {
    const backdrop = document.getElementById('sensei-backdrop');
    if (backdrop) backdrop.classList.add('open');

    if (actionType === 'hint') {
        const p = STAR_PUZZLES_DATA[starIdx];
        appendSenseiMessage('user', '💡 Gợi ý cho mình câu đang làm trên màn hình!');
        appendSenseiMessage('sensei', `
            🎯 <strong>Gợi ý từng bước (Không lộ đáp án ngay):</strong><br>
            • Ngữ cảnh hiện tại: <em>${currentSenseiContext.split('.')[0]}</em><br>
            • Nếu đang làm <strong>Bài dấu sao ★ #${starIdx + 1}</strong> (「${p.prefix} ... ${p.suffix}」):<br>
            👉 <strong>Mẹo mở khóa:</strong> ${p.explanation}<br>
            • Dịch nghĩa cả câu: <em>"${p.translation}"</em>
        `);
    } else if (actionType === 'trap') {
        const pair = NUANCE_PAIRS_DATA[Math.floor(Math.random() * NUANCE_PAIRS_DATA.length)];
        appendSenseiMessage('user', '⚡ Chỉ cho mình 1 cặp ngữ pháp N3 dễ nhầm!');
        appendSenseiMessage('sensei', `
            ⚡ <strong>Phân biệt nhanh: ${pair.title}</strong><br>
            ${pair.rules.map(r => r.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')).join('<br>')}
        `);
    } else if (actionType === 'quiz') {
        const q = GRAMMAR_QUIZZES_DATA[Math.floor(Math.random() * GRAMMAR_QUIZZES_DATA.length)];
        appendSenseiMessage('user', '🎯 Khảo bài nhanh 1 câu N3!');
        appendSenseiMessage('sensei', `
            🔥 <strong>Câu hỏi phản xạ nhanh:</strong><br>
            <strong>「${q.question}」</strong><br>
            1️⃣ ${q.options[0]} &nbsp;|&nbsp; 2️⃣ ${q.options[1]} &nbsp;|&nbsp; 3️⃣ ${q.options[2]} &nbsp;|&nbsp; 4️⃣ ${q.options[3]}<br>
            <details style="margin-top:8px; cursor:pointer;">
                <summary style="color:var(--primary); font-weight:700;">👉 Bấm để xem đáp án & giải thích</summary>
                <div style="margin-top:6px;">✅ <strong>Đáp án đúng: ${q.answer + 1}. ${q.options[q.answer]}</strong><br>${q.explanation}</div>
            </details>
        `);
    }
}

function generateLocalSenseiReply(query) {
    const q = query.toLowerCase();

    // 1. Search in 100 N3 Grammar points
    const gMatches = GRAMMAR_N3_DATA.filter(g =>
        g.pattern.toLowerCase().includes(q) ||
        q.includes(g.pattern.replace(/～|N \+|Vる \+|Vた \+|Vます \+/g, '').trim().toLowerCase()) ||
        g.meaning.toLowerCase().includes(q) ||
        g.example_jp.toLowerCase().includes(q)
    );
    if (gMatches.length > 0) {
        const g = gMatches[0];
        return `
            🧩 <strong>Giải phẫu Ngữ pháp N3 #${g.stt}: ${g.pattern}</strong><br>
            • <strong>Cấu trúc nối:</strong> <code>${g.structure}</code><br>
            • <strong>Ý nghĩa:</strong> ${g.meaning}<br>
            • <strong>Ví dụ:</strong> ${g.example_jp}<br>
            <em>(${g.example_vi})</em><br>
            • ${g.nuance}
        `;
    }

    // 2. Search in 880 Vocab words
    if (typeof vocabData !== 'undefined') {
        const vMatches = vocabData.filter(v =>
            (v.kanji && v.kanji.toLowerCase().includes(q)) ||
            (v.furigana && v.furigana.toLowerCase().includes(q)) ||
            (v.meaning && v.meaning.toLowerCase().includes(q))
        );
        if (vMatches.length > 0) {
            const v = vMatches[0];
            return `
                📖 <strong>Từ vựng N3 (${v.unit}): ${v.kanji} （${v.furigana}）</strong><br>
                • <strong>Nghĩa:</strong> ${v.meaning}<br>
                • <strong>Ví dụ:</strong> ${v.example}<br>
                <em>(${v.example_vi})</em>
            `;
        }
    }

    // 3. Search in 1000 Kanji
    if (typeof KANJI_DATA !== 'undefined') {
        const kMatches = KANJI_DATA.filter(k =>
            (k.kanji && q.includes(k.kanji)) ||
            (k.han_viet && k.han_viet.toLowerCase().includes(q)) ||
            (k.nghia && k.nghia.toLowerCase().includes(q))
        );
        if (kMatches.length > 0) {
            const k = kMatches[0];
            return `
                🈴 <strong>Hán tự: ${k.kanji} 【${k.han_viet}】</strong><br>
                • <strong>Nghĩa:</strong> ${k.nghia}<br>
                • <strong>Onyomi:</strong> ${k.on || '-'} | <strong>Kunyomi:</strong> ${k.kun || '-'}
            `;
        }
    }

    // 4. Context-aware fallback + Auto-copy to Clipboard for Antigravity
    const clip = `[Bối cảnh: ${currentSenseiContext}]\nCâu hỏi của mình: ${query}`;
    try { navigator.clipboard.writeText(clip); } catch (e) {}
    return `
        🤖 <strong>Gia sư Nội bộ đã ghi nhận câu hỏi của bạn!</strong><br>
        • <strong>Bối cảnh bài đang mở:</strong> ${currentSenseiContext}<br>
        • Mình đã <strong>tự động Copy câu hỏi này vào bộ nhớ tạm (Clipboard)</strong>. Với các câu hỏi tự luận dài, bạn chỉ cần qua cửa sổ <strong>Antigravity</strong> bên cạnh và bấm <strong>Ctrl + V (Dán)</strong> để mình phân tích sâu từng chữ hoàn toàn miễn phí nhé!
    `;
}

function openSenseiWithPrompt(promptText) {
    const backdrop = document.getElementById('sensei-backdrop');
    if (backdrop) backdrop.classList.add('open');
    document.getElementById('sensei-chat-input').value = promptText;
    handleSenseiSend();
}

async function handleSenseiSend() {
    const input = document.getElementById('sensei-chat-input');
    const userMsg = input.value.trim();
    if (!userMsg) return;
    input.value = '';
    appendSenseiMessage('user', userMsg);

    const apiKey = (localStorage.getItem('n3_gemini_api_key') || '').trim();
    if (!apiKey) {
        // Use Built-in Offline Sensei Engine immediately (No API key needed!)
        const localReply = generateLocalSenseiReply(userMsg);
        appendSenseiMessage('sensei', localReply);
        return;
    }

    appendSenseiMessage('sensei', '⏳ Sensei đang phân tích...');
    try {
        const sysPrompt = `Bạn là Sensei luyện thi JLPT N3 tận tâm, súc tích. Học viên đã học hết N3 nhưng còn lỗ hổng và sẽ thi vào 06/12/2026. Ngữ cảnh hiện tại trên màn hình: ${currentSenseiContext}. Hãy giải thích ngắn gọn, dễ hiểu, chỉ rõ cấu trúc nối, so sánh các ngữ pháp N3 dễ nhầm, và cuối câu đặt 1 câu hỏi nhỏ để học viên phản xạ.`;
        const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                system_instruction: { parts: [{ text: sysPrompt }] },
                contents: [{ role: 'user', parts: [{ text: userMsg }] }]
            })
        });
        const data = await resp.json();
        const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Không nhận được phản hồi, vui lòng kiểm tra lại API Key.';
        const msgs = document.getElementById('sensei-messages');
        msgs.lastElementChild.innerHTML = reply.replace(/\n/g, '<br>');
    } catch (err) {
        const msgs = document.getElementById('sensei-messages');
        msgs.lastElementChild.innerHTML = generateLocalSenseiReply(userMsg);
    }
}

function appendSenseiMessage(role, html) {
    const msgs = document.getElementById('sensei-messages');
    const div = document.createElement('div');
    div.className = `msg-bubble ${role === 'user' ? 'msg-user' : 'msg-sensei'}`;
    div.innerHTML = html;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
}

function buildAntigravityReport() {
    const gMas = GRAMMAR_N3_DATA.filter(g => gProgress[g.id] === 'mastered').length;
    const gHole = GRAMMAR_N3_DATA.filter(g => gProgress[g.id] === 'learning').length;
    const topMistakes = srsMistakes.slice(0, 8).map((m, i) => `${i + 1}. [${m.type}] ${m.title} (${m.detail})`).join('\n');

    return `📊 BÁO CÁO TIẾN ĐỘ CHIẾN DỊCH N3 (${getTodayStr()})
- Chuỗi học: ${campaignStats.streak} ngày | Kinh nghiệm: ${campaignStats.xp} XP
- Ngữ pháp N3: Đã chắc ${gMas}/${GRAMMAR_N3_DATA.length} | Đang đánh dấu lỗ hổng: ${gHole}
- Tỷ lệ đúng Phòng Luyện Đề ★ & Bẫy: ${campaignStats.dojoCorrect}/${campaignStats.dojoTotal} câu
- Danh sách Lỗ hổng SRS cần Sensei khảo bài & ra đề phục thù:
${topMistakes || '(Hôm nay chưa phát sinh câu sai mới, hãy khảo bài ngẫu nhiên giúp mình!)'}`;
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
