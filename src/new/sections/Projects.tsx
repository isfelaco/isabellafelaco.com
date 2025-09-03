import { Typography, Box, ButtonGroup, Button } from "@mui/material";
import Card from "../components/Card";
import { projects, Project } from "../data";
import ReactPlayer from "react-player";
import { getImageUrl, Image } from "../../pages/Projects";

const ProjectCard = ({ project }: { project: Project }) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				flex: "0 0 auto",
				gap: 2,
				p: 2,
				border: "1px solid",
				borderColor: "primary.main",
				borderRadius: 2,
				alignItems: "flex-start",
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 2,
					maxWidth: "300px",
				}}
			>
				<Typography fontWeight="bold">{project.title}</Typography>
				{project.description && (
					<Typography variant="body2">{project.description}</Typography>
				)}
				{(project.repository || project.url) && (
					<ButtonGroup>
						{project.repository && (
							<Button href={project.repository} variant="contained">
								Link to Repository
							</Button>
						)}
						{project.url && (
							<Button href={project.url} variant="contained">
								Link to Site
							</Button>
						)}
					</ButtonGroup>
				)}
			</Box>
			<Box
				sx={{ maxWidth: "500px", display: "flex", alignItems: "flex-start" }}
			>
				{project.videoUrl && (
					<ReactPlayer
						url={project.videoUrl}
						controls
						width="fit-content"
						style={{ alignSelf: "center" }}
					/>
				)}
				{project.imageUrl && (
					<Image src={getImageUrl(project.imageUrl)} alt={project.title} />
				)}
			</Box>
		</Box>
	);
};

export default function Projects() {
	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: 2, flexGrow: 1 }}>
			<Typography variant="h3">Projects</Typography>
			<Card>
				{projects.map((project) => (
					<ProjectCard key={project.title} project={project} />
				))}
			</Card>
		</Box>
	);
}
