import styled from 'styled-components';

/*
Multi-select:
  In the full version of this spec, that is a drop-down. 
  A builder could select "multi-select" (allow end users to select multiple options) or 
  "single-select" (end users can only pick one of the options). 
  
Checkbox:
  After the builder creates their form with this multiple choice option, 
  the end user be required to pick a choice before they could submit the form.
  */

const TypeFieldContent = () => (
  <Wrap>
    <TextWrap>Multi-select</TextWrap>

    <input type="checkbox" />
    <SubTextWrap>A Value is required</SubTextWrap>
  </Wrap>
);

export default TypeFieldContent;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
`;

const TextWrap = styled.div`
  font-weight: 600;
  margin-right: 8px;
`;

const SubTextWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`;
