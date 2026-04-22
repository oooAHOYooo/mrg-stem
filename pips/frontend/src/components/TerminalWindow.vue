<script setup>
import { ref, onMounted, nextTick, watch } from 'vue'
import { useScene } from '../composables/useScene.js'

const props = defineProps({
  docked: { type: Boolean, default: true },
  visible: { type: Boolean, default: true },
})

const { 
  terminalOpen, 
  toggleTerminal, 
  activeGlade, 
  pips, 
  gladeSlots,
  selectGladeSlot,
  spawnDynamicGlade,
  removePip,
  placeFarmBlock,
  createPip,
  selectPip,
  openChat,
  feedPip,
  hydratePip,
  equipHat,
  setMode,
  showToast,
  triggerFxPulse,
} = useScene()

const userInput = ref('')
const terminalHistory = ref([
  { type: 'system', content: 'PIPS OS v1.0.4 - Initializing...' },
  { type: 'system', content: 'Connection established to The Glade Collective.' },
  { type: 'system', content: 'Type "help" for a list of commands.' },
])

const inputRef = ref(null)
const historyRef = ref(null)
const cmdHistory = ref([])
const cmdHistoryIdx = ref(-1)
const pendingDraft = ref('')

function focusInput() {
  inputRef.value?.focus()
}

function onTerminalHover() {
  // Hover-to-type UX: focus terminal input when cursor enters the terminal panel.
  // Avoid stealing focus if user is actively typing in another input/textarea elsewhere.
  if (!terminalOpen.value) return
  const el = document.activeElement
  if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) return
  nextTick(() => focusInput())
}

watch(terminalOpen, (isOpen) => {
  if (isOpen) {
    nextTick(() => focusInput())
  }
})

const scrollToBottom = () => {
  nextTick(() => {
    if (historyRef.value) {
      historyRef.value.scrollTop = historyRef.value.scrollHeight
    }
  })
}

async function handleCommand() {
  const fullCmd = userInput.value.trim()
  if (!fullCmd) return
  
  cmdHistory.value.push(fullCmd)
  cmdHistoryIdx.value = -1
  pendingDraft.value = ''

  terminalHistory.value.push({ type: 'user', content: fullCmd })
  const [cmd, ...args] = fullCmd.split(' ')
  userInput.value = ''

  const findPipById = (pipId) => pips.value.find((p) => p.id === pipId) || null
  const formatPip = (p) => `${p.name} [${p.id}] Lv.${p.level || 1} (${p.provider || 'glade'}/${p.model || 'native'}) @${p.gladeId}`
  const escapeHtml = (s) =>
    String(s)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;')

  const helpFor = (name) => {
    switch ((name || '').toLowerCase()) {
      case 'agents':
        return 'agents [--json]  - List all pips across all glades (use --json for copy/paste)'
      case 'ceremony':
        return 'ceremony [claude|openai|ollama]  - Run a funny connection ritual + real integration test'
      case 'select':
        return 'select [pip_id]  - Select a pip (opens overlay target)'
      case 'talk':
        return 'talk [pip_id]    - Select a pip and open chat'
      case 'feed':
        return 'feed [pip_id]    - Feed a pip (gift + reaction)'
      case 'hydrate':
        return 'hydrate [pip_id] - Hydrate a pip (gift + reaction)'
      case 'hat':
        return 'hat [pip_id] [wizard_hat|hard_hat|beret|crown]  - Equip a hat'
      case 'rm':
        return 'rm [pip_id] [--force]  - Remove a pip (requires --force)'
      case 'goto':
        return 'goto [pip_id]    - Teleport near a pip'
      case 'mode':
        return 'mode [explore|build|playful|wizard|about]  - Set mode'
      case 'ls':
        return 'ls               - List pips in active glade'
      default:
        return 'help [cmd]        - Show command help (e.g. help agents)'
    }
  }

  switch (cmd.toLowerCase()) {
    case 'help':
      if (args[0]) {
        terminalHistory.value.push({ type: 'system', content: helpFor(args[0]) })
      } else {
        terminalHistory.value.push({ type: 'system', content: 'Available commands:' })
        terminalHistory.value.push({ type: 'system', content: '  ' + helpFor('ls') })
        terminalHistory.value.push({ type: 'system', content: '  ' + helpFor('agents') })
        terminalHistory.value.push({ type: 'system', content: '  ' + helpFor('ceremony') })
        terminalHistory.value.push({ type: 'system', content: '  ' + helpFor('select') })
        terminalHistory.value.push({ type: 'system', content: '  ' + helpFor('talk') })
        terminalHistory.value.push({ type: 'system', content: '  ' + helpFor('feed') })
        terminalHistory.value.push({ type: 'system', content: '  ' + helpFor('hydrate') })
        terminalHistory.value.push({ type: 'system', content: '  ' + helpFor('hat') })
        terminalHistory.value.push({ type: 'system', content: '  ' + helpFor('goto') })
        terminalHistory.value.push({ type: 'system', content: '  ' + helpFor('mode') })
        terminalHistory.value.push({ type: 'system', content: '  ' + helpFor('rm') })
        terminalHistory.value.push({ type: 'system', content: '  cd [index]         - Select glade by index (1-8)' })
        terminalHistory.value.push({ type: 'system', content: '  pip [name] [color] - Create a new pip here' })
        terminalHistory.value.push({ type: 'system', content: '  glade [name] [theme] - Create a new dynamic glade' })
        terminalHistory.value.push({ type: 'system', content: '  build [type] [x] [z] - Place a farm block' })
        terminalHistory.value.push({ type: 'system', content: '  tp [x] [z]         - Teleport to world coordinates' })
        terminalHistory.value.push({ type: 'system', content: '  whoami             - Show current session info' })
        terminalHistory.value.push({ type: 'system', content: '  claude [prompt]    - Ask The Architect to modify the world' })
        terminalHistory.value.push({ type: 'system', content: '  clear              - Clear terminal history' })
        terminalHistory.value.push({ type: 'system', content: '  exit               - Close terminal' })
      }
      break

    case 'ceremony': {
      const target = (args[0] || 'claude').toLowerCase()
      const provider = target === 'claude' ? 'anthropic' : target
      const model =
        provider === 'anthropic'
          ? 'claude-3-haiku-20240307'
          : provider === 'openai'
            ? 'gpt-4o-mini'
            : provider === 'ollama'
              ? 'llama3'
              : null

      if (!model) {
        terminalHistory.value.push({ type: 'error', content: `Unknown ceremony target: ${escapeHtml(target)} (try: ceremony claude)` })
        break
      }

      terminalHistory.value.push({ type: 'system', content: ':: BEGIN RITUAL ::' })
      terminalHistory.value.push({ type: 'system', content: 'You place a tiny candle on the keyboard. The keys glow softly.' })
      terminalHistory.value.push({ type: 'system', content: 'Step 1/3: Whisper the sacred env var into existence:' })
      terminalHistory.value.push({ type: 'system', content: '  LLM_API_KEY=******** (set this in your backend .env / environment)' })
      terminalHistory.value.push({ type: 'system', content: 'Step 2/3: Offer a single token to the void...' })
      scrollToBottom()

      // Real connectivity test (backend)
      let data = null
      try {
        const resp = await fetch('/api/integrations/test', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ provider, model }),
        })
        data = await resp.json()
      } catch (e) {
        data = { ok: false, error: String(e) }
      }

      if (!data?.ok) {
        terminalHistory.value.push({ type: 'error', content: 'The portal fizzles. The air smells like unconfigured secrets.' })
        terminalHistory.value.push({ type: 'error', content: `Test failed: ${escapeHtml(data?.error || 'Unknown error')}` })
        terminalHistory.value.push({ type: 'system', content: 'Tip: set backend env `LLM_API_KEY`, restart backend, then re-run `ceremony claude`.' })
        break
      }

      terminalHistory.value.push({ type: 'assistant', content: `A sigil appears: ${provider.toUpperCase()} · ${escapeHtml(model)}` })
      terminalHistory.value.push({ type: 'system', content: 'Step 3/3: The Glade accepts the pact. A new sprout-agent emerges.' })

      // Celebrate in UI (toast + pulse)
      showToast(`${provider === 'anthropic' ? 'Claude' : provider} connected`)
      triggerFxPulse()

      // Spawn a special pip in the current district (local world)
      if (activeGlade.value) {
        const name = provider === 'anthropic' ? 'Claude Sprout' : `${provider} Sprout`
        createPip(
          name,
          '#d185ff',
          activeGlade.value.center.x + (Math.random() - 0.5) * 4,
          activeGlade.value.center.z + (Math.random() - 0.5) * 4,
          'Summoned by ceremony. Polite. Slightly dramatic. Extremely helpful.',
          activeGlade.value.id,
          provider,
          model
        )
      }

      terminalHistory.value.push({ type: 'system', content: ':: RITUAL COMPLETE ::' })
      break
    }

    case 'ls':
      const localPips = pips.value.filter(p => p.gladeId === activeGlade.value?.id)
      terminalHistory.value.push({ type: 'system', content: `Pips in ${activeGlade.value?.name || 'Unknown'}:` })
      if (localPips.length === 0) {
        terminalHistory.value.push({ type: 'system', content: '  (No pips found)' })
      } else {
        localPips.forEach(p => {
          terminalHistory.value.push({ type: 'system', content: `  > ${formatPip(p)}` })
        })
      }
      break

    case 'agents': {
      const asJson = args.includes('--json')
      if (asJson) {
        const payload = pips.value.map((p) => ({
          id: p.id,
          name: p.name,
          gladeId: p.gladeId,
          provider: p.provider,
          model: p.model,
          level: p.level,
          status: p.status,
          position_x: p.position_x,
          position_z: p.position_z,
        }))
        terminalHistory.value.push({
          type: 'system',
          content: `<pre style="white-space: pre-wrap; margin: 0;">${escapeHtml(JSON.stringify(payload, null, 2))}</pre>`,
        })
        break
      }
      terminalHistory.value.push({ type: 'system', content: 'All agents (pips):' })
      const byGlade = new Map()
      for (const p of pips.value) {
        const gid = p.gladeId || 'unknown'
        if (!byGlade.has(gid)) byGlade.set(gid, [])
        byGlade.get(gid).push(p)
      }
      const gladeName = (gid) => gladeSlots.value.find((g) => g.id === gid)?.name || gid
      const glades = Array.from(byGlade.keys()).sort((a, b) => gladeName(a).localeCompare(gladeName(b)))
      if (glades.length === 0) {
        terminalHistory.value.push({ type: 'system', content: '  (No pips found)' })
        break
      }
      for (const gid of glades) {
        terminalHistory.value.push({ type: 'system', content: `- ${gladeName(gid)} (${gid})` })
        byGlade.get(gid).forEach((p) => {
          terminalHistory.value.push({ type: 'system', content: `    > ${formatPip(p)}` })
        })
      }
      break
    }

    case 'cd':
      const idx = parseInt(args[0]) - 1
      if (!isNaN(idx) && gladeSlots.value[idx]) {
        selectGladeSlot(idx)
        terminalHistory.value.push({ type: 'system', content: `Navigated to ${gladeSlots.value[idx].name}.` })
      } else {
        terminalHistory.value.push({ type: 'error', content: 'Invalid glade index.' })
      }
      break

    case 'pip':
      const name = args[0] || 'Nomad'
      const color = args[1] || '#ffffff'
      if (activeGlade.value) {
        createPip(
          name, 
          color, 
          activeGlade.value.center.x + (Math.random() - 0.5) * 4, 
          activeGlade.value.center.z + (Math.random() - 0.5) * 4, 
          'Born from the command line.', 
          activeGlade.value.id,
          'glade',
          'terminal-born'
        )
        terminalHistory.value.push({ type: 'system', content: `Spawned pip "${name}" in ${activeGlade.value.name}.` })
      }
      break

    case 'rm':
      {
        const force = args.includes('--force')
        const id = args.find((a) => a !== '--force')
        if (!id) {
          terminalHistory.value.push({ type: 'error', content: 'Usage: rm [pip_id] --force' })
          break
        }
        if (!force) {
          terminalHistory.value.push({ type: 'error', content: `Refusing to remove ${id}. Re-run: rm ${id} --force` })
          break
        }
        if (removePip(id)) {
          terminalHistory.value.push({ type: 'system', content: `Pip ${id} removed successfully.` })
        } else {
          terminalHistory.value.push({ type: 'error', content: `Pip ${id} not found.` })
        }
      }
      break

    case 'select': {
      const pipId = args[0]
      const pip = findPipById(pipId)
      if (!pip) {
        terminalHistory.value.push({ type: 'error', content: `Pip ${pipId} not found.` })
        break
      }
      selectPip(pip)
      terminalHistory.value.push({ type: 'system', content: `Selected: ${formatPip(pip)}` })
      break
    }

    case 'talk': {
      const pipId = args[0]
      const pip = findPipById(pipId)
      if (!pip) {
        terminalHistory.value.push({ type: 'error', content: `Pip ${pipId} not found.` })
        break
      }
      selectPip(pip)
      openChat()
      terminalHistory.value.push({ type: 'system', content: `Chat opened with: ${formatPip(pip)}` })
      break
    }

    case 'feed': {
      const pipId = args[0]
      if (!pipId) {
        terminalHistory.value.push({ type: 'error', content: 'Usage: feed [pip_id]' })
        break
      }
      if (feedPip(pipId)) terminalHistory.value.push({ type: 'system', content: `Fed ${pipId}.` })
      else terminalHistory.value.push({ type: 'error', content: `Pip ${pipId} not found.` })
      break
    }

    case 'hydrate': {
      const pipId = args[0]
      if (!pipId) {
        terminalHistory.value.push({ type: 'error', content: 'Usage: hydrate [pip_id]' })
        break
      }
      if (hydratePip(pipId)) terminalHistory.value.push({ type: 'system', content: `Hydrated ${pipId}.` })
      else terminalHistory.value.push({ type: 'error', content: `Pip ${pipId} not found.` })
      break
    }

    case 'hat': {
      const pipId = args[0]
      const hatId = args[1]
      if (!pipId || !hatId) {
        terminalHistory.value.push({ type: 'error', content: 'Usage: hat [pip_id] [wizard_hat|hard_hat|beret|crown]' })
        break
      }
      const ok = equipHat(pipId, { id: hatId })
      terminalHistory.value.push({ type: ok ? 'system' : 'error', content: ok ? `Equipped ${hatId} on ${pipId}.` : `Failed to equip hat on ${pipId}.` })
      break
    }

    case 'mode': {
      const modeId = args[0]
      if (!modeId) {
        terminalHistory.value.push({ type: 'error', content: 'Usage: mode [explore|build|playful|wizard|about]' })
        break
      }
      const ok = setMode(modeId)
      terminalHistory.value.push({ type: ok ? 'system' : 'error', content: ok ? `Mode set: ${modeId}` : `Invalid mode: ${modeId}` })
      break
    }

    case 'goto': {
      const pipId = args[0]
      const pip = findPipById(pipId)
      if (!pip || pip.position_x === undefined) {
        terminalHistory.value.push({ type: 'error', content: `Pip ${pipId} not found (or has no position).` })
        break
      }
      import('../three/camera.js').then((m) => {
        m.teleportNearTarget(pip.position_x, pip.position_z)
        terminalHistory.value.push({ type: 'system', content: `Teleported near ${pip.name}.` })
        scrollToBottom()
      })
      break
    }

    case 'glade':
      const gName = args[0] || 'New Sector'
      const gTheme = args[1] || 'Default'
      const newGlade = spawnDynamicGlade(gName, gTheme)
      terminalHistory.value.push({ type: 'system', content: `Dynamic glade "${gName}" initialized at center spatial coordinates.` })
      break

    case 'build':
      const bType = args[0]
      const bX = parseFloat(args[1]) || (activeGlade.value?.center.x || 0)
      const bZ = parseFloat(args[2]) || (activeGlade.value?.center.z || 0)
      if (placeFarmBlock(bType, bX, bZ)) {
        terminalHistory.value.push({ type: 'system', content: `Placed ${bType} at (${bX.toFixed(1)}, ${bZ.toFixed(1)}).` })
      } else {
        terminalHistory.value.push({ type: 'error', content: `Failed to place ${bType}. Check if position is within glade zone.` })
      }
      break

    case 'teleport':
    case 'tp':
      const tx = parseFloat(args[0])
      const tz = parseFloat(args[1])
      if (!isNaN(tx) && !isNaN(tz)) {
        import('../three/camera.js').then(m => {
          m.teleportNearTarget(tx, tz)
          terminalHistory.value.push({ type: 'system', content: `Teleported to sequence coordinates (${tx}, ${tz}).` })
        })
      } else {
        terminalHistory.value.push({ type: 'error', content: 'Usage: tp [x] [z]' })
      }
      break

    case 'clear':
      terminalHistory.value = [{ type: 'system', content: 'Terminal history cleared.' }]
      break

    case 'whoami':
      terminalHistory.value.push({ type: 'system', content: 'USER: Architect_01' })
      terminalHistory.value.push({ type: 'system', content: 'PRIVILEGE: ROOT' })
      terminalHistory.value.push({ type: 'system', content: `LOCATION: ${activeGlade.value?.id || 'Unknown'}` })
      break

    case 'exit':
      toggleTerminal()
      break

    case 'claude':
      const prompt = args.join(' ')
      if (!prompt) {
        terminalHistory.value.push({ type: 'error', content: 'No prompt provided for Claude.' })
        break
      }
      terminalHistory.value.push({ type: 'system', content: '>>> Pinging The Glade Architect...' })
      await callClaude(prompt)
      break

    default:
      terminalHistory.value.push({ type: 'error', content: `Command not found: ${cmd}` })
  }
  
  scrollToBottom()
}

function onInputKeydown(event) {
  if (event.key === 'ArrowUp') {
    if (cmdHistory.value.length === 0) return
    event.preventDefault()
    if (cmdHistoryIdx.value === -1) {
      pendingDraft.value = userInput.value
      cmdHistoryIdx.value = cmdHistory.value.length - 1
    } else {
      cmdHistoryIdx.value = Math.max(0, cmdHistoryIdx.value - 1)
    }
    userInput.value = cmdHistory.value[cmdHistoryIdx.value] || ''
    nextTick(() => inputRef.value?.setSelectionRange?.(userInput.value.length, userInput.value.length))
  } else if (event.key === 'ArrowDown') {
    if (cmdHistory.value.length === 0) return
    if (cmdHistoryIdx.value === -1) return
    event.preventDefault()
    cmdHistoryIdx.value++
    if (cmdHistoryIdx.value >= cmdHistory.value.length) {
      cmdHistoryIdx.value = -1
      userInput.value = pendingDraft.value
    } else {
      userInput.value = cmdHistory.value[cmdHistoryIdx.value] || ''
    }
    nextTick(() => inputRef.value?.setSelectionRange?.(userInput.value.length, userInput.value.length))
  }
}

async function callClaude(prompt) {
  try {
    const response = await fetch('/api/agents/terminal-agent/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: prompt })
    })
    
    if (!response.ok) {
       // Fallback for demo if backend isn't ready
       setTimeout(() => {
          terminalHistory.value.push({ type: 'assistant', content: 'I am simulating a world change. I see you want to modify The Glade. I have spawned a special "AI Observation Pip" for you.' })
          const aiPip = {
            id: `pip-ai-${Date.now()}`,
            name: 'Claude Shadow',
            color: '#d185ff',
            personality: 'A fragment of Claude in the world.',
            provider: 'anthropic',
            model: 'claude-3-opus',
            status: 'idle',
            position_x: activeGlade.value?.center.x || 0,
            position_z: activeGlade.value?.center.z || 0,
            gladeId: activeGlade.value?.id || 'glade-wild',
          }
          pips.value.push(aiPip)
          scrollToBottom()
       }, 1000)
       return
    }

    const data = await response.json()
    terminalHistory.value.push({ type: 'assistant', content: data.content })
    
    // Check if Claude returned structured commands (hypothetical)
    if (data.content.includes('```json')) {
       // logic to parse and execute commands
    }
  } catch (err) {
    terminalHistory.value.push({ type: 'error', content: 'Network error or backend unreachable. Using local simulation mode.' })
    // Simulate
    setTimeout(() => {
       terminalHistory.value.push({ type: 'assistant', content: 'Claude Local: "I have acknowledged your command. The world is yours to shape."' })
       scrollToBottom()
    }, 800)
  }
}
</script>

<template>
  <template v-if="visible">
    <!-- Docked / embedded mode -->
    <div
      v-if="docked"
      class="terminal-docked panel"
      :class="{ collapsed: !terminalOpen }"
      @click.stop
      @mouseenter="onTerminalHover"
    >
      <div class="terminal-header" @mousedown="$emit('drag-start')">
        <div class="header-led"></div>
        <div class="header-title">PIPS_TERMINAL_ROOT@THE_GLADE</div>
        <div class="header-controls">
          <button @click="toggleTerminal">{{ terminalOpen ? '−' : '+' }}</button>
          <button @click="terminalHistory = []" :disabled="!terminalOpen">□</button>
        </div>
      </div>

      <template v-if="terminalOpen">
        <div class="terminal-history" ref="historyRef">
          <div 
            v-for="(msg, idx) in terminalHistory" 
            :key="idx" 
            class="line"
            :class="msg.type"
          >
            <span v-if="msg.type === 'user'" class="prompt">$</span>
            <span v-if="msg.type === 'system'" class="prompt">#</span>
            <span v-if="msg.type === 'assistant'" class="prompt">CLAUDE></span>
            <span v-if="msg.type === 'error'" class="prompt">ERR!</span>
            <span class="content" v-html="msg.content"></span>
          </div>
        </div>
        
        <div class="terminal-input-row" @click="focusInput">
          <span class="prompt-arrow">></span>
          <input 
            ref="inputRef"
            v-model="userInput" 
            type="text" 
            spellcheck="false"
            autofocus
            @keydown.enter="handleCommand"
            @keydown="onInputKeydown"
            @keydown.esc="toggleTerminal"
          />
          <div class="cursor-block"></div>
        </div>
      </template>
    </div>

    <!-- Overlay mode (existing) -->
    <div 
      v-else
      v-if="terminalOpen" 
      class="terminal-overlay"
      @click.self="toggleTerminal"
    >
      <div class="terminal-container" @click.stop @mouseenter="onTerminalHover">
        <div class="terminal-header" @mousedown="$emit('drag-start')">
          <div class="header-led"></div>
          <div class="header-title">PIPS_TERMINAL_ROOT@THE_GLADE</div>
          <div class="header-controls">
            <button @click="toggleTerminal">_</button>
            <button @click="terminalHistory = []">□</button>
            <button class="close" @click="toggleTerminal">×</button>
          </div>
        </div>
        
        <div class="terminal-history" ref="historyRef">
          <div 
            v-for="(msg, idx) in terminalHistory" 
            :key="idx" 
            class="line"
            :class="msg.type"
          >
            <span v-if="msg.type === 'user'" class="prompt">$</span>
            <span v-if="msg.type === 'system'" class="prompt">#</span>
            <span v-if="msg.type === 'assistant'" class="prompt">CLAUDE></span>
            <span v-if="msg.type === 'error'" class="prompt">ERR!</span>
            <span class="content" v-html="msg.content"></span>
          </div>
        </div>
        
        <div class="terminal-input-row" @click="focusInput">
          <span class="prompt-arrow">></span>
          <input 
            ref="inputRef"
            v-model="userInput" 
            type="text" 
            spellcheck="false"
            autofocus
            @keydown.enter="handleCommand"
            @keydown="onInputKeydown"
            @keydown.esc="toggleTerminal"
          />
          <div class="cursor-block"></div>
        </div>
      </div>
    </div>
  </template>
</template>

<style scoped>
.terminal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.terminal-docked {
  position: fixed;
  left: 18px;
  bottom: 18px;
  width: 520px;
  height: 320px;
  z-index: 1100;
  display: flex;
  flex-direction: column;
  border: 1px solid #30363d;
  background: rgba(13, 17, 23, 0.92);
  backdrop-filter: blur(6px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.7), 0 0 30px rgba(133, 224, 255, 0.08);
  overflow: hidden;
}

.terminal-docked.collapsed {
  height: 34px;
}

.terminal-docked .terminal-container {
  width: 100%;
  height: 100%;
}

.terminal-docked .terminal-history {
  padding: 12px;
}

.terminal-docked .terminal-input-row {
  height: 42px;
}

.terminal-container {
  width: 900px;
  height: 600px;
  background: #0d1117;
  border: 1px solid #30363d;
  box-shadow: 0 20px 60px rgba(0,0,0,0.8), 0 0 40px rgba(133, 224, 255, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  font-family: 'Fira Code', 'Courier New', Courier, monospace;
}

.terminal-header {
  background: #161b22;
  border-bottom: 1px solid #30363d;
  height: 32px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  gap: 12px;
}

.header-led {
  width: 8px;
  height: 8px;
  background: #238636;
  border-radius: 50%;
  box-shadow: 0 0 6px #238636;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

.header-title {
  color: #8b949e;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
  flex: 1;
}

.header-controls {
  display: flex;
  gap: 8px;
}

.header-controls button {
  background: none;
  border: none;
  color: #484f58;
  font-size: 14px;
  cursor: pointer;
  padding: 0 4px;
}

.header-controls button:hover {
  color: #c9d1d9;
}

.header-controls button.close:hover {
  color: #f85149;
}

.terminal-history {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  scrollbar-width: thin;
  scrollbar-color: #30363d transparent;
}

.line {
  line-height: 1.5;
  font-size: 14px;
  word-break: break-all;
}

.user { color: #85e0ff; }
.system { color: #8b949e; }
.assistant { color: #d2a8ff; }
.error { color: #f85149; }

.prompt {
  margin-right: 8px;
  opacity: 0.7;
  font-weight: bold;
}

.terminal-input-row {
  background: #0d1117;
  border-top: 1px solid #30363d;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 12px;
}

.prompt-arrow {
  color: #238636;
  font-weight: bold;
}

.terminal-input-row input {
  background: none;
  border: none;
  color: #c9d1d9;
  flex: 1;
  font-family: inherit;
  font-size: 14px;
  outline: none;
}

.cursor-block {
  width: 8px;
  height: 18px;
  background: #238636;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background: #30363d;
  border-radius: 3px;
}
</style>
