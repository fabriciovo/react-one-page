import { useFrame, ThreeElements, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";

import { useRef, useState } from "react";

interface ICube {
  threeProps?: ThreeElements["mesh"];
  image?: { src: string; alt: string };
}

function Cube({ threeProps, image }: ICube) {
  const texture_1 = useLoader(TextureLoader, "./src/assets/textures/blurd.png");

  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame((state, delta) => (ref.current.rotation.y += delta));
  return (
    <mesh
      {...threeProps}
      ref={ref}
      scale={1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={texture_1} attach="material"  />
    </mesh>
  );
}

export default Cube;
