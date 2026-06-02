import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Portfolio Website",
      description: "Personal portfolio using React",
      status: "Completed",
    },
  ]);

  const [search, setSearch] = useState("");

  // Add project
  function addProject(project) {
    setProjects([...projects, { ...project, id: Date.now() }]);
  }

  // Delete project
  function deleteProject(id) {
    setProjects(
      projects.filter((project) => project.id !== id)
    );
  }

  // Edit project
  function editProject(id) {
    const newTitle = prompt("Enter new project title:");

    if (!newTitle || newTitle.trim() === "") return;

    setProjects(
      projects.map((project) =>
        project.id === id
          ? { ...project, title: newTitle }
          : project
      )
    );
  }

  // Search filter
  const filteredProjects = projects.filter((project) =>
    project.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="container py-4">
      <Header />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="row mt-4">
        <div className="col-md-4 mb-4">
          <ProjectForm addProject={addProject} />
        </div>

        <div className="col-md-8">
          <ProjectList
            projects={filteredProjects}
            deleteProject={deleteProject}
            editProject={editProject}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;