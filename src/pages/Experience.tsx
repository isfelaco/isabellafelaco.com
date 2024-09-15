import styled from "styled-components";
import experiences from "../data/experiences.json";
import ContentBox from "../components/ContentBox";
import Subpage from "../components/Subpage";

const Description = styled.p`
  text-indent: 50px;
  text-align: left;
  line-height: 25px;
`;

export default function Experience() {
  return (
    <Subpage title="Experience">
      {experiences.map((experience, index) => (
        <ContentBox
          key={index}
          title={`${experience.position}, ${experience.organization},
              ${experience.location}`}
        >
          <p>{experience.duration}</p>
          {experience.technologies && (
            <h3>
              <i>
                <b>Technologies:</b> {experience.technologies.join(", ")}
              </i>
            </h3>
          )}
          <Description>{experience.description}</Description>
        </ContentBox>
      ))}
    </Subpage>
  );
}
