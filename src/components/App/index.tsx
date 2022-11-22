import React from 'react';
import { AppUI } from './AppUI';
import { TaskProvider } from '../../context/TaskContext';
// import { useLocalStorage } from '../../hooks/useLocalStorage';

function App() {
  return (
    <TaskProvider>
      <AppUI />
    </TaskProvider>
  );
}

export default App;
