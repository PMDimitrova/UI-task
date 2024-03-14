import { Field, Form } from 'react-final-form';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useState } from 'react';

import localStorageServices from '../utils/localStorageHandler';
import TypeFieldContent from './TypeFieldContent';
import makePostRequest from '../utils/services';
import OrderDropdown from './OrderDropdown';
import ChoicesArea from './ChoicesArea';
import FormLine from './FormLine';
import Input from './Input';

// TODO: Add Global State Manager, so that we can avoid prop drilling; although it's not present at the moment

const orderOfChoicesOptions = {
  AZ: 'Alphabetical order',
  ZA: 'Reverse alphabetical order',
  user: 'As per user`s input order',
};

const FormContent = () => {
  const [choices, setChoices] = useState([]);
  const [checkboxMarked, setCheckboxMarked] = useState(false);
  const [orderOfChoices, setOrderOfChoices] = useState(orderOfChoicesOptions.user);
  const [shouldRetriggerOrder, setShouldRetriggerOrder] = useState(false);
  const [storedLabel, setStoredLabel] = useState(undefined);
  const [storedDefaultValue, setStoredDefaultValue] = useState(undefined);

  const onFormSubmit = ({ formLabelField, defaultValueField }) => {
    if (!choices.includes(defaultValueField)) {
      choices.push(defaultValueField);
      setShouldRetriggerOrder(true);
    }

    const shouldDisplayOptionsAlphabetically = orderOfChoices === orderOfChoicesOptions.AZ;

    const dataForSending = {
      label: formLabelField,
      required: checkboxMarked,
      default: defaultValueField,
      choices: [...choices],
      displayAlpha: shouldDisplayOptionsAlphabetically,
    };

    console.log('dataForSending: ', dataForSending);

    makePostRequest(dataForSending);
  };

  const clearOptions = () => {
    setChoices([]);
    localStorageServices.clearLocalStorage();
  };

  useEffect(() => {
    // If the user changes it to order of input, after they're sorted one time, we cannot reverse this;
    // I think it would be overkill to store exactly the way the user has entered them

    if (!(orderOfChoices === orderOfChoicesOptions.user)) {
      const newOrderedOptions = [...choices];
      newOrderedOptions.sort();

      if (orderOfChoices === orderOfChoicesOptions.ZA) {
        newOrderedOptions.reverse();
      }

      setChoices([...newOrderedOptions]);
      localStorageServices.saveToLocalStorage('choices', [...newOrderedOptions]);
      setShouldRetriggerOrder(false);
    }
  }, [orderOfChoices, shouldRetriggerOrder]);

  useEffect(() => {
    const storedLabel = localStorageServices.getFromLocalStorageData('label');
    setStoredLabel(storedLabel);

    const storedRequiredCheckboxValue = localStorageServices.getFromLocalStorageData('required');
    setCheckboxMarked(storedRequiredCheckboxValue === 'true' ? true : false);

    const storedDefaultValue = localStorageServices.getFromLocalStorageData('default');
    setStoredDefaultValue(storedDefaultValue);

    const storedChoices = localStorageServices.getFromLocalStorageData('choices');
    if (storedChoices) {
      const choicesToShow = storedChoices.split(',');
      setChoices(choicesToShow);
    }

    const storedOrderPreference = localStorageServices.getFromLocalStorageData('displayOrder');
    if (storedOrderPreference) {
      setOrderOfChoices(storedOrderPreference);
    }
  }, []);

  return (
    <Wrap>
      <Form
        onSubmit={onFormSubmit}
        validate={({ formLabelField, defaultValueField }) => {
          const errors = {};

          if (!formLabelField) {
            errors.formLabelField = 'Required';
          }

          if (!defaultValueField) {
            errors.defaultValueField = 'Required';
          }

          return errors;
        }}
        render={({ handleSubmit, invalid, form }) => (
          <StyledForm onSubmit={handleSubmit} noValidate>
            <Field
              name="formLabelField"
              render={({ input }) => {
                return (
                  <FormLine
                    fieldLabel="Label"
                    content={
                      <Input
                        placeholder="Enter the new form's Label"
                        shouldStretchHorizontally
                        finalFormProps={{
                          ...input,
                          preSavedValue: storedLabel,
                          onChange: e => {
                            input.onChange(e);
                            localStorageServices.saveToLocalStorage('label', e.target.value.trim());
                            setStoredLabel(undefined);
                          },
                        }}
                      />
                    }
                  />
                );
              }}
            />

            <FormLine
              fieldLabel="Type"
              content={<TypeFieldContent checkboxMarked={checkboxMarked} setCheckboxMarked={setCheckboxMarked} />}
            />

            <Field
              name="defaultValueField"
              render={({ input }) => {
                return (
                  <FormLine
                    fieldLabel="Default Value"
                    content={
                      <Input
                        placeholder="Default value of the form"
                        shouldStretchHorizontally
                        finalFormProps={{
                          ...input,
                          preSavedValue: storedDefaultValue,
                          onChange: e => {
                            input.onChange(e);
                            localStorageServices.saveToLocalStorage('default', e.target.value.trim());
                            setStoredDefaultValue(undefined);
                          },
                        }}
                      />
                    }
                  />
                );
              }}
            />

            <FormLine
              fieldLabel="Choices"
              content={
                <div>
                  <ChoicesArea
                    choices={choices}
                    setChoices={setChoices}
                    setShouldRetriggerOrder={setShouldRetriggerOrder}
                  />
                  <DisclaimerWrap>You can remove option by clicking on it</DisclaimerWrap>
                </div>
              }
              shouldStretchDown
            />

            <FormLine
              fieldLabel="Order"
              content={<OrderDropdown orderOfChoices={orderOfChoices} setOrderOfChoices={setOrderOfChoices} />}
            />

            <FormLine
              content={
                <ButtonsWrap>
                  <SubmitButton type="submit" $isDisabled={invalid || !choices.length} disabled={invalid}>
                    Save changes
                  </SubmitButton>

                  <div>&nbsp;Or&nbsp;</div>

                  <CancelButton
                    type="button"
                    onClick={() => {
                      form.reset();
                      clearOptions();
                    }}
                  >
                    Cancel
                  </CancelButton>
                </ButtonsWrap>
              }
            />
          </StyledForm>
        )}
      />
    </Wrap>
  );
};

export default FormContent;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
`;

const StyledForm = styled.form`
  width: 100%;
`;

const DisclaimerWrap = styled.div`
  margin-top: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #96999b;
`;

const ButtonsWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  padding: 6px 12px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background-color: ${({ $isDisabled }) => ($isDisabled ? '#387233' : '#65b75e')};
  border: 1px transparent;
  border-radius: 4px;

  &:hover {
    cursor: ${({ $isDisabled }) => ($isDisabled ? 'not-allowed' : 'pointer')};
    background-color: #387233;
    transition: background-color 0.3s ease-in-out;
  }
`;

const CancelButton = styled.button`
  padding: 4px; //for accessibility
  font-weight: 600;
  font-size: 16px;
  color: #ff0000;
  background-color: transparent;
  border: 1px transparent;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    color: #cc0000;
    transition: color 0.4s ease-in-out;
  }
`;
