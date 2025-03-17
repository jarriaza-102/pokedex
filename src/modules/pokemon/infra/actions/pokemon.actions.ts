'use server';

import { pokemonService } from '@/modules/pokemon/infra/factories/pokemon-service.factory';

export async function getPokemonList(offset: number = 0, limit?: number) {
  return pokemonService.getPokemonList(offset, limit);
}

export async function getPokemonByName(name: string) {
  return pokemonService.getPokemon(name);
}

export async function getPokemonMove(move: string) {
  return pokemonService.getPokemonMove(move);
}
