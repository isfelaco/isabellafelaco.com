import ReactPlayer from "react-player";
import styled from "styled-components";
import projects from "../data/projects.json";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ContentBox from "../components/ContentBox";
import Subpage from "../components/Subpage";

const Description = styled.p`
  text-indent: 50px;
  text-align: left;
  line-height: 25px;
`;

export default function Projects() {
  return (
    <Subpage title="Projects">
      <Row>
        <h2>Projects for OpenGov</h2>
      </Row>
      <Row
        style={{
          display: "flex",
          gap: "25px",
        }}
      >
        {projects.opengov.map((project, index) => (
          <ContentBox key={index} title={project.title}>
            <i>{project.subtitle}</i>
            <ReactPlayer
              url={project.videoUrl}
              controls
              width="fit-content"
              style={{ alignSelf: "center" }}
            />
            <Description>{project.description}</Description>
          </ContentBox>
        ))}
      </Row>

      <Row>
        <h2>Class Projects</h2>
      </Row>
      <Row
        style={{
          display: "flex",
          gap: "25px",
        }}
      >
        {projects.coursework.map((project, index) => (
          <ContentBox key={index} title={project.title}>
            <i>{project.subtitle}</i>
            <Description>{project.description}</Description>
            <ButtonGroup>
              <Button href={project.repository} variant="dark">
                Link to Repository
              </Button>
              {project.url && (
                <Button href={project.url} variant="dark">
                  Link to Site
                </Button>
              )}
            </ButtonGroup>
          </ContentBox>
        ))}
      </Row>
      <Row style={{ display: "flex", gap: "25px" }}>
        <h2>Independent Projects</h2>
        {projects.independent.map((project, index) => (
          <ContentBox key={index} title={project.title}>
            <Description>{project.description}</Description>
            <Button href={project.link} variant="dark">
              Link to Repository
            </Button>
          </ContentBox>
        ))}
      </Row>
      <Row style={{ display: "flex", gap: "25px" }}>
        <h2>Other Projects</h2>
        {projects.other.map((project, index) => (
          <ContentBox key={index} title={project.title}>
            <Description>{project.description}</Description>
          </ContentBox>
        ))}
      </Row>
    </Subpage>
  );
}
