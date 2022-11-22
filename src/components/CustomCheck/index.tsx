import React, { useState } from 'react';
import { Props } from '../../models/Props.model';
import styles from './styles.module.css';

interface CheckProps extends Props {
  onComplete?: (text: string) => void;
  onPostpone?: (text: string) => void;
  completed: boolean;
  text: string;
}

export const CustomCheck = (props: CheckProps) => {
  const { onComplete, onPostpone, completed, text } = props;
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
          onClick={() =>
            completed
              ? onPostpone && onPostpone(text)
              : onComplete && onComplete(text)
          }
        />
      </label>
    </React.Fragment>
  );
};
