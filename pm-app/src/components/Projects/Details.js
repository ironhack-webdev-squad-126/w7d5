import React from "react";
import { Link } from "react-router-dom";
import EditProject from "./Edit";
import axios from "axios";

class ProjectDetails extends React.Component {
  state = {
    project: {}
  };

  getProject = () => {
    const id = this.props.match.params.id;

    axios.get(`http://localhost:5000/api/projects/${id}`).then(response => {
      this.setState({
        project: response.data
      });
    });
  };

  componentDidMount() {
    this.getProject();
  }

  render() {
    const { project } = this.state;
    return (
      <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <EditProject project={project} getDetails={this.getProject} />
        <Link to="/projects">Back</Link>
      </div>
    );
  }
}

export default ProjectDetails;
