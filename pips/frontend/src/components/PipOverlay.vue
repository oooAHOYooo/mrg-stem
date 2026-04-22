<script setup>
import { ref, watch } from 'vue'
import { useScene } from '../composables/useScene.js'
import { useDraggable } from '../composables/useDraggable.js'

const {
  selectedPip,
  deselectPip,
  openChat,
  closeChat,
} = useScene()

const pipOverlayEl = ref(null)
const { dragStyles, onMouseDown } = useDraggable(pipOverlayEl, { x: 0, y: 0 }, 'pip-overlay-pos')

const menuView = ref('menu')

const emit = defineEmits(['focus-chat'])

function onTalk() {
  openChat()
  emit('focus-chat')
}

function onBackToMenu() {
  closeChat()
  menuView.value = 'menu'
}

watch(
  () => selectedPip.value?.id,
  () => {
    menuView.value = 'menu'
  }
)
</script>

<template>
  <div
    v-if="selectedPip"
    ref="pipOverlayEl"
    class="pip-overlay panel"
    :style="dragStyles()"
  >
    <div
      class="draggable"
      style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; padding: 2px 0;"
      @mousedown="onMouseDown"
    >
      <div style="display: flex; align-items: center; gap: 8px;">
        <span
          class="status-dot"
          :style="{ backgroundColor: selectedPip.color || '#e06060' }"
        ></span>
        <strong style="font-size: 16px;">{{ selectedPip.name || 'Unknown Pip' }}</strong>
        <span style="font-size: 11px; opacity: 0.8; background: #555; padding: 1px 4px; border-radius: 4px; color: #fff;">
          Lv. {{ selectedPip.level || 1 }}
        </span>
      </div>
      <button class="close-btn" @click.stop="deselectPip">&times;</button>
    </div>

    <div style="font-size: 12px; opacity: 0.7; margin-bottom: 8px;">
      {{ selectedPip.provider || 'openai' }} / {{ selectedPip.model || 'gpt-4' }}
    </div>

    <div v-if="selectedPip.personality" style="font-size: 13px; margin-bottom: 12px; line-height: 1.4;">
      "{{ selectedPip.personality }}"
    </div>

    <div style="font-size: 12px; margin-bottom: 12px;">
      Status:
      <span :style="{ color: selectedPip.status === 'active' ? '#6be07a' : '#e0c040' }">
        {{ selectedPip.status || 'idle' }}
      </span>
      <div v-if="selectedPip.exp !== undefined" style="margin-top: 4px; height: 4px; width: 100%; background: rgba(0,0,0,0.2); border-radius: 2px; overflow: hidden;">
         <div :style="{ width: `${selectedPip.exp}%`, height: '100%', background: '#ffd700' }"></div>
      </div>
      
      <div v-if="selectedPip.hunger !== undefined" style="margin-top: 8px; display: flex; flex-direction: column; gap: 4px;">
        <div style="display: flex; justify-content: space-between; font-size: 10px; opacity: 0.8;">
          <span>Hunger</span>
          <span>{{ Math.round(selectedPip.hunger) }}%</span>
        </div>
        <div style="height: 4px; width: 100%; background: rgba(0,0,0,0.2); border-radius: 2px; overflow: hidden;">
          <div class="stat-fill hunger" :style="{ width: `${selectedPip.hunger}%`, height: '100%' }"></div>
        </div>
        
        <div style="display: flex; justify-content: space-between; font-size: 10px; opacity: 0.8; margin-top: 2px;">
          <span>Thirst</span>
          <span>{{ Math.round(selectedPip.thirst) }}%</span>
        </div>
        <div style="height: 4px; width: 100%; background: rgba(0,0,0,0.2); border-radius: 2px; overflow: hidden;">
          <div class="stat-fill thirst" :style="{ width: `${selectedPip.thirst}%`, height: '100%' }"></div>
        </div>

        <div style="display: flex; justify-content: space-between; font-size: 10px; opacity: 0.8; margin-top: 2px;">
          <span>Bond</span>
          <span>{{ Math.round(selectedPip.emotionalBond || 0) }}%</span>
        </div>
        <div style="height: 4px; width: 100%; background: rgba(255,100,150,0.1); border-radius: 2px; overflow: hidden;">
          <div :style="{ width: `${selectedPip.emotionalBond || 0}%`, height: '100%', background: 'linear-gradient(90deg, #ff758c 0%, #ff7eb3 100%)' }"></div>
        </div>

        <!-- Pyramid Bricks Progress -->
        <div style="display: flex; justify-content: space-between; font-size: 10px; opacity: 0.8; margin-top: 2px;">
          <span>Pyramid Built</span>
          <span style="color: #ffd700;">🧱 {{ selectedPip.brickCount || 0 }}</span>
        </div>
        <div style="height: 2px; width: 100%; background: rgba(255,215,0,0.1); border-radius: 1px; overflow: hidden; margin-top: 2px;">
          <div :style="{ width: `${Math.min(100, (selectedPip.brickCount || 0) * 2)}%`, height: '100%', background: '#ffd700' }"></div>
        </div>
      </div>
    </div>

    <div v-if="menuView === 'menu'" style="display: flex; flex-direction: column; gap: 8px;">
      <button class="send-btn" @click="menuView = 'details'" style="width: 100%;">Inspect</button>
      <button class="send-btn" @click="onTalk" style="width: 100%;">Talk</button>
      <button class="send-btn" @click="deselectPip" style="opacity: 0.6; width: 100%;">Close</button>
    </div>

    <div v-else style="display: flex; flex-direction: column; gap: 10px;">
      <div style="font-size: 12px; opacity: 0.85; line-height: 1.5;">
        <strong>About {{ selectedPip.name }}</strong><br />
        <span>
          {{ selectedPip.personality || 'A mysterious glade creature.' }}
        </span>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="send-btn" @click="onTalk" style="flex: 1;">Talk</button>
        <button class="send-btn" @click="onBackToMenu" style="opacity: 0.7; flex: 1;">Back</button>
      </div>
    </div>
  </div>
</template>
