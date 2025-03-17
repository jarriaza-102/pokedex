import { PokemonListView } from '@/modules/pokemon/ui/components/PokemonListView';
import { getPokemonList } from '@/modules/pokemon/infra/actions/pokemon.actions';

export default async function Home() {
  const pokemonPage = await getPokemonList();

  return <PokemonListView pokemonPage={pokemonPage} />;
}
