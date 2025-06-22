export function setupInteractions(app) {
    const { scene, camera, renderer, chair } = app;
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const infoPanel = document.getElementById('info-panel');
    const partNameElement = document.getElementById('part-name');
    const closeButton = document.getElementById('close-info');
    
    // Store original materials for hover effect
    const originalMaterials = {};
    chair.traverse(child => {
        if (child.isMesh) {
            originalMaterials[child.uuid] = child.material.clone();
        }
    });
    
    // Mouse move event for hover effect
    renderer.domElement.addEventListener('mousemove', (event) => {
        // Calculate mouse position in normalized device coordinates
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        
        // Update the raycaster
        raycaster.setFromCamera(mouse, camera);
        
        // Find intersections
        const intersects = raycaster.intersectObject(chair, true);
        
        // Reset all materials to original
        chair.traverse(child => {
            if (child.isMesh && originalMaterials[child.uuid]) {
                child.material = originalMaterials[child.uuid];
                child.scale.set(1, 1, 1);
            }
        });
        
        // Highlight hovered object
        if (intersects.length > 0) {
            const object = intersects[0].object;
            if (object.isMesh) {
                // Scale up slightly
                object.scale.set(1.05, 1.05, 1.05);
                
                // Change color
                const hoverMaterial = object.material.clone();
                hoverMaterial.color.setHex(0xffff00);
                object.material = hoverMaterial;
            }
        }
    });
    
    // Click event for part selection
    renderer.domElement.addEventListener('click', (event) => {
        // Calculate mouse position
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        
        // Update the raycaster
        raycaster.setFromCamera(mouse, camera);
        
        // Find intersections
        const intersects = raycaster.intersectObject(chair, true);
        
        if (intersects.length > 0) {
            const object = intersects[0].object;
            if (object.isMesh) {
                // Show info panel
                partNameElement.textContent = object.name || "Part";
                infoPanel.classList.remove('hidden');
                
                // Pause auto-rotation when interacting
                app.autoRotate = false;
                
                // Animation - pulse effect
                const originalScale = object.scale.clone();
                object.scale.set(1.1, 1.1, 1.1);
                
                setTimeout(() => {
                    object.scale.copy(originalScale);
                }, 300);
            }
        }
    });
    
    // Close button event
    closeButton.addEventListener('click', () => {
        infoPanel.classList.add('hidden');
        app.autoRotate = true;
    });
    
    // Pause auto-rotation when user interacts with controls
    app.controls.addEventListener('start', () => {
        app.autoRotate = false;
    });
}

