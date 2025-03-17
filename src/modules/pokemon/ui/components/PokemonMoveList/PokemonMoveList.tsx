import { PokemonNameUrl } from '@/modules/pokemon/domain/pokemon-name-url';
import { PokemonMoveItem } from '@/modules/pokemon/ui/components/PokemonMoveItem';
import { Suspense } from 'react';

export type PokemonMovesProps = {
  pokemonMoves: Array<PokemonNameUrl>;
};

export function PokemonMoveList({ pokemonMoves }: PokemonMovesProps) {
  return (
    <>
      {pokemonMoves.slice(0, 10).map((pokemonMove) => (
        <Suspense key={pokemonMove.name} fallback={<h1>Loading...</h1>}>
          <PokemonMoveItem pokemonMove={pokemonMove} />
        </Suspense>
      ))}
    </>
  );
}
