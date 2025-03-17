'use client';

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';
import { pokemonService } from '@/modules/pokemon/infra/factories/pokemon-service.factory';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { PokemonListItemText } from '@/modules/pokemon/ui/components/PokemonListItem/PokemonListItemText';
import { PokemonListItemSkeleton } from '@/modules/pokemon/ui/components/PokemonListItem/PokemonListItemSkeleton';
import { AsyncLoader, AsyncLoaderError } from '@/modules/common/ui/components/AsyncLoader';
import { Pokemon } from '@/modules/pokemon/domain/pokemon';

export type PokemonListItemProps = {
  pokemonName: string;
  onClick: (pokemon: Pokemon) => void;
};

export function PokemonListItem({ pokemonName, onClick }: PokemonListItemProps) {
  const {
    data: pokemonData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['pokemon', pokemonName],
    queryFn: () => pokemonService.getPokemon(pokemonName),
    retry: false,
  });
  const pictures = useMemo<Array<string>>(() => {
    if (!pokemonData) {
      return [];
    }

    return Object.values(pokemonData.sprites).filter(
      (pokemonSprite) => !!pokemonSprite
    ) as Array<string>;
  }, [pokemonData]);

  function handleClick() {
    onClick(pokemonData!);
  }

  return (
    <Card
      sx={{
        height: '100%',
        minHeight: '200px',
      }}
    >
      <AsyncLoader
        isLoading={isLoading}
        isError={isError}
        loadingState={
          <CardContent>
            <PokemonListItemSkeleton />
          </CardContent>
        }
        errorState={
          <CardContent>
            <AsyncLoaderError onRetry={refetch} />
          </CardContent>
        }
      >
        {pokemonData ? (
          <CardActionArea
            sx={{
              height: '100%',
            }}
            onClick={handleClick}
          >
            <CardMedia>
              {pictures.map((picture) => (
                <Image key={picture} src={picture} alt="Icono" height={50} width={50} />
              ))}
            </CardMedia>
            <CardContent>
              <Stack spacing={1}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    textTransform: 'capitalize',
                  }}
                >
                  {pokemonData.name}
                </Typography>

                <PokemonListItemText title="Height:" body={pokemonData.height} />
                <PokemonListItemText title="Weigth:" body={pokemonData.weight} />
                <PokemonListItemText title="Base Experience:" body={pokemonData.baseExperience} />
              </Stack>
            </CardContent>
          </CardActionArea>
        ) : null}
      </AsyncLoader>
    </Card>
  );
}
