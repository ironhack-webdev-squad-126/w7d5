import React from "react";
import axios from "axios";

class AddProject extends React.Component {
  state = {
    title: "",
    description: ""
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/api/projects", {
        title: this.state.title,
        description: this.state.description
      })
      .then(() => {
        this.props.getData();
        this.setState({ title: "", description: "" });
      });
  };

  render() {
    return (
      <div>
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
          <input type="submit" value="Create a project" />
        </form>
      </div>
    );
  }
}

export default AddProject;
