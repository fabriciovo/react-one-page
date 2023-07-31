import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { usePrevious } from "../hooks/usePrevious";
import Cube from "./Cube";
import Description from "./Description";

function Banner({ profileData }: IBannerDataProps) {
  const [index, setIndex] = useState<number>(0);
  const [active, setActive] = useState(profileData[index]);
  const prevIndex = usePrevious(index);

  useEffect(() => {
    setActive(profileData[index]);
  }, [index]);

  function next() {
    setIndex((prev) => {
      const value = prev + 1;
      if (value >= profileData.length) {
        prev = 0;
        return prev;
      }
      return value;
    });
  }

  return (
    <div className="grid md:grid-cols-12 md:grid-rows-1 grid-rows-2 w-full place-items-center">
      <div className="md:col-span-8">
        <Description descriptionView={profileData[index].descriptionView} />
      </div>
      <div
        className={`bg-center bg-cover w-full h-screen transition-all duration-100 ease-in-out md:col-span-4`}
        style={{ backgroundImage: `url(${active.image})` }}
      >
        <div className="backdrop-blur-sm h-full" onClick={() => next()}>
          <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <Cube image={active.image} changeSpeed={prevIndex !== index} />
            </Suspense>
          </Canvas>
          <div className="absolute bottom-2 right-0 left-0 mx-auto w-full text-center">
            <button
              id="sButton2"
              className=" border-white border-spacing-3 rounded-full w-4 p-2 mx-2"
            ></button>
            <button
              id="sButton2"
              className=" border-white border-spacing-3 rounded-full w-4 p-2 mx-2"
            ></button>
            <button
              id="sButton2"
              className=" border-white border-spacing-3 rounded-full w-4 p-2 mx-2"
            ></button>
            <button
              id="sButton2"
              className=" border-white border-spacing-3 rounded-full w-4 p-2 mx-2"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
