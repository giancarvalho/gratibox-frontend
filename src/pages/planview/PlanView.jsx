/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineArrowDown } from 'react-icons/ai';
import UserContext from '../../contexts/UserContext';
import PageContainer from '../../components/containers/PageContainer';
import TextContainer from '../../components/containers/TextContainer';
import { Subtext, Title } from '../../components/others/texts';
import ContentContainer from '../../components/containers/ContentContainer';
import img from '../../assets/images/image03.jpg';
import DropDown from './DropDown';
import Button from '../../components/buttons/Button';
import Input from '../../components/others/Input';

function State() {
  const [isClicked, setIsClicked] = useState(false);
  const [chosenOption, setChosenOption] = useState(null);

  function chooseState(e, state) {
    e.stopPropagation();

    setChosenOption(state);
    setIsClicked(false);
  }

  return (
    <StateContainer onClick={() => setIsClicked(!isClicked)}>
      <div>
        {chosenOption || 'Estado'} <ArrowDown />
      </div>
      {isClicked && (
        <StateOptionsContainer>
          <li onClick={(e) => chooseState(e, 'MG')}>MG</li>
          <li onClick={(e) => chooseState(e, 'ES')}>ES</li>
          <li>MG</li>
          <li>MG</li>
          <li>MG</li>
          <li>MG</li>
          <li>MG</li>
        </StateOptionsContainer>
      )}
    </StateContainer>
  );
}

function PlanView() {
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const [showDelivery, setShowDelivery] = useState(false);

  console.log(id);
  return (
    <PageContainer>
      <ContentContainer>
        <TextContainer>
          <Title>Bom te ver aqui, {user.name} </Title>
          <Subtext>"Agradecer é a arte de atrair coisas boas"</Subtext>
        </TextContainer>

        <PlanContainer>
          <Image src={img} alt="plan-img" />
          {showDelivery ? (
            <>
              <AddressInput placeholder="Nome Completo" />
              <AddressInput placeholder="Endereço de Entrega" />
              <AddressInput placeholder="CEP" />
              <AuxContainer>
                <AddressInput className="city" placeholder="Cidade" />
                <State />
              </AuxContainer>
            </>
          ) : (
            <>
              <DropDown name="Plano" items={[{ name: 'Mensal' }]} />
              <DropDown
                name="Entrega"
                items={[{ name: 1 }, { name: 2 }, { name: 3 }]}
                isCheckable
              />
              <DropDown
                name="Quero receber"
                isCheckable
                items={[
                  { name: 'Coisa' },
                  { name: 'Coisinha 2' },
                  { name: 'Coisinha 3' },
                ]}
              />
            </>
          )}
        </PlanContainer>

        <StyledButton onClick={() => setShowDelivery(true)}>
          Próximo
        </StyledButton>
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

  button {
    margin-bottom: 25px;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const StyledButton = styled(Button)`
  margin-bottom: 15px;
`;

const AddressInput = styled(Input)`
  height: 44px;
  width: 100%;
  background: rgba(224, 209, 237, 0.62);
  font-size: 18px;
  border: none;
  color: #4d65a8;
  font-weight: 700;
  ::placeholder {
    color: #4d65a8;
  }
`;

const AuxContainer = styled.div`
  display: flex;

  input {
    width: 60%;
  }
`;

const StateContainer = styled.div`
  font-size: 18px;
  width: 40%;
  height: 44px;
  background-color: rgba(224, 209, 237, 0.62);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  position: relative;

  div {
    padding: 10px 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const ArrowDown = styled(AiOutlineArrowDown)`
  font-size: 26px;
`;

const StateOptionsContainer = styled.ul`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  position: absolute;
  font-weight: 400;
  top: 100%;
  left: 0;
  background-color: #fff;
  border-radius: 0 0 4px 4px;
  padding: 5px;
  overflow-y: scroll;

  li {
    margin-bottom: 7px;
  }
`;
