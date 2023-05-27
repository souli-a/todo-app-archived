import styled from 'styled-components';
import colors from '../styles/Colors';
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
import PasswordInput from '../components/ui/PasswordInput';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const Division = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledSpan = styled.span`
  &.error-message {
    position: absolute;
    color: ${colors.red4};
    font-size: 1.2rem;
    margin: 0.85rem 0 0 0.1rem;
    padding: 0;
  }
`;

const schema = z.object({
  email: z
    .string()
    .toLowerCase()
    .min(1, { message: 'Un e-mail est obligatoire' })
    .email({ message: 'Un e-mail valide est obligatoire' }),
  password: z
    .string()
    .min(1, {
      message: 'Un mot de passe est obligatoire',
    })
    .min(6, {
      message: 'Un mot de passe doit contenir au minimum 6 caractères',
    }),
});

const onSubmit = (data) => console.log(data);

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <Division>
      <FormRoot onSubmit={handleSubmit(onSubmit)}>
        <Title2>Connexion</Title2>

        <FormField name="email">
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input
              type="email"
              placeholder="exemple@email.fr"
              autoComplete="email"
              register={() => register('email')}
            />
          </FormControl>
          <StyledSpan>
            {errors.email && (
              <StyledSpan className="error-message">
                {errors.email?.message}
              </StyledSpan>
            )}
          </StyledSpan>
        </FormField>

        <FormField name="password">
          <FormLabel>Mot de passe</FormLabel>
          <FormControl>
            <PasswordInput
              type="password"
              placeholder="Mot de passe"
              autoComplete="current-password"
              register={() => register('password')}
            />
          </FormControl>
          <StyledSpan>
            {errors.password && (
              <StyledSpan className="error-message">
                {errors.password?.message}
              </StyledSpan>
            )}
          </StyledSpan>
        </FormField>

        <FormSubmit>
          <BigBlueButton type="submit">Se connecter</BigBlueButton>
        </FormSubmit>
      </FormRoot>
    </Division>
  );
};

export default Login;
