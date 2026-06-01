
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

  function addProject(project) {
    setProjects([...projects, { ...project, id: Date.now() }]);
  }

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-4">
      {/* Header */}
      <Header />

      {/* Search */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* Layout */}
      <div className="row mt-4">
        {/* Form */}
        <div className="col-md-4">
          <ProjectForm addProject={addProject} />
        </div>

        {/* List */}
        <div className="col-md-8">
          <ProjectList projects={filteredProjects} />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;