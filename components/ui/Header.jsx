import styled from 'styled-components';
import { TransparentButton, BlueButton } from './Button';
import Logo from './Logo';

const Division = styled.div`
  height: fit-content;
  padding: 1rem 15rem 2rem 15rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  &.right-header {
    padding: 0;
    display: flex;
    gap: 1rem;
  }
`;

const Header = () => {
  return (
    <header>
      <Division>
        <Logo
          src="../assets/logo.png"
          href="https://google.fr"
          alt="logo du site web"
        />
        <Division className="right-header">
          <TransparentButton as="a" href="/login">
            Connexion
          </TransparentButton>
          <BlueButton as="a" href="/signup">
            S'inscrire
          </BlueButton>
        </Division>
      </Division>
    </header>
  );
};

export default Header;
