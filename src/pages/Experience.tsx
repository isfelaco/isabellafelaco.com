import styled from "styled-components";
import { Section } from "../components/Section";
import { Column, Row } from "../SharedStyles";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  height: 100%;
  overflow: auto;
`;

const ExperienceRow = styled(Row)`
  flex: 50%;
  overflow: auto;
`;

const ExperienceBox = styled(Column)`
  background: rgb(255, 255, 255, 0.3);
  border: 1px solid white;
  border-radius: 5px;
  justify-content: center;
  padding: 25px;
`;

const Title = styled.div`
  font-size: 25px;
  display: flex;
  justify-content: space-between;
  i {
    text-align: left;
  }
  p {
    width: 50%;
    text-align: right;
    margin: 0;
  }
`;

const Subtitle = styled(Title)`
  font-size: 20px;
`;

const Description = styled.p`
  text-indent: 50px;
  text-align: left;
  line-height: 25px;
  overflow-y: scroll;
`;

export default function Experience() {
  return (
    <Section title="Experience">
      <Content>
        <ExperienceRow>
          <ExperienceBox>
            <Title>
              <i>
                Software Engineer Intern, <b>OpenGov</b>, remote
              </i>
              <p>May 2022 - present</p>
            </Title>
            <Description>
              Since May of last year, I've worked at the company OpenGov as a
              software engineer for the R&D Permitting and Licensing division.
              With the mentorship of{" "}
              <a
                href="http://linkedin.com/in/jennifergoyer"
                target="_blank"
                rel="noreferrer"
              >
                Jennifer Goyer
              </a>
              , I learned to use React, Typescript, and CSS to develop custom UI
              components. I also gained familiarity with SQLPro and have become
              very experienced with Git. I worked full-time the last two
              summers, and part-time during the school years at 10 hours per
              week. As I continue my internship, I look forward to learning more
              about backend development and becoming more proficient in SQLPro.
            </Description>
          </ExperienceBox>
        </ExperienceRow>
        <ExperienceRow gap={25}>
          <ExperienceBox>
            <Subtitle>
              <i>
                Tutor, <b>UVA School of Engineering</b>, Charlottesville, VA
              </i>
              <p>Sept 2021 - May 2022</p>
            </Subtitle>
            <Description>
              In fall of my second year, I began tutoring Chemistry for UVA's
              School of Engineering. It was a learning curve figuring out how to
              teach complex concepts in an understandable manner. The next
              semester when I taught four different computer science courses, I
              was much more adept and the content was more familiar to me. From
              tutoring in computer science, I have become very skilled at
              debugging and trouble-shooting code quickly.
            </Description>
          </ExperienceBox>
          <ExperienceBox>
            <Subtitle>
              <i>
                Tutor, <b>UVA School of Education, America Reads</b>,
                Charlottesville, VA
              </i>
              <p>Sept 2021 - May 2022</p>
            </Subtitle>
            <Description>
              In my second year I had the pleasure of working at Walker Upper
              Elementary School in Charlottesville, VA. There I assisted in a
              5th grade classroom with students of varied learning levels. The
              class consisted of many non-native English speakers that needed
              additional assistance; I would work one-on-one with these students
              so that the teacher could focus on the rest of the class. This
              position taught me a lot about leadership and how to adapt
              people's learning styles in order to best help them.
            </Description>
          </ExperienceBox>
        </ExperienceRow>
      </Content>
    </Section>
  );
}
