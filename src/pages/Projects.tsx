import ReactPlayer from "react-player";
import projects from "../data/projects";
import ContentBox from "../components/ContentBox";
import { Button, ButtonGroup, styled, Typography } from "@mui/material";
import Stack from "../components/Stack";
import MuiTabs, { Tabs, Tab, Panel } from "../components/Tabs";
import React from "react";

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

	return (
		<MuiTabs>
			<Tabs ariaLabel="Projects Tabs">
				{Object.keys(projects).map((key, index) => (
					<Tab label={key} key={key} index={index} />
				))}
			</Tabs>
			{Object.entries(projects).map(([key, project], index) => (
				<Panel key={index} index={index}>
					<Stack>
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
				</Panel>
			))}
		</MuiTabs>
	);
}
