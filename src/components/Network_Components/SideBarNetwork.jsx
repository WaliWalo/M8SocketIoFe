import React, { PureComponent } from "react";
import "./Network_Style/SideBarNetwork.scss";
import "../css/RightSide.scss";
import footericon from "../images/footericon.png";

export default class SideBarNetwork extends PureComponent {
  render() {
    return (
      <div id="network-bar">
        <div className="myNetworkMenu">
          <header>
            <p>Manage my network</p>
          </header>
          <ul className="network-list">
            <li>
              <div className="netMenuItem">
                <ion-icon name="people-outline"></ion-icon>
                <spam>Connections</spam>
              </div>
              <spam>{this.props.counter}</spam>
            </li>
            <li>
              <div className="netMenuItem">
                <i className="fas fa-address-book"></i>
                <spam>Contacts</spam>
              </div>
              <spam></spam>
            </li>
            <li>
              <div className="netMenuItem">
                <ion-icon name="person-add-outline"></ion-icon>
                <spam>People | Follow</spam>
              </div>
              <spam></spam>
            </li>
            <li>
              <div className="netMenuItem">
                <i className="fas fa-users"></i>
                <spam>Groups</spam>
              </div>
              <spam></spam>
            </li>
            <li>
              <div className="netMenuItem">
                <i className="far fa-calendar-alt"></i>
                <spam>Events</spam>
              </div>
              <spam></spam>
            </li>
            <li>
              <div className="netMenuItem">
                <i className="far fa-sticky-note"></i>
                <spam>Pages</spam>
              </div>
              <spam></spam>
            </li>
            <li>
              <div className="netMenuItem">
                <i className="far fa-newspaper"></i>
                <spam>Newsletters</spam>
              </div>
              <spam></spam>
            </li>
            <li>
              <div className="netMenuItem">
                <i className="fas fa-hashtag"></i>
                <spam>Hashtags</spam>
              </div>
              <spam></spam>
            </li>
          </ul>
        </div>
        <div className="add-contacts">
          <p>Add personal contacts</p>
          <p>
            We’ll periodically import and store your contacts to help you and
            others connect. You choose who to connect to and who to invite.
            Learn more
          </p>
          <input type="email" placeholder="Your Email" />
          <button>Continue</button>
          <p>More options</p>
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
