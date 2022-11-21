import React from 'react';
import { Props } from '../../models/Props.model';
import styles from './styles.module.css';

interface SearchProps extends Props {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export const TaskSearch = (props: SearchProps) => {
  const { searchValue, setSearchValue } = props;

  const onSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
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
