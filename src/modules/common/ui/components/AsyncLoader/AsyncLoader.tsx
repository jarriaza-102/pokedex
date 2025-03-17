import { ReactNode } from 'react';

export type AsyncLoaderProps = {
  isLoading: boolean;
  isError: boolean;
  loadingState?: ReactNode;
  errorState?: ReactNode;
  children: ReactNode;
};

export function AsyncLoader({
  isError,
  isLoading,
  loadingState,
  errorState,
  children,
}: AsyncLoaderProps) {
  if (isLoading) {
    return loadingState ?? <h1>Loading...</h1>;
  }

  if (isError) {
    return errorState ?? <h1>There was an error...</h1>;
  }

  return children;
}
