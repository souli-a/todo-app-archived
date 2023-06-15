import styled from 'styled-components';
import themes from '../../styles/Themes';

const StyledParagraph = styled.p`
  font-size: ${themes.fontSize.paragraph};
  color: ${themes.colors.black};
  letter-spacing: ${themes.letterSpacing.paragraph};
  line-height: ${themes.lineHeight.paragraph};
`;

const Paragraph = ({ children }) => {
  return (
    <>
      <StyledParagraph>{children}</StyledParagraph>
    </>
  );
};

export default Paragraph;
