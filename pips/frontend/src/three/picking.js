import * as THREE from 'three'

const raycaster = new THREE.Raycaster()
const pointer = new THREE.Vector2()

export function pickPip(event, camera, pipMeshMap, renderer, isLocked) {
  if (isLocked) {
    // Pointer locked: shoot ray from screen center
    pointer.set(0, 0)
  } else {
    // Use mouse position
    const rect = renderer.domElement.getBoundingClientRect()
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
  }

  raycaster.setFromCamera(pointer, camera)

  // Collect all meshes from pip groups
  const targets = []
  for (const [id, group] of pipMeshMap) {
    group.traverse((child) => {
      if (child.isMesh) {
        child.userData._pipId = id
        targets.push(child)
      }
    })
  }

  const intersects = raycaster.intersectObjects(targets, false)

  if (intersects.length > 0) {
    return intersects[0].object.userData._pipId
  }

  return null
}
