import styled from 'styled-components';
import * as Form from '@radix-ui/react-form';
import * as Checkbox from '@radix-ui/react-checkbox';
import { themes, lightTheme } from '../../styles/Themes';
import { forwardRef } from 'react';

const StyledFormRoot = styled(Form.Root)`
  width: ${themes.width.formRoot};
  display: ${themes.display.formRoot};
  flex-direction: ${themes.flexDirection.formRoot};
  color: ${({ theme }) => theme.colorFormRoot};
  font-weight: ${themes.fontWeight.formRoot};
  border-radius: ${themes.borderRadius.formRoot};

  & > *:not(:nth-last-child(2)) {
    margin-bottom: ${themes.marginBottom.formRootNotLastChild};
  }

  & > *:last-child {
    margin-top: ${themes.marginTop.formRootLastChild};
  }

  @media (max-width: 600px) {
    width: 30rem;
  }

  @media (max-width: 370px) {
    width: 20rem;
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

  @media (max-width: 380px) {
    margin: 2rem 0 -2rem 0;
  }
`;

const StyledFormLabel = styled(Form.Label)`
  font-size: ${themes.fontSize.formLabel};
  font-weight: ${themes.fontWeight.formLabel};
  margin: ${themes.margin.formLabel};
`;

const StyledFormLabelTerms = styled(Form.Label)`
  font-size: ${themes.fontSize.formLabelTerms};
  color: ${({ theme }) => theme.colorFormLabel};
  line-height: ${themes.lineHeight.formLabelTerms};
  & * {
    font-size: ${themes.fontSize.formLabelTerms};
  }
`;

const StyledCheckboxRoot = styled(Checkbox.Root)`
  width: ${themes.width.checkboxRoot};
  height: ${themes.height.checkboxRoot};
  border-radius: ${themes.borderRadius.checkboxRoot};
  margin: ${themes.margin.checkboxRoot};
  display: ${themes.display.checkboxRoot};
  align-items: ${themes.alignItems.checkboxRoot};
  justify-content: ${themes.justifyContent.checkboxRoot};
  background-color: ${lightTheme.checkboxRootBg};
  transition: ${themes.transition.checkboxRoot};
  &:hover {
    background-color: ${lightTheme.checkboxRootHover};
  }
  &:active {
    background-color: ${lightTheme.checkboxRootActive};
    box-shadow: ${themes.boxShadow.checkboxRoot}
      ${lightTheme.checkboxRootBorder};
  }
  &:focus {
    box-shadow: ${themes.boxShadow.checkboxRoot}
      ${lightTheme.checkboxRootBorder};
  }
  &[data-state='checked'] {
    background-color: ${lightTheme.checkboxRootBgChecked};
    box-shadow: ${themes.boxShadow.checkboxRoot}
      ${lightTheme.checkboxRootBorderChecked};
    &:hover {
      background-color: ${lightTheme.checkboxRootBgCheckedHover};
    }
    &:active {
      background-color: ${lightTheme.checkboxRootBgCheckedActive};
    }
  }
`;

const StyledTodoCheckboxRoot = styled(Checkbox.Root)`
  width: ${themes.width.todoCheckboxRoot};
  height: ${themes.height.todoCheckboxRoot};
  border-radius: ${themes.borderRadius.todoCheckboxRoot};
  display: ${themes.display.todoCheckboxRoot};
  align-items: ${themes.alignItems.todoCheckboxRoot};
  padding: ${themes.padding.todoCheckboxRoot};
  background-color: ${({ theme }) => theme.bgColorTodoCheckboxRoot};
  box-shadow: ${themes.boxShadow.todoCheckboxRoot}
    ${lightTheme.todoCheckboxRootBorder};
  transition: ${themes.transition.todoCheckboxRoot};

  p {
    font-size: ${themes.fontSize.paragraphTodoCheckboxRoot};
    overflow: ${themes.overflow.paragraphTodoCheckboxRoot};
    color: ${({ theme }) => theme.colorParagraphTodoCheckboxRoot};
  }

  &:hover {
    background-color: ${({ theme }) => theme.bgColorTodoCheckboxRootHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.bgColorTodoCheckboxRootActive};
    box-shadow: ${themes.boxShadow.todoCheckboxRoot}
      ${lightTheme.todoCheckboxRootBorderActive};
  }

  &[data-state='checked'] {
    background-color: ${({ theme }) => theme.bgColorTodoCheckboxRootChecked};

    p {
      text-decoration-line: ${themes.textDecorationLine
        .paragraphTodoCheckboxRootChecked};
      color: ${({ theme }) => theme.colorParagraphTodoCheckboxRootChecked};
      text-decoration-thickness: ${themes.textDecorationThickness
        .paragraphTodoCheckboxRootChecked};
    }

    &:hover {
      background-color: ${({ theme }) =>
        theme.bgColorTodoCheckboxRootCheckedHover};
    }

    &:active {
      background-color: ${({ theme }) =>
        theme.bgColorTodoCheckboxRootCheckedActive};
      box-shadow: ${themes.boxShadow.todoCheckboxRoot}
        ${lightTheme.todoCheckboxRootBorderCheckedActive};
    }
  }
`;

const StyledCheckboxIndicator = styled(Checkbox.Indicator)`
  background-color: ${lightTheme.checkboxIndicatorBg};
  color: ${lightTheme.checkboxIndicator};
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
      <StyledCheckboxRoot ref={ref} {...register()}>
        {children}
      </StyledCheckboxRoot>
    </>
  );
});

const TodoCheckboxRoot = ({ onClick, children, ariaChecked, dataState }) => {
  return (
    <>
      <StyledTodoCheckboxRoot
        onClick={onClick}
        aria-checked={ariaChecked}
        data-state={dataState}
      >
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
