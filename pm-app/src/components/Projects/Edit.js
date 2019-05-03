import React from "react";
import axios from "axios";

class EditProject extends React.Component {
  state = {
    title: "",
    description: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    const id = this.props.project._id;

    axios
      .put(`http://localhost:5000/api/projects/${id}`, {
        title: this.state.title,
        description: this.state.description
      })
      .then(() => {
        this.props.getDetails();
        this.setState({
          title: "",
          description: ""
        });
      });
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h3>Edit Project</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>title:</label>
            <input
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>description:</label>
            <input
              name="description"
              type="text"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" value="Update a project" />
        </form>
      </div>
    );
  }
}

export default EditProject;
