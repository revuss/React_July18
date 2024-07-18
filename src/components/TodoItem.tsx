import React, { useCallback } from "react";
import { Todo } from "../reducers/todoReducer";
import { useTodoContext } from "../context/TodoContext";

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  const { dispatch } = useTodoContext();

  const toggleTodo = useCallback(() => {
    dispatch({ type: "TOGGLE_TODO", payload: todo.id });
  }, [dispatch, todo.id]);

  const removeTodo = useCallback(() => {
    dispatch({ type: "REMOVE_TODO", payload: todo.id });
  }, [dispatch, todo.id]);

  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange={toggleTodo} />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button onClick={removeTodo}>Delete</button>
    </div>
  );
};

export default TodoItem;
