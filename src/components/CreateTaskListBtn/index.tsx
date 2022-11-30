import React from 'react';
import styles from './styles.module.css';
import { AppContext } from '../../models/AppContext.model';
import { TaskContext } from '../../context/TaskContext';

export const CreateTaskListBtn = () => {
  const ctx = React.useContext(TaskContext);
  const { setIsModalOpen, isModalOpen, setModalAction } = ctx as AppContext;

  const handleModalOpen = () => {
    if (!isModalOpen) {
      setModalAction && setModalAction('create');
      setIsModalOpen && setIsModalOpen(true);
    }
  };

  return (
    <div className={styles.CreateTask}>
      <button className={styles.btn} onClick={handleModalOpen}>
        <p>Add new task</p>
        <div className={styles.CreateTask__icon}>
          <i className={`material-icons ${styles.CreateTask__icon__add}`}>
            add
          </i>
        </div>
      </button>
    </div>
  );
};
