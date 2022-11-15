import React from 'react';

interface Props {
  children?: React.ReactNode;
  key?: number | string;
  text: string;
}

export const TodoItem = (props: Props) => {
  return (
    <li>
      <span>C</span>
      <p>{props.text}</p>
      <span>X</span>
    </li>
  );
};
