import { OrbitControls, Plane, Sphere } from "@react-three/drei";

import { useFrame } from "@react-three/fiber";
import React, { useEffect } from "react";
import * as THREE from "three";
import "./App.css";
import seaFragmentShader from "./shaders/sea/fragment.glsl";
import sphereFragmentShader from "./shaders/sphere/fragment.glsl";
import vertexShader from "./shaders/vertex.glsl";

function App() {
  const mesh: React.MutableRefObject<
    | THREE.Mesh<
        THREE.BufferGeometry<THREE.NormalBufferAttributes>,
        THREE.Material | THREE.Material[],
        THREE.Object3DEventMap
      >
    | undefined
  > = React.useRef<THREE.Mesh>(null!);

  const seaMaterial = new THREE.ShaderMaterial({
    fragmentShader: seaFragmentShader,
    vertexShader,
    uniforms: {
      time: { value: 1.0 }, // replace 1.0 with your actual time value
    },
    wireframe: false,
  });

  const sphereMaterial = new THREE.ShaderMaterial({
    fragmentShader: sphereFragmentShader,
    vertexShader,
    uniforms: {
      time: { value: 1.0 }, // replace 1.0 with your actual time value
    },
    wireframe: false,
  });

  let time = 0;

  useFrame((): void => {
    time += 0.1;
    seaMaterial.uniforms.time.value = time;
    sphereMaterial.uniforms.time.value = time;
  });

  return (
    <>
      <OrbitControls />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <ambientLight intensity={Math.PI / 2} />

      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />

      <Sphere
        ref={mesh}
        args={[1, 32, 32]}
        position={[0, 0, 0]}
        material={sphereMaterial}
      ></Sphere>

      <Plane
        ref={mesh}
        args={[100, 100, 100, 100]}
        position={[0, -1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        material={seaMaterial}
      />
    </>
  );
}

export default App;
