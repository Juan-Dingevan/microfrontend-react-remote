import React from "react";
import ReactDOM from "react-dom";
import MiCompEconomia from "./MiCompEconomia";

import "./index.css";

const App = () => (
  <div className="container">
     <MiCompEconomia />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

  