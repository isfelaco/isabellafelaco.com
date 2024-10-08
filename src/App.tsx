import { ReactElement } from "react";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Coursework from "./pages/Coursework";

export const pages: { [id: string]: ReactElement } = {
  "/": <Home />,
  "/about": <About />,
  "/experience": <Experience />,
  "/projects": <Projects />,
  "/coursework": <Coursework />,
};

export function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          {Object.entries(pages).map(([route, element], i) => (
            <Route path={route} element={element} key={i} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}
