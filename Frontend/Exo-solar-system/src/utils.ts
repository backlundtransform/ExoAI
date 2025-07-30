import * as THREE from 'three'

export function getOrbitalPosition(
  semiMajorAxis: number,
  eccentricity: number,
  inclinationDeg: number,
  orbitalAngle: number 
): THREE.Vector3 {
  const a = semiMajorAxis
  const b = a * Math.sqrt(1 - eccentricity ** 2)
  const inclinationRad = (inclinationDeg * Math.PI) / 180

  const x = a * Math.cos(orbitalAngle)
  const z = b * Math.sin(orbitalAngle)

  const y = 0
  const rotatedY = y * Math.cos(inclinationRad) - z * Math.sin(inclinationRad)
  const rotatedZ = y * Math.sin(inclinationRad) + z * Math.cos(inclinationRad)

  return new THREE.Vector3(x, rotatedY, rotatedZ)
}