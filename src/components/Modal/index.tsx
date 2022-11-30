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
    setModalAction,
    addTask,
    deleteTask,
    textModalValue,
    modalAction,
  } = ctx as AppContext;

  const [input, setInput] = React.useState('');

  const handleModalClose = () => {
    if (setIsModalOpen && isModalOpen) {
      setIsModalOpen(false);
    }
  };

  const handleConfirmAction = (
    action: 'delete' | 'continue' | 'create' | undefined
  ) => {
    if (textModalValue && action === 'delete') {
      deleteTask && deleteTask(textModalValue);
      setIsModalOpen && setIsModalOpen(false);
    } else if (action === 'continue') {
      setIsModalOpen && setIsModalOpen(false);
    }
  };

  const handleCreateTask = () => {
    if (input.length >= 4) {
      addTask && addTask(input);
      setInput('');
      setIsModalOpen && setIsModalOpen(false);
    } else {
      setModalAction && setModalAction('continue');
      setIsModalOpen && setIsModalOpen(true);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleCreateTask();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return ReactDOM.createPortal(
    <div className={styles.Modal__background}>
      <form className={styles.Modal__container} onSubmit={handleSubmit}>
        <div className={styles.Modal__textContainer}>
          <h3>
            {modalAction === 'delete'
              ? 'Confirm delete'
              : modalAction === 'continue'
              ? 'Try Again'
              : 'Create Task'}
          </h3>
          <div className={styles.Modal__textContainer__p}>
            {modalAction === 'delete' ? (
              <React.Fragment>
                Are you sure you want to delete:{' '}
                <strong>{props.children}</strong>
              </React.Fragment>
            ) : modalAction === 'continue' ? (
              'The task you are trying to add is too short, please add a description with 4 characters or more'
            ) : (
              <React.Fragment>
                <p className={styles.Modal__text}>What do you want to do?</p>
                <input
                  className={styles.Modal__input}
                  value={input}
                  placeholder="Write your task here"
                  onChange={handleInputChange}
                />
              </React.Fragment>
            )}
          </div>
        </div>
        <div className={styles.Modal__btnContainer}>
          {modalAction === 'delete' && (
            <button
              className={`${styles.Modal__btn} ${styles.Modal__btnGray}`}
              onClick={handleModalClose}
              type="button"
            >
              Cancel
            </button>
          )}
          {modalAction === 'create' && (
            <button
              className={`${styles.Modal__btn} ${styles.Modal__btnGray}`}
              onClick={handleModalClose}
              type="button"
            >
              Cancel
            </button>
          )}
          {modalAction === 'create' ? (
            <button className={styles.Modal__btn} type="submit">
              Add
            </button>
          ) : (
            <button
              className={
                modalAction === 'delete'
                  ? `${styles.Modal__btn} ${styles.Modal__btnAlert}`
                  : modalAction === 'continue'
                  ? `${styles.Modal__btn}`
                  : `${styles.Modal__btnGray}`
              }
              type="button"
              onClick={() => handleConfirmAction(modalAction)}
            >
              {modalAction === 'delete'
                ? 'Delete'
                : modalAction === 'continue'
                ? 'Continue'
                : null}
            </button>
          )}
        </div>
      </form>
    </div>,
    modal
  );
}

export { Modal };
