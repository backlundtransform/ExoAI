export interface PlanetData {
    id: number
    name: string
    nameKepler: string | null
    nameKOI: string | null
    zoneClass: string | null
    massClass: string
    compositionClass: string
    atmosphereClass: string | null
    habitableClass: string | null
    minMass: number | null
    mass: number | null
    maxMass: number | null
    radius: number  
    density: number | null
    gravity: number | null
    escVel: number | null
    sFluxMin: number | null
    sFluxMean: number | null
    sFluxMax: number | null
    teqMin: number | null
    teqMean: number | null
    teqMax: number | null
    tsMin: number | null
    tsMean: number | null
    tsMax: number | null
    surfPress: number | null
    mag: number | null
    apparSize: number | null
    period: number  
    semMajorAxis: number | null
    eccentricity: number | null
    meanDistance: number  
    inclination: number | null
    omega: number | null
    hzd: number | null
    hzc: number | null
    hza: number | null
    hzi: number | null
    sph: number | null
    intEsi: number | null
    surfEsi: number | null
    esi: number | null
    habitable: boolean
    habMoon: boolean | null
    confirmed: boolean | null
    disc_Method: string | null
    disc_Year: number | null
    message: string | null
  }
  
  export  interface SystemData {
    name: string
    radius: number
   type: string
    habZoneMin: number
    habZoneMax: number
    planets: PlanetData[]
  }