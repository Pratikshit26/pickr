import React, { Component } from "react";
import { Input } from "antd";

const { Search } = Input;

export default class Searchbar extends Component {
  render() {
    return (
      <Search
        placeholder="Search for beer..."
        enterButton="Search"
        style={{ width: 600 }}
        onSearch={(value) => console.log(value)}
      />
    );
  }
}
