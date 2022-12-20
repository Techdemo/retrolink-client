import Image from 'next/image'
import { ReactElement } from 'react';

import { Heading, Container, Grid } from 'common';
import { ProtectedRoute } from 'modules/protectedroute';
import WithNavLayout from 'layout/withNav'
import N64Image from 'images/n64.png';

const ProfilePage = () => {
  return (
    <Grid.TwoColumn>
      <Container>
        <Heading as="h1">Profile</Heading>
        <Heading as="h2"></Heading>
      </Container>
      <Container>
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
}