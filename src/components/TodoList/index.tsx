import React from 'react';
import styles from './styles.module.css';
import { TodoItem } from '../TodoItem';
import { List } from '../../models/List.model';
import { Props } from '../../models/Props.model';

interface ListProps extends Props {
  todos: List[];
  completeTodos: (text: string) => void;
  postponeTodos: (text: string) => void;
}

export const TodoList = (props: ListProps) => {
  const { todos, completeTodos, postponeTodos } = props;
  let counter = 0;
  let itemColor = counter;

  return (
    <section className={styles.TodoList}>
      <ul>
        {todos.map((todo) => {
          if (counter < 3) {
            itemColor = counter;
            counter += 1;
          } else {
            itemColor = counter;
            counter = 0;
          }
          return (
            <TodoItem
              key={todo.text}
              text={todo.text}
              itemColor={itemColor}
              completed={todo.completed}
              completeTodos={() => completeTodos(todo.text)}
              postponeTodos={() => postponeTodos(todo.text)}
            />
          );
        })}
      </ul>
    </section>
  );
};
