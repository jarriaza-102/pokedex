import { PokemonAbilityListItem } from '../PokemonAbilityListItem';
import { AsyncLoader } from '@/modules/common/ui/components/AsyncLoader';
import Grid from '@mui/material/Grid2';
import { PokemonAbilityItem } from '@/modules/pokemon/domain/ability/pokemon-ability';

export type PokemonMovesProps = {
  pokemonAbilities: Array<PokemonAbilityItem>;
};

export function PokemonAbilityList({ pokemonAbilities }: PokemonMovesProps) {
  return (
    <Grid spacing={1} alignItems="stretch" container>
      {pokemonAbilities.map((pokemonAbility) => (
        <Grid
          key={pokemonAbility.slot}
          size={{
            md: 6,
            sm: 12,
          }}
        >
          <AsyncLoader.Suspense key={pokemonAbility.slot}>
            <PokemonAbilityListItem pokemonAbility={pokemonAbility} />
          </AsyncLoader.Suspense>
        </Grid>
      ))}
    </Grid>
  );
}
