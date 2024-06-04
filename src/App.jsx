import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";

const tempProjects = [
  {
    id: 0,
    title: "Project 1",
    description: "placeholder text",
    dueDate: "2024-07-06",
    tasks: ["Task 1", "Task 2", "Task 3"],
  },
  {
    id: 1,
    title: "Project 2",
    description: "some more text thats placeholder",
    dueDate: "2024-06-26",
    tasks: ["Task 1", "Task 2"],
  },
];

function App() {
  const [projectsState, SetProjectsState] = useState({
    // undefined=Nothing selected, null=Creating new, 0-999=Project selected.
    selectedProjectId: undefined,
    projects: tempProjects,
  });

  function handleStartAddProject() {
    SetProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    SetProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    SetProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onAddProject={handleAddProject}
        onCancel={handleCancelAddProject}
      />
    );
  }
  if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
