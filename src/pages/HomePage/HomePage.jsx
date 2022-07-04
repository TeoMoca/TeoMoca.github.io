import "./HomePage.css";
import { Component } from "react";
import Description from "../../components/Description/Description";
import Myself from "../../components/Myself/Myself";

class HomePage extends Component {
  render() {
    return (
      <div class="main">
        <Myself job={this.props.job} />
        <Description text={this.props.text} button={this.props.button} />
      </div>
    );
  }
}

export default HomePage;
