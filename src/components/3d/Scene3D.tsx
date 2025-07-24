import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import FloatingGeometry from './FloatingGeometry';

interface Scene3DProps {
  className?: string;
  enableControls?: boolean;
  intensity?: number;
}

export default function Scene3D({ 
  className = "w-full h-full", 
  enableControls = false,
  intensity = 0.5 
}: Scene3DProps) {
  return (
    <Canvas
      className={className}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <Environment preset="city" />
        <ambientLight intensity={intensity} />
        <directionalLight position={[10, 10, 5]} intensity={intensity * 2} />
        
        <Float
          speed={1}
          rotationIntensity={1}
          floatIntensity={0.5}
        >
          <FloatingGeometry />
        </Float>
        
        {enableControls && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        )}
      </Suspense>
    </Canvas>
  );
}