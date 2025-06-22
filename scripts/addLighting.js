export function addLighting(scene) {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Directional light (sun-like)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight);
    
    // Helper to visualize the light (optional)
    // const helper = new THREE.DirectionalLightHelper(directionalLight, 1);
    // scene.add(helper);
    
    // Hemisphere light for more natural lighting
    const hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 0.3);
    scene.add(hemisphereLight);
}