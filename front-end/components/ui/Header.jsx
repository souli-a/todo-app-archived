import styled from 'styled-components';
import { TransparentButton, BlueButton, RedButton } from './Button';
import Logo from './Logo';
import { HorizontalSeparator } from '../radix/RadixSeparator';
import axios from 'axios';

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

const handleLogout = (e) => {
  e.preventDefault();
  axios
    .get('http://localhost:4000/api/users/logout', {
      // Allow cookies in Axios.
      withCredentials: true,
    })
    .catch((error) => {
      console.log(error);
    });
};

const Header = () => {
  return (
    <header>
      <Division>
        <Logo src="../assets/images/logo.png" href="/" alt="logo du site web" />
        <Division className="right-header">
          <TransparentButton as="a" href="/login">
            Connexion
          </TransparentButton>
          <BlueButton as="a" href="/signup">
            S'inscrire
          </BlueButton>
          <RedButton onClick={handleLogout}>Déconnexion</RedButton>
        </Division>
      </Division>
      <HorizontalSeparator />
    </header>
  );
};

export default Header;
