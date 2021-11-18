import React from 'react';
import styled from 'styled-components';
import womanMeditating from '../assets/images/image05.webp';

function Home() {
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
        <BottomContainer />
      </ContentContainer>
    </PageContainer>
  );
}

export default Home;

const PageContainer = styled.div`
  min-width: 100%;
  min-height: 100%;
  background-color: #6d7ce4;
  color: #fff;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
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

// const Image = styled.img`
//   width: 100%;
// `;

const BottomContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  background-image: url(${womanMeditating});
  background-color: #4d65a8;
  background-size: contain;
  background-repeat: no-repeat;
`;
