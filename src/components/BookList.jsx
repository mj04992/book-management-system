function BookList({ books, onDelete, onEdit }) {
  return (
    <div>
      {books.map((book) => (
        <div
          key={book.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{book.title}</h3>

          <p>
            <strong>Author:</strong> {book.author}
          </p>

          <p>
            <strong>Genre:</strong> {book.genre}
          </p>

          <p>
            <strong>Year:</strong> {book.year}
          </p>

          <button onClick={() => onEdit(book)}>
            Edit
          </button>

          <button
            onClick={() => onDelete(book.id)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default BookList;