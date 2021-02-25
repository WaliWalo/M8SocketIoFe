import React, { PureComponent } from "react";
import "./Messaging_Styles/MsgPage.scss";
import "./Messaging_Styles/MainMsg.scss";
import "../css/RightSide.scss";
import footericon from "../images/footericon.png";
import { withAuth0 } from "@auth0/auth0-react";
import MsgSide from "./MsgSide";
import MainMsg from "./MainMsg";
import io from "socket.io-client";
import { getProfiles } from "../../apis/profiles/api";

class MsgPage extends PureComponent {
  socket = null;
  state = {
    message: "",
    users: [],
    selectedUser: null,
    user: null,
    selectedRoom: null,
  };

  componentDidMount() {
    const connOpt = {
      transports: ["websocket"],
    };

    const { user } = this.props.auth0;
    if (user !== undefined) {
      this.setState({ user: user.nickname });
    }

    this.socket = io("http://localhost:4000", connOpt);
    // this.socket.on("chatmessage", (msg) =>
    //   this.setState({ messages: this.state.messages.concat(msg) })
    // );
    this.socket.on("connect", () => console.log("Connected", this.socket.id));
    // this.socket.on("list", (users) => {
    //   this.setState({ users: [] });
    //   let userNoDuplicate = [...new Set(users)];
    //   this.setState({
    //     users: this.state.users
    //       .concat(userNoDuplicate)
    //       .filter((x) => x !== user.nickname),
    //   });
    // });
    // this.socket.emit("setUsername", {
    //   username: user.nickname,
    // });

    this.fetchProfile();
  }

  fetchProfile = async () => {
    let profiles = await getProfiles();
    const { user } = this.props.auth0;
    let id = user.sub.slice(6);
    this.setState({ users: [] });
    this.setState({
      users: this.state.users
        .concat(profiles)
        .filter((profile) => profile._id !== id),
    });
  };

  handleTxtOnChange = (e) => {
    this.setState({ message: e.target.value });
  };

  handleUserOnClick = async (e) => {
    const { user } = this.props.auth0;
    if (this.state.user) {
      this.setState({ selectedUser: e.target.innerText });
      console.log(e.target.id);
      let rooms = await this.getAllRooms();
      console.log(rooms);
      let myRoom = rooms.filter(
        (room) => room.name === `${user.sub.slice(6)}.${e.target.id}`
      );
      console.log(myRoom);
      if (myRoom.length === 0) {
        this.socket.emit("joinRoom", {
          username: this.state.user,
          room: `${e.target.id}.${user.sub.slice(6)}`,
        });
        this.setState({ selectedRoom: `${e.target.id}.${user.sub.slice(6)}` });
      } else {
        this.socket.emit("joinRoom", {
          username: this.state.user,
          room: `${user.sub.slice(6)}.${e.target.id}`,
        });
        this.setState({ selectedRoom: `${user.sub.slice(6)}.${e.target.id}` });
      }
    } else {
      console.log(this.state.user);
    }
  };

  getAllRooms = async () => {
    try {
      let response = await fetch(`http://localhost:4000/rooms`);
      if (response.ok) {
        let rooms = await response.json();
        return rooms;
      } else {
        console.log(response);
      }
    } catch (error) {}
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.message !== "") {
      console.log(this.state.selectedUser);

      this.socket.emit("message", {
        message: this.state.message,
        room: `${this.state.selectedRoom}`,
      });
      // this.socket.emit("chatmessage", {
      //   to: this.state.selectedUser,
      //   text: this.state.message,
      // });
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
            selectedRoom={this.state.selectedRoom}
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
