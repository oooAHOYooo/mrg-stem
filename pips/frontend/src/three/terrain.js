import * as THREE from 'three'

export const COUNCIL_POSITION = { x: 0, y: 0.75, z: 0 }

export function createTerrain(scene) {
  // Fantasy twilight sky - deep elvish blue-green
  scene.background = new THREE.Color(0x0a141e)

  // Mystical fog - cool ocean mist
  scene.fog = new THREE.FogExp2(0x0e1a26, 0.008)

  // Warm ambient light
  const ambient = new THREE.AmbientLight(0xffe8b0, 0.4)
  scene.add(ambient)

  // Golden sun
  const sun = new THREE.DirectionalLight(0xffcc66, 1.2)
  sun.position.set(30, 60, 40)
  scene.add(sun)

  // Cool moonlight
  const fill = new THREE.DirectionalLight(0x88aadd, 0.4)
  fill.position.set(-30, 20, -40)
  scene.add(fill)

  // Hemisphere light
  const hemi = new THREE.HemisphereLight(0x1a2e3a, 0x0a1a2a, 0.6)
  scene.add(hemi)

  // OCEAN FLOOR - Massive water plane
  const waterGeo = new THREE.PlaneGeometry(2000, 2000)
  const waterMat = new THREE.MeshLambertMaterial({ 
    color: 0x1e3f5a, 
    transparent: true, 
    opacity: 0.85 
  })
  const water = new THREE.Mesh(waterGeo, waterMat)
  water.rotation.x = -Math.PI / 2
  water.position.y = 0
  scene.add(water)

  // Add subtle grid tracking for scale
  addMeasurementGrid(scene)
  
  // Add distant boundary fog clouds (replacing mountains)
  addDistantBoundary(scene)
}

function addMeasurementGrid(scene) {
    const major = new THREE.GridHelper(1000, 20, 0x2a7a4a, 0x1e3f5a)
    major.position.y = 0.05
    major.material.opacity = 0.05
    major.material.transparent = true
    scene.add(major)
}

function addDistantBoundary(scene) {
  // Atmospheric clouds/mist at edge of horizon
  const count = 60
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2
    const radius = 400 + Math.random() * 100
    const x = Math.cos(angle) * radius
    const z = Math.sin(angle) * radius
    
    const size = 40 + Math.random() * 60
    const geo = new THREE.BoxGeometry(size, size/2, size)
    const mat = new THREE.MeshLambertMaterial({ 
        color: 0x2a3e4e, 
        transparent: true, 
        opacity: 0.15 
    })
    const cloud = new THREE.Mesh(geo, mat)
    cloud.position.set(x, size/4, z)
    scene.add(cloud)
  }
}
