import React, { Component } from "react";
import MainLayout from "../Layout/MainLayout";
import Form from "../Component/Form";
import Todolist from "../Component/Todolist";
import axios from "axios";

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      isLoading: false
    };
  }
  nhangiatriCha = todo => {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  };
  xoatodo = id => {
    let index = this.state.todos.findIndex(item => item.id === id);
    this.setState({
      todos: [
        ...this.state.todos.slice(0, index),
        ...this.state.todos.slice(index + 1)
      ]
    });
  };
  render() {
    return (
      <MainLayout>
        <div className="container">
          <Form nhangiatriCon={this.nhangiatriCha} />
          {this.state.isLoading ? (
            <img
              style={{ margin: "auto", display: "block" }}
              src="/loading.gif"
              alt="sai duong dan"
            />
          ) : (
            <Todolist todos={this.state.todos} xoatodo={this.xoatodo} />
          )}
        </div>
      </MainLayout>
    );
  }
  async componentDidMount() {
    this.setState({
      isLoading: true
    });
    const data = await axios({
      method: "GET",
      url: "https://5ce2c23be3ced20014d35e3d.mockapi.io/api/hoche"
    });
    this.setState({
      todos: data.data
    });
    this.setState({
      isLoading: false
    });
  }
}
