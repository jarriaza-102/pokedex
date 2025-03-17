import { PokemonNameUrl } from '@/modules/pokemon/domain/pokemon-name-url';
import { getPokemonMove } from '@/modules/pokemon/infra/actions/pokemon.actions';

export type PokemonMoveItemProps = {
  pokemonMove: PokemonNameUrl;
};

export async function PokemonMoveItem({ pokemonMove }: PokemonMoveItemProps) {
  const data = pokemonMove.url.split('/');
  const move = await getPokemonMove(pokemonMove.name);

  return <h1>Hello world</h1>;
}
