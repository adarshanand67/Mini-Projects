// Props - passing data from one component to another
// Reusable component
const BlogList = (props) => {
  // const blogs = props.blogs; // getting blogs from props
  // const title = props.title; // getting title from props
  // destructuring props
  const { blogs, title } = props;
  console.log(blogs);
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.body} </p>
          <p> Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;