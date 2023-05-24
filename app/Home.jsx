import styled from 'styled-components';
import { Title1, Title2 } from '../components/ui/Title';
import { BigBlueButton } from '../components/ui/Button';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import Bold from '../components/ui/Bold';

const ParentDivision = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Division = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20rem 0 40rem 0;
  gap: 4rem;
  > h2 {
    margin-top: -2rem;
  }
`;

const Home = () => {
  return (
    <ParentDivision>
      <Header />
      <Division>
        <Title1>
          Une chose à <Bold>faire</Bold>,
        </Title1>
        <Title2>
          Une case à <Bold>cocher</Bold>.
        </Title2>
        <BigBlueButton>S'inscrire</BigBlueButton>
      </Division>
      <Footer />
    </ParentDivision>
  );
};

export default Home;
