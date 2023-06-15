import styled from 'styled-components';
import Paragraph from '../components/ui/Paragraph';
import { Title1, Title2 } from '../components/ui/Title';
import ListItem from '../components/ui/ListItem';
import Link from '../components/ui/Link';
import UnorderedList from '../components/ui/UnorderedList';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';

const ParentDivision = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ChildDivision1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 3rem;
`;

const ChildDivision2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 65rem;
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

const PrivacyPolicy = () => {
  return (
    <ParentDivision>
      <Header />
      <ChildDivision1>
        <ChildDivision2>
          <Title1>Politique de confidentialité</Title1>
          <Paragraph>Dernière mise à jour: 21 mai 2023</Paragraph>
          <Paragraph>
            Cette politique de confidentialité explique comment nous
            recueillons, utilisons, divulguons et protégeons vos informations
            lorsque vous utilisez notre application. Veuillez lire attentivement
            cette politique avant d'utiliser notre application ou de fournir des
            informations personnelles. En utilisant notre application, vous
            acceptez les pratiques décrites dans cette politique de
            confidentialité.
          </Paragraph>
          <Title2>Collecte des informations</Title2>
          <Paragraph>
            Lorsque vous créez un compte et utilisez notre application, nous
            pouvons recueillir les informations suivantes:
          </Paragraph>
          <UnorderedList>
            <ListItem>Votre adresse e-mail</ListItem>
            <ListItem>Votre mot de passe</ListItem>
          </UnorderedList>
          <Paragraph>
            Nous utilisons les informations collectées pour les finalités
            suivantes:
          </Paragraph>
          <UnorderedList>
            <ListItem>Améliorer notre application</ListItem>
            <ListItem>Vous authentifier avec votre compte</ListItem>
            <ListItem>
              Vous permettre de créer et de gérer vos listes de tâches
            </ListItem>
            <ListItem>Répondre à vos demandes de support technique</ListItem>
          </UnorderedList>
          <Title2>Protection des informations</Title2>
          <Paragraph>
            Nous mettons en place des mesures de sécurité appropriées pour
            protéger vos informations contre tout accès non autorisé,
            altération, divulgation ou destruction. Cependant, veuillez noter
            qu'aucune méthode de transmission sur Internet ou de stockage
            électronique n'est totalement sécurisée, et nous ne pouvons donc
            garantir une sécurité absolue de vos informations.
          </Paragraph>
          <Title2>Divulgation des informations</Title2>
          <Paragraph>
            Nous ne vendons, n'échangeons ni ne louons vos informations
            personnelles à des tiers à des fins commerciales. Nous pouvons
            cependant partager vos informations avec les prestataires de
            services tiers qui nous aident à exploiter notre application ou à
            mener nos activités, sous réserve de leur accord de respecter la
            confidentialité de vos informations.
          </Paragraph>
          <Title2>Conservation des informations</Title2>
          <Paragraph>
            Nous conservons vos informations personnelles aussi longtemps que
            nécessaire pour atteindre les finalités décrites dans cette
            politique de confidentialité et conformément à nos obligations
            légales.
          </Paragraph>
          <Title2>Vos choix</Title2>
          <Paragraph>
            Vous pouvez accéder, mettre à jour ou supprimer vos informations
            personnelles en vous connectant à votre compte. Si vous souhaitez
            supprimer définitivement votre compte, veuillez{' '}
            <Link href="mailto:soulimane.a@protonmail.com">nous contacter</Link>
            .
          </Paragraph>
          <Title2>Modifications de la politique de confidentialité</Title2>
          <Paragraph>
            Nous nous réservons le droit de modifier cette politique de
            confidentialité à tout moment. Toute modification sera publiée sur
            cette page avec la date de révision mise à jour. Nous vous
            encourageons à consulter régulièrement cette politique pour rester
            informé de la manière dont nous protégeons vos informations.
          </Paragraph>
          <Title2>Contact</Title2>
          <Paragraph>
            Si vous avez des questions concernant cette politique de
            confidentialité, veuillez{' '}
            <Link href="mailto:soulimane.a@protonmail.com">nous contacter</Link>
            .
          </Paragraph>
        </ChildDivision2>
      </ChildDivision1>
      <Footer />
    </ParentDivision>
  );
};

export default PrivacyPolicy;
