import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Bounds, OrbitControls, Stars } from '@react-three/drei'
import './App.css'
import { Planet } from './Planet'
import { systemData } from './Data'
import { Star } from './Star'
import { Bloom, EffectComposer } from '@react-three/postprocessing'

import { HabitableZone } from './HabitableZone'
import { OrbitPath } from './OrbitRing'



const scaleDistanceToUnits = (distanceAU: number) => {
  const logDistance = Math.log10(distanceAU + 1) 
  return logDistance * 100 
}
const scaleRadiusToUnits = (radiusEarthRadii: number) => {
  const logRadius = Math.log10(radiusEarthRadii + 1) 
  return logRadius * 3.5 
}


export default function ExoplanetSystem() {
  const maxDistanceAU = Math.max(...systemData.planets.map(p => p.meanDistance ?? 0))
  const maxDistance = scaleDistanceToUnits(maxDistanceAU)
  const cameraZ = maxDistance * 1.5

  return (
    <div className="canvas-container" style={{ width: '100%', height: '100%' }}>
      <Canvas
        camera={{ position: [0, maxDistance * 0.3, cameraZ], fov: 50 }}
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 0, 0]} intensity={2} />

        <Stars
          radius={300}
          depth={60}
          count={10000}
          factor={7}
          saturation={0}
          fade
          speed={1}
        />

   
          <Star radius={systemData.radius} spectralType={systemData.type} />
          <HabitableZone
            innerRadius={systemData.habZoneMin}
            outerRadius={systemData.habZoneMax}
            scaleDistanceFn={scaleDistanceToUnits}
          />

          {systemData.planets.map((planet) => ( <React.Fragment key={planet.id}>
    <OrbitPath
      semiMajorAxis={scaleDistanceToUnits(planet.meanDistance ?? 0)}

  eccentricity={planet.eccentricity ?? 0}
  inclination={planet.inclination ?? 0}
  color="white"
    />
            <Planet
              key={planet.id}
              planet={planet}
              scaleDistanceFn={scaleDistanceToUnits}
              scaleRadiusFn={scaleRadiusToUnits}
            /> </React.Fragment>
          ))}

    <EffectComposer>
        <Bloom
          intensity={1.5}
          kernelSize={3}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>
        

        <OrbitControls />
      </Canvas>
    </div>
  )
}