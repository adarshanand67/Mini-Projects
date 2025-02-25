import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  // saving all the states
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Author 1");

  // saving the history object to use it later
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page from refreshing
    // send data to server
    fetch("http://localhost:3001/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body, author }),
    })
      .then((response) => response.json())
      .then(
        history.push("/") // redirect to home page
      );
  };
  return (
    <div className="create">
      <h2>Create a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Body:</label>
        <textarea
          name="body"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <label>Author:</label>
        <select
          name="author"
          id=""
          value={{ author }}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="">Select author</option>
          <option value="Author 1">Author 1</option>
          <option value="Author 2">Author 2</option>
        </select>

        <button>Create form</button>

        {/* Testing states */}
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
