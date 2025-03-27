import { PokemonNameUrl } from '@/modules/pokemon/domain/pokemon-name-url';

export type RawNameUrl = {
  name: string;
  url: string;
};

export function mapToPokemonNameUrl(rawNameUrl: RawNameUrl): PokemonNameUrl {
  return {
    name: rawNameUrl.name,
    url: rawNameUrl.url,
  };
}
