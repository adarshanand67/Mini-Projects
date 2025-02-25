//* cycle through all the blogs and display them
import { Link } from "react-router-dom";

const BlogList = (props) => {
  const { blogs, title, id } = props;

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h1>{blog.title}</h1>
          <p>{blog.body} </p>

          <p> Written by - {blog.author}</p>
          <Link to={`/blog/${blog.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
