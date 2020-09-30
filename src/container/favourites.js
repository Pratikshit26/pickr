import React, { Component } from "react";
import Navbar from "../component/Navigation/index.js";

export default class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: sessionStorage.getItem("Pratikshit"),
      list: [sessionStorage.getItem("Favbeer", [])],
    };
  }
  render() {
    return <div>{this.state.list}</div>;
  }
}
