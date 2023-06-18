import styled from 'styled-components';
import { themes, lightTheme } from '../../styles/Themes';
import { Eye, EyeSlash } from '@phosphor-icons/react';
import { PasswordButton } from './Button';
import { useState } from 'react';
import { forwardRef } from 'react';

const StyledPasswordInput = styled.input`
  font-size: ${themes.fontSize.input};
  border-radius: ${themes.borderRadius.passwordInput};
  height: ${themes.height.input};
  background-color: ${lightTheme.inputBg};
  padding: ${themes.padding.input};
  transition: ${themes.transition.input};
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
  &:focus + button {
    box-shadow: ${themes.boxShadow.input} ${lightTheme.inputBg};
  }
  &:not(:placeholder-shown) + button {
    box-shadow: ${themes.boxShadow.input} ${lightTheme.inputBg};
  }
`;

const PasswordInputParentDivision = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const PasswordInput = forwardRef(
  ({ name, placeholder, autoComplete, register }, ref) => {
    const [passwordType, setPasswordType] = useState('password');
    const [passwordInput, setPasswordInput] = useState('');

    const handlePasswordChange = (e) => {
      setPasswordInput(e.target.value);
    };

    const togglePassword = (e) => {
      e.preventDefault();
      passwordType === 'password'
        ? setPasswordType('text')
        : setPasswordType('password');
    };

    return (
      <PasswordInputParentDivision>
        <StyledPasswordInput
          {...register()}
          type={passwordType}
          onChange={handlePasswordChange}
          value={passwordInput}
          name={name}
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
        <PasswordButton onClick={togglePassword}>
          {passwordType === 'password' ? (
            <Eye weight="regular" size={17} color={lightTheme.blackIcon} />
          ) : (
            <EyeSlash weight="regular" size={17} color={lightTheme.blackIcon} />
          )}
        </PasswordButton>
      </PasswordInputParentDivision>
    );
  }
);

export default PasswordInput;
