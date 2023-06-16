import TermsAndConditions from './TermsAndConditions';
import PolicyPrivacy from './PolicyPrivacy';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Todo from './Todo';
import PageNotFound from './PageNotFound';

import '../styles/Index.css';
import Reset from '../styles/Reset.js';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AuthContext from '../components/context/authContext';
import Cookies from 'js-cookie';

const App = () => {
  const [isAuth, setIsAuth] = useState(null);

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
      <Reset />
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
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
    </BrowserRouter>
  );
};

export default App;
