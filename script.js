// --- AUDIO SYNTHESIS ENGINE (Menghasilkan efek suara murni via browser) ---
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
    try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        if (type === 'correct') {
            osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); 
            osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1); 
            gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
            osc.start(); 
            osc.stop(audioCtx.currentTime + 0.3);
        } else if (type === 'wrong') {
            osc.frequency.setValueAtTime(220, audioCtx.currentTime); 
            osc.frequency.setValueAtTime(147, audioCtx.currentTime + 0.15); 
            gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
            osc.start(); 
            osc.stop(audioCtx.currentTime + 0.4);
        } else if (type === 'flip') {
            osc.frequency.setValueAtTime(350, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.15);
            gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
            osc.start(); 
            osc.stop(audioCtx.currentTime + 0.15);
        }
    } catch(e) {
        console.warn("Audio Context memerlukan interaksi aktif.");
    }
}

// --- DATABASE 30 UNSUR KIMIA ---
const elementsData = [
    { symbol: 'H', name: 'Hidrogen', number: 1, use: 'Gas teringan di alam semesta, penyusun bintang dan air bersama oksigen! 🌌', isMetal: false },
    { symbol: 'Li', name: 'Litium', number: 3, use: 'Logam super ringan untuk daya baterai gadget dan kendaraan masa depan! 🔋', isMetal: true },
    { symbol: 'Na', name: 'Natrium', number: 11, use: 'Bahan pembentuk garam dapur asin penambah nafsu makan kita! 🧂', isMetal: true },
    { symbol: 'K', name: 'Kalium', number: 19, use: 'Banyak terkandung dalam buah pisang, menjaga kesehatan otot jantungmu! 🍌', isMetal: true },
    { symbol: 'Mg', name: 'Magnesium', number: 12, use: 'Memberi warna hijau indah pada daun tanaman lewat klorofil! 🌿', isMetal: true },
    { symbol: 'Ca', name: 'Kalsium', number: 20, use: 'Suku kaya unsur ini! Membuat gigi dan tulangmu sekeras baja! 🥛', isMetal: true },
    { symbol: 'Fe', name: 'Besi', number: 26, use: 'Tulang punggung peradaban! Pengisi jembatan, rel kereta, dan gedung tinggi! 🏗️', isMetal: true },
    { symbol: 'Cu', name: 'Tembaga', number: 29, use: 'Logam merah pengisi kabel listrik agar semua lampu bisa menyala! 🔌', isMetal: true },
    { symbol: 'Au', name: 'Emas', number: 79, use: 'Logam mulia kuning indah penanda harta karun dan hiasan mahkota raja! 👑', isMetal: true },
    { symbol: 'Ag', name: 'Perak', number: 47, use: 'Digunakan untuk medali juara dua, perhiasan cantik, dan sendok antik! 🥈', isMetal: true },
    { symbol: 'Zn', name: 'Seng', number: 30, use: 'Sangat andal melapisi atap rumahmu agar tidak karatan diterpa hujan! 🏠', isMetal: true },
    { symbol: 'Hg', name: 'Raksa (Mercury)', number: 80, use: 'Satu-satunya logam berbentuk cair di suhu ruangan! Pengisi termometer jadul! 🌡️', isMetal: true },
    { symbol: 'Ti', name: 'Titanium', number: 22, use: 'Logam super kuat tapi sangat ringan, andalan pembuat bodi pesawat tempur! ✈️', isMetal: true },
    { symbol: 'Ni', name: 'Nikel', number: 28, use: 'Dipakai untuk pembuatan koin uang logam dan paduan baja antikarat! 🪙', isMetal: true },
    { symbol: 'B', name: 'Boron', number: 5, use: 'Dicampur ke kaca tahan panas lab atau jadi ramuan pembuat slime elastis! 🧪', isMetal: false },
    { symbol: 'C', name: 'Karbon', number: 6, use: 'Pangkal segala kehidupan! Bisa berupa arang hitam atau batu berlian berkilau! 💎', isMetal: false },
    { symbol: 'N', name: 'Nitrogen', number: 7, use: 'Gas pengawet makanan ringan, pupuk subur, dan pembuat es krim kilat! 🍦', isMetal: false },
    { symbol: 'O', name: 'Oksigen', number: 8, use: 'Nafas kehidupan! Gas gratis berlimpah di bumi yang dihirup paru-parumu! 🫁', isMetal: false },
    { symbol: 'F', name: 'Fluor', number: 9, use: 'Pahlawan pencegah gigi berlubang yang selalu ada di dalam pasta gigimu! 🪥', isMetal: false },
    { symbol: 'Ne', name: 'Neon', number: 10, use: 'Gas penyala lampu hias jalanan kota agar malam tampak bersinar neon-warni! 🌃', isMetal: false },
    { symbol: 'Al', name: 'Aluminium', number: 13, use: 'Pembungkus makanan foil perak dan bahan bodi pesawat terbang! 🛰️', isMetal: true },
    { symbol: 'Si', name: 'Silikon', number: 14, use: 'Bahan pembuat pasir kaca dan chip pintar otak HP maupun laptopmu! 💻', isMetal: false },
    { symbol: 'P', name: 'Fosfor', number: 15, use: 'Ada di ujung batang korek api, digores langsung memercikkan api hangat! 🔥', isMetal: false },
    { symbol: 'S', name: 'Belerang (Sulfur)', number: 16, use: 'Bebatuan kuning berbau menyengat di kawah gunung merapi, obat kulit alami! 🌋', isMetal: false },
    { symbol: 'Cl', name: 'Klorin', number: 17, use: 'Pembersih dan pembunuh kuman air di kolam renang berbau khas! 🏊', isMetal: false },
    { symbol: 'Ar', name: 'Argon', number: 18, use: 'Gas pelindung di dalam bola lampu pijar agar filamen kawatnya tidak gosong! 💡', isMetal: false },
    { symbol: 'I', name: 'Iodin', number: 53, use: 'Cairan obat merah pembunuh kuman pada luka jatuh saat bermain! 🩹', isMetal: false },
    { symbol: 'He', name: 'Helium', number: 2, use: 'Gas pengisi balon pesta terbang, dan pembuat suara lucu mirip bebek! 🎈', isMetal: false },
    { symbol: 'Pb', name: 'Timbal (Lead)', number: 82, use: 'Logam sangat berat pelindung radiasi ruang X-Ray di rumah sakit! 🩻', isMetal: true },
    { symbol: 'U', name: 'Uranium', number: 92, use: 'Bahan bakar super raksasa pembangkit listrik nuklir dan kapal selam raksasa! ☢️', isMetal: true }
];

// --- STATES GAME & LEARN ---
let learnPool = []; // Pool khusus menampung data kartu belajar yang diacak
let currentLearnIndex = 0;
let currentGameMode = 1;
let score = 0;
let lives = 3;

// State Game 1
let g1Question = null;
let g1Pool = [];

// State Game 2
let g2SelectedCards = [];
let g2MatchedPairs = 0;

// State Game 3
let g3CurrentElement = null;
let g3Pool = [];
let g3TimerInterval = null;
let g3TimeLeft = 20;

// --- SISTEM LAYAR NAVIGASI ---
function switchScreen(screenId) {
    clearInterval(g3TimerInterval); 

    const screens = ['lobby', 'learn', 'game-1', 'game-2', 'game-3', 'gameover'];
    screens.forEach(s => document.getElementById(`screen-${s}`).classList.add('hidden'));

    const target = document.getElementById(`screen-${screenId}`);
    target.classList.remove('hidden');
    target.classList.add('flex');

    // LOGIKA ACAK DEK BELAJAR: Diacak setiap kali membuka menu dek belajar
    if (screenId === 'learn') {
        learnPool = [...elementsData].sort(() => Math.random() - 0.5);
        currentLearnIndex = 0;
        updateLearnCard();
    }
}

// --- SISTEM KARTU BELAJAR (FLASHCARD) ---
function updateLearnCard() {
    if(learnPool.length === 0) return;
    
    const data = learnPool[currentLearnIndex];
    document.getElementById('learn-num-front').innerText = `No. ${data.number}`;
    document.getElementById('learn-type').innerText = data.isMetal ? '🛡️ Logam' : '🎈 Non-Logam';
    document.getElementById('learn-symbol').innerText = data.symbol;
    document.getElementById('learn-name').innerText = data.name;
    document.getElementById('learn-use').innerText = data.use;
    document.getElementById('learn-progress').innerText = `Kartu ${currentLearnIndex + 1} dari ${learnPool.length}`;
    
    // Setiap ganti kartu, pastikan posisi kartu kembali menghadap ke depan dahulu
    const card = document.querySelector('.memory-card');
    if (card) card.classList.remove('flipped');
}

function toggleCardFlip(cardEl) {
    playSound('flip');
    cardEl.classList.toggle('flipped');
}

function nextCard() {
    playSound('flip');
    currentLearnIndex = (currentLearnIndex + 1) % learnPool.length;
    updateLearnCard();
}

function prevCard() {
    playSound('flip');
    currentLearnIndex = (currentLearnIndex - 1 + learnPool.length) % learnPool.length;
    updateLearnCard();
}

// --- CONTROL PUSAT GAME ---
function startGame(mode) {
    currentGameMode = mode;
    score = 0;
    lives = 3;
    
    if (mode === 1) {
        g1Pool = [...elementsData];
        switchScreen('game-1');
        initGame1Round();
    } else if (mode === 2) {
        switchScreen('game-2');
        initGame2Board();
    } else if (mode === 3) {
        g3Pool = [...elementsData];
        g3TimeLeft = 20;
        switchScreen('game-3');
        initGame3Round();
        startG3Timer();
    }
}

function restartCurrentGame() {
    startGame(currentGameMode);
}

function triggerGameOver(title, emoji, subText, finalVal) {
    clearInterval(g3TimerInterval);
    switchScreen('gameover');
    document.getElementById('gameover-title').innerText = title;
    document.getElementById('gameover-emoji').innerText = emoji;
    document.getElementById('gameover-sub').innerText = subText;
    document.getElementById('final-score').innerText = finalVal;
}

// ================= GAME 1: MISI PENYELAMAT =================
function initGame1Round() {
    if (g1Pool.length === 0 || lives <= 0) {
        triggerGameOver("MISI SELESAI! 🎉", "🏆", "Skor Penyelamatan Unsur:", score);
        return;
    }

    document.getElementById('g1-lives').innerText = '❤️'.repeat(lives);
    document.getElementById('g1-score').innerText = `Skor: ${score}`;

    const randIdx = Math.floor(Math.random() * g1Pool.length);
    g1Question = g1Pool.splice(randIdx, 1)[0];

    document.getElementById('g1-question').innerText = g1Question.use;

    let choices = [g1Question];
    let tempPool = elementsData.filter(el => el.symbol !== g1Question.symbol);
    
    for (let i = 0; i < 3; i++) {
        const wrongIdx = Math.floor(Math.random() * tempPool.length);
        choices.push(tempPool.splice(wrongIdx, 1)[0]);
    }
    choices.sort(() => Math.random() - 0.5);

    const optContainer = document.getElementById('g1-options');
    optContainer.innerHTML = '';
    choices.forEach(item => {
        const btn = document.createElement('button');
        btn.className = "comic-font py-4 px-2 bg-gradient-to-br from-slate-800 to-indigo-950 hover:from-slate-700 hover:to-indigo-900 rounded-2xl shadow-[0_4px_0_#1e1b4b] active:translate-y-1 active:shadow-none transition-all border border-white/10";
        btn.innerHTML = `
            <span class="block text-2xl text-cyan-300">${item.symbol}</span>
            <span class="block text-[10px] font-sans font-bold text-slate-300">${item.name}</span>
        `;
        btn.onclick = () => checkGame1Answer(item.symbol, btn);
        optContainer.appendChild(btn);
    });
}

function checkGame1Answer(chosenSymbol, btnEl) {
    if (chosenSymbol === g1Question.symbol) {
        playSound('correct');
        score += 10;
        btnEl.classList.add('from-emerald-600', 'to-emerald-800', 'shadow-[0_4px_0_#064e3b]');
        setTimeout(initGame1Round, 600);
    } else {
        playSound('wrong');
        lives--;
        btnEl.classList.add('from-red-600', 'to-red-800', 'shadow-[0_4px_0_#7f1d1d]', 'animate-bounce');
        if (lives <= 0) {
            setTimeout(() => triggerGameOver("MISI GAGAL! 👾", "💀", "Skor Akhir Penyelamatan:", score), 600);
        } else {
            setTimeout(initGame1Round, 600);
        }
    }
}

// ================= GAME 2: MEMORY MATCH =================
function initGame2Board() {
    g2SelectedCards = [];
    g2MatchedPairs = 0;
    document.getElementById('g2-score').innerText = "Pasangan: 0/4";

    const randomPool = [...elementsData].sort(() => Math.random() - 0.5).slice(0, 4);
    
    let cards = [];
    randomPool.forEach(el => {
        cards.push({ id: el.symbol, text: el.symbol, type: 'symbol', matchId: el.symbol });
        cards.push({ id: el.symbol + '-name', text: el.name, type: 'name', matchId: el.symbol });
    });

    cards.sort(() => Math.random() - 0.5);

    const grid = document.getElementById('g2-grid');
    grid.innerHTML = '';

    cards.forEach((card, index) => {
        const cardDiv = document.createElement('div');
        cardDiv.className = "memory-card h-24 cursor-pointer relative";
        cardDiv.dataset.matchId = card.matchId;
        cardDiv.dataset.cardType = card.type;
        cardDiv.dataset.index = index;

        cardDiv.innerHTML = `
            <div class="memory-card-inner">
                <div class="card-front bg-indigo-950 border border-indigo-500/50 rounded-xl flex items-center justify-center shadow-lg">
                    <span class="comic-font text-xl text-indigo-400">?</span>
                </div>
                <div class="card-back ${card.type === 'symbol' ? 'bg-fuchsia-600 text-white' : 'bg-slate-800 text-purple-200'} border border-white/20 rounded-xl flex flex-col items-center justify-center p-2">
                    <span class="${card.type === 'symbol' ? 'comic-font text-2xl' : 'text-[11px] font-bold leading-tight'}">${card.text}</span>
                </div>
            </div>
        `;

        cardDiv.onclick = () => flipMatchCard(cardDiv);
        grid.appendChild(cardDiv);
    });
}

function flipMatchCard(cardEl) {
    if (cardEl.classList.contains('matched') || cardEl.classList.contains('flipped') || g2SelectedCards.length >= 2) return;

    playSound('flip');
    cardEl.classList.add('flipped');
    g2SelectedCards.push(cardEl);

    if (g2SelectedCards.length === 2) {
        const [card1, card2] = g2SelectedCards;
        const isMatch = (card1.dataset.matchId === card2.dataset.matchId) && (card1.dataset.cardType !== card2.dataset.cardType);

        if (isMatch) {
            playSound('correct');
            card1.classList.add('matched');
            card2.classList.add('matched');
            
            card1.querySelector('.card-back').classList.add('bg-emerald-600');
            card2.querySelector('.card-back').classList.add('bg-emerald-600');

            g2MatchedPairs++;
            score += 25;
            document.getElementById('g2-score').innerText = `Pasangan: ${g2MatchedPairs}/4`;

            g2SelectedCards = [];

            if (g2MatchedPairs === 4) {
                setTimeout(() => {
                    triggerGameOver("INGATAN KUAT! 🧠", "🧠", "Skor Memori Sempurna:", score);
                }, 800);
            }
        } else {
            playSound('wrong');
            setTimeout(() => {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                g2SelectedCards = [];
            }, 1000);
        }
    }
}

// ================= GAME 3: SORTIR SIFAT (LOGAM VS NON-LOGAM) =================
function startG3Timer() {
    g3TimerInterval = setInterval(() => {
        g3TimeLeft--;
        document.getElementById('g3-timer').innerText = `Waktu: ${g3TimeLeft}s`;
        if (g3TimeLeft <= 0) {
            clearInterval(g3TimerInterval);
            triggerGameOver("WAKTU HABIS! ⏱️", "⚡", "Total Unsur Berhasil Disortir:", score);
        }
    }, 1000);
}

function initGame3Round() {
    if (g3Pool.length === 0) {
        triggerGameOver("PENYORTIR ULUNG! 🏆", "🎖️", "Berhasil Mensortir Semua Unsur! Skor:", score);
        return;
    }

    document.getElementById('g3-score').innerText = `Benar: ${score}`;

    const randIdx = Math.floor(Math.random() * g3Pool.length);
    g3CurrentElement = g3Pool.splice(randIdx, 1)[0];

    document.getElementById('g3-symbol').innerText = g3CurrentElement.symbol;
    document.getElementById('g3-name').innerText = g3CurrentElement.name;
}

function checkG3Answer(isMetalChoice) {
    const box = document.getElementById('g3-symbol').parentElement;
    if (isMetalChoice === g3CurrentElement.isMetal) {
        playSound('correct');
        score++;
        box.classList.add('bg-emerald-950');
        setTimeout(() => {
            box.classList.remove('bg-emerald-950');
            initGame3Round();
        }, 300);
    } else {
        playSound('wrong');
        g3TimeLeft = Math.max(0, g3TimeLeft - 3); 
        document.getElementById('g3-timer').innerText = `Waktu: ${g3TimeLeft}s`;
        
        box.classList.add('bg-red-950', 'animate-shake');
        setTimeout(() => {
            box.classList.remove('bg-red-950', 'animate-shake');
            initGame3Round();
        }, 300);
    }
      }
  
