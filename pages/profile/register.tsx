import styled from 'styled-components';
import Image from 'next/image'

import { Grid } from 'common/grid';
import { Paragraph } from 'common/paragraph';
import { Heading } from 'common/heading';
import { Container } from 'common/container';

import { RegisterForm } from 'modules/registerform';

import N64Image from 'images/n64.png';

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
// @TODO: MOVE THE HEADING CONTAINER TO THE REGISTERFORM COMPONENT
const RegisterPage = () => {
  return (
    <Grid.TwoColumn>
      <Container maxWidth flexGap={50}>
        <HeadingContainer>
          <Heading margin="0" as="h2" weight={500}>Registreer een nieuw account</Heading>
          <Paragraph $size={18} margin="0">Al een account? Log in</Paragraph>
        </HeadingContainer>
        <RegisterForm />
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

export default RegisterPage;