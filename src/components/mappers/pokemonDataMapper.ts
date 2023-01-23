import { Pokemon, Sprites } from '../../types/Pokemon'

type RawSprites = {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
}

export type RawPokemon = {
  base_experience: number
  height: number
  id: number
  is_default: boolean
  location_area_encounters: string
  name: string
  order: number
  sprites: RawSprites
  weight: number
}

function mapApiToSprites(rawSprites: RawSprites): Sprites {
  return {
    backDefault: rawSprites.back_default,
    backShiny: rawSprites.back_shiny,
    frontDefault: rawSprites.front_default,
    frontShiny: rawSprites.back_shiny,
  }
}

export function mapApiToPokemon(rawPokemon: RawPokemon): Pokemon {
  const sprites = mapApiToSprites(rawPokemon.sprites)

  return {
    baseExperience: rawPokemon.base_experience,
    height: rawPokemon.height,
    id: rawPokemon.id,
    isDefault: rawPokemon.is_default,
    locationAreaEncounters: rawPokemon.location_area_encounters,
    name: rawPokemon.name,
    order: rawPokemon.order,
    weight: rawPokemon.weight,
    sprites,
  }
}