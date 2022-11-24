import React from 'react';
import styles from './styles.module.css';
import { CustomCheck } from '../CustomCheck';
import { Props } from '../../models/Props.model';
import { ItemColors } from '../../models/ItemColors.model';
import { ItemColor } from '../../models/ItemColor.model';
import { cardsColors } from '../../models/ItemColors.model';
import { TaskContext } from '../../context/TaskContext';
import { AppContext } from '../../models/AppContext.model';

interface ItemProps extends Props {
  itemColor?: 'random' | ItemColors;
  text: string;
  completed: boolean;
}

export const TaskItem = (props: ItemProps) => {
  const { itemColor, text, completed } = props;
  const ctx = React.useContext(TaskContext);
  const {
    completeTask,
    postponeTask,
    setIsModalOpen,
    setTextModalValue,
    setModalAction,
  } = ctx as AppContext;

  const handleModalOpen = (text: string) => {
    setModalAction && setModalAction('delete');
    setIsModalOpen && setIsModalOpen(true);
    setTextModalValue && setTextModalValue(text);
  };

  const getRandomColor = (): ItemColor => {
    const maxNumber = 3;
    const randNumber = Math.floor(Math.random() * (maxNumber + 1));
    return cardsColors[randNumber as ItemColors];
  };

  // Set default value for card Color
  let cardColor = cardsColors[0];

  switch (itemColor) {
    case 'random':
      cardColor = getRandomColor();
      break;
    case 0:
      cardColor = cardsColors[0];
      break;
    case 1:
      cardColor = cardsColors[1];
      break;
    case 2:
      cardColor = cardsColors[2];
      break;
    case 3:
      cardColor = cardsColors[3];
      break;
  }

  return (
    <li
      className={styles.TaskItem}
      style={{
        background: cardColor.gradient,
        borderLeft: cardColor.border,
      }}
    >
      <div
        className={styles.TaskItem__delete}
        onClick={() => handleModalOpen(text)}
      >
        <i className={`material-icons ${styles.TaskItem__icon__delete}`}>
          delete
        </i>
      </div>
      <div className={styles.TaskItem__p}>
        <p
          className={
            completed
              ? styles.TaskItem__p__complete
              : styles.TaskItem__p__pending
          }
        >
          {text}
        </p>
      </div>
      <CustomCheck
        onComplete={completeTask}
        onPostpone={postponeTask}
        completed={completed}
        text={text}
      />
    </li>
  );
};
