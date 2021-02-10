import React, { Component } from "react";

export default class AddItems extends Component {
  state = {
    input: "",
  };
  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };
  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.handleChange} />
        <button
          onClick={() => {
            this.props.handleItems(this.state.input);
            this.setState({ input: "" });
          }}
        >
          Add
        </button>
      </div>
    );
  }
}
