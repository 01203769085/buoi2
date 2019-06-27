import React, { Component } from "react";
import Row from "./Row";

export default class Todolist extends Component {
  xoatodo = id => {
    this.props.xoatodo(id);
  };
  showtodos = todos => {
    return todos.map(item => {
      return <Row key={item.id} todo={item} xoatodo={this.xoatodo} />;
    });
  };
  render() {
    return (
      <div style={{ marginTop: "20px" }}>
        {this.showtodos(this.props.todos)}
      </div>
    );
  }
}
