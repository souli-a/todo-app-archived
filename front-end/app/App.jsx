import TermsAndConditions from './TermsAndConditions';
import PolicyPrivacy from './PolicyPrivacy';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Todo from './Todo';
import PageNotFound from './PageNotFound';
import Header from '../components/ui/Header';

import '../styles/Index.css';
import Reset from '../styles/Reset.js';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AuthContext from '../components/context/AuthContext';
import Cookies from 'js-cookie';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/Themes';
import GlobalStyle from '../styles/GlobalStyle';

const App = () => {
  const [isAuth, setIsAuth] = useState(null);
  const [theme, setTheme] = useState(lightTheme);

  const handleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
    if (theme === darkTheme) {
      localStorage.setItem('current-theme', 'lightTheme');
    }
    if (theme === lightTheme) {
      localStorage.setItem('current-theme', 'darkTheme');
    }
  };

  useEffect(() => {
    const matchMediaDark = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('current-theme');

    const updateTheme = () => {
      if (
        currentTheme === 'darkTheme' ||
        (currentTheme === null && matchMediaDark.matches)
      ) {
        setTheme(darkTheme);
      } else {
        setTheme(lightTheme);
      }
    };

    matchMediaDark.addEventListener('change', updateTheme);
    updateTheme();

    return () => {
      matchMediaDark.removeEventListener('change', updateTheme);
    };
  }, []);

  useEffect(() => {
    const currentTheme = localStorage.getItem('current-theme');
    if (currentTheme === 'lightTheme') {
      setTheme(lightTheme);
    }
    if (currentTheme === 'darkTheme') {
      setTheme(darkTheme);
    }
  }, []);

  console.log('re-render');

  useEffect(() => {
    if (!Cookies.get('access_token')) {
      setIsAuth(false);
    }
    if (Cookies.get('access_token')) {
      setIsAuth(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Reset />
        <GlobalStyle />
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
          <Header handleTheme={handleTheme} theme={theme} />
          <Routes>
            <Route
              path="/"
              element={!isAuth ? <Home /> : <Navigate to="/todo" />}
            />
            <Route
              path="/signup"
              element={!isAuth ? <Signup /> : <Navigate to="/todo" />}
            />
            <Route
              path="/login"
              element={!isAuth ? <Login /> : <Navigate to="/todo" />}
            />
            <Route
              path="/todo"
              element={isAuth ? <Todo /> : <Navigate to="/login" />}
            />
            <Route path="/privacy" element={<PolicyPrivacy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AuthContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
