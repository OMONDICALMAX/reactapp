export default function ProjectCard({
  project,
  deleteProject,
  editProject,
}) {
  return (
    <div className="col-md-6 mb-3">
      <div className="card shadow-sm border-0 h-100">
        <div className="card-body">
          <h5 className="card-title">
            {project.title}
          </h5>

          <p className="card-text text-muted">
            {project.description}
          </p>

          <span
            className={`badge ${
              project.status === "Completed"
                ? "bg-success"
                : "bg-warning text-dark"
            }`}
          >
            {project.status}
          </span>

          <div className="mt-3 d-flex gap-2">
            <button
              className="btn btn-sm btn-outline-primary"
              onClick={() => editProject(project.id)}
            >
              Edit
            </button>

            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => deleteProject(project.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}