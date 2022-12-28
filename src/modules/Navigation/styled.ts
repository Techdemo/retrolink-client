import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  width: 100%;
  height: ${({ theme }) => theme.general.navbarHeight};
  background-color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-template-columns: 12.5% auto 22.5%;
  align-items: center;
  padding: 0 24px;
  box-shadow: 0px 0px 1px rgba(59, 40, 204, 0.05), 0px 2px 4px rgba(59, 40, 204, 0.1);
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 72px;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 16px;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;