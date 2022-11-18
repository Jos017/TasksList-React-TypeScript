import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoList } from './components/CreateTodoList';
import { List } from './models/List.model';
import './App.css';

const defaultTodos: List[] = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro de react', completed: true },
  { text: 'Llorar con la llorona', completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  return (
    <div className="App">
      <h1 className="App__title">Your Tasks</h1>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList todos={todos} />
      <CreateTodoList />
    </div>
  );
}

export default App;
