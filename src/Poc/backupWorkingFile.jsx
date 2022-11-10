//lets refactor this :) following: https://www.holyday.me/r3f-image/ && using shaders and so forth
import { ShaderMaterial, Texture, TextureLoader, Vector3 } from "three";
import { useRef, useMemo, useCallback, useEffect } from "react";
import { SpotLight, useDepthBuffer, Backdrop } from "@react-three/drei";

import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import OrbitCam from "../components/Camera.jsx";

import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";

export default function Poc(props) {
  return (
    <div className="canvas">
      <Canvas shadows >
        <Scene image={props.img} />
      </Canvas>
    </div>
  );
}

function Scene({ image }) {
  const depthBuffer = useDepthBuffer({ frames: 1 });

  return (
    <>
      {/* <Backdrop
        floor={0.25} // Stretches the floor segment, 0.25 by default
        segments={20} // Mesh-resolution, 20 by default
      >
        <meshStandardMaterial color="#353540" />
      </Backdrop> */}

      <OrbitCam />
      <Image img={image} />
      <ambientLight color={"#ab2446"} intensity={0.92} />
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

  return (
    <mesh castShadow ref={mesh}>
      <planeGeometry args={[1, 1, 1, 1]} position={[0, .5,0]} />
      <meshStandardMaterial
        map={diffuseMap}
        normalMap={normalMap}
        displacementMap={depthMap}
      />
      {/* <meshDepthMaterial map={diffuseMap} displacementMap={depthMap}/> */}
    </mesh>
  );
}

function MovingLight({ vec = new Vector3(), ...props }) {
  const light = useRef();
  const viewport = useThree((state) => state.viewport);
  useFrame((state) => {
    light.current.target.position.lerp(
      vec.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        0
      ),
      0.1
    );
    light.current.target.updateMatrixWorld();
  });

  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2
    light.current.position.set(x, y, 0.5)
    // light.current.rotation.set(-y, x, 3)
  })

  return (
    <SpotLight
      castShadow
      ref={light}
      penumbra={10}
      distance={5}
      angle={0.1}
      attenuation={5}
      anglePower={20}
      intensity={10}
      {...props}
    />
  );
}

function MovingPointLight({ vec = new Vector3(), ...props }){
    const light = useRef();
    const viewport = useThree((state) => state.viewport);
    useFrame(({ pointer, mouse }) => {
        const x = (pointer.x * viewport.width) / 2
        const y = (pointer.y * viewport.height) / 2

        const xN = mouse.x 
        const yN = mouse.y
        light.current.position.set(xN, yN, 0.6)
        
      })

      return (
        <pointLight
          ref={light}
          castShadow
          intensity={2}
          distance={.9}
          decay={2}
        //   {...props}
        />
      )
}

function VerySpecialCamera({camRef}){
	return <PerspectiveCamera ref={camRef} makeDefault fov={50} position={[3, 2, 5]} />
}