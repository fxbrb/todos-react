import { useState } from "react";
import { Todos } from "./Todos.jsx";

export const TodoList = ({ todos, setTodos }) => {
  return (
    <ul className="todo-list-items">
      {todos.map((todo) => {
        return (
          <Todos key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        );
      })}
    </ul>
  );
};
