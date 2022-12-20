import styled from 'styled-components';
import Link from 'next/link'

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-underline: none;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.regular};
  transition: 0.3s ease-in-out all;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;