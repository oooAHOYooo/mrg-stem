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
        date: '2026-05-13',
        title: 'Major Release: 3D Vibe Master - Music Academy!',
        gameId: '3d-beat-maker',
        icon: '🎹',
        description: 'Compose interactive music grids with the power of STEM and Music Theory!',
        updates: [
            'New Music Academy Sidebar: Real-time academic harmony analysis',
            'Dynamic Educational Labels: 3D Interval, Solfege, and Pitch billboarding',
            'Custom Scales system: Mystical Minor Pentatonic, Happy Major, and Blues presets',
            'Harmonic Step Tracker: Analyzes concurrent notes to identify musical chords',
            'Floating Particle Notation: Triggered notes visually eject up as 3D pitch tags'
        ],
        category: 'major'
    },
    {
        date: '2026-05-13',
        title: 'Major Release: STEM Kart Racing!',
        gameId: 'stem-kart',
        icon: '🏎️',
        description: 'Put vector math skills to the test in this neon-drenched 3D arcade racer!',
        updates: [
            'Dynamic Math Arches: Cross the correct arch to trigger hyper-boosts',
            'Smart AI Competitors: Battle responsive racers dynamic spacing',
            'Interactive Mini-Map: 2D canvas rendering projected from 3D Spline track',
            'Web Audio synthesis for boosts, clicks, and penalty notifications',
            'Resilient legacy rendering fallbacks for absolute reliability'
        ],
        category: 'major'
    },
    {
        date: '2026-05-12',
        title: 'New Release: Neon Space Runner!',
        gameId: 'neon-runner',
        icon: '⚡',
        description: 'Blast off into a retro-synthwave dimension in this high-speed 3D avoider!',
        updates: [
            'Silky smooth 60FPS WebGL Rendering via Three.js',
            'Responsive dynamic input: Supports mouse, touch, and arrow keys',
            'Progressive velocity speed scaling system',
            'Full 3D explosion dynamics and bank physics',
            'Atmospheric volumetric fog and retro grid illusion'
        ],
        category: 'major'
    },
    {
        date: '2026-05-12',
        title: 'New Game: Vector Launch!',
        gameId: 'vector-launch',
        icon: '🚀',
        description: 'Master the physics of parabolic trajectory in this explosive new challenge!',
        updates: [
            'Matter.js implementation for realistic elastic collisions',
            'Dynamic rubber-band launcher mechanics',
            'Vector pathway prediction line',
            '4 distinct testing chambers with varying difficulty',
            'Particle physics based explosions on direct impact'
        ],
        category: 'major'
    },
    {
        date: '2026-04-23',
        title: 'MGE v1.0.1 - Pip Labs Unleashed!',
        gameId: 'pips-lab-toggle',
        icon: '🌱',
        description: 'The secret AI agent laboratory is now officially integrated into the MGE Hub. Each Pip will eventually be tied to a real-life agent!',
        updates: [
            'Security: Password-protected Lab access (Code: pippy)',
            'Integration: Moved Pips to a dedicated "Lab" corner button',
            'Stability: Fixed production paths for high-speed Netlify performance',
            'UI: Optimized the Glade Network overlay for desktop and iPad'
        ],
        category: 'update'
    },
    {
        date: '2026-04-23',
        title: 'New Experiment: Home Flip!',
        gameId: 'home-flip',
        icon: '🏠',
        description: 'Take part in the neighborhood revitalization project!',
        updates: [
            'Buy distressed 3D properties along the main street',
            'Perform exterior cleanup and structural repairs',
            'Upgrade with modern tech and solar panels',
            'Increase specialized "Street Vibes" community score',
            'Flip houses for profit and reinvest in the neighborhood'
        ],
        category: 'major'
    },
    {
        date: '2026-04-20',
        title: 'New Sequel: Sonic 2!',
        gameId: 'sonic-2',
        icon: '🦔',
        description: 'The faster, better, and bigger sequel to Sonic Speed!',
        updates: [
            'Play as both Sonic and Tails in a low-poly 3D world',
            'Full 3-minute challenge timer with ring collection',
            'Dynamic Day & Night cycle affects sky and lighting',
            'Transform into Super Sonic at 100 rings',
            'Epic Boss Battle with the Eggmobile triggers at 100 rings'
        ],
        category: 'major'
    },
    {
        date: '2026-04-15',
        title: 'New Hub: Super Aldo 63!',
        gameId: 'super-aldo-63',
        icon: '⭐',
        description: 'Complete rebranding and transformation into a beautiful SM64-style hub.',
        updates: [
            'Implemented a full Third-Person "Aldo" controller with jump mechanics',
            'Beautiful low-poly environment with 10 interactive portal pedestals',
            'Physics-based stomp detection for interactive entities',
            'Optimized for iPad and Chromebooks with NippleJS controls',
            'Replaced the legacy Terrain Builder with this new immersive hub'
        ],
        category: 'major'
    },
    {
        date: '2026-04-01',
        title: 'New Game: Sonic Speed!',
        gameId: 'sonic-speed',
        icon: '🦔',
        description: 'Gotta go fast with the new 3D Sonic-style adventure!',
        updates: [
            'Collect 500 rings to transform into Super Sonic',
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
