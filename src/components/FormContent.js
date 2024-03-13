import { Field, Form } from 'react-final-form';
import styled from 'styled-components';

import TypeFieldContent from './TypeFieldContent';
import OrderDropdown from './OrderDropdown';
import ChoicesArea from './ChoicesArea';
import FormLine from './FormLine';
import Input from './Input';

// TODO: globally/LOCAL STORAGE: For the purpose of the demo, you may want the form to keep its values after the form is submitted. This helps demonstrate the prior requirement (that the default value is added).

const FormContent = () => {
  const onFormSubmit = props => {
    // TODO: get all the data and send it as JSON
    console.log('props: ', props);
    console.log('form submitted ');
  };

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
            errors.defaultValueField = 'Required'; // TODO: required if not in choices field
          }

          return errors;
        }}
        render={({ handleSubmit, invalid }) => (
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
                          onChange: e => {
                            input.onChange(e);
                          },
                        }}
                      />
                    }
                  />
                );
              }}
            />

            <Field
              name="typeField"
              render={() => {
                return <FormLine fieldLabel="Type" content={<TypeFieldContent />} />;
              }}
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
                          onChange: e => {
                            input.onChange(e);
                          },
                        }}
                      />
                    }
                  />
                );
              }}
            />

            <Field
              name="choicesField"
              render={() => {
                return (
                  <FormLine
                    fieldLabel="Choices"
                    content={
                      <div>
                        <ChoicesArea />
                        <DisclaimerWrap>You can remove option by clicking on it</DisclaimerWrap>
                      </div>
                    }
                    shouldStretchDown
                  />
                );
              }}
            />

            <Field
              name="orderField"
              render={() => {
                return <FormLine fieldLabel="Order" content={<OrderDropdown />} />;
              }}
            />

            <FormLine
              content={
                <ButtonsWrap>
                  <SubmitButton type="submit" $isDisabled={invalid} disabled={invalid}>
                    Save changes
                  </SubmitButton>
                  <div>&nbsp;Or&nbsp;</div>
                  <CancelButton type="button">Cancel</CancelButton>
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
