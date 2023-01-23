import { useEffect, useState } from 'react';
import { usePokemonList } from '../../hooks/usePokemonList';
import {
  PokemonItemWrapper,
  PaginationWrapper,
  PokemonListWrapper,
} from './PokemonList.styles';

import { Pagination } from '../Pagination/Pagination';
import { PokemonInfo } from '../PokemonInfo/PokemonInfo';
import { useFavorite } from '../../context/Favorite/useFavorite';
import { PokemonItem } from '../PokemonItem/PokemonItem';

export const ROWS_PER_PAGE = 20;

export function PokemonList() {
  const { pokemons, toggleFavorite } = useFavorite();
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
    return (
      <PokemonListWrapper>
        <h1>Loading...</h1>
      </PokemonListWrapper>
    );
  }

  if (hasError) {
    return (
      <PokemonListWrapper>
        <h1>Error...</h1>
      </PokemonListWrapper>
    );
  }

  if (!pokemonResult || !pokemonResult.results) {
    return (
      <PokemonListWrapper>
        <h1>No data</h1>
      </PokemonListWrapper>
    );
  }

  return (
    <PokemonListWrapper>
      {pokemonResult.results.map((pokemonResult, index) => {
        const isFavorite = Boolean(
          pokemons.find((pokemon) => pokemonResult.name === pokemon)
        );

        return (
          <PokemonItemWrapper
            key={pokemonResult.name}
            onClick={() =>
              setExpandedItem((currIndex) =>
                index === currIndex ? null : index
              )
            }
          >
            <PokemonItem name={pokemonResult.name} isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
            {expandedItem === index && (
              <PokemonInfo pokemonName={pokemonResult.name} />
            )}
          </PokemonItemWrapper>
        );
      })}
      <PaginationWrapper>
        <Pagination
          currentPage={currentPage}
          rowsPerPage={ROWS_PER_PAGE}
          totalItems={pokemonResult.count}
          onPageChange={handlePageChange}
        />
      </PaginationWrapper>
    </PokemonListWrapper>
  );
}
