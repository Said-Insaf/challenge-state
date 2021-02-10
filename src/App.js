import React, { Component } from "react";
import AddItems from "./Components/ListItems/AddItems/AddItems";
import ListItems from "./Components/ListItems/ListItems";

export default class App extends Component {
  state = {
    listItems: ["task1"],
  };
  handleDelete = (indice) => {
    this.setState({
      listItems: this.state.listItems.filter((el, i) => i != indice),
    });
  };
  handleItems = (item) => {
    this.setState({ listItems: this.state.listItems.concat(item) });
  };
  render() {
    return (
      <div>
        <AddItems handleItems={this.handleItems} />
        <ListItems
          listItems={this.state.listItems}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
