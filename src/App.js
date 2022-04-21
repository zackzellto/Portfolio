import "./App.css";
import GitHubLogo from "./media/github-logo.png";
import LinkedInLogo from "./media/linkedin-logo.png";
import ResponsiveNavbar from "./Navbar.jsx";
import Container from "react-bootstrap/Container";
import EmailModal from "./components/email-modal";
import SnakeGameSVG from "./components/snake-svg";
import BattleshipSVG from "./components/battleship-svg";
import StarWarsAPISVG from "./components/swapi-svg";
import ExpenseTrackerSVG from "./components/expense-tracker-svg";
import LandingText from "./components/landing-text/landing-text";

function App() {
  return (
    <>
      <ResponsiveNavbar />
      <div className="App">
        <header className="App-header">
          <Container id="home-section">
            <div>
              <LandingText />
            </div>

            <div className="animated-div1"></div>
          </Container>
        </header>
        <main>
          <Container id="about-section">
            <hr />
            <div className="about">
              <h1>About Me</h1>
              <br />
              <h4>
                I have been in the tech industry for over 11 years working in
                IT. I have had a very interesting career so far which has
                allowed me to accomplish many of my personal goals. I have a
                passion for learning new things and I am always looking to
                expand my knowledge.
                <br />
                From working at a startup to working at a large corporation, I
                have had the opportunity to work with a variety of different
                people and have learned a lot about how to work in a team.
                <br />
                I've decided to teach myself to code and I am eager to bring my
                knowledge and experience to the professioinal world.
              </h4>
            </div>
            <hr />
          </Container>
          <Container id="projects-section">
            <h1 className="projects-title">Projects</h1>
            <div className="portfolio">
              <div className="portfolio-items">
                <StarWarsAPISVG />

                <BattleshipSVG />

                <SnakeGameSVG />

                <ExpenseTrackerSVG />
              </div>
            </div>
            <hr className="above-footer-hr" />
          </Container>
        </main>
        <footer>
          <Container id="contact-section">
            <div className="contact-info">
              <h1>Contact Me</h1>
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
