import { getPokemonByName } from '@/modules/pokemon/infra/actions/pokemon.actions';

import { PokemonView } from '@/modules/pokemon/ui/components/PokemonView/PokemonView';

export type PokemonDetailsProps = {
  params: Promise<Record<string, string>>;
};

export default async function PokemonDetails({ params }: PokemonDetailsProps) {
  const { slug } = await params;
  const pokemon = await getPokemonByName(slug);

  return <PokemonView pokemon={pokemon} />;
}
