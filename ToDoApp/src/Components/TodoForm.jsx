import React, { useState } from "react";
import { useTodo } from "../Contexts/TodoContext";

function TodoForm() {
  // State for individual todo
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo: todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex w-full">
      <input
        type="text"
        placeholder="Write Todo..."
        className="flex-grow h-12 border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-black text-white text-xl py-1.5 dark:bg-white dark:text-black dark:border-gray-700"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-5 py-1 text-xl bg-blue-700 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
