import React, { Component } from "react";

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Components/Router";

export default class App extends Component {
  handleResize = () => {
    console.log("Resized");
    window.location.reload();
  };
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  render() {
    return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    );
  }
}
