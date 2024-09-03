import { pages } from "../App";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { NavLink } from "react-router-dom";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  var backIndex: number = 0;
  var forwardIndex: number = 0;
  Object.keys(pages).find((route, i) => {
    const hashRoute = `#${route}`;
    if (hashRoute === window.location.hash) {
      backIndex = i - 1;
      forwardIndex = i + 1;
      return true;
    }
    return false;
  });
  const back = backIndex > 0;
  const next = forwardIndex < Object.keys(pages).length;
  const lastPage = Object.keys(pages)[backIndex];
  const nextPage = Object.keys(pages)[forwardIndex];

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{
        borderRadius: "5px",
        overflow: "hidden",
      }}
    >
      <Container>
        <Navbar.Brand>{title}</Navbar.Brand>
        <ButtonGroup>
          <>
            {back && (
              <Button href={`#${lastPage}`} variant="outline-dark">
                Back
              </Button>
            )}
          </>
          {next && (
            <Button href={`#${nextPage}`} variant="outline-dark">
              Next
            </Button>
          )}
        </ButtonGroup>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/experience">
              Experience
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/coursework">
              Coursework
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
