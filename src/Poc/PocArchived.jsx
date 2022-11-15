import { Texture, TextureLoader, Vector3 } from 'three'
import { useRef } from 'react'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import { SpotLight, useDepthBuffer } from '@react-three/drei'
import OrbitCam from "../components/Camera.jsx"

import diffuseMap2 from "./assets/1-diffuse.webp"
import depthMap2 from "./assets/1-depth.webp"
import normalMap2 from "./assets/1-normal.webp"

export default function Poc() {
  return (
    <div className="canvas">
    <Canvas shadows dpr={[1, 2]} >
      <OrbitCam />
      <color attach="background" args={['#202020']} />
      <fog attach="fog" args={['#202020', 5, 20]} />
      <ambientLight intensity={0.015 } />
      <Scene />
    </Canvas>
    </div>
  )
}

function Scene() {
  // This is a super cheap depth buffer that only renders once (frames: 1 is optional!), which works well for static scenes
  // Spots can optionally use that for realism, learn about soft particles here: http://john-chapman-graphics.blogspot.com/2013/01/good-enough-volumetrics-for-spotlights.html
  const depthBuffer = useDepthBuffer({ frames: 1 })
  return (
    <>
      <MovingSpot depthBuffer={depthBuffer} color="#4F29A6" position={[-3, 2, 2]} />
      <MovingSpot depthBuffer={depthBuffer} color="#fcfcfc" position={[1, 2, 4]} />
      <DepthImage />
    </>
  )
}
function DepthImage() {
  const [diffuseMap, depthMap, normalMap] = useLoader(TextureLoader, [diffuseMap2, depthMap2, normalMap2])

  return (
    <mesh>
        <planeGeometry args={[5,5]} />
        <meshStandardMaterial map={diffuseMap} normalMap={normalMap} displacementMap={depthMap} displacementScale={4} />
     </mesh>
  )
}

function MovingSpot({ vec = new Vector3(), ...props }) {
  const light = useRef()
  const viewport = useThree((state) => state.viewport)
  useFrame((state) => {
   // light.position = vec.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0), 0.1
    
    light.current.target.position.lerp(vec.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0), 0.1)
    light.current.target.updateMatrixWorld()
  })

  //return <pointLight ref={light} {...props} />
  return <SpotLight castShadow ref={light} penumbra={1} distance={6} angle={0.35} attenuation={5} anglePower={4} intensity={2} {...props} />
}
