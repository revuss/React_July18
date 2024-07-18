import React, { useMemo } from "react";
import { useTodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const { state } = useTodoContext();

  const todos = useMemo(
    () => state.todos.map((todo) => <TodoItem key={todo.id} todo={todo} />),
    [state.todos]
  );

  return <div>{todos}</div>;
};

export default TodoList;
