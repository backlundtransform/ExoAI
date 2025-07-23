interface StarProps {
    radius: number
    spectralType:string
  }
  
                 
  const EARTH_RADIUS_UNITS = 0.1           
  const SOLAR_RADIUS_IN_EARTH_RADII = 109 
  

const scaleSolarRadiusToUnits = (radiusSolarRadii: number) =>
  radiusSolarRadii * SOLAR_RADIUS_IN_EARTH_RADII * EARTH_RADIUS_UNITS


  export const Star: React.FC<StarProps> = ({ radius, spectralType }) => {
    const scaledRadius = scaleSolarRadiusToUnits(radius)
    const color = getStarColor(spectralType)
  
    return (
      <mesh>
        <sphereGeometry args={[scaledRadius, 64, 64]} />
        <meshStandardMaterial
          emissive={color}
          emissiveIntensity={1.5}
          color={color}
        />
      </mesh>
    )
  }

function getStarColor(spectralType: string): string {
    const type = spectralType?.charAt(0).toUpperCase()
    switch (type) {
      case 'O': return '#9bb0ff' // blå
      case 'B': return '#aabfff' // blå-vit
      case 'A': return '#cad7ff' // vit
      case 'F': return '#f8f7ff' // gul-vit
      case 'G': return '#fff4ea' // gul (som solen)
      case 'K': return '#ffd2a1' // orange
      case 'M': return '#ffcc6f' // röd
      default: return 'white'
    }
  }
