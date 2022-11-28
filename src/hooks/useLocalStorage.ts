import React from 'react';
import { List } from '../models/List.model';

export function useLocalStorage(itemName: string, initialValue: List[]) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem: List[];

        // Verify if there are created tasks in localStorage
        if (!localStorageItem) {
          localStorage.setItem('TasksApp_V1', JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (err) {
        setError(true);
      }
    }, 1500);
  }, [initialValue, itemName]);

  const saveItem = (newItem: List[]) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}
