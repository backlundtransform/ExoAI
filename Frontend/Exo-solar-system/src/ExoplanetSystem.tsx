import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Bounds, OrbitControls, Stars } from '@react-three/drei'
import './App.css'
import { Planet } from './Planet'
import type { SystemData } from './types'



const systemData: SystemData = {
  name: "Sun",
  radius: 75.0,
  color: 2,
  habZoneMin: 167.97,
  habZoneMax: 179.95,
  planets: [
    
      {
        "id": 1,
        "name": "Neptune",
        "nameKepler": null,
        "nameKOI": null,
        "zoneClass": "Cold",
        "massClass": "Neptunian",
        "compositionClass": "gas",
        "atmosphereClass": "hydrogen-rich",
        "habitableClass": "non-habitable",
        "minMass": null,
        "mass": 17.1,
        "maxMass": null,
        "radius": 3.88,
        "density": 0.297,
        "gravity": 1.12,
        "escVel": 2.1,
        "sFluxMin": null,
        "sFluxMean": null,
        "sFluxMax": null,
        "teqMin": null,
        "teqMean": null,
        "teqMax": null,
        "tsMin": null,
        "tsMean": 72,
        "tsMax": null,
        "surfPress": null,
        "mag": null,
        "apparSize": null,
        "period": 60182,
        "semMajorAxis": null,
        "eccentricity": 0.009456,
        "meanDistance": 30.05,
        "inclination": null,
        "omega": null,
        "hzd": null,
        "hzc": null,
        "hza": null,
        "hzi": null,
        "sph": null,
        "intEsi": null,
        "surfEsi": null,
        "esi": 0,
        "habitable": false,
        "habMoon": null,
        "confirmed": null,
        "disc_Method": "ima",
        "disc_Year": 1846,
        "message": null
      },
      {
        "id": 2,
        "name": "Mercury",
        "nameKepler": null,
        "nameKOI": null,
        "zoneClass": "Hot",
        "massClass": "Mercurian",
        "compositionClass": "rocky-iron",
        "atmosphereClass": "no-atmosphere",
        "habitableClass": "non-habitable",
        "minMass": null,
        "mass": 0.055,
        "maxMass": null,
        "radius": 0.3829,
        "density": 0.984,
        "gravity": 0.377,
        "escVel": 0.38,
        "sFluxMin": null,
        "sFluxMean": null,
        "sFluxMax": null,
        "teqMin": null,
        "teqMean": null,
        "teqMax": null,
        "tsMin": 100,
        "tsMean": 340,
        "tsMax": 700,
        "surfPress": 0,
        "mag": null,
        "apparSize": null,
        "period": 87.96,
        "semMajorAxis": null,
        "eccentricity": 0.205,
        "meanDistance": 0.39,
        "inclination": null,
        "omega": null,
        "hzd": null,
        "hzc": null,
        "hza": null,
        "hzi": null,
        "sph": null,
        "intEsi": null,
        "surfEsi": null,
        "esi": 0.596,
        "habitable": false,
        "habMoon": null,
        "confirmed": null,
        "disc_Method": "ima",
        "disc_Year": -265,
        "message": null
      },
      {
        "id": 3,
        "name": "Venus",
        "nameKepler": null,
        "nameKOI": null,
        "zoneClass": "Hot",
        "massClass": "Terran",
        "compositionClass": "rocky-water",
        "atmosphereClass": "metals-rich",
        "habitableClass": "non-habitable",
        "minMass": null,
        "mass": 0.815,
        "maxMass": null,
        "radius": 0.9499,
        "density": 0.951,
        "gravity": 0.907,
        "escVel": 0.926,
        "sFluxMin": null,
        "sFluxMean": null,
        "sFluxMax": null,
        "teqMin": null,
        "teqMean": null,
        "teqMax": null,
        "tsMin": 737,
        "tsMean": 737,
        "tsMax": 737,
        "surfPress": 92,
        "mag": null,
        "apparSize": null,
        "period": 224.7,
        "semMajorAxis": null,
        "eccentricity": 0.0067,
        "meanDistance": 0.728,
        "inclination": null,
        "omega": null,
        "hzd": null,
        "hzc": null,
        "hza": null,
        "hzi": null,
        "sph": null,
        "intEsi": null,
        "surfEsi": null,
        "esi": 0.44,
        "habitable": false,
        "habMoon": null,
        "confirmed": null,
        "disc_Method": "ima",
        "disc_Year": null,
        "message": null
      },
      {
        "id": 4,
        "name": "Tellus",
        "nameKepler": null,
        "nameKOI": null,
        "zoneClass": "Warm",
        "massClass": "Terran",
        "compositionClass": "rocky-water",
        "atmosphereClass": "metals-rich",
        "habitableClass": "mesoplanet",
        "minMass": null,
        "mass": 1,
        "maxMass": null,
        "radius": 1,
        "density": 1,
        "gravity": 1,
        "escVel": 1,
        "sFluxMin": null,
        "sFluxMean": null,
        "sFluxMax": null,
        "teqMin": null,
        "teqMean": null,
        "teqMax": null,
        "tsMin": 184,
        "tsMean": 288,
        "tsMax": 330,
        "surfPress": 1,
        "mag": null,
        "apparSize": null,
        "period": 365,
        "semMajorAxis": null,
        "eccentricity": 0.0167,
        "meanDistance": 1,
        "inclination": null,
        "omega": null,
        "hzd": null,
        "hzc": null,
        "hza": null,
        "hzi": null,
        "sph": 1,
        "intEsi": null,
        "surfEsi": null,
        "esi": 1,
        "habitable": true,
        "habMoon": null,
        "confirmed": null,
        "disc_Method": null,
        "disc_Year": null,
        "message": null
      },
      {
        "id": 5,
        "name": "Uranus",
        "nameKepler": null,
        "nameKOI": null,
        "zoneClass": "Cold",
        "massClass": "Neptunian",
        "compositionClass": "gas",
        "atmosphereClass": "hydrogen-rich",
        "habitableClass": "non-habitable",
        "minMass": null,
        "mass": 14.5,
        "maxMass": null,
        "radius": 4.01,
        "density": 0.23,
        "gravity": 0.889,
        "escVel": 1.9,
        "sFluxMin": null,
        "sFluxMean": null,
        "sFluxMax": null,
        "teqMin": null,
        "teqMean": null,
        "teqMax": null,
        "tsMin": null,
        "tsMean": 76,
        "tsMax": null,
        "surfPress": null,
        "mag": null,
        "apparSize": null,
        "period": 30688.5,
        "semMajorAxis": null,
        "eccentricity": 0.046,
        "meanDistance": 19.2,
        "inclination": null,
        "omega": null,
        "hzd": null,
        "hzc": null,
        "hza": null,
        "hzi": null,
        "sph": null,
        "intEsi": null,
        "surfEsi": null,
        "esi": 0,
        "habitable": false,
        "habMoon": null,
        "confirmed": null,
        "disc_Method": "ima",
        "disc_Year": 1781,
        "message": null
      },
      {
        "id": 6,
        "name": "Jupiter",
        "nameKepler": null,
        "nameKOI": null,
        "zoneClass": "Cold",
        "massClass": "Jovian",
        "compositionClass": "gas",
        "atmosphereClass": "hydrogen-rich",
        "habitableClass": "non-habitable",
        "minMass": null,
        "mass": 317.8,
        "maxMass": null,
        "radius": 11.209,
        "density": 0.24,
        "gravity": 2.36,
        "escVel": 5.32,
        "sFluxMin": null,
        "sFluxMean": null,
        "sFluxMax": null,
        "teqMin": null,
        "teqMean": null,
        "teqMax": null,
        "tsMin": null,
        "tsMean": 165,
        "tsMax": null,
        "surfPress": null,
        "mag": null,
        "apparSize": null,
        "period": 4332.59,
        "semMajorAxis": null,
        "eccentricity": 0.0489,
        "meanDistance": 5.2,
        "inclination": null,
        "omega": null,
        "hzd": null,
        "hzc": null,
        "hza": null,
        "hzi": null,
        "sph": null,
        "intEsi": null,
        "surfEsi": null,
        "esi": 0,
        "habitable": false,
        "habMoon": null,
        "confirmed": null,
        "disc_Method": "ima",
        "disc_Year": null,
        "message": null
      },
      {
        "id": 7,
        "name": "Mars",
        "nameKepler": null,
        "nameKOI": null,
        "zoneClass": "Cold",
        "massClass": "Subterran",
        "compositionClass": "rocky-water",
        "atmosphereClass": "metals-rich",
        "habitableClass": "psychroplanet",
        "minMass": null,
        "mass": 0.107,
        "maxMass": null,
        "radius": 0.533,
        "density": 0.71,
        "gravity": 0.38,
        "escVel": 0.45,
        "sFluxMin": null,
        "sFluxMean": null,
        "sFluxMax": null,
        "teqMin": null,
        "teqMean": null,
        "teqMax": null,
        "tsMin": 130,
        "tsMean": 210,
        "tsMax": 308,
        "surfPress": 0.006,
        "mag": null,
        "apparSize": null,
        "period": 686.971,
        "semMajorAxis": null,
        "eccentricity": 0.0934,
        "meanDistance": 1.5,
        "inclination": null,
        "omega": null,
        "hzd": null,
        "hzc": null,
        "hza": null,
        "hzi": null,
        "sph": null,
        "intEsi": null,
        "surfEsi": null,
        "esi": 0.73,
        "habitable": false,
        "habMoon": null,
        "confirmed": null,
        "disc_Method": "ima",
        "disc_Year": null,
        "message": null
      },
      {
        "id": 8,
        "name": "Saturn",
        "nameKepler": null,
        "nameKOI": null,
        "zoneClass": "Cold",
        "massClass": "Jovian",
        "compositionClass": "gas",
        "atmosphereClass": "hydrogen-rich",
        "habitableClass": "non-habitable",
        "minMass": null,
        "mass": 95.2,
        "maxMass": null,
        "radius": 9.45,
        "density": 0.125,
        "gravity": 0.916,
        "escVel": 3.17,
        "sFluxMin": null,
        "sFluxMean": null,
        "sFluxMax": null,
        "teqMin": null,
        "teqMean": null,
        "teqMax": null,
        "tsMin": null,
        "tsMean": 165,
        "tsMax": null,
        "surfPress": null,
        "mag": null,
        "apparSize": null,
        "period": 10759.22,
        "semMajorAxis": null,
        "eccentricity": 0.0565,
        "meanDistance": 9.58,
        "inclination": null,
        "omega": null,
        "hzd": null,
        "hzc": null,
        "hza": null,
        "hzi": null,
        "sph": null,
        "intEsi": null,
        "surfEsi": null,
        "esi": 0,
        "habitable": false,
        "habMoon": null,
        "confirmed": null,
        "disc_Method": "ima",
        "disc_Year": null,
        "message": null
      }
  ],
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

  const maxDistanceAU = Math.max(...systemData.planets.map(p => p.meanDistance ?? 0))


  const scaleFactor = 10
  const maxDistance = maxDistanceAU * scaleFactor


  const cameraZ = maxDistance * 1.5

  return (
    <div className="canvas-container" style={{ width: '100vw', height: '100vh' }}>
      <Canvas
        camera={{ position: [0, maxDistance * 0.5, cameraZ], fov: 50 }}
        style={{ background: 'black' }}
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

      <Bounds fit clip observe margin={1.2}>

        <Star radius={systemData.radius} />

     
        {systemData.planets.map((planet) => (
          <Planet
            key={planet.id}
            planet={planet}
            scaleFactor={scaleFactor}
          />
        ))}

        </Bounds>
        <OrbitControls />
      </Canvas>
    </div>
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