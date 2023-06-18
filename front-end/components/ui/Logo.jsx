import styled from 'styled-components';
import { themes, lightTheme } from '../../styles/Themes';
import Link from './Link';

const Image = styled.img`
  width: ${themes.width.image};
  transition: ${themes.transition.logo};
  filter: ${({ theme }) => theme.bgColorLogo};
  &:hover {
    opacity: ${themes.opacity.logoHover};
  }
`;

const Logo = ({ href, src, alt }) => {
  return (
    <>
      <Link href={href}>
        <Image src={src} alt={alt} />
      </Link>
    </>
  );
};

export default Logo;
