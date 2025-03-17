'use client';

import React from 'react';
import Grid from '@mui/material/Grid2';

import { PokemonListItem as PokemonListItemType } from '@/modules/pokemon/domain/pokemon-page';
import { PokemonListItem } from '../PokemonListItem';
import { Pokemon } from '@/modules/pokemon/domain/pokemon';

export type PokemonListProps = {
  pokemonList: Array<PokemonListItemType>;
  onClick: (pokemon: Pokemon) => void;
};

export function PokemonList({ pokemonList, onClick }: PokemonListProps) {
  return (
    <Grid spacing={1} alignItems="stretch" container>
      {pokemonList.map((pokemon) => (
        <Grid
          key={pokemon.name}
          size={{
            md: 4,
            sm: 12,
          }}
        >
          <PokemonListItem pokemonName={pokemon.name} onClick={onClick} />
        </Grid>
      ))}
    </Grid>
  );
}
