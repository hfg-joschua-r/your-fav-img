//lets refactor this :) following: https://www.holyday.me/r3f-image/ && using shaders and so forth
import { MeshStandardMaterial, TextureLoader, Vector3 } from "three";
import * as THREE from "three";
import { useRef, useCallback, useEffect } from "react";
import { useDepthBuffer, Environment, Lightformer } from "@react-three/drei";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";

import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Resizer, KernelSize } from "postprocessing";
import { LayerMaterial, Depth, Noise, Color } from "lamina";

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
        <EffectComposer>
          <Bloom
            intensity={1.0} // The bloom intensity.
            blurPass={undefined} // A blur pass.
            width={Resizer.AUTO_SIZE} // render width
            height={Resizer.AUTO_SIZE} // render height
            kernelSize={KernelSize.LARGE} // blur kernel size
            luminanceThreshold={0.6} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0.5} // smoothness of the luminance threshold. Range is [0, 1]
          />
        </EffectComposer>
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
      <ambientLight color={"#1C0000"} intensity={20} />
      <MovingPointLight
        depthBuffer={depthBuffer}
        color="#bdf7ff"
        position={[0, 0, 0]}
      />

      {/* add other planes left and right */}
        <mesh position={[0, 0, -0.1]}>
        <planeGeometry args={[30, 30]} attach="geometry" />
        <meshBasicMaterial
          color={"#1C1C1C"}
          attach="material"
          reflectivity={2}
        />
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
  return (
    <mesh castShadow ref={mesh} position={[0, 0, 0]}>
      <planeGeometry args={[width, height, 10,10]} attach="geometry" />
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
    light.current.position.set(xN, yN, 0.3);
  });

  return (
    <pointLight
      ref={light}
      castShadow
      intensity={2}
      distance={1}
      decay={2.5}
      {...props}
    />
  );
}
