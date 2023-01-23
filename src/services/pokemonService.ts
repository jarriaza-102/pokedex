import axios from 'axios'
import { mapApiToPokemon, RawPokemon } from '../components/mappers/pokemonDataMapper'
import { Pokemon, PokemonResults } from '../types/Pokemon'

const API_URL = 'https://pokeapi.co/api/v2'

export async function getPokemons(limit: number, offset: number): Promise<PokemonResults> {
  const endpoint = `${API_URL}/pokemon?limit=${limit}&offset=${offset}`

  const { data } = await axios.get(endpoint)

  return data
}

export async function getPokemonByName(name: string): Promise<Pokemon> {
  const endpoint = `${API_URL}/pokemon/${name}`

  const { data } = await axios.get<RawPokemon>(endpoint)

  return mapApiToPokemon(data)
}