<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as THREE from 'three'
import { createTerrain } from '../three/terrain.js'
import { createCamera, updateCamera, resizeCamera, cleanupCamera, getCamera, getIsLocked } from '../three/camera.js'
import { createPipMeshes, syncPipMeshes, updatePipAnimations, updatePipEyeTracking, getPipMeshMap, initSavedNotes, createNoteMesh } from '../three/pips.js'
import { pickPip } from '../three/picking.js'
import { updateGathering, isGathering } from '../three/gathering.js'
import { useScene } from '../composables/useScene.js'

const container = ref(null)
const {
  pips,
  selectPip,
  buildMode,
  currentMode,
  activeGlade,
  decorMode,
  decorTools,
  decorations,
  placeDecoration,
  gladeSlots,
  selectedTool,
  farmBlocks,
  placeFarmBlock,
  tickFarm,
  setPlayerPosition,
  fairies,
  capturedFairies,
  pokeballs,
  wildPips,
  onboardingStep,
  guidePip,
  spawnFairy,
  captureFairy,
  spawnWildPip,
  captureWildPip,
  nextOnboarding,
  inventory,
  selectedSlot,
  equipHat,
  feedPip,
  removePip,
  removeFarmBlock,
} = useScene()

let renderer = null
let scene = null
let camera = null
let clock = null
let animationId = null
const raycaster = new THREE.Raycaster()
const pointer = new THREE.Vector2()
const farmBlockMeshes = new Map()
const farmZoneMeshes = new Map()
const decorMeshes = new Map()
const signpostMeshes = []
let companionMesh = null
const fairyMeshes = new Map()
const wildPipMeshes = new Map()
const pokeballsInFlight = []
const balloonObjects = []
let guideMesh = null
const laserProjectiles = []

function isInActiveFarmZone(x, z) {
  const zone = activeGlade.value?.zone
  if (!zone) return false
  return x >= zone.minX && x <= zone.maxX && z >= zone.minZ && z <= zone.maxZ
}

function screenPointer(event, locked) {
  if (locked) {
    pointer.set(0, 0)
    return
  }
  const rect = renderer.domElement.getBoundingClientRect()
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
}

function getGroundPoint(event, locked) {
  if (!camera || !renderer) return null
  screenPointer(event, locked)
  raycaster.setFromCamera(pointer, camera)
  const ground = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0)
  const hit = new THREE.Vector3()
  return raycaster.ray.intersectPlane(ground, hit) ? hit : null
}

function syncFarmBlockMeshes() {
  if (!scene) return
  const seen = new Set(farmBlocks.value.map((b) => b.id))

  for (const [id, mesh] of farmBlockMeshes) {
    if (!seen.has(id)) {
      scene.remove(mesh)
      farmBlockMeshes.delete(id)
    }
  }

  for (const block of farmBlocks.value) {
    if (farmBlockMeshes.has(block.id)) continue
    const mesh = createFarmBlockMesh(block)
    scene.add(mesh)
    farmBlockMeshes.set(block.id, mesh)
  }
}

function createFarmBlockMesh(block) {
  let geo = new THREE.BoxGeometry(1, 0.7, 1)
  let color = 0xd9b38c
  if (block.type === 'lantern') {
    geo = new THREE.BoxGeometry(0.6, 1.2, 0.6)
    color = 0xffd27f
  } else if (block.type === 'totem') {
    geo = new THREE.BoxGeometry(0.9, 1.5, 0.9)
    color = 0xc5b3e6
  } else if (block.type === 'archive') {
    geo = new THREE.BoxGeometry(1.2, 0.9, 1.2)
    color = 0x9fd3d8
  }
  const mat = new THREE.MeshLambertMaterial({ color, emissive: color, emissiveIntensity: 0.08 })
  const mesh = new THREE.Mesh(geo, mat)
  mesh.position.set(block.x, geo.parameters.height / 2, block.z)
  return mesh
}

function syncDecorationMeshes() {
  if (!scene) return
  const seen = new Set(decorations.value.map((d) => d.id))

  for (const [id, mesh] of decorMeshes) {
    if (!seen.has(id)) {
      scene.remove(mesh)
      decorMeshes.delete(id)
    }
  }

  for (const decor of decorations.value) {
    if (decorMeshes.has(decor.id)) continue
    const mesh = createDecorationMesh(decor)
    scene.add(mesh)
    decorMeshes.set(decor.id, mesh)
  }
}

function createDecorationMesh(decor) {
  const group = new THREE.Group()
  let mainMesh

  if (decor.type === 'house') {
    // A cute tiny low-poly house
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(2.5, 2, 2),
      new THREE.MeshLambertMaterial({ color: 0xffffff })
    )
    body.position.y = 1
    group.add(body)
    const roof = new THREE.Mesh(
      new THREE.ConeGeometry(2, 1.5, 4),
      new THREE.MeshLambertMaterial({ color: 0xeb4d4b })
    )
    roof.position.y = 2.5
    roof.rotation.y = Math.PI / 4
    group.add(roof)
    const door = new THREE.Mesh(
      new THREE.PlaneGeometry(0.6, 1),
      new THREE.MeshLambertMaterial({ color: 0x5a3a2a })
    )
    door.position.set(0, 0.5, 1.01)
    group.add(door)
  } else if (decor.type === 'table') {
    const top = new THREE.Mesh(
      new THREE.CylinderGeometry(0.8, 0.8, 0.1, 12),
      new THREE.MeshLambertMaterial({ color: 0x81ecec, transparent: true, opacity: 0.8 })
    )
    top.position.y = 0.5
    group.add(top)
    const leg = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1, 0.2, 0.5, 8),
      new THREE.MeshLambertMaterial({ color: 0xffffff })
    )
    leg.position.y = 0.25
    group.add(leg)
  } else if (decor.type === 'beanbag') {
    const bag = new THREE.Mesh(
      new THREE.SphereGeometry(0.6, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.7),
      new THREE.MeshLambertMaterial({ color: 0xffaf40 })
    )
    bag.rotation.x = Math.PI
    bag.position.y = 0.3
    group.add(bag)
  } else if (decor.type === 'shroom') {
    const cap = new THREE.Mesh(
      new THREE.SphereGeometry(0.4, 12, 10, 0, Math.PI * 2, 0, Math.PI / 2),
      new THREE.MeshLambertMaterial({ color: 0xfffa65, emissive: 0xfffa65, emissiveIntensity: 0.6 })
    )
    cap.position.y = 0.6
    group.add(cap)
    const stem = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1, 0.15, 0.6, 8),
      new THREE.MeshLambertMaterial({ color: 0xffffff })
    )
    stem.position.y = 0.3
    group.add(stem)
  } else if (decor.type === 'bonsai') {
    const pot = new THREE.Mesh(
      new THREE.CylinderGeometry(0.4, 0.3, 0.3, 12),
      new THREE.MeshLambertMaterial({ color: 0x555555 })
    )
    pot.position.y = 0.15
    group.add(pot)
    const green = new THREE.Mesh(
      new THREE.DodecahedronGeometry(0.4),
      new THREE.MeshLambertMaterial({ color: 0x78e08f })
    )
    green.position.y = 0.6
    group.add(green)
  } else if (decor.type === 'bench') {
    const seat = new THREE.Mesh(
      new THREE.BoxGeometry(1.4, 0.1, 0.6),
      new THREE.MeshLambertMaterial({ color: 0x5a3a2a })
    )
    seat.position.y = 0.4
    group.add(seat)
    const leg1 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.4, 0.1), new THREE.MeshLambertMaterial({ color: 0x333333 }))
    leg1.position.set(-0.6, 0.2, 0.2)
    group.add(leg1)
    const leg2 = leg1.clone(); leg2.position.x = 0.6; group.add(leg2)
    const leg3 = leg1.clone(); leg3.position.z = -0.2; group.add(leg3)
    const leg4 = leg1.clone(); leg4.position.set(0.6, 0.2, -0.2); group.add(leg4)
  }

  group.position.set(decor.x, 0, decor.z)
  group.rotation.y = decor.rotation || 0
  return group
}

function updateCompanion(elapsed) {
  if (!companionMesh || !camera) return
  const forward = new THREE.Vector3()
  camera.getWorldDirection(forward)
  forward.y = 0
  forward.normalize()
  const right = new THREE.Vector3().crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize()
  const target = new THREE.Vector3()
    .copy(camera.position)
    .addScaledVector(forward, -1.6)
    .addScaledVector(right, 0.75)
  companionMesh.position.x += (target.x - companionMesh.position.x) * 0.12
  companionMesh.position.z += (target.z - companionMesh.position.z) * 0.12
  companionMesh.position.y = 0.48 + Math.sin(elapsed * 3.2) * 0.05
}

function updateFairies(delta, elapsed) {
  if (!scene) return
  
  // Sync fairy meshes (cleanup removed ones)
  const currentFairyIds = new Set(fairies.value.map(f => f.id))
  for (const [id, mesh] of fairyMeshes) {
    if (!currentFairyIds.has(id)) {
      scene.remove(mesh)
      fairyMeshes.delete(id)
    }
  }

  // Update/Create
  fairies.value.forEach(fairy => {
    let mesh = fairyMeshes.get(fairy.id)
    if (!mesh) {
       const group = new THREE.Group()
       const core = new THREE.Mesh(
          new THREE.SphereGeometry(0.12, 8, 8),
          new THREE.MeshLambertMaterial({ color: fairy.color, emissive: fairy.color, emissiveIntensity: 1 })
       )
       group.add(core)
       
       const glow = new THREE.Mesh(
          new THREE.SphereGeometry(0.3, 8, 8),
          new THREE.MeshLambertMaterial({ color: fairy.color, transparent: true, opacity: 0.35 })
       )
       group.add(glow)
       
       mesh = group
       scene.add(mesh)
       fairyMeshes.set(fairy.id, mesh)
    }
    
    // Smooth movement
    const targetX = fairy.x + Math.sin(elapsed * 0.5 + fairy.speed * 10) * 8
    const targetZ = fairy.z + Math.cos(elapsed * 0.4 + fairy.speed * 10) * 8
    
    mesh.position.x += (targetX - mesh.position.x) * 0.05
    mesh.position.z += (targetZ - mesh.position.z) * 0.05
    mesh.position.y = fairy.y + Math.sin(elapsed * 2 + fairy.speed) * 0.5
    
    // Rotate glow
    mesh.children[1].scale.setScalar(1 + Math.sin(elapsed * 4) * 0.2)
  })
}

function createCaptureEffect(pos, color) {
  const group = new THREE.Group()
  for (let i = 0; i < 8; i++) {
    const p = new THREE.Mesh(
      new THREE.SphereGeometry(0.05),
      new THREE.MeshBasicMaterial({ color })
    )
    const angle = (i / 8) * Math.PI * 2
    p.userData.vel = new THREE.Vector3(Math.cos(angle), Math.sin(i), Math.sin(angle)).multiplyScalar(0.1)
    group.add(p)
  }
  group.position.copy(pos)
  scene.add(group)
  
  const startTime = clock.getElapsedTime()
  const duration = 0.8
  
  const tick = () => {
    const age = clock.getElapsedTime() - startTime
    if (age > duration) {
      scene.remove(group)
      return
    }
    group.children.forEach(p => {
      p.position.add(p.userData.vel)
      p.scale.multiplyScalar(0.95)
    })
    requestAnimationFrame(tick)
  }
  tick()
}

function createFireworkEffect(pos, color) {
  const group = new THREE.Group()
  const particles = 24
  for (let i = 0; i < particles; i++) {
    const p = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 6, 6),
      new THREE.MeshLambertMaterial({ 
        color, 
        emissive: color, 
        emissiveIntensity: 1.5,
        transparent: true
      })
    )
    const angle = (i / particles) * Math.PI * 2
    const inclination = (Math.random() - 0.5) * Math.PI
    const speed = 0.15 + Math.random() * 0.2
    p.userData.vel = new THREE.Vector3(
      Math.cos(angle) * Math.cos(inclination),
      Math.sin(inclination),
      Math.sin(angle) * Math.cos(inclination)
    ).multiplyScalar(speed)
    group.add(p)
  }
  group.position.copy(pos)
  scene.add(group)
  
  const startTime = clock.getElapsedTime()
  const duration = 1.2
  
  const tick = () => {
    const age = clock.getElapsedTime() - startTime
    if (age > duration) {
      scene.remove(group)
      return
    }
    group.children.forEach(p => {
      p.position.add(p.userData.vel)
      p.userData.vel.multiplyScalar(0.96) // Drag
      p.userData.vel.y -= 0.005 // Gravity
      p.scale.multiplyScalar(0.97)
      p.material.opacity = 1 - (age / duration)
    })
    requestAnimationFrame(tick)
  }
  tick()
}

function throwPokeball(event) {
  if (!camera || !scene) return
  
  const ball = new THREE.Group()
  const top = new THREE.Mesh(
    new THREE.SphereGeometry(0.15, 12, 12, 0, Math.PI * 2, 0, Math.PI / 2),
    new THREE.MeshLambertMaterial({ color: 0xff3333 })
  )
  const bottom = new THREE.Mesh(
    new THREE.SphereGeometry(0.15, 12, 12, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2),
    new THREE.MeshLambertMaterial({ color: 0xffffff })
  )
  ball.add(top)
  ball.add(bottom)
  
  const dir = new THREE.Vector3()
  camera.getWorldDirection(dir)
  
  ball.position.copy(camera.position).addScaledVector(dir, 1)
  scene.add(ball)
  
  const velocity = dir.clone().multiplyScalar(15)
  pokeballsInFlight.push({ mesh: ball, velocity, life: 3 })
}

function launchBalloonCrate(event) {
  const crate = new THREE.Mesh(
     new THREE.BoxGeometry(0.8, 0.8, 0.8),
     new THREE.MeshLambertMaterial({ color: 0x825a2c })
  )
  attachToBalloon(crate, 0xff4444)
}

function attachToBalloon(targetMesh, color = 0xff4444) {
  if (!scene) return
  
  const group = new THREE.Group()
  group.add(targetMesh)
  
  // The Balloon
  const balloon = new THREE.Mesh(
     new THREE.SphereGeometry(0.55, 12, 12),
     new THREE.MeshLambertMaterial({ color, emissive: color, emissiveIntensity: 0.1 })
  )
  balloon.position.y = 1.5
  group.add(balloon)
  
  // The String
  const string = new THREE.Mesh(
     new THREE.CylinderGeometry(0.012, 0.012, 0.8),
     new THREE.MeshLambertMaterial({ color: 0xffffff })
  )
  string.position.y = 1.1
  group.add(string)
  
  group.position.copy(targetMesh.position)
  targetMesh.position.set(0, 0, 0) // Localize
  
  scene.add(group)
  balloonObjects.push({ 
    mesh: group, 
    life: 25, 
    speed: 1.8 + Math.random() * 2.2,
    color
  })
}

function shootBalloonCannon(event) {
  if (!camera || !scene) return
  
  const ball = new THREE.Mesh(
    new THREE.SphereGeometry(0.18, 12, 12),
    new THREE.MeshLambertMaterial({ color: 0xff44ff, emissive: 0xff44ff, emissiveIntensity: 0.5 })
  )
  
  const dir = new THREE.Vector3()
  camera.getWorldDirection(dir)
  
  ball.position.copy(camera.position).addScaledVector(dir, 1)
  scene.add(ball)
  
  const velocity = dir.clone().multiplyScalar(22)
  laserProjectiles.push({ mesh: ball, velocity, life: 3, type: 'balloon_seed' })
}

function shootFirework(event) {
  if (!camera || !scene) return
  const dir = new THREE.Vector3()
  camera.getWorldDirection(dir)
  // Distance to explode
  const pos = camera.position.clone().addScaledVector(dir, 12)
  createFireworkEffect(pos, new THREE.Color().setHSL(Math.random(), 0.8, 0.6).getHex())
}

function summonFairyEffect(event) {
  const locked = getIsLocked()
  const hit = getGroundPoint(event, locked)
  if (hit) {
    spawnFairy(hit.x, hit.y + 0.5, hit.z)
    createCaptureEffect(hit, 0xffffff)
  } else {
    // Just in front of camera
    const dir = new THREE.Vector3()
    camera.getWorldDirection(dir)
    const pos = camera.position.clone().addScaledVector(dir, 4)
    spawnFairy(pos.x, pos.y, pos.z)
    createCaptureEffect(pos, 0xffffff)
  }
}

function updateGuidePip(delta, elapsed) {
   if (!scene || !guidePip.value) return
   
   if (!guideMesh && onboardingStep.value <= 4) {
      guideMesh = new THREE.Mesh(
         new THREE.BoxGeometry(1, 1, 1),
         new THREE.MeshLambertMaterial({ color: guidePip.value.color })
      )
      scene.add(guideMesh)
   }
   
   if (!guideMesh) return
   
   if (onboardingStep.value === 0) {
      if (guidePip.value.size > 1) {
         guidePip.value.size -= delta * 2
      } else {
         guidePip.value.size = 1
         onboardingStep.value = 2 // Start Tour
      }
   }
   
   if (onboardingStep.value === 2) {
      if (!camera) return
      
      const distToPlayer = Math.hypot(camera.position.x - guidePip.value.x, camera.position.z - guidePip.value.z)
      
      // If player is far away, keep moving anyway (no forced "follow" gating)
      if (distToPlayer > 12) {
         guideMesh.rotation.y += delta * 2.5 // soft "come along" signal
      }

      const targetX = 55
      const targetZ = -35
      const dx = targetX - guidePip.value.x
      const dz = targetZ - guidePip.value.z
      const dist = Math.hypot(dx, dz)
      
      if (dist > 2) {
         const speed = 7.5
         guidePip.value.x += (dx / dist) * speed * delta
         guidePip.value.z += (dz / dist) * speed * delta
      } else {
         onboardingStep.value = 3 // Arrived
      }
   }
   
   if (onboardingStep.value >= 4) {
      scene.remove(guideMesh)
      guideMesh = null
      return
   }

   guideMesh.scale.setScalar(guidePip.value.size)
   guideMesh.position.set(guidePip.value.x, (guidePip.value.size / 2) + 0.1, guidePip.value.z)
   guideMesh.rotation.y += delta * 2
}

function updateBalloons(delta, elapsed) {
  for (let i = balloonObjects.length - 1; i >= 0; i--) {
     const b = balloonObjects[i]
     b.mesh.position.y += b.speed * delta
     b.mesh.rotation.y += delta * 0.8
     b.mesh.position.x += Math.sin(elapsed * 0.8 + i) * 0.04
     b.mesh.position.z += Math.cos(elapsed * 0.7 + i) * 0.04
     b.life -= delta
     
     if (b.life < 22) {
       // Start drifting more
       b.mesh.position.x += Math.sin(elapsed * 2) * 0.15
     }

     if (b.life <= 0 || b.mesh.position.y > 60) {
        createFireworkEffect(b.mesh.position, b.color || 0xff4444)
        scene.remove(b.mesh)
        balloonObjects.splice(i, 1)
     }
  }
}

function updateWildPips(delta, elapsed) {
  if (!scene) return
  
  // Cleanup
  const currentWildIds = new Set(wildPips.value.map(p => p.id))
  for (const [id, mesh] of wildPipMeshes) {
    if (!currentWildIds.has(id)) {
      scene.remove(mesh)
      wildPipMeshes.delete(id)
    }
  }

  // Render ghostly pips
  wildPips.value.forEach(p => {
    let mesh = wildPipMeshes.get(p.id)
    if (!mesh) {
       mesh = new THREE.Mesh(
          new THREE.BoxGeometry(0.7, 0.7, 0.7),
          new THREE.MeshLambertMaterial({ color: p.color, transparent: true, opacity: 0.5 })
       )
       mesh.position.set(p.x, 0.45, p.z)
       scene.add(mesh)
       wildPipMeshes.set(p.id, mesh)
    }
    mesh.position.y = 0.45 + Math.sin(elapsed * 2) * 0.1
    mesh.rotation.y += delta * 1.5
  })
}

function updatePokeballs(delta) {
  for (let i = pokeballsInFlight.length - 1; i >= 0; i--) {
    const ball = pokeballsInFlight[i]
    ball.mesh.position.addScaledVector(ball.velocity, delta)
    ball.velocity.y -= 9.8 * delta // Gravity
    ball.life -= delta
    
    if (ball.mesh.position.y < 0) {
       ball.mesh.position.y = 0
       ball.velocity.y *= -0.5 // Bounce
    }
    
    // Check collisions with fairies
    fairies.value.forEach(fairy => {
      const fMesh = fairyMeshes.get(fairy.id)
      if (fMesh && ball.mesh.position.distanceTo(fMesh.position) < 1.2) {
         createCaptureEffect(fMesh.position, fairy.color)
         if (captureFairy(fairy.id)) {
            // captureFairy handles state removal, which updateFairies will cleanup
            ball.life = -1 // Remove ball
         }
      }
    })

    // Check collisions with wild pips
    wildPips.value.forEach(wp => {
       const wMesh = wildPipMeshes.get(wp.id)
       if (wMesh && ball.mesh.position.distanceTo(wMesh.position) < 1.5) {
          createCaptureEffect(wMesh.position, wp.color)
          if (captureWildPip(wp.id)) {
             ball.life = -1
          }
       }
    })

    // Check collisions with Balloons
    for (let j = balloonObjects.length - 1; j >= 0; j--) {
       const b = balloonObjects[j]
       if (ball.mesh.position.distanceTo(b.mesh.position.clone().add(new THREE.Vector3(0, 1.4, 0))) < 1) {
          createCaptureEffect(b.mesh.position, 0xff4444)
          scene.remove(b.mesh)
          balloonObjects.splice(j, 1)
          ball.life = -1
       }
    }
    
    if (ball.life <= 0) {
      scene.remove(ball.mesh)
      pokeballsInFlight.splice(i, 1)
    }
  }

  // Update Lasers / Balloon Seeds
  for (let i = laserProjectiles.length - 1; i >= 0; i--) {
    const laser = laserProjectiles[i]
    laser.mesh.position.addScaledVector(laser.velocity, delta)
    laser.life -= delta

    if (laser.type === 'balloon_seed') {
      // Check collision with Pips
      const meshMap = getPipMeshMap()
      for (const [pipId, group] of meshMap) {
        if (laser.mesh.position.distanceTo(group.position) < 1.2) {
          const clone = group.clone()
          if (removePip(pipId)) {
             attachToBalloon(clone, 0x44ff44)
             laser.life = -1
             break
          }
        }
      }

      // Check collision with Farm Blocks
      for (const [blockId, mesh] of farmBlockMeshes) {
        if (laser.mesh.position.distanceTo(mesh.position) < 1.2) {
          const clone = mesh.clone()
          if (removeFarmBlock(blockId)) {
            attachToBalloon(clone, 0x44ffff)
            laser.life = -1
            break
          }
        }
      }
    }

    if (laser.life <= 0) {
      scene.remove(laser.mesh)
      laserProjectiles.splice(i, 1)
    }
  }
}

function createSignpost(glade) {
  const group = new THREE.Group()
  const post = new THREE.Mesh(
    new THREE.BoxGeometry(0.24, 2.0, 0.24),
    new THREE.MeshLambertMaterial({ color: 0x8f6b44 })
  )
  post.position.y = 1
  group.add(post)

  const labelCanvas = document.createElement('canvas')
  labelCanvas.width = 512
  labelCanvas.height = 128
  const ctx = labelCanvas.getContext('2d')
  ctx.fillStyle = 'rgba(255, 247, 232, 0.92)'
  ctx.fillRect(0, 0, 512, 128)
  ctx.strokeStyle = 'rgba(92, 74, 60, 0.9)'
  ctx.lineWidth = 6
  ctx.strokeRect(3, 3, 506, 122)
  ctx.fillStyle = '#5a463a'
  ctx.font = 'bold 40px sans-serif'
  ctx.fillText(glade.name, 22, 52)
  ctx.font = '26px sans-serif'
  ctx.fillText(`${glade.theme} · ${glade.project}`, 22, 96)

  const tex = new THREE.CanvasTexture(labelCanvas)
  const board = new THREE.Mesh(
    new THREE.PlaneGeometry(4.2, 1.1),
    new THREE.MeshLambertMaterial({ map: tex, transparent: true })
  )
  board.position.set(0, 2.2, 0)
  group.add(board)

  group.position.set(glade.center.x, 0, glade.center.z - 10.5)
  group.userData.gladeId = glade.id
  return group
}

function onCanvasClick(event) {
  const locked = getIsLocked()
  const cam = getCamera()
  const meshMap = getPipMeshMap()
  if (!cam || !renderer) return

  if (buildMode.value) {
    const hit = getGroundPoint(event, locked)
    if (hit && isInActiveFarmZone(hit.x, hit.z)) {
      placeFarmBlock(selectedTool.value, hit.x, hit.z)
      return
    }
  }

  if (decorMode.value) {
    const hit = getGroundPoint(event, locked)
    if (hit) {
      placeDecoration(selectedTool.value, hit.x, hit.z)
      return
    }
  }

  if (currentMode.value === 'wizard' || currentMode.value === 'about') {
    const hit = getGroundPoint(event, locked)
    if (hit) {
      const noteText = prompt('Enter a "Best Prompt" to leave as a note:')
      if (noteText) {
        createNoteMesh(noteText, hit.x, hit.z, scene)
      }
      return
    }
  }

  // Right click or special key for pokeball? 
  // Let's use left click if shift is held, or maybe just left click for pokeball in playful mode
  if (currentMode.value === 'playful') {
    const currentItem = inventory.value[selectedSlot.value]
    if (currentItem?.id === 'balloon_cannon') {
       shootBalloonCannon(event)
    } else if (currentItem?.id === 'firework_launcher') {
       shootFirework(event)
    } else if (currentItem?.id === 'fairy_summoner') {
       summonFairyEffect(event)
    } else if (currentItem?.id === 'capture_orb') {
       throwPokeball(event)
    } else if (currentItem?.type === 'weapon') {
       // Cute weapon "bonk" = sparkly pop in front of camera
       const dir = new THREE.Vector3()
       camera.getWorldDirection(dir)
       const pos = camera.position.clone().addScaledVector(dir, 6)
       createFireworkEffect(pos, new THREE.Color().setHSL(Math.random(), 0.85, 0.7).getHex())
    } else if (!currentItem) {
       // Default fallback if slot is empty
       shootFirework(event)
    }
    return
  }

  const pipId = pickPip(event, cam, meshMap, renderer, locked)
  if (pipId !== null) {
    const pip = pips.value.find((p) => p.id === pipId)
    if (pip) {
      // If we have a hat selected, apply it instead of selecting
      const currentItem = inventory.value[selectedSlot.value]
      if (currentItem && currentItem.type === 'hat') {
        equipHat(pip.id, currentItem)
        return
      }
      selectPip(pip)
    }
  }
}

function onResize() {
  if (!renderer || !container.value) return
  const w = window.innerWidth
  const h = window.innerHeight
  renderer.setSize(w, h)
  resizeCamera(w, h)
}

function animate() {
  animationId = requestAnimationFrame(animate)

  const delta = clock.getDelta()
  const elapsed = clock.getElapsedTime()

  updateCamera(delta, { mode: currentMode.value })
  updatePipAnimations(elapsed)
  updatePipEyeTracking(camera)

  if (isGathering.value) {
    updateGathering(delta, getPipMeshMap())
  }
  tickFarm(delta)
  syncDecorationMeshes()
  updateCompanion(elapsed)
  updateFairies(delta, elapsed)
  updateWildPips(delta, elapsed)
  updateGuidePip(delta, elapsed)
  updateBalloons(delta, elapsed)
  updatePokeballs(delta)
  
  if (fairies.value.length < 5 && Math.random() < 0.01) {
    spawnFairy()
  }
  if (wildPips.value.length < 3 && Math.random() < 0.005) {
     spawnWildPip()
  }
  if (camera) {
    setPlayerPosition(camera.position.x, camera.position.z)
  }

  renderer.render(scene, camera)
}

onMounted(() => {
  // Renderer - soft anime tone mapping
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.4
  renderer.outputColorSpace = THREE.SRGBColorSpace
  container.value.appendChild(renderer.domElement)

  // Scene
  scene = new THREE.Scene()
  createTerrain(scene)

  // Farm zone markers for all glade districts
  for (const glade of gladeSlots.value) {
    const zone = glade.zone
    const zoneGeo = new THREE.PlaneGeometry(
      zone.maxX - zone.minX + 1,
      zone.maxZ - zone.minZ + 1
    )
    const zoneMat = new THREE.MeshLambertMaterial({
      color: new THREE.Color(glade.color),
      transparent: true,
      opacity: 0.16,
    })
    const zoneMesh = new THREE.Mesh(zoneGeo, zoneMat)
    zoneMesh.rotation.x = -Math.PI / 2
    zoneMesh.position.set(
      (zone.minX + zone.maxX) / 2,
      0.02,
      (zone.minZ + zone.maxZ) / 2
    )
    scene.add(zoneMesh)
    farmZoneMeshes.set(glade.id, zoneMesh)

    const signpost = createSignpost(glade)
    scene.add(signpost)
    signpostMeshes.push(signpost)
  }

  // Camera
  camera = createCamera(renderer, renderer.domElement)

  // Clock
  clock = new THREE.Clock()

  if (pips.value.length > 0) {
    createPipMeshes(pips.value, scene)
  }
  
  // Initialize saved prompts as 3D notes
  initSavedNotes(scene)

  // Tiny companion pip (player proxy for cozy world presence)
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(0.42, 0.42, 0.42),
    new THREE.MeshLambertMaterial({ color: 0xf9d39d, emissive: 0xa06c5a, emissiveIntensity: 0.08 })
  )
  companionMesh = new THREE.Group()
  companionMesh.add(body)
  const eye = new THREE.Mesh(
    new THREE.BoxGeometry(0.06, 0.06, 0.04),
    new THREE.MeshLambertMaterial({ color: 0x222233 })
  )
  eye.position.set(0.08, 0.03, 0.22)
  companionMesh.add(eye)
  const eye2 = eye.clone()
  eye2.position.x = -0.08
  companionMesh.add(eye2)
  companionMesh.position.set(13.5, 0.48, 13.5)
  scene.add(companionMesh)

  // Start loop
  animate()

  // Resize handler
  window.addEventListener('resize', onResize)
})

watch(
  () => pips.value,
  (newPips) => {
    if (scene && newPips) {
      syncPipMeshes(newPips, scene)
    }
  },
  { deep: true }
)

watch(
  () => farmBlocks.value,
  () => {
    syncFarmBlockMeshes()
  },
  { deep: true }
)

watch(
  () => activeGlade.value?.id,
  () => {
    for (const glade of gladeSlots.value) {
      const mesh = farmZoneMeshes.get(glade.id)
      if (mesh) {
        mesh.material.opacity = activeGlade.value?.id === glade.id ? 0.28 : 0.12
      }
    }
    for (const sign of signpostMeshes) {
      sign.visible = true
      sign.children.forEach((child) => {
        if (child.material) {
          child.material.opacity = sign.userData.gladeId === activeGlade.value?.id ? 1 : 0.72
          child.material.transparent = true
        }
      })
    }
  }
)

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
  cleanupCamera()
  window.removeEventListener('resize', onResize)
  if (renderer) {
    renderer.dispose()
    if (container.value && renderer.domElement.parentNode === container.value) {
      container.value.removeChild(renderer.domElement)
    }
  }
})

function onContextMenu(event) {
  event.preventDefault()
  if (currentMode.value === 'playful') {
     launchBalloonCrate(event)
  }
}
</script>

<template>
  <div ref="container" class="glade-canvas" @click="onCanvasClick" @contextmenu="onContextMenu"></div>
</template>

<style scoped>
.glade-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
}
</style>
