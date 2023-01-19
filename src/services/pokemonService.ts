import axios from 'axios'
import { PokemonResults } from '../types/Pokemon'

const API_URL = 'https://pokeapi.co/api/v2'

export async function getPokemons(limit: number, offset: number): Promise<PokemonResults> {
  const endpoint = `${API_URL}/pokemon?limit=${limit}&offset=${offset}`

  const { data } = await axios.get(endpoint)

  return data
}