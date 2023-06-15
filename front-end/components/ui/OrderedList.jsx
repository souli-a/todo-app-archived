import styled from 'styled-components';
import themes from '../../styles/Themes';

const StyledOrderedList = styled.ol`
  color: ${themes.colors.black};
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
