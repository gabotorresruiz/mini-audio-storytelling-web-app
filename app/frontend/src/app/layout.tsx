'use client';
import { ReactElement, ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { Box, ThemeProvider, CssBaseline } from '@mui/material';
import styled from 'styled-components';
import { theme } from '@/styles';
import { Header, Snackbar } from './components';
import { SnackbarProvider } from '@/context';

const StyledContainer = styled(Box)`
  background-color: white;
`;

const StyledMain = styled.main`
  padding: 2rem 16rem 1rem;
`;

const Layout: ({ children }: { children: ReactNode }) => ReactElement = ({
  children
}: {
  children: ReactNode;
}): ReactElement => {
  return (
    <SessionProvider>
      <html lang="en">
        <body>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <SnackbarProvider>
              <StyledContainer>
                <Header />
                <StyledMain>{children}</StyledMain>
                <Snackbar />
              </StyledContainer>
            </SnackbarProvider>
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
};

export default Layout;
