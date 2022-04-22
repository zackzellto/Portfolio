import "./App.css";
import ResponsiveNavbar from "./Navbar.jsx";
import Container from "react-bootstrap/Container";
import SnakeGameSVG from "./components/snake-svg";
import BattleshipSVG from "./components/battleship-svg";
import StarWarsAPISVG from "./components/swapi-svg";
import ExpenseTrackerSVG from "./components/expense-tracker-svg";
import LandingText from "./components/landing-text/landing-text";
import ContactIconMenu from "./components/contact/contact-icon-menu";

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
              <div>
                <h4>
                  <p>
                    I have been in the tech industry for over 11 years working
                    in IT. It has been a very interesting career which has
                    allowed me to accomplish many of my personal goals. I have a
                    passion for learning new things and I am always looking to
                    expand my knowledge.
                  </p>
                  <br />
                  From working at a startup to working at a large corporation, I
                  have had the opportunity to work with a variety of different
                  people and have learned a lot about how to work in a team.
                  <br />
                  I've decided to teach myself to code and I am eager to bring
                  my knowledge and experience to the professioinal world.
                </h4>
              </div>
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
              <div className="contact"></div>
              Built & Designed by Zack Zellto
            </div>
          </Container>
        </footer>
        <ContactIconMenu />
      </div>
    </>
  );
}

export default App;
