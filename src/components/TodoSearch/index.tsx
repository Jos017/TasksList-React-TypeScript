import React from 'react';
import styles from './styles.module.css';

export const TodoSearch = () => {
  return (
    <div className={styles.TodoSearch}>
      <input placeholder="Search Task" className={styles.TodoSearch__input} />
      <div className={styles.TodoSearch__icon}>
        <i className={`material-icons ${styles.TodoSearch__icon__search}`}>
          search
        </i>
      </div>
    </div>
  );
};
