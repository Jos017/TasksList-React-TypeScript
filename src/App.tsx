import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoList } from './components/CreateTodoList';
// import "./App.css";

interface List {
  text: string;
  completed: boolean;
}

const todos: List[] = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro de react', completed: false },
  { text: 'Llorar con la llorona', completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoList />
    </React.Fragment>
  );
}

export default App;
