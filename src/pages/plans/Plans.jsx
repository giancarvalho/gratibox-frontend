import React from 'react';
import styled from 'styled-components';
import PageContainer from '../../components/containers/PageContainer';
import { Description, Title } from '../../components/others/texts';
import TextContainer from '../../components/containers/TextContainer';
import ContentContainer from '../../components/containers/ContentContainer';

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
        <PlansContainer>Plans go here</PlansContainer>
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
