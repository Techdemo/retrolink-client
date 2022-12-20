// @ts-nocheck
import React from 'react';

import { NavLink, Button, Paragraph } from 'common';
import useFirebaseAuth from 'hooks/useFirebaseAuth';

import { 
  NavigationContainer, 
  MenuContainer, 
  LogoContainer, 
  ButtonContainer, 
  NameContainer 
} from './styled';

export const Navigation = () => {
  const { authUser, signOut } = useFirebaseAuth();

  return (
    <NavigationContainer>
      <LogoContainer>
        <p>LOGO</p>
      </LogoContainer>

      <MenuContainer>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/advertenties">Advertenties</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </MenuContainer>

      <ButtonContainer>
        {authUser && authUser.uid ? (
          <>
            <NameContainer>
              <Paragraph $size={14} margin="0">Hey,</Paragraph>
              <Paragraph color="primary" $size={16} margin="0">{authUser?.displayName}</Paragraph>
            </NameContainer>
            <Button onClick={signOut} variant="outlined">Log uit</Button>
          </>
        ) : (
          <>
            <Button to="/profile/register" variant="primary">Registreer</Button>
            <Button to="/profile/login" variant="outlined">Log in</Button>
          </>
        )}
      </ButtonContainer>
    </NavigationContainer>
  )
};