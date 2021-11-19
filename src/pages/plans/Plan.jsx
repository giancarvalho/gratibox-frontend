import React from 'react';
import styled from 'styled-components';
import Button from '../../components/buttons/Button';

function Plan({ img, description }) {
  return (
    <PlanContainer>
      <Image src={img} alt="plan1" />
      <Description>{description}</Description>
      <Button>Assinar</Button>
    </PlanContainer>
  );
}

export default Plan;

const PlanContainer = styled.li`
  width: 95%;
  height: 450px;
  background-color: #e5cdb3;
  color: #4d65a8;
  border-radius: 20px;
  margin-bottom: 50px;
  font-size: 20px;
  font-weight: 700;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 90%;
  height: 250px;
`;

const Description = styled.p`
  margin: 5px 0 25px;
  line-height: 25px;
`;
