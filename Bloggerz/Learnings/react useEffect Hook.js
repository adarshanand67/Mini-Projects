import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Blog 1",
      body: "This is the body of blog 1",
      author: "Adarsh",
      id: 1,
    },
    {
      title: "Blog 2",
      body: "This is the body of blog 2",
      author: "Anand",
      id: 2,
    },
    {
      title: "Blog 3",
      body: "This is the body of blog 3",
      author: "Adarsh",
      id: 3,
    },
  ]); // use blogs from database instead

  const [name, setName] = useState("Adarsh");

  const handleDelete = (id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog); // updating the state of Blog
  };

  useEffect(() => {
    console.log("Use useEffect run");
  }); // This function runs for every DOM render

  useEffect(() => {
    console.log("Use useEffect run");
  }, []); // This function runs once

  useEffect(() => {
    console.log("Use useEffect run", name);
  }, [name]); // This function runs when name changes

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
      <button onClick={() => setName("Anand")}>Change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
