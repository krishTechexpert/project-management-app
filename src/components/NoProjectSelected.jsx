import Button from "./Button";
import noProjectImage from "../assets/no-projects.png";
function NoProjectSelected({onStartAddProject}) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="an empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold  my-4 text-stone-500">
        No project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create New Project</Button>
      </p>
    </div>
  );
}
export default NoProjectSelected;
