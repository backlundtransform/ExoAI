import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import { Html } from '@react-three/drei'
import type { PlanetData } from './types'
import { usePlanetMaterial } from './planetMaterial'
import { getPositionFromAngle } from './utils'

interface PlanetProps {
  planet: PlanetData
  scaleDistanceFn: (distanceAU: number) => number
  scaleRadiusFn: (radiusEarthRadii: number) => number
}

export const Planet: React.FC<PlanetProps> = ({
  planet,
  scaleDistanceFn,
  scaleRadiusFn
}) => {
  const ref = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [angle, setAngle] = useState(0) // planetens position på banan

  const scaledRadius = scaleRadiusFn(planet.radius)
  const material = usePlanetMaterial(planet)

  const a = scaleDistanceFn(planet.meanDistance ?? 0)
  const e = planet.eccentricity ?? 0
  const i = planet.inclination ?? 0

  // Animation längs banan
  useFrame(({ clock }) => {
    const speedFactor =  1 
    const t = 50 * clock.getElapsedTime()
    const period = planet.period ?? 1

    if(!hovered)
     setAngle((t / period) * 2 * Math.PI * speedFactor)

    if (ref.current) {
      const pos = getPositionFromAngle(a, e, i, angle)
      ref.current.position.set(pos.x, pos.y, pos.z)
    }

    
    if (hovered) {
      document.body.style.cursor = 'pointer'
    } else {
      document.body.style.cursor = 'default'
    }
  })

  return (
    <mesh
      ref={ref}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[scaledRadius, 32, 32]} />
      <primitive object={material} attach="material" />

      {hovered && (
        <Html distanceFactor={150}>
          <div style={{
            backgroundColor: 'rgba(0,0,0,0.7)',
            padding: '8px',
            borderRadius: '4px',
            color: 'white',
            fontSize: '12px',
            pointerEvents: 'none',
            minWidth: '150px',
            maxWidth: '300px',
            minHeight: '100px',
            maxHeight: '200px'
          }}>
            <strong>{planet.name}</strong><br/>
            Mass: {planet.mass} Earths<br/>
            Radius: {planet.radius} Earths<br/>
            Distance: {planet.meanDistance} AU<br/>
            Temp: {planet.tsMean ?? 'N/A'} K
          </div>
        </Html>
      )}
    </mesh>
  )
}
