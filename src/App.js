import React from "react";
import Homepage from "./Page/Homepage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./Page/About";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
