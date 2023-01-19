export type PokemonResult = {
  name: string
  url: string
}

export type PokemonResults = {
  count: number
  next?: string
  previous?: string
  results?: Array<PokemonResult>
}