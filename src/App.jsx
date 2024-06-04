import { useState } from "react";
import Sidebar from "./Components/Sidebar";

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

  const [selectedProject, SetSelectedProject] = useState();

  return (
    <main className="h-screen my-8">
      <Sidebar />
    </main>
  );
}

export default App;
