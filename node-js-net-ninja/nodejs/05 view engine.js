const express = require("express");
const app = express();
// const ejsLint = require("ejs-lint");

const port = 3000;
app.listen(port);

// console.log(__dirname);
// console.log(__filename);

//* setting view engine
app.set("views", "nodejs/views"); // set views directory
app.set("view engine", "ejs");

// Fetch from database instead
const blogs = [
  { title: "Blog 1", body: "This is blog 1" },
  { title: "Blog 2", body: "This is blog 2" },
  { title: "Blog 3", body: "This is blog 3" },
];

app.get("/", (req, res) => {
  res.render("index", { title: "My Express App", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Page" });
});

//* default error code
app.use((req, res) => {
  res.status(404).render("404", { title: "404 Page" });
});
