"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function SignalObject() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ pointer }, delta) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      pointer.y * 0.28,
      4,
      delta,
    );
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      pointer.x * 0.42,
      4,
      delta,
    );
    group.current.rotation.z += delta * 0.08;
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[0.72, 1]} />
        <meshPhysicalMaterial
          color="#76e4ca"
          metalness={0.45}
          roughness={0.26}
          clearcoat={0.9}
        />
      </mesh>
      <mesh scale={1.16}>
        <icosahedronGeometry args={[0.72, 1]} />
        <meshBasicMaterial
          color="#a1b9ff"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.06, 0.008, 6, 72]} />
        <meshBasicMaterial color="#76e4ca" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3.5], fov: 40 }}
      dpr={[1, 1.25]}
      fallback={<div className="three-fallback" />}
      gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
    >
      <ambientLight intensity={0.75} />
      <pointLight color="#76e4ca" intensity={5} position={[2, 2, 3]} />
      <pointLight color="#a1b9ff" intensity={2} position={[-2, -1, 1]} />
      <SignalObject />
    </Canvas>
  );
}
