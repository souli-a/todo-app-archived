import styled from 'styled-components';
import Paragraph from './Paragraph';
import Link from './Link';
import { RoundedSeparator, HorizontalSeparator } from '../radix/RadixSeparator';

const Division = styled.div`
  padding: 3rem 1rem 3rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  columns: 2;

  @media (max-width: 360px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    white-space: nowrap;
  }
`;

const Footer = () => {
  return (
    <footer>
      <HorizontalSeparator />
      <Division>
        <Paragraph>Listify © 2023</Paragraph>
        <RoundedSeparator />
        <Link href="/privacy">Confidentialité</Link>
        <RoundedSeparator />
        <Link href="/terms">Conditions générales</Link>
        <RoundedSeparator />
        <Paragraph> Made with ❤️</Paragraph>
      </Division>
    </footer>
  );
};

export default Footer;
