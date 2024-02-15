import { Section } from "../components/Section";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { Column, Row } from "../SharedStyles";
import { Button } from "../components/Buttons";
import projects from "../data/projects.json";

const ProjectsBox = styled(Column)`
  background: rgb(255, 255, 255, 0.3);
  border: 1px solid white;
  border-radius: 5px;
  padding: 25px;

  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-basis: 50%;

  h2 {
    margin: 0;
  }
  p {
    text-indent: 50px;
    text-align: left;
    line-height: 25px;
    overflow-y: auto;
  }
`;

export default function Projects() {
  return (
    <Section title="Projects">
      <Column gap={25}>
        <h1>Projects for OpenGov Internship</h1>
        <Row gap={25}>
          {projects.opengov.map((project, index) => (
            <ProjectsBox>
              <h2>{project.title}</h2>
              <i>{project.subtitle}</i>
              <ReactPlayer
                url={project.videoUrl}
                controls
                width="fit-content"
              />
              <p>{project.description}</p>
            </ProjectsBox>
          ))}
        </Row>
        <h1>Class Projects</h1>
        {projects.coursework.map((project, index) => (
          <ProjectsBox>
            <h2>{project.title}</h2>
            <i>{project.subtitle}</i>
            <p>{project.description}</p>
            <Button style="pink" to={project.link} text="Link to Repository" />
          </ProjectsBox>
        ))}
        <h1>Independent Projects</h1>
        {projects.independent.map((project, index) => (
          <ProjectsBox>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <Button style="pink" to={project.link} text="Link to Repository" />
          </ProjectsBox>
        ))}
        <h1>Other Projects</h1>
        {projects.other.map((project, index) => (
          <ProjectsBox>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </ProjectsBox>
        ))}
      </Column>
    </Section>
  );
}
