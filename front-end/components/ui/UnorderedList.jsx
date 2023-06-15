import styled from 'styled-components';
import themes from '../../styles/Themes';

const StyledUnorderedList = styled.ul`
  color: ${themes.colors.black};
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
