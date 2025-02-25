import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // write jsx - JavaScript XML
    <div className="navbar">
      My Navbar
      <ul>
        <Link to="/">Home</Link>
        <Link to="/create">Create Blog</Link>
      </ul>
    </div>
  );
};

export default Navbar;
