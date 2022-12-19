import styled, { css } from 'styled-components';

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  gap: ${({ flexGap }) => flexGap || 0}px;

  ${({ maxWidth }) => maxWidth && css`
    width: 600px;
    padding: 24px;
    margin: 0 auto;
  `}

  img {
    height: 100%;
  }
`;

type ContainerProps = {
  maxWidth?: boolean;
  flexGap?: number;
};