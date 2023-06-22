import styled from 'styled-components';
import { themes, lightTheme } from '../styles/Themes';
import { useRef, useState, useEffect } from 'react';
import Paragraph from '../components/ui/Paragraph';
import { TodoInput } from '../components/ui/Input';
import {
  TodoCheckboxRoot,
  TodoCheckboxIndicator,
} from '../components/radix/RadixForm';
import Card from '../components/ui/Card';
import useTitlePage from '../components/hooks/useTitlePage';
import { RedButtonDelete } from '../components/ui/Button';
import { TrashSimple } from '@phosphor-icons/react';
import Tag from '../components/ui/Tag';
import axios from 'axios';

const FullContentDivision = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;
  width: 100%;
  @media (max-width: 440px) {
    margin-top: 3rem;
  }
`;

const ParentDivision = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40rem;
  @media (max-width: 440px) {
    width: 20rem;
  }
`;

const CounterDivision = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  gap: 3rem;
  @media (max-width: 440px) {
    flex-direction: column;
  }
`;

const InputDivision = styled.div`
  width: 100%;
`;

const StyledTag = styled(Tag)`
  position: absolute;
  margin: 1.8rem 0 0 32rem;
  @media (max-width: 440px) {
    margin: 1.8rem 0 0 12.5rem;
  }
`;

const FullTasksDivision = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 4rem 0 4rem 0;
  width: 100%;
`;

const TasksDivision = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
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

let serverURL = '';

if (import.meta.env.VITE_NODE_ENV === 'dev') {
  serverURL = import.meta.env.VITE_SERVER_LOCAL_URL;
}

if (import.meta.env.VITE_NODE_ENV === 'prod') {
  serverURL = import.meta.env.VITE_SERVER_BACK_END_URL;
}

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
      .get(`${serverURL}/api/todos`, {
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
          `${serverURL}/api/todos`,
          {
            content: inputValue,
            isDone: false,
          },
          {
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
      .delete(`${serverURL}/api/todos/${_id}`, {
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
        `${serverURL}/api/todos/${_id}`,
        { isDone: todos[index].isDone },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setTodos(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <FullContentDivision>
      <ParentDivision>
        <InputDivision>
          <StyledTag>ctrl + k</StyledTag>
          <TodoInput
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="+ Appuie sur Entrée ✌️"
            value={inputValue}
            ref={inputRef}
            maxLength="40"
          />
        </InputDivision>
        <FullTasksDivision>
          {todos.length > 0 && (
            <>
              {todos
                .slice(0)
                .reverse()
                .map((todo) => (
                  <div key={todo._id}>
                    <TasksDivision>
                      <Tasks
                        className="tasks"
                        onClick={() => handlePatch(todo._id)}
                        ariaChecked={todo.isDone ? 'true' : 'false'}
                        dataState={todo.isDone ? 'checked' : 'unchecked'}
                      >
                        {todo.content}
                      </Tasks>
                      <RedButtonDelete onClick={() => handleDelete(todo._id)}>
                        <TrashSimple
                          size={16}
                          weight="fill"
                          color={lightTheme.whiteIcon}
                        />
                      </RedButtonDelete>
                    </TasksDivision>
                  </div>
                ))}
            </>
          )}
          {todos.length === 0 && <Card>Aucune tâche en cours</Card>}
        </FullTasksDivision>
        <CounterDivision>
          <Card>
            {remainingTasks}{' '}
            {remainingTasks > 1 ? 'tâches restantes' : 'tâche restante'}
          </Card>
          <Card>
            {doneTasks} {doneTasks > 1 ? 'tâches' : 'tâche'}{' '}
            {doneTasks > 1 ? 'terminées' : 'terminé'}
          </Card>
        </CounterDivision>
      </ParentDivision>
    </FullContentDivision>
  );
};

export default Todo;
