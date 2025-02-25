const Home = () => {
  // creating click event
  const handleClick = (event) => {
    console.log("clicked", event);
    console.log("clicked", event.target);
  };

  const handleClickAgain = (name, event) => {
    console.log(`clicked by ${name}`);
    console.log(event);
  };
  const name = "john";

  return (
    // valid jsx code
    <button onClick={handleClick}>Click</button>
    <button onClick={(event) => {
      handleClickAgain(name, event); // wrap inside a anonymous function to use arguments
    } }>Click Again</button>
  );
};

export default Home;
