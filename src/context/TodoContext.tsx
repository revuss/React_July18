import React, { createContext, useReducer, useContext, ReactNode } from "react";
import { todoReducer, State, Action } from "../reducers/todoReducer";

const initialState: State = {
  todos: [],
};

const TodoContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodoContext = () => useContext(TodoContext);

export { TodoProvider, useTodoContext };
