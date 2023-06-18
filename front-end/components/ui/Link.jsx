import styled from 'styled-components';
import { themes, lightTheme } from '../../styles/Themes';

const StyledLink = styled.a`
  font-size: ${themes.fontSize.link};
  color: ${lightTheme.link};
  transition: ${themes.transition.link};
  &:hover {
    color: ${lightTheme.linkHover};
    text-decoration: ${themes.textDecoration.link};
    cursor: ${themes.cursor.link};
  }
  &:active {
    color: ${lightTheme.linkActive};
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
