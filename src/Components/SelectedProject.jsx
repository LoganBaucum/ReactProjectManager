import Button from "./Button";
import Tasks from "./Tasks";

export default function SelectedProject({
  project,
  tasks,
  onDeleteProject,
  onAddTask,
  onDeleteTask,
  ...props
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const filteredTasks = tasks.filter((task) => task.projectId === project.id);

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600">{project.title}</h1>
          <Button onClick={onDeleteProject}>Delete</Button>
        </div>
        <p className="mb-4 text-stone-400">Date: {formattedDate} </p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks
        tasks={filteredTasks}
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
        selectedProjectId={project.id}
      />
    </div>
  );
}
