import { Pokemon } from '@/modules/pokemon/domain/pokemon';
import { PokemonNameUrl } from '@/modules/pokemon/domain/pokemon-name-url';
import { PokemonAbilityItem } from '@/modules/pokemon/domain/ability/pokemon-ability';
import { PokemonSprites } from '@/modules/pokemon/domain/pokemon-sprites';
import { PokemonPage } from '@/modules/pokemon/domain/pokemon-page';
import { mapToPokemonNameUrl, RawNameUrl } from '@/modules/pokemon/infra/mappers/name-url.mapper';

type RawSprites = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
};

type RawAbility = {
  is_hidden: boolean;
  slot: number;
  ability: RawNameUrl;
};

export type RawPokemon = {
  abilities: Array<RawAbility>;
  sprites: RawSprites;
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  name: string;
  order: number;
  weight: number;
};

export type RawPokemonPage = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<RawNameUrl>;
};

function mapToPokemonSprites(rawSprites: RawSprites): PokemonSprites {
  return {
    backDefault: rawSprites.back_default,
    backFemale: rawSprites.back_female,
    backShiny: rawSprites.back_shiny,
    backShinyFemale: rawSprites.back_shiny_female,
    frontDefault: rawSprites.front_default,
    frontFemale: rawSprites.front_female,
    frontShiny: rawSprites.front_shiny,
    frontShinyFemale: rawSprites.front_shiny_female,
  };
}

function mapToPokemonAbility(rawAbilities: Array<RawAbility>): Array<PokemonAbilityItem> {
  return rawAbilities.map((rawAbility) => ({
    slot: rawAbility.slot,
    isHidden: rawAbility.is_hidden,
    ability: mapToPokemonNameUrl(rawAbility.ability),
  }));
}

function mapToPokemonForms(rawForms: Array<RawNameUrl>): Array<PokemonNameUrl> {
  return rawForms.map(mapToPokemonNameUrl);
}

export function mapRawPokemonToPokemon(rawPokemon: RawPokemon): Pokemon {
  return {
    abilities: mapToPokemonAbility(rawPokemon.abilities),
    sprites: mapToPokemonSprites(rawPokemon.sprites),
    id: rawPokemon.id,
    name: rawPokemon.name,
    baseExperience: rawPokemon.base_experience,
    height: rawPokemon.height,
    isDefault: rawPokemon.is_default,
    locationAreaEncounters: rawPokemon.location_area_encounters,
    order: rawPokemon.order,
    weight: rawPokemon.weight,
  };
}

export function mapRawPokemonListItemToPokemonListItem(
  rawPokemonListItem: RawPokemonPage
): PokemonPage {
  return {
    count: rawPokemonListItem.count,
    next: rawPokemonListItem.next,
    previous: rawPokemonListItem.previous,
    results: rawPokemonListItem.results.map(mapToPokemonNameUrl),
  };
}
