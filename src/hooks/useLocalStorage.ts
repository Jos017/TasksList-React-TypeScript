import React from 'react';
import { List } from '../models/List.model';

export function useLocalStorage(
  itemName: string,
  initialValue: number | string | [] | {}
): [List[], (newItem: List[]) => void] {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem: List[];

  // Verify if there are created tasks in localStorage
  if (!localStorageItem) {
    localStorage.setItem('TasksApp_V1', JSON.stringify(initialValue));
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }
  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem: List[]) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };
  return [item, saveItem];
}
