import styled from 'styled-components';

const Input = ({ placeholder, value, onChange, finalFormProps, shouldStretchHorizontally }) => {
  const val = value || finalFormProps?.value || finalFormProps?.preSavedValue || '';
  const inputOnChange = onChange || finalFormProps?.onChange;

  return (
    <Wrap
      type="text"
      value={val}
      placeholder={placeholder}
      onChange={inputOnChange}
      $shouldStretchHorizontally={shouldStretchHorizontally}
    />
  );
};

export default Input;

const Wrap = styled.input`
  width: ${({ $shouldStretchHorizontally }) => $shouldStretchHorizontally && '100%'};
  padding: 6px 12px;
  border: 1px solid #bfc1c2;
  border-radius: 4px;
`;
