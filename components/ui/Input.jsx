import styled from 'styled-components';
import themes from '../../styles/Themes';

const StyledInput = styled.input`
  font-size: ${themes.fontSize.input};
  border-radius: ${themes.borderRadius.input};
  background-color: ${themes.colors.inputBg};
  padding: ${themes.padding.input};
  transition: ${themes.transition.input};
  height: ${themes.height.input};
  width: ${themes.width.input};
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

const StyledTodoInput = styled(StyledInput)`
  font-size: ${themes.fontSize.todoInput};
  width: ${themes.width.todoInput};
  height: ${themes.height.todoInput};
  padding: ${themes.padding.todoInput};
`;

const StyledPasswordInput = styled(StyledInput)`
  border-radius: ${themes.borderRadius.passwordInput};
  height: ${themes.height.input};
  &:focus + button {
    box-shadow: ${themes.boxShadow.input} ${themes.colors.inputBg};
  }
  &:not(:placeholder-shown) + button {
    box-shadow: ${themes.boxShadow.input} ${themes.colors.inputBg};
  }
`;

const Input = ({ type, placeholder, autocomplete }) => {
  return (
    <>
      <StyledInput
        type={type}
        placeholder={placeholder}
        autoComplete={autocomplete}
      />
    </>
  );
};

const TodoInput = ({ type, placeholder }) => {
  return (
    <>
      <StyledTodoInput type={type} placeholder={placeholder} />
    </>
  );
};

const PasswordInput = ({
  type,
  placeholder,
  onChange,
  value,
  name,
  autoComplete,
}) => {
  return (
    <>
      <StyledPasswordInput
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        autoComplete={autoComplete}
      />
    </>
  );
};

export { Input, TodoInput, PasswordInput };
