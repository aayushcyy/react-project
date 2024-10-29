import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todoTitle: "my todo",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  deleteTodo: (id, todo) => {},
  updateTodo: (id) => {},
  completeTodo: (id) => {},
  themeValue: "dark",
  lightTheme: () => {},
  darkTheme: () => {},
});

export const TodoProvider = TodoContext.Provider;

export function useTodo() {
  return useContext(TodoContext);
}
