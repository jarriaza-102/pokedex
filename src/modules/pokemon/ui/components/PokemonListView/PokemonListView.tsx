'use client';

import { PokemonList } from '@/modules/pokemon/ui/components/PokemonList';
import {
  getPageCount,
  POKEMON_PAGE_LIMIT,
  PokemonPage,
} from '@/modules/pokemon/domain/pokemon-page';
import { Stack } from '@mui/material';
import { Pagination } from '@/modules/common/ui/components/Pagination';
import { getPokemonList } from '@/modules/pokemon/infra/actions/pokemon.actions';
import { useMemo, useState } from 'react';
import { Pokemon } from '@/modules/pokemon/domain/pokemon';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/modules/common/domain/routes';

export type PokemonListViewProps = {
  pokemonPage: PokemonPage;
};

export function PokemonListView({ pokemonPage }: PokemonListViewProps) {
  const [currentPage, setCurrentPage] = useState<PokemonPage>(pokemonPage);
  const router = useRouter();

  const pageCount = useMemo(() => getPageCount(currentPage), [currentPage]);

  async function handlePageChange(page: number) {
    const newPokemonPage = await getPokemonList(page * POKEMON_PAGE_LIMIT);

    setCurrentPage(newPokemonPage);
  }

  function handlePokemonClick({ name }: Pokemon) {
    router.push(ROUTES.pokemon(name));
  }

  return (
    <Stack spacing={1}>
      <PokemonList pokemonList={currentPage.results} onClick={handlePokemonClick} />
      <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
    </Stack>
  );
}
