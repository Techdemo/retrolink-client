import styled, { css } from 'styled-components';

export const Paragraph = styled.p<ParagraphProps>`
  font-size: ${({ $size }) => $size || 14}px;
  font-weight: ${({ $weight }) => $weight || 300};
  color: ${({ theme }) => theme.colors.black};
  margin: ${({ margin }) => margin || '24px 0'};
  letter-spacing: 0.01em;
  font-family: ${({ theme }) => theme.fonts.regular};

  ${({ $uppercase }) => $uppercase && css`
    text-transform: uppercase;
  `}

  ${({ color }) => color === 'primary' && css`
    color: ${({ theme }) => theme.colors.primary};
  `}

  & > a {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
  }
`;

type ParagraphProps = {
  $size?: 12 | 14 | 16 | 18 | 20 | 30;
  $weight?: 400 | 600 | 700;
  $lineHeight?: string;
  margin?: string;
  $inline?: boolean;
  color?: string;
  $noSelect?: boolean;
  $uppercase?: boolean;
};