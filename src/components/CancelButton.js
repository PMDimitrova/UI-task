import styled from 'styled-components';

// TODO: Add a button that allows the builder to clear the form and start fresh.
const CancelButton = () => {
  return <Wrap type="button">Cancel</Wrap>;
};

export default CancelButton;

const Wrap = styled.button`
  padding: 4px; //for accessibility
  font-weight: 600;
  font-size: 16px;
  color: red;
  background-color: transparent;
  border: 1px transparent;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    color: #cc0000;
    transition: color 0.4s ease-in-out;
  }
`;
