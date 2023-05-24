import styled from 'styled-components';
import themes from '../../styles/Themes';

const BlueButtonStyled = styled.button`
  font-size: ${themes.fontSize.button};
  background-color: ${themes.colors.blueBg};
  color: ${themes.colors.white};
  border-radius: ${themes.borderRadius.button};
  padding: ${themes.padding.button};
  font-weight: ${themes.fontWeight.button};
  cursor: ${themes.cursor.button};
  letter-spacing: ${themes.letterSpacing.button};
  transition: ${themes.transition.button};
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

const BigBlueButtonStyled = styled(BlueButtonStyled)`
  padding: ${themes.padding.bigButton};
`;

const TransparentButtonStyled = styled(BlueButtonStyled)`
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

const GreenButtonStyled = styled(BlueButtonStyled)`
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

const RedButtonStyled = styled(BlueButtonStyled)`
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

const GreyButtonStyled = styled(BlueButtonStyled)`
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

const BlueButton = ({ as, href, children }) => {
  return (
    <>
      <BlueButtonStyled as={as} href={href}>
        {children}
      </BlueButtonStyled>
    </>
  );
};

const BigBlueButton = ({ as, href, children }) => {
  return (
    <>
      <BigBlueButtonStyled as={as} href={href}>
        {children}
      </BigBlueButtonStyled>
    </>
  );
};

const TransparentButton = ({ as, href, children }) => {
  return (
    <>
      <TransparentButtonStyled as={as} href={href}>
        {children}
      </TransparentButtonStyled>
    </>
  );
};

const GreenButton = ({ as, href, children }) => {
  return (
    <>
      <GreenButtonStyled as={as} href={href}>
        {children}
      </GreenButtonStyled>
    </>
  );
};

const RedButton = ({ as, href, children }) => {
  return (
    <>
      <RedButtonStyled as={as} href={href}>
        {children}
      </RedButtonStyled>
    </>
  );
};

const GreyButton = ({ as, href, children }) => {
  return (
    <>
      <GreyButtonStyled as={as} href={href}>
        {children}
      </GreyButtonStyled>
    </>
  );
};

export {
  BlueButton,
  BigBlueButton,
  TransparentButton,
  GreenButton,
  RedButton,
  GreyButton,
};
