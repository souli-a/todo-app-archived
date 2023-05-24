import styled from 'styled-components';
import themes from '../../styles/Themes';

const InputStyled = styled.input`
  font-size: ${themes.fontSize.input};
  border-radius: ${themes.borderRadius.input};
  background-color: ${themes.colors.inputBg};
  padding: ${themes.padding.input};
  outline: ${themes.outline.input};
  transition: ${themes.transition.input};
  &::placeholder {
    color: ${themes.colors.inputPlaceholder};
  }
  &:focus {
    box-shadow: ${themes.boxShadow.input} ${themes.colors.inputBg};
    background-color: ${themes.colors.inputBgNone};
    &::placeholder {
      color: ${themes.colors.inputPlaceholderFocus};
    }
  }
  &:not(:placeholder-shown) {
    box-shadow: ${themes.boxShadow.input} ${themes.colors.inputBg};
    background-color: ${themes.colors.inputBgNone};
  }
`;

const Input = ({ placeholder }) => {
  return (
    <>
      <InputStyled placeholder={placeholder} />
    </>
  );
};

export default Input;
