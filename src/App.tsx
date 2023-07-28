import { Canvas } from "@react-three/fiber";
import React, {
  useRef,
  Suspense,
  useState,
  useEffect,
  useLayoutEffect,
} from "react";
import Cube from "./components/Cube";
import Swiper from "swiper";

function usePrevious(value:any) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value; //assign the value of ref to the argument
  },[value]); //this code will run when the value of 'value' changes
  return ref.current; //in the end, return the current ref value.
}

function App() {
  const data = [
    {
      id: "blurd-data",
      image: "./src/assets/textures/blurd.png",
    },
    {
      id: "culligan-data",
      image: "./src/assets/textures/culligan.png",
    },
  ];

  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(data[index]);
  const prevIndex = usePrevious(index)


  useEffect(() => {
    console.log(prevIndex);

    setActive(data[index]);
  }, [index]);

  function next() {
    setIndex((prev) => {
      let value = prev + 1;
      if (value >= data.length) {
        prev = 0;
        return prev;
      }
      return value;
    });

  }

  return (
    <main className="grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 gap-4 h-screen w-full place-items-center">
      <section className="w-full">
        <div
          className={`bg-center w-full h-screen transition-all duration-100 ease-in-out `}
          style={{ backgroundImage: `url(${active.image})` }}
        >
          <div className="backdrop-blur-sm h-screen">
            <Canvas>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Suspense fallback={null}>
                <Cube image={active.image} changeSpeed={prevIndex !== index} />
              </Suspense>
            </Canvas>
          </div>
        </div>
        <button onClick={() => next()}>Next {index}</button>
      </section>

      <section className="">asdasd</section>
    </main>
  );
}

export default App;
