import styled from 'styled-components';
import { TransparentButton, BlueButton, RedButton } from './Button';
import Logo from './Logo';
import { HorizontalSeparator } from '../radix/RadixSeparator';
import axios from 'axios';
import AuthContext from '../context/authContext';
import { useContext, useState } from 'react';
import LoadingIcon from '../../components/ui/LoadingIcon';

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
  @media (max-width: 600px) {
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
  }
  @media (max-width: 370px) {
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    &.right-header {
      gap: 2rem;
    }
  }
`;

const LogoDivision = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Header = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    setIsLoading(true);
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
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <header>
      {isAuth ? (
        <>
          <Division>
            <LogoDivision>
              <Logo
                src="../assets/images/logo.png"
                href="/"
                alt="logo du site web"
              />
            </LogoDivision>
            <Division className="right-header">
              <RedButton onClick={handleLogout}>
                {isLoading ? <LoadingIcon /> : 'Déconnexion'}
              </RedButton>
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
