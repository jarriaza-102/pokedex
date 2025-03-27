import dynamic from 'next/dynamic';
import { Pokemon } from '@/modules/pokemon/domain/pokemon';
import { Stack, Typography } from '@mui/material';
import { AsyncLoader } from '@/modules/common/ui/components/AsyncLoader';
const PokemonAbilityList = dynamic(() =>
  import('../PokemonAbilityList').then((component) => component.PokemonAbilityList)
);

export type PokemonViewProps = {
  pokemon: Pokemon;
};

export function PokemonView({ pokemon }: PokemonViewProps) {
  return (
    <Stack spacing={1}>
      <h1>Pokemon information goes here</h1>
      <Stack spacing={2}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            textTransform: 'capitalize',
          }}
        >
          Abilities
        </Typography>
        <AsyncLoader.Suspense>
          <PokemonAbilityList pokemonAbilities={pokemon.abilities} />
        </AsyncLoader.Suspense>
      </Stack>
    </Stack>
  );
}
