import express from "express";
import * as actions from "./actions/books.js";

const PORT = 3000;
const app = express();

app.use(express.json());

// First, structure your middleware so that it uses console.log to output "Request received!" each time your server receives a request.

app.use(function (req, res, next) {
  console.log("got body", req.body);
  // res.json({message: "Request received!"});
  if ("POST") {
    res.json({ timestamp: Date(), ...req.body });
  }
  if ("PATCH") {
    res.json({ timestamp: Date(), ...req.body });
  }
  next();
});
// Run your server and test this to make sure that the console.log appears when a request comes in, and the request is still handled correctly.
// Once your middleware is working, refactor it so that it also logs the body of the request in the console.

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/books", actions.getAllBooks);

app.get("/books/:id", actions.getSingleBook);

app.post("/books", actions.createBook);

app.patch("/books/:id", actions.updateBook);

app.delete("/books/:id", actions.deleteBook);

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
