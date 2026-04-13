// Builds the "Choice Board of the Day" 3x3 grid on the homepage.
// The highlighted tile is chosen deterministically from the current date.
(function () {
    var grid = document.getElementById('stem-choice-grid');
    if (!grid) return;

    var todaysChoiceStep = document.getElementById('stem-routine-todays-choice');
    var selectedLabel = document.getElementById('stem-choice-selected-label');

    // Exactly 9 choices so the homepage grid is always 3x3.
    var choices = [
        { title: 'Movement', subtitle: 'Start Lesson 1', emoji: '🏃', href: '/movement.html' },
        { title: 'Collision', subtitle: 'Lesson 2', emoji: '💥', href: '/collision.html' },
        { title: '2-Player', subtitle: 'Lesson 3', emoji: '👥', href: '/2-player-controller.html' },
        { title: 'Projectiles', subtitle: 'Lesson 4', emoji: '🚀', href: '/lesson-4-projectiles-powerups.html' },
        { title: 'Geometry Dash', subtitle: 'Endless Runner', emoji: '💥', href: '/scratch-geometry-dash.html' },
        { title: 'Scratch Code', subtitle: 'All Tutorials', emoji: '💻', href: '/scratch-tutorials-code.html' },
        { title: 'Minecraft', subtitle: 'Explore Worlds', emoji: '⛏️', href: '/minecraft.html' },
        { title: 'Tinkercad', subtitle: '3D Design', emoji: '🧱', href: '/tinkercad-tutorials.html' },
        { title: 'MGE Experiments', subtitle: 'Play & Explore', emoji: '🧪', href: '/mge.html' }
    ];

    function dayOfYear() {
        var now = new Date();
        var start = new Date(now.getFullYear(), 0, 0);
        return Math.floor((now - start) / (1000 * 60 * 60 * 24));
    }

    var selectedIndex = choices.length ? (dayOfYear() % choices.length) : 0;
    var todaysChoice = choices[selectedIndex] || choices[0];

    // Clear any placeholder content in the grid.
    grid.innerHTML = '';

    // Render 3x3 tiles (CSS handles the grid columns).
    choices.forEach(function (choice, idx) {
        var a = document.createElement('a');
        a.href = choice.href;
        a.className = 'stem-choice-tile';
        a.setAttribute('role', 'listitem');
        a.setAttribute('aria-label', 'Open ' + choice.title);

        if (idx === selectedIndex) a.classList.add('selected');

        var emoji = document.createElement('div');
        emoji.className = 'stem-choice-emoji';
        emoji.textContent = choice.emoji;

        var title = document.createElement('div');
        title.className = 'stem-choice-title';
        title.textContent = choice.title;

        var subtitle = document.createElement('div');
        subtitle.className = 'stem-choice-subtitle';
        subtitle.textContent = choice.subtitle;

        a.appendChild(emoji);
        a.appendChild(title);
        a.appendChild(subtitle);
        grid.appendChild(a);
    });

    if (todaysChoiceStep) todaysChoiceStep.textContent = todaysChoice ? todaysChoice.title : '';
    if (selectedLabel) selectedLabel.textContent = todaysChoice ? todaysChoice.title : '';
})();

