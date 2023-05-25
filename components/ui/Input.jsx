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

export { Input, TodoInput };
