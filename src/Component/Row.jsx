import React, { Component } from "react";
import axios from "axios";

export default class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }
  xoatodo = async () => {
    this.setState({
      isLoading: true
    });
    let id = this.props.todo.id;
    let data = await axios({
      method: "DELETE",
      url: `https://5ce2c23be3ced20014d35e3d.mockapi.io/api/hoche/${id}`
    });
    if (data.status === 200 && data.statusText === "OK") {
      this.props.xoatodo(id);
    }
  };
  componentWillUnmount() {
    this.setState({
      isLoading: false
    });
  }
  render() {
    return (
      <div style={{ margin: "0px", marginTop: "1em" }} className="row">
        <div className="alert alert-dark col-6" role="alert">
          {this.props.todo.text}
        </div>
        <div className="col-6">
          {this.state.isLoading ? (
            <button disabled type="button" className="btn btn-primary col-12">
              Xoa
            </button>
          ) : (
            <button
              onClick={this.xoatodo}
              type="button"
              className="btn btn-primary col-12"
            >
              Xoa
            </button>
          )}
          <button type="button" className="btn btn-secondary col-12">
            Sua
          </button>
        </div>
      </div>
    );
  }
}
