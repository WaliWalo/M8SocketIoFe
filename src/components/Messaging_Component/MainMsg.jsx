import React, { PureComponent } from "react";
import { Form } from "react-bootstrap";

export default class MainMsg extends PureComponent {
  state = {
    allMsg: [],
  };

  getMyMessages = async (username) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/messages/${username}`
      );
      if (response.ok) {
        let data = await response.json();
        return data;
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  async filterMessages() {
    let myMessages = await this.getMyMessages(this.props.user);
    let messageSent = myMessages.filter(
      (msg) => msg.to === this.props.selectedUser
    );
    let messageReceived = myMessages.filter(
      (msg) => msg.from === this.props.selectedUser
    );
    let allMsg = messageSent.concat(messageReceived);
    let sorted = allMsg.sort(
      (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
    );
    console.log(sorted);

    this.setState({ allMsg: sorted });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.props.selectedUser !== prevProps.selectedUser) {
      this.filterMessages();
    }
  }

  handleOnSend = async (e) => {
    if (e.keyCode === 13) {
      this.filterMessages();
    }
    this.filterMessages();
  };

  render() {
    return (
      <div id="main-msg">
        <header>New Message</header>
        <div className="currentChat">
          {this.props.selectedUser ? this.props.selectedUser : "Select a user"}
        </div>
        <div className="msg-dialog">
          <ul id="messages">
            {this.state.allMsg.length > 0 &&
              this.state.allMsg.reverse().map((
                msg,
                i //displays all new messages
              ) => (
                <li
                  key={i}
                  className={
                    msg.from === this.props.user ? "ownMessage" : "message"
                  }
                >
                  <strong>{msg.from}</strong> {msg.text}
                </li>
              ))}
          </ul>
        </div>
        <Form onSubmit={(e) => this.props.handleSubmit(e)}>
          <div className="msg-sender">
            <input
              type="text"
              placeholder="Write here your text..."
              onChange={this.props.handleTxtOnChange}
              onKeyDown={(e) => this.handleOnSend(e)}
              value={this.props.value}
            />
            <button>
              <i className="fas fa-chevron-up"></i>
            </button>
          </div>
          <div className="media-uploads">
            <div className="media-icons">
              <i className="fas fa-image"></i>
              <i className="fas fa-paperclip"></i>
              <span>GIF</span>
              <i className="far fa-smile"></i>
              <i className="fas fa-video"></i>
            </div>
            <div className="msg-options">
              <button type="submit" onClick={this.handleOnSend}>
                Send
              </button>
              <i className="fas fa-ellipsis-h"></i>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}
