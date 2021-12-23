import React from "react";
import { Router } from "@reach/router";
import Home from "./components/Home";
import WordOrNum from "./components/WordOrNum";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <WordOrNum path="/:val" />
        <WordOrNum path="/:val/:textColor/:backgroundColor" />
      </Router>
    </div>
  );
}
export default App;
