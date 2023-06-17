import { Title1, Title3 } from '../components/ui/Title';
import Paragraph from '../components/ui/Paragraph';
import styled from 'styled-components';
import Link from '../components/ui/Link';
import useTitlePage from '../components/hooks/useTitlePage';

const Division = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 1rem;
  word-wrap: break-word;
  text-align: center;
`;

const PageNotFound = () => {
  useTitlePage({ title: 'Page non trouvée' });

  return (
    <Division>
      <Title1>404.</Title1>
      <Title3>Page non trouvée.</Title3>
      <Paragraph>La page que vous avez demandée n'existe pas.</Paragraph>
      <Paragraph>
        Retourner sur <Link href="/">l'accueil</Link>.
      </Paragraph>
    </Division>
  );
};

export default PageNotFound;

// 404
// Page non trouvée
// La page que vous avez demandée n'existe pas.
