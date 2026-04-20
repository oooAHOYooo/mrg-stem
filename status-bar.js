// Global Status Bar and Breadcrumb System
// This script generates breadcrumbs and status info for all pages

(function() {
    'use strict';

    // Page metadata mapping
    const pageInfo = {
        '/': { title: 'Home', icon: '⚡', category: 'Main' },
        '/index.html': { title: 'Home', icon: '⚡', category: 'Main' },
        '/portfolio.html': { title: 'Submit to Mr. G', icon: '📮', category: 'Portfolio' },
        '/student-work.html': { title: 'Student Work', icon: '🎨', category: 'Gallery' },
        '/featured-tutorials-archive.html': { title: 'Featured Archive', icon: '⭐', category: 'Tutorials' },
        '/lesson-plans.html': { title: 'Take Home Projects', icon: '🏠', category: 'Lessons' },
        '/coverage.html': { title: 'Coverage', icon: '📝', category: 'Admin' },
        '/portfolio': { title: 'Class Portfolios', icon: '🏫', category: 'Portfolio' },
        '/submit-portfolio.html': { title: 'Submit Project', icon: '📮', category: 'Portfolio' },
        '/scratch-tutorials.html': { title: 'Scratch Tutorials', icon: '🎮', category: 'Tutorials' },
        '/scratch-tutorials-code.html': { title: 'Scratch Code', icon: '💻', category: 'Tutorials' },
        '/movement.html': { title: 'Movement', icon: '🏃', category: 'Scratch Lessons' },
        '/collision.html': { title: 'Collision Detection', icon: '💥', category: 'Scratch Lessons' },
        '/2-player-controller.html': { title: '2-Player Controller', icon: '👥', category: 'Scratch Lessons' },
        '/lesson-4-projectiles-powerups.html': { title: 'Projectiles & Power-ups', icon: '🚀', category: 'Scratch Lessons' },
        '/scratch-geometry-dash.html': { title: 'Geometry Dash', icon: '💥', category: 'Scratch Lessons' },
        '/major-student-challenge.html': { title: 'Final Challenge', icon: '🏆', category: 'Scratch Lessons' },
        '/unreal-engine-level-design.html': { title: 'Unreal Engine', icon: '🎨', category: 'Lessons' },
        '/learn-html.html': { title: 'Build Your Empire', icon: '👑', category: 'Lessons' },
        '/mge.html': { title: 'MGE Experiments', icon: '🧪', category: 'Experiments' },
        '/admin.html': { title: 'Admin Dashboard', icon: '🔧', category: 'Admin' }
    };

    // Breadcrumb paths
    const breadcrumbPaths = {
        '/': [],
        '/index.html': [],
        '/portfolio.html': [{ path: '/', title: 'Home' }],
        '/student-work.html': [{ path: '/', title: 'Home' }],
        '/featured-tutorials-archive.html': [{ path: '/', title: 'Home' }],
        '/lesson-plans.html': [{ path: '/', title: 'Home' }],
        '/coverage.html': [{ path: '/', title: 'Home' }],
        '/portfolio': [{ path: '/', title: 'Home' }],
        '/submit-portfolio.html': [{ path: '/', title: 'Home' }, { path: '/portfolio.html', title: 'Submit to Mr. G' }],
        '/scratch-tutorials.html': [{ path: '/', title: 'Home' }],
        '/scratch-tutorials-code.html': [{ path: '/', title: 'Home' }, { path: '/scratch-tutorials.html', title: 'Scratch Tutorials' }],
        '/movement.html': [{ path: '/', title: 'Home' }, { path: '/scratch-tutorials.html', title: 'Scratch Tutorials' }],
        '/collision.html': [{ path: '/', title: 'Home' }, { path: '/scratch-tutorials.html', title: 'Scratch Tutorials' }],
        '/2-player-controller.html': [{ path: '/', title: 'Home' }, { path: '/scratch-tutorials.html', title: 'Scratch Tutorials' }],
        '/lesson-4-projectiles-powerups.html': [{ path: '/', title: 'Home' }, { path: '/scratch-tutorials.html', title: 'Scratch Tutorials' }],
        '/scratch-geometry-dash.html': [{ path: '/', title: 'Home' }, { path: '/scratch-tutorials.html', title: 'Scratch Tutorials' }],
        '/major-student-challenge.html': [{ path: '/', title: 'Home' }, { path: '/scratch-tutorials.html', title: 'Scratch Tutorials' }],
        '/unreal-engine-level-design.html': [{ path: '/', title: 'Home' }],
        '/learn-html.html': [{ path: '/', title: 'Home' }],
        '/mge.html': [{ path: '/', title: 'Home' }],
        '/admin.html': [{ path: '/', title: 'Home' }]
    };

    function getCurrentPageInfo() {
        const path = window.location.pathname;
        return pageInfo[path] || { title: 'Page', icon: '📄', category: 'Other' };
    }

    function getBreadcrumbs() {
        const path = window.location.pathname;
        return breadcrumbPaths[path] || [{ path: '/', title: 'Home' }];
    }

    function formatDate() {
        const now = new Date();
        const weekday = now.toLocaleDateString('en-US', { weekday: 'short' });
        const month = now.toLocaleDateString('en-US', { month: 'short' });
        const day = now.getDate();
        return `${weekday}, ${month} ${day}`;
    }

    function formatTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    function generateStatusBar() {
        const pageInfo = getCurrentPageInfo();
        const breadcrumbs = getBreadcrumbs();
        
        // Create breadcrumb HTML
        let breadcrumbHTML = '<div class="breadcrumb">';
        breadcrumbs.forEach((crumb, index) => {
            breadcrumbHTML += `<a href="${crumb.path}" class="breadcrumb-item">${crumb.title}</a>`;
            if (index < breadcrumbs.length - 1) {
                breadcrumbHTML += '<span class="breadcrumb-separator">›</span>';
            }
        });
        breadcrumbHTML += `<span class="breadcrumb-item active">${pageInfo.icon} ${pageInfo.title}</span>`;
        breadcrumbHTML += '</div>';

        // Create status info HTML - time under date
        const statusHTML = `
            <div class="page-status">
                <div class="status-info-group">
                    <span class="status-info">
                        <span class="icon">📅</span>
                        <span class="status-date">${formatDate()}</span>
                    </span>
                    <span class="status-info status-time-below">
                        <span class="icon">🕐</span>
                        <span class="status-time">${formatTime()}</span>
                    </span>
                </div>
                <div class="status-divider" style="width: 1px; height: 20px; background: rgba(59, 130, 246, 0.2); margin: 0 5px;"></div>
                <button class="status-wake-lock" id="status-wake-lock-toggle" title="Keep Classroom Computer Awake" style="background: none; border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 4px; padding: 2px 8px; cursor: pointer; display: flex; align-items: center; gap: 5px; color: #1e40af; font-weight: 500; font-size: 0.7rem; transition: all 0.3s ease;">
                    <span class="lock-icon">☕</span> <span class="lock-text">Stay Awake</span>
                </button>
            </div>
        `;

        return {
            breadcrumbHTML: breadcrumbHTML,
            statusHTML: statusHTML,
            pageTitle: pageInfo.title,
            pageIcon: pageInfo.icon
        };
    }

    function updateStatusBar() {
        const statusBar = document.getElementById('status-bar');
        if (!statusBar) return;

        const { breadcrumbHTML, statusHTML } = generateStatusBar();
        statusBar.innerHTML = breadcrumbHTML + statusHTML;

        // Update time every minute
        const timeElement = statusBar.querySelector('.status-time');
        if (timeElement) {
            setInterval(() => {
                timeElement.textContent = formatTime();
            }, 60000);
        }
    }

    // Wake Lock Logic for Status Bar
    let globalWakeLock = null;
    async function requestGlobalWakeLock(btn) {
        try {
            if ('wakeLock' in navigator) {
                globalWakeLock = await navigator.wakeLock.request('screen');
                btn.style.background = '#10b981';
                btn.style.color = 'white';
                btn.style.borderColor = '#10b981';
                btn.querySelector('.lock-icon').innerText = '⚡';
                btn.querySelector('.lock-text').innerText = 'Active';
            }
        } catch (err) {
            console.error(err);
        }
    }

    function releaseGlobalWakeLock(btn) {
        if (globalWakeLock !== null) {
            globalWakeLock.release();
            globalWakeLock = null;
        }
        btn.style.background = 'none';
        btn.style.color = '#1e40af';
        btn.style.borderColor = 'rgba(59, 130, 246, 0.3)';
        btn.querySelector('.lock-icon').innerText = '☕';
        btn.querySelector('.lock-text').innerText = 'Stay Awake';
    }

    function initWakeLockToggle() {
        const btn = document.getElementById('status-wake-lock-toggle');
        if (!btn) return;
        btn.addEventListener('click', () => {
            if (globalWakeLock === null) {
                requestGlobalWakeLock(btn);
            } else {
                releaseGlobalWakeLock(btn);
            }
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            updateStatusBar();
            initWakeLockToggle();
        });
    } else {
        updateStatusBar();
        initWakeLockToggle();
    }

    // Export for manual updates
    window.updateStatusBar = updateStatusBar;
    window.getCurrentPageInfo = getCurrentPageInfo;
})();
