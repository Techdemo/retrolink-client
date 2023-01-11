// @ts-nocheck
import * as React from 'react';
import { useRouter } from 'next/router';

import { Heading, Paragraph, Button, Container } from 'common';
import { Modal } from 'modules';
import { useAuth } from 'context/AuthContext';
import { ProfileDataForm } from 'modules';

import { 
  ProfileHeader, 
  ProfileEmailVerificationContainer, 
  StyledNotificationIcon, 
} from './styled';

export const ProfileInformation = () => {
  const Router = useRouter();
  const [showModal, setShowModal] = React.useState(false);
  const { authUser, loading, deleteUser, clear } = useAuth();

  const handleUserDelete = () => {
    clear();

    deleteUser()
    .then(() => {
      Router.push('/profile/login');
    }).catch((err) => {
      console.log('err user deletion', err);
    });
  };

  const modalActions = [
    {
      key: 'delete',
      variant: 'primary',
      onClick: () => handleUserDelete(),
      children: 'Verwijder account'
    },
    {
      key: 'cancel',
      variant: 'outlined',
      onClick: () => setShowModal(false),
      children: 'Annuleer'
    },
  ];

  // @TODO: Is dit nog echt nodig wanneer je dit ook in de protectedRoute doet?
  if (loading || !authUser) return null;

  // Totdat er globale state management is, wordt de state van de modal in de component opgeslagen
  return (
    <>
      <Container maxWidth>
        <ProfileHeader>
          <Heading as="h2" margin="0">Hallo, {authUser.displayName}</Heading>
          <Paragraph color="black" margin="12 0">Dit zijn jouw accountgegevens. Je kan ze later altijd wijzigen.</Paragraph>
        </ProfileHeader>
        {!authUser.emailVerified && (
          <ProfileEmailVerificationContainer>
            <StyledNotificationIcon />
            <Paragraph $weight={700} color="black" margin="12 0">Je hebt je emailadres nog niet geverifieerd. Klik op de link in de email die je hebt ontvangen.</Paragraph>
          </ProfileEmailVerificationContainer>
        )}
        <ProfileDataForm />
        {/* text-only, outlined, primary */}
        <Button
          variant="text-only" 
          onClick={() => setShowModal(true)}
        >
          Verwijder account
        </Button>
        {showModal && (
          <Modal
            bodyText="Weet je zeker dat je je account wilt verwijderen?"
            title="Verwijder account"
            show={showModal}
            onClose={() => setShowModal(false)}
            actions={modalActions}
          />
        )}
      </Container>
    </>
  );
};