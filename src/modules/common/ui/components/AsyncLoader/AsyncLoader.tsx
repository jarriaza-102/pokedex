import { ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

type WithChildren = {
  children: ReactNode;
};

export type AsyncLoaderProps = WithChildren & {
  isLoading: boolean;
  isError: boolean;
  loadingState?: ReactNode;
  errorState?: ReactNode;
};

function AsyncLoader({ isError, isLoading, loadingState, errorState, children }: AsyncLoaderProps) {
  if (isLoading) {
    return loadingState ?? <h1>Loading...</h1>;
  }

  if (isError) {
    return errorState ?? <h1>There was an error...</h1>;
  }

  return children;
}

function WithSuspense({ children }: WithChildren) {
  return (
    <ErrorBoundary fallback={<h1>THere was an error</h1>}>
      <Suspense fallback={<h1>Loading...</h1>}>{children}</Suspense>
    </ErrorBoundary>
  );
}

AsyncLoader.Suspense = WithSuspense;

export { AsyncLoader };
