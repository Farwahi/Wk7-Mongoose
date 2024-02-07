const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const connection = async () => {
  await mongoose.connect(
    "mongodb+srv://michael:b8y6ZekZY5HNPQEm@cluster0.ntmsxeg.mongodb.net/m54Week7"
  );
  console.log("DB connection is working");
};

connection();

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


app.get("/books", (request, response) => {});

app.get("/books/getfirstbook", (request, response) => {});

app.post("/books", (request, response) => {});

app.put("/books", (request, reponse) => {});

app.delete("/books", (request, response) => {});

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});