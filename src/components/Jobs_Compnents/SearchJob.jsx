import React, { PureComponent } from "react";
import "./Jobs_Styles/SearchJob.scss";

export default class SearchJob extends PureComponent {
  render() {
    return (
      <div id="searchJob">
        <p>Search for your next job</p>
        <div className="search-inputs">
          <input type="text" placeholder="Search by" />
          <input
            type="text"
            placeholder="Location"
            onChange={this.props.onchange}
          />
          <button onClick={this.props.filter}>Search</button>
        </div>
      </div>
    );
  }
}
