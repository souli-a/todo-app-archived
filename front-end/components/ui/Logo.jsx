import styled from 'styled-components';
import themes from '../../styles/Themes';
import Link from './Link';

const Image = styled.img`
  width: ${themes.width.image};
  transition: ${themes.transition.logo};
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
