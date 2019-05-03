import React from "react";
import { Switch, Route } from "react-router-dom";
import ProjectDetails from "./components/Projects/Details";
import ProjectsList from "./components/Projects/List";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/projects/:id" component={ProjectDetails} />
        <Route path="/projects" component={ProjectsList} />
      </Switch>
    </div>
  );
}

export default App;
