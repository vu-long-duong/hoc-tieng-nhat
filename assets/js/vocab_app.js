// ==========================================
// APPLICATION STATE
// ==========================================
let progress = {}; // Stores { vocab_word: 'unlearned' | 'learning' | 'mastered' }
let currentKanjis = [...vocabData]; // Actively filtered & sorted kanjis list
let activeIndex = 0; // Index of the active Kanji in currentKanjis (for Flashcards & Writing)
let isCardFlipped = false;
let currentTheme = 'dark';
let activeTab = 'flashcards';

// Quiz State
let quizCurrentKanji = null;
let quizScore = { correct: 0, total: 0 };
let quizAnswers = [];
let isQuizAnswered = false;



// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadProgress();
    setupEventListeners();
    setupMobileSidebar();
    updateSidebarCounts();
    applyFilters();
});

// Theme Initialization
function initTheme() {
    const savedTheme = localStorage.getItem('vocab_theme');
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
    const themeBtns = document.querySelectorAll('.theme-toggle');
    themeBtns.forEach(btn => {
        btn.innerHTML = currentTheme === 'light' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });
}

// Progress Tracking (localStorage)
function loadProgress() {
    const savedProgress = localStorage.getItem('vocab_progress');
    if (savedProgress) {
        try {
            progress = JSON.parse(savedProgress);
        } catch (e) {
            progress = {};
        }
    }
    
    // Ensure all kanji have an entry
    vocabData.forEach(item => {
        if (!progress[item.id]) {
            progress[item.id] = 'unlearned';
        }
    });
    
    saveProgress();
    updateProgressBar();
}

function saveProgress() {
    localStorage.setItem('vocab_progress', JSON.stringify(progress));
}

function updateProgressBar() {
    const total = vocabData.length;
    if (total === 0) return;
    
    const mastered = vocabData.filter(item => progress[item.id] === 'mastered').length;
    const percentage = Math.round((mastered / total) * 100);
    
    document.getElementById('progress-percentage').textContent = `${percentage}%`;
    document.getElementById('progress-bar-fill').style.width = `${percentage}%`;
}

function updateSidebarCounts() {
    const total = vocabData.length;
    const unlearned = vocabData.filter(item => progress[item.id] === 'unlearned').length;
    const learning = vocabData.filter(item => progress[item.id] === 'learning').length;
    const mastered = vocabData.filter(item => progress[item.id] === 'mastered').length;
    
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
            vocabData.forEach(item => {
                progress[item.id] = 'unlearned';
            });
            saveProgress();
            updateProgressBar();
            updateSidebarCounts();
            applyFilters();
            alert("Đã xóa tiến độ học tập cũ.");
        }
    });
    
    // Theme Toggle (supports both desktop & mobile buttons)
    document.querySelectorAll('.theme-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', currentTheme);
            localStorage.setItem('vocab_theme', currentTheme);
            updateThemeIcon();
        });
    });
    
    // --- Flashcard Controls ---
    const flashcard = document.getElementById('main-flashcard');
    
    // Flip card click
    flashcard.addEventListener('click', (e) => {
        // Prevent flipping if clicked on audio button or compounds
        if (e.target.closest('#tts-btn') || e.target.closest('.compounds-section') || e.target.closest('.mnemonic-section') || e.target.closest('#translate-example-btn')) {
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
    currentKanjis = vocabData.filter(item => {
        // Status filter
        if (filterStatus !== 'all') {
            if (progress[item.id] !== filterStatus) {
                return false;
            }
        }
        
        // Search filter
        if (searchVal) {
            const kanjiMatch = item.id.toLowerCase().includes(searchVal);
            const furiganaMatch = (item.furigana || '').toLowerCase().includes(searchVal);
            const nghiaMatch = (item.meaning || '').toLowerCase().includes(searchVal);
            return kanjiMatch || furiganaMatch || nghiaMatch;
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
        document.getElementById('back-pinyin').textContent = '';
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
    document.getElementById('front-kanji').textContent = item.kanji || item.furigana;
    
    // Set card border/shadow matching status
    const cardElement = document.getElementById('main-flashcard');
    cardElement.classList.remove('status-learning', 'status-mastered');
    if (progress[item.id] === 'learning') {
        cardElement.classList.add('status-learning');
    } else if (progress[item.id] === 'mastered') {
        cardElement.classList.add('status-mastered');
    }
    
    // Update Back Card
    document.getElementById('back-word').textContent = item.kanji || item.furigana;
    document.getElementById('back-furigana').textContent = item.furigana ? item.furigana : '';
    document.getElementById('back-nghia').textContent = item.meaning;
    const readingRow = document.getElementById('back-reading-row');
    if(readingRow) readingRow.textContent = item.furigana || '';
    
    const chiTietBox = document.getElementById('back-chi-tiet-container');
    if (chiTietBox) chiTietBox.style.display = 'none'; // hide in vocab mode
    
    // Example section
    const exampleEl = document.getElementById('back-example');
    const exampleViEl = document.getElementById('back-example-vi');
    const translateBtn = document.getElementById('translate-example-btn');
    
    if (exampleEl) {
        exampleEl.innerHTML = item.example ? item.example.replace(/\n/g, '<br>') : 'Chưa có ví dụ';
    }
    if (exampleViEl) {
        exampleViEl.innerHTML = item.example_vi ? item.example_vi.replace(/\n/g, '<br>') : 'Chưa có bản dịch';
        exampleViEl.style.display = 'none'; // reset translation on new card
    }
    if (translateBtn) {
        translateBtn.style.display = item.example ? 'flex' : 'none';
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
    progress[item.id] = newStatus;
    saveProgress();
    updateProgressBar();
    updateSidebarCounts();
}

// ==========================================
// TAB 2: QUIZ BUSINESS LOGIC
// ==========================================
function startQuizQuestion() {
    if (vocabData.length === 0) return;
    
    isQuizAnswered = false;
    document.getElementById('quiz-feedback').style.display = 'none';
    document.getElementById('quiz-next-btn').style.display = 'none';
    
    const mode = document.getElementById('quiz-mode-select').value;
    const poolMode = document.getElementById('quiz-pool-select').value;
    
    // Determine the question pool
    let pool = [...vocabData];
    if (poolMode === 'unlearned') {
        pool = vocabData.filter(item => progress[item.id] === 'unlearned');
    } else if (poolMode === 'learning') {
        pool = vocabData.filter(item => progress[item.id] === 'learning');
    } else if (poolMode === 'mastered') {
        pool = vocabData.filter(item => progress[item.id] === 'mastered');
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
    if (mode === 'meaning-to-word') {
        questionText.textContent = quizCurrentKanji.meaning;
    } else if (mode === 'furigana-to-word') {
        questionText.textContent = quizCurrentKanji.furigana || quizCurrentKanji.kanji;
    } else {
        questionText.textContent = quizCurrentKanji.kanji || quizCurrentKanji.furigana;
    }
    
    // 3. Generate answers (1 correct + 3 wrong)
    const answersSet = new Set();
    let correctAnswer = '';
    
    
    if (mode === 'word-to-meaning') {
        correctAnswer = quizCurrentKanji.meaning;
    } else if (mode === 'meaning-to-word') {
        correctAnswer = quizCurrentKanji.kanji || quizCurrentKanji.furigana;
    } else if (mode === 'furigana-to-word') {
        correctAnswer = quizCurrentKanji.kanji || quizCurrentKanji.meaning;
    }

    
    answersSet.add(correctAnswer);
    
    // Keep picking wrong options until we have exactly 4 unique answers
    while (answersSet.size < Math.min(4, vocabData.length)) {
        const dummyIndex = Math.floor(Math.random() * vocabData.length);
        const dummyItem = vocabData[dummyIndex];
        let dummyAnswer = '';
        
        
        if (mode === 'word-to-meaning') {
            dummyAnswer = dummyItem.meaning;
        } else if (mode === 'meaning-to-word') {
            dummyAnswer = dummyItem.kanji || dummyItem.furigana;
        } else if (mode === 'furigana-to-word') {
            dummyAnswer = dummyItem.kanji || dummyItem.meaning;
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
        if (progress[quizCurrentKanji.id] === 'unlearned') {
            progress[quizCurrentKanji.id] = 'learning';
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
    speakJapanese(quizCurrentKanji.kanji || quizCurrentKanji.furigana);
    
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
function renderLibrary() {
    const grid = document.getElementById('library-grid-container');
    grid.innerHTML = '';
    
    currentKanjis.forEach((item, index) => {
        const status = progress[item.id] || 'unlearned';
        const card = document.createElement('div');
        card.className = `library-card ${status}`;
        card.innerHTML = `
            <div class="lib-kanji">${item.kanji || item.furigana}</div>
            <div class="lib-hanviet" style="color:var(--text-muted); font-size: 0.9rem;">${item.furigana || ''}</div>
            <div class="lib-nghia">${item.meaning}</div>
        `;
        
        card.addEventListener('click', () => {
            activeIndex = index;
            switchTab('flashcards');
            updateFlashcardView();
        });
        
        grid.appendChild(card);
    });
    
    const countEl = document.getElementById('library-count');
    if (countEl) countEl.textContent = currentKanjis.length;
}

// Setup Translate Example Button
const translateBtnSetup = document.getElementById('translate-example-btn');
if (translateBtnSetup) {
    translateBtnSetup.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent flipping card
        const viEl = document.getElementById('back-example-vi');
        if (viEl) {
            viEl.style.display = viEl.style.display === 'none' ? 'block' : 'none';
        }
    });
}

// ==========================================
// MOBILE DRAWER SIDEBAR LOGIC
// ==========================================
function setupMobileSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const menuBtn = document.getElementById('mobile-menu-toggle');
    const closeBtn = document.getElementById('sidebar-close-btn');

    function openSidebar() {
        if (sidebar) sidebar.classList.add('open');
        if (overlay) overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
        if (sidebar) sidebar.classList.remove('open');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (menuBtn) menuBtn.addEventListener('click', openSidebar);
    if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
    if (overlay) overlay.addEventListener('click', closeSidebar);

    // Auto close drawer when a filter/sort button is chosen on mobile
    const filterBtns = document.querySelectorAll('.filter-btn, .sort-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                closeSidebar();
            }
        });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar && sidebar.classList.contains('open')) {
            closeSidebar();
        }
    });
}

