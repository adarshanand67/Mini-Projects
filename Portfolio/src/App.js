import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import ProgressBar from "react-scroll-progress-bar"; //Add this line

function App() {
  return (
    <div>
      {/* <ProgressBar height="10" " duration="0.2" /> */}
      <ProgressBar
        bgcolor="#55198B"
        duration="0.2"
        // height="15"
      />

      <Main />
    </div>
  );
}

export default App;
