import "./Repositories.css";
import { Component } from "react";
import GithubProject from "../GithubProject/GithubProject";
import BackHome from "../../components/BackHome/BackHome";

class Repositories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      githubProjects: [],
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/TeoMoca/repos", {
      headers: {
        authorization: "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",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            githubProjects: result,
          });
        },
        // Remarque : il est important de traiter les erreurs ici
        // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
        // des exceptions provenant de réels bugs du composant.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement…</div>;
    } else {
      return (
        <div className="repositories">
          <BackHome />
          <h1>{this.props.repos}</h1>
          <div className="projects">
            {this.state.githubProjects.map((item) => (
              <GithubProject key={item.name} project={item}></GithubProject>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Repositories;
