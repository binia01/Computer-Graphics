import { initScene } from './initScene.js';
import { createChair } from './createProduct.js';
import { addLighting } from './addLighting.js';
import { setupInteractions } from './interaction.js';
import { setupCameraAnimation } from './cameraAnimation.js';

// Main application
const app = {
    scene: null,
    camera: null,
    renderer: null,
    controls: null,
    chair: null,
    autoRotate: true,
    rotationSpeed: 0.5
};

async function init() {
    // Initialize the scene
    const { scene, camera, renderer, controls } = initScene();
    app.scene = scene;
    app.camera = camera;
    app.renderer = renderer;
    app.controls = controls;
    
    // Create the product (chair)
    const chair = createChair();
    app.chair = chair;
    scene.add(chair);
    
    // Add lighting
    addLighting(scene);
    
    // Setup interactions
    setupInteractions(app);
    
    // Setup camera animation
    setupCameraAnimation(app);
    
    // Start animation loop
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    app.renderer.render(app.scene, app.camera);
}

init();


// import { initScene } from './initScene.js';
// import { createRobot } from './createProduct.js';
// import { addLighting } from './addLighting.js';
// import { setupInteractions } from './interaction.js';
// import { setupCameraAnimation } from './cameraAnimation.js';

// // Main application
// const app = {
//     scene: null,
//     camera: null,
//     renderer: null,
//     controls: null,
//     product: null,  // Changed from 'chair' to 'product'
//     autoRotate: true,
//     rotationSpeed: 0.5
// };

// async function init() {
//     // Initialize the scene
//     const { scene, camera, renderer, controls } = initScene();
//     app.scene = scene;
//     app.camera = camera;
//     app.renderer = renderer;
//     app.controls = controls;
    
//     // Create the product (robot)
//     const robot = createRobot();
//     app.product = robot;  // Changed to generic 'product'
//     scene.add(robot);
    
//     // Add lighting
//     addLighting(scene);
    
//     // Setup interactions
//     setupInteractions(app);
    
//     // Setup camera animation
//     setupCameraAnimation(app);
    
//     // Start animation loop
//     animate();
// }

// function animate() {
//     requestAnimationFrame(animate);
//     app.renderer.render(app.scene, app.camera);
// }

// init();