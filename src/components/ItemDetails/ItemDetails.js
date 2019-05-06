import React, { Component } from "react";
import { Button, Collapse, Row, Col } from "react-bootstrap";
import { Card, CardImg, CardBody } from "reactstrap";

class ItemDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <Button
          className="item-details-buton"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide`} item details
          {this.state.open === false ? ` +` : ` -`}
        </Button>

        <Collapse in={this.state.open}>
          <div>
            <Card>
              <CardImg
                width="50%"
                height="50%"
                src="https://images-na.ssl-images-amazon.com/images/I/51P05w2sl4L._SL1000_.jpg"
                alt="thumb"
              />
              <CardBody>
                <p>
                  Devialet Gold Phantom - High-end wireless speaker - 4500 Watts
                  - 108 dB
                </p>
                <Row className="show-grid">
                  <Col md={6}>
                    <strong>{`$${this.props.price}`}</strong>
                    <br />
                    <strong className="price-strike">{`$${
                      this.props.price
                    }`}</strong>
                  </Col>
                  <Col md={6}>Qty: 1</Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default ItemDetails;
