const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");
const {
  addBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
  findBookByTitle,
} = require("./controllers");

// Define routes
bookRouter.post("/books/addBook", addBook);
bookRouter.get("/books/getAllBooks", getAllBooks);
bookRouter.get("/books/getBookById", getBookById);
bookRouter.put("/books/updateBook", updateBook); 
bookRouter.delete("/books/deleteBook", deleteBook);
bookRouter.put("/books/findBookByTitle", findBookByTitle);

module.exports = bookRouter;
