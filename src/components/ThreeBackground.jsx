import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef();

  const positions = useMemo(() => {
    const count = 2500;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#08DDFF"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
        opacity={0.5}
      />
    </Points>
  );
}

function FloatingRings() {
  const ring1 = useRef();
  const ring2 = useRef();
  const ring3 = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1.current) {
      ring1.current.rotation.x = t * 0.1;
      ring1.current.rotation.y = t * 0.07;
    }
    if (ring2.current) {
      ring2.current.rotation.x = -t * 0.08;
      ring2.current.rotation.z = t * 0.05;
    }
    if (ring3.current) {
      ring3.current.rotation.y = t * 0.06;
      ring3.current.rotation.z = -t * 0.04;
    }
  });

  return (
    <>
      <mesh ref={ring1} position={[3, 1, -2]}>
        <torusGeometry args={[1.5, 0.008, 16, 100]} />
        <meshBasicMaterial color="#08DDFF" transparent opacity={0.15} />
      </mesh>
      <mesh ref={ring2} position={[-3, -1, -3]}>
        <torusGeometry args={[2, 0.006, 16, 100]} />
        <meshBasicMaterial color="#08DDFF" transparent opacity={0.1} />
      </mesh>
      <mesh ref={ring3} position={[0, 2, -4]}>
        <torusGeometry args={[2.5, 0.005, 16, 100]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.05} />
      </mesh>
    </>
  );
}

function GridPlane() {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = -2 + Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={ref}>
      <gridHelper args={[30, 30, '#08DDFF', '#08DDFF']} position={[0, -2, 0]} rotation={[0, 0, 0]}>
        <meshBasicMaterial transparent opacity={0.05} />
      </gridHelper>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <ParticleField />
        <FloatingRings />
        <GridPlane />
      </Canvas>
    </div>
  );
}
