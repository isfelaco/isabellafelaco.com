import ReactPlayer from "react-player";
import styled from "styled-components";
import projects from "../data/projects.json";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ContentBox from "../components/ContentBox";
import Subpage from "../components/Subpage";
import StyledButton from "../components/Button";
import StyledCarousel from "../components/Carousel";

const Description = styled.p`
	text-indent: 50px;
	text-align: left;
	line-height: 25px;
`;

const Image = styled.img`
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
		<Subpage>
			<StyledCarousel data-bs-theme="dark">
				<StyledCarousel.Item>
					<h2>Projects for OpenGov</h2>
					<div
						style={{
							height: "100%",
							display: "flex",
							gap: "25px",
							flexWrap: "wrap",
						}}
					>
						{projects.opengov.map((project, index) => (
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
							</ContentBox>
						))}
					</div>
				</StyledCarousel.Item>
				<StyledCarousel.Item>
					<h2>Class Projects</h2>
					<div
						style={{
							display: "flex",
							gap: "25px",
							flexWrap: "wrap",
						}}
					>
						{projects.coursework.map((project, index) => (
							<ContentBox key={index} title={project.title}>
								<i>{project.subtitle}</i>
								<Description>{project.description}</Description>
								<ButtonGroup>
									<StyledButton href={project.repository} variant="dark">
										Link to Repository
									</StyledButton>
									{project.url && (
										<StyledButton href={project.url} variant="dark">
											Link to Site
										</StyledButton>
									)}
								</ButtonGroup>
							</ContentBox>
						))}
					</div>
				</StyledCarousel.Item>
				<StyledCarousel.Item>
					<h2>Independent Projects</h2>
					<div style={{ display: "flex", gap: "25px", flexWrap: "wrap" }}>
						{projects.independent.map((project, index) => (
							<ContentBox key={index} title={project.title}>
								<Description>{project.description}</Description>
								<StyledButton href={project.link} variant="dark">
									Link to Repository
								</StyledButton>
							</ContentBox>
						))}
					</div>
				</StyledCarousel.Item>
				<StyledCarousel.Item>
					<h2>Other Projects</h2>
					<div style={{ display: "flex", gap: "25px", flexWrap: "wrap" }}>
						{projects.other.map((project, index) => (
							<ContentBox key={index} title={project.title}>
								<Description>{project.description}</Description>
							</ContentBox>
						))}
					</div>
				</StyledCarousel.Item>
			</StyledCarousel>
		</Subpage>
	);
}
