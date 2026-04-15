<template>
  <div class="health-panel" :class="{ 'p1': isPlayer1, 'p2': !isPlayer1 }">
    <div class="name">{{ name }}</div>
    <div class="bar-container glass">
      <div 
        class="bar-fill" 
        :style="{ 
          width: `${Math.min(health, 100)}%`, 
          background: getHealthColor(health),
          boxShadow: `0 0 20px ${getHealthColor(health)}`
        }"
      ></div>
      <div class="health-txt" :style="{ color: health > 100 ? '#ff1744' : 'white' }">
        {{ Math.ceil(health) }}%
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
  health: number;
  color: string;
  isPlayer1?: boolean;
}>();

const getHealthColor = (h: number) => {
  if (h < 50) return '#4caf50'; // Green
  if (h < 100) return '#ffeb3b'; // Yellow
  if (h < 150) return '#ff9800'; // Orange
  return '#ff1744'; // Red
};
</script>

<style scoped>
.health-panel {
  width: 250px;
  padding: 1rem;
}

.name {
  font-size: 0.9rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(0,0,0,0.5);
}

.p1 .name { color: #ff6b6b; text-align: left; }
.p2 .name { color: #4ecdc4; text-align: right; }

.bar-container {
  height: 28px;
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}

.bar-fill {
  height: 100%;
  transition: width 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.health-txt {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 0.8rem;
  color: white;
  text-shadow: 0 0 5px black;
}
</style>
