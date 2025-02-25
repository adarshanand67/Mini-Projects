const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

const app = express();
app.use(express.urlencoded({ extended: true })); // for POST requests
const port = 3000;

// mongo db connection
const dbURI =
  "mongodb+srv://adarsh:1WtQXrIoGf5QBPNW@cluster0.8d8eto9.mongodb.net/mongodb?retryWrites=true&w=majority"; // change username , password, dbname
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    console.log("MongoDB Connected");
    app.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });

// create a schema for our data
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "My Second Blog",
    snippet: "This is my first blog",
    body: "This is the body of my blog",
  });
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// get all blogs from database collection
app.get("/get-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// get a single blog from database collection
app.get("/get-blog/:id", (req, res) => {
  Blog.findById(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.set("views", "nodejs/views"); // set views directory
app.set("view engine", "ejs");

// 1. setting up type of logging
app.use(morgan("dev"));

// 2. setting up static files (express)
// console.log(__dirname + "/public");
app.use(express.static(__dirname + "/css")); // ! Important to avoid directory conflicts

// Fetch from database instead
const blogs = [
  { title: "Blog 1", body: "This is blog 1" },
  { title: "Blog 2", body: "This is blog 2" },
  { title: "Blog 3", body: "This is blog 3" },
];

app.get("/", (req, res) => {
  // res.render("index", { title: "My Express App", blogs });
  res.redirect("/blogs"); //redirect to blogs
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Page" });
});

app.get("/create", (req, res) => {
  res.render("create", { title: "Create blog" });
});

// 3. setting up dynamic routes
app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: 1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

// where is the result stored
app.post("/blogs", (req, res) => {
  const blog = new Blog(req.body);
  console.log(blog);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

//* default error code
app.use((req, res) => {
  res.status(404).render("404", { title: "404 Page" });
});

// Blog.find() , Blog.save() , app.post(), app.get()
