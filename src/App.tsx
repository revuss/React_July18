import React from "react";
import { TodoProvider } from "./context/TodoContext";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <TodoProvider>
      <div>
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
