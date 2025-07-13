// index.js
import express from "express";
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Route
app.get(
  "/",
  [
    (req, res, next) => {
      console.log("first middleware");
      next();
    },
    (req, res, next) => {
      console.log("second middleware");
      next;
    },
  ],
  (req, res) => {
    res.send("Hello from Home page!");
  }
);

// params
// request with http://localhost:3000/todo/(parameters_value)
// http://localhost:3000/todo/xyz?completed=true
app.get("/todo/:id", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send("Hello from todo page");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
