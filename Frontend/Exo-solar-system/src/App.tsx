import React, { useEffect, useState } from "react"
import StarMap from "./StarMap"
import { ExoplanetSystem } from "./ExoplanetSystem"
import { fetchStars, fetchSystem } from "./api"
import type { StarApi, SystemData } from "./types"
import "./App.css"

const App: React.FC = () => {
  const [stars, setStars] = useState<StarApi[]>([])
  const [selectedSystem, setSelectedSystem] = useState<SystemData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchStars()
      .then((data: any[]) => setStars(data))
      .catch((err: any) => setError(err.message))
  }, [])

  const handleSelectStar = async (starId: number) => {
    setLoading(true)
    setError(null)
    try {
      const system = await fetchSystem(starId)
      setSelectedSystem(system)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (selectedSystem) return <ExoplanetSystem system={selectedSystem} />

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Scrollbar-lista med stjärnor */}
      <div style={{ width: "250px", overflowY: "auto", padding: "10px", borderRight: "1px solid #ccc" }}>
        <h2>Välj en stjärna</h2>
        {loading && <p>Laddar...</p>}
        {error && <p style={{ color: "red" }}>Fel: {error}</p>}
        <ul style={{ listStyle: "none", padding: 0 }}>
          {stars.map((star) => (
            <li key={star.id} style={{ marginBottom: "6px" }}>
              <button
                onClick={() => handleSelectStar(star.id)}
                style={{
                  width: "100%",
                  padding: "6px 8px",
                  textAlign: "left",
                  cursor: "pointer",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  backgroundColor: "#f9f9f9",
                }}
              >
                {star.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* 3D-stjärnkarta */}
      <div style={{ flex: 1 }}>
        <StarMap stars={stars} onSelectStar={handleSelectStar} />
      </div>
    </div>
  )
}

export default App