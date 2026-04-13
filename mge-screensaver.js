import * as THREE from 'three';

(function() {
    let container, scene, camera, renderer, crystalGroup, particles, grid;
    let mouse = new THREE.Vector2(0, 0);
    let targetCameraPos = new THREE.Vector3(0, 20, 80);

    // Color Palette: Apple Music / Premium Retro
    const colors = [
        0xff0080, // Pink
        0x7928ca, // Purple
        0x0070f3, // Blue
        0x34d399, // Green
        0xf59e0b  // Gold
    ];

    function init() {
        container = document.createElement('div');
        container.className = 'mge-background-canvas';
        document.body.prepend(container);

        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x020617, 0.012);

        camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 20, 100);

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        // --- LIGHTING ---
        const ambientLight = new THREE.AmbientLight(0x404040, 2);
        scene.add(ambientLight);

        // Moving main lights for "fluid" feel
        const light1 = new THREE.PointLight(colors[0], 2, 200);
        const light2 = new THREE.PointLight(colors[2], 2, 200);
        scene.add(light1, light2);
        
        // --- SPATIAL GRID (Heartbeat Pulse) ---
        grid = new THREE.GridHelper(500, 50, 0x4ecdc4, 0x1e293b);
        grid.position.y = -40;
        grid.material.transparent = true;
        grid.material.opacity = 0.15;
        scene.add(grid);

        // Axes (Retro Lab theme)
        const axes = new THREE.AxesHelper(15);
        axes.position.y = -39.9;
        scene.add(axes);

        // --- FLYING SHAPES (Old PC Screensaver + Visionary feel) ---
        crystalGroup = new THREE.Group();
        scene.add(crystalGroup);

        const geometries = [
            new THREE.IcosahedronGeometry(4, 0),
            new THREE.TorusGeometry(3, 1, 16, 32),
            new THREE.BoxGeometry(5, 5, 5),
            new THREE.OctahedronGeometry(4, 0)
        ];

        for (let i = 0; i < 50; i++) {
            const geo = geometries[Math.floor(Math.random() * geometries.length)];
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            // Premium Material (Apple Music Style Glow)
            const material = new THREE.MeshPhongMaterial({
                color: color,
                emissive: color,
                emissiveIntensity: 0.5,
                shininess: 100,
                transparent: true,
                opacity: 0.8
            });

            // Wireframe Overlay (Retro Lab feel)
            const wireframe = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({
                color: 0xffffff,
                wireframe: true,
                transparent: true,
                opacity: 0.1
            }));

            const mesh = new THREE.Mesh(geo, material);
            mesh.add(wireframe);

            // Start far away for "Flying Shapes" effect
            resetObject(mesh);
            mesh.position.z = Math.random() * -500; // Random depth initialization
            
            mesh.userData = {
                speed: 0.5 + Math.random() * 1.5,
                rotSpeed: (Math.random() - 0.5) * 0.02,
                originalOpacity: 0.8
            };

            crystalGroup.add(mesh);
        }

        // --- PARTICLE FIELD (Starfield PC Screensaver) ---
        const pGeo = new THREE.BufferGeometry();
        const pPos = [];
        const pColors = [];
        for (let i = 0; i < 1000; i++) {
            pPos.push((Math.random() - 0.5) * 400, (Math.random() - 0.5) * 400, (Math.random() - 0.5) * 600);
            const c = new THREE.Color(colors[Math.floor(Math.random() * colors.length)]);
            pColors.push(c.r, c.g, c.b);
        }
        pGeo.setAttribute('position', new THREE.Float32BufferAttribute(pPos, 3));
        pGeo.setAttribute('color', new THREE.Float32BufferAttribute(pColors, 3));
        
        particles = new THREE.Points(pGeo, new THREE.PointsMaterial({
            size: 1.5,
            vertexColors: true,
            transparent: true,
            opacity: 0.4,
            sizeAttenuation: true
        }));
        scene.add(particles);

        // --- COORDINATE SCANNER ---
        const scannerGeo = new THREE.RingGeometry(2, 2.5, 32);
        const scannerMat = new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.5, side: THREE.DoubleSide });
        const scanner = new THREE.Mesh(scannerGeo, scannerMat);
        scanner.rotation.x = -Math.PI / 2;
        scanner.position.y = -39.8;
        scene.add(scanner);

        window.addEventListener('resize', onWindowResize);
        window.addEventListener('mousemove', onMouseMove);

        function resetObject(obj) {
            obj.position.x = (Math.random() - 0.5) * 150;
            obj.position.y = (Math.random() - 0.5) * 100;
            obj.position.z = -600; // Reset far in distance
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        function onMouseMove(e) {
            mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        }

        const raycaster = new THREE.Raycaster();
        const gridPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 39.8);
        const intersect = new THREE.Vector3();

        function animate() {
            requestAnimationFrame(animate);
            const time = Date.now() * 0.001;

            // Fluid Camera (Apple Music feel)
            targetCameraPos.x = mouse.x * 20;
            targetCameraPos.y = 20 + (-mouse.y * 15);
            camera.position.lerp(targetCameraPos, 0.03);
            camera.lookAt(0, 5, -50);

            // Light Animation (Colors morphing through space)
            light1.position.set(Math.sin(time) * 100, Math.cos(time * 0.5) * 50, -100);
            light2.position.set(Math.cos(time * 0.7) * 100, Math.sin(time) * 50, -150);

            // Flying Geometric Shapes (Old PC Speed)
            crystalGroup.children.forEach(obj => {
                obj.position.z += obj.userData.speed;
                obj.rotation.x += obj.userData.rotSpeed;
                obj.rotation.y += obj.userData.rotSpeed;
                
                // Opacity based on distance (fading in and out)
                const fadeDist = 200;
                if (obj.position.z > 50) {
                    resetObject(obj);
                }
                
                // Fade in from distance
                obj.material.opacity = THREE.MathUtils.smoothstep(obj.position.z, -600, -400) * 0.8;
            });

            // Rotating Starfield (Drifting Particles)
            particles.rotation.z += 0.001;
            particles.position.z += 0.2;
            if (particles.position.z > 200) particles.position.z = 0;

            // Pulse the Grid (Music Beat simulation)
            const pulse = 0.1 + Math.abs(Math.sin(time * 2)) * 0.1;
            grid.material.opacity = pulse;

            // Move scanner to mouse spatial cross-section
            raycaster.setFromCamera(mouse, camera);
            raycaster.ray.intersectPlane(gridPlane, intersect);
            scanner.position.x = intersect.x;
            scanner.position.z = intersect.z;
            scanner.scale.setScalar(1 + Math.sin(time * 5) * 0.2); // Pulsing scanner

            renderer.render(scene, camera);
        }

        animate();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
