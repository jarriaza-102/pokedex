import { PokemonSprites } from '@/modules/pokemon/domain/pokemon-sprites';
import { PokemonAbilityItem } from '@/modules/pokemon/domain/ability/pokemon-ability';

export type Pokemon = {
  abilities: Array<PokemonAbilityItem>;
  sprites: PokemonSprites;
  baseExperience: number;
  height: number;
  id: number;
  isDefault: boolean;
  locationAreaEncounters: string;
  name: string;
  order: number;
  weight: number;
};
