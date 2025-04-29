import ReactPlayer from "react-player";
import projects from "../data/projects";
import ContentBox from "../components/ContentBox";
import { Button, ButtonGroup, styled, Tab, Typography } from "@mui/material";
import { Tabs } from "@mui/material";
import { useState } from "react";
import Stack from "../components/Stack";

const Description = styled(Typography)`
	text-indent: 50px;
	text-align: left;
`;

const Image = styled("img")`
	height: 200px;
	width: auto;
`;

export default function Projects() {
	const getImageUrl = (imageUrl: string) => {
		try {
			return require(`../images/${imageUrl}`);
		} catch (e) {
			console.error(`Image ${imageUrl} not found`);
			return null;
		}
	};

	const [currentTab, setCurrentTab] = useState(0);
	return (
		<>
			<Tabs
				value={currentTab}
				onChange={(_, newValue) => setCurrentTab(newValue)}
				variant="scrollable"
				scrollButtons="auto"
			>
				{Object.keys(projects).map((key) => (
					<Tab label={key} key={key} wrapped />
				))}
			</Tabs>
			{Object.entries(projects).map(([key, project], index) => (
				<Stack
					key={index}
					role="tabpanel"
					sx={{ display: currentTab === index ? "flex" : "none" }}
				>
					{project.map((project, index) => (
						<ContentBox key={index} title={project.title}>
							<Typography variant="subtitle1">
								<i>{project.subtitle}</i>
							</Typography>
							{project.videoUrl && (
								<ReactPlayer
									url={project.videoUrl}
									controls
									width="fit-content"
									style={{ alignSelf: "center" }}
								/>
							)}
							{project.imageUrl && (
								<Image
									src={getImageUrl(project.imageUrl)}
									alt={project.title}
								/>
							)}
							<Description>{project.description}</Description>
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
						</ContentBox>
					))}
				</Stack>
			))}
		</>
	);
}
