import { useTexture } from '@react-three/drei'
import { useMemo } from 'react'
import * as THREE from 'three'
import type { PlanetData } from './types'

export function usePlanetMaterial(planet: PlanetData) {
  const textureKey = `${planet.zoneClass}_${planet.massClass}_${planet.compositionClass?planet.compositionClass:'rocky-water'}`.toLowerCase()
  const textureMap = useTexture(`/textures/${textureKey}.png`) 

  return useMemo(() => {
    const color = getColorByMassClass(planet.massClass?planet.massClass:'', planet.esi ?? 0)
    const metalness = getMetalness(planet.compositionClass?planet.compositionClass:'rocky-water')
    const roughness = getRoughness(planet.compositionClass?planet.compositionClass:'rocky-water')
    const emissive = planet.esi && planet.esi > 0.8 ? 'green' : 'black'
    const emissiveIntensity = planet.esi && planet.esi > 0.8 ? 0.2 : 0

    return new THREE.MeshStandardMaterial({
      color,
      map: textureMap,
      metalness,
      roughness,
      emissive,
      emissiveIntensity,
    })
  }, [planet, textureMap])
}

function getColorByMassClass(massClass: string, esi?: number): string {
    switch (massClass?.toLowerCase()) {
      case 'terran': return esi && esi > 0.8 ? '#66cc66' : '#3366cc' 
      case 'neptunian': return '#99ccff'
      case 'jovian': return '#ff9933'
      default: return '#999999'
    }
  }
  
  function getMetalness(composition: string): number {
    switch (composition?.toLowerCase()) {
      case 'iron': return 0.8
      case 'rock': return 0.5
      case 'ice': return 0.2
      case 'gas': return 0.1
      default: return 0.3
    }
  }
  
  function getRoughness(composition: string): number {
    switch (composition?.toLowerCase()) {
      case 'ice': return 0.6
      case 'rock': return 0.5
      case 'iron': return 0.4
      case 'gas': return 0.9
      default: return 0.7
    }
  }