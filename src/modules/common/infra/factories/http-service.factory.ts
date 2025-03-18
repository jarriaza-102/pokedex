import { HttpService } from '@/modules/common/infra/services/http.service';

export function createHttpService(baseUrl: string) {
  return new HttpService(baseUrl);
}

export const pokemonHttpService = createHttpService(process.env.NEXT_PUBLIC_POKEMON_API_URL!);
