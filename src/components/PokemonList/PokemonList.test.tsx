import { screen } from '@testing-library/react';
import { PokemonList } from './PokemonList';
import { getPokemonByName, getPokemons } from '../../services/pokemonService';
import { parsedPokemonResults } from '../../test/mocks/parsedPokemonResults';
import { withFavoriteProvider } from '../../test/utils/withFavoriteProvider';
import { parsedPokemon } from '../../test/mocks/parsedPokemon';
import userEvent from '@testing-library/user-event';

jest.mock('../../services/pokemonService');

const mockGetPokemons = getPokemons as jest.Mock;
const mockGetPokemonByName = getPokemonByName as jest.Mock;

describe('PokemonList', () => {
  function setup(toggleFavorite = jest.fn()) {
    withFavoriteProvider(<PokemonList />, {
      contextValue: {
        pokemons: [],
        toggleFavorite,
      },
    });
  }

  it('renders error state', async () => {
    mockGetPokemons.mockRejectedValueOnce('error');

    setup();

    // Check if error state is displayed
    expect(await screen.findByText(/Error/i)).toBeInTheDocument();
  });

  it('renders empty state', async () => {
    mockGetPokemons.mockResolvedValueOnce([]);

    setup();

    // Check if error state is displayed
    expect(await screen.findByText(/No data/i)).toBeInTheDocument();
  });

  it('renders pokemon list', async () => {
    mockGetPokemons.mockResolvedValue(parsedPokemonResults);
    mockGetPokemonByName.mockResolvedValueOnce(parsedPokemon);

    const handleToggleFavorite = jest.fn();

    setup(handleToggleFavorite);

    // Check if loading state is displayed
    expect(await screen.findByText(/Loading/i)).toBeInTheDocument();

    // Check if results are displayed
    const pokemonItem = await screen.findByText(/bulbasaur/i);

    expect(pokemonItem).toBeInTheDocument();

    // Click on pokemon item to expand results
    userEvent.click(pokemonItem);

    // Check if item is loading
    expect(await screen.findByText(/loading bulbasaur/i)).toBeInTheDocument();

    expect(mockGetPokemonByName).toHaveBeenCalledWith('bulbasaur');

    // Check if extra information is displayed
    expect(await screen.findByText(/Base Experience/i)).toBeInTheDocument();

    // Add favorite for bulbasaur
    const addFavorite = screen.getAllByText(/add to favorites/i)[0]

    expect(addFavorite).toBeInTheDocument()

    userEvent.click(addFavorite)

    expect(handleToggleFavorite).toHaveBeenCalledWith('bulbasaur')

    // Check if pagination is displayed
    const page10 = screen.getByText(10)

    expect(page10).toBeInTheDocument()

    // Handle page change
    userEvent.click(page10)

    // Check if loading state is displayed
    expect(await screen.findByText(/Loading/i)).toBeInTheDocument();

    expect(mockGetPokemons).toHaveBeenCalledTimes(2)

    // Check if results are displayed
    expect(await screen.findByText(/bulbasaur/i)).toBeInTheDocument();

    // Check if page 1 is not displayed in the page list (first item should be page 7)
    const page1 = screen.queryByText(1)

    expect(page1).not.toBeInTheDocument()
  });
});
