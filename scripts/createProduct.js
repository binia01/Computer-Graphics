export function createChair() {
    // Create a group to hold all chair parts
    const chair = new THREE.Group();
    chair.name = "Chair";
    
    // Materials
    const woodMaterial = new THREE.MeshStandardMaterial({
        color: 0x8B4513,
        roughness: 0.7,
        metalness: 0.1
    });
    
    const cushionMaterial = new THREE.MeshStandardMaterial({
        color: 0x4a6ea9,
        roughness: 0.5,
        metalness: 0.1
    });
    
    // Chair legs (4 legs)
    const legGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.8, 16);
    for (let i = 0; i < 4; i++) {
        const leg = new THREE.Mesh(legGeometry, woodMaterial);
        leg.castShadow = true;
        leg.name = `Leg ${i + 1}`;
        
        // Position legs in a square
        const x = i % 2 === 0 ? -0.5 : 0.5;
        const z = i < 2 ? -0.5 : 0.5;
        leg.position.set(x, -0.4, z);
        
        chair.add(leg);
    }
    
    // Seat
    const seatGeometry = new THREE.BoxGeometry(1.2, 0.1, 1.2);
    const seat = new THREE.Mesh(seatGeometry, cushionMaterial);
    seat.position.y = 0;
    seat.castShadow = true;
    seat.receiveShadow = true;
    seat.name = "Seat";
    chair.add(seat);
    
    // Backrest
    const backrestGeometry = new THREE.BoxGeometry(1.2, 1.0, 0.1);
    const backrest = new THREE.Mesh(backrestGeometry, cushionMaterial);
    backrest.position.set(0, 0.5, -0.6);
    backrest.castShadow = true;
    backrest.name = "Backrest";
    chair.add(backrest);
    

    
    return chair;
}


