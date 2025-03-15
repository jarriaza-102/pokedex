'use client';

import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { pokemonService } from '@/modules/pokemon/infra/factories/pokemon-service.factory';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';

export type PokemonListItemProps = {
  pokemonName: string;
};

export function PokemonListItem({ pokemonName }: PokemonListItemProps) {
  const { data } = useQuery({
    queryKey: ['pokemon', pokemonName],
    queryFn: () => pokemonService.getPokemon(pokemonName),
    suspense: true,
  });
  const pokemonData = data!;

  return (
    <Card>
      <CardActionArea>
        <CardMedia>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/14.png"
            alt="Icono"
            height={25}
            width={25}
          />
        </CardMedia>
        <CardContent>
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
