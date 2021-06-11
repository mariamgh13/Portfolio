import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom";
import {Navbar, Container, Nav} from "react-bootstrap";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Parcours from "./components/Parcours";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <HashRouter>
      <ul className="header">
        <li>
          <Link to="#home">Accueil</Link>
        </li>
        <li>
          <Link to="#about">A Propos</Link>
        </li>
        <li>
          <Link to="#skills">Compétences</Link>
        </li>
        <li>
          <Link to="#parcours">Parcours</Link>
        </li>
        <li>
          <Link to="#portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="#contact">Contact</Link>
        </li>
      </ul>

      <div className="content">
        <Router>
          {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/">
              <Home />

              <About />
              <Skills />
              <Parcours />
              <Portfolio />
              <Contact />
            </Route>
          </Switch>
          <Contact />
        </Router>
      </div>
    </HashRouter>
  );
}

export default App;
