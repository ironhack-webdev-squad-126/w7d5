import React from "react";
import AddProject from "./Add";
import axios from "axios";

class ProjectsList extends React.Component {
  state = {
    projects: []
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/projects").then(response => {
      this.setState({
        projects: response.data
      });
    });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.projects.map(project => {
            return <div>{project.title}</div>;
          })}
        </div>
        <div>
          <AddProject />
        </div>
      </div>
    );
  }
}

export default ProjectsList;
