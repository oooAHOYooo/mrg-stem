<script setup lang="ts">
import { computed } from 'vue';
import { useArcadeStore } from '../stores/arcade';
import { useRouter } from 'vue-router';

const props = defineProps<{ id: string }>();
const store = useArcadeStore();
const router = useRouter();

const game = computed(() => store.games.find(g => g.id === props.id));

const exit = () => {
  router.push('/');
};
</script>

<template>
  <div v-if="game" class="game-view">
    <nav class="game-nav glass">
      <div class="left">
        <button class="back-btn" @click="exit">← HUB</button>
        <span class="game-title">{{ game.emoji }} {{ game.title }}</span>
      </div>
      <div class="right">
        <div class="xp-badge">✨ {{ store.stemXp }} XP</div>
      </div>
    </nav>
    
    <div class="stage">
      <!-- We load the existing HTML experiments in a seamless iframe -->
      <iframe :src="game.path" class="game-frame" frameborder="0"></iframe>
    </div>
  </div>
</template>

<style scoped>
.game-view {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: black;
}

.game-nav {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1200px;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 20px;
}

.left {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.back-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 12px;
  color: white;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s ease;
}

.back-btn:hover {
  background: var(--arcade-primary);
  border-color: var(--arcade-primary);
}

.game-title {
  font-weight: 800;
  font-size: 1.1rem;
}

.xp-badge {
  background: linear-gradient(135deg, var(--arcade-accent), #d97706);
  color: black;
  font-weight: 900;
  padding: 6px 16px;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(245, 158, 11, 0.3);
}

.stage {
  flex-grow: 1;
  width: 100%;
  height: 100%;
}

.game-frame {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
