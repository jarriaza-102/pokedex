'use client';

import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { pokemonService } from '@/modules/pokemon/infra/factories/pokemon-service.factory';
import Image from 'next/image';
import useSWR from 'swr';

export type PokemonListItemProps = {
  pokemonName: string;
};

export function PokemonListItem({ pokemonName }: PokemonListItemProps) {
  const { data } = useSWR(['pokemon', pokemonName], () => pokemonService.getPokemon(pokemonName), {
    suspense: true,
  });

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
            {/*{pokemonName}*/}
            {data?.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
