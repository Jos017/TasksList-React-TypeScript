import React from 'react';

interface Props {
  children?: React.ReactNode;
  key?: number | string;
}

export const TodoList = (props: Props) => {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
};
