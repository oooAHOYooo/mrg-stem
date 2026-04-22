import * as THREE from 'three'

const pipMeshMap = new Map()

// Soft anime pastel palette
const PIP_COLORS = [
  0xf8a0a0, 0xa0c8f8, 0xa8e0a8, 0xf8d888, 0xd0a0e8,
  0xf8c090, 0x88d8d8, 0xc8a8f0, 0xf8a0c0, 0xb8d888,
]

export function getPipMeshMap() {
  return pipMeshMap
}

const brickGeo = new THREE.BoxGeometry(0.14, 0.1, 0.14)
const brickMat = new THREE.MeshLambertMaterial({ 
    color: 0xfff4d1,
    emissive: 0xffe0a0,
    emissiveIntensity: 0.1
})

function getPyramidPosition(index) {
    let layer = 0
    let countInLayers = 0
    let size = 6 // Base size for tiny pyramids
    
    while (size > 0) {
        const layerCount = size * size
        if (index < countInLayers + layerCount) {
            const idxInLayer = index - countInLayers
            const x = (idxInLayer % size) - (size - 1) / 2
            const z = Math.floor(idxInLayer / size) - (size - 1) / 2
            return new THREE.Vector3(x * 0.15, layer * 0.11, z * 0.15)
        }
        countInLayers += layerCount
        layer++
        size--
    }
    // Beyond base pyramid, build a spire
    return new THREE.Vector3(0, (layer + (index - countInLayers)) * 0.11, 0)
}

export function createPipMeshes(pips, scene) {
  pips.forEach((pip, index) => {
    if (pipMeshMap.has(pip.id)) return
    const group = buildPipGroup(pip, index)
    scene.add(group)
    pipMeshMap.set(pip.id, group)
  })
}

export function syncPipMeshes(pips, scene) {
  const currentIds = new Set(pips.map((p) => p.id))

  for (const [id, group] of pipMeshMap) {
    if (!currentIds.has(id)) {
      if (group.userData.pyramidGroup) {
        scene.remove(group.userData.pyramidGroup)
      }
      scene.remove(group)
      pipMeshMap.delete(id)
    }
  }

  pips.forEach((pip, index) => {
    if (!pipMeshMap.has(pip.id)) {
      const group = buildPipGroup(pip, index)
      scene.add(group)
      pipMeshMap.set(pip.id, group)
    }

    const mesh = pipMeshMap.get(pip.id)
    if (pip.position_x !== undefined) {
      mesh.userData.baseX = pip.position_x
      mesh.userData.baseZ = pip.position_z
    }
    mesh.userData.isBuilding = pip.isBuilding
    mesh.userData.brickCount = pip.brickCount || 0

    // Update pyramid
    updatePyramid(mesh, mesh.userData.brickCount, scene)
    
    // Sync hat
    if (mesh.userData.currentHatId !== pip.hat) {
      if (mesh.userData.hatMesh) mesh.remove(mesh.userData.hatMesh)
      if (pip.hat) {
        const hatMesh = buildHat(pip.hat)
        mesh.add(hatMesh)
        mesh.userData.hatMesh = hatMesh
      }
      mesh.userData.currentHatId = pip.hat
    }
  })
}

const _eyeWorld = new THREE.Vector3()
const _toCam = new THREE.Vector3()
const _invWorld = new THREE.Matrix4()

export function updatePipEyeTracking(camera) {
  if (!camera) return
  for (const [, group] of pipMeshMap) {
    const left = group.userData.leftPupil
    const right = group.userData.rightPupil
    const sl = group.userData.leftSparkle
    const sr = group.userData.rightSparkle
    const lb = group.userData.pupilBaseLeft
    const rb = group.userData.pupilBaseRight
    if (!left || !right || !lb || !rb) continue

    group.updateMatrixWorld(true)
    _eyeWorld.set(0, 0.08, 0.41)
    _eyeWorld.applyMatrix4(group.matrixWorld)

    _toCam.subVectors(camera.position, _eyeWorld).normalize()
    _invWorld.copy(group.matrixWorld).invert()
    _toCam.transformDirection(_invWorld)

    const maxX = 0.052
    const maxY = 0.038
    const ox = THREE.MathUtils.clamp(_toCam.x * 0.14, -maxX, maxX)
    const oy = THREE.MathUtils.clamp(_toCam.y * 0.11, -maxY, maxY)

    left.position.set(lb.x + ox, lb.y + oy, lb.z)
    right.position.set(rb.x + ox, rb.y + oy, rb.z)

    if (sl && group.userData.sparkleBaseLeft) {
      const b = group.userData.sparkleBaseLeft
      sl.position.set(b.x + ox * 0.85, b.y + oy * 0.85, b.z)
    }
    if (sr && group.userData.sparkleBaseRight) {
      const b = group.userData.sparkleBaseRight
      sr.position.set(b.x + ox * 0.85, b.y + oy * 0.85, b.z)
    }
  }
}


function updatePyramid(group, brickCount, scene) {
  if (!group.userData.pyramidGroup) {
    const pGroup = new THREE.Group()
    // Position pyramid slightly offset from pip
    pGroup.position.set(group.userData.baseX + 1.2, 0.05, group.userData.baseZ + 1.2)
    // Random rotation for natural feel
    pGroup.rotation.y = Math.random() * Math.PI
    scene.add(pGroup)
    group.userData.pyramidGroup = pGroup
    group.userData.bricks = []
  }

  const pGroup = group.userData.pyramidGroup
  const bricks = group.userData.bricks

  if (bricks.length < brickCount) {
    for (let i = bricks.length; i < brickCount; i++) {
        const pos = getPyramidPosition(i)
        const brick = new THREE.Mesh(brickGeo, brickMat)
        brick.position.copy(pos)
        brick.scale.setScalar(0.001)
        pGroup.add(brick)
        bricks.push(brick)
        brick.userData.targetScale = 1
    }
  }
}

export function updatePipAnimations(time) {
  const now = performance.now() / 1000
  let i = 0
  for (const [, group] of pipMeshMap) {
    // Gentle floating bob - very soft and dreamy
    const bob = Math.sin(time * 1.5 + i * 1.3) * 0.08
    const basePos = new THREE.Vector3(group.userData.baseX, group.userData.baseY, group.userData.baseZ)
    
    // Building animation
    if (group.userData.isBuilding) {
        const pGroup = group.userData.pyramidGroup
        if (pGroup) {
            const dir = new THREE.Vector3().subVectors(pGroup.position, basePos).normalize()
            const buildT = (Math.sin(time * 8) * 0.5 + 0.5)
            const targetPos = basePos.clone().addScaledVector(dir, 0.6 * buildT)
            group.position.lerp(targetPos, 0.2)
            group.rotation.x = -0.4 * buildT
        }
    } else {
        group.position.lerp(new THREE.Vector3(basePos.x, basePos.y + bob, basePos.z), 0.1)
        group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, 0, 0.1)
    }

    // Soft swaying
    group.rotation.y = Math.sin(time * 0.6 + i * 2.1) * 0.08
    group.rotation.z = Math.sin(time * 0.8 + i * 1.7) * 0.02

    // Update bricks pop-in
    if (group.userData.bricks) {
        group.userData.bricks.forEach(b => {
            if (b.scale.x < 1) {
                b.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1)
            }
        })
    }

    // Animate blush opacity subtly
    const blushes = group.userData.blushes
    if (blushes) {
      const blushIntensity = 0.15 + Math.sin(time * 1.2 + i * 0.8) * 0.05
      blushes.forEach(b => {
        b.material.emissiveIntensity = blushIntensity
      })
    }

    // Reaction animation (feed/hydrate): bounce + sparkle + heart burst
    const reaction = group.userData.reaction
    if (reaction && now < reaction.until) {
      const t = (now - reaction.start)
      const p = Math.min(1, t / reaction.duration)
      const easeOut = 1 - Math.pow(1 - p, 3)
      const bounce = Math.sin(t * 14) * (1 - easeOut) * 0.18
      const pop = Math.sin(t * 8) * 0.08 + 0.08

      group.scale.setScalar(1 + pop + bounce * 0.3)
      group.rotation.x = Math.sin(t * 10) * 0.06

      if (blushes) {
        blushes.forEach(b => {
          b.material.emissiveIntensity = 0.22 + Math.sin(now * 6) * 0.08
          b.material.opacity = 0.65 + Math.sin(now * 5) * 0.08
        })
      }

      const sl = group.userData.leftSparkle
      const sr = group.userData.rightSparkle
      if (sl && sr) {
        const s = 1 + Math.sin(now * 18) * 0.35
        sl.scale.setScalar(s)
        sr.scale.setScalar(s)
      }

      // Update heart particles
      const particles = group.userData.reactionParticles
      if (particles && particles.length) {
        for (let j = particles.length - 1; j >= 0; j--) {
          const h = particles[j]
          h.userData.vel.y -= 0.012
          h.position.addScaledVector(h.userData.vel, 0.016)
          h.rotation.z += 0.08
          h.material.opacity *= 0.965
          h.scale.multiplyScalar(0.985)
          if (h.material.opacity < 0.05) {
            group.remove(h)
            particles.splice(j, 1)
          }
        }
      }
    } else {
      // reset scale if no reaction
      group.scale.setScalar(1)
      group.rotation.x = 0
    }

    i++
  }
}

export function triggerPipReaction(pipId, kind = 'feed') {
  const group = pipMeshMap.get(pipId)
  if (!group) return false

  const now = performance.now() / 1000
  const duration = kind === 'hydrate' ? 1.2 : 1.35
  group.userData.reaction = {
    kind,
    start: now,
    duration,
    until: now + duration,
  }

  // Heart burst
  const color = kind === 'hydrate' ? 0x8be9ff : 0xff8ebc
  const heartMat = new THREE.MeshLambertMaterial({
    color,
    emissive: color,
    emissiveIntensity: 0.9,
    transparent: true,
    opacity: 0.95,
  })
  const heartGeo = new THREE.SphereGeometry(0.06, 8, 8)
  const count = 8

  if (!group.userData.reactionParticles) group.userData.reactionParticles = []

  for (let i = 0; i < count; i++) {
    const h = new THREE.Mesh(heartGeo, heartMat.clone())
    const angle = (i / count) * Math.PI * 2
    h.position.set(Math.cos(angle) * 0.08, 0.55 + Math.random() * 0.06, Math.sin(angle) * 0.08)
    h.userData.vel = new THREE.Vector3(
      (Math.random() - 0.5) * 0.35 + Math.cos(angle) * 0.2,
      0.55 + Math.random() * 0.4,
      (Math.random() - 0.5) * 0.35 + Math.sin(angle) * 0.2
    )
    group.add(h)
    group.userData.reactionParticles.push(h)
  }
  return true
}

function buildHat(hatId) {
  const group = new THREE.Group()
  if (hatId === 'wizard_hat') {
    const geo = new THREE.ConeGeometry(0.5, 0.8, 12)
    const mat = new THREE.MeshLambertMaterial({ color: 0x4B3A6C })
    const cone = new THREE.Mesh(geo, mat)
    cone.position.y = 0.8
    group.add(cone)
    
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.05, 12), mat)
    brim.position.y = 0.4
    group.add(brim)
  } else if (hatId === 'hard_hat') {
    const geo = new THREE.SphereGeometry(0.45, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2)
    const mat = new THREE.MeshLambertMaterial({ color: 0xffcc00 })
    const dome = new THREE.Mesh(geo, mat)
    dome.position.y = 0.4
    group.add(dome)
  } else if (hatId === 'beret') {
    const geo = new THREE.CylinderGeometry(0.45, 0.4, 0.15, 12)
    const mat = new THREE.MeshLambertMaterial({ color: 0x333333 })
    const mat2 = new THREE.MeshLambertMaterial({ color: 0x333333 })
    const top = new THREE.Mesh(geo, mat)
    top.position.y = 0.45
    group.add(top)
  } else if (hatId === 'crown') {
    const geo = new THREE.CylinderGeometry(0.45, 0.45, 0.4, 8, 1, true)
    const mat = new THREE.MeshLambertMaterial({ color: 0xffd700 })
    const ring = new THREE.Mesh(geo, mat)
    ring.position.y = 0.6
    group.add(ring)
    
    for (let i = 0; i < 8; i++) {
       const spike = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.3, 4), mat)
       const angle = (i / 8) * Math.PI * 2
       spike.position.set(Math.cos(angle) * 0.45, 0.8, Math.sin(angle) * 0.45)
       group.add(spike)
    }
  }
  return group
}

function buildPipGroup(pip, index) {
  const group = new THREE.Group()

  const color = pip.color
    ? new THREE.Color(pip.color)
    : new THREE.Color(PIP_COLORS[index % PIP_COLORS.length])

  // Body - slightly rounded look by using a larger body
  const bodyGeo = new THREE.BoxGeometry(0.8, 0.8, 0.8)
  const bodyMat = new THREE.MeshLambertMaterial({
    color,
    emissive: color,
    emissiveIntensity: 0.08,
  })
  const body = new THREE.Mesh(bodyGeo, bodyMat)
  group.add(body)

  // Soft highlight on top (anime light reflection)
  const highlightGeo = new THREE.BoxGeometry(0.35, 0.05, 0.35)
  const highlightMat = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    emissive: 0xffffff,
    emissiveIntensity: 0.3,
    transparent: true,
    opacity: 0.4,
  })
  const highlight = new THREE.Mesh(highlightGeo, highlightMat)
  highlight.position.set(-0.1, 0.41, -0.1)
  group.add(highlight)

  // Big sparkly anime eyes (larger, rounder feel)
  const eyeGeo = new THREE.BoxGeometry(0.2, 0.22, 0.05)
  const eyeMat = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    emissive: 0xffffff,
    emissiveIntensity: 0.15,
  })

  const leftEye = new THREE.Mesh(eyeGeo, eyeMat)
  leftEye.position.set(-0.15, 0.08, 0.41)
  group.add(leftEye)

  const rightEye = new THREE.Mesh(eyeGeo, eyeMat)
  rightEye.position.set(0.15, 0.08, 0.41)
  group.add(rightEye)

  // Large dark pupils
  const pupilGeo = new THREE.BoxGeometry(0.12, 0.14, 0.05)
  const pupilMat = new THREE.MeshLambertMaterial({ color: 0x222233 })

  const leftPupil = new THREE.Mesh(pupilGeo, pupilMat)
  leftPupil.position.set(-0.15, 0.06, 0.44)
  group.add(leftPupil)

  const rightPupil = new THREE.Mesh(pupilGeo, pupilMat)
  rightPupil.position.set(0.15, 0.06, 0.44)
  group.add(rightPupil)

  group.userData.leftPupil = leftPupil
  group.userData.rightPupil = rightPupil
  group.userData.pupilBaseLeft = leftPupil.position.clone()
  group.userData.pupilBaseRight = rightPupil.position.clone()

  // Anime eye sparkle (small white reflection)
  const sparkleGeo = new THREE.BoxGeometry(0.05, 0.05, 0.02)
  const sparkleMat = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    emissive: 0xffffff,
    emissiveIntensity: 0.6,
  })

  const leftSparkle = new THREE.Mesh(sparkleGeo, sparkleMat)
  leftSparkle.position.set(-0.1, 0.12, 0.47)
  group.add(leftSparkle)

  const rightSparkle = new THREE.Mesh(sparkleGeo, sparkleMat)
  rightSparkle.position.set(0.2, 0.12, 0.47)
  group.add(rightSparkle)

  group.userData.leftSparkle = leftSparkle
  group.userData.rightSparkle = rightSparkle
  group.userData.sparkleBaseLeft = leftSparkle.position.clone()
  group.userData.sparkleBaseRight = rightSparkle.position.clone()

  // Blush cheeks (soft pink glow)
  const blushGeo = new THREE.BoxGeometry(0.12, 0.08, 0.05)
  const blushColor = 0xff8888
  const leftBlush = new THREE.Mesh(
    blushGeo,
    new THREE.MeshLambertMaterial({
      color: blushColor,
      emissive: blushColor,
      emissiveIntensity: 0.15,
      transparent: true,
      opacity: 0.6,
    })
  )
  leftBlush.position.set(-0.25, -0.05, 0.41)
  group.add(leftBlush)

  const rightBlush = new THREE.Mesh(
    blushGeo,
    new THREE.MeshLambertMaterial({
      color: blushColor,
      emissive: blushColor,
      emissiveIntensity: 0.15,
      transparent: true,
      opacity: 0.6,
    })
  )
  rightBlush.position.set(0.25, -0.05, 0.41)
  group.add(rightBlush)

  group.userData.blushes = [leftBlush, rightBlush]

  // Small smile (tiny dark line)
  const smileGeo = new THREE.BoxGeometry(0.12, 0.03, 0.02)
  const smileMat = new THREE.MeshLambertMaterial({ color: 0x553344 })
  const smile = new THREE.Mesh(smileGeo, smileMat)
  smile.position.set(0, -0.1, 0.42)
  group.add(smile)

  // Position
  const px = pip.position_x !== undefined ? pip.position_x : -8 + (index % 5) * 4
  const pz = pip.position_z !== undefined ? pip.position_z : -4 + Math.floor(index / 5) * 4
  const py = 0.6

  group.position.set(px, py, pz)
  group.userData.baseX = px
  group.userData.baseY = py
  group.userData.baseZ = pz
  group.userData.pipId = pip.id
  group.userData.pipName = pip.name

  if (pip.hat) {
     const hatMesh = buildHat(pip.hat)
     group.add(hatMesh)
     group.userData.hatMesh = hatMesh
     group.userData.currentHatId = pip.hat
  }

  return group
}
