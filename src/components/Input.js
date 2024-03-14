import styled from 'styled-components';

const Input = ({ placeholder, value, onChange, onBlur, error, finalFormProps, shouldStretchHorizontally }) => {
  const val = value || finalFormProps?.value || finalFormProps?.preSavedValue || '';
  const inputOnChange = onChange || finalFormProps?.onChange;
  const shouldShowError = error && !val;

  return (
    <Wrap>
      <Inner
        type="text"
        value={val}
        placeholder={shouldShowError ? '' : placeholder}
        $showError={shouldShowError}
        onChange={inputOnChange}
        onBlur={onBlur}
        $shouldStretchHorizontally={shouldStretchHorizontally}
      />

      {shouldShowError && <TextWrapper $shouldShow={shouldShowError}>Field is required</TextWrapper>}
    </Wrap>
  );
};

export default Input;

const Wrap = styled.div`
  display: flex;
  position: relative;
`;

const Inner = styled.input`
  width: ${({ $shouldStretchHorizontally }) => $shouldStretchHorizontally && '100%'};
  padding: 6px 12px;
  border: 1px solid #bfc1c2;
  box-shadow: inset 0 0 0 2px ${({ $showError }) => ($showError ? '#ff0000' : 'transparent')};
  border-radius: 4px;
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 25%;
  left: 10%;
  color: #cc0000;
  font-size: 12px;
`;
