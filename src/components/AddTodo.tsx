import React, { useState, useCallback } from "react";
import { useTodoContext } from "../context/TodoContext";

const AddTodo: React.FC = () => {
  const [text, setText] = useState("");
  const { dispatch } = useTodoContext();

  const handleAddTodo = useCallback(() => {
    if (text.trim()) {
      dispatch({ type: "ADD_TODO", payload: text });
      setText("");
    }
  }, [text, dispatch]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
