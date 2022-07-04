//import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Component } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Repositories from "./components/Repositories/Repositories";
import HomePage from "./pages/HomePage/HomePage";
import SkillsPage from "./pages/SkillsPage/SkillsPage";

const messages = {
  en: {
    title: "Full Stack Engineer",
    text: "I am a IT student, I am 21 years old, I am passionate about the WEB, photography as well as sport, I invite you to see my skills ",
    button: "My skills",
    check_projects: "Watch my projets",
    repos: "My projects",
  },
  fr: {
    title: "Ingénieur Full Stack",
    text: "Je suis un étudiant en informatique, j'ai 21 ans, je suis passionné par le WEB, la photographie ainsi que le sport, je vous invite à voir mes compétences.",
    button: "Mes compétences",
    check_projects: "Voir mes projets",
    repos: "Mes projets",
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: "en",
    };
  }

  setLocale = (e) => {
    this.setState({ locale: e });
  };

  handleChange = (e) => {
    this.setLocale(e.target.attributes[1].value);
    Array.from(document.querySelector(".languages").children).forEach((e) => {
      e.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  render() {
    return (
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <HomePage
                job={messages[this.state.locale].title}
                text={messages[this.state.locale].text}
                button={messages[this.state.locale].button}
              />
            }
          />
          <Route
            exact
            path="/skills"
            element={
              <SkillsPage
                button={messages[this.state.locale].check_projects}
              ></SkillsPage>
            }
          />

          <Route
            exact
            path="/repositories"
            element={
              <Repositories
                repos={messages[this.state.locale].repos}
              ></Repositories>
            }
          />
        </Routes>
        <Footer
          language={this.state.locale}
          languageChange={this.handleChange}
          availableLanguages={Object.keys(messages)}
        ></Footer>
      </Router>
    );
  }
}

export default App;
