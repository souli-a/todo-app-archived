import styled from 'styled-components';
import Paragraph from '../components/ui/Paragraph';
import { Title1, Title2 } from '../components/ui/Title';
import ListItem from '../components/ui/ListItem';
import Link from '../components/ui/Link';
import OrderedList from '../components/ui/OrderedList';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
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
  margin-top: 3rem;
  padding: 5rem;
  @media (max-width: 700px) {
    display: block;
    word-wrap: break-word;
  }
`;

const ChildDivision2 = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 65rem;
  h1 {
    margin-bottom: 2rem;
  }
  h2 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 3rem;
  }
  ol,
  ul {
    margin-bottom: 3rem;
  }
  ol li:not(:last-child) {
    margin-bottom: 1rem;
  }
  ul li:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const TermsAndConditions = () => {
  useTitlePage({ title: "Conditions générales d'utilisation" });

  return (
    <ParentDivision>
      <ChildDivision1>
        <ChildDivision2>
          <Title1>Conditions générales d'utilisation</Title1>
          <Paragraph>Dernière mise à jour: 21 mai 2023</Paragraph>
          <Paragraph>
            Veuillez lire attentivement les présentes conditions générales
            d'utilisation avant d'utiliser notre application. En utilisant notre
            application, vous acceptez d'être lié par ces conditions dans leur
            intégralité.
          </Paragraph>
          <Title2>1. Utilisation de l'application</Title2>
          <OrderedList>
            <ListItem>
              Vous devez avoir au moins 13 ans pour utiliser notre application.
              Si vous êtes âgé de moins de 18 ans, vous devez obtenir le
              consentement de vos parents ou de votre tuteur légal avant
              d'utiliser notre application.
            </ListItem>
            <ListItem>
              Vous acceptez d'utiliser notre application conformément à toutes
              les lois et réglementations applicables.
            </ListItem>
            <ListItem>
              Vous acceptez de ne pas utiliser notre application à des fins
              illégales, offensantes, diffamatoires ou nuisibles.
            </ListItem>
          </OrderedList>
          <Title2>2. Comptes utilisateurs</Title2>
          <OrderedList>
            <ListItem>
              Vous pouvez être tenu de créer un compte utilisateur pour accéder
              à certaines fonctionnalités de notre application. Vous êtes
              responsable de maintenir la confidentialité de vos informations de
              compte et de toutes les activités réalisées sous votre compte.
            </ListItem>
            <ListItem>
              Vous acceptez de fournir des informations exactes, complètes et à
              jour lors de la création de votre compte utilisateur. Vous
              acceptez également de mettre à jour vos informations en cas de
              modification.
            </ListItem>
            <ListItem>
              Nous nous réservons le droit de suspendre ou de résilier votre
              compte utilisateur si nous estimons que vous avez enfreint ces
              conditions ou si vous avez fourni des informations incorrectes,
              incomplètes ou trompeuses.
            </ListItem>
          </OrderedList>
          <Title2>3. Propriété intellectuelle</Title2>
          <OrderedList>
            <ListItem>
              Notre application et tout son contenu sont protégés par des droits
              de propriété intellectuelle. Vous n'avez pas le droit de copier,
              modifier, distribuer ou utiliser notre propriété intellectuelle
              sans notre autorisation écrite préalable.
            </ListItem>
            <ListItem>
              Vous acceptez de ne pas reproduire, dupliquer, copier, vendre,
              revendre ou exploiter toute partie de notre application de quelque
              manière que ce soit sans notre autorisation écrite préalable.
            </ListItem>
          </OrderedList>
          <Title2>4. Limitation de responsabilité</Title2>
          <OrderedList>
            <ListItem>
              Notre application est fournie telle quelle, sans garantie d'aucune
              sorte, expresse ou implicite. Nous ne garantissons pas que notre
              application sera exempte d'erreurs, de virus ou d'autres
              composants nuisibles.
            </ListItem>
            <ListItem>
              Nous ne serons pas responsables des dommages directs, indirects,
              spéciaux, accessoires ou consécutifs découlant de l'utilisation ou
              de l'impossibilité d'utiliser notre application, même si nous
              avons été informés de la possibilité de tels dommages.
            </ListItem>
          </OrderedList>
          <Title2>5. Modifications des conditions d'utilisation</Title2>
          <OrderedList>
            <ListItem>
              Nous nous réservons le droit de modifier ces conditions
              d'utilisation à tout moment. Toutes les modifications seront
              publiées sur cette page et prendront effet immédiatement. Il vous
              incombe de consulter régulièrement les conditions d'utilisation
              mises à jour.
            </ListItem>
          </OrderedList>
          <Paragraph>
            Si vous avez des questions concernant nos conditions générales
            d'utilisation, veuillez{' '}
            <Link href="mailto:soulimane.a@protonmail.com">nous contacter</Link>
            .
          </Paragraph>
        </ChildDivision2>
      </ChildDivision1>
      <Footer />
    </ParentDivision>
  );
};

export default TermsAndConditions;
