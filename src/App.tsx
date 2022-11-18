import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoList } from './components/CreateTodoList';
import { List } from './models/List.model';
import './App.css';

const todos: List[] = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro de react', completed: false },
  { text: 'Llorar con la llorona', completed: false },
];

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="App">
      <h1 className="App__title">Your Tasks</h1>
      <TodoCounter />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList todos={todos} />
      <CreateTodoList />
    </div>
  );
}

export default App;
