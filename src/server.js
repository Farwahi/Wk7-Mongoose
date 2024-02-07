const express = require("express");

const app = express();

// HTTP Verbs - GET ,POST,PUT,DELETE

// const response = await fetch("http://someaddress.com") //sends GET request

// HTTP Verb GET
app.get("/example", (request, response) => {
    response.send("Hello Farwa");
});

const fakeArr = [];

app.use(express.json());

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
app.get("/books",(request, response) =>{
    console.log("title:", request.body.title);
    console.log("genre:", request.body.genre);
    console.log("author:", request.body.author);
    
    fakeArr.push(request.body);
    let awesome;
  for (let i = 0; i < fakeArr.length; i++) {
    if (fakeArr[i].title === request.body.title) {
      awesome = "it's awsome";
    }
  }
  console.log(awesome);
  response.send({ message: "success", newBook: fakeArr[fakeArr.length - 1] });
});

// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
app.post("/books",(request, response) =>{
    console.log("title:", request.body.title);
    console.log("genre:", request.body.genre);
    console.log("author:", request.body.author);
    
    fakeArr.push(request.body);
    let awesome="awesome";
  for (let i = 0; i < fakeArr.length; i++) {
    if (fakeArr[i].title === request.body.title) {
      awesome = "it's awsome";
    }
  }
  console.log(awesome);
  response.send({ message: "success", newBook: fakeArr[fakeArr.length - 1] });
});
   

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
app.delete("/books", (request, response) => {
  const { title, author } = request.body;

  // Find the book to delete based on title or author
  const bookToDelete = fakeArr.find(
    (book) =>
      book.title === title || book.author === author
  );

  if (!bookToDelete) {
    return response.status(404).json({ message: "Book not found" });
  }

  // Remove the book from the array
  const indexToDelete = fakeArr.indexOf(bookToDelete);
  fakeArr.splice(indexToDelete, 1);

  return response.status(200).json({ message: "Book deleted successfully" });
});

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------


app.put("/books", (request, response) => {
  const { title, author, genre } = request.body;

  // Find the book to update based on title
  const bookToUpdate = fakeArr.find((book) => book.title === title);

  if (!bookToUpdate) {
    return response.status(404).json({ message: "Book not found" });
  }

  // Update the book properties
  bookToUpdate.author = author || bookToUpdate.author; // Update author if provided
  bookToUpdate.genre = genre || bookToUpdate.genre; // Update genre if provided

  return response.status(200).json({ message: "Book updated successfully", updatedBook: bookToUpdate });
});

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

app.listen(5001, () =>{
    console.log("Server is listening on port 5001");
});

