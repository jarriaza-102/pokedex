'use client';

import React, { Suspense } from 'react';
import Grid from '@mui/material/Grid2';

import { PokemonListItem as PokemonListItemType } from '@/modules/pokemon/domain/pokemon-page';
import { PokemonListItem } from '../PokemonListItem';
import { ErrorBoundary } from 'react-error-boundary';
import { Card } from '@mui/material';

export type PokemonListProps = {
  pokemonList: Array<PokemonListItemType>;
};

export function PokemonList({ pokemonList }: PokemonListProps) {
  return (
    <Grid spacing={1} container>
      {pokemonList.map((pokemon) => (
        <Grid
          key={pokemon.name}
          size={{
            md: 4,
            sm: 12,
          }}
        >
          <ErrorBoundary fallback={<h2>Could not fetch pokemon.</h2>}>
            <Suspense fallback={<Card>Loading...</Card>}>
              <PokemonListItem pokemonName={pokemon.name} />
            </Suspense>
          </ErrorBoundary>
        </Grid>
      ))}
    </Grid>
  );
}
