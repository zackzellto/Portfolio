import "./App.css";

import ResponsiveNavbar from "./Navbar.jsx";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <div>
            <ResponsiveNavbar />
          </div>
        </Container>
      </header>
    </div>
  );
}

export default App;
