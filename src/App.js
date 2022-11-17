import React from "react";

import Header from "./components/Header";
import InputUnit from "./components/InputUnit";
import Dropdown from "./components/Dropdown";
import Button from "./components/Button";
import Result from "./components/Result";

function App() {
  return (
    <div className="App">
      <Header title={"Convert Values"} />

      <div className="ui middle aligned grid container">
        <div className="row">
          <div className="eight wide column">
            <InputUnit />
          </div>
          <div className="one centered wide column">
            <p className="ui sub header">To:</p>
          </div>
          <div className="seven wide column">
            <Dropdown />
          </div>
        </div>
        <div className="row">
          <div className="ui center aligned container ">
            <Button cta="Convert" icon="exchange" />
          </div>
        </div>
        <div className="row">
          <Result />
        </div>
      </div>
    </div>
  );
}

export default App;
