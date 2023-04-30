import React, { useState, useRef, Suspense} from 'react'
import * as random from 'maath/random/dist/maath-random.esm'
import { Points, PointMaterial, Preload } from '@react-three/drei'

import styled from 'styled-components'
import { Canvas, useFrame} from '@react-three/fiber'
const Stars = (props) => {

    const ref = useRef();
  
    const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2})
    
    useFrame((state, delta) => {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    })
  
    return (
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points 
          ref={ref} positions={sphere} stride={3} 
          frustumCulled {...props}
        >
          <PointMaterial 
          transparent
          color="#f272c8"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          />
        </Points>
      </group>
    )
  }

  
  const StarsCanvas = () => {
    return(
      <Container>
        <Canvas camera={{ position: [0, 0, 1]}}>
          <Suspense fallback={null}>
             <Stars />
          </Suspense>
  
          <Preload all />
        </Canvas>
      </Container>
    )
  }

  const Container = styled.div`
   width: 100%;
   height: auto;
   position: absolute;
   top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: -1;
  `
export default StarsCanvas