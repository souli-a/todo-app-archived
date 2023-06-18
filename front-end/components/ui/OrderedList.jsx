import styled from 'styled-components';
import { themes, lightTheme } from '../../styles/Themes';

const StyledOrderedList = styled.ol`
  color: ${({ theme }) => theme.colorList};
  list-style-type: ${themes.listStyleType.orderedList};
  list-style: ${themes.listStyle.orderedList};
`;

const OrderedList = ({ type, children }) => {
  return (
    <>
      <StyledOrderedList type={type}>{children}</StyledOrderedList>
    </>
  );
};

export default OrderedList;
