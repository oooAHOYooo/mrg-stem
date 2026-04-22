<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'

const emit = defineEmits(['done'])
const container = ref(null)

let renderer = null
let scene = null
let camera = null
let points = null
let animationId = null
let startMs = 0

const buildTime = __BUILD_TIME__
const commitName = __COMMIT_NAME__
const buildVersion = `v0.1.0-${commitName.substring(0, 7)}`

const INTRO_MS = 5600

function finishIntro() {
  emit('done')
}

function animate(now) {
  animationId = requestAnimationFrame(animate)
  const elapsed = now - startMs
  const t = Math.min(1, elapsed / INTRO_MS)

  if (points) {
    points.rotation.z += 0.0009
    points.rotation.y += 0.00035
  }

  const speed = 0.5 + t * 6.5
  if (camera) {
    camera.position.z -= speed
    camera.fov = 65 + t * 55
    camera.updateProjectionMatrix()
  }

  if (renderer && scene && camera) renderer.render(scene, camera)
}

onMounted(() => {
  const w = window.innerWidth
  const h = window.innerHeight

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(w, h)
  container.value.appendChild(renderer.domElement)

  scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(0x090320, 0.035)

  camera = new THREE.PerspectiveCamera(65, w / h, 0.1, 900)
  camera.position.set(0, 0, 120)

  const starCount = 13000
  const positions = new Float32Array(starCount * 3)
  const colors = new Float32Array(starCount * 3)
  const colorA = new THREE.Color(0x6fd7ff)
  const colorB = new THREE.Color(0xdc7dff)
  const colorC = new THREE.Color(0xff9c9c)
  const mix = new THREE.Color()

  for (let i = 0; i < starCount; i++) {
    const i3 = i * 3
    const r = 30 + Math.random() * 220
    const a = Math.random() * Math.PI * 2
    const y = (Math.random() - 0.5) * 120
    positions[i3] = Math.cos(a) * r
    positions[i3 + 1] = y
    positions[i3 + 2] = Math.sin(a) * r - Math.random() * 380

    const pick = Math.random()
    if (pick < 0.35) mix.copy(colorA).lerp(colorB, Math.random())
    else if (pick < 0.7) mix.copy(colorB).lerp(colorC, Math.random())
    else mix.copy(colorC).lerp(colorA, Math.random())
    colors[i3] = mix.r
    colors[i3 + 1] = mix.g
    colors[i3 + 2] = mix.b
  }

  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  const mat = new THREE.PointsMaterial({
    size: 1.35,
    sizeAttenuation: true,
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
  })
  points = new THREE.Points(geo, mat)
  scene.add(points)

  startMs = performance.now()
  animate(startMs)
})

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
  if (renderer?.domElement?.parentNode === container.value) {
    container.value.removeChild(renderer.domElement)
  }
  renderer?.dispose()
})
</script>

<template>
  <div class="intro-wrap">
    <div class="build-info">
      <span class="glitch-text" :data-text="buildVersion">SYSTEM BUILD: {{ buildVersion }}</span>
      <span class="build-meta">// {{ buildTime }} // {{ commitName }}</span>
    </div>
    <div ref="container" class="intro-canvas"></div>
    <div class="intro-overlay" @click="finishIntro">

      <!-- ═══ ASIAN GRAPHIC LAYERS ═══ -->
      <!-- Layer A: Far background – giant watermark kanji, drifting -->
      <div class="asian-bg asian-bg-a">グレイドネットワーク</div>
      <!-- Layer B: Vertical Japanese column text, left edge -->
      <div class="asian-bg asian-bg-b">
        <span>接</span><span>続</span><span>中</span><span>…</span>
      </div>
      <!-- Layer C: Vertical Japanese column text, right edge -->
      <div class="asian-bg asian-bg-c">
        <span>創</span><span>造</span><span>世</span><span>界</span>
      </div>
      <!-- Layer D: Korean stencil strip, top -->
      <div class="asian-bg asian-bg-d">글레이드 네트워크 • 에이전트 허브</div>
      <!-- Layer E: Chinese seal characters, scattered -->
      <div class="asian-bg asian-bg-e">龍 • 風 • 光</div>
      <!-- Layer F: Horizontal marquee strip, bottom glow -->
      <div class="asian-bg asian-bg-f">
        ネットワーク接続中 ··· グレイド世界へようこそ ··· エージェント待機中 ···&nbsp;
        ネットワーク接続中 ··· グレイド世界へようこそ ··· エージェント待機中 ···&nbsp;
      </div>

      <!-- ═══ MAIN TITLE ═══ -->
      <div class="intro-title-wrap">
        <div class="title-layers">
          <!-- Ghost Asian layers behind English title -->
          <div class="title-layer layer-asian layer-3">グレイド・ネットワークへようこそ</div>
          <div class="title-layer layer-asian layer-2">グレイド・ネットワークへようこそ</div>
          <div class="title-layer layer-asian layer-1">グレイド・ネットワークへようこそ</div>
          <!-- Main English title with glitch + neon effects -->
          <div class="title-layer layer-english" data-text="WELCOME TO THE GLADE NETWORK">WELCOME TO THE GLADE NETWORK</div>
        </div>
      </div>

      <div class="intro-text">
        Welcome to Pips, your interactive portfolio and project management universe, visualized as a lush, 3D environment. <br/>
        <span style="color: #92e0ff; font-weight: 700; font-size: 11px; opacity: 0.8;">[ SYSTEM VERSION: {{ buildVersion }} ]</span><br/>
        Here, your digital projects are represented as dynamic island worlds called Glades. Each Glade is inhabited by AI agents, or "Pips," dedicated to specific roles within your teams. You can oversee operations, brainstorm with agents, and build out your team's infrastructure all in real-time. Step into the vortex and watch your projects come to life!
      </div>
      <button class="intro-skip" @click="finishIntro">Enter Network</button>
    </div>
  </div>
</template>

<style scoped>
/* ─── Fonts ─── */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@900&family=Noto+Sans+KR:wght@900&display=swap');

/* ─── Base ─── */
.intro-wrap {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: radial-gradient(circle at center, #140836 0%, #060214 70%);
  overflow: hidden;
}

.intro-canvas {
  position: absolute;
  inset: 0;
}

.intro-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
  cursor: pointer;
}

.build-info {
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  z-index: 1000;
  pointer-events: none;
}

.glitch-text {
  font-size: 11px;
  color: #fff;
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  letter-spacing: 2px;
  font-weight: 900;
  text-shadow: 0 0 10px rgba(180, 160, 255, 0.8);
}

.build-meta {
  font-size: 9px;
  color: rgba(180, 160, 255, 0.4);
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  letter-spacing: 1px;
  text-transform: uppercase;
  white-space: nowrap;
}

/* ══════════════════════════════════════════════
   ASIAN BACKGROUND LAYERS
══════════════════════════════════════════════ */

/* A: Giant watermark kanji – center, enormous, slowly rotating */
.asian-bg-a {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Noto Sans JP', serif;
  font-size: clamp(120px, 25vw, 340px);
  font-weight: 900;
  white-space: nowrap;
  color: transparent;
  -webkit-text-stroke: 1px rgba(110, 60, 220, 0.18);
  letter-spacing: -8px;
  pointer-events: none;
  user-select: none;
  animation: bgRotateDrift 18s ease-in-out infinite alternate;
  z-index: 1;
}
@keyframes bgRotateDrift {
  0%   { transform: translate(-52%, -48%) rotate(-3deg) scale(1); opacity: 0.12; }
  50%  { transform: translate(-48%, -52%) rotate(2deg) scale(1.05); opacity: 0.22; }
  100% { transform: translate(-51%, -50%) rotate(-1deg) scale(0.98); opacity: 0.14; }
}

/* B: Left vertical column */
.asian-bg-b {
  position: absolute;
  left: 3vw;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-family: 'Noto Sans JP', serif;
  font-weight: 900;
  font-size: clamp(28px, 4vw, 56px);
  color: rgba(0, 220, 255, 0.18);
  letter-spacing: 0;
  pointer-events: none;
  user-select: none;
  animation: colFadeB 4s ease-in-out infinite alternate;
  z-index: 2;
  writing-mode: vertical-rl;
  text-orientation: upright;
}
@keyframes colFadeB {
  from { opacity: 0.35; transform: translateY(-50%) translateX(-4px); }
  to   { opacity: 0.7;  transform: translateY(-50%) translateX(4px); }
}

/* C: Right vertical column */
.asian-bg-c {
  position: absolute;
  right: 3vw;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-family: 'Noto Sans JP', serif;
  font-weight: 900;
  font-size: clamp(28px, 4vw, 56px);
  color: rgba(220, 80, 255, 0.2);
  pointer-events: none;
  user-select: none;
  animation: colFadeC 5s ease-in-out infinite alternate;
  z-index: 2;
  writing-mode: vertical-rl;
  text-orientation: upright;
}
@keyframes colFadeC {
  from { opacity: 0.3; transform: translateY(-50%) translateX(4px); }
  to   { opacity: 0.65; transform: translateY(-50%) translateX(-4px); }
}

/* D: Korean stencil top banner */
.asian-bg-d {
  position: absolute;
  top: 6vh;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 900;
  font-size: clamp(11px, 1.6vw, 20px);
  color: rgba(255, 200, 80, 0.28);
  white-space: nowrap;
  letter-spacing: 6px;
  text-transform: uppercase;
  pointer-events: none;
  user-select: none;
  animation: topBannerPulse 3.5s ease-in-out infinite alternate;
  z-index: 2;
}
@keyframes topBannerPulse {
  from { opacity: 0.25; letter-spacing: 5px; }
  to   { opacity: 0.55; letter-spacing: 8px; }
}

/* E: Chinese seal characters */
.asian-bg-e {
  position: absolute;
  bottom: 20vh;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Noto Sans JP', serif;
  font-size: clamp(32px, 5vw, 70px);
  font-weight: 900;
  color: rgba(255, 80, 120, 0.18);
  letter-spacing: 18px;
  pointer-events: none;
  user-select: none;
  animation: sealPulse 6s ease-in-out infinite alternate;
  z-index: 2;
}
@keyframes sealPulse {
  from { opacity: 0.18; transform: translateX(-50%) scale(0.96); filter: blur(2px); }
  to   { opacity: 0.38; transform: translateX(-50%) scale(1.04); filter: blur(0px); }
}

/* F: Scrolling marquee strip */
.asian-bg-f {
  position: absolute;
  bottom: 0;
  left: 0;
  width: max-content;
  white-space: nowrap;
  font-family: 'Noto Sans JP', serif;
  font-size: clamp(10px, 1.2vw, 15px);
  font-weight: 900;
  color: rgba(100, 200, 255, 0.25);
  letter-spacing: 3px;
  padding: 10px 0;
  pointer-events: none;
  user-select: none;
  animation: scrollMarquee 22s linear infinite;
  z-index: 2;
}
@keyframes scrollMarquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* ══════════════════════════════════════════════
   MAIN TITLE
══════════════════════════════════════════════ */

.intro-title-wrap {
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  width: 100%;
  z-index: 20;
}

.title-layers {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 160px;
}

.title-layer {
  text-transform: uppercase;
  font-style: italic;
  font-weight: 950;
  white-space: nowrap;
  line-height: 1;
  pointer-events: none;
}

/* Main English title */
.layer-english {
  position: relative;
  z-index: 40;
  font-size: clamp(56px, 7.5vw, 100px);
  color: #fff;
  -webkit-text-stroke: 2px rgba(200, 140, 255, 0.6);
  letter-spacing: -2px;
  transform: skewX(-10deg);

  /* Neon glow base */
  text-shadow:
    0 0 8px #fff,
    0 0 20px rgba(180, 100, 255, 0.9),
    0 0 40px rgba(130, 60, 255, 0.7),
    0 0 80px rgba(80, 20, 200, 0.5);

  animation: titleNeonPulse 2.4s ease-in-out infinite alternate,
             titleGlitch 7s steps(1) infinite;
}

/* Neon breathing */
@keyframes titleNeonPulse {
  0%   {
    text-shadow:
      0 0 6px #fff,
      0 0 18px rgba(180,100,255,0.8),
      0 0 36px rgba(130,60,255,0.6),
      0 0 70px rgba(80,20,200,0.4);
  }
  100% {
    text-shadow:
      0 0 12px #fff,
      0 0 32px rgba(200,130,255,1),
      0 0 60px rgba(160,80,255,0.85),
      0 0 110px rgba(100,30,255,0.6),
      0 0 160px rgba(60,10,180,0.3);
  }
}

/* Glitch flicker */
@keyframes titleGlitch {
  0%,  90%, 100% { transform: skewX(-10deg) translateX(0); filter: none; }
  91% { transform: skewX(-10deg) translateX(-4px); filter: hue-rotate(90deg) brightness(2); }
  92% { transform: skewX(-10deg) translateX(4px);  filter: hue-rotate(-60deg); clip-path: inset(30% 0 40% 0); }
  93% { transform: skewX(-10deg) translateX(0);    filter: none; clip-path: none; }
  94% { transform: skewX(-10deg) translateX(-2px); filter: saturate(3); }
  95% { transform: skewX(-10deg) translateX(0); filter: none; }
}

/* ── Asian ghost layers behind the main title ── */
.layer-asian {
  position: absolute;
  font-size: clamp(70px, 11vw, 130px);
  opacity: 0.75;
  filter: blur(1px);
  transform: skewX(-10deg);
}

.layer-1 {
  z-index: 30;
  color: #ff0055;
  transform: skewX(-10deg) translate(8px, 8px);
  animation: ghost1Drift 3.1s ease-in-out infinite alternate;
}
@keyframes ghost1Drift {
  from { transform: skewX(-10deg) translate(8px, 8px);  opacity: 0.6; filter: blur(1px); }
  to   { transform: skewX(-10deg) translate(12px, 10px); opacity: 0.85; filter: blur(0.5px); }
}

.layer-2 {
  z-index: 20;
  color: #00f2ff;
  transform: skewX(-10deg) translate(-8px, -8px);
  animation: ghost2Drift 2.7s ease-in-out infinite alternate;
}
@keyframes ghost2Drift {
  from { transform: skewX(-10deg) translate(-8px, -8px);  opacity: 0.65; filter: blur(1px); }
  to   { transform: skewX(-10deg) translate(-13px, -11px); opacity: 0.9; filter: blur(0.5px); }
}

.layer-3 {
  z-index: 10;
  color: #7000ff;
  transform: skewX(-10deg) translate(0px, 0px);
  filter: blur(4px);
  opacity: 0.5;
  animation: ghost3Drift 4s ease-in-out infinite alternate;
}
@keyframes ghost3Drift {
  from { transform: skewX(-10deg) translate(0, 0); opacity: 0.45; filter: blur(4px); }
  to   { transform: skewX(-10deg) translate(3px, -3px); opacity: 0.65; filter: blur(2.5px); }
}

/* ══════════════════════════════════════════════
   INTRO TEXT & BUTTON
══════════════════════════════════════════════ */
.intro-text {
  font-size: 15px;
  color: #e0d5ff;
  max-width: 620px;
  text-align: center;
  line-height: 1.7;
  margin-bottom: 32px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.9);
  pointer-events: auto;
  opacity: 0.9;
  z-index: 20;
}

.intro-skip {
  pointer-events: auto;
  border: 1px solid rgba(250, 230, 255, 0.4);
  border-radius: 999px;
  background: rgba(40, 20, 70, 0.6);
  color: #f7ecff;
  padding: 10px 28px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all 0.22s ease;
  backdrop-filter: blur(4px);
  z-index: 20;
  box-shadow: 0 0 20px rgba(140, 60, 255, 0.35);
  animation: btnPulse 2.8s ease-in-out infinite alternate;
}
@keyframes btnPulse {
  from { box-shadow: 0 0 16px rgba(140, 60, 255, 0.3); }
  to   { box-shadow: 0 0 32px rgba(200, 100, 255, 0.6), 0 0 60px rgba(120, 40, 220, 0.3); }
}

.intro-skip:hover {
  background: rgba(100, 40, 160, 0.85);
  border-color: #fff;
  transform: scale(1.07);
  box-shadow: 0 0 40px rgba(200, 100, 255, 0.8);
}
</style>
