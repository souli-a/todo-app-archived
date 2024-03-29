import styled from 'styled-components';
import { themes, lightTheme } from '../../styles/Themes';
import Paragraph from './Paragraph';

const StyledCard = styled.div`
  min-height: ${themes.minHeight.card};
  display: ${themes.display.card};
  align-items: ${themes.alignItems.card};
  width: ${themes.width.card};
  border-radius: ${themes.borderRadius.card};
  background-color: ${lightTheme.cardBg};
  font-size: ${themes.fontSize.card};
  padding: ${themes.padding.card};
  & > p {
    color: ${lightTheme.card};
  }
`;

const Card = ({ children }) => {
  return (
    <StyledCard>
      <Paragraph>{children}</Paragraph>
    </StyledCard>
  );
};

export default Card;
