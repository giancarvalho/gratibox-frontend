import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import PageContainer from '../../components/containers/PageContainer';
import { Subtext, Title } from '../../components/others/texts';
import TextContainer from '../../components/containers/TextContainer';
import ContentContainer from '../../components/containers/ContentContainer';
import Plan from './Plan';
import UserContext from '../../contexts/UserContext';
import { getPlans } from '../../services/services';

function Plans() {
  const { user } = useContext(UserContext);
  const [plansList, setPlansList] = useState([]);

  useEffect(() => {
    getPlans(user.token)
      .then((response) => setPlansList(response.data))
      .catch((response) => console.log(response));
  }, []);

  return (
    <PageContainer>
      <ContentContainer>
        <TextContainer>
          <Title>
            Bom te ver por aqui, <Name>{user.name}</Name>
          </Title>
          <Subtext>
            Você ainda não assinou um plano, que tal começar agora?
          </Subtext>
        </TextContainer>
        <PlansContainer>
          {plansList.map((plan) => (
            <Plan planData={plan} key={plan.id} />
          ))}
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

const Name = styled.span`
  text-transform: capitalize;
`;
