import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
};

import { ThemeProvider } from "styled-components";
import { AuthUserProvider } from 'context/AuthContext';

import { Nunito_Sans } from '@next/font/google';
import GlobalStyle from "styles/index";

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ["300", "400", "600", "800"],
})

import theme from "../src/styles/theme";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthUserProvider>
        <main className={nunitoSans.className}>
          {getLayout(<Component {...pageProps} />)}
        </main>
      </AuthUserProvider>
    </ThemeProvider>
    );
}
