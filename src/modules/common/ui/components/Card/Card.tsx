import { Card as MuiCard, type CardOwnProps } from '@mui/material';
import { ReactNode } from 'react';

export type CardProps = CardOwnProps & {
  children: ReactNode;
};

export function Card({ children, ...rest }: CardProps) {
  return (
    <MuiCard
      {...rest}
      sx={{
        height: '100%',
        minHeight: '200px',
        ...rest?.sx,
      }}
    >
      {children}
    </MuiCard>
  );
}
