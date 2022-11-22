import React from 'react';
import styles from './styles.module.css';
import { TaskContext } from '../../context/TaskContext';
import { AppContext } from '../../models/AppContext.model';

export const TaskSearch = () => {
  const ctx = React.useContext(TaskContext);
  const { searchValue, setSearchValue } = ctx as AppContext;

  const onSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue && setSearchValue(e.target.value);
  };

  return (
    <div className={styles.TaskSearch}>
      <input
        placeholder="Search Task"
        className={styles.TaskSearch__input}
        value={searchValue}
        onChange={onSearchValueChange}
      />
      <div className={styles.TaskSearch__icon}>
        <i className={`material-icons ${styles.TaskSearch__icon__search}`}>
          search
        </i>
      </div>
    </div>
  );
};
