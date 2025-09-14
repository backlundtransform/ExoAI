import React, { useState } from "react"
import { Canvas } from "@react-three/fiber"
import { Html, OrbitControls, Stars as DreiStars } from "@react-three/drei"
import type { StarApi } from "./types"

interface StarMapProps {
  stars: StarApi[]
  onSelectStar: (starId: number) => void
}

export default function StarMap({ stars, onSelectStar }: StarMapProps) {
  const [hoveredStar, setHoveredStar] = useState<StarApi | null>(null)

  // Omvandlar RA/Dec (grader) till XYZ på en sfär med given radius
  const raDecToXYZ = (ra: number, dec: number, radius: number) => {
    const raRad = (ra / 24) * 2 * Math.PI // RA i timmar → radianer
    const decRad = (dec / 180) * Math.PI // Dec i grader → radianer
    const x = radius * Math.cos(decRad) * Math.cos(raRad)
    const y = radius * Math.sin(decRad)
    const z = radius * Math.cos(decRad) * Math.sin(raRad)
    return [x, y, z]
  }

  return (
    <Canvas camera={{ position: [0, 0, 100], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 0]} intensity={1} />
      <DreiStars radius={100} depth={50} count={1000} factor={4} saturation={0} fade />

      {stars.map((star) => {
        const [x, y, z] = raDecToXYZ(star.ra ?? 0, star.dec ?? 0, 40)
        return (
          <mesh
            key={star.id}
            position={[x, y, z]}
            onPointerOver={() => setHoveredStar(star)}
            onPointerOut={() => setHoveredStar(null)}
            onClick={() => onSelectStar(star.id)}
          >
            <sphereGeometry args={[0.5, 16, 16]} />
            <meshBasicMaterial color="white" />
            {hoveredStar?.id === star.id && (
              <Html distanceFactor={10}>
                <div
                  style={{
                    backgroundColor: "rgba(0,0,0,0.7)",
                    color: "white",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    fontSize: "12px",
                  }}
                >
                  {star.name} <br />
                  RA: {(star.ra ?? 0).toFixed(2)}h <br />
                  Dec: {(star.dec ?? 0).toFixed(2)}°
                </div>
              </Html>
            )}
          </mesh>
        )
      })}

      <OrbitControls />
    </Canvas>
  )
}
