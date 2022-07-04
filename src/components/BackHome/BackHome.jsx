import "./BackHome.css";
import { Component } from "react";
import { HiHome } from "react-icons/hi";

class BackHome extends Component {
  render() {
    return (
      <a className="back-home" href="/">
        <HiHome></HiHome>
      </a>
    );
  }
}

export default BackHome;
