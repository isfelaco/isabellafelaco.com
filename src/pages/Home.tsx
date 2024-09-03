import { styled } from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const Link = styled(Nav.Link)`
  color: #aa4586;
  font-size: 60px;
  font-weight: bold;
  text-shadow: 1px 1px 0 #ffffff, 1px 1px 0 #ffffff, 1px 1px 0 #ffffff;
  text-align: left;
  text-decoration: none;
  margin-left: 75px;

  letter-spacing: 3px;
  animation: growSpacingSmall 2s;

  transition: 1s;
  &:hover {
    letter-spacing: 10px;
    transition: 0.5s;
    color: #aa4586;
  }

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }

  @media screen and (max-width: 576px) {
    font-size: 25px;
  }
`;

function NavBar() {
  return (
    <Nav className="flex-sm-column">
      <Link as={NavLink} to="/about">
        About
      </Link>
      <Link as={NavLink} to="/experience">
        Experience
      </Link>
      <Link as={NavLink} to="/projects">
        Projects
      </Link>
      <Link as={NavLink} to="/coursework">
        Course Work
      </Link>
    </Nav>
  );
}

const Title = styled.h1`
  /* text */
  color: white;
  text-shadow: 2px 3px 0 #aa4586, 1px 3px 0 #aa4586, 1px 3px 0 #aa4586;
  font-size: 75px;
  font-style: italic;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }

  @media screen and (max-width: 576px) {
    font-size: 25px;
  }

  /* layout */
  background: rgb(255, 255, 255, 0.3);
  border-radius: 0px 50px 50px 0px;
  margin-right: 100px;

  letter-spacing: 10px;
  animation: growSpacingLarge 2s;
`;

export default function Home() {
  return (
    <Container fluid>
      <Row>
        <Title>Isabella Felaco</Title>
      </Row>
      <Row>
        <NavBar />
      </Row>
    </Container>
  );
}
