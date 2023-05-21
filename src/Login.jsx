import styled from 'styled-components';
import * as Form from '@radix-ui/react-form';
import { colors } from './Colors.jsx';

const Div = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 3.7rem;
  font-weight: 400;
  text-align: center;
  margin: 0;
  padding: 0;
`;

const FormRoot = styled(Form.Root)`
  width: 37rem;
  display: flex;
  flex-direction: column;
  color: ${colors.black};
  font-weight: 300;
  border-radius: 0.7rem;
  & > *:not(:nth-last-child(1)) {
    margin-bottom: 3rem;
  }
  & > :last-child {
    margin-top: 1.2rem;
    margin-bottom: 1.4rem;
  }
`;

const FormField = styled(Form.Field)`
  &.field-terms {
    display: flex;
    align-items: center;
  }
`;

const FormLabel = styled(Form.Label)`
  font-size: 1.7rem;
  font-weight: 500;
  &.label-terms {
    font-size: 1.3rem;
    color: ${colors.grey4};
  }
`;

const Input = styled.input`
  width: 100%;
  font-size: 1.6rem;
  margin-top: 1rem;
  border: none;
  border-radius: 0.7rem;
  background-color: ${colors.grey1};
  padding: 0.9rem 1.5rem;
  box-sizing: border-box;
  outline: none;
  transition: all 0.2s ease-in-out;
  &:focus {
    box-shadow: 0 0 0 0.2rem ${colors.grey1};
    background-color: transparent;
  }
  &:not(:placeholder-shown) {
    box-shadow: 0 0 0 0.2rem ${colors.grey1};
    background-color: transparent;
  }
`;

const Button = styled.button`
  font-size: 2rem;
  background-color: ${colors.blue3};
  color: ${colors.white};
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.7rem;
  margin-top: 1rem;
  width: 100%;
  font-weight: 600;
  letter-spacing: 0.025rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${colors.blue4};
  }
  &:active {
    background-color: ${colors.blue5};
    box-shadow: 0 0 0 0.2rem ${colors.blue1};
  }
  &:focus {
    box-shadow: 0 0 0 0.2rem ${colors.blue1};
  }
`;

const A = styled.a`
  font-size: 1.4rem;
  color: ${colors.blue1};
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${colors.blue3};
    text-decoration: underline;
    cursor: pointer;
  }
  &:active {
    color: ${colors.blue5};
  }
`;

const SignUp = () => {
  return (
    <Div>
      <FormRoot>
        <Title>Connexion</Title>
        <FormField name="email">
          <FormLabel>Email</FormLabel>
          <Form.Control asChild>
            <Input type="email" placeholder="exemple@email.fr" />
          </Form.Control>
        </FormField>
        <FormField name="password">
          <FormLabel>Mot de passe</FormLabel>
          <Form.Control asChild>
            <Input type="password" placeholder="Mot de passe" />
          </Form.Control>
        </FormField>
        <Form.Submit asChild>
          <Button>Se connecter</Button>
        </Form.Submit>
      </FormRoot>
      <A href="https://google.fr">Créer un compte</A>
    </Div>
  );
};

export default SignUp;
