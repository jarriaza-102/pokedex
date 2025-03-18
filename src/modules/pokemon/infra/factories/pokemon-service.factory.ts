import { PokemonService } from '@/modules/pokemon/infra/services/pokemon.service';
import {
  createHttpService,
  pokemonHttpService,
} from '@/modules/common/infra/factories/http-service.factory';
import { HttpService } from '@/modules/common/infra/services/http.service';

export function createPokemonService(baseUrl?: string) {
  let httpService = pokemonHttpService;

  if (baseUrl) {
    createHttpService(baseUrl);
  }

  return new PokemonService(httpService);
}

export const pokemonService = createPokemonService();
