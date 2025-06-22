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


// export function createRobot() {
//     // Create a group to hold all robot parts
//     const robot = new THREE.Group();
//     robot.name = "Robot Toy";
    
//     // Materials
//     const metalMaterial = new THREE.MeshStandardMaterial({
//         color: 0xcccccc,
//         roughness: 0.3,
//         metalness: 0.8
//     });
    
//     const plasticMaterial = new THREE.MeshStandardMaterial({
//         color: 0xff5555,
//         roughness: 0.5,
//         metalness: 0.2
//     });
    
//     const glassMaterial = new THREE.MeshStandardMaterial({
//         color: 0x66ccff,
//         roughness: 0.1,
//         metalness: 0.3,
//         transparent: true,
//         opacity: 0.8
//     });
    
//     const detailMaterial = new THREE.MeshStandardMaterial({
//         color: 0x333333,
//         roughness: 0.7,
//         metalness: 0.1
//     });

//     // Main body (torso)
//     const bodyGeometry = new THREE.CylinderGeometry(0.8, 0.6, 1.2, 6);
//     const body = new THREE.Mesh(bodyGeometry, plasticMaterial);
//     body.position.y = 0.6;
//     body.castShadow = true;
//     body.receiveShadow = true;
//     body.name = "Body";
//     robot.add(body);
    
//     // Head
//     const headGeometry = new THREE.SphereGeometry(0.6, 32, 32);
//     const head = new THREE.Mesh(headGeometry, plasticMaterial);
//     head.position.y = 1.8;
//     head.castShadow = true;
//     head.name = "Head";
//     robot.add(head);
    
//     // Eyes
//     const eyeGeometry = new THREE.SphereGeometry(0.15, 16, 16);
//     const leftEye = new THREE.Mesh(eyeGeometry, glassMaterial);
//     leftEye.position.set(-0.2, 1.8, 0.5);
//     leftEye.name = "Left Eye";
//     robot.add(leftEye);
    
//     const rightEye = new THREE.Mesh(eyeGeometry, glassMaterial);
//     rightEye.position.set(0.2, 1.8, 0.5);
//     rightEye.name = "Right Eye";
//     robot.add(rightEye);
    
//     // Antenna
//     const antennaBaseGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.3, 16);
//     const antennaBase = new THREE.Mesh(antennaBaseGeometry, metalMaterial);
//     antennaBase.position.set(0, 2.4, 0);
//     antennaBase.name = "Antenna Base";
//     robot.add(antennaBase);
    
//     const antennaBallGeometry = new THREE.SphereGeometry(0.1, 16, 16);
//     const antennaBall = new THREE.Mesh(antennaBallGeometry, glassMaterial);
//     antennaBall.position.set(0, 2.7, 0);
//     antennaBall.name = "Antenna Ball";
//     robot.add(antennaBall);
    
//     // Arms
//     const armGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1.0, 16);
//     const leftArm = new THREE.Mesh(armGeometry, metalMaterial);
//     leftArm.position.set(-0.9, 1.2, 0);
//     leftArm.rotation.z = Math.PI / 4;
//     leftArm.name = "Left Arm";
//     robot.add(leftArm);
    
//     const rightArm = new THREE.Mesh(armGeometry, metalMaterial);
//     rightArm.position.set(0.9, 1.2, 0);
//     rightArm.rotation.z = -Math.PI / 4;
//     rightArm.name = "Right Arm";
//     robot.add(rightArm);
    
//     // Hands
//     const handGeometry = new THREE.SphereGeometry(0.15, 16, 16);
//     const leftHand = new THREE.Mesh(handGeometry, metalMaterial);
//     leftHand.position.set(-1.3, 0.9, 0);
//     leftHand.name = "Left Hand";
//     robot.add(leftHand);
    
//     const rightHand = new THREE.Mesh(handGeometry, metalMaterial);
//     rightHand.position.set(1.3, 0.9, 0);
//     rightHand.name = "Right Hand";
//     robot.add(rightHand);
    
//     // Legs
//     const legGeometry = new THREE.CylinderGeometry(0.15, 0.15, 0.8, 16);
//     const leftLeg = new THREE.Mesh(legGeometry, metalMaterial);
//     leftLeg.position.set(-0.3, -0.4, 0);
//     leftLeg.name = "Left Leg";
//     robot.add(leftLeg);
    
//     const rightLeg = new THREE.Mesh(legGeometry, metalMaterial);
//     rightLeg.position.set(0.3, -0.4, 0);
//     rightLeg.name = "Right Leg";
//     robot.add(rightLeg);
    
//     // Feet
//     const footGeometry = new THREE.BoxGeometry(0.4, 0.1, 0.6);
//     const leftFoot = new THREE.Mesh(footGeometry, detailMaterial);
//     leftFoot.position.set(-0.3, -0.85, 0);
//     leftFoot.name = "Left Foot";
//     robot.add(leftFoot);
    
//     const rightFoot = new THREE.Mesh(footGeometry, detailMaterial);
//     rightFoot.position.set(0.3, -0.85, 0);
//     rightFoot.name = "Right Foot";
//     robot.add(rightFoot);
    
//     // Buttons on body
//     const buttonGeometry = new THREE.CylinderGeometry(0.08, 0.08, 0.05, 16);
//     for (let i = 0; i < 3; i++) {
//         const button = new THREE.Mesh(buttonGeometry, detailMaterial);
//         button.position.set(0, 0.7 - i * 0.2, 0.6);
//         button.name = `Button ${i + 1}`;
//         robot.add(button);
//     }
    
//     // Mouth
//     const mouthGeometry = new THREE.BoxGeometry(0.4, 0.05, 0.1);
//     const mouth = new THREE.Mesh(mouthGeometry, detailMaterial);
//     mouth.position.set(0, 1.6, 0.5);
//     mouth.name = "Mouth";
//     robot.add(mouth);
    
//     return robot;
// }