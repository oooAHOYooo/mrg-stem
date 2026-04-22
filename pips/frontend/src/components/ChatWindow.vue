<script setup>
import { ref, watch, nextTick, computed } from 'vue'
import { useScene } from '../composables/useScene.js'
import { useApi } from '../composables/useApi.js'
import { useWebSocket } from '../composables/useWebSocket.js'
import { useDraggable } from '../composables/useDraggable.js'

const { selectedPip, councilActive, chatOpen, pips, addPipExp } = useScene()
const { chatWithPip } = useApi()
const { messages: wsMessages } = useWebSocket()

const chatWindowEl = ref(null)
const { dragStyles, onMouseDown } = useDraggable(chatWindowEl, { x: 0, y: 0 }, 'pip-chat-pos')

const chatMessages = ref([])
const inputText = ref('')
const sending = ref(false)
const messagesEl = ref(null)
const inputEl = ref(null)

const isVisible = computed(() => councilActive.value || (selectedPip.value && chatOpen.value))
const headerText = computed(() => {
  if (councilActive.value) return 'Council Chamber'
  if (selectedPip.value) return `Chat with ${selectedPip.value.name}`
  return 'Chat'
})

async function sendMessage() {
  const text = inputText.value.trim()
  if (!text || sending.value) return

  if (councilActive.value) {
    // Council mode: read only or handled elsewhere
    return
  }

  if (!selectedPip.value) return

  const pipId = selectedPip.value.id
  const pipName = selectedPip.value.name
  const pipColor = selectedPip.value.color || '#e06060'

  // Add user message
  chatMessages.value.push({
    role: 'user',
    content: text,
  })
  inputText.value = ''
  sending.value = true

  try {
    const response = await chatWithPip(pipId, text)
    chatMessages.value.push({
      role: 'pip',
      name: pipName,
      color: pipColor,
      content: response?.reply || response?.content || response?.message || JSON.stringify(response),
    })
  } catch (err) {
    chatMessages.value.push({
      role: 'pip',
      name: 'System',
      color: '#ff6666',
      content: `Error: ${err.message}`,
    })
  } finally {
    sending.value = false
    const leveledUp = addPipExp(pipId, 25)
    
    // Increment brick count for building pyramids
    const idx = pips.value.findIndex(p => p.id === pipId)
    if (idx !== -1) {
      const p = pips.value[idx]
      p.brickCount = (p.brickCount || 0) + 1
      p.isBuilding = true
      setTimeout(() => { p.isBuilding = false }, 5000)
    }

    if (leveledUp) {
      chatMessages.value.push({
        role: 'pip',
        name: 'System',
        color: '#ffd700',
        content: `✨ ${pipName} has LEVELED UP! Their intelligence is expanding.`
      })
    }
  }
}

function focusInput() {
  nextTick(() => {
    inputEl.value?.focus()
  })
}

// Auto-scroll
watch(
  () => chatMessages.value.length,
  () => {
    nextTick(() => {
      if (messagesEl.value) {
        messagesEl.value.scrollTop = messagesEl.value.scrollHeight
      }
    })
  }
)

// Also scroll on websocket messages in council mode
watch(
  () => wsMessages.value.length,
  () => {
    nextTick(() => {
      if (messagesEl.value) {
        messagesEl.value.scrollTop = messagesEl.value.scrollHeight
      }
    })
  }
)

// Clear chat when pip changes
watch(
  () => selectedPip.value?.id,
  () => {
    chatMessages.value = []
  }
)

defineExpose({ focusInput })
</script>

<template>
  <div
    v-if="isVisible"
    ref="chatWindowEl"
    class="chat-window panel"
    :style="dragStyles()"
  >
    <div
      class="draggable"
      style="font-weight: bold; margin-bottom: 8px; font-size: 14px; padding: 2px 0;"
      @mousedown="onMouseDown"
    >
      {{ headerText }}
    </div>

    <div ref="messagesEl" class="chat-messages">
      <!-- Individual chat messages -->
      <template v-if="!councilActive">
        <div
          v-for="(msg, i) in chatMessages"
          :key="i"
          class="chat-bubble"
          :class="msg.role"
        >
          <div v-if="msg.role === 'pip'" class="bubble-name" :style="{ color: msg.color }">
            {{ msg.name }}
          </div>
          {{ msg.content }}
        </div>
        <div v-if="sending" class="chat-bubble pip" style="opacity: 0.6;">
          <span class="loading-dots">Thinking</span>
        </div>
      </template>

      <!-- Council messages from websocket -->
      <template v-else>
        <div
          v-for="(msg, i) in wsMessages"
          :key="'ws-' + i"
          class="chat-bubble pip"
        >
          <div v-if="msg.agent_name" class="bubble-name" :style="{ color: msg.color || '#c060c0' }">
            {{ msg.agent_name }}
          </div>
          {{ msg.content || msg.message || JSON.stringify(msg) }}
        </div>
        <div v-if="wsMessages.length === 0" style="opacity: 0.4; font-size: 12px; text-align: center; padding: 20px;">
          Council is in session... awaiting responses
        </div>
      </template>
    </div>

    <div v-if="!councilActive" class="chat-input-row">
      <input
        ref="inputEl"
        v-model="inputText"
        type="text"
        :placeholder="selectedPip ? `Say something to ${selectedPip.name}...` : 'Type a message...'"
        :disabled="sending"
        @keydown.enter="sendMessage"
      />
      <button class="send-btn" :disabled="sending || !inputText.trim()" @click="sendMessage">
        Send
      </button>
    </div>
  </div>
</template>
