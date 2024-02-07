const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const connection = async () => {
  await mongoose.connect(
    "mongodb+srv://syeda:46S3fcJIgR626mZV@cluster0.afinqzj.mongodb.net/m54booksweek7"
  );
  console.log("DB connection is working");
};

connection();
// mongoose docs: https://mongoosejs.com/docs/guide.html

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
  },
  genre: {
    type: String,
  },
});

const Book = mongoose.model("Book", bookSchema);
const logTypeOfResult = async (result) => {
  console.log(`Typeof result: ${typeof result} - result: ${result}`);
};

app.get("/books", (request, response) => {});

app.get("/books/getfirstbook", (request, response) => {});

app.post("/books",async(request, response) => {
  const book = await Book.create({
  title: request.body.title,
  author: request.body.author,
  genre: request.body.genre,
});
console.log("book:", book);
response.send({message:"success book created", book: book});
});



app.put("/books", (request, reponse) => {});

app.delete("/books", (request, response) => {});

// https://mongoosejs.com/docs/models.html (look at constructing documents)
// Add a single book to the db
app.post("/books", (request, response) => {
  // Add a single book to the db
});

// https://mongoosejs.com/docs/api/model.html#Model.find()
app.get("/getAllbooks", async (request, response) => {
  // get all books from the db
  const books = await Book.find({});
  response.send({ message: "success all the books", books:books});
});

// https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()
//              Or !!!!!!!!!!!!!!!!!!!!!
// https://mongoosejs.com/docs/api/model.html#Model.updateOne()
app.put("/books", (request, reponse) => {
  // update a single book's author by title
});

// https://mongoosejs.com/docs/guide.html - you'll have to look at the docs and figure this one out!
app.delete("/books", (request, response) => {});
app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});