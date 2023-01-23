import { createContext, useContext, useState } from 'react';

type ContextType = {
  pokemons: Array<string>;
  toggleFavorite: (pokemon: string) => void;
};

const initialValue: ContextType = {
  pokemons: [],
  toggleFavorite: () => {},
};

const FavoriteContext = createContext(initialValue);

export function FavoriteProvider({ ...props }) {
  const [pokemons, setPokemons] = useState<Array<string>>([]);

  function toggleFavorite(pokemon: string) {
    setPokemons((currentList) => {
      const exists = Boolean(currentList.find((poke) => poke === pokemon));

      if (exists) {
        return [...currentList.filter((poke) => poke !== pokemon)];
      }

      return currentList.concat([pokemon]);
    });
  }

  const value = {
    pokemons,
    toggleFavorite,
  };

  return <FavoriteContext.Provider value={value} {...props} />;
}

export function useFavorite() {
  const context = useContext(FavoriteContext);

  if (context === undefined) {
    throw new Error(`useFavorite must be used within a FavoriteProvider`);
  }

  return context;
}
