import styled, { css } from 'styled-components';

import { media } from 'styles/utils';
import { ThemeColors } from 'styles/types';

const headingSizes = {
  h1: {
    mobile: '32px',
    desktop: '64px',
  },
  h2: {
    mobile: '24px',
    desktop: '36px'
  },
  h3: {
    mobile: '20px',
    desktop: '20px'
  },
  h4: {
    mobile: '12px',
    desktop: '14px'
  }
};

const lineHeightSizes = {
  h1: '64px',
  h2: '30px',
  h3: '20px',
  h4: '15px',
};

export const Heading = styled.h1<HeadingProps>`
  line-height: ${({ as }) => lineHeightSizes[as || 'h1']};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ as }) => headingSizes[as || 'h1'].mobile};
  color: ${({ theme }) => theme.colors.black};
  margin: ${({ margin }) => margin || '24px 0'};
  text-transform: ${({ upperCase }) => upperCase ? 'uppercase' : 'none'};
  text-align: ${({ isCentered }) => isCentered ? 'center' : 'left'};
  letter-spacing: -0.01em;
  font-weight: ${({ weight }) => weight || 400};
  font-style: normal;

  ${({ color }) => color === 'white' && css`
    color: ${({ theme }) => theme.colors.white};
  `}

  ${({ color }) => color === 'primary' && css`
    color: ${({ theme }) => theme.colors.primary};
  `}

  ${media.desktop<HeadingProps>`
    font-size: ${(props) => headingSizes[props.as || 'h1'].desktop};
  `}
`;

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  margin?: string;
  isCentered?: boolean;
  upperCase?: boolean;
  color?: ThemeColors;
  weight?: number;
  letterSpacing?: string;
};