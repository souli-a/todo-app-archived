import styled from 'styled-components';
import colors from './Colors.jsx';

const Div = styled.div`
  &.parent-policy-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.policy-content {
    height: 100%;
    width: 550px;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    color: ${colors.black};
    & > h1 {
      font-size: 2.8rem;
      margin: 0 0 3rem 0;
      padding: 0;
    }
    & > h3 {
      font-size: 2rem;
      margin: 1rem 0 1.25rem 0;
      padding: 0;
    }
    & > p {
      font-size: 1.6rem;
      margin: 0 0 1.5rem 0;
      padding: 0;
    }
    & > ul > li {
      font-size: 1.6rem;
      margin: 0.5rem;
      padding: 0;
    }
    & > ul {
      margin: 0 0 1.5rem 0;
    }
  }
`;

const A = styled.a`
  font-size: 1.6rem;
  color: ${colors.blue2};
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${colors.blue4};
    text-decoration: underline;
    cursor: pointer;
  }
  &:active {
    color: ${colors.blue5};
  }
`;

const PrivacyPolicy = () => {
  return (
    <Div className="parent-policy-content">
      <Div className="policy-content">
        <h1>Politique de confidentialité</h1>
        <p>Dernière mise à jour: 21 mai 2023</p>
        <p>
          Cette politique de confidentialité explique comment nous recueillons,
          utilisons, divulguons et protégeons vos informations lorsque vous
          utilisez notre application. Veuillez lire attentivement cette
          politique avant d'utiliser notre application ou de fournir des
          informations personnelles. En utilisant notre application, vous
          acceptez les pratiques décrites dans cette politique de
          confidentialité.
        </p>
        <h3>Collecte des informations</h3>
        <p>
          Lorsque vous créez un compte et utilisez notre application, nous
          pouvons recueillir les informations suivantes:
        </p>
        <ul>
          <li>Votre adresse e-mail</li>
          <li>Votre mot de passe</li>
        </ul>
        <p>
          Nous utilisons les informations collectées pour les finalités
          suivantes:
        </p>
        <ul>
          <li>Améliorer notre application</li>
          <li>Vous authentifier avec votre compte</li>
          <li>Vous permettre de créer et de gérer vos listes de tâches</li>
          <li>Répondre à vos demandes de support technique</li>
        </ul>
        <h3>Protection des informations</h3>
        <p>
          Nous mettons en place des mesures de sécurité appropriées pour
          protéger vos informations contre tout accès non autorisé, altération,
          divulgation ou destruction. Cependant, veuillez noter qu'aucune
          méthode de transmission sur Internet ou de stockage électronique n'est
          totalement sécurisée, et nous ne pouvons donc garantir une sécurité
          absolue de vos informations.
        </p>
        <h3>Divulgation des informations</h3>
        <p>
          Nous ne vendons, n'échangeons ni ne louons vos informations
          personnelles à des tiers à des fins commerciales. Nous pouvons
          cependant partager vos informations avec les prestataires de services
          tiers qui nous aident à exploiter notre application ou à mener nos
          activités, sous réserve de leur accord de respecter la confidentialité
          de vos informations.
        </p>
        <h3>Conservation des informations</h3>
        <p>
          Nous conservons vos informations personnelles aussi longtemps que
          nécessaire pour atteindre les finalités décrites dans cette politique
          de confidentialité et conformément à nos obligations légales.
        </p>
        <h3>Vos choix</h3>
        <p>
          Vous pouvez accéder, mettre à jour ou supprimer vos informations
          personnelles en vous connectant à votre compte. Si vous souhaitez
          supprimer définitivement votre compte, veuillez{' '}
          <A href="mailto:soulimane.a@protonmail.com">nous contacter</A>.
        </p>
        <h3>Modifications de la politique de confidentialité</h3>
        <p>
          Nous nous réservons le droit de modifier cette politique de
          confidentialité à tout moment. Toute modification sera publiée sur
          cette page avec la date de révision mise à jour. Nous vous
          encourageons à consulter régulièrement cette politique pour rester
          informé de la manière dont nous protégeons vos informations.
        </p>
        <h3>Contact</h3>
        <p>
          Si vous avez des questions concernant cette politique de
          confidentialité, veuillez{' '}
          <A href="mailto:soulimane.a@protonmail.com">nous contacter</A>.
        </p>
      </Div>
    </Div>
  );
};

export default PrivacyPolicy;
