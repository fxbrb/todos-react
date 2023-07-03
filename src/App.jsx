import { useState, useEffect } from "react";
import "./App.css";
import { FiSun, FiMoon } from "react-icons/fi";
import { UserName } from "./UserName.jsx";
import { Toaster } from "react-hot-toast";
import { TodoList } from "./TodoList.jsx";
import { TodoForm } from "./TodoForm.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [userName, setUserName] = useState(
    JSON.parse(localStorage.getItem("userName")) || null
  );
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    toggleDarkModeClass();
  }, [darkMode]);

  useEffect(() => {
    saveUser();
    saveTodos();
  });

  // darkMode
  const toggleDarkModeClass = () => {
    const page = document.querySelector("body");
    if (darkMode) {
      page.classList.add("dark");
    } else {
      page.classList.remove("dark");
    }
  };

  const darkModeHandler = () => {
    setDarkMode(!darkMode);
  };

  // localStorage

  const saveUser = () => {
    localStorage.setItem("userName", JSON.stringify(userName));
  };

  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <section className="main-section">
      <Toaster />
      <div className="switcher-wrapper">
        <FiSun strokeWidth={`${darkMode ? "0" : "3"}`} />
        <label className="switch">
          <input type="checkbox" onClick={darkModeHandler} />
          <span className="slider round"></span>
        </label>
        <FiMoon color={`${darkMode ? "white" : "rgba(0, 0, 0, 0.3)"}`} />
      </div>

      {userName ? (
        <div className="todo-app-wrapper">
          <h1>Bienvenue {userName}</h1>
          <TodoForm
            userInput={userInput}
            setUserInput={setUserInput}
            setTodos={setTodos}
            todos={todos}
          />
          {todos.length > 0 ? (
            <TodoList todos={todos} setTodos={setTodos} />
          ) : (
            "Aucune tâche pour le moment"
          )}
        </div>
      ) : (
        <UserName setUserName={setUserName} />
      )}
    </section>
  );
}

export default App;
