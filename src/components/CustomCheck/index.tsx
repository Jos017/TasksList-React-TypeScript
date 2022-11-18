import React, { useState } from 'react';
import { Props } from '../../models/Props.model';
import styles from './styles.module.css';

interface CheckProps extends Props {
  onComplete: (state: boolean) => void;
}

export const CustomCheck = (props: CheckProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <React.Fragment>
      <label className={styles.CustomCheck__control}>
        <input
          type="checkbox"
          name="checkbox"
          className={styles.CustomCheck__checkbox}
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          onClick={() => props.onComplete(!isChecked)}
        />
      </label>
    </React.Fragment>
  );
};
