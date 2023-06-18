import styled from 'styled-components';
import { themes, lightTheme } from '../../styles/Themes';

const StyledBold = styled.b`
  font-weight: ${themes.fontWeight.bold};
  ${({ theme }) => theme.colorBold};
`;

const Bold = ({ children }) => {
  return <StyledBold>{children}</StyledBold>;
};

export default Bold;
