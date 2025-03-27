import { PokemonNameUrl } from '@/modules/pokemon/domain/pokemon-name-url';
import { AbilityEffect } from '@/modules/pokemon/domain/ability/ability-effect';
import { PokemonListItem } from '@/modules/pokemon/domain/pokemon-page';

export type PokemonAbility = {
  id: number;
  name: string;
  effectEntries: Array<AbilityEffect>;
  pokemonsWithAbility: Array<PokemonListItem>;
};

export type PokemonAbilityItem = {
  isHidden: boolean;
  slot: number;
  ability: PokemonNameUrl;
};
