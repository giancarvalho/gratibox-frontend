/* eslint-disable prefer-template */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useEffect, useState } from 'react';
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
import { getFormDetails, postSubscription } from '../../services/services';
import addressSchema from '../../validations/addressData';
import zipcodeSchema from '../../validations/cepSchema';

function State({ statesList, setAddressData, addressData }) {
  const [isClicked, setIsClicked] = useState(false);
  const [chosenOption, setChosenOption] = useState(null);

  function chooseState(e, state, id) {
    e.stopPropagation();

    setAddressData({ ...addressData, stateId: id });
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
          {statesList.map((state) => (
            <li
              onClick={(e) => chooseState(e, state.name, state.id)}
              key={state.id}
            >
              {state.name}
            </li>
          ))}
        </StateOptionsContainer>
      )}
    </StateContainer>
  );
}

function PlanForm({ sendAlert }) {
  const [formDetails, setFormDetails] = useState({
    states: [],
    options: [],
    plans: [],
  });
  const [addressData, setAddressData] = useState({
    recipient: '',
    address: '',
    zipcode: '',
    city: '',
    stateId: '',
  });
  const [chosenItems, setchosenItems] = useState({
    day: null,
    options: [],
  });
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const [showDelivery, setShowDelivery] = useState(false);
  const [plan, setPlan] = useState([]);
  const days =
    id === '1'
      ? [
          { name: '01', value: 1 },
          { name: '10', value: 10 },
          { name: '20', value: 20 },
        ]
      : [
          { name: 'Seg', value: 0 },
          { name: 'Qua', value: 3 },
          { name: 'Sex', value: 4 },
        ];

  useEffect(() => {
    getFormDetails(user.token)
      .then((response) => {
        setPlan(
          response.data.plans.filter((planData) => planData.id === Number(id))
        );
        setFormDetails(response.data);
      })
      .catch((error) => console.log(error.response?.data));
  }, []);

  function subscribeToPlan() {
    const addressValidation = addressSchema.validate(addressData);

    if (addressValidation.error) {
      sendAlert({
        message: addressValidation.error?.details[0].message,
        error: true,
      });
      return;
    }

    const body = {
      planDetails: { planId: Number(id), day: chosenItems.day },
      addressData,
      options: chosenItems.options,
    };

    postSubscription(body, user.token).catch((error) =>
      console.log(error.response)
    );
  }

  function formatZipcode(e) {
    let newValue = e.target.value;

    if (newValue.length < addressData.zipcode.length) {
      setAddressData({ ...addressData, zipcode: newValue });
    }

    const validation = zipcodeSchema.validate(newValue);

    if (validation.error) return;
    if (newValue.length === 9) return;
    if (newValue.length === 8 && newValue.length > addressData.zipcode.length) {
      newValue = newValue.slice(0, 5) + '-' + newValue.slice(5);
    }

    setAddressData({ ...addressData, zipcode: newValue });
  }

  function goToNext() {
    if (!chosenItems.day) {
      sendAlert({
        message: 'Por favor, escolha o dia da entrega',
        error: true,
      });
      return;
    }

    if (!chosenItems.options.length) {
      sendAlert({
        message: 'Por favor, escolha pelo menos um item para receber',
        error: true,
      });
      return;
    }
    setShowDelivery(true);
  }

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
            <form>
              <fieldset>
                <AddressInput
                  placeholder="Nome Completo"
                  value={addressData.recipient}
                  onChange={(e) =>
                    setAddressData({
                      ...addressData,
                      recipient: e.target.value,
                    })
                  }
                  required
                />
                <AddressInput
                  placeholder="Endereço de Entrega"
                  value={addressData.address}
                  onChange={(e) =>
                    setAddressData({ ...addressData, address: e.target.value })
                  }
                  required
                />
                <AddressInput
                  placeholder="CEP"
                  value={addressData.zipcode}
                  onChange={(e) => formatZipcode(e)}
                  required
                />
                <AuxContainer>
                  <AddressInput
                    className="city"
                    placeholder="Cidade"
                    value={addressData.city}
                    onChange={(e) =>
                      setAddressData({
                        ...addressData,
                        city: e.target.value,
                      })
                    }
                    required
                  />
                  <State
                    statesList={formDetails.states}
                    setAddressData={setAddressData}
                    addressData={addressData}
                  />
                </AuxContainer>
              </fieldset>
            </form>
          ) : (
            <>
              <DropDown name="Plano" items={plan} />
              <DropDown
                name="Entrega"
                items={days}
                isCheckable={{ exclusiveOption: true }}
                setchosenItems={setchosenItems}
                chosenItems={chosenItems}
              />
              <DropDown
                name="Quero receber"
                isCheckable={{ exclusiveOption: false }}
                items={formDetails.options}
                setchosenItems={setchosenItems}
                chosenItems={chosenItems}
              />
            </>
          )}
        </PlanContainer>

        {showDelivery ? (
          <StyledButton onClick={() => subscribeToPlan()}>
            Finalizar
          </StyledButton>
        ) : (
          <StyledButton onClick={() => goToNext()}>Próximo</StyledButton>
        )}
      </ContentContainer>
    </PageContainer>
  );
}

export default PlanForm;

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
