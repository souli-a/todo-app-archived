import styled from 'styled-components';
import themes from '../../styles/Themes';
import { forwardRef } from 'react';

const StyledBlueButton = styled.button`
  font-size: ${themes.fontSize.button};
  background-color: ${themes.colors.blueBg};
  color: ${themes.colors.white};
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
    background-color: ${themes.colors.blueHover};
  }
  &:active {
    background-color: ${themes.colors.blueActive};
    box-shadow: ${themes.boxShadow.button} ${themes.colors.blueBorder};
  }
  &:focus {
    box-shadow: ${themes.boxShadow.button} ${themes.colors.blueBorder};
  }
`;

const StyledBigBlueButton = styled(StyledBlueButton)`
  padding: ${themes.padding.bigButton};
  font-size: ${themes.fontSize.bigButton};
`;

const StyledTransparentButton = styled(StyledBlueButton)`
  background-color: ${themes.colors.none};
  color: ${themes.colors.black};
  &:hover {
    background-color: ${themes.colors.transparentHover};
  }
  &:active {
    background-color: ${themes.colors.transparentActive};
    box-shadow: ${themes.boxShadow.button} ${themes.colors.transparentBorder};
  }
  &:focus {
    box-shadow: ${themes.boxShadow.button} ${themes.colors.transparentBorder};
  }
`;

const StyledGreenButton = styled(StyledBlueButton)`
  background-color: ${themes.colors.greenBg};
  color: ${themes.colors.white};
  &:hover {
    background-color: ${themes.colors.greenHover};
  }
  &:active {
    background-color: ${themes.colors.greenActive};
    box-shadow: ${themes.boxShadow.button} ${themes.colors.greenBorder};
  }
  &:focus {
    box-shadow: ${themes.boxShadow.button} ${themes.colors.greenBorder};
  }
`;

const StyledBigGreenButton = styled(StyledGreenButton)`
  padding: ${themes.padding.bigButton};
  font-size: ${themes.fontSize.bigButton};
`;

const StyledRedButton = styled(StyledBlueButton)`
  background-color: ${themes.colors.redBg};
  &:hover {
    background-color: ${themes.colors.redHover};
  }
  &:active {
    background-color: ${themes.colors.redActive};
    box-shadow: ${themes.boxShadow.button} ${themes.colors.redBorder};
  }
  &:focus {
    box-shadow: ${themes.boxShadow.button} ${themes.colors.redBorder};
  }
`;

const StyledGreyButton = styled(StyledBlueButton)`
  background-color: ${themes.colors.greyBg};
  color: ${themes.colors.black};
  &:hover {
    background-color: ${themes.colors.greyHover};
  }
  &:active {
    background-color: ${themes.colors.greyActive};
    box-shadow: ${themes.boxShadow.button} ${themes.colors.greyBorder};
  }
  &:focus {
    box-shadow: ${themes.boxShadow.button} ${themes.colors.greyBorder};
  }
`;

const StyledPasswordButton = styled(StyledGreyButton)`
  background-color: ${themes.colors.passwordButtonBg};
  display: ${themes.display.passwordButton};
  justify-content: ${themes.justifyContent.passwordButton};
  align-items: ${themes.alignItems.passwordButton};
  border-radius: ${themes.borderRadius.passwordButton};
  box-shadow: ${themes.boxShadow.passwordButton};
  &:hover {
    background-color: ${themes.colors.passwordButtonBgHover};
  }
  &:active {
    background-color: ${themes.colors.passwordButtonBgActive};
  }
  &:active,
  &:focus {
    box-shadow: ${themes.boxShadow.passwordButtonActive};
  }
`;

const BlueButton = ({ as, href, children }) => {
  return (
    <>
      <StyledBlueButton as={as} href={href}>
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

const TransparentButton = ({ as, href, children }) => {
  return (
    <>
      <StyledTransparentButton as={as} href={href}>
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
  GreyButton,
  PasswordButton,
};
