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
  constructor(private readonly httpService: HttpService) {}

  async getPokemonList(offset: number = 0, limit = POKEMON_PAGE_LIMIT): Promise<PokemonPage> {
    const data = await this.httpService.get<RawPokemonPage>('/pokemon', {
      params: {
        offset,
        limit,
      },
    });

    return mapRawPokemonListItemToPokemonListItem(data);
  }

  async getPokemon(pokemonName: string): Promise<Pokemon> {
    const data = await this.httpService.get<RawPokemon>(`pokemon/${pokemonName}`);

    return mapRawPokemonToPokemon(data);
  }

  async getPokemonMove(pokemonMove: string): Promise<any> {
    await this.httpService.get<RawPokemon>(`/move/${pokemonMove}`);
  }
}
