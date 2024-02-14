import { Section } from "../components/Section";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { Column, Row } from "../SharedStyles";

const Content = styled.div`
  display: flex;
  gap: 25px;
  height: 100%;
  overflow-x: scroll;
`;

const ProjectsBox = styled(Column)`
  background: rgb(255, 255, 255, 0.3);
  border: 1px solid white;
  border-radius: 5px;
  padding: 25px;

  justify-content: center;
  align-items: center;
  gap: 20px;
  min-width: 500px;

  h1 {
    margin: 0;
  }
  p {
    text-indent: 50px;
    text-align: left;
    line-height: 25px;
    overflow-y: scroll;
  }
`;

export default function Projects() {
  return (
    <Section title="Projects">
      <Content>
        <ProjectsBox>
          <h1>Date Picker Component</h1>
          <i>Made for OpenGov Inc. in 2022</i>
          <ReactPlayer url="DatePicker.mov" controls width="fit-content" />
          <p>
            This component allows a user to select a date by either typing in
            the input (with auto-formatting), or by selecting a date from the
            calendar, thus auto-populating the input. The user can navigate the
            calendar using the arrow butons, or by selecting the dropdowns. User
            accessibility is included through keyboard naviagation of the
            component and the calendar.
          </p>
        </ProjectsBox>
        <ProjectsBox>
          <h1>Requesting Changes</h1>
          <i>Contributed to for OpenGov Inc. in 2022</i>
          <ReactPlayer url="RequestChanges.mov" controls width="fit-content" />
          <p>
            This workflow is the Requesting Changes function for records. I
            personally contributed much of the frontend code, including the
            custom wrapper components on each page, and the overall layouts.
          </p>
        </ProjectsBox>
        <ProjectsBox>
          <h1>Study Buddy Web Application</h1>
          <i>Contributed to for group course project in 2022</i>
          <p>
            This web application was made to allow users to create a profile via
            Google login and schedule study times with other members. Users can
            search for classes, add specific sections to their schedule, and
            message friends to coordinate study times. Utilized a Heroku
            database and Google Authentication.
          </p>
          <a href="https://github.com/isfelaco/Study-Buddy" target="_blank">
            Link to Repository
          </a>
        </ProjectsBox>
        <ProjectsBox>
          <h1>Aspirations vs. Reality in Engineering</h1>
          <p>
            For this research project, I worked with a small group to analyze
            publicly accessible content of websites for engineering schools and
            departments to compare their curricula to their mission statement.
            This cumulated in crafting a paper describing our research and
            displaying our sources.s
          </p>
        </ProjectsBox>
      </Content>
    </Section>
  );
}
