// change name using react useState
import { useState } from "react";

const Home = () => {
  const [Name, setName] = useState("Adarsh"); // Name is the state and setName is the function to change the state
  const [age, setAge] = useState(20);

  const changeName = () => {
    setName("Anand");
    setAge(56);
  };

  return (
    // jsx
    <div className="naming">
      <h1>{Name}</h1>
      <h1>{age}</h1>
      <button onClick={changeName}>Change name</button>
    </div>
  );
};

export default Home;
