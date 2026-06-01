export default function ProjectForm({ addProject }) {
  return (
    <div className="card shadow-sm p-3">
      <h5 className="mb-3">Add Project</h5>

      <input className="form-control mb-2" placeholder="Title" />
      <textarea className="form-control mb-2" placeholder="Description" />

      <select className="form-select mb-3">
        <option>Pending</option>
        <option>Completed</option>
      </select>

      <button className="btn btn-secondary w-100">
        Add Project
      </button>
    </div>
  );
}