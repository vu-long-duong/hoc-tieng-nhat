// ==========================================
// APPLICATION STATE
// ==========================================
let progress = {}; // Stores { kanji_char: 'unlearned' | 'learning' | 'mastered' }
let currentKanjis = [...KANJI_DATA]; // Actively filtered & sorted kanjis list
let activeIndex = 0; // Index of the active Kanji in currentKanjis (for Flashcards & Writing)
let isCardFlipped = false;
let currentTheme = 'dark';
let activeTab = 'flashcards';

// Quiz State
let quizCurrentKanji = null;
let quizScore = { correct: 0, total: 0 };
let quizAnswers = [];
let isQuizAnswered = false;

// Drawing Canvas State
const canvas = document.getElementById('writing-canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let drawingHistory = []; // Stores states for undo

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadProgress();
    setupEventListeners();
    updateSidebarCounts();
    applyFilters();
    initCanvas();
});

// Theme Initialization
function initTheme() {
    const savedTheme = localStorage.getItem('kanji_theme');
    if (savedTheme) {
        currentTheme = savedTheme;
    } else {
        // Detect system preference
        currentTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (currentTheme === 'light') {
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

// Progress Tracking (localStorage)
function loadProgress() {
    const savedProgress = localStorage.getItem('kanji_progress');
    if (savedProgress) {
        try {
            progress = JSON.parse(savedProgress);
        } catch (e) {
            progress = {};
        }
    }
    
    // Ensure all kanji have an entry
    KANJI_DATA.forEach(item => {
        if (!progress[item.kanji]) {
            progress[item.kanji] = 'unlearned';
        }
    });
    
    saveProgress();
    updateProgressBar();
}

function saveProgress() {
    localStorage.setItem('kanji_progress', JSON.stringify(progress));
}

function updateProgressBar() {
    const total = KANJI_DATA.length;
    if (total === 0) return;
    
    const mastered = KANJI_DATA.filter(item => progress[item.kanji] === 'mastered').length;
    const percentage = Math.round((mastered / total) * 100);
    
    document.getElementById('progress-percentage').textContent = `${percentage}%`;
    document.getElementById('progress-bar-fill').style.width = `${percentage}%`;
}

function updateSidebarCounts() {
    const total = KANJI_DATA.length;
    const unlearned = KANJI_DATA.filter(item => progress[item.kanji] === 'unlearned').length;
    const learning = KANJI_DATA.filter(item => progress[item.kanji] === 'learning').length;
    const mastered = KANJI_DATA.filter(item => progress[item.kanji] === 'mastered').length;
    
    document.getElementById('count-all').textContent = total;
    document.getElementById('count-unlearned').textContent = unlearned;
    document.getElementById('count-learning').textContent = learning;
    document.getElementById('count-mastered').textContent = mastered;
}

// ==========================================
// EVENT LISTENERS SETUP
// ==========================================
function setupEventListeners() {
    // Tab switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tabId = btn.getAttribute('data-tab');
            switchTab(tabId);
        });
    });
    
    // Sidebar Filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyFilters();
        });
    });
    
    // Sidebar Search
    document.getElementById('search-input').addEventListener('input', () => {
        applyFilters();
    });
    
    // Sorting Options
    const sortOrderBtn = document.getElementById('sort-order-btn');
    const sortShuffleBtn = document.getElementById('sort-shuffle-btn');
    
    sortOrderBtn.addEventListener('click', () => {
        sortOrderBtn.classList.add('active');
        sortShuffleBtn.classList.remove('active');
        applyFilters();
    });
    
    sortShuffleBtn.addEventListener('click', () => {
        sortShuffleBtn.classList.add('active');
        sortOrderBtn.classList.remove('active');
        applyFilters(true); // Shuffle true
    });
    
    // Reset Progress
    document.getElementById('reset-progress-btn').addEventListener('click', () => {
        if (confirm("Bạn có chắc chắn muốn thiết lập lại toàn bộ tiến độ học tập?")) {
            KANJI_DATA.forEach(item => {
                progress[item.kanji] = 'unlearned';
            });
            saveProgress();
            updateProgressBar();
            updateSidebarCounts();
            applyFilters();
            alert("Đã xóa tiến độ học tập cũ.");
        }
    });
    
    // Theme Toggle
    document.getElementById('theme-toggle-btn').addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('kanji_theme', currentTheme);
        updateThemeIcon();
    });
    
    // --- Flashcard Controls ---
    const flashcard = document.getElementById('main-flashcard');
    
    // Flip card click
    flashcard.addEventListener('click', (e) => {
        // Prevent flipping if clicked on audio button or compounds
        if (e.target.closest('#tts-btn') || e.target.closest('.compounds-section') || e.target.closest('.mnemonic-section')) {
            return;
        }
        flipCard();
    });
    
    // Button actions
    document.getElementById('flip-card-btn').addEventListener('click', flipCard);
    
    document.getElementById('mark-learning-btn').addEventListener('click', () => {
        updateCardStatus('learning');
        nextCard();
    });
    
    document.getElementById('mark-mastered-btn').addEventListener('click', () => {
        updateCardStatus('mastered');
        nextCard();
    });
    
    document.getElementById('prev-card-btn').addEventListener('click', prevCard);
    document.getElementById('next-card-btn').addEventListener('click', nextCard);
    
    // Text to Speech
    document.getElementById('tts-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        const activeKanji = currentKanjis[activeIndex];
        if (activeKanji) {
            speakJapanese(activeKanji.kanji);
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (activeTab === 'flashcards' && currentKanjis.length > 0) {
            if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                e.preventDefault();
                flipCard();
            } else if (e.key === 'ArrowLeft') {
                prevCard();
            } else if (e.key === 'ArrowRight') {
                nextCard();
            } else if (e.key === '1') {
                updateCardStatus('learning');
                nextCard();
            } else if (e.key === '2') {
                updateCardStatus('mastered');
                nextCard();
            }
        }
    });
    
    // --- Quiz Controls ---
    document.getElementById('quiz-mode-select').addEventListener('change', () => {
        startQuizQuestion();
    });
    
    document.getElementById('quiz-pool-select').addEventListener('change', () => {
        startQuizQuestion();
    });
    
    document.getElementById('quiz-next-btn').addEventListener('click', () => {
        startQuizQuestion();
    });
    
    // --- Canvas Controls ---
    document.getElementById('write-prev-btn').addEventListener('click', () => {
        if (currentKanjis.length === 0) return;
        activeIndex = (activeIndex - 1 + currentKanjis.length) % currentKanjis.length;
        updateWritingCard();
    });
    
    document.getElementById('write-next-btn').addEventListener('click', () => {
        if (currentKanjis.length === 0) return;
        activeIndex = (activeIndex + 1) % currentKanjis.length;
        updateWritingCard();
    });
    
    // Clear canvas
    document.getElementById('canvas-clear-btn').addEventListener('click', clearCanvas);
    
    // Undo canvas
    document.getElementById('canvas-undo-btn').addEventListener('click', undoCanvas);
    
    // Toggle guide watermark
    const guideBtn = document.getElementById('canvas-guide-btn');
    guideBtn.addEventListener('click', () => {
        const watermark = document.getElementById('canvas-watermark');
        watermark.classList.toggle('hidden');
        if (watermark.classList.contains('hidden')) {
            guideBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>Ẩn mẫu';
        } else {
            guideBtn.innerHTML = '<i class="fa-solid fa-eye"></i>Hiện mẫu';
        }
    });
}

// ==========================================
// TAB NAVIGATION LOGIC
// ==========================================
function switchTab(tabId) {
    activeTab = tabId;
    
    // Update header tabs UI
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        if (btn.getAttribute('data-tab') === tabId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Show active panel
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        if (content.getAttribute('id') === `tab-${tabId}`) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });
    
    // Tab-specific initializations
    if (tabId === 'flashcards') {
        resetCardState();
        updateFlashcardView();
    } else if (tabId === 'quiz') {
        startQuizQuestion();
    } else if (tabId === 'writing') {
        updateWritingCard();
        resizeCanvas();
    } else if (tabId === 'library') {
        renderLibrary();
    }
}

// ==========================================
// FILTER & SORT LOGIC
// ==========================================
function applyFilters(shuffle = false) {
    const searchVal = document.getElementById('search-input').value.trim().toLowerCase();
    const activeFilterBtn = document.querySelector('.filter-btn.active');
    const filterStatus = activeFilterBtn ? activeFilterBtn.getAttribute('data-status') : 'all';
    
    // Filter
    currentKanjis = KANJI_DATA.filter(item => {
        // Status filter
        if (filterStatus !== 'all') {
            if (progress[item.kanji] !== filterStatus) {
                return false;
            }
        }
        
        // Search filter
        if (searchVal) {
            const kanjiMatch = item.kanji.toLowerCase().includes(searchVal);
            const hanvietMatch = item.han_viet.toLowerCase().includes(searchVal);
            const nghiaMatch = item.nghia.toLowerCase().includes(searchVal);
            return kanjiMatch || hanvietMatch || nghiaMatch;
        }
        
        return true;
    });
    
    // Sort
    const isShuffleActive = shuffle || document.getElementById('sort-shuffle-btn').classList.contains('active');
    if (isShuffleActive) {
        // Shuffle array
        for (let i = currentKanjis.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [currentKanjis[i], currentKanjis[j]] = [currentKanjis[j], currentKanjis[i]];
        }
    }
    
    // Update indices and views
    activeIndex = 0;
    document.getElementById('total-filtered').textContent = currentKanjis.length;
    
    if (activeTab === 'flashcards') {
        resetCardState();
        updateFlashcardView();
    } else if (activeTab === 'writing') {
        updateWritingCard();
    } else if (activeTab === 'library') {
        renderLibrary();
    }
}

// ==========================================
// TAB 1: FLASHCARDS BUSINESS LOGIC
// ==========================================
function updateFlashcardView() {
    const indexSpan = document.getElementById('current-index');
    
    if (currentKanjis.length === 0) {
        indexSpan.textContent = '0';
        document.getElementById('front-kanji').textContent = '無';
        document.getElementById('back-han-viet').textContent = 'Không có dữ liệu';
        document.getElementById('back-nghia').textContent = 'Không tìm thấy chữ Hán nào phù hợp với bộ lọc.';
        document.getElementById('back-on').textContent = '-';
        document.getElementById('back-kun').textContent = '-';
        document.getElementById('back-chi-tiet').textContent = 'Vui lòng thay đổi từ khóa tìm kiếm hoặc chỉnh lại bộ lọc.';
        document.getElementById('back-tu-ghep').innerHTML = '';
        return;
    }
    
    indexSpan.textContent = activeIndex + 1;
    const item = currentKanjis[activeIndex];
    
    // Update Front Card
    document.getElementById('front-kanji').textContent = item.kanji;
    
    const levelBadge = document.getElementById('front-level-badge');
    const pageBadge = document.getElementById('front-page-badge');
    if (item.id <= 300) {
        levelBadge.textContent = 'Sơ cấp';
        levelBadge.style.background = 'rgba(74, 222, 128, 0.2)';
        levelBadge.style.color = '#4ade80';
        pageBadge.textContent = 'Trang 11';
    } else {
        levelBadge.textContent = `Bài ${item.lesson}`;
        levelBadge.style.background = 'rgba(96, 165, 250, 0.2)';
        levelBadge.style.color = '#60a5fa';
        pageBadge.textContent = `Trang ${item.page}`;
    }
    
    // Set card border/shadow matching status
    const cardElement = document.getElementById('main-flashcard');
    cardElement.classList.remove('status-learning', 'status-mastered');
    if (progress[item.kanji] === 'learning') {
        cardElement.classList.add('status-learning');
    } else if (progress[item.kanji] === 'mastered') {
        cardElement.classList.add('status-mastered');
    }
    
    // Update Back Card
    document.getElementById('back-han-viet').textContent = item.han_viet;
    document.getElementById('back-nghia').textContent = item.nghia;
    document.getElementById('back-on').textContent = item.on || '-';
    document.getElementById('back-kun').textContent = item.kun || '-';
    
    const backPageLesson = document.getElementById('back-page-lesson');
    if (item.id <= 300) {
        backPageLesson.textContent = `Hán tự sơ cấp (ID: ${item.id}) | Trang 11`;
    } else {
        backPageLesson.textContent = `ID: ${item.id} | Bài ${item.lesson} | Trang ${item.page}`;
    }
    
    // Suggestion / Chi tiết
    const chiTietBox = document.getElementById('back-chi-tiet-container');
    if (item.chi_tiet) {
        chiTietBox.style.display = 'block';
        document.getElementById('back-chi-tiet').innerHTML = item.chi_tiet.replace(/\n/g, '<br>');
    } else {
        chiTietBox.style.display = 'none';
    }
    
    // Example sentences
    const viDuList = document.getElementById('back-vi-du');
    const viDuContainer = document.getElementById('back-vi-du-container');
    viDuList.innerHTML = '';
    
    if (item.vi_du && item.vi_du.length > 0) {
        viDuContainer.style.display = 'block';
        item.vi_du.forEach(vd => {
            const vdEl = document.createElement('div');
            vdEl.className = 'example-item';
            vdEl.style.padding = '8px 12px';
            vdEl.style.background = 'rgba(255, 255, 255, 0.05)';
            vdEl.style.borderRadius = '6px';
            vdEl.style.borderLeft = '3px solid var(--primary)';
            vdEl.style.display = 'flex';
            vdEl.style.flexDirection = 'column';
            vdEl.style.gap = '4px';
            vdEl.style.cursor = 'pointer';
            vdEl.style.transition = 'background 0.2s';
            vdEl.innerHTML = `
                <span class="example-jp" style="font-weight:600; font-size:14px; color:var(--text-color);">${vd.jp}</span>
                <span class="example-vi" style="font-size:12px; color:var(--text-muted);">${vd.vi}</span>
            `;
            vdEl.addEventListener('mouseenter', () => {
                vdEl.style.background = 'rgba(255, 255, 255, 0.1)';
            });
            vdEl.addEventListener('mouseleave', () => {
                vdEl.style.background = 'rgba(255, 255, 255, 0.05)';
            });
            vdEl.addEventListener('click', (e) => {
                e.stopPropagation();
                speakJapanese(vd.jp);
            });
            viDuList.appendChild(vdEl);
        });
    } else {
        viDuContainer.style.display = 'none';
    }
    
    // Compounds
    const compoundGrid = document.getElementById('back-tu-ghep');
    compoundGrid.innerHTML = '';
    
    if (item.tu_ghep && item.tu_ghep.length > 0) {
        item.tu_ghep.forEach(comp => {
            const compEl = document.createElement('div');
            compEl.className = 'compound-item';
            compEl.innerHTML = `
                <span class="compound-jp">${comp.han}</span>
                <span class="compound-vn">${comp.viet}</span>
            `;
            
            // Speak compound on click
            compEl.addEventListener('click', (e) => {
                e.stopPropagation();
                speakJapanese(comp.han);
            });
            compoundGrid.appendChild(compEl);
        });
    } else {
        compoundGrid.innerHTML = '<div style="font-size:12px; color:var(--text-muted);">Không có từ ghép ví dụ.</div>';
    }
}

function flipCard() {
    if (currentKanjis.length === 0) return;
    isCardFlipped = !isCardFlipped;
    const card = document.getElementById('main-flashcard');
    if (isCardFlipped) {
        card.classList.add('flipped');
    } else {
        card.classList.remove('flipped');
    }
}

function resetCardState() {
    isCardFlipped = false;
    document.getElementById('main-flashcard').classList.remove('flipped');
}

function prevCard() {
    if (currentKanjis.length === 0) return;
    activeIndex = (activeIndex - 1 + currentKanjis.length) % currentKanjis.length;
    resetCardState();
    // Wait for flip transition to end before swapping content for visual comfort
    setTimeout(updateFlashcardView, 150);
}

function nextCard() {
    if (currentKanjis.length === 0) return;
    activeIndex = (activeIndex + 1) % currentKanjis.length;
    resetCardState();
    setTimeout(updateFlashcardView, 150);
}

function updateCardStatus(newStatus) {
    if (currentKanjis.length === 0) return;
    const item = currentKanjis[activeIndex];
    
    // Update state
    progress[item.kanji] = newStatus;
    saveProgress();
    updateProgressBar();
    updateSidebarCounts();
}

// ==========================================
// TAB 2: QUIZ BUSINESS LOGIC
// ==========================================
function startQuizQuestion() {
    if (KANJI_DATA.length === 0) return;
    
    isQuizAnswered = false;
    document.getElementById('quiz-feedback').style.display = 'none';
    document.getElementById('quiz-next-btn').style.display = 'none';
    
    const mode = document.getElementById('quiz-mode-select').value;
    const poolMode = document.getElementById('quiz-pool-select').value;
    
    // Determine the question pool
    let pool = [...KANJI_DATA];
    if (poolMode === 'unlearned') {
        pool = KANJI_DATA.filter(item => progress[item.kanji] === 'unlearned');
    } else if (poolMode === 'learning') {
        pool = KANJI_DATA.filter(item => progress[item.kanji] === 'learning');
    } else if (poolMode === 'mastered') {
        pool = KANJI_DATA.filter(item => progress[item.kanji] === 'mastered');
    } else if (poolMode === 'filtered') {
        pool = [...currentKanjis];
    }
    
    // Check if the pool is empty
    if (pool.length === 0) {
        document.getElementById('quiz-question-display').textContent = '無';
        document.getElementById('quiz-options-container').innerHTML = 
            '<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px 0; font-size:14px; font-weight:600; line-height: 1.6;">' +
            'Bộ câu hỏi được chọn hiện đang trống.<br>Vui lòng học thêm từ mới hoặc chọn bộ câu hỏi khác!' +
            '</div>';
        return;
    }
    
    // 1. Pick a random Kanji from the selected pool
    const randIndex = Math.floor(Math.random() * pool.length);
    quizCurrentKanji = pool[randIndex];
    
    // 2. Set question prompt based on mode
    const questionText = document.getElementById('quiz-question-display');
    if (mode === 'hanviet-to-kanji') {
        questionText.textContent = quizCurrentKanji.han_viet.split(',')[0].toUpperCase();
    } else {
        questionText.textContent = quizCurrentKanji.kanji;
    }
    
    // 3. Generate answers (1 correct + 3 wrong)
    const answersSet = new Set();
    let correctAnswer = '';
    
    if (mode === 'kanji-to-hanviet') {
        correctAnswer = quizCurrentKanji.han_viet;
    } else if (mode === 'hanviet-to-kanji') {
        correctAnswer = quizCurrentKanji.kanji;
    } else if (mode === 'kanji-to-meaning') {
        correctAnswer = quizCurrentKanji.nghia;
    }
    
    answersSet.add(correctAnswer);
    
    // Keep picking wrong options until we have exactly 4 unique answers
    while (answersSet.size < Math.min(4, KANJI_DATA.length)) {
        const dummyIndex = Math.floor(Math.random() * KANJI_DATA.length);
        const dummyItem = KANJI_DATA[dummyIndex];
        let dummyAnswer = '';
        
        if (mode === 'kanji-to-hanviet') {
            dummyAnswer = dummyItem.han_viet;
        } else if (mode === 'hanviet-to-kanji') {
            dummyAnswer = dummyItem.kanji;
        } else if (mode === 'kanji-to-meaning') {
            dummyAnswer = dummyItem.nghia;
        }
        
        if (dummyAnswer && dummyAnswer.trim() !== '') {
            answersSet.add(dummyAnswer);
        }
    }
    
    // Convert Set to array and shuffle
    quizAnswers = Array.from(answersSet);
    for (let i = quizAnswers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quizAnswers[i], quizAnswers[j]] = [quizAnswers[j], quizAnswers[i]];
    }
    
    // 4. Render buttons
    const optionsContainer = document.getElementById('quiz-options-container');
    optionsContainer.innerHTML = '';
    
    quizAnswers.forEach(answer => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.textContent = answer;
        
        btn.addEventListener('click', () => {
            if (!isQuizAnswered) {
                checkQuizAnswer(btn, answer, correctAnswer);
            }
        });
        
        optionsContainer.appendChild(btn);
    });
}

function checkQuizAnswer(selectedBtn, chosenAnswer, correctAnswer) {
    isQuizAnswered = true;
    quizScore.total += 1;
    
    const feedbackBox = document.getElementById('quiz-feedback');
    const feedbackText = document.getElementById('quiz-feedback-text');
    feedbackBox.style.display = 'flex';
    
    const allOptionBtns = document.querySelectorAll('.quiz-option-btn');
    
    if (chosenAnswer === correctAnswer) {
        selectedBtn.classList.add('correct');
        feedbackText.textContent = "Chính xác! Cực kỳ xuất sắc! 🎉";
        feedbackText.className = "feedback-msg correct";
        quizScore.correct += 1;
        
        // Auto mark as learning or keep progress
        if (progress[quizCurrentKanji.kanji] === 'unlearned') {
            progress[quizCurrentKanji.kanji] = 'learning';
            saveProgress();
            updateSidebarCounts();
            updateProgressBar();
        }
    } else {
        selectedBtn.classList.add('wrong');
        feedbackText.textContent = `Sai mất rồi! Đáp án đúng là: ${correctAnswer}`;
        feedbackText.className = "feedback-msg wrong";
        
        // Find correct button and color it green
        allOptionBtns.forEach(btn => {
            if (btn.textContent === correctAnswer) {
                btn.classList.add('correct');
            }
        });
    }
    
    // Speak word in Japanese to reinforce
    speakJapanese(quizCurrentKanji.kanji);
    
    // Disable all buttons and show next btn
    allOptionBtns.forEach(btn => {
        btn.classList.add('disabled');
    });
    
    document.getElementById('quiz-correct-count').textContent = quizScore.correct;
    document.getElementById('quiz-total-count').textContent = quizScore.total;
    document.getElementById('quiz-next-btn').style.display = 'block';
}

// ==========================================
// TAB 3: WRITING CANVAS LOGIC
// ==========================================
function initCanvas() {
    // Mouse listeners
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseleave', stopDrawing);
    
    // Touch listeners for mobile
    canvas.addEventListener('touchstart', startDrawingTouch, { passive: false });
    canvas.addEventListener('touchmove', drawTouch, { passive: false });
    canvas.addEventListener('touchend', stopDrawing);
    
    // Prevent scrolling when drawing on touchscreen devices
    document.body.addEventListener("touchstart", function (e) {
        if (e.target == canvas) {
            e.preventDefault();
        }
    }, { passive: false });
    document.body.addEventListener("touchend", function (e) {
        if (e.target == canvas) {
            e.preventDefault();
        }
    }, { passive: false });
    document.body.addEventListener("touchmove", function (e) {
        if (e.target == canvas) {
            e.preventDefault();
        }
    }, { passive: false });
}

function resizeCanvas() {
    // Since width:100% on container, we adapt logical pixels
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    // Recenter drawing settings
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 8;
    
    clearCanvas();
}

function updateWritingCard() {
    if (currentKanjis.length === 0) {
        document.getElementById('write-ref-kanji').textContent = '無';
        document.getElementById('write-ref-hanviet').textContent = '';
        document.getElementById('write-ref-nghia').textContent = '';
        document.getElementById('canvas-watermark').textContent = '';
        return;
    }
    
    const item = currentKanjis[activeIndex];
    
    document.getElementById('write-ref-kanji').textContent = item.kanji;
    
    const infoText = item.id <= 300 ? 'Sơ cấp | Trang 11' : `Bài ${item.lesson} | Trang ${item.page}`;
    document.getElementById('write-ref-hanviet').innerHTML = `${item.han_viet} <span style="font-size:12px; color:var(--text-muted); font-weight:500; margin-left:8px; display:inline-block;">(${infoText})</span>`;
    
    document.getElementById('write-ref-nghia').textContent = item.nghia;
    document.getElementById('canvas-watermark').textContent = item.kanji;
    
    clearCanvas();
}

function startDrawing(e) {
    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    lastX = e.clientX - rect.left;
    lastY = e.clientY - rect.top;
    
    // Push current canvas state to history before drawing
    saveHistoryState();
}

function startDrawingTouch(e) {
    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    lastX = touch.clientX - rect.left;
    lastY = touch.clientY - rect.top;
    
    saveHistoryState();
    e.preventDefault();
}

function draw(e) {
    if (!isDrawing) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    drawStroke(lastX, lastY, x, y);
    
    lastX = x;
    lastY = y;
}

function drawTouch(e) {
    if (!isDrawing) return;
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    
    drawStroke(lastX, lastY, x, y);
    
    lastX = x;
    lastY = y;
    e.preventDefault();
}

function drawStroke(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    
    // Ink color matching theme
    if (currentTheme === 'dark') {
        ctx.strokeStyle = '#a78bfa'; // primary light
    } else {
        ctx.strokeStyle = '#4f46e5'; // primary
    }
    
    ctx.stroke();
}

function stopDrawing() {
    isDrawing = false;
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawingHistory = []; // Reset history
}

function saveHistoryState() {
    // Keep max 20 states to prevent memory leaks
    if (drawingHistory.length >= 20) {
        drawingHistory.shift();
    }
    drawingHistory.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
}

function undoCanvas() {
    if (drawingHistory.length > 0) {
        const lastState = drawingHistory.pop();
        ctx.putImageData(lastState, 0, 0);
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

// ==========================================
// TAB 4: LIBRARY BUSINESS LOGIC
// ==========================================
function renderLibrary() {
    const grid = document.getElementById('library-grid-container');
    grid.innerHTML = '';
    
    document.getElementById('library-count').textContent = currentKanjis.length;
    
    if (currentKanjis.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px 0;">Không tìm thấy chữ Hán nào phù hợp.</div>';
        return;
    }
    
    currentKanjis.forEach((item, index) => {
        const status = progress[item.kanji] || 'unlearned';
        const card = document.createElement('div');
        card.className = `lib-card status-${status}`;
        card.style.position = 'relative';
        card.innerHTML = `
            <span style="position: absolute; top: 4px; right: 6px; font-size: 9px; color: var(--text-muted); font-weight: 600;">#${item.id}</span>
            <div class="lib-kanji">${item.kanji}</div>
            <div class="lib-hanviet">${item.han_viet.split(',')[0]}</div>
        `;
        
        // Clicking on a library card navigates directly to that card in Flashcard view!
        card.addEventListener('click', () => {
            // Find global index in KANJI_DATA (or just index in filtered list)
            activeIndex = index;
            switchTab('flashcards');
        });
        
        grid.appendChild(card);
    });
}

// ==========================================
// WEB SPEECH SYNTHESIS (TTS)
// ==========================================
function speakJapanese(text) {
    if (!('speechSynthesis' in window)) {
        console.warn("Speech Synthesis is not supported in this browser.");
        return;
    }
    
    // Stop any active speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.85; // Slightly slower for clear learning
    
    // Find Japanese voice
    const voices = window.speechSynthesis.getVoices();
    const jaVoice = voices.find(voice => voice.lang.startsWith('ja'));
    if (jaVoice) {
        utterance.voice = jaVoice;
    }
    
    window.speechSynthesis.speak(utterance);
}

// Load voices when they are populated
if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
        // Just triggers voices loading in background
        window.speechSynthesis.getVoices();
    };
}
