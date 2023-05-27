import styled from 'styled-components';
import Paragraph from './Paragraph';
import Link from './Link';
import { RoundedSeparator, HorizontalSeparator } from '../radix/RadixSeparator';

const Division = styled.div`
  padding: 3rem 1rem 3rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Footer = () => {
  return (
    <footer>
      <HorizontalSeparator />
      <Division>
        <Paragraph>Listify © 2023</Paragraph>
        <RoundedSeparator />
        <Link>Confidentialité</Link>
        <RoundedSeparator />
        <Link>Conditions générales</Link>
      </Division>
    </footer>
  );
};

export default Footer;
