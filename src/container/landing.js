import React, { Component } from "react";
import Searchbar from "../component/Searchbar/index.js";
import InfoCard from "../component/InfoCard/index.js";
import { Input } from "antd";
import Favourites from "./favourites.js";

const { Search } = Input;

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchResults: [],
      sigma: "Pratikshit",
    };
  }

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers?page=2&per_page=80")
      .then((res) => res.json())
      .then((data) => this.setState({ data: data }));
  }

  handleSearch(value) {
    this.setState({ searchResults: value });
    const data = this.state.searchResults;
    fetch(`http://api.punkapi.com/v2/beers?beer_name=${data}?`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  render() {
    return (
      <div>
        <Search
          placeholder="Search for beer..."
          enterButton="Search"
          style={{ width: 600 }}
          onSearch={(value) => this.handleSearch(value)}
        />
        <InfoCard data={this.state.data} />
        <Favourites data={this.state.sigma} />
      </div>
    );
  }
}
