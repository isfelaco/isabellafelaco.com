import styled from "styled-components";
import UVAlogo from "../UVA-logo.png";
import emailjs from "emailjs-com";
import Header from "../components/Header";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutColumn = styled(Col)`
  p,
  h1 {
    margin: 0;
  }
  img {
    height: 75px;
    width: auto;
    align-self: center;
  }

  border: 1px solid white;
  border-radius: 5px;
  background: rgb(255, 255, 255, 0.3);

  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export default function About() {
  emailjs.init("iu8xABUMxkhOBMJVM");

  function sendEmail(e: any) {
    e.preventDefault();
    e.target.value = (Math.random() * 100000) | 0;
    emailjs.sendForm("contact_service", "contact_form", e.target).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  return (
    <Container>
      <Row>
        <Header title="About" />
      </Row>
      <Row style={{ display: "flex", gap: "25px" }}>
        {/* contact column */}
        <AboutColumn className="p-5 g-5">
          <h1>Contact</h1>
          <span>
            <p>isfelaco@gmail.com</p>
            <p>(508) 507-1856</p>
          </span>
          <ButtonGroup>
            <Button
              href="http://linkedin.com/in/isabella-felaco"
              target="_blank"
              variant="dark"
            >
              View LinkedIn
            </Button>
            <Button
              href="https://calendly.com/isfelaco"
              target="_blank"
              variant="dark"
            >
              Schedule with Calendly
            </Button>
          </ButtonGroup>
          <Form onSubmit={sendEmail}>
            <h2>Send Email</h2>
            <input type="hidden" name="contact_number" />
            <Form.Group className="mb-3">
              <Form.Control type="text" name="from_name" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="email" name="reply_to" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={5}
                name="message"
                placeholder="Message"
              />
            </Form.Group>
            <Button type="submit" variant="dark">
              Submit
            </Button>
          </Form>
        </AboutColumn>

        {/* education column */}
        <AboutColumn className="p-5 g-5">
          <h1>Education</h1>
          <img src={UVAlogo} alt="UVA logo" />
          <span>
            <p>University of Virgina, Charlottesville, VA</p>
            <i>2020-2024</i>
            <p>Bachelor of Science in Computer Science</p>
          </span>
          <Button href="#/coursework" variant="dark">
            See relevant coursework
          </Button>
        </AboutColumn>
      </Row>
    </Container>
  );
}
