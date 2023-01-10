import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { AuthUserProvider } from 'context/AuthContext';

import { Nunito_Sans } from '@next/font/google';
import GlobalStyle from "styles/index";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
};

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ["300", "400", "600", "800"],
})

import theme from "../src/styles/theme";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <AuthUserProvider>
          <main className={nunitoSans.className}>
            {getLayout(<Component {...pageProps} />)}
          </main>
          <div id="modal-root"></div>
        </AuthUserProvider>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </ThemeProvider>
    );
}
