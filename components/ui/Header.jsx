import styled from 'styled-components';
import { TransparentButton, BlueButton } from './Button';
import Logo from './Logo';
import { RoundedSeparator, HorizontalSeparator } from '../radix/RadixSeparator';

const Division = styled.div`
  height: fit-content;
  padding: 3rem 15rem 3rem 15rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
      <HorizontalSeparator />
    </header>
  );
};

export default Header;
