import { useRef, useState, useEffect } from "react";
import { useFrame, ThreeElements, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";

interface ICube {
  threeProps?: ThreeElements["mesh"];
  image: string;
  changeSpeed: boolean;
}

function Cube({ threeProps, image, changeSpeed }: ICube) {
  const texture_1 = useLoader(TextureLoader, image);

  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  let speed = 1;

  useEffect(() => {
    speed = 10;
  }, [changeSpeed]);

  useFrame((state, delta) => {
    if (speed >= 1) {
      ref.current.rotation.y += delta * speed;
      if (speed > 1) {
        speed -= 1;
        if (speed <= 1) {
          speed = 1;
        }
      }
    }
  });
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
      <meshStandardMaterial map={texture_1} attach="material" />
    </mesh>
  );
}

export default Cube;
