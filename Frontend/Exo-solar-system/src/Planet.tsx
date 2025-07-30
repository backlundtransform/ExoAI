import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import type { PlanetData } from './types'
import { usePlanetMaterial } from './planetMaterial'
import { getOrbitalPosition } from './utils' // ny

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
    const t = 50 * clock.getElapsedTime()
    const period = planet.period ?? 1
    const angle = (t / period) * 2 * Math.PI

    const a = scaleDistanceFn(planet.meanDistance ?? 0)
    const e = planet.eccentricity ?? 0
    const i = planet.inclination ?? 0

    const pos = getOrbitalPosition(a, e, i, angle)

    if (ref.current) {
      ref.current.position.set(pos.x, pos.y, pos.z)
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
