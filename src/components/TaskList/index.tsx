import React from 'react';
import styles from './styles.module.css';
import { TaskItem } from '../TaskItem';
import { List } from '../../models/List.model';
import { Props } from '../../models/Props.model';

interface ListProps extends Props {
  tasks: List[];
  completeTasks: (text: string) => void;
  postponeTasks: (text: string) => void;
  deleteTasks: (text: string) => void;
}

export const TaskList = (props: ListProps) => {
  const { tasks, completeTasks, postponeTasks, deleteTasks } = props;
  let counter = 0;
  let itemColor = counter;

  return (
    <section className={styles.TaskList}>
      <ul>
        {tasks.map((task) => {
          if (counter < 3) {
            itemColor = counter;
            counter += 1;
          } else {
            itemColor = counter;
            counter = 0;
          }
          return (
            <TaskItem
              key={task.text}
              text={task.text}
              itemColor={itemColor}
              completed={task.completed}
              completeTasks={completeTasks}
              postponeTasks={postponeTasks}
              deleteTasks={deleteTasks}
            />
          );
        })}
      </ul>
    </section>
  );
};
