//lets refactor this :) following: https://www.holyday.me/r3f-image/ && using shaders and so forth
import {
  Html,
  Lightformer,
  Scroll,
  ScrollControls,
  useDepthBuffer,
  useProgress,
} from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Suspense, useCallback, useEffect, useRef } from "react";
import * as THREE from "three";
import { MeshStandardMaterial, TextureLoader, Vector3 } from "three";

import { Bloom, EffectComposer, Glitch } from "@react-three/postprocessing";
import { GlitchMode, KernelSize, Resizer } from "postprocessing";

import OrbitCam from "../components/HeroCamera";

//TODO: add ScrollControl to allow scrolling
export default function ImageRlHero(props) {
  return (
    <>
      <Canvas
        shadows
        gl={{
          powerPreference: "high-performance",
        }}
        className="container-xl box-content w-full"
      >
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      </Canvas>
    </>
  );
}

function Scene({ image }) {
  const depthBuffer = useDepthBuffer({ frames: 120 });
  return (
    <>
      <OrbitCam />
      <Image img={image} />
      {/* light tone warmer and less redish */}
      <ambientLight color={"#F2FCCF"} intensity={0.4} />
      <MovingPointLight
        depthBuffer={depthBuffer}
        color="#F9FFE6"
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
    <mesh ref={mesh} position={[0, 0, 0]}>
      <planeGeometry
        castShadow
        receiveShadow
        args={[width, height, 10, 10]}
        attach="geometry"
      />
      <meshStandardMaterial
        attach={"material"}
        roughness={0.8}
        metalness={0}
        map={diffuseMap}
        normalMap={normalMap}
        displacementMap={depthMap}
        displacementScale={0.02}
      />
    </mesh>
  );
}

function MovingPointLight({ vec = new Vector3(), ...props }) {
  const light = useRef();
  useFrame(({ pointer, mouse }) => {
    const xN = mouse.x;
    const yN = mouse.y;
    light.current.position.set(xN, yN, 0.3);
  });

  return (
    <pointLight
      ref={light}
      castShadow
      intensity={1.75}
      distance={1}
      decay={2.5}
      {...props}
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
