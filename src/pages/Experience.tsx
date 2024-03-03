import styled from "styled-components";
import { Section } from "../components/Section";
import { Column, Row } from "../components/SharedStyles";
import experiences from "../data/experiences.json";

const ExperienceBox = styled(Column)`
  background: rgb(255, 255, 255, 0.3);
  border: 1px solid white;
  border-radius: 5px;
  justify-content: center;
  padding: 20px;
  flex-basis: 50%;
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
  overflow-y: auto;
`;

export default function Experience() {
  const firstExperience = experiences[0];
  const lastTwoExperiences = experiences.slice(-2);
  return (
    <Section title="Experience">
      <Row gap={25}>
        <ExperienceBox>
          <Title>
            <i>
              {firstExperience.position}, <b>{firstExperience.organization}</b>,{" "}
              {firstExperience.location}
            </i>
            <p>{firstExperience.duration}</p>
          </Title>
          {firstExperience.mentor && (
            <Subtitle>
              <i>
                Mentor: <b>{firstExperience.mentor}</b>
              </i>
            </Subtitle>
          )}
          {firstExperience.technologies && (
            <Subtitle>
              <i>
                Technologies: <b>{firstExperience.technologies.join(", ")}</b>
              </i>
            </Subtitle>
          )}
          <Description>{firstExperience.description}</Description>
        </ExperienceBox>
        <Column gap={25}>
          {lastTwoExperiences.map((experience, index) => (
            <ExperienceBox key={index}>
              <Title>
                <i>
                  {experience.position}, <b>{experience.organization}</b>,{" "}
                  {experience.location}
                </i>
                <p>{experience.duration}</p>
              </Title>
              {experience.mentor && (
                <Subtitle>
                  <i>
                    Mentor: <b>{experience.mentor}</b>
                  </i>
                </Subtitle>
              )}
              {experience.technologies && (
                <Subtitle>
                  <i>
                    Technologies: <b>{experience.technologies.join(", ")}</b>
                  </i>
                </Subtitle>
              )}
              <Description>{experience.description}</Description>
            </ExperienceBox>
          ))}
        </Column>
      </Row>
    </Section>
  );
}
