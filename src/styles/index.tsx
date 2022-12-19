import { createGlobalStyle } from 'styled-components';

// @TODO ADD FONTS HERE

const globalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    min-height: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  #modal {
    position: relative;
    z-index: 10;
  }
`;

export default globalStyle;