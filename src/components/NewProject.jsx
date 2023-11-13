import React, { useRef } from "react";
import Model from "./Model";
import Input from "./Input";
function NewProject({ handleAddProject, handleCancelAddProject }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const model = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // ...validation

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      model.current.open();
      return;
    }

    const newProject = {
      id: Math.random(),
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    };
    handleAddProject(newProject);
  }

  return (
    <>
      <Model ref={model} buttonCaption="close">
        <h2 className="text-xl font-bold my-4 text-stone-700">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops... looks like you forgot to enter a value.
        </p>
      </Model>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={() => handleCancelAddProject()}
              className="text-stone-400 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" label="Title" ref={title} />
          <Input label="Description" ref={description} textarea />
          <Input type="date" label="Due Date" ref={dueDate} />
        </div>
      </div>
    </>
  );
}
export default NewProject;
