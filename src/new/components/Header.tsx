import {
	Typography,
	Box,
	styled,
	IconButton,
	useMediaQuery,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import { theme } from "../../theme";

const Title = styled(Typography)(({ theme }) => ({
	textShadow: "2px 3px 0 black, 1px 3px 0 black, 1px 3px 0 black",
	fontWeight: "bold",
	letterSpacing: theme.spacing(1),
	animation: "growSpacingLarge 2s",
	textWrap: "wrap",
	flexShrink: 1,

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
	flexShrink: 1,
	textWrap: "wrap",
}));

export default function Header() {
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				width: isMobile ? "100%" : "33%",
				mt: isMobile ? 10 : 20,
				mb: isMobile ? 0 : 20,
				p: isMobile ? 2 : 0,
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
