'use client';

import { PokemonList } from '@/modules/pokemon/ui/components/PokemonList';
import {
  getPageCount,
  POKEMON_PAGE_LIMIT,
  PokemonPage,
} from '@/modules/pokemon/domain/pokemon-page';
import { SearchBar } from '@/modules/pokemon/ui/components/SearchBar';
import { Stack } from '@mui/material';
import { Pagination } from '@/modules/common/ui/components/Pagination';
import { getPokemonList } from '@/modules/pokemon/infra/actions/pokemon.actions';
import { useMemo, useState } from 'react';

export type PokemonListViewProps = {
  pokemonPage: PokemonPage;
};

export function PokemonListView({ pokemonPage }: PokemonListViewProps) {
  const [currentPage, setCurrentPage] = useState<PokemonPage>(pokemonPage);
  const pageCount = useMemo(() => getPageCount(currentPage), [currentPage]);

  async function handlePageChange(page: number) {
    const newPokemonPage = await getPokemonList(page * POKEMON_PAGE_LIMIT);

    setCurrentPage(newPokemonPage);
  }

  return (
    <Stack spacing={1}>
      <h1>Hello world</h1>
      <SearchBar />
      <PokemonList pokemonList={currentPage.results} />
      <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
    </Stack>
  );
}
