import "./App.css";
import ResponsiveNavbar from "./Navbar.jsx";
import Container from "react-bootstrap/Container";
import SnakeGameSVG from "./components/projects/snake-svg";
import BattleshipSVG from "./components/projects/battleship-svg";
import StarWarsAPISVG from "./components/projects/swapi-svg";
import ExpenseTrackerSVG from "./components/projects/expense-tracker-svg";
import LandingText from "./components/landing-text/landing-text";
import ContactIconMenu from "./components/contact/contact-icon-menu";
import ResumeIcon from "./media/resume-icon.png";
import ContactForm from "./components/contact/contact-form";
import BattleshipInfo from "./components/projects/battleship-info";
import { Button } from "react-bootstrap";

function App() {
  return (
    <>
      <ResponsiveNavbar />
      <div className="App">
        <header className="App-header">
          <Container id="home-section">
            <div className="animated-div1">
              <LandingText />
            </div>
          </Container>
        </header>
        <main>
          <Container id="about-section">
            <hr />
            <div className="about">
              <h2 id="about-title">0. About Me</h2>
              <br />

              <h5>
                <p>
                  I have been in the tech industry for over 11 years working in
                  IT. It has been a very interesting career which has allowed me
                  to accomplish many of my personal goals. I have a passion for
                  learning new things and I am always looking to expand my
                  knowledge.
                </p>
                <p>
                  <br />
                  From working at a startup to working at a large corporation, I
                  have had the opportunity to work with a wide array of people
                  in a diverse range of roles. I believe a true team environment
                  is where everyone is included in the life cycle of a project.
                  <br />
                </p>
                <p>
                  <br />
                  In late 2021 I chose to teach myself how to code and after
                  many hours of work learning and building projects and
                  understanding what it takes to be a software engineer. I am
                  excited to bring my passion and skills to the professional
                  world.
                </p>
              </h5>
            </div>
            <div id="skills-section">
              <h2 id="skills-title">Skills</h2>
            </div>
            <hr />
          </Container>
          <Container id="projects-section">
            <h1 className="projects-title">1. Projects</h1>
            <div className="portfolio">
              <div className="portfolio-items">
                {/* <div id="swapi-project">
                  <StarWarsAPISVG />
                </div> */}
                <div>
                  <BattleshipInfo />
                </div>
                <div id="battleship-project">
                  <BattleshipSVG />
                </div>

                {/* <div id="snake-project">
                  <SnakeGameSVG />
                </div>
                <div id="expense-tracker-project">
                  <ExpenseTrackerSVG />
                </div> */}
              </div>
            </div>
            <hr />
            <div id="resume-section">
              <h1 id="resume-title">2. Resume</h1>
              <div>
                <p id="resume-text">Have an opportunity you can use me for? </p>
                <p id="resume-text">Be sure to check out my resume!</p>
              </div>
              <Button
                id="resume-button"
                type="button"
                href="https://drive.google.com/file/d/1whj-0qPem-W9Qik1SVKQk0ywHOPS6gz3/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img id="resume-icon" src={ResumeIcon} alt="resume" />
              </Button>
            </div>
            <hr className="above-footer-hr" />
          </Container>
        </main>
        <footer>
          <Container id="contact-section">
            <div className="contact-info">
              <h1 id="contact-title">3. Contact</h1>
              <div>
                <ContactForm />
              </div>
              <hr />
              <div className="contact"></div>{" "}
              <p id="copyright-footer">Built & Designed by: </p>
              <p>© Zack Zellto - 2022</p>
            </div>
          </Container>
        </footer>
        <ContactIconMenu />
      </div>
    </>
  );
}

export default App;
