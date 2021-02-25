import React, { Component } from "react";
import { Card, Button, Row, Col, Image } from "react-bootstrap";

export default class InLearning extends Component {
  render() {
    return (
      <div>
        <Card className="mt-3 mb-3" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title className="text-left">E-Learning</Card.Title>
            <Row>
              <Col xs={6} md={4}>
                <Image
                  src="https://media-exp1.licdn.com/dms/image/C4E0DAQH7zshVmmZEIQ/learning-public-crop_60_100/0?e=1606834800&v=beta&t=AsF7LyoM_z1ygfEQVW3v-R-IuORv6fNf7voqHerQfp4"
                  rounded
                />
              </Col>
              <Col>
                <b>Essentials of CSS for React Developers</b>
                <p>5,960 viewers</p>
                <hr />
              </Col>
              <Col xs={6} md={4}></Col>
            </Row>
          </Card.Body>
          <hr />
          <Card.Text className="mb-2">Show more </Card.Text>
        </Card>
      </div>
    );
  }
}
