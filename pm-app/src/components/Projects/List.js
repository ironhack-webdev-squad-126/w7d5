import React from "react";
import AddProject from "./Add";
import axios from "axios";
import { Link } from "react-router-dom";

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
        <div style={{ width: "60%", float: "left" }}>
          {this.state.projects.map(project => {
            return (
              <div key={project._id}>
                <Link to={`/projects/${project._id}`}>
                  <h3>{project.title}</h3>
                </Link>
              </div>
            );
          })}
        </div>
        <div style={{ width: "40%", float: "right" }}>
          <AddProject />
        </div>
      </div>
    );
  }
}

export default ProjectsList;
