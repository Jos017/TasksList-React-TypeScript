import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoList } from '../CreateTodoList';
import { Props } from '../../models/Props.model';
import { List } from '../../models/List.model';
import styles from './styles.module.css';

interface AppUIProps extends Props {
  totalTodos: number;
  completedTodos: number;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchedTodos: List[];
  completeTodo: (text: string) => void;
  postponeTodo: (text: string) => void;
  deleteTodo: (text: string) => void;
}

export const AppUI = (props: AppUIProps) => {
  const {
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    postponeTodo,
    deleteTodo,
  } = props;
  return (
    <div className={styles.App}>
      <h1 className={styles.App__title}>Your Tasks</h1>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList
        todos={searchedTodos}
        completeTodos={completeTodo}
        postponeTodos={postponeTodo}
        deleteTodos={deleteTodo}
      />
      <CreateTodoList />
    </div>
  );
};
