import React, { PureComponent } from "react";
export default class MsgSide extends PureComponent {
  state = { allUsers: [] };
  render() {
    return (
      <div id="msg-side">
        <header>
          <p>Messaging</p>
          <div className="icons-msg">
            <ion-icon name="create-outline"></ion-icon>
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </header>
        <div className="msg-side-body">
          <input type="text" placeholder="Search Messages" />
          <div className="msg-container">
            {this.props.users.length === 0 ? (
              <div>
                <p>No messages...yet!</p>
                <p>
                  Reach out and start a conversation. <br /> Great things might
                  happen
                </p>
              </div>
            ) : (
              <ul className="listUsers">
                {this.props.users.map((user, i) => (
                  <li
                    id={user}
                    key={i}
                    onClick={(e) => this.props.handleUserOnClick(e)}
                  >
                    {user}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button>Start a new message</button>
        </div>
      </div>
    );
  }
}
