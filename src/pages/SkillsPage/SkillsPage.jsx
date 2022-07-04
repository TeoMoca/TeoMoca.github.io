import "./SkillsPage.css";
import { Component } from "react";
import Rating from "../../components/Rating/Rating";
import BackHome from "../../components/BackHome/BackHome";

class SkillsPage extends Component {
  goToRepositories() {
    window.location.href = "./repositories";
  }

  render() {
    return (
      <div className="skills-page">
        <BackHome />
        <h2 className="skills-title">Skills</h2>
        <div className="it-skills">
          <Rating rate="4" skill="JavaScript"></Rating>
          <Rating rate="4" skill="TypeScript"></Rating>
          <Rating rate="3" skill="Python"></Rating>
          <Rating rate="4" skill="HTML"></Rating>
          <Rating rate="4" skill="CSS"></Rating>
          <Rating rate="4" skill="Database Management"></Rating>
          <Rating rate="3" skill="C"></Rating>
          <Rating rate="3" skill="C++"></Rating>
          <Rating rate="3" skill="C#"></Rating>
          <Rating rate="4" skill="API"></Rating>
        </div>
        <div className="languages-skills">
          <h3>Languages</h3>
          <ul>
            <li>French - Native</li>
            <li>English - Fluant</li>
            <li>German - Scholar</li>
          </ul>
        </div>
        <div className="softwares-skills">
          <h3>Softwares</h3>
          <ul>
            <li>Visual Studio</li>
            <li>Visual Studio Code</li>
            <li>PostMan</li>
            <li>OFFICE Suite</li>
            <li>Jupiter</li>
          </ul>
        </div>
        <div className="skills-button">
          <button onClick={this.goToRepositories}>{this.props.button}</button>
        </div>
      </div>
    );
  }
}

export default SkillsPage;
