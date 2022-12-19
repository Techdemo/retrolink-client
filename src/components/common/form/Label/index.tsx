import styled, { css } from 'styled-components';

export const Label = styled.label<LabelProps>`
  display: inline-block;
  z-index: 2;
  font-size: 16px;
  font-weight: normal;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.black};
  letter-spacing: 0.002em;
  cursor: default;
  position: absolute;
  transition: all .2s;
  top: calc(50% - 50px);
  transform: translade(0, 0) scale(1);
  transform-origin: left center;
  line-height: 15.4px;

  ${({ isActive }) => isActive && css`
    transform: translate(0, -2px) scale(0.8);
    color: ${({ theme }) => theme.colors.primary};
  `}
`;

export type LabelProps = {
  isActive?: boolean;
};