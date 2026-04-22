<script setup>
import { ref } from 'vue'
import { useScene } from '../composables/useScene.js'
import { useWebSocket } from '../composables/useWebSocket.js'
import { startGathering, endGathering } from '../three/gathering.js'
import { getPipMeshMap } from '../three/pips.js'

const { pips, councilActive, triggerGathering, deselectPip } = useScene()
const { connect, disconnect, send, messages } = useWebSocket()

const promptText = ref('')
const showPrompt = ref(false)

function onSummon() {
  if (councilActive.value) {
    // End council
    send({ type: 'end_council' })
    endGathering()
    triggerGathering()
    showPrompt.value = false
    disconnect()
  } else {
    // Start council
    deselectPip()
    connect()
    triggerGathering()
    startGathering(pips.value, getPipMeshMap())
    showPrompt.value = true
  }
}

function sendPrompt() {
  const text = promptText.value.trim()
  if (!text) return

  send({
    type: 'start_council',
    prompt: text,
    agent_ids: pips.value.map((p) => p.id),
  })

  messages.value.push({
    agent_name: 'You',
    color: '#a0a0ff',
    content: text,
  })

  promptText.value = ''
  showPrompt.value = false
}
</script>

<template>
  <div class="council-btn-wrap">
    <button
      class="council-btn"
      :class="{ active: councilActive }"
      @click="onSummon"
    >
      {{ councilActive ? 'End Council' : 'Summon the Council' }}
    </button>

    <div v-if="showPrompt && councilActive" class="council-prompt" style="margin-top: 8px;">
      <input
        v-model="promptText"
        type="text"
        placeholder="What shall the council discuss?"
        style="width: 250px;"
        @keydown.enter="sendPrompt"
      />
      <button class="send-btn" @click="sendPrompt">Ask</button>
    </div>
  </div>
</template>
