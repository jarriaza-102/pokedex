import { useEffect, useState } from 'react';
import { usePokemonList } from '../../hooks/usePokemonList';
import {
  Header,
  LogoWrapper,
  PokemonItemWrapper,
  PaginationWrapper,
  PokemonItemTitle,
} from './PokemonList.styles';

import logo from '../../assets/logo.png';
import { Input } from '../Form/Input/Input';
import { Pagination } from '../Pagination/Pagination';
import { PokemonInfo } from '../PokemonInfo/PokemonInfo';

export const ROWS_PER_PAGE = 20;

export function PokemonList() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [expandedItem, setExpandedItem] = useState<null | number>(null);
  const { pokemonResult, isLoading, hasError, fetchPokemons } =
    usePokemonList();

  function handlePageChange(newPage: number) {
    setCurrentPage(newPage);
  }

  useEffect(() => {
    async function getPokemons() {
      try {
        await fetchPokemons(ROWS_PER_PAGE, currentPage * ROWS_PER_PAGE);
      } catch {
        // doSomething
      }
    }

    setExpandedItem(null);
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
        {pokemonResult.results.map((pokemonResult, index) => (
          <PokemonItemWrapper key={pokemonResult.name} onClick={() => setExpandedItem(index)}>
            <PokemonItemTitle>
              {pokemonResult.name}
            </PokemonItemTitle>
            {expandedItem === index && <PokemonInfo pokemonName={pokemonResult.name} />}
          </PokemonItemWrapper>
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
