import React from 'react'

interface OrbitRingProps {
  distance: number // i AU
  scaleDistanceFn: (au: number) => number
}

export const OrbitRing: React.FC<OrbitRingProps> = ({ distance, scaleDistanceFn }) => {
  const scaledDistance = scaleDistanceFn(distance)
  const segments = 128

  return (
    <mesh rotation-x={Math.PI / 2}>
      <ringGeometry args={[scaledDistance - 0.01, scaledDistance + 0.01, segments]} />
      <meshBasicMaterial color="white" transparent opacity={0.3} side={2} />
    </mesh>
  )
}
