import { Typography, Box, styled, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";

const Title = styled(Typography)(({ theme }) => ({
	textShadow: "2px 3px 0 black, 1px 3px 0 black, 1px 3px 0 black",
	fontWeight: "bold",
	letterSpacing: theme.spacing(1),
	animation: "growSpacingLarge 2s",

	[theme.breakpoints.down("md")]: {
		fontSize: theme.typography.h1.fontSize,
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: theme.typography.h2.fontSize,
	},
}));

const Subtitle = styled(Typography)(({ theme }) => ({
	letterSpacing: theme.spacing(0.5),
	animation: "growSpacingSmall 2s",
}));

export default function Header() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				width: "33%",
				mt: 20,
				mb: 20,
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 2,
				}}
			>
				<Title variant="h1">Isabella Felaco</Title>
				<Subtitle variant="body1">Software Engineer</Subtitle>
				<Subtitle variant="body2">
					Specializing in Frontend Development
				</Subtitle>
			</Box>
			<Box sx={{ display: "flex", gap: 2 }}>
				<IconButton href="https://github.com/isfelaco" target="_blank">
					<GitHubIcon color="primary" />
				</IconButton>
				<IconButton
					href="https://linkedin.com/in/isabella-felaco"
					target="_blank"
				>
					<LinkedInIcon color="primary" />
				</IconButton>
				<IconButton href="/Isabella Felaco Resume.pdf" target="_blank">
					<SimCardDownloadIcon color="primary" />
				</IconButton>
			</Box>
		</Box>
	);
}
