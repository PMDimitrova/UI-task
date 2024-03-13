import styled from 'styled-components';

const Input = ({ placeholder }) => {
  return <Wrap type="text" id="" name="" placeholder={placeholder}></Wrap>;
};

export default Input;

const Wrap = styled.input`
  width: 100%;
  padding: 6px 12px;
  border: 1px solid #bfc1c2;
  border-radius: 4px;
`;
