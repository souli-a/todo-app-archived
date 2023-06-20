import styled from 'styled-components';
import { TransparentButton, BlueButton, RedButton } from './Button';
import Logo from './Logo';
import { HorizontalSeparator } from '../radix/RadixSeparator';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { useContext, useState } from 'react';
import LoadingIcon from '../../components/ui/LoadingIcon';
import { Moon, SunDim } from '@phosphor-icons/react';
import { lightTheme, darkTheme } from '../../styles/Themes';
import logo from '../../assets/images/logo.png';

const Division = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 3rem;
  gap: 2rem;
  & .right-header {
    display: flex;
    gap: 2rem;
  }
  @media (max-width: 440px) {
    flex-direction: column;
    padding: 2rem;
    & .right-header {
      flex-direction: column;
    }
  }
`;

const Header = ({ handleTheme, theme }) => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .get('http://localhost:4000/api/users/logout', {
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
            <div className="left-header">
              <Logo src={logo} href="/" alt="logo du site web" />
            </div>
            <div className="right-header">
              <RedButton onClick={handleLogout}>
                {isLoading ? <LoadingIcon /> : 'Déconnexion'}
              </RedButton>
              <TransparentButton onClick={handleTheme}>
                {theme === lightTheme ? (
                  <Moon size={18.3} weight="fill" />
                ) : (
                  <SunDim size={18.3} weight="fill" />
                )}
              </TransparentButton>
            </div>
          </Division>
          <HorizontalSeparator />
        </>
      ) : (
        <>
          <Division>
            <div className="left-header">
              <Logo
                src="../assets/images/logo.png"
                href="/"
                alt="logo du site web"
              />
            </div>
            <div className="right-header">
              <TransparentButton as="a" href="/login">
                Connexion
              </TransparentButton>
              <BlueButton as="a" href="/signup">
                S'inscrire
              </BlueButton>
              <TransparentButton
                className="button-logout"
                onClick={handleTheme}
              >
                {theme === lightTheme ? (
                  <Moon size={18.3} weight="fill" />
                ) : (
                  <SunDim size={18.3} weight="fill" />
                )}
              </TransparentButton>
            </div>
          </Division>
          <HorizontalSeparator />
        </>
      )}
    </header>
  );
};

export default Header;
