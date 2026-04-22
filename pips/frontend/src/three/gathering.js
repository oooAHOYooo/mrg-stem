import { ref } from 'vue'
import { COUNCIL_POSITION } from './terrain.js'

export const isGathering = ref(false)

const originalPositions = new Map()
const targetPositions = new Map()
let returning = false

export function startGathering(pips, meshMap) {
  isGathering.value = true
  returning = false
  originalPositions.clear()
  targetPositions.clear()

  const count = pips.length
  if (count === 0) return

  const radius = 4

  pips.forEach((pip, i) => {
    const group = meshMap.get(pip.id)
    if (!group) return

    // Store original position
    originalPositions.set(pip.id, {
      x: group.userData.baseX,
      y: group.userData.baseY,
      z: group.userData.baseZ,
    })

    // Compute circle position around council stone
    const angle = (i / count) * Math.PI * 2
    targetPositions.set(pip.id, {
      x: COUNCIL_POSITION.x + Math.cos(angle) * radius,
      y: group.userData.baseY,
      z: COUNCIL_POSITION.z + Math.sin(angle) * radius,
    })
  })
}

export function updateGathering(delta, meshMap) {
  if (!isGathering.value) return

  const targets = returning ? originalPositions : targetPositions
  const lerpSpeed = 2.0 * delta
  let allArrived = true

  for (const [id, target] of targets) {
    const group = meshMap.get(id)
    if (!group) continue

    group.userData.baseX += (target.x - group.userData.baseX) * lerpSpeed
    group.userData.baseZ += (target.z - group.userData.baseZ) * lerpSpeed

    group.position.x = group.userData.baseX
    group.position.z = group.userData.baseZ

    const dx = target.x - group.userData.baseX
    const dz = target.z - group.userData.baseZ
    if (Math.abs(dx) > 0.05 || Math.abs(dz) > 0.05) {
      allArrived = false
    }

    // Make pips face the council stone when gathered (not returning)
    if (!returning) {
      const lookAngle = Math.atan2(
        COUNCIL_POSITION.z - group.position.z,
        COUNCIL_POSITION.x - group.position.x
      )
      group.rotation.y = lookAngle - Math.PI / 2
    }
  }

  if (returning && allArrived) {
    isGathering.value = false
    returning = false
    originalPositions.clear()
    targetPositions.clear()
  }
}

export function endGathering() {
  if (!isGathering.value) return
  returning = true
}
