import styled from "styled-components";
import experiences from "../data/experiences.json";
import ContentBox from "../components/ContentBox";
import Subpage from "../components/Subpage";
import StyledCarousel from "../components/Carousel";

const Description = styled.p`
	text-indent: 50px;
	text-align: left;
	line-height: 25px;
`;

export default function Experience() {
	return (
		<Subpage>
			<StyledCarousel data-bs-theme="dark">
				{experiences.map((experience, index) => (
					<StyledCarousel.Item key={index}>
						<ContentBox
							title={`${experience.position}, ${experience.organization},
              ${experience.location}`}
						>
							<p>{experience.duration}</p>
							{experience.technologies && (
								<h3>
									<i>
										<b>Technologies:</b> {experience.technologies.join(", ")}
									</i>
								</h3>
							)}
							<Description>{experience.description}</Description>
						</ContentBox>
					</StyledCarousel.Item>
				))}
			</StyledCarousel>
		</Subpage>
	);
}
