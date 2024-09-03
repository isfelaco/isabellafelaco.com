import courses from "../data/courses.json";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ContentBox from "../components/ContentBox";
import Subpage from "../components/Subpage";

export default function Coursework() {
  return (
    <Subpage title="Coursework">
      {courses.map((item: any, index: number) => (
        <ContentBox key={index} title={item.title}>
          <ListGroup>
            {item.description.map((desc: any, idx: number) => (
              <ListGroup.Item key={idx} variant="dark">
                {desc}
              </ListGroup.Item>
            ))}
          </ListGroup>
          {item.link && (
            <Button href={item.link} variant="dark">
              Link to Repository
            </Button>
          )}
        </ContentBox>
      ))}
    </Subpage>
  );
}
