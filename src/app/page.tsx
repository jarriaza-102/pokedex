import { PokemonListView } from '@/modules/pokemon/ui/components/PokemonListView';
// import { Suspense } from 'react';
import { getPokemonList } from '@/modules/pokemon/infra/actions/pokemon.actions';

export default async function Home() {
  const pokemonPage = await getPokemonList();

  return (
    <div>
      <main>
        {/*<Suspense fallback={<h1>Loading...</h1>}>*/}
        <PokemonListView pokemonPage={pokemonPage} />
        {/*</Suspense>*/}
      </main>
    </div>
  );
}
