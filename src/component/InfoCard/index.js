import React, { Component } from "react";
import { Card, Col, Row } from "antd";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import "../../styles/card.scss";
const { Meta } = Card;

export default class InfoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      favourites: [],
    };
  }

  handleClick = () => {
    this.setState({ clicked: true });
    sessionStorage.setItem("Favbeer", this.state.favourites);
    const array = new Set(this.state.favourites);
    // this.setState({ favourites: array });
    // console.log(array);
  };
  handleClickToggle = () => {
    this.setState({ clicked: false });
  };

  render() {
    const data = this.props.data;
    const { clicked, favourites } = this.state.clicked;
    return (
      <div>
        {data.map((beer) => (
          <Card hoverable className="card-container">
            <Meta
              avatar={
                <img
                  className="img-container"
                  alt="example"
                  src={beer.image_url}
                />
              }
              title={
                <div>
                  <div>
                    {clicked === true ? (
                      <StarFilled onClick={this.handleClickToggle} />
                    ) : (
                      <StarOutlined
                        onClick={() => {
                          const favourites = this.state.favourites;
                          this.setState({
                            favourites: [...favourites, beer.id],
                          });
                          this.setState({
                            favourites: new Set(favourites),
                          });
                          // console.log();
                          this.handleClick();
                        }}
                      />
                    )}
                  </div>
                  <div>{beer.name}</div>
                </div>
              }
              description={beer.description}
            />
          </Card>
        ))}
      </div>
    );
  }
}
