import { Section } from "../components/Section";
import styled from "styled-components";
import UVAlogo from "../UVA-logo.png";
import { Column, Row } from "../components/SharedStyles";
import emailjs from "emailjs-com";
import { Button } from "../components/Buttons";

const AboutColumn = styled(Column)`
  background: rgb(255, 255, 255, 0.3);
  border: 1px solid white;
  border-radius: 5px;
  justify-content: center;
  align-items: center;

  display: flex;
  gap: 25px;
  padding: 25px;
  p,
  h1 {
    margin: 0;
  }
  img {
    height: 100px;
  }
`;

const EmailForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 75%;
  gap: 10px;

  border: 1px solid white;
  border-radius: 20px;
  padding: 20px;
  background-color: rgb(219, 169, 201, 0.6);
  color: white;

  h2,
  h4 {
    margin: 0;
  }
  label {
    text-align: left;
  }
  textarea,
  input:not(last-child) {
    border: none;
    border-bottom: 1px solid white;
    background: none;
    width: 100%;
    font-family: myFont;
    &:focus {
      outline: none;
    }
  }
  input:last-child {
    color: #aa4586;
    font-weight: bold;
    background: transparent;
    width: 100px;
    border: 1px solid white;
    border-radius: 5px;
    align-self: center;
  }
  textarea {
    height: 50px;
    max-height: 100px;
    resize: vertical;
    border: 1px solid white;
    border-radius: 5px;
  }
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
    <Section title="About">
      <Row gap={25}>
        <AboutColumn>
          <h1>Contact</h1>
          <p>isfelaco@gmail.com</p>
          <p>(508) 507-1856</p>
          <Button
            style="pink"
            to="http://linkedin.com/in/isabella-felaco"
            text="View LinkedIn"
          />
          <EmailForm id="contact-form" onSubmit={sendEmail}>
            <h2>Send Email</h2>
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input type="text" name="from_name" />
            <label>Email</label>
            <input type="email" name="reply_to" />
            <label>Message</label>
            <textarea name="message"></textarea>
            <input type="submit" value="Send" />
          </EmailForm>
        </AboutColumn>
        <AboutColumn>
          <img src={UVAlogo} alt="UVA logo" />
          <h1>Education</h1>
          <p>University of Virgina, Charlottesville, VA</p>
          <i>2020-2024</i>
          <p>Bachelor of Science in Computer Science</p>
          <p>Cumulative GPA: 3.1 / 4.0</p>
          <Button
            style="pink"
            to="/coursework"
            text="See relevant coursework"
          />
        </AboutColumn>
      </Row>
    </Section>
  );
}
