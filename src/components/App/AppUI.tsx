import React from 'react';
import { TaskCounter } from '../TaskCounter';
import { TaskSearch } from '../TaskSearch';
import { TaskList } from '../TaskList';
import { CreateTaskList } from '../CreateTaskList';
import { TaskContext } from '../../context/TaskContext';
import styles from './styles.module.css';

export const AppUI = () => {
  return (
    <div className={styles.App}>
      <TaskContext.Consumer>
        {(value) => {
          if (value !== null) {
            const {
              loading,
              error,
              totalTasks,
              completedTasks,
              searchValue,
              setSearchValue,
              searchedTasks,
              completeTask,
              postponeTask,
              deleteTask,
              addTask,
            } = value;
            return (
              <>
                <CreateTaskList addTask={addTask} />
                <h1 className={styles.App__title}>Your Tasks</h1>
                <TaskCounter completed={completedTasks} total={totalTasks} />
                <TaskSearch
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                />
                <TaskList
                  searchedTasks={searchedTasks}
                  completeTasks={completeTask}
                  postponeTasks={postponeTask}
                  deleteTasks={deleteTask}
                >
                  <>
                    {error && <p>There was an error...</p>}
                    {loading && <p>We are loading your data, wait...</p>}
                    {!loading && !searchedTasks.length && !error && (
                      <p>Add your first task</p>
                    )}
                  </>
                </TaskList>
              </>
            );
          }
        }}
      </TaskContext.Consumer>
    </div>
  );
};
