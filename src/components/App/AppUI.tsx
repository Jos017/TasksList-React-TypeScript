import React from 'react';
import { TaskCounter } from '../TaskCounter';
import { TaskSearch } from '../TaskSearch';
import { TaskList } from '../TaskList';
import { CreateTaskList } from '../CreateTaskList';
import { CreateTaskListBtn } from '../CreateTaskListBtn';
import { TaskContext } from '../../context/TaskContext';
import styles from './styles.module.css';
import { AppContext } from '../../models/AppContext.model';
import { Modal } from '../Modal';
import { Loader } from '../Loader';

export const AppUI = () => {
  const ctx = React.useContext(TaskContext);
  const { loading, error, searchedTasks, isModalOpen, textModalValue } =
    ctx as AppContext;

  return (
    <div className={styles.App}>
      <CreateTaskList />
      <div className={styles.App__list}>
        <div className={styles.App__search}>
          <h1 className={styles.App__title}>Your Tasks</h1>
          <TaskCounter />
          <TaskSearch />
        </div>
        <TaskList>
          <>
            {error && <p>There was an error...</p>}
            {loading && (
              <>
                <Loader />
                <Loader />
                <Loader />
                <Loader />
              </>
            )}
            {!loading && !searchedTasks?.length && !error && (
              <p>Add your first task</p>
            )}
          </>
        </TaskList>
        <CreateTaskListBtn />
      </div>
      {isModalOpen && (
        <Modal>
          <p>{textModalValue}</p>
        </Modal>
      )}
    </div>
  );
};
