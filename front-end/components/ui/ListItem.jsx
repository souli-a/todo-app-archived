import styled from 'styled-components';
import { themes, lightTheme } from '../../styles/Themes';

const StyledListItem = styled.li`
  font-size: ${themes.fontSize.listItem};
  color: ${({ theme }) => theme.colorList};
  letter-spacing: ${themes.letterSpacing.listItem};
  line-height: ${themes.lineHeight.listItem};
`;

const ListItem = ({ children }) => {
  return (
    <>
      <StyledListItem>{children}</StyledListItem>
    </>
  );
};

export default ListItem;
