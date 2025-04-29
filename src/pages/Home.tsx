import Headshot from "../images/Headshot.png";
import { Typography, styled } from "@mui/material";
import Stack from "../components/Stack";

const Title = styled(Typography)(({ theme }) => ({
	textShadow: "2px 3px 0 white, 1px 3px 0 white, 1px 3px 0 white",
	fontStyle: "italic",
	fontWeight: "bold",
	letterSpacing: theme.spacing(1),
	animation: "growSpacingLarge 2s",
	fontSize: theme.spacing(10),

	[theme.breakpoints.down("md")]: {
		fontSize: theme.typography.h1.fontSize,
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: theme.typography.h2.fontSize,
	},
}));

const Image = styled("img")(({ theme }) => ({
	maxHeight: "700px",
	borderRadius: theme.spacing(1),
	boxShadow: "16px 20px 0 #d4a373, 14px 20px 0 #d4a373, 14px 20px 0 #d4a373",
	[theme.breakpoints.down("md")]: {
		maxHeight: "550px",
	},
	[theme.breakpoints.down("sm")]: {
		maxHeight: "400px",
	},
}));

export default function Home() {
	return (
		<Stack sx={{ alignItems: "center", justifyContent: "center" }}>
			<Title variant="h1" color="primary">
				Isabella Felaco
			</Title>
			<Image src={Headshot} alt="headshot" />
		</Stack>
	);
}
