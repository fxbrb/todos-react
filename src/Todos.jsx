import { BiEdit, BiTrash } from "react-icons/bi";
import toast from "react-hot-toast";

export const Todos = ({ todo, todos, setTodos }) => {
  const checkedTasks = () => {
    setTodos(
      todos.map((i) => {
        if (i.id === todo.id) {
          return {
            ...i,
            isCompleted: !i.isCompleted,
          };
        }
        return i;
      })
    );
  };

  const deleteTask = () => {
    toast
      .promise(
        new Promise((resolve, reject) => {
          const confirmed = window.confirm(
            "Êtes-vous sûr de vouloir supprimer cette tâche ?"
          );

          if (confirmed) {
            resolve();
          } else {
            reject();
          }
        }),
        {
          success: "Tâche supprimée avec succès",
          error: "La suppression a échoué",
        }
      )
      .then(() => {
        setTodos(todos.filter((el) => el.id !== todo.id));
      })
      .catch(() => {});
  };

  return (
    <li>
      <div>
        <input
          type="checkbox"
          onChange={checkedTasks}
          checked={todo.isCompleted}
        />
        <label>{todo.task}</label>
      </div>
      <button>
        <BiTrash onClick={deleteTask} />
      </button>
    </li>
  );
};
