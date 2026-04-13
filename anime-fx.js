(function() {
    // Inject Styles
    const style = document.createElement('style');
    style.innerHTML = `
        .anime-flutter {
            position: fixed;
            pointer-events: none;
            z-index: 10000;
            font-family: 'Arial Black', sans-serif;
            font-weight: 900;
            text-transform: uppercase;
            white-space: nowrap;
            opacity: 0;
            user-select: none;
        }
        .anime-word {
            font-size: 80px;
            color: #fff;
            text-shadow: 
                4px 4px 0px #00ffff, 
                -4px -4px 0px #ff00ff, 
                6px 6px 0px #000;
            animation: anime-pop 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .anime-kanji {
            font-size: 60px;
            color: #000;
            background: #f8fb00;
            padding: 5px 15px;
            border: 4px solid black;
            box-shadow: 8px 8px 0px rgba(0,0,0,0.3);
            animation: anime-float 2s linear forwards;
        }
        @keyframes anime-pop {
            0% { transform: translate(-50%, -50%) scale(0) rotate(-10deg); opacity: 0; }
            20% { transform: translate(-50%, -50%) scale(1.2) rotate(5deg); opacity: 1; }
            80% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(0.8) translateY(-100px); opacity: 0; }
        }
        @keyframes anime-float {
            0% { transform: translate(var(--rx), var(--ry)) scale(0.5) rotate(var(--ra)); opacity: 0; }
            20% { opacity: 1; }
            100% { transform: translate(var(--tx), var(--ty)) scale(1.2) rotate(calc(var(--ra) + 20deg)); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    const WORDS = ["GOTCHA", "KO", "CRITICAL", "MAX POWER", "PERFECT", "SMASH", "BOOM", "ZAP"];
    const KANJI = ["勝利", "攻撃", "防御", "爆発", "伝説", "忍者", "ロボ", "究極"];

    function spawn() {
        const isKanji = Math.random() > 0.5;
        const text = isKanji ? KANJI[Math.floor(Math.random() * KANJI.length)] : WORDS[Math.floor(Math.random() * WORDS.length)];
        
        const el = document.createElement('div');
        el.className = `anime-flutter ${isKanji ? 'anime-kanji' : 'anime-word'}`;
        el.innerText = text;

        const x = Math.random() * 80 + 10;
        const y = Math.random() * 80 + 10;
        
        if (!isKanji) {
            el.style.left = '50%';
            el.style.top = '50%';
        } else {
            el.style.left = x + '%';
            el.style.top = y + '%';
            el.style.setProperty('--rx', (Math.random() * 40 - 20) + 'px');
            el.style.setProperty('--ry', (Math.random() * 40 - 20) + 'px');
            el.style.setProperty('--tx', (Math.random() * 200 - 100) + 'px');
            el.style.setProperty('--ty', (Math.random() * 200 - 100) + 'px');
            el.style.setProperty('--ra', (Math.random() * 40 - 20) + 'deg');
        }

        document.body.appendChild(el);
        setTimeout(() => el.remove(), 2500);
    }

    let active = false;
    let interval;

    function startFlutter() {
        if (active) return;
        active = true;
        interval = setInterval(() => {
            if (Math.random() > 0.3) spawn();
        }, 400);

        setTimeout(() => {
            clearInterval(interval);
            active = false;
        }, 10000); 
    }

    setInterval(startFlutter, 30000);
    setTimeout(startFlutter, 5000);
})();
