import React, { Component } from "react";
import { Input } from "antd";

const { Search } = Input;

export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }

  render() {
    return (
      <Search
        placeholder="Search for beer..."
        enterButton="Search"
        style={{ width: 600 }}
        onSearch={(value) => this.props.handleSearch(value)}
      />
    );
  }
}
