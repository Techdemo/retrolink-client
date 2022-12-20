import { StyledLink } from './styled';

export const NavLink = ({ children, href, ...props }) => {
  return (
    <StyledLink href={href}>{children}</StyledLink>
  )
}