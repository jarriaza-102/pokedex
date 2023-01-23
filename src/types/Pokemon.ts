export type PokemonResult = {
  name: string
  url: string
}

export type PokemonResults = {
  count: number
  next?: string
  previous: string | null
  results?: Array<PokemonResult>
}

export type Sprites = {
  backDefault?: string
  backShiny?: string
  frontDefault?: string
  frontShiny?: string
}

export type Pokemon = {
  baseExperience: number
  height: number
  id: number
  isDefault: boolean
  locationAreaEncounters: string
  name: string
  order: number
  sprites: Sprites
  weight: number
}