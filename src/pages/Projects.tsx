import ReactPlayer from "react-player";
import styled from "styled-components";
import projects from "../data/projects.json";
import Header from "../components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ProjectsBox = styled(Col)`
  background: rgb(255, 255, 255, 0.3);
  border: 1px solid white;
  border-radius: 5px;
  padding: 25px;

  justify-content: center;
  align-items: center;

  p {
    text-indent: 50px;
    text-align: left;
    line-height: 25px;
  }
`;

export default function Projects() {
  return (
    <Container>
      <Row>
        <Header title="Projects" />
      </Row>
      <Row style={{ display: "flex", gap: "25px", marginTop: "25px" }}>
        <h1>Projects for OpenGov</h1>
        {projects.opengov.map((project, index) => (
          <ProjectsBox>
            <h2>{project.title}</h2>
            <i>{project.subtitle}</i>
            <ReactPlayer url={project.videoUrl} controls width="fit-content" />
            <p>{project.description}</p>
          </ProjectsBox>
        ))}
      </Row>
      <Row style={{ display: "flex", gap: "25px", marginTop: "25px" }}>
        <h1>Class Projects</h1>
        {projects.coursework.map((project, index) => (
          <ProjectsBox>
            <h2>{project.title}</h2>
            <i>{project.subtitle}</i>
            <p>{project.description}</p>
            <Button href={project.repository} variant="dark">
              Link to Repository
            </Button>
            {project.url && (
              <Button href={project.url} variant="dark">
                Link to Site
              </Button>
            )}
          </ProjectsBox>
        ))}
      </Row>
      <Row style={{ display: "flex", gap: "25px", marginTop: "25px" }}>
        <h1>Independent Projects</h1>
        {projects.independent.map((project, index) => (
          <ProjectsBox>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <Button href={project.link} variant="dark">
              Link to Repository
            </Button>
          </ProjectsBox>
        ))}
      </Row>
      <Row style={{ display: "flex", gap: "25px", marginTop: "25px" }}>
        <h1>Other Projects</h1>
        {projects.other.map((project, index) => (
          <ProjectsBox>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </ProjectsBox>
        ))}
      </Row>
    </Container>
  );
}
