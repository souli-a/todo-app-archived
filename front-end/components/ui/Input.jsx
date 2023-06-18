import styled from 'styled-components';
import { themes, lightTheme } from '../../styles/Themes';
import { forwardRef } from 'react';

const StyledInput = styled.input`
  font-size: ${themes.fontSize.input};
  border-radius: ${themes.borderRadius.input};
  background-color: ${lightTheme.inputBg};
  padding: ${themes.padding.input};
  transition: ${themes.transition.input};
  height: ${themes.height.input};
  width: ${themes.width.input};
  color: ${({ theme }) => theme.colorInput};
  &::placeholder {
    color: ${lightTheme.inputPlaceholder};
  }
  &:focus {
    box-shadow: ${themes.boxShadow.input} ${lightTheme.inputBg};
    background-color: ${lightTheme.inputBgNone};
    &::placeholder {
      color: ${lightTheme.inputPlaceholderFocus};
    }
  }
  &:not(:placeholder-shown) {
    box-shadow: ${themes.boxShadow.input} ${lightTheme.inputBg};
    background-color: ${lightTheme.inputBgNone};
  }
`;

const StyledTodoInput = styled(StyledInput)`
  font-size: ${themes.fontSize.todoInput};
  width: ${themes.width.todoInput};
  height: ${themes.height.todoInput};
  padding: ${themes.padding.todoInput};
`;

const Input = forwardRef(
  ({ type, placeholder, autoComplete, register }, ref) => {
    return (
      <>
        <StyledInput
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          {...register()}
        />
      </>
    );
  }
);

const TodoInput = forwardRef(
  ({ type, placeholder, onChange, onKeyDown, value, maxLength }, ref) => {
    return (
      <>
        <StyledTodoInput
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          onKeyDown={onKeyDown}
          value={value}
          ref={ref}
          maxLength={maxLength}
        />
      </>
    );
  }
);

export { Input, TodoInput };
