import React from 'react';
import styles from './styles.module.css';
import { CustomCheck } from '../CustomCheck';
import { Props } from '../../models/Props.model';
import { ItemColors } from '../../models/ItemColors.model';
import { ItemColor } from '../../models/ItemColor.model';
import { cardsColors } from '../../models/ItemColors.model';

interface ItemProps extends Props {
  itemColor?: 'random' | ItemColors;
  text: string;
  completed: boolean;
  completeTodos: (text: string) => void;
  postponeTodos: (text: string) => void;
  deleteTodos: (text: string) => void;
}

export const TodoItem = (props: ItemProps) => {
  const {
    itemColor,
    text,
    completed,
    completeTodos,
    postponeTodos,
    deleteTodos,
  } = props;

  const getRandomColor = (): ItemColor => {
    const maxNumber = 3;
    const randNumber = Math.floor(Math.random() * (maxNumber + 1));
    console.log(randNumber);
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
      className={styles.TodoItem}
      style={{
        background: cardColor.gradient,
        borderLeft: cardColor.border,
      }}
    >
      <div
        className={styles.TodoItem__delete}
        onClick={() => deleteTodos(text)}
      >
        <i className={`material-icons ${styles.TodoItem__icon__delete}`}>
          delete
        </i>
      </div>
      <div className={styles.TodoItem__p}>
        <p
          className={
            completed
              ? styles.TodoItem__p__complete
              : styles.TodoItem__p__pending
          }
        >
          {text}
        </p>
      </div>
      <CustomCheck
        onComplete={completeTodos}
        onPostpone={postponeTodos}
        completed={completed}
        text={text}
      />
    </li>
  );
};
