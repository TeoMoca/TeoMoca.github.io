import "./Description.css";
import { Component } from "react";

class Description extends Component {
  goToSkills() {
    window.location.href = "./skills";
  }

  render() {
    console.log(this);
    return (
      <div className="description">
        <div className="about-me">
          <div className="text">{this.props.text}</div>
          <div className="button">
            <button onClick={this.goToSkills}>{this.props.button}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Description;
