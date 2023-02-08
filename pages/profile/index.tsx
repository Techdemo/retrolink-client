// @ts-nocheck
import Image from 'next/image'
import { ReactElement, useEffect } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';

import { Container, Grid } from 'common';
import { ProfileInformation } from 'modules';
import { useAuth } from 'context/AuthContext';
import { ProtectedRoute } from 'modules/protectedroute';
import WithNavLayout from 'layout/withNav'
import N64Image from 'images/n64.png';

const ProfilePage = () => {
  const { authUser, loading } = useAuth();
  const router = useRouter();

  if (loading || !authUser) return null;

  useEffect(() => {
    if (router.query.newUser) {
      toast.success(
        'Account aanmaken is gelukt! Klik op de link in je email om je account te verifieren.'
      )
    }
  }, []);

  return (
    <Grid.TwoColumn>
      <ProfileInformation />
      <Container hideOnMobile={true}>
      <Image
          alt="Nintendo 64 image"
          src={N64Image}
          width={1000}
          height={1000}
          style={{
            maxWidth: '100%',
            height: '100%',
          }}
        />
      </Container>
      </Grid.TwoColumn>
  )
}

export default ProfilePage;

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <WithNavLayout>
      <ProtectedRoute>
        {page}
      </ProtectedRoute>
    </WithNavLayout>
  )
};