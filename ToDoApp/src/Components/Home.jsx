import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { TodoProvider } from "../Contexts/TodoContext";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

function Home() {
  const [todos, setTodos] = useState([]);
  const [themeValue, setThemeValue] = useState("dark");

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const completeTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Getting todos from the local storage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) setTodos(todos);
  }, []);

  // Setting todos to the local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Theme value
  const lightTheme = () => {
    setThemeValue("light");
  };
  const darkTheme = () => {
    setThemeValue("dark");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeValue);
  }, [themeValue]);

  return (
    <TodoProvider
      value={{
        todos,
        addTodo,
        deleteTodo,
        completeTodo,
        updateTodo,
        lightTheme,
        darkTheme,
        themeValue,
      }}
    >
      <Navbar />
      <div className="w-full h-full py-10 px-4 md:px-56 flex flex-col items-center text-center fixed dark:bg-gray-900 dark:text-white">
        <div
          id="task-container"
          className="w-full mb-36 md:w-2/3 flex flex-col gap-y-2 overflow-y-auto scrollbar-hidden"
        >
          {/* Task container - where all the tasks would be */}
          {todos.map((todo) => (
            <div key={todo.id} className="w-full">
              <TodoItem todo={todo} />
            </div>
          ))}
        </div>
        <div className="absolute top-[80.4%] md:top-[73.4%] w-full md:w-2/3 px-10 py-10 bg-[rgba(255,255,255,0.734)] dark:bg-[rgba(17,24,39,0.98)] dark:text-white backdrop-blur-sm">
          <TodoForm />
        </div>
      </div>
    </TodoProvider>
  );
}

export default Home;
