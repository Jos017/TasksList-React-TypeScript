import React from 'react';
import ReactDOM from 'react-dom';
import { Props } from '../../models/Props.model';
import { TaskContext } from '../../context/TaskContext';
import { AppContext } from '../../models/AppContext.model';
import styles from './styles.module.css';

function Modal(props: Props) {
  const modal = document.getElementById('modal') as HTMLElement;
  const ctx = React.useContext(TaskContext);
  const {
    isModalOpen,
    setIsModalOpen,
    deleteTask,
    textModalValue,
    modalAction,
  } = ctx as AppContext;

  const handleModalClose = () => {
    if (setIsModalOpen && isModalOpen) {
      setIsModalOpen(false);
    }
  };

  const handleConfirmAction = (action: 'delete' | 'continue' | undefined) => {
    if (textModalValue && action === 'delete') {
      deleteTask && deleteTask(textModalValue);
      setIsModalOpen && setIsModalOpen(false);
    } else if (action === 'continue') {
      setIsModalOpen && setIsModalOpen(false);
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.Modal__background}>
      <div className={styles.Modal__container}>
        <div className={styles.Modal__textContainer}>
          <h3>{modalAction === 'delete' ? 'Confirm delete' : 'Try Again'}</h3>
          <div className={styles.Modal__textContainer__p}>
            {modalAction === 'delete' ? (
              <React.Fragment>
                Are you sure you want to delete:{' '}
                <strong>{props.children}</strong>
              </React.Fragment>
            ) : (
              'The task you are trying to add is too short, please add a description with 4 characters or more'
            )}
          </div>
        </div>
        <div className={styles.Modal__btnContainer}>
          {modalAction === 'delete' && (
            <button
              className={`${styles.Modal__btn} ${styles.Modal__btnGray}`}
              onClick={handleModalClose}
            >
              Cancel
            </button>
          )}
          <button
            className={
              modalAction === 'delete'
                ? `${styles.Modal__btn} ${styles.Modal__btnAlert}`
                : modalAction === 'continue'
                ? `${styles.Modal__btn}`
                : `${styles.Modal__btnGray}`
            }
            onClick={() => handleConfirmAction(modalAction)}
          >
            {modalAction === 'delete'
              ? 'Delete'
              : modalAction === 'continue'
              ? 'Continue'
              : null}
          </button>
        </div>
      </div>
    </div>,
    modal
  );
}

export { Modal };
