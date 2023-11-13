import React, { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";
function App() {
  const [projectState, setProjectState] = useState({
    projectSelectedId: undefined, // there is no project
    projects: [],
  });
  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectSelectedId: null, // add new Project
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectSelectedId: undefined,
      };
    });
  }

  function handleSelectproject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectSelectedId: id,
      };
    });
  }

  function handleAddProject(newProject) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectSelectedId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  let selctedProject = projectState.projects.find(
    (project) => project.id === projectState.projectSelectedId,
  );

  let content = <SelectedProject project={selctedProject} />;
  if (projectState.projectSelectedId === null) {
    // Add new project
    content = (
      <NewProject
        handleAddProject={handleAddProject}
        handleCancelAddProject={handleCancelAddProject}
      />
    );
  } else if (projectState.projectSelectedId === undefined) {
    // create project first time
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen flex gap-8">
      <ProjectSidebar
        projects={projectState.projects}
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectproject}
      />
      {content}
    </main>
  );
}

export default App;
