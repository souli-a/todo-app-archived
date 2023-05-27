import styled from 'styled-components';
import * as Form from '@radix-ui/react-form';
import * as Checkbox from '@radix-ui/react-checkbox';
import themes from '../../styles/Themes';
import { forwardRef } from 'react';

const StyledFormRoot = styled(Form.Root)`
  width: ${themes.width.formRoot};
  display: ${themes.display.formRoot};
  flex-direction: ${themes.flexDirection.formRoot};
  color: ${themes.colors.formRoot};
  font-weight: ${themes.fontWeight.formRoot};
  border-radius: ${themes.borderRadius.formRoot};
  & > *:not(:nth-last-child(2)) {
    margin-bottom: ${themes.marginBottom.formRootNotLastChild};
  }
  & > *:last-child {
    margin-top: ${themes.marginTop.formRootLastChild};
  }
`;

const StyledFormField = styled(Form.Field)`
  display: ${themes.display.formField};
  flex-direction: ${themes.flexDirection.formField};
  margin: ${themes.margin.formField};
`;

const StyledFormFieldTerms = styled(Form.Field)`
  display: ${themes.display.formFieldTerms};
  height: ${themes.height.formFieldTerms};
  margin: ${themes.margin.formFieldTerms};
  align-items: ${themes.alignItems.formFieldTerms};
`;

const StyledFormLabel = styled(Form.Label)`
  font-size: ${themes.fontSize.formLabel};
  font-weight: ${themes.fontWeight.formLabel};
  margin: ${themes.margin.formLabel};
`;

const StyledFormLabelTerms = styled(Form.Label)`
  font-size: ${themes.fontSize.formLabelTerms};
  color: ${themes.colors.formLabelTerms};
  line-height: ${themes.lineHeight.formLabelTerms};
  & * {
    font-size: ${themes.fontSize.formLabelTerms};
  }
`;

const StyledCheckboxRoot = styled(Checkbox.Root)`
  min-width: ${themes.width.checkboxRoot};
  min-height: ${themes.height.checkboxRoot};
  border-radius: ${themes.borderRadius.checkboxRoot};
  margin: ${themes.margin.checkboxRoot};
  display: ${themes.display.checkboxRoot};
  align-items: ${themes.alignItems.checkboxRoot};
  justify-content: ${themes.justifyContent.checkboxRoot};
  background-color: ${themes.colors.checkboxRootBg};
  transition: ${themes.transition.checkboxRoot};
  &:hover {
    background-color: ${themes.colors.checkboxRootHover};
  }
  &:active {
    background-color: ${themes.colors.checkboxRootActive};
    box-shadow: ${themes.boxShadow.checkboxRoot}
      ${themes.colors.checkboxRootBorder};
  }
  &:focus {
    box-shadow: ${themes.boxShadow.checkboxRoot}
      ${themes.colors.checkboxRootBorder};
  }
  &[data-state='checked'] {
    background-color: ${themes.colors.checkboxRootBgChecked};
    box-shadow: ${themes.boxShadow.checkboxRoot}
      ${themes.colors.checkboxRootBorderChecked};
    &:hover {
      background-color: ${themes.colors.checkboxRootBgCheckedHover};
    }
    &:active {
      background-color: ${themes.colors.checkboxRootBgCheckedActive};
    }
  }
`;

const StyledTodoCheckboxRoot = styled(Checkbox.Root)`
  width: ${themes.width.todoCheckboxRoot};
  min-height: ${themes.minHeight.todoCheckboxRoot};

  border-radius: ${themes.borderRadius.todoCheckboxRoot};

  display: ${themes.display.todoCheckboxRoot};
  align-items: ${themes.alignItems.todoCheckboxRoot};

  padding: ${themes.padding.todoCheckboxRoot};

  background-color: ${themes.colors.todoCheckboxRootBg};

  box-shadow: ${themes.boxShadow.todoCheckboxRoot}
    ${themes.colors.todoCheckboxRootBorder};
  transition: ${themes.transition.todoCheckboxRoot};
  p {
    font-size: ${themes.fontSize.paragraphTodoCheckboxRoot};
  }
  &:hover {
    background-color: ${themes.colors.todoCheckboxRootBgHover};
  }
  &:active {
    background-color: ${themes.colors.todoCheckboxRootBgActive};
    box-shadow: ${themes.boxShadow.todoCheckboxRoot}
      ${themes.colors.todoCheckboxRootBorderActive};
  }
  &[data-state='checked'] {
    background-color: ${themes.colors.todoCheckboxRootBgChecked};
    p {
      text-decoration-line: ${themes.textDecorationLine
    .paragraphTodoCheckboxRootChecked};
      color: ${themes.colors.paragraphTodoCheckboxRootChecked};
      text-decoration-thickness: ${themes.textDecorationThickness
    .paragraphTodoCheckboxRootChecked};
    }
    &:hover {
      background-color: ${themes.colors.todoCheckboxRootBgCheckedHover};
    }
    &:active {
      background-color: ${themes.colors.todoCheckboxRootBgCheckedActive};
      box-shadow: ${themes.boxShadow.todoCheckboxRoot}
        ${themes.colors.todoCheckboxRootBorderCheckedActive};
    }
  }
`;

const StyledCheckboxIndicator = styled(Checkbox.Indicator)`
  background-color: ${themes.colors.checkboxIndicatorBg};
  color: ${themes.colors.checkboxIndicator};
  width: ${themes.width.checkboxIndicator};
  height: ${themes.height.checkboxIndicator};
  border-radius: ${themes.borderRadius.checkboxIndicator};
  transition: ${themes.transition.checkboxIndicator};
`;

const StyledTodoCheckboxIndicator = styled(Checkbox.Indicator)``;

const FormRoot = ({ children, onSubmit }) => {
  return (
    <>
      <StyledFormRoot onSubmit={onSubmit}>{children}</StyledFormRoot>
    </>
  );
};

const FormField = ({ children, name }) => {
  return (
    <>
      <StyledFormField name={name}>{children}</StyledFormField>
    </>
  );
};

const FormFieldTerms = ({ children, name }) => {
  return (
    <>
      <StyledFormFieldTerms name={name}>{children}</StyledFormFieldTerms>
    </>
  );
};

const FormLabel = ({ children }) => {
  return (
    <>
      <StyledFormLabel>{children}</StyledFormLabel>
    </>
  );
};

const FormLabelTerms = ({ children }) => {
  return (
    <>
      <StyledFormLabelTerms>{children}</StyledFormLabelTerms>
    </>
  );
};

const FormControl = ({ children }) => {
  return (
    <>
      <Form.Control asChild>{children}</Form.Control>
    </>
  );
};

const CheckboxRoot = forwardRef(({ children, register }, ref) => {
  return (
    <>
      <StyledCheckboxRoot {...register()}>{children}</StyledCheckboxRoot>
    </>
  );
});

const TodoCheckboxRoot = ({ onClick, children }) => {
  return (
    <>
      <StyledTodoCheckboxRoot onClick={onClick}>
        {children}
      </StyledTodoCheckboxRoot>
    </>
  );
};

const CheckboxIndicator = ({ children }) => {
  return (
    <>
      <StyledCheckboxIndicator>{children}</StyledCheckboxIndicator>
    </>
  );
};

const TodoCheckboxIndicator = ({ children }) => {
  return (
    <>
      <StyledTodoCheckboxIndicator>{children}</StyledTodoCheckboxIndicator>
    </>
  );
};

const FormSubmit = ({ children }) => {
  return (
    <>
      <Form.Submit asChild>{children}</Form.Submit>
    </>
  );
};

export {
  FormRoot,
  FormField,
  FormFieldTerms,
  FormLabel,
  FormLabelTerms,
  FormControl,
  CheckboxRoot,
  TodoCheckboxRoot,
  CheckboxIndicator,
  TodoCheckboxIndicator,
  FormSubmit,
};
