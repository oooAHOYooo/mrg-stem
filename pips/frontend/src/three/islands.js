import * as THREE from 'three'

/**
 * Creates a low-poly island mesh based on the Glade theme.
 * Returns a Group containing the terrain and any static flora.
 */
export function createIslandMesh(glade) {
    const group = new THREE.Group()
    const radius = 18 // Base size
    const color = new THREE.Color(glade.color)

    // Terrain - procedural landmass
    const geo = new THREE.CylinderGeometry(radius, radius * 1.2, 3, 12)
    const mat = new THREE.MeshLambertMaterial({ 
        color: color.clone().multiplyScalar(0.8),
        flatShading: true 
    })
    
    // Deform terrain slightly for "low poly" organic look
    const pos = geo.attributes.position
    for (let i = 0; i < pos.count; i++) {
        const y = pos.getY(i)
        if (y > 0) { // Only top vertices
            pos.setY(i, y + Math.random() * 1.5)
        }
    }
    pos.needsUpdate = true
    geo.computeVertexNormals()

    const island = new THREE.Mesh(geo, mat)
    island.position.y = 1.0 // Sit slightly in/above water
    group.add(island)

    // Add sand/beach ring
    const sandGeo = new THREE.CylinderGeometry(radius + 1.5, radius + 2, 0.5, 12)
    const sandMat = new THREE.MeshLambertMaterial({ color: 0xedc9af })
    const sand = new THREE.Mesh(sandGeo, sandMat)
    sand.position.y = 0.25
    group.add(sand)

    // Themed Elements
    addThemeFlora(group, glade.theme, radius)

    // Dock / Pier
    addDock(group, radius)

    group.position.set(glade.center.x, 0, glade.center.z)
    group.userData.isIsland = true
    group.userData.gladeId = glade.id
    return group
}

function addThemeFlora(group, theme, radius) {
    const count = 8 + Math.floor(Math.random() * 8)
    for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2
        const dist = Math.random() * (radius - 4)
        const x = Math.cos(angle) * dist
        const z = Math.sin(angle) * dist

        if (theme === 'Lava Land') {
            const rockGeo = new THREE.DodecahedronGeometry(0.8 + Math.random())
            const rockMat = new THREE.MeshLambertMaterial({ color: 0x333333, emissive: 0x440000 })
            const rock = new THREE.Mesh(rockGeo, rockMat)
            rock.position.set(x, 2, z)
            group.add(rock)
        } else if (theme === 'Flower Land' || theme === 'Meadow Land') {
            const bushGeo = new THREE.BoxGeometry(1, 1, 1)
            const bushMat = new THREE.MeshLambertMaterial({ color: 0x228b22 })
            const bush = new THREE.Mesh(bushGeo, bushMat)
            bush.position.set(x, 2.5, z)
            group.add(bush)
        }
    }
}

function addDock(group, islandRadius) {
    const dockGroup = new THREE.Group()
    const plankGeo = new THREE.BoxGeometry(4, 0.2, 1.5)
    const plankMat = new THREE.MeshLambertMaterial({ color: 0x5a3a2a })
    
    for (let i = 0; i < 4; i++) {
        const plank = new THREE.Mesh(plankGeo, plankMat)
        plank.position.set(0, 0.5, i * 1.6)
        dockGroup.add(plank)
    }

    // Dock posts
    const postGeo = new THREE.BoxGeometry(0.3, 2, 0.3)
    const post = new THREE.Mesh(postGeo, plankMat)
    post.position.set(-1.8, 1, 0)
    dockGroup.add(post)
    const post2 = post.clone()
    post2.position.set(1.8, 1, 0)
    dockGroup.add(post2)

    dockGroup.position.set(0, 0, islandRadius + 2)
    group.add(dockGroup)
}
