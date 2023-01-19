import { useEffect, useState } from 'react';
import { usePokemonList } from '../../hooks/usePokemonList';
import {
  Header,
  LogoWrapper,
  PokemonItem,
  PaginationWrapper,
} from './PokemonList.styles';

import logo from '../../assets/logo.png';
import { Input } from '../Form/Input/Input';
import { Pagination } from '../Pagination/Pagination';

export const ROWS_PER_PAGE = 20;

export function PokemonList() {
  const [currentPage, setCurrentPage] = useState(0);
  const { pokemonResult, isLoading, hasError, fetchPokemons } =
    usePokemonList();

  function handlePageChange(newPage: number) {
    setCurrentPage(newPage);
  }

  useEffect(() => {
    async function getPokemons() {
      try {
        await fetchPokemons(ROWS_PER_PAGE, currentPage * ROWS_PER_PAGE);
      } catch (error) {}
    }

    getPokemons();
  }, [currentPage, fetchPokemons]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (hasError) {
    return <h1>Error...</h1>;
  }

  if (!pokemonResult || !pokemonResult.results) {
    return <h1>No data</h1>;
  }

  return (
    <div>
      <Header>
        <LogoWrapper>
          <img src={logo} className='App-logo' alt='logo' />
        </LogoWrapper>
        <div>
          <Input type='text' />
        </div>
      </Header>
      <div>
        {pokemonResult.results.map((pokemonResult) => (
          <PokemonItem key={pokemonResult.name}>
            {pokemonResult.name}
          </PokemonItem>
        ))}
        <PaginationWrapper>
          <Pagination
            currentPage={currentPage}
            rowsPerPage={ROWS_PER_PAGE}
            totalItems={pokemonResult.count}
            onPageChange={handlePageChange}
          />
        </PaginationWrapper>
      </div>
    </div>
  );
}
