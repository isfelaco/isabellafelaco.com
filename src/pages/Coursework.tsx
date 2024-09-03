import { styled } from "styled-components";
import courses from "../data/courses.json";
import Header from "../components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const CourseworkBox = styled(Col)`
  background: rgb(255, 255, 255, 0.3);
  border: 1px solid white;
  border-radius: 5px;
  padding: 20px;

  li {
    text-align: left;
  }

  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
`;

export default function Coursework() {
  return (
    <Container>
      <Row>
        <Header title="Coursework" />
      </Row>
      <Row style={{ display: "flex", gap: "25px" }}>
        {courses.map((item: any, index: number) => (
          <CourseworkBox key={index} className="p-5 g-5">
            <h2>{item.title}</h2>
            <ul>
              {item.description.map((desc: any, idx: number) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
            {item.link && (
              <Button href={item.link} variant="dark">
                Link to Repository
              </Button>
            )}
          </CourseworkBox>
        ))}
      </Row>
    </Container>
  );
}
