import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">React Clicky Game</h1>
          <p className="lead">Select a character to begin...</p>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron;
