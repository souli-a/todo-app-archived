import styled from 'styled-components';
import { themes, lightTheme } from '../../styles/Themes';

const StyledTag = styled.div`
  display: ${themes.display.tag};
  justify-content: ${themes.justifyContent.tag};
  align-items: ${themes.alignItems.tag};
  font-size: ${themes.fontSize.tag};
  color: ${lightTheme.tag};
  padding: ${themes.padding.tag};
  background-color: ${lightTheme.tagBg};
  border-radius: ${themes.borderRadius.tag};
  width: ${themes.width.tag};
`;

const Tag = ({ className, children }) => {
  return (
    <>
      <StyledTag className={className}>{children}</StyledTag>
    </>
  );
};

export default Tag;
