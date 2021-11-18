import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import womanMeditating from '../assets/images/image05.webp';
import Button from '../components/buttons/Button';
import PageContainer from '../components/containers/PageContainer';
import ContentContainer from '../components/containers/ContentContainer';

function Home() {
  const history = useHistory();

  return (
    <PageContainer>
      <ContentContainer>
        <TextContainer>
          <Title>Bem vindo ao GratiBox</Title>
          <Description>
            Receba em casa um box com chás, produtos orgânicos, incensos e muito
            mais...
          </Description>
        </TextContainer>
        <BottomContainer>
          <ImageContainer>
            <Image src={womanMeditating} alt="woman-mediating-cartoon" />
          </ImageContainer>

          <StartButton onClick={() => history.push('/sign-up')}>
            Quero Comecar
          </StartButton>
          <SignInButton onClick={() => history.push('/sign-in')}>
            Ja sou grato
          </SignInButton>
        </BottomContainer>
      </ContentContainer>
    </PageContainer>
  );
}

export default Home;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 20px;
  padding: 10px;
`;

const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.3rem;
  margin-top: 25px;
  text-align: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 70%;
`;

const Image = styled.img`
  max-width: 100%;
`;

const BottomContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  background-color: #4d65a8;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StartButton = styled(Button)`
  bottom: 10%;
  margin-bottom: 10px;
`;

const SignInButton = styled(Button)`
  background-color: transparent;
  font-size: 18px;
`;
