import { render, screen } from '@testing-library/react';
import { getPokemonByName } from '../../services/pokemonService';
import { parsedPokemon } from '../../test/mocks/parsedPokemon';
import { PokemonInfo } from './PokemonInfo';

jest.mock('../../services/pokemonService');

const mockGetPokemonByName = getPokemonByName as jest.Mock;

describe('PokemonInfo', () => {
  function setup() {
    render(<PokemonInfo pokemonName='bulbasaur' />);
  }

  it('renders error state', async () => {
    mockGetPokemonByName.mockRejectedValueOnce('error');

    setup();

    expect(
      await screen.findByText(
        /There was an error fetching the bulbasaur information/i
      )
    ).toBeInTheDocument();
  });

  it('renders empty state', async () => {
    mockGetPokemonByName.mockResolvedValueOnce(null);

    setup();

    expect(
      await screen.findByText(/No information found for bulbasaur/i)
    ).toBeInTheDocument();
  });

  it('renders pokemon information with picture', async () => {
    mockGetPokemonByName.mockResolvedValueOnce(parsedPokemon);

    setup();

    expect(await screen.findByText(/Loading bulbasaur/i)).toBeInTheDocument();

    // Check if picture is displayed `pokemon.sprites.frontDefault`
    expect(await screen.findByRole('img')).toBeInTheDocument();

    expect(screen.getByText(/Base Experience/i)).toBeInTheDocument();
  });

  it('renders pokemon information without picture', async () => {
    mockGetPokemonByName.mockResolvedValueOnce(({
      ...parsedPokemon,
      sprites: {
        ...parsedPokemon.sprites,
        frontDefault: null,
      },
    }));

    setup();

    expect(await screen.findByText(/Loading bulbasaur/i)).toBeInTheDocument();

    expect(await screen.findByText(/Base Experience/i)).toBeInTheDocument();

    // Check if picture is displayed `sprites.frontDefault`
    expect(screen.queryByRole('img')).not.toBeInTheDocument();

  });
});
