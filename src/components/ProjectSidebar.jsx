import Button from "./Button";
function ProjectSidebar({
  onStartAddProject,
  projects,
  currentProjectId,
  onSelectProject,
}) {
  return (
    <>
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md-w-72">
        <h2 className="mb-8 font-bold uppercase md-text-sl text-stone-200">
          Your Projects
        </h2>
        <div>
          <Button onClick={onStartAddProject}>+ Add Projects</Button>
        </div>
        <ul className="mt-8">
          {projects &&
            projects.map((project) => {
              const cssClasses =
                "w-full text-left px-2 py-1 rounded-sm my-1 tex-stone-400 hover:text-stone-200 hover:bg-stone-800";
              if (project.id === currentProjectId) {
                cssClasses += " bg-stone-800 text-stone-200";
              }
              return (
                <li key={project.id}>
                  <button
                    onClick={() => onSelectProject(project.id)}
                    className={cssClasses}
                  >
                    {project.title}
                  </button>
                </li>
              );
            })}
        </ul>
      </aside>
    </>
  );
}
export default ProjectSidebar;
