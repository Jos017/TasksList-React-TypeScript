import React from 'react';
import styles from './styles.module.css';
import { TodoItem } from '../TodoItem';
import { List } from '../../models/List.model';
import { Props } from '../../models/Props.model';

interface ListProps extends Props {
  todos: List[];
}

export const TodoList = (props: ListProps) => {
  let counter = 0;
  let itemColor = counter;
  return (
    <section className={styles.TodoList}>
      <ul>
        {props.todos.map((todo) => {
          if (counter < 3) {
            itemColor = counter;
            counter += 1;
          } else {
            itemColor = counter;
            counter = 0;
          }
          return (
            <TodoItem key={todo.text} text={todo.text} itemColor={itemColor} />
          );
        })}
      </ul>
    </section>
  );
};
