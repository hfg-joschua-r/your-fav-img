//lets refactor this :) following: https://www.holyday.me/r3f-image/ && using shaders and so forth
import { useDepthBuffer } from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { TextureLoader, Vector3 } from "three";

import OrbitCam from "../components/Camera.jsx";

export default function Poc(props) {
  return (
    <div className="h-full">
      <Canvas
        shadows
        gl={{
          powerPreference: "high-performance",
        }}
      >
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
      {/* light tone warmer and less redish */}
      <ambientLight color={"#DBDBDB"} intensity={0.5} />
      <MovingPointLight
        depthBuffer={depthBuffer}
        color="#bdf7ff"
        position={[0, 0, 0]}
      />
      <MovingSpotlights />

      {/* add other planes left and right */}
      <mesh position={[0, 0, -2]}>
        <planeGeometry args={[30, 30]} attach="geometry" />
        <meshBasicMaterial color={"#000"} attach="material" reflectivity={2} />
      </mesh>
    </>
  );
}

function Image(image, rot) {
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

  //rotation:
  const group = useRef();
  // useFrame(
  //   ({ pointer }) =>
  //     (group.current.rotation.y = THREE.MathUtils.lerp(
  //       group.current.rotation.y,
  //       pointer.x * (Math.PI / 8),
  //       0.005
  //     ))
  // );
  return (
    <group ref={group}>
      <mesh castShadow ref={mesh} position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <planeGeometry args={[width, height, 10, 10]} attach="geometry" />
        <meshStandardMaterial
          attach={"material"}
          roughness={1}
          metalness={0.1}
          map={diffuseMap}
          normalMap={normalMap}
          displacementMap={depthMap}
          displacementScale={0.05}
        />
      </mesh>
    </group>

    // <mesh>
    //   <planeGeometry shadows attach="geometry" args={[width, height]} />
    //   <meshBasicMaterial
    //     attach="material"
    //     map={diffuseMap}
    //     depthMap={depthMap}
    //   />
    // </mesh>
  );
}

function MovingPointLight({ vec = new Vector3(), ...props }) {
  const light = useRef();
  const viewport = useThree((state) => state.viewport);
  useFrame(({ pointer, mouse }) => {
    const xN = THREE.MathUtils.lerp(mouse.x, mouse.x * (Math.PI / 2), 0.1);
    const yN = THREE.MathUtils.lerp(mouse.y, mouse.y * (Math.PI / 2), 0.1);
    light.current.position.set(xN, yN, 0.3);
  });

  return (
    <pointLight
      ref={light}
      castShadow
      intensity={3}
      distance={2}
      decay={2.5}
      {...props}
    />
  );
}

function MovingSpotlights() {
  const [lightRefs, setLightRefs] = useState(
    Array(2)
      .fill()
      .map(() => useRef())
  );
  useFrame((state) => {
    lightRefs.forEach((lightRef, index) => {
      lightRef.current.position.x =
        Math.cos(state.clock.getElapsedTime() + index) * 1.2;
      lightRef.current.position.y =
        Math.sin(state.clock.getElapsedTime() + index) * 1.3;
      lightRef.current.color = new THREE.Color("white");
    });
  });

  return (
    <>
      {lightRefs.map((lightRef, index) => (
        <spotLight
          key={index}
          ref={lightRef}
          penumbra={1}
          intensity={1.5}
          angle={Math.PI / 2}
          distance={2}
          decay={2}
          scale={[1, 1, 1]}
          position={[0, 0, 0.5]}
        />
      ))}
    </>
  );
}
