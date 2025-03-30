import styled from "styled-components";
import UVAlogo from "../images/UVA-logo.png";
import emailjs from "emailjs-com";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ContentBox from "../components/ContentBox";
import Subpage from "../components/Subpage";
import StyledButton from "../components/Button";

const Image = styled.img`
	height: 75px;
	width: auto;
	align-self: center;
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
		<Subpage>
			<div
				style={{
					display: "flex",
					flexGrow: 1,
					gap: "25px",
					flexWrap: "wrap",
					overflow: "auto",
				}}
			>
				{/* contact column */}
				<ContentBox title="Contact">
					<span>
						<p>isfelaco@gmail.com</p>
						<p>(508) 507-1856</p>
					</span>
					<ButtonGroup>
						<StyledButton
							href="http://linkedin.com/in/isabella-felaco"
							target="_blank"
						>
							View LinkedIn
						</StyledButton>
						<StyledButton href="https://calendly.com/isfelaco" target="_blank">
							Schedule with Calendly
						</StyledButton>
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
						<StyledButton type="submit">Submit</StyledButton>
					</Form>
				</ContentBox>
				{/* education column */}
				<ContentBox title="Education">
					<Image src={UVAlogo} alt="UVA logo" />
					<span>
						<p>University of Virgina, Charlottesville, VA</p>
						<i>2020-2024</i>
						<p>Bachelor of Science in Computer Science</p>
					</span>
					<StyledButton href="#/coursework">
						See relevant coursework
					</StyledButton>
				</ContentBox>
			</div>
		</Subpage>
	);
}
