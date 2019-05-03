import React from "react";

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

  render() {
    return (
      <div>
        <form>
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
