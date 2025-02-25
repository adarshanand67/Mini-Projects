import { useParams } from "react-router-dom";
import fetch from "node-fetch";
import { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
const BlogDetails = () => {
  // saving the history object to use it later
  const history = useHistory();
  const { id } = useParams();
  // console.log(id);
  const [blog, setBlog] = useState(null);
  // fetch blog
  const url = `http://localhost:3001/blogs/${id}`;

  const handleDelete = (e) => {
    fetch(url, { method: "DELETE" })
      .then((response) => response.json())
      .then(() => history.push("/"));
  };

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      // console.log(json);
      // title, body, author
      setBlog(json);
    });
  // end fetch blog
  return (
    <div className="blog-details">
      {blog && (
        <div className="blog-preview">
          <h1>{blog.title}</h1>
          <p>{blog.body}</p>
          <p> Written by - {blog.author}</p>
          {/* deleting */}
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
