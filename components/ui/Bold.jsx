import styled from 'styled-components';
import themes from '../../styles/Themes';

const StyledBold = styled.b`
  font-weight: ${themes.fontWeight.bold};
  color: ${themes.colors.bold};
`;

const Bold = ({ children }) => {
  return <StyledBold>{children}</StyledBold>;
};

export default Bold;