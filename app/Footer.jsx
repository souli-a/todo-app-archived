import styled from 'styled-components';
import Paragraph from '../components/ui/Paragraph';
import Link from '../components/ui/Link';

const Division = styled.div`
  height: fit-content;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: transparent;
  & span {
    font-size: 3rem;
    opacity: 0.6;
  }
`;

const Footer = () => {
  return (
    <footer>
      <Division className="separator">
        <Division>
          <Paragraph>Listify © 2023</Paragraph>
          <span>·</span>
          <Link>Confidentialité</Link>
          <span>·</span>
          <Link>Conditions générales</Link>
        </Division>
      </Division>
    </footer>
  );
};

export default Footer;
