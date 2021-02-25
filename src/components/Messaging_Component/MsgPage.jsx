import React, { PureComponent } from "react";
import "./Messaging_Styles/MsgPage.scss";
import "./Messaging_Styles/MainMsg.scss";
import "../css/RightSide.scss";
import footericon from "../images/footericon.png";
import { withAuth0 } from "@auth0/auth0-react";
import MsgSide from "./MsgSide";
import MainMsg from "./MainMsg";
import io from "socket.io-client";

class MsgPage extends PureComponent {
  socket = null;
  state = {
    message: "",
    users: [],
    selectedUser: null,
    user: null,
  };

  componentDidMount() {
    const connOpt = {
      transports: ["websocket"],
    };

    const { user } = this.props.auth0;
    if (user !== undefined) {
      this.setState({ user: user.nickname });
    }

    this.socket = io("https://striveschool-api.herokuapp.com/", connOpt);
    // this.socket.on("chatmessage", (msg) =>
    //   this.setState({ messages: this.state.messages.concat(msg) })
    // );
    this.socket.on("connect", () => console.log("Connected", this.socket.id));
    this.socket.on("list", (users) => {
      this.setState({ users: [] });
      let userNoDuplicate = [...new Set(users)];
      this.setState({
        users: this.state.users
          .concat(userNoDuplicate)
          .filter((x) => x !== user.nickname),
      });
    });
    this.socket.emit("setUsername", {
      username: user.nickname,
    });
  }

  handleTxtOnChange = (e) => {
    this.setState({ message: e.target.value });
  };

  handleUserOnClick = (e) => {
    this.setState({ selectedUser: e.currentTarget.id });
    console.log(e.currentTarget.id);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.message !== "") {
      console.log(this.state.selectedUser);
      this.socket.emit("chatmessage", {
        to: this.state.selectedUser,
        text: this.state.message,
      });
      this.setState({ message: "" });
    }
  };

  componentDidUnmount() {
    this.socket.disconnect();
  }

  render() {
    return (
      <div id="msg-page">
        <div className="main-body">
          <MsgSide
            users={this.state.users}
            handleUserOnClick={this.handleUserOnClick}
          />
          <MainMsg
            selectedUser={this.state.selectedUser}
            handleTxtOnChange={this.handleTxtOnChange}
            value={this.state.message}
            handleSubmit={this.handleSubmit}
            user={this.state.user}
          />
        </div>
        <div id="footer-right" style={{ position: "sticky", top: "60px" }}>
          <div className="links-footer-right">
            <span>About</span>
            <span>Accessibility</span>
            <span>Help Center</span>
            <span>Privacy & Terms</span>
            <span>Ad Choices</span>
            <span>Advertising</span>
            <span>Business Services</span>
            <span>Get the LinkedIn app</span>
          </div>
          <p>More</p>
          <div className="linkedin-rights">
            <span>
              <img src={footericon} alt="" />
            </span>
            <span>Linkedin Corporation © 2020</span>
          </div>
        </div>
      </div>
    );
  }
}
export default withAuth0(MsgPage);
