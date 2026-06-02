import ProjectCard from "./ProjectCard";

export default function ProjectList({
  projects,
  deleteProject,
  editProject,
}) {
  return (
    <div className="row">
      {projects.length === 0 ? (
        <p className="text-muted">No projects found</p>
      ) : (
        projects.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            deleteProject={deleteProject}
            editProject={editProject}
          />
        ))
      )}
    </div>
  );
}