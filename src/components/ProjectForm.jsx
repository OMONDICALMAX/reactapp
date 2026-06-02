import { useState } from "react";

export default function ProjectForm({ addProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) return;

    addProject({
      id: Date.now(),
      title,
      description,
      status,
    });

    setTitle("");
    setDescription("");
    setStatus("Pending");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card shadow-sm p-3"
    >
      <h5 className="mb-3">Add Project</h5>

      <input
        className="form-control mb-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="form-control mb-2"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        className="form-select mb-3"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Pending</option>
        <option>Completed</option>
      </select>

      <button
        type="submit"
        className="btn btn-secondary w-100"
      >
        Add Project
      </button>
    </form>
  );
}