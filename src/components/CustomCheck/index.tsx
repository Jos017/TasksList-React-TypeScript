import React, { useState } from 'react';
import styles from './styles.module.css';

export const CustomCheck = () => {
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
        />
      </label>
    </React.Fragment>
  );
};
