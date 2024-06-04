import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";

function App() {
  const [projects, setProjects] = useState([
    {
      title: "Project 1",
      description: "placeholder text",
      dueDate: "2024-04-06",
      tasks: ["Task 1", "Task 2", "Task 3"],
    },
    {
      title: "Project 2",
      description: "some more text thats placeholder",
      dueDate: "2024-04-26",
      tasks: ["Task 1", "Task 2"],
    },
  ]);

  const [projectsState, SetProjectsState] = useState({
    // undefined=Nothing selected, null=Creating new, 0-999=Project selected.
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    SetProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  }
  if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
