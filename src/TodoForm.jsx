import { HiOutlinePlus } from "react-icons/hi";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

export const TodoForm = ({ userInput, setUserInput, todos, setTodos }) => {
  // Add todo
  console.log(todos);
  const newTodo = (e) => {
    e.preventDefault();

    if (userInput === "") {
      return toast.error("Veuillez rentrer une tache!");
    }

    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: userInput,
        isCompleted: false,
      },
    ]);

    setUserInput("");
  };
  return (
    <form className="todo-form">
      <input
        type="text"
        placeholder="Entrez votre tâche!"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button type="submit" onClick={newTodo}>
        <HiOutlinePlus />
      </button>
    </form>
  );
};
