import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class EditAdd extends Component {
  render() {
    return (
      <div>
        <Card className="mb-3 editAdd" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Text className="text-left d-flex justify-content-around">
              <p className="links">Edit public profile & URL</p>

              <i className="fas fa-question-circle ml-4 links"></i>
            </Card.Text>
            <hr />
            <Card.Text className="text-left d-flex justify-content-around">
              <p className="links">
                Add profile in another
                <br />
                language
              </p>
              <i class="fas fa-question-circle ml-5 links "></i>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
