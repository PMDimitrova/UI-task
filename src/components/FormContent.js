import styled from 'styled-components';

import TypeFieldContent from './TypeFieldContent';
import OrderDropdown from './OrderDropdown';
import SubmitButton from './SubmitButton';
import CancelButton from './CancelButton';
import ChoicesArea from './ChoicesArea';
import FormField from './FormField';
import Input from './Input';

// TODO: globally/LOCAL STORAGE: For the purpose of the demo, you may want the form to keep its values after the form is submitted. This helps demonstrate the prior requirement (that the default value is added).

const FormContent = () => {
  return (
    <Wrap>
      <FormField fieldLabel="Label" content={<Input placeholder="Enter the new form's Label" />} />

      <FormField fieldLabel="Type" content={<TypeFieldContent />} />

      {/* TODO: If the default value is not one of the choices, it should be added to the list of choices when the field is saved. */}
      <FormField fieldLabel="Default Value" content={<Input placeholder="Default value of the form" />} />

      <FormField fieldLabel="Choices" content={<ChoicesArea />} />

      <FormField fieldLabel="Order" content={<OrderDropdown />} />

      <FormField
        content={
          <ButtonsWrap>
            <SubmitButton />
            <div>&nbsp;Or&nbsp;</div>
            <CancelButton />
          </ButtonsWrap>
        }
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

const ButtonsWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  font-size: 16px;
`;
