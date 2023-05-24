import styled from 'styled-components';
import themes from '../../styles/Themes';

const StyledListItem = styled.li`
  font-size: ${themes.fontSize.listItem};
  color: ${themes.colors.black};
  letter-spacing: ${themes.letterSpacing.listItem};
  line-height: ${themes.lineHeight.listItem};
  margin: ${themes.margin.listItem};
`;

const ListItem = ({ children }) => {
  return (
    <>
      <StyledListItem>{children}</StyledListItem>
    </>
  );
};

export default ListItem;
