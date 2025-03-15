import { PokemonService } from '@/modules/pokemon/infra/services/pokemon.service';
import { createHttpService } from '@/modules/common/infra/factories/http-service.factory';

export function createPokemonService(baseUrl: string) {
  const httpService = createHttpService(baseUrl);

  return new PokemonService(httpService);
}

export const pokemonService = createPokemonService(process.env.NEXT_PUBLIC_POKEMON_API_URL!);
