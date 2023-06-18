import styled from 'styled-components';
import { themes, lightTheme } from '../../styles/Themes';

const StyledUnorderedList = styled.ul`
  color: ${lightTheme.black};
  list-style-type: ${themes.listStyleType.unorderedList};
  list-style: ${themes.listStyle.unorderedList};
`;

const UnorderedList = ({ children }) => {
  return (
    <>
      <StyledUnorderedList>{children}</StyledUnorderedList>
    </>
  );
};

export default UnorderedList;
