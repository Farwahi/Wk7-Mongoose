const Book = require("./model");

const addBook = async (request, response) => {
  try {
    const book = await Book.create({
      title: request.body.title,
      author: request.body.author,
      genre: request.body.genre,
    });
    console.log("book:", book);
    response.send({ message: "Success! Book created", book: book });
  } catch (error) {
    console.error("Error adding book:", error);
    response.status(500).send({ message: "Error adding book", error });
  }
};

module.exports = {
  addBook: addBook,
};


//=========================================================================================================


const getAllBooks = async (request, response) => {
  try {
    const allBooks = await Book.find(); 
    response.send({ message: "Success! All books retrieved.", books: allBooks });
  } catch (error) {
    console.error("Error fetching books:", error);
    response.status(500).send({ message: "Error fetching books", error });
  }
};

module.exports = {
  getAllBooks: getAllBooks,
};

//=========================================================================================================


const getBookById = async (request, response) => {
  try {
    const bookId = request.params.id; 
    const book = await Book.findById(bookId); 
    if (!book) {
      return response.status(404).send({ message: "Book not found" });
    }
    response.send({ message: "Success! Book retrieved by ID.", book });
  } catch (error) {
    console.error("Error fetching book by ID:", error);
    response.status(500).send({ message: "Error fetching book by ID", error });
  }
};

module.exports = {
  getBookById: getBookById,
};

//=======================================================================================================


const updateBook = async (request, response) => {
  try {
    const bookId = request.params.id; 
    const updatedFields = {
      title: request.body.title,
      author: request.body.author,
      genre: request.body.genre,
    };
    const updatedBook = await Book.findByIdAndUpdate(bookId, updatedFields, {
      new: true, 
    });

    if (!updatedBook) {
      return response.status(404).send({ message: "Book not found" });
    }

    response.send({ message: "Success! Book updated.", book: updatedBook });
  } catch (error) {
    console.error("Error updating book:", error);
    response.status(500).send({ message: "Error updating book", error });
  }
};

module.exports = {
  updateBook: updateBook,
};

//=======================================================================================================


const deleteBook = async (request, response) => {
  try {
    const bookId = request.params.id;
    const deletedBook = await Book.findByIdAndDelete(bookId); 

    if (!deletedBook) {
      return response.status(404).send({ message: "Book not found" });
    }

    response.send({ message: "Success! Book deleted.", book: deletedBook });
  } catch (error) {
    console.error("Error deleting book:", error);
    response.status(500).send({ message: "Error deleting book", error });
  }
};

module.exports = {
  deleteBook: deleteBook,
};

//======================================================================================================

const findBookByTitle = async (request, response) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(request.params.id, request.body, { new: true });
        if (!updatedBook) {
            return response.status(404).json({ message: 'Book not found' });
        }
        response.json(updatedBook);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
};
module.exports = {
  findBookByTitle: findBookByTitle,
};