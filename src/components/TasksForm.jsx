import { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

function TasksForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
      <div className="max-w-md mx-auto">
        <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
        <input className="bg-neutral-700 "
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea placeholder="Descripcion de la terea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}>
          </textarea>
        <button className="b1">Guardar</button>
      </form>
      </div>
  );
}

export default TasksForm;
