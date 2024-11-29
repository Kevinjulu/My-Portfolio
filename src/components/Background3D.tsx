import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';

const AnimatedSphere = () => {
  const sphereRef = useRef<any>();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.rotation.x = time * 0.2;
      sphereRef.current.rotation.y = time * 0.3;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <Sphere ref={sphereRef} args={[1.5, 64, 64]} scale={2}>
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.6}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          opacity={0.8}
          transparent
        />
      </Sphere>
    </Float>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default Background3D;