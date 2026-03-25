import * as THREE from 'three';

(function() {
    let container, scene, camera, renderer, crystalGroup, grid;
    let targetRotationX = 0, targetRotationY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    const mouse = new THREE.Vector2();

    function init() {
        container = document.createElement('div');
        container.className = 'mge-background-canvas';
        document.body.prepend(container);

        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x0f172a, 0.015);

        camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 80;
        camera.position.y = 20;
        camera.lookAt(0, 0, 0);

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const pointLight1 = new THREE.PointLight(0x4ecdc4, 1, 300);
        pointLight1.position.set(50, 50, 50);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0xff6b6b, 1, 300);
        pointLight2.position.set(-50, -50, 50);
        scene.add(pointLight2);

        // Ground Grid
        grid = new THREE.GridHelper(400, 40, 0x4ecdc4, 0x1e293b);
        grid.position.y = -30;
        grid.material.opacity = 0.25;
        grid.material.transparent = true;
        scene.add(grid);

        // Coordinate Axes (Small)
        const axes = new THREE.AxesHelper(10);
        axes.position.y = -29.9;
        scene.add(axes);

        // Floating Crystals / Blueprints
        crystalGroup = new THREE.Group();
        scene.add(crystalGroup);

        const geometries = [
            new THREE.IcosahedronGeometry(5, 0),
            new THREE.BoxGeometry(6, 6, 6),
            new THREE.TorusGeometry(4, 1, 16, 32),
            new THREE.OctahedronGeometry(5, 0)
        ];

        const colors = [0x4ecdc4, 0xff6b6b, 0xffe66d, 0xa78bfa];

        for (let i = 0; i < 40; i++) {
            const geo = geometries[Math.floor(Math.random() * geometries.length)];
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            // Blueprint / Wireframe style
            const material = new THREE.MeshPhongMaterial({
                color: color,
                wireframe: true,
                transparent: true,
                opacity: 0.3
            });
            
            // Inner Glow Solid
            const innerGeo = geo.clone();
            const innerMat = new THREE.MeshBasicMaterial({
                color: color,
                transparent: true,
                opacity: 0.05
            });

            const mesh = new THREE.Mesh(geo, material);
            const innerMesh = new THREE.Mesh(innerGeo, innerMat);
            
            const group = new THREE.Group();
            group.add(mesh);
            group.add(innerMesh);

            group.position.set(
                (Math.random() - 0.5) * 200,
                (Math.random() - 0.5) * 100,
                (Math.random() - 0.5) * 150
            );
            
            group.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
            
            const scale = Math.random() * 0.5 + 0.5;
            group.scale.set(scale, scale, scale);
            
            // Custom data for animation
            group.userData = {
                rotationSpeed: (Math.random() - 0.5) * 0.01,
                floatSpeed: Math.random() * 0.005,
                floatOffset: Math.random() * Math.PI * 2
            };

            crystalGroup.add(group);
        }

        // Coordinate Axes Labels
        function createLabel(text, pos, color) {
            const canvas = document.createElement('canvas');
            canvas.width = 128; canvas.height = 32;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = color;
            ctx.font = 'bold 24px Arial';
            ctx.fillText(text, 10, 25);
            const tex = new THREE.CanvasTexture(canvas);
            const spriteMat = new THREE.SpriteMaterial({ map: tex, transparent: true });
            const sprite = new THREE.Sprite(spriteMat);
            sprite.position.copy(pos);
            sprite.scale.set(5, 1.25, 1);
            scene.add(sprite);
        }
        createLabel("X", new THREE.Vector3(12, -29, 0), "#ff0000");
        createLabel("Y", new THREE.Vector3(0, -18, 0), "#00ff00");
        createLabel("Z", new THREE.Vector3(0, -29, 12), "#0000ff");

        // Raycaster for highlighting
        const raycaster = new THREE.Raycaster();

        // Mouse Marker on grid
        const markerGeo = new THREE.RingGeometry(1, 1.2, 32);
        const markerMat = new THREE.MeshBasicMaterial({ color: 0x4ecdc4, transparent: true, opacity: 0.5 });
        const marker = new THREE.Mesh(markerGeo, markerMat);
        marker.rotation.x = -Math.PI / 2;
        marker.position.y = -29.8;
        scene.add(marker);

        window.addEventListener('resize', onWindowResize, false);
        window.addEventListener('mousemove', onMouseMove, false);
        
        animate();
    }

    function onWindowResize() {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function onMouseMove(event) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    function animate() {
        requestAnimationFrame(animate);

        // Raycast to grid for marker
        raycaster.setFromCamera(mouse, camera);
        const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 29.8);
        const intersectPos = new THREE.Vector3();
        raycaster.ray.intersectPlane(plane, intersectPos);
        marker.position.x = intersectPos.x;
        marker.position.z = intersectPos.z;

        // Highlight floating shapes
        const intersects = raycaster.intersectObjects(crystalGroup.children, true);
        crystalGroup.children.forEach(obj => {
            if (obj.children.length > 0) {
                obj.children[0].material.opacity = 0.3; // Reset
                obj.scale.lerp(new THREE.Vector3(1, 1, 1).multiplyScalar(obj.userData.baseScale || 1), 0.1);
            }
        });

        if (intersects.length > 0) {
            const hitGroup = intersects[0].object.parent;
            if (hitGroup && hitGroup.children.length > 0) {
                if (!hitGroup.userData.baseScale) hitGroup.userData.baseScale = hitGroup.scale.x;
                hitGroup.children[0].material.opacity = 0.8;
                hitGroup.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2).multiplyScalar(hitGroup.userData.baseScale), 0.2);
            }
        }

        // Camera Parallax
        camera.position.x += (mouse.x * 30 - camera.position.x) * 0.02;
        camera.position.y += (-mouse.y * 20 + 20 - camera.position.y) * 0.02;
        camera.lookAt(0, 0, 0);

        // Animate Crystals
        const time = Date.now() * 0.001;
        crystalGroup.children.forEach(obj => {
            obj.rotation.x += obj.userData.rotationSpeed;
            obj.rotation.y += obj.userData.rotationSpeed;
            obj.position.y += Math.sin(time + obj.userData.floatOffset) * 0.05;
        });

        // Drift Grid floor
        grid.position.z = (grid.position.z + 0.1) % 10;

        renderer.render(scene, camera);
    }

    // Delay start until DOM is fully ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
