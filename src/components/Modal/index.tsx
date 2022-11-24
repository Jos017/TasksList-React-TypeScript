import React from 'react';
import ReactDOM from 'react-dom';
import { Props } from '../../models/Props.model';
import { TaskContext } from '../../context/TaskContext';
import { AppContext } from '../../models/AppContext.model';
import styles from './styles.module.css';
import { text } from 'stream/consumers';

function Modal(props: Props) {
  const modal = document.getElementById('modal') as HTMLElement;
  const ctx = React.useContext(TaskContext);
  const { isModalOpen, setIsModalOpen, deleteTask, textModalValue } =
    ctx as AppContext;

  const handleModalClose = () => {
    if (setIsModalOpen && isModalOpen) {
      setIsModalOpen(false);
    }
  };

  const handleConfirmAction = (action: 'delete' | 'continue') => {
    if (textModalValue && action === 'delete') {
      deleteTask && deleteTask(textModalValue);
      setIsModalOpen && setIsModalOpen(false);
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.Modal__background}>
      <div className={styles.Modal__container}>
        <div className={styles.Modal__textContainer}>
          <h3>Confirm delete</h3>
          <p className={styles.Modal__textContainer__p}>
            Are you sure you want to delete: <strong>{props.children}</strong>
          </p>
        </div>
        <div className={styles.Modal__btnContainer}>
          <button
            className={`${styles.Modal__btn} ${styles.Modal__btnGray}`}
            onClick={handleModalClose}
          >
            Cancel
          </button>
          <button
            className={`${styles.Modal__btn} ${styles.Modal__btnAlert}`}
            onClick={() => handleConfirmAction('delete')}
          >
            Delete
          </button>
        </div>
      </div>
    </div>,
    modal
  );
}

export { Modal };
