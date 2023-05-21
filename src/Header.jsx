import styled from 'styled-components';
import colors from './Colors.jsx';

const Div = styled.div`
  height: fit-content;
  padding: 1.5rem 1.5rem 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  &.right-header {
    padding: 0;
    display: flex;
    gap: 1.5rem;
  }
`;

const A = styled.a`
  all: unset;
`;

const LogoButton = styled.button`
  border: none;
  border-radius: 0.7rem;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin: 0;
  padding: 0;
`;

const Img = styled.img`
  width: 5rem;
`;

const SignUpButton = styled.button`
  font-size: 1.7rem;
  background-color: ${colors.blue3};
  color: ${colors.white};
  border: none;
  border-radius: 0.7rem;
  padding: 1rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.025rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${colors.blue4};
  }
  &:active {
    background-color: ${colors.blue5};
    box-shadow: 0 0 0 0.2rem ${colors.blue1};
  }
  &:focus {
    box-shadow: 0 0 0 0.2rem ${colors.blue1};
  }
`;

const LoginButton = styled.button`
  font-size: 1.7rem;
  background-color: transparent;
  color: ${colors.black};
  border: none;
  border-radius: 0.7rem;
  padding: 1rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.025rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${colors.grey1};
  }
  &:active {
    background-color: ${colors.grey2};
    box-shadow: 0 0 0 0.2rem ${colors.grey1};
  }
  &:focus {
    box-shadow: 0 0 0 0.2rem ${colors.grey1};
  }
`;

const Header = () => {
  return (
    <Div>
      <div>
        <LogoButton>
          <A href="https://google.fr">
            <Img src="../public/logo.png"></Img>
          </A>
        </LogoButton>
      </div>
      <Div className="right-header">
        <LoginButton>
          <A href="https://google.fr">Connexion</A>
        </LoginButton>
        <SignUpButton>
          <A href="https://google.fr">S'inscrire</A>
        </SignUpButton>
      </Div>
    </Div>
  );
};

export default Header;
