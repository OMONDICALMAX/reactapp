import ProjectCard from "./ProjectCard";

export default function ProjectList({ projects }) {
  return (
    <div className="row">
      {projects.length === 0 ? (
        <p className="text-muted">No projects found</p>
      ) : (
        projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))
      )}
    </div>
  );
}