export default function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-3">
      <input
        className="form-control form-control-lg shadow-sm"
        type="text"
        placeholder="Search projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}