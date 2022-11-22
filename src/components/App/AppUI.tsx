import React from 'react';
import { TaskCounter } from '../TaskCounter';
import { TaskSearch } from '../TaskSearch';
import { TaskList } from '../TaskList';
import { CreateTaskList } from '../CreateTaskList';
import { TaskContext } from '../../context/TaskContext';
import styles from './styles.module.css';
import { AppContext } from '../../models/AppContext.model';

export const AppUI = () => {
  const ctx = React.useContext(TaskContext);
  const { loading, error, searchedTasks } = ctx as AppContext;

  return (
    <div className={styles.App}>
      <CreateTaskList />
      <h1 className={styles.App__title}>Your Tasks</h1>
      <TaskCounter />
      <TaskSearch />
      <TaskList>
        <>
          {error && <p>There was an error...</p>}
          {loading && <p>We are loading your data, wait...</p>}
          {!loading && !searchedTasks?.length && !error && (
            <p>Add your first task</p>
          )}
        </>
      </TaskList>
    </div>
  );
};
