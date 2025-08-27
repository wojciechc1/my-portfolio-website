import { useState, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

function CeilingWithHole() {
  const size = 60;   // rozmiar całego sufitu
  const hole = 13;   // rozmiar dziury
  const y = 11;       // wysokość sufitu
  const thickness = 2; // grubość sufitu
  const barThickness = 0.2; // grubość prętów kratki
  const numBars = 5;        // liczba prętów w każdą stronę

  const extrudeSettings = useMemo(() => ({
    depth: thickness,
    bevelEnabled: false,
  }), []);

  const shape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(-size / 2, -size / 2);
    s.lineTo(size / 2, -size / 2);
    s.lineTo(size / 2, size / 2);
    s.lineTo(-size / 2, size / 2);
    s.lineTo(-size / 2, -size / 2);

    const holePath = new THREE.Path();
    holePath.moveTo(-hole / 2, -hole / 2);
    holePath.lineTo(hole / 2, -hole / 2);
    holePath.lineTo(hole / 2, hole / 2);
    holePath.lineTo(-hole / 2, hole / 2);
    holePath.lineTo(-hole / 2, -hole / 2);
    s.holes.push(holePath);

    return s;
  }, [size, hole]);

  // kratka
  const bars = useMemo(() => {
    const barMeshes = [];
    const step = hole / (numBars - 1);
    for (let i = 0; i < numBars; i++) {
      const pos = -hole/2 + i*step;
      // pionowe wzdłuż Z
      barMeshes.push(
        <mesh key={`x${i}`} position={[pos, y+1, 0]} castShadow receiveShadow>
          <boxGeometry args={[barThickness, thickness, hole]} />
          <meshStandardMaterial color="gray" />
        </mesh>
      );
      // poziome wzdłuż X
      barMeshes.push(
        <mesh key={`z${i}`} position={[0, y+1, pos]} castShadow receiveShadow>
          <boxGeometry args={[hole, thickness, barThickness]} />
          <meshStandardMaterial color="gray" />
        </mesh>
      );
    }
    return barMeshes;
  }, [hole, numBars, thickness, y]);

  return (
    <>
      {/* sufit */}
      <mesh position={[0, y, 0]} rotation={[-Math.PI / 2, 0, 0]} castShadow>
        <extrudeGeometry args={[shape, extrudeSettings]} />
        <meshStandardMaterial color="#cccccc" side={THREE.DoubleSide} />
      </mesh>

      {/* kratka */}
      {bars}

        {/* szerokie światło LED w kratce */}
  <rectAreaLight
    position={[0, y + 2, 0]}   // trochę nad kratką
    rotation={[-Math.PI / 2, 0, 0]} // świeci w dół
    width={hole * 0.9}
    height={hole * 0.9}
    intensity={1} // moc świecenia
    color={"white"}
  />
    </>
  );
}

function Pillars() {
  const height = 11; // wys. od -2 do +2 (czyli 4 jednostki)

  const positions: [number, number, number][] = [
    [14, 5.5, 14],   // x=4, z=4
    [-14, 5.5, 14],  // x=-4, z=4
    [14, 5.5, -14],  // x=4, z=-4
    [-14, 5.5, -14], // x=-4, z=-4
  ];

  return (
    <>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos} castShadow receiveShadow>
          {/* box szerokość=1, głębokość=1, wysokość=4 */}
          <boxGeometry args={[4, height, 4]} />
          <meshStandardMaterial color="white"/>
        </mesh>
      ))}
    </>
  );
}


import {useThree } from "@react-three/fiber";

function Scene({ goToObject, onReachTarget, is2DActive}: { goToObject: boolean, onReachTarget: () => void, is2DActive: boolean}) {
  const camera = useThree((state) => state.camera);
  const target = new THREE.Vector3(0, 4, 0); // pozycja monitora
  const speed = 1.5;

  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

   useFrame((_state, delta) => {
    if (goToObject && !is2DActive) {
      camera.position.lerp(target, delta * speed);
      camera.lookAt(target);

      if (camera.position.distanceTo(target) < 2) {
        onReachTarget();
      }
    }
  });
  return (
    <>
      <perspectiveCamera ref={cameraRef} position={[0, 2, 8]} />
      {/* Twoja scena 3D tutaj */}
        <spotLight
          position={[0, 25, 0]}   // gdzie stoi reflektor
          angle={2.}             // szerokość stożka
          penumbra={.8}          // miękkość krawędzi
          intensity={80}           // moc światła
          castShadow
          target-position={[0, 0, 0]} // gdzie świeci (środek sceny)
          color="white" 
        />

<pointLight
  position={[0, 9, 0]}   // punkt w scenie, skąd świeci światło
  intensity={0}           // moc światła
  distance={50}           // maksymalny zasięg światła
  decay={2}               // jak szybko światło gaśnie z odległością
  color="white"           // kolor światła
  castShadow              // jeśli chcesz, żeby rzucało cienie
/>
  
     <mesh
  rotation={[-Math.PI / 2, 0, 0]}
  position={[0, 0, 0]}
  receiveShadow
>
  <planeGeometry args={[60, 60]} />
  <meshPhysicalMaterial
    color="#ffffff"        // kolor podłogi
    metalness={0.1}        // odrobina metaliczności
    roughness={0.05}       // im mniejsze, tym bardziej lśni
    clearcoat={1}          // dodatkowa warstwa "lakieru"
    clearcoatRoughness={0} // idealnie gładki lakier
    reflectivity={1}       // maksymalna refleksyjność
  />
</mesh>


  

      <mesh position={[0, 4, 0]}>
        <boxGeometry args={[2, 2, 0.05]} />
        <meshPhysicalMaterial
          color="lightblue"
          transparent
          opacity={0.2}
          metalness={0.1}
          roughness={0}
          clearcoat={1}
          clearcoatRoughness={0.1}
          emissive={new THREE.Color("lightblue")} // kolor świecenia
          emissiveIntensity={0.5}                 // moc świecenia (0-1 lub więcej)
        />
      </mesh>

      <Pillars />
      <CeilingWithHole />


      <OrbitControls
        target={[0, 2, 0]} 
        enablePan={false}
        minDistance={0}
        maxDistance={19}
        minPolarAngle={1.14}          // lekko nad podłogą
        maxPolarAngle={(Math.PI / 2)+0.09}  // lekko poniżej sufitu
      />

    
    </>
  );
}


import StaticPage from "./2-d.tsx"; // <- plik w src/components/StaticPage.tsx

export default function App() {
  const [goToObject, setGoToObject] = useState(false);
  const [show2D, setShow2D] = useState(false);


  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <Canvas shadows style={{ width: "100%", height: "100%", background: "#000000", }}>
        
         <Scene
          goToObject={goToObject && !show2D} 
          onReachTarget={() => setShow2D(true)}
          is2DActive={show2D} 
        />
      </Canvas>

       <button
      onClick={() => {
        if (show2D) {
          setGoToObject(false);
          setShow2D(false); // wracamy z 2D
          
        } else {
          setGoToObject(true); // wchodzimy do 2D
        
        }
      }}
      style={{ position: "absolute", top: 20, left: 20, zIndex: 1000 }}
    >
      {show2D ? "Wróć" : "Przejdź do strony"}
    </button>

     
      {show2D && (
        
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "white",
            zIndex: 20,
          }}
        >
          
    <StaticPage onClose={() => setShow2D(false)} />
  
 
        </div>
      )}
    </div>
  );
}
