import styled from 'styled-components';
import {
  FormRoot,
  FormField,
  FormFieldTerms,
  FormLabel,
  FormLabelTerms,
  FormControl,
  CheckboxRoot,
  CheckboxIndicator,
  FormSubmit,
} from '../components/radix/RadixForm';
import { Title2 } from '../components/ui/Title';
import { BigBlueButton } from '../components/ui/Button';
import Input from '../components/ui/Input';
import Link from '../components/ui/Link';

const Division = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SignUp = () => {
  return (
    <Division>
      <FormRoot>
        <Title2>Inscription</Title2>

        <FormField name="email">
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input type="email" placeholder="exemple@email.fr" />
          </FormControl>
        </FormField>

        <FormField name="password">
          <FormLabel>Mot de passe</FormLabel>
          <FormControl>
            <Input type="password" placeholder="Mot de passe" />
          </FormControl>
        </FormField>

        <FormField name="confirmPassword">
          <FormLabel>Confirmer le mot de passe</FormLabel>
          <FormControl>
            <Input type="password" placeholder="Confirmer le mot de passe" />
          </FormControl>
        </FormField>

        <FormFieldTerms name="terms">
          <FormControl>
            <CheckboxRoot>
              <CheckboxIndicator></CheckboxIndicator>
            </CheckboxRoot>
          </FormControl>
          <FormLabelTerms>
            En vous inscrivant vous acceptez notre{' '}
            <Link href="https://google.fr">Politique de confidentialité</Link>{' '}
            et <Link href="https://google.fr">Termes et conditions</Link>
          </FormLabelTerms>
        </FormFieldTerms>

        <FormSubmit>
          <BigBlueButton>S'inscrire</BigBlueButton>
        </FormSubmit>
      </FormRoot>
    </Division>
  );
};

export default SignUp;
