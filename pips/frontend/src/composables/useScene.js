import { computed, ref, readonly } from 'vue'

const selectedPip = ref(null)
const pips = ref([])
const councilActive = ref(false)
const chatOpen = ref(false)
const currentMode = ref('playful')
const selectedTool = ref('nest')
const farmBlocks = ref([])
const farmStats = ref(makeEmptyFarmStats())
const farmSpawnNotice = ref('')
const activeGladeId = ref('glade-forge')
const playerPosition = ref({ x: 0, z: 0 })
const fairies = ref([])
const capturedFairies = ref(0)
const pokeballs = ref(10)
const WEAPONS = [
  { id: 'weapon_short_sword', label: 'Short Sword', icon: '🗡️', type: 'weapon' },
  { id: 'weapon_axe', label: 'Tiny Axe', icon: '🪓', type: 'weapon' },
  { id: 'weapon_bow', label: 'Pocket Bow', icon: '🏹', type: 'weapon' },
  { id: 'weapon_hammer', label: 'Bonk Hammer', icon: '🔨', type: 'weapon' },
]
const DEFAULT_WEAPON = WEAPONS[Math.floor(Math.random() * WEAPONS.length)]

const inventory = ref([
  { id: 'wizard_hat', label: 'Wizard Hat', icon: '🧙‍♂️', type: 'hat' },
  { id: 'hard_hat', label: 'Hard Hat', icon: '👷', type: 'hat' },
  { id: 'beret', label: 'Beret', icon: '🎨', type: 'hat' },
  { id: 'crown', label: 'Crown', icon: '👑', type: 'hat' },
  { id: 'pip_treat', label: 'Pip Treat', icon: '🍎', type: 'food' },
  DEFAULT_WEAPON,
  { id: 'balloon_cannon', label: 'Balloon Popper', icon: '🎈', type: 'tool' },
  { id: 'firework_launcher', label: 'Firework', icon: '🎆', type: 'tool' },
  { id: 'fairy_summoner', label: 'Fairy Wand', icon: '✨', type: 'tool' },
  { id: 'capture_orb', label: 'Capture Orb', icon: '🫧', type: 'tool' },
  null,
])
const selectedSlot = ref(5) // Start with a random weapon selected (key 6)
const wildPips = ref([])
// When docked, this acts as expanded/collapsed. When overlay, it's open/closed.
const terminalOpen = ref(true)
const onboardingStep = ref(0) // 0: Start, 1: Shrinking, 2: Tour, 3: Arrival, 4: Fed, 5: Done
const guidePip = ref({ id: 'guide', name: 'Nebula', color: '#c9a0ff', x: 13.5, z: 13.5, size: 5, targetX: 13.5, targetZ: 13.5 })
const floatingTexts = ref([])
const toast = ref(null) // { id, text }
const fxPulse = ref(0) // increments to trigger UI pulse/sfx

let nextFarmPipId = 1000
const gladeSlots = ref(seedGlades())
const spawnTimersByGlade = ref(Object.fromEntries(gladeSlots.value.map((g) => [g.id, 45])))

const farmTools = [
  { key: '1', id: 'nest', label: 'Nest', color: '#d9b38c' },
  { key: '2', id: 'lantern', label: 'Lantern', color: '#ffd27f' },
  { key: '3', id: 'totem', label: 'Totem', color: '#c5b3e6' },
  { key: '4', id: 'archive', label: 'Archive', color: '#9fd3d8' },
  { key: '5', id: 'remove', label: 'Remove', color: '#e09494' },
]

const modeDefinitions = [
  { id: 'explore', label: 'Explore' },
  { id: 'build', label: 'Build' },
  { id: 'playful', label: 'Playful' },
  { id: 'wizard', label: 'Wizard' },
  { id: 'about', label: 'About' },
]

function clone(value) {
  return JSON.parse(JSON.stringify(value))
}

function findActiveGlade() {
  return gladeSlots.value.find((g) => g.id === activeGladeId.value) || null
}

function getGladeById(gladeId) {
  return gladeSlots.value.find((g) => g.id === gladeId) || null
}

function updateActiveFarmStats() {
  farmStats.value = recomputeFarmStatsForGlade(activeGladeId.value)
}

export function useScene() {
  const buildMode = computed(() => currentMode.value === 'build')
  const playfulMode = computed(() => currentMode.value === 'playful')
  const activeGlade = computed(() => findActiveGlade())
  const gladeSummaries = computed(() =>
    gladeSlots.value.map((g) => ({
      id: g.id,
      name: g.name,
      project: g.project,
      theme: g.theme,
      color: g.color,
      pips: pips.value.filter((p) => p.gladeId === g.id).length,
      farmBlocks: farmBlocks.value.filter((b) => b.gladeId === g.id).length,
      growthRate: recomputeFarmStatsForGlade(g.id).growthRate,
      nextSpawnIn: spawnTimersByGlade.value[g.id] ?? 45,
    }))
  )
  const totalPips = computed(() => pips.value.length)

  function selectGladeSlot(slotIdx) {
    const glade = gladeSlots.value[slotIdx]
    if (!glade) return null
    activeGladeId.value = glade.id
    updateActiveFarmStats()
    return glade
  }

  function setPlayerPosition(x, z) {
    playerPosition.value = { x, z }
  }

  function selectPip(pip) {
    selectedPip.value = pip
    chatOpen.value = false
  }

  function deselectPip() {
    selectedPip.value = null
    chatOpen.value = false
  }

  function triggerGathering() {
    councilActive.value = !councilActive.value
  }

  const nearbyPip = computed(() => {
    if (!playerPosition.value) return null
    let closest = null
    let minDist = 5 // interaction radius
    pips.value.forEach((p) => {
      if (p.position_x === undefined) return
      const dx = p.position_x - playerPosition.value.x
      const dz = p.position_z - playerPosition.value.z
      const dist = Math.sqrt(dx * dx + dz * dz)
      if (dist < minDist) {
        minDist = dist
        closest = p
      }
    })
    return closest
  })

  function setPips(newPips) {
    pips.value = clone(newPips)
  }

  function updatePipInList(updatedPip) {
    const idx = pips.value.findIndex((p) => p.id === updatedPip.id)
    if (idx !== -1) {
      pips.value[idx] = { ...pips.value[idx], ...updatedPip }
      if (selectedPip.value?.id === updatedPip.id) {
        selectedPip.value = pips.value[idx]
      }
    }
  }

  function openChat() {
    if (selectedPip.value) chatOpen.value = true
  }

  function closeChat() {
    chatOpen.value = false
  }

  function setMode(modeId) {
    const valid = modeDefinitions.some((m) => m.id === modeId)
    if (!valid) return false
    currentMode.value = modeId
    farmSpawnNotice.value = modeId === 'build'
      ? 'Build mode enabled'
      : modeId === 'playful'
        ? 'Playful mode enabled'
        : modeId === 'wizard'
        ? 'Wizard mode enabled'
        : modeId === 'about'
        ? 'About mode enabled'
        : 'Explore mode enabled'
    return true
  }

  function cycleMode() {
    const idx = modeDefinitions.findIndex((m) => m.id === currentMode.value)
    const next = modeDefinitions[(idx + 1) % modeDefinitions.length]
    setMode(next.id)
  }

  function toggleBuildMode() {
    if (currentMode.value === 'build') setMode('explore')
    else setMode('build')
  }

  function toggleTerminal() {
    terminalOpen.value = !terminalOpen.value
    if (terminalOpen.value) {
      setMode('explore') // Close other modes? or just overlay
    }
  }

  function selectToolByKey(key) {
    const tool = farmTools.find((item) => item.key === key)
    if (!tool) return false
    selectedTool.value = tool.id
    return true
  }

  function cycleSlot(dir = 1) {
    const total = inventory.value.length
    // Skip empty slots for smoother UX (but never infinite-loop).
    let next = (selectedSlot.value + dir + total) % total
    for (let i = 0; i < total; i++) {
      if (inventory.value[next]) break
      next = (next + dir + total) % total
    }
    selectedSlot.value = next
  }

  function showToast(text, ms = 1400) {
    const id = 'toast-' + Date.now() + Math.random()
    toast.value = { id, text }
    setTimeout(() => {
      if (toast.value?.id === id) toast.value = null
    }, ms)
  }

  function triggerFxPulse() {
    fxPulse.value++
  }

  function grantSmallGift(pip, reason = 'care') {
    const gifts = [
      { id: 'gift_glimmer', label: 'Glimmer Pebble', icon: '✨', type: 'gift' },
      { id: 'gift_ribbon', label: 'Tiny Ribbon', icon: '🎀', type: 'gift' },
      { id: 'gift_cookie', label: 'Warm Cookie', icon: '🍪', type: 'gift' },
      { id: 'gift_shell', label: 'Pretty Shell', icon: '🐚', type: 'gift' },
    ]
    const gift = gifts[Math.floor(Math.random() * gifts.length)]

    // Try to place into the first empty slot, else just sparkle-text it.
    const emptyIdx = inventory.value.findIndex((s) => !s)
    if (emptyIdx !== -1) {
      inventory.value[emptyIdx] = gift
      triggerInteractionText(pip.position_x, pip.position_z, `+ ${gift.icon} ${gift.label}`, '#ffd8ff')
    } else {
      triggerInteractionText(pip.position_x, pip.position_z, `${gift.icon} ${gift.label}`, '#ffd8ff')
    }
    showToast(`Gift received: ${gift.icon} ${gift.label}`)
    triggerFxPulse()
    return gift
  }

  function recomputeFarmStats() {
    updateActiveFarmStats()
  }

  function placeFarmBlock(type, x, z) {
    const gridX = Math.round(x)
    const gridZ = Math.round(z)
    const exists = farmBlocks.value.find(
      (b) => b.gladeId === activeGladeId.value && b.x === gridX && b.z === gridZ
    )

    if (type === 'remove') {
      if (!exists) return false
      farmBlocks.value = farmBlocks.value.filter((b) => b.id !== exists.id)
      recomputeFarmStats()
      return true
    }

    if (exists) return false
    farmBlocks.value.push({
      id: `farm-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`,
      type,
      x: gridX,
      z: gridZ,
      gladeId: activeGladeId.value,
    })
    recomputeFarmStats()
    return true
  }

  function tickFarm(deltaSeconds) {
    for (const glade of gladeSlots.value) {
      const gladeStats = recomputeFarmStatsForGlade(glade.id)
      let timer = spawnTimersByGlade.value[glade.id] ?? 45
      if (gladeStats.capacity <= 0) {
        spawnTimersByGlade.value[glade.id] = 45
        continue
      }

      timer -= deltaSeconds * gladeStats.growthRate
      if (timer > 0) {
        spawnTimersByGlade.value[glade.id] = timer
        continue
      }

      const farmPips = pips.value.filter((p) => p.source === 'farm' && p.gladeId === glade.id)
      if (farmPips.length >= gladeStats.capacity) {
        spawnTimersByGlade.value[glade.id] = 20
        continue
      }

      const personalities = [
        { key: 'calm', score: gladeStats.calmBias + 1, text: 'Calm and gentle, loves tending the glade.' },
        { key: 'bold', score: gladeStats.boldBias + 1, text: 'Bold and adventurous, always seeks quests.' },
        { key: 'curious', score: gladeStats.curiousBias + 1, text: 'Curious and bright, fascinated by everyone.' },
      ]
      const total = personalities.reduce((sum, p) => sum + p.score, 0)
      let roll = Math.random() * total
      let chosen = personalities[0]
      for (const p of personalities) {
        roll -= p.score
        if (roll <= 0) {
          chosen = p
          break
        }
      }

      const names = ['Poppy', 'Milo', 'Nori', 'Luma', 'Kiko', 'Rin', 'Tavi', 'Mochi']
      const name = names[Math.floor(Math.random() * names.length)] + ` ${nextFarmPipId % 100}`
      pips.value.push({
        id: `farm-pip-${nextFarmPipId++}`,
        name,
        color: ['#f3a6a6', '#9bcaf7', '#a4dbad', '#e9cc8d'][Math.floor(Math.random() * 4)],
        personality: chosen.text,
        provider: 'glade',
        model: 'farmborn',
        status: 'idle',
        position_x: glade.center.x + (Math.random() - 0.5) * 8,
        position_z: glade.center.z + (Math.random() - 0.5) * 8,
        source: 'farm',
        gladeId: glade.id,
      })
      spawnTimersByGlade.value[glade.id] = 45
      if (glade.id === activeGladeId.value) {
        farmSpawnNotice.value = `New farm pip in ${glade.name}: ${name} (${chosen.key})`
      }
    }
    updateActiveFarmStats()
  }

  function spawnDynamicGlade(name, themeStr, provider = 'glade', model = 'native') {
    const gladeCount = gladeSlots.value.length
    const radius = 160 + (gladeCount * 10)
    const angle = gladeCount * 1.3
    const x = Math.round(Math.cos(angle) * radius)
    const z = Math.round(Math.sin(angle) * radius)
    
    const colors = {
      'Cyber Land': '#63cdda',
      'Media Land': '#f8a5c2',
      'Cinema Land': '#f5cd79',
      'Magic Land': '#d2b4de',
      'Default': '#a8db92'
    }
    const color = colors[themeStr] || colors['Default']
    
    const newId = 'glade-dyn-' + Date.now()
    const newGlade = createGlade(newId, name || 'New Project', 'custom', themeStr || 'Default', color, { x, z }, [
       makePip('Planner', '#ffffff', x - 2, z - 2, 'Eager to organize.', newId, provider, model),
    ])
    
    gladeSlots.value.push(newGlade)
    pips.value.push(...clone(newGlade.pips))
    spawnTimersByGlade.value[newId] = 45
    activeGladeId.value = newId
    updateActiveFarmStats()
    setMode('explore')
    return newGlade
  }

  function spawnFairy(x, y, z) {
    const fx = x ?? (Math.random() - 0.5) * 200
    const fy = y ?? 5 + Math.random() * 5
    const fz = z ?? (Math.random() - 0.5) * 200
    const color = ['#ffccf9', '#ccffff', '#ffffcc', '#ccffcc'][Math.floor(Math.random() * 4)]
    fairies.value.push({
      id: 'fairy-' + Date.now() + Math.random(),
      x: fx,
      y: fy,
      z: fz,
      color,
      speed: 0.5 + Math.random() * 1.5,
    })
  }

  function captureFairy(fairyId) {
    const idx = fairies.value.findIndex((f) => f.id === fairyId)
    if (idx !== -1) {
      fairies.value.splice(idx, 1)
      capturedFairies.value++
      return true
    }
    return false
  }

  function equipHat(pipId, hat) {
    const pipIdx = pips.value.findIndex((p) => p.id === pipId)
    if (pipIdx !== -1) {
      const p = pips.value[pipIdx]
      p.hat = hat ? hat.id : null
      
      // Effects
      if (hat) {
        if (hat.id === 'wizard_hat') {
          p.provider = 'anthropic'
          p.model = 'claude-3-opus-20240229'
          p.personality = 'Extremely wise and eloquent, master of logic.'
        } else if (hat.id === 'hard_hat') {
          p.provider = 'ollama'
          p.model = 'llama3'
          p.personality = 'Reliable and focused on the task at hand.'
        } else if (hat.id === 'beret') {
          p.personality = 'A creative soul, speaks in poetic metaphors.'
        } else if (hat.id === 'crown') {
          p.personality = 'The Royal Leader of the Glade. Commands respect.'
        }
      }
      
      pips.value[pipIdx] = { ...p }
      return true
    }
    return false
  }

  function spawnWildPip() {
     const x = (Math.random() - 0.5) * 180
     const z = (Math.random() - 0.5) * 180
     const id = `wild-pip-${Date.now()}`
     const color = ['#ffaaaa', '#aaffaa', '#aaaaff', '#ffffaa'][Math.floor(Math.random() * 4)]
     wildPips.value.push({
        id,
        name: 'Wild Pip',
        color,
        x,
        z,
        level: Math.floor(Math.random() * 5) + 1,
     })
  }

  function captureWildPip(wildId) {
     const idx = wildPips.value.findIndex(p => p.id === wildId)
     if (idx !== -1) {
        const w = wildPips.value[idx]
        const newPip = makePip('New Friend', w.color, w.x, w.z, 'Just captured from the wild!', activeGladeId.value)
        newPip.source = 'wild'
        pips.value.push(newPip)
        wildPips.value.splice(idx, 1)
        return true
     }
     return false
  }

  function addPipExp(pipId, amount) {
    const idx = pips.value.findIndex(p => p.id === pipId)
    if (idx !== -1) {
      const p = { ...pips.value[idx] }
      p.exp = (p.exp || 0) + amount
      if (p.exp > 100) {
        p.level = (p.level || 1) + 1
        p.model = p.level > 3 ? 'gpt-4' : p.model
        p.exp = 0
        pips.value[idx] = p
        return true
      }
      pips.value[idx] = p
    }
    return false
  }
  function feedPip(pipId) {
    const idx = pips.value.findIndex(p => p.id === pipId)
    if (idx !== -1) {
      addPipExp(pipId, 35)
      const p = { ...pips.value[idx] }
      p.hunger = Math.min(100, (p.hunger || 0) + 40)
      p.emotionalBond = Math.min(100, (p.emotionalBond || 0) + 5)
      pips.value[idx] = p
      
      // Increment brick count for building pyramids
      p.brickCount = (p.brickCount || 0) + 1
      p.isBuilding = true
      setTimeout(() => { p.isBuilding = false }, 5000) // Reset building status after animation

      triggerInteractionText(p.position_x, p.position_z, '+35 XP', '#ffd700')
      setTimeout(() => triggerInteractionText(p.position_x, p.position_z, '+5 Bond', '#ff8ebc'), 200)
      setTimeout(() => grantSmallGift(p, 'feed'), 350)

      // Extra-cute reaction animation
      import('../three/pips.js').then((m) => m.triggerPipReaction?.(pipId, 'feed'))
      triggerFxPulse()

      if (onboardingStep.value === 3) onboardingStep.value = 4
      return true
    }
    return false
  }

  function hydratePip(pipId) {
    const idx = pips.value.findIndex(p => p.id === pipId)
    if (idx !== -1) {
      addPipExp(pipId, 25)
      const p = { ...pips.value[idx] }
      p.thirst = Math.min(100, (p.thirst || 0) + 40)
      p.emotionalBond = Math.min(100, (p.emotionalBond || 0) + 3)
      pips.value[idx] = p

      // Increment brick count for building pyramids
      p.brickCount = (p.brickCount || 0) + 1
      p.isBuilding = true
      setTimeout(() => { p.isBuilding = false }, 5000)

      triggerInteractionText(p.position_x, p.position_z, '+25 XP', '#ffd700')
      setTimeout(() => triggerInteractionText(p.position_x, p.position_z, '+3 Bond', '#ff8ebc'), 200)
      setTimeout(() => grantSmallGift(p, 'hydrate'), 350)

      // Extra-cute reaction animation
      import('../three/pips.js').then((m) => m.triggerPipReaction?.(pipId, 'hydrate'))
      triggerFxPulse()

      return true
    }
    return false
  }

  function triggerInteractionText(x, z, text, color) {
    const id = 'text-' + Date.now() + Math.random()
    floatingTexts.value.push({ id, x, z, text, color })
    setTimeout(() => {
      floatingTexts.value = floatingTexts.value.filter(t => t.id !== id)
    }, 1500)
  }

  function removePip(pipId) {
    const idx = pips.value.findIndex(p => p.id === pipId)
    if (idx !== -1) {
      pips.value.splice(idx, 1)
      return true
    }
    return false
  }

  function removeFarmBlock(blockId) {
    const idx = farmBlocks.value.findIndex(b => b.id === blockId)
    if (idx !== -1) {
      farmBlocks.value.splice(idx, 1)
      recomputeFarmStats()
      return true
    }
    return false
  }

  function nextOnboarding() {
    onboardingStep.value++
  }

  return {
    selectedPip: readonly(selectedPip),
    pips,
    councilActive,
    chatOpen,
    currentMode,
    modeDefinitions,
    buildMode,
    playfulMode,
    selectedTool,
    farmTools,
    farmBlocks,
    farmStats,
    farmSpawnNotice,
    activeGladeId,
    activeGlade,
    gladeSlots,
    gladeSummaries,
    totalPips,
    playerPosition,
    selectGladeSlot,
    setPlayerPosition,
    selectPip,
    deselectPip,
    triggerGathering,
    setPips,
    updatePipInList,
    openChat,
    closeChat,
    setMode,
    cycleMode,
    toggleBuildMode,
    cycleSlot,
    selectToolByKey,
    placeFarmBlock,
    tickFarm,
    spawnDynamicGlade,
    fairies,
    capturedFairies,
    pokeballs,
    spawnFairy,
    captureFairy,
    inventory,
    selectedSlot,
    wildPips,
    equipHat,
    spawnWildPip,
    captureWildPip,
    addPipExp,
    onboardingStep,
    guidePip,
    feedPip,
    hydratePip,
    nearbyPip,
    floatingTexts,
    toast,
    showToast,
    fxPulse,
    triggerFxPulse,
    nextOnboarding,
    removePip,
    removeFarmBlock,
    terminalOpen,
    toggleTerminal,
    createPip,
    speakToAgent,
    addPromptNote,
    copyConversations,
  }
}

function speakToAgent(pipId, text) {
  const { pips, updatePipInList } = useScene()
  const pip = pips.value.find(p => p.id === pipId)
  if (pip) {
    updatePipInList({ id: pipId, currentSpeech: text })
    // Clear speech after delay
    setTimeout(() => {
      updatePipInList({ id: pipId, currentSpeech: '' })
    }, 6000)
  }
}

function addPromptNote(text, x, z) {
  const { activeGladeId } = useScene()
  import('../three/pips.js').then(m => {
    // We need to pass the scene. This might be tricky from here.
    // Usually it's better to have a ref to the scene or a function in GladeCanvas
  })
}

function copyConversations() {
  const logs = localStorage.getItem('pips_conversations')
  if (logs) {
    navigator.clipboard.writeText(logs)
    return true
  }
  return false
}

function seedGlades() {
  return [
    createGlade('glade-prod', 'Production District', 'content', 'Flower Land', '#f2b7cf', { x: -60, z: -40 }, [
      makePip('Pistil', '#f08aac', -66, -42, 'Cheerful and collaborative.', 'glade-prod'),
      makePip('Petal', '#86dca3', -58, -35, 'Organized and supportive.', 'glade-prod'),
    ]),
    createGlade('glade-forge', 'Infrastructure Forge', 'infra', 'Lava Land', '#ef9a6f', { x: 60, z: -40 }, [
      makePip('Cinder', '#f0805f', 56, -38, 'Fast, bold, and practical.', 'glade-forge'),
      makePip('Basalt', '#7a6262', 64, -44, 'Steady and defensive.', 'glade-forge'),
    ]),
    createGlade('glade-amber', 'Design Amber', 'design', 'Autumn Land', '#e0b26f', { x: -60, z: 40 }, [
      makePip('Maple', '#d38b4d', -66, 36, 'Reflective and balanced.', 'glade-amber'),
      makePip('Acorn', '#ba8b62', -56, 45, 'Patient and detail-oriented.', 'glade-amber'),
    ]),
    createGlade('glade-dusk', 'Product Twilight', 'product', 'Sunset Land', '#c9a0ff', { x: 60, z: 40 }, [
      makePip('Nova', '#d58cff', 56, 44, 'Visionary and strategic.', 'glade-dusk'),
      makePip('Ray', '#ffb88f', 64, 37, 'Warm communicator and planner.', 'glade-dusk'),
    ]),
    createGlade('glade-frost', 'Research Frost', 'research', 'Mist Land', '#9ec9ef', { x: 0, z: -70 }, [
      makePip('Drift', '#8abbe8', -4, -74, 'Analytical and curious.', 'glade-frost'),
      makePip('Halo', '#b0d8ff', 4, -66, 'Calm and evidence-driven.', 'glade-frost'),
    ]),
    createGlade('glade-wild', 'Experimental Meadow', 'experiments', 'Meadow Land', '#a8db92', { x: 0, z: 70 }, [
      makePip('Moss', '#84c677', 2, 68, 'Playful and experimental.', 'glade-wild'),
    ]),
    createGlade('glade-web', 'Web Services Hub', 'web', 'Cyber Land', '#63cdda', { x: 120, z: 0 }, [
      makePip('Admin', '#3dc1d3', 118, 3, 'Vigilant and precise.', 'glade-web'),
      makePip('Builder', '#1e90ff', 123, -5, 'Logical and efficient.', 'glade-web'),
    ]),
    createGlade('glade-media', 'Media Collective', 'media', 'Media Land', '#f8a5c2', { x: -120, z: 0 }, [
      makePip('Frame', '#f78fb3', -122, -2, 'Creative and visionary.', 'glade-media'),
      makePip('Script', '#e77f98', -118, 5, 'Detail-oriented and focused.', 'glade-media'),
    ]),
  ]
}

function createGlade(id, name, project, theme, color, center, gladePips) {
  return {
    id,
    name,
    project,
    theme,
    color,
    center,
    zone: {
      minX: center.x - 8,
      maxX: center.x + 8,
      minZ: center.z - 8,
      maxZ: center.z + 8,
    },
    pips: gladePips,
  }
}

function makePip(name, color, x, z, personality, gladeId, provider = 'glade', model = 'native') {
  return {
    id: `pip-${name.toLowerCase()}-${Math.random().toString(16).slice(2, 6)}`,
    name,
    color,
    personality,
    provider,
    model,
    status: 'idle',
    position_x: x,
    position_z: z,
    gladeId,
    hunger: 60 + Math.random() * 40,
    thirst: 60 + Math.random() * 40,
    emotionalBond: Math.floor(Math.random() * 20),
    level: 1,
    exp: 0,
    brickCount: 0,
    isBuilding: false,
  }
}

export function createPip(name, color, x, z, personality, gladeId, provider = 'glade', model = 'native') {
  const newPip = makePip(name, color, x, z, personality, gladeId, provider, model)
  pips.value.push(newPip)
  return newPip
}

function makeEmptyFarmStats() {
  return {
    capacity: 0,
    growthRate: 1.0,
    calmBias: 0,
    boldBias: 0,
    curiousBias: 0,
    nextSpawnIn: 45,
  }
}

function recomputeFarmStatsForGlade(gladeId) {
  const stats = makeEmptyFarmStats()
  for (const block of farmBlocks.value) {
    if (block.gladeId !== gladeId) continue
    if (block.type === 'nest') stats.capacity += 1
    if (block.type === 'lantern') stats.growthRate += 0.25
    if (block.type === 'totem') {
      stats.boldBias += 1
      stats.curiousBias += 1
    }
    if (block.type === 'archive') stats.calmBias += 2
  }
  stats.nextSpawnIn = spawnTimersByGlade.value[gladeId] ?? 45
  return stats
}

pips.value = gladeSlots.value.flatMap((g) => clone(g.pips))
updateActiveFarmStats()
