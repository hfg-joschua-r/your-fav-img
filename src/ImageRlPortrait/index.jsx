//lets refactor this :) following: https://www.holyday.me/r3f-image/ && using shaders and so forth
import { TextureLoader, Vector3 } from "three";
import { useRef, useCallback, useEffect } from "react";
import { useDepthBuffer } from "@react-three/drei";

import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";

import OrbitCam from "../components/Camera.jsx";

export default function Poc(props) {
  return (
    <div className="canvas">
      <Canvas shadows>
        <Scene image={props.img} />
      </Canvas>
    </div>
  );
}

function Scene({ image }) {
  const depthBuffer = useDepthBuffer({ 
    size: 1024,
    frames:Infinity,
   });
  return (
    <>
      <OrbitCam />
      <Image img={image} />
      <ambientLight color={"#8c8c8c"} intensity={.2} />
      <MovingPointLight
        depthBuffer={depthBuffer}
        color="#c7c7c7"
        position={[0, 0, 0]}
      />
    </>
  );
}

function Image(image) {
  const mesh = useRef();

  const [diffuseMap, depthMap, normalMap] = useLoader(TextureLoader, [
    image.img.diffuse,
    image.img.depth,
    image.img.normal,
  ]);
  //todo if its better with depth map w/o background


  //Get MousePos and update light
  const mousePosition = useRef({ x: 0, y: 0 });
  const updateMousePosition = useCallback((e) => {
    mousePosition.current = { x: e.pageX, y: e.pageY };
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition, false);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition, false);
    };
  }, [updateMousePosition]);

  //scale image down to about 1 / 1
  const width = image.img.width / 1000;
  const height = image.img.height / 1000;
  return (
    <mesh  ref={mesh}>
      <planeGeometry args={[width, height]} position={[0, 0.5, 0]} receiveShadow />

      {/* roughness changes the glossy effect of the image */}
      <meshStandardMaterial
      receiveShadow
         attach={"material"}
         roughness={.8}
         metalness={0.1}
         map={diffuseMap}
         normalMap={normalMap}
         displacementMap={depthMap}
         displacementScale={0.2}
      />
    </mesh>
  );
}

function MovingPointLight({ vec = new Vector3(), ...props }) {
  const light = useRef();
  const viewport = useThree((state) => state.viewport);
  useFrame(({ pointer, mouse }) => {
    const x = (pointer.x * viewport.width) / 2;
    const y = (pointer.y * viewport.height) / 2;

    const xN = mouse.x;
    const yN = mouse.y;
    light.current.position.set(xN, yN, 0.4);
  });

  return (
    <pointLight
      ref={light}
      castShadow
      intensity={2.8}
      distance={1.2}
      decay={2}
      {...props} //not sure whether we need this
    />
  );
}
