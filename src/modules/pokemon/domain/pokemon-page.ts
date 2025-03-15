import { PokemonNameUrl } from '@/modules/pokemon/domain/pokemon-name-url';

export type PokemonListItem = PokemonNameUrl;

export type PokemonPage = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<PokemonListItem>;
};

export const POKEMON_PAGE_LIMIT = 20;

export function getPageCount(pokemonPage: PokemonPage) {
  return Math.ceil(pokemonPage.count / POKEMON_PAGE_LIMIT);
}
