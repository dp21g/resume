import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const avatarStyle = {
  borderRadius: "50%",
  width: "220px",
  height: "200px",
  boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
};

const lineUpStyle = {
  display: "inline-block",
  textAlign: "center"
};

function App() {
  return (
    <div className="App">
      <h1>This si the CV</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
