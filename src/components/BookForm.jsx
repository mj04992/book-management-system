import { useState, useEffect } from "react";

function BookForm({ addOrUpdateBook, editingBook }) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
  });

  useEffect(() => {
    if (editingBook) {
      setBook(editingBook);
    }
  }, [editingBook]);

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addOrUpdateBook(book);

    setBook({
      title: "",
      author: "",
      genre: "",
      year: "",
    });
  };

  return (
  <form
    onSubmit={handleSubmit}
    style={{
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
      marginBottom: "20px",
    }}
  >
    <input
      type="text"
      name="title"
      placeholder="Book Title"
      value={book.title}
      onChange={handleChange}
      required
      style={{ padding: "10px" }}
    />

    <input
      type="text"
      name="author"
      placeholder="Author"
      value={book.author}
      onChange={handleChange}
      required
      style={{ padding: "10px" }}
    />

    <input
      type="text"
      name="genre"
      placeholder="Genre"
      value={book.genre}
      onChange={handleChange}
      required
      style={{ padding: "10px" }}
    />

    <input
      type="number"
      name="year"
      placeholder="Year"
      value={book.year}
      onChange={handleChange}
      required
      style={{ padding: "10px" }}
    />

    <button
      type="submit"
      style={{
        padding: "10px 20px",
        cursor: "pointer",
      }}
    >
      {editingBook ? "Update Book" : "Add Book"}
    </button>
  </form>
);
}

export default BookForm;