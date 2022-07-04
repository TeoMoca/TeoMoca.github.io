import "./Myself.css";
import Teo from "../../img/teo.jpg";
import { Component } from "react";

class Myself extends Component {
  render() {
    return (
      <div className="myself">
        <div className="my-description">
          <h1 className="name">Téo Montlouis-Calixte</h1>
          <h1 className="portfolio">PortFolio</h1>
          <h2 className="title">{this.props.job}</h2>
        </div>
        <img className="me" src={Teo} alt="le bg" />
      </div>
    );
  }
}

export default Myself;
