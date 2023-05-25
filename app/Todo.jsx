import styled from 'styled-components';
import Paragraph from '../components/ui/Paragraph';
import { TodoInput } from '../components/ui/Input';
import {
  TodoCheckboxRoot,
  TodoCheckboxIndicator,
} from '../components/radix/RadixForm';
import { useState } from 'react';

const Division = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ChildDivision1 = styled.div`
  width: 40rem;
`;

const ChildDivision2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  input:first-child {
    margin-bottom: 3.5rem;
  }
  *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const Tasks = ({ children }) => {
  return (
    <TodoCheckboxRoot>
      <TodoCheckboxIndicator />
      <Paragraph>{children}</Paragraph>
    </TodoCheckboxRoot>
  );
};

const Todo = () => {
  return (
    <Division>
      <ChildDivision1>
        <ChildDivision2>
          <TodoInput placeholder="+ Ajouter une tâche" />
          <Tasks>Tâche 1</Tasks>
          <Tasks>Tâche 2</Tasks>
          <Tasks>Tâche 3</Tasks>
        </ChildDivision2>
      </ChildDivision1>
    </Division>
  );
};

export default Todo;
