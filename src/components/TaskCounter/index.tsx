import React from 'react';
import { TaskContext } from '../../context/TaskContext';
import { AppContext } from '../../models/AppContext.model';
import styles from './styles.module.css';

export const TaskCounter = () => {
  const ctx = React.useContext(TaskContext);
  const { completedTasks, totalTasks } = ctx as AppContext;

  return (
    <h2 className={styles.title}>
      {`Has completado ${completedTasks} de las ${totalTasks} tareas`}
    </h2>
  );
};
