import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function Header() {
	return (
		<Navbar expand="lg">
			<Navbar.Brand as={NavLink} to="/">
				Isabella Felaco's Portfolio
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
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
		</Navbar>
	);
}
