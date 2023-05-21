import styled from 'styled-components';
import colors from './Colors.jsx';

const Div = styled.div`
  &.parent-terms-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.terms-content {
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
    & > ol > li {
      font-size: 1.6rem;
      margin: 0.5rem;
      padding: 0;
    }
    & > ol {
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
    <Div className="parent-terms-content">
      <Div className="terms-content">
        <h1>Conditions générales d'utilisation</h1>
        <p>Dernière mise à jour: 21 mai 2023</p>
        <p>
          Veuillez lire attentivement les présentes conditions générales
          d'utilisation avant d'utiliser notre application. En utilisant notre
          application, vous acceptez d'être lié par ces conditions dans leur
          intégralité.
        </p>
        <h3>1. Utilisation de l'application</h3>
        <ol type="a">
          <li>
            Vous devez avoir au moins 13 ans pour utiliser notre application. Si
            vous êtes âgé de moins de 18 ans, vous devez obtenir le consentement
            de vos parents ou de votre tuteur légal avant d'utiliser notre
            application.
          </li>
          <li>
            Vous acceptez d'utiliser notre application conformément à toutes les
            lois et réglementations applicables.
          </li>
          <li>
            Vous acceptez de ne pas utiliser notre application à des fins
            illégales, offensantes, diffamatoires ou nuisibles.
          </li>
        </ol>
        <h3>2. Comptes utilisateurs</h3>
        <ol type="a">
          <li>
            Vous pouvez être tenu de créer un compte utilisateur pour accéder à
            certaines fonctionnalités de notre application. Vous êtes
            responsable de maintenir la confidentialité de vos informations de
            compte et de toutes les activités réalisées sous votre compte.
          </li>
          <li>
            Vous acceptez de fournir des informations exactes, complètes et à
            jour lors de la création de votre compte utilisateur. Vous acceptez
            également de mettre à jour vos informations en cas de modification.
          </li>
          <li>
            Nous nous réservons le droit de suspendre ou de résilier votre
            compte utilisateur si nous estimons que vous avez enfreint ces
            conditions ou si vous avez fourni des informations incorrectes,
            incomplètes ou trompeuses.
          </li>
        </ol>
        <h3>3. Propriété intellectuelle</h3>
        <ol type="a">
          <li>
            Notre application et tout son contenu sont protégés par des droits
            de propriété intellectuelle. Vous n'avez pas le droit de copier,
            modifier, distribuer ou utiliser notre propriété intellectuelle sans
            notre autorisation écrite préalable.
          </li>
          <li>
            Vous acceptez de ne pas reproduire, dupliquer, copier, vendre,
            revendre ou exploiter toute partie de notre application de quelque
            manière que ce soit sans notre autorisation écrite préalable.
          </li>
        </ol>
        <h3>4. Limitation de responsabilité</h3>
        <ol type="a">
          <li>
            Notre application est fournie telle quelle, sans garantie d'aucune
            sorte, expresse ou implicite. Nous ne garantissons pas que notre
            application sera exempte d'erreurs, de virus ou d'autres composants
            nuisibles.
          </li>
          <li>
            Nous ne serons pas responsables des dommages directs, indirects,
            spéciaux, accessoires ou consécutifs découlant de l'utilisation ou
            de l'impossibilité d'utiliser notre application, même si nous avons
            été informés de la possibilité de tels dommages.
          </li>
        </ol>
        <h3>5. Modifications des conditions d'utilisation</h3>
        <ol type="a">
          <li>
            Nous nous réservons le droit de modifier ces conditions
            d'utilisation à tout moment. Toutes les modifications seront
            publiées sur cette page et prendront effet immédiatement. Il vous
            incombe de consulter régulièrement les conditions d'utilisation
            mises à jour.
          </li>
        </ol>
        <p>
          Si vous avez des questions concernant nos conditions générales
          d'utilisation, veuillez{' '}
          <A href="mailto:soulimane.a@protonmail.com">nous contacter</A>.
        </p>
      </Div>
    </Div>
  );
};

export default PrivacyPolicy;
