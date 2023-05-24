import styled from 'styled-components';
import {
  FormRoot,
  FormField,
  FormLabel,
  FormControl,
  FormSubmit,
} from '../components/radix/RadixForm';
import { Title2 } from '../components/ui/Title';
import { BigBlueButton } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

const Division = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Login = () => {
  return (
    <Division>
      <FormRoot>
        <Title2>Connexion</Title2>

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

        <FormSubmit>
          <BigBlueButton>Se connecter</BigBlueButton>
        </FormSubmit>
      </FormRoot>
    </Division>
  );
};

export default Login;
