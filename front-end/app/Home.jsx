import styled from 'styled-components';
import { Title1, Title2 } from '../components/ui/Title';
import { BigBlueButton } from '../components/ui/Button';
import Footer from '../components/ui/Footer';
import Bold from '../components/ui/Bold';
import useTitlePage from '../components/hooks/useTitlePage';

const ParentDivision = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ChildDivision1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const ChildDivision2 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20rem 0 40rem 0;
  padding: 0rem 5rem 0rem 5rem;
  gap: 4rem;
  width: fit-content;
  > h2 {
    margin-top: -2rem;
  }

  @media (max-width: 670px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin: 15rem 0 40rem 0;
  }

  @media (max-width: 440px) {
    margin: 3rem 0 3rem 0;
  }
`;

const Home = () => {
  useTitlePage({ title: 'Accueil' });

  return (
    <ParentDivision>
      <ChildDivision1>
        <ChildDivision2>
          <Title1>
            Une chose à <Bold>faire</Bold>,
          </Title1>
          <Title2>
            Une case à <Bold>cocher</Bold>.
          </Title2>
          <BigBlueButton href="/signup" as="a">
            S'inscrire
          </BigBlueButton>
        </ChildDivision2>
      </ChildDivision1>
      <Footer />
    </ParentDivision>
  );
};

export default Home;
