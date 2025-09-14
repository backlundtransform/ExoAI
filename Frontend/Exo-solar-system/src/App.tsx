import React, { useEffect, useState } from "react"
import { ExoplanetSystem } from "./ExoplanetSystem"
import { fetchStars, fetchSystem } from "./api"
import type { StarApi, SystemData } from "./types"

const App: React.FC = () => {
  const [stars, setStars] = useState<StarApi[]>([])
  const [selectedSystem, setSelectedSystem] = useState<SystemData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Hämta alla stjärnor vid start
  useEffect(() => {
    fetchStars()
      .then((data:any) => setStars(data))
      .catch((err:any) => setError(err.message))
  }, [])

  // Klick → hämta systemdata
  const handleSelectStar = async (starId: number) => {
    setLoading(true)
    setError(null)
    try {
      const system = await fetchSystem(starId)  as any
      setSelectedSystem(system)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (selectedSystem) {
    return <ExoplanetSystem system={selectedSystem} />
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Välj ett planetsystem</h1>
      {loading && <p>Laddar...</p>}
      {error && <p style={{ color: "red" }}>Fel: {error}</p>}
      <ul>
        {stars.map((star) => (
          <li key={star.id}>
            <button onClick={() => handleSelectStar(star.id)}>
              {star.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App