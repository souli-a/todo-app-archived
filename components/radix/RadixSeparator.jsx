import * as Separator from '@radix-ui/react-separator';
import { styled } from 'styled-components';
import themes from '../../styles/Themes';

const StyledRoundedSeparator = styled(Separator.Root)`
  background-color: ${themes.colors.roundedSeparatorBg};
  width: ${themes.width.roundedSeparator};
  height: ${themes.width.roundedSeparator};
  border-radius: ${themes.borderRadius.roundedSeparator};
`;

const StyledHorizontalSeparator = styled(StyledRoundedSeparator)`
  background-color: ${themes.colors.horizontalSeparatorBg};
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
