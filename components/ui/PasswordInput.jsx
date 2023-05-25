import styled from 'styled-components';
import themes from '../../styles/Themes';
import { Eye, EyeSlash } from '@phosphor-icons/react';
import { PasswordButton } from './Button';
import { useState } from 'react';

const StyledPasswordInput = styled.input`
  font-size: ${themes.fontSize.input};
  border-radius: ${themes.borderRadius.passwordInput};
  height: ${themes.height.input};
  background-color: ${themes.colors.inputBg};
  padding: ${themes.padding.input};
  transition: ${themes.transition.input};
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
  &:focus + button {
    box-shadow: ${themes.boxShadow.input} ${themes.colors.inputBg};
  }
  &:not(:placeholder-shown) + button {
    box-shadow: ${themes.boxShadow.input} ${themes.colors.inputBg};
  }
`;

const PasswordInputParentDivision = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const PasswordInput = ({ name, placeholder, autocomplete }) => {
  const [passwordType, setPasswordType] = useState('password');
  const [passwordInput, setPasswordInput] = useState('');

  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };

  const togglePassword = (event) => {
    event.preventDefault();
    passwordType === 'password'
      ? setPasswordType('text')
      : setPasswordType('password');
  };

  return (
    <PasswordInputParentDivision>
      <StyledPasswordInput
        type={passwordType}
        onChange={handlePasswordChange}
        value={passwordInput}
        name={name}
        placeholder={placeholder}
        autoComplete={autocomplete}
      />
      <PasswordButton onClick={togglePassword}>
        {passwordType === 'password' ? (
          <Eye size={32} weight="regular" />
        ) : (
          <EyeSlash size={32} weight="regular" />
        )}
      </PasswordButton>
    </PasswordInputParentDivision>
  );
};

export default PasswordInput;
