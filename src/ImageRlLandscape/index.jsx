//lets refactor this :) following: https://www.holyday.me/r3f-image/ && using shaders and so forth
import { Html, useDepthBuffer, useProgress } from "@react-three/drei";
import { useCallback, useEffect, useRef } from "react";
import { TextureLoader, Vector3 } from "three";

import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";

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
  const depthBuffer = useDepthBuffer({ frames: 20 });
  return (
    <>
      <OrbitCam />
      <Image img={image} />
      <ambientLight color={"#ffffff"} intensity={0.04} />
      <MovingPointLight
        depthBuffer={depthBuffer}
        color="#ffffff"
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
    <mesh castShadow ref={mesh}>
      <planeGeometry args={[width, height]} position={[0, 0.5, 0]} />
      <meshStandardMaterial
        map={diffuseMap}
        normalMap={normalMap}
        displacementMap={depthMap}
        displacementScale={0.3} //could also touch this (was 0.1)
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
    light.current.position.set(xN, yN, 0.6);
  });

  return (
    <pointLight
      ref={light}
      castShadow
      intensity={2.5}
      distance={1.8}
      decay={2}
      {...props} //not sure whether we need this
    />
  );
}

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center as="div" wrapperClass="bg-ciYellowDark text-ciYellowLightest">
      {progress.toFixed()} % loaded
    </Html>
  );
}
