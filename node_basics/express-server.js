const express = require("express");

const app = express();

//Home route

app.get("/", (req, res) => {
  res.send("<h2>Welcome to the Home page</h2>");
});
app.get("/about", (req, res) => {
  res.send("<h2>Welcome to the About page</h2>");
});
app.get("/contact", (req, res) => {
  res.send("<h2>Welcome to the Contact page</h2>");
});

app.listen("5001", () => {
  console.log("Server is listening on port 5001");
});
