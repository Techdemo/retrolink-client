import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import { ButtonProps } from './types';

export const ButtonIcon = styled.div`
  margin: 0 8px 0 0;
  display: flex;
  align-items: center;
`;

export const StyledButton = styled.button<ButtonProps>`
  width: auto;
  min-width: 0;
  letter-spacing: 2px;
  height: 56px;
  border-radius: 6px;
  padding: 16px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  transition: all .2s ease-in;
  text-decoration: none;

  ${({ isLoading }) => isLoading && css`
    cursor: not-allowed;  
  `}

  ${({ variant }) => variant === 'secondary' && css`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
  `}

  ${({ variant }) => variant === 'outlined' && css`
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  `}

  svg {
    max-width: 24px;
    max-height: 24px;
  }

  ${({ iconOnly }) => iconOnly && css`
  width: 48px;

  ${ButtonIcon} {
    margin: 0;
  }
`}

  ${({ iconPosition }) => iconPosition === 'right' && css<ButtonProps>`
    flex-direction: row-reverse;

    ${ButtonIcon} {
      margin: 0 0 0 8px;

      ${({ iconOnlyOnMobile }) => iconOnlyOnMobile && css`
        margin: 0;

        ${media.tablet`
          margin: 0 0 0 8px;
        `}
      `}
      }
  `}

  ${({ size }) => size === 'auto' && css`
    width: auto;
  `}

  ${({ size }) => size === 'fullWidth' && css`
    width: 100%;
  `}

  ${({ size }) => size === 'small' && css`
    width: auto;
    padding: 0px 16px;
    height: 32px;
    text-transform: initial;
  `}


  ${({ size }) => size === 'auto' && css`
    width: auto;
  `}

  ${({ size }) => size === 'fullWidth' && css`
    width: 100%;
  `}

  ${({ size }) => size === 'small' && css`
    width: auto;
    padding: 0px 16px;
    height: 32px;
    text-transform: initial;
  `}

  ${({ disabled }) => disabled && css`
    cursor: not-allowed;
    border-image: none;
    background-color: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.primary};
    opacity: 0.4;

    ${media.desktop`
      transition: none;
    `}
  `};
`;