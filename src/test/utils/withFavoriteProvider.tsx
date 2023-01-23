import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import {
  ContextType,
  FavoriteProvider,
} from '../../context/Favorite/useFavorite';

const defaultValue: ContextType = {
  pokemons: [],
  toggleFavorite: jest.fn(),
};

type RenderParams = {
  contextValue?: Partial<ContextType>;
};

export function withFavoriteProvider(
  ui: ReactElement,
  { contextValue = defaultValue }: RenderParams = {}
) {
  return render(ui, {
    wrapper: (props: any) => (
      <FavoriteProvider {...props} value={contextValue} />
    ),
  });
}
