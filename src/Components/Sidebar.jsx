import Button from "./Button.jsx";

export default function Sidebar({
  onStartAddProject,
  onSelectProject,
  projects,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-lg">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let styledClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-50 hover:bg-stone-800";
          if (selectedProjectId == project.id) {
            styledClasses += " bg-stone-800 text-stone-200";
          } else {
            styledClasses += " text-stone-400";
          }

          return (
            <li key={project.id}>
              <Button
                className={styledClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </Button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
