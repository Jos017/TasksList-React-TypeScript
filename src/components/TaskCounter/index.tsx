import React from 'react';
import { Props } from '../../models/Props.model';
import styles from './styles.module.css';

interface CounterProps extends Props {
  total: number;
  completed: number;
}

export const TaskCounter = (props: CounterProps) => {
  const { total, completed } = props;

  return (
    <h2 className={styles.title}>
      {`Has completado ${completed} de las ${total} tareas`}
    </h2>
  );
};
