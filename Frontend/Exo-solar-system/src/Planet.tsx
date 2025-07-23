import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import type { PlanetData } from './types'
import { usePlanetMaterial } from './planetMaterial'

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

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const period = planet.period ?? 1

    const angle = (t / period) * 2 * Math.PI

  
    const distance = scaleDistanceFn(planet.meanDistance ?? 0)

    const x = Math.cos(angle) * distance
    const z = Math.sin(angle) * distance

    if (ref.current) {
      ref.current.position.set(x, 0, z)
    }
  })

  const scaledRadius = scaleRadiusFn(planet.radius)
  const material = usePlanetMaterial(planet)

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[scaledRadius, 32, 32]} />
      <primitive object={material} attach="material" />
    </mesh>
  )
}

