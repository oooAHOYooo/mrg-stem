// What's New Blog System
// Tracks and displays new tutorials, student work, and updates

(function() {
    'use strict';

    const blogPosts = [
        {
            id: '2026-01',
            month: 'January 2026',
            date: '2026-01-15',
            title: 'New Tinkercad Portfolio Manager',
            category: 'feature',
            icon: '🌍',
            description: 'Teachers can now drag and drop Tinkercad projects with interactive 3D viewers!',
            stats: {
                tutorials: 3,
                studentWork: 12,
                portfolios: 8,
                totalProjects: 36
            },
            highlights: [
                'Interactive 3D model viewers',
                'Drag and drop project organization',
                '6x6 grid portfolio display',
                'Automatic embed URL conversion'
            ]
        },
        {
            id: '2025-12',
            month: 'December 2025',
            date: '2025-12-20',
            title: 'Scratch Collectibles Tutorial',
            category: 'tutorial',
            icon: '⭐',
            description: 'Featured tutorial on creating collectible items in Scratch games.',
            stats: {
                tutorials: 2,
                studentWork: 8,
                portfolios: 5,
                totalProjects: 15
            },
            highlights: [
                'Collision detection techniques',
                'Score system implementation',
                'Spawn logic for collectibles',
                'Game reward mechanics'
            ]
        },
        {
            id: '2025-11',
            month: 'November 2025',
            date: '2025-11-15',
            title: 'Scratch Code Tutorials Launch',
            category: 'feature',
            icon: '💻',
            description: 'New code-focused tutorials for advanced Scratch programming.',
            stats: {
                tutorials: 5,
                studentWork: 15,
                portfolios: 10,
                totalProjects: 30
            },
            highlights: [
                'Step-by-step code examples',
                'Advanced programming concepts',
                'PDF download resources',
                'Video walkthroughs'
            ]
        }
    ];

    function formatStats(stats) {
        return [
            `${stats.tutorials} new tutorial${stats.tutorials !== 1 ? 's' : ''}`,
            `${stats.studentWork} student project${stats.studentWork !== 1 ? 's' : ''}`,
            `${stats.portfolios} portfolio${stats.portfolios !== 1 ? 's' : ''} updated`,
            `${stats.totalProjects} total project${stats.totalProjects !== 1 ? 's' : ''}`
        ];
    }

    function createBlogPostHTML(post) {
        const statsList = formatStats(post.stats);
        const highlightsHTML = post.highlights.map(h => `<li>${h}</li>`).join('');
        
        return `
            <article class="whats-new-post" data-month="${post.id}">
                <div class="whats-new-header">
                    <div class="whats-new-meta">
                        <span class="whats-new-icon">${post.icon}</span>
                        <div>
                            <h3 class="whats-new-title">${post.title}</h3>
                            <div class="whats-new-date">${post.month}</div>
                        </div>
                    </div>
                    <span class="whats-new-category category-${post.category}">${post.category}</span>
                </div>
                <p class="whats-new-description">${post.description}</p>
                <div class="whats-new-stats">
                    <h4>📊 This Month's Stats:</h4>
                    <ul class="stats-list">
                        ${statsList.map(stat => `<li>${stat}</li>`).join('')}
                    </ul>
                </div>
                <div class="whats-new-highlights">
                    <h4>✨ Highlights:</h4>
                    <ul class="highlights-list">
                        ${highlightsHTML}
                    </ul>
                </div>
            </article>
        `;
    }

    function renderWhatsNew() {
        const container = document.getElementById('whats-new-container');
        if (!container) return;

        const postsHTML = blogPosts.map(post => createBlogPostHTML(post)).join('');
        container.innerHTML = postsHTML;
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderWhatsNew);
    } else {
        renderWhatsNew();
    }

    // Export for use in other scripts
    window.getWhatsNewPosts = () => blogPosts;
    window.getLatestStats = () => blogPosts[0]?.stats || {};
})();
