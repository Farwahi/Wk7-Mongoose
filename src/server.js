require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose")

const connection = require("./db/connection.js");

const bookRouter = require("./books/routes.js");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

connection();

app.use(bookRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
