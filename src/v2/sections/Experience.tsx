import { Box, Typography, Divider, useMediaQuery } from "@mui/material";
import Card from "../components/Card";
import { experiences, ExperienceType } from "../data";
import { theme } from "../../theme";

const ExperienceCard = ({ experience }: { experience: ExperienceType }) => {
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				gap: 2,
				flex: "0 0 auto",
				p: 2,
				border: "1px solid",
				borderColor: "primary.main",
				borderRadius: 2,
				maxWidth: isMobile ? "500px" : "calc(100% - 40px)",
			}}
		>
			<Typography variant="body2" sx={{ flexShrink: 0 }}>
				{experience.duration}
			</Typography>
			<Divider orientation="vertical" sx={{ borderColor: "primary.main" }} />
			<Box sx={{ display: "flex", flexDirection: "column", maxWidth: "500px" }}>
				<Typography fontWeight="bold">
					{experience.position} @ {experience.company}
				</Typography>
				{experience.description && (
					<Typography variant="body2">{experience.description}</Typography>
				)}
			</Box>
		</Box>
	);
};

export default function Experience() {
	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: 2, flexGrow: 1 }}>
			<Typography variant="h3">Experience</Typography>
			<Card>
				{experiences.map((experience) => (
					<ExperienceCard key={experience.id} experience={experience} />
				))}
			</Card>
		</Box>
	);
}
