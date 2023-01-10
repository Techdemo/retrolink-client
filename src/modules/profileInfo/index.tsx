// @ts-nocheck
import * as React from 'react';
import { useRouter } from 'next/router';

import { Heading, Paragraph, Button, Container } from 'common';
import { Modal } from 'modules';
import { useAuth } from 'context/AuthContext';

export const ProfileInformation = () => {
  const Router = useRouter();
  const [showModal, setShowModal] = React.useState(false);
  const { authUser, loading, deleteUser, clear } = useAuth();

  if (loading || !authUser) return null;

  const handleUserDelete = () => {
    clear();

    deleteUser()
    .then((res) => {
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

  // Totdat er globale state management is, wordt de state van de modal in de component opgeslagen
  return (
    <>
      <Container maxWidth>
        <Heading as="h1">Profile</Heading>
        <Heading as="h2">{authUser.displayName}</Heading>
        <Paragraph color="black">email verified: {authUser.emailVerified.toString()}</Paragraph>
        <Button 
          variant="outlined" 
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