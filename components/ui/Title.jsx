import styled from 'styled-components';
import themes from '../../styles/Themes';

const StyledTitle1 = styled.h1`
  font-size: ${themes.fontSize.title1};
  color: ${themes.colors.black};
  letter-spacing: ${themes.letterSpacing.title1};
  line-height: ${themes.lineHeight.title1};
  font-weight: ${themes.fontWeight.title1};
`;

const StyledTitle2 = styled.h2`
  font-size: ${themes.fontSize.title2};
  color: ${themes.colors.black};
  letter-spacing: ${themes.letterSpacing.title2};
  line-height: ${themes.lineHeight.title2};
  font-weight: ${themes.fontWeight.title2};
`;

const StyledTitle3 = styled.h3`
  font-size: ${themes.fontSize.title3};
  color: ${themes.colors.black};
  letter-spacing: ${themes.letterSpacing.title3};
  line-height: ${themes.lineHeight.title3};
  font-weight: ${themes.fontWeight.title3};
`;

const Title1 = ({ children }) => {
  return (
    <>
      <StyledTitle1>{children}</StyledTitle1>
    </>
  );
};

const Title2 = ({ children }) => {
  return (
    <>
      <StyledTitle2>{children}</StyledTitle2>
    </>
  );
};

const Title3 = ({ children }) => {
  return (
    <>
      <StyledTitle3>{children}</StyledTitle3>
    </>
  );
};

export { Title1, Title2, Title3 };
