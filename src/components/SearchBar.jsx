function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by title or author"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        width: "300px",
        padding: "10px",
        marginTop: "20px",
      }}
    />
  );
}

export default SearchBar;