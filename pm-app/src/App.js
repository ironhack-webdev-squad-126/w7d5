import React from "react";
import AddProject from "./components/Projects/Add";
import ProjectsList from "./components/Projects/List";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AddProject />
      <ProjectsList />
    </div>
  );
}

export default App;
