import React, { Component } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

export default class MainLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {this.props.children}
        <Footer />
      </React.Fragment>
    );
  }
}
