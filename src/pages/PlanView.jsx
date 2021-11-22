/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import PageContainer from '../components/containers/PageContainer';
import TextContainer from '../components/containers/TextContainer';
import { Subtext, Title } from '../components/others/texts';
import ContentContainer from '../components/containers/ContentContainer';
import UserContext from '../contexts/UserContext';
import img from '../assets/images/image03.jpg';
import { getSubscription } from '../services/services';
import calculateNextDeliveries from '../utils/calculateNextDeliveries';
import useQuery from '../hooks/useQuery';

function PlanView({ sendAlert }) {
  const { user } = useContext(UserContext);
  const justSubscribed = useQuery().get('justSubscribed');

  const [subscriptionData, setSubscriptionData] = useState({
    name: '',
    timestamp: '',
    day: null,
    options: [],
  });
  const [nextDeliveries, setNextDeliviries] = useState([]);

  useEffect(() => {
    if (justSubscribed) {
      sendAlert({ message: 'Sucesso! Seu plano já está ativo.' });
    }

    getSubscription(user.token).then((response) => {
      setSubscriptionData(response.data);
      setNextDeliviries(calculateNextDeliveries(response.data));
    });
  }, []);

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
                Plano: <span> {subscriptionData.name} </span>
              </p>
              <p>
                Data da Assinatura:{' '}
                <span>
                  {' '}
                  {dayjs(subscriptionData.timestamp).format('DD/MM/YYYY')}{' '}
                </span>
              </p>
              <ul>
                Proximas entregas
                {nextDeliveries.map((delivery) => (
                  <li key={delivery}>
                    <span>{delivery}</span>
                  </li>
                ))}
              </ul>
            </DeliveryInfo>
            <OptionsList>
              {subscriptionData.options.map((option) => (
                <li key={option.name}>{option.name}</li>
              ))}
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
  padding: 15px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
`;

const PlanDetails = styled.div`
  width: 100%;
  min-height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

  li {
    margin: 5px;
  }
`;
