import styled from 'styled-components';

const FormLine = ({ fieldLabel, content, shouldStretchDown }) => {
  return (
    <LineWrap $shouldStretchDown={shouldStretchDown}>
      <LabelWrap>{fieldLabel}</LabelWrap>
      <ContentWrap>{content}</ContentWrap>
    </LineWrap>
  );
};

export default FormLine;

const LineWrap = styled.div`
  display: flex;
  align-items: ${({ $shouldStretchDown }) => (!$shouldStretchDown ? 'center' : 'baseline')};
  padding: 8px 0;
  margin: 8px 0;
`;

const LabelWrap = styled.div`
  width: 130px;
  margin-right: 8px;
  font-weight: 600;
`;

const ContentWrap = styled.div`
  display: flex;
  width: 100%;
  max-width: 250px;
`;
