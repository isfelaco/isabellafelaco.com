import UVAlogo from "../images/UVA-logo.png";
import emailjs from "emailjs-com";
import ContentBox from "../components/ContentBox";
import {
	ButtonGroup,
	Button,
	Typography,
	TextField,
	FormControl,
	styled,
} from "@mui/material";
import Stack from "../components/Stack";

const Image = styled("img")`
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
		<Stack>
			{/* contact column */}
			<ContentBox title="Contact">
				<Typography>isfelaco@gmail.com</Typography>
				<Typography>(508) 507-1856</Typography>
				<ButtonGroup>
					<Button
						variant="contained"
						href="http://linkedin.com/in/isabella-felaco"
						target="_blank"
					>
						View LinkedIn
					</Button>
					<Button
						variant="contained"
						href="https://calendly.com/isfelaco"
						target="_blank"
					>
						Schedule with Calendly
					</Button>
				</ButtonGroup>
				<form onSubmit={sendEmail} style={{ width: "100%" }}>
					<FormControl
						fullWidth
						sx={{ display: "flex", flexDirection: "column", gap: 2 }}
					>
						<Typography variant="h3">Send Email</Typography>
						<input type="hidden" name="contact_number" />
						<TextField label="Name" name="from_name" placeholder="Name" />
						<TextField
							label="Email"
							type="email"
							name="reply_to"
							placeholder="Email"
						/>
						<TextField
							label="Message"
							multiline
							rows={5}
							name="message"
							placeholder="Message"
						/>
						<Button type="submit">Submit</Button>
					</FormControl>
				</form>
			</ContentBox>
			{/* education column */}
			<ContentBox title="Education">
				<Image src={UVAlogo} alt="UVA logo" />
				<Typography>University of Virgina, Charlottesville, VA</Typography>
				<Typography>
					<i>2020-2024</i>
				</Typography>
				<Typography>Bachelor of Science in Computer Science</Typography>
				<Button variant="contained" href="/coursework">
					See relevant coursework
				</Button>
			</ContentBox>
		</Stack>
	);
}
