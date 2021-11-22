/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineArrowDown } from 'react-icons/ai';

function StatesDropDown({ statesList, setAddressData, addressData }) {
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

export default StatesDropDown;

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
