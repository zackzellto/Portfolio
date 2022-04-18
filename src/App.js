import "./App.css";
import GitHubLogo from "./media/github-logo.png";
import LinkedInLogo from "./media/linkedin-logo.png";
import StarWarsAPIProject from "./components/swapi-project";
import ResponsiveNavbar from "./Navbar.jsx";
import Container from "react-bootstrap/Container";
import EmailModal from "./components/email-modal";
import BattleshipProject from "./components/battleship-project";
import SnakeGameProject from "./components/snake-project";

function App() {
  return (
    <>
      <ResponsiveNavbar />
      <div className="App">
        <header className="App-header">
          <Container id="home-section">
            <div className="landing-title-hey">Hey!</div>
            <p className="landing-title-zack">I'm Zack.</p>
            <div>Welcome to my site.</div>
            <div>Let's get to know eachother!</div>
            <div className="animated-div1"></div>
          </Container>
        </header>
        <main>
          <Container id="about-section">
            <hr />
            <div className="about">
              <h2>About Me</h2>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <hr />
          </Container>
          <Container id="projects-section">
            <h2>Projects</h2>
            <div className="portfolio">
              <br />
              <div>
                <StarWarsAPIProject />
              </div>
              <div className="battleship-proj">
                <BattleshipProject />
              </div>
              <div>
                <SnakeGameProject />
              </div>
            </div>
            <hr />
          </Container>
        </main>
        <footer>
          <Container id="contact-section">
            <div className="contact-info">
              <h2>Contact Me</h2>
              <div className="contact">
                <a
                  target="_blank"
                  href="https://github.com/zackzellto"
                  rel="noreferrer"
                >
                  <img
                    className="github-link"
                    src={GitHubLogo}
                    alt="github-logo"
                  />
                </a>

                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/zackzellto"
                  rel="noreferrer"
                >
                  <img
                    className="linkedin-link"
                    src={LinkedInLogo}
                    alt="linkedin-logo"
                  />
                </a>
                <EmailModal className="email-link" />
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </>
  );
}

export default App;
