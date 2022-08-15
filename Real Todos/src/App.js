import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./Pages/Navbar";
import NoteState from "./Context/NoteState";

function App() {
  return (
    <div>
      <NoteState>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
