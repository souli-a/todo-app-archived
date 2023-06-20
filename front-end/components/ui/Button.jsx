import styled from 'styled-components';
import { themes, lightTheme } from '../../styles/Themes';
import { forwardRef } from 'react';

const StyledBlueButton = styled.button`
  font-size: ${themes.fontSize.button};
  background-color: ${lightTheme.blueBg};
  color: ${lightTheme.white};
  border-radius: ${themes.borderRadius.button};
  padding: ${themes.padding.button};
  font-weight: ${themes.fontWeight.button};
  cursor: ${themes.cursor.button};
  letter-spacing: ${themes.letterSpacing.button};
  transition: ${themes.transition.button};
  display: ${themes.display.button};
  justify-content: ${themes.justifyContent.button};
  align-items: ${themes.alignItems.button};
  &:hover {
    background-color: ${lightTheme.blueHover};
  }
  &:active {
    background-color: ${lightTheme.blueActive};
    box-shadow: ${themes.boxShadow.button} ${lightTheme.blueBorder};
  }
  &:focus {
    box-shadow: ${themes.boxShadow.button} ${lightTheme.blueBorder};
  }
`;

const StyledBigBlueButton = styled(StyledBlueButton)`
  padding: ${themes.padding.bigButton};
  font-size: ${themes.fontSize.bigButton};
`;

const StyledTransparentButton = styled(StyledBlueButton)`
  background-color: ${({ theme }) => theme.bgColorTransparentButton};
  color: ${({ theme }) => theme.colorTransparentButton};
  &:hover {
    background-color: ${({ theme }) => theme.bgColorTransparentButtonHover};
  }
  &:active {
    background-color: ${({ theme }) => theme.bgColorTransparentButtonActive};
    box-shadow: ${themes.boxShadow.button}
      ${({ theme }) => theme.colorBorderTransparentButton};
  }
  &:focus {
    box-shadow: ${themes.boxShadow.button}
      ${({ theme }) => theme.colorBorderTransparentButton};
  }
`;

const StyledGreenButton = styled(StyledBlueButton)`
  background-color: ${lightTheme.greenBg};
  color: ${lightTheme.white};
  &:hover {
    background-color: ${lightTheme.greenHover};
  }
  &:active {
    background-color: ${lightTheme.greenActive};
    box-shadow: ${themes.boxShadow.button} ${lightTheme.greenBorder};
  }
  &:focus {
    box-shadow: ${themes.boxShadow.button} ${lightTheme.greenBorder};
  }
`;

const StyledBigGreenButton = styled(StyledGreenButton)`
  padding: ${themes.padding.bigButton};
  font-size: ${themes.fontSize.bigButton};
`;

const StyledRedButton = styled(StyledBlueButton)`
  background-color: ${lightTheme.redBg};
  &:hover {
    background-color: ${lightTheme.redHover};
  }
  &:active {
    background-color: ${lightTheme.redActive};
    box-shadow: ${themes.boxShadow.button} ${lightTheme.redBorder};
  }
  &:focus {
    box-shadow: ${themes.boxShadow.button} ${lightTheme.redBorder};
  }
`;

const StyledRedButtonDelete = styled(StyledRedButton)`
  position: ${themes.position.redButtonDelete};
  margin: ${themes.margin.redButtonDelete};
  border-radius: ${themes.borderRadius.redButtonDelete};
  @media (max-width: 440px) {
    margin: 0.55rem 0 0 14.9rem;
  }
`;

const StyledGreyButton = styled(StyledBlueButton)`
  background-color: ${lightTheme.greyBg};
  color: ${lightTheme.black};
  &:hover {
    background-color: ${lightTheme.greyHover};
  }
  &:active {
    background-color: ${lightTheme.greyActive};
    box-shadow: ${themes.boxShadow.button} ${lightTheme.greyBorder};
  }
  &:focus {
    box-shadow: ${themes.boxShadow.button} ${lightTheme.greyBorder};
  }
`;

const StyledPasswordButton = styled(StyledGreyButton)`
  background-color: ${lightTheme.passwordButtonBg};
  display: ${themes.display.passwordButton};
  justify-content: ${themes.justifyContent.passwordButton};
  align-items: ${themes.alignItems.passwordButton};
  border-radius: ${themes.borderRadius.passwordButton};
  box-shadow: ${themes.boxShadow.passwordButton};
  &:hover {
    background-color: ${lightTheme.passwordButtonBgHover};
  }
  &:active {
    background-color: ${lightTheme.passwordButtonBgActive};
  }
  &:active,
  &:focus {
    box-shadow: ${themes.boxShadow.passwordButtonActive};
  }
`;

const BlueButton = ({ onClick, as, href, children }) => {
  return (
    <>
      <StyledBlueButton onClick={onClick} as={as} href={href}>
        {children}
      </StyledBlueButton>
    </>
  );
};

const BigBlueButton = forwardRef(({ type, as, href, children }, ref) => {
  return (
    <>
      <StyledBigBlueButton type={type} as={as} href={href}>
        {children}
      </StyledBigBlueButton>
    </>
  );
});

const TransparentButton = ({ onClick, as, href, children }) => {
  return (
    <>
      <StyledTransparentButton onClick={onClick} as={as} href={href}>
        {children}
      </StyledTransparentButton>
    </>
  );
};

const GreenButton = ({ as, href, children }) => {
  return (
    <>
      <StyledGreenButton as={as} href={href}>
        {children}
      </StyledGreenButton>
    </>
  );
};

const BigGreenButton = ({ as, href, children }) => {
  return (
    <>
      <StyledBigGreenButton as={as} href={href}>
        {children}
      </StyledBigGreenButton>
    </>
  );
};

const RedButton = ({ as, href, children, onClick }) => {
  return (
    <>
      <StyledRedButton onClick={onClick} as={as} href={href}>
        {children}
      </StyledRedButton>
    </>
  );
};

const RedButtonDelete = ({ as, href, children, onClick }) => {
  return (
    <>
      <StyledRedButtonDelete onClick={onClick} as={as} href={href}>
        {children}
      </StyledRedButtonDelete>
    </>
  );
};

const GreyButton = ({ as, href, children }) => {
  return (
    <>
      <StyledGreyButton as={as} href={href}>
        {children}
      </StyledGreyButton>
    </>
  );
};

const PasswordButton = ({ children, onClick }) => {
  return (
    <>
      <StyledPasswordButton onClick={onClick}>{children}</StyledPasswordButton>
    </>
  );
};

export {
  BlueButton,
  BigBlueButton,
  TransparentButton,
  GreenButton,
  BigGreenButton,
  RedButton,
  RedButtonDelete,
  GreyButton,
  PasswordButton,
};
