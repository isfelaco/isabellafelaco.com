import styled from "styled-components";
import experiences from "../data/experiences.json";
import Header from "../components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ExperienceBox = styled(Col)`
  background: rgb(255, 255, 255, 0.3);
  border: 1px solid white;
  border-radius: 5px;
  justify-content: center;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Description = styled.p`
  text-indent: 50px;
  text-align: left;
  line-height: 25px;
`;

export default function Experience() {
  return (
    <Container>
      <Row>
        <Header title="Experience" />
      </Row>
      <Row style={{ display: "flex", gap: "25px" }}>
        {experiences.map((experience, index) => (
          <ExperienceBox key={index} className="p-5 g-5">
            <h2>
              {experience.position}, <b>{experience.organization}</b>,{" "}
              {experience.location}
            </h2>
            <p>{experience.duration}</p>
            {experience.mentor && (
              <h3>
                <i>
                  Mentor: <b>{experience.mentor}</b>
                </i>
              </h3>
            )}
            {experience.technologies && (
              <h3>
                <i>
                  Technologies: <b>{experience.technologies.join(", ")}</b>
                </i>
              </h3>
            )}
            <Description>{experience.description}</Description>
          </ExperienceBox>
        ))}
      </Row>
    </Container>
  );
}
