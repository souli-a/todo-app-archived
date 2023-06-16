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
import Header from '../components/ui/Header';
import useTitlePage from '../components/hooks/useTitlePage';

import { RedButton } from '../components/ui/Button';
import { TrashSimple } from '@phosphor-icons/react';
import Tag from '../components/ui/Tag';
import axios from 'axios';

const FullContentDivision = styled.div`
  width: 100%;
  height: 100%;
`;

const ParentDivision = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 10rem;
`;

const Division = styled.div`
  width: 50rem;
`;

const CounterDivision = styled.div`
  display: flex;
  gap: 2.5rem;
  width: 100%;
  margin-bottom: 5rem;
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

const Tasks = ({ children, onClick, dataState, ariaChecked }) => {
  return (
    <TodoCheckboxRoot
      onClick={onClick}
      ariaChecked={ariaChecked}
      dataState={dataState}
    >
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

  useTitlePage({ title: 'Todo' });

  useEffect(() => {
    const tasksTotal = todos.length;
    const tasksDone = todos.filter((tasks) => tasks.isDone === true);
    const TasksTotalDone = tasksDone.length;
    const remainingTasks = tasksTotal - TasksTotalDone;
    setRemainingTasks(remainingTasks);
    setDoneTasks(TasksTotalDone);
  }, [todos]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/todos', {
        // Allow cookies in Axios.
        withCredentials: true,
      })
      .then((res) => {
        setTodos(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const focusInput = (e) => {
    if (e.ctrlKey && e.key === 'k') {
      e.preventDefault();
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', focusInput);
    return () => {
      document.removeEventListener('keydown', focusInput);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  const handleAddTodo = () => {
    if (inputValue !== '') {
      axios
        .post(
          'http://localhost:4000/api/todos',
          {
            content: inputValue,
            isDone: false,
          },
          {
            // Allow cookies in Axios.
            withCredentials: true,
          }
        )
        .then((res) => {
          setTodos([...todos, res.data]);
          setInputValue('');
          inputRef.current.blur();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleDelete = (_id) => {
    axios
      .delete(`http://localhost:4000/api/todos/${_id}`, {
        // Allow cookies in Axios.
        withCredentials: true,
      })
      .then((res) => {
        setTodos(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePatch = (_id) => {
    const index = todos.findIndex((t) => t._id === _id);

    if (index !== -1) {
      todos[index].isDone = !todos[index].isDone;
    }

    axios
      .patch(
        `http://localhost:4000/api/todos/${_id}`,
        { isDone: todos[index].isDone },
        {
          // Allow cookies in Axios.
          withCredentials: true,
        }
      )
      .then((res) => {
        setTodos(res.data);
      })
      .then(() => {
        console.log(todos[index].isDone);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <FullContentDivision>
      <Header />
      <ParentDivision>
        <Division>
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
                <TasksDivision key={todo._id}>
                  <Tasks
                    className="tasks"
                    onClick={() => handlePatch(todo._id)}
                    ariaChecked={todo.isDone ? 'true' : 'false'}
                    dataState={todo.isDone ? 'checked' : 'unchecked'}
                  >
                    {todo.content}
                  </Tasks>
                  <RedButton onClick={() => handleDelete(todo._id)}>
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
        </Division>
      </ParentDivision>
    </FullContentDivision>
  );
};

export default Todo;
