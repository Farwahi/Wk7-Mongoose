const { Router } = require("express");
const bookRouter = Router();


const { addBook, getAllBooks,getBookById,updateBook,deleteBook,} = require("./controllers");


bookRouter.post("/books/addBook", addBook);
bookRouter.get("/books/getAllBooks", getAllBooks);
bookRouter.get("/books/getBookById", getBookById);
bookRouter.put("/books/updatebook", updateBook);
bookRouter.delete("/books/deletebook", deleteBook);

module.exports = bookRouter