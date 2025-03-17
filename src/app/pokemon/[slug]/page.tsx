import { getPokemonByName } from '@/modules/pokemon/infra/actions/pokemon.actions';
import { Stack } from '@mui/material';
import { PokemonMoveList } from '@/modules/pokemon/ui/components/PokemonMoveList';
import { Suspense } from 'react';

export type PokemonDetailsProps = {
  params: Promise<Record<string, string>>;
};

export default async function PokemonDetails({ params }: PokemonDetailsProps) {
  const { slug } = await params;
  const pokemon = await getPokemonByName(slug);

  return (
    <Stack spacing={1}>
      <h1>Pokemon information goes here</h1>
      <Stack spacing={1} direction="row">
        <Suspense fallback={<h1>Loading...</h1>}>
          <PokemonMoveList pokemonMoves={pokemon.moves} />
        </Suspense>
        <h1>Pokemon Types</h1>
      </Stack>
    </Stack>
  );
}
