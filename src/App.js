import styled from 'styled-components';

import FormContent from './components/FormContent';

function App() {
  return (
    <Wrap>
      <FormOuterBox>
        <FormHeader>Field Builder</FormHeader>

        <FormContent />
      </FormOuterBox>
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f3fefb;
`;

const FormOuterBox = styled.div`
  min-width: 380px;
  background-color: white;
  border: 1px solid #32647f;
  border-radius: 6px;
`;

const FormHeader = styled.div`
  padding: 12px;
  color: #32647f;
  font-weight: 700;
  background-color: #daebf7;
  border-radius: 6px 6px 0 0;
`;
