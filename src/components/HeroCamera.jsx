import React, { useRef } from "react";
import { useFrame, useThree, extend } from "@react-three/fiber";
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
  //toDO: implement small rotation animation
  return (
    <orbitControls
      enableRotate={false}
      rotateSpeed={0.2}
      enablePan={false}
      ref={controls}
      args={[camera, domElement]}
      makeDefault
      fov={40}
      position={[0, 0, 0.7]}
      maxDistance = {.8}
      minDistance={.3}
      zoomSpeed={0}
      enableDamping
      minAzimuthmaxAngle={Math.PI / 2}
      maxAzimuthmaxAngle={Math.PI * 0.2}
    />
  );
};
export default Camera;
