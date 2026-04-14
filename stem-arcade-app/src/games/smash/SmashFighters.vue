<script setup lang="ts">
import { onMounted, onUnmounted, ref, reactive } from 'vue';
import * as THREE from 'three';
import HealthBar from './components/HealthBar.vue';
import EscapeOverlay from '../../components/EscapeOverlay.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const container = ref<HTMLElement | null>(null);

// Constants from original logic
const GRAVITY = -0.015;
const JUMP_FORCE = 0.45;
const MOVE_SPEED = 0.08;
const PLATFORM_TOP = 0.5;

// Game State
const players = reactive({
  p1: { 
    name: 'Player 1', 
    health: 0, // percentage in Smash logic
    color: '#ff6b6b',
    position: new THREE.Vector3(-5, 5, 0),
    velocity: new THREE.Vector3()
  },
  p2: { 
    name: 'Player 2', 
    health: 0, 
    color: '#4ecdc4',
    position: new THREE.Vector3(5, 5, 0),
    velocity: new THREE.Vector3()
  }
});

let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;
let animationId: number;
const keys: Record<string, boolean> = {};

// Mesh references
let p1Mesh: THREE.Group, p2Mesh: THREE.Group;

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
  scene.add(new THREE.AmbientLight(0xffffff, 0.6));
  const light = new THREE.DirectionalLight(0xffffff, 0.8);
  light.position.set(10, 20, 10);
  scene.add(light);

  // Stage
  const stageGeo = new THREE.BoxGeometry(20, 1, 5);
  const stageMat = new THREE.MeshStandardMaterial({ color: '#1e293b', roughness: 0.3 });
  const stage = new THREE.Mesh(stageGeo, stageMat);
  scene.add(stage);

  // Create Players
  p1Mesh = createPlayerMesh(players.p1.color);
  p2Mesh = createPlayerMesh(players.p2.color);
  scene.add(p1Mesh);
  scene.add(p2Mesh);

  // Events
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('keyup', handleKeyUp);
  window.addEventListener('resize', handleResize);

  // Loop
  const animate = () => {
    animationId = requestAnimationFrame(animate);
    updatePhysics();
    renderer.render(scene, camera);
  };
  animate();
});

const createPlayerMesh = (color: string) => {
  const group = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.2, 0.8), new THREE.MeshStandardMaterial({ color }));
  body.position.y = 0.6;
  group.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.4), new THREE.MeshStandardMaterial({ color: '#ffdbac' }));
  head.position.y = 1.6;
  group.add(head);
  return group;
};

const handleKeyDown = (e: KeyboardEvent) => { keys[e.key.toLowerCase()] = true; if (e.key === 'Escape') router.push('/'); };
const handleKeyUp = (e: KeyboardEvent) => { keys[e.key.toLowerCase()] = false; };

const updatePhysics = () => {
  // P1 controls
  if (keys['a']) players.p1.velocity.x = -MOVE_SPEED;
  else if (keys['d']) players.p1.velocity.x = MOVE_SPEED;
  else players.p1.velocity.x *= 0.8;

  if (keys['w'] && players.p1.position.y <= PLATFORM_TOP + 0.1) players.p1.velocity.y = JUMP_FORCE;

  // P2 controls
  if (keys['arrowleft']) players.p2.velocity.x = -MOVE_SPEED;
  else if (keys['arrowright']) players.p2.velocity.x = MOVE_SPEED;
  else players.p2.velocity.x *= 0.8;

  if (keys['arrowup'] && players.p2.position.y <= PLATFORM_TOP + 0.1) players.p2.velocity.y = JUMP_FORCE;

  // Apply velocity & gravity
  [players.p1, players.p2].forEach((p, idx) => {
    p.velocity.y += GRAVITY;
    p.position.add(p.velocity);

    // Platform collision
    if (p.position.y < PLATFORM_TOP && Math.abs(p.position.x) < 10) {
      p.position.y = PLATFORM_TOP;
      p.velocity.y = 0;
    }

    // Update meshes
    const mesh = idx === 0 ? p1Mesh : p2Mesh;
    if (mesh) mesh.position.copy(p.position);
  });
};

const handleResize = () => {
  if (!container.value) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

onUnmounted(() => {
  cancelAnimationFrame(animationId);
  window.removeEventListener('keydown', handleKeyDown);
  window.removeEventListener('keyup', handleKeyUp);
  window.removeEventListener('resize', handleResize);
  renderer.dispose();
});
</script>

<template>
  <div class="smash-stage">
    <div ref="container" class="game-container"></div>
    <EscapeOverlay />

    <div class="ui-overlay">
      <nav class="hud glass">
        <button class="exit-btn" @click="router.push('/')">← EXIT</button>
        <div class="match-info">SUMMER SMASH: PORT</div>
        <div class="timer">99</div>
      </nav>

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
  border: 1px solid rgba(255,255,255,0.1);
}

.hud.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}

.exit-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 6px 12px;
  border-radius: 8px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s;
}

.exit-btn:hover { background: rgba(255,255,255,0.2); }

.match-info { font-weight: 900; letter-spacing: 2px; color: #94a3b8; font-size: 0.8rem; }
.timer { font-weight: 900; font-size: 1.5rem; color: #ffeb3b; }

.health-hud {
  position: absolute;
  top: 90px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  width: 600px;
}

@media (max-width: 768px) {
  .health-hud { width: 90%; }
}
</style>
