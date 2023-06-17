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
import Header from '../components/ui/Header';
import axios from 'axios';
import { useContext, useState } from 'react';
import LoadingIcon from '../components/ui/LoadingIcon';
import useTitlePage from '../components/hooks/useTitlePage';
import AuthContext from '../components/context/authContext';

const FullPageDivision = styled.div`
  width: 100%;
  height: 100%;
`;

const Division = styled.div`
  width: 100%;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledSpan = styled.span`
  &.error-message {
    position: absolute;
    color: ${colors.red4};
    font-size: 1.3rem;
    margin: 0.85rem 0 0 0.1rem;
    padding: 0;
  }
`;

const StyledFormRoot = styled(FormRoot)``;

const StyledPasswordInput = styled(PasswordInput)``;

const StyledInput = styled(Input)``;

const schema = z
  .object({
    email: z
      .string()
      .toLowerCase()
      .min(1, { message: 'Email obligatoire' })
      .email({ message: 'Email valide obligatoire' })
      .min(10, { message: '10 caractères au minimum' })
      .max(40, { message: 'caractères au maximum' }),
    password: z
      .string()
      .min(1, { message: 'Mot de passe obligatoire' })
      .min(6, {
        message: '6 caractères au minimum',
      })
      .max(25, {
        message: '25 caractères au maximum',
      }),
    confirmPassword: z
      .string()
      .min(1, { message: 'Confirmation obligatoire' })
      .min(6, {
        message: '6 caractères au minimum',
      })
      .max(25, {
        message: '25 caractères au maximum',
      }),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: 'Les deux doivent être identiques',
    path: ['confirmPassword'],
  });

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useTitlePage({ title: 'Inscription' });

  const onSubmit = (data, e) => {
    e.preventDefault();
    setIsLoading(true);
    // Exclude confirmPassword field from the data.
    axios
      .post(
        'http://localhost:4000/api/users/signup',
        {
          email: data.email,
          password: data.password,
        },
        {
          // Allow cookies in Axios.
          withCredentials: true,
        }
      )
      .then(() => {
        setIsAuth(true);
      })
      .catch((error) => {
        if (error.response.data.errorEmail) {
          setEmailError(error.response.data.errorEmail);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <FullPageDivision>
      <Header />
      <Division>
        <StyledFormRoot onSubmit={handleSubmit(onSubmit)}>
          <Title2>Inscription</Title2>

          <FormField name="email">
            <FormLabel>Email</FormLabel>
            <FormControl>
              <StyledInput
                type="email"
                placeholder="exemple@email.fr"
                autoComplete="email"
                register={() => register('email')}
              />
            </FormControl>
            <StyledSpan>
              {(errors.email && (
                <StyledSpan className="error-message">
                  {errors.email?.message}
                </StyledSpan>
              )) ||
                (emailError && (
                  <StyledSpan className="error-message">
                    {emailError}
                  </StyledSpan>
                ))}
            </StyledSpan>
          </FormField>

          <FormField name="password">
            <FormLabel>Mot de passe</FormLabel>
            <FormControl>
              <StyledPasswordInput
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
              <Link href="/privacy">Politique de confidentialité</Link> et{' '}
              <Link href="/terms">Termes et conditions</Link>
            </FormLabelTerms>
          </FormFieldTerms>

          <FormSubmit>
            <BigBlueButton type="submit">
              {isLoading ? <LoadingIcon /> : "S'inscrire"}
            </BigBlueButton>
          </FormSubmit>
        </StyledFormRoot>
      </Division>
    </FullPageDivision>
  );
};

export default Signup;
