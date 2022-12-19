import styled, { css } from 'styled-components';

export const FormFieldDescription = styled.span<FormFieldDescriptionProps>`
  width: 100%; 
  margin-top: 8px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  display: inline-block;
  color: ${({ theme }) => theme.colors.black};

  ${({ isError }) => isError && css`
    color: ${({ theme }) => theme.colors.red};  
  `}
`;

type FormFieldDescriptionProps = {
  isError?: boolean;
}