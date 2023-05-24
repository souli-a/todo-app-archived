import styled from 'styled-components';
import themes from '../../styles/Themes';

const StyledLink = styled.a`
  font-size: ${themes.fontSize.link};
  color: ${themes.colors.link};
  transition: ${themes.transition.link};
  &:hover {
    color: ${themes.colors.linkHover};
    text-decoration: ${themes.textDecoration.link};
    cursor: ${themes.cursor.link};
  }
  &:active {
    color: ${themes.colors.linkActive};
  }
`;

const Link = ({ href, children }) => {
  return (
    <>
      <StyledLink href={href}>{children}</StyledLink>
    </>
  );
};

export default Link;
