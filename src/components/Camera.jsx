import { extend, useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });
const Camera = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef();

  // @ts-ignore
  useFrame(() => controls.current.update());
  // @ts-ignore

  //TODO: limit x axis rotation
  return (
    <orbitControls
      enableRotate={false}
      rotateSpeed={0.2}
      enablePan={false}
      enableZoom={false}
      ref={controls}
      args={[camera, domElement]}
      makeDefault
      fov={70}
      position={[0, 0, 0.7]}
      maxDistance={1.4}
      minDistance={0.3}
      zoomSpeed={0.1}
      enableDamping
      maxAzimuthAngle={Math.PI / 5}
      maxPolarAngle={Math.PI / 1.5}
      minAzimuthAngle={-Math.PI / 5}
      minPolarAngle={Math.PI / 3}
    />
  );
};
export default Camera;
