import styled from 'styled-components';

const FormField = ({ fieldLabel, content }) => (
  <FieldWrap>
    <LabelWrap>{fieldLabel}</LabelWrap>
    <div>{content}</div>
  </FieldWrap>
);

export default FormField;

const FieldWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0;
  margin: 8px 0;
  /* border: 1px solid red; */
`;

const LabelWrap = styled.div`
  width: 130px;
  margin-right: 8px;
  font-weight: 600;
  /* border: 1px solid green; */
`;
