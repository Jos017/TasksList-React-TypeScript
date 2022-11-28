import React from 'react';
import styles from './styles.module.css';
import { TaskItem } from '../TaskItem';
import { AppContext } from '../../models/AppContext.model';
import { TaskContext } from '../../context/TaskContext';
import { Props } from '../../models/Props.model';

export const TaskList = (props: Props) => {
  const ctx = React.useContext(TaskContext);
  const { searchedTasks } = ctx as AppContext;
  let counter = 0;
  let itemColor = counter;

  return (
    <section className={styles.TaskList}>
      {props.children}
      <ul>
        {searchedTasks?.map((task, index) => {
          if (counter < 3) {
            itemColor = counter;
            counter += 1;
          } else {
            itemColor = counter;
            counter = 0;
          }
          return (
            <TaskItem
              key={index}
              text={task.text}
              itemColor={itemColor}
              completed={task.completed}
            />
          );
        })}
      </ul>
    </section>
  );
};
