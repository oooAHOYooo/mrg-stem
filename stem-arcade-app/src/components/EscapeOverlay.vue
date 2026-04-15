<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const isVisible = ref(false);
let hideTimeout = null;

const handlePointerLockChange = () => {
  if (document.pointerLockElement) {
    isVisible.value = true;
    
    // Auto-hide after 4 seconds
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      if (document.pointerLockElement) {
        isVisible.value = false;
      }
    }, 4000);
  } else {
    // Hide immediately on unlock
    isVisible.value = false;
    clearTimeout(hideTimeout);
  }
};

onMounted(() => {
  document.addEventListener('pointerlockchange', handlePointerLockChange);
});

onUnmounted(() => {
  document.removeEventListener('pointerlockchange', handlePointerLockChange);
  clearTimeout(hideTimeout);
});
</script>

<template>
  <div :class="['esc-overlay-vue', { 'visible': isVisible }]">
    <div class="keycap-container">
      <div class="keycap">ESC</div>
      <div class="keycap-pulse"></div>
    </div>
    <div class="text-container">
      <div class="main-text">Press Escape to Exit</div>
      <div class="sub-text">Unlock mouse to return to HUD</div>
    </div>
  </div>
</template>

<style scoped>
.esc-overlay-vue {
  position: fixed;
  top: 40px;
  left: 50%;
  transform: translateX(-50%) translateY(-150px);
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(12px);
  padding: 14px 28px;
  border-radius: 20px;
  border: 2px solid #ff6b6b;
  display: flex;
  align-items: center;
  gap: 18px;
  z-index: 99999;
  transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  pointer-events: none;
  opacity: 0;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 107, 107, 0.3);
  font-family: 'Outfit', sans-serif;
  color: white;
}

.esc-overlay-vue.visible {
  transform: translateX(-50%) translateY(0);
  opacity: 1;
}

.keycap-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.keycap {
  background: linear-gradient(135deg, #3d4452, #242933);
  border: 2px solid #57606f;
  border-bottom: 6px solid #161a21;
  padding: 10px 16px;
  border-radius: 12px;
  font-weight: 850;
  font-size: 1.2rem;
  color: white;
  box-shadow: 0 4px 10px rgba(0,0,0,0.5);
  display: inline-block;
  text-shadow: 0 0 10px rgba(255,255,255,0.3);
}

.keycap-pulse {
  position: absolute;
  inset: -4px;
  border: 2px solid #ff6b6b;
  border-radius: 14px;
  opacity: 0;
  animation: key-pulse-anim-vue 2s infinite;
}

@keyframes key-pulse-anim-vue {
  0% { transform: scale(0.9); opacity: 0.8; }
  100% { transform: scale(1.4); opacity: 0; }
}

.text-container {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.main-text {
  font-weight: 800;
  font-size: 1rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.sub-text {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
}
</style>
