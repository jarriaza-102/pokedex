import { getPokemonAbility } from '@/modules/pokemon/infra/actions/pokemon.actions';
import { PokemonAbilityItem } from '@/modules/pokemon/domain/ability/pokemon-ability';
import { CardContent, Typography } from '@mui/material';
import { Card } from '@/modules/common/ui/components/Card';

export type PokemonMoveItemProps = {
  pokemonAbility: PokemonAbilityItem;
};

export async function PokemonAbilityListItem({ pokemonAbility }: PokemonMoveItemProps) {
  const ability = await getPokemonAbility(pokemonAbility.ability.name);
  const effect =
    ability.effectEntries.find((ability) => ability.language === 'en') ?? ability.effectEntries[0];

  return (
    <Card>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            textTransform: 'capitalize',
          }}
        >
          {ability.name}
        </Typography>
        <Typography gutterBottom variant="body1" component="p">
          {effect?.shortEffect}
        </Typography>
      </CardContent>
    </Card>
  );
}
