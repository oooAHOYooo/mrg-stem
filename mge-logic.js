(function() {
    'use strict';

    // Sidebar collapse functionality
    const leftBtn = document.getElementById('collapse-left-btn');
    const rightBtn = document.getElementById('collapse-right-btn');
    const leftSidebar = document.getElementById('sidebar-left');
    const rightSidebar = document.getElementById('sidebar-right');
    const dashboard = document.getElementById('dashboard-container');

    let leftCollapsed = localStorage.getItem('mgeSidebarLeftCollapsed') === 'true';
    let rightCollapsed = localStorage.getItem('mgeSidebarRightCollapsed') === 'true';

    function updateDashboardClass() {
        dashboard.classList.remove('left-collapsed', 'right-collapsed', 'both-collapsed');
        if (leftCollapsed && rightCollapsed) {
            dashboard.classList.add('both-collapsed');
        } else if (leftCollapsed) {
            dashboard.classList.add('left-collapsed');
        } else if (rightCollapsed) {
            dashboard.classList.add('right-collapsed');
        }
    }

    function applyLeftState() {
        if (leftCollapsed) {
            leftSidebar.classList.add('collapsed');
            leftBtn.innerHTML = '▶';
            leftBtn.classList.add('collapsed');
        } else {
            leftSidebar.classList.remove('collapsed');
            leftBtn.innerHTML = '◀';
            leftBtn.classList.remove('collapsed');
        }
        updateDashboardClass();
        localStorage.setItem('mgeSidebarLeftCollapsed', leftCollapsed);
    }

    function applyRightState() {
        if (rightCollapsed) {
            rightSidebar.classList.add('collapsed');
            rightBtn.innerHTML = '◀';
            rightBtn.classList.add('collapsed');
        } else {
            rightSidebar.classList.remove('collapsed');
            rightBtn.innerHTML = '▶';
            rightBtn.classList.remove('collapsed');
        }
        updateDashboardClass();
        localStorage.setItem('mgeSidebarRightCollapsed', rightCollapsed);
    }

    if (leftBtn) {
        applyLeftState();
        leftBtn.addEventListener('click', () => {
            leftCollapsed = !leftCollapsed;
            applyLeftState();
        });
    }

    if (rightBtn) {
        applyRightState();
        rightBtn.addEventListener('click', () => {
            rightCollapsed = !rightCollapsed;
            applyRightState();
        });
    }

    // Screen Wake Lock Implementation (Classroom Mode)
    let wakeLock = null;
    const heroToggle = document.getElementById('hero-wake-lock-toggle');
    const sidebarToggle = document.getElementById('sidebar-wake-lock-toggle');

    // Also check for the status bar toggle if it exists
    const getStatusToggle = () => document.getElementById('status-wake-lock-toggle');

    async function requestWakeLock() {
        try {
            if ('wakeLock' in navigator) {
                wakeLock = await navigator.wakeLock.request('screen');
                
                updateWakeLockUI(true);
                console.log('Classroom Mode: Wake Lock Active');
            }
        } catch (err) {
            console.error('Wake Lock Error:', err);
            updateWakeLockUI(false);
        }
    }

    function releaseWakeLock() {
        if (wakeLock !== null) {
            wakeLock.release();
            wakeLock = null;
        }
        updateWakeLockUI(false);
        console.log('Classroom Mode: Wake Lock Released');
    }

    function updateWakeLockUI(isActive) {
        if (heroToggle) {
            const heroText = heroToggle.querySelector('.hero-lock-text');
            const heroIcon = heroToggle.querySelector('.hero-lock-icon');
            
            if (isActive) {
                heroToggle.classList.add('active');
                if (heroText) heroText.innerText = "Classroom Mode Active";
                if (heroIcon) heroIcon.innerText = "⚡";
            } else {
                heroToggle.classList.remove('active');
                if (heroText) heroText.innerText = "Activate Classroom Mode";
                if (heroIcon) heroIcon.innerText = "☕";
            }
        }

        if (sidebarToggle) {
            sidebarToggle.checked = isActive;
        }

        const statusToggle = getStatusToggle();
        if (statusToggle) {
            const lockText = statusToggle.querySelector('.lock-text');
            const lockIcon = statusToggle.querySelector('.lock-icon');
            if (isActive) {
                statusToggle.style.background = '#10b981';
                statusToggle.style.color = 'white';
                statusToggle.style.borderColor = '#10b981';
                if (lockIcon) lockIcon.innerText = '⚡';
                if (lockText) lockText.innerText = 'Active';
            } else {
                statusToggle.style.background = 'none';
                statusToggle.style.color = '#1e40af';
                statusToggle.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                if (lockIcon) lockIcon.innerText = '☕';
                if (lockText) lockText.innerText = 'Stay Awake';
            }
        }
    }

    if (heroToggle) {
        heroToggle.addEventListener('click', () => {
            if (wakeLock === null) requestWakeLock();
            else releaseWakeLock();
        });
    }

    if (sidebarToggle) {
        sidebarToggle.addEventListener('change', () => {
            if (sidebarToggle.checked) {
                if (wakeLock === null) requestWakeLock();
            } else {
                if (wakeLock !== null) releaseWakeLock();
            }
        });
    }

    // Monitor status bar toggle if it's dynamic
    document.addEventListener('click', (e) => {
        if (e.target.closest('#status-wake-lock-toggle')) {
            // Give status-bar.js time to update its own state first, then sync
            setTimeout(() => {
                const isActive = document.getElementById('status-wake-lock-toggle').innerText.includes('Active');
                if (isActive && wakeLock === null) requestWakeLock();
                else if (!isActive && wakeLock !== null) releaseWakeLock();
            }, 50);
        }
    });

    // Re-acquire lock when visibility changes
    document.addEventListener('visibilitychange', async () => {
        if (wakeLock !== null && document.visibilityState === 'visible') {
            await requestWakeLock();
        }
    });

})();
