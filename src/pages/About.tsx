import { Section } from "../components/Section";
import styled from "styled-components";
import UVAlogo from "../UVA-logo.png";
import { Column, Row } from "../SharedStyles";
import emailjs from "emailjs-com";
import { Button } from "../components/Buttons";

const Content = styled.div`
  display: flex;
  gap: 25px;
  height: 100%;
`;

const AboutColumn = styled(Column)`
  background: rgb(255, 255, 255, 0.3);
  border: 1px solid white;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const LeftColumn = styled(AboutColumn)`
  flex: 40%;
  gap: 30px;
`;
const RightColumn = styled(Column)`
  flex: 60%;
  gap: 25px;
`;

const ColumnInfo = styled(AboutColumn)`
  display: flex;
  flex: 50%;
  gap: 20px;
  p,
  h1 {
    margin: 0;
  }
`;
const Image = styled.img`
  width: 75%;
  height: auto;
  align-self: center;
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
      <Content>
        <LeftColumn>
          <Image src={UVAlogo} alt="logo" />
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
        </LeftColumn>
        <RightColumn>
          <ColumnInfo>
            <h1>Contact</h1>
            <p>isf4rjk@virginia.edu</p>
            <p>(508) 507-1856</p>
            <Button
              style="pink"
              to="http://linkedin.com/in/isabella-felaco"
              text="View LinkedIn"
            />
          </ColumnInfo>
          <ColumnInfo>
            <h1>Education</h1>
            <p>University of Virgina, Charlottesville, VA</p>
            <i>2020-2024</i>
            <p>Bachelor of Science in Computer Science</p>
          </ColumnInfo>
        </RightColumn>
      </Content>
    </Section>
  );
}
