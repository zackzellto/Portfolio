import "./App.css";
import GitHubLogo from "./media/github-logo.png";
import LinkedInLogo from "./media/linkedin-logo.png";
import EmailLogo from "./media/email-logo.png";
import ResponsiveNavbar from "./Navbar.jsx";
import Container from "react-bootstrap/Container";
import EmailModal from "./components/email-modal";

function App() {
  return (
    <>
      <ResponsiveNavbar />
      <div className="App">
        <header className="App-header">
          <Container>
            <div>
              <h1>Hi. </h1>
              <h1>I'm Zack.</h1>
              <h2>a full-stack software developer.</h2>
            </div>
            <div>
              <h3>Let's get to know eachother!</h3>
            </div>
          </Container>
        </header>
        <main>
          <Container>
            <hr />
            <div className="about">
              <h2>ABOUT ME</h2>
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
            <div className="portfolio">
              PORTFOLIO
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
        </main>
        <footer>
          <Container className="contact-container">
            <div>
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
          </Container>
        </footer>
      </div>
    </>
  );
}

export default App;
