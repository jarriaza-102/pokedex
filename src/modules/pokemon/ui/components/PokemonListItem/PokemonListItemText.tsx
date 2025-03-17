import { Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';

export type PokemonListItemTextProps = {
  title: string;
  body: ReactNode;
};

export function PokemonListItemText({ title, body }: PokemonListItemTextProps) {
  return (
    <Stack spacing={1} direction="row">
      <Typography
        gutterBottom
        variant="body1"
        component="div"
        sx={{
          textTransform: 'capitalize',
        }}
      >
        {title}
      </Typography>
      <Typography
        gutterBottom
        variant="body1"
        component="div"
        sx={{
          textTransform: 'capitalize',
        }}
      >
        {body}
      </Typography>
    </Stack>
  );
}
