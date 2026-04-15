<script setup lang="ts">
import { useArcadeStore } from '../stores/arcade';
import { useRouter } from 'vue-router';

const store = useArcadeStore();
const router = useRouter();

const play = (game: any) => {
  if (game.native) {
    router.push({ name: game.id });
  } else {
    router.push({ name: 'play', params: { id: game.id } });
  }
};
</script>

<template>
  <div class="home-view">
    <header class="hero">
      <h1>THE STEM <span class="accent">ARCADE</span></h1>
      <p>Premium 3D Experiments for Curious Minds</p>
    </header>

    <div class="game-grid">
      <div 
        v-for="game in store.games" 
        :key="game.id" 
        class="glass-card game-card"
        @click="play(game)"
      >
        <div class="emoji">{{ game.emoji }}</div>
        <div class="content">
          <span class="category">{{ game.category }}</span>
          <h3>{{ game.title }}</h3>
          <div class="play-hint">Play Now →</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-view {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  margin-bottom: 4rem;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: -2px;
  margin-bottom: 0.5rem;
}

.accent {
  color: var(--arcade-primary);
  text-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
}

.hero p {
  font-size: 1.2rem;
  color: #94a3b8;
}

.game-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.game-card {
  cursor: pointer;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.emoji {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.game-card:hover .emoji {
  transform: scale(1.2) rotate(10deg);
}

.category {
  font-size: 0.7rem;
  font-weight: 800;
  color: var(--arcade-primary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.game-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0.5rem 0 1rem;
}

.play-hint {
  font-weight: 700;
  color: #94a3b8;
  font-size: 0.9rem;
}

.game-card:hover .play-hint {
  color: var(--arcade-primary);
}
</style>
