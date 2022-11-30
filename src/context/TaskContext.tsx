import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { AppContext } from '../models/AppContext.model';
import { List } from '../models/List.model';
import { Props } from '../models/Props.model';

export const TaskContext = React.createContext<AppContext | null>(null);

export function TaskProvider(props: Props) {
  const {
    item: tasks,
    saveItem: saveTasks,
    loading,
    error,
  } = useLocalStorage('TasksApp_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [textModalValue, setTextModalValue] = React.useState('');
  const [modalAction, setModalAction] = React.useState<
    'continue' | 'delete' | 'create'
  >('continue');

  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  let searchedTasks = [];

  if (searchValue.length < 1) {
    searchedTasks = tasks;
  } else {
    searchedTasks = tasks.filter((task) => {
      const taskText = task.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return taskText.includes(searchText);
    });
  }

  const completeTask = (text: string) => {
    const taskIndex = tasks.findIndex((task) => task.text === text);
    const newTasks = [...tasks];
    newTasks[taskIndex].completed = true;
    saveTasks(newTasks);
  };

  const postponeTask = (text: string) => {
    const taskIndex = tasks.findIndex((task) => task.text === text);
    const newTasks = [...tasks];
    newTasks[taskIndex].completed = false;
    saveTasks(newTasks);
  };

  const deleteTask = (text: string) => {
    const taskIndex = tasks.findIndex((task) => task.text === text);
    const newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);
    saveTasks(newTasks);
  };

  const addTask = (text: string) => {
    const addedTask: List = { text: text, completed: false };
    const newTasks = [...tasks];
    newTasks.push(addedTask);
    saveTasks(newTasks);
  };

  const appContext: AppContext = {
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
    isModalOpen,
    setIsModalOpen,
    textModalValue,
    setTextModalValue,
    modalAction,
    setModalAction,
  };

  return (
    <TaskContext.Provider value={appContext}>
      {props.children}
    </TaskContext.Provider>
  );
}
