import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getPokemons } from '../../services/pokemonService';
import { parsedPokemonResults } from '../../test/mocks/parsedPokemonResults';
import { App } from './App';

jest.mock('../../services/pokemonService');

const mockGetPokemons = getPokemons as jest.Mock;

describe('App', () => {
  it('renders correctly', async () => {
    mockGetPokemons.mockResolvedValueOnce(parsedPokemonResults);

    render(<App />)

    await waitFor(() => expect(mockGetPokemons).toHaveBeenCalled());

    // Check if pokemons are displayed
    expect(await screen.findByText(/bulbasaur/)).toBeInTheDocument();

    // Add to favorite
    const [addToFavorite1, addToFavorite2] = screen.getAllByText(/favorite/i);

    expect(addToFavorite1).toBeInTheDocument()
    expect(addToFavorite2).toBeInTheDocument()

    userEvent.click(addToFavorite1);
    userEvent.click(addToFavorite2);

    // Remove from favorites
    const [removeFromFavorites1] = screen.getAllByText(/Remove from favorites/i)

    expect(removeFromFavorites1).toBeInTheDocument();

    userEvent.click(removeFromFavorites1);

    // Navigate to favorites tab
    const favoritesTab = screen.getByText('Favorite');

    expect(favoritesTab).toBeInTheDocument();

    userEvent.click(favoritesTab);

    // Check if there's a favorite pokemon
    // If lenght is 2, it means displayed on pokemon list and also on favorite list
    expect(screen.getAllByText(/ivysaur/i).length).toBe(2);
  })
})