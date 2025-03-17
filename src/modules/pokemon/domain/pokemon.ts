import { PokemonNameUrl } from '@/modules/pokemon/domain/pokemon-name-url';
import { PokemonSprites } from '@/modules/pokemon/domain/pokemon-sprites';
import { PokemonType } from '@/modules/pokemon/domain/pokemon-type';

export type Pokemon = {
  moves: Array<PokemonNameUrl>;
  types: Array<PokemonType>;
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
