import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  nhapgiatri = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submit = async e => {
    e.preventDefault();
    if (this.state.text === "") {
      alert("k dc de trong");
    } else {
      let data = await axios({
        method: "POST",
        url: "https://5ce2c23be3ced20014d35e3d.mockapi.io/api/hoche",
        data: { ...this.state }
      });
      this.props.nhangiatriCon(data.data);

      console.log(data);

      this.setState({
        text: ""
      });
    }
  };

  render() {
    return (
      <form style={{ marginTop: "2em" }}>
        <div
          className="alert alert-primary"
          style={{ textAlign: "center" }}
          role="alert"
        >
          AppTodo
        </div>
        <div className="form-group">
          <input
            value={this.state.text}
            onChange={this.nhapgiatri}
            name="text"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button
          onClick={this.submit}
          type="submit"
          className="btn btn-primary"
          style={{ width: "100%" }}
        >
          Submit
        </button>
      </form>
    );
  }
}
