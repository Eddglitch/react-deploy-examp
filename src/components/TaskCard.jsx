import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

function TaskCard({ task }) {

  const {deleteTask} = useContext(TaskContext)

  return (
    <div className= "bg-gray-800 text-center text-red-500 p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <h2 className="text-gray-500 text-sm">{task.description}</h2>
      <button className="bg bg-green-500 px-2 py-1 rounded-md mt-4 hover:bg-red-300"  onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TaskCard;
