import * as Separator from '@radix-ui/react-separator';
import styled from 'styled-components';
import { themes, lightTheme } from '../../styles/Themes';

const StyledRoundedSeparator = styled(Separator.Root)`
  background-color: ${({ theme }) => theme.colorRoundedSeparator};
  width: ${themes.width.roundedSeparator};
  height: ${themes.width.roundedSeparator};
  border-radius: ${themes.borderRadius.roundedSeparator};
`;

const StyledHorizontalSeparator = styled(StyledRoundedSeparator)`
  background-color: ${({ theme }) => theme.colorHorizontalSeparator};
  width: ${themes.width.horizontalSeparator};
  height: ${themes.height.horizontalSeparator};
  border-radius: ${themes.borderRadius.horizontalSeparator};
`;

const RoundedSeparator = () => {
  return (
    <>
      <StyledRoundedSeparator />
    </>
  );
};

const HorizontalSeparator = () => {
  return (
    <>
      <StyledHorizontalSeparator />
    </>
  );
};

export { RoundedSeparator, HorizontalSeparator };
