import styled from 'styled-components';
import Image from 'next/image'
import { ReactElement } from 'react';

import { Grid } from 'common/grid';
import { Paragraph } from 'common/paragraph';
import { Heading } from 'common/heading';
import { Container } from 'common/container';
import { LoginForm } from 'modules/loginform';
import WithNavLayout from 'layout/withNav';

import GameboyImage from 'images/gameboy.jpeg';

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// @TODO: MOVE THE HEADING CONTAINER TO THE LOGINFORM COMPONENT
const LoginPage = () => {
  return (
    <Grid.TwoColumn>
      <Container maxWidth flexGap={50}>
        <HeadingContainer>
          <Heading margin="0" as="h2">Log in op je account</Heading>
          <Paragraph $size={18} margin="0">Nog geen account? Registreer</Paragraph>
        </HeadingContainer>
        <LoginForm />
      </Container>
      <Container hideOnMobile={true}>
        <Image
          alt="gameboy image"
          src={GameboyImage}
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

export default LoginPage;

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <WithNavLayout>
      {page}
    </WithNavLayout>
  )
}