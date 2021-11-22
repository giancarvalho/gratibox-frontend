import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import womanMeditating from '../assets/images/image05.webp';
import Button from '../components/buttons/Button';
import PageContainer from '../components/containers/PageContainer';
import TextContainer from '../components/containers/TextContainer';
import TransparentButton from '../components/buttons/TransparentButton';
import { Subtext, Title } from '../components/others/texts';

function Home() {
  const history = useHistory();

  return (
    <PageContainer>
      <HomeContainer>
        <TextContainer>
          <Title>Bem vindo ao GratiBox</Title>
          <Subtext center>
            Receba em casa um box com chás, produtos orgânicos, incensos e muito
            mais...
          </Subtext>
        </TextContainer>
        <BottomContainer>
          <ImageContainer>
            <Image src={womanMeditating} alt="woman-mediating-cartoon" />
          </ImageContainer>

          <StartButton onClick={() => history.push('/cadastro')}>
            Quero Começar
          </StartButton>
          <TransparentButton onClick={() => history.push('/login')}>
            Ja sou grato
          </TransparentButton>
        </BottomContainer>
      </HomeContainer>
    </PageContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
