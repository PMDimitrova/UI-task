import styled from 'styled-components';
import { useState } from 'react';

import Input from './Input';

// TODO: the dropdown in OrderDropdown should trigger another order of the items here

// BONUS: The database that stores this does not allow individual choices in the list of choices to be longer than 40 characters. Add client-side validation such that excess characters are visually distinct if the choice is longer than 40 characters. I.e., if a user enters the word that is longer than 40 characters, the characters above 40 would be highlighted in red.

const ChoicesArea = () => {
  const [choices, setChoices] = useState([]);
  const [typingChoice, setTypingChoice] = useState('');
  const [shouldShowInputError, setShouldShowInputError] = useState(false);
  const [shouldShowFullError, setShouldShowFullError] = useState(false);

  const errorToDisplay = shouldShowFullError ? 'Max options count is 50' : 'This option is already added';

  const onInputChange = typingChoice => {
    setTypingChoice(typingChoice);
    setShouldShowInputError(false);
  };

  const onAddButtonClick = () => {
    //it would be the best if we have some sort of unification if these choices should be PascalCase, with Capital letter, ALLCAPS etc...
    if (choices.length >= 50) {
      setShouldShowFullError(true);
    } else {
      if (!choices.includes(typingChoice) && typingChoice.trim()) {
        setChoices([...choices, typingChoice.trim()]);
        setTypingChoice('');
      } else {
        if (typingChoice.trim()) {
          setShouldShowInputError(true);
        }
      }
    }
  };

  const deleteChoice = indexToRemove => {
    const newChoices = [...choices];
    newChoices.splice(indexToRemove, 1);
    setChoices([...newChoices]);
  };

  return (
    <Wrap>
      <InputWrap>
        <Input value={typingChoice} onChange={e => onInputChange(e.target.value.trim())} placeholder="Add option" />
        <AddButton onClick={onAddButtonClick} type="button" disabled={typingChoice === ''}>
          Add
        </AddButton>
      </InputWrap>
      <ErrorWrap $showError={shouldShowInputError || shouldShowFullError}>{errorToDisplay}</ErrorWrap>

      {choices.map((choice, index) => {
        return (
          <EntryRow key={index} onClick={() => deleteChoice(index)}>
            {choice}
          </EntryRow>
        );
      })}
    </Wrap>
  );
};

export default ChoicesArea;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 230px;
  min-height: 200px;
  max-height: 250px;
  overflow-y: scroll;
  padding: 6px;
  border: 1px solid #bfc1c2;
  border-radius: 4px;
`;

// TODO: Should make it sticky to the top of the wrap
const InputWrap = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #bfc1c2;
  border-radius: 4px;
`;

const AddButton = styled.button`
  width: 100%;
`;

const ErrorWrap = styled.div`
  font-size: 10px;
  font-weight: 600;
  color: #ff0000;
  opacity: ${({ $showError }) => ($showError ? '100%' : 0)};
`;

const EntryRow = styled.div`
  font-size: 16px;
  padding: 2px 4px;
  border-radius: 2px;

  &:hover {
    background-color: #d7d9d9;
    cursor: pointer;
  }
`;
