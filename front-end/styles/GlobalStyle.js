import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bgColor};
    caret-color: ${({ theme }) => theme.colorCaret};
  }
`;

export default GlobalStyle;
