import { PokemonService } from '@/modules/pokemon/infra/services/pokemon.service';
import { pokemonHttpService } from '@/modules/common/infra/factories/http-service.factory';
import { HttpService } from '@/modules/common/infra/services/http.service';

export function createPokemonService(httpService: HttpService) {
  return new PokemonService(httpService);
}

export const pokemonService = createPokemonService(pokemonHttpService);
