import TermsAndConditions from './TermsAndConditions';
import PolicyPrivacy from './PolicyPrivacy';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Todo from './Todo';

import '../styles/Index.css';
import Reset from '../styles/Reset.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Reset />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/privacy" element={<PolicyPrivacy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
