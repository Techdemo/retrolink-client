// @ts-ignore
import * as i from 'types';
import styled, { css } from 'styled-components';

export const InputFieldCss = css<InputProps>`
  width: 100%;
  height: 56px;
  padding: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
  line-height: 24px;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.radius.small};
  background-color: transparent;
  transition: all 0.2s;
  letter-spacing: 0.002em;

  ${({ type }) => type === 'textarea' && css`
    height: 175px;
    resize: none;
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.colors.black};
  `};

  ${({ isActive }) => isActive && css`
    border-color: ${({ theme }) => theme.colors.primary};
  `}

  &:active,
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray.dark};
  }

  &[readonly],
  &[disabled] {
    opacity: 0.4;
  }

  ${({ hasIcon }) => hasIcon && css`
    padding-left: 50px;
  `}

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type=number] {
    -moz-appearance: textfield;
  }

  ${({ error }) => error && css`
    border-color: ${({ theme }) => theme.colors.red};

    &:active,
    &:focus {
      outline: none;
    }
  `};
`;

export const StyledInput = styled.input`
  ${InputFieldCss};
`;

export type InputProps = Pick<i.DefaultInputProps, 'autoFocus'> & {
  error?: boolean;
  hasIcon?: boolean;
  isActive?: boolean;
  variant?: 'white';
  type?: i.InputTypes;
};

export const InputIcon = styled.div<IconWrapperProps>`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  padding: 10px 0;
  cursor: pointer;
  transition: all 0.2s;

  svg {
    max-width: 30px;
    max-height: 100%;
    fill: ${({ theme }) => theme.colors.gray};

    ${({ isActive }) => isActive && css`
      fill: ${({ theme }) => theme.colors.primary};
  `}
  }
`;

type IconWrapperProps = Pick<i.DefaultInputProps, 'readOnly' | 'disabled'> & {
  isActive?:boolean;
};

export const InputWrapper = styled.div<InputWrapperProps>`
  position: relative;
  display: flex;
  width: 100%;
  min-width: 345px;

  ${({ iconPosition }) => iconPosition === 'right' && css`
    ${StyledInput} {
      padding: 16px;
    }

    ${InputIcon} {
      left: auto;
      right: 16px;
    }
  `}
`;

type InputWrapperProps = Pick<i.DefaultInputProps, 'iconPosition'>;