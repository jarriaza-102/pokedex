import { Skeleton } from '@mui/material';

export function PokemonListItemSkeleton() {
  return (
    <>
      <Skeleton variant="rectangular" height={75} />
      <Skeleton animation="wave" height={30} />
      <Skeleton animation="wave" height={30} />
      <Skeleton animation="wave" height={30} />
    </>
  );
}
