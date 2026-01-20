// Compact Ticker-Style Top Navigation
// Shows stats, facts, and class updates in a scrolling ticker

(function() {
    'use strict';

    const computerFacts = [
        '💻 First computer bug was a real bug (moth) in 1947',
        '🖥️ ENIAC weighed 30 tons and took up 1,800 square feet',
        '⌨️ QWERTY keyboard designed to slow typists down',
        '🖱️ First computer mouse was made of wood in 1964',
        '💾 1GB in 1980 cost $193,000 - today it costs $0.03',
        '🌐 First website went live in 1991',
        '📱 First smartphone had no apps - just calls and email',
        '🎮 First video game was created in 1958',
        '🔋 First laptop weighed 24 pounds in 1981',
        '💿 First CD could hold 74 minutes of music',
        '📧 First email was sent in 1971',
        '🌍 Internet has 5+ billion users worldwide',
        '⚡ Modern processors have billions of transistors',
        '💡 LED lights use 90% less energy than incandescent',
        '🔊 Sound travels at 343 m/s, light at 299,792,458 m/s'
    ];

    const classStats = [
        '📚 15+ Scratch tutorials available',
        '🌍 36 Tinkercad projects created',
        '🎮 8 game development lessons',
        '👥 120+ students this year',
        '⭐ 25+ featured projects',
        '📝 12 lesson plans available',
        '🎨 50+ student portfolios',
        '🏆 10 major challenges completed',
        '💻 5 coding paths to explore',
        '🧪 6 MGE experiments active',
        '📖 3 featured tutorials this month',
        '🎯 100% portfolio completion goal'
    ];

    const whatsNew = [
        '✨ New: Tinkercad Portfolio Manager',
        '🆕 Featured: Collectibles Tutorial',
        '📚 New: Scratch Code Tutorials',
        '🌍 New: 3D Viewer Integration',
        '🎮 Updated: Game Development Path',
        '📝 New: What\'s New Blog Section',
        '💡 Tip: Check student portfolios weekly',
        '🎨 New: Drag & Drop Portfolio Manager',
        '📊 Stats: 36 Tinkercad projects this month',
        '🏆 Challenge: Final projects due soon',
        '💻 New: HTML Empire Builder',
        '🎯 Goal: 100% portfolio completion'
    ];

    function getRandomItems(array, count) {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    function createTickerContent() {
        const allItems = [
            ...getRandomItems(computerFacts, 5),
            ...getRandomItems(classStats, 4),
            ...getRandomItems(whatsNew, 3)
        ];
        
        // Shuffle all items
        const shuffled = allItems.sort(() => 0.5 - Math.random());
        
        // Create ticker items
        return shuffled.map(item => `<span class="ticker-item">${item}</span>`).join('');
    }

    function initTickerNav() {
        const navbar = document.querySelector('.navbar-top');
        if (!navbar) return;

        // Create ticker container
        const tickerContainer = document.createElement('div');
        tickerContainer.className = 'ticker-nav-container';
        tickerContainer.innerHTML = `
            <div class="ticker-nav-wrapper">
                <div class="ticker-nav-content" id="ticker-content">
                    ${createTickerContent()}
                </div>
            </div>
        `;

        // Insert ticker before navbar actions
        const navbarContainer = navbar.querySelector('.navbar-container');
        if (navbarContainer) {
            const statusBar = navbarContainer.querySelector('.status-bar');
            if (statusBar) {
                statusBar.parentNode.insertBefore(tickerContainer, statusBar);
            } else {
                navbarContainer.insertBefore(tickerContainer, navbarContainer.firstChild);
            }
        }

        // Animate ticker
        const tickerContent = document.getElementById('ticker-content');
        if (tickerContent) {
            // Clone content for seamless loop
            tickerContent.innerHTML += tickerContent.innerHTML;
            
            // Start animation
            let position = 0;
            const speed = 0.5; // pixels per frame
            
            function animate() {
                position -= speed;
                if (Math.abs(position) >= tickerContent.scrollWidth / 2) {
                    position = 0;
                }
                tickerContent.style.transform = `translateX(${position}px)`;
                requestAnimationFrame(animate);
            }
            
            animate();
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTickerNav);
    } else {
        initTickerNav();
    }

    // Update ticker content every 5 minutes
    setInterval(() => {
        const tickerContent = document.getElementById('ticker-content');
        if (tickerContent) {
            tickerContent.innerHTML = createTickerContent() + createTickerContent();
        }
    }, 300000); // 5 minutes
})();
