// ==========================================
// LUYỆN ĐỀ N3 — 240 KANJI & ANTI-ROTE ENGINE
// ==========================================

const LS_MISTAKES_KEY = 'n3_kanji240_mistakes';
const LS_HISTORY_KEY = 'n3_kanji240_history';
const LS_TOUCHED_KEY = 'n3_kanji240_touched';
const LS_INPROGRESS_KEY = 'n3_kanji240_inprogress';
const LS_HUB_SRS_KEY = 'n3_srs_mistakes';
const LS_HUB_STATS_KEY = 'n3_campaign_stats';

const ALL_BACKUP_KEYS = [
    LS_MISTAKES_KEY, LS_HISTORY_KEY, LS_TOUCHED_KEY, LS_INPROGRESS_KEY,
    LS_HUB_SRS_KEY, LS_HUB_STATS_KEY,
    'n3_grammar_progress', 'kanji_progress', 'vocab_progress'
];

const SHIFT_META = [
    { session: 1, shift: 'Ca 1 • Sáng', icon: 'fa-sun', desc: 'Câu 1–60 (30 đọc Kanji + 30 chọn Kanji)' },
    { session: 2, shift: 'Ca 2 • Trưa', icon: 'fa-cloud-sun', desc: 'Câu 61–120 (31 đọc Kanji + 29 chọn Kanji)' },
    { session: 3, shift: 'Ca 3 • Chiều', icon: 'fa-mountain-sun', desc: 'Câu 121–180 (30 đọc Kanji + 30 chọn Kanji)' },
    { session: 4, shift: 'Ca 4 • Tối', icon: 'fa-moon', desc: 'Câu 181–240 (30 đọc Kanji + 30 chọn Kanji)' }
];

// Persistent State
let mistakesMap = {}; // { qid: { streak: 0|1, wrongCount: n, flagged: bool, lastAt: str } }
let historyData = {
    sessions: { 1: null, 2: null, 3: null, 4: null },
    m1Correct: 0, m1Total: 0,
    m2Correct: 0, m2Total: 0,
    attemptsLog: []
};
let touchedSet = new Set();

// Active Exam Session State
let activeSession = null;
/*
activeSession = {
    title: string,
    sourceConfig: { ... },
    mode: 'exam' | 'drill',
    isRevenge: boolean,
    antiRote: { shuffleQ, shuffleOpt, hideCtx, reverseMode },
    items: [ { orig, effectiveMondai, displayHtml, displayOnlyWord, options: [str], correctIdx: int } ],
    answers: [ null | 0..3 ],
    flags: [ bool ],
    revealedCtx: [ bool ],
    currentIndex: 0,
    startedAt: number,
    timerSecondsLeft: number,
    timerInterval: number | null,
    finished: boolean
}
*/
let lastResultFilter = 'wrong'; // 'wrong' | 'all'

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadState();
    setupMobileMenu();
    setupLobbyEvents();
    setupExamEvents();
    setupKeyboardShortcuts();
    renderLobby();
});

// ==========================================
// 1. THEME & PERSISTENCE
// ==========================================
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

function loadState() {
    try { mistakesMap = JSON.parse(localStorage.getItem(LS_MISTAKES_KEY)) || {}; } catch (e) { mistakesMap = {}; }
    try {
        const h = JSON.parse(localStorage.getItem(LS_HISTORY_KEY));
        if (h) historyData = { ...historyData, ...h, sessions: { 1: null, 2: null, 3: null, 4: null, ...(h.sessions || {}) }, attemptsLog: Array.isArray(h.attemptsLog) ? h.attemptsLog : [] };
    } catch (e) {}
    try {
        const t = JSON.parse(localStorage.getItem(LS_TOUCHED_KEY));
        if (Array.isArray(t)) touchedSet = new Set(t);
    } catch (e) {}
}

function saveState() {
    localStorage.setItem(LS_MISTAKES_KEY, JSON.stringify(mistakesMap));
    localStorage.setItem(LS_HISTORY_KEY, JSON.stringify(historyData));
    localStorage.setItem(LS_TOUCHED_KEY, JSON.stringify(Array.from(touchedSet)));
}

function getTodayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

// Sync mistakes directly with n3_hub.html's SRS Mistake Bank
function syncMistakeToHubSrs(qObj, remove = false) {
    let hubSrs = [];
    try { hubSrs = JSON.parse(localStorage.getItem(LS_HUB_SRS_KEY)) || []; } catch (e) { hubSrs = []; }

    const idx = hubSrs.findIndex(m => m.id === qObj.id);
    if (remove) {
        if (idx !== -1) hubSrs.splice(idx, 1);
    } else {
        const entry = {
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

function recordMistakeOrFlag(qObj, isFlagOnly = false) {
    const cur = mistakesMap[qObj.id];
    mistakesMap[qObj.id] = {
        streak: 0, // Reset mastery gate [0/2] whenever wrong or newly flagged
        wrongCount: (cur ? cur.wrongCount : 0) + (isFlagOnly ? 0 : 1),
        flagged: isFlagOnly ? true : (cur ? cur.flagged : false),
        lastAt: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    };
    syncMistakeToHubSrs(qObj, false);
    saveState();
}

function recordRevengeSuccess(qObj) {
    const cur = mistakesMap[qObj.id];
    if (!cur) return { cleared: false, newStreak: 0 };
    const nextStreak = (cur.streak || 0) + 1;
    if (nextStreak >= 2) {
        delete mistakesMap[qObj.id];
        syncMistakeToHubSrs(qObj, true);
        addHubXP(20);
        saveState();
        return { cleared: true, newStreak: 2 };
    } else {
        cur.streak = nextStreak;
        cur.flagged = false;
        saveState();
        return { cleared: false, newStreak: nextStreak };
    }
}

function manualClearMistake(qid) {
    const qObj = KANJI_240_DATA.find(x => x.id === qid);
    delete mistakesMap[qid];
    if (qObj) syncMistakeToHubSrs(qObj, true);
    saveState();
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

// Generate 3 smart, believable distractors when Reverse Mode flips Mondai 1 <-> Mondai 2
function buildReverseDistractors(qObj, targetMondai) {
    const correctText = targetMondai === 2 ? qObj.kanji_form : qObj.reading;
    const len = correctText.length;

    // Candidate pool from all 240 items excluding identical answer
    const candidates = KANJI_240_DATA
        .map(x => targetMondai === 2 ? x.kanji_form : x.reading)
        .filter(txt => txt && txt !== correctText);

    const uniqueCands = Array.from(new Set(candidates));

    // Prefer candidates with identical character length & similar ending (okurigana match for verbs/adj!)
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

function buildPreparedQuestion(qObj, antiRote) {
    const isReversed = !!antiRote.reverseMode;
    const effectiveMondai = isReversed ? (qObj.mondai === 1 ? 2 : 1) : qObj.mondai;

    let rawOptions;
    let correctText;

    if (!isReversed) {
        rawOptions = [...qObj.options];
        correctText = qObj.options[qObj.answer];
    } else {
        rawOptions = buildReverseDistractors(qObj, effectiveMondai);
        correctText = rawOptions[0];
    }

    const finalOptions = antiRote.shuffleOpt ? fisherYatesShuffle(rawOptions) : rawOptions;
    const correctIdx = finalOptions.indexOf(correctText);

    const displayHtml = isReversed ? qObj.sentence_reverse_html : qObj.sentence_html;
    const displayOnlyWord = effectiveMondai === 1 ? qObj.kanji_form : qObj.reading;

    return {
        orig: qObj,
        effectiveMondai,
        isReversed,
        displayHtml,
        displayOnlyWord,
        options: finalOptions,
        correctIdx
    };
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

    document.getElementById('nav-view-lobby-btn').classList.toggle('active', viewName === 'lobby');
    document.getElementById('nav-view-mistakes-btn').classList.toggle('active', viewName === 'mistakes');

    if (viewName === 'lobby') renderLobby();
    if (viewName === 'mistakes') renderMistakesView();
}

function renderLobby() {
    const mistakeIds = Object.keys(mistakesMap);
    document.getElementById('top-mistake-count').textContent = mistakeIds.length;
    document.getElementById('btn-revenge-cnt').textContent = mistakeIds.length;
    document.getElementById('kpi-mistakes').textContent = `${mistakeIds.length} câu`;
    document.getElementById('kpi-touched').textContent = `${touchedSet.size} / ${KANJI_240_DATA.length}`;

    const m1Pct = historyData.m1Total > 0 ? `${Math.round((historyData.m1Correct / historyData.m1Total) * 100)}%` : '--%';
    const m2Pct = historyData.m2Total > 0 ? `${Math.round((historyData.m2Correct / historyData.m2Total) * 100)}%` : '--%';
    document.getElementById('kpi-m1-acc').textContent = m1Pct;
    document.getElementById('kpi-m2-acc').textContent = m2Pct;

    // Render 4 Shift Session Cards
    const container = document.getElementById('sessions-cards-container');
    container.innerHTML = '';
    const sidebarChecklist = document.getElementById('sidebar-sprint-checklist');
    sidebarChecklist.innerHTML = '';

    SHIFT_META.forEach(meta => {
        const rec = historyData.sessions[meta.session];
        const bestStr = rec ? `Cao nhất: ${rec.best}/${rec.total} (${Math.round((rec.best / rec.total) * 100)}%)` : 'Chưa làm';
        const passed = rec && (rec.best / rec.total) >= 0.85;
        const sessMistakeCount = KANJI_240_DATA.filter(q => q.session === meta.session && mistakesMap[q.id]).length;

        const card = document.createElement('div');
        card.className = 'session-card';
        card.innerHTML = `
            <div class="session-top">
                <div>
                    <span class="shift-badge"><i class="fa-solid ${meta.icon}"></i> ${meta.shift}</span>
                    <h4 style="font-size: 18px; color: var(--hub-text); margin-top: 7px;">Buổi ${meta.session} — 60 Câu Kanji N3</h4>
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
                    <i class="fa-solid fa-stopwatch"></i> Thi Thử 15p
                </button>
                <button class="btn-pill" style="flex: 1;" onclick="launchSession(${meta.session}, 'drill')">
                    <i class="fa-solid fa-bolt"></i> Luyện Chữa Ngay
                </button>
            </div>
        `;
        container.appendChild(card);

        // Sidebar sprint item
        const sItem = document.createElement('div');
        sItem.style.padding = '9px 11px';
        sItem.style.borderRadius = '9px';
        sItem.style.background = 'var(--hub-surface-2)';
        sItem.style.borderLeft = `3px solid ${passed ? 'var(--hub-ok-text)' : (rec ? 'var(--hub-warn-text)' : 'var(--primary)')}`;
        sItem.innerHTML = `<strong style="color: var(--hub-text);">${passed ? '✅' : '⏳'} ${meta.shift} (Buổi ${meta.session}):</strong> ${rec ? `${rec.best}/60 điểm` : 'Chưa chạy'}`;
        sidebarChecklist.appendChild(sItem);
    });

    renderResumeBanner();
    renderHistoryLog();
}

function saveInProgressSession() {
    if (!activeSession || activeSession.finished) return;
    try {
        const snapshot = {
            title: activeSession.title,
            sessionNum: activeSession.sessionNum,
            mode: activeSession.mode,
            isRevenge: activeSession.isRevenge,
            antiRote: activeSession.antiRote,
            items: activeSession.items.map(it => ({
                qid: it.orig.id,
                effectiveMondai: it.effectiveMondai,
                isReversed: it.isReversed,
                displayHtml: it.displayHtml,
                displayOnlyWord: it.displayOnlyWord,
                options: it.options,
                correctIdx: it.correctIdx
            })),
            answers: activeSession.answers,
            flags: activeSession.flags,
            revealedCtx: activeSession.revealedCtx,
            currentIndex: activeSession.currentIndex,
            timerSecondsLeft: activeSession.timerSecondsLeft,
            savedAt: new Date().toLocaleString('vi-VN')
        };
        localStorage.setItem(LS_INPROGRESS_KEY, JSON.stringify(snapshot));
    } catch (e) {}
}

function clearInProgressSession() {
    localStorage.removeItem(LS_INPROGRESS_KEY);
}

function renderResumeBanner() {
    const banner = document.getElementById('resume-banner');
    if (!banner) return;
    let snap = null;
    try { snap = JSON.parse(localStorage.getItem(LS_INPROGRESS_KEY)); } catch (e) {}
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
    let snap = null;
    try { snap = JSON.parse(localStorage.getItem(LS_INPROGRESS_KEY)); } catch (e) {}
    if (!snap || !Array.isArray(snap.items)) return;

    const restoredItems = snap.items.map(it => {
        const orig = KANJI_240_DATA.find(x => x.id === it.qid);
        if (!orig) return null;
        return { ...it, orig };
    }).filter(Boolean);

    if (restoredItems.length === 0) {
        clearInProgressSession();
        return;
    }

    activeSession = {
        title: snap.title,
        sessionNum: snap.sessionNum,
        sourceConfig: { title: snap.title, sessionNum: snap.sessionNum, pool: restoredItems.map(i => i.orig), mode: snap.mode, isRevenge: snap.isRevenge, antiRote: snap.antiRote },
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
        container.innerHTML = `<div style="font-size: 13px; color: var(--hub-text-sub); padding: 12px; text-align: center; background: var(--hub-surface-2); border-radius: 10px;">Chưa có lịch sử bài nộp nào. Hoàn thành Ca 1 để lưu cột mốc đầu tiên nhé!</div>`;
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
                    🕒 ${log.timestamp} • M1: ${log.m1} • M2: ${log.m2} • Thời gian: ${log.duration}
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
    document.getElementById('quick-revenge-btn').addEventListener('click', () => {
        launchRevengeSession('drill', {});
    });
    document.getElementById('start-revenge-drill-btn').addEventListener('click', () => {
        launchRevengeSession('drill', { shuffleQ: true, shuffleOpt: true });
    });
    document.getElementById('start-revenge-hard-btn').addEventListener('click', () => {
        launchRevengeSession('drill', { shuffleQ: true, shuffleOpt: true, hideCtx: true, reverseMode: true });
    });

    document.getElementById('start-custom-drill-btn').addEventListener('click', () => launchCustom('drill'));
    document.getElementById('start-custom-exam-btn').addEventListener('click', () => launchCustom('exam'));

    document.getElementById('copy-kanji-report-btn').addEventListener('click', () => {
        const report = buildAntigravityKanjiReport();
        navigator.clipboard.writeText(report).then(() => {
            alert('📋 Đã copy Báo cáo 240 Câu Kanji & Danh sách Lỗ hổng! Hãy Paste (Ctrl+V) vào khung chat Antigravity để Sensei phân tích giúp bạn nhé.');
        });
    });

    // Resume / Discard in-progress exam
    const resumeBtn = document.getElementById('resume-exam-btn');
    const discardBtn = document.getElementById('discard-resume-btn');
    if (resumeBtn) resumeBtn.addEventListener('click', () => resumeSavedSession());
    if (discardBtn) discardBtn.addEventListener('click', () => {
        if (confirm('Xóa bài đang làm dở này?')) {
            clearInProgressSession();
            renderResumeBanner();
        }
    });

    // Export / Import JSON Backup
    const exportBtn = document.getElementById('export-backup-btn');
    const importBtn = document.getElementById('import-backup-btn');
    const importInput = document.getElementById('import-backup-input');

    if (exportBtn) {
        exportBtn.addEventListener('click', () => {
            const payload = { version: 1, exportedAt: new Date().toISOString(), data: {} };
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
                    loadState();
                    renderLobby();
                    alert(`✅ Đã khôi phục thành công ${restored} nhóm dữ liệu (Lịch sử thi, Kho Phục Thù, Hán tự, Từ vựng, Ngữ pháp)!`);
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
// 4. LAUNCHING EXAM / DRILL / REVENGE SESSIONS
// ==========================================
function launchSession(sessionNum, mode) {
    const pool = KANJI_240_DATA.filter(q => q.session === sessionNum);
    startQuizEngine({
        title: `Buổi ${sessionNum} (60 câu Kanji N3)`,
        sessionNum,
        pool,
        mode,
        isRevenge: false,
        antiRote: getAntiRoteSettings()
    });
}

function launchCustom(mode) {
    const sVal = document.getElementById('custom-session-select').value;
    const mVal = document.getElementById('custom-mondai-select').value;
    const cntVal = parseInt(document.getElementById('custom-count-select').value, 10);

    let pool = [...KANJI_240_DATA];
    if (sVal !== 'all') pool = pool.filter(q => q.session === parseInt(sVal, 10));
    if (mVal !== 'all') pool = pool.filter(q => q.mondai === parseInt(mVal, 10));

    const antiRote = getAntiRoteSettings();
    if (antiRote.shuffleQ) pool = fisherYatesShuffle(pool);
    pool = pool.slice(0, Math.min(cntVal, pool.length));

    const title = `${sVal === 'all' ? 'Tổng hợp 240 Kanji' : 'Buổi ' + sVal} • ${pool.length} câu`;
    startQuizEngine({
        title,
        sessionNum: sVal === 'all' ? null : parseInt(sVal, 10),
        pool,
        mode,
        isRevenge: false,
        antiRote,
        alreadyShuffled: true
    });
}

function launchRevengeSession(mode, forceAntiRote = {}, subsetIds = null) {
    const targetIds = subsetIds || Object.keys(mistakesMap);
    const pool = KANJI_240_DATA.filter(q => targetIds.includes(q.id));
    if (pool.length === 0) {
        alert('🎉 Hiện tại Kho Phục Thù đang trống! Bạn chưa có câu sai hay câu gắn cờ nào cần ôn lại.');
        return;
    }
    const antiRote = getAntiRoteSettings({ shuffleQ: true, shuffleOpt: true, ...forceAntiRote });
    startQuizEngine({
        title: `🔥 Phục Thù Lỗ Hổng (${pool.length} câu)`,
        sessionNum: null,
        pool,
        mode,
        isRevenge: true,
        antiRote
    });
}

function startQuizEngine(cfg) {
    let orderedPool = cfg.alreadyShuffled ? [...cfg.pool] : (cfg.antiRote.shuffleQ ? fisherYatesShuffle(cfg.pool) : [...cfg.pool]);
    const items = orderedPool.map(q => buildPreparedQuestion(q, cfg.antiRote));

    // Exam timer: 15 seconds per Kanji question (60 questions = 15:00 exact JLPT speed!)
    const totalSeconds = Math.max(120, items.length * 15);

    activeSession = {
        title: cfg.title,
        sessionNum: cfg.sessionNum,
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

    if (cfg.mode === 'exam') {
        startExamTimer();
    }
}

function setupActiveExamHeader() {
    document.getElementById('exam-title-lbl').textContent = activeSession.title;
    document.getElementById('exam-mode-badge').textContent = activeSession.isRevenge
        ? '🔥 Phục Thù [2/2]'
        : (activeSession.mode === 'exam' ? '⏱️ Thi Thử Bấm Giờ' : '⚡ Luyện Nhanh Chữa Ngay');

    // Show active Anti-Rote indicators
    const badgesEl = document.getElementById('active-antirote-badges');
    const tags = [];
    if (activeSession.antiRote.shuffleQ) tags.push('🔀 Xáo câu');
    if (activeSession.antiRote.shuffleOpt) tags.push('🎲 Xáo 1–4');
    if (activeSession.antiRote.hideCtx) tags.push('🙈 Ẩn câu');
    if (activeSession.antiRote.reverseMode) tags.push('🔄 Đảo chiều');
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
// 5. RENDERING QUESTION STAGE & INTERACTION
// ==========================================
function renderQuestionStage() {
    const idx = activeSession.currentIndex;
    const item = activeSession.items[idx];
    const orig = item.orig;
    const chosen = activeSession.answers[idx];
    const isAnswered = chosen !== null;
    const isDrill = activeSession.mode === 'drill';

    document.getElementById('exam-progress-txt').textContent = `${idx + 1}/${activeSession.items.length}`;
    document.getElementById('q-num-badge').textContent = `Câu ${idx + 1} / ${activeSession.items.length} (Gốc B${orig.session}-#${orig.num})`;
    document.getElementById('q-mondai-badge').textContent = item.effectiveMondai === 1
        ? `Mondai 1 • Đọc Kanji${item.isReversed ? ' (Đảo chiều)' : ''}`
        : `Mondai 2 • Chọn chữ Kanji${item.isReversed ? ' (Đảo chiều)' : ''}`;

    // Revenge Mastery Gate badge
    const revBadge = document.getElementById('q-revenge-badge');
    const mEntry = mistakesMap[orig.id];
    if (mEntry) {
        revBadge.style.display = 'inline-flex';
        revBadge.textContent = `🔥 Phục thù [${mEntry.streak || 0}/2]`;
    } else {
        revBadge.style.display = 'none';
    }

    // Flag button state
    const flagBtn = document.getElementById('q-flag-btn');
    const isFlagged = activeSession.flags[idx];
    flagBtn.classList.toggle('warn', isFlagged);
    flagBtn.innerHTML = isFlagged
        ? '<i class="fa-solid fa-flag"></i> Đã gắn cờ 🚩'
        : '<i class="fa-regular fa-flag"></i> Cờ 🚩';

    // Instruction text
    document.getElementById('q-instruction-text').textContent = item.effectiveMondai === 1
        ? '問題1：Chọn cách đọc Hiragana chính xác nhất cho phần gạch chân.'
        : '問題2：Chọn chữ Kanji chính xác nhất tương ứng với phần gạch chân.';

    // Sentence vs Only-Word Anti-Rote Display
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

    // Hint (if PDF had a vocabulary hint like 奨学金)
    const hintBox = document.getElementById('q-hint-display');
    if (orig.hint && !hideCtxNow) {
        hintBox.style.display = 'block';
        hintBox.textContent = orig.hint;
    } else {
        hintBox.style.display = 'none';
    }

    // 4 Option Buttons
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

    // Instant Explanation box (only in Drill mode after answering)
    const expContainer = document.getElementById('instant-exp-container');
    if (isDrill && isAnswered) {
        expContainer.style.display = 'block';
        expContainer.innerHTML = renderExplanationHTML(item, chosen);
    } else {
        expContainer.style.display = 'none';
        expContainer.innerHTML = '';
    }

    // Prev / Next button state
    document.getElementById('q-prev-btn').disabled = idx === 0;
    const nextBtn = document.getElementById('q-next-btn');
    if (idx === activeSession.items.length - 1) {
        nextBtn.innerHTML = '<i class="fa-solid fa-flag-checkered"></i> Hoàn tất & Xem tổng kết';
    } else {
        nextBtn.innerHTML = 'Câu tiếp theo <i class="fa-solid fa-chevron-right"></i>';
    }
}

function handleSelectOption(optIdx) {
    if (!activeSession || activeSession.finished) return;
    const idx = activeSession.currentIndex;
    const item = activeSession.items[idx];
    const isDrill = activeSession.mode === 'drill';

    if (isDrill && activeSession.answers[idx] !== null) return; // Already graded in drill mode

    activeSession.answers[idx] = optIdx;
    touchedSet.add(item.orig.id);

    if (isDrill) {
        const isCorrect = optIdx === item.correctIdx;
        // Update Mondai stats
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
                const res = recordRevengeSuccess(item.orig);
                item._revengeOutcome = res;
            }
        } else {
            recordMistakeOrFlag(item.orig, false);
            item._revengeOutcome = { cleared: false, newStreak: 0, reset: true };
        }
        saveState();
        updateDrillLiveScore();
    } else {
        saveState();
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
            const answered = activeSession.answers.filter(a => a !== null).length;
            if (answered > 0 && !confirm('Bạn có muốn thoát về Sảnh? (Tiến độ phiên đang làm chưa nộp sẽ không tính điểm)')) return;
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
        renderQuestionStage();
        renderNavigatorGrid();
    });

    document.getElementById('q-next-btn').addEventListener('click', () => {
        if (!activeSession) return;
        if (activeSession.currentIndex < activeSession.items.length - 1) {
            activeSession.currentIndex += 1;
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

    // Result screen filters & actions
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
        recordMistakeOrFlag(activeSession.items[idx].orig, true);
    }
    saveInProgressSession();
    renderQuestionStage();
    renderNavigatorGrid();
}

// ==========================================
// 6. GRADING & DETAILED RESULT REVIEW
// ==========================================
function finishExamSession(timedOut = false) {
    if (!activeSession || activeSession.finished) return;
    activeSession.finished = true;
    if (activeSession.timerInterval) {
        clearInterval(activeSession.timerInterval);
        activeSession.timerInterval = null;
    }

    const elapsedSec = Math.max(1, Math.round((Date.now() - activeSession.startedAt) / 1000));
    let totalCorrect = 0;
    let m1Ok = 0, m1Tot = 0, m2Ok = 0, m2Tot = 0;
    let wrongCnt = 0, flagCnt = 0;

    activeSession.items.forEach((item, i) => {
        const chosen = activeSession.answers[i];
        const isCorrect = chosen === item.correctIdx;
        const isFlagged = activeSession.flags[i];
        if (isFlagged) flagCnt++;

        if (item.effectiveMondai === 1) { m1Tot++; if (isCorrect) m1Ok++; }
        else { m2Tot++; if (isCorrect) m2Ok++; }

        if (isCorrect) totalCorrect++;
        else wrongCnt++;

        // For Exam mode (not already graded per question), record stats & mistakes now
        if (activeSession.mode === 'exam') {
            touchedSet.add(item.orig.id);
            if (item.effectiveMondai === 1) {
                historyData.m1Total += 1;
                if (isCorrect) historyData.m1Correct += 1;
            } else {
                historyData.m2Total += 1;
                if (isCorrect) historyData.m2Correct += 1;
            }

            if (!isCorrect) {
                recordMistakeOrFlag(item.orig, false);
            } else if (isFlagged) {
                recordMistakeOrFlag(item.orig, true);
            } else if (mistakesMap[item.orig.id]) {
                recordRevengeSuccess(item.orig);
            }
        } else if (isFlagged) {
            recordMistakeOrFlag(item.orig, true);
        }
    });

    // Save Session High Score if full 60-question session
    if (activeSession.sessionNum && activeSession.items.length === 60) {
        const prev = historyData.sessions[activeSession.sessionNum] || { best: 0, total: 60, attempts: 0 };
        historyData.sessions[activeSession.sessionNum] = {
            best: Math.max(prev.best, totalCorrect),
            total: 60,
            attempts: prev.attempts + 1,
            lastScore: totalCorrect,
            lastAt: getTodayStr()
        };
    }
    // Record into persistent Attempt History Log
    const nowTime = new Date().toLocaleString('vi-VN', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
    const total = activeSession.items.length;
    const pct = Math.round((totalCorrect / total) * 100);
    const minStr = String(Math.floor(elapsedSec / 60)).padStart(2, '0');
    const secStr = String(elapsedSec % 60).padStart(2, '0');

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
        duration: `${minStr}:${secStr}`
    });
    historyData.attemptsLog = historyData.attemptsLog.slice(0, 60);

    clearInProgressSession();
    if (activeSession.mode === 'exam') addHubXP(totalCorrect * 3);
    saveState();

    // Render Result Dashboard

    document.getElementById('res-mode-lbl').textContent = timedOut ? '⏰ Hết giờ — Tự động nộp bài' : `Kết quả • ${activeSession.title}`;
    document.getElementById('res-headline').textContent = pct >= 90
        ? '🏆 Quá xuất sắc! Kanji N3 vững như bàn thạch!'
        : (pct >= 75 ? '🔥 Rất tốt! Chỉ cần vá nốt vài lỗ hổng bên dưới.' : '⚡ Đã bắt sống được nhiều lỗ hổng quan trọng — Phục thù ngay!');
    document.getElementById('res-subtext').textContent = `Sai ${wrongCnt} câu • Gắn cờ đoán bừa ${flagCnt} câu (Tất cả đã được đưa vào Kho Phục Thù [0/2] và đồng bộ sang Chiến Dịch N3).`;

    document.getElementById('res-score-big').textContent = `${totalCorrect} / ${total}`;
    document.getElementById('res-pct-lbl').textContent = `${pct}% chính xác`;
    document.getElementById('res-m1-m2').textContent = `M1: ${m1Ok}/${m1Tot} • M2: ${m2Ok}/${m2Tot}`;
    document.getElementById('res-time-lbl').textContent = `Thời gian làm: ${minStr}:${secStr}`;

    const revNowBtn = document.getElementById('res-revenge-now-btn');
    revNowBtn.style.display = (wrongCnt + flagCnt) > 0 ? 'inline-flex' : 'none';

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

        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 10px;">
                <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                    <span class="q-tag">Câu ${i + 1} (B${q.session}-#${q.num})</span>
                    <span style="font-weight: 700; color: ${isCorrect ? 'var(--hub-ok-text)' : 'var(--hub-danger-text)'};">
                        ${isCorrect ? '✅ Đúng' : '❌ Sai'}
                    </span>
                    ${isFlagged ? '<span class="streak-pill">🚩 Đã gắn cờ</span>' : ''}
                </div>
                <button class="btn-pill" style="padding: 5px 10px; font-size: 12px;" onclick="speakJapanese('${safeTts}')">
                    <i class="fa-solid fa-volume-high"></i> Nghe câu
                </button>
            </div>
            <div style="font-size: 18px; font-weight: 700; color: var(--hub-text); margin-bottom: 10px;">
                ${item.displayHtml}
            </div>
            <div style="font-size: 13.5px; color: var(--hub-text-body); display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 10px;">
                <span>Bạn chọn: <strong style="color: ${isCorrect ? 'var(--hub-ok-text)' : 'var(--hub-danger-text)'};">${chosenText}</strong></span>
                <span>Đáp án chuẩn: <strong style="color: var(--hub-ok-text);">${correctText}</strong></span>
            </div>
            <div class="exp-word-row" style="margin-bottom: 8px;">
                <strong style="font-size: 17px; color: var(--hub-text);">${q.kanji_form}</strong>
                <span style="color: var(--primary); font-weight: 700;">（${q.reading}）</span>
                <span class="hanviet-pill">${q.han_viet}</span>
                <span style="font-size: 13.5px; color: var(--hub-text-body);">→ ${q.meaning_vi}</span>
            </div>
            <div style="font-size: 13.5px; color: var(--hub-text-body); margin-bottom: 6px;">
                <strong>📖 Dịch:</strong> ${q.sentence_vi}
            </div>
            <div style="font-size: 13px; color: var(--hub-text-sub); line-height: 1.5;">
                <strong style="color: var(--hub-warn-text);">⚡ Bẫy nhiễu:</strong> ${q.trap_note}
            </div>
        `;
        container.appendChild(card);
    });

    if (countShown === 0) {
        container.innerHTML = `<div style="text-align: center; padding: 28px; color: var(--hub-ok-text); font-weight: 700;">🎉 Không có câu nào sai hay gắn cờ trong lượt này!</div>`;
    }
}

// ==========================================
// 7. MISTAKE BANK VIEW & KEYBOARD / TTS
// ==========================================
function renderMistakesView() {
    const container = document.getElementById('mistakes-bank-list');
    const ids = Object.keys(mistakesMap);
    document.getElementById('top-mistake-count').textContent = ids.length;

    if (ids.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 36px; background: var(--hub-surface-2); border-radius: 14px; color: var(--hub-text-sub);">
                <i class="fa-solid fa-trophy" style="font-size: 36px; color: var(--hub-ok-text); margin-bottom: 10px;"></i>
                <p style="font-size: 15px; font-weight: 600; color: var(--hub-text);">Kho Phục Thù đang sạch bóng!</p>
                <p style="font-size: 13.5px; margin-top: 4px;">Hãy vào Sảnh 4 Ca để làm Thi Thử 60 câu — câu nào sai hoặc gắn cờ 🚩 sẽ tự động hội tụ tại đây.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = '';
    ids.forEach(qid => {
        const q = KANJI_240_DATA.find(x => x.id === qid);
        if (!q) return;
        const m = mistakesMap[qid];
        const safeTts = q.sentence_tts.replace(/'/g, "\\'");

        const div = document.createElement('div');
        div.className = 'mistake-item';
        div.innerHTML = `
            <div style="flex: 1; min-width: 240px;">
                <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 5px;">
                    <span class="q-tag">Buổi ${q.session} • M${q.mondai}</span>
                    <span class="streak-pill">Tiến độ: [${m.streak || 0}/2]</span>
                    ${m.flagged ? '<span class="streak-pill">🚩 Cờ đoán bừa</span>' : ''}
                    <strong style="font-size: 17px; color: var(--hub-text);">${q.kanji_form}（${q.reading}）</strong>
                    <span class="hanviet-pill">${q.han_viet}</span>
                </div>
                <div style="font-size: 13.5px; color: var(--hub-text-body); margin-bottom: 4px;">
                    ${q.meaning_vi} — <em>${q.sentence_vi}</em>
                </div>
                <div style="font-size: 12.5px; color: var(--hub-text-sub);">⚡ ${q.trap_note}</div>
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

function buildAntigravityKanjiReport() {
    const ids = Object.keys(mistakesMap);
    const m1Acc = historyData.m1Total > 0 ? `${Math.round((historyData.m1Correct / historyData.m1Total) * 100)}%` : '--';
    const m2Acc = historyData.m2Total > 0 ? `${Math.round((historyData.m2Correct / historyData.m2Total) * 100)}%` : '--';
    const topItems = ids.slice(0, 15).map((id, idx) => {
        const q = KANJI_240_DATA.find(x => x.id === id);
        if (!q) return '';
        const m = mistakesMap[id];
        return `${idx + 1}. [B${q.session}-M${q.mondai} | ${m.streak}/2] ${q.kanji_form}（${q.reading}）[${q.han_viet}] — ${q.meaning_vi} | Bẫy: ${q.trap_note}`;
    }).filter(Boolean).join('\n');

    return `📊 BÁO CÁO LUYỆN ĐỀ 240 KANJI N3 (${getTodayStr()})
- Đã quét: ${touchedSet.size}/240 câu
- Tỷ lệ đúng Mondai 1 (Đọc): ${m1Acc} | Mondai 2 (Chọn chữ): ${m2Acc}
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
