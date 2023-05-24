import React from 'react';
import ReactDOM from 'react-dom/client';

import Index from '../styles/Index.css';
import Reset from '../styles/Reset';

import { ThemeProvider } from 'styled-components';
// <ThemeProvider theme={theme}>
// </ThemeProvider>

import {
  GreyButton,
  RedButton,
  BlueButton,
  TransparentButton,
  GreenButton,
} from '../components/ui/Button';
import Input from '../components/ui/Input';
import Link from '../components/ui/Link';
import { Title1, Title2, Title3 } from '../components/ui/Title';
import Paragraph from '../components/ui/Paragraph';
import Logo from '../components/ui/Logo';

import Header from './Header';
import Footer from './Footer';
import TermsAndConditions from './TermsAndConditions';
import PolicyPrivacy from './PolicyPrivacy';
import SignUp from './SignUp';
import Login from './Login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reset />
  </React.StrictMode>
);
