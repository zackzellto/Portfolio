import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveNavbar from "./Navbar.jsx";
import Container from "react-bootstrap/Container";
import SnakeGameSVG from "./components/projects/snake-svg";
import BattleshipSVG from "./components/projects/battleship-svg";
import StarWarsAPISVG from "./components/projects/swapi-svg";
import ExpenseTrackerSVG from "./components/projects/expense-tracker-svg";
import LandingText from "./components/landing-text/landing-text";
import ContactIconMenu from "./components/contact/contact-icon-menu";
import ResumeIcon from "./media/resume-icon.png";
import JavaScriptIcon from "./media/icons/javascript-icon.png";
import CSSIcon from "./media/icons/css-icon.png";
import HTMLIcon from "./media/icons/html-icon.png";
import ReactIcon from "./media/icons/react-icon.png";
import DotNetIcon from "./media/icons/dotnet-icon.png";
import PostgreSQLIcon from "./media/icons/postgresql-icon.png";
import CSharpIcon from "./media/icons/c-sharp-logo.png";
import BootstrapIcon from "./media/icons/bootstrap-icon.png";
import VisualStudioCodeIcon from "./media/icons/visual-studio-code-icon.png";
import VisualStudioIcon from "./media/icons/visual-studio-icon.png";
import GitHubIcon from "./media/icons/github-icon.png";
import ContactForm from "./components/contact/contact-form";
import BattleshipInfo from "./components/projects/battleship-info";
import SWAPIInfo from "./components/projects/swapi-info";
import SnakeGameInfo from "./components/projects/snakegame-info";
import ExpenseTrackerInfo from "./components/projects/expense-tracker-info";
import { Button, Image } from "react-bootstrap";

function App() {
  return (
    <>
      <ResponsiveNavbar />
      <div className="App">
        <header className="App-header">
          <Container id="home-section">
            <div className="header-div1">
              <div>
                <div id="landing-text1">Hi.</div>
                <div id="landing-text3">My name is</div>

                <div>
                  <LandingText />
                </div>
                <div id="landing-text4">
                  <p>
                    I'm a Software Engineer who loves taking concepts & ideas,
                    and turning them into a beautiful experience for people to
                    use.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </header>
        <main>
          <hr />
          <Container id="about-section">
            <div className="about">
              <div id="about-title">
                <span id="nav-num">0.</span> About Me
              </div>
              <br />

              <div>
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
              </div>
            </div>
            <hr />
            <div id="skills-background-div">
              <div id="skills-title">Skills</div>
              <div id="skills-section">
                <div id="react-icon">
                  <Image id="tech-icon" src={ReactIcon}></Image>
                </div>
                <div id="js-icon">
                  <Image id="tech-icon" src={JavaScriptIcon}></Image>
                </div>
                <div id="html-icon">
                  <Image id="tech-icon" src={HTMLIcon}></Image>
                </div>
                <div id="css-icon">
                  <Image id="tech-icon" src={CSSIcon}></Image>
                </div>
                <div id="csharp-icon">
                  <Image id="tech-icon" src={CSharpIcon}></Image>
                </div>
                <div id="dotnet-icon">
                  <Image id="tech-icon" src={DotNetIcon}></Image>
                </div>
                <div id="bootstrap-icon">
                  <Image id="tech-icon" src={BootstrapIcon}></Image>
                </div>
                <div id="postgresql-icon">
                  <Image id="tech-icon" src={PostgreSQLIcon}></Image>
                </div>
                <div id="github-icon">
                  <Image id="tech-icon" src={GitHubIcon}></Image>
                </div>
                <div id="vscode-icon">
                  <Image id="tech-icon" src={VisualStudioCodeIcon}></Image>
                </div>
                <div id="visual-studio-icon">
                  <Image id="tech-icon" src={VisualStudioIcon}></Image>
                </div>
              </div>
            </div>
            <hr />
          </Container>
          <Container id="projects-section">
            <div className="projects-title">
              <span id="nav-num">1.</span> Projects
            </div>
            <div className="portfolio">
              <div className="portfolio-items">
                <div id="swapi-project-bg"></div>
                <div id="swapi-project">
                  <StarWarsAPISVG />
                </div>
                <div id="project-info-container">
                  <SWAPIInfo />
                </div>
                <div id="battleship-project-bg"></div>
                <div id="battleship-project">
                  <BattleshipSVG />
                </div>
                <div id="project-info-container">
                  <BattleshipInfo />
                </div>
                <div id="snake-project-bg"></div>
                <div id="snake-project">
                  <SnakeGameSVG />
                </div>
                <div id="project-info-container">
                  <SnakeGameInfo />
                </div>
                <div id="expense-tracker-project-bg"></div>
                <div id="expense-tracker-project">
                  <ExpenseTrackerSVG />
                </div>
                <div id="project-info-container">
                  <ExpenseTrackerInfo />
                </div>
              </div>
            </div>
            <hr />
            <div id="resume-section">
              <h1 id="resume-title">
                <span id="nav-num">2.</span> Resume
              </h1>
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
              <h1 id="contact-title">
                <span id="nav-num">3.</span> Contact
              </h1>
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
