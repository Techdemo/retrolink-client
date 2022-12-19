import 'styled-components';

const theme = {
  colors: {
    black: '#212427',
    white: '#ffffff',
    gray: Object.assign('#D1D5DB', {
      dark: '#6B7280'
    }),
    primary: '#472F94',
    secondary: '#867AE5',
    background: '#F6F8FA',
    red: 'red',
  },
  fonts: {
    regular: 'Nunito Sans, sans-serif',
    medium: 'Nunito Sans, sans-serif',
    bold: 'Nunito Sans, sans-serif',
  },
  radius: {
    small: '6px',
    big: '16px'
  }
} as const;

export default theme;
