import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import * as THREE from 'three';

export default function FloatingGeometry() {
  const meshRef = useRef<Mesh>(null!);
  const torusRef = useRef<Mesh>(null!);
  const sphereRef = useRef<Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.cos(t / 4) / 2;
      meshRef.current.rotation.y = Math.sin(t / 4) / 2;
      meshRef.current.position.y = Math.sin(t) * 0.1;
    }
    
    if (torusRef.current) {
      torusRef.current.rotation.x = t / 2;
      torusRef.current.rotation.z = t / 3;
      torusRef.current.position.x = Math.cos(t) * 2;
      torusRef.current.position.z = Math.sin(t) * 2;
    }
    
    if (sphereRef.current) {
      sphereRef.current.rotation.y = t;
      sphereRef.current.position.x = Math.cos(t + Math.PI) * 1.5;
      sphereRef.current.position.z = Math.sin(t + Math.PI) * 1.5;
      sphereRef.current.position.y = Math.sin(t * 2) * 0.2;
    }
  });

  const gradientMaterial = new THREE.MeshStandardMaterial({
    color: '#8B5CF6',
    metalness: 0.7,
    roughness: 0.2,
    envMapIntensity: 0.5,
  });

  const secondaryMaterial = new THREE.MeshStandardMaterial({
    color: '#06B6D4',
    metalness: 0.8,
    roughness: 0.1,
    envMapIntensity: 0.7,
  });

  const accentMaterial = new THREE.MeshStandardMaterial({
    color: '#EAB308',
    metalness: 0.6,
    roughness: 0.3,
    envMapIntensity: 0.4,
  });

  return (
    <group>
      {/* Main Cube */}
      <mesh ref={meshRef} material={gradientMaterial}>
        <boxGeometry args={[1, 1, 1]} />
      </mesh>
      
      {/* Floating Torus */}
      <mesh ref={torusRef} material={secondaryMaterial} scale={0.5}>
        <torusGeometry args={[1, 0.4, 16, 32]} />
      </mesh>
      
      {/* Floating Sphere */}
      <mesh ref={sphereRef} material={accentMaterial} scale={0.3}>
        <sphereGeometry args={[1, 32, 32]} />
      </mesh>
    </group>
  );
}