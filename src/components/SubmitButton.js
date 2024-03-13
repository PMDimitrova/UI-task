import styled from 'styled-components';

//TODO: Submit button specs

const SubmitButton = () => {
  return <Wrap type="button">Save changes</Wrap>;
};

export default SubmitButton;

const Wrap = styled.button`
  padding: 6px 12px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background-color: #65b75e;
  border: 1px transparent;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    background-color: #387233;
    transition: background-color 0.3s ease-in-out;
  }
`;
