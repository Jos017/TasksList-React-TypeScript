import React from 'react';
import styles from './styles.module.css';

export const CreateTodoList = () => {
  // e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  const onClickButton = (msg: string) => {
    alert(msg);
  };

  return (
    <section className={styles.CreateTodoList}>
      <h2 className={styles.CreateTodoList__title}>Add new Task</h2>
      <h4 className={styles.CreateTodoList__subtitle}>Task Name</h4>
      <input
        className={styles.CreateTodoList__input}
        placeholder="Write your task here"
      />
      <button
        className={styles.CreateTodoList__button}
        onClick={() => {
          onClickButton('New Task Added');
        }}
      >
        Add Task
      </button>
    </section>
  );
};
