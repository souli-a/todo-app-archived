import styled from 'styled-components';
import { themes, lightTheme } from '../../styles/Themes';

const StyledParagraph = styled.p`
  font-size: ${themes.fontSize.paragraph};
  color: ${({ theme }) => theme.colorParagraph};
  letter-spacing: ${themes.letterSpacing.paragraph};
  line-height: ${themes.lineHeight.paragraph};
  word-wrap: break-word;
`;

const Paragraph = ({ children }) => {
  return (
    <>
      <StyledParagraph>{children}</StyledParagraph>
    </>
  );
};

export default Paragraph;
