import styled from 'styled-components';
import { useState } from 'react';

import localStorageServices from '../utils/localStorageHandler';

//this would be best to be in a separate file with other enums
const orderOfChoicesOptions = {
  AZ: 'Alphabetical order',
  ZA: 'Reverse alphabetical order',
  user: 'As per user`s input order',
};

const OrderDropdown = ({ orderOfChoices, setOrderOfChoices }) => {
  const [showOptions, setShowOptions] = useState(false);

  const onOptionClick = option => {
    setOrderOfChoices(option);
    localStorageServices.saveToLocalStorage('displayOrder', option);
    setShowOptions(false);
  };

  return (
    <Wrap>
      <FieldHint>Display choices by:</FieldHint>

      <Inner>
        <div>{orderOfChoices}</div>
        <Chevron onClick={() => setShowOptions(!showOptions)}>&#x25BC;</Chevron>

        {showOptions && (
          <OptionsWrap>
            {Object.values(orderOfChoicesOptions).map(option => (
              <Option onClick={() => onOptionClick(option)} key={option}>
                {option}
              </Option>
            ))}
          </OptionsWrap>
        )}
      </Inner>
    </Wrap>
  );
};

export default OrderDropdown;

const Wrap = styled.div``;

const FieldHint = styled.div`
  margin-bottom: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #96999b;
`;

const Inner = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 6px;
  font-size: 16px;
  border: 1px solid #bfc1c2;
  border-radius: 4px;
`;

const Chevron = styled.div`
  margin-left: 8px;
  padding: 4px 8px;
  border: 1px solid #bfc1c2;
  border-radius: 4px;
  user-select: none;

  &:hover {
    cursor: pointer;
    background-color: #e6e6e7;
    color: white;
    transition:
      background-color,
      color 0.3s ease;
  }
`;

const OptionsWrap = styled.div`
  position: absolute;
  top: 4px;
  padding: 8px;
  background-color: white;
  border: 1px solid #bfc1c2;
  border-radius: 4px;
`;

const Option = styled.div`
  font-size: 16px;
  padding: 2px 4px;
  border-radius: 2px;
  margin: 2px 0;

  &:hover {
    background-color: #d7d9d9;
    cursor: pointer;
  }
`;
