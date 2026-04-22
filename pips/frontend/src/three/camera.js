import * as THREE from 'three'

let camera = null
let domEl = null

const velocity = new THREE.Vector3()
const direction = new THREE.Vector3()
const euler = new THREE.Euler(0, 0, 0, 'YXZ')
const WORLD_UP = new THREE.Vector3(0, 1, 0)

const BASE_FOV = 78
const SPRINT_FOV = 86
const EYE_HEIGHT = 1.65

const keys = {
  forward: false,
  backward: false,
  left: false,
  right: false,
  shift: false,
  up: false,
  down: false,
  crouch: false,
}

let isLocked = false
let yaw = 0
let pitch = 0
let moveTime = 0
let currentEyeHeight = EYE_HEIGHT
let jumpTime = 0
let handGroup = null
let boatGroup = null
let handBob = 0
let boatBob = 0

export function createCamera(renderer, domElement) {
  camera = new THREE.PerspectiveCamera(
    BASE_FOV,
    window.innerWidth / window.innerHeight,
    0.1,
    1000 // Extended far plane for ocean
  )
  camera.position.set(15, EYE_HEIGHT, 15)
  yaw = -Math.PI * 0.75
  pitch = -0.12
  camera.quaternion.setFromEuler(new THREE.Euler(pitch, yaw, 0, 'YXZ'))

  domEl = domElement

  // Pointer lock listener
  domElement.addEventListener('click', () => {
    if (!isLocked) domElement.requestPointerLock()
  })
  
  document.addEventListener('pointerlockchange', () => {
    isLocked = document.pointerLockElement === domElement
  })

  // Create Hand Viewmodel
  handGroup = new THREE.Group()
  const handGeo = new THREE.BoxGeometry(0.12, 0.12, 0.4)
  const handMat = new THREE.MeshStandardMaterial({ color: 0xe8c0d8, roughness: 0.7 })
  const handMesh = new THREE.Mesh(handGeo, handMat)
  handMesh.position.set(0.35, -0.25, -0.5)
  handGroup.add(handMesh)
  camera.add(handGroup)

  // Create Boat Viewmodel (hidden by default)
  createBoatMesh()

  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('keydown', onKeyDown)
  document.addEventListener('keyup', onKeyUp)

  return camera
}

function createBoatMesh() {
    boatGroup = new THREE.Group()
    const hullGeo = new THREE.BoxGeometry(1.5, 0.6, 3)
    const hullMat = new THREE.MeshLambertMaterial({ color: 0x5a3a2a })
    const hull = new THREE.Mesh(hullGeo, hullMat)
    boatGroup.add(hull)

    const mastGeo = new THREE.BoxGeometry(0.1, 2.5, 0.1)
    const mast = new THREE.Mesh(mastGeo, hullMat)
    mast.position.y = 1.5
    boatGroup.add(mast)

    const sailGeo = new THREE.BoxGeometry(1.2, 1.8, 0.05)
    const sailMat = new THREE.MeshLambertMaterial({ color: 0xeeeeee })
    const sail = new THREE.Mesh(sailGeo, sailMat)
    sail.position.set(0, 2, 0.6)
    boatGroup.add(sail)

    boatGroup.visible = false
    // Boat doesn't attach to camera, it exists in scene or follows camera differently
}

export function addToScene(scene) {
    if (boatGroup) scene.add(boatGroup)
}

export function updateCamera(delta, options = {}) {
  if (!camera) return
  const mode = options.mode || 'explore'
  const isSailing = mode === 'sailing'
  const playful = mode === 'playful'

  // Visibility Toggles
  if (handGroup) handGroup.visible = !isSailing
  if (boatGroup) boatGroup.visible = isSailing

  if (isSailing) {
    updateSailingControls(delta)
  } else {
    updateExploreControls(delta, playful)
  }

  camera.updateProjectionMatrix()
}

function updateSailingControls(delta) {
    // Boat movement - Tank controls / Momentum
    const turnSpeed = 1.8
    const boatSpeed = keys.shift ? 18 : 12
    const boatAccel = 10
    const boatDamping = 0.98

    if (keys.left) yaw += turnSpeed * delta
    if (keys.right) yaw -= turnSpeed * delta

    direction.set(0, 0, 0)
    if (keys.forward) direction.z = -1
    if (keys.backward) direction.z = 0.5
    
    const forward = new THREE.Vector3(0, 0, -1)
    forward.applyEuler(new THREE.Euler(0, yaw, 0))
    forward.normalize()

    velocity.addScaledVector(forward, -direction.z * boatAccel * delta)
    velocity.multiplyScalar(boatDamping)

    // Apply boat movement
    camera.position.addScaledVector(velocity, delta)
    camera.position.y = 0.5 // Boat vertical offset

    // Boat bobbing
    boatBob += delta * 1.5
    const bob = Math.sin(boatBob) * 0.15
    
    if (boatGroup) {
        boatGroup.position.copy(camera.position)
        boatGroup.position.y += bob - 1.2
        boatGroup.rotation.y = yaw
        // Slight tilt when turning
        const tilt = (keys.left ? 0.05 : 0) + (keys.right ? -0.05 : 0)
        boatGroup.rotation.z = THREE.MathUtils.lerp(boatGroup.rotation.z, tilt, 0.1)
    }

    // 3rd Person Follow Cam
    const offset = new THREE.Vector3(0, 5, 12)
    offset.applyEuler(new THREE.Euler(0, yaw, 0))
    const targetCamPos = camera.position.clone().add(offset)
    
    // Smooth camera follow
    camera.position.lerp(targetCamPos, 0.1)
    camera.lookAt(boatGroup.position)
    
    // Update yaw/pitch for lookAt consistency
    const lookDir = new THREE.Vector3()
    camera.getWorldDirection(lookDir)
    yaw = Math.atan2(lookDir.x, lookDir.z)
}

function updateExploreControls(delta, playful) {
  const moveSpeed = playful ? (keys.shift ? 16 : 10) : (keys.shift ? 5.6 : 4.3)
  const accel = 50
  const damping = 10

  direction.set(0, 0, 0)
  if (keys.forward) direction.z -= 1
  if (keys.backward) direction.z += 1
  if (keys.left) direction.x -= 1
  if (keys.right) direction.x += 1
  direction.normalize()

  const forward = new THREE.Vector3()
  camera.getWorldDirection(forward)
  forward.y = 0
  forward.normalize()

  const right = new THREE.Vector3().crossVectors(forward, WORLD_UP).normalize()

  const moveDir = new THREE.Vector3()
  moveDir.addScaledVector(forward, -direction.z)
  moveDir.addScaledVector(right, direction.x)

  velocity.x += moveDir.x * accel * delta
  velocity.z += moveDir.z * accel * delta
  velocity.x *= (1 - damping * delta)
  velocity.z *= (1 - damping * delta)

  camera.position.x += velocity.x * delta
  camera.position.z += velocity.z * delta

  if (!playful) {
    velocity.y -= 30 * delta
    const grounded = camera.position.y <= EYE_HEIGHT + 0.1
    if (keys.up && grounded && jumpTime <= 0) {
      velocity.y = 8
      jumpTime = 0.2
    }
    if (jumpTime > 0) jumpTime -= delta
    
    camera.position.y += velocity.y * delta
    if (camera.position.y < EYE_HEIGHT) {
        camera.position.y = EYE_HEIGHT
        velocity.y = 0
    }
  } else {
    // Flight controls
    const vTarget = (keys.up ? 1 : 0) + (keys.down ? -1 : 0)
    velocity.y += vTarget * 10 * delta
    velocity.y *= 0.95
    camera.position.y += velocity.y * delta
  }

  // Restore euler orientation for explore mode
  camera.quaternion.setFromEuler(new THREE.Euler(pitch, yaw, 0, 'YXZ'))
}

function onMouseMove(e) {
  if (!isLocked) return
  const sensitivity = 0.002
  yaw -= e.movementX * sensitivity
  pitch -= e.movementY * sensitivity
  pitch = THREE.MathUtils.clamp(pitch, -Math.PI / 2, Math.PI / 2)
}

function onKeyDown(e) {
  switch (e.code) {
    case 'KeyW': keys.forward = true; break
    case 'KeyS': keys.backward = true; break
    case 'KeyA': keys.left = true; break
    case 'KeyD': keys.right = true; break
    case 'ShiftLeft': keys.shift = true; break
    case 'Space': keys.up = true; break
    case 'ControlLeft': keys.down = true; break
    case 'KeyC': keys.crouch = true; break
  }
}

function onKeyUp(e) {
  switch (e.code) {
    case 'KeyW': keys.forward = false; break
    case 'KeyS': keys.backward = false; break
    case 'KeyA': keys.left = false; break
    case 'KeyD': keys.right = false; break
    case 'ShiftLeft': keys.shift = false; break
    case 'Space': keys.up = false; break
    case 'ControlLeft': keys.down = false; break
    case 'KeyC': keys.crouch = false; break
  }
}


export function getIsLocked() {
  return isLocked
}

export function requestCursorLock() {
  // No-op in always-visible cursor mode.
}

export function teleportNearTarget(x, z, targetY = EYE_HEIGHT) {
  if (!camera) return
  camera.position.set(x + 1.8, targetY, z + 1.8)
  const dx = x - camera.position.x
  const dz = z - camera.position.z
  yaw = Math.atan2(-dx, -dz)
  pitch = -0.08
  euler.set(pitch, yaw, 0)
  camera.quaternion.setFromEuler(euler)
}

export function getCamera() { return camera }
export function resizeCamera(w, h) { if (camera) { camera.aspect = w/h; camera.updateProjectionMatrix() } }

export function cleanupCamera() {
  if (domEl) {
    domEl.removeEventListener('mousedown', onMouseDown)
  }
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('keydown', onKeyDown)
  document.removeEventListener('keyup', onKeyUp)
}

