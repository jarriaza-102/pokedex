import { useCallback, useState } from 'react';
import { getPokemons } from '../services/pokemonService';
import { PokemonResults } from '../types/Pokemon';
import { RequestStatus } from '../types/Request';

export function usePokemonList() {
  const [pokemonResult, setPokemonResult] = useState<PokemonResults | null>()
  const [pokemonStatus, setPokemonStatus] = useState<RequestStatus>(RequestStatus.Initial)

  const isLoading = pokemonStatus === RequestStatus.Pending
  const hasError = pokemonStatus === RequestStatus.Error
  const isCompleted = pokemonStatus === RequestStatus.Success

  const fetchPokemons = useCallback(async (limit: number = 20, offset: number = 0) => {
    setPokemonStatus(RequestStatus.Pending)

    try {
      const pokemonResponse = await getPokemons(limit, offset)
      
      setPokemonResult(pokemonResponse)
      setPokemonStatus(RequestStatus.Success)
    } catch (error) {
      setPokemonStatus(RequestStatus.Error)

      throw error
    }

  }, [])

  return {
    pokemonResult,
    pokemonStatus,
    isLoading,
    hasError,
    isCompleted,
    fetchPokemons,
  }
}