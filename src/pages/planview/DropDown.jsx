/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineArrowDown, AiOutlineCheck } from 'react-icons/ai';

function CheckableItem({ itemName }) {
  const [isChecked, setIsChecked] = useState(false);

  function check(e) {
    e.stopPropagation();

    setIsChecked(!isChecked);
  }
  return (
    <li onClick={(e) => check(e)}>
      <CheckContainer>{isChecked && <AiOutlineCheck />}</CheckContainer>
      {itemName}
    </li>
  );
}

function Item({ itemName }) {
  return <li>{itemName}</li>;
}

function DropDown({ name, isCheckable, items }) {
  const [isListOpen, setIsListOpen] = useState(false);

  return (
    <DropDownContainer onClick={() => setIsListOpen(!isListOpen)}>
      <div>
        <span>{name}</span>
        {!isListOpen && <ArrowDown />}
      </div>
      {isListOpen && (
        <ListContainer>
          {items.map((item) =>
            isCheckable ? (
              <CheckableItem itemName={item.name} />
            ) : (
              <Item itemName={item.name} />
            )
          )}
        </ListContainer>
      )}
    </DropDownContainer>
  );
}

const DropDownContainer = styled.div`
  width: 100%;
  min-height: 45px;
  background-color: #e0d1ed;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;

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

const ListContainer = styled.ul`
  width: 100%;
  min-height: 40px;
  border-radius: 0 0 4px 4px;
  padding: 0 15px 15px 15px;
  display: flex;
  flex-wrap: wrap;

  li {
    display: flex;
    font-weight: 400;
    font-size: 18px;
    margin: 15px 25px 0 0;
  }
`;

const CheckContainer = styled.span`
  height: 20px;
  width: 20px;
  margin-right: 10px;
  font-size: 22px;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-radius: 4px;
`;

export default DropDown;
