import styled from 'styled-components';
import themes from '../styles/Themes';
import { nanoid } from 'nanoid';
import { useRef, useState, useEffect } from 'react';
import Paragraph from '../components/ui/Paragraph';
import { TodoInput } from '../components/ui/Input';
import {
  TodoCheckboxRoot,
  TodoCheckboxIndicator,
} from '../components/radix/RadixForm';
import Card from '../components/ui/Card';
import { RedButton } from '../components/ui/Button';
import { TrashSimple } from '@phosphor-icons/react';
import Tag from '../components/ui/Tag';

const Division = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const CounterDivision = styled.div`
  display: flex;
  gap: 2.5rem;
  width: 100%;
`;

const FullContentDivision = styled.div`
  width: 50rem;
`;

const InputDivision = styled.div`
  width: 100%;
  display: flex;
`;

const StyledTag = styled(Tag)`
  &.tag-keybinds {
    position: absolute;
    margin-left: 42rem;
    margin-top: 1.7rem;
  }
`;

const FullTasksDivision = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  margin: 4rem 0 4rem 0;
`;

const TasksDivision = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  height: 5rem;
`;

const ParentCounterDivision = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  gap: 4rem;
`;

const Tasks = ({ children, onClick }) => {
  return (
    <TodoCheckboxRoot onClick={onClick}>
      <TodoCheckboxIndicator />
      <Paragraph>{children}</Paragraph>
    </TodoCheckboxRoot>
  );
};

const Todo = () => {
  const inputRef = useRef();
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [remainingTasks, setRemainingTasks] = useState(0);
  const [doneTasks, setDoneTasks] = useState(0);

  useEffect(() => {
    const tasksTotal = todos.length;
    const tasksDone = todos.filter((tasks) => tasks.isDone === true);
    const TasksTotalDone = tasksDone.length;
    const remainingTasks = tasksTotal - TasksTotalDone;
    setRemainingTasks(remainingTasks);
    setDoneTasks(TasksTotalDone);
  }, [todos]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    inputValue !== ''
      ? setTodos([
          { id: nanoid(), content: inputValue, isDone: false },
          ...todos,
        ])
      : null;
    setInputValue('');
    inputRef.current.blur();
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const focusInput = (event) => {
    if (event.ctrlKey && event.key === 'k') {
      event.preventDefault();
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', focusInput);

    return () => {
      document.removeEventListener('keydown', focusInput);
    };
  }, []);

  const handleKeyDown = (event) => {
    event.key === 'Enter' ? handleAddTodo() : null;
  };

  return (
    <Division>
      <FullContentDivision>
        <InputDivision>
          <TodoInput
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="+ Ajouter une tâche ― Appuyer sur Entrée ✌️"
            value={inputValue}
            ref={inputRef}
            maxLength="40"
          />
          <StyledTag className="tag-keybinds">ctrl + k</StyledTag>
        </InputDivision>
        {todos.length > 0 && (
          <FullTasksDivision>
            {todos.map((todo) => (
              <TasksDivision key={todo.id}>
                <Tasks className="tasks" onClick={() => handleDone(todo.id)}>
                  {todo.content}
                </Tasks>
                <RedButton onClick={() => handleDeleteTodo(todo.id)}>
                  <TrashSimple
                    size={32}
                    weight="fill"
                    color={themes.colors.whiteIcon}
                  />
                </RedButton>
              </TasksDivision>
            ))}
          </FullTasksDivision>
        )}
        <ParentCounterDivision>
          {todos.length === 0 && <Card>Aucune tâche en cours</Card>}
          <CounterDivision>
            <Card>
              J'ai {remainingTasks}{' '}
              {remainingTasks > 1 ? 'tâches restantes' : 'tâche restante'}
            </Card>
            <Card>
              J'ai {doneTasks > 1 ? 'terminées' : 'terminé'} {doneTasks}{' '}
              {doneTasks > 1 ? 'tâches' : 'tâche'}
            </Card>
          </CounterDivision>
        </ParentCounterDivision>
      </FullContentDivision>
    </Division>
  );
};

export default Todo;
