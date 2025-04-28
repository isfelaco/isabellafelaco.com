import ReactPlayer from "react-player";
import projects from "../data/projects";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ContentBox from "../components/ContentBox";
import Subpage from "../components/Subpage";
import StyledButton from "../components/Button";
import { Stack, styled, Tab } from "@mui/material";
import { Tabs } from "@mui/material";
import { useState } from "react";

const Description = styled("p")`
	text-indent: 50px;
	text-align: left;
	line-height: 25px;
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
		<Subpage>
			<Tabs
				value={currentTab}
				onChange={(_, newValue) => setCurrentTab(newValue)}
				// variant="fullWidth"
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
					useFlexGap
					direction="row"
					spacing={5}
					sx={{
						display: currentTab === index ? "flex" : "none",
						flexWrap: "wrap",
						flexGrow: 1,
					}}
				>
					{project.map((project, index) => (
						<ContentBox key={index} title={project.title}>
							<i>{project.subtitle}</i>
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
									<StyledButton href={project.repository} variant="dark">
										Link to Repository
									</StyledButton>
								)}
								{project.url && (
									<StyledButton href={project.url} variant="dark">
										Link to Site
									</StyledButton>
								)}
							</ButtonGroup>
						</ContentBox>
					))}
				</Stack>
			))}
		</Subpage>
	);
}
