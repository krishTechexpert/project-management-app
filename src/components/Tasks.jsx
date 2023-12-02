import Button from "./Button";
import NewTask from "./NewTask";

function Tasks({ addTask, taskList, deleteTask }) {
  return (
    <>
      <h3 className="text-stone-600 font-bold mb-2">My Tasks List</h3>
      <NewTask addTask={addTask} />
      {taskList.length === 0 && <p>There is no task</p>}
      {taskList.length > 0 && (
        <ul className="">
          {taskList.map((task) => {
            return (
              <li className="my-2" key={task.id}>
                {task.task}{" "}
                <button
                  onClick={() => deleteTask(task.id)}
                  className="bg-stone-300 bg-rounded-2 px-3 ml-2"
                >
                  Delete Tasks
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
export default Tasks;
