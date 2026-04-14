<script setup lang="ts">
import { onMounted, onUnmounted, ref, reactive } from 'vue';
import * as THREE from 'three';
import HealthBar from './components/HealthBar.vue';
import EscapeOverlay from '../../components/EscapeOverlay.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const container = ref<HTMLElement | null>(null);

// --- Constants ---
const GRAVITY = -0.012;
const JUMP_FORCE = 0.38;
const MOVE_SPEED = 0.08;
const ATTACK_RANGE = 2.0;
const KNOCKBACK_BASE = 0.2;
const PLATFORM_TOP = 0.5;
const DEATH_Y = -15;

// --- State ---
const players = reactive({
  p1: { 
    name: 'Player 1', 
    health: 0, 
    color: '#ff6b6b',
    position: new THREE.Vector3(-5, 5, 0),
    velocity: new THREE.Vector3(),
    facing: 1,
    isAttackActive: false
  },
  p2: { 
    name: 'Player 2', 
    health: 0, 
    color: '#4ecdc4',
    position: new THREE.Vector3(5, 5, 0),
    velocity: new THREE.Vector3(),
    facing: -1,
    isAttackActive: false
  }
});

let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;
let animationId: number;
const keys: Record<string, boolean> = {};

// Mesh references
let p1Mesh: THREE.Group, p2Mesh: THREE.Group;
let p1Arms: THREE.Group, p2Arms: THREE.Group;

onMounted(() => {
  if (!container.value) return;

  scene = new THREE.Scene();
  scene.background = new THREE.Color('#0f172a');
  scene.fog = new THREE.Fog('#0f172a', 10, 50);
  
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 4, 15);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  container.value.appendChild(renderer.domElement);

  // Lighting
  scene.add(new THREE.AmbientLight(0xffffff, 0.4));
  const sun = new THREE.DirectionalLight(0xffffff, 1.0);
  sun.position.set(5, 15, 10);
  sun.castShadow = true;
  scene.add(sun);

  // Stage
  const stageGeo = new THREE.BoxGeometry(22, 1, 6);
  const stageMat = new THREE.MeshStandardMaterial({ color: '#334155', roughness: 0.2, metalness: 0.5 });
  const stage = new THREE.Mesh(stageGeo, stageMat);
  stage.receiveShadow = true;
  scene.add(stage);

  // Create Players
  p1Mesh = createPlayerMesh(players.p1.color);
  p2Mesh = createPlayerMesh(players.p2.color);
  p1Arms = p1Mesh.getObjectByName('arms') as THREE.Group;
  p2Arms = p2Mesh.getObjectByName('arms') as THREE.Group;
  
  scene.add(p1Mesh);
  scene.add(p2Mesh);

  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('keyup', handleKeyUp);
  window.addEventListener('resize', handleResize);

  const animate = () => {
    animationId = requestAnimationFrame(animate);
    updatePhysics();
    renderer.render(scene, camera);
  };
  animate();
});

const createPlayerMesh = (color: string) => {
  const group = new THREE.Group();
  
  // Body
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.3, 0.7), new THREE.MeshStandardMaterial({ color }));
  body.position.y = 0.65;
  body.castShadow = true;
  group.add(body);

  // Head
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.45), new THREE.MeshStandardMaterial({ color: '#ffdbac' }));
  head.position.y = 1.7;
  head.castShadow = true;
  group.add(head);

  // Arms Group
  const arms = new THREE.Group();
  arms.name = 'arms';
  const armGeo = new THREE.BoxGeometry(0.3, 0.8, 0.3);
  const armMat = new THREE.MeshStandardMaterial({ color });
  
  const leftArm = new THREE.Mesh(armGeo, armMat);
  leftArm.position.set(-0.65, 0.8, 0);
  arms.add(leftArm);
  
  const rightArm = new THREE.Mesh(armGeo, armMat);
  rightArm.position.set(0.65, 0.8, 0);
  arms.add(rightArm);
  
  group.add(arms);
  return group;
};

const handleKeyDown = (e: KeyboardEvent) => { 
  keys[e.key.toLowerCase()] = true; 
  if (e.key === 'Escape') router.push('/');
  
  // Trigger Attacks
  if (e.key === 'f') performAttack('p1', 'p2');
  if (e.key === 'm') performAttack('p2', 'p1');
};

const handleKeyUp = (e: KeyboardEvent) => { keys[e.key.toLowerCase()] = false; };

const performAttack = (attackerId: 'p1'|'p2', defenderId: 'p1'|'p2') => {
  const attacker = players[attackerId];
  const defender = players[defenderId];
  
  attacker.isAttackActive = true;
  setTimeout(() => attacker.isAttackActive = false, 150);

  const dist = attacker.position.distanceTo(defender.position);
  if (dist < ATTACK_RANGE) {
    // Calculate Knockback
    const damage = 8;
    defender.health += damage;
    
    const kbFactor = KNOCKBACK_BASE + (defender.health / 100);
    const dir = defender.position.x > attacker.position.x ? 1 : -1;
    
    defender.velocity.x += dir * kbFactor * 2.5;
    defender.velocity.y += kbFactor * 1.5;
    
    // Impact Visual
    createImpactEffect(defender.position);
  }
};

const createImpactEffect = (pos: THREE.Vector3) => {
  const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5), new THREE.MeshBasicMaterial({ color: '#ffee00', transparent: true, opacity: 0.8 }));
  sphere.position.copy(pos);
  scene.add(sphere);
  let scale = 1.0;
  const fade = () => {
    scale += 0.2;
    sphere.scale.set(scale, scale, scale);
    sphere.material.opacity -= 0.1;
    if (sphere.material.opacity > 0) requestAnimationFrame(fade);
    else scene.remove(sphere);
  };
  fade();
};

const updatePhysics = () => {
  // P1 Controls
  if (keys['a']) { players.p1.velocity.x = -MOVE_SPEED; players.p1.facing = -1; }
  else if (keys['d']) { players.p1.velocity.x = MOVE_SPEED; players.p1.facing = 1; }
  else players.p1.velocity.x *= 0.85;

  if (keys['w'] && players.p1.position.y <= PLATFORM_TOP + 0.1) players.p1.velocity.y = JUMP_FORCE;

  // P2 Controls
  if (keys['arrowleft']) { players.p2.velocity.x = -MOVE_SPEED; players.p2.facing = -1; }
  else if (keys['arrowright']) { players.p2.velocity.x = MOVE_SPEED; players.p2.facing = 1; }
  else players.p2.velocity.x *= 0.85;

  if (keys['arrowup'] && players.p2.position.y <= PLATFORM_TOP + 0.1) players.p2.velocity.y = JUMP_FORCE;

  // Global Movement
  [players.p1, players.p2].forEach((p, idx) => {
    p.velocity.y += GRAVITY;
    p.position.add(p.velocity);

    // Platform collision
    if (p.position.y < PLATFORM_TOP && Math.abs(p.position.x) < 11.5) {
      if (p.velocity.y < 0) {
        p.position.y = PLATFORM_TOP;
        p.velocity.y = 0;
      }
    }

    // Death Check
    if (p.position.y < DEATH_Y || Math.abs(p.position.x) > 25) {
      respawnPlayer(idx === 0 ? 'p1' : 'p2');
    }

    // Update meshes & Animate
    const mesh = idx === 0 ? p1Mesh : p2Mesh;
    const arms = idx === 0 ? p1Arms : p2Arms;
    if (mesh) {
      mesh.position.copy(p.position);
      mesh.rotation.y = THREE.MathUtils.lerp(mesh.rotation.y, p.facing === 1 ? 0 : Math.PI, 0.15);
      
      // Idle/Move Tilt
      mesh.rotation.z = Math.sin(Date.now() * 0.005) * 0.05 + (p.velocity.x * 0.5);

      // Arm Animation
      if (arms) {
        if (p.isAttackActive) {
          arms.rotation.x = -Math.PI / 2;
        } else {
          arms.rotation.x = Math.sin(Date.now() * 0.01) * 0.2;
        }
      }
    }
  });
};

const respawnPlayer = (pid: 'p1'|'p2') => {
  const p = players[pid];
  p.health = 0;
  p.position.set(pid === 'p1' ? -5 : 5, 10, 0);
  p.velocity.set(0, 0, 0);
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
        <div class="match-info">SUMMER SMASH: NATIVE VUE</div>
        <div class="controls-hint">
          P1: WASD+F | P2: ARROWS+M
        </div>
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
  background: radial-gradient(circle at center, #1e1b4b, #020617);
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
  font-family: 'Outfit', sans-serif;
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
  padding: 0.6rem 2rem;
  border-radius: 20px;
  pointer-events: auto;
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.hud.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
}

.exit-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 8px 16px;
  border-radius: 10px;
  font-weight: 850;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.exit-btn:hover { 
  background: #ff1744; 
  border-color: #ff1744;
  transform: scale(1.1);
}

.match-info { font-weight: 900; letter-spacing: 2px; color: #94a3b8; font-size: 0.75rem; text-transform: uppercase; }
.controls-hint { font-weight: 800; color: rgba(255,255,255,0.4); font-size: 0.7rem; }

.health-hud {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  gap: 40px;
  width: 100%;
}

@media (max-width: 768px) {
  .health-hud { gap: 10px; }
}
</style>
