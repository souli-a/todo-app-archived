import styled from 'styled-components';
import { Eye, EyeSlash } from '@phosphor-icons/react';
import { PasswordButton } from './Button';
import { useState } from 'react';
import { PasswordInput } from './Input';

const PasswordInputParentDivision = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const InputPassword = ({ name, placeholder, autocomplete }) => {
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
      <PasswordInput
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

export default InputPassword;
