import React from 'react';
import styles from './styles.module.css';

export const CreateTaskList = () => {
  // e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  const onClickButton = (msg: string) => {
    alert(msg);
  };

  return (
    <section className={styles.CreateTaskList}>
      <h2 className={styles.CreateTaskList__title}>Add new Task</h2>
      <h4 className={styles.CreateTaskList__subtitle}>Task Name</h4>
      <input
        className={styles.CreateTaskList__input}
        placeholder="Write your task here"
      />
      <button
        className={styles.CreateTaskList__button}
        onClick={() => {
          onClickButton('New Task Added');
        }}
      >
        Add Task
      </button>
    </section>
  );
};
