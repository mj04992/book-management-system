import { useEffect, useState } from "react";

import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";

import {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
} from "./services/api";

function App() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const [search, setSearch] = useState("");
  const [genreFilter, setGenreFilter] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchBooks = async () => {
    try {
      setLoading(true);

      const response = await getBooks();

      setBooks(response.data);

      setLoading(false);
    } catch (err) {
      setError("Failed to fetch books");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const addOrUpdateBook = async (book) => {
    try {
      if (editingBook) {
        await updateBook(editingBook.id, book);
        setEditingBook(null);
      } else {
        await addBook(book);
      }

      fetchBooks();
    } catch (err) {
      setError("Operation failed");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBook(id);

      fetchBooks();
    } catch (err) {
      setError("Delete failed");
    }
  };

  const filteredBooks = books.filter((book) => {
    return (
      (book.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
        book.author
          .toLowerCase()
          .includes(search.toLowerCase())) &&
      (genreFilter === "" ||
        book.genre === genreFilter)
    );
  });

  return (
    <div
  style={{
    padding: "20px",
    maxWidth: "900px",
    margin: "auto",
    fontFamily: "Arial",
  }}
>
      <h1>Book Management System</h1>

      {error && <p>{error}</p>}

      <BookForm
        addOrUpdateBook={addOrUpdateBook}
        editingBook={editingBook}
      />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <Filter
        genreFilter={genreFilter}
        setGenreFilter={setGenreFilter}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <BookList
          books={filteredBooks}
          onDelete={handleDelete}
          onEdit={setEditingBook}
        />
      )}
    </div>
  );
}

export default App;