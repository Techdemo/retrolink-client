import styled from 'styled-components';

export const TwoColumnGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: calc(100vh - ${({ theme }) => theme.general.navbarHeight});
`;