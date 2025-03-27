import { HttpService } from '@/modules/common/infra/services/http.service';
import { Pokemon } from '@/modules/pokemon/domain/pokemon';
import {
  mapRawPokemonListItemToPokemonListItem,
  mapRawPokemonToPokemon,
  RawPokemon,
  RawPokemonPage,
} from '@/modules/pokemon/infra/mappers/pokemon.mapper';
import { POKEMON_PAGE_LIMIT, PokemonPage } from '@/modules/pokemon/domain/pokemon-page';
import { PokemonAbility } from '@/modules/pokemon/domain/ability/pokemon-ability';
import {
  mapRawPokemonAbilityToPokemonAbility,
  RawPokemonAbility,
} from '@/modules/pokemon/infra/mappers/pokemon-ability.mapper';

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

  async getPokemonAbility(pokemonAbility: string): Promise<PokemonAbility> {
    const data = await this.httpService.get<RawPokemonAbility>(`/ability/${pokemonAbility}`);

    return mapRawPokemonAbilityToPokemonAbility(data);
  }
}
