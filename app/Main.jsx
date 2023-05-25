import React from 'react';
import ReactDOM from 'react-dom/client';

import Index from '../styles/Index.css';
import Reset from '../styles/Reset';

import { ThemeProvider } from 'styled-components';
// <ThemeProvider theme={theme}>
// </ThemeProvider>

import TermsAndConditions from './TermsAndConditions';
import PolicyPrivacy from './PolicyPrivacy';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import Todo from './Todo';

import PrivacyPolicy from './PolicyPrivacy';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reset />
    <SignUp />
  </React.StrictMode>
);
