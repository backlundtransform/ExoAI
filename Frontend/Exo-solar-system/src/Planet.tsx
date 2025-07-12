import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import type { PlanetData } from './types'

interface PlanetProps {
  planet: PlanetData
  scaleFactor: number
}

export const Planet: React.FC<PlanetProps> = ({ planet, scaleFactor }) => {
  const ref = useRef<Mesh>(null)
  
  // Simulera omloppsrörelse
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const angle = (t / (planet.period ?? 1)) * 2 * Math.PI
    const distance = (planet.meanDistance ?? 0) * scaleFactor

    const x = Math.cos(angle) * distance
    const z = Math.sin(angle) * distance

    if (ref.current) {
      ref.current.position.set(x, 0, z)
    }
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[planet.radius * 0.5, 32, 32]} />
      <meshStandardMaterial color={getColorByMassClass(planet.massClass)} />
    </mesh>
  )
}

function getColorByMassClass(massClass: string): string {
  switch (massClass?.toLowerCase()) {
    case 'terran': return 'blue'
    case 'neptunian': return 'lightblue'
    case 'jovian': return 'orange'
    default: return 'gray'
  }
}