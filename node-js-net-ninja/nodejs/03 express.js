const express = require("express");
const app = express();
console.log(__dirname);

const port = 3000;
app.listen(port);
rootFile = __dirname;

app.get("/", (req, res) => {
  res.sendFile("./html/index.html", { root: rootFile });
});

app.get("/about", (req, res) => {
  res.sendFile("./html/about.html", { root: rootFile });
});

app.get("/contact", (req, res) => {
  res.sendFile("./html/contact.html", { root: rootFile });
});

//* redirecting websites
app.get("/about-us", (req, res) => {
  res.sendFile("./html/about.html", { root: rootFile });
});

//* default error code
app.use((req, res) => {
  res.status(404).sendFile("./html/404.html", { root: rootFile });
});
