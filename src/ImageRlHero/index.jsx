//lets refactor this :) following: https://www.holyday.me/r3f-image/ && using shaders and so forth
import { MeshStandardMaterial, TextureLoader, Vector3 } from "three";
import * as THREE from "three";
import { useRef, useCallback, useEffect } from "react";
import { useDepthBuffer, Environment, Lightformer } from "@react-three/drei";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";

import { EffectComposer, Bloom, Glitch } from "@react-three/postprocessing";
import { Resizer, KernelSize, GlitchMode } from "postprocessing";

import OrbitCam from "../components/HeroCamera";

//TODO: add ScrollControl to allow scrolling
export default function ImageRlHero(props) {
  return (
    <div className="box-border w-4/6 h-4/6">
      <Canvas
        shadows
        gl={{
          powerPreference: "high-performance",
        }}
        className="container-xl box-content w-full"
      >
        <Scene image={props.img} />
        <EffectComposer>
          <Glitch
            delay={[1.5, 3.5]} // min and max glitch delay
            duration={[0.6, 1.0]} // min and max glitch duration
            strength={[0.3, 1.0]} // min and max glitch strength
            mode={GlitchMode.SPORADIC} // glitch mode
            active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
            ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
          />
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
      <mesh position={[0, 0, -0.1]}>
        <planeGeometry args={[10, 10]} attach="geometry" />
        <meshBasicMaterial
          color={"#101010"}
          attach="material"
          reflectivity={2}
        />
      </mesh>
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
    <mesh castShadow ref={mesh} position={[0, 0, 0]}>
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
