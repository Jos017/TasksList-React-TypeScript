import React from 'react';
import styles from './styles.module.css';
import { CustomCheck } from '../CustomCheck';
import { ItemProps } from '../../models/ItemProps.model';
import { ItemColors } from '../../models/ItemColors.model';
import { ItemColor } from '../../models/ItemColor.model';
import { cardsColors } from '../../models/ItemColors.model';

export const TodoItem = (props: ItemProps) => {
  const getRandomColor = (): ItemColor => {
    const maxNumber = 3;
    const randNumber = Math.floor(Math.random() * (maxNumber + 1));
    console.log(randNumber);
    return cardsColors[randNumber as ItemColors];
  };

  // Set default value for card Color
  let cardColor = cardsColors[0];

  switch (props.itemColor) {
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
      <p className={styles.TodoItem__p}>{props.text}</p>
      <CustomCheck />
    </li>
  );
};