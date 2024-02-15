import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Column } from "../SharedStyles";

const Nav = styled(Column)`
  flex-basis: 30%;
  justify-content: center;
  text-align: left;
  gap: 75px;
  margin-left: 100px;
`;

const Link = styled(NavLink)`
  color: #aa4586;
  font-size: 75px;
  font-weight: bold;
  letter-spacing: 3px;
  text-decoration: none;
  text-shadow: 1px 1px 0 #ffffff, 1px 1px 0 #ffffff, 1px 1px 0 #ffffff;

  @keyframes growSpace {
    0% {
      letter-spacing: 0px;
    }
    100% {
      letter-spacing: 3px;
    }
  }
  letter-spacing: 3px;
  animation: growSpace 2s;

  transition: 1s;
  &:hover {
    letter-spacing: 10px;
    transition: 0.5s;
  }
`;

export default function NavBar() {
  return (
    <Nav>
      <Link to="/about">About</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/coursework">Course Work</Link>
    </Nav>
  );
}
