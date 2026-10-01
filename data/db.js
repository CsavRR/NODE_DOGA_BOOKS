import Database from "better-sqlite3";

const db = new Database("./data/books.db");

export const getBooksByAuthor = (author) =>
  db.prepare("SELECT * FROM books WHERE author = ?").all(author);

export const getBooksByYear = (publishYear) =>
  db.prepare("SELECT * FROM books WHERE publishYear = ?").all(publishYear);

export const saveBook = (author, title, publishYear, copies) =>
  db
    .prepare(
      "INSERT INTO books (author, title, publishYear, copies) VALUES (?, ?, ?, ?)",
    )
    .run(author, title, publishYear, copies);

export const updateBook = (id, author, title, publishYear, copies) =>
  db
    .prepare(
      "UPDATE books SET author = ?, title = ?, publishYear = ?, copies = ? WHERE id = ?",
    )
    .run(author, title, publishYear, copies, id);

export const deleteBook = (id) => db.prepare("DELETE FROM books WHERE id = ?").run(id);

export const getBookById = (id) => db.prepare("SELECT * FROM books WHERE id = ?").get(id);