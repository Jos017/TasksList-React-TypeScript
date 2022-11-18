import React, { useState } from 'react';
import { Props } from '../../models/Props.model';
import styles from './styles.module.css';

interface CheckProps extends Props {
  onComplete: (state: boolean) => void;
  completed: boolean;
}

export const CustomCheck = (props: CheckProps) => {
  const { onComplete, completed } = props;
  const [isChecked, setIsChecked] = useState(completed);

  return (
    <React.Fragment>
      <label className={styles.CustomCheck__control}>
        <input
          type="checkbox"
          name="checkbox"
          className={styles.CustomCheck__checkbox}
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          onClick={() => onComplete(!isChecked)}
        />
      </label>
    </React.Fragment>
  );
};
