import React, { Component } from "react";
import EditAdd from "../sideComponents/EditAdd";
import SeeJobs from "../sideComponents/SeeJobs";
import PeopleAlsoViewed from "../sideComponents/PeopleAlsoViewed";
import PeopleYouMayKnow from "../sideComponents/PeopleYouMayKnow";
import InLearning from "../sideComponents/InLearning";

export default class SideComps extends Component {
  state = {
    listProfile: [],
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM1NjRlMGVkMjY2ODAwMTcwZWEzZjIiLCJpYXQiOjE2MDY3NzE5MzYsImV4cCI6MTYwNzk4MTUzNn0.KHk73ENpynrdlTThZKwORAbPt0n0fKdtN3Oz9Bjmoio",
          },
        }
      );

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <EditAdd />
        <SeeJobs />
        <PeopleAlsoViewed />
        <PeopleYouMayKnow />
        <InLearning />
      </div>
    );
  }
}
