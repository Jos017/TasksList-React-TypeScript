import styles from './styles.module.css';

export const CreateTaskListBtn = () => {
  return (
    <div className={styles.CreateTask}>
      <button className={styles.btn}>
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
