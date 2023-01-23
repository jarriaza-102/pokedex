import { useEffect } from 'react';
import { usePokemon } from '../../hooks/usePokemon';
import { Column, Row } from '../Theme/theme.styles';
import { Title, Wrapper } from './PokemonInfo.styles';

export type PokemonInfoProps = {
  pokemonName: string;
};

export function PokemonInfo({ pokemonName }: PokemonInfoProps) {
  const { isLoading, hasError, pokemon, fetchPokemonByName } = usePokemon();

  useEffect(() => {
    async function getPokemonByName() {
      try {
        await fetchPokemonByName(pokemonName);
      } catch {
        // doSomething
      }
    }

    getPokemonByName();
  }, [pokemonName, fetchPokemonByName]);

  if (isLoading) {
    return (
      <Wrapper>
        <h3>Loading {pokemonName}...</h3>
      </Wrapper>
    );
  }

  if (hasError) {
    return (
      <Wrapper>
        <h3>There was an error fetching the {pokemonName} information...</h3>
      </Wrapper>
    );
  }

  if (!pokemon) {
    return (
      <Wrapper>
        <h3>No information found for {pokemonName} :(</h3>
      </Wrapper>
    );
  }

  const hasPicture = Boolean(pokemon.sprites.frontDefault);

  return (
    <Wrapper>
      <Title>{pokemon.name}</Title>
      <div>
        <Row>
          {hasPicture && (
            <Column $size={3}>
              <img src={pokemon.sprites.frontDefault} alt={pokemon.name} />
            </Column>
          )}
          <Column $size={hasPicture ? 9 : 12}>
            <Row>
              <Column $size={5}>Base Experience</Column>
              <Column $size={7}>{pokemon.baseExperience}</Column>
            </Row>
            <Row>
              <Column $size={5}>Height</Column>
              <Column $size={7}>{pokemon.height}</Column>
            </Row>
            <Row>
              <Column $size={5}>Weight</Column>
              <Column $size={7}>{pokemon.weight}</Column>
            </Row>
          </Column>
        </Row>
      </div>
    </Wrapper>
  );
}
