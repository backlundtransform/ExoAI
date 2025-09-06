import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Bounds, OrbitControls, Stars } from '@react-three/drei'
import { Planet } from './Planet'
import './App.css'
import { Star } from './Star'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { HabitableZone } from './HabitableZone'
import { OrbitPath } from './OrbitRing'
import type { SystemData } from './types'
import { makeScaleDistanceFn, makeScaleRadiusFn } from './utils'


interface ExoplanetSystemProps {
  system: SystemData
}


export const ExoplanetSystem: React.FC<ExoplanetSystemProps> = ({ system }) => {
  const scaleDistanceFn = makeScaleDistanceFn(system, 200)
  const scaleRadiusFn = makeScaleRadiusFn(system, 5, 0.8)

  const maxDistanceAU = Math.max(...system.planets.map(p => p.meanDistance ?? 0))
  const maxDistance = scaleDistanceFn(maxDistanceAU)
  const cameraZ = maxDistance * 1.5

  return (
    <div className="canvas-container" style={{ width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [0, maxDistance * 0.3, cameraZ], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 0, 0]} intensity={2} />

        <Stars radius={300} depth={60} count={10000} factor={7} saturation={0} fade speed={1} />

        <Star radius={system.radius} spectralType={system.type} />
        <HabitableZone
          innerRadius={system.habZoneMin}
          outerRadius={system.habZoneMax}
          scaleDistanceFn={scaleDistanceFn}
        />

        {system.planets.map((planet) => (
          <React.Fragment key={planet.id}>
            <OrbitPath
              semiMajorAxis={scaleDistanceFn(planet.meanDistance ?? 0)}
              eccentricity={planet.eccentricity ?? 0}
              inclination={planet.inclination ?? 0}
              color="white"
            />
            <Planet
              planet={planet}
              scaleDistanceFn={scaleDistanceFn}
              scaleRadiusFn={scaleRadiusFn}
              system={system}
            />
          </React.Fragment>
        ))}

        <EffectComposer>
          <Bloom intensity={1.5} kernelSize={3} luminanceThreshold={0.1} luminanceSmoothing={0.9} />
        </EffectComposer>

        <OrbitControls />
      </Canvas>
    </div>
  )
}