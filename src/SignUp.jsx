import styled from 'styled-components';
import * as Form from '@radix-ui/react-form';
import colors from './Colors';
import * as Checkbox from '@radix-ui/react-checkbox';

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
  & > *:not(:nth-last-child(2)) {
    margin-bottom: 3rem;
  }
  & > :last-child {
    margin-top: 2rem;
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

const CheckboxRoot = styled(Checkbox.Root)`
  min-width: 3rem;
  min-height: 3rem;
  border-radius: 0.7rem;
  margin-right: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  background-color: ${colors.grey1};
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${colors.grey2};
  }
  &:active {
    background-color: ${colors.grey3};
    box-shadow: 0 0 0 0.2rem ${colors.grey2};
  }
  &:focus {
    box-shadow: 0 0 0 0.2rem ${colors.grey2};
  }
`;

const CheckboxIndicator = styled(Checkbox.Indicator)`
  background-color: ${colors.green1};
  width: 1.5rem;
  height: 1.35rem;
  border-radius: 0.4rem;
  color: ${colors.green5};
  transition: all 0.2s ease-in-out;
`;

const A = styled.a`
  color: ${colors.blue1};
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${colors.blue3};
  }
  &:active {
    color: ${colors.blue5};
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

const SignUp = () => {
  return (
    <Div>
      <FormRoot>
        <Title>Inscription</Title>
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
        <FormField name="confirmPassword">
          <FormLabel>Confirmer le mot de passe</FormLabel>
          <Form.Control asChild>
            <Input type="password" placeholder="Confirmer le mot de passe" />
          </Form.Control>
        </FormField>
        <FormField className="field-terms" name="terms">
          <Form.Control asChild>
            <CheckboxRoot>
              <CheckboxIndicator></CheckboxIndicator>
            </CheckboxRoot>
          </Form.Control>
          <FormLabel className="label-terms">
            En vous inscrivant vous acceptez notre{' '}
            <A href="https://google.fr">Politique de confidentialité</A> et{' '}
            <A href="https://google.fr">Termes et conditions</A>
          </FormLabel>
        </FormField>
        <Form.Submit asChild>
          <Button>S'inscrire</Button>
        </Form.Submit>
      </FormRoot>
    </Div>
  );
};

export default SignUp;
