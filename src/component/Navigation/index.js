import React, { Component } from "react";
import { Menu } from "antd";
import "antd/dist/antd.css";
import "../../styles/nav.scss";

export default class Navbar extends Component {
  render() {
    return (
      <Menu mode="horizontal" className="navigaion-container">
        <Menu.Item className="logo">Beans Love Beer</Menu.Item>
        <Menu.Item>Home</Menu.Item>

        <Menu.Item>
          <a href="https://ant.design">Favourites </a>
        </Menu.Item>
      </Menu>
    );
  }
}
