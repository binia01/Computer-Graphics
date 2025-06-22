export function setupCameraAnimation(app) {
    let angle = 0;
    const radius = 5;
    const height = 2;
    
    app.controls.autoRotate = true;
    app.controls.autoRotateSpeed = app.rotationSpeed;
    
    // Animation loop for camera
    function animateCamera() {
        requestAnimationFrame(animateCamera);
        
        if (app.autoRotate) {
            angle += 0.052 * app.rotationSpeed;
            app.camera.position.x = radius * Math.sin(angle);
            app.camera.position.z = radius * Math.cos(angle);
            app.camera.position.y = height;
            app.camera.lookAt(0, 0, 0);
        }
        
        app.controls.update();
    }
    
    animateCamera();
}