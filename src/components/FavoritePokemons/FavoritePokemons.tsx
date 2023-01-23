import { useState } from 'react';
import { useFavorite } from '../../context/Favorite/useFavorite';
import { PokemonInfo } from '../PokemonInfo/PokemonInfo';
import { PokemonItem } from '../PokemonItem/PokemonItem';
import { PokemonItemWrapper, Wrapper } from './FavoritePokemons.styles';

export function FavoritePokemons() {
  const { pokemons, toggleFavorite } = useFavorite();
  const [expandedItem, setExpandedItem] = useState<null | number>(null);

  if (pokemons.length === 0) {
    return (
      <Wrapper>
        <h1>There are no favorite pokemons</h1>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {pokemons.map((pokemon, index) => (
        <PokemonItemWrapper
          key={pokemon}
          onClick={() =>
            setExpandedItem((currIndex) => (index === currIndex ? null : index))
          }
        >
          <PokemonItem
            name={pokemon}
            toggleFavorite={toggleFavorite}
            isFavorite
          />
          {expandedItem === index && (
            <PokemonInfo pokemonName={pokemon} />
          )}
        </PokemonItemWrapper>
      ))}
    </Wrapper>
  );
}
