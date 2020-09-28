import React, { Component } from "react";
import { Card, Col, Row } from "antd";
import "../../styles/card.scss";

export default class InfoCard extends Component {
  render() {
    return (
      <Card hoverable className="card-container">
        <Row gutter={16}>
          <Col span={2} className="img-container">
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          </Col>
          <Col> www.instagram.com</Col>
        </Row>
      </Card>
    );
  }
}
