import { Pokemon } from '@/modules/pokemon/domain/pokemon';
import { PokemonNameUrl } from '@/modules/pokemon/domain/pokemon-name-url';
import { PokemonType } from '@/modules/pokemon/domain/pokemon-type';
import { PokemonSprites } from '@/modules/pokemon/domain/pokemon-sprites';
import { PokemonPage } from '@/modules/pokemon/domain/pokemon-page';

type RawNameUrl = {
  name: string;
  url: string;
};

type RawType = {
  slot: number;
  type: RawNameUrl;
};

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

export type RawPokemon = {
  moves: Array<RawNameUrl>;
  types: Array<RawType>;
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

function mapToPokemonNameUrl(rawNameUrl: RawNameUrl): PokemonNameUrl {
  return {
    name: rawNameUrl.name,
    url: rawNameUrl.url,
  };
}

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

function mapToPokemonType(rawTypes: Array<RawType>): Array<PokemonType> {
  return rawTypes.map((rawType) => ({
    slot: rawType.slot,
    type: mapToPokemonNameUrl(rawType.type),
  }));
}

function mapToPokemonMoves(rawMoves: Array<RawNameUrl>): Array<PokemonNameUrl> {
  return rawMoves.map(mapToPokemonNameUrl);
}

export function mapRawPokemonToPokemon(rawPokemon: RawPokemon): Pokemon {
  return {
    moves: mapToPokemonMoves(rawPokemon.moves),
    types: mapToPokemonType(rawPokemon.types),
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
