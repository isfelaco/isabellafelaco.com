import { styled } from "styled-components";
import Row from "react-bootstrap/Row";
import Subpage from "../components/Subpage";
import Headshot from "../Headshot.png";

const Title = styled.h1`
  /* text */
  color: white;
  text-shadow: 2px 3px 0 #212529, 1px 3px 0 #212529, 1px 3px 0 #212529;
  font-size: 75px;
  font-style: italic;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }

  @media screen and (max-width: 576px) {
    font-size: 25px;
  }

  /* layout */
  background: rgb(255, 255, 255, 0.3);
  border-radius: 50px 50px 50px 50px;
  margin-right: 100px;

  letter-spacing: 10px;
  animation: growSpacingLarge 2s;
`;

const Image = styled.img`
  max-height: 500px;
  width: auto;
  border-radius: 50px;
`;

export default function Home() {
  return (
    <Subpage>
      <Row>
        <Title>Isabella Felaco's Portfolio</Title>
      </Row>
      <Row
        style={{
          justifyContent: "center",
        }}
      >
        <Image src={Headshot} alt="headshot" />
      </Row>
    </Subpage>
  );
}
