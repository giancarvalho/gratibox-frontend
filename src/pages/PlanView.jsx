/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react';
import styled from 'styled-components';
import PageContainer from '../components/containers/PageContainer';
import TextContainer from '../components/containers/TextContainer';
import { Subtext, Title } from '../components/others/texts';
import ContentContainer from '../components/containers/ContentContainer';
import UserContext from '../contexts/UserContext';
import img from '../assets/images/image03.jpg';

function PlanView() {
  const { user } = useContext(UserContext);
  return (
    <PageContainer>
      <ContentContainer>
        <TextContainer>
          <Title>Bom te ver aqui, {user.name} </Title>
          <Subtext>"Agradecer é a arte de atrair coisas boas"</Subtext>
        </TextContainer>
        <PlanContainer>
          <Image src={img} alt="woman-meditating" />

          <PlanDetails>
            <DeliveryInfo>
              <p>
                Plano: <span> mensal </span>
              </p>
              <p>
                Data da Assinatura: <span> mensal </span>
              </p>
              <ul>
                Proximas entregas
                <li>
                  <span>dd/mm/aaaa</span>
                </li>
                <li>
                  <span>dd/mm/aaaa</span>
                </li>
                <li>
                  <span>dd/mm/aaaa</span>
                </li>
              </ul>
            </DeliveryInfo>
            <OptionsList>
              <li>Chas</li>
              <li>Produtos Organicos</li>
              <li>Incensos</li>
            </OptionsList>
          </PlanDetails>
        </PlanContainer>
      </ContentContainer>
    </PageContainer>
  );
}

export default PlanView;

const PlanContainer = styled.div`
  width: 95%;
  min-height: 300px;
  background-color: #ffffff;
  color: #4d65a8;
  border-radius: 20px;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 700;
  padding: 15px 25px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
`;

const PlanDetails = styled.div`
  width: 100%;
  height: 200px;
`;

const DeliveryInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  height: 100%;

  p {
    margin-bottom: 5px;
  }

  li {
    text-align: center;
    margin-top: 5px;
  }

  li:first-child {
    margin-top: 10px;
  }

  span {
    color: #e63c80;
  }
`;

const OptionsList = styled.ul`
  display: flex;
  justify-content: space-between;
  color: #e63c80;
  font-weight: 400;
  font-size: 18px;
`;
