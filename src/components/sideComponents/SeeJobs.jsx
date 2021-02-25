import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class SeeJobs extends Component {
  render() {
    return (
      <div>
        <Card className="mt-3 mb-3" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          />
        </Card>
      </div>
    );
  }
}
