import "./Footer.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="about-teomoca">
        <div className="networks">
          <a
            href={"https://www.linkedin.com/in/t%C3%A9o-montlouis-6b46aa1a3/"}
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="icons" />
          </a>
          <a
            href={"https://github.com/TeoMoca"}
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="icons" />
          </a>
        </div>
        <div className="languages">
          <p
            className={"french "}
            value={"fr"}
            onClick={this.props.languageChange}
          >
            Français
          </p>
          <p
            className="english active"
            value={"en"}
            onClick={this.props.languageChange}
          >
            English
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
