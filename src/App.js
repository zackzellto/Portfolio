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
import GitIcon from "./media/icons/git-logo.png";
import GitHubIcon from "./media/icons/github-icon.png";
import ContactForm from "./components/contact/contact-form";
import BattleshipInfo from "./components/projects/battleship-info";
import SWAPIInfo from "./components/projects/swapi-info";
import SnakeGameInfo from "./components/projects/snakegame-info";
import ExpenseTrackerInfo from "./components/projects/expense-tracker-info";
import WorkTogether from "./media/lets-work-together.png";
import MyHeadshot from "./media/zack-headshot.png";
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
                <div id="landing-cta-bg"></div>
                <div id="landing-cta">
                  <a href="#contact-section">
                    <Image id="landing-cta-image" src={WorkTogether}></Image>
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </header>
        <main>
          <Container id="about-section">
            <div id="about-bg"></div>
            <div className="about">
              <Container id="about-me-container">
                <Image id="my-headshot" src={MyHeadshot}></Image>

                <div id="about-title">
                  <span id="nav-num">0.</span> About Me
                </div>
                <div id="about-me-info">
                  <p>
                    As a self taught Software Engineer, I've always had a
                    passion for learning. I started my coding journey during my
                    career in IT. I knew that I always had a passion for
                    designing and building incredible solutions for people to
                    use. In Summer '21, I decided to break away from the IT
                    world and pursue a career in Software Engineering. It's paid
                    off dividends in the learning experience alone. Fast-forward
                    to today, I'm a full-stack Software Engineer with a strong
                    desire to bring my skills to the professional world, and I
                    can't wait to see what happens next!
                  </p>
                </div>
              </Container>
            </div>
            <hr />
            <Container id="skills-container">
              <div id="skills-title">Skills</div>

              <div id="skills-section-card">
                <div id="skills-section-card-title">
                  <u id="skills-title-underline">Frontend Frameworks</u>
                </div>
                <div id="skills-section-card-description">
                  React is the primary front-end framework that I use when
                  building my applications, the hooks and components truly make
                  developing applications so much more intuitive.
                </div>

                <Image id="tech-icon" src={ReactIcon}></Image>
              </div>
              <div id="skills-section-card">
                <div id="skills-section-card-title">
                  <u id="skills-title-underline">Frontend Languages</u>
                </div>
                <div id="skills-section-card-description">
                  HTML, CSS & JavaScript are the foundation of all web
                  development languages that I have used in every project I've
                  done.
                </div>

                <Image id="tech-icon" src={HTMLIcon}></Image>

                <Image id="tech-icon" src={CSSIcon}></Image>

                <Image id="tech-icon" src={JavaScriptIcon}></Image>
              </div>

              <div id="skills-section-card">
                <div id="skills-section-card-title">
                  <u id="skills-title-underline">Backend Technologies</u>
                </div>
                <div id="skills-section-card-description">
                  When building a backend to a full-stack application, I use
                  ASP.NET Core and C#.
                </div>

                <Image id="tech-icon" src={DotNetIcon}></Image>

                <Image id="tech-icon" src={CSharpIcon}></Image>
              </div>
              <div id="skills-section-card">
                <div id="skills-section-card-title">
                  <u id="skills-title-underline">Design Frameworks</u>
                </div>
                <div id="skills-section-card-description">
                  Bootstrap is the framework that I use for many projects when
                  it comes to design.
                </div>

                <Image id="tech-icon" src={BootstrapIcon}></Image>
              </div>
              <div id="skills-section-card">
                <div id="skills-section-card-title">
                  <u id="skills-title-underline">Databases</u>
                </div>

                <div id="skills-section-card-description">
                  PostgreSQL is the database that I have used in my learning
                  journey, and I am very comfortable with it.
                </div>

                <Image id="tech-icon" src={PostgreSQLIcon}></Image>
              </div>
              <div id="skills-section-card">
                <div id="skills-section-card-title">
                  <u id="skills-title-underline">Version Control</u>
                </div>

                <div id="skills-section-card-description">
                  Git and GitHub are the two main tools I use to manage version
                  control.
                </div>

                <Image id="tech-icon" src={GitIcon}></Image>

                <Image id="tech-icon" src={GitHubIcon}></Image>
              </div>
            </Container>

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

            <div id="resume-section">
              <div id="above-resume"></div>
              <div id="resume-title">
                <span id="nav-num">2.</span> Resume
              </div>

              <div>
                <p id="resume-text">Have an opportunity you can use me for? </p>
                <p id="resume-text">Be sure to check out my resume!</p>
              </div>
              <Button
                id="resume-button"
                type="button"
                href="https://drive.google.com/file/d/1Cf3VlM7MHSDsA6ecskYsTHbTrk_Ctot7/view?usp=sharing"
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
