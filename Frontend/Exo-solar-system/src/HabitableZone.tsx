import React from 'react'

interface HabitableZoneProps {
  innerRadius: number // i AU
  outerRadius: number // i AU
  scaleDistanceFn: (au: number) => number
}

export const HabitableZone: React.FC<HabitableZoneProps> = ({
  innerRadius,
  outerRadius,
  scaleDistanceFn
}) => {
  const segments = 128
  const innerScaled = scaleDistanceFn(innerRadius)
  const outerScaled = scaleDistanceFn(outerRadius)

  return (
    <>
      {/* Inre gräns – röd cirkel */}
      <mesh rotation-x={Math.PI / 2}>
        <ringGeometry args={[innerScaled - 0.2, innerScaled + 0.2, segments]} />
        <meshBasicMaterial color="red" side={2} transparent opacity={0.5} />
      </mesh>

      {/* Yttre gräns – blå cirkel */}
      <mesh rotation-x={Math.PI / 2}>
        <ringGeometry args={[outerScaled - 0.2, outerScaled + 0.2, segments]} />
        <meshBasicMaterial color="blue" side={2} transparent opacity={0.5} />
      </mesh>
    </>
  )
}