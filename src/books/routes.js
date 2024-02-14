const { Router } = require("express");
const bookRouter = Router();


const Book = require("./model");
const { addBook, getAllBooks,getBookById,updateBook,deleteBook,findBookByTitle} = require("./controllers");


bookRouter.post("/books/addBook",addBook);
bookRouter.get("/books/getAllBooks", getAllBooks);
bookRouter.get("/books/getBookById", getBookById);
bookRouter.put("/books/updatebook", updateBook);
bookRouter.delete("/books/deleteBook", deleteBook);
bookRouter.put("/books/findBookByTitle", findBookByTitle);

module.exports = bookRouter