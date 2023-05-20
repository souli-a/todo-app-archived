import styled from 'styled-components';
import * as Form from '@radix-ui/react-form';
import { colors } from './Colors.jsx';

const FormRoot = styled(Form.Root)`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  color: ${colors.black};
  font-weight: 300;
`;

const FormField = styled(Form.Field)`
  width: 100%;
`;

const FormLabel = styled(Form.Label)`
  font-size: 2rem;
`;

const Input = styled.input`
  font-size: 2rem;
  margin-top: 10px;
  border: 1px solid ${colors.grey2};
  border-radius: 3px;
  padding: 0.9rem 0rem;
  width: 100%;
  outline: none;
  &:focus {
    box-shadow: 0 0 0 2px ${colors.grey1};
  }
`;

const Button = styled.button`
  font-size: 2rem;
  background-color: ${colors.green3};
  color: ${colors.black};
  border: none;
  padding: 0.9rem 1.8rem;
  border-radius: 3px;
  margin-top: 10px;
  width: 100%;
  font-weight: 500;
  &:hover {
    background-color: ${colors.green2};
  }
  &:active {
    background-color: ${colors.green1};
  }
  &:focus {
    box-shadow: 0 0 0 2px ${colors.green5};
  }
`;

const SignUp = () => {
  return (
    <FormRoot>
      <FormField name="email">
        <FormLabel>Email</FormLabel>
        <Form.Control asChild>
          <Input type="email" />
        </Form.Control>
      </FormField>
      <FormField name="password">
        <FormLabel>Mot de passe</FormLabel>
        <Form.Control asChild>
          <Input type="password" />
        </Form.Control>
      </FormField>
      <FormField name="confirmPassword">
        <FormLabel>Confirmer le mot de passe</FormLabel>
        <Form.Control asChild>
          <Input type="password" />
        </Form.Control>
      </FormField>
      <Form.Submit asChild>
        <Button>S'inscrire</Button>
      </Form.Submit>
    </FormRoot>
  );
};

export default SignUp;
