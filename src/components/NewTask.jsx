import React, { useState } from "react";
function NewTask({ addTask }) {
  const [enteredTask, setEnteredTask] = useState("");
  function handleTaskInput(event) {
    setEnteredTask(event.target.value);
  }

  function handleSubmitTask() {
    if (enteredTask.trim() === "") {
      return;
    }
    addTask(enteredTask);
    setEnteredTask("");
  }

  return (
    <>
      <div className="flex my-3">
        <input
          type="text"
          className="p-1 border-b-2 bg-stone-200 mr-2 rounded-sm border-stone-300 text-stone-600 focus:outline-none focus:border-stone-600"
          placeholder="Enter task"
          onChange={handleTaskInput}
          value={enteredTask}
        />
        <button onClick={handleSubmitTask}>Add Task</button>
      </div>
    </>
  );
}
export default NewTask;
