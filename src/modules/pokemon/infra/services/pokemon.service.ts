import { HttpService } from '@/modules/common/infra/services/http.service';
import { Pokemon } from '@/modules/pokemon/domain/pokemon';
import {
  mapRawPokemonListItemToPokemonListItem,
  mapRawPokemonToPokemon,
  RawPokemon,
  RawPokemonPage,
} from '@/modules/pokemon/infra/mappers/pokemon.mapper';
import { POKEMON_PAGE_LIMIT, PokemonPage } from '@/modules/pokemon/domain/pokemon-page';

export class PokemonService {
  private readonly basePathname = '/pokemon';

  constructor(private readonly httpService: HttpService) {}

  async getPokemonList(offset: number = 0, limit = POKEMON_PAGE_LIMIT): Promise<PokemonPage> {
    const data = await this.httpService.get<RawPokemonPage>(this.basePathname, {
      params: {
        offset,
        limit,
      },
    });

    return mapRawPokemonListItemToPokemonListItem(data);
  }

  async getPokemon(pokemonName: string): Promise<Pokemon> {
    const data = await this.httpService.get<RawPokemon>(`${this.basePathname}/${pokemonName}`);

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(mapRawPokemonToPokemon(data)), 1500);
    });

    return mapRawPokemonToPokemon(data);
  }
}
