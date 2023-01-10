// @ts-nocheck
import React from 'react';
import { useRouter } from 'next/router';

import { NavLink, Button, Paragraph } from 'common';
import { useAuth } from 'context/AuthContext';

import { 
  NavigationContainer, 
  MenuContainer, 
  LogoContainer, 
  ButtonContainer, 
  NameContainer 
} from './styled';

export const Navigation = () => {
  const Router = useRouter();
  const { authUser, signOut, loading } = useAuth();

  const handleSignOut = () => {
    signOut()
    .then(() => {
      Router.push('/profile/login');
    })
  }

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
        {authUser && !loading && (
          <>
            <NameContainer>
            <Paragraph $size={14} margin="0">Hey,</Paragraph>
            <Paragraph color="primary" $size={16} margin="0">{authUser?.displayName}</Paragraph>
            </NameContainer>
            <Button onClick={handleSignOut} variant="outlined">Log uit</Button>
          </>
        )}

        {!authUser && !loading && (
          <>
            <Button to="/profile/register" variant="primary">Registreer</Button>
            <Button to="/profile/login" variant="outlined">Log in</Button>
          </>
        )}
      </ButtonContainer>
    </NavigationContainer>
  )
};