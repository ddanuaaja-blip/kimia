# 🔬 Elemental Odyssey v2.0 - Lab Kimia Interaktif

> Platform pembelajaran interaktif tentang tabel periodik unsur kimia dengan gamifikasi dan sistem progression yang komprehensif.

## 🎮 Fitur Utama

### Game Modes
- **📖 Dek Belajar**: Kartu flip interaktif untuk mempelajari 30 unsur kimia
- **🎮 Game 1 - Misi Penyelamat**: Tebak unsur berdasarkan fakta menarik
- **🧠 Game 2 - Pasangan Ajaib**: Memory match lambang dan nama unsur
- **🛡️ Game 3 - Sortir Sifat**: Klasifikasi logam vs non-logam

### Sistem Progression
- **⭐ Level System**: Naik level dengan mengumpulkan XP
- **🪙 Coin Rewards**: Dapatkan koin dari setiap game
- **🏆 Leaderboard**: Ranking pemain berdasarkan skor
- **🏅 Achievement System**: 7 achievement badges yang bisa dibuka

### Gameplay Features
- **⚙️ Difficulty Modes**: Easy, Normal, Hard (dengan reward berbeda)
- **📊 Statistics**: Tracking performa per game
- **🔊 Sound Effects**: Audio feedback untuk setiap aksi
- **⚙️ Settings**: Customisasi game sesuai preferensi

## 📁 Struktur Folder

```
kimia/
├── index.html              # Main HTML
├── README.md              # Documentation
├── css/
│   ├── main.css           # Main styles
│   ├── animations.css     # Keyframe animations
│   ├── themes.css         # Theme variations
│   └── responsive.css     # Mobile responsive
├── js/
│   ├── config.js          # Global configuration
│   ├── elements-data.js   # 30 unsur kimia database
│   ├── main.js            # Entry point
│   ├── modules/
│   │   ├── storage-manager.js      # LocalStorage operations
│   │   ├── leaderboard.js          # Leaderboard system
│   │   ├── achievements.js         # Achievement badges
│   │   ├── sound-manager.js        # Audio controls
│   │   └── ui-manager.js           # Screen management
│   ├── games/
│   │   ├── game1-misi.js    # Game 1 logic
│   │   ├── game2-memory.js  # Game 2 logic
│   │   └── game3-sortir.js  # Game 3 logic
│   └── utils/
│       └── helpers.js       # Utility functions
└── assets/
    ├── sounds/              # Audio files
    └── animations/          # Lottie animations
```

## 🚀 Fitur Fase 1 (Completed)

✅ **Leaderboard & Progression System**
- LocalStorage-based score tracking
- Top 10 global leaderboard
- Personal best per game
- Level up with XP system

✅ **Difficulty Levels**
- Easy Mode (5 lives, 25s, 1x reward)
- Normal Mode (3 lives, 20s, 1.5x reward)
- Hard Mode (2 lives, 15s, 2x reward)

✅ **Statistics Dashboard**
- Total games played
- Win rate percentage
- Best score per game
- Streak counter

✅ **Achievement Badges**
- First Win 🏅
- Ten Wins 🥈
- Perfect Score ⭐
- Streak 5 🔥
- Master All Games 👑
- Speed Demon ⚡
- Collector 🔬

✅ **Settings Panel**
- Profile customization
- Sound toggle
- Volume control
- Data reset option

## 📊 Data Structure

### User Profile
```javascript
{
  userId: "user_123",
  nickname: "Chemistry Master",
  level: 5,
  totalXP: 2500,
  coins: 350,
  joinedAt: "2026-07-14T...",
  lastPlayedAt: "2026-07-14T..."
}
```

### Game Statistics
```javascript
{
  totalGamesPlayed: 45,
  totalWins: 32,
  gamesStats: {
    1: { played: 15, wins: 12, bestScore: 280 },
    2: { played: 15, wins: 12, bestScore: 100 },
    3: { played: 15, wins: 8, bestScore: 28 }
  },
  streakCount: 3,
  bestStreak: 7
}
```

## 🎯 Difficulty Multipliers

| Mode | Lives | Time | XP Multiplier | Win Reward |
|------|-------|------|---------------|-------------|
| Easy | 5 | 25s | 1x | Standard |
| Normal | 3 | 20s | 1.5x | +50% |
| Hard | 2 | 15s | 2x | +100% |

## 🔧 Teknologi

- **Frontend**: Vanilla JavaScript (ES6+)
- **Styling**: Tailwind CSS + Custom CSS
- **Storage**: LocalStorage API
- **Audio**: Web Audio API
- **Build**: No build process required

## 📝 How to Use

1. **Clone or download** repository
2. **Open `index.html`** di browser
3. **Mulai bermain!**

Semua data disimpan di browser secara otomatis.

## 🎓 Database Unsur (30 Elements)

Termasuk:
- **Logam**: Li, Na, K, Mg, Ca, Fe, Cu, Au, Ag, Zn, Hg, Ti, Ni, Al, Pb, U
- **Non-Logam**: H, B, C, N, O, F, Ne, Si, P, S, Cl, Ar, I, He

Setiap unsur memiliki:
- Simbol & Nama
- Nomor Atom & Massa Atom
- Kategori (Logam/Non-Logam)
- Fakta Menarik & Kegunaan

## 🏆 Achievement System

Setiap achievement memberikan bonus:
- **Coins**: Kredit untuk future features
- **XP**: Points untuk leveling up
- **Badge**: Unlocked di profile

## 🔮 Roadmap Fase 2

- [ ] Game 4 - Quiz Mode (10 soal multiple choice)
- [ ] Interactive Periodic Table
- [ ] Daily Challenges & Rewards
- [ ] Enhanced Notifications & Animations
- [ ] Dark/Light Theme Toggle
- [ ] Responsive Design Improvements

## 📄 License

Github: [@ddanuaaja-blip](https://github.com/ddanuaaja-blip)

---

**Happy Learning! 🚀🔬**
