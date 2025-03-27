import { PokemonAbility } from '@/modules/pokemon/domain/ability/pokemon-ability';
import { AbilityEffect } from '@/modules/pokemon/domain/ability/ability-effect';
import { RawNameUrl } from '@/modules/pokemon/infra/mappers/name-url.mapper';
import { PokemonListItem } from '@/modules/pokemon/domain/pokemon-page';

type RawAbilityEffect = {
  effect: string;
  short_effect: string;
  language: RawNameUrl;
};

type Pokemon = {
  slot: number;
  is_hidden: boolean;
  pokemon: RawNameUrl;
};

export type RawPokemonAbility = {
  id: number;
  name: string;
  effect_entries: Array<RawAbilityEffect>;
  pokemon: Array<Pokemon>;
};

function mapPokemon(rawPokemons: Array<Pokemon>): Array<PokemonListItem> {
  return rawPokemons.map((rawPokemon) => ({
    name: rawPokemon.pokemon.name,
    url: rawPokemon.pokemon.url,
  }));
}

function mapEffectEntries(rawPokemonAbilities: Array<RawAbilityEffect>): Array<AbilityEffect> {
  return rawPokemonAbilities.map((rawPokemonAbility) => ({
    effect: rawPokemonAbility.effect,
    shortEffect: rawPokemonAbility.short_effect,
    language: rawPokemonAbility.language.name,
  }));
}

export function mapRawPokemonAbilityToPokemonAbility(
  rawPokemonAbility: RawPokemonAbility
): PokemonAbility {
  return {
    id: rawPokemonAbility.id,
    name: rawPokemonAbility.name,
    effectEntries: mapEffectEntries(rawPokemonAbility.effect_entries),
    pokemonsWithAbility: mapPokemon(rawPokemonAbility.pokemon),
  };
}
