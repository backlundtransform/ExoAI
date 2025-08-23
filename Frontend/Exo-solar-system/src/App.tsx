import React, { useState } from 'react'
import { systemData } from './Data'
import { ExoplanetSystem } from './ExoplanetSystem'

 const App: React.FC = () => {
  const [selectedSystemId, setSelectedSystemId] = useState<number | null>(null)

  if (selectedSystemId !== null) {
    const system = systemData.find(s => s.id === selectedSystemId)
    if (!system) return null
    return <ExoplanetSystem system={system} />
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Välj ett planetsystem</h1>
      <ul>
        {systemData.map(system => (
          <li key={system.id}>
            <button onClick={() => setSelectedSystemId(system.id)}>{system.name}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default App