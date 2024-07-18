/* eslint-disable no-case-declarations */
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type State = {
  todos: Todo[];
};

type Action =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "REMOVE_TODO"; payload: number };

const todoReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      return { ...state, todos: [...state.todos, newTodo] };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export { todoReducer };
export type { Todo, State, Action };
