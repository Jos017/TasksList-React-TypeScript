import React, { useState } from 'react';
import { Props } from '../../models/Props.model';
import styles from './styles.module.css';

interface CreateTaskProps extends Props {
  addTask: (text: string) => void;
}

export const CreateTaskList = (props: CreateTaskProps) => {
  const { addTask } = props;

  //Controlling input
  const [newTask, setNewTask] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  // e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  const handleSubmit = (task: string) => {
    if (task) {
      addTask(task);
      setNewTask('');
    } else {
      alert('Add a valid task');
    }
  };

  const handleKeyUp = (
    e: React.KeyboardEvent<HTMLInputElement>,
    task: string
  ) => {
    if (e.key === 'Enter') {
      handleSubmit(task);
    }
  };

  return (
    <section className={styles.CreateTaskList}>
      <h2 className={styles.CreateTaskList__title}>Add new Task</h2>
      <h4 className={styles.CreateTaskList__subtitle}>Task Name</h4>
      <input
        className={styles.CreateTaskList__input}
        placeholder="Write your task here"
        value={newTask}
        onChange={handleInputChange}
        onKeyUp={(e) => {
          handleKeyUp(e, newTask);
        }}
      />
      <button
        className={styles.CreateTaskList__button}
        onClick={() => {
          handleSubmit(newTask);
        }}
      >
        Add Task
      </button>
    </section>
  );
};
