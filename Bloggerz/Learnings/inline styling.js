const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a
            href="/contact"
            style={{
              color: "red",
              textDecoration: "underline",
              fontWeight: "bold",
              border: "1px solid black",
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
