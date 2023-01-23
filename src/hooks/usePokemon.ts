import { useCallback, useState } from 'react';
import { getPokemonByName } from '../services/pokemonService';
import { Pokemon } from '../types/Pokemon';
import { RequestStatus } from '../types/Request';

export function usePokemon() {
  const [pokemon, setPokemon] = useState<null | Pokemon>()
  const [pokemonStatus, setPokemonStatus] = useState<RequestStatus>(RequestStatus.Initial)

  const isLoading = pokemonStatus === RequestStatus.Pending
  const hasError = pokemonStatus === RequestStatus.Error
  const isCompleted = pokemonStatus === RequestStatus.Success

  const fetchPokemonByName = useCallback(async (name: string) => {
    setPokemonStatus(RequestStatus.Pending)

    try {
      const pokemonResult = await getPokemonByName(name)

      setPokemon(pokemonResult)
      setPokemonStatus(RequestStatus.Success)
    } catch (error) {
      setPokemonStatus(RequestStatus.Error)

      throw error
    }
  }, [])

  return {
    pokemon,
    isLoading,
    hasError,
    isCompleted,
    fetchPokemonByName,
  }
}