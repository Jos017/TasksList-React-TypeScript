import React, { useState } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { AppContext } from '../../models/AppContext.model';
import styles from './styles.module.css';

export const CreateTaskList = () => {
  const ctx = React.useContext(TaskContext);
  const { addTask, setIsModalOpen, isModalOpen, setModalAction } =
    ctx as AppContext;

  //Controlling input
  const [newTask, setNewTask] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  // e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  const handleSubmit = (task: string) => {
    if (task.length >= 4) {
      addTask && addTask(task);
      setNewTask('');
    } else {
      if (!isModalOpen) {
        setModalAction && setModalAction('continue');
        setIsModalOpen && setIsModalOpen(true);
      }
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
      <div className={styles.CreateTaskList__container}>
        <div className={styles.CreateTaskList__img}>
          <img src="panda.png" alt="panda" />
        </div>
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
      </div>
    </section>
  );
};
