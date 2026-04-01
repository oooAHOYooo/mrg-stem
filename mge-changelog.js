/**
 * MGE Changelog Management
 * Tracks and displays updates to games in the Mr. Gonzalez Experiments portfolio.
 * 
 * IMPORTANT FOR AI DEVELOPERS:
 * Every time you update or upgrade a game in the MGE ecosystem (e.g. Terrain Builder, Smash, etc.),
 * you MUST add a new entry to the mgeChangelog array at the top of this file.
 * This ensures the "What's New" section on the MGE home page remains current for the students.
 */

const mgeChangelog = [
    {
        date: '2026-04-01',
        title: 'New Game: Sonic Speed!',
        gameId: 'sonic-speed',
        icon: '🦔',
        description: 'Gotta go fast with the new 3D Sonic-style adventure!',
        updates: [
            'Collect 1000 rings to transform into Super Sonic',
            'Defeat the robotic drone boss (Eggman Jr.)',
            'Acceleration-based high-speed physics system',
            'Unique grandfather clock environmental obstacles',
            'Dynamic gold-trail effects and speed boosters'
        ],
        category: 'major'
    },
    {
        date: '2026-04-01',
        title: 'New Game: Easter Egg Hunt!',
        gameId: 'easter-hunt',
        icon: '🐰',
        description: 'A magical low-poly forest adventure is here!',
        updates: [
            'Play as a cute low-poly rabbit with a basket',
            'Find all 12 hidden eggs in under 60 seconds',
            'Explore a randomly generated 3D spring forest',
            'Beautiful pastel aesthetics and particle effects',
            'Smooth third-person hopping mechanics'
        ],
        category: 'major'
    },
    {
        date: '2026-03-31',
        title: 'New Game: FPS Striker!',
        gameId: 'fps-striker',
        icon: '🎯',
        description: 'The first-ever MGE Arena Builder is here!',
        updates: [
            'Sculpt custom terrain for your battle arena',
            'Place and delete floating targets in Build Mode',
            'Full First-Person Shooter (FPS) gameplay',
            'Intense timer challenge to clear the arena',
            'Premium muzzle flash and hit effects'
        ],
        category: 'major'
    },
    {
        date: '2026-03-31',
        title: 'Robo-Path Chaos Update',
        gameId: 'robot-path-planner',
        icon: '🤖',
        description: 'Major logic overhaul for better robot control!',
        updates: [
            'All movement commands are now relative to the robot\'s facing direction',
            'Turn L/R blocks now both turn and move the robot (much more intuitive!)',
            'Fixed a bug where the Right Turn command actually turned the robot Left',
            'Updated block labels and icons for clearer logic sequencing'
        ],
        category: 'major'
    },
    {
        date: '2026-03-31',
        title: 'Terrain Builder Upgrade',
        gameId: 'terrain-editor',
        icon: '🌏',
        description: 'Major overhaul to the Terrain Builder experience!',
        updates: [
            'Dynamic shop system with car previews',
            'Low-poly day-night cycle with stars and nebulas',
            'Improved atmosphere and "vibe" enhancements',
            'Fixed mouse input conflicts for better sculpting'
        ],
        category: 'major'
    },
    {
        date: '2026-03-30',
        title: 'Aero Rangers Expansion',
        gameId: 'magic-game',
        icon: '🎈',
        description: 'Transformed into a vertical exploration mission.',
        updates: [
            'Height-based transition from ground to space',
            'New floating sky islands to discover',
            'Space-station trampoline castle added',
            'Removed enemies to focus on traversal and exploration'
        ],
        category: 'update'
    },
    {
        date: '2026-03-30',
        title: 'Minecraft Visuals Update',
        gameId: 'minecraft-clone',
        icon: '⛏️',
        description: 'Enhanced atmosphere and lighting systems.',
        updates: [
            'Dynamic background cycle (updates every 30s)',
            'Integrated day and night lighting system',
            'Performance optimizations for block placement'
        ],
        category: 'polish'
    },
    {
        date: '2026-03-30',
        title: 'STEM Skater 2-Player Mode',
        gameId: 'skaterGame',
        icon: '🛹',
        description: 'New local multiplayer functionality!',
        updates: [
            '2-Player mode toggle added',
            'Unique control schemes for both players (WASD vs Arrows)',
            'Dual score tracking UI',
            'Dynamic camera system tracking both skaters'
        ],
        category: 'major'
    },
    {
        date: '2026-03-30',
        title: 'Super Smash Fighters Polish',
        gameId: 'smash',
        icon: '⚔️',
        description: 'New combat mechanics and hazards.',
        updates: [
            'Ceiling collision hazard forces players down',
            'New combo mechanics for intensive battles',
            'Backflip-based attack animations added'
        ],
        category: 'update'
    }
];

function renderChangelog() {
    const container = document.getElementById('whats-new-container');
    if (!container) return;

    const html = mgeChangelog.map(item => `
        <div class="changelog-item" data-category="${item.category}">
            <div class="changelog-header">
                <span class="changelog-icon">${item.icon}</span>
                <div class="changelog-title-group">
                    <h4 class="changelog-title">${item.title}</h4>
                    <span class="changelog-date">${formatDate(item.date)}</span>
                </div>
                <span class="changelog-badge badge-${item.category}">${item.category.toUpperCase()}</span>
            </div>
            <p class="changelog-description">${item.description}</p>
            <ul class="changelog-updates">
                ${item.updates.map(update => `<li>${update}</li>`).join('')}
            </ul>
            <a href="#${item.gameId}" class="changelog-link">Jump to Game →</a>
        </div>
    `).join('');

    container.innerHTML = html;
}

function formatDate(dateStr) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString(undefined, options);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderChangelog);
} else {
    renderChangelog();
}
