import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Container, Stack } from '@mui/material';

import '@/assets/styles/global.css';
import { Header } from '@/modules/common/ui/components/Header';
import { QueryProvider } from '@/modules/common/ui/components/QueryProvider/QueryProvider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head lang="en">
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Pokedex</title>
      </head>
      <body>
        <QueryProvider>
          <AppRouterCacheProvider>
            <Stack spacing={2} alignItems="center">
              <Stack width="100%">
                <Header />
              </Stack>
              <Container>{children}</Container>
            </Stack>
          </AppRouterCacheProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
