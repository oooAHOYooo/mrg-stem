<script setup lang="ts">
import { onMounted, onUnmounted, ref, reactive } from 'vue';
import * as THREE from 'three';
import HealthBar from './components/HealthBar.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const container = ref<HTMLElement | null>(null);

// Game State
const players = reactive({
  p1: { name: 'Player 1', health: 100, color: '#ff6b6b' },
  p2: { name: 'Player 2', health: 100, color: '#4ecdc4' }
});

let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;
let animationId: number;

onMounted(() => {
  if (!container.value) return;

  // Initialize Three.js Scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color('#0f172a');
  
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 15;
  camera.position.y = 5;

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.value.appendChild(renderer.domElement);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const solarLight = new THREE.DirectionalLight(0xffffff, 0.8);
  solarLight.position.set(10, 20, 10);
  scene.add(solarLight);

  // Add a placeholder platform
  const stageGeo = new THREE.BoxGeometry(20, 1, 5);
  const stageMat = new THREE.MeshStandardMaterial({ color: '#1e293b', roughness: 0.3 });
  const stage = new THREE.Mesh(stageGeo, stageMat);
  scene.add(stage);

  // Animation Loop
  const animate = () => {
    animationId = requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };
  animate();

  // Resize handler
  window.addEventListener('resize', handleResize);
});

const handleResize = () => {
  if (!container.value) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

onUnmounted(() => {
  cancelAnimationFrame(animationId);
  window.removeEventListener('resize', handleResize);
  renderer.dispose();
});
</script>

<template>
  <div class="smash-stage">
    <div ref="container" class="game-container"></div>

    <div class="ui-overlay">
      <!-- HUD -->
      <nav class="hud glass">
        <button class="exit-btn" @click="router.push('/')">← EXIT</button>
        <div class="match-info">ARENA MODE</div>
        <div class="timer">99</div>
      </nav>

      <!-- Health HUD -->
      <div class="health-hud">
        <HealthBar :name="players.p1.name" :health="players.p1.health" :color="players.p1.color" isPlayer1 />
        <HealthBar :name="players.p2.name" :health="players.p2.health" :color="players.p2.color" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.smash-stage {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: radial-gradient(circle at center, #1e1b4b, #0f172a);
}

.game-container {
  width: 100%;
  height: 100%;
}

.ui-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.hud {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
  border-radius: 15px;
  pointer-events: auto;
}

.exit-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 6px 12px;
  border-radius: 8px;
  font-weight: 800;
  cursor: pointer;
}

.match-info { font-weight: 900; letter-spacing: 2px; color: #94a3b8; }
.timer { font-weight: 900; font-size: 1.5rem; color: var(--arcade-accent); }

.health-hud {
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  width: 600px;
}
</style>
