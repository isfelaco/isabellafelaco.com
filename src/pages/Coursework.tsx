import React from "react";
import { Section } from "../components/Section";
import { styled } from "styled-components";
import { Row } from "../components/SharedStyles";
import { Button } from "../components/Buttons";
import courses from "../data/courses.json";

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  overflow: auto;
  gap: 20px;
`;

const GridBox = styled.div`
  background: rgb(255, 255, 255, 0.3);
  border: 1px solid white;
  border-radius: 5px;
  padding: 20px;
  // overflow-y: auto;
  li {
    text-align: left;
  }
  display: flex;
  flex-direction: column;
  flex: 1 0 calc(33% - 60px);
  min-height: calc(50% - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Coursework() {
  return (
    <Section title="Course Work">
      <GridContainer>
        {courses.map((item: any, index: number) => (
          <GridBox key={index}>
            <h2>{item.title}</h2>
            <ul>
              {item.description.map((desc: any, idx: number) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
            {item.link && (
              <Button to={item.link} color="pink" text="Link to Repository" />
            )}
          </GridBox>
        ))}
      </GridContainer>
    </Section>
  );
}
