import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'

interface PlanetData {
  id: number
  name: string
  img: { uri: string }
  radius: number
  eccentricity: number
  starDistance: number
}

interface SystemData {
  name: string
  radius: number
  color: number
  habZoneMin: number
  habZoneMax: number
  planets: PlanetData[]
}

const systemData: SystemData = {
  name: "Sun",
  radius: 75.0,
  color: 2,
  habZoneMin: 167.97,
  habZoneMax: 179.95,
  planets: [
    { id: 2, name: "Mercury", img: { uri: "iron" }, radius: 10.0, eccentricity: 0.205, starDistance: 167.78 },
    { id: 3, name: "Venus", img: { uri: "hotstone" }, radius: 14.2485, eccentricity: 0.0067, starDistance: 178.78 },
    { id: 4, name: "Tellus", img: { uri: "stone" }, radius: 15.0, eccentricity: 0.0167, starDistance: 184.96 },
    { id: 7, name: "Mars", img: { uri: "coldstone" }, radius: 10.0, eccentricity: 0.0934, starDistance: 189.95 },
    { id: 6, name: "Jupiter", img: { uri: "jovian" }, radius: 50.0, eccentricity: 0.0489, starDistance: 303.82 },
    { id: 8, name: "Saturn", img: { uri: "jovian" }, radius: 50.0, eccentricity: 0.0565, starDistance: 391.28 },
    { id: 5, name: "Uranus", img: { uri: "neptunian" }, radius: 50.0, eccentricity: 0.046, starDistance: 583.36 },
    { id: 1, name: "Neptune", img: { uri: "neptunian" }, radius: 50.0, eccentricity: 0.009456, starDistance: 800.0 },
  ],
}

interface PlanetProps {
  name: string
  radius: number
  distance: number
  color?: string
}

const Planet: React.FC<PlanetProps> = ({ name, radius, distance, color = 'gray' }) => {
  const angle = React.useMemo(() => Math.random() * 2 * Math.PI, []) // random position
  const x = Math.cos(angle) * distance * 0.01
  const z = Math.sin(angle) * distance * 0.01

  return (
    <mesh position={[x, 0, z]} >
      <sphereGeometry args={[radius * 0.02, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

interface StarProps {
  radius: number
}

const Star: React.FC<StarProps> = ({ radius }) => {
  return (
    <mesh>
      <sphereGeometry args={[radius * 0.02, 64, 64]} />
      <meshStandardMaterial emissive={'yellow'} emissiveIntensity={1} color={'white'} />
    </mesh>
  )
}

export default function ExoplanetSystem() {
  return (
    <Canvas camera={{ position: [0, 200, 400], fov: 50 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 0]} intensity={2} />
      <Stars />

      <Star radius={systemData.radius} />

      {systemData.planets.map((planet) => (
        <Planet
          key={planet.id}
          name={planet.name}
          radius={planet.radius}
          distance={planet.starDistance}
          color={getColorByType(planet.img.uri)}
        />
      ))}

      <OrbitControls />
    </Canvas>
  )
}

function getColorByType(type: string): string {
  switch (type) {
    case 'iron':
      return 'darkgray'
    case 'hotstone':
      return 'orange'
    case 'stone':
      return 'blue'
    case 'coldstone':
      return 'red'
    case 'jovian':
      return 'brown'
    case 'neptunian':
      return 'lightblue'
    default:
      return 'gray'
  }
}