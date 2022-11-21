import React from 'react';
import { List } from '../../models/List.model';
import { AppUI } from './AppUI';

function App() {
  const localStorageTasks = localStorage.getItem('TasksApp_V1');
  let parsedTasks: List[];

  // Verify if there are created tasks
  if (!localStorageTasks) {
    localStorage.setItem('TasksApp_V1', JSON.stringify([]));
    parsedTasks = [];
  } else {
    parsedTasks = JSON.parse(localStorageTasks);
  }

  const [tasks, setTasks] = React.useState(parsedTasks);
  const [searchValue, setSearchValue] = React.useState('');

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

  const saveTasks = (newTasks: List[]) => {
    const stringifiedTasks = JSON.stringify(newTasks);
    localStorage.setItem('TasksApp_V1', stringifiedTasks);
    setTasks(newTasks);
  };

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

  return (
    <AppUI
      totalTasks={totalTasks}
      completedTasks={completedTasks}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTasks={searchedTasks}
      completeTask={completeTask}
      postponeTask={postponeTask}
      deleteTask={deleteTask}
      addTask={addTask}
    />
  );
}

export default App;
