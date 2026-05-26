function Filter({ genreFilter, setGenreFilter }) {
  return (
    <select
      value={genreFilter}
      onChange={(e) => setGenreFilter(e.target.value)}
      style={{
        marginLeft: "10px",
        padding: "10px",
      }}
    >
      <option value="">All Genres</option>
      <option value="Fiction">Fiction</option>
      <option value="Technical">Technical</option>
      <option value="History">History</option>
    </select>
  );
}

export default Filter;