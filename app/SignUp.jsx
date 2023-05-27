import styled from 'styled-components';
import colors from '../styles/Colors';
import {
  FormRoot,
  FormField,
  FormFieldTerms,
  FormLabel,
  FormLabelTerms,
  FormControl,
  FormSubmit,
} from '../components/radix/RadixForm';
import { Title2 } from '../components/ui/Title';
import { BigBlueButton } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import Link from '../components/ui/Link';
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

const schema = z
  .object({
    email: z
      .string()
      .toLowerCase()
      .min(1, { message: 'Un email est obligatoire' })
      .email({ message: 'Un e-mail valide est obligatoire' })
      .min(10, { message: "L'email doit contenir 10 caractères minimum" })
      .max(40, { message: "L'email doit contenir 40 caractères maximum" }),
    password: z
      .string()
      .min(1, { message: 'Un mot de passe est obligatoire' })
      .min(6, {
        message: 'Le mot de passe doit contenir 6 caractères au minimum',
      })
      .max(25, {
        message: 'Le mot de passe doit contenir 25 caractères au maximum',
      }),
    confirmPassword: z
      .string()
      .min(1, { message: 'Le mot de passe de confirmation est obligatoire' })
      .min(6, {
        message: 'Le mot de passe doit contenir 6 caractères au minimum',
      })
      .max(25, {
        message: 'Le mot de passe doit contenir 25 caractères au maximum',
      }),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: 'Les deux mots de passe doivent être similaires',
    path: ['confirmPassword'],
  });

const onSubmit = (data) => console.log(data);

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <Division>
      <FormRoot onSubmit={handleSubmit(onSubmit)}>
        <Title2>Inscription</Title2>

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
              autoComplete="new-password"
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

        <FormField name="confirmPassword">
          <FormLabel>Confirmer le mot de passe</FormLabel>
          <FormControl>
            <PasswordInput
              type="password"
              placeholder="Confirmer le mot de passe"
              autoComplete="new-password"
              register={() => register('confirmPassword')}
            />
          </FormControl>
          <StyledSpan>
            {errors.confirmPassword && (
              <StyledSpan className="error-message">
                {errors.confirmPassword?.message}
              </StyledSpan>
            )}
          </StyledSpan>
        </FormField>

        <FormFieldTerms name="terms">
          <FormLabelTerms>
            En vous inscrivant vous acceptez notre{' '}
            <Link href="https://google.fr">Politique de confidentialité</Link>{' '}
            et <Link href="https://google.fr">Termes et conditions</Link>
          </FormLabelTerms>
        </FormFieldTerms>

        <FormSubmit>
          <BigBlueButton type="submit">S'inscrire</BigBlueButton>
        </FormSubmit>
      </FormRoot>
    </Division>
  );
};

export default SignUp;
