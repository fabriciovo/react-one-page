import { Canvas } from "@react-three/fiber";
import React, { useRef, Suspense } from "react";
import Cube from "./components/Cube";
import Swiper from 'swiper';

function App() {
  return (
    <main className="grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 gap-4 h-screen w-full place-items-center">
      <section className="w-full">
        <div className="bg-center w-full h-screen bg-[url('./src/assets/textures/blurd.png')]">
          <div className="backdrop-blur-sm h-screen">
            <Canvas>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Suspense fallback={null}>
                <Cube />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </section>

      <section className="">asdasd</section>
    </main>
  );
}

export default App;
