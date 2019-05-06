import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class EstimatedTotal extends Component {
  state = {};
  render() {
    return (
      <Row>
        <Col md={6}>
          <h2>Est. Total</h2>
        </Col>
        <Col md={6}>{`$${this.props.price}`}</Col>
      </Row>
    );
  }
}

export default EstimatedTotal;
