import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components";
import { AuthUserProvider } from 'context/AuthContext';

import { Nunito_Sans } from '@next/font/google';
import GlobalStyle from "styles/index";

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ["300", "400", "600", "800"],
})

import theme from "../src/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthUserProvider>
        <main className={nunitoSans.className}>
          <Component {...pageProps} />
        </main>
      </AuthUserProvider>
    </ThemeProvider>
    );
}
