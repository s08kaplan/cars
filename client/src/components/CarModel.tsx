"use client"
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const CarModel = ({lightsOn}:{lightsOn: boolean}) => {
  
     const group = useRef();
  const { scene } = useGLTF('/models/scene.gltf');

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={group} dispose={null}>
      <primitive object={scene} />
      {lightsOn && (
        <pointLight
          position={[0, 2, 5]}
          intensity={1}
          color={'white'}
          castShadow
        />
      )}
    </group>
  );
  
}

export default CarModel