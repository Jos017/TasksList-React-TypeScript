import React from 'react';
import { TaskCounter } from '../TaskCounter';
import { TaskSearch } from '../TaskSearch';
import { TaskList } from '../TaskList';
import { CreateTaskList } from '../CreateTaskList';
import { Props } from '../../models/Props.model';
import { List } from '../../models/List.model';
import styles from './styles.module.css';

interface AppUIProps extends Props {
  totalTasks: number;
  completedTasks: number;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchedTasks: List[];
  completeTask: (text: string) => void;
  postponeTask: (text: string) => void;
  deleteTask: (text: string) => void;
  addTask: (text: string) => void;
}

export const AppUI = (props: AppUIProps) => {
  const {
    totalTasks,
    completedTasks,
    searchValue,
    setSearchValue,
    searchedTasks,
    completeTask,
    postponeTask,
    deleteTask,
    addTask,
  } = props;
  return (
    <div className={styles.App}>
      <h1 className={styles.App__title}>Your Tasks</h1>
      <TaskCounter completed={completedTasks} total={totalTasks} />
      <TaskSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TaskList
        tasks={searchedTasks}
        completeTasks={completeTask}
        postponeTasks={postponeTask}
        deleteTasks={deleteTask}
      />
      <CreateTaskList addTask={addTask} />
    </div>
  );
};
