import "./GithubProject.css";
import { Component } from "react";

class GithubProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this);
    return (
      <div className="project-container">
        <a
          href={this.props.project.html_url}
          target="_blank"
          rel="noreferrer"
          className="title"
        >
          {this.props.project.name}
        </a>
        <p className="project-description">
          {this.props.project.description ||
            "Description need to be done In gitHub (using github API)"}
        </p>
      </div>
    );
  }
}

export default GithubProject;
