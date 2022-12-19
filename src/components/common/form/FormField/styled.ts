import styled, { css } from 'styled-components';

export const FormFieldContainer = styled.div<FormFieldContainerProps>`
  margin: ${({ margin }) => margin || '0 0 24px'};
`;

type FormFieldContainerProps = {
  margin?: string;
};

export const FormFieldsWrapper = styled.div`
  position: relative;
  flex-basis: 100%;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.white};
`;
