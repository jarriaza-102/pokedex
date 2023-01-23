import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getPokemonByName } from '../../services/pokemonService';
import { parsedPokemon } from '../../test/mocks/parsedPokemon';
import { withFavoriteProvider } from '../../test/utils/withFavoriteProvider';
import { FavoritePokemons } from './FavoritePokemons';

jest.mock('../../services/pokemonService');

const mockGetPokemonByName = getPokemonByName as jest.Mock;

describe('FavoritePokemons', () => {
  function setup(contextValue = {}) {
    withFavoriteProvider(<FavoritePokemons />, {
      contextValue: {
        pokemons: [],
        toggleFavorite: jest.fn(),
        ...contextValue,
      },
    });
  }

  it('renders no pokemons', () => {
    setup();

    expect(
      screen.getByText(/There are no favorite pokemons/i)
    ).toBeInTheDocument();
  });

  it('renders favorite pokemons', async () => {
    mockGetPokemonByName.mockResolvedValueOnce(parsedPokemon);

    const handleToggleFavorite = jest.fn();

    setup({
      pokemons: ['bulbasaur', 'pikachu'],
      toggleFavorite: handleToggleFavorite,
    });

    // Check if favorite pokemons are displayed
    const bulbasaurPokemon = screen.getByText(/bulbasaur/i);

    expect(bulbasaurPokemon).toBeInTheDocument();
    expect(screen.getByText(/pikachu/i)).toBeInTheDocument();


    // Check if detailed information is shown
    userEvent.click(bulbasaurPokemon)

    expect(await screen.findByText(/loading bulbasaur/i)).toBeInTheDocument()

    expect(await screen.findByText(/Base Experience/i)).toBeInTheDocument()

    // Remove from favorites
    const removeFromFavorite = screen.getAllByText(/remove from favorite/i)[0]

    expect(removeFromFavorite).toBeInTheDocument();

    userEvent.click(removeFromFavorite)

    expect(handleToggleFavorite).toHaveBeenCalledWith('bulbasaur');
  });
});
