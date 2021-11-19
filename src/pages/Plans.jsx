import React from 'react';
import styled from 'styled-components';
import PageContainer from '../components/containers/PageContainer';
import { Description, Title } from '../components/others/texts';
import TextContainer from '../components/containers/TextContainer';
import ContentContainer from '../components/containers/ContentContainer';

function Plan() {
  return <PlanContainer>Here lies a plan</PlanContainer>;
}

function Plans() {
  return (
    <PageContainer>
      <ContentContainer>
        <TextContainer>
          <Title>Bom te ver por aqui, @User</Title>
          <Description>
            Você ainda não assinou um plano, que tal começar agora?
          </Description>
        </TextContainer>
        <PlansContainer>
          <Plan />
          <Plan />
        </PlansContainer>
      </ContentContainer>
    </PageContainer>
  );
}

export default Plans;

const PlansContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlanContainer = styled.li`
  width: 95%;
  height: 400px;
  background-color: #e5cdb3;
  color: #4d65a8;
  border-radius: 18px;
  margin-bottom: 30px;
`;
