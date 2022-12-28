import styled, { css } from 'styled-components';

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - ${({ theme }) => theme.general.navbarHeight});
  gap: ${({ flexGap }) => flexGap || 0}px;

  ${({ maxWidth }) => maxWidth && css`
    width: 600px;
    padding: 24px;
    margin: 0 auto;
  `}

  ${({ hideOnMobile }) => hideOnMobile && css`
    @media (max-width: 768px) {
      display: none;
    }
  `}

  img {
    height: 100%;
  }
`;

type ContainerProps = {
  maxWidth?: boolean;
  flexGap?: number;
  hideOnMobile?: boolean;
};