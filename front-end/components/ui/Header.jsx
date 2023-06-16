import styled from 'styled-components';
import { TransparentButton, BlueButton, RedButton } from './Button';
import Logo from './Logo';
import { HorizontalSeparator } from '../radix/RadixSeparator';
import axios from 'axios';
import AuthContext from '../context/authContext';
import { useContext } from 'react';

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
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();
    axios
      .get('http://localhost:4000/api/users/logout', {
        // Allow cookies in Axios.
        withCredentials: true,
      })
      .then(() => {
        setIsAuth(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <header>
      {isAuth ? (
        <>
          <Division>
            <Logo
              src="../assets/images/logo.png"
              href="/"
              alt="logo du site web"
            />
            <Division className="right-header">
              <RedButton onClick={handleLogout}>Déconnexion</RedButton>
            </Division>
          </Division>
          <HorizontalSeparator />
        </>
      ) : (
        <>
          <Division>
            <Logo
              src="../assets/images/logo.png"
              href="/"
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
        </>
      )}
    </header>
  );
};

export default Header;
