import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PokemonItem, PokemonItemProps } from './PokemonItem';

describe('PokemonItem', () => {
  function setup(customProps: Partial<PokemonItemProps> = {}) {
    const props = {
      name: 'Pikachu',
      isFavorite: false,
      toggleFavorite: jest.fn(),
      ...customProps,
    };

    render(<PokemonItem {...props} />);
  }

  it('renders non-favorite correctly', () => {
    setup()

    expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
    expect(screen.getByText(/add to favorites/i)).toBeInTheDocument()
  });

  it('renders favorite correctly', () => {
    const handleToggleFavorite = jest.fn();

    setup({
      isFavorite: true,
      toggleFavorite: handleToggleFavorite,
    })

    expect(screen.getByText(/pikachu/i)).toBeInTheDocument();

    const removeAction = screen.getByText(/remove from favorites/i)

    expect(removeAction).toBeInTheDocument()

    userEvent.click(removeAction)
    
    expect(handleToggleFavorite).toHaveBeenCalledWith('Pikachu')
  });
});
