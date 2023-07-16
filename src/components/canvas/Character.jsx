import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Character = ({ isMobile }) => {
  const character = useGLTF("./Character/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={character.scene}
        scale={isMobile ? 0.005 : 0.007}
        position={isMobile ? [0, -4.5, 0] : [0, -3.25, 0]}
        rotation={[0, 1.25, 0]}
      />
    </mesh>
  )
}

const CharacterCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener("change",
    handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change",
      handleMediaQueryChange);
    }
  }, [])

  return(
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 30 }}
      gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Character isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default CharacterCanvas;