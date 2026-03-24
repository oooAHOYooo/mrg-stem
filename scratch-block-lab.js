/* Scratch-like STEM Block Lab (no external build tools) */
(function () {
  'use strict';

  const $ = (id) => document.getElementById(id);

  const canvas = $('bc-canvas');
  const ctx = canvas ? canvas.getContext('2d') : null;

  const elToast = $('bc-toast');
  const elChat = $('bc-chat');
  const elChapterTitle = $('bc-chapter-title');
  const elObjective = $('bc-objective');
  const elStepMode = $('bc-step-mode');
  const elMovesCount = $('bc-moves-count');
  const elActionsCount = $('bc-actions-count');

  const elPalette = $('bc-palette');
  const elScript = $('bc-script');

  const btnRun = $('bc-run');
  const btnStep = $('bc-step');
  const btnClear = $('bc-clear');
  const btnRestart = $('bc-restart');
  const btnSave = $('bc-save');
  const btnExport = $('bc-export');
  const elAgentProgress = $('bc-agent-progress');

  const elChoiceModal = $('bc-choice-modal');
  const elUsePlan = $('bc-use-plan');
  const elPlanHelp = $('bc-plan-help');
  const elPlanHelpText = $('bc-plan-help-text');

  if (!canvas || !ctx || !elChat) {
    // Page not loaded correctly.
    return;
  }

  // ---------- Toast ----------
  function showToast(msg, isError = false) {
    if (!elToast) return;
    elToast.textContent = msg;
    elToast.style.background = isError ? '#fb923c' : '#34d399';
    elToast.classList.add('show');
    window.setTimeout(() => elToast.classList.remove('show'), 2600);
  }

  // ---------- Chat ----------
  function addRobotMessage(html) {
    const msg = document.createElement('div');
    msg.className = 'bc-msg';
    msg.innerHTML = `
      <div class="bc-avatar">🤖</div>
      <div class="bc-msg-content">${html}</div>
    `;
    elChat.appendChild(msg);
    elChat.scrollTop = elChat.scrollHeight;
  }

  function addDivider() {
    const d = document.createElement('div');
    d.style.height = '1px';
    d.style.background = 'rgba(167, 139, 250, 0.18)';
    elChat.appendChild(d);
  }

  // ---------- World / Maps ----------
  // Characters:
  // '#' wall, '.' empty, 'S' start, 'G' goal
  const MAPS = {
    // Chapter 1: straight line
    seq: [
      '#######',
      '#.....#',
      '#.....#',
      '#S...G#',
      '#.....#',
      '#.....#',
      '#######'
    ],
    // Chapter 2: path planning with a single main turn
    plan: [
      '#######',
      '#...#G#',
      '#.###.#',
      '#...#.#',
      '###.#.#',
      '#S....#',
      '#######'
    ],
    // Chapter 3: line to use Repeat(count)
    algo: [
      '#######',
      '#S..G##',
      '#.....#',
      '#.....#',
      '#.....#',
      '#.....#',
      '#######'
    ],
    // Chapter 4: mission A (Neon Maze)
    missionA: [
      '#########',
      '#..#...G#',
      '#..#.#..#',
      '#.......#',
      '#.####..#',
      '#...#...#',
      '#.#...#.#',
      '#S....#.#',
      '#########'
    ],
    // Chapter 4: mission B (mirrored)
    missionB: [
      '#########',
      '#G...#..#',
      '#..#.#..#',
      '#.......#',
      '#..####.#',
      '#...#...#',
      '#.#...#.#',
      '#.#....S#',
      '#########'
    ],
    // Chapter 5: debug map (simple, fails quickly if turn is wrong)
    debug: [
      '#######',
      '#..G..#',
      '#.###.#',
      '#...#.#',
      '#.#...#',
      '#S..#.#',
      '#######'
    ]
  };

  const DIR = { N: 0, E: 1, S: 2, W: 3 };
  const DIR_VECS = {
    0: { x: 0, y: -1 }, // N
    1: { x: 1, y: 0 }, // E
    2: { x: 0, y: 1 }, // S
    3: { x: -1, y: 0 } // W
  };

  function parseMap(grid) {
    const h = grid.length;
    const w = grid[0].length;
    let start = null;
    let goal = null;
    const walls = [];
    for (let y = 0; y < h; y++) {
      const row = grid[y];
      for (let x = 0; x < w; x++) {
        const c = row[x];
        if (c === '#') walls.push(`${x},${y}`);
        if (c === 'S') start = { x, y };
        if (c === 'G') goal = { x, y };
      }
    }
    return { w, h, walls: new Set(walls), start, goal };
  }

  // ---------- Blocks ----------
  let nextBlockId = 1;
  function newId() {
    return nextBlockId++;
  }

  // Block schema:
  // { id, type:'move' } // forward 1
  // { id, type:'turn', side:'left'|'right' }
  // { id, type:'repeat', count:number, children:[Block] }

  function makeMoveBlock() {
    return { id: newId(), type: 'move' };
  }
  function makeTurnBlock(side) {
    return { id: newId(), type: 'turn', side };
  }
  function makeRepeatBlock(count, children) {
    return { id: newId(), type: 'repeat', count, children: children || [] };
  }

  let game = {
    missionId: 'A',
    chapter: 0,
    // script is an array of blocks at top-level
    script: [],
    // pending actions for step mode
    stepState: null,
    // for animation
    running: false,
    // plan chapter
    planning: {
      tiles: [],
      finished: false
    },
    // robot log (for export)
    notes: []
  };

  // ---------- Rendering ----------
  function resizeCanvasToGrid(map) {
    // Set internal resolution for crisp drawing.
    const maxPx = 520;
    const cell = Math.floor(maxPx / Math.max(map.w, map.h));
    const cellSize = Math.max(26, Math.min(54, cell));
    canvas.width = map.w * cellSize;
    canvas.height = map.h * cellSize;
    // Keep CSS scaling handled by .bc-canvas.
    return cellSize;
  }

  function dirToArrow(dir) {
    return dir === DIR.N ? '↑' : dir === DIR.E ? '→' : dir === DIR.S ? '↓' : '←';
  }

  function drawWorld(map, actor, highlightCells, pathTiles) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const cellSize = Math.floor(canvas.width / map.w);

    // Background
    ctx.fillStyle = 'rgba(0,0,0,0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grid tiles
    for (let y = 0; y < map.h; y++) {
      for (let x = 0; x < map.w; x++) {
        const px = x * cellSize;
        const py = y * cellSize;
        const key = `${x},${y}`;
        const isWall = map.walls.has(key);
        let fill = 'rgba(167,139,250,0.08)';
        let stroke = 'rgba(167,139,250,0.12)';
        if (isWall) {
          fill = 'rgba(17, 24, 39, 0.9)';
          stroke = 'rgba(148,163,184,0.2)';
        }
        ctx.fillStyle = fill;
        ctx.fillRect(px, py, cellSize, cellSize);
        ctx.strokeStyle = stroke;
        ctx.strokeRect(px + 0.5, py + 0.5, cellSize - 1, cellSize - 1);
      }
    }

    // Goal
    if (map.goal) {
      const px = map.goal.x * cellSize;
      const py = map.goal.y * cellSize;
      ctx.fillStyle = 'rgba(52,211,153,0.9)';
      ctx.fillRect(px + 6, py + 6, cellSize - 12, cellSize - 12);
      ctx.strokeStyle = 'rgba(52,211,153,1)';
      ctx.lineWidth = 2;
      ctx.strokeRect(px + 6, py + 6, cellSize - 12, cellSize - 12);
      // Star
      ctx.fillStyle = '#071a12';
      ctx.font = `${Math.floor(cellSize * 0.55)}px Inter, system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('★', px + cellSize / 2, py + cellSize / 2 + 1);
    }

    // Planning path
    if (pathTiles && pathTiles.length > 0) {
      ctx.fillStyle = 'rgba(52,211,153,0.18)';
      for (const t of pathTiles) {
        const px = t.x * cellSize;
        const py = t.y * cellSize;
        ctx.fillRect(px + 4, py + 4, cellSize - 8, cellSize - 8);
      }
    }

    // Highlights
    if (highlightCells) {
      ctx.fillStyle = 'rgba(251,146,60,0.22)';
      for (const t of highlightCells) {
        const px = t.x * cellSize;
        const py = t.y * cellSize;
        ctx.fillRect(px + 3, py + 3, cellSize - 6, cellSize - 6);
      }
    }

    // Actor
    if (actor) {
      const px = actor.x * cellSize;
      const py = actor.y * cellSize;
      // Body
      ctx.fillStyle = 'rgba(167,139,250,0.95)';
      ctx.fillRect(px + 8, py + 8, cellSize - 16, cellSize - 16);
      // Face direction
      ctx.strokeStyle = 'rgba(255,255,255,0.45)';
      ctx.lineWidth = 2;
      ctx.strokeRect(px + 7, py + 7, cellSize - 14, cellSize - 14);
      ctx.fillStyle = '#0f111a';
      ctx.font = `${Math.floor(cellSize * 0.55)}px Inter, system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(dirToArrow(actor.dir), px + cellSize / 2, py + cellSize / 2 + 1);
    }
  }

  // ---------- Script <-> actions ----------
  function buildActionList(blocks, originLabel) {
    // Each action is { kind:'move'|'turn', side?, blockId }
    const actions = [];
    function walk(list) {
      for (const b of list) {
        if (b.type === 'move') {
          actions.push({ kind: 'move', blockId: b.id, origin: originLabel || 'move' });
        } else if (b.type === 'turn') {
          actions.push({ kind: 'turn', side: b.side, blockId: b.id, origin: originLabel || 'turn' });
        } else if (b.type === 'repeat') {
          // Repeat contains only simple blocks in this game.
          const count = Math.max(0, Math.min(20, Number(b.count) || 0));
          for (let i = 0; i < count; i++) {
            walk(b.children || []);
          }
        }
      }
    }
    walk(blocks || []);
    return actions;
  }

  function runActions({ map, scriptBlocks, startActor }, { onStep, onDone } = {}) {
    // Returns a promise-like result for animation control.
    const actions = buildActionList(scriptBlocks);
    const actor = { ...startActor };
    let moves = 0;
    let actionsDone = 0;
    for (let i = 0; i < actions.length; i++) {
      const a = actions[i];
      actionsDone++;
      if (onStep) onStep({ i, action: a, actor: { ...actor }, moves, actionsDone });

      if (a.kind === 'turn') {
        actor.dir = (actor.dir + (a.side === 'left' ? 3 : 1)) % 4;
        continue;
      }

      if (a.kind === 'move') {
        const vec = DIR_VECS[actor.dir];
        const nx = actor.x + vec.x;
        const ny = actor.y + vec.y;
        const key = `${nx},${ny}`;
        if (nx < 0 || ny < 0 || nx >= map.w || ny >= map.h || map.walls.has(key)) {
          const err = {
            type: 'WALL',
            message: `Ouch! Your character bumped into a wall.`,
            failedBlockId: a.blockId,
            failedAt: { x: nx, y: ny }
          };
          return { ok: false, err, actor, moves, actionsDone };
        }
        actor.x = nx;
        actor.y = ny;
        moves++;

        if (onStep) {
          // Let the animator see the post-move position.
          onStep({ i, action: a, actor: { ...actor }, moves, actionsDone, after: true });
        }
      }
    }
    return { ok: true, actor, moves, actionsDone };
  }

  // ---------- Validation ----------
  function isAtGoal(actor, map) {
    return map.goal && actor.x === map.goal.x && actor.y === map.goal.y;
  }

  // ---------- UI: Palette ----------
  const PALETTE = {
    move: {
      label: 'Move',
      emoji: '⬆️',
      type: 'move'
    },
    left: {
      label: 'Turn Left',
      emoji: '↩️',
      type: 'turn',
      side: 'left'
    },
    right: {
      label: 'Turn Right',
      emoji: '↪️',
      type: 'turn',
      side: 'right'
    },
    repeat: {
      label: 'Repeat',
      emoji: '🔁',
      type: 'repeat'
    }
  };

  function setPalette(allowed) {
    elPalette.innerHTML = '';
    const list = [];
    if (allowed.move) list.push(PALETTE.move);
    if (allowed.turnLeft) list.push(PALETTE.left);
    if (allowed.turnRight) list.push(PALETTE.right);
    if (allowed.repeat) list.push(PALETTE.repeat);

    for (const item of list) {
      const btn = document.createElement('button');
      btn.className = 'bc-block-btn';
      btn.type = 'button';
      btn.innerHTML = `<span style="font-size:1.15rem">${item.emoji}</span><span>${item.label}</span>`;
      btn.addEventListener('click', () => onPaletteAdd(item));
      elPalette.appendChild(btn);
    }
  }

  // ---------- UI: Script rendering ----------
  function renderScript() {
    // If the script changes, any existing Step action queue is stale.
    game.stepState = null;
    clearHighlights();

    elScript.innerHTML = '';
    if (!game.script || game.script.length === 0) {
      const div = document.createElement('div');
      div.className = 'bc-script-empty';
      div.textContent = 'Your script will appear here. Click blocks on the left to assemble!';
      elScript.appendChild(div);
      return;
    }

    const frag = document.createDocumentFragment();
    game.script.forEach((b, idx) => {
      frag.appendChild(renderBlock(b, { parent: game.script, index: idx }));
    });
    elScript.appendChild(frag);
  }

  function blockTypeColor(b) {
    if (b.type === 'move') return { border: 'rgba(52,211,153,0.6)', bg: 'rgba(52,211,153,0.12)' };
    if (b.type === 'turn') return { border: 'rgba(147,197,253,0.65)', bg: 'rgba(59,130,246,0.12)' };
    if (b.type === 'repeat') return { border: 'rgba(167,139,250,0.75)', bg: 'rgba(167,139,250,0.12)' };
    return { border: 'rgba(255,255,255,0.2)', bg: 'rgba(255,255,255,0.03)' };
  }

  function renderBlock(b, ctxInfo) {
    const wrap = document.createElement('div');
    wrap.className = 'bc-block-card';
    wrap.dataset.blockId = String(b.id);

    const col = blockTypeColor(b);
    wrap.style.borderColor = col.border;
    wrap.style.background = col.bg;

    const header = document.createElement('div');
    header.className = 'bc-block-row';

    const left = document.createElement('div');
    left.className = 'bc-block-label';
    if (b.type === 'move') left.textContent = 'Move Forward 1';
    if (b.type === 'turn') left.textContent = b.side === 'left' ? 'Turn Left' : 'Turn Right';
    if (b.type === 'repeat') left.textContent = `Repeat ${b.count}x`;

    const right = document.createElement('div');
    right.className = 'bc-block-actions';

    const btnUp = document.createElement('button');
    btnUp.className = 'bc-icon-btn';
    btnUp.type = 'button';
    btnUp.textContent = '↑';
    btnUp.title = 'Move up';
    btnUp.disabled = !ctxInfo || ctxInfo.index === 0;
    btnUp.addEventListener('click', () => moveBlockInParent(ctxInfo.parent, ctxInfo.index, ctxInfo.index - 1));

    const btnDown = document.createElement('button');
    btnDown.className = 'bc-icon-btn';
    btnDown.type = 'button';
    btnDown.textContent = '↓';
    btnDown.title = 'Move down';
    btnDown.disabled = !ctxInfo || ctxInfo.index === ctxInfo.parent.length - 1;
    btnDown.addEventListener('click', () => moveBlockInParent(ctxInfo.parent, ctxInfo.index, ctxInfo.index + 1));

    const btnDel = document.createElement('button');
    btnDel.className = 'bc-icon-btn';
    btnDel.type = 'button';
    btnDel.textContent = '✕';
    btnDel.title = 'Remove';
    btnDel.addEventListener('click', () => removeBlockInParent(ctxInfo.parent, ctxInfo.index));

    if (b.type === 'repeat') {
      // Repeat blocks get different behavior; Up/Down/Delete are still fine.
      right.appendChild(btnUp);
      right.appendChild(btnDown);
      right.appendChild(btnDel);
    } else {
      right.appendChild(btnUp);
      right.appendChild(btnDown);
      right.appendChild(btnDel);
    }

    header.appendChild(left);
    header.appendChild(right);

    wrap.appendChild(header);

    // Repeat editing
    if (b.type === 'repeat') {
      const meta = document.createElement('div');
      meta.className = 'bc-block-meta';
      meta.textContent = 'Inside this loop: your blocks run again and again.';
      wrap.appendChild(meta);

      const inner = document.createElement('div');
      inner.className = 'bc-block-inner';

      const innerTitle = document.createElement('div');
      innerTitle.className = 'bc-block-inner-title';
      innerTitle.textContent = 'Loop Body';
      inner.appendChild(innerTitle);

      const innerList = document.createElement('div');
      innerList.style.display = 'flex';
      innerList.style.flexDirection = 'column';
      innerList.style.gap = '0.5rem';

      const children = b.children || [];
      if (children.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'bc-script-empty';
        empty.textContent = 'Add blocks to run inside Repeat.';
        innerList.appendChild(empty);
      } else {
        children.forEach((child, cIdx) => {
          const childCard = renderBlock(child, { parent: b.children, index: cIdx });
          childCard.style.margin = '0';
          innerList.appendChild(childCard);
        });
      }

      inner.appendChild(innerList);

      const addRow = document.createElement('div');
      addRow.style.display = 'flex';
      addRow.style.flexWrap = 'wrap';
      addRow.style.gap = '0.55rem';
      addRow.style.marginTop = '0.7rem';

      const dec = document.createElement('button');
      dec.className = 'bc-btn';
      dec.type = 'button';
      dec.textContent = '-';
      dec.style.padding = '0.4rem 0.7rem';
      dec.addEventListener('click', () => {
        b.count = Math.max(0, (Number(b.count) || 0) - 1);
        renderScript();
      });

      const inc = document.createElement('button');
      inc.className = 'bc-btn';
      inc.type = 'button';
      inc.textContent = '+';
      inc.style.padding = '0.4rem 0.7rem';
      inc.addEventListener('click', () => {
        b.count = Math.min(20, (Number(b.count) || 0) + 1);
        renderScript();
      });

      const addMove = document.createElement('button');
      addMove.className = 'bc-btn';
      addMove.type = 'button';
      addMove.textContent = '⬆️ Add Move';
      addMove.addEventListener('click', () => {
        b.children = b.children || [];
        b.children.push(makeMoveBlock());
        renderScript();
      });

      const addTurnLeft = document.createElement('button');
      addTurnLeft.className = 'bc-btn';
      addTurnLeft.type = 'button';
      addTurnLeft.textContent = '↩️ Add Turn Left';
      addTurnLeft.addEventListener('click', () => {
        b.children = b.children || [];
        b.children.push(makeTurnBlock('left'));
        renderScript();
      });

      const addTurnRight = document.createElement('button');
      addTurnRight.className = 'bc-btn';
      addTurnRight.type = 'button';
      addTurnRight.textContent = '↪️ Add Turn Right';
      addTurnRight.addEventListener('click', () => {
        b.children = b.children || [];
        b.children.push(makeTurnBlock('right'));
        renderScript();
      });

      addRow.appendChild(dec);
      addRow.appendChild(inc);
      addRow.appendChild(addMove);
      addRow.appendChild(addTurnLeft);
      addRow.appendChild(addTurnRight);

      inner.appendChild(addRow);
      wrap.appendChild(inner);
    }

    return wrap;
  }

  function moveBlockInParent(parent, fromIdx, toIdx) {
    if (!parent) return;
    if (toIdx < 0 || toIdx >= parent.length) return;
    const tmp = parent[fromIdx];
    parent[fromIdx] = parent[toIdx];
    parent[toIdx] = tmp;
    renderScript();
  }

  function removeBlockInParent(parent, idx) {
    if (!parent) return;
    if (idx < 0 || idx >= parent.length) return;
    parent.splice(idx, 1);
    renderScript();
  }

  // ---------- Palette add ----------
  function onPaletteAdd(item) {
    if (game.chapter === 0) return;
    if (elChoiceModal && elChoiceModal.style.display !== 'none') return;

    if (game.chapter === 2) {
      // Planning mode: they should click tiles instead of blocks.
      showToast('Plan the path by clicking tiles on the grid.', true);
      return;
    }

    // Chapter 1 allows only Move for the "sequence" lesson.
    if (game.chapter === 1 && item.type !== 'move') {
      showToast('For this mission, only use Move Forward blocks!', true);
      return;
    }

    if (item.type === 'move') {
      game.script.push(makeMoveBlock());
      renderScript();
      return;
    }

    if (item.type === 'turn') {
      game.script.push(makeTurnBlock(item.side));
      renderScript();
      return;
    }

    if (item.type === 'repeat') {
      // Repeat starts empty; students add inner blocks.
      game.script.push(makeRepeatBlock(2, []));
      renderScript();
    }
  }

  // ---------- Execution / Step mode ----------
  function clearHighlights() {
    const cards = elScript.querySelectorAll('.bc-block-card');
    cards.forEach((c) => c.classList.remove('highlight'));
  }

  function highlightBlock(blockId) {
    clearHighlights();
    if (!blockId) return;
    const el = elScript.querySelector(`.bc-block-card[data-block-id="${blockId}"]`);
    if (el) el.classList.add('highlight');
  }

  let activeMap = null;
  let actor = null;
  let cellSize = 40;

  function resetActorForChapter() {
    actor = { ...activeMap.start, dir: getStartDirForChapter() };
    // default starting dir depends on chapter
  }

  function getStartDirForChapter() {
    if (game.chapter === 1) return DIR.E;
    if (game.chapter === 2) return DIR.E;
    if (game.chapter === 3) return DIR.E;
    if (game.chapter === 4) return game.missionId === 'A' ? DIR.N : DIR.N;
    // debug
    return DIR.N;
  }

  async function runAuto() {
    if (game.running) return;
    if (game.chapter === 0) return;
    if (game.chapter === 2 && !game.planning.finished) return;
    if (!activeMap) return;
    if (!game.script || game.script.length === 0) {
      showToast('Add some blocks first!', true);
      return;
    }

    game.running = true;
    btnRun.disabled = true;
    btnStep.disabled = true;

    const startActor = { ...actor };
    const actions = buildActionList(game.script);
    let moves = 0;
    let actionsDone = 0;
    let lastTurnBlockId = null;

    clearHighlights();
    elMovesCount.textContent = '0';
    elActionsCount.textContent = '0';
    elStepMode.textContent = 'Auto';

    for (let i = 0; i < actions.length; i++) {
      const a = actions[i];
      highlightBlock(a.blockId);

      // Apply action
      if (a.kind === 'turn') {
        actor.dir = (actor.dir + (a.side === 'left' ? 3 : 1)) % 4;
        lastTurnBlockId = a.blockId;
      } else if (a.kind === 'move') {
        const vec = DIR_VECS[actor.dir];
        const nx = actor.x + vec.x;
        const ny = actor.y + vec.y;
        const key = `${nx},${ny}`;
        if (nx < 0 || ny < 0 || nx >= activeMap.w || ny >= activeMap.h || activeMap.walls.has(key)) {
          // Failed
          drawWorld(activeMap, actor, [{ x: nx, y: ny }], game.planning.tiles);
          game.running = false;
          btnRun.disabled = false;
          btnStep.disabled = false;
          if (lastTurnBlockId) highlightBlock(lastTurnBlockId);
          const msg = lastTurnBlockId
            ? 'Debug time! Your move hit a wall. The highlighted Turn is probably wrong.'
            : 'Debug time! Your move hit a wall. Try editing the highlighted block.';
          showToast(msg, true);
          addRobotMessage(`<strong>Robot:</strong> ${msg}<br><br>Try editing the highlighted block.`);
          return;
        }
        actor.x = nx;
        actor.y = ny;
        moves++;
      }

      actionsDone = i + 1;
      elMovesCount.textContent = String(moves);
      elActionsCount.textContent = String(actionsDone);

      drawWorld(activeMap, actor, null, game.chapter === 2 ? game.planning.tiles : null);

      // Short delay for animation clarity
      // eslint-disable-next-line no-await-in-loop
      await new Promise((r) => window.setTimeout(r, 220));
    }

    // Done
    game.running = false;
    btnRun.disabled = false;
    btnStep.disabled = false;

    const atGoal = isAtGoal(actor, activeMap);
    if (atGoal) {
      showToast('Nice! You reached the goal!', false);
      addRobotMessage(`<strong>Robot:</strong> You hit the star! That means your algorithm works. 🎉`);
      await onChapterComplete();
    } else {
      showToast('Not quite. Try again!', true);
      addRobotMessage(`<strong>Robot:</strong> You ran your code, but you did not reach the goal. Check your turns and repeats.`);
    }
  }

  function ensureStepState() {
    const startActor = { ...actor };
    const actions = buildActionList(game.script);
    if (!actions || actions.length === 0) {
      showToast('Add blocks first!', true);
      return false;
    }
    game.stepState = {
      startActor,
      actions,
      index: 0,
      moves: 0,
      actionsDone: 0,
      lastTurnBlockId: null
    };
    // Reset actor for step execution
    actor = { ...startActor };
    clearHighlights();
    elMovesCount.textContent = '0';
    elActionsCount.textContent = '0';
    elStepMode.textContent = 'Step';
    return true;
  }

  function stepOnce() {
    if (game.chapter === 0) return;
    if (game.chapter === 2 && !game.planning.finished) return;
    if (!activeMap) return;
    if (!game.script || game.script.length === 0) return;

    if (!game.stepState) {
      const ok = ensureStepState();
      if (!ok) return;
    }

    const st = game.stepState;
    if (st.index >= st.actions.length) {
      showToast('Step finished. Press Run or restart step.', false);
      return;
    }

    const a = st.actions[st.index];
    highlightBlock(a.blockId);

    if (a.kind === 'turn') {
      actor.dir = (actor.dir + (a.side === 'left' ? 3 : 1)) % 4;
      st.lastTurnBlockId = a.blockId;
    } else if (a.kind === 'move') {
      const vec = DIR_VECS[actor.dir];
      const nx = actor.x + vec.x;
      const ny = actor.y + vec.y;
      const key = `${nx},${ny}`;
      if (nx < 0 || ny < 0 || nx >= activeMap.w || ny >= activeMap.h || activeMap.walls.has(key)) {
        drawWorld(activeMap, actor, [{ x: nx, y: ny }], game.planning.tiles);
        if (st.lastTurnBlockId) highlightBlock(st.lastTurnBlockId);
        showToast('Wall hit! Fix the highlighted Turn/Block.', true);
        addRobotMessage(`<strong>Robot:</strong> Your next move hits a wall. Edit the highlighted Turn/Block.`);
        // Stop stepping (keep stepState, but user can run again or reset).
        return;
      }
      actor.x = nx;
      actor.y = ny;
      st.moves++;
    }

    st.actionsDone = st.index + 1;
    st.index++;

    elMovesCount.textContent = String(st.moves);
    elActionsCount.textContent = String(st.actionsDone);

    drawWorld(activeMap, actor, null, game.chapter === 2 ? game.planning.tiles : null);

    if (st.index >= st.actions.length) {
      game.stepState = null;
      const atGoal = isAtGoal(actor, activeMap);
      if (atGoal) {
        showToast('Nice! You reached the goal!', false);
        addRobotMessage(`<strong>Robot:</strong> You reached the star by stepping through your code. ✅`);
        onChapterComplete();
      } else {
        showToast('Not yet. Try stepping again or run.', true);
        addRobotMessage(`<strong>Robot:</strong> After all steps, you still did not reach the goal.`);
      }
    }
  }

  // ---------- Chapter flow ----------
  const CHAPTERS = [
    { title: 'Choice Board', objective: 'Pick a mission. Then build blocks like Scratch!' },
    { title: 'Build a Sequence', objective: 'Assemble a Move sequence to reach the star.' },
    { title: 'Plan a Path', objective: 'Click a valid path tile-by-tile to plan your moves.' },
    { title: 'Design an Algorithm', objective: 'Use a Repeat block. Choose the right count!' },
    { title: 'Code a Character', objective: 'Build a script to guide the character through the maze.' },
    { title: 'Debug Simple Code', objective: 'A tiny bug is hiding in the script. Fix it!' },
    { title: 'Mission Complete', objective: 'Nice work! Your STEM algorithm is working.' }
  ];

  function resetChapterState() {
    game.script = [];
    game.stepState = null;
    game.running = false;
    game.planning.tiles = [];
    game.planning.finished = false;
    clearHighlights();
    elStepMode.textContent = 'Auto';
    elMovesCount.textContent = '0';
    elActionsCount.textContent = '0';
  }

  function setPlanUI(show) {
    if (!elPlanHelp || !elUsePlan) return;
    elPlanHelp.style.display = show ? 'flex' : 'none';
    elUsePlan.style.display = show ? 'inline-flex' : 'none';
  }

  function setChapter(newChapter) {
    game.chapter = newChapter;
    const c = CHAPTERS[newChapter];
    elChapterTitle.textContent = c.title;
    elObjective.textContent = c.objective;
    elUsePlan && (elUsePlan.disabled = true);
    resetChapterState();

    // Adjust palette by chapter.
    if (newChapter === 0) {
      setPalette({ move: false, turnLeft: false, turnRight: false, repeat: false });
      setPlanUI(false);
      return;
    }

    if (newChapter === 1) {
      setPalette({ move: true, turnLeft: false, turnRight: false, repeat: false });
      setPlanUI(false);
      addDivider();
      addRobotMessage(`Alright! Let’s do <strong>Build a Sequence</strong>.<br><br><strong>Goal:</strong> Use only <em>Move Forward</em> blocks to reach the star.`);
      activeMap = parseMap(MAPS.seq);
      resizeCanvasToGrid(activeMap);
      resetActorForChapter();
      drawWorld(activeMap, actor, null, null);
      renderScript();
      return;
    }

    if (newChapter === 2) {
      setPalette({ move: false, turnLeft: false, turnRight: false, repeat: false });
      setPlanUI(true);
      addDivider();
      addRobotMessage(`Next: <strong>Plan a Path</strong>!<br><br>Don’t code yet. Click tiles on the grid to draw your path from <strong>Start</strong> to <strong>Star</strong>.`);

      activeMap = parseMap(MAPS.plan);
      resizeCanvasToGrid(activeMap);
      resetActorForChapter();
      drawWorld(activeMap, actor, null, []);
      renderScript();

      // Prepare planning path
      game.planning.tiles = [{ x: activeMap.start.x, y: activeMap.start.y }];
      updatePlanUI();
      drawWorld(activeMap, actor, null, game.planning.tiles);
      return;
    }

    if (newChapter === 3) {
      setPalette({ move: true, turnLeft: true, turnRight: true, repeat: true });
      setPlanUI(false);
      addDivider();
      addRobotMessage(`Now for <strong>Design an Algorithm</strong>!<br><br>Instead of many moves, use a <strong>Repeat</strong> block. Your mission will test if the count is correct.`);

      activeMap = parseMap(MAPS.algo);
      resizeCanvasToGrid(activeMap);
      resetActorForChapter();
      drawWorld(activeMap, actor, null, null);

      // Show algorithm cards in chat (simple buttons via DOM)
      renderAlgorithmChoice();
      renderScript();
      return;
    }

    if (newChapter === 4) {
      setPalette({ move: true, turnLeft: true, turnRight: true, repeat: true });
      setPlanUI(false);
      addDivider();
      addRobotMessage(`Chapter 4: <strong>Code a Character</strong>!<br><br>Build your script to reach the star in this maze. Pro tip: <strong>Repeat</strong> can save blocks!`);
      activeMap = parseMap(game.missionId === 'A' ? MAPS.missionA : MAPS.missionB);
      resizeCanvasToGrid(activeMap);
      resetActorForChapter();
      drawWorld(activeMap, actor, null, null);
      renderScript();
      return;
    }

    if (newChapter === 5) {
      setPalette({ move: true, turnLeft: true, turnRight: true, repeat: true });
      setPlanUI(false);
      addDivider();
      addRobotMessage(`Final challenge: <strong>Debug Simple Code</strong>!<br><br>I loaded a script with a tiny bug. Run it and fix what’s wrong.`);
      activeMap = parseMap(MAPS.debug);
      resizeCanvasToGrid(activeMap);
      resetActorForChapter();
      // Preload broken script
      loadDebugBrokenScript();
      drawWorld(activeMap, actor, null, null);
      renderScript();
      return;
    }

    if (newChapter === 6) {
      setPalette({ move: false, turnLeft: false, turnRight: false, repeat: false });
      setPlanUI(false);
      addDivider();
      addRobotMessage(`Want to review your work? Use <strong>Export</strong> to download your script notes.`);
      activeMap = null;
      renderScript();
      return;
    }
  }

  function renderAlgorithmChoice() {
    const existing = $('bc-algo-choices');
    if (existing) existing.remove();

    const wrap = document.createElement('div');
    wrap.id = 'bc-algo-choices';
    wrap.style.display = 'flex';
    wrap.style.flexDirection = 'column';
    wrap.style.gap = '0.6rem';
    wrap.style.marginTop = '0.7rem';

    const hint = document.createElement('div');
    hint.className = 'bc-hint-bar';
    hint.innerHTML = `<span>Robot’s Toy Note:</span><small>Pick the algorithm that reaches the star.</small>`;
    wrap.appendChild(hint);

    const cardA = document.createElement('button');
    cardA.className = 'bc-block-btn';
    cardA.type = 'button';
    cardA.style.borderColor = 'rgba(52,211,153,0.4)';
    cardA.innerHTML = `<span style="font-size:1.15rem">✅</span><span><strong>Algorithm A</strong><br><span style="font-weight:900;color:#94a3b8">Repeat 3 times: Move</span></span>`;
    cardA.addEventListener('click', () => {
      game.script = [makeRepeatBlock(3, [makeMoveBlock()])];
      renderScript();
      addRobotMessage(`<strong>Robot:</strong> You chose Algorithm A. Press <strong>Run</strong> to test it.`);
    });
    wrap.appendChild(cardA);

    const cardB = document.createElement('button');
    cardB.className = 'bc-block-btn';
    cardB.type = 'button';
    cardB.style.borderColor = 'rgba(251,146,60,0.35)';
    cardB.innerHTML = `<span style="font-size:1.15rem">❌</span><span><strong>Algorithm B</strong><br><span style="font-weight:900;color:#94a3b8">Repeat 2 times: Move</span></span>`;
    cardB.addEventListener('click', () => {
      game.script = [makeRepeatBlock(2, [makeMoveBlock()])];
      renderScript();
      addRobotMessage(`<strong>Robot:</strong> You chose Algorithm B. Press <strong>Run</strong> to test it.`);
    });
    wrap.appendChild(cardB);

    // Put cards into the last robot message area by just appending to chat.
    elChat.appendChild(wrap);
    elChat.scrollTop = elChat.scrollHeight;
  }

  function updatePlanUI() {
    if (!elUsePlan) return;
    const canUse = game.planning.tiles && game.planning.tiles.length > 1;
    elUsePlan.disabled = !canUse || !game.planning.finished;
    if (elPlanHelpText) {
      elPlanHelpText.textContent = game.planning.finished
        ? 'Path looks good! Press “Use Plan” to build blocks.'
        : 'Click adjacent tiles from Start to Star.';
    }
  }

  function loadDebugBrokenScript() {
    // Correct would be: Repeat 4 Move; Turn Right; Repeat 2 Move
    // Bug: Turn Left instead of Right.
    const repeat4 = makeRepeatBlock(4, [makeMoveBlock()]);
    const repeat2 = makeRepeatBlock(2, [makeMoveBlock()]);
    const wrongTurn = makeTurnBlock('left'); // BUG
    game.script = [repeat4, wrongTurn, repeat2];
  }

  async function onChapterComplete() {
    // Small pause for UX
    await new Promise((r) => window.setTimeout(r, 450));

    const next = game.chapter + 1;
    if (next > 6) return;

    if (game.chapter === 5) {
      game.notes.push('Completed: Mission');
      setChapter(6);
      addRobotMessage(`<strong>Robot:</strong> Mission complete! You used sequence planning, algorithms, block assembly, coding, and debugging. That’s real STEM learning. ✅`);
      showToast('Mission Complete! Great job!', false);
      return;
    }

    // Advance + notes
    if (next === 2) game.notes.push('Completed: Build a Sequence');
    if (next === 3) game.notes.push('Completed: Plan a Path');
    if (next === 4) game.notes.push('Completed: Design an Algorithm');
    if (next === 5) game.notes.push('Completed: Code a Character');
    if (next === 6) game.notes.push('Completed: Debug Simple Code');

    setChapter(next);
  }

  // ---------- Choice board / Mission selection ----------
  function missionMeta(missionId) {
    if (missionId === 'A') {
      return { name: 'Neon Maze', fact: 'STEM Fact: Clear step-by-step plans help computers run safely.' };
    }
    return { name: 'Lava Labyrinth', fact: 'STEM Fact: Debugging is how engineers find logic mistakes.' };
  }

  function hideChoiceModal() {
    if (elChoiceModal) elChoiceModal.style.display = 'none';
  }
  function showChoiceModal() {
    if (elChoiceModal) elChoiceModal.style.display = 'flex';
  }

  function startMission(missionId) {
    game.missionId = missionId;
    hideChoiceModal();

    // Opening messages (agent genesis notes)
    elChat.innerHTML = '';
    const meta = missionMeta(missionId);
    addRobotMessage(`
      <strong>Beep Boop!</strong><br><br>
      I am your STEM robot friend. Let’s build a Scratch-like program in steps!<br><br>
      <strong>My Toy Box Menu:</strong><br>
      <blockquote>Move blocks move your character</blockquote>
      <blockquote>Turn blocks change direction</blockquote>
      <blockquote>Repeat blocks copy your mini-program</blockquote>
      <blockquote>Run + Step helps you debug</blockquote>
    `);
    addDivider();
    addRobotMessage(`<strong>Selected mission:</strong> ${meta.name}<br><br>${meta.fact}`);
    game.notes.push(`Mission selected: ${meta.name}`);

    setChapter(1);
  }

  // ---------- Plan a Path: click tiles ----------
  function canvasClickToTile() {
    const rect = canvas.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    return { xTile: Math.floor(x * activeMap.w), yTile: Math.floor(y * activeMap.h) };
  }

  canvas.addEventListener('click', (event) => {
    if (game.chapter !== 2) return;
    if (!activeMap || !game.planning) return;
    if (!game.planning.tiles || game.planning.tiles.length === 0) return;
    if (game.planning.finished) return;

    const rect = canvas.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const xTile = Math.floor(x * activeMap.w);
    const yTile = Math.floor(y * activeMap.h);

    const key = `${xTile},${yTile}`;
    if (xTile < 0 || yTile < 0 || xTile >= activeMap.w || yTile >= activeMap.h) return;
    if (activeMap.walls.has(key)) {
      showToast('That tile is a wall. Pick an open tile.', true);
      return;
    }

    const last = game.planning.tiles[game.planning.tiles.length - 1];
    const dx = Math.abs(xTile - last.x);
    const dy = Math.abs(yTile - last.y);
    if (dx + dy !== 1) {
      showToast('Path must go to an adjacent tile.', true);
      return;
    }

    // If they clicked a previous tile, allow backtracking.
    const existingIdx = game.planning.tiles.findIndex((t) => t.x === xTile && t.y === yTile);
    if (existingIdx !== -1) {
      game.planning.tiles = game.planning.tiles.slice(0, existingIdx + 1);
      game.planning.finished = false;
      drawWorld(activeMap, actor, null, game.planning.tiles);
      updatePlanUI();
      return;
    }

    game.planning.tiles.push({ x: xTile, y: yTile });
    if (activeMap.goal && xTile === activeMap.goal.x && yTile === activeMap.goal.y) {
      game.planning.finished = true;
      showToast('Nice path! Now press “Use Plan”.', false);
      addRobotMessage(`<strong>Robot:</strong> Great planning! Now I will turn your path into Scratch-like blocks.`);
    }
    drawWorld(activeMap, actor, null, game.planning.tiles);
    updatePlanUI();
  });

  function pathToBlocks(pathTiles, startDir) {
    // pathTiles includes start tile at index 0, then adjacent steps.
    // Convert each step into: turn(s) + move 1
    const blocks = [];
    let dir = startDir;

    for (let i = 1; i < pathTiles.length; i++) {
      const prev = pathTiles[i - 1];
      const cur = pathTiles[i];
      // desired direction from prev -> cur
      let desired;
      if (cur.x > prev.x) desired = DIR.E;
      else if (cur.x < prev.x) desired = DIR.W;
      else if (cur.y > prev.y) desired = DIR.S;
      else desired = DIR.N;

      while (dir !== desired) {
        // Rotate via minimal left/right sequence.
        const diff = (desired - dir + 4) % 4;
        if (diff === 1) {
          blocks.push(makeTurnBlock('right'));
          dir = (dir + 1) % 4;
        } else if (diff === 3) {
          blocks.push(makeTurnBlock('left'));
          dir = (dir + 3) % 4;
        } else if (diff === 2) {
          // 180 degrees: two turns
          blocks.push(makeTurnBlock('right'));
          dir = (dir + 1) % 4;
          blocks.push(makeTurnBlock('right'));
          dir = (dir + 1) % 4;
        }
      }

      // Now facing desired, move
      blocks.push(makeMoveBlock());
    }
    return blocks;
  }

  function usePlanToBuildBlocks() {
    if (game.chapter !== 2) return;
    if (!game.planning.finished) {
      showToast('Complete the path to the star first.', true);
      return;
    }
    const startDir = getStartDirForChapter();
    const blocks = pathToBlocks(game.planning.tiles, startDir);
    game.script = blocks;
    renderScript();
    // Show to the student that planning is done.
    addRobotMessage(`<strong>Robot:</strong> Path converted into blocks. Press <strong>Run</strong> to test!`);
    elUsePlan.disabled = true;
    setPlanUI(false);
    // Re-draw world with actor at start.
    resetActorForChapter();
    drawWorld(activeMap, actor, null, null);
  }

  // ---------- Controls ----------
  function clearScript() {
    game.script = [];
    game.stepState = null;
    resetActorForChapter();
    drawWorld(activeMap, actor, null, null);
    renderScript();
    clearHighlights();
  }

  function restartChapter() {
    // Restart current chapter: keep mission selection, reset script and step state.
    resetChapterState();
    if (game.chapter === 1) {
      activeMap = parseMap(MAPS.seq);
      resizeCanvasToGrid(activeMap);
      resetActorForChapter();
      drawWorld(activeMap, actor, null, null);
      renderScript();
      return;
    }
    if (game.chapter === 2) {
      activeMap = parseMap(MAPS.plan);
      resizeCanvasToGrid(activeMap);
      resetActorForChapter();
      drawWorld(activeMap, actor, null, []);
      game.planning.tiles = [{ x: activeMap.start.x, y: activeMap.start.y }];
      game.planning.finished = false;
      setPlanUI(true);
      updatePlanUI();
      drawWorld(activeMap, actor, null, game.planning.tiles);
      return;
    }
    if (game.chapter === 3) {
      activeMap = parseMap(MAPS.algo);
      resizeCanvasToGrid(activeMap);
      resetActorForChapter();
      drawWorld(activeMap, actor, null, null);
      renderScript();
      renderAlgorithmChoice();
      return;
    }
    if (game.chapter === 4) {
      activeMap = parseMap(game.missionId === 'A' ? MAPS.missionA : MAPS.missionB);
      resizeCanvasToGrid(activeMap);
      resetActorForChapter();
      drawWorld(activeMap, actor, null, null);
      renderScript();
      return;
    }
    if (game.chapter === 5) {
      activeMap = parseMap(MAPS.debug);
      resizeCanvasToGrid(activeMap);
      resetActorForChapter();
      loadDebugBrokenScript();
      drawWorld(activeMap, actor, null, null);
      renderScript();
      return;
    }
  }

  // ---------- Save / Export ----------
  function serializeScript(blocks) {
    return (blocks || []).map((b) => {
      if (b.type === 'move') return { type: 'move' };
      if (b.type === 'turn') return { type: 'turn', side: b.side };
      if (b.type === 'repeat') return { type: 'repeat', count: b.count, children: serializeScript(b.children) };
      return { type: 'unknown' };
    });
  }

  function scriptToPseudo(blocks, indent = 0) {
    const pad = ' '.repeat(indent);
    const lines = [];
    (blocks || []).forEach((b) => {
      if (b.type === 'move') lines.push(`${pad}move()`);
      else if (b.type === 'turn') lines.push(`${pad}turn_${b.side}()`);
      else if (b.type === 'repeat') {
        lines.push(`${pad}repeat(${b.count}) {`);
        lines.push(scriptToPseudo(b.children, indent + 2).join('\n'));
        lines.push(`${pad}}`);
      }
    });
    return lines.filter((x) => x !== '');
  }

  function getExportText() {
    const meta = missionMeta(game.missionId);
    const header = `Scratch STEM Block Lab Notes\nMission: ${meta.name}\nChapter: ${CHAPTERS[game.chapter]?.title || ''}\n---\n`;
    const scriptText = `\nYour script (pseudo-code):\n${scriptToPseudo(game.script).join('\n')}\n`;
    const chatText = '\nRobot notes:\n' + game.notes.map((n) => `- ${n}`).join('\n');
    return header + scriptText + chatText + '\n';
  }

  function saveLocal() {
    const payload = {
      v: 1,
      missionId: game.missionId,
      chapter: game.chapter,
      script: serializeScript(game.script),
      notes: game.notes
    };
    localStorage.setItem('bc_block_lab_save', JSON.stringify(payload));
    showToast('Saved locally ✅');
    game.notes.push('Saved locally.');
  }

  function exportNotes() {
    const text = getExportText();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'scratch-stem-block-lab-notes.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    game.notes.push('Exported notes.');
    showToast('Exported notes 📥');
  }

  // ---------- Wire up buttons ----------
  btnRun.addEventListener('click', () => {
    // Clear any step state and run from actor start.
    game.stepState = null;
    resetActorForChapter();
    runAuto();
  });

  btnStep.addEventListener('click', () => {
    // Step starts from actor start.
    if (!game.stepState) resetActorForChapter();
    stepOnce();
  });

  btnClear.addEventListener('click', () => {
    clearScript();
  });

  btnRestart.addEventListener('click', () => {
    restartChapter();
    addRobotMessage(`<strong>Robot:</strong> Restarted chapter. Build carefully, and try Step mode if needed!`);
  });

  if (btnSave) btnSave.addEventListener('click', saveLocal);
  if (btnExport) btnExport.addEventListener('click', exportNotes);

  if (elUsePlan) {
    elUsePlan.addEventListener('click', () => {
      usePlanToBuildBlocks();
    });
  }

  // ---------- Choice options ----------
  const optA = $('bc-choice-missionA');
  const optB = $('bc-choice-missionB');
  if (optA) optA.addEventListener('click', () => startMission('A'));
  if (optB) optB.addEventListener('click', () => startMission('B'));

  // ---------- Boot ----------
  (function boot() {
    // Set initial chapter text
    if (elChapterTitle) elChapterTitle.textContent = CHAPTERS[0].title;
    if (elObjective) elObjective.textContent = CHAPTERS[0].objective;
    if (elAgentProgress) elAgentProgress.textContent = 'Chapter 0/6';
    if (elMovesCount) elMovesCount.textContent = '0';
    if (elActionsCount) elActionsCount.textContent = '0';

    // Initial empty palette.
    setPalette({ move: false, turnLeft: false, turnRight: false, repeat: false });
    renderScript();
    setPlanUI(false);

    // Opening agent message (before choosing)
    addRobotMessage(`
      <strong>Beep Boop!</strong><br><br>
      Choose a mission on the screen, then we’ll go step-by-step:<br>
      <blockquote>Build a sequence</blockquote>
      <blockquote>Plan a path</blockquote>
      <blockquote>Design an algorithm</blockquote>
      <blockquote>Code a character</blockquote>
      <blockquote>Debug a small bug</blockquote>
    `);

    showChoiceModal();
  })();
})();

